'use strict';

var testUtils = require('./testUtils');
var chai = require('chai');
var when = require('when');
var stripe = require('../lib/stripe')(
  testUtils.getUserStripeKey()
);

var expect = chai.expect;

var CUSTOMER_DETAILS = {
  description: 'Some customer',
  card: {
    number: '4242424242424242',
    exp_month: 12,
    exp_year: 2015
  }
};

describe('Stripe Module', function() {

  var cleanup = new testUtils.CleanupUtility();
  this.timeout(20000);

  describe('Example cases', function() {

    describe('Customer+Card', function() {

      it('allows me to: create Customer', function(done) {

        return expect(
          stripe.customers.create(CUSTOMER_DETAILS)
            .then(function(customer) {
              cleanup.deleteCustomer(customer.id);
              return customer;
            }, function(err) {
              throw err;
            })
        ).to.eventually.have.property('description', 'Some customer');

      });

      it('allows me to: create a customer and list their cards', function() {

        return expect(
          stripe.customers.create(CUSTOMER_DETAILS)
            .then(function(customer) {
              cleanup.deleteCustomer(customer.id);
              return customer.cards.list();
            }, function(err) {
              throw err;
            })
        ).to
          .eventually
            .have.deep.property('data[0].exp_year', 2015);

      });

      it('gives me an error if I incorrectly try to create a new card', function() {
        return expect(
          stripe.customers.create(CUSTOMER_DETAILS)
            .then(function(customer) {
              cleanup.deleteCustomer(customer.id);
              return stripe.cards.create(customer.id, {
                card: {
                  number: 'invalid!',
                  exp_month: '12',
                  exp_year: '2016'
                }
              });
            })
        ).to.be.eventually.rejected;
      });


      it('allows me to add an additional card', function() {
        return expect(
          stripe.customers.create(CUSTOMER_DETAILS)
            .then(function(customer) {
              cleanup.deleteCustomer(customer.id);
              return stripe.cards.create(customer.id, {
                card: {
                  number: '4242424242424242',
                  exp_month: '12',
                  exp_year: '2016'
                }
              });
            })
        ).to.eventually.have.property('exp_year', 2016);
      });

    });

    describe('Plan+Subscription flow', function() {

      it('Allows me to: Create a plan and subcribe a customer to it', function() {

        return expect(
          when.join(
            stripe.plans.create({
              id: 'goldSuperAmazing',
              amount: 1700,
              currency: 'usd',
              interval: 'month',
              name: 'Gold Super Amazing Tier'
            }),
            stripe.customers.create(CUSTOMER_DETAILS)
          ).then(function(j) {

            var plan = j[0];
            var customer = j[1];

            cleanup.deleteCustomer(customer.id);
            cleanup.deletePlan(plan.id);

            return stripe.customers.updateSubscription(customer.id, {
              plan: plan.id
            });

          })
        ).to.eventually.have.property('status', 'active');

      });

      it('Errors when I attempt to subcribe a customer to a non-existent plan', function() {

        return expect(
          stripe.customers.create(CUSTOMER_DETAILS)
          .then(function(customer) {

            cleanup.deleteCustomer(customer.id);

            return stripe.customers.updateSubscription(customer.id, {
              plan: 'someNonExistentPlan'
            });

          })
        ).to.be.eventually.rejected;

      });

    });

  });

});
