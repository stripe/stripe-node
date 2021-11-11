'use strict';

const expect = require('chai').expect;

const SECRET = 'test_secret';

/**
 * Test runner which runs a common set of tests for a given CryptoProvider to
 * make sure it satisfies the expected contract.
 */
const createCryptoProviderTestSuite = (cryptoProvider, isAsyncOnly = false) => {
  const testCases = [
    {
      caseName: 'empty payload',
      payload: '',
      expectation:
        'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd',
    },
    {
      caseName: 'sample payload',
      payload: JSON.stringify({obj1: 'hello', obj2: 'world'}),
      expectation:
        'bebb1a643997f419b315ddba19e6f5411e1ce7f810ba6d3617ce72823092f363',
    },
    {
      caseName: 'payload with utf-8',
      payload: '\ud83d\ude00',
      expectation:
        '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43',
    },
  ];

  describe('CryptoProviderTestSuite', () => {
    if (!isAsyncOnly) {
      describe('computeHMACSignature', () => {
        for (const testCase of testCases) {
          it(testCase.caseName, () => {
            expect(
              cryptoProvider.computeHMACSignature(testCase.payload, SECRET)
            ).to.equal(testCase.expectation);
          });
        }
      });
    }

    describe('computeHMACSignatureAsync', () => {
      for (const testCase of testCases) {
        it(testCase.caseName, async () => {
          const signature = await cryptoProvider.computeHMACSignatureAsync(
            testCase.payload,
            SECRET
          );
          expect(signature).to.equal(testCase.expectation);
        });
      }
    });
  });
};

module.exports = {createCryptoProviderTestSuite};
