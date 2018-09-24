'use strict';

var stripe = require('../../../testUtils').getSpyableStripe();

var expect = require('chai').expect;

describe('Terminal', function () {
  describe('Locations Resource', function () {
    describe('retrieve', function () {
      it('Sends the correct request', function () {
        stripe.terminal.locations.retrieve('loc_123');

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/terminal/locations/loc_123',
          headers: {},
          data: {},
        });
      });
    });

    describe('create', function () {
      it('Sends the correct request', function () {
        stripe.terminal.locations.create({
          display_name: 'name',
          address: {
            line1: 'line1',
            country: 'US',
            postal_code: '12345',
            state: 'CA',
            city: 'San Francisco',
          },
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/terminal/locations',
          headers: {},
          data: {
            display_name: 'name',
            address: {
              line1: 'line1',
              country: 'US',
              postal_code: '12345',
              state: 'CA',
              city: 'San Francisco',
            },
          },
        });
      });
    });

    describe('update', function () {
      it('Sends the correct request', function () {
        stripe.terminal.locations.update('loc_123', {
          display_name: 'name'
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/terminal/locations/loc_123',
          headers: {},
          data: {
            display_name: 'name',
          },
        });
      });
    });

    describe('list', function () {
      it('Sends the correct request', function () {
        stripe.terminal.locations.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/terminal/locations',
          headers: {},
          data: {},
        });
      });
    });
  });
});
