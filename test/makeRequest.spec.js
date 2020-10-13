'use strict';

require('../testUtils');

const makeRequest = require('../lib/makeRequest');
const expect = require('chai').expect;

describe('makeRequest', () => {
  describe('args', () => {
    it('does not mutate user-supplied deprecated opts', () => {
      const args = [
        {
          stripe_account: 'bad',
        },
      ];
      const mockSelf = {
        createResourcePathWithSymbols: () => {},
        createFullPath: () => {},
        _request: () => {},
      };
      makeRequest(mockSelf, args, {}, {});
      expect(args).to.deep.equal([
        {
          stripe_account: 'bad',
        },
      ]);
    });
  });
});
