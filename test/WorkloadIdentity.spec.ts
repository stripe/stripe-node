import {expect} from 'chai';
import nock = require('nock');

import {StripeWorkloadIdentityError} from '../src/Error.js';
import {Stripe} from '../src/stripe.core.js';
import {RequestHeaders, ResponseHeaders, StripeRequest} from '../src/Types.js';
import {StripeConfig} from '../src/lib.js';
import {
  HttpClient,
  HttpClientResponse,
  HttpClientResponseInterface,
} from '../src/net/HttpClient.js';
import {NodeWorkloadIdentityTokenTransport} from '../src/net/NodeWorkloadIdentityTokenTransport.js';
import {
  WORKLOAD_IDENTITY_TOKEN_HOST,
  WORKLOAD_IDENTITY_TOKEN_PATH,
  WorkloadIdentityTokenResponse,
  WorkloadIdentityTokenTransport,
} from '../src/net/WorkloadIdentityTokenTransport.js';
import {
  WorkloadIdentityCredentials,
  WorkloadIdentityProvider,
} from '../src/WorkloadIdentity.js';
import {FAKE_API_KEY} from './testUtils.js';

// Obviously fake values: none of these are, or resemble, real credentials.
const FAKE_CLIENT_ID = 'oacli_test_fake_client_id';
const FAKE_LIVE_CLIENT_ID = 'oacli_live_fake_client_id';
const FAKE_ASSERTION = 'fake.workload.identity.assertion';
const FAKE_TOKEN = 'rk_test_fake_granted_key_1';
const FAKE_TOKEN_2 = 'rk_test_fake_granted_key_2';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const StripeConstructor = require('../src/stripe.cjs.node.js') as typeof Stripe;

type RecordedRequest = {
  host: string;
  port: string;
  path: string;
  method: string;
  headers: RequestHeaders;
  body: string;
  protocol: string;
};

type FakeApiResponse = {
  statusCode: number;
  body: Record<string, unknown>;
  headers?: ResponseHeaders;
};

class FakeApiHttpClientResponse extends HttpClientResponse {
  private readonly _body: Record<string, unknown>;

  constructor(
    statusCode: number,
    headers: ResponseHeaders,
    body: Record<string, unknown>
  ) {
    super(statusCode, headers);
    this._body = body;
  }

  getRawResponse(): unknown {
    return {};
  }

  toStream(): unknown {
    throw new Error('not implemented');
  }

  toJSON(): Promise<any> {
    return Promise.resolve(this._body);
  }
}

/** Records resource requests and answers them from a caller-supplied handler. */
class FakeApiHttpClient extends HttpClient {
  readonly requests: RecordedRequest[] = [];

  constructor(
    private readonly _handler: (
      request: RecordedRequest,
      callNumber: number
    ) => FakeApiResponse
  ) {
    super();
  }

  getClientName(): string {
    return 'fake';
  }

  makeRequest(
    host: string,
    port: string,
    path: string,
    method: string,
    headers: RequestHeaders,
    requestData: string,
    protocol: string
  ): Promise<HttpClientResponseInterface> {
    const request: RecordedRequest = {
      host,
      port,
      path,
      method,
      headers,
      body: requestData,
      protocol,
    };
    const callNumber = this.requests.length;
    this.requests.push(request);

    const response = this._handler(request, callNumber);
    return Promise.resolve(
      new FakeApiHttpClientResponse(
        response.statusCode,
        response.headers ?? {},
        response.body
      )
    );
  }

  authorizations(): Array<string | undefined> {
    return this.requests.map(
      (request) => request.headers.Authorization as string | undefined
    );
  }
}

/** Stands in for the fixed-endpoint token exchange transport. */
class FakeTokenTransport implements WorkloadIdentityTokenTransport {
  readonly bodies: string[] = [];
  /** Responses are consumed in order; the last one is reused once exhausted. */
  queue: Array<WorkloadIdentityTokenResponse | Error>;
  /** When set, responses are withheld until `release()` is called. */
  private _gate: Promise<void> | null = null;
  private _openGate: (() => void) | null = null;

  constructor(queue: Array<WorkloadIdentityTokenResponse | Error>) {
    this.queue = queue;
  }

  gate(): void {
    this._gate = new Promise<void>((resolve) => {
      this._openGate = resolve;
    });
  }

