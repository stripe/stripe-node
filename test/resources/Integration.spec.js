'use strict';

// Resource integration tests which use stripe-mock.

const stripe = require('../../testUtils').getStripeMockClient();
const expect = require('chai').expect;

describe('Customers Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', async () => {
      const customer = await stripe.customers.retrieve('cus_123');
      expect(customer).to.not.be.null;
      expect(customer.id).to.equal('cus_123');
    });
  });
});
