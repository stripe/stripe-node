import {expect} from 'chai';
import {RequestEvent, ResponseEvent} from '../src/lib.js';
import {EndpointFetchHttpClient} from '../src/net/EndpointFetchHttpClient.js';
import {ExtensibilityPlatformFunctions} from '../src/platform/ExtensibilityPlatformFunctions.js';
import {NodePlatformFunctions} from '../src/platform/NodePlatformFunctions.js';
import {StripeEventEmitter} from '../src/StripeEventEmitter.js';
import {Stripe} from '../src/stripe.core.js';

type TestGlobal = typeof globalThis & {
  endpointFetch?: (request: {
    endpoint: 'stripe_api';
    path: string;
    method: string;
    body?: string;
    headers?: Record<string, string>;
  }) => Promise<{ok: true; status: number; body?: string}>;
};
type EndpointFetch = NonNullable<TestGlobal['endpointFetch']>;
type EndpointFetchRequest = Parameters<EndpointFetch>[0];
type EndpointFetchError = Error & {
  status?: number;
  body?: string | null;
};
type StripeError = Error & {
  type?: string;
  requestId?: string;
};
type HookEvent =
  | ['request', RequestEvent['method'], RequestEvent['path']]
  | ['response', ResponseEvent['status'], ResponseEvent['request_id']];

describe('ExtensibilityPlatformFunctions', () => {
  const testGlobal = globalThis as TestGlobal;
  let platformFunctions: ExtensibilityPlatformFunctions;
  let endpointFetch$: EndpointFetch | undefined;
  let setTimeout$: typeof globalThis.setTimeout;

  beforeEach(() => {
    platformFunctions = new ExtensibilityPlatformFunctions();
    endpointFetch$ = testGlobal.endpointFetch;
    setTimeout$ = globalThis.setTimeout;
  });

  afterEach(() => {
    Stripe.initialize(new NodePlatformFunctions());

    if (endpointFetch$ === undefined) {
      delete testGlobal.endpointFetch;
    } else {
      testGlobal.endpointFetch = endpointFetch$;
    }

    globalThis.setTimeout = setTimeout$;
  });

  it('uses extensibility runtime defaults', () => {
    expect(platformFunctions.getEnv()).to.be.null;
    expect(platformFunctions.getRuntimeVersion()).to.be.null;
    expect(platformFunctions.getDefaultMaxNetworkRetries()).to.equal(0);
    expect(platformFunctions.createDefaultAuthenticator()).to.be.a('function');
    expect(() => platformFunctions.emitWarning('test')).to.not.throw();
  });

  it('creates a pure-JS emitter', () => {
    expect(platformFunctions.createEmitter()).to.be.an.instanceOf(
      StripeEventEmitter
    );
  });

  it('creates an EndpointFetchHttpClient by default', () => {
    expect(platformFunctions.createDefaultHttpClient()).to.be.an.instanceOf(
      EndpointFetchHttpClient
    );
  });

  it('throws clear unsupported-runtime errors for unavailable helpers', () => {
    expect(() => platformFunctions.createFetchHttpClient()).to.throw(
      /extensibility runtime/
    );
    expect(() => platformFunctions.createNodeHttpClient()).to.throw(
      /extensibility runtime/
    );
    expect(() => platformFunctions.createNodeCryptoProvider()).to.throw(
      /extensibility runtime/
    );
    expect(() => platformFunctions.createDefaultCryptoProvider()).to.throw(
      /explicit `CryptoProvider`/
    );
  });

  it('constructs, emits hooks, and sends requests with platform auth defaults', async () => {
    Stripe.initialize(platformFunctions);
    (globalThis as {setTimeout: unknown}).setTimeout = () => {
      throw new Error('setTimeout should not be called');
    };

    const requests: EndpointFetchRequest[] = [];
    testGlobal.endpointFetch = (request: EndpointFetchRequest) => {
      requests.push(request);
      return Promise.resolve({
        ok: true,
        status: 200,
        body: JSON.stringify({id: 'cus_123', object: 'customer'}),
      });
    };

    const stripe = new Stripe('');
    expect(stripe.getMaxNetworkRetries()).to.equal(0);
    expect(() =>
      stripe.webhooks.generateTestHeaderString({
        payload: '{}',
        secret: 'whsec_test',
      })
    ).to.throw(/createDefaultCryptoProvider/);
    expect(() =>
      stripe.parseEventNotification('{}', 'bad_header', 'whsec_test')
    ).to.throw(/createDefaultCryptoProvider/);

    const events: HookEvent[] = [];
    stripe.on('request', (event: RequestEvent) =>
      events.push(['request', event.method, event.path])
    );
    stripe.once('response', (event: ResponseEvent) =>
      events.push(['response', event.status, event.request_id])
    );

    const customer = await stripe.customers.retrieve('cus_123');
    const request = requests[0];

    expect(customer.id).to.equal('cus_123');
    expect(requests).to.have.length(1);
    expect(request.endpoint).to.equal('stripe_api');
    expect(request.method).to.equal('GET');
    expect(request.path).to.equal('/v1/customers/cus_123');
    expect(request.headers?.Authorization).to.be.undefined;
    expect(events).to.deep.equal([
      ['request', 'GET', '/v1/customers/cus_123'],
      ['response', 200, undefined],
    ]);
  });

  it('preserves typed Stripe API errors from endpointFetch rejections', async () => {
    Stripe.initialize(platformFunctions);
    testGlobal.endpointFetch = () => {
      const error: EndpointFetchError = new Error('Stripe API error');
      error.status = 401;
      error.body = JSON.stringify({
        error: {
          message: 'No API key provided',
          type: 'authentication_error',
        },
      });
      return Promise.reject(error);
    };

    try {
      await new Stripe('').customers.retrieve('cus_123');
      throw new Error('Expected request to fail');
    } catch (err) {
      const error = err as StripeError;
      expect(error.type).to.equal('StripeAuthenticationError');
      expect(error.message).to.equal('No API key provided');
      expect(error.requestId).to.be.undefined;
    }
  });

  it('rejects streaming requests clearly through public SDK requests', async () => {
    Stripe.initialize(platformFunctions);
    testGlobal.endpointFetch = () =>
      Promise.resolve({
        ok: true,
        status: 200,
        body: '{}',
      });

    try {
      await new Stripe('').rawRequest('GET', '/v1/customers', undefined, {
        streaming: true,
      });
      throw new Error('Expected streaming request to fail');
    } catch (err) {
      const error = err as StripeError;
      expect(error.message).to.equal(
        'Stripe: Streaming responses are not supported in this runtime.'
      );
      expect(error.type).to.be.undefined;
    }
  });

  it('preserves clear runtime errors through public SDK requests', async () => {
    Stripe.initialize(platformFunctions);
    delete testGlobal.endpointFetch;

    try {
      await new Stripe('').customers.retrieve('cus_123');
      throw new Error('Expected missing endpointFetch request to fail');
    } catch (err) {
      const error = err as StripeError;
      expect(error.message).to.equal(
        'Stripe: `endpointFetch()` is not available.'
      );
      expect(error.type).to.be.undefined;
    }

    testGlobal.endpointFetch = () =>
      Promise.reject(
        new Error('Should not call endpointFetch for unsupported host')
      );

    try {
      await new Stripe('', {host: 'files.stripe.com'}).customers.retrieve(
        'cus_123'
      );
      throw new Error('Expected unsupported host request to fail');
    } catch (err) {
      const error = err as StripeError;
      expect(error.message).to.match(
        /only supports Stripe API requests to api\.stripe\.com/
      );
      expect(error.type).to.be.undefined;
    }
  });
});