  release(): void {
    this._openGate?.();
    this._gate = null;
    this._openGate = null;
  }

  async post(body: string): Promise<WorkloadIdentityTokenResponse> {
    this.bodies.push(body);
    if (this._gate) {
      await this._gate;
    }
    const next =
      this.queue.length > 1 ? this.queue.shift()! : this.queue[0] ?? null;
    if (next instanceof Error) {
      throw next;
    }
    if (!next) {
      throw new Error('FakeTokenTransport ran out of responses');
    }
    return next;
  }
}

const tokenResponse = (
  accessToken: string,
  extra: Record<string, unknown> = {}
): WorkloadIdentityTokenResponse => ({
  statusCode: 200,
  body: JSON.stringify({
    access_token: accessToken,
    token_type: 'bearer',
    expires_in: 3600,
    scope: 'workload',
    ...extra,
  }),
});

type FakeProvider = WorkloadIdentityProvider & {calls: number};

const fakeProvider = (
  assertion: string | Error = FAKE_ASSERTION,
  provider = 'aws'
): FakeProvider => {
  const p: FakeProvider = {
    provider: provider as 'aws',
    calls: 0,
    getIdentityAssertion(): Promise<string> {
      p.calls += 1;
      return assertion instanceof Error
        ? Promise.reject(assertion)
        : Promise.resolve(assertion);
    },
  };
  return p;
};

const okHandler = (): FakeApiResponse => ({
  statusCode: 200,
  body: {object: 'list', data: []},
});

const unauthorized: FakeApiResponse = {
  statusCode: 401,
  body: {
    error: {
      type: 'invalid_request_error',
      message: 'Expired API Key provided',
    },
  },
};

type Harness = {
  client: Stripe;
  http: FakeApiHttpClient;
  transport: FakeTokenTransport;
  provider: FakeProvider;
  credentials: WorkloadIdentityCredentials;
};

const buildClient = (
  options: {
    handler?: (request: RecordedRequest, callNumber: number) => FakeApiResponse;
    exchanges?: Array<WorkloadIdentityTokenResponse | Error>;
    provider?: FakeProvider;
    config?: StripeConfig;
    clientId?: string;
  } = {}
): Harness => {
  const http = new FakeApiHttpClient(options.handler ?? okHandler);
  const provider = options.provider ?? fakeProvider();
  const transport = new FakeTokenTransport(
    options.exchanges ?? [tokenResponse(FAKE_TOKEN)]
  );

  const client = StripeConstructor.forWorkloadIdentity(
    options.clientId ?? FAKE_CLIENT_ID,
    provider,
    {
      httpClient: http,
      maxNetworkRetries: 0,
      telemetry: false,
      ...options.config,
    }
  );

  const credentials = client._workloadIdentityCredentials!;
  // Private test seam: the exchange destination is never configurable.
  credentials._transport = transport;

  return {client, http, transport, provider, credentials};
};

