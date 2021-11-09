'use strict';

const {StripeSignatureVerificationError} = require('../lib/Error');
const {getSpyableStripe, FakeCryptoProvider} = require('../testUtils');
const stripe = getSpyableStripe();
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

  const makeConstructEventTests = (constructEventFn) => {
    return () => {
      it('should return an Event instance from a valid JSON payload and valid signature header', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        const event = await constructEventFn(
          EVENT_PAYLOAD_STRING,
          header,
          SECRET
        );

        expect(event.id).to.equal(EVENT_PAYLOAD.id);
      });

      it('should raise a JSON error from invalid JSON payload', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          payload: '} I am not valid JSON; 123][',
          secret: SECRET,
        });
        await expect(
          constructEventFn('} I am not valid JSON; 123][', header, SECRET)
        ).to.be.rejectedWith(/Unexpected token/);
        await expect(
          constructEventFn('} I am not valid JSON; 123][', header, SECRET)
        ).to.be.rejectedWith(/Unexpected token/);
      });

      it('should raise a SignatureVerificationError from a valid JSON payload and an invalid signature header', async () => {
        const header = 'bad_header';

        await expect(
          constructEventFn(EVENT_PAYLOAD_STRING, header, SECRET)
        ).to.be.rejectedWith(
          /Unable to extract timestamp and signatures from header/
        );
      });

      it('should error if you pass a signature which is an array, even though our types say you can', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        await expect(
          constructEventFn(EVENT_PAYLOAD_STRING, [header], SECRET)
        ).to.be.rejectedWith(
          'Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.'
        );
      });

      it('should invoke a custom CryptoProvider', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
          signature: 'fake signature',
        });

        const event = await constructEventFn(
          EVENT_PAYLOAD_STRING,
          header,
          SECRET,
          undefined,
          new FakeCryptoProvider()
        );

        expect(event.id).to.equal(EVENT_PAYLOAD.id);
      });
    };
  };

  describe(
    '.constructEvent',
    makeConstructEventTests(async (...args) => {
      const result = await stripe.webhooks.constructEvent(...args);
      return result;
    })
  );

  describe(
    '.constructEventAsync',
    makeConstructEventTests((...args) =>
      stripe.webhooks.constructEventAsync(...args)
    )
  );

  const makeVerifySignatureHeaderTests = (verifyHeaderFn) => {
    return () => {
      it('should raise a SignatureVerificationError when the header does not have the expected format', async () => {
        const header = "I'm not even a real signature header";

        const expectedMessage = /Unable to extract timestamp and signatures from header/;

        await expect(
          verifyHeaderFn(EVENT_PAYLOAD_STRING, header, SECRET)
        ).to.be.rejectedWith(StripeSignatureVerificationError, expectedMessage);

        await expect(
          verifyHeaderFn(EVENT_PAYLOAD_STRING, null, SECRET)
        ).to.be.rejectedWith(StripeSignatureVerificationError, expectedMessage);

        await expect(
          verifyHeaderFn(EVENT_PAYLOAD_STRING, undefined, SECRET)
        ).to.be.rejectedWith(StripeSignatureVerificationError, expectedMessage);

        await expect(
          verifyHeaderFn(EVENT_PAYLOAD_STRING, '', SECRET)
        ).to.be.rejectedWith(StripeSignatureVerificationError, expectedMessage);
      });

      it('should raise a SignatureVerificationError when there are no signatures with the expected scheme', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
          scheme: 'v0',
        });

        await expect(
          verifyHeaderFn(EVENT_PAYLOAD_STRING, header, SECRET)
        ).to.be.rejectedWith(
          StripeSignatureVerificationError,
          /No signatures found with expected scheme/
        );
      });

      it('should raise a SignatureVerificationError when there are no valid signatures for the payload', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
          signature: 'bad_signature',
        });

        await expect(
          verifyHeaderFn(EVENT_PAYLOAD_STRING, header, SECRET)
        ).to.be.rejectedWith(
          StripeSignatureVerificationError,
          /No signatures found matching the expected signature for payload/
        );
      });

      it('should raise a SignatureVerificationError when the timestamp is not within the tolerance', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          timestamp: Date.now() / 1000 - 15,
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        await expect(
          verifyHeaderFn(EVENT_PAYLOAD_STRING, header, SECRET, 10)
        ).to.be.rejectedWith(
          StripeSignatureVerificationError,
          /Timestamp outside the tolerance zone/
        );
      });

      it(
        'should return true when the header contains a valid signature and ' +
          'the timestamp is within the tolerance',
        async () => {
          const header = stripe.webhooks.generateTestHeaderString({
            timestamp: Date.now() / 1000,
            payload: EVENT_PAYLOAD_STRING,
            secret: SECRET,
          });

          expect(
            await verifyHeaderFn(EVENT_PAYLOAD_STRING, header, SECRET, 10)
          ).to.equal(true);
        }
      );

      it('should return true when the header contains at least one valid signature', async () => {
        let header = stripe.webhooks.generateTestHeaderString({
          timestamp: Date.now() / 1000,
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        header += ',v1=potato';

        expect(
          await verifyHeaderFn(EVENT_PAYLOAD_STRING, header, SECRET, 10)
        ).to.equal(true);
      });

      it(
        'should return true when the header contains a valid signature ' +
          'and the timestamp is off but no tolerance is provided',
        async () => {
          const header = stripe.webhooks.generateTestHeaderString({
            timestamp: 12345,
            payload: EVENT_PAYLOAD_STRING,
            secret: SECRET,
          });

          expect(
            await verifyHeaderFn(EVENT_PAYLOAD_STRING, header, SECRET)
          ).to.equal(true);
        }
      );

      it('should accept Buffer instances for the payload and header', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          timestamp: Date.now() / 1000,
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        expect(
          await verifyHeaderFn(
            Buffer.from(EVENT_PAYLOAD_STRING),
            Buffer.from(header),
            SECRET,
            10
          )
        ).to.equal(true);
      });

      describe('custom CryptoProvider', () => {
        const cryptoProvider = new FakeCryptoProvider();

        it('should use the provider to compute a signature (mismatch)', async () => {
          const header = stripe.webhooks.generateTestHeaderString({
            payload: EVENT_PAYLOAD_STRING,
            secret: SECRET,
            signature: 'different fake signature',
            timestamp: 123,
          });

          await expect(
            verifyHeaderFn(
              EVENT_PAYLOAD_STRING,
              header,
              SECRET,
              undefined,
              cryptoProvider
            )
          ).to.be.rejectedWith(
            /No signatures found matching the expected signature for payload/
          );
        });
        it('should use the provider to compute a signature (success)', async () => {
          const header = stripe.webhooks.generateTestHeaderString({
            payload: EVENT_PAYLOAD_STRING,
            secret: SECRET,
            signature: 'fake signature',
            timestamp: 123,
          });

          expect(
            await verifyHeaderFn(
              EVENT_PAYLOAD_STRING,
              header,
              SECRET,
              undefined,
              cryptoProvider
            )
          ).to.equal(true);
        });
      });
    };
  };

  describe(
    '.verifySignatureHeader',
    makeVerifySignatureHeaderTests(async (...args) => {
      const result = await stripe.webhooks.signature.verifyHeader(...args);
      return result;
    })
  );

  describe(
    '.verifySignatureHeaderAsync',
    makeVerifySignatureHeaderTests((...args) =>
      stripe.webhooks.signature.verifyHeaderAsync(...args)
    )
  );
});
