'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Invoices Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.invoices.retrieve('invoiceId1');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices/invoiceId1',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      stripe.invoices.create({application_fee: 111});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices',
        headers: {},
        data: {application_fee: 111},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      stripe.invoices.update('invoiceId1', {application_fee: 200});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/invoiceId1',
        headers: {},
        data: {application_fee: 200},
      });
    });
  });

  describe('retrieveLines', function() {
    it('Sends the correct request', function() {
      stripe.invoices.retrieveLines('invoiceId2');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices/invoiceId2/lines',
        headers: {},
        data: {},
      });
    });
  });

  describe('retrieveUpcoming', function() {
    describe('With just a customer ID', function() {
      it('Sends the correct request', function() {
        stripe.invoices.retrieveUpcoming('customerId1');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/invoices/upcoming?customer=customerId1',
          headers: {},
          data: {},
        });
      });
    });

    describe('With a subscription ID in addition to a customer ID', function() {
      it('Sends the correct request', function() {
        stripe.invoices.retrieveUpcoming('customerId1', 'subscriptionId123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/invoices/upcoming?customer=customerId1&subscription=subscriptionId123',
          headers: {},
          data: {},
        });
      });
    });

    describe('With a options object in addition to a customer ID', function() {
      it('Sends the correct request', function() {
        stripe.invoices.retrieveUpcoming('customerId1', {plan: 'planId123'});
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/invoices/upcoming?customer=customerId1&plan=planId123',
          headers: {},
          data: {},
        });
      });
    });
  });

  describe('pay', function() {
    it('Sends the correct request', function() {
      stripe.invoices.pay('invoiceId6');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/invoiceId6/pay',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.invoices.list({count: 25});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices',
        headers: {},
        data: {count: 25},
      });
    });
  });
});
