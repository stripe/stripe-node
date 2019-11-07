'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('IssuerFraudRecord Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.issuerFraudRecords.retrieve('issfr_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/issuer_fraud_records/issfr_123',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.issuerFraudRecords.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/issuer_fraud_records',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });
});
