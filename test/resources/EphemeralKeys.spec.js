'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

function errorsOnNoStripeVersion() {
  return expect(
    stripe.ephemeralKeys.create({customer: 'cus_123'})
  ).to.be.eventually.rejectedWith(/stripe_version must be specified/i);
}

function sendsCorrectStripeVersion() {
  stripe.ephemeralKeys.create(
    {customer: 'cus_123'},
    {stripe_version: '2017-06-05'}
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
  });
}

describe('EphemeralKey Resource', function() {
  describe('create', function() {
    it('Sends the correct request', function() {
      stripe.ephemeralKeys.create(
        {customer: 'cus_123'},
        {stripe_version: '2017-05-25'}
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
      });
    });

    describe('when an api version is set', function() {
      beforeEach(function() {
        this.oldVersion = stripe.getApiField('version');
        stripe.setApiVersion('2017-05-25');
      });

      afterEach(function() {
        stripe.setApiVersion(this.oldVersion);
      });

      it('Errors if no stripe-version is specified', function() {
        return errorsOnNoStripeVersion();
      });

      it('Sends the correct stripe-version', function() {
        sendsCorrectStripeVersion();
      });
    });

    describe('when no api version is set', function() {
      beforeEach(function() {
        this.oldVersion = stripe.getApiField('version');
        stripe.setApiVersion(null);
      });

      afterEach(function() {
        stripe.setApiVersion(this.oldVersion);
      });

      it('Errors if no stripe-version is specified', function() {
        return errorsOnNoStripeVersion();
      });

      it('Sends the correct stripe-version', function() {
        sendsCorrectStripeVersion();
      });
    });
  });

  describe('delete', function() {
    it('Sends the correct request', function() {
      stripe.ephemeralKeys.del('ephkey_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/ephemeral_keys/ephkey_123',
        data: {},
        headers: {},
      });
    });
  });
});
