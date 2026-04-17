// @ts-nocheck
import {expect} from 'chai';
import * as nock from 'nock';
import {StripeResource} from '../src/StripeResource.js';
import {getSpyableStripe, getTestServerStripe} from './testUtils.js';

const stripe = getSpyableStripe();

describe('StripeResource', () => {
  describe('_makeRequest', () => {
    it('sends to the correct path', (callback) => {
      const handleRequest = (req, res) => {
        expect(req.url).to.equal('/v1/parent/hello/child/world');
        res.write('{}');
        res.end();
      };

      getTestServerStripe({}, handleRequest, (err, stripe, closeServer) => {
        const resource = new StripeResource(stripe);

        return resource
          ._makeRequest(
            'GET',
            '/v1/parent/hello/child/world',
            undefined,
            undefined
          )
          .then((res) => {
            closeServer();
            expect(res).to.deep.equal({});
            return callback();
          })
          .catch((err) => {
            closeServer();
            return callback(err);
          });
      });
    });

    describe('custom apiBase', () => {
      it('sends to the correct base address', (done) => {
        const stripe = require('../src/stripe.cjs.node.js')('sk_test');

        const scope = nock('https://files.stripe.com')
          .get('/v1/resourceWithHost')
          .reply(200, '{}');

        const resource = new StripeResource(stripe);
        resource
          ._makeRequest('GET', '/v1/resourceWithHost', undefined, undefined, {
            apiBase: 'files',
          })
          .then(() => {
            done();
            scope.done();
          })
          .catch(done);
      });
    });

    describe('streaming', () => {
      it('success', (callback) => {
        const handleRequest = (req, res) => {
          setTimeout(() => res.write('pretend'), 10);
          setTimeout(() => res.write(' this'), 20);
          setTimeout(() => res.write(' is a pdf'), 30);
          setTimeout(() => res.end(), 40);
        };

        getTestServerStripe({}, handleRequest, (err, stripe, closeServer) => {
          const resource = new StripeResource(stripe);
          if (err) {
            return callback(err);
          }

          return resource
            ._makeRequest(
              'GET',
              '/v1/resourceWithPDF',
              {id: 'foo_123'},
              undefined,
              {
                apiBase: 'files',
                streaming: true,
              }
            )
            .then((res) => {
              closeServer();
              const chunks = [];
              res.on('data', (chunk) => chunks.push(chunk));
              res.on('error', callback);
              res.on('end', () => {
                expect(Buffer.concat(chunks).toString()).to.equal(
                  'pretend this is a pdf'
                );
                return callback();
              });
            })
            .catch((err) => {
              closeServer();
              return callback(err);
            });
        });
      });

      it('failure', (callback) => {
        const handleRequest = (_req, res, nPreviousRequests) => {
          setTimeout(() => res.writeHead(500));
          setTimeout(
            () =>
              res.write(
                '{"error": "api_error", "error_description": "this is bad"}'
              ),
            10
          );
          setTimeout(() => res.end(), 20);
          // fail twice, then close the server
          return {shouldStayOpen: nPreviousRequests < 1};
        };

        getTestServerStripe({}, handleRequest, (err, stripe, closeServer) => {
          if (err) {
            return callback(err);
          }

          const resource = new StripeResource(stripe);

          return resource
            ._makeRequest(
              'GET',
              '/v1/resourceWithPDF',
              {id: 'foo_123'},
              {maxNetworkRetries: 1},
              {apiBase: 'files', streaming: true}
            )
            .then(() => {
              closeServer();
              return callback(new Error('Expected error'));
            })
            .catch((err) => {
              closeServer();
              expect(err).to.exist;
              expect(err.raw.type).to.equal('api_error');
              expect(err.raw.message).to.equal('this is bad');
              return callback();
            });
        });
      });
    });

    describe('stack traces', () => {
      it('appends the user call site to the error stack', (callback) => {
        const handleRequest = (_req, res) => {
          res.writeHead(400, {'Content-Type': 'application/json'});
          res.end(
            '{"error": {"type": "invalid_request_error", "message": "No such customer"}}'
          );
        };

        getTestServerStripe({}, handleRequest, (err, stripe, closeServer) => {
          if (err) {
            return callback(err);
          }

          const resource = new StripeResource(stripe);

          return resource
            ._makeRequest('GET', '/v1/customers/cus_bad', undefined, undefined)
            .then(() => {
              closeServer();
              return callback(new Error('Expected error'));
            })
            .catch((err) => {
              closeServer();
              expect(err.stack).to.include('Originating from:');
              expect(err.stack).to.include('StripeResource.spec.ts');
              return callback();
            });
        });
      });
    });

    describe('usage', () => {
      it('is passed to the request sender', () => {
        const resource = new StripeResource(stripe);

        return resource
          ._makeRequest(
            'GET',
            '/v1/widgets/foo/boop',
            {bar: 'baz'},
            undefined,
            {
              usage: ['llama', 'bufo'],
            }
          )
          .then(() => {
            expect(
              stripe._requestSender._stripe.LAST_REQUEST.usage
            ).to.deep.equal(['llama', 'bufo']);
          });
      });
    });
  });
});