describe('workload identity', () => {
  describe('API key construction is unchanged', () => {
    it('still builds a working client from an API key', async () => {
      const http = new FakeApiHttpClient(okHandler);
      const client = new StripeConstructor(FAKE_API_KEY, {
        httpClient: http,
        telemetry: false,
      });

      await client.customers.list();

      expect(client._authMethod).to.deep.equal({
        mode: 'api_key',
        apiKey: FAKE_API_KEY,
      });
      expect(client._workloadIdentityCredentials).to.equal(null);
      expect(http.authorizations()[0]).to.equal(`Bearer ${FAKE_API_KEY}`);
    });

    it('rejects an empty API key rather than entering workload identity mode', () => {
      expect(() => new StripeConstructor('')).to.throw(
        /Neither apiKey nor config.authenticator provided/
      );
      expect(() => new StripeConstructor((null as unknown) as string)).to.throw(
        /Neither apiKey nor config.authenticator provided/
      );
      expect(
        () => new StripeConstructor((undefined as unknown) as string)
      ).to.throw(/Neither apiKey nor config.authenticator provided/);
    });

    it('rejects a workload identity client ID passed as an API key', () => {
      expect(() => new StripeConstructor(FAKE_LIVE_CLIENT_ID))
        .to.throw(StripeWorkloadIdentityError)
        .with.property('message')
        .match(/Stripe\.forWorkloadIdentity/);
    });

    it('keeps a custom authenticator in its own mode', () => {
      const client = new StripeConstructor('', {
        authenticator: (): Promise<void> => Promise.resolve(),
      });
      expect(client._authMethod.mode).to.equal('custom_authenticator');
    });
  });

  describe('forWorkloadIdentity validation', () => {
    it('rejects an absent or empty client ID', () => {
      for (const clientId of ['', '   ', null, undefined]) {
        expect(() =>
          StripeConstructor.forWorkloadIdentity(
            (clientId as unknown) as string,
            fakeProvider()
          )
        ).to.throw(
          StripeWorkloadIdentityError,
          /requires a Stripe OAuth client ID/
        );
      }
    });

    it('rejects a secret API key with a focused error', () => {
      expect(() =>
        StripeConstructor.forWorkloadIdentity('sk_test_123', fakeProvider())
      ).to.throw(StripeWorkloadIdentityError, /A Stripe API key was passed/);
      expect(() =>
        StripeConstructor.forWorkloadIdentity('rk_test_123', fakeProvider())
      ).to.throw(StripeWorkloadIdentityError, /A Stripe API key was passed/);
    });

    it('rejects a malformed client ID', () => {
      expect(() =>
        StripeConstructor.forWorkloadIdentity('ca_123', fakeProvider())
      ).to.throw(
        StripeWorkloadIdentityError,
        /must start with oacli_live_ or oacli_test_/
      );
    });

    it('rejects an invalid provider object', () => {
      expect(() =>
        StripeConstructor.forWorkloadIdentity(
          FAKE_CLIENT_ID,
          (null as unknown) as WorkloadIdentityProvider
        )
      ).to.throw(
        StripeWorkloadIdentityError,
        /requires a workload identity provider/
      );

      expect(() =>
        StripeConstructor.forWorkloadIdentity(FAKE_CLIENT_ID, ({
          provider: 'aws',
        } as unknown) as WorkloadIdentityProvider)
      ).to.throw(StripeWorkloadIdentityError, /getIdentityAssertion\(\)/);

      expect(() =>
        StripeConstructor.forWorkloadIdentity(FAKE_CLIENT_ID, ({
          getIdentityAssertion: () => Promise.resolve('x'),
        } as unknown) as WorkloadIdentityProvider)
      ).to.throw(StripeWorkloadIdentityError, /`provider` identifier/);
    });

    it('rejects unsupported cloud providers', () => {
      for (const provider of ['gcp', 'azure']) {
        expect(() =>
          StripeConstructor.forWorkloadIdentity(
            FAKE_CLIENT_ID,
            fakeProvider(FAKE_ASSERTION, provider)
          )
        ).to.throw(
          StripeWorkloadIdentityError,
          new RegExp(
            `Unsupported workload identity cloud provider '${provider}'`
          )
        );
      }
    });

    it('builds a client in workload identity mode', () => {
      const {client, provider} = buildClient();

      expect(client._authMethod).to.deep.equal({
        mode: 'workload_identity',
        clientId: FAKE_CLIENT_ID,
        identityProvider: provider,
      });
      expect(client.customers).to.be.an('object');
      // Nothing is acquired at construction time.
      expect(provider.calls).to.equal(0);
    });
  });

  describe('token exchange', () => {
    it('exchanges lazily on the first resource request and applies the key', async () => {
      const {client, http, transport, provider} = buildClient();

      expect(transport.bodies).to.have.length(0);

      await client.customers.list();

      expect(provider.calls).to.equal(1);
      expect(transport.bodies).to.have.length(1);
      expect(http.authorizations()).to.deep.equal([`Bearer ${FAKE_TOKEN}`]);
    });

    it('sends the documented form-encoded grant', async () => {
      const {client, transport} = buildClient();

      await client.customers.list();

      const params = new URLSearchParams(transport.bodies[0]);
      expect(params.get('grant_type')).to.equal(
        'urn:ietf:params:oauth:grant-type:jwt-bearer'
      );
      expect(params.get('client_id')).to.equal(FAKE_CLIENT_ID);
      expect(params.get('assertion')).to.equal(FAKE_ASSERTION);
      expect([...params.keys()].sort()).to.deep.equal([
        'assertion',
        'client_id',
        'grant_type',
      ]);
    });

    it('POSTs to the fixed https://api.stripe.com endpoint, ignoring client host config', async () => {
      // The real transport is used here: only the network is faked, so this
      // asserts the destination an assertion is actually sent to.
      let exchangedBody: Record<string, string> | null = null;
      const scope = nock('https://api.stripe.com', {
        reqheaders: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      })
        .post(WORKLOAD_IDENTITY_TOKEN_PATH, (body: Record<string, string>) => {
          exchangedBody = body;
          return true;
        })
        .reply(200, {
          access_token: FAKE_TOKEN,
          token_type: 'bearer',
          expires_in: 3600,
          scope: 'workload',
        });

      const http = new FakeApiHttpClient(okHandler);
      const client = StripeConstructor.forWorkloadIdentity(
        FAKE_CLIENT_ID,
        fakeProvider(),
        {
          httpClient: http,
          telemetry: false,
          // Deliberately hostile client configuration: it must not move the
          // token exchange off api.stripe.com.
          host: 'workload-identity.example.com',
          protocol: 'http',
          port: '1234',
        }
      );

      await client.customers.list();

      expect(scope.isDone()).to.equal(true);
      expect(exchangedBody).to.deep.equal({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        client_id: FAKE_CLIENT_ID,
        assertion: FAKE_ASSERTION,
      });
      expect(http.authorizations()).to.deep.equal([`Bearer ${FAKE_TOKEN}`]);
      // The resource request still honours the configured host.
      expect(http.requests[0].host).to.equal('workload-identity.example.com');
      nock.cleanAll();
    });

    it('reports a rejected exchange with the server-provided code', async () => {
      const {client} = buildClient({
        exchanges: [
          {
            statusCode: 400,
            body: JSON.stringify({
              error: 'invalid_client',
              error_description:
                'service principal not found or not enabled for workload identity',
            }),
          },
        ],
      });

      const err = await client.customers.list().then(
        () => null,
        (e: Error) => e
      );

      expect(err).to.be.an.instanceOf(StripeWorkloadIdentityError);
      expect(err!.message).to.include('invalid_client');
      expect(err!.message).to.include('service principal not found');
      expect(err!.message).to.include('not enabled for workload identity');
      expect((err as StripeWorkloadIdentityError).code).to.equal(
        'invalid_client'
      );
    });

    it('reports a malformed success response without caching it', async () => {
      const {client, credentials} = buildClient({
        exchanges: [
          {statusCode: 200, body: JSON.stringify({token_type: 'bearer'})},
        ],
      });

      const err = await client.customers.list().then(
        () => null,
        (e: Error) => e
      );

      expect(err).to.be.an.instanceOf(StripeWorkloadIdentityError);
      expect(err!.message).to.include('without a usable `access_token`');
      expect(credentials.peekCachedToken()).to.equal(null);
    });

    it('reports an unparseable success response', async () => {
      const {client} = buildClient({
        exchanges: [{statusCode: 200, body: '<html>nope</html>'}],
      });

      await expect(client.customers.list()).to.be.rejectedWith(
        StripeWorkloadIdentityError,
        /without a usable `access_token`/
      );
    });

    it('refuses to follow a redirect away from the token endpoint', async () => {
      const {client} = buildClient({
        exchanges: [{statusCode: 302, body: ''}],
      });

      await expect(client.customers.list()).to.be.rejectedWith(
        StripeWorkloadIdentityError,
        /responded with a redirect \(HTTP 302\), which is not followed/
      );
    });

    it('reports a transport failure', async () => {
      const {client} = buildClient({
        exchanges: [
          Object.assign(new Error('socket hang up'), {code: 'ECONNRESET'}),
        ],
      });

      const err = (await client.customers.list().then(
        () => null,
        (e: Error) => e
      )) as StripeWorkloadIdentityError;

      expect(err).to.be.an.instanceOf(StripeWorkloadIdentityError);
      expect(err.message).to.include(
        'https://api.stripe.com/stripe-workload/oauth2/token'
      );
      expect((err as {cause?: Error}).cause).to.have.property(
        'message',
        'socket hang up'
      );
    });

    it('reports an assertion provider failure with local-development guidance', async () => {
      const {client} = buildClient({
        provider: fakeProvider(new Error('not running on EC2')),
      });

      const err = (await client.customers.list().then(
        () => null,
        (e: Error) => e
      )) as StripeWorkloadIdentityError;

      expect(err).to.be.an.instanceOf(StripeWorkloadIdentityError);
      expect(err.message).to.include(
        'Unable to obtain a aws workload identity assertion'
      );
      expect(err.message).to.include('test API key');
      expect((err as {cause?: Error}).cause).to.have.property(
        'message',
        'not running on EC2'
      );
    });

    it('rejects an empty assertion from the provider', async () => {
      const {client} = buildClient({provider: fakeProvider('')});

      await expect(client.customers.list()).to.be.rejectedWith(
        StripeWorkloadIdentityError,
        /returned an empty assertion/
      );
    });

    it('does not fall back to another authentication mode when it fails', async () => {
      const {client, http} = buildClient({
        exchanges: [
          {statusCode: 400, body: JSON.stringify({error: 'invalid_client'})},
        ],
      });

      await expect(client.customers.list()).to.be.rejected;
      expect(http.requests).to.have.length(0);
    });
  });

  describe('caching and proactive refresh', () => {
    it('reuses the cached key before the refresh threshold', async () => {
      const {client, credentials, transport, provider} = buildClient();
      let now = 1_700_000_000_000;
      credentials._now = (): number => now;

      await client.customers.list();
      // 54 minutes later: still inside the window.
      now += 54 * 60 * 1000;
      await client.customers.list();

      expect(transport.bodies).to.have.length(1);
      expect(provider.calls).to.equal(1);
    });

    it('refreshes proactively once the key is about 55 minutes old', async () => {
      const {client, http, credentials, transport, provider} = buildClient({
        exchanges: [tokenResponse(FAKE_TOKEN), tokenResponse(FAKE_TOKEN_2)],
      });
      let now = 1_700_000_000_000;
      credentials._now = (): number => now;

      await client.customers.list();
      now += 55 * 60 * 1000;
      await client.customers.list();

      expect(transport.bodies).to.have.length(2);
      expect(provider.calls).to.equal(2);
      expect(http.authorizations()).to.deep.equal([
        `Bearer ${FAKE_TOKEN}`,
        `Bearer ${FAKE_TOKEN_2}`,
      ]);
    });

    it('falls back to the standard lifetime when expires_in is missing or malformed', async () => {
      // each case advances a shared fake clock, so the awaits must be sequential
      /* eslint-disable no-await-in-loop */
      for (const expiresIn of [undefined, 'nope', -1, 0, NaN]) {
        const {client, credentials, transport} = buildClient({
          exchanges: [
            tokenResponse(FAKE_TOKEN, {expires_in: expiresIn}),
            tokenResponse(FAKE_TOKEN_2),
          ],
        });
        let now = 1_700_000_000_000;
        credentials._now = (): number => now;

        await client.customers.list();
        now += 54 * 60 * 1000;
        await client.customers.list();
        expect(
          transport.bodies,
          `expires_in=${String(expiresIn)}`
        ).to.have.length(1);

        now += 2 * 60 * 1000;
        await client.customers.list();
        expect(
          transport.bodies,
          `expires_in=${String(expiresIn)}`
        ).to.have.length(2);
      }
      /* eslint-enable no-await-in-loop */
    });

    it('honours a shorter expires_in', async () => {
      const {client, credentials, transport} = buildClient({
        exchanges: [
          tokenResponse(FAKE_TOKEN, {expires_in: 600}),
          tokenResponse(FAKE_TOKEN_2),
        ],
      });
      let now = 1_700_000_000_000;
      credentials._now = (): number => now;

      await client.customers.list();
      now += 4 * 60 * 1000;
      await client.customers.list();
      expect(transport.bodies).to.have.length(1);

      // 600s lifetime - 300s margin = refresh at 5 minutes.
      now += 2 * 60 * 1000;
      await client.customers.list();
      expect(transport.bodies).to.have.length(2);
    });

    it('keeps the key only in memory on the client', async () => {
      const {client, credentials} = buildClient();
      await client.customers.list();

      // The key lives on the credentials object only: it is not written to the
      // client's configuration, its authentication mode, or anywhere on disk.
      expect(credentials.peekCachedToken()).to.equal(FAKE_TOKEN);
      expect(JSON.stringify(client._authMethod)).to.not.include(FAKE_TOKEN);
      const {httpClient, ...api} = client._api;
      expect(JSON.stringify(api)).to.not.include(FAKE_TOKEN);
    });
  });

  describe('single-flight exchange', () => {
    it('collapses simultaneous first requests into one assertion and one exchange', async () => {
      const {client, transport, provider} = buildClient();
      transport.gate();

      const pending = [
        client.customers.list(),
        client.customers.list(),
        client.customers.list(),
      ];
      // Let every request reach the authenticator before the exchange answers.
      await new Promise((resolve) => setImmediate(resolve));
      transport.release();
      await Promise.all(pending);

      expect(provider.calls).to.equal(1);
      expect(transport.bodies).to.have.length(1);
    });

    it('collapses simultaneous refreshes into one exchange', async () => {
      const {client, http, credentials, transport, provider} = buildClient({
        exchanges: [tokenResponse(FAKE_TOKEN), tokenResponse(FAKE_TOKEN_2)],
        // Anything still presenting the first key is rejected.
        handler: (request) =>
          request.headers.Authorization === `Bearer ${FAKE_TOKEN}`
            ? unauthorized
            : okHandler(),
      });

      // Warm the cache with the key that is about to start failing.
      await credentials.getToken();
      expect(transport.bodies).to.have.length(1);

      await Promise.all([client.customers.list(), client.customers.list()]);

      // Two 401s, but only one refresh exchange between them.
      expect(transport.bodies).to.have.length(2);
      expect(provider.calls).to.equal(2);
      expect(http.authorizations()).to.deep.equal([
        `Bearer ${FAKE_TOKEN}`,
        `Bearer ${FAKE_TOKEN}`,
        `Bearer ${FAKE_TOKEN_2}`,
        `Bearer ${FAKE_TOKEN_2}`,
      ]);
    });

    it('clears a failed exchange so a later operation can retry', async () => {
      const {client, transport} = buildClient({
        exchanges: [
          {statusCode: 500, body: JSON.stringify({error: 'server_error'})},
          tokenResponse(FAKE_TOKEN),
        ],
      });

      await expect(client.customers.list()).to.be.rejectedWith(
        StripeWorkloadIdentityError
      );
      expect(transport.bodies).to.have.length(1);

      await client.customers.list();
      expect(transport.bodies).to.have.length(2);
    });

    it('reports one failed exchange to every waiting caller', async () => {
      const {client, transport} = buildClient({
        exchanges: [
          {statusCode: 400, body: JSON.stringify({error: 'invalid_client'})},
        ],
      });
      transport.gate();

      const pending = [
        client.customers.list().catch((e: Error) => e),
        client.customers.list().catch((e: Error) => e),
      ];
      await new Promise((resolve) => setImmediate(resolve));
      transport.release();

      const results = await Promise.all(pending);
      for (const result of results) {
        expect(result).to.be.an.instanceOf(StripeWorkloadIdentityError);
      }
      expect(transport.bodies).to.have.length(1);
    });

    it('does not let a stale failure erase a newer key', async () => {
      const {credentials, transport} = buildClient({
        exchanges: [tokenResponse(FAKE_TOKEN_2)],
      });

      // Simulate a key installed by another request after this one was signed.
      await credentials.getToken();
      transport.queue = [tokenResponse('rk_test_fake_granted_key_3')];

      const token = await credentials.refreshToken(FAKE_TOKEN);

      expect(token).to.equal(FAKE_TOKEN_2);
      expect(credentials.peekCachedToken()).to.equal(FAKE_TOKEN_2);
      expect(transport.bodies).to.have.length(1);
    });
  });

  describe('401 refresh and replay', () => {
    it('refreshes once and replays the request', async () => {
      const {client, http, transport} = buildClient({
        exchanges: [tokenResponse(FAKE_TOKEN), tokenResponse(FAKE_TOKEN_2)],
        handler: (request) =>
          request.headers.Authorization === `Bearer ${FAKE_TOKEN}`
            ? unauthorized
            : okHandler(),
      });

      const customers = await client.customers.list();

      expect(customers.data).to.deep.equal([]);
      expect(transport.bodies).to.have.length(2);
      expect(http.authorizations()).to.deep.equal([
        `Bearer ${FAKE_TOKEN}`,
        `Bearer ${FAKE_TOKEN_2}`,
      ]);
    });

    it('returns the second 401 without refreshing again', async () => {
      const {client, http, transport} = buildClient({
        exchanges: [tokenResponse(FAKE_TOKEN), tokenResponse(FAKE_TOKEN_2)],
        handler: () => unauthorized,
      });

      await expect(client.customers.list()).to.be.rejectedWith(
        /Expired API Key provided/
      );

      expect(http.requests).to.have.length(2);
      expect(transport.bodies).to.have.length(2);
    });

    it('does not refresh for non-401 failures', async () => {
      const {client, http, transport} = buildClient({
        handler: () => ({
          statusCode: 403,
          body: {error: {type: 'invalid_request_error', message: 'nope'}},
        }),
      });

      await expect(client.customers.list()).to.be.rejectedWith(/nope/);

      expect(http.requests).to.have.length(1);
      expect(transport.bodies).to.have.length(1);
    });

    it('stays bounded when network retries are also active', async () => {
      const {client, http, transport} = buildClient({
        config: {maxNetworkRetries: 1},
        exchanges: [tokenResponse(FAKE_TOKEN), tokenResponse(FAKE_TOKEN_2)],
        handler: (_request, callNumber) =>
          callNumber === 0
            ? {
                statusCode: 500,
                body: {error: {type: 'api_error', message: 'try again'}},
              }
            : unauthorized,
      });

      await expect(client.customers.list()).to.be.rejectedWith(
        /Expired API Key provided/
      );

      // 500 -> network retry, 401 -> auth replay, 401 -> give up.
      expect(http.requests).to.have.length(3);
      expect(transport.bodies).to.have.length(2);
    });

    it('preserves the body and idempotency key across the replay', async () => {
      const {client, http, transport} = buildClient({
        exchanges: [tokenResponse(FAKE_TOKEN), tokenResponse(FAKE_TOKEN_2)],
        handler: (request) =>
          request.headers.Authorization === `Bearer ${FAKE_TOKEN}`
            ? unauthorized
            : {statusCode: 200, body: {id: 'cus_fake', object: 'customer'}},
      });

      await client.customers.create({email: 'fake@example.com'});

      expect(http.requests).to.have.length(2);
      expect(http.requests[0].body).to.equal('email=fake%40example.com');
      expect(http.requests[1].body).to.equal(http.requests[0].body);
      expect(http.requests[0].headers['Idempotency-Key']).to.be.a('string');
      expect(http.requests[1].headers['Idempotency-Key']).to.equal(
        http.requests[0].headers['Idempotency-Key']
      );
      expect(transport.bodies).to.have.length(2);
    });

    it('surfaces a workload identity error when the refresh exchange fails', async () => {
      const {client} = buildClient({
        exchanges: [
          tokenResponse(FAKE_TOKEN),
          {
            statusCode: 400,
            body: JSON.stringify({
              error: 'invalid_client',
              error_description: 'client disabled',
            }),
          },
        ],
        handler: () => unauthorized,
      });

      await expect(client.customers.list()).to.be.rejectedWith(
        StripeWorkloadIdentityError,
        /client disabled/
      );
    });

    it('does not replay a request that used a per-request API key override', async () => {
      const {client, http, transport} = buildClient({
        handler: () => unauthorized,
      });

      await expect(
        client.customers.list({}, {apiKey: FAKE_API_KEY})
      ).to.be.rejectedWith(/Expired API Key provided/);

      expect(http.requests).to.have.length(1);
      expect(transport.bodies).to.have.length(0);
    });
  });

  describe('client behaviour is otherwise unchanged', () => {
    it('supports request options, telemetry, and per-request settings', async () => {
      const {client, http} = buildClient({config: {telemetry: true}});

      await client.customers.list({}, {stripeAccount: 'acct_fake'});

      expect(http.requests[0].headers['Stripe-Account']).to.equal('acct_fake');
      expect(http.requests[0].headers['Stripe-Version']).to.be.a('string');
      expect(http.requests[0].headers['User-Agent']).to.include('NodeBindings');
    });

    it('keeps workload identity mode and the shared cache through withStripeContext', async () => {
      const {client, credentials, transport} = buildClient();
      await client.customers.list();

      const scoped = client.withStripeContext(null);

      expect(scoped._authMethod.mode).to.equal('workload_identity');
      expect(scoped._workloadIdentityCredentials).to.equal(credentials);

      await scoped.customers.list();
      expect(transport.bodies).to.have.length(1);
    });
  });

  describe('credential hygiene', () => {
    it('never renders the assertion or the granted key in errors', async () => {
      const cases: Array<Array<WorkloadIdentityTokenResponse | Error>> = [
        [
          {
            statusCode: 400,
            body: JSON.stringify({
              error: 'invalid_client',
              error_description: FAKE_ASSERTION,
            }),
          },
        ],
        [{statusCode: 200, body: JSON.stringify({token_type: 'bearer'})}],
        [Object.assign(new Error('socket hang up'), {code: 'ECONNRESET'})],
      ];

      for (const exchanges of cases) {
        const {client, transport} = buildClient({exchanges});
        // eslint-disable-next-line no-await-in-loop
        const err = (await client.customers.list().then(
          () => null,
          (e: Error) => e
        )) as StripeWorkloadIdentityError;

        // The exchange body really did carry the assertion...
        expect(transport.bodies[0]).to.include(
          encodeURIComponent(FAKE_ASSERTION)
        );
        // ...but nothing rendered from the error may.
        const rendered = [
          err.message,
          String(err),
          err.stack ?? '',
          JSON.stringify(err),
          JSON.stringify(err.raw),
        ].join('\n');

        expect(rendered).to.not.include(FAKE_ASSERTION);
        expect(rendered).to.not.include(FAKE_TOKEN);
        expect(rendered).to.not.include('grant_type=');
        expect(rendered).to.not.include('Authorization');
      }
    });

    it('does not put the granted key in request or response events', async () => {
      const {client} = buildClient({config: {emitEventBodies: true}});
      const events: string[] = [];
      client.on('request', (event: unknown) =>
        events.push(JSON.stringify(event))
      );
      client.on('response', (event: unknown) =>
        events.push(JSON.stringify(event))
      );

      await client.customers.list();

      expect(events).to.have.length.greaterThan(0);
      for (const event of events) {
        expect(event).to.not.include(FAKE_TOKEN);
        expect(event).to.not.include(FAKE_ASSERTION);
      }
    });
  });

  describe('NodeWorkloadIdentityTokenTransport', () => {
    afterEach(() => {
      nock.cleanAll();
    });

    it('posts the body form-encoded to the fixed endpoint', async () => {
      const scope = nock(`https://${WORKLOAD_IDENTITY_TOKEN_HOST}`)
        .post(WORKLOAD_IDENTITY_TOKEN_PATH, {a: 'b'})
        .matchHeader('content-type', 'application/x-www-form-urlencoded')
        .matchHeader('accept', 'application/json')
        .reply(201, '{"ok":true}');

      const response = await new NodeWorkloadIdentityTokenTransport().post(
        'a=b'
      );

      expect(response).to.deep.equal({statusCode: 201, body: '{"ok":true}'});
      expect(scope.isDone()).to.equal(true);
    });

    it('returns a redirect instead of following it', async () => {
      nock(`https://${WORKLOAD_IDENTITY_TOKEN_HOST}`)
        .post(WORKLOAD_IDENTITY_TOKEN_PATH)
        .reply(307, '', {location: 'https://workload-identity.example.com/'});

      const response = await new NodeWorkloadIdentityTokenTransport().post(
        'a=b'
      );

      expect(response.statusCode).to.equal(307);
    });

    it('rejects on a transport error', async () => {
      nock(`https://${WORKLOAD_IDENTITY_TOKEN_HOST}`)
        .post(WORKLOAD_IDENTITY_TOKEN_PATH)
        .replyWithError({code: 'ECONNREFUSED', message: 'refused'});

      await expect(new NodeWorkloadIdentityTokenTransport().post('a=b')).to.be
        .rejected;
    });
  });

  describe('unsupported runtimes', () => {
    it('explains that workload identity needs a supporting runtime', () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const {
        WebPlatformFunctions,
      } = require('../src/platform/WebPlatformFunctions.js');

      expect(() =>
        new WebPlatformFunctions().createWorkloadIdentityTokenTransport()
      ).to.throw(/not available in this runtime/);
    });
  });

  describe('request-level authenticator', () => {
    it('signs requests with the cached key through the normal header', async () => {
      const {client, credentials} = buildClient();
      await client.customers.list();

      const request = {headers: {}} as StripeRequest;
      await client._authenticator!(request);

      expect(request.headers.Authorization).to.equal(
        `Bearer ${credentials.peekCachedToken()}`
      );
    });
  });
});
