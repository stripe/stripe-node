'use strict';

var stripe = require('./testUtils').getSpyableStripe();
var expect = require('chai').expect;

var EVENT_PAYLOAD = {
  id: 'evt_test_webhook',
  object: 'event',
};
var EVENT_PAYLOAD_STRING = JSON.stringify(EVENT_PAYLOAD, null, 2);

var SECRET = 'whsec_test_secret';

describe('Webhooks', function() {
  describe('.constructEvent', function() {
    it('should return an Event instance from a valid JSON payload and valid signature header', function() {
      var header = generateHeaderString({
        payload: EVENT_PAYLOAD_STRING,
      });

      var event = stripe.webhooks.constructEvent(EVENT_PAYLOAD_STRING, header, SECRET);

      expect(event.id).to.equal(EVENT_PAYLOAD.id);
    });

    it('should raise a JSON error from invalid JSON payload',
      function() {
        var header = generateHeaderString({
          payload: '} I am not valid JSON; 123][',
        });
        expect(function() {
          stripe.webhooks.constructEvent('} I am not valid JSON; 123][', header, SECRET);
        }).to.throw(/Unexpected token/);
      });

    it('should raise a SignatureVerificationError from a valid JSON payload and an invalid signature header',
      function() {
        var header = 'bad_header';

        expect(function() {
          stripe.webhooks.constructEvent(EVENT_PAYLOAD_STRING, header, SECRET);
        }).to.throw(/Unable to extract timestamp and signatures from header/);
      });
  });

  describe('.verifySignatureHeader', function() {
    it('should raise a SignatureVerificationError when the header does not have the expected format', function() {
      var header = "I'm not even a real signature header";

      var expectedMessage = /Unable to extract timestamp and signatures from header/;

      expect(function() {
        stripe.webhooks.signature.verifyHeader(EVENT_PAYLOAD_STRING, header, SECRET);
      }).to.throw(expectedMessage);

      expect(function() {
        stripe.webhooks.signature.verifyHeader(EVENT_PAYLOAD_STRING, null, SECRET);
      }).to.throw(expectedMessage);

      expect(function() {
        stripe.webhooks.signature.verifyHeader(EVENT_PAYLOAD_STRING, undefined, SECRET);
      }).to.throw(expectedMessage);

      expect(function() {
        stripe.webhooks.signature.verifyHeader(EVENT_PAYLOAD_STRING, '', SECRET);
      }).to.throw(expectedMessage);
    });

    it('should raise a SignatureVerificationError when there are no signatures with the expected scheme', function() {
      var header = generateHeaderString({
        scheme: 'v0',
      });

      expect(function() {
        stripe.webhooks.signature.verifyHeader(EVENT_PAYLOAD_STRING, header, SECRET);
      }).to.throw(/No signatures found with expected scheme/);
    });

    it('should raise a SignatureVerificationError when there are no valid signatures for the payload', function() {
      var header = generateHeaderString({
        signature: 'bad_signature',
      });

      expect(function() {
        stripe.webhooks.signature.verifyHeader(EVENT_PAYLOAD_STRING, header, SECRET);
      }).to.throw(/No signatures found matching the expected signature for payload/);
    });

    it('should raise a SignatureVerificationError when the timestamp is not within the tolerance', function() {
      var header = generateHeaderString({
        timestamp: (Date.now() / 1000) - 15,
      });

      expect(function() {
        stripe.webhooks.signature.verifyHeader(EVENT_PAYLOAD_STRING, header, SECRET, 10);
      }).to.throw(/Timestamp outside the tolerance zone/);
    });

    it('should return true when the header contains a valid signature and ' +
      'the timestamp is within the tolerance',
    function() {
      var header = generateHeaderString({
        timestamp: (Date.now() / 1000),
      });

      expect(stripe.webhooks.signature.verifyHeader(EVENT_PAYLOAD_STRING, header, SECRET, 10)).to.equal(true);
    });

    it('should return true when the header contains at least one valid signature', function() {
      var header = generateHeaderString({
        timestamp: (Date.now() / 1000),
      });

      header += ',v1=potato';

      expect(stripe.webhooks.signature.verifyHeader(EVENT_PAYLOAD_STRING, header, SECRET, 10)).to.equal(true);
    });

    it('should return true when the header contains a valid signature ' +
      'and the timestamp is off but no tolerance is provided',
    function() {
      var header = generateHeaderString({
        timestamp: 12345,
      });

      expect(stripe.webhooks.signature.verifyHeader(EVENT_PAYLOAD_STRING, header, SECRET)).to.equal(true);
    });
  });
});

function generateHeaderString(opts) {
  opts = opts || {};

  opts.timestamp = Math.floor(opts.timestamp) || Math.floor(Date.now() / 1000);
  opts.payload = opts.payload || EVENT_PAYLOAD_STRING;
  opts.secret = opts.secret || SECRET;
  opts.scheme = opts.scheme || stripe.webhooks.signature.EXPECTED_SCHEME;

  opts.signature = opts.signature ||
    stripe.webhooks.signature._computeSignature(opts.timestamp + '.' + opts.payload, opts.secret);

  var generatedHeader = [
    't=' + opts.timestamp,
    opts.scheme + '=' + opts.signature,
  ].join(',');

  return generatedHeader;
}
