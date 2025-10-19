// @ts-nocheck
/* eslint-disable new-cap */

'use strict';

import {expect} from 'chai';
import {StripeSignatureVerificationError} from '../src/Error.js';
import {ApiVersion} from '../src/apiVersion.js';
import {createStripe} from '../src/stripe.core.js';
import {createApiKeyAuthenticator} from '../src/utils.js';
import {
  FAKE_API_KEY,
  getMockPlatformFunctions,
  getRandomString,
  getStripeMockClient,
  getTestServerStripe,
} from './testUtils.js';
import Stripe = require('../src/stripe.cjs.node.js');
import crypto = require('crypto');
import {StripeContext} from '../src/StripeContext.js';

const stripe = getStripeMockClient();

const CUSTOMER_DETAILS = {
  description: 'Some customer',
  email: 'jenny.rosen@example.com',
};

describe('Stripe Module', function() {
  describe('config object', () => {
    it('should only accept either an object or a string', () => {
      expect(() => {
        Stripe(FAKE_API_KEY, 123);
      }).to.throw(/Config must either be an object or a string/);

      expect(() => {
        Stripe(FAKE_API_KEY, ['2019-12-12']);
      }).to.throw(/Config must either be an object or a string/);

      expect(() => {
        Stripe(FAKE_API_KEY, '2019-12-12');
      }).to.not.throw();

      expect(() => {
        Stripe(FAKE_API_KEY, {
          apiVersion: 'latest',
        });
      }).to.not.throw();
    });

    it('should only contain allowed properties', () => {
      expect(() => {
        Stripe(FAKE_API_KEY, {
          foo: 'bar',
          apiVersion: 'latest',
        });
      }).to.throw(/Config object may only contain the following:/);

      expect(() => {
        Stripe(FAKE_API_KEY, {
          apiVersion: '2019-12-12',
          maxNetworkRetries: 2,
          httpAgent: 'agent',
          timeout: 123,
          host: 'foo.stripe.com',
          port: 321,
        });
      }).to.not.throw();
    });

    it('API should use the default version when undefined or empty values are passed', () => {
      const cases = [null, undefined, '', {}];

      cases.forEach((item) => {
        expect(() => {
          Stripe(FAKE_API_KEY, item);
        }).to.not.throw();
      });

      cases.forEach((item) => {
        const newStripe = Stripe(FAKE_API_KEY, item);
        expect(newStripe.getApiField('version')).to.equal(ApiVersion);
      });
    });

    it('should enable telemetry if not explicitly set', () => {
      const newStripe = Stripe(FAKE_API_KEY);

      expect(newStripe.getTelemetryEnabled()).to.equal(true);
    });

    it('should enable telemetry if anything but "false" is set', () => {
      const vals = ['foo', null, undefined];
      let newStripe;

      vals.forEach((val) => {
        newStripe = Stripe(FAKE_API_KEY, {
          telemetry: val,
        });

        expect(newStripe.getTelemetryEnabled()).to.equal(true);
      });

      newStripe = Stripe(FAKE_API_KEY, {
        telemetry: false,
      });

      expect(newStripe.getTelemetryEnabled()).to.equal(false);
    });
  });

  describe('setApiKey', () => {
    it('uses Bearer auth', () => {
      expect(stripe._authenticator._apiKey).to.equal(`${FAKE_API_KEY}`);
    });

    it('should throw if no api key or authenticator provided', () => {
      expect(() => new Stripe(null)).to.throw(
        'Neither apiKey nor config.authenticator provided'
      );
    });
  });

  describe('authenticator', () => {
    it('should throw an error when specifying both key and authenticator', () => {
      expect(() => {
        return new Stripe('key', {
          authenticator: createApiKeyAuthenticator('...'),
        });
      }).to.throw("Can't specify both apiKey and authenticator");
    });

    it('can create client using authenticator', () => {
      const authenticator = createApiKeyAuthenticator('...');
      const stripe = new Stripe(null, {
        authenticator: authenticator,
      });

      expect(stripe._authenticator).to.equal(authenticator);
    });
  });

  describe('GetClientUserAgent', () => {
    it('Should return a user-agent serialized JSON object', () =>
      expect(
        new Promise((resolve, reject) => {
          stripe.getClientUserAgent((c) => {
            resolve(JSON.parse(c));
          });
        })
      ).to.eventually.have.property('lang', 'node'));

    it('Should return platform and version in the serialized user agent JSON object', async () => {
      // Check that the testing environment actually has a process global.
      expect(process.version).to.not.be.empty;
      expect(process.platform).to.not.be.empty;

      const userAgent = await new Promise((resolve, reject) => {
        stripe.getClientUserAgent((c) => {
          resolve(JSON.parse(c));
        });
      });

      expect(userAgent).to.have.property('lang_version', process.version);
      expect(userAgent).to.have.property('platform', process.platform);
    });

    it('Should include whether typescript: true was passed, respecting reinstantiations', () => {
      return new Promise((resolve) => resolve(null))
        .then(() => {
          const newStripe = new Stripe(FAKE_API_KEY, {
            typescript: true,
          });
          return expect(
            new Promise((resolve, reject) => {
              newStripe.getClientUserAgent((c) => {
                resolve(JSON.parse(c));
              });
            })
          ).to.eventually.have.property('typescript', 'true');
        })
        .then(() => {
          const newStripe = new Stripe(FAKE_API_KEY, {});
          return expect(
            new Promise((resolve, reject) => {
              newStripe.getClientUserAgent((c) => {
                resolve(JSON.parse(c));
              });
            })
          ).to.eventually.have.property('typescript', 'false');
        });
    });
  });

  describe('GetClientUserAgentSeeded', () => {
    it('Should return a user-agent serialized JSON object', () => {
      const userAgent = {lang: 'node'};
      return expect(
        new Promise((resolve, reject) => {
          stripe.getClientUserAgentSeeded(userAgent, (c) => {
            resolve(JSON.parse(c));
          });
        })
      ).to.eventually.have.property('lang', 'node');
    });

    it('Should URI-encode user-agent fields', () => {
      const userAgent = {lang: 'ï'};
      return expect(
        new Promise((resolve, reject) => {
          stripe.getClientUserAgentSeeded(userAgent, (c) => {
            resolve(JSON.parse(c));
          });
        })
      ).to.eventually.have.property('lang', '%C3%AF');
    });

    it('Should URI-encode the HTTP client name', () => {
      const userAgent = {lang: 'ï'};
      return expect(
        new Promise((resolve, reject) => {
          stripe.getClientUserAgentSeeded(userAgent, (c) => {
            resolve(JSON.parse(c));
          });
        })
      ).to.eventually.have.property('httplib', 'node');
    });

    describe('uname', () => {
      it('gets added to the user-agent', () => {
        const stripe = createStripe(
          getMockPlatformFunctions((cmd: string, cb: any): void => {
            cb(null, 'foøname');
          })
        )(FAKE_API_KEY, 'latest');
        return expect(
          new Promise((resolve, reject) => {
            stripe.getClientUserAgentSeeded({lang: 'node'}, (c) => {
              resolve(JSON.parse(c));
            });
          })
        ).to.eventually.have.property('uname', 'fo%C3%B8name');
      });

      it('sets uname to UNKNOWN in case of an error', () => {
        const stripe = createStripe(
          getMockPlatformFunctions((cmd: string, cb: any): void => {
            cb(new Error('security'), null);
          })
        )(FAKE_API_KEY, 'latest');
        return expect(
          new Promise((resolve, reject) => {
            stripe.getClientUserAgentSeeded({lang: 'node'}, (c) => {
              resolve(JSON.parse(c));
            });
          })
        ).to.eventually.have.property('uname', 'UNKNOWN');
      });
    });
  });

  describe('timeout config', () => {
    const defaultTimeout = 80000;
    it('Should define a default of 80000', () => {
      expect(stripe.getApiField('timeout')).to.equal(defaultTimeout);
    });
    it('Should allow me to set a custom timeout', () => {
      const newStripe = Stripe(FAKE_API_KEY, {
        timeout: 900,
      });
      expect(newStripe.getApiField('timeout')).to.equal(900);
    });
    it('Should allow me to set null, to reset to the default', () => {
      const newStripe = Stripe(FAKE_API_KEY, {
        timeout: null,
      });
      expect(newStripe.getApiField('timeout')).to.equal(defaultTimeout);
    });
  });

  describe('appInfo config', () => {
    describe('when given nothing or an empty object', () => {
      it('should unset stripe._appInfo', () => {
        expect(stripe._appInfo).to.be.undefined;
      });
    });

    describe('when not set', () => {
      it('should return empty string', () => {
        expect(stripe.getAppInfoAsString()).to.equal('');
      });
    });

    describe('when given a non-object variable', () => {
      it('should throw an error', () => {
        expect(() => {
          Stripe(FAKE_API_KEY, {
            appInfo: 'foo',
          });
        }).to.throw(/AppInfo must be an object./);
      });
    });

    describe('when given an object with no `name`', () => {
      it('should throw an error', () => {
        expect(() => {
          Stripe(FAKE_API_KEY, {
            appInfo: {},
          });
        }).to.throw(/AppInfo.name is required/);

        expect(() => {
          Stripe(FAKE_API_KEY, {
            appInfo: {
              version: '1.2.3',
            },
          });
        }).to.throw(/AppInfo.name is required/);

        expect(() => {
          Stripe(FAKE_API_KEY, {
            appInfo: {
              cats: '42',
            },
          });
        }).to.throw(/AppInfo.name is required/);
      });
    });

    describe('when given at least a `name`', () => {
      it('should set name, partner ID, url, and version of stripe._appInfo', () => {
        let newStripe = Stripe(FAKE_API_KEY, {
          appInfo: {
            name: 'MyAwesomeApp',
          },
        });
        expect(newStripe._appInfo).to.eql({
          name: 'MyAwesomeApp',
        });

        newStripe = Stripe(FAKE_API_KEY, {
          appInfo: {
            name: 'MyAwesomeApp',
            version: '1.2.345',
          },
        });
        expect(newStripe._appInfo).to.eql({
          name: 'MyAwesomeApp',
          version: '1.2.345',
        });

        newStripe = Stripe(FAKE_API_KEY, {
          appInfo: {
            name: 'MyAwesomeApp',
            url: 'https://myawesomeapp.info',
          },
        });
        expect(newStripe._appInfo).to.eql({
          name: 'MyAwesomeApp',
          url: 'https://myawesomeapp.info',
        });

        newStripe = Stripe(FAKE_API_KEY, {
          appInfo: {
            name: 'MyAwesomeApp',
            partner_id: 'partner_1234',
          },
        });
        expect(newStripe._appInfo).to.eql({
          name: 'MyAwesomeApp',
          partner_id: 'partner_1234',
        });
      });

      it('should ignore any invalid properties', () => {
        const newStripe = Stripe(FAKE_API_KEY, {
          appInfo: {
            name: 'MyAwesomeApp',
            partner_id: 'partner_1234',
            version: '1.2.345',
            url: 'https://myawesomeapp.info',
            countOfRadishes: 512,
          },
        });
        expect(newStripe._appInfo).to.eql({
          name: 'MyAwesomeApp',
          partner_id: 'partner_1234',
          version: '1.2.345',
          url: 'https://myawesomeapp.info',
        });
      });
    });

    it('should be included in the ClientUserAgent and be added to the UserAgent String', (done) => {
      const appInfo = {
        name: getRandomString(),
        version: '1.2.345',
        url: 'https://myawesomeapp.info',
      };

      const newStripe = Stripe(FAKE_API_KEY, {
        appInfo,
      });

      newStripe.getClientUserAgent((uaString) => {
        expect(JSON.parse(uaString).application).to.eql(appInfo);

        expect(newStripe.getAppInfoAsString()).to.eql(
          `${appInfo.name}/${appInfo.version} (${appInfo.url})`
        );

        done();
      });
    });
  });

  describe('Callback support', () => {
    describe('Any given endpoint', () => {
      it('Will call a callback if successful', () =>
        expect(
          new Promise((resolve, reject) => {
            stripe.customers.create(CUSTOMER_DETAILS, (err, customer) => {
              resolve('Called!');
            });
          })
        ).to.eventually.equal('Called!'));

      describe('lastResponse', () => {
        it('Will expose HTTP response object', () =>
          expect(
            new Promise((resolve, reject) => {
              stripe.customers.create(CUSTOMER_DETAILS, (err, customer) => {
                if (err) return reject(err);
                const headers = customer.lastResponse.headers;
                expect(headers).to.contain.keys('request-id');

                expect(customer.headers).to.be.undefined;

                resolve('Called!');
              });
            })
          ).to.eventually.equal('Called!'));

        it('Will have request id and status code', () =>
          expect(
            new Promise((resolve, reject) => {
              stripe.customers.create(CUSTOMER_DETAILS, (_err, customer) => {
                expect(customer.lastResponse.requestId).to.match(/^req_/);
                expect(customer.lastResponse.statusCode).to.equal(200);

                resolve('Called!');
              });
            })
          ).to.eventually.equal('Called!'));

        it('Will have the idempotency key', () =>
          expect(
            new Promise((resolve, reject) => {
              // @ts-ignore - "Property 'randomBytes' does not exist on type 'Crypto'""
              const key = crypto.randomBytes(16).toString('hex');

              stripe.customers.create(
                CUSTOMER_DETAILS,
                {
                  idempotencyKey: key,
                },
                (err, customer) => {
                  expect(customer.lastResponse.idempotencyKey).to.equal(key);

                  resolve('Called!');
                }
              );
            })
          ).to.eventually.equal('Called!'));
      });

      it('Given an error the callback will receive it', () =>
        expect(
          new Promise((resolve, reject) => {
            stripe.customers.create(
              {this_is_not_a_real_param: 'foobar'},
              (err, customer) => {
                if (err) {
                  resolve('ErrorWasPassed');
                } else {
                  reject(new Error('NoErrorPassed'));
                }
              }
            );
          })
        ).to.eventually.become('ErrorWasPassed'));
    });
  });

  describe('errors', () => {
    it('Exports errors as types', () => {
      expect(
        new Stripe.errors.StripeInvalidRequestError({
          message: 'error',
        }).type
      ).to.equal('StripeInvalidRequestError');
    });
  });

  describe('stripeAccount', () => {
    describe('when passed in via the config object', () => {
      let headers;
      let stripeClient;
      let closeServer;
      beforeEach((callback) => {
        getTestServerStripe(
          {
            stripeAccount: 'my_stripe_account',
          },
          (req, res) => {
            headers = req.headers;
            res.writeHeader(200);
            res.write('{}');
            res.end();
          },
          (err, client, close) => {
            if (err) {
              return callback(err);
            }
            stripeClient = client;
            closeServer = close;
            return callback();
          }
        );
      });
      afterEach(() => closeServer());
      it('is respected', (callback) => {
        stripeClient.customers.create((err) => {
          closeServer();
          if (err) {
            return callback(err);
          }
          expect(headers['stripe-account']).to.equal('my_stripe_account');
          return callback();
        });
      });
      it('can still be overridden per-request', (callback) => {
        stripeClient.customers.create(
          {stripeAccount: 'my_other_stripe_account'},
          (err) => {
            closeServer();
            if (err) {
              return callback(err);
            }
            expect(headers['stripe-account']).to.equal(
              'my_other_stripe_account'
            );
            return callback();
          }
        );
      });
    });
    describe('gets removed', () => {
      let headers;
      let stripeClient;
      let closeServer;
      beforeEach((callback) => {
        getTestServerStripe(
          {},
          (req, res) => {
            headers = req.headers;
            res.writeHeader(200);
            res.write('{}');
            res.end();
          },
          (err, client, close) => {
            if (err) {
              return callback(err);
            }
            stripeClient = client;
            closeServer = close;
            return callback();
          }
        );
      });
      afterEach(() => closeServer());

      it('if explicitly undefined', (callback) => {
        stripeClient.customers.create({stripeAccount: undefined}, (err) => {
          closeServer();
          if (err) {
            return callback(err);
          }
          expect(Object.keys(headers)).not.to.include('stripe-account');
          return callback();
        });
      });

      it('if explicitly null', (callback) => {
        stripeClient.customers.create({stripeAccount: null}, (err) => {
          closeServer();
          if (err) {
            return callback(err);
          }
          expect(Object.keys(headers)).not.to.include('stripe-account');
          return callback();
        });
      });
    });
  });

  describe('context', () => {
    describe('when passed in via the config object', () => {
      let headers;
      let stripeClient;
      let closeServer;
      beforeEach((callback) => {
        getTestServerStripe(
          {
            stripeContext: 'ctx_123',
          },
          (req, res) => {
            headers = req.headers;
            res.writeHeader(200);
            res.write('{}');
            res.end();
          },
          (err, client, close) => {
            if (err) {
              return callback(err);
            }
            stripeClient = client;
            closeServer = close;
            return callback();
          }
        );
      });
      afterEach(() => closeServer());
      it('is sent on v1 call', (callback) => {
        stripeClient.customers.create((err) => {
          closeServer();
          if (err) {
            return callback(err);
          }
          expect(headers['stripe-context']).to.equal('ctx_123');
          return callback();
        });
      });
      it('is respected', (callback) => {
        stripeClient.v2.billing.meterEventSession.create((err) => {
          closeServer();
          if (err) {
            return callback(err);
          }
          expect(headers['stripe-context']).to.equal('ctx_123');
          return callback();
        });
      });
      it('can still be overridden per-request', (callback) => {
        stripeClient.v2.billing.meterEventSession.create(
          {name: 'llama'},
          {stripeContext: 'ctx_456'},
          (err) => {
            closeServer();
            if (err) {
              return callback(err);
            }
            expect(headers['stripe-context']).to.equal('ctx_456');
            return callback();
          }
        );
      });
    });
  });

  describe('setMaxNetworkRetries', () => {
    describe('when given an empty or non-number variable', () => {
      it('should error', () => {
        expect(() => {
          stripe._setApiNumberField('maxNetworkRetries', 'foo');
        }).to.throw(/maxNetworkRetries must be an integer/);

        expect(() => {
          stripe._setApiNumberField('maxNetworkRetries');
        }).to.throw(/maxNetworkRetries must be an integer/);
      });
    });

    describe('when passed in via the config object', () => {
      it('should default to 2 if a non-integer is passed', () => {
        const newStripe = Stripe(FAKE_API_KEY, {
          maxNetworkRetries: 'foo',
        });

        expect(newStripe.getMaxNetworkRetries()).to.equal(2);

        expect(() => {
          Stripe(FAKE_API_KEY, {
            maxNetworkRetries: 2,
          });
        }).to.not.throw();
      });

      it('should correctly set the amount of network retries', () => {
        const newStripe = Stripe(FAKE_API_KEY, {
          maxNetworkRetries: 5,
        });

        expect(newStripe.getMaxNetworkRetries()).to.equal(5);
      });
    });

    describe('when not set', () => {
      it('should use the default', () => {
        const newStripe = Stripe(FAKE_API_KEY);

        expect(newStripe.getMaxNetworkRetries()).to.equal(2);
      });
    });
  });

  describe('VERSION', () => {
    it('should return the current package version', () => {
      const newStripe = Stripe(FAKE_API_KEY);

      expect(newStripe.VERSION).to.equal(Stripe.PACKAGE_VERSION);
    });
  });

  describe('parseEventNotification', () => {
    const secret = 'whsec_test_secret';

    it('can parse event from JSON payload', () => {
      const jsonPayload = {
        type: 'account.created',
        data: 'hello',
        related_object: {id: '123', url: 'hello_again'},
      };
      const payload = JSON.stringify(jsonPayload);
      const header = stripe.webhooks.generateTestHeaderString({
        payload,
        secret,
      });
      const event = stripe.parseEventNotification(payload, header, secret);

      expect(event.type).to.equal(jsonPayload.type);
      expect(event.data).to.equal(jsonPayload.data);
      expect(event.related_object.id).to.equal(jsonPayload.related_object.id);
      expect(event.context).to.be.undefined;
    });

    it('throws an error for invalid signatures', () => {
      const payload = JSON.stringify({event_type: 'account.created'});

      expect(() => {
        stripe.parseEventNotification(payload, 'bad sigheader', secret);
      }).to.throw(StripeSignatureVerificationError);
    });

    it('should parse webhook with a functioning fetchEvent method', (done) => {
      const jsonPayload = {
        id: 'evt_123',
        type: 'account.created',
      };
      const jsonWithData = {
        ...jsonPayload,
        data: 'hello',
      };
      let telemetryHeader;
      let shouldStayOpen = true;
      return getTestServerStripe(
        {},
        (req, res) => {
          telemetryHeader = req.headers['x-stripe-client-telemetry'];
          res.setHeader('Request-Id', `req_1`);
          if (
            req.url === '/v2/core/events/evt_123' &&
            req.headers['stripe-context'] == null
          ) {
            res.write(JSON.stringify(jsonWithData));
          } else {
            res.writeHead(404);
            res.write(
              JSON.stringify({
                error: 'not found; something about test setup is wrong',
              })
            );
          }
          res.end();
          const ret = {shouldStayOpen};
          shouldStayOpen = false;
          return ret;
        },
        async (err, stripe, closeServer) => {
          if (err) return done(err);
          try {
            const payload = JSON.stringify(jsonPayload);
            const header = stripe.webhooks.generateTestHeaderString({
              payload,
              secret,
            });

            const event = stripe.parseEventNotification(
              payload,
              header,
              secret
            );

            expect(event.fetchEvent).to.be.a('function');
            // this is always present, but hidden in the types if there's no object
            // not easy to add conditionally because we don't know at runtime if we have a type for the event or not
            expect(event.fetchRelatedObject).to.be.a('function');
            expect(await event.fetchRelatedObject()).to.be.null;
            const pulled = await event.fetchEvent();
            expect(pulled.data).to.equal(jsonWithData.data);
            // Have to call another requests for metrics to be sent.
            await event.fetchEvent();
            expect(telemetryHeader).to.exist;
            expect(
              JSON.parse(telemetryHeader).last_request_metrics.usage
            ).to.deep.equal(['fetch_event']);

            closeServer();
            done();
          } catch (err) {
            return done(err);
          }
        }
      );
    });

    it('should use the context property when pulling, if available', (done) => {
      const jsonPayload = {
        id: 'evt_123',
        context: 'acct_123',
        type: 'account.created',
      };
      const jsonWithData = {
        ...jsonPayload,
        data: 'hello',
      };
      return getTestServerStripe(
        {},
        (req, res) => {
          if (
            req.url === '/v2/core/events/evt_123' &&
            req.headers['stripe-context'] === 'acct_123'
          ) {
            res.write(JSON.stringify(jsonWithData));
          } else {
            res.writeHead(404);
            res.write(
              JSON.stringify({
                error: 'not found; something about test setup is wrong',
              })
            );
          }
          res.end();
        },
        async (err, stripe, closeServer) => {
          if (err) return done(err);
          try {
            const payload = JSON.stringify(jsonPayload);
            const header = stripe.webhooks.generateTestHeaderString({
              payload,
              secret,
            });

            const event = stripe.parseEventNotification(
              payload,
              header,
              secret
            );

            expect(event.context).to.be.instanceOf(StripeContext);
            expect(event.context.toString()).to.equal('acct_123');
            expect(event.fetchEvent).to.be.a('function');
            expect(event.fetch_related_object).not.to.be.a('function');
            const pulled = await event.fetchEvent();
            expect(pulled.data).to.equal(jsonWithData.data);

            closeServer();
            done();
          } catch (err) {
            console.log(err);
            return done(err);
          }
        }
      );
    });

    it('should parse webhook with a functioning fetchRelatedObject method', (done) => {
      let telemetryHeader;
      let shouldStayOpen = true;
      getTestServerStripe(
        {},
        (req, res) => {
          telemetryHeader = req.headers['x-stripe-client-telemetry'];
          res.setHeader('Request-Id', `req_1`);
          if (
            req.url === '/api/whatever/obj_123' &&
            req.headers['stripe-context'] == null
          ) {
            res.write(JSON.stringify({id: 'obj_123', data: 'some data'}));
          } else {
            res.writeHead(404);
            res.write(
              JSON.stringify({
                error: 'not found; something about test setup is wrong',
              })
            );
          }
          res.end();
          const ret = {shouldStayOpen};
          shouldStayOpen = false;
          return ret;
        },
        async (err, stripe, closeServer) => {
          if (err) return done(err);
          const jsonPayload = {
            id: 'evt_123',
            type: 'account.created',
            related_object: {
              id: '123',
              url: `/api/whatever/obj_123`,
            },
          };

          try {
            const payload = JSON.stringify(jsonPayload);
            const header = stripe.webhooks.generateTestHeaderString({
              payload,
              secret,
            });

            const event = stripe.parseEventNotification(
              payload,
              header,
              secret
            );

            expect(event.fetchRelatedObject).to.be.a('function');
            const relatedObj = await event.fetchRelatedObject();
            expect(relatedObj.id).to.equal('obj_123');
            expect(relatedObj.data).to.equal('some data');

            await event.fetchRelatedObject();
            expect(
              JSON.parse(telemetryHeader).last_request_metrics.usage
            ).to.deep.equal(['fetch_related_object']);

            closeServer();
            done();
          } catch (err) {
            return done(err);
          }
        }
      );
    });

    it('should use the context property when fetching relatedObject, if available', (done) => {
      getTestServerStripe(
        {},
        (req, res) => {
          if (
            req.url === '/api/whatever/obj_123' &&
            req.headers['stripe-context'] === 'acct_123'
          ) {
            res.write(JSON.stringify({id: 'obj_123', data: 'some data'}));
          } else {
            res.writeHead(404);
            res.write(JSON.stringify({error: 'not found'}));
          }
          res.end();
        },
        async (err, stripe, closeServer) => {
          if (err) return done(err);
          const jsonPayload = {
            id: 'evt_123',
            type: 'account.created',
            context: 'acct_123',
            related_object: {
              id: '123',
              url: `/api/whatever/obj_123`,
            },
          };

          try {
            const payload = JSON.stringify(jsonPayload);
            const header = stripe.webhooks.generateTestHeaderString({
              payload,
              secret,
            });

            const event = stripe.parseEventNotification(
              payload,
              header,
              secret
            );

            expect(event.fetchRelatedObject).to.be.a('function');
            const relatedObj = await event.fetchRelatedObject();

            expect(relatedObj.id).to.equal('obj_123');
            expect(relatedObj.data).to.equal('some data');

            closeServer();
            done();
          } catch (err) {
            return done(err);
          }
        }
      );
    });
  });

  describe('rawRequest', () => {
    const returnedCustomer = {
      id: 'cus_123',
    };

    it('should make request with specified encoding FORM', (done) => {
      return getTestServerStripe(
        {},
        (req, res) => {
          expect(req.headers['content-type']).to.equal(
            'application/x-www-form-urlencoded'
          );
          expect(req.headers['stripe-version']).to.equal(ApiVersion);
          const requestBody = [];
          req.on('data', (chunks) => {
            requestBody.push(chunks);
          });
          req.on('end', () => {
            const body = Buffer.concat(requestBody).toString();
            expect(body).to.equal('description=test%20customer');
          });
          res.write(JSON.stringify(returnedCustomer));
          res.end();
        },
        async (err, stripe, closeServer) => {
          if (err) return done(err);
          try {
            const result = await stripe.rawRequest(
              'POST',
              '/v1/customers',
              {description: 'test customer'},
              {}
            );
            expect(result).to.deep.equal(returnedCustomer);
            closeServer();
            done();
          } catch (err) {
            return done(err);
          }
        }
      );
    });

    it('should make request with specified encoding JSON', (done) => {
      return getTestServerStripe(
        {},
        (req, res) => {
          expect(req.headers['content-type']).to.equal('application/json');
          expect(req.headers['stripe-version']).to.equal(ApiVersion);
          expect(req.headers.foo).to.equal('bar');
          const requestBody = [];
          req.on('data', (chunks) => {
            requestBody.push(chunks);
          });
          req.on('end', () => {
            const body = Buffer.concat(requestBody).toString();
            expect(body).to.equal(
              '{"description":"test meter event","created":"1234567890"}'
            );
          });
          res.write(JSON.stringify(returnedCustomer));
          res.end();
        },
        async (err, stripe, closeServer) => {
          if (err) return done(err);
          try {
            const result = await stripe.rawRequest(
              'POST',
              '/v2/billing/meter_events',
              {
                description: 'test meter event',
                created: new Date('2009-02-13T23:31:30Z'),
              },
              {additionalHeaders: {foo: 'bar'}}
            );
            expect(result).to.deep.equal(returnedCustomer);
            closeServer();
            done();
          } catch (err) {
            return done(err);
          }
        }
      );
    });

    it('defaults to form encoding request if not specified', (done) => {
      return getTestServerStripe(
        {},
        (req, res) => {
          expect(req.headers['content-type']).to.equal(
            'application/x-www-form-urlencoded'
          );
          const requestBody = [];
          req.on('data', (chunks) => {
            requestBody.push(chunks);
          });
          req.on('end', () => {
            const body = Buffer.concat(requestBody).toString();
            expect(body).to.equal(
              'description=test%20customer&created=1234567890'
            );
          });
          res.write(JSON.stringify(returnedCustomer));
          res.end();
        },
        async (err, stripe, closeServer) => {
          if (err) return done(err);
          try {
            const result = await stripe.rawRequest('POST', '/v1/customers', {
              description: 'test customer',
              created: new Date('2009-02-13T23:31:30Z'),
            });
            expect(result).to.deep.equal(returnedCustomer);
            closeServer();
            done();
          } catch (err) {
            return done(err);
          }
        }
      );
    });

    it('should make request with specified additional headers', (done) => {
      return getTestServerStripe(
        {},
        (req, res) => {
          expect(req.headers.foo).to.equal('bar');
          res.write(JSON.stringify(returnedCustomer));
          res.end();
        },
        async (err, stripe, closeServer) => {
          if (err) return done(err);
          try {
            const result = await stripe.rawRequest(
              'GET',
              '/v1/customers/cus_123',
              {},
              {additionalHeaders: {foo: 'bar'}}
            );
            expect(result).to.deep.equal(returnedCustomer);
            closeServer();
            done();
          } catch (err) {
            return done(err);
          }
        }
      );
    });

    it('should make request successfully', async () => {
      const response = await stripe.rawRequest('GET', '/v1/customers', {});

      expect(response).to.have.property('object', 'list');
    });

    it("should include 'raw_request' in usage telemetry", (done) => {
      let telemetryHeader;
      let shouldStayOpen = true;
      return getTestServerStripe(
        {},
        (req, res) => {
          telemetryHeader = req.headers['x-stripe-client-telemetry'];
          res.setHeader('Request-Id', `req_1`);
          res.writeHeader(200);
          res.write('{}');
          res.end();
          const ret = {shouldStayOpen};
          shouldStayOpen = false;
          return ret;
        },
        async (err, stripe, closeServer) => {
          if (err) return done(err);
          try {
            await stripe.rawRequest(
              'POST',
              '/v1/customers',
              {description: 'test customer'},
              {}
            );
            expect(telemetryHeader).to.equal(undefined);
            await stripe.rawRequest(
              'POST',
              '/v1/customers',
              {description: 'test customer'},
              {}
            );
            expect(
              JSON.parse(telemetryHeader).last_request_metrics.usage
            ).to.deep.equal(['raw_request']);
            closeServer();
            done();
          } catch (err) {
            return done(err);
          }
        }
      );
    });

    it('should throw error when passing in params to non-POST request', async () => {
      await expect(
        stripe.rawRequest('GET', '/v1/customers/cus_123', {foo: 'bar'})
      ).to.be.rejectedWith(
        Error,
        /rawRequest only supports params on POST requests. Please pass null and add your parameters to path./
      );
    });
  });
});
