'use strict';

const expect = require('chai').expect;

const SECRET = 'test_secret';

/**
 * Test runner which runs a common set of tests for a given CryptoProvider to
 * make sure it satisfies the expected contract.
 */
const createCryptoProviderTestSuite = (cryptoProvider) => {
  describe('CryptoProviderTestSuite', () => {
    describe('computeHMACSignature', () => {
      it('empty payload', () => {
        expect(cryptoProvider.computeHMACSignature('', SECRET)).to.equal(
          'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
        );
      });

      it('sample payload', () => {
        expect(
          cryptoProvider.computeHMACSignature(
            JSON.stringify({obj1: 'hello', obj2: 'world'}),
            SECRET
          )
        ).to.equal(
          'bebb1a643997f419b315ddba19e6f5411e1ce7f810ba6d3617ce72823092f363'
        );
      });

      it('payload with utf-8', () => {
        expect(
          cryptoProvider.computeHMACSignature('\ud83d\ude00', SECRET)
        ).to.equal(
          '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43'
        );
      });
    });
  });
};

module.exports = {createCryptoProviderTestSuite};
