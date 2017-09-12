

const stripe = require('../testUtils').getSpyableStripe();
const expect = require('chai').expect;
const Promise = require('bluebird');

const TEST_AUTH_KEY = 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11';

describe('Customers Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.customers.retrieve('cus_2dkAb792h1mfa4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/cus_2dkAb792h1mfa4',
        headers: {},
        data: {},
      });
    });

    it('Sends the correct request [with specified auth]', () => {
      stripe.customers.retrieve('cus_2dkAb792h1mfa4', TEST_AUTH_KEY);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/cus_2dkAb792h1mfa4',
        headers: {},
        data: {},
        auth: TEST_AUTH_KEY,
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.customers.create({ description: 'Some customer' });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        headers: {},
        data: { description: 'Some customer' },
      });
    });

    it('Sends the correct request [with specified auth]', () => {
      stripe.customers.create({ description: 'Some customer' }, TEST_AUTH_KEY);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        headers: {},
        data: { description: 'Some customer' },
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
      stripe.customers.create({ description: 'Some customer' }, { idempotency_key: 'foo' });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        headers: { 'Idempotency-Key': 'foo' },
        data: { description: 'Some customer' },
      });
    });

    it('Sends the correct request [with specified auth in options]', () => {
      stripe.customers.create({ description: 'Some customer' }, { api_key: TEST_AUTH_KEY });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        headers: {},
        data: { description: 'Some customer' },
        auth: TEST_AUTH_KEY,
      });
    });

    it('Sends the correct request [with specified auth and idempotent key in options]', () => {
      stripe.customers.create({ description: 'Some customer' }, { api_key: TEST_AUTH_KEY, idempotency_key: 'foo' });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        headers: { 'Idempotency-Key': 'foo' },
        data: { description: 'Some customer' },
        auth: TEST_AUTH_KEY,
      });
    });

    it('Sends the correct request [with specified auth in options and no body]', () => {
      stripe.customers.create({ api_key: TEST_AUTH_KEY });
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
      stripe.customers.update('cus_2dkAb792h1mfa4', {
        description: 'Foo "baz"',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/cus_2dkAb792h1mfa4',
        headers: {},
        data: { description: 'Foo "baz"' },
      });
    });
  });

  describe('del', () => {
    it('Sends the correct request', () => {
      stripe.customers.del('cus_2dkAb792h1mfa4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/customers/cus_2dkAb792h1mfa4',
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
        stripe.customers.updateSubscription('customerIdFoo321', {
          plan: 'fooPlan',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/subscription',
          headers: {},
          data: { plan: 'fooPlan' },
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.updateSubscription('customerIdFoo321', {
          plan: 'fooPlan',
        }, TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/subscription',
          headers: {},
          data: { plan: 'fooPlan' },
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('cancelSubscription', () => {
      it('Sends the correct request', () => {
        stripe.customers.cancelSubscription('customerIdFoo321');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/subscription',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.cancelSubscription('customerIdFoo321', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/subscription',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });

      describe('With at_period_end defined', () => {
        it('Sends the correct request', () => {
          stripe.customers.cancelSubscription('customerIdFoo321', { at_period_end: true });
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'DELETE',
            url: '/v1/customers/customerIdFoo321/subscription',
            headers: {},
            data: { at_period_end: true },
          });
        });
      });

      describe('With at_period_end defined [with specified auth]', () => {
        it('Sends the correct request', () => {
          stripe.customers.cancelSubscription('customerIdFoo321', { at_period_end: true }, TEST_AUTH_KEY);
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'DELETE',
            url: '/v1/customers/customerIdFoo321/subscription',
            headers: {},
            data: { at_period_end: true },
            auth: TEST_AUTH_KEY,
          });
        });
      });
    });
  });

  describe('Discount methods', () => {
    describe('deleteDiscount', () => {
      it('Sends the correct request', () => {
        stripe.customers.deleteDiscount('customerIdFoo321');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/discount',
          headers: {},
          data: {},
        });
      });
    });

    describe('deleteSubscriptionDiscount', () => {
      it('Sends the correct request', () => {
        stripe.customers.deleteSubscriptionDiscount('customerIdFoo321', 'subscriptionIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdFoo456/discount',
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
          stripe.customers.setMetadata('customerIdFoo321', null);
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'POST',
            url: '/v1/customers/customerIdFoo321',
            headers: {},
            data: {
              metadata: null,
            },
          });
        });
      });

      describe('When setting new metadata', () => {
        it('Sends one request to get current, and another to set new data', () => expect(new Promise(((resolve, reject) => {
          stripe.customers.setMetadata('customerIdFoo321', {
            foo: 123,
            baz: 456,
          }).then(() => {
            const reqs = stripe.REQUESTS;
            resolve([
              // Last two requests
              reqs[reqs.length - 2],
              reqs[reqs.length - 1],
            ]);
          });
        }))).to.eventually.deep.equal([
          {
            // First reset metadata:
            method: 'POST',
            url: '/v1/customers/customerIdFoo321',
            headers: {},
            data: { metadata: null },
          },
          {
            // Then set new metadata:
            method: 'POST',
            url: '/v1/customers/customerIdFoo321',
            headers: {},
            data: {
              metadata: { foo: 123, baz: 456 },
            },
          },
        ]));
      });

      describe('When setting with an auth key', () => {
        it('Sends the correct request, including the specified auth key', () => {
          stripe.customers.setMetadata('customerIdFoo321', null, TEST_AUTH_KEY);
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'POST',
            url: '/v1/customers/customerIdFoo321',
            headers: {},
            data: {
              metadata: null,
            },
            auth: TEST_AUTH_KEY,
          });
          stripe.customers.setMetadata('customerIdFoo321', 'a', '1234', TEST_AUTH_KEY);
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'POST',
            url: '/v1/customers/customerIdFoo321',
            headers: {},
            data: {
              metadata: { a: '1234' },
            },
            auth: TEST_AUTH_KEY,
          });
          stripe.customers.setMetadata('customerIdFoo321', 'a', null, TEST_AUTH_KEY);
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'POST',
            url: '/v1/customers/customerIdFoo321',
            headers: {},
            data: {
              metadata: { a: null },
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
        stripe.customers.retrieveCard('customerIdFoo321', 'cardIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.retrieveCard('customerIdFoo321', 'cardIdFoo456', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('createCard', () => {
      it('Sends the correct request', () => {
        stripe.customers.createCard('customerIdFoo321', {
          number: '123456', exp_month: '12',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/cards',
          headers: {},
          data: { number: '123456', exp_month: '12' },
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.createCard('customerIdFoo321', {
          number: '123456', exp_month: '12',
        }, TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/cards',
          headers: {},
          data: { number: '123456', exp_month: '12' },
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('updateCard', () => {
      it('Sends the correct request', () => {
        stripe.customers.updateCard('customerIdFoo321', 'cardIdFoo456', {
          name: 'Bob M. Baz',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          headers: {},
          data: { name: 'Bob M. Baz' },
        });
      });
    });

    describe('deleteCard', () => {
      it('Sends the correct request', () => {
        stripe.customers.deleteCard('customerIdFoo321', 'cardIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.deleteCard('customerIdFoo321', 'cardIdFoo456', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('listCards', () => {
      it('Sends the correct request', () => {
        stripe.customers.listCards('customerIdFoo321');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/cards',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.listCards('customerIdFoo321', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/cards',
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
        stripe.customers.retrieveSource('customerIdFoo321', 'cardIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/sources/cardIdFoo456',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.retrieveSource('customerIdFoo321', 'cardIdFoo456', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/sources/cardIdFoo456',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('createSource', () => {
      it('Sends the correct request', () => {
        stripe.customers.createSource('customerIdFoo321', {
          object: 'card', number: '123456', exp_month: '12',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/sources',
          headers: {},
          data: { object: 'card', number: '123456', exp_month: '12' },
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.createSource('customerIdFoo321', {
          object: 'card', number: '123456', exp_month: '12',
        }, TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/sources',
          headers: {},
          data: { object: 'card', number: '123456', exp_month: '12' },
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('updateSource', () => {
      it('Sends the correct request', () => {
        stripe.customers.updateSource('customerIdFoo321', 'cardIdFoo456', {
          name: 'Bob M. Baz',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/sources/cardIdFoo456',
          headers: {},
          data: { name: 'Bob M. Baz' },
        });
      });
    });

    describe('deleteSource', () => {
      it('Sends the correct request', () => {
        stripe.customers.deleteSource('customerIdFoo321', 'cardIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/sources/cardIdFoo456',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.deleteSource('customerIdFoo321', 'cardIdFoo456', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/sources/cardIdFoo456',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('listSources', () => {
      it('Sends the correct request', () => {
        stripe.customers.listSources('customerIdFoo321');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/sources',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.listSources('customerIdFoo321', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/sources',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('verifySource', () => {
      it('Sends the correct request', () => {
        const data = { amounts: [32, 45] };

        stripe.customers.verifySource('customerIdFoo321', 'cardIdFoo456', data, TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/sources/cardIdFoo456/verify',
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
        stripe.customers.retrieveSubscription('customerIdFoo321', 'subscriptionIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdFoo456',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.retrieveSubscription('customerIdFoo321', 'subscriptionIdFoo456', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdFoo456',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('createSubscription', () => {
      it('Sends the correct request', () => {
        stripe.customers.createSubscription('customerIdFoo321', {
          plan: 'gold', quantity: '12',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/subscriptions',
          headers: {},
          data: { plan: 'gold', quantity: '12' },
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.createSubscription('customerIdFoo321', {
          plan: 'gold', quantity: '12',
        }, TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/subscriptions',
          headers: {},
          data: { plan: 'gold', quantity: '12' },
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('updateSubscription (new-style api)', () => {
      it('Sends the correct request', () => {
        stripe.customers.updateSubscription('customerIdFoo321', 'subscriptionIdFoo456', {
          quantity: '2',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdFoo456',
          headers: {},
          data: { quantity: '2' },
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.updateSubscription('customerIdFoo321', 'subscriptionIdFoo456', {
          quantity: '2',
        }, TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdFoo456',
          headers: {},
          data: { quantity: '2' },
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('cancelSubscription (new-style api)', () => {
      it('Sends the correct request', () => {
        stripe.customers.cancelSubscription('customerIdFoo321', 'subscriptionIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdFoo456',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.cancelSubscription('customerIdFoo321', 'subscriptionIdFoo456', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdFoo456',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });

      describe('With at_period_end defined', () => {
        it('Sends the correct request', () => {
          stripe.customers.cancelSubscription('customerIdFoo321', 'subscriptionIdFoo456', { at_period_end: true });
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'DELETE',
            url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdFoo456',
            headers: {},
            data: { at_period_end: true },
          });
        });
      });

      describe('With at_period_end defined [with specified auth]', () => {
        it('Sends the correct request', () => {
          stripe.customers.cancelSubscription(
            'customerIdFoo321',
            'subscriptionIdFoo456',
            { at_period_end: true },
            TEST_AUTH_KEY,
          );
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'DELETE',
            url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdFoo456',
            headers: {},
            data: { at_period_end: true },
            auth: TEST_AUTH_KEY,
          });
        });
      });
    });

    describe('listSubscriptions', () => {
      it('Sends the correct request', () => {
        stripe.customers.listSubscriptions('customerIdFoo321');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/subscriptions',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.customers.listSubscriptions('customerIdFoo321', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/subscriptions',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });
  });
});
