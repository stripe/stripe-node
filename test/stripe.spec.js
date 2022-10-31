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
      let origExec;
      beforeEach(() => {
        Stripe._UNAME_CACHE = null;
      });
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

  describe('imports', function() {
    const runTestProject = (projectName) => {
      const script = `
      cd testProjects/${projectName}
      npm install
      node index.js ${testUtils.getUserStripeKey()}
    `;
      require('child_process').execSync(script);
    };

    it('should work with CommonJS imports', () => {
      expect(runTestProject.bind(null, 'cjs')).to.not.throw();
    });

    it('should work with ESModule imports', function() {
      // Node supports ES Modules starting at v12
      if (parseInt(process.versions.node.split('.')[0], 10) <= 12) {
        this.skip();
      }

      expect(runTestProject.bind(null, 'mjs')).to.not.throw();
    });
  });
});
