'use strict';

var stripe = require('./testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Customer Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      stripe.Customer.retrieve('cus_2dkAb792h1mfa4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/cus_2dkAb792h1mfa4',
        data: {}
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      stripe.Customer.create({ description: 'Some customer' });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        data: { description: 'Some customer' }
      });

    });

  });

  describe('update', function() {

    it('Sends the correct request', function() {

      stripe.Customer.update('cus_2dkAb792h1mfa4', {
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

      stripe.Customer.del('cus_2dkAb792h1mfa4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/customers/cus_2dkAb792h1mfa4',
        data: {}
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      stripe.Customer.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers',
        data: {}
      });

    });

  });

});