// @ts-nocheck

import {expect} from 'chai';
import {StripeSignatureVerificationError} from '../src/Error.js';
import {FakeCryptoProvider, getSpyableStripe} from './testUtils.js';
import {CryptoProviderOnlySupportsAsyncError} from '../src/crypto/CryptoProvider.js';
import {createWebhooks} from '../src/Webhooks.js';
import {WebPlatformFunctions} from '../src/platform/WebPlatformFunctions.js';
import {SubtleCryptoProvider} from '../src/crypto/SubtleCryptoProvider.js';
import {NodeCryptoProvider} from '../src/crypto/NodeCryptoProvider.js';
import {webcrypto} from 'crypto';

const EVENT_PAYLOAD = {
  id: 'evt_test_webhook',
  object: 'event',
};
const EVENT_PAYLOAD_STRING = JSON.stringify(EVENT_PAYLOAD, null, 2);

const V2_EVENT_PAYLOAD = {
  id: 'evt_test_webhook',
  object: 'v2.core.event',
};
const V2_EVENT_PAYLOAD_STRING = JSON.stringify(V2_EVENT_PAYLOAD, null, 2);

const SECRET = 'whsec_test_secret';

describe('Webhooks on static Stripe factory', () => {
  const Stripe = require('../src/stripe.cjs.node.js');
  createWebhooksTestSuite(Stripe);
});

describe('Webhooks on Stripe instance', () => {
  const stripe = getSpyableStripe();
  createWebhooksTestSuite(stripe);
});

