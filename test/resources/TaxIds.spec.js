'use strict';

const resources = require('../../lib/stripe').resources;
const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

const CUSTOMER_TEST_ID = 'cus_123';
const TAX_ID_TEST_ID = 'txi_123';

const taxId = new resources.TaxIds(stripe, {customerId: CUSTOMER_TEST_ID});

// Use spy from existing resource:
taxId._request = stripe.customers._request;

describe('TaxId Resource', () => {
  describe('create', () => {
    it('Sends the correct request', () => {
      const data = {
        type: 'eu_vat',
        value: '11111',
      };
      taxId.create(data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/tax_ids',
        data,
        headers: {},
      });
    });
  });

  describe('delete', () => {
    it('Sends the correct request', () => {
      taxId.del(TAX_ID_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/tax_ids/' + TAX_ID_TEST_ID,
        data: {},
        headers: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      taxId.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/tax_ids',
        data: {},
        headers: {},
      });
    });
  });

  describe('retrieve', () => {
    it('Sends the correct request', () => {
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
