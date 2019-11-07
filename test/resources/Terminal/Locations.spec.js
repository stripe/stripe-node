'use strict';

const stripe = require('../../../testUtils').getSpyableStripe();

const expect = require('chai').expect;

describe('Terminal', () => {
  describe('Locations Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        stripe.terminal.locations.retrieve('loc_123');

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/terminal/locations/loc_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('create', () => {
      it('Sends the correct request', () => {
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
          settings: {},
        });
      });
    });

    describe('del', () => {
      it('Sends the correct request', () => {
        stripe.terminal.locations.del('loc_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/terminal/locations/loc_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('update', () => {
      it('Sends the correct request', () => {
        stripe.terminal.locations.update('loc_123', {
          display_name: 'name',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/terminal/locations/loc_123',
          headers: {},
          data: {
            display_name: 'name',
          },
          settings: {},
        });
      });
    });

    describe('list', () => {
      it('Sends the correct request', () => {
        stripe.terminal.locations.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/terminal/locations',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
