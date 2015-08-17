'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Refund Resource', function() {

  describe('create', function() {

    it('Sends the correct request', function() {

      stripe.refunds.create({
        amount: '300',
        charge: 'ch_123'
      })

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/refunds',
        headers: {},
        data: {
          amount: '300',
          charge: 'ch_123'
        }
      });

    });

  });

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      stripe.refunds.retrieve('re_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/refunds/re_123',
        data: {},
        headers: {},
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      stripe.refunds.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/refunds',
        data: {},
        headers: {},
      });

    });

  });


  describe('update', function() {

    it('Sends the correct request', function() {

      stripe.refunds.update('re_123', {metadata: {key: 'abcd'}});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/refunds/re_123',
        headers: {},
        data: { metadata: {key: 'abcd'}}
      });

    });

  });
});
