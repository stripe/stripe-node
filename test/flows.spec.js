'use strict';

var testUtils = require('./testUtils');
var chai = require('chai');
var Promise = require('bluebird');
var stripe = require('../lib/stripe')(
  testUtils.getUserStripeKey(),
  'latest'
);

var expect = chai.expect;

var exp_year = new Date().getFullYear() + 1;

var CUSTOMER_DETAILS = {
  description: 'Some customer',
  card: 'tok_visa',
};

var CURRENCY = '_DEFAULT_CURRENCY_NOT_YET_GOTTEN_';

describe('Flows', function() {
  // Note: These tests must be run as one so we can retrieve the
  // default_currency (required in subsequent tests);

  var cleanup = new testUtils.CleanupUtility();
  this.timeout(30000);

  it('Allows me to retrieve default_currency', function() {
    return expect(
      stripe.account.retrieve()
        .then(function(acct) {
          CURRENCY = acct.default_currency;
          return acct;
        })
    ).to.eventually.have.deep.property('default_currency');
  });

  describe('Plan+Subscription flow', function() {
    it('Allows me to: Create a plan and subscribe a customer to it', function() {
      return expect(
        Promise.join(
          stripe.plans.create({
            id: 'plan' + testUtils.getRandomString(),
            amount: 1700,
            currency: CURRENCY,
            interval: 'month',
            name: 'Gold Super Amazing Tier',
          }),
          stripe.customers.create(CUSTOMER_DETAILS)
        ).then(function(j) {
          var plan = j[0];
          var customer = j[1];

          cleanup.deleteCustomer(customer.id);
          cleanup.deletePlan(plan.id);

          return stripe.customers.updateSubscription(customer.id, {
            plan: plan.id,
          });
        })
      ).to.eventually.have.property('status', 'active');
    });

    it(
      'Allows me to: Create a plan and subscribe a customer to it, and update subscription (multi-subs API)',
      function() {
        var plan;
        return expect(
          Promise.join(
            stripe.plans.create({
              id: 'plan' + testUtils.getRandomString(),
              amount: 1700,
              currency: CURRENCY,
              interval: 'month',
              name: 'Gold Super Amazing Tier',
            }),
            stripe.customers.create(CUSTOMER_DETAILS)
          ).then(function(j) {
            plan = j[0];
            var customer = j[1];

            cleanup.deleteCustomer(customer.id);
            cleanup.deletePlan(plan.id);

            return stripe.customers.createSubscription(customer.id, {
              plan: plan.id,
            });
          }).then(function(subscription) {
            return stripe.customers.updateSubscription(subscription.customer, subscription.id, {
              plan: plan.id, quantity: '3',
            });
          }).then(function(subscription) {
            return [subscription.status, subscription.quantity];
          })
        ).to.eventually.deep.equal(['active', 3]);
      }
    );

    it('Errors when I attempt to subscribe a customer to a non-existent plan', function() {
      return expect(
        stripe.customers.create(CUSTOMER_DETAILS)
          .then(function(customer) {
            cleanup.deleteCustomer(customer.id);

            return stripe.customers.updateSubscription(customer.id, {
              plan: 'someNonExistentPlan' + testUtils.getRandomString(),
            }).then(null, function(err) {
              // Resolve with the error so we can inspect it below
              return err;
            });
          })
      ).to.eventually.satisfy(function(err) {
        return err.type === 'StripeInvalidRequestError' &&
          err.rawType === 'invalid_request_error';
      });
    });

    it('Allows me to: subscribe then cancel with `at_period_end` defined', function() {
      return expect(
        Promise.join(
          stripe.plans.create({
            id: 'plan' + testUtils.getRandomString(),
            amount: 1700,
            currency: CURRENCY,
            interval: 'month',
            name: 'Silver Super Amazing Tier',
          }),
          stripe.customers.create(CUSTOMER_DETAILS)
        ).then(function(j) {
          var plan = j[0];
          var customer = j[1];

          cleanup.deleteCustomer(customer.id);
          cleanup.deletePlan(plan.id);

          return stripe.customers.updateSubscription(customer.id, {
            plan: plan.id,
          });
        }).then(function(subscription) {
          return stripe.customers.cancelSubscription(subscription.customer, {
            at_period_end: true,
          });
        })
      ).to.eventually.have.property('cancel_at_period_end', true);
    });

    describe('Plan name variations', function() {
      [
        '34535 355453' + testUtils.getRandomString(),
        'TEST 239291' + testUtils.getRandomString(),
        'TEST_a-i' + testUtils.getRandomString(),
        'foobarbazteston###etwothree' + testUtils.getRandomString(),
      ].forEach(function(planID) {
        it('Allows me to create and retrieve plan with ID: ' + planID, function() {
          var plan;
          return expect(
            stripe.plans.create({
              id: planID,
              amount: 1700,
              currency: CURRENCY,
              interval: 'month',
              name: 'generic',
            }).then(function() {
              cleanup.deletePlan(planID);
              return stripe.plans.retrieve(planID);
            })
          ).to.eventually.have.property('id', planID);
        });
      });
    });
  });

  describe('Coupon flow', function() {
    var customer;
    var coupon;

    describe('When I create a coupon & customer', function() {
      it('Does so', function() {
        return expect(
          Promise.join(
            stripe.coupons.create({
              percent_off: 20,
              duration: 'once',
            }),
            stripe.customers.create(CUSTOMER_DETAILS)
          ).then(function(joined) {
            coupon = joined[0];
            customer = joined[1];
          })
        ).to.not.be.eventually.rejected;
      });
      describe('And I apply the coupon to the customer', function() {
        it('Does so', function() {
          return expect(
            stripe.customers.update(customer.id, {
              coupon: coupon.id,
            })
          ).to.not.be.eventually.rejected;
        });
        it('Can be retrieved from that customer', function() {
          return expect(
            stripe.customers.retrieve(customer.id)
          ).to.eventually.have.deep.property('discount.coupon.id', coupon.id);
        });
        describe('The resulting discount', function() {
          it('Can be removed', function() {
            return expect(
              stripe.customers.deleteDiscount(customer.id)
            ).to.eventually.have.property('deleted', true);
          });
          describe('Re-querying it', function() {
            it('Does indeed indicate that it is deleted', function() {
              return expect(
                stripe.customers.retrieve(customer.id)
              ).to.eventually.have.deep.property('discount', null);
            });
          });
        });
      });
    });
  });

  describe('Metadata flow', function() {
    it('Can save and retrieve metadata', function() {
      var customer;
      return expect(
        stripe.customers.create(CUSTOMER_DETAILS)
          .then(function(cust) {
            customer = cust;
            cleanup.deleteCustomer(cust.id);
            return stripe.customers.setMetadata(cust.id, {foo: '123'});
          })
          .then(function() {
            return stripe.customers.getMetadata(customer.id);
          })
      ).to.eventually.deep.equal({foo: '123'});
    });
    it('Can reset metadata', function() {
      var customer;
      return expect(
        stripe.customers.create(CUSTOMER_DETAILS)
          .then(function(cust) {
            customer = cust;
            cleanup.deleteCustomer(cust.id);
            return stripe.customers.setMetadata(cust.id, {baz: '123'});
          })
          .then(function() {
            return stripe.customers.setMetadata(customer.id, null);
          })
          .then(function() {
            return stripe.customers.getMetadata(customer.id);
          })
      ).to.eventually.deep.equal({});
    });
    it('Resets metadata when setting new metadata', function() {
      var customer;
      return expect(
        stripe.customers.create(CUSTOMER_DETAILS)
          .then(function(cust) {
            customer = cust;
            cleanup.deleteCustomer(cust.id);
            return stripe.customers.setMetadata(cust.id, {foo: '123'});
          })
          .then(function() {
            return stripe.customers.setMetadata(customer.id, {baz: '456'});
          })
      ).to.eventually.deep.equal({baz: '456'});
    });
    it('Can set individual key/value pairs', function() {
      var customer;
      return expect(
        stripe.customers.create(CUSTOMER_DETAILS)
          .then(function(cust) {
            customer = cust;
            cleanup.deleteCustomer(cust.id);
          })
          .then(function() {
            return stripe.customers.setMetadata(customer.id, 'baz', 456);
          })
          .then(function() {
            return stripe.customers.setMetadata(customer.id, '_other_', 999);
          })
          .then(function() {
            return stripe.customers.setMetadata(customer.id, 'foo', 123);
          })
          .then(function() {
            // Change foo
            return stripe.customers.setMetadata(customer.id, 'foo', 222);
          })
          .then(function() {
            // Delete baz
            return stripe.customers.setMetadata(customer.id, 'baz', null);
          })
          .then(function() {
            return stripe.customers.getMetadata(customer.id);
          })
      ).to.eventually.deep.equal({_other_: '999', foo: '222'});
    });
    it('Can set individual key/value pairs [with per request token]', function() {
      var customer;
      var authToken = testUtils.getUserStripeKey();
      return expect(
        stripe.customers.create(CUSTOMER_DETAILS)
          .then(function(cust) {
            customer = cust;
            cleanup.deleteCustomer(cust.id);
          })
          .then(function() {
            return stripe.customers.setMetadata(customer.id, {'baz': 456}, authToken);
          })
          .then(function() {
            return stripe.customers.setMetadata(customer.id, '_other_', 999, authToken);
          })
          .then(function() {
            return stripe.customers.setMetadata(customer.id, 'foo', 123, authToken);
          })
          .then(function() {
            // Change foo
            return stripe.customers.setMetadata(customer.id, 'foo', 222, authToken);
          })
          .then(function() {
            // Delete baz
            return stripe.customers.setMetadata(customer.id, 'baz', null, authToken);
          })
          .then(function() {
            return stripe.customers.getMetadata(customer.id, authToken);
          })
      ).to.eventually.deep.equal({_other_: '999', foo: '222'});
    });
  });

  describe('Expanding', function() {
    describe('A customer within a charge', function() {
      it('Allows you to expand a customer object', function() {
        return expect(
          stripe.customers.create(CUSTOMER_DETAILS)
            .then(function(cust) {
              cleanup.deleteCustomer(cust.id);
              return stripe.charges.create({
                customer: cust.id,
                amount: 1700,
                currency: CURRENCY,
                expand: ['customer'],
              });
            })
        ).to.eventually.have.deep.property('customer.created');
      });
    });
    describe('A customer\'s default source', function() {
      it('Allows you to expand a default_source', function() {
        return expect(
          stripe.customers.create({
            description: 'Some customer',
            source: 'tok_visa',
            expand: ['default_source'],
          })
            .then(function(cust) {
              cleanup.deleteCustomer(cust.id);
              return cust;
            })
        // Confirm it's expanded by checking that some prop (e.g. exp_year) exists:
        ).to.eventually.have.deep.property('default_source.exp_year');
      });
    });
  });

  describe('Charge', function() {
    it('Allows you to create a charge', function() {
      return expect(
        stripe.charges.create({
          amount: 1234,
          currency: CURRENCY,
          card: 'tok_chargeDeclined',
          shipping: {
            name: 'Bobby Tables',
            address: {
              line1: '1 Foo St.',
            },
          },
        }).then(null, function(error) {
          return error;
        })
      ).to.eventually.have.deep.property('raw.charge');
    });
  });

  describe('Getting balance', function() {
    it('Allows me to do so', function() {
      return expect(
        stripe.balance.retrieve()
      ).to.eventually.have.property('object', 'balance');
    });
    it('Allows me to do so with specified auth key', function() {
      return expect(
        stripe.balance.retrieve(testUtils.getUserStripeKey())
      ).to.eventually.have.property('object', 'balance');
    });
  });

  describe('Creating a ThreeDSecure object', function() {
    it('Allows me to do so', function() {
      return expect(
        stripe.threeDSecure.create({
          card: 'tok_visa',
          amount: 1500,
          currency: 'usd',
          return_url: 'https://example.org/3d-secure-result',
        })
      ).to.eventually.have.property('object', 'three_d_secure');
    });
  });

  describe('Request/Response Events', function() {
    var connectedAccountId;

    before(function(done) {
      // Pick a random connected account to use in the `Stripe-Account` header
      stripe.accounts.list({
        limit: 1,
      }).then(function(accounts) {
        if (accounts.data.length < 1) {
          return done(
            new Error('Test requires at least one Connected Account in the Test Account')
          );
        }

        connectedAccountId = accounts.data[0].id;

        done();
      });
    });

    it('should emit a `request` event to listeners on request', function(done) {
      var apiVersion = '2017-06-05';
      var idempotencyKey = Math.random().toString(36).slice(2);

      function onRequest(request) {
        stripe.off('request', onRequest);

        expect(request).to.eql({
          api_version: 'latest',
          idempotency_key: idempotencyKey,
          method: 'POST',
          path: '/v1/charges',
          account: connectedAccountId,
        });

        done();
      }

      stripe.on('request', onRequest);

      stripe.charges.create({
        amount: 1234,
        currency: 'usd',
        card: 'tok_chargeDeclined',
      }, {
        stripe_version: apiVersion,
        idempotency_key: idempotencyKey,
        stripe_account: connectedAccountId,
      }).then(null, function() {
        // I expect there to be an error here.
      });
    });

    it('should emit a `response` event to listeners on response', function(done) {
      var apiVersion = '2017-06-05';
      var idempotencyKey = Math.random().toString(36).slice(2);

      function onResponse(response) {
        // On the off chance we're picking up a response from a differentrequest
        // then just ignore this and wait for the right one:
        if (response.idempotency_key !== idempotencyKey) {
          return;
        }

        stripe.off('response', onResponse);

        expect(response.api_version).to.equal(apiVersion);
        expect(response.idempotency_key).to.equal(idempotencyKey);
        expect(response.account).to.equal(connectedAccountId);
        expect(response.method).to.equal('POST');
        expect(response.path).to.equal('/v1/charges');
        expect(response.request_id).to.match(/req_[\w\d]/);
        expect(response.status).to.equal(402);
        expect(response.elapsed).to.be.within(50, 30000);;

        done();
      }

      stripe.on('response', onResponse);

      stripe.charges.create({
        amount: 1234,
        currency: 'usd',
        card: 'tok_chargeDeclined',
      }, {
        stripe_version: apiVersion,
        idempotency_key: idempotencyKey,
        stripe_account: connectedAccountId,
      }).then(null, function() {
        // I expect there to be an error here.
      });
    });

    it('should not emit a `response` event to removed listeners on response', function(done) {
      function onResponse(response) {
        done(new Error('How did you get here?'));
      }

      stripe.on('response', onResponse);
      stripe.off('response', onResponse);

      stripe.charges.create({
        amount: 1234,
        currency: 'usd',
        card: 'tok_visa',
      }).then(function() {
        done();
      });
    });
  });
});
