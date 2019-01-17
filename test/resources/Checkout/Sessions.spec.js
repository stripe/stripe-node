'use strict';

var stripe = require('../../../testUtils').getSpyableStripe();

var expect = require('chai').expect;

describe('Checkout', function () {
  describe('Sessions Resource', function () {
    describe('create', function() {
      it('Sends the correct request', function() {
        stripe.checkout.sessions.create({
          allowed_source_types: ['card'],
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
          success_url: 'https://stripe.com/success',
        });

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/checkout/sessions',
          headers: {},
          data: {
            allowed_source_types: ['card'],
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
            success_url: 'https://stripe.com/success',
          },
        });
      });
    });
  });
});
