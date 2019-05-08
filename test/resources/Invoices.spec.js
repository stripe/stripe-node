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

  describe('retrieveLines', () => {
    it('Sends the correct request', () => {
      stripe.invoices.retrieveLines('in_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices/in_123/lines',
        headers: {},
        data: {},
      });
    });
  });

  describe('retrieveUpcoming', () => {
    describe('With just a customer ID', () => {
      it('Sends the correct request', () => {
        stripe.invoices.retrieveUpcoming('cus_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/invoices/upcoming?customer=cus_123',
          headers: {},
          data: {},
        });
      });
    });

    describe('With a subscription ID in addition to a customer ID', () => {
      it('Sends the correct request', () => {
        stripe.invoices.retrieveUpcoming('cus_123', 'sub_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/invoices/upcoming?customer=cus_123&subscription=sub_123',
          headers: {},
          data: {},
        });
      });
    });

    describe('With an options object that includes `subscription_items`', () => {
      it('Sends the correct request', () => {
        stripe.invoices.retrieveUpcoming('cus_123', {
          subscription_items: [{plan: 'potato'}, {plan: 'rutabaga'}],
        });

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url:
            '/v1/invoices/upcoming?customer=cus_123&' +
            'subscription_items[0][plan]=potato&subscription_items[1][plan]=rutabaga',
          headers: {},
          data: {},
        });
      });
    });

    describe('Without a customer id but options', () => {
      it('Sends the correct request', () => {
        stripe.invoices.retrieveUpcoming({
          customer: 'cus_abc',
          subscription_items: [{plan: 'potato'}, {plan: 'rutabaga'}],
        });

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url:
            '/v1/invoices/upcoming?customer=cus_abc&' +
            'subscription_items[0][plan]=potato&subscription_items[1][plan]=rutabaga',
          headers: {},
          data: {},
        });
      });
    });

    describe('With an options object that includes `subscription_items` in addition to a subscription ID', () => {
      it('Sends the correct request', () => {
        stripe.invoices.retrieveUpcoming('cus_123', 'sub_123', {
          subscription_items: [
            {plan: 'potato'},
            {plan: 'rutabaga'},
            {id: 'SOME_ID', deleted: true},
          ],
          subscription_prorate: true,
        });

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/invoices/upcoming?customer=cus_123&subscription=sub_123',
          headers: {},
          data: {
            subscription_items: [
              {plan: 'potato'},
              {plan: 'rutabaga'},
              {id: 'SOME_ID', deleted: true},
            ],
            subscription_prorate: true,
          },
        });
      });
    });

    describe('With a options object in addition to a customer ID', () => {
      it('Sends the correct request', () => {
        stripe.invoices.retrieveUpcoming('cus_123', {plan: 'planId123'});
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/invoices/upcoming?customer=cus_123&plan=planId123',
          headers: {},
          data: {},
        });
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
