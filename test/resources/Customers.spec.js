'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11';

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

  describe('Subscription methods', () => {
    describe('updateSubscription', () => {
      it('Sends the correct request', () => {
        stripe.customers.updateSubscription('cus_123', {
          plan: 'fooPlan',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/cus_123/subscription',
          headers: {},
          data: {plan: 'fooPlan'},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.updateSubscription(
          'cus_123',
          {
            plan: 'fooPlan',
          },
          TEST_AUTH_KEY
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/cus_123/subscription',
          headers: {},
          data: {plan: 'fooPlan'},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('cancelSubscription', () => {
      it('Sends the correct request', () => {
        stripe.customers.cancelSubscription('cus_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/cus_123/subscription',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.cancelSubscription('cus_123', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/cus_123/subscription',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });

      describe('With at_period_end defined', () => {
        it('Sends the correct request', () => {
          stripe.customers.cancelSubscription('cus_123', {at_period_end: true});
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'DELETE',
            url: '/v1/customers/cus_123/subscription',
            headers: {},
            data: {at_period_end: true},
          });
        });
      });

      describe('With at_period_end defined [with specified auth]', () => {
        it('Sends the correct request', () => {
          stripe.customers.cancelSubscription(
            'cus_123',
            {at_period_end: true},
            TEST_AUTH_KEY
          );
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'DELETE',
            url: '/v1/customers/cus_123/subscription',
            headers: {},
            data: {at_period_end: true},
            auth: TEST_AUTH_KEY,
          });
        });
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

    describe('deleteSubscriptionDiscount', () => {
      it('Sends the correct request', () => {
        stripe.customers.deleteSubscriptionDiscount('cus_123', 'sub_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/cus_123/subscriptions/sub_123/discount',
          headers: {},
          data: {},
        });
      });
    });
  });

  describe('Metadata methods', () => {
    describe('setMetadata', () => {
      describe('When deleting metadata', () => {
        it('Sends the correct request', () => {
          stripe.customers.setMetadata('cus_123', null);
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'POST',
            url: '/v1/customers/cus_123',
            headers: {},
            data: {
              metadata: null,
            },
          });
        });
      });

      describe('When setting new metadata', () => {
        it('Sends one request to get current, and another to set new data', () =>
          expect(
            new Promise((resolve, reject) => {
              stripe.customers
                .setMetadata('cus_123', {
                  foo: 123,
                  baz: 456,
                })
                .then(() => {
                  var reqs = stripe.REQUESTS;
                  resolve([
                    // Last two requests
                    reqs[reqs.length - 2],
                    reqs[reqs.length - 1],
                  ]);
                });
            })
          ).to.eventually.deep.equal([
            {
              // First reset metadata:
              method: 'POST',
              url: '/v1/customers/cus_123',
              headers: {},
              data: {metadata: null},
            },
            {
              // Then set new metadata:
              method: 'POST',
              url: '/v1/customers/cus_123',
              headers: {},
              data: {
                metadata: {foo: 123, baz: 456},
              },
            },
          ]));
      });

      describe('When setting with an auth key', () => {
        it('Sends the correct request, including the specified auth key', () => {
          stripe.customers.setMetadata('cus_123', null, TEST_AUTH_KEY);
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'POST',
            url: '/v1/customers/cus_123',
            headers: {},
            data: {
              metadata: null,
            },
            auth: TEST_AUTH_KEY,
          });
          stripe.customers.setMetadata('cus_123', 'a', '1234', TEST_AUTH_KEY);
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'POST',
            url: '/v1/customers/cus_123',
            headers: {},
            data: {
              metadata: {a: '1234'},
            },
            auth: TEST_AUTH_KEY,
          });
          stripe.customers.setMetadata('cus_123', 'a', null, TEST_AUTH_KEY);
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'POST',
            url: '/v1/customers/cus_123',
            headers: {},
            data: {
              metadata: {a: null},
            },
            auth: TEST_AUTH_KEY,
          });
        });
      });
    });
  });

  describe('Card methods', () => {
    describe('retrieveCard', () => {
      it('Sends the correct request', () => {
        stripe.customers.retrieveCard('cus_123', 'card_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/cus_123/cards/card_123',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.retrieveCard('cus_123', 'card_123', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/cus_123/cards/card_123',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('createCard', () => {
      it('Sends the correct request', () => {
        stripe.customers.createCard('cus_123', {
          number: '123456',
          exp_month: '12',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/cus_123/cards',
          headers: {},
          data: {number: '123456', exp_month: '12'},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.createCard(
          'cus_123',
          {
            number: '123456',
            exp_month: '12',
          },
          TEST_AUTH_KEY
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/cus_123/cards',
          headers: {},
          data: {number: '123456', exp_month: '12'},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('updateCard', () => {
      it('Sends the correct request', () => {
        stripe.customers.updateCard('cus_123', 'card_123', {
          name: 'Bob M. Baz',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/cus_123/cards/card_123',
          headers: {},
          data: {name: 'Bob M. Baz'},
        });
      });
    });

    describe('deleteCard', () => {
      it('Sends the correct request', () => {
        stripe.customers.deleteCard('cus_123', 'card_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/cus_123/cards/card_123',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.deleteCard('cus_123', 'card_123', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/cus_123/cards/card_123',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('listCards', () => {
      it('Sends the correct request', () => {
        stripe.customers.listCards('cus_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/cus_123/cards',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.listCards('cus_123', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/cus_123/cards',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
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
        var data = {amounts: [32, 45]};

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

  describe('Subscription methods', () => {
    describe('retrieveSubscription', () => {
      it('Sends the correct request', () => {
        stripe.customers.retrieveSubscription('cus_123', 'sub_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/cus_123/subscriptions/sub_123',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.retrieveSubscription(
          'cus_123',
          'sub_123',
          TEST_AUTH_KEY
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/cus_123/subscriptions/sub_123',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('createSubscription', () => {
      it('Sends the correct request', () => {
        stripe.customers.createSubscription('cus_123', {
          plan: 'gold',
          quantity: '12',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/cus_123/subscriptions',
          headers: {},
          data: {plan: 'gold', quantity: '12'},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.createSubscription(
          'cus_123',
          {
            plan: 'gold',
            quantity: '12',
          },
          TEST_AUTH_KEY
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/cus_123/subscriptions',
          headers: {},
          data: {plan: 'gold', quantity: '12'},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('updateSubscription (new-style api)', () => {
      it('Sends the correct request', () => {
        stripe.customers.updateSubscription('cus_123', 'sub_123', {
          quantity: '2',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/cus_123/subscriptions/sub_123',
          headers: {},
          data: {quantity: '2'},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.updateSubscription(
          'cus_123',
          'sub_123',
          {
            quantity: '2',
          },
          TEST_AUTH_KEY
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/cus_123/subscriptions/sub_123',
          headers: {},
          data: {quantity: '2'},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('cancelSubscription (new-style api)', () => {
      it('Sends the correct request', () => {
        stripe.customers.cancelSubscription('cus_123', 'sub_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/cus_123/subscriptions/sub_123',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.cancelSubscription(
          'cus_123',
          'sub_123',
          TEST_AUTH_KEY
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/cus_123/subscriptions/sub_123',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });

      describe('With at_period_end defined', () => {
        it('Sends the correct request', () => {
          stripe.customers.cancelSubscription('cus_123', 'sub_123', {
            at_period_end: true,
          });
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'DELETE',
            url: '/v1/customers/cus_123/subscriptions/sub_123',
            headers: {},
            data: {at_period_end: true},
          });
        });
      });

      describe('With at_period_end defined [with specified auth]', () => {
        it('Sends the correct request', () => {
          stripe.customers.cancelSubscription(
            'cus_123',
            'sub_123',
            {at_period_end: true},
            TEST_AUTH_KEY
          );
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'DELETE',
            url: '/v1/customers/cus_123/subscriptions/sub_123',
            headers: {},
            data: {at_period_end: true},
            auth: TEST_AUTH_KEY,
          });
        });
      });
    });

    describe('listSubscriptions', () => {
      it('Sends the correct request', () => {
        stripe.customers.listSubscriptions('cus_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/cus_123/subscriptions',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.listSubscriptions('cus_123', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/cus_123/subscriptions',
          headers: {},
          data: {},
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
        var data = {
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
