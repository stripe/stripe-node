'use strict';

require('../testUtils');
var http = require('http');

var expect = require('chai').expect;
var testServer = null;

describe('Client Telemetry', function() {
  afterEach(function() {
    if (testServer) {
      testServer.close();
      testServer = null;
    }
  });

  it('Sends client telemetry on the second request', function(done) {
    var numRequests = 0;
    testServer = http.createServer(function (req, res) {
      numRequests += 1;

      var telemetry = req.headers['x-stripe-client-telemetry'];
      switch (numRequests) {
      case 1:
        expect(telemetry).to.not.exist;
        break;
      case 2:
        expect(telemetry).to.exist;
        expect(JSON.parse(telemetry).last_request_metrics.request_id)
          .to.eql('req_1');
        break;
      default:
        expect.fail(`Should not have reached request ${numRequests}`);
      }

      res.setHeader('Request-Id', `req_${numRequests}`);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end('{}');
    });

    testServer.listen(0, '127.0.0.1', function() {
      const stripe = require('../lib/stripe')('sk_test_FEiILxKZwnmmocJDUjUNO6pa')

      stripe.setHost('127.0.0.1', testServer.address().port, 'http');

      stripe.balance.retrieve().then(function (res) {
        return stripe.balance.retrieve();
      }).then(function (res) {
        expect(numRequests).to.equal(2);
        done();
      }).catch(done);
    });
  });
});
