// @ts-nocheck

import http = require('http');
import {expect} from 'chai';
import {FAKE_API_KEY} from './testUtils.js';
import {StripeResource} from '../src/StripeResource.js';
let testServer = null;

const createTestServer = (
  handlerFunc: (
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) => Promise<void>
) => {
  const host = '127.0.0.1';
  testServer = http.createServer(async (req, res) => {
    try {
      await handlerFunc(req, res);
    } catch (e) {
      res.writeHead(400, {'Content-Type': 'application/json'});
      res.end(
        JSON.stringify({
          error: {type: 'invalid_request_error', message: e.message},
        })
      );
    }
  });
  return new Promise((resolve) => {
    testServer.listen(0, host, () => {
      const port = testServer.address().port;
      resolve({host, port});
    });
  });
};

describe('Client Telemetry', () => {
  afterEach(() => {
    if (testServer) {
      testServer.close();
      testServer = null;
    }
  });

  it('Does not send telemetry when disabled', async () => {
    let numRequests = 0;

    const handle = (req, res) => {
      numRequests += 1;

      const telemetry = req.headers['x-stripe-client-telemetry'];

      switch (numRequests) {
        case 1:
        case 2:
          expect(telemetry).to.not.exist;
          break;
        default:
          expect.fail(`Should not have reached request ${numRequests}`);
      }

      res.setHeader('Request-Id', `req_${numRequests}`);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end('{}');
    };

    const {host, port} = await createTestServer(handle);
    const stripe = require('../src/stripe.cjs.node.js')(FAKE_API_KEY, {
      telemetry: false,
      host,
      port,
      protocol: 'http',
    });

    await stripe.balance.retrieve();
    await stripe.balance.retrieve();
    expect(numRequests).to.equal(2);
  });

  it('Sends client telemetry on the second request when enabled', async () => {
    let numRequests = 0;
    const handle = (req, res) => {
      numRequests += 1;

      const telemetry = req.headers['x-stripe-client-telemetry'];

      switch (numRequests) {
        case 1:
          expect(telemetry).to.not.exist;
          break;
        case 2:
          expect(telemetry).to.exist;
          expect(
            JSON.parse(telemetry).last_request_metrics.request_id
          ).to.equal('req_1');
          break;
        default:
          expect.fail(`Should not have reached request ${numRequests}`);
      }

      res.setHeader('Request-Id', `req_${numRequests}`);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end('{}');
    };
    const {host, port} = await createTestServer(handle);
    const stripe = require('../src/stripe.cjs.node.js')(
      'sk_test_FEiILxKZwnmmocJDUjUNO6pa',
      {
        telemetry: true,
        host,
        port,
        protocol: 'http',
      }
    );

    await stripe.balance.retrieve();
    await stripe.balance.retrieve();
    expect(numRequests).to.equal(2);
  });
  it('Sends usage telemetry when registered', async () => {
    let numRequests = 0;

    const handle = (req, res) => {
      numRequests += 1;

      const telemetry = req.headers['x-stripe-client-telemetry'];

      switch (numRequests) {
        case 1:
          expect(telemetry).to.not.exist;
          break;
        case 2:
          expect(telemetry).to.exist;
          expect(
            JSON.parse(telemetry).last_request_metrics.request_id
          ).to.equal('req_1');
          expect(
            JSON.parse(telemetry).last_request_metrics.usage
          ).to.deep.equal(['llama', 'bufo']);
          break;
        default:
          expect.fail(`Should not have reached request ${numRequests}`);
      }

      res.setHeader('Request-Id', `req_${numRequests}`);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end('{}');
    };

    const {host, port} = await createTestServer(handle);
    const stripe = require('../src/stripe.cjs.node.js')(
      'sk_test_FEiILxKZwnmmocJDUjUNO6pa',
      {
        telemetry: true,
        host,
        port,
        protocol: 'http',
      }
    );

    const resource = new (StripeResource.extend({
      boop: StripeResource.method({
        method: 'POST',
        fullPath: '/v1/widgets/{widget}/boop',
        usage: ['llama', 'bufo'],
      }),
    }))(stripe);

    await resource.boop('w_123');
    await resource.boop('w_123');
    expect(numRequests).to.equal(2);
  });

  it('Buffers metrics on concurrent requests', async () => {
    let numRequests = 0;

    const handle = (req, res) => {
      numRequests += 1;

      const telemetry = req.headers['x-stripe-client-telemetry'];

      switch (numRequests) {
        case 1:
        case 2:
          expect(telemetry).to.not.exist;
          break;
        case 3:
        case 4:
          expect(telemetry).to.exist;
          expect(
            JSON.parse(telemetry).last_request_metrics.request_id
          ).to.be.oneOf(['req_1', 'req_2']);
          break;
        default:
          expect.fail(`Should not have reached request ${numRequests}`);
      }

      res.setHeader('Request-Id', `req_${numRequests}`);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end('{}');
    };
    const {host, port} = await createTestServer(handle);
    const stripe = require('../src/stripe.cjs.node.js')(
      'sk_test_FEiILxKZwnmmocJDUjUNO6pa',
      {
        telemetry: true,
        host,
        port,
        protocol: 'http',
      }
    );

    await Promise.all([stripe.balance.retrieve(), stripe.balance.retrieve()]);
    await Promise.all([stripe.balance.retrieve(), stripe.balance.retrieve()]);
    expect(numRequests).to.equal(4);
  });
});
