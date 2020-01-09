'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

function errorsOnNoStripeVersion() {
  return expect(
    stripe.ephemeralKeys.create({customer: 'cus_123'})
  ).to.be.eventually.rejectedWith(/stripe_version must be specified/i);
}

function sendsCorrectStripeVersion() {
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
      beforeEach(function() {
        this.oldVersion = stripe.getApiField('version');
        stripe.setApiVersion('2017-05-25');
      });

      afterEach(function() {
        stripe.setApiVersion(this.oldVersion);
      });

      it('Errors if no stripe-version is specified', () =>
        errorsOnNoStripeVersion());

      it('Sends the correct stripe-version', () => {
        sendsCorrectStripeVersion();
      });
    });

    describe('when no api version is set', () => {
      beforeEach(function() {
        this.oldVersion = stripe.getApiField('version');
        stripe.setApiVersion(null);
      });

      afterEach(function() {
        stripe.setApiVersion(this.oldVersion);
      });

      it('Errors if no stripe-version is specified', () =>
        errorsOnNoStripeVersion());

      it('Sends the correct stripe-version', () => {
        sendsCorrectStripeVersion();
      });
    });
  });

  describe('delete', () => {
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
