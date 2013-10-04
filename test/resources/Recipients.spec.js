'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Recipients Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      stripe.recipients.retrieve('recipientId1');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/recipients/recipientId1',
        data: {}
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      stripe.recipients.create({
        name: 'Bob', type: 'individual'
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/recipients',
        data: { name: 'Bob', type: 'individual' }
      });

    });

  });

  describe('update', function() {

    it('Sends the correct request', function() {

      stripe.recipients.update('recipientId3', {
        name: 'Bob Smith'
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/recipients/recipientId3',
        data: { name: 'Bob Smith' }
      });

    });

  });

  describe('del', function() {

    it('Sends the correct request', function() {

      stripe.recipients.del('recipientId4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/recipients/recipientId4',
        data: {}
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      stripe.recipients.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/recipients',
        data: {}
      });

    });

  });

});
