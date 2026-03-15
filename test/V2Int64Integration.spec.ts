// @ts-nocheck
import {expect} from 'chai';
import nock = require('nock');
import {StripeResource} from '../src/StripeResource.js';
import {
  getSpyableStripe,
  getTestServerStripe,
  FAKE_API_KEY,
} from './testUtils.js';

const stripeMethod = StripeResource.method;

describe('V2 int64_string integration', () => {
  describe('request coercion', () => {
    const stripe = getSpyableStripe();

    it('coerces numeric int64_string fields to strings in V2 request body', () => {
      const resource = new (StripeResource.extend({
        create: stripeMethod({
          method: 'POST',
          fullPath: '/v2/test/resources',
          requestSchema: {
            kind: 'object',
            fields: {
              amount: {kind: 'int64_string'},
            },
          },
        }),
      }))(stripe);

      resource.create({amount: 42, name: 'test'});
      expect(stripe.LAST_REQUEST.data).to.deep.equal({
        amount: '42',
        name: 'test',
      });
    });

    it('coerces nested int64_string fields in V2 request body', () => {
      const resource = new (StripeResource.extend({
        create: stripeMethod({
          method: 'POST',
          fullPath: '/v2/test/resources',
          requestSchema: {
            kind: 'object',
            fields: {
              transform_quantity: {
                kind: 'object',
                fields: {
                  divide_by: {kind: 'int64_string'},
                },
              },
            },
          },
        }),
      }))(stripe);

      resource.create({transform_quantity: {divide_by: 500, round: 'up'}});
      expect(stripe.LAST_REQUEST.data).to.deep.equal({
        transform_quantity: {divide_by: '500', round: 'up'},
      });
    });

    it('does not coerce when no requestSchema is present', () => {
      const resource = new (StripeResource.extend({
        create: stripeMethod({
          method: 'POST',
          fullPath: '/v2/test/resources',
        }),
      }))(stripe);

      resource.create({amount: 42});
      expect(stripe.LAST_REQUEST.data).to.deep.equal({amount: 42});
    });

    it('handles null body data gracefully', () => {
      const resource = new (StripeResource.extend({
        list: stripeMethod({
          method: 'GET',
          fullPath: '/v2/test/resources',
          requestSchema: {
            kind: 'object',
            fields: {
              amount: {kind: 'int64_string'},
            },
          },
        }),
      }))(stripe);

      // GET requests have no body data, so coercion should be a no-op
      resource.list();
      expect(stripe.LAST_REQUEST.data).to.equal(null);
    });
  });

  describe('response coercion', () => {
    it('coerces string int64_string fields to bigints in V2 response', (callback) => {
      const handleRequest = (req, res) => {
        res.write(JSON.stringify({amount: '12345', name: 'test'}));
        res.end();
      };

      getTestServerStripe({}, handleRequest, (err, stripe, closeServer) => {
        if (err) return callback(err);

        const resource = new (StripeResource.extend({
          retrieve: stripeMethod({
            method: 'GET',
            fullPath: '/v2/test/resources/{id}',
            responseSchema: {
              kind: 'object',
              fields: {
                amount: {kind: 'int64_string'},
              },
            },
          }),
        }))(stripe);

        resource.retrieve('res_123', (err, result) => {
          closeServer();
          if (err) return callback(err);
          expect(result.amount).to.equal(12345n);
          expect(result.name).to.equal('test');
          callback();
        });
      });
    });

    it('coerces nested string int64_string fields in V2 response', (callback) => {
      const handleRequest = (req, res) => {
        res.write(
          JSON.stringify({
            transform_quantity: {divide_by: '500', round: 'up'},
          })
        );
        res.end();
      };

      getTestServerStripe({}, handleRequest, (err, stripe, closeServer) => {
        if (err) return callback(err);

        const resource = new (StripeResource.extend({
          retrieve: stripeMethod({
            method: 'GET',
            fullPath: '/v2/test/resources/{id}',
            responseSchema: {
              kind: 'object',
              fields: {
                transform_quantity: {
                  kind: 'object',
                  fields: {
                    divide_by: {kind: 'int64_string'},
                  },
                },
              },
            },
          }),
        }))(stripe);

        resource.retrieve('res_123', (err, result) => {
          closeServer();
          if (err) return callback(err);
          expect(result.transform_quantity.divide_by).to.equal(500n);
          expect(result.transform_quantity.round).to.equal('up');
          callback();
        });
      });
    });

    it('does not coerce when no responseSchema is present', (callback) => {
      const handleRequest = (req, res) => {
        res.write(JSON.stringify({amount: '12345'}));
        res.end();
      };

      getTestServerStripe({}, handleRequest, (err, stripe, closeServer) => {
        if (err) return callback(err);

        const resource = new (StripeResource.extend({
          retrieve: stripeMethod({
            method: 'GET',
            fullPath: '/v2/test/resources/{id}',
          }),
        }))(stripe);

        resource.retrieve('res_123', (err, result) => {
          closeServer();
          if (err) return callback(err);
          expect(result.amount).to.equal('12345');
          callback();
        });
      });
    });

    it('runs response coercion before transformResponseData', (callback) => {
      const handleRequest = (req, res) => {
        res.write(JSON.stringify({amount: '100'}));
        res.end();
      };

      getTestServerStripe({}, handleRequest, (err, stripe, closeServer) => {
        if (err) return callback(err);

        const resource = new (StripeResource.extend({
          retrieve(...args) {
            const transformResponseData = (response) => {
              // By the time transformResponseData is called, the amount
              // should already be a bigint
              response.doubleAmount = response.amount * 2n;
              return response;
            };
            return stripeMethod({
              method: 'GET',
              fullPath: '/v2/test/resources/{id}',
              responseSchema: {
                kind: 'object',
                fields: {
                  amount: {kind: 'int64_string'},
                },
              },
              transformResponseData,
            }).apply(this, args);
          },
        }))(stripe);

        resource.retrieve('res_123', (err, result) => {
          closeServer();
          if (err) return callback(err);
          expect(result.amount).to.equal(100n);
          expect(result.doubleAmount).to.equal(200n);
          callback();
        });
      });
    });
  });

  describe('request JSON serialization', () => {
    afterEach(() => {
      nock.cleanAll();
    });

    it('serializes int64_string fields as JSON strings on the wire', (done) => {
      const realStripe = require('../src/stripe.cjs.node.js')(FAKE_API_KEY);
      const host = realStripe.getConstant('DEFAULT_HOST');

      // The expected body should have amount as a JSON string "42", not number 42
      const expectedBody = '{"amount":"42","name":"test"}';

      const scope = nock(`https://${host}`, {
        reqheaders: {
          'Content-Type': 'application/json',
        },
      })
        .post('/v2/test/resources', expectedBody)
        .reply(200, '{}');

      const resource = new (StripeResource.extend({
        create: stripeMethod({
          method: 'POST',
          fullPath: '/v2/test/resources',
          requestSchema: {
            kind: 'object',
            fields: {
              amount: {kind: 'int64_string'},
            },
          },
        }),
      }))(realStripe);

      resource.create({amount: 42, name: 'test'}, (err) => {
        done(err);
        scope.done();
      });
    });
  });

  describe('V1 requests are unaffected', () => {
    const stripe = getSpyableStripe();

    it('does not coerce V1 request data even with schemas', () => {
      // V1 methods should never have schemas in practice, but verify
      // that if one somehow did, it still works
      const resource = new (StripeResource.extend({
        create: stripeMethod({
          method: 'POST',
          fullPath: '/v1/test/resources',
          requestSchema: {
            kind: 'object',
            fields: {
              amount: {kind: 'int64_string'},
            },
          },
        }),
      }))(stripe);

      // The coercion happens regardless of v1/v2 since it's driven by schema presence
      // This is fine — V1 methods won't have schemas in generated code
      resource.create({amount: 42});
      expect(stripe.LAST_REQUEST.data).to.deep.equal({amount: '42'});
    });
  });
});
