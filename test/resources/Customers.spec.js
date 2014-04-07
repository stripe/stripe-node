'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;
var when = require('when');

var TEST_AUTH_KEY = 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11';

describe('Customers Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      stripe.customers.retrieve('cus_2dkAb792h1mfa4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/cus_2dkAb792h1mfa4',
        data: {}
      });

    });

    it('Sends the correct request [with specified auth]', function() {

      stripe.customers.retrieve('cus_2dkAb792h1mfa4', TEST_AUTH_KEY);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/cus_2dkAb792h1mfa4',
        data: {},
        auth: TEST_AUTH_KEY
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      stripe.customers.create({ description: 'Some customer' });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        data: { description: 'Some customer' }
      });

    });

    it('Sends the correct request [with specified auth]', function() {

      stripe.customers.create({ description: 'Some customer' }, TEST_AUTH_KEY);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        data: { description: 'Some customer' },
        auth: TEST_AUTH_KEY
      });

    });

  });

  describe('update', function() {

    it('Sends the correct request', function() {

      stripe.customers.update('cus_2dkAb792h1mfa4', {
        description: 'Foo "baz"'
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/cus_2dkAb792h1mfa4',
        data: { description: 'Foo "baz"' }
      });

    });

  });

  describe('del', function() {

    it('Sends the correct request', function() {

      stripe.customers.del('cus_2dkAb792h1mfa4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/customers/cus_2dkAb792h1mfa4',
        data: {}
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      stripe.customers.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers',
        data: {}
      });

    });

    it('Sends the correct request [with specified auth]', function() {

      stripe.customers.list(TEST_AUTH_KEY);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers',
        data: {},
        auth: TEST_AUTH_KEY
      });

    });

  });

  describe('Subscription methods', function() {

    describe('updateSubscription', function() {

      it('Sends the correct request', function() {

        stripe.customers.updateSubscription('customerIdFoo321', {
          plan: 'fooPlan'
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/subscription',
          data: { plan: 'fooPlan' }
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        stripe.customers.updateSubscription('customerIdFoo321', {
          plan: 'fooPlan'
        }, TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/subscription',
          data: { plan: 'fooPlan' },
          auth: TEST_AUTH_KEY
        });

      });

    });

    describe('cancelSubscription', function() {

      it('Sends the correct request', function() {

        stripe.customers.cancelSubscription('customerIdFoo321');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/subscription',
          data: { }
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        stripe.customers.cancelSubscription('customerIdFoo321', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/subscription',
          data: { },
          auth: TEST_AUTH_KEY
        });

      });

      describe('With at_period_end defined', function() {
        it('Sends the correct request', function() {

          stripe.customers.cancelSubscription('customerIdFoo321', {at_period_end: true});
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'DELETE',
            url: '/v1/customers/customerIdFoo321/subscription',
            data: { at_period_end: true }
          });

        });
      });

      describe('With at_period_end defined [with specified auth]', function() {
        it('Sends the correct request', function() {

          stripe.customers.cancelSubscription('customerIdFoo321', {at_period_end: true}, TEST_AUTH_KEY);
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'DELETE',
            url: '/v1/customers/customerIdFoo321/subscription',
            data: { at_period_end: true },
            auth: TEST_AUTH_KEY
          });

        });
      });

    });

  });

  describe('Discount methods', function() {

    describe('deleteDiscount', function() {

      it('Sends the correct request', function() {

        stripe.customers.deleteDiscount('customerIdFoo321');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/discount',
          data: {}
        });

      });

    });

    describe('deleteSubscriptionDiscount', function() {

      it('Sends the correct request', function() {

        stripe.customers.deleteSubscriptionDiscount('customerIdFoo321', 'subscriptionIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdFoo456/discount',
          data: {}
        });

      });

    });

  });

  describe('Metadata methods', function() {

    describe('setMetadata', function() {

      describe('When deleting metadata', function() {

        it('Sends the correct request', function() {

          stripe.customers.setMetadata('customerIdFoo321', null);
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'POST',
            url: '/v1/customers/customerIdFoo321',
            data: {
              metadata: null
            }
          });

        });

      });

      describe('When setting new metadata', function() {

        it('Sends one request to get current, and another to set new data', function() {

          var defer = when.defer();

          stripe.customers.setMetadata('customerIdFoo321', {
            foo: 123,
            baz: 456
          }).then(function() {
            var reqs = stripe.REQUESTS;
            defer.resolve([
              // Last two requests
              reqs[reqs.length-2],
              reqs[reqs.length-1]
            ]);
          });

          return expect(defer.promise).to.eventually.deep.equal([
            {
              // First reset metadata:
              method: 'POST',
              url: '/v1/customers/customerIdFoo321',
              data: { metadata: null }
            },
            {
              // Then set new metadata:
              method: 'POST',
              url: '/v1/customers/customerIdFoo321',
              data: {
                metadata: { foo: 123, baz: 456 }
              }
            }
          ]);

        });

      });

      describe('When setting with an auth key', function() {
        it('Sends the correct request, including the specified auth key', function() {
          stripe.customers.setMetadata('customerIdFoo321', null, TEST_AUTH_KEY);
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'POST',
            url: '/v1/customers/customerIdFoo321',
            data: {
              metadata: null
            },
            auth: TEST_AUTH_KEY
          });
          stripe.customers.setMetadata('customerIdFoo321', 'a', '1234', TEST_AUTH_KEY);
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'POST',
            url: '/v1/customers/customerIdFoo321',
            data: {
              metadata: { a: '1234' }
            },
            auth: TEST_AUTH_KEY
          });
          stripe.customers.setMetadata('customerIdFoo321', 'a', null, TEST_AUTH_KEY);
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'POST',
            url: '/v1/customers/customerIdFoo321',
            data: {
              metadata: { a: null }
            },
            auth: TEST_AUTH_KEY
          });
        });
      });

    });

  });

  describe('Card methods', function() {

    describe('retrieveCard', function() {

      it('Sends the correct request', function() {

        stripe.customers.retrieveCard('customerIdFoo321', 'cardIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          data: {}
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        stripe.customers.retrieveCard('customerIdFoo321', 'cardIdFoo456', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          data: {},
          auth: TEST_AUTH_KEY
        });

      });

    });

    describe('createCard', function() {

      it('Sends the correct request', function() {

        stripe.customers.createCard('customerIdFoo321', {
          number: '123456', exp_month: '12'
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/cards',
          data: { number: '123456', exp_month: '12' }
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        stripe.customers.createCard('customerIdFoo321', {
          number: '123456', exp_month: '12'
        }, TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/cards',
          data: { number: '123456', exp_month: '12' },
          auth: TEST_AUTH_KEY
        });

      });

    });

    describe('updateCard', function() {

      it('Sends the correct request', function() {

        stripe.customers.updateCard('customerIdFoo321', 'cardIdFoo456', {
          name: 'Bob M. Baz'
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          data: { name: 'Bob M. Baz' }
        });

      });

    });

    describe('deleteCard', function() {

      it('Sends the correct request', function() {

        stripe.customers.deleteCard('customerIdFoo321', 'cardIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          data: {}
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        stripe.customers.deleteCard('customerIdFoo321', 'cardIdFoo456', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          data: {},
          auth: TEST_AUTH_KEY
        });

      });

    });

    describe('listCards', function() {

      it('Sends the correct request', function() {

        stripe.customers.listCards('customerIdFoo321');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/cards',
          data: {}
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        stripe.customers.listCards('customerIdFoo321', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/cards',
          data: {},
          auth: TEST_AUTH_KEY
        });

      });

    });

  });

  describe('Subscription methods', function() {

    describe('retrieveSubscription', function() {

      it('Sends the correct request', function() {

        stripe.customers.retrieveSubscription('customerIdFoo321', 'subscriptionIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdFoo456',
          data: {}
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        stripe.customers.retrieveSubscription('customerIdFoo321', 'subscriptionIdFoo456', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdFoo456',
          data: {},
          auth: TEST_AUTH_KEY
        });

      });

    });

    describe('createSubscription', function() {

      it('Sends the correct request', function() {

        stripe.customers.createSubscription('customerIdFoo321', {
          plan: 'gold', quantity: '12'
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/subscriptions',
          data: { plan: 'gold', quantity: '12' }
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        stripe.customers.createSubscription('customerIdFoo321', {
          plan: 'gold', quantity: '12'
        }, TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/subscriptions',
          data: { plan: 'gold', quantity: '12' },
          auth: TEST_AUTH_KEY
        });

      });

    });

    describe('updateSubscription (new-style api)', function() {

      it('Sends the correct request', function() {

        stripe.customers.updateSubscription('customerIdFoo321', 'subscriptionIdFoo456', {
          quantity: '2'
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdFoo456',
          data: { quantity: '2' }
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        stripe.customers.updateSubscription('customerIdFoo321', 'subscriptionIdFoo456', {
          quantity: '2'
        }, TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdFoo456',
          data: { quantity: '2' },
          auth: TEST_AUTH_KEY
        });

      });

    });

    describe('cancelSubscription (new-style api)', function() {

      it('Sends the correct request', function() {

        stripe.customers.cancelSubscription('customerIdFoo321', 'subscriptionIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdFoo456',
          data: {}
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        stripe.customers.cancelSubscription('customerIdFoo321', 'subscriptionIdFoo456', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdFoo456',
          data: {},
          auth: TEST_AUTH_KEY
        });

      });

      describe('With at_period_end defined', function() {
        it('Sends the correct request', function() {

          stripe.customers.cancelSubscription('customerIdFoo321', 'subscriptionIdFoo456', {at_period_end: true});
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'DELETE',
            url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdFoo456',
            data: { at_period_end: true }
          });

        });
      });

      describe('With at_period_end defined [with specified auth]', function() {
        it('Sends the correct request', function() {

          stripe.customers.cancelSubscription('customerIdFoo321', 'subscriptionIdFoo456', {at_period_end: true}, TEST_AUTH_KEY);
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'DELETE',
            url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdFoo456',
            data: { at_period_end: true },
            auth: TEST_AUTH_KEY
          });

        });
      });

    });

    describe('listSubscriptions', function() {

      it('Sends the correct request', function() {

        stripe.customers.listSubscriptions('customerIdFoo321');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/subscriptions',
          data: {}
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        stripe.customers.listSubscriptions('customerIdFoo321', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/subscriptions',
          data: {},
          auth: TEST_AUTH_KEY
        });

      });

    });

  });

});