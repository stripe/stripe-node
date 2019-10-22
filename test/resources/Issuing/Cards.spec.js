'use strict';

const stripe = require('../../../testUtils').getSpyableStripe();

const expect = require('chai').expect;

describe('Issuing', () => {
  describe('Cards Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        stripe.issuing.cards.retrieve('ic_123');

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/cards/ic_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('create', () => {
      it('Sends the correct request', () => {
        stripe.issuing.cards.create({
          currency: 'usd',
          type: 'physical',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/cards',
          headers: {},
          data: {
            currency: 'usd',
            type: 'physical',
          },
          settings: {},
        });
      });
    });

    describe('update', () => {
      it('Sends the correct request', () => {
        stripe.issuing.cards.update('ic_123', {
          metadata: {
            thing1: true,
            thing2: 'yes',
          },
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/cards/ic_123',
          headers: {},
          data: {
            metadata: {
              thing1: true,
              thing2: 'yes',
            },
          },
          settings: {},
        });
      });
    });

    describe('list', () => {
      it('Sends the correct request', () => {
        stripe.issuing.cards.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/cards',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });

  describe('Virtual Cards Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        stripe.issuing.cards.retrieveDetails('ic_123');

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/cards/ic_123/details',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
