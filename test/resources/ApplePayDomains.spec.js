'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('ApplePayDomains Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.applePayDomains.retrieve('apwc_retrieve');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/apple_pay/domains/apwc_retrieve',
        headers: {},
        data: {},
      });
    });
  });

  describe('del', () => {
    it('Sends the correct request', () => {
      stripe.applePayDomains.del('apwc_delete');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/apple_pay/domains/apwc_delete',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
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

  describe('list', () => {
    it('Sends the correct request', () => {
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
