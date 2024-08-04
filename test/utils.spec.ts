// @ts-nocheck
import * as utils from '../src/utils.js';
import {expect} from 'chai';

describe('utils', () => {
  describe('makeURLInterpolator', () => {
    it('Interpolates values into a prepared template', () => {
      const template = utils.makeURLInterpolator('/some/url/{foo}/{baz}?ok=1');

      expect(template({foo: 1, baz: 2})).to.equal('/some/url/1/2?ok=1');

      expect(template({foo: '', baz: ''})).to.equal('/some/url//?ok=1');

      expect(
        // Test encoding:
        template({foo: 'FOO', baz: '__::baz::__'})
      ).to.equal('/some/url/FOO/__%3A%3Abaz%3A%3A__?ok=1');
    });
  });

  describe('strictUriEncode', () => {
    it('should encode a string without special characters', () => {
      const str = 'hello';
      const result = utils.strictUriEncode(str);
      expect(result).to.equal('hello');
    });

    it('should encode a string with spaces', () => {
      const str = 'hello world';
      const result = utils.strictUriEncode(str);
      expect(result).to.equal('hello%20world');
    });

    it('should encode a string with special characters', () => {
      const str = "hello!world'()*";
      const result = utils.strictUriEncode(str);
      expect(result).to.equal('hello%21world%27%28%29%2A');
    });

    it('should encode a string with mixed characters', () => {
      const str = "hello world! It's a test.";
      const result = utils.strictUriEncode(str);
      expect(result).to.equal('hello%20world%21%20It%27s%20a%20test.');
    });

    it('should encode an empty string', () => {
      const str = '';
      const result = utils.strictUriEncode(str);
      expect(result).to.equal('');
    });
  });

  describe('serializeDate', () => {
    it('should serialize a date to a string using the provided configuration', () => {
      const date = new Date('2023-01-01T00:00:00Z');
      const config = {
        serializeDate: (d: Date) => d.toISOString(),
      };

      const result = utils.serializeDate(date, config);

      expect(result).to.equal('2023-01-01T00:00:00.000Z');
    });

    it('should serialize a date to a number using the provided configuration', () => {
      const date = new Date('2023-01-01T00:00:00Z');
      const config = {
        serializeDate: (d: Date) => d.getTime(),
      };

      const result = utils.serializeDate(date, config);

      expect(result).to.equal(date.getTime().toString());
    });

    it('should handle custom serialization logic', () => {
      const date = new Date('2023-01-01T00:00:00Z');
      const config = {
        serializeDate: (d: Date) => `Year: ${d.getUTCFullYear()}`,
      };

      const result = utils.serializeDate(date, config);

      expect(result).to.equal('Year: 2023');
    });
  });

  describe('serializeArray', () => {
    const serializeDate = (d: Date) =>
      Math.floor(d.getTime() / 1000).toString();
    const config = {serializeDate};

    it('should serialize an empty array', () => {
      const arr: unknown[] = [];
      const result = utils.serializeArray(arr, 'key', config, new Set());
      expect(result).to.equal('');
    });

    it('should serialize an array of strings', () => {
      const arr = ['value1', 'value2'];
      const result = utils.serializeArray(arr, 'key', config, new Set());
      // i.e key[0]=value1&key[1]=value2
      expect(result).to.equal('key%5B0%5D=value1&key%5B1%5D=value2');
    });

    it('should serialize an array of numbers', () => {
      const arr = [1, 2, 3];
      const result = utils.serializeArray(arr, 'key', config, new Set());
      // i.e key[0]=1&key[1]=2&key[2]=3
      expect(result).to.equal('key%5B0%5D=1&key%5B1%5D=2&key%5B2%5D=3');
    });

    it('should serialize an array of dates', () => {
      const arr = [
        new Date('2023-01-01T00:00:00Z'),
        new Date('2023-01-02T00:00:00Z'),
      ];
      const result = utils.serializeArray(arr, 'key', config, new Set());

      expect(result).to.equal(
        `key%5B0%5D=${serializeDate(arr[0] as Date)}&key%5B1%5D=${serializeDate(
          arr[1] as Date
        )}`
      );
    });

    it('should serialize an array with mixed types', () => {
      const arr = ['value', 123, new Date('2023-01-01T00:00:00Z')];
      const result = utils.serializeArray(arr, 'key', config, new Set());

      expect(result).to.equal(
        `key%5B0%5D=value&key%5B1%5D=123&key%5B2%5D=${serializeDate(
          arr[2] as Date
        )}`
      );
    });
  });

  describe('serializeObject', () => {
    const serializeDate = (d: Date) =>
      Math.floor(d.getTime() / 1000).toString();
    const config = {serializeDate};

    it('should serialize an empty object', () => {
      const obj = {};
      const result = utils.serializeObject(obj, '', config, new Set());
      expect(result).to.equal('');
    });

    it('should serialize an object with string properties', () => {
      const obj = {key1: 'value1', key2: 'value2'};
      const result = utils.serializeObject(obj, '', config, new Set());
      expect(result).to.equal('key1=value1&key2=value2');
    });

    it('should serialize an object with number properties', () => {
      const obj = {key1: 1, key2: 2};
      const result = utils.serializeObject(obj, '', config, new Set());
      expect(result).to.equal('key1=1&key2=2');
    });

    it('should serialize an object with date properties', () => {
      const obj = {
        key1: new Date('2023-01-01T00:00:00Z'),
        key2: new Date('2023-01-02T00:00:00Z'),
      };
      const result = utils.serializeObject(obj, '', config, new Set());
      expect(result).to.equal(
        `key1=${serializeDate(obj.key1)}&key2=${serializeDate(obj.key2)}`
      );
    });

    it('should serialize an object with mixed properties', () => {
      const obj = {
        key1: 'value',
        key2: 123,
        key3: new Date('2023-01-01T00:00:00Z'),
      };
      const result = utils.serializeObject(obj, '', config, new Set());
      expect(result).to.equal(
        `key1=value&key2=123&key3=${serializeDate(obj.key3)}`
      );
    });

    it('should serialize a nested object', () => {
      const obj = {
        key1: {subKey1: 'subValue1', subKey2: 'subValue2'},
        key2: 'value2',
      };
      const result = utils.serializeObject(obj, '', config, new Set());
      expect(result).to.equal(
        'key1%5BsubKey1%5D=subValue1&key1%5BsubKey2%5D=subValue2&key2=value2'
      );
    });

    it('should skip properties which does not belong to object', () => {
      const obj = {
        key1: 'value1',
        key2: 'value2',
      };

      const prototype = Object.getPrototypeOf(obj);

      prototype.newPrototypeProperty = 'newProp';

      const result = utils.serializeObject(obj, '', config, new Set());

      expect(result).to.equal('key1=value1&key2=value2');
    });

    it('should skip undefined properties', () => {
      const obj = {key1: undefined};

      const result = utils.serializeObject(obj, '', config, new Set());
      expect(result).to.equal('');
    });
  });

  describe('serializeElement', () => {
    const serializeDate = (d: Date) =>
      Math.floor(d.getTime() / 1000).toString();
    const config = {serializeDate};

    it('should serialize a null value', () => {
      const result = utils.serializeElement('key', null, config, new Set());
      expect(result).to.equal('key=');
    });

    it('should serialize a date value', () => {
      const date = new Date('2023-01-01T00:00:00Z');
      const result = utils.serializeElement('key', date, config, new Set());
      expect(result).to.equal(`key=${serializeDate(date)}`);
    });

    it('should serialize an array value', () => {
      const arr = ['value1', 'value2'];
      const result = utils.serializeElement('key', arr, config, new Set());
      expect(result).to.equal('key%5B0%5D=value1&key%5B1%5D=value2');
    });

    it('should serialize an object value', () => {
      const obj = {subKey: 'subValue'};
      const result = utils.serializeElement('key', obj, config, new Set());
      expect(result).to.equal('key%5BsubKey%5D=subValue');
    });

    it('should serialize a string value', () => {
      const result = utils.serializeElement('key', 'value', config, new Set());
      expect(result).to.equal('key=value');
    });

    it('should serialize a number value', () => {
      const result = utils.serializeElement('key', 123, config, new Set());
      expect(result).to.equal('key=123');
    });

    it('should serialize a boolean value', () => {
      const result = utils.serializeElement('key', true, config, new Set());
      expect(result).to.equal('key=true');
    });
  });

  describe('stringify', () => {
    const serializeDate = (d: Date) => d.toISOString();
    const config = {serializeDate};

    it('should stringify an empty object', () => {
      const obj = {};
      const result = utils.stringify(obj, config);
      expect(result).to.equal('');
    });

    it('should stringify an object with string properties', () => {
      const obj = {key1: 'value1', key2: 'value2'};
      const result = utils.stringify(obj, config);
      expect(result).to.equal('key1=value1&key2=value2');
    });

    it('should stringify an object with number properties', () => {
      const obj = {key1: 1, key2: 2};
      const result = utils.stringify(obj, config);
      expect(result).to.equal('key1=1&key2=2');
    });

    it('should stringify an object with date properties', () => {
      const obj = {
        key1: new Date('2023-01-01T00:00:00Z'),
        key2: new Date('2023-01-02T00:00:00Z'),
      };
      const result = utils.stringify(obj, config);
      expect(result).to.equal(
        `key1=${serializeDate(obj.key1)}&key2=${serializeDate(obj.key2)}`
      );
    });

    it('should stringify an object with mixed properties', () => {
      const obj = {
        key1: 'value',
        key2: 123,
        key3: new Date('2023-01-01T00:00:00Z'),
      };
      const result = utils.stringify(obj, config);
      expect(result).to.equal(
        `key1=value&key2=123&key3=${serializeDate(obj.key3)}`
      );
    });

    it('should stringify a nested object', () => {
      const obj = {
        key1: {subKey1: 'subValue1', subKey2: 'subValue2'},
        key2: 'value2',
      };
      const result = utils.stringify(obj, config);
      expect(result).to.equal(
        'key1%5BsubKey1%5D=subValue1&key1%5BsubKey2%5D=subValue2&key2=value2'
      );
    });

    it('should throw an error for cyclic objects', () => {
      const obj: any = {key1: 'value1'};
      obj.key2 = obj; // Create cyclic reference
      expect(() => utils.stringify(obj, config)).to.throw(
        RangeError,
        'Cyclic object value'
      );
    });
  });

  describe('extractUrlParams', () => {
    it('works with multiple params', () => {
      expect(
        utils.extractUrlParams(
          'accounts/{accountId}/external_accounts/{externalAccountId}'
        )
      ).to.deep.equal(['accountId', 'externalAccountId']);
    });
  });

  describe('stringifyRequestData', () => {
    it('Handles basic types', () => {
      expect(
        utils.stringifyRequestData({
          a: 1,
          b: 'foo',
        })
      ).to.equal('a=1&b=foo');
    });

    it('Handles Dates', () => {
      expect(
        utils.stringifyRequestData({
          date: new Date('2009-02-13T23:31:30Z'),
          created: {
            gte: new Date('2009-02-13T23:31:30Z'),
            lt: new Date('2044-05-01T01:28:21Z'),
          },
        })
      ).to.equal(
        [
          'date=1234567890',
          'created[gte]=1234567890',
          'created[lt]=2345678901',
        ].join('&')
      );
    });

    it('Handles deeply nested object', () => {
      expect(
        utils.stringifyRequestData({
          a: {
            b: {
              c: {
                d: 2,
              },
            },
          },
        })
      ).to.equal('a[b][c][d]=2');
    });

    it('Handles arrays of objects', () => {
      expect(
        utils.stringifyRequestData({
          a: [{b: 'c'}, {b: 'd'}],
        })
      ).to.equal('a[0][b]=c&a[1][b]=d');
    });

    it('Handles indexed arrays', () => {
      expect(
        utils.stringifyRequestData({
          a: {
            0: {b: 'c'},
            1: {b: 'd'},
          },
        })
      ).to.equal('a[0][b]=c&a[1][b]=d');
    });

    it('Creates a string from an object, handling shallow nested objects', () => {
      expect(
        utils.stringifyRequestData({
          test: 1,
          foo: 'baz',
          somethingElse: '::""%&',
          nested: {
            1: 2,
            'a n o t h e r': null,
          },
        })
      ).to.equal(
        [
          'test=1',
          'foo=baz',
          'somethingElse=%3A%3A%22%22%25%26',
          'nested[1]=2',
          'nested[a%20n%20o%20t%20h%20e%20r]=',
        ].join('&')
      );
    });

    it('Handles string data', () => {
      expect(utils.stringifyRequestData('')).to.equal('');
    });
  });

  describe('protoExtend', () => {
    it('Provides an extension mechanism', () => {
      function A(): any {}
      A.extend = utils.protoExtend;
      const B = A.extend({
        constructor: function() {
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

    it('handles a list with no object', () => {
      const args = [1, 3];
      expect(utils.getDataFromArgs(args)).to.deep.equal({});
      expect(args.length).to.equal(2);
    });

    it('ignores a hash with only options', (done) => {
      const args = [{apiKey: 'foo'}];

      handleWarnings(
        () => {
          expect(utils.getDataFromArgs(args)).to.deep.equal({});
          expect(args.length).to.equal(1);

          done();
        },
        (message) => {
          throw new Error(`Should not have warned, but did: ${message}`);
        }
      );
    });

    it('warns if the hash contains both data and options', (done) => {
      const args = [{foo: 'bar', apiKey: 'foo', idempotencyKey: 'baz'}];

      handleWarnings(
        () => {
          utils.getDataFromArgs(args);
        },
        (message) => {
          expect(message).to.equal(
            'Stripe: Options found in arguments (apiKey, idempotencyKey).' +
              ' Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.'
          );

          done();
        }
      );
    });

    it('finds the data', () => {
      const args = [{foo: 'bar'}, {apiKey: 'foo'}];
      expect(utils.getDataFromArgs(args)).to.deep.equal({foo: 'bar'});
      expect(args.length).to.equal(1);
    });
  });

  describe('getOptsFromArgs', () => {
    it('handles an empty list', () => {
      expect(utils.getOptionsFromArgs([])).to.deep.equal({
        auth: null,
        host: null,
        headers: {},
        settings: {},
      });
    });

    it('handles an list with no object', () => {
      const args = [1, 3];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: null,
        host: null,
        headers: {},
        settings: {},
      });
      expect(args.length).to.equal(2);
    });

    it('ignores a non-options object', () => {
      const args = [{foo: 'bar'}];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: null,
        host: null,
        headers: {},
        settings: {},
      });
      expect(args.length).to.equal(1);
    });

    it('parses an api key', () => {
      const args = ['sk_test_iiiiiiiiiiiiiiiiiiiiiiii'];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
        host: null,
        headers: {},
        settings: {},
      });
      expect(args.length).to.equal(0);
    });

    it('assumes any string is an api key', () => {
      const args = ['yolo'];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: 'yolo',
        host: null,
        headers: {},
        settings: {},
      });
      expect(args.length).to.equal(0);
    });

    it('parses an idempotency key', () => {
      const args = [{foo: 'bar'}, {idempotencyKey: 'foo'}];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: null,
        host: null,
        headers: {'Idempotency-Key': 'foo'},
        settings: {},
      });
      expect(args.length).to.equal(1);
    });

    it('parses an api version', () => {
      const args = [{foo: 'bar'}, {apiVersion: '2003-03-30'}];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: null,
        host: null,
        headers: {'Stripe-Version': '2003-03-30'},
        settings: {},
      });
      expect(args.length).to.equal(1);
    });

    it('parses an idempotency key and api key and api version (with data)', () => {
      const args = [
        {foo: 'bar'},
        {
          apiKey: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
          idempotencyKey: 'foo',
          apiVersion: '2010-01-10',
        },
      ];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
        host: null,
        headers: {
          'Idempotency-Key': 'foo',
          'Stripe-Version': '2010-01-10',
        },
        settings: {},
      });
      expect(args.length).to.equal(1);
    });

    it('parses an idempotency key and api key and api version', () => {
      const args = [
        {
          apiKey: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
          idempotencyKey: 'foo',
          apiVersion: 'hunter2',
        },
      ];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
        host: null,
        headers: {
          'Idempotency-Key': 'foo',
          'Stripe-Version': 'hunter2',
        },
        settings: {},
      });
      expect(args.length).to.equal(0);
    });

    it('parses additional per-request settings', () => {
      const args = [
        {
          maxNetworkRetries: 5,
          timeout: 1000,
        },
      ];

      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: null,
        host: null,
        headers: {},
        settings: {
          maxNetworkRetries: 5,
          timeout: 1000,
        },
      });
    });

    it('warns if the hash contains something that does not belong', (done) => {
      const args = [
        {foo: 'bar'},
        {
          apiKey: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
          idempotencyKey: 'foo',
          apiVersion: '2010-01-10',
          fishsticks: true,
          custard: true,
        },
      ];

      handleWarnings(
        () => {
          utils.getOptionsFromArgs(args);
        },
        (message) => {
          expect(message).to.equal(
            'Stripe: Invalid options found (fishsticks, custard); ignoring.'
          );

          done();
        }
      );
    });
  });

  describe('removeNullish', () => {
    it('removes empty properties and leaves non-empty ones', () => {
      expect(
        utils.removeNullish({
          cat: 3,
          dog: false,
          rabbit: undefined,
          pointer: null,
        })
      ).to.eql({
        cat: 3,
        dog: false,
      });
    });

    it('throws an error if not given an object', () => {
      expect(() => {
        utils.removeNullish('potato');
      }).to.throw();
    });
  });

  describe('flattenAndStringify', () => {
    it('Stringifies primitive types', () => {
      expect(
        utils.flattenAndStringify({
          a: 1,
          b: 'foo',
          c: true,
          d: null,
        })
      ).to.eql({a: '1', b: 'foo', c: 'true', d: 'null'});
    });

    it('Flattens nested values', () => {
      expect(
        utils.flattenAndStringify({
          x: {
            a: 1,
            b: 'foo',
          },
        })
      ).to.eql({'x[a]': '1', 'x[b]': 'foo'});
    });

    it('Does not flatten File objects', () => {
      expect(
        utils.flattenAndStringify({
          file: {
            data: 'foo',
          },
          x: {
            a: 1,
          },
        })
      ).to.eql({file: {data: 'foo'}, 'x[a]': '1'});
    });

    it('Does not flatten Buffer objects', () => {
      const buf = Buffer.from('Hi!');
      const flattened = utils.flattenAndStringify({
        buf,
        x: {
          a: 1,
        },
      });
      expect(flattened).to.have.property('buf');
      expect(flattened.buf).to.deep.equal(buf);
      expect(flattened).to.have.property('x[a]');
      expect(flattened['x[a]']).to.equal('1');
    });
  });

  describe('validateInteger', () => {
    it("Returns the given value if it's a valid integer", () => {
      const cases = [1, 0x123, 1e3, Number.MAX_SAFE_INTEGER];

      cases.forEach((int) => {
        expect(utils.validateInteger('magicNumber', int)).to.equal(int);
      });
    });

    it('Throws an error if the value is not an integer', () => {
      const cases = ['foo', 1.2, Number.POSITIVE_INFINITY];

      cases.forEach((val) => {
        expect(() => {
          utils.validateInteger('magicNumber', val);
        }).to.throw();
      });
    });

    it('Returns a default value if n is not provided', () => {
      const expected = 1000;
      [null, undefined].forEach((t) => {
        expect(utils.validateInteger('magicNumber', t, expected)).to.equal(
          expected
        );
      });
    });

    it('Throws if neither value nor default is set', () => {
      expect(() => {
        utils.validateInteger('magicNumber');
      }).to.throw();
    });
  });

  describe('concat', () => {
    it('should return a joined Uint8Array', () => {
      const arr1 = new Uint8Array([1, 2, 3]);
      const arr2 = new Uint8Array([4, 5]);
      const arrs = [arr1, arr2];
      expect(utils.concat(arrs)).to.eql(new Uint8Array([1, 2, 3, 4, 5]));
    });

    it('should return an empty Uint8Array given an empty array', () => {
      expect(utils.concat([])).to.eql(new Uint8Array(0));
    });

    it('should work with Buffers', () => {
      const buf1 = Buffer.from('foo');
      const buf2 = Buffer.from('bar');
      const mergedBufToString = new TextDecoder('utf8').decode(
        utils.concat([buf1, buf2])
      );
      expect(mergedBufToString).to.equal('foobar');
    });
  });
});

function handleWarnings(doWithShimmedConsoleWarn, onWarn): void {
  if (typeof process.emitWarning !== 'function') {
    /* eslint-disable no-console */

    // Shim `console.warn`
    const _warn = console.warn;
    console.warn = onWarn;

    doWithShimmedConsoleWarn();

    // Un-shim `console.warn`,
    console.warn = _warn;

    /* eslint-enable no-console */
  } else {
    /* eslint-disable-next-line no-inner-declarations */
    function onProcessWarn(warning): any {
      onWarn(`${warning.name}: ${warning.message}`);
    }

    process.on('warning', onProcessWarn);

    doWithShimmedConsoleWarn();

    process.nextTick(() => {
      process.removeListener('warning', onProcessWarn);
    });
  }
}
