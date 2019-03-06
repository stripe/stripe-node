'use strict';

var stripe = require('../../../testUtils').getSpyableStripe();

var expect = require('chai').expect;

describe('Checkout', function () {
  describe('Sessions Resource', function () {
    describe('create', function() {
      it('Sends the correct request', function() {
        var params = {
          cancel_url: 'https://stripe.com/cancel',
          client_reference_id: '1234',
          line_items: [
            {
              amount: 123,
              currency: 'usd',
              description: 'item 1',
              images: [
                'https://stripe.com/img1',
              ],
              name: 'name',
              quantity: 2,
            },
          ],
          payment_intent_data: {
            receipt_email: 'test@stripe.com',
          },
          payment_method_types: ['card'],
          success_url: 'https://stripe.com/success',
        };
        stripe.checkout.sessions.create(params);

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/checkout/sessions',
          headers: {},
          data: params,
        });
      });
    });

    describe('retrieve', function() {
      it('Sends the correct request', function() {
        stripe.checkout.sessions.retrieve('cs_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/checkout/sessions/cs_123',
          data: {},
          headers: {},
        });
      });
    });
  });
});
