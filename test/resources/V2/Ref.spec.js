'use strict';

const expect = require('chai').expect;
const {attachRefFetch} = require('../../../src/resources/V2/index.js');

const makeMockStripe = (responses = {}) => {
  return {
    resolveBaseAddress: () => null,
    _requestSender: {
      _request: (method, host, path, body, auth, opts, usage, callback) => {
        const key = `${method} ${path}`;
        const response = responses[key] || {id: 'mock_id'};
        callback(null, response);
      },
    },
  };
};

describe('V2 Ref', () => {
  describe('attachRefFetch', () => {
    it('returns a ref with the wire fields intact', () => {
      const wireRef = {
        type: 'v2.core.account',
        id: 'acct_123',
        url: '/v2/core/accounts/acct_123',
      };

      const ref = attachRefFetch(wireRef, makeMockStripe());

      expect(ref.type).to.equal('v2.core.account');
      expect(ref.id).to.equal('acct_123');
      expect(ref.url).to.equal('/v2/core/accounts/acct_123');
    });

    it('attaches a fetch() method', () => {
      const wireRef = {
        type: 'v2.core.account',
        id: 'acct_123',
        url: '/v2/core/accounts/acct_123',
      };

      const ref = attachRefFetch(wireRef, makeMockStripe());
      expect(ref.fetch).to.be.a('function');
    });

    it('fetch() resolves to the full object', async () => {
      const wireRef = {
        type: 'v2.core.account',
        id: 'acct_123',
        url: '/v2/core/accounts/acct_123',
      };

      const stripe = makeMockStripe({
        'GET /v2/core/accounts/acct_123': {
          id: 'acct_123',
          object: 'v2.core.account',
        },
      });

      const ref = attachRefFetch(wireRef, stripe);
      const result = await ref.fetch();
      expect(result.id).to.equal('acct_123');
    });

    it('does not modify the original wire ref object', () => {
      const wireRef = {
        type: 'v2.core.account',
        id: 'acct_123',
        url: '/v2/core/accounts/acct_123',
      };

      attachRefFetch(wireRef, makeMockStripe());
      expect(wireRef.fetch).to.be.undefined;
    });

    it('fetch() issues a GET to the ref url', async () => {
      let capturedMethod, capturedPath;
      const stripe = {
        resolveBaseAddress: () => null,
        _requestSender: {
          _request: (method, host, path, body, auth, opts, usage, callback) => {
            capturedMethod = method;
            capturedPath = path;
            callback(null, {id: 'pi_456'});
          },
        },
      };

      const wireRef = {
        type: 'payment_intent',
        id: 'pi_456',
        url: '/v1/payment_intents/pi_456',
      };

      const ref = attachRefFetch(wireRef, stripe);
      await ref.fetch();
      expect(capturedMethod).to.equal('GET');
      expect(capturedPath).to.equal('/v1/payment_intents/pi_456');
    });

    it('fetch() applies targetSchema coercion to the response', async () => {
      const targetSchema = {
        kind: 'object',
        fields: {amount: {kind: 'int64_string'}},
      };

      const stripe = makeMockStripe({
        'GET /v2/core/accounts/acct_123': {amount: '42'},
      });

      const wireRef = {
        type: 'v2.core.account',
        id: 'acct_123',
        url: '/v2/core/accounts/acct_123',
      };

      const ref = attachRefFetch(wireRef, stripe, targetSchema);
      const result = await ref.fetch();
      expect(result.amount).to.equal(42n);
    });
  });
});
