'use strict';

require('./testUtils');

var utils = require('../lib/utils');
var expect = require('chai').expect;

describe('utils', function() {

  describe('makeInterpolator', function() {
    it('Interpolates values into a prepared template', function() {
      var template = utils.makeInterpolator('/some/url/{foo}/{baz}?ok=1');

      expect(
        template({foo: 1, baz: 2})
      ).to.equal('/some/url/1/2?ok=1');

      expect(
        template({foo: '', baz: ''})
      ).to.equal('/some/url//?ok=1');

      expect(
        template({foo: 'FOO', baz: '__::baz::__'})
      ).to.equal('/some/url/FOO/__::baz::__?ok=1');

    });
  });

  describe('stringifyRequestData', function() {
    it('Creates a string from an object, handling shallow nested objects', function() {
      expect(utils.stringifyRequestData({
        test: 1,
        foo: 'baz',
        somethingElse: '::""%&',
        nested: {
          1: 2,
          'a n o t h e r': null
        }
      })).to.equal([
        'test=1',
        'foo=baz',
        'somethingElse=%3A%3A%22%22%25%26',
        'nested%5B1%5D=2', // Unencoded: nested[1]=2
        'nested%5Ba%20n%20o%20t%20h%20e%20r%5D='
      ].join('&'));
    });
  });

});
