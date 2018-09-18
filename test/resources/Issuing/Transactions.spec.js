'use strict';

var stripe = require('../../../testUtils').getSpyableStripe();

var expect = require('chai').expect;

describe('Issuing', function () {
  describe('Transactions Resource', function () {
    describe('retrieve', function () {
      it('Sends the correct request', function () {
        stripe.issuing.transactions.retrieve('ipi_123');

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/transactions/ipi_123',
          headers: {},
          data: {},
        });
      });
    });

    describe('update', function () {
      it('Sends the correct request', function () {
        stripe.issuing.transactions.update('ipi_123', {
          metadata: {
            thing1: true,
            thing2: 'yes'
          },
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/transactions/ipi_123',
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
        stripe.issuing.transactions.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/transactions',
          headers: {},
          data: {},
        });
      });
    });
  });
});
