

const stripe = require('../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('Plans Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.plans.retrieve('planId1');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/plans/planId1',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.plans.create({
        amount: 200, currency: 'usd',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans',
        headers: {},
        data: { amount: 200, currency: 'usd' },
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.plans.update('planId3', {
        amount: 1900, currency: 'usd',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans/planId3',
        headers: {},
        data: { amount: 1900, currency: 'usd' },
      });
    });
  });

  describe('del', () => {
    it('Sends the correct request', () => {
      stripe.plans.del('planId4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/plans/planId4',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.plans.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/plans',
        headers: {},
        data: {},
      });
    });
  });
});
