'use strict';

const stripe = require('../../../testUtils').getSpyableStripe();

const expect = require('chai').expect;

describe('Issuing', () => {
  describe('Cardholders Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        stripe.issuing.cardholders.retrieve('ich_123');

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/cardholders/ich_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('create', () => {
      it('Sends the correct request', () => {
        stripe.issuing.cardholders.create({
          billing: {},
          name: 'Tim Testperson',
          type: 'individual',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/cardholders',
          headers: {},
          data: {
            billing: {},
            name: 'Tim Testperson',
            type: 'individual',
          },
          settings: {},
        });
      });
    });

    describe('update', () => {
      it('Sends the correct request', () => {
        stripe.issuing.cardholders.update('ich_123', {
          metadata: {
            thing1: true,
            thing2: 'yes',
          },
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/cardholders/ich_123',
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
        stripe.issuing.cardholders.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/cardholders',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
