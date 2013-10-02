'use strict';

var testUtils = require('./testUtils');
var chai = require('chai');
var when = require('when');
var stripe = require('../lib/stripe')(
  testUtils.getUserStripeKey()
);

var expect = chai.expect;

describe('Stripe Module', function() {

  this.timeout(20000);

  describe('Example cases', function() {

    describe('Customer+Card', function() {

      var customerDetails = {
        description: 'Some customer',
        card: {
          number: '4242424242424242',
          exp_month: 12,
          exp_year: 2015
        }
      };

      var addedCustomerIDs = [];

      it('allows me to: create Customer', function(done) {

        return expect(
          stripe.customers.create(customerDetails)
            .then(function(customer) {
              addedCustomerIDs.push(customer.id);
              return customer;
            }, function(err) {
              throw err;
            })
        ).to.eventually.have.property('description', 'Some customer');

      });

      it('allows me to: create a customer and list their cards', function() {

        return expect(
          stripe.customers.create(customerDetails)
            .then(function(customer) {
              addedCustomerIDs.push(customer.id);
              return customer.cards.list();
            }, function(err) {
              throw err;
            })
        ).to
          .eventually
            .have.deep.property('data[0].exp_year', 2015);

      });

      it('gives me an error if I incorrectly try to create a new card', function() {
        var customerId = addedCustomerIDs[0]; // re-use previously created cust
        return expect(
          stripe.cards.create(customerId, {
            card: {
              number: 'invalid!',
              exp_month: '12',
              exp_year: '2016'
            }
          })
        ).to.be.eventually.rejected;
      });


      it('allows me to add an additional card', function() {
        var customerId = addedCustomerIDs[0]; // re-use previously created cust
        return expect(
          stripe.cards.create(customerId, {
            card: {
              number: '4242424242424242',
              exp_month: '12',
              exp_year: '2016'
            }
          })
        ).to.eventually.have.property('exp_year', 2016);
      });

      it('allows me to: remove added customer', function() {

        return expect(
          when.map(addedCustomerIDs, function(custId) {
            return stripe.customers.del(custId);
          })
        ).to.eventually.deep.equal([
          {
            deleted: true,
            id: addedCustomerIDs[0]
          }, {
            deleted: true,
            id: addedCustomerIDs[1]
          }
        ]);

      });

    });

  });

});
