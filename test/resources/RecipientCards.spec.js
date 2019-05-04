'use strict';

const resources = require('../../lib/stripe').resources;
const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

const RECIPIENT_TEST_ID = 'recipientIdTest999';

// Create new recipientCard instance with pre-filled recipientId:
const recipientCard = new resources.RecipientCards(stripe, {
  recipientId: RECIPIENT_TEST_ID,
});

// Use spy from existing resource:
recipientCard._request = stripe.recipients._request;

describe('RecipientCard Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      recipientCard.retrieve('cardIdFoo456');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/recipients/${RECIPIENT_TEST_ID}/cards/cardIdFoo456`,
        headers: {},
        data: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      recipientCard.create({
        number: '123456',
        exp_month: '12',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/recipients/${RECIPIENT_TEST_ID}/cards`,
        headers: {},
        data: {number: '123456', exp_month: '12'},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      recipientCard.update('cardIdFoo456', {
        name: 'Bob M. Baz',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/recipients/${RECIPIENT_TEST_ID}/cards/cardIdFoo456`,
        headers: {},
        data: {name: 'Bob M. Baz'},
      });
    });
  });

  describe('del', () => {
    it('Sends the correct request', () => {
      recipientCard.del('cardIdFoo456');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: `/v1/recipients/${RECIPIENT_TEST_ID}/cards/cardIdFoo456`,
        headers: {},
        data: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      recipientCard.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/recipients/${RECIPIENT_TEST_ID}/cards`,
        headers: {},
        data: {},
      });
    });
  });
});
