'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

const TEST_AUTH_KEY = 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11';

describe('Customers Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.customers.retrieve('cus_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/cus_123',
        headers: {},
        data: {},
      });
    });

    it('Sends the correct request [with specified auth]', () => {
      stripe.customers.retrieve('cus_123', TEST_AUTH_KEY);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/cus_123',
        headers: {},
        data: {},
        auth: TEST_AUTH_KEY,
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.customers.create({description: 'Some customer'});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        headers: {},
        data: {description: 'Some customer'},
      });
    });

    it('Sends the correct request [with specified auth]', () => {
      stripe.customers.create({description: 'Some customer'}, TEST_AUTH_KEY);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        headers: {},
        data: {description: 'Some customer'},
        auth: TEST_AUTH_KEY,
      });
    });

    it('Sends the correct request [with specified auth and no body]', () => {
      stripe.customers.create(TEST_AUTH_KEY);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        headers: {},
        data: {},
        auth: TEST_AUTH_KEY,
      });
    });

    it('Sends the correct request [with specified idempotency_key in options]', () => {
      stripe.customers.create(
        {description: 'Some customer'},
        {idempotency_key: 'foo'}
      );
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        headers: {'Idempotency-Key': 'foo'},
        data: {description: 'Some customer'},
      });
    });

    it('Sends the correct request [with specified auth in options]', () => {
      stripe.customers.create(
        {description: 'Some customer'},
        {api_key: TEST_AUTH_KEY}
      );
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        headers: {},
        data: {description: 'Some customer'},
        auth: TEST_AUTH_KEY,
      });
    });

    it('Sends the correct request [with specified auth and idempotent key in options]', () => {
      stripe.customers.create(
        {description: 'Some customer'},
        {api_key: TEST_AUTH_KEY, idempotency_key: 'foo'}
      );
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        headers: {'Idempotency-Key': 'foo'},
        data: {description: 'Some customer'},
        auth: TEST_AUTH_KEY,
      });
    });

    it('Sends the correct request [with specified auth in options and no body]', () => {
      stripe.customers.create({api_key: TEST_AUTH_KEY});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        headers: {},
        data: {},
        auth: TEST_AUTH_KEY,
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.customers.update('cus_123', {
        description: 'Foo "baz"',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/cus_123',
        headers: {},
        data: {description: 'Foo "baz"'},
      });
    });
  });

  describe('del', () => {
    it('Sends the correct request', () => {
      stripe.customers.del('cus_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/customers/cus_123',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.customers.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers',
        headers: {},
        data: {},
      });
    });

    it('Sends the correct request [with specified auth]', () => {
      stripe.customers.list(TEST_AUTH_KEY);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers',
        headers: {},
        data: {},
        auth: TEST_AUTH_KEY,
      });
    });
  });

  describe('Discount methods', () => {
    describe('deleteDiscount', () => {
      it('Sends the correct request', () => {
        stripe.customers.deleteDiscount('cus_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/cus_123/discount',
          headers: {},
          data: {},
        });
      });
    });
  });

  describe('Source methods', () => {
    describe('retrieveSource', () => {
      it('Sends the correct request', () => {
        stripe.customers.retrieveSource('cus_123', 'card_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/cus_123/sources/card_123',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.retrieveSource('cus_123', 'card_123', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/cus_123/sources/card_123',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('createSource', () => {
      it('Sends the correct request', () => {
        stripe.customers.createSource('cus_123', {
          object: 'card',
          number: '123456',
          exp_month: '12',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/cus_123/sources',
          headers: {},
          data: {object: 'card', number: '123456', exp_month: '12'},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.createSource(
          'cus_123',
          {
            object: 'card',
            number: '123456',
            exp_month: '12',
          },
          TEST_AUTH_KEY
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/cus_123/sources',
          headers: {},
          data: {object: 'card', number: '123456', exp_month: '12'},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('updateSource', () => {
      it('Sends the correct request', () => {
        stripe.customers.updateSource('cus_123', 'card_123', {
          name: 'Bob M. Baz',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/cus_123/sources/card_123',
          headers: {},
          data: {name: 'Bob M. Baz'},
        });
      });
    });

    describe('deleteSource', () => {
      it('Sends the correct request', () => {
        stripe.customers.deleteSource('cus_123', 'card_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/cus_123/sources/card_123',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.deleteSource('cus_123', 'card_123', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/cus_123/sources/card_123',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('listSources', () => {
      it('Sends the correct request', () => {
        stripe.customers.listSources('cus_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/cus_123/sources',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.listSources('cus_123', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/cus_123/sources',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('verifySource', () => {
      it('Sends the correct request', () => {
        const data = {amounts: [32, 45]};

        stripe.customers.verifySource(
          'cus_123',
          'card_123',
          data,
          TEST_AUTH_KEY
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/cus_123/sources/card_123/verify',
          headers: {},
          data,
          auth: TEST_AUTH_KEY,
        });
      });
    });
  });

  describe('TaxId methods', () => {
    describe('retrieveTaxId', () => {
      it('Sends the correct request', () => {
        stripe.customers.retrieveTaxId('cus_123', 'txi_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/cus_123/tax_ids/txi_123',
          headers: {},
          data: {},
        });
      });
    });

    describe('createTaxId', () => {
      it('Sends the correct request', () => {
        const data = {
          type: 'eu_vat',
          value: '11111',
        };
        stripe.customers.createTaxId('cus_123', data);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/cus_123/tax_ids',
          headers: {},
          data,
        });
      });
    });

    describe('deleteTaxId', () => {
      it('Sends the correct request', () => {
        stripe.customers.deleteTaxId('cus_123', 'txi_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/cus_123/tax_ids/txi_123',
          headers: {},
          data: {},
        });
      });
    });

    describe('listTaxIds', () => {
      it('Sends the correct request', () => {
        stripe.customers.listTaxIds('cus_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/cus_123/tax_ids',
          headers: {},
          data: {},
        });
      });
    });
  });
});
