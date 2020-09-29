/* eslint-disable new-cap */

'use strict';

const testUtils = require('../testUtils');
const utils = require('../lib/utils');
const Stripe = require('../lib/stripe');
const stripe = require('../lib/stripe')(testUtils.getUserStripeKey(), 'latest');
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
        const stripe = Stripe(testUtils.getUserStripeKey(), item);
        expect(stripe.getApiField('version')).to.equal(null);
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

    it('Should include whether typescript: true was passed, respecting reinstantiations', () => {
      return new Promise((resolve) => resolve())
        .then(() => {
          const stripe = new Stripe('sk_test_123', {
            typescript: true,
          });
          return expect(
            new Promise((resolve, reject) => {
              stripe.getClientUserAgent((c) => {
                resolve(JSON.parse(c));
              });
            })
          ).to.eventually.have.property('typescript', 'true');
        })
        .then(() => {
          const stripe = new Stripe('sk_test_123', {});
          return expect(
            new Promise((resolve, reject) => {
              stripe.getClientUserAgent((c) => {
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

    describe('uname', () => {
      let origExec;
      beforeEach(() => {
        origExec = utils.safeExec;
      });
      afterEach(() => {
        utils.safeExec = origExec;
      });

      it('gets added to the user-agent', () => {
        utils.safeExec = (cmd, cb) => {
          cb(null, 'foøname');
        };
        return expect(
          new Promise((resolve, reject) => {
            stripe.getClientUserAgentSeeded({lang: 'node'}, (c) => {
              resolve(JSON.parse(c));
            });
          })
        ).to.eventually.have.property('uname', 'fo%C3%B8name');
      });

      it('sets uname to UNKOWN in case of an error', () => {
        utils.safeExec = (cmd, cb) => {
          cb(new Error('security'), null);
        };
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

  describe('setTimeout', () => {
    const defaultTimeout = 80000;
    it('Should define a default of 80000', () => {
      expect(stripe.getApiField('timeout')).to.equal(defaultTimeout);
    });
    it('Should allow me to set a custom timeout', () => {
      stripe.setTimeout(900);
      expect(stripe.getApiField('timeout')).to.equal(900);
    });
    it('Should allow me to set null, to reset to the default', () => {
      stripe.setTimeout(null);
      expect(stripe.getApiField('timeout')).to.equal(defaultTimeout);
    });
  });

  describe('setAppInfo', () => {
    describe('when given nothing or an empty object', () => {
      it('should unset stripe._appInfo', () => {
        stripe.setAppInfo();
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
          stripe.setAppInfo('foo');
        }).to.throw(/AppInfo must be an object./);
      });
    });

    describe('when given an object with no `name`', () => {
      it('should throw an error', () => {
        expect(() => {
          stripe.setAppInfo({});
        }).to.throw(/AppInfo.name is required/);

        expect(() => {
          stripe.setAppInfo({
            version: '1.2.3',
          });
        }).to.throw(/AppInfo.name is required/);

        expect(() => {
          stripe.setAppInfo({
            cats: '42',
          });
        }).to.throw(/AppInfo.name is required/);
      });
    });

    describe('when given at least a `name`', () => {
      it('should set name, partner ID, url, and version of stripe._appInfo', () => {
        stripe.setAppInfo({
          name: 'MyAwesomeApp',
        });
        expect(stripe._appInfo).to.eql({
          name: 'MyAwesomeApp',
        });

        stripe.setAppInfo({
          name: 'MyAwesomeApp',
          version: '1.2.345',
        });
        expect(stripe._appInfo).to.eql({
          name: 'MyAwesomeApp',
          version: '1.2.345',
        });

        stripe.setAppInfo({
          name: 'MyAwesomeApp',
          url: 'https://myawesomeapp.info',
        });
        expect(stripe._appInfo).to.eql({
          name: 'MyAwesomeApp',
          url: 'https://myawesomeapp.info',
        });

        stripe.setAppInfo({
          name: 'MyAwesomeApp',
          partner_id: 'partner_1234',
        });
        expect(stripe._appInfo).to.eql({
          name: 'MyAwesomeApp',
          partner_id: 'partner_1234',
        });
      });

      it('should ignore any invalid properties', () => {
        stripe.setAppInfo({
          name: 'MyAwesomeApp',
          partner_id: 'partner_1234',
          version: '1.2.345',
          url: 'https://myawesomeapp.info',
          countOfRadishes: 512,
        });
        expect(stripe._appInfo).to.eql({
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

      stripe.setAppInfo(appInfo);

      stripe.getClientUserAgent((uaString) => {
        expect(JSON.parse(uaString).application).to.eql(appInfo);

        expect(stripe.getAppInfoAsString()).to.eql(
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
      const Stripe = require('../lib/stripe');
      expect(
        new Stripe.errors.StripeInvalidRequestError({
          message: 'error',
        }).type
      ).to.equal('StripeInvalidRequestError');
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
