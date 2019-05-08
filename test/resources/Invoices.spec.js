'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('Invoices Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.invoices.retrieve('in_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices/in_123',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.invoices.create({application_fee: 111});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices',
        headers: {},
        data: {application_fee: 111},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.invoices.list({count: 25});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices',
        headers: {},
        data: {count: 25},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.invoices.update('in_123', {application_fee: 200});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/in_123',
        headers: {},
        data: {application_fee: 200},
      });
    });
  });

  describe('del', () => {
    it('Sends the correct request', () => {
      stripe.invoices.del('in_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/invoices/in_123',
        headers: {},
        data: {},
      });
    });
  });

  describe('listLineItems', () => {
    it('Sends the correct request', () => {
      stripe.invoices.listLineItems('in_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices/in_123/lines',
        headers: {},
        data: {},
      });
    });
  });

  describe('listUpcomingLineItems', () => {
    it('Sends the correct request', () => {
      stripe.invoices.listUpcomingLineItems();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices/upcoming/lines',
        headers: {},
        data: {},
      });
    });
  });

  describe('retrieveUpcoming', () => {
    it('Sends the correct request', () => {
      stripe.invoices.retrieveUpcoming({
        customer: 'cus_abc',
        subscription_items: [{plan: 'potato'}, {plan: 'rutabaga'}],
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices/upcoming',
        headers: {},
        data: {
          customer: 'cus_abc',
          subscription_items: [{plan: 'potato'}, {plan: 'rutabaga'}],
        },
      });
    });
  });

  describe('listUpcomingLineItems', () => {
    it('Sends the correct request', () => {
      stripe.invoices.listUpcomingLineItems({
        customer: 'cus_abc',
        subscription_items: [{plan: 'potato'}, {plan: 'rutabaga'}],
        limit: 5,
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices/upcoming/lines',
        headers: {},
        data: {
          customer: 'cus_abc',
          subscription_items: [{plan: 'potato'}, {plan: 'rutabaga'}],
          limit: 5,
        },
      });
    });
  });

  describe('finalizeInvoice', () => {
    it('Sends the correct request', () => {
      stripe.invoices.finalizeInvoice('in_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/in_123/finalize',
        headers: {},
        data: {},
      });
    });
  });

  describe('mark uncollectible', () => {
    it('Sends the correct request', () => {
      stripe.invoices.markUncollectible('in_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/in_123/mark_uncollectible',
        headers: {},
        data: {},
      });
    });
  });

  describe('pay', () => {
    it('Sends the correct request', () => {
      stripe.invoices.pay('in_123', {
        source: 'tok_FooBar',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/in_123/pay',
        headers: {},
        data: {source: 'tok_FooBar'},
      });
    });
  });

  describe('sendInvoice', () => {
    it('Sends the correct request', () => {
      stripe.invoices.sendInvoice('in_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/in_123/send',
        headers: {},
        data: {},
      });
    });
  });

  describe('voidInvoice', () => {
    it('Sends the correct request', () => {
      stripe.invoices.voidInvoice('in_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/in_123/void',
        headers: {},
        data: {},
      });
    });
  });
});
