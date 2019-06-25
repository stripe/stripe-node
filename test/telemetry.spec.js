'use strict';

require('../testUtils');
const http = require('http');

const expect = require('chai').expect;
let testServer = null;

function createTestServer(handlerFunc, cb) {
  const host = '127.0.0.1';
  testServer = http.createServer((req, res) => {
    try {
      handlerFunc(req, res);
    } catch (e) {
      res.writeHead(400, {'Content-Type': 'application/json'});
      res.end(
        JSON.stringify({
          error: {type: 'invalid_request_error', message: e.message},
        })
      );
    }
  });
  testServer.listen(0, host, () => {
    const port = testServer.address().port;
    cb(host, port);
  });
}

describe('Client Telemetry', () => {
  afterEach(() => {
    if (testServer) {
      testServer.close();
      testServer = null;
    }
  });

  it('Does not send telemetry when disabled', (done) => {
    let numRequests = 0;

    createTestServer(
      (req, res) => {
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
      },
      (host, port) => {
        const stripe = require('../lib/stripe')(
          'sk_test_FEiILxKZwnmmocJDUjUNO6pa'
        );
        stripe.setTelemetryEnabled(false);
        stripe.setHost(host, port, 'http');

        stripe.balance
          .retrieve()
          .then((res) => stripe.balance.retrieve())
          .then((res) => {
            expect(numRequests).to.equal(2);
            done();
          })
          .catch(done);
      }
    );
  });

  it('Sends client telemetry on the second request when enabled', (done) => {
    let numRequests = 0;

    createTestServer(
      (req, res) => {
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
      },
      (host, port) => {
        const stripe = require('../lib/stripe')(
          'sk_test_FEiILxKZwnmmocJDUjUNO6pa'
        );
        stripe.setTelemetryEnabled(true);
        stripe.setHost(host, port, 'http');

        stripe.balance
          .retrieve()
          .then((res) => stripe.balance.retrieve())
          .then((res) => {
            expect(numRequests).to.equal(2);
            done();
          })
          .catch(done);
      }
    );
  });

  it('Buffers metrics on concurrent requests', (done) => {
    let numRequests = 0;

    createTestServer(
      (req, res) => {
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
      },
      (host, port) => {
        const stripe = require('../lib/stripe')(
          'sk_test_FEiILxKZwnmmocJDUjUNO6pa'
        );
        stripe.setTelemetryEnabled(true);
        stripe.setHost(host, port, 'http');

        Promise.all([stripe.balance.retrieve(), stripe.balance.retrieve()])
          .then(() =>
            Promise.all([stripe.balance.retrieve(), stripe.balance.retrieve()])
          )
          .then(() => {
            expect(numRequests).to.equal(4);
            done();
          })
          .catch(done);
      }
    );
  });
});
