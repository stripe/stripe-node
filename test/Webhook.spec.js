'use strict';

const stripe = require('../testUtils').getSpyableStripe();
const expect = require('chai').expect;

const EVENT_PAYLOAD = {
  id: 'evt_test_webhook',
  object: 'event',
};
const EVENT_PAYLOAD_STRING = JSON.stringify(EVENT_PAYLOAD, null, 2);
const SECRET = 'whsec_test_secret';

describe('Webhooks', () => {
  describe('.generateTestHeaderString', () => {
    it('should throw when no opts are passed', () => {
      expect(() => {
        stripe.webhooks.generateTestHeaderString();
      }).to.throw();
    });

    it('should correctly construct a webhook header', () => {
      const header = stripe.webhooks.generateTestHeaderString({
        payload: EVENT_PAYLOAD_STRING,
        secret: SECRET,
      });

      expect(header).to.not.be.undefined;
      expect(header.split(',')).to.have.lengthOf(2);
    });
  });

  describe('.constructEvent', () => {
    it('should return an Event instance from a valid JSON payload and valid signature header', () => {
      const header = stripe.webhooks.generateTestHeaderString({
        payload: EVENT_PAYLOAD_STRING,
        secret: SECRET,
      });

      const event = stripe.webhooks.constructEvent(
        EVENT_PAYLOAD_STRING,
        header,
        SECRET
      );

      expect(event.id).to.equal(EVENT_PAYLOAD.id);
    });

    it('should raise a JSON error from invalid JSON payload', () => {
      const header = stripe.webhooks.generateTestHeaderString({
        payload: '} I am not valid JSON; 123][',
        secret: SECRET,
      });
      expect(() => {
        stripe.webhooks.constructEvent(
          '} I am not valid JSON; 123][',
          header,
          SECRET
        );
      }).to.throw(/Unexpected token/);
      expect(() => {
        stripe.webhooks.constructEvent(
          '} I am not valid JSON; 123][',
          header,
          SECRET
        );
      }).to.throw(/Unexpected token/);
    });

    it('should raise a SignatureVerificationError from a valid JSON payload and an invalid signature header', () => {
      const header = 'bad_header';

      expect(() => {
        stripe.webhooks.constructEvent(EVENT_PAYLOAD_STRING, header, SECRET);
      }).to.throw(/Unable to extract timestamp and signatures from header/);
    });

    it('should error if you pass a signature which is an array, even though our types say you can', () => {
      const header = stripe.webhooks.generateTestHeaderString({
        payload: EVENT_PAYLOAD_STRING,
        secret: SECRET,
      });

      expect(() => {
        stripe.webhooks.constructEvent(EVENT_PAYLOAD_STRING, [header], SECRET);
      }).to.throw(
        'Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.'
      );
    });
  });

  describe('.verifySignatureHeader', () => {
    it('should raise a SignatureVerificationError when the header does not have the expected format', () => {
      const header = "I'm not even a real signature header";

      const expectedMessage = /Unable to extract timestamp and signatures from header/;

      expect(() => {
        stripe.webhooks.signature.verifyHeader(
          EVENT_PAYLOAD_STRING,
          header,
          SECRET
        );
      }).to.throw(expectedMessage);

      expect(() => {
        stripe.webhooks.signature.verifyHeader(
          EVENT_PAYLOAD_STRING,
          null,
          SECRET
        );
      }).to.throw(expectedMessage);

      expect(() => {
        stripe.webhooks.signature.verifyHeader(
          EVENT_PAYLOAD_STRING,
          undefined,
          SECRET
        );
      }).to.throw(expectedMessage);

      expect(() => {
        stripe.webhooks.signature.verifyHeader(
          EVENT_PAYLOAD_STRING,
          '',
          SECRET
        );
      }).to.throw(expectedMessage);
    });

    it('should raise a SignatureVerificationError when there are no signatures with the expected scheme', () => {
      const header = stripe.webhooks.generateTestHeaderString({
        payload: EVENT_PAYLOAD_STRING,
        secret: SECRET,
        scheme: 'v0',
      });

      expect(() => {
        stripe.webhooks.signature.verifyHeader(
          EVENT_PAYLOAD_STRING,
          header,
          SECRET
        );
      }).to.throw(/No signatures found with expected scheme/);
    });

    it('should raise a SignatureVerificationError when there are no valid signatures for the payload', () => {
      const header = stripe.webhooks.generateTestHeaderString({
        payload: EVENT_PAYLOAD_STRING,
        secret: SECRET,
        signature: 'bad_signature',
      });

      expect(() => {
        stripe.webhooks.signature.verifyHeader(
          EVENT_PAYLOAD_STRING,
          header,
          SECRET
        );
      }).to.throw(
        /No signatures found matching the expected signature for payload/
      );
    });

    it('should raise a SignatureVerificationError when the timestamp is not within the tolerance', () => {
      const header = stripe.webhooks.generateTestHeaderString({
        timestamp: Date.now() / 1000 - 15,
        payload: EVENT_PAYLOAD_STRING,
        secret: SECRET,
      });

      expect(() => {
        stripe.webhooks.signature.verifyHeader(
          EVENT_PAYLOAD_STRING,
          header,
          SECRET,
          10
        );
      }).to.throw(/Timestamp outside the tolerance zone/);
    });

    it(
      'should return true when the header contains a valid signature and ' +
        'the timestamp is within the tolerance',
      () => {
        const header = stripe.webhooks.generateTestHeaderString({
          timestamp: Date.now() / 1000,
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        expect(
          stripe.webhooks.signature.verifyHeader(
            EVENT_PAYLOAD_STRING,
            header,
            SECRET,
            10
          )
        ).to.equal(true);
      }
    );

    it('should return true when the header contains at least one valid signature', () => {
      let header = stripe.webhooks.generateTestHeaderString({
        timestamp: Date.now() / 1000,
        payload: EVENT_PAYLOAD_STRING,
        secret: SECRET,
      });

      header += ',v1=potato';

      expect(
        stripe.webhooks.signature.verifyHeader(
          EVENT_PAYLOAD_STRING,
          header,
          SECRET,
          10
        )
      ).to.equal(true);
    });

    it(
      'should return true when the header contains a valid signature ' +
        'and the timestamp is off but no tolerance is provided',
      () => {
        const header = stripe.webhooks.generateTestHeaderString({
          timestamp: 12345,
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        expect(
          stripe.webhooks.signature.verifyHeader(
            EVENT_PAYLOAD_STRING,
            header,
            SECRET
          )
        ).to.equal(true);
      }
    );

    it('should accept Buffer instances for the payload and header', () => {
      const header = stripe.webhooks.generateTestHeaderString({
        timestamp: Date.now() / 1000,
        payload: EVENT_PAYLOAD_STRING,
        secret: SECRET,
      });

      expect(
        stripe.webhooks.signature.verifyHeader(
          Buffer.from(EVENT_PAYLOAD_STRING),
          Buffer.from(header),
          SECRET,
          10
        )
      ).to.equal(true);
    });
  });
});
