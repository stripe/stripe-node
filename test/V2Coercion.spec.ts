// @ts-nocheck
import {expect} from 'chai';
import {coerceV2RequestData, coerceV2ResponseData} from '../src/V2Coercion.js';
import {V2RuntimeSchema} from '../src/Types.js';
import * as testUtils from './testUtils.js';

describe('V2Int64', () => {
  describe('coerceV2RequestData', () => {
    describe('int64_string kind', () => {
      const schema: V2RuntimeSchema = {kind: 'int64_string'};

      it('converts bigint to string', () => {
        expect(coerceV2RequestData(42n, schema)).to.equal('42');
      });

      it('converts large bigint to string', () => {
        expect(coerceV2RequestData(9007199254740993n, schema)).to.equal(
          '9007199254740993'
        );
      });

      it('converts zero bigint to string', () => {
        expect(coerceV2RequestData(0n, schema)).to.equal('0');
      });

      it('converts negative bigint to string', () => {
        expect(coerceV2RequestData(-100n, schema)).to.equal('-100');
      });

      it('converts number to string as defensive fallback', () => {
        expect(coerceV2RequestData(42, schema)).to.equal('42');
      });

      it('leaves string values unchanged', () => {
        expect(coerceV2RequestData('42', schema)).to.equal('42');
      });

      it('passes null through', () => {
        expect(coerceV2RequestData(null, schema)).to.equal(null);
      });

      it('passes undefined through', () => {
        expect(coerceV2RequestData(undefined, schema)).to.equal(undefined);
      });
    });

    describe('object kind', () => {
      const schema: V2RuntimeSchema = {
        kind: 'object',
        fields: {
          amount: {kind: 'int64_string'},
        },
      };

      it('coerces fields listed in schema', () => {
        const result = coerceV2RequestData({amount: 100n}, schema);
        expect(result).to.deep.equal({amount: '100'});
      });

      it('preserves fields not in schema', () => {
        const result = coerceV2RequestData(
          {amount: 100n, name: 'test'},
          schema
        );
        expect(result).to.deep.equal({amount: '100', name: 'test'});
      });

      it('does not mutate the original object', () => {
        const original = {amount: 100n};
        coerceV2RequestData(original, schema);
        expect(original.amount).to.equal(100n);
      });

      it('passes null through', () => {
        expect(coerceV2RequestData(null, schema)).to.equal(null);
      });

      it('handles non-object gracefully', () => {
        expect(coerceV2RequestData('not an object', schema)).to.equal(
          'not an object'
        );
      });
    });

    describe('nested object kind', () => {
      const schema: V2RuntimeSchema = {
        kind: 'object',
        fields: {
          transform_quantity: {
            kind: 'object',
            fields: {
              divide_by: {kind: 'int64_string'},
            },
          },
        },
      };

      it('coerces nested fields', () => {
        const result = coerceV2RequestData(
          {transform_quantity: {divide_by: 500n}},
          schema
        );
        expect(result).to.deep.equal({
          transform_quantity: {divide_by: '500'},
        });
      });

      it('preserves unrelated nested fields', () => {
        const result = coerceV2RequestData(
          {transform_quantity: {divide_by: 500n, round: 'up'}, name: 'test'},
          schema
        );
        expect(result).to.deep.equal({
          transform_quantity: {divide_by: '500', round: 'up'},
          name: 'test',
        });
      });
    });

    describe('array kind', () => {
      const schema: V2RuntimeSchema = {
        kind: 'array',
        element: {kind: 'int64_string'},
      };

      it('coerces each element', () => {
        const result = coerceV2RequestData([1n, 2n, 3n], schema);
        expect(result).to.deep.equal(['1', '2', '3']);
      });

      it('handles empty array', () => {
        const result = coerceV2RequestData([], schema);
        expect(result).to.deep.equal([]);
      });

      it('passes null through', () => {
        expect(coerceV2RequestData(null, schema)).to.equal(null);
      });

      it('handles non-array gracefully', () => {
        expect(coerceV2RequestData('not an array', schema)).to.equal(
          'not an array'
        );
      });
    });

    describe('array of objects kind', () => {
      const schema: V2RuntimeSchema = {
        kind: 'array',
        element: {
          kind: 'object',
          fields: {
            amount: {kind: 'int64_string'},
          },
        },
      };

      it('coerces fields within array elements', () => {
        const result = coerceV2RequestData(
          [{amount: 100n}, {amount: 200n}],
          schema
        );
        expect(result).to.deep.equal([{amount: '100'}, {amount: '200'}]);
      });
    });

    describe('nullable kind', () => {
      const schema: V2RuntimeSchema = {
        kind: 'nullable',
        inner: {kind: 'int64_string'},
      };

      it('coerces non-null value', () => {
        expect(coerceV2RequestData(42n, schema)).to.equal('42');
      });

      it('passes null through', () => {
        expect(coerceV2RequestData(null, schema)).to.equal(null);
      });

      it('passes undefined through', () => {
        expect(coerceV2RequestData(undefined, schema)).to.equal(undefined);
      });
    });

    describe('refObject kind', () => {
      const schema: V2RuntimeSchema = {kind: 'refObject'};

      it('passes through the data unchanged', () => {
        const wireRef = {type: 'v2.core.account', id: 'acct_123', url: '/v2/core/accounts/acct_123'};
        expect(coerceV2RequestData(wireRef, schema)).to.equal(wireRef);
      });

      it('passes null through', () => {
        expect(coerceV2RequestData(null, schema)).to.equal(null);
      });
    });

    describe('complex schema', () => {
      const schema: V2RuntimeSchema = {
        kind: 'object',
        fields: {
          items: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                quantity: {kind: 'int64_string'},
                metadata: {
                  kind: 'nullable',
                  inner: {
                    kind: 'object',
                    fields: {
                      order_id: {kind: 'int64_string'},
                    },
                  },
                },
              },
            },
          },
        },
      };

      it('coerces deeply nested int64_string fields', () => {
        const input = {
          items: [
            {quantity: 10n, metadata: {order_id: 12345n}},
            {quantity: 20n, metadata: null},
          ],
        };
        const result = coerceV2RequestData(input, schema);
        expect(result).to.deep.equal({
          items: [
            {quantity: '10', metadata: {order_id: '12345'}},
            {quantity: '20', metadata: null},
          ],
        });
      });
    });
  });

  describe('coerceV2ResponseData', () => {
    describe('int64_string kind', () => {
      const schema: V2RuntimeSchema = {kind: 'int64_string'};

      it('converts string to bigint', () => {
        expect(coerceV2ResponseData('42', schema)).to.equal(42n);
      });

      it('converts large string to bigint', () => {
        expect(coerceV2ResponseData('9007199254740991', schema)).to.equal(
          9007199254740991n
        );
      });

      it('converts zero string to bigint', () => {
        expect(coerceV2ResponseData('0', schema)).to.equal(0n);
      });

      it('converts negative string to bigint', () => {
        expect(coerceV2ResponseData('-100', schema)).to.equal(-100n);
      });

      it('leaves non-string values unchanged', () => {
        expect(coerceV2ResponseData(42, schema)).to.equal(42);
      });

      it('passes null through', () => {
        expect(coerceV2ResponseData(null, schema)).to.equal(null);
      });

      it('passes undefined through', () => {
        expect(coerceV2ResponseData(undefined, schema)).to.equal(undefined);
      });
    });

    describe('object kind', () => {
      const schema: V2RuntimeSchema = {
        kind: 'object',
        fields: {
          amount: {kind: 'int64_string'},
        },
      };

      it('coerces fields listed in schema', () => {
        const data = {amount: '100'};
        const result = coerceV2ResponseData(data, schema);
        expect(result).to.deep.equal({amount: 100n});
      });

      it('preserves fields not in schema', () => {
        const data = {amount: '100', name: 'test'};
        const result = coerceV2ResponseData(data, schema);
        expect(result).to.deep.equal({amount: 100n, name: 'test'});
      });

      it('mutates in-place', () => {
        const data = {amount: '100'};
        const result = coerceV2ResponseData(data, schema);
        expect(result).to.equal(data);
        expect(data.amount).to.equal(100n);
      });

      it('skips fields absent from data', () => {
        const data = {name: 'test'};
        const result = coerceV2ResponseData(data, schema);
        expect(result).to.deep.equal({name: 'test'});
      });

      it('passes null through', () => {
        expect(coerceV2ResponseData(null, schema)).to.equal(null);
      });
    });

    describe('nested object kind', () => {
      const schema: V2RuntimeSchema = {
        kind: 'object',
        fields: {
          transform_quantity: {
            kind: 'object',
            fields: {
              divide_by: {kind: 'int64_string'},
            },
          },
        },
      };

      it('coerces nested fields', () => {
        const data = {transform_quantity: {divide_by: '500'}};
        coerceV2ResponseData(data, schema);
        expect(data).to.deep.equal({
          transform_quantity: {divide_by: 500n},
        });
      });
    });

    describe('array kind', () => {
      const schema: V2RuntimeSchema = {
        kind: 'array',
        element: {kind: 'int64_string'},
      };

      it('coerces each element', () => {
        const data = ['1', '2', '3'];
        coerceV2ResponseData(data, schema);
        expect(data).to.deep.equal([1n, 2n, 3n]);
      });

      it('handles empty array', () => {
        const data: string[] = [];
        coerceV2ResponseData(data, schema);
        expect(data).to.deep.equal([]);
      });
    });

    describe('nullable kind', () => {
      const schema: V2RuntimeSchema = {
        kind: 'nullable',
        inner: {kind: 'int64_string'},
      };

      it('coerces non-null value', () => {
        expect(coerceV2ResponseData('42', schema)).to.equal(42n);
      });

      it('passes null through', () => {
        expect(coerceV2ResponseData(null, schema)).to.equal(null);
      });
    });

    describe('refObject kind', () => {
      const schema: V2RuntimeSchema = {kind: 'refObject'};

      it('attaches a fetch() method when requestSender is provided', () => {
        const mockStripe = testUtils.createMockClient([]);
        const wireRef = {type: 'v2.core.account', id: 'acct_123', url: '/v2/core/accounts/acct_123'};
        const result = coerceV2ResponseData(wireRef, schema, mockStripe._requestSender);
        expect(result.fetch).to.be.a('function');
        expect(result.type).to.equal('v2.core.account');
        expect(result.id).to.equal('acct_123');
        expect(result.url).to.equal('/v2/core/accounts/acct_123');
      });

      it('returns data unchanged when no requestSender is provided', () => {
        const wireRef = {type: 'v2.core.account', id: 'acct_123', url: '/v2/core/accounts/acct_123'};
        const result = coerceV2ResponseData(wireRef, schema);
        expect(result).to.equal(wireRef);
        expect(result.fetch).to.be.undefined;
      });

      it('passes null through', () => {
        expect(coerceV2ResponseData(null, schema)).to.equal(null);
      });

      it('attaches fetch() on a refObject nested inside an object', () => {
        const mockStripe = testUtils.createMockClient([]);
        const objectSchema: V2RuntimeSchema = {
          kind: 'object',
          fields: {ref: {kind: 'refObject'}},
        };
        const data = {
          ref: {type: 'v2.core.account', id: 'acct_123', url: '/v2/core/accounts/acct_123'},
        };
        coerceV2ResponseData(data, objectSchema, mockStripe._requestSender);
        expect(data.ref.fetch).to.be.a('function');
      });

      it('attaches fetch() on refObjects nested inside an array', () => {
        const mockStripe = testUtils.createMockClient([]);
        const arraySchema: V2RuntimeSchema = {
          kind: 'array',
          element: {kind: 'refObject'},
        };
        const data = [
          {type: 'v2.core.account', id: 'acct_1', url: '/v2/core/accounts/acct_1'},
          {type: 'v2.core.account', id: 'acct_2', url: '/v2/core/accounts/acct_2'},
        ];
        const result = coerceV2ResponseData(data, arraySchema, mockStripe._requestSender);
        expect(result[0].fetch).to.be.a('function');
        expect(result[1].fetch).to.be.a('function');
      });
    });

    describe('complex schema', () => {
      const schema: V2RuntimeSchema = {
        kind: 'object',
        fields: {
          items: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                quantity: {kind: 'int64_string'},
                metadata: {
                  kind: 'nullable',
                  inner: {
                    kind: 'object',
                    fields: {
                      order_id: {kind: 'int64_string'},
                    },
                  },
                },
              },
            },
          },
        },
      };

      it('coerces deeply nested int64_string fields', () => {
        const data = {
          items: [
            {quantity: '10', metadata: {order_id: '12345'}},
            {quantity: '20', metadata: null},
          ],
        };
        coerceV2ResponseData(data, schema);
        expect(data).to.deep.equal({
          items: [
            {quantity: 10n, metadata: {order_id: 12345n}},
            {quantity: 20n, metadata: null},
          ],
        });
      });
    });
  });

  describe('precision behavior', () => {
    it('request: converts bigint beyond MAX_SAFE_INTEGER to string without precision loss', () => {
      const schema: V2RuntimeSchema = {kind: 'int64_string'};
      expect(coerceV2RequestData(9007199254740993n, schema)).to.equal(
        '9007199254740993'
      );
    });

    it('response: values beyond MAX_SAFE_INTEGER are exact', () => {
      const schema: V2RuntimeSchema = {kind: 'int64_string'};
      const result = coerceV2ResponseData('9007199254740993', schema);
      expect(result).to.equal(9007199254740993n);
    });

    it('request: BigInt values do not reach JSON.stringify', () => {
      const schema: V2RuntimeSchema = {
        kind: 'object',
        fields: {amount: {kind: 'int64_string'}},
      };
      const coerced = coerceV2RequestData({amount: 42n}, schema);
      expect(() => JSON.stringify(coerced)).not.to.throw();
      expect(JSON.stringify(coerced)).to.equal('{"amount":"42"}');
    });
  });
});
