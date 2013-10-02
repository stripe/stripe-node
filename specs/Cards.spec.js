'use strict';

var stripe = require('./testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Card Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      stripe.cards.retrieve('customerIdFoo321', 'cardIdFoo456');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
        data: {}
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      stripe.cards.create('customerIdFoo321', {
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

      stripe.cards.update('customerIdFoo321', 'cardIdFoo456', {
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

      stripe.cards.del('customerIdFoo321', 'cardIdFoo456');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
        data: {}
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      stripe.cards.list('customerIdFoo321');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/customerIdFoo321/cards',
        data: {}
      });

    });

  });

});
