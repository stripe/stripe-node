// @ts-nocheck
//
// Sample tests for generated serializeBatch* methods. These exercise a
// representative subset — not every resource/method combination — to verify
// the serialization contract and platformFunctions.uuid4() integration.

import {expect} from 'chai';
import {getSpyableStripe} from './testUtils.js';

const stripe = getSpyableStripe();

const UUID_V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

describe('Batch serialization methods', () => {
  describe('serializeBatchCreate (no path params)', () => {
    it('returns valid JSON with a UUID id and stripe_version', () => {
      const result = stripe.promotionCodes.serializeBatchCreate(
        {code: 'TESTCODE'},
        {}
      );
      const parsed = JSON.parse(result);

      expect(parsed.id).to.match(UUID_V4_REGEX);
      expect(parsed.params).to.deep.equal({code: 'TESTCODE'});
      expect(parsed.stripe_version).to.be.a('string');
      expect(parsed.context).to.be.undefined;
    });

    it('includes context when stripeContext is provided', () => {
      const result = stripe.promotionCodes.serializeBatchCreate(
        {code: 'TESTCODE'},
        {stripeContext: 'acct_123'}
      );
      const parsed = JSON.parse(result);

      expect(parsed.context).to.equal('acct_123');
    });

    it('uses provided apiVersion over default', () => {
      const result = stripe.promotionCodes.serializeBatchCreate(
        {},
        {apiVersion: '2025-01-01'}
      );
      const parsed = JSON.parse(result);

      expect(parsed.stripe_version).to.equal('2025-01-01');
    });
  });

  describe('serializeBatchUpdate (with path params)', () => {
    it('returns valid JSON with path_params', () => {
      const result = stripe.accounts.serializeBatchUpdate(
        'acct_123',
        {metadata: {key: 'value'}},
        {}
      );
      const parsed = JSON.parse(result);

      expect(parsed.id).to.match(UUID_V4_REGEX);
      expect(parsed.params).to.deep.equal({metadata: {key: 'value'}});
      expect(parsed.path_params).to.deep.equal({account: 'acct_123'});
      expect(parsed.stripe_version).to.be.a('string');
    });
  });

  describe('uuid generation', () => {
    it('produces unique ids across calls', () => {
      const a = JSON.parse(stripe.promotionCodes.serializeBatchCreate({}, {}));
      const b = JSON.parse(stripe.promotionCodes.serializeBatchCreate({}, {}));

      expect(a.id).to.not.equal(b.id);
    });
  });
});
