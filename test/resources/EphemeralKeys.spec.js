'use strict';

const getSpyableStripe = require('../testUtils.js').getSpyableStripe;
const expect = require('chai').expect;

function errorsOnNoStripeVersion(stripe) {
  return expect(
    stripe.ephemeralKeys.create({customer: 'cus_123'})
  ).to.be.eventually.rejectedWith(
    /Passing apiVersion in a separate options hash is required/i
  );
}

function sendsCorrectStripeVersion(stripe) {
  stripe.ephemeralKeys.create(
    {customer: 'cus_123'},
    {apiVersion: '2017-06-05'}
  );

  expect(stripe.LAST_REQUEST).to.deep.equal({
    method: 'POST',
    url: '/v1/ephemeral_keys',
    data: {
      customer: 'cus_123',
    },
    headers: {
      'Stripe-Version': '2017-06-05',
    },
    settings: {},
  });
}

describe('EphemeralKey Resource', () => {
  describe('create', () => {
    const stripe = getSpyableStripe();

    it('Sends the correct request', () => {
      stripe.ephemeralKeys.create(
        {customer: 'cus_123'},
        {apiVersion: '2017-05-25'}
      );
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/ephemeral_keys',
        data: {
          customer: 'cus_123',
        },
        headers: {
          'Stripe-Version': '2017-05-25',
        },
        settings: {},
      });
    });

    describe('when an api version is set', () => {
      const stripe = getSpyableStripe({
        apiVersion: '2017-05-25',
      });

      it('Errors if no stripe-version is specified', () =>
        errorsOnNoStripeVersion(stripe));

      it('Sends the correct stripe-version', () => {
        sendsCorrectStripeVersion(stripe);
      });
    });

    describe('when no api version is set', () => {
      const stripe = getSpyableStripe({
        apiVersion: null,
      });

      it('Errors if no stripe-version is specified', () =>
        errorsOnNoStripeVersion(stripe));

      it('Sends the correct stripe-version', () => {
        sendsCorrectStripeVersion(stripe);
      });
    });
  });

  describe('delete', () => {
    const stripe = getSpyableStripe();

    it('Sends the correct request', () => {
      stripe.ephemeralKeys.del('ephkey_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/ephemeral_keys/ephkey_123',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });
});
