'use strict';

require('../testUtils');
var http = require('http');

var expect = require('chai').expect;
var testServer = null;

function createTestServer(handlerFunc, cb) {
  var host = '127.0.0.1';
  testServer = http.createServer(function(req, res) {
    try {
      handlerFunc(req, res);
    } catch (e) {
      res.writeHead(400, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({
        error: {type: 'invalid_request_error', message: e.message}
      }));
    }
  });
  testServer.listen(0, host, function() {
    var port = testServer.address().port;
    cb(host, port);
  });
}

describe('Client Telemetry', function() {
  afterEach(function() {
    if (testServer) {
      testServer.close();
      testServer = null;
    }
  });

  it('Does not send telemetry when disabled', function(done) {
    var numRequests = 0;

    createTestServer(function (req, res) {
      numRequests += 1;

      var telemetry = req.headers['x-stripe-client-telemetry'];

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
    }, function(host, port) {
      const stripe = require('../lib/stripe')('sk_test_FEiILxKZwnmmocJDUjUNO6pa')
      stripe.setHost(host, port, 'http');

      stripe.balance.retrieve().then(function (res) {
        return stripe.balance.retrieve();
      }).then(function (res) {
        expect(numRequests).to.equal(2);
        done();
      }).catch(done);
    });
  });

  it('Sends client telemetry on the second request when enabled', function(done) {
    var numRequests = 0;

    createTestServer(function (req, res) {
      numRequests += 1;

      var telemetry = req.headers['x-stripe-client-telemetry'];

      switch (numRequests) {
      case 1:
        expect(telemetry).to.not.exist;
        break;
      case 2:
        expect(telemetry).to.exist;
        expect(JSON.parse(telemetry).last_request_metrics.request_id)
          .to.equal('req_1');
        break;
      default:
        expect.fail(`Should not have reached request ${numRequests}`);
      }

      res.setHeader('Request-Id', `req_${numRequests}`);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end('{}');
    }, function(host, port) {
      const stripe = require('../lib/stripe')('sk_test_FEiILxKZwnmmocJDUjUNO6pa')
      stripe.setTelemetryEnabled(true);
      stripe.setHost(host, port, 'http');

      stripe.balance.retrieve().then(function (res) {
        return stripe.balance.retrieve();
      }).then(function (res) {
        expect(numRequests).to.equal(2);
        done();
      }).catch(done);
    });
  });

  it('Buffers metrics on concurrent requests', function(done) {
    var numRequests = 0;

    createTestServer(function (req, res) {
      numRequests += 1;

      var telemetry = req.headers['x-stripe-client-telemetry'];

      switch (numRequests) {
      case 1:
      case 2:
        expect(telemetry).to.not.exist;
        break;
      case 3:
      case 4:
        expect(telemetry).to.exist;
        expect(JSON.parse(telemetry).last_request_metrics.request_id)
          .to.be.oneOf(['req_1', 'req_2']);
        break;
      default:
        expect.fail(`Should not have reached request ${numRequests}`);
      }

      res.setHeader('Request-Id', `req_${numRequests}`);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end('{}');
    }, function(host, port) {
      const stripe = require('../lib/stripe')('sk_test_FEiILxKZwnmmocJDUjUNO6pa')
      stripe.setTelemetryEnabled(true);
      stripe.setHost(host, port, 'http');

      Promise.all([
        stripe.balance.retrieve(),
        stripe.balance.retrieve()
      ]).then(function() {
        return Promise.all([
          stripe.balance.retrieve(),
          stripe.balance.retrieve()
        ]);
      }).then(function() {
        expect(numRequests).to.equal(4);
        done();
      }).catch(done);
    });
  });
});
