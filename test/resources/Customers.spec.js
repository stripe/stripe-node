'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;
var when = require('when');

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

      stripe.customers.retrieve('cus_2dkAb792h1mfa4', 'Auth482');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/cus_2dkAb792h1mfa4',
        data: {},
        auth: 'Auth482'
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

      stripe.customers.create({ description: 'Some customer' }, 'Auth324');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers',
        data: { description: 'Some customer' },
        auth: 'Auth324'
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

      stripe.customers.list('Auth842');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers',
        data: {},
        auth: 'Auth842'
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
        }, 'auth981');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/subscription',
          data: { plan: 'fooPlan' },
          auth: 'auth981'
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

    });

  });

  describe('Discount methods', function() {

    describe('deleteDiscount', function() {

      it('Sends the correct request', function() {

        stripe.customers.deleteDiscount('customerIdFoo321', 'discountIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/discounts/discountIdFoo456',
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
          stripe.customers.setMetadata('customerIdFoo321', null, 'authKey133');
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'POST',
            url: '/v1/customers/customerIdFoo321',
            data: {
              metadata: null
            },
            auth: 'authKey133'
          });
          stripe.customers.setMetadata('customerIdFoo321', 'a', '1234', 'authKey133');
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'POST',
            url: '/v1/customers/customerIdFoo321',
            data: {
              metadata: { a: '1234' }
            },
            auth: 'authKey133'
          });
          stripe.customers.setMetadata('customerIdFoo321', 'a', null, 'authKey133');
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'POST',
            url: '/v1/customers/customerIdFoo321',
            data: {
              metadata: { a: null }
            },
            auth: 'authKey133'
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

        stripe.customers.retrieveCard('customerIdFoo321', 'cardIdFoo456', 'auth123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          data: {},
          auth: 'auth123'
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
        }, 'auth555');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/customers/customerIdFoo321/cards',
          data: { number: '123456', exp_month: '12' },
          auth: 'auth555'
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

        stripe.customers.deleteCard('customerIdFoo321', 'cardIdFoo456', 'auth921');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/cards/cardIdFoo456',
          data: {},
          auth: 'auth921'
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

        stripe.customers.listCards('customerIdFoo321', 'auth771');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/customers/customerIdFoo321/cards',
          data: {},
          auth: 'auth771'
        });

      });

    });

  });

});