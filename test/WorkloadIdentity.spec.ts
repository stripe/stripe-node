// @ts-nocheck
import {expect} from 'chai';
import nock = require('nock');

import {
  StripeInvalidClientError,
  StripeInvalidGrantError,
  StripeWorkloadIdentityError,
} from '../src/Error.js';
import {createWorkloadIdentityAuthenticator} from '../src/WorkloadIdentities/AwsWorkloadIdentity.js';
import {isWorkloadIdentityAuthenticator} from '../src/utils.js';
import {NodeHttpClient} from '../src/net/NodeHttpClient.js';

const TOKEN_HOST = 'https://api.stripe.com';
const TOKEN_PATH = '/stripe-workload/oauth2/token';
const FAKE_ASSERTION = 'fake.aws.web.identity.token';

const okReply = (accessToken: string, expiresIn = 3600) => ({
  access_token: accessToken,
  expires_in: expiresIn,
});

describe('WorkloadIdentity', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  const makeAuthenticator = (
    fetchAssertion = () => Promise.resolve(FAKE_ASSERTION),
    clientId = 'oacli_123'
  ) =>
    createWorkloadIdentityAuthenticator(
      clientId,
      fetchAssertion,
      new NodeHttpClient()
    );

  const fakeRequest = () => ({
    host: 'api.stripe.com',
    port: '443',
    path: '/v1/charges',
    method: 'GET',
    headers: {} as Record<string, string>,
    body: '',
    protocol: 'https',
  });

  it('is recognized by isWorkloadIdentityAuthenticator, unlike a plain function', () => {
    const authenticator = makeAuthenticator();
    expect(isWorkloadIdentityAuthenticator(authenticator)).to.equal(true);
    expect(isWorkloadIdentityAuthenticator(() => Promise.resolve())).to.equal(
      false
    );
    expect(isWorkloadIdentityAuthenticator(null)).to.equal(false);
  });

  it('exchanges the AWS assertion for a Stripe access token on first use', async () => {
    let assertionCalls = 0;
    const authenticator = makeAuthenticator(() => {
      assertionCalls += 1;
      return Promise.resolve(FAKE_ASSERTION);
    });

    const scope = nock(TOKEN_HOST)
      .post(TOKEN_PATH, (body) => {
        return (
          body.grant_type === 'urn:ietf:params:oauth:grant-type:jwt-bearer' &&
          body.client_id === 'oacli_123' &&
          body.assertion === FAKE_ASSERTION
        );
      })
      .reply(200, okReply('tok_abc'));

    const request = fakeRequest();
    await authenticator(request);

    expect(assertionCalls).to.equal(1);
    expect(request.headers.Authorization).to.equal('Bearer tok_abc');
    scope.done();
  });

  it('does not send Stripe API-key-style Authorization; the exchanged token is opaque', async () => {
    const authenticator = makeAuthenticator();
    nock(TOKEN_HOST)
      .post(TOKEN_PATH)
      .reply(200, okReply('some_opaque_value_without_a_known_prefix'));

    const request = fakeRequest();
    await authenticator(request);
    expect(request.headers.Authorization).to.equal(
      'Bearer some_opaque_value_without_a_known_prefix'
    );
  });

  it('reuses a cached token that has plenty of lifetime left', async () => {
    let exchanges = 0;
    const authenticator = makeAuthenticator();
    nock(TOKEN_HOST)
      .post(TOKEN_PATH)
      .reply(200, () => {
        exchanges += 1;
        return okReply('tok_cached', 3600);
      });

    await authenticator(fakeRequest());
    await authenticator(fakeRequest());
    await authenticator(fakeRequest());

    expect(exchanges).to.equal(1);
  });

  it('refreshes once the cached token is within the 5-minute expiry window', async () => {
    let exchanges = 0;
    const authenticator = makeAuthenticator();
    nock(TOKEN_HOST)
      .post(TOKEN_PATH)
      .twice()
      .reply(200, () => {
        exchanges += 1;
        // 4 minutes left: inside the 5-minute refresh buffer.
        return okReply(`tok_${exchanges}`, 240);
      });

    const req1 = fakeRequest();
    await authenticator(req1);
    expect(req1.headers.Authorization).to.equal('Bearer tok_1');

    const req2 = fakeRequest();
    await authenticator(req2);
    expect(req2.headers.Authorization).to.equal('Bearer tok_2');

    expect(exchanges).to.equal(2);
  });

  it('shares a single in-flight exchange across concurrent callers', async () => {
    let exchanges = 0;
    let assertionCalls = 0;
    const authenticator = makeAuthenticator(() => {
      assertionCalls += 1;
      return Promise.resolve(FAKE_ASSERTION);
    });

    nock(TOKEN_HOST)
      .post(TOKEN_PATH)
      .reply(200, () => {
        exchanges += 1;
        return okReply('tok_shared');
      });

    const [req1, req2, req3] = [fakeRequest(), fakeRequest(), fakeRequest()];
    await Promise.all([
      authenticator(req1),
      authenticator(req2),
      authenticator(req3),
    ]);

    expect(exchanges).to.equal(1);
    expect(assertionCalls).to.equal(1);
    expect(req1.headers.Authorization).to.equal('Bearer tok_shared');
    expect(req2.headers.Authorization).to.equal('Bearer tok_shared');
    expect(req3.headers.Authorization).to.equal('Bearer tok_shared');
  });

  it('rejects every concurrent waiter when the shared refresh fails, without poisoning later attempts', async () => {
    const authenticator = makeAuthenticator();

    nock(TOKEN_HOST)
      .post(TOKEN_PATH)
      .reply(400, {error: 'invalid_grant', error_description: 'expired'});

    const results = await Promise.allSettled([
      authenticator(fakeRequest()),
      authenticator(fakeRequest()),
    ]);
    expect(results[0].status).to.equal('rejected');
    expect(results[1].status).to.equal('rejected');
    expect(results[0].reason).to.be.instanceOf(StripeInvalidGrantError);

    // A later, independent attempt should be able to retry cleanly.
    nock(TOKEN_HOST)
      .post(TOKEN_PATH)
      .reply(200, okReply('tok_after_failure'));
    const request = fakeRequest();
    await authenticator(request);
    expect(request.headers.Authorization).to.equal('Bearer tok_after_failure');
  });

  it('classifies invalid_client responses using the existing OAuth error taxonomy', async () => {
    const authenticator = makeAuthenticator();
    nock(TOKEN_HOST)
      .post(TOKEN_PATH)
      .reply(400, {error: 'invalid_client', error_description: 'bad client'});

    try {
      await authenticator(fakeRequest());
      expect.fail('expected rejection');
    } catch (e) {
      expect(e).to.be.instanceOf(StripeInvalidClientError);
    }
  });

  it('wraps a malformed (non-JSON) success response in a StripeWorkloadIdentityError', async () => {
    const authenticator = makeAuthenticator();
    nock(TOKEN_HOST)
      .post(TOKEN_PATH)
      .reply(200, 'not json');

    try {
      await authenticator(fakeRequest());
      expect.fail('expected rejection');
    } catch (e) {
      expect(e).to.be.instanceOf(StripeWorkloadIdentityError);
    }
  });

  it('wraps a success payload missing access_token/expires_in in a StripeWorkloadIdentityError', async () => {
    const authenticator = makeAuthenticator();
    nock(TOKEN_HOST)
      .post(TOKEN_PATH)
      .reply(200, {access_token: '', expires_in: 3600});

    try {
      await authenticator(fakeRequest());
      expect.fail('expected rejection');
    } catch (e) {
      expect(e).to.be.instanceOf(StripeWorkloadIdentityError);
    }
  });

  it('wraps a transport failure reaching the token endpoint in a StripeWorkloadIdentityError', async () => {
    const authenticator = makeAuthenticator();
    nock(TOKEN_HOST)
      .post(TOKEN_PATH)
      .replyWithError('connection reset');

    try {
      await authenticator(fakeRequest());
      expect.fail('expected rejection');
    } catch (e) {
      expect(e).to.be.instanceOf(StripeWorkloadIdentityError);
    }
  });

  it('wraps an AWS assertion-fetch failure in a StripeWorkloadIdentityError, never reaching Stripe', async () => {
    const scope = nock(TOKEN_HOST)
      .post(TOKEN_PATH)
      .reply(200, okReply('should-not-be-used'));
    const authenticator = makeAuthenticator(() =>
      Promise.reject(
        new Error(
          'AccessDenied: not authorized to perform sts:GetWebIdentityToken'
        )
      )
    );

    try {
      await authenticator(fakeRequest());
      expect.fail('expected rejection');
    } catch (e) {
      expect(e).to.be.instanceOf(StripeWorkloadIdentityError);
      expect(e.message).to.match(/web identity assertion/);
    }
    expect(scope.isDone()).to.equal(false);
  });

  it('never puts the assertion or the exchanged access token anywhere but the Authorization header', async () => {
    const authenticator = makeAuthenticator();
    nock(TOKEN_HOST)
      .post(TOKEN_PATH)
      .reply(200, okReply('tok_secret_value'));

    const request = fakeRequest();
    await authenticator(request);

    // The only place the secret should be observable is the header we set.
    expect(Object.keys(request)).to.deep.equal([
      'host',
      'port',
      'path',
      'method',
      'headers',
      'body',
      'protocol',
    ]);
    expect(String(authenticator)).to.not.include('tok_secret_value');
    expect(Object.keys(authenticator)).to.deep.equal([
      '_isWorkloadIdentity',
      '_invalidate',
    ]);
  });

  describe('_invalidate', () => {
    it('forces the next call to re-exchange even if the cached token is still fresh', async () => {
      let exchanges = 0;
      const authenticator = makeAuthenticator();
      nock(TOKEN_HOST)
        .post(TOKEN_PATH)
        .twice()
        .reply(200, () => {
          exchanges += 1;
          return okReply(`tok_${exchanges}`, 3600);
        });

      await authenticator(fakeRequest());
      expect(exchanges).to.equal(1);

      authenticator._invalidate();

      const request = fakeRequest();
      await authenticator(request);
      expect(exchanges).to.equal(2);
      expect(request.headers.Authorization).to.equal('Bearer tok_2');
    });
  });
});
