/* eslint-disable new-cap */

'use strict';

import {FetchHttpClient} from '../cjs/net/FetchHttpClient.js';
import {NodeHttpClient} from '../cjs/net/NodeHttpClient.js';
import {createStripe} from '../cjs/stripe.core';
import {getMockPlatformFunctions} from './testUtils.js';

const testUtils = require('./testUtils.js');
const Stripe = require('../cjs/stripe.cjs.node');
const stripe = require('../cjs/stripe.cjs.node')(
  testUtils.getUserStripeKey(),
  'latest'
);
const crypto = require('crypto');

const expect = require('chai').expect;

const CUSTOMER_DETAILS = {
  description: 'Some customer',
  card: 'tok_visa',
};

describe('Stripe Module', function() {
  const cleanup = new testUtils.CleanupUtility();
  this.timeout(20000);

  describe('config object', () => {
    it('should only accept either an object or a string', () => {
      expect(() => {
        Stripe(testUtils.getUserStripeKey(), 123);
      }).to.throw(/Config must either be an object or a string/);

      expect(() => {
        Stripe(testUtils.getUserStripeKey(), ['2019-12-12']);
      }).to.throw(/Config must either be an object or a string/);

      expect(() => {
        Stripe(testUtils.getUserStripeKey(), '2019-12-12');
      }).to.not.throw();

      expect(() => {
        Stripe(testUtils.getUserStripeKey(), {
          apiVersion: 'latest',
        });
      }).to.not.throw();
    });

    it('should only contain allowed properties', () => {
      expect(() => {
        Stripe(testUtils.getUserStripeKey(), {
          foo: 'bar',
          apiVersion: 'latest',
        });
      }).to.throw(/Config object may only contain the following:/);

      expect(() => {
        Stripe(testUtils.getUserStripeKey(), {
          apiVersion: '2019-12-12',
          maxNetworkRetries: 2,
          httpAgent: 'agent',
          timeout: 123,
          host: 'foo.stripe.com',
          port: 321,
        });
      }).to.not.throw();
    });
    it('should forbid sending http to *.stripe.com', () => {
      expect(() => {
        Stripe(testUtils.getUserStripeKey(), {
          host: 'foo.stripe.com',
          protocol: 'http',
        });
      }).to.throw(/The `https` protocol must be used/);

      expect(() => {
        Stripe(testUtils.getUserStripeKey(), {
          protocol: 'http',
        });
      }).to.throw(/The `https` protocol must be used/);

      expect(() => {
        Stripe(testUtils.getUserStripeKey(), {
          protocol: 'http',
          host: 'api.stripe.com',
        });
      }).to.throw(/The `https` protocol must be used/);

      expect(() => {
        Stripe(testUtils.getUserStripeKey(), {
          protocol: 'https',
          host: 'api.stripe.com',
        });
      }).not.to.throw();

      expect(() => {
        Stripe(testUtils.getUserStripeKey(), {
          host: 'api.stripe.com',
        });
      }).not.to.throw();

      expect(() => {
        Stripe(testUtils.getUserStripeKey(), {
          protocol: 'http',
          host: 'localhost',
        });
      }).not.to.throw();
    });

    it('should perform a no-op if null, undefined or empty values are passed', () => {
      const cases = [null, undefined, '', {}];

      cases.forEach((item) => {
        expect(() => {
          Stripe(testUtils.getUserStripeKey(), item);
        }).to.not.throw();
      });

      cases.forEach((item) => {
        const newStripe = Stripe(testUtils.getUserStripeKey(), item);
        expect(newStripe.getApiField('version')).to.equal(null);
      });
    });

    it('should enable telemetry if not explicitly set', () => {
      const newStripe = Stripe(testUtils.getUserStripeKey());

      expect(newStripe.getTelemetryEnabled()).to.equal(true);
    });

    it('should enable telemetry if anything but "false" is set', () => {
      const vals = ['foo', null, undefined];
      let newStripe;

      vals.forEach((val) => {
        newStripe = Stripe(testUtils.getUserStripeKey(), {
          telemetry: val,
        });

        expect(newStripe.getTelemetryEnabled()).to.equal(true);
      });

      newStripe = Stripe(testUtils.getUserStripeKey(), {
        telemetry: false,
      });

      expect(newStripe.getTelemetryEnabled()).to.equal(false);
    });
  });

  describe('setApiKey', () => {
    it('uses Bearer auth', () => {
      expect(stripe.getApiField('auth')).to.equal(
        `Bearer ${testUtils.getUserStripeKey()}`
      );
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
          const newStripe = new Stripe('sk_test_123', {
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
          const newStripe = new Stripe('sk_test_123', {});
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
        )(testUtils.getUserStripeKey(), 'latest');
        return expect(
          new Promise((resolve, reject) => {
            stripe.getClientUserAgentSeeded({lang: 'node'}, (c) => {
              resolve(JSON.parse(c));
            });
          })
        ).to.eventually.have.property('uname', 'fo%C3%B8name');
      });

      it('sets uname to UNKOWN in case of an error', () => {
        const stripe = createStripe(
          getMockPlatformFunctions((cmd: string, cb: any): void => {
            cb(new Error('security'), null);
          })
        )(testUtils.getUserStripeKey(), 'latest');
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
      const newStripe = Stripe('sk_test', {
        timeout: 900,
      });
      expect(newStripe.getApiField('timeout')).to.equal(900);
    });
    it('Should allow me to set null, to reset to the default', () => {
      const newStripe = Stripe('sk_test', {
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
          Stripe('sk_test', {
            appInfo: 'foo',
          });
        }).to.throw(/AppInfo must be an object./);
      });
    });

    describe('when given an object with no `name`', () => {
      it('should throw an error', () => {
        expect(() => {
          Stripe('sk_test', {
            appInfo: {},
          });
        }).to.throw(/AppInfo.name is required/);

        expect(() => {
          Stripe('sk_test', {
            appInfo: {
              version: '1.2.3',
            },
          });
        }).to.throw(/AppInfo.name is required/);

        expect(() => {
          Stripe('sk_test', {
            appInfo: {
              cats: '42',
            },
          });
        }).to.throw(/AppInfo.name is required/);
      });
    });

    describe('when given at least a `name`', () => {
      it('should set name, partner ID, url, and version of stripe._appInfo', () => {
        let newStripe = Stripe('sk_test', {
          appInfo: {
            name: 'MyAwesomeApp',
          },
        });
        expect(newStripe._appInfo).to.eql({
          name: 'MyAwesomeApp',
        });

        newStripe = Stripe('sk_test', {
          appInfo: {
            name: 'MyAwesomeApp',
            version: '1.2.345',
          },
        });
        expect(newStripe._appInfo).to.eql({
          name: 'MyAwesomeApp',
          version: '1.2.345',
        });

        newStripe = Stripe('sk_test', {
          appInfo: {
            name: 'MyAwesomeApp',
            url: 'https://myawesomeapp.info',
          },
        });
        expect(newStripe._appInfo).to.eql({
          name: 'MyAwesomeApp',
          url: 'https://myawesomeapp.info',
        });

        newStripe = Stripe('sk_test', {
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
        const newStripe = Stripe('sk_test', {
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
        name: testUtils.getRandomString(),
        version: '1.2.345',
        url: 'https://myawesomeapp.info',
      };

      const newStripe = Stripe('sk_test', {
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
              cleanup.deleteCustomer(customer.id);
              resolve('Called!');
            });
          })
        ).to.eventually.equal('Called!'));

      describe('lastResponse', () => {
        it('Will expose HTTP response object', () =>
          expect(
            new Promise((resolve, reject) => {
              stripe.customers.create(CUSTOMER_DETAILS, (err, customer) => {
                cleanup.deleteCustomer(customer.id);

                const headers = customer.lastResponse.headers;
                expect(headers).to.contain.keys('request-id');

                expect(customer.headers).to.be.undefined;

                resolve('Called!');
              });
            })
          ).to.eventually.equal('Called!'));

        it('Will have request id, status code and version', () =>
          expect(
            new Promise((resolve, reject) => {
              stripe.customers.create(CUSTOMER_DETAILS, (_err, customer) => {
                cleanup.deleteCustomer(customer.id);

                expect(customer.lastResponse.requestId).to.match(/^req_/);
                expect(customer.lastResponse.statusCode).to.equal(200);
                expect(customer.lastResponse.apiVersion).to.be.a('string').that
                  .is.not.empty;

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
                  cleanup.deleteCustomer(customer.id);

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
            stripe.customers.createSource(
              'nonExistentCustId',
              {card: {}},
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
        testUtils.getTestServerStripe(
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
      it('should default to 0 if a non-integer is passed', () => {
        const newStripe = Stripe(testUtils.getUserStripeKey(), {
          maxNetworkRetries: 'foo',
        });

        expect(newStripe.getMaxNetworkRetries()).to.equal(0);

        expect(() => {
          Stripe(testUtils.getUserStripeKey(), {
            maxNetworkRetries: 2,
          });
        }).to.not.throw();
      });

      it('should correctly set the amount of network retries', () => {
        const newStripe = Stripe(testUtils.getUserStripeKey(), {
          maxNetworkRetries: 5,
        });

        expect(newStripe.getMaxNetworkRetries()).to.equal(5);
      });
    });

    describe('when not set', () => {
      it('should use the default', () => {
        const newStripe = Stripe(testUtils.getUserStripeKey());

        expect(newStripe.getMaxNetworkRetries()).to.equal(0);
      });
    });
  });

  describe('VERSION', () => {
    it('should return the current package version', () => {
      const newStripe = Stripe(testUtils.getUserStripeKey());

      expect(newStripe.VERSION).to.equal(Stripe.PACKAGE_VERSION);
    });
  });
});