function createWebhooksTestSuite(stripe) {
  const generateHeader = (metadata, opts = {}) => {
    let header = stripe.webhooks.generateTestHeaderString({
      payload: EVENT_PAYLOAD_STRING,
      secret: SECRET,
      ...opts,
    });
    for (const [key, value] of Object.entries(metadata)) {
      if (value !== null) {
        header += `,${key}=${value}`;
      }
    }
    return header;
  };

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

    it('should provide helpful information when CryptoProviderOnlySupportsAsyncError is thrown', () => {
      expect(() => {
        stripe.webhooks.generateTestHeaderString({
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
          cryptoProvider: {
            computeHMACSignature() {
              throw new CryptoProviderOnlySupportsAsyncError('foobar');
            },
          },
        });
      }).to.throw(/foobar\nUse `await generateTestHeaderStringAsync/);
    });
  });

  describe('.generateTestHeaderStringAsync', () => {
    it('should throw when no opts are passed', async () => {
      await expect(
        stripe.webhooks.generateTestHeaderStringAsync()
      ).to.be.rejectedWith('Options are required');
    });

    it('should correctly construct a webhook header', async () => {
      const header = await stripe.webhooks.generateTestHeaderStringAsync({
        payload: EVENT_PAYLOAD_STRING,
        secret: SECRET,
      });

      expect(header).to.not.be.undefined;
      expect(header.split(',')).to.have.lengthOf(2);
      expect(header).to.equal(
        stripe.webhooks.generateTestHeaderString({
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        })
      );
    });
  });

  const makeConstructEventTests = (
    constructEventFn: typeof stripe.webhooks.construct
  ) => {
    return (): void => {
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

      it('should return an Event instance from a payload and header with type Buffer', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        const event = await constructEventFn(
          Buffer.from(EVENT_PAYLOAD_STRING),
          Buffer.from(header),
          SECRET
        );

        expect(event.id).to.equal(EVENT_PAYLOAD.id);
      });

      it('should return an Event instance from a payload and header with type Uint8Array', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        const textEncoder = new TextEncoder();
        const event = await constructEventFn(
          textEncoder.encode(EVENT_PAYLOAD_STRING),
          textEncoder.encode(header),
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

      it('should raise a SignatureVerificationError from a valid JSON payload and an invalid signature header', async () => {
        const header = 'bad_header';
        const expected = /No webhook payload was provided/;

        await expect(constructEventFn(null, header, SECRET)).to.be.rejectedWith(
          expected
        );
        await expect(
          constructEventFn(undefined, header, SECRET)
        ).to.be.rejectedWith(expected);
        await expect(constructEventFn('', header, SECRET)).to.be.rejectedWith(
          expected
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

      it('should throw when a v2 webhook payload is passed', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          payload: V2_EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        const err = await constructEventFn(
          V2_EVENT_PAYLOAD_STRING,
          header,
          SECRET
        ).catch((e: Error) => e);
        expect(err).to.be.instanceOf(Error);
        expect(err.message).to.contain('corresponding EventNotification');
      });
    };
  };

  describe('.constructEvent', () => {
    makeConstructEventTests(async (...args: any) => {
      const result = await stripe.webhooks.constructEvent(...args);
      return result;
    })();
    it('should provide helpful information when CryptoProviderOnlySupportsAsyncError is thrown', () => {
      const header = stripe.webhooks.generateTestHeaderString({
        payload: 'payload',
        secret: 'secret',
      });
      expect(() => {
        stripe.webhooks.constructEvent('payload', header, 'secret', 0, {
          computeHMACSignature() {
            throw new CryptoProviderOnlySupportsAsyncError('foobar');
          },
        });
      }).to.throw(/foobar\nUse `await constructEventAsync/);
    });
  });

  describe(
    '.constructEventAsync',
    makeConstructEventTests((...args: any) =>
      stripe.webhooks.constructEventAsync(...args)
    )
  );

  const makeVerifySignatureHeaderTests = (
    verifyHeaderFn: typeof stripe.webhooks.verify
  ) => {
    return (): void => {
      it('should raise a SignatureVerificationError when the header does not have the expected format', async () => {
        const header = "I'm not even a real signature header";

        const expectedMessage = /Unable to extract timestamp and signatures from header/;

        await expect(
          verifyHeaderFn(EVENT_PAYLOAD_STRING, header, SECRET)
        ).to.be.rejectedWith(StripeSignatureVerificationError, expectedMessage);
      });

      it('should raise a SignatureVerificationError when the header is null or empty', async () => {
        const expectedMessage = /No stripe-signature header value was provided./;

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

      it('should diagnose signing secret mismatches', async () => {
        const maskedSecret = 'whsec_****************************1q84';
        const secret = 'whsec_abcdefghijklmnopqrstuvwxyz';
        const cases = [
          // A mismatched secret links to the supplied destination.
          [secret, maskedSecret, 'we_example', 'wxyz', '/we_example'],
          // A missing destination uses the bare Dashboard URL.
          [secret, maskedSecret, null, 'wxyz', ''],
          // A matching suffix is not enough if the lengths differ.
          ['short1q84', maskedSecret, null, '1q84', ''],
          // A mostly unmasked value still reveals only the last four secret characters.
          [secret, 'whsec_*bcdefghijklmnopqrstuvwxyZ', null, 'wxyz', ''],
          // A secret shorter than four characters is shown in full.
          ['abc', '*', null, 'abc', ''],
        ];
        await Promise.all(
          cases.map(
            async ([
              suppliedSecret,
              masked,
              destination,
              suffix,
              dashboardPath,
            ]) => {
              const header = generateHeader(
                {secret: masked, destination, payload: '00000000'},
                {signature: 'bad_signature'}
              );
              const expected = `Webhook signature verification failed. This request may not have originated from Stripe.

The signing secret you provided is ${suppliedSecret.length} characters long and ends in \`${suffix}\`. However, the signing secret for this destination is ${masked.length} characters long and looks like \`${masked}\`. Ensure you're using the signing secret for this destination, as shown on the Dashboard: https://dashboard.stripe.com/webhooks${dashboardPath}

Learn more: https://docs.stripe.com/webhooks/signature`;
              const error = await verifyHeaderFn(
                EVENT_PAYLOAD_STRING,
                header,
                suppliedSecret
              ).catch((e) => e);
              expect(error).to.be.instanceOf(StripeSignatureVerificationError);
              expect(error.message).to.equal(expected);
            }
          )
        );
      });

      it('should diagnose changes to the raw request body', async () => {
        // User supplies the original body with an extra trailing space.
        const payload = EVENT_PAYLOAD_STRING + ' ';
        const expected = `Webhook signature verification failed.

The request body you passed to this function differs from the request body sent by Stripe to this webhook destination.
The SHA-256 hash of the body should end in \`141b998e\`. However, the SHA-256 hash of the body you provided ends in \`73baa202\`.

Make sure your code does not reformat or otherwise alter the raw HTTP request body before passing it to this function.

Learn more: https://docs.stripe.com/webhooks/signature`;
        const header = generateHeader({
          secret: 'whsec_*******cret',
          payload: '141B998E',
        });
        const error = await verifyHeaderFn(
          Buffer.from(payload),
          header,
          SECRET
        ).catch((e) => e);
        expect(error).to.be.instanceOf(StripeSignatureVerificationError);
        expect(error.message).to.equal(expected);
      });

      const genericMessage =
        'No signatures found matching the expected signature for payload. ' +
        'Are you passing the raw request body you received from Stripe?\n' +
        'If a webhook request is being forwarded by a third-party tool, ' +
        'ensure that the exact request body, including JSON formatting and new line style, is preserved.\n' +
        '\nLearn more about webhook signing and explore webhook integration examples for various frameworks at ' +
        'https://docs.stripe.com/webhooks/signature\n';

      it('should retain the generic error for matching metadata and compare only the final four secret characters', async () => {
        const cases = [
          [{secret: 'whsec_*******cret', payload: '141b998e'}, SECRET],
          [{secret: 'other_*******cret', payload: '141b998e'}, SECRET],
          [
            {secret: 'whsec_*bcdefghijklmnopqrstuvwxyz'},
            'whsec_abcdefghijklmnopqrstuvwxyz',
          ],
          [{secret: '*'}, '*'],
        ];
        await Promise.all(
          cases.map(async ([metadata, secret]) => {
            const header = generateHeader(metadata, {
              signature: 'bad_signature',
            });
            const error = await verifyHeaderFn(
              EVENT_PAYLOAD_STRING,
              header,
              secret
            ).catch((e) => e);
            expect(error.message).to.equal(genericMessage);
          })
        );
      });

      it('should retain the generic error for unusable secret metadata', async () => {
        await Promise.all(
          ['unmasked', '*'.repeat(101), ',secret=whsec_*******abcd'].map(
            async (secret) => {
              const header = generateHeader(
                {secret, payload: '141b998e'},
                {signature: 'bad_signature'}
              );
              const error = await verifyHeaderFn(
                EVENT_PAYLOAD_STRING,
                header,
                SECRET
              ).catch((e) => e);
              expect(error.message).to.equal(genericMessage);
            }
          )
        );
      });

      it('should retain the generic error for unusable payload metadata', async () => {
        await Promise.all(
          [
            '1234567',
            '123456789',
            'not-hex!',
            'a'.repeat(101),
            ',payload=00000000',
          ].map(async (payload) => {
            const header = generateHeader(
              {secret: 'whsec_*******cret', payload},
              {signature: 'bad_signature'}
            );
            const error = await verifyHeaderFn(
              EVENT_PAYLOAD_STRING,
              header,
              SECRET
            ).catch((e) => e);
            expect(error.message).to.equal(genericMessage);
          })
        );
      });

      it('should ignore conflicting debug metadata when a signature is valid', async () => {
        const header = generateHeader({
          secret: '*abcd',
          destination: '\ud800',
          payload: '00000000',
        });
        const cryptoProvider = new NodeCryptoProvider();
        const failHash = () => {
          throw new Error('Valid signatures must not hash diagnostic payloads');
        };
        cryptoProvider.computeSHA256 = failHash;
        cryptoProvider.computeSHA256Async = failHash;
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

      it('should raise a SignatureVerificationError when the timestamp is not within the tolerance of the provided timestamp', async () => {
        const receivedAt = 20000000;
        // Conflicting metadata must not replace a timestamp error.
        const header = generateHeader(
          {secret: '*abcd', payload: '00000000'},
          {timestamp: receivedAt / 1000 - 15}
        );

        await expect(
          verifyHeaderFn(
            EVENT_PAYLOAD_STRING,
            header,
            SECRET,
            10,
            null,
            receivedAt
          )
        ).to.be.rejectedWith(
          StripeSignatureVerificationError,
          /Timestamp outside the tolerance zone/
        );
      });

      it('should raise a SignatureVerificationError when the timestamp is not within the tolerance of Date.now()', async () => {
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
          'the timestamp is within the tolerance of Date.now()',
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

      it(
        'should return true when the header contains a valid signature and ' +
          'the timestamp is within the tolerance of the provided timestamp',
        async () => {
          const receivedAt = 20000000;
          const header = stripe.webhooks.generateTestHeaderString({
            timestamp: receivedAt / 1000 - 9,
            payload: EVENT_PAYLOAD_STRING,
            secret: SECRET,
          });

          expect(
            await verifyHeaderFn(
              EVENT_PAYLOAD_STRING,
              header,
              SECRET,
              10,
              null,
              receivedAt
            )
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
        'should raise a SignatureVerificationError when the timestamp is ' +
          'off and no tolerance is provided, since DEFAULT_TOLERANCE is used',
        async () => {
          const header = stripe.webhooks.generateTestHeaderString({
            timestamp: 12345,
            payload: EVENT_PAYLOAD_STRING,
            secret: SECRET,
          });

          await expect(
            verifyHeaderFn(EVENT_PAYLOAD_STRING, header, SECRET)
          ).to.be.rejectedWith(
            StripeSignatureVerificationError,
            /Timestamp outside the tolerance zone/
          );
        }
      );

      it(
        'should return true when the header contains a valid signature ' +
          'and the timestamp is off but tolerance is explicitly set to 0',
        async () => {
          const header = stripe.webhooks.generateTestHeaderString({
            timestamp: 12345,
            payload: EVENT_PAYLOAD_STRING,
            secret: SECRET,
          });

          expect(
            await verifyHeaderFn(EVENT_PAYLOAD_STRING, header, SECRET, 0)
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

      it('should raise a SignatureVerificationError when payload is of an unknown type', async () => {
        // Conflicting metadata must not replace a payload-type error.
        const header = generateHeader({
          secret: '*abcd',
          payload: '00000000',
        });

        await expect(verifyHeaderFn({}, header, SECRET)).to.be.rejectedWith(
          StripeSignatureVerificationError,
          /Webhook payload must be provided as a string or a Buffer/
        );
        await expect(
          verifyHeaderFn(new Date(), header, SECRET)
        ).to.be.rejectedWith(
          StripeSignatureVerificationError,
          /Webhook payload must be provided as a string or a Buffer/
        );
      });

      it('should raise a SignatureVerificationError when the signing secret contains whitespace', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        await expect(
          verifyHeaderFn(EVENT_PAYLOAD_STRING, header, SECRET + ' ')
        ).to.be.rejectedWith(
          StripeSignatureVerificationError,
          /The provided signing secret contains whitespace/
        );
      });

      it('should raise a SignatureVerificationError when the signing secret is blank or nullish', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        const expectedMessage = /No webhook secret value was provided\. It should start with `whsec_`/;
        const blankSecrets = [
          '',
          ' ',
          '\t',
          '\r',
          '\n',
          '\f',
          '\v',
          ' \t\r\n\f\v',
          null,
          undefined,
        ];

        await Promise.all(
          blankSecrets.map((secret) =>
            expect(
              verifyHeaderFn(EVENT_PAYLOAD_STRING, header, secret)
            ).to.be.rejectedWith(
              StripeSignatureVerificationError,
              expectedMessage
            )
          )
        );
      });

      it('should preserve surrounding whitespace in the signing secret', async () => {
        const secret = ` \t${SECRET}\r\n`;
        const header = stripe.webhooks.generateTestHeaderString({
          payload: EVENT_PAYLOAD_STRING,
          secret,
        });

        expect(
          await verifyHeaderFn(EVENT_PAYLOAD_STRING, header, secret, 0)
        ).to.equal(true);
      });

      it('should accept a non-breaking-space-only signing secret', async () => {
        const secret = '\u00a0';
        const header = stripe.webhooks.generateTestHeaderString({
          payload: EVENT_PAYLOAD_STRING,
          secret,
        });

        expect(
          await verifyHeaderFn(EVENT_PAYLOAD_STRING, header, secret, 0)
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
          const timestamp = Date.now() / 1000;
          const header = stripe.webhooks.generateTestHeaderString({
            payload: EVENT_PAYLOAD_STRING,
            secret: SECRET,
            signature: 'fake signature',
            timestamp,
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
    makeVerifySignatureHeaderTests(async (...args: any) => {
      const result = await stripe.webhooks.signature.verifyHeader(...args);
      return result;
    })
  );

  describe(
    '.verifySignatureHeaderAsync',
    makeVerifySignatureHeaderTests((...args: any) =>
      stripe.webhooks.signature.verifyHeaderAsync(...args)
    )
  );

  describe('diagnostics across crypto providers', () => {
    const webhooks = createWebhooks(new WebPlatformFunctions());

    it('should diagnose payload changes using NodeCryptoProvider on a web platform', () => {
      const header = generateHeader({payload: '141b998e'});
      expect(() =>
        webhooks.signature.verifyHeader(
          EVENT_PAYLOAD_STRING + ' ',
          header,
          SECRET,
          undefined,
          new NodeCryptoProvider()
        )
      ).to.throw('the body you provided ends in `73baa202`');
    });

    it('should diagnose payload changes using SubtleCryptoProvider', async () => {
      const header = generateHeader({payload: '141b998e'});
      const provider = new SubtleCryptoProvider(webcrypto.subtle);
      await expect(
        webhooks.signature.verifyHeaderAsync(
          EVENT_PAYLOAD_STRING + ' ',
          header,
          SECRET,
          undefined,
          provider
        )
      ).to.be.rejectedWith('the body you provided ends in `73baa202`');
    });

    it('should retain the signature error if a custom provider cannot hash payloads', async () => {
      const header = generateHeader(
        {payload: '00000000'},
        {signature: 'bad_signature'}
      );
      expect(() =>
        webhooks.signature.verifyHeader(
          EVENT_PAYLOAD_STRING,
          header,
          SECRET,
          undefined,
          new FakeCryptoProvider()
        )
      ).to.throw(
        StripeSignatureVerificationError,
        'No signatures found matching the expected signature for payload'
      );
      await Promise.all(
        [
          new FakeCryptoProvider(),
          Object.assign(new FakeCryptoProvider(), {
            computeSHA256Async: () =>
              Promise.reject(new Error('Hash unavailable')),
          }),
          Object.assign(new FakeCryptoProvider(), {
            computeSHA256Async: () => Promise.resolve(null),
          }),
        ].map(async (provider) => {
          await expect(
            webhooks.signature.verifyHeaderAsync(
              EVENT_PAYLOAD_STRING,
              header,
              SECRET,
              undefined,
              provider
            )
          ).to.be.rejectedWith(
            StripeSignatureVerificationError,
            'No signatures found matching the expected signature for payload'
          );
        })
      );
    });

    it('should diagnose secret mismatches without hashing support', async () => {
      const header = generateHeader(
        {secret: '*abcd', payload: '00000000'},
        {signature: 'bad_signature'}
      );
      expect(() =>
        webhooks.signature.verifyHeader(
          EVENT_PAYLOAD_STRING,
          header,
          SECRET,
          undefined,
          new FakeCryptoProvider()
        )
      ).to.throw(
        StripeSignatureVerificationError,
        'The signing secret you provided is 17 characters long and ends in `cret`'
      );
      await expect(
        webhooks.signature.verifyHeaderAsync(
          EVENT_PAYLOAD_STRING,
          header,
          SECRET,
          undefined,
          new FakeCryptoProvider()
        )
      ).to.be.rejectedWith(
        StripeSignatureVerificationError,
        'The signing secret you provided is 17 characters long and ends in `cret`'
      );
    });
  });

  describe('optional parameter defaults', () => {
    describe('.generateTestHeaderString with optional params', () => {
      it('should use current timestamp when timestamp is not provided', () => {
        const before = Math.floor(Date.now() / 1000);
        const header = stripe.webhooks.generateTestHeaderString({
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });
        const after = Math.floor(Date.now() / 1000);

        const timestampStr = header.split(',')[0].replace('t=', '');
        const timestamp = parseInt(timestampStr, 10);
        expect(timestamp).to.be.at.least(before);
        expect(timestamp).to.be.at.most(after);
      });

      it('should use provided timestamp when given', () => {
        const customTimestamp = 1234567890;
        const header = stripe.webhooks.generateTestHeaderString({
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
          timestamp: customTimestamp,
        });

        const timestampStr = header.split(',')[0].replace('t=', '');
        expect(parseInt(timestampStr, 10)).to.equal(customTimestamp);
      });
    });

    describe('.generateTestHeaderStringAsync with optional params', () => {
      it('should use current timestamp when timestamp is not provided', async () => {
        const before = Math.floor(Date.now() / 1000);
        const header = await stripe.webhooks.generateTestHeaderStringAsync({
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });
        const after = Math.floor(Date.now() / 1000);

        const timestampStr = header.split(',')[0].replace('t=', '');
        const timestamp = parseInt(timestampStr, 10);
        expect(timestamp).to.be.at.least(before);
        expect(timestamp).to.be.at.most(after);
      });
    });

    describe('verifyHeader with optional tolerance and cryptoProvider', () => {
      it('should use DEFAULT_TOLERANCE and accept recent timestamps when tolerance is omitted', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          timestamp: Date.now() / 1000 - 100,
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        expect(
          await stripe.webhooks.signature.verifyHeaderAsync(
            EVENT_PAYLOAD_STRING,
            header,
            SECRET
          )
        ).to.equal(true);
      });

      it('should use default cryptoProvider when cryptoProvider is omitted', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          timestamp: Date.now() / 1000,
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        expect(
          await stripe.webhooks.signature.verifyHeaderAsync(
            EVENT_PAYLOAD_STRING,
            header,
            SECRET,
            300
          )
        ).to.equal(true);
      });

      it('should work when both tolerance and cryptoProvider are omitted', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          timestamp: Date.now() / 1000,
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        expect(
          await stripe.webhooks.signature.verifyHeaderAsync(
            EVENT_PAYLOAD_STRING,
            header,
            SECRET
          )
        ).to.equal(true);
      });
    });

    describe('constructEvent with optional tolerance and cryptoProvider', () => {
      it('should use DEFAULT_TOLERANCE when tolerance is omitted', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          timestamp: Date.now() / 1000 - 400,
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        await expect(
          stripe.webhooks.constructEventAsync(
            EVENT_PAYLOAD_STRING,
            header,
            SECRET
          )
        ).to.be.rejectedWith(/Timestamp outside the tolerance zone/);
      });

      it('should succeed with a recent timestamp when tolerance is omitted', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          timestamp: Date.now() / 1000,
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        const event = await stripe.webhooks.constructEventAsync(
          EVENT_PAYLOAD_STRING,
          header,
          SECRET
        );
        expect(event.id).to.equal(EVENT_PAYLOAD.id);
      });

      it('should succeed without cryptoProvider argument', async () => {
        const header = stripe.webhooks.generateTestHeaderString({
          timestamp: Date.now() / 1000,
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        const event = await stripe.webhooks.constructEventAsync(
          EVENT_PAYLOAD_STRING,
          header,
          SECRET,
          300
        );
        expect(event.id).to.equal(EVENT_PAYLOAD.id);
      });
    });
  });
}
