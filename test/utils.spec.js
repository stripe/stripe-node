'use strict';

require('./testUtils');

var utils = require('../lib/utils');
var expect = require('chai').expect;

describe('utils', function() {

  describe('makeURLInterpolator', function() {
    it('Interpolates values into a prepared template', function() {
      var template = utils.makeURLInterpolator('/some/url/{foo}/{baz}?ok=1');

      expect(
        template({foo: 1, baz: 2})
      ).to.equal('/some/url/1/2?ok=1');

      expect(
        template({foo: '', baz: ''})
      ).to.equal('/some/url//?ok=1');

      expect(
        // Test encoding:
        template({foo: 'FOO', baz: '__::baz::__'})
      ).to.equal('/some/url/FOO/__%3A%3Abaz%3A%3A__?ok=1');

    });
  });

  describe('stringifyRequestData', function() {

    it('Handles basic types', function() {
      expect(utils.stringifyRequestData({
        a: 1,
        b: 'foo'
      })).to.equal('a=1&b=foo');
    });

    it('Handles deeply nested object', function() {
      expect(utils.stringifyRequestData({
        a: {
          b: {
            c: {
              d: 2
            }
          }
        }
      })).to.equal('a%5Bb%5D%5Bc%5D%5Bd%5D=2');
    });

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

    describe('Stripe-specific cases', function() {

      it('Handles the `expand` array correctly (producing the form `expand[]=_` for each item', function() {
        expect(utils.stringifyRequestData({
          expand: ['a', 'foo', 'a.b.c']
        })).to.equal('expand%5B%5D=a&expand%5B%5D=foo&expand%5B%5D=a.b.c');
      });

    });
  });

  describe('protoExtend', function() {
    it('Provides an extension mechanism', function() {
      function A() {}
      A.extend = utils.protoExtend;
      var B = A.extend({
        constructor: function() {
          this.called = true;
        }
      });
      expect(new B()).to.be.an.instanceof(A);
      expect(new B()).to.be.an.instanceof(B);
      expect(new B().called).to.equal(true);
      expect(B.extend === utils.protoExtend).to.equal(true);
    });
  });

});
