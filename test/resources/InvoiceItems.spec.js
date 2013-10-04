'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('InvoiceItems Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      stripe.invoiceItems.retrieve('invoiceItemIdTesting123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoiceitems/invoiceItemIdTesting123',
        data: {}
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      stripe.invoiceItems.create({
        customer: 'cust_id_888'
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoiceitems',
        data: { customer: 'cust_id_888' }
      });

    });

  });

  describe('update', function() {

    it('Sends the correct request', function() {

      stripe.invoiceItems.update('invoiceItemId1', {
        amount: 1900
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoiceitems/invoiceItemId1',
        data: { amount: 1900 }
      });

    });

  });

  describe('del', function() {

    it('Sends the correct request', function() {

      stripe.invoiceItems.del('invoiceItemId2');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/invoiceitems/invoiceItemId2',
        data: {}
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      stripe.invoiceItems.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoiceitems',
        data: {}
      });

    });

  });

});
