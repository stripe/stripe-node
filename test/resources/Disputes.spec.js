'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Dispute Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      stripe.disputes.retrieve('dp_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/disputes/dp_123',
        data: {},
        headers: {},
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      stripe.disputes.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/disputes',
        data: {},
        headers: {},
      });

    });

  });

  describe('close', function() {

    it('Sends the correct request', function() {

      stripe.disputes.close('dp_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/disputes/dp_123/close',
        headers: {},
        data: {}
      });

    });

  });

  describe('update', function() {

    it('Sends the correct request', function() {

      stripe.disputes.update('dp_123', {evidence: {customer_name: 'Bob'}});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/disputes/dp_123',
        headers: {},
        data: { evidence: {customer_name: 'Bob'}}
      });

    });

  });
});
