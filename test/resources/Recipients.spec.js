'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

const TEST_AUTH_KEY = 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11';

describe('Recipients Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.recipients.retrieve('recipientId1');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/recipients/recipientId1',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.recipients.create({
        name: 'Bob',
        type: 'individual',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/recipients',
        headers: {},
        data: {name: 'Bob', type: 'individual'},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
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

  describe('del', () => {
    it('Sends the correct request', () => {
      stripe.recipients.del('recipientId4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/recipients/recipientId4',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.recipients.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/recipients',
        headers: {},
        data: {},
      });
    });
  });

  describe('Card methods', () => {
    describe('retrieveCard', () => {
      it('Sends the correct request', () => {
        stripe.recipients.retrieveCard('recipientIdFoo321', 'cardIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/recipients/recipientIdFoo321/cards/cardIdFoo456',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.recipients.retrieveCard(
          'recipientIdFoo321',
          'cardIdFoo456',
          TEST_AUTH_KEY
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/recipients/recipientIdFoo321/cards/cardIdFoo456',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('createCard', () => {
      it('Sends the correct request', () => {
        stripe.recipients.createCard('recipientIdFoo321', {
          number: '123456',
          exp_month: '12',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/recipients/recipientIdFoo321/cards',
          headers: {},
          data: {number: '123456', exp_month: '12'},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.recipients.createCard(
          'recipientIdFoo321',
          {
            number: '123456',
            exp_month: '12',
          },
          TEST_AUTH_KEY
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/recipients/recipientIdFoo321/cards',
          headers: {},
          data: {number: '123456', exp_month: '12'},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('updateCard', () => {
      it('Sends the correct request', () => {
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

    describe('deleteCard', () => {
      it('Sends the correct request', () => {
        stripe.recipients.deleteCard('recipientIdFoo321', 'cardIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/recipients/recipientIdFoo321/cards/cardIdFoo456',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.recipients.deleteCard(
          'recipientIdFoo321',
          'cardIdFoo456',
          TEST_AUTH_KEY
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/recipients/recipientIdFoo321/cards/cardIdFoo456',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('listCards', () => {
      it('Sends the correct request', () => {
        stripe.recipients.listCards('recipientIdFoo321');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/recipients/recipientIdFoo321/cards',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
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
