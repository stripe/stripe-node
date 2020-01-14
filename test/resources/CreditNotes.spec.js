'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('CreditNotes Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.creditNotes.retrieve('cn_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/credit_notes/cn_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      const data = {
        amount: 100,
        invoice: 'in_123',
        reason: 'duplicate',
      };
      stripe.creditNotes.create(data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/credit_notes',
        headers: {},
        data,
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.creditNotes.list({count: 25});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/credit_notes?count=25',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('listLineItems', () => {
    it('Sends the correct request', () => {
      stripe.creditNotes.listLineItems('cn_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/credit_notes/cn_123/lines',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('listPreviewLineItems', () => {
    it('Sends the correct request', () => {
      stripe.creditNotes.listPreviewLineItems();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/credit_notes/preview/lines',
        headers: {},
        data: {},
        settings: {},
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
        settings: {},
      });
    });
  });

  describe('preview', () => {
    it('Sends the correct request', () => {
      const data = {
        amount: 100,
        invoice: 'in_123',
      };
      stripe.creditNotes.preview(data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/credit_notes/preview?amount=100&invoice=in_123',
        headers: {},
        data: {},
        settings: {},
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
        settings: {},
      });
    });
  });
});
