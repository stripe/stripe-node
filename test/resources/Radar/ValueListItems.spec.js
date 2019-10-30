'use strict';

const stripe = require('../../../testUtils').getSpyableStripe();

const expect = require('chai').expect;

describe('Radar', () => {
  describe('ValueLists Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        stripe.radar.valueListItems.retrieve('rsli_123');

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/radar/value_list_items/rsli_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('create', () => {
      it('Sends the correct request', () => {
        stripe.radar.valueListItems.create({
          value_list: 'rsl_123',
          value: 'value',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/radar/value_list_items',
          headers: {},
          data: {
            value_list: 'rsl_123',
            value: 'value',
          },
          settings: {},
        });
      });
    });

    describe('list', () => {
      it('Sends the correct request', () => {
        stripe.radar.valueListItems.list({
          value_list: 'rsl_123',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/radar/value_list_items?value_list=rsl_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('del', () => {
      it('Sends the correct request', () => {
        stripe.radar.valueListItems.del('rsli_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/radar/value_list_items/rsli_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
