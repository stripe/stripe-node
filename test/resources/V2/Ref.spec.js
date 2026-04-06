'use strict';

const expect = require('chai').expect;
const {attachRefFetch} = require('../../../src/resources/V2/index.js');

describe('V2 Ref', () => {
  describe('attachRefFetch', () => {
    const makeMockMakeRequest = (response) => {
      return (method, path, params, options, spec) => {
        return Promise.resolve(response);
      };
    };

    it('returns a ref with the wire fields intact', () => {
      const wireRef = {
        type: 'v2.core.account',
        id: 'acct_123',
        url: '/v2/core/accounts/acct_123',
      };

      const ref = attachRefFetch(wireRef, makeMockMakeRequest({}));

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

      const ref = attachRefFetch(wireRef, makeMockMakeRequest({}));
      expect(ref.fetch).to.be.a('function');
    });

    it('fetch() resolves to the full object', async () => {
      const wireRef = {
        type: 'v2.core.account',
        id: 'acct_123',
        url: '/v2/core/accounts/acct_123',
      };

      const ref = attachRefFetch(
        wireRef,
        makeMockMakeRequest({id: 'acct_123', object: 'v2.core.account'})
      );
      const result = await ref.fetch();
      expect(result.id).to.equal('acct_123');
    });

    it('does not modify the original wire ref object', () => {
      const wireRef = {
        type: 'v2.core.account',
        id: 'acct_123',
        url: '/v2/core/accounts/acct_123',
      };

      attachRefFetch(wireRef, makeMockMakeRequest({}));
      expect(wireRef.fetch).to.be.undefined;
    });

    it('fetch() calls makeRequest with GET and the ref url', async () => {
      let capturedMethod, capturedPath, capturedSpec;
      const capturingMakeRequest = (method, path, params, options, spec) => {
        capturedMethod = method;
        capturedPath = path;
        capturedSpec = spec;
        return Promise.resolve({id: 'pi_456'});
      };

      const wireRef = {
        type: 'payment_intent',
        id: 'pi_456',
        url: '/v1/payment_intents/pi_456',
      };

      const ref = attachRefFetch(wireRef, capturingMakeRequest);
      await ref.fetch();
      expect(capturedMethod).to.equal('GET');
      expect(capturedPath).to.equal('/v1/payment_intents/pi_456');
      expect(capturedSpec.usage).to.deep.equal(['ref_fetch']);
    });

    it('fetch() passes targetSchema as responseSchema', async () => {
      const targetSchema = {
        kind: 'object',
        fields: {amount: {kind: 'int64_string'}},
      };
      let capturedSpec;
      const capturingMakeRequest = (method, path, params, options, spec) => {
        capturedSpec = spec;
        return Promise.resolve({amount: '42'});
      };

      const wireRef = {
        type: 'v2.core.account',
        id: 'acct_123',
        url: '/v2/core/accounts/acct_123',
      };

      const ref = attachRefFetch(wireRef, capturingMakeRequest, targetSchema);
      await ref.fetch();
      expect(capturedSpec.responseSchema).to.deep.equal(targetSchema);
    });
  });
});
