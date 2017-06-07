'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

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

    function versionTests() {
      it('Errors if no stripe-version is specified', function() {
        return expect(
          stripe.ephemeralKeys.create({customer: 'cus_123'})
        ).to.be.eventually.rejectedWith(/stripe_version must be specified/i);
      });

      it('Sends the correct stripe-version', function() {
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
      });
    };

    describe('when an api version is set', function() {
      beforeEach(function() {
        stripe.setApiVersion('2017-05-25');
      });

      afterEach(function() {
        stripe.setApiVersion(null);
      });

      versionTests();
    });

    describe('when no api version is set', function() {
      versionTests();
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
