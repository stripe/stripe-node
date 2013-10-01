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
        stripe.Customer.create(customerDetails)
          .then(function(customer) {
            addedCustomerIDs.push(customer.id);
            return customer;
          }, function(err) {
            throw err;
          })
      ).to.eventually.have.property('description', 'Some customer');

    });

    it('allows me to create a customer and list their cards', function() {

      return expect(
        stripe.Customer.create(customerDetails)
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

    it('can remove added customer', function() {

      return expect(
        when.map(addedCustomerIDs, function(custId) {
          return stripe.Customer.del(custId);
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
