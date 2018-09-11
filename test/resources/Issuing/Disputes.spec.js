'use strict';

var stripe = require('../../../testUtils').getSpyableStripe();

var expect = require('chai').expect;

describe('Issuing', function () {
  describe('Disputes Resource', function () {
    describe('retrieve', function () {
      it('Sends the correct request', function () {
        stripe.issuing.disputes.retrieve('idp_123');

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/disputes/idp_123',
          headers: {},
          data: {},
        });
      });
    });

    describe('create', function () {
      it('Sends the correct request', function () {
        stripe.issuing.disputes.create({
          transaction: 'ipi_123',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/disputes',
          headers: {},
          data: {
            transaction: 'ipi_123',
          },
        });
      });
    });

    describe('update', function () {
      it('Sends the correct request', function () {
        stripe.issuing.disputes.update('idp_123', {
          metadata: {
            thing1: true,
            thing2: 'yes'
          },
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/disputes/idp_123',
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
        stripe.issuing.disputes.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/disputes',
          headers: {},
          data: {},
        });
      });
    });
  });
});
