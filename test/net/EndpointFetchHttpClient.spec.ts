import {fail} from 'assert';
import {expect} from 'chai';
import {EndpointFetchHttpClient} from '../../src/net/EndpointFetchHttpClient.js';
import {HttpClientRuntimeError} from '../../src/net/HttpClient.js';
import {RequestHeaders} from '../../src/Types.js';

type TestGlobal = typeof globalThis & {
  endpointFetch?: (request: {
    endpoint: 'stripe_api';
    path: string;
    method: string;
    body?: string;
    headers?: Record<string, string>;
  }) => Promise<{
    ok: true;
    status: number;
    body?: string;
  }>;
};
type EndpointFetch = NonNullable<TestGlobal['endpointFetch']>;
type EndpointFetchRequest = Parameters<EndpointFetch>[0];
type EndpointFetchError = Error & {
  status?: number;
  body?: string | null;
};
type JsonParseError = Error & {
  rawBody?: string;
};
type MakeRequestOptions = {
  host?: string;
  port?: string;
  path?: string;
  method?: string;
  headers?: RequestHeaders;
  requestData?: string;
  protocol?: string;
  timeout?: number;
};

describe('EndpointFetchHttpClient', () => {
  const testGlobal = globalThis as TestGlobal;
  let endpointFetch$: EndpointFetch | undefined;
  let capturedRequest: EndpointFetchRequest | null;

  const makeRequest = (options: MakeRequestOptions = {}) => {
    const client = new EndpointFetchHttpClient();
    return client.makeRequest(
      options.host ?? 'api.stripe.com',
      options.port ?? '443',
      options.path ?? '/v1/customers',
      options.method ?? 'GET',
      options.headers ?? {},
      options.requestData ?? '',
      options.protocol ?? 'https',
      options.timeout ?? 1000
    );
  };

  beforeEach(() => {
    endpointFetch$ = testGlobal.endpointFetch;
    capturedRequest = null;
    testGlobal.endpointFetch = (request: EndpointFetchRequest) => {
      capturedRequest = request;
      return Promise.resolve({
        ok: true,
        status: 200,
        body: '{"ok":true}',
      });
    };
  });

  afterEach(() => {
    if (endpointFetch$ === undefined) {
      delete testGlobal.endpointFetch;
    } else {
      testGlobal.endpointFetch = endpointFetch$;
    }
  });

  it('sends method, path, headers, and body to endpointFetch', async () => {
    const response = await makeRequest({
      method: 'POST',
      headers: {'Stripe-Version': '2025-01-01'},
      requestData: 'description=test',
    });

    expect(capturedRequest).to.deep.equal({
      endpoint: 'stripe_api',
      path: '/v1/customers',
      method: 'POST',
      body: 'description=test',
      headers: {'Stripe-Version': '2025-01-01'},
    });
    expect(response.getStatusCode()).to.equal(200);
    expect(response.getHeaders()).to.deep.equal({});
    expect(await response.toJSON()).to.deep.equal({ok: true});
  });

  it('uses an empty string body for payload methods without request data', async () => {
    await makeRequest({method: 'POST'});

    expect(capturedRequest?.body).to.equal('');
  });

  it('stringifies request header values for endpointFetch', async () => {
    await makeRequest({
      headers: {
        'Content-Length': 12,
        'X-Stripe-Client-User-Agent': ['a', 'b'],
      },
    });

    expect(capturedRequest?.headers).to.deep.equal({
      'Content-Length': '12',
      'X-Stripe-Client-User-Agent': 'a, b',
    });
  });

  it('does not send a body for GET requests without request data', async () => {
    await makeRequest();

    expect(capturedRequest).to.not.have.property('body');
  });

  it('throws clearly for streams', async () => {
    const response = await makeRequest();

    expect(() => response.toStream(() => {})).to.throw(
      HttpClientRuntimeError,
      /Streaming responses are not supported/
    );
  });

  it('throws with rawBody when JSON parsing fails', async () => {
    testGlobal.endpointFetch = () =>
      Promise.resolve({
        ok: true,
        status: 500,
        body: '{"a"',
      });
    const response = await makeRequest();

    try {
      await response.toJSON();
      fail();
    } catch (e) {
      const error = e as JsonParseError;
      expect(error.rawBody).to.equal('{"a"');
    }
  });

  it('preserves response-shaped endpointFetch rejections', async () => {
    testGlobal.endpointFetch = () => {
      const error: EndpointFetchError = new Error('Stripe API error');
      error.status = 401;
      error.body =
        '{"error":{"message":"No API key provided","type":"authentication_error"}}';
      return Promise.reject(error);
    };

    const response = await makeRequest();

    expect(response.getStatusCode()).to.equal(401);
    expect(response.getHeaders()).to.deep.equal({});
    expect(await response.toJSON()).to.deep.equal({
      error: {
        message: 'No API key provided',
        type: 'authentication_error',
      },
    });
  });

  it('handles endpointFetch HTTP errors with empty response bodies', async () => {
    testGlobal.endpointFetch = () => {
      const error: EndpointFetchError = new Error('Stripe API error');
      error.status = 400;
      error.body = null;
      return Promise.reject(error);
    };

    const response = await makeRequest();

    expect(response.getStatusCode()).to.equal(400);
    try {
      await response.toJSON();
      fail();
    } catch (e) {
      const error = e as JsonParseError;
      expect(error.rawBody).to.equal('');
    }
  });

  it('handles endpointFetch HTTP errors without response bodies', async () => {
    testGlobal.endpointFetch = () => {
      const error: EndpointFetchError = new Error('Stripe API error');
      error.status = 400;
      return Promise.reject(error);
    };

    const response = await makeRequest();

    expect(response.getStatusCode()).to.equal(400);
    try {
      await response.toJSON();
      fail();
    } catch (e) {
      const error = e as JsonParseError;
      expect(error.rawBody).to.equal('');
    }
  });

  it('rethrows endpointFetch transport failures', async () => {
    testGlobal.endpointFetch = () =>
      Promise.reject(new Error('egress unavailable'));

    try {
      await makeRequest();
      fail();
    } catch (e) {
      const error = e as Error;
      expect(error.message).to.equal('egress unavailable');
    }
  });

  it('rethrows non-object endpointFetch failures', async () => {
    testGlobal.endpointFetch = () =>
      new Promise((resolve, reject) => {
        // eslint-disable-next-line prefer-promise-reject-errors -- endpointFetch is external, so defensive pass-through covers non-Error rejections.
        reject(null);
      });

    try {
      await makeRequest();
      fail();
    } catch (e) {
      expect(e).to.be.null;
    }
  });

  it('throws clearly when endpointFetch is unavailable', async () => {
    delete testGlobal.endpointFetch;

    try {
      await makeRequest();
      fail();
    } catch (e) {
      const error = e as Error;
      expect(error.message).to.contain('`endpointFetch()` is not available');
      expect(error).to.be.an.instanceOf(HttpClientRuntimeError);
    }
  });

  it('throws clearly for unsupported Stripe API hosts', async () => {
    try {
      await makeRequest({host: 'files.stripe.com', path: '/v1/files'});
      fail();
    } catch (e) {
      const error = e as Error;
      expect(error.message).to.contain(
        'only supports Stripe API requests to api.stripe.com'
      );
      expect(error).to.be.an.instanceOf(HttpClientRuntimeError);
    }
    expect(capturedRequest).to.be.null;
  });

  it('throws when path is an absolute URL', async () => {
    try {
      await makeRequest({path: 'https://example.com/steal'});
      fail();
    } catch (e) {
      const error = e as Error;
      expect(error.message).to.match(/Only relative paths are supported/);
    }
  });
});
