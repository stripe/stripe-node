'use strict';

const {getSpyableStripe} = require('../testUtils.js');
const {expect} = require('chai');

const stripe = getSpyableStripe({});

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

describe('serializeBatch methods', () => {
  describe('customers.serializeBatchUpdate', () => {
    it('produces correct structure', () => {
      const result = JSON.parse(
        stripe.customers.serializeBatchUpdate('cus_123', {
          description: 'test',
        })
      );

      expect(result.id).to.match(UUID_REGEX);
      expect(result.path_params).to.deep.equal({customer: 'cus_123'});
      expect(result.params).to.deep.equal({description: 'test'});
      expect(result.stripe_version).to.be.a('string').and.not.be.empty;
      expect(result).to.not.have.property('context');
    });

    it('generates unique IDs per call', () => {
      const a = JSON.parse(
        stripe.customers.serializeBatchUpdate('cus_123', {})
      );
      const b = JSON.parse(
        stripe.customers.serializeBatchUpdate('cus_123', {})
      );

      expect(a.id).to.not.equal(b.id);
    });

    it('includes context when stripeContext is provided', () => {
      const result = JSON.parse(
        stripe.customers.serializeBatchUpdate(
          'cus_123',
          {},
          {
            stripeContext: 'acct_123',
          }
        )
      );

      expect(result.context).to.equal('acct_123');
    });

    it('defaults to empty params', () => {
      const result = JSON.parse(
        stripe.customers.serializeBatchUpdate('cus_123')
      );

      expect(result.params).to.deep.equal({});
    });

    it('serializes nested objects like metadata', () => {
      const result = JSON.parse(
        stripe.customers.serializeBatchUpdate('cus_123', {
          metadata: {key1: 'value1'},
        })
      );

      expect(result.params).to.deep.equal({metadata: {key1: 'value1'}});
    });

    it('uses custom apiVersion when provided', () => {
      const result = JSON.parse(
        stripe.customers.serializeBatchUpdate(
          'cus_123',
          {},
          {
            apiVersion: '2024-01-01',
          }
        )
      );

      expect(result.stripe_version).to.equal('2024-01-01');
    });

    it('falls back to default version when apiVersion is undefined', () => {
      const result = JSON.parse(
        stripe.customers.serializeBatchUpdate(
          'cus_123',
          {},
          {
            apiVersion: undefined,
          }
        )
      );

      expect(result.stripe_version).to.equal(stripe.getApiField('version'));
    });
  });

  describe('subscriptions.serializeBatchUpdate', () => {
    it('produces correct structure with subscription path param', () => {
      const result = JSON.parse(
        stripe.subscriptions.serializeBatchUpdate('sub_123', {
          description: 'updated',
        })
      );

      expect(result.id).to.match(UUID_REGEX);
      expect(result.path_params).to.deep.equal({
        subscription_exposed_id: 'sub_123',
      });
      expect(result.params).to.deep.equal({description: 'updated'});
      expect(result.stripe_version).to.be.a('string').and.not.be.empty;
    });
  });

  describe('subscriptionSchedules.serializeBatchCreate', () => {
    it('produces correct structure without path_params', () => {
      const result = JSON.parse(
        stripe.subscriptionSchedules.serializeBatchCreate({
          customer: 'cus_123',
        })
      );

      expect(result.id).to.match(UUID_REGEX);
      expect(result).to.not.have.property('path_params');
      expect(result.params).to.deep.equal({customer: 'cus_123'});
      expect(result.stripe_version).to.be.a('string').and.not.be.empty;
    });
  });
});
