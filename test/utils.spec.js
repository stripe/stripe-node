

require('./testUtils');

const utils = require('../lib/utils');
const { expect } = require('chai');

describe('utils', () => {
  describe('makeURLInterpolator', () => {
    it('Interpolates values into a prepared template', () => {
      const template = utils.makeURLInterpolator('/some/url/{foo}/{baz}?ok=1');

      expect(template({ foo: 1, baz: 2 })).to.equal('/some/url/1/2?ok=1');

      expect(template({ foo: '', baz: '' })).to.equal('/some/url//?ok=1');

      expect(
        // Test encoding:
        template({ foo: 'FOO', baz: '__::baz::__' })).to.equal('/some/url/FOO/__%3A%3Abaz%3A%3A__?ok=1');
    });
  });

  describe('stringifyRequestData', () => {
    it('Handles basic types', () => {
      expect(utils.stringifyRequestData({
        a: 1,
        b: 'foo',
      })).to.equal('a=1&b=foo');
    });

    it('Handles deeply nested object', () => {
      expect(decodeURI(utils.stringifyRequestData({
        a: {
          b: {
            c: {
              d: 2,
            },
          },
        },
      }))).to.equal('a[b][c][d]=2');
    });

    it('Handles arrays of objects', () => {
      expect(decodeURI(utils.stringifyRequestData({
        a: [
          { b: 'c' },
          { b: 'd' },
        ],
      }))).to.equal('a[][b]=c&a[][b]=d');
    });

    it('Creates a string from an object, handling shallow nested objects', () => {
      expect(utils.stringifyRequestData({
        test: 1,
        foo: 'baz',
        somethingElse: '::""%&',
        nested: {
          1: 2,
          'a n o t h e r': null,
        },
      })).to.equal([
        'test=1',
        'foo=baz',
        'somethingElse=%3A%3A%22%22%25%26',
        'nested%5B1%5D=2', // Unencoded: nested[1]=2
        'nested%5Ba%20n%20o%20t%20h%20e%20r%5D=',
      ].join('&'));
    });

    describe('Stripe-specific cases', () => {
      it('Handles the `expand` array correctly (producing the form `expand[]=_` for each item', () => {
        expect(decodeURI(utils.stringifyRequestData({
          expand: ['a', 'foo', 'a.b.c'],
        }))).to.equal('expand[]=a&expand[]=foo&expand[]=a.b.c');
      });
    });
  });

  describe('protoExtend', () => {
    it('Provides an extension mechanism', () => {
      function A() {}
      A.extend = utils.protoExtend;
      const B = A.extend({
        constructor: function constructor() {
          this.called = true;
        },
      });
      expect(new B()).to.be.an.instanceof(A);
      expect(new B()).to.be.an.instanceof(B);
      expect(new B().called).to.equal(true);
      expect(B.extend === utils.protoExtend).to.equal(true);
    });
  });

  describe('getDataFromArgs', () => {
    it('handles an empty list', () => {
      expect(utils.getDataFromArgs([])).to.deep.equal({});
    });
    it('handles an list with no object', () => {
      const args = [1, 3];
      expect(utils.getDataFromArgs(args)).to.deep.equal({});
      expect(args.length).to.equal(2);
    });
    it('ignores an options hash', () => {
      const args = [{ api_key: 'foo' }];
      expect(utils.getDataFromArgs(args)).to.deep.equal({});
      expect(args.length).to.equal(1);
    });
    it('finds the data', () => {
      const args = [{ foo: 'bar' }, { api_key: 'foo' }];
      expect(utils.getDataFromArgs(args)).to.deep.equal({ foo: 'bar' });
      expect(args.length).to.equal(1);
    });
  });

  describe('getOptsFromArgs', () => {
    it('handles an empty list', () => {
      expect(utils.getOptionsFromArgs([])).to.deep.equal({
        auth: null,
        headers: {},
      });
    });
    it('handles an list with no object', () => {
      const args = [1, 3];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: null,
        headers: {},
      });
      expect(args.length).to.equal(2);
    });
    it('ignores a non-options object', () => {
      const args = [{ foo: 'bar' }];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: null,
        headers: {},
      });
      expect(args.length).to.equal(1);
    });
    it('parses an api key', () => {
      const args = ['sk_test_iiiiiiiiiiiiiiiiiiiiiiii'];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
        headers: {},
      });
      expect(args.length).to.equal(0);
    });
    it('parses an idempotency key', () => {
      const args = [{ foo: 'bar' }, { idempotency_key: 'foo' }];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: null,
        headers: { 'Idempotency-Key': 'foo' },
      });
      expect(args.length).to.equal(1);
    });
    it('parses an api version', () => {
      const args = [{ foo: 'bar' }, { stripe_version: '2003-03-30' }];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: null,
        headers: { 'Stripe-Version': '2003-03-30' },
      });
      expect(args.length).to.equal(1);
    });
    it('parses an idempotency key and api key and api version (with data)', () => {
      const args = [{ foo: 'bar' }, {
        api_key: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
        idempotency_key: 'foo',
        stripe_version: '2010-01-10',
      }];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
        headers: {
          'Idempotency-Key': 'foo',
          'Stripe-Version': '2010-01-10',
        },
      });
      expect(args.length).to.equal(1);
    });
    it('parses an idempotency key and api key and api version', () => {
      const args = [{
        api_key: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
        idempotency_key: 'foo',
        stripe_version: 'hunter2',
      }];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
        headers: {
          'Idempotency-Key': 'foo',
          'Stripe-Version': 'hunter2',
        },
      });
      expect(args.length).to.equal(0);
    });
  });

  describe('arrayToObject', () => {
    it('handles an empty array', () => {
      expect(utils.arrayToObject([])).to.deep.equal({});
    });
    it('handles an array of integers', () => {
      const arr = [1, 3];
      expect(utils.arrayToObject(arr)).to.deep.equal({ 0: 1, 1: 3 });
    });
    it('ignores passes non-array data through', () => {
      const arr = '3';
      expect(utils.arrayToObject(arr)).to.deep.equal('3');
    });
  });

  describe('secureCompare', () => {
    it('returns true given two equal things', () => {
      expect(utils.secureCompare('potato', 'potato')).to.equal(true);
    });

    it('returns false given two unequal things', () => {
      expect(utils.secureCompare('potato', 'tomato')).to.equal(false);
    });

    it('throws an error if not given two things to compare', () => {
      expect(() => { utils.secureCompare('potato'); }).to.throw();
    });
  });

  describe('removeEmpty', () => {
    it('removes empty properties and leaves non-empty ones', () => {
      expect(utils.removeEmpty({
        cat: 3,
        dog: false,
        rabbit: undefined,
        pointer: null,
      })).to.eql({
        cat: 3,
        dog: false,
      });
    });

    it('throws an error if not given two things to compare', () => {
      expect(() => { utils.removeEmpty('potato'); }).to.throw();
    });
  });
});
