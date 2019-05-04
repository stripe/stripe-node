'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('CreditNotes Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.creditNotes.retrieve('cn_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/credit_notes/cn_123',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      var data = {
        amount: 100,
        invoice: 'in_123',
        reason: 'duplicate',
      };
      stripe.creditNotes.create(data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/credit_notes',
        headers: {},
        data: data,
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.creditNotes.list({count: 25});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/credit_notes',
        headers: {},
        data: {count: 25},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.creditNotes.update('cn_123', {application_fee: 200});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/credit_notes/cn_123',
        headers: {},
        data: {application_fee: 200},
      });
    });
  });

  describe('voidCreditNote', () => {
    it('Sends the correct request', () => {
      stripe.creditNotes.voidCreditNote('cn_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/credit_notes/cn_123/void',
        headers: {},
        data: {},
      });
    });
  });
});
