'use strict';

const stripe = require('../../../testUtils').getSpyableStripe();

const expect = require('chai').expect;

describe('Checkout', () => {
  describe('Sessions Resource', () => {
    describe('create', () => {
      it('Sends the correct request', () => {
        const params = {
          cancel_url: 'https://stripe.com/cancel',
          client_reference_id: '1234',
          line_items: [
            {
              amount: 123,
              currency: 'usd',
              description: 'item 1',
              images: ['https://stripe.com/img1'],
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
          settings: {},
        });
      });
    });

    describe('retrieve', () => {
      it('Sends the correct request', () => {
        stripe.checkout.sessions.retrieve('cs_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/checkout/sessions/cs_123',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });

    describe('listLineItems', () => {
      it('Sends the correct request', () => {
        stripe.checkout.sessions.listLineItems('cs_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/checkout/sessions/cs_123/line_items',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
