// @ts-nocheck
import {expect} from 'chai';
import nock = require('nock');
import {StripeResource} from '../src/StripeResource.js';
import {
  getSpyableStripe,
  getTestServerStripe,
  FAKE_API_KEY,
} from './testUtils.js';

describe('V2 int64_string integration', () => {
  describe('request coercion', () => {
    const stripe = getSpyableStripe();

    it('coerces numeric int64_string fields to strings in V2 request body', () => {
      const resource = new StripeResource(stripe);

      resource._makeRequest(
        'POST',
        '/v2/test/resources',
        {amount: 42, name: 'test'},
        undefined,
        {
          requestSchema: {
            kind: 'object',
            fields: {
              amount: {kind: 'int64_string'},
            },
          },
        }
      );
      expect(stripe.LAST_REQUEST.data).to.deep.equal({
        amount: '42',
        name: 'test',
      });
    });

    it('coerces nested int64_string fields in V2 request body', () => {
      const resource = new StripeResource(stripe);

      resource._makeRequest(
        'POST',
        '/v2/test/resources',
        {transform_quantity: {divide_by: 500, round: 'up'}},
        undefined,
        {
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
        }
      );
      expect(stripe.LAST_REQUEST.data).to.deep.equal({
        transform_quantity: {divide_by: '500', round: 'up'},
      });
    });

    it('does not coerce when no requestSchema is present', () => {
      const resource = new StripeResource(stripe);

      resource._makeRequest(
        'POST',
        '/v2/test/resources',
        {amount: 42},
        undefined
      );
      expect(stripe.LAST_REQUEST.data).to.deep.equal({amount: 42});
    });

    it('handles null body data gracefully', () => {
      const resource = new StripeResource(stripe);

      // GET requests have no body data, so coercion should be a no-op
      resource._makeRequest('GET', '/v2/test/resources', undefined, undefined, {
        requestSchema: {
          kind: 'object',
          fields: {
            amount: {kind: 'int64_string'},
          },
        },
      });
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

        const resource = new StripeResource(stripe);

        resource
          ._makeRequest(
            'GET',
            '/v2/test/resources/res_123',
            undefined,
            undefined,
            {
              responseSchema: {
                kind: 'object',
                fields: {
                  amount: {kind: 'int64_string'},
                },
              },
            }
          )
          .then((result) => {
            closeServer();
            expect(result.amount).to.equal(12345n);
            expect(result.name).to.equal('test');
            callback();
          })
          .catch((err) => {
            closeServer();
            callback(err);
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

        const resource = new StripeResource(stripe);

        resource
          ._makeRequest(
            'GET',
            '/v2/test/resources/res_123',
            undefined,
            undefined,
            {
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
            }
          )
          .then((result) => {
            closeServer();
            expect(result.transform_quantity.divide_by).to.equal(500n);
            expect(result.transform_quantity.round).to.equal('up');
            callback();
          })
          .catch((err) => {
            closeServer();
            callback(err);
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

        const resource = new StripeResource(stripe);

        resource
          ._makeRequest(
            'GET',
            '/v2/test/resources/res_123',
            undefined,
            undefined
          )
          .then((result) => {
            closeServer();
            expect(result.amount).to.equal('12345');
            callback();
          })
          .catch((err) => {
            closeServer();
            callback(err);
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

        const resource = new StripeResource(stripe);

        resource
          ._makeRequest(
            'GET',
            '/v2/test/resources/res_123',
            undefined,
            undefined,
            {
              responseSchema: {
                kind: 'object',
                fields: {
                  amount: {kind: 'int64_string'},
                },
              },
              transformResponseData: (response) => {
                response.doubleAmount = response.amount * 2n;
                return response;
              },
            }
          )
          .then((result) => {
            closeServer();
            expect(result.amount).to.equal(100n);
            expect(result.doubleAmount).to.equal(200n);
            callback();
          })
          .catch((err) => {
            closeServer();
            callback(err);
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

      const resource = new StripeResource(realStripe);

      resource
        ._makeRequest(
          'POST',
          '/v2/test/resources',
          {amount: 42, name: 'test'},
          undefined,
          {
            requestSchema: {
              kind: 'object',
              fields: {
                amount: {kind: 'int64_string'},
              },
            },
          }
        )
        .then(() => {
          done();
          scope.done();
        })
        .catch(done);
    });
  });

  describe('V1 requests with schemas are coerced', () => {
    const stripe = getSpyableStripe();

    it('coerces V1 request data when schemas are present', () => {
      const resource = new StripeResource(stripe);

      resource._makeRequest(
        'POST',
        '/v1/test/resources',
        {amount: 42},
        undefined,
        {
          requestSchema: {
            kind: 'object',
            fields: {
              amount: {kind: 'int64_string'},
            },
          },
        }
      );
      expect(stripe.LAST_REQUEST.data).to.deep.equal({amount: '42'});
    });
  });
});
