'use strict';

// Resource integration tests which use stripe-mock.

const stripe = require('../testUtils.js').getStripeMockClient();
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

describe('Charges Resource', () => {
  describe('search', () => {
    it('Retrieves first page', async () => {
      const result = await stripe.charges.search({query: 'currency:"USD"'});
      expect(result.total_count).to.equal(1);
      expect(result.data.length).to.equal(1);
      expect(result.data[0]).to.not.be.null;
    });
    it('Retrieves all as array', async () => {
      const result = await stripe.charges
        .search({query: 'currency:"USD"'})
        .autoPagingToArray({limit: 1000});
      expect(result.length).to.equal(1);
      expect(result[0]).to.not.be.null;
    });
    it('Retrieves all foreach', async () => {
      let cnt = 0;
      await stripe.charges
        .search({query: 'currency:"USD"'})
        .autoPagingEach((item) => {
          expect(item).to.not.be.null;
          cnt += 1;
        });
      expect(cnt).to.equal(1);
    });
  });
});

describe('Reader Resource', () => {
  describe('presentPaymentMethod', () => {
    it('Sends the correct request', async () => {
      const reader = await stripe.testHelpers.terminal.readers.presentPaymentMethod(
        'rdr_123'
      );
      expect(reader).to.not.be.null;
    });
  });
});
