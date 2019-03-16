'use strict';

var stripe = require('../../../testUtils').getSpyableStripe();

var expect = require('chai').expect;

describe('Terminal', function () {
  describe('Readers Resource', function () {
    describe('retrieve', function () {
      it('Sends the correct request', function () {
        stripe.terminal.readers.retrieve('rdr_123');

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/terminal/readers/rdr_123',
          headers: {},
          data: {},
        });
      });
    });

    describe('create', function () {
      it('Sends the correct request', function () {
        stripe.terminal.readers.create({
          registration_code: 'a-b-c',
          label: 'name',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/terminal/readers',
          headers: {},
          data: {
            registration_code: 'a-b-c',
            label: 'name',
          },
        });
      });
    });

    describe('del', function() {
      it('Sends the correct request', function() {
        stripe.terminal.readers.del('rdr_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/terminal/readers/rdr_123',
          headers: {},
          data: {},
        });
      });
    });

    describe('update', function () {
      it('Sends the correct request', function () {
        stripe.terminal.readers.update('rdr_123', {
          label: 'name'
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/terminal/readers/rdr_123',
          headers: {},
          data: {
            label: 'name',
          },
        });
      });
    });

    describe('list', function () {
      it('Sends the correct request', function () {
        stripe.terminal.readers.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/terminal/readers',
          headers: {},
          data: {},
        });
      });
    });
  });
});
