'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Events Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.events.retrieve('eventIdBaz');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/events/eventIdBaz',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.events.list({count: 25});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/events',
        headers: {},
        data: {count: 25},
      });
    });
  });
});
