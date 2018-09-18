'use strict';

var stripe = require('../../../testUtils').getSpyableStripe();

var expect = require('chai').expect;

describe('Issuing', function () {
  describe('Cards Resource', function () {
    describe('retrieve', function () {
      it('Sends the correct request', function () {
        stripe.issuing.cards.retrieve('ic_123');

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/cards/ic_123',
          headers: {},
          data: {},
        });
      });
    });

    describe('create', function () {
      it('Sends the correct request', function () {
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
        });
      });
    });

    describe('update', function () {
      it('Sends the correct request', function () {
        stripe.issuing.cards.update('ic_123', {
          metadata: {
            thing1: true,
            thing2: 'yes'
          },
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/cards/ic_123',
          headers: {},
          data: {
            metadata: {
              thing1: true,
              thing2: 'yes'
            },
          },
        });
      });
    });

    describe('list', function () {
      it('Sends the correct request', function () {
        stripe.issuing.cards.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/cards',
          headers: {},
          data: {},
        });
      });
    });
  });

  describe('Virtual Cards Resource', function () {
    describe('retrieve', function () {
      it('Sends the correct request', function () {
        stripe.issuing.cards.retrieveDetails('ic_123');

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/cards/ic_123/details',
          headers: {},
          data: {},
        });
      });
    });
  });
});
