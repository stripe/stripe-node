// @ts-nocheck

// NOTE: testUtils should be require'd before anything else in each spec file!

require('mocha');

const http = require('http');

const {CryptoProvider} = require('../src/crypto/CryptoProvider.js');
const {
  NodePlatformFunctions,
} = require('../src/platform/NodePlatformFunctions.js');
const {RequestSender} = require('../src/RequestSender.js');
const {createStripe} = require('../src/stripe.core.js');
const stripe = require('../src/stripe.cjs.node.js');

const testingHttpAgent = new http.Agent({keepAlive: false});

const FAKE_API_KEY = 'sk_test_123';
const utils = (module.exports = {
  FAKE_API_KEY,
  getTestServerStripe: (clientOptions, handler, callback) => {
    const server = http.createServer((req, res) => {
      const {shouldStayOpen} = handler(req, res) || {};
      if (!shouldStayOpen) {
        res.on('close', () => {
          server.close();
        });
      }
    });
    server.listen(0, () => {
      const {port} = server.address();
      const stripe = require('../src/stripe.cjs.node.js')(
        module.exports.getUserStripeKey(),
        {
          host: 'localhost',
          port,
          protocol: 'http',
          httpAgent: testingHttpAgent,
          ...clientOptions,
        }
      );
      return callback(null, stripe, () => {
        server.close();
      });
    });
  },

  getStripeMockClient: () => {
    const stripe = require('../src/stripe.cjs.node.js');

    return stripe(FAKE_API_KEY, {
      host: process.env.STRIPE_MOCK_HOST || 'localhost',
      port: process.env.STRIPE_MOCK_PORT || 12111,
      protocol: 'http',
    });
  },

  getUserStripeKey: () => {
    const key =
      process.env.STRIPE_TEST_API_KEY || 'tGN0bIwXnHdwOa85VABjPdSn8nWY7G7I';

    return key;
  },

  getMockPlatformFunctions: (cb) => {
    class MockPlatformFunctions extends NodePlatformFunctions {
      constructor(cb) {
        super();
        this._exec = cb;
      }
    }

    return new MockPlatformFunctions(cb);
  },

  getMockStripe: (config, request) => {
    class MockRequestSender extends RequestSender {
      _request(
        method,
        host,
        path,
        data,
        auth,
        options = {},
        callback,
        requestDataProcessor = null
      ) {
        return request(
          method,
          host,
          path,
          data,
          auth,
          options,
          callback,
          requestDataProcessor
        );
      }
    }

    // Provide a testable stripe instance
    // That is, with mock-requests built in and hookable
    const stripeFactory = createStripe(
      new NodePlatformFunctions(),
      (stripeInstance) =>
        new MockRequestSender(
          stripeInstance,
          stripe.StripeResource.MAX_BUFFERED_REQUEST_METRICS
        )
    );
    return stripeFactory(FAKE_API_KEY, config);
  },

  createMockClient: (requests) => {
    return utils.getMockStripe(
      {},
      (method, host, path, _4, _5, _6, callback) => {
        const request = requests.find(
          (r) => r.method == method && r.path == path
        );
        if (!request) {
          throw new Error(
            `Unable to find a mock request for ${method} ${path}`
          );
        }

        callback(null, Promise.resolve(JSON.parse(request.response)));
      }
    );
  },

  getSpyableStripe: (config) => {
    class SpyableRequestSender extends RequestSender {
      _request(
        method,
        host,
        path,
        data,
        auth,
        options = {},
        callback,
        requestDataProcessor = null
      ) {
        const req = (stripeInstance.LAST_REQUEST = {
          method,
          url: path,
          data,
          headers: options.headers || {},
          settings: options.settings || {},
        });
        if (auth) {
          req.auth = auth;
        }
        if (host) {
          req.host = host;
        }

        const handleMockRequest = (err, req) => {
          stripeInstance.REQUESTS.push(req);
          callback.call(this, err, {});
        };

        if (requestDataProcessor) {
          requestDataProcessor(
            method,
            data,
            options.headers,
            handleMockRequest
          );
        } else {
          handleMockRequest(null, req);
        }

        return super._request(
          method,
          host,
          path,
          data,
          auth,
          options,
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
  },

  /**
   * Get a random string for test Object creation
   */
  getRandomString: () => {
    return Math.random()
      .toString(36)
      .slice(2);
  },

  FakeCryptoProvider: class extends CryptoProvider {
    computeHMACSignature(payload, secret) {
      return 'fake signature';
    }

    computeHMACSignatureAsync(payload, secret) {
      return Promise.resolve('fake signature');
    }
  },
});

module.exports = utils;
