// NOTE: testUtils should be require'd before anything else in each spec file!

require('mocha');
import http = require('http');

import {CryptoProvider} from '../src/crypto/CryptoProvider.js';
import {NodePlatformFunctions} from '../src/platform/NodePlatformFunctions.js';
import {RequestSender} from '../src/RequestSender.js';
import {createStripe} from '../src/stripe.core.js';
import {
  RequestAuthenticator,
  RequestCallback,
  RequestData,
  RequestDataProcessor,
  RequestHeaders,
  RequestOptions,
  RequestSettings,
  StripeObject as StripeClient,
} from '../src/Types.js';
import stripe = require('../src/stripe.cjs.node.js');
import {NodeHttpClient} from '../src/net/NodeHttpClient.js';
import {HttpClientResponseInterface} from '../src/net/HttpClient.js';

const testingHttpAgent = new http.Agent({keepAlive: false});

export const FAKE_API_KEY = 'sk_test_123';
export const getTestServerStripe = (
  clientOptions: RequestSettings,
  handler: (
    req: http.IncomingMessage,
    res: http.ServerResponse,
    nPreviousRequests: number
  ) => {shouldStayOpen?: boolean} | null,
  callback: (
    err: Error | null,
    stripe: StripeClient,
    closeServer: () => void
  ) => void
): void => {
  let nPreviousRequests = 0;
  const server = http.createServer((req, res) => {
    const {shouldStayOpen} = handler(req, res, nPreviousRequests) || {};
    nPreviousRequests += 1;
    if (!shouldStayOpen) {
      res.on('close', () => {
        server.close();
      });
    }
  });
  server.listen(0, () => {
    const {port} = server.address() as any;
    const stripe = require('../src/stripe.cjs.node.js')(FAKE_API_KEY, {
      host: 'localhost',
      port,
      protocol: 'http',
      httpAgent: testingHttpAgent,
      ...clientOptions,
    });
    return callback(null, stripe, () => {
      server.close();
    });
  });
};

export const getStripeMockClient = (): StripeClient => {
  const stripe = require('../src/stripe.cjs.node.js');
  class StripeMockForwardingClient extends NodeHttpClient {
    makeRequest(
      _host: string,
      _port: string,
      path: string,
      method: string,
      headers: RequestHeaders,
      requestData: string,
      _protocol: string,
      timeout: number
    ): Promise<HttpClientResponseInterface> {
      return super.makeRequest(
        process.env.STRIPE_MOCK_HOST || 'localhost',
        (process.env.STRIPE_MOCK_PORT || 12111).toString(),
        path,
        method,
        headers,
        requestData,
        'http',
        timeout
      );
    }
  }

  return stripe(FAKE_API_KEY, {
    httpClient: new StripeMockForwardingClient(),
  });
};

export const getMockPlatformFunctions = (
  cb: CallableFunction
): NodePlatformFunctions => {
  class MockPlatformFunctions extends NodePlatformFunctions {
    constructor(cb: CallableFunction) {
      super();
      this._exec = cb;
    }
  }

  return new MockPlatformFunctions(cb);
};

export const getMockStripe = (
  config: Record<string, unknown>,
  request: RequestSender['_request']
): StripeClient => {
  class MockRequestSender extends RequestSender {
    _request(
      method: string,
      host: string | null,
      path: string,
      data: RequestData,
      authenticator: RequestAuthenticator,
      options: RequestOptions = {} as any,
      usage: Array<string>,
      callback: RequestCallback,
      requestDataProcessor: RequestDataProcessor | null = null
    ) {
      return request(
        method,
        host,
        path,
        data,
        authenticator,
        options,
        usage,
        callback,
        requestDataProcessor
      );
    }
  }

  // Provide a testable stripe instance
  // That is, with mock-requests built in and hookable
  const stripeFactory: any = createStripe(
    new NodePlatformFunctions(),
    (stripeInstance) =>
      new MockRequestSender(
        stripeInstance,
        (stripe as any).StripeResource.MAX_BUFFERED_REQUEST_METRICS
      )
  );
  return stripeFactory(FAKE_API_KEY, config);
};

export const createMockClient = (
  requests: Array<{method: string; path: string; response: string}>
): StripeClient => {
  return getMockStripe({}, (method, _host, path, _4, _5, _6, _7, callback) => {
    const request = requests.find((r) => r.method == method && r.path == path);
    if (!request) {
      throw new Error(`Unable to find a mock request for ${method} ${path}`);
    }

    callback(null, JSON.parse(request.response));
  });
};

export const getSpyableStripe = (
  config: Record<string, unknown>
): StripeClient => {
  class SpyableRequestSender extends RequestSender {
    _request(
      method: string,
      host: string | null,
      path: string,
      data: RequestData,
      authenticator: RequestAuthenticator,
      options: RequestOptions = {} as any,
      usage: Array<string> = [],
      callback: RequestCallback,
      requestDataProcessor: RequestDataProcessor | null = null
    ) {
      type LastRequest = {
        method: string;
        url: string;
        data: RequestData;
        headers: RequestHeaders;
        settings: RequestSettings;
        auth?: string;
        authenticator?: RequestAuthenticator;
        host?: string;
        usage?: Array<string>;
      };
      const req: LastRequest = (stripeInstance.LAST_REQUEST = {
        method,
        url: path,
        data,
        headers: options.headers || {},
        settings: options.settings || {},
      });
      if (usage && usage.length > 1) {
        req.usage = usage;
      }
      if (authenticator) {
        // Extract API key from the api-key authenticator
        if ((authenticator as any)._apiKey) {
          req.auth = (authenticator as any)._apiKey;
        } else {
          req.authenticator = authenticator;
        }
      }
      if (host) {
        req.host = host;
      }

      const handleMockRequest = (
        err: Error | null,
        data: string | LastRequest
      ): void => {
        stripeInstance.REQUESTS.push(data);
        callback(err, {});
      };

      if (requestDataProcessor) {
        requestDataProcessor(method, data, options.headers, handleMockRequest);
      } else {
        handleMockRequest(null, req);
      }

      return super._request(
        method,
        host,
        path,
        data,
        authenticator,
        options,
        usage,
        callback,
        requestDataProcessor
      );
    }
  }

  // Provide a testable stripe instance
  // That is, with mock-requests built in and hookable
  const stripe = require('../src/stripe.cjs.node.js');
  const stripeInstance = stripe(FAKE_API_KEY, config);

  stripeInstance.REQUESTS = [];

  stripeInstance._requestSender = new SpyableRequestSender(
    stripeInstance,
    stripe.StripeResource.MAX_BUFFERED_REQUEST_METRICS
  );

  return stripeInstance;
};

/**
 * Get a random string for test Object creation
 */
export const getRandomString = (): string => {
  return Math.random()
    .toString(36)
    .slice(2);
};

export class FakeCryptoProvider extends CryptoProvider {
  computeHMACSignature(payload: string, secret: string): string {
    return 'fake signature';
  }

  computeHMACSignatureAsync(payload: string, secret: string): Promise<string> {
    return Promise.resolve('fake signature');
  }
}
