'use strict';

require('../testUtils');

const makeRequest = require('../lib/makeRequest');
const utils = require('../lib/utils');
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

  describe('makeRequest with fullPath', () => {
    it('handles urlData', async () => {
      const args = ['hello', 'world'];

      const fullPath = '/v1/parent/{param1}/child/{param2}';
      const spec = {
        fullPath,
        urlParams: utils.extractUrlParams(fullPath),
      };

      let actualPath;
      const mockSelf = {
        // These two methods shouldn't be called when using a fullPath, as they
        // don't rely on the resource path.
        createResourcePathWithSymbols: () => {
          throw new Error('Unexpected call to createResourcePathWithSymbols.');
        },
        createFullPath: () => {
          throw new Error('Unexpected call to createFullPath.');
        },
        _request: (
          _method,
          _host,
          path,
          _body,
          _auth,
          _headers,
          requestCallback
        ) => {
          actualPath = path;
          requestCallback(null, 'response');
        },
      };
      await makeRequest(mockSelf, args, spec, {});
      expect(actualPath).to.equal('/v1/parent/hello/child/world');
    });
  });
});
