import {expect} from 'chai';
import {
  GetWebIdentityTokenCommand,
  GetWebIdentityTokenCommandOutput,
  STSClient,
} from '@aws-sdk/client-sts';

import {
  AwsWorkloadIdentityError,
  STRIPE_WORKLOAD_IDENTITY_AUDIENCE,
  STRIPE_WORKLOAD_IDENTITY_SIGNING_ALGORITHM,
  awsWorkloadIdentity,
} from '../src/index.js';

// Obviously fake: this is not a real signed token.
const FAKE_TOKEN = 'fake.aws.web.identity.token';

type SendResult = Partial<GetWebIdentityTokenCommandOutput> | Error;

const originalSend = STSClient.prototype.send;

/** Replaces the AWS SDK's transport so no request leaves the process. */
const mockSts = (
  result: SendResult
): {commands: GetWebIdentityTokenCommand[]} => {
  const commands: GetWebIdentityTokenCommand[] = [];

  (STSClient.prototype as {send: unknown}).send = function(
    command: GetWebIdentityTokenCommand
  ): Promise<unknown> {
    commands.push(command);
    return result instanceof Error
      ? Promise.reject(result)
      : Promise.resolve(result);
  };

  return {commands};
};

describe('awsWorkloadIdentity', () => {
  afterEach(() => {
    (STSClient.prototype as {send: unknown}).send = originalSend;
  });

  it('identifies itself as an AWS provider', () => {
    expect(awsWorkloadIdentity().provider).to.equal('aws');
  });

  it('does not call AWS until an assertion is requested', () => {
    const {commands} = mockSts({WebIdentityToken: FAKE_TOKEN});
    awsWorkloadIdentity();
    expect(commands).to.have.length(0);
  });

  it('calls GetWebIdentityToken with the Stripe audience and ES384', async () => {
    const {commands} = mockSts({WebIdentityToken: FAKE_TOKEN});

    await awsWorkloadIdentity().getIdentityAssertion();

    expect(commands).to.have.length(1);
    expect(commands[0]).to.be.an.instanceOf(GetWebIdentityTokenCommand);
    expect(commands[0].input).to.deep.equal({
      Audience: ['https://access.stripe.com/wif'],
      SigningAlgorithm: 'ES384',
    });
    expect(STRIPE_WORKLOAD_IDENTITY_AUDIENCE).to.equal(
      'https://access.stripe.com/wif'
    );
    expect(STRIPE_WORKLOAD_IDENTITY_SIGNING_ALGORITHM).to.equal('ES384');
  });

  it('returns the signed token as the identity assertion', async () => {
    mockSts({WebIdentityToken: FAKE_TOKEN});

    const assertion = await awsWorkloadIdentity().getIdentityAssertion();

    expect(assertion).to.equal(FAKE_TOKEN);
  });

  it('requests a fresh token on every call', async () => {
    const {commands} = mockSts({WebIdentityToken: FAKE_TOKEN});
    const provider = awsWorkloadIdentity();

    await provider.getIdentityAssertion();
    await provider.getIdentityAssertion();

    expect(commands).to.have.length(2);
  });

  it('passes through STS client configuration', async () => {
    mockSts({WebIdentityToken: FAKE_TOKEN});

    const provider = awsWorkloadIdentity({
      stsClientConfig: {region: 'us-west-2'},
    });

    expect(await provider.getIdentityAssertion()).to.equal(FAKE_TOKEN);
  });

  for (const [label, response] of [
    ['an empty response', {}],
    ['a missing token', {WebIdentityToken: undefined}],
    ['an empty token', {WebIdentityToken: ''}],
    ['a non-string token', {WebIdentityToken: (42 as unknown) as string}],
  ] as Array<[string, Partial<GetWebIdentityTokenCommandOutput>]>) {
    it(`reports ${label} as an unavailable assertion`, async () => {
      mockSts(response);

      const err = await awsWorkloadIdentity()
        .getIdentityAssertion()
        .then(
          () => null,
          (e: Error) => e
        );

      expect(err).to.be.an.instanceOf(AwsWorkloadIdentityError);
      expect(err!.message).to.include('returned no WebIdentityToken');
      expect(err!.message).to.include('test API key');
    });
  }

  it('preserves the AWS failure as the cause', async () => {
    const awsError = Object.assign(
      new Error('User is not authorized to perform: sts:GetWebIdentityToken'),
      {name: 'AccessDeniedException'}
    );
    mockSts(awsError);

    const err = (await awsWorkloadIdentity()
      .getIdentityAssertion()
      .then(
        () => null,
        (e: Error) => e
      )) as AwsWorkloadIdentityError;

    expect(err).to.be.an.instanceOf(AwsWorkloadIdentityError);
    expect(err.message).to.include('sts:GetWebIdentityToken failed');
    expect(err.message).to.include('AccessDeniedException');
    expect((err as {cause?: unknown}).cause).to.equal(awsError);
  });

  it('explains what to check when the process is not on AWS', async () => {
    mockSts(
      Object.assign(
        new Error('Could not load credentials from any providers'),
        {
          name: 'CredentialsProviderError',
        }
      )
    );

    const err = await awsWorkloadIdentity()
      .getIdentityAssertion()
      .then(
        () => null,
        (e: Error) => e
      );

    expect(err!.message).to.include('running on AWS infrastructure');
    expect(err!.message).to.include('sts:GetWebIdentityToken');
    expect(err!.message).to.include('STS global endpoint');
    expect(err!.message).to.include('mocked Stripe client');
  });

  it('never renders a token or the request in an error message', async () => {
    // A token that is present but unusable is the only failure that happens
    // after AWS produced something, so it is the only place a value could leak.
    mockSts({WebIdentityToken: (FAKE_TOKEN as unknown) as undefined});
    const goodProvider = awsWorkloadIdentity();
    expect(await goodProvider.getIdentityAssertion()).to.equal(FAKE_TOKEN);

    mockSts({WebIdentityToken: ''});
    const emptyErr = (await awsWorkloadIdentity()
      .getIdentityAssertion()
      .then(
        () => null,
        (e: Error) => e
      )) as AwsWorkloadIdentityError;

    mockSts(new Error('Could not load credentials from any providers'));
    const failErr = (await awsWorkloadIdentity()
      .getIdentityAssertion()
      .then(
        () => null,
        (e: Error) => e
      )) as AwsWorkloadIdentityError;

    for (const err of [emptyErr, failErr]) {
      const rendered = [err.message, String(err), err.stack ?? ''].join('\n');
      expect(rendered).to.not.include(FAKE_TOKEN);
      // The request itself is never echoed back.
      expect(rendered).to.not.include('Audience');
      expect(rendered).to.not.include('SigningAlgorithm');
      expect(rendered).to.not.include('Authorization');
    }
  });
});
