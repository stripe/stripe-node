'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11';

describe('Recipients Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.recipients.retrieve('recipientId1');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/recipients/recipientId1',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      stripe.recipients.create({
        name: 'Bob', type: 'individual',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/recipients',
        headers: {},
        data: {name: 'Bob', type: 'individual'},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      stripe.recipients.update('recipientId3', {
        name: 'Bob Smith',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/recipients/recipientId3',
        headers: {},
        data: {name: 'Bob Smith'},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      stripe.recipients.del('recipientId4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/recipients/recipientId4',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.recipients.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/recipients',
        headers: {},
        data: {},
      });
    });
  });

  describe('Card methods', function() {
    describe('retrieveCard', function() {
      it('Sends the correct request', function() {
        stripe.recipients.retrieveCard('recipientIdFoo321', 'cardIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/recipients/recipientIdFoo321/cards/cardIdFoo456',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', function() {
        stripe.recipients.retrieveCard('recipientIdFoo321', 'cardIdFoo456', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/recipients/recipientIdFoo321/cards/cardIdFoo456',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('createCard', function() {
      it('Sends the correct request', function() {
        stripe.recipients.createCard('recipientIdFoo321', {
          number: '123456', exp_month: '12',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/recipients/recipientIdFoo321/cards',
          headers: {},
          data: {number: '123456', exp_month: '12'},
        });
      });

      it('Sends the correct request [with specified auth]', function() {
        stripe.recipients.createCard('recipientIdFoo321', {
          number: '123456', exp_month: '12',
        }, TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/recipients/recipientIdFoo321/cards',
          headers: {},
          data: {number: '123456', exp_month: '12'},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('updateCard', function() {
      it('Sends the correct request', function() {
        stripe.recipients.updateCard('recipientIdFoo321', 'cardIdFoo456', {
          name: 'Bob M. Baz',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/recipients/recipientIdFoo321/cards/cardIdFoo456',
          headers: {},
          data: {name: 'Bob M. Baz'},
        });
      });
    });

    describe('deleteCard', function() {
      it('Sends the correct request', function() {
        stripe.recipients.deleteCard('recipientIdFoo321', 'cardIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/recipients/recipientIdFoo321/cards/cardIdFoo456',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', function() {
        stripe.recipients.deleteCard('recipientIdFoo321', 'cardIdFoo456', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/recipients/recipientIdFoo321/cards/cardIdFoo456',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('listCards', function() {
      it('Sends the correct request', function() {
        stripe.recipients.listCards('recipientIdFoo321');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/recipients/recipientIdFoo321/cards',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', function() {
        stripe.recipients.listCards('recipientIdFoo321', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/recipients/recipientIdFoo321/cards',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });
  });
});
