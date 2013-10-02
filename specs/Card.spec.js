'use strict';

var stripe = require('./testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Card Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      stripe.card.retrieve('customerIdFoo321', 'cardIdFoo456');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
        data: {}
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      stripe.card.create('customerIdFoo321', {
        number: '123456', exp_month: '12'
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/customerIdFoo321/cards',
        data: { number: '123456', exp_month: '12' }
      });

    });

  });

  describe('update', function() {

    it('Sends the correct request', function() {

      stripe.card.update('customerIdFoo321', 'cardIdFoo456', {
        name: 'Bob M. Baz'
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
        data: { name: 'Bob M. Baz' }
      });

    });

  });

  describe('del', function() {

    it('Sends the correct request', function() {

      stripe.card.del('customerIdFoo321', 'cardIdFoo456');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
        data: {}
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      stripe.card.list('customerIdFoo321');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/customerIdFoo321/cards',
        data: {}
      });

    });

  });

});
