'use strict';

var stripe = require('./testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Customers Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      stripe.customers.retrieve('cus_2dkAb792h1mfa4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/cus_2dkAb792h1mfa4',
        data: {}
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      stripe.customers.create({ description: 'Some customer' });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        data: { description: 'Some customer' }
      });

    });

  });

  describe('update', function() {

    it('Sends the correct request', function() {

      stripe.customers.update('cus_2dkAb792h1mfa4', {
        description: 'Foo "baz"'
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/cus_2dkAb792h1mfa4',
        data: { description: 'Foo "baz"' }
      });

    });

  });

  describe('del', function() {

    it('Sends the correct request', function() {

      stripe.customers.del('cus_2dkAb792h1mfa4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/customers/cus_2dkAb792h1mfa4',
        data: {}
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      stripe.customers.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers',
        data: {}
      });

    });

  });

  describe('Subscription methods', function() {

    describe('updateSubscription', function() {

      it('Sends the correct request', function() {

        stripe.customers.updateSubscription('customerIdFoo321', {
          plan: 'fooPlan'
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/subscription',
          data: { plan: 'fooPlan' }
        });

      });

    });

    describe('cancelSubscription', function() {

      it('Sends the correct request', function() {

        stripe.customers.cancelSubscription('customerIdFoo321');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/subscription',
          data: { }
        });

      });

    });

  });

  describe('Discount methods', function() {

    describe('deleteDiscount', function() {

      it('Sends the correct request', function() {

        stripe.customers.deleteDiscount('customerIdFoo321', 'discountIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/discounts/discountIdFoo456',
          data: {}
        });

      });

    });

  });

  describe('Card methods', function() {

    describe('retrieveCards', function() {

      it('Sends the correct request', function() {

        stripe.customers.retrieveCard('customerIdFoo321', 'cardIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          data: {}
        });

      });

    });

    describe('createCard', function() {

      it('Sends the correct request', function() {

        stripe.customers.createCard('customerIdFoo321', {
          number: '123456', exp_month: '12'
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/cards',
          data: { number: '123456', exp_month: '12' }
        });

      });

    });

    describe('updateCard', function() {

      it('Sends the correct request', function() {

        stripe.customers.updateCard('customerIdFoo321', 'cardIdFoo456', {
          name: 'Bob M. Baz'
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          data: { name: 'Bob M. Baz' }
        });

      });

    });

    describe('deleteCard', function() {

      it('Sends the correct request', function() {

        stripe.customers.deleteCard('customerIdFoo321', 'cardIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          data: {}
        });

      });

    });

    describe('listCards', function() {

      it('Sends the correct request', function() {

        stripe.customers.listCards('customerIdFoo321');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/cards',
          data: {}
        });

      });

    });

  });

});