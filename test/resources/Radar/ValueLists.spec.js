'use strict';

var stripe = require('../../../testUtils').getSpyableStripe();

var expect = require('chai').expect;

describe('Radar', function () {
  describe('ValueLists Resource', function () {
    describe('retrieve', function () {
      it('Sends the correct request', function () {
        stripe.radar.valueLists.retrieve('rsl_123');

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/radar/value_lists/rsl_123',
          headers: {},
          data: {},
        });
      });
    });

    describe('create', function () {
      it('Sends the correct request', function () {
        stripe.radar.valueLists.create({
          alias: 'alias',
          name: 'name',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/radar/value_lists',
          headers: {},
          data: {
            alias: 'alias',
            name: 'name',
          },
        });
      });
    });

    describe('list', function () {
      it('Sends the correct request', function () {
        stripe.radar.valueLists.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/radar/value_lists',
          headers: {},
          data: {},
        });
      });
    });

    describe('del', function() {
      it('Sends the correct request', function() {
        stripe.radar.valueLists.del('rsl_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/radar/value_lists/rsl_123',
          headers: {},
          data: {},
        });
      });
    });

    describe('update', function() {
      it('Sends the correct request', function() {
        stripe.radar.valueLists.update('rsl_123', {
          metadata: {a: '1234'},
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/radar/value_lists/rsl_123',
          headers: {},
          data: {
            metadata: {a: '1234'},
          },
        });
      });
    });
  });
});
