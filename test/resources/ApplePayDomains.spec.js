'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('ApplePayDomains Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.applePayDomains.retrieve('apwc_retrieve');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/apple_pay/domains/apwc_retrieve',
        headers: {},
        data: {},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      stripe.applePayDomains.del('apwc_delete');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/apple_pay/domains/apwc_delete',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      stripe.applePayDomains.create({
        domain_name: 'example.com',
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/apple_pay/domains',
        headers: {},
        data: {
          domain_name: 'example.com',
        },
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.applePayDomains.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/apple_pay/domains',
        headers: {},
        data: {},
      });
    });
  });
});
