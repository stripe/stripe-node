'use strict';

var stripe = require('../../testUtils').getSpyableStripe();

var expect = require('chai').expect;

describe('Issuing', function () {
  describe('Cardholders Resource', function () {
    describe('retrieve', function () {
      it('Sends the correct request', function () {
        stripe.issuing.cardholders.retrieve('ich_123');

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/cardholders/ich_123',
          headers: {},
          data: {},
        });
      });
    });

    describe('create', function () {
      it('Sends the correct request', function () {
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
        });
      });
    });

    describe('update', function () {
      it('Sends the correct request', function () {
        stripe.issuing.cardholders.update('ich_123', {
          metadata: {
            thing1: true,
            thing2: 'yes'
          },
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/cardholders/ich_123',
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
        stripe.issuing.cardholders.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/cardholders',
          headers: {},
          data: {},
        });
      });
    });
  });
});
