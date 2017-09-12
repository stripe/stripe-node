

require('./testUtils');

const stripe = require('./testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('StripeResource', () => {
  describe('createResourcePathWithSymbols', () => {
    it('Generates a path', () => {
      stripe.invoices.create({});
      const path = stripe.invoices.createResourcePathWithSymbols('{id}');
      expect(path).to.equal('/invoices/{id}');
    });
  });

  describe('_defaultHeaders', () => {
    it('sets the Authorization header with Bearer auth using the global API key', () => {
      const headers = stripe.invoices._defaultHeaders(null, 0, null);
      expect(headers.Authorization).to.equal('Bearer fakeAuthToken');
    });
    it('sets the Authorization header with Bearer auth using the specified API key', () => {
      const headers = stripe.invoices._defaultHeaders('anotherFakeAuthToken', 0, null);
      expect(headers.Authorization).to.equal('Bearer anotherFakeAuthToken');
    });
    it('sets the Stripe-Version header if an API version is provided', () => {
      const headers = stripe.invoices._defaultHeaders(null, 0, '1970-01-01');
      expect(headers['Stripe-Version']).to.equal('1970-01-01');
    });
    it('does not the set the Stripe-Version header if no API version is provided', () => {
      const headers = stripe.invoices._defaultHeaders(null, 0, null);
      expect(headers).to.not.include.keys('Stripe-Version');
    });
  });
});
