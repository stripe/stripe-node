

const stripe = require('../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('Invoices Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.invoices.retrieve('invoiceId1');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices/invoiceId1',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.invoices.create({ application_fee: 111 });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices',
        headers: {},
        data: { application_fee: 111 },
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.invoices.update('invoiceId1', { application_fee: 200 });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/invoiceId1',
        headers: {},
        data: { application_fee: 200 },
      });
    });
  });

  describe('retrieveLines', () => {
    it('Sends the correct request', () => {
      stripe.invoices.retrieveLines('invoiceId2');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices/invoiceId2/lines',
        headers: {},
        data: {},
      });
    });
  });

  describe('retrieveUpcoming', () => {
    describe('With just a customer ID', () => {
      it('Sends the correct request', () => {
        stripe.invoices.retrieveUpcoming('customerId1');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/invoices/upcoming?customer=customerId1',
          headers: {},
          data: {},
        });
      });
    });

    describe('With a subscription ID in addition to a customer ID', () => {
      it('Sends the correct request', () => {
        stripe.invoices.retrieveUpcoming('customerId1', 'subscriptionId123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/invoices/upcoming?customer=customerId1&subscription=subscriptionId123',
          headers: {},
          data: {},
        });
      });
    });

    describe('With a options object that includes `subscription_items`', () => {
      it('Sends the correct request', () => {
        stripe.invoices.retrieveUpcoming('customerId1', {
          subscription_items: [
            { plan: 'potato' },
            { plan: 'rutabaga' },
          ],
        });

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/invoices/upcoming?customer=customerId1&' +
            'subscription_items%5B0%5D%5Bplan%5D=potato&subscription_items%5B1%5D%5Bplan%5D=rutabaga',
          headers: {},
          data: {},
        });
      });
    });

    describe('With a options object in addition to a customer ID', () => {
      it('Sends the correct request', () => {
        stripe.invoices.retrieveUpcoming('customerId1', { plan: 'planId123' });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/invoices/upcoming?customer=customerId1&plan=planId123',
          headers: {},
          data: {},
        });
      });
    });
  });

  describe('pay', () => {
    it('Sends the correct request', () => {
      stripe.invoices.pay('invoiceId6', {
        source: 'tok_FooBar',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/invoiceId6/pay',
        headers: {},
        data: { source: 'tok_FooBar' },
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.invoices.list({ count: 25 });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices',
        headers: {},
        data: { count: 25 },
      });
    });
  });
});
