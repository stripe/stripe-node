'use strict';

var resources = require('../../lib/stripe').resources;
var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

var CUSTOMER_TEST_ID = 'cus_123';
var TAX_ID_TEST_ID = 'txi_123';

var taxId = new resources.TaxIds(
  stripe,
  {customerId: CUSTOMER_TEST_ID}
);

// Use spy from existing resource:
taxId._request = stripe.customers._request;

describe('TaxId Resource', function() {
  describe('create', function() {
    it('Sends the correct request', function() {
      var data = {
        type: 'eu_vat',
        value: '11111',
      };
      taxId.create(data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/tax_ids',
        data: data,
        headers: {},
      });
    });
  });

  describe('delete', function() {
    it('Sends the correct request', function() {
      taxId.del(TAX_ID_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/tax_ids/' + TAX_ID_TEST_ID,
        data: {},
        headers: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      taxId.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/tax_ids',
        data: {},
        headers: {},
      });
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      taxId.retrieve(TAX_ID_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/tax_ids/' + TAX_ID_TEST_ID,
        data: {},
        headers: {},
      });
    });
  });
});
