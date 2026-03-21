// @ts-nocheck
import {Decimal} from '../src/Decimal.js';
import {coerceV2RequestData, coerceV2ResponseData} from '../src/V2Int64.js';
import {V2RuntimeSchema} from '../src/Types.js';
import {expect} from 'chai';

describe('V2Decimal (via coerceV2RequestData / coerceV2ResponseData)', () => {
  describe('coerceV2ResponseData', () => {
    describe('decimal_string leaf', () => {
      const schema: V2RuntimeSchema = {kind: 'decimal_string'};

      it('converts a string to a Decimal instance', () => {
        const result = coerceV2ResponseData('99.999', schema);
        expect(result).to.be.an.instanceof(Object);
        expect((result as Decimal).toString()).to.equal('99.999');
      });

      it('preserves precision (no float conversion)', () => {
        const result = coerceV2ResponseData('0.1', schema) as Decimal;
        const result2 = coerceV2ResponseData('0.2', schema) as Decimal;
        const sum = result.add(result2);
        expect(sum.toString()).to.equal('0.3');
      });

      it('returns a Decimal that serializes back to the original string', () => {
        const original = '12345678901234567890.1234567890123456789';
        const result = coerceV2ResponseData(original, schema) as Decimal;
        expect(result.toString()).to.equal(original);
      });

      it('passes through null unchanged', () => {
        const result = coerceV2ResponseData(null, schema);
        expect(result).to.be.null;
      });

      it('passes through undefined unchanged', () => {
        const result = coerceV2ResponseData(undefined, schema);
        expect(result).to.be.undefined;
      });

      it('passes through non-string values unchanged', () => {
        expect(coerceV2ResponseData(42, schema)).to.equal(42);
        expect(coerceV2ResponseData(true, schema)).to.equal(true);
      });
    });

    describe('nullable wrapping decimal_string', () => {
      const schema: V2RuntimeSchema = {
        kind: 'nullable',
        inner: {kind: 'decimal_string'},
      };

      it('converts a non-null string to Decimal', () => {
        const result = coerceV2ResponseData('99.999', schema) as Decimal;
        expect(result.toString()).to.equal('99.999');
      });

      it('passes through null unchanged', () => {
        expect(coerceV2ResponseData(null, schema)).to.be.null;
      });
    });

    describe('array of decimal_string', () => {
      const schema: V2RuntimeSchema = {
        kind: 'array',
        element: {kind: 'decimal_string'},
      };

      it('converts each array element to Decimal', () => {
        const data = ['1.0', '2.5', '3.14'];
        const result = coerceV2ResponseData(data, schema) as Decimal[];
        expect(result).to.have.length(3);
        expect(result[0].toString()).to.equal('1');
        expect(result[1].toString()).to.equal('2.5');
        expect(result[2].toString()).to.equal('3.14');
      });

      it('returns empty array unchanged', () => {
        const data: string[] = [];
        const result = coerceV2ResponseData(data, schema);
        expect(result).to.deep.equal([]);
      });

      it('passes through non-array values unchanged', () => {
        expect(coerceV2ResponseData('1.0', schema)).to.equal('1.0');
      });
    });

    describe('object with decimal_string fields', () => {
      const schema: V2RuntimeSchema = {
        kind: 'object',
        fields: {
          amount: {kind: 'decimal_string'},
        },
      };

      it('converts only decimal_string fields', () => {
        const input = {amount: '99.999', name: 'test', extra: 'ignored'};
        const result = coerceV2ResponseData(input, schema) as any;
        expect((result.amount as Decimal).toString()).to.equal('99.999');
        expect(result.name).to.equal('test');
        expect(result.extra).to.equal('ignored');
      });

      it('leaves fields not in schema unchanged', () => {
        const input = {amount: '1.5', unrelated: 'foo'};
        const result = coerceV2ResponseData(input, {
          kind: 'object',
          fields: {amount: {kind: 'decimal_string'}},
        }) as any;
        expect((result.amount as Decimal).toString()).to.equal('1.5');
        expect(result.unrelated).to.equal('foo');
      });

      it('handles missing fields gracefully', () => {
        const input = {extra: 'only'};
        const result = coerceV2ResponseData(input, schema) as any;
        expect(result.extra).to.equal('only');
        expect(result.amount).to.be.undefined;
      });

      it('passes through non-object values unchanged', () => {
        expect(coerceV2ResponseData('string', schema)).to.equal('string');
        expect(coerceV2ResponseData(42, schema)).to.equal(42);
      });
    });

    describe('nested object with decimal_string', () => {
      const schema: V2RuntimeSchema = {
        kind: 'object',
        fields: {
          pricing: {
            kind: 'object',
            fields: {
              unit_amount: {kind: 'decimal_string'},
            },
          },
          label: {kind: 'decimal_string'},
        },
      };

      it('recursively converts nested decimal_string fields', () => {
        const input = {
          pricing: {unit_amount: '99.99', currency: 'usd'},
          label: '1.5',
          id: 'abc',
        };
        const result = coerceV2ResponseData(input, schema) as any;
        expect((result.pricing.unit_amount as Decimal).toString()).to.equal(
          '99.99'
        );
        expect(result.pricing.currency).to.equal('usd');
        expect((result.label as Decimal).toString()).to.equal('1.5');
        expect(result.id).to.equal('abc');
      });
    });

    describe('int64_string non-regression', () => {
      const schema: V2RuntimeSchema = {kind: 'int64_string'};

      it('still converts int64_string strings to bigint', () => {
        expect(coerceV2ResponseData('9007199254740993', schema)).to.equal(
          9007199254740993n
        );
      });

      it('still converts zero int64_string to bigint', () => {
        expect(coerceV2ResponseData('0', schema)).to.equal(0n);
      });
    });
  });

  describe('coerceV2RequestData', () => {
    describe('decimal_string leaf', () => {
      const schema: V2RuntimeSchema = {kind: 'decimal_string'};

      it('converts a Decimal instance to its string form', () => {
        const decimal = Decimal.from('99.999');
        const result = coerceV2RequestData(decimal, schema);
        expect(result).to.equal('99.999');
      });

      it('serializes Decimal.zero as "0"', () => {
        const result = coerceV2RequestData(Decimal.zero, schema);
        expect(result).to.equal('0');
      });

      it('preserves the full precision string', () => {
        const decimal = Decimal.from(
          '12345678901234567890.1234567890123456789'
        );
        const result = coerceV2RequestData(decimal, schema);
        expect(result).to.equal('12345678901234567890.1234567890123456789');
      });

      it('passes through a plain string unchanged', () => {
        // Plain strings don't have Decimal methods, so they pass through
        const result = coerceV2RequestData('99.999', schema);
        expect(result).to.equal('99.999');
      });

      it('passes through null unchanged', () => {
        expect(coerceV2RequestData(null, schema)).to.be.null;
      });

      it('passes through undefined unchanged', () => {
        expect(coerceV2RequestData(undefined, schema)).to.be.undefined;
      });
    });

    describe('nullable wrapping decimal_string', () => {
      const schema: V2RuntimeSchema = {
        kind: 'nullable',
        inner: {kind: 'decimal_string'},
      };

      it('converts a Decimal to string', () => {
        const result = coerceV2RequestData(Decimal.from('99.999'), schema);
        expect(result).to.equal('99.999');
      });

      it('passes through null unchanged', () => {
        expect(coerceV2RequestData(null, schema)).to.be.null;
      });
    });

    describe('array of decimal_string', () => {
      const schema: V2RuntimeSchema = {
        kind: 'array',
        element: {kind: 'decimal_string'},
      };

      it('converts each Decimal element to a string', () => {
        const input = [
          Decimal.from('1.0'),
          Decimal.from('2.5'),
          Decimal.from('3.14'),
        ];
        const result = coerceV2RequestData(input, schema) as string[];
        expect(result).to.deep.equal(['1', '2.5', '3.14']);
      });
    });

    describe('object with decimal_string fields', () => {
      const schema: V2RuntimeSchema = {
        kind: 'object',
        fields: {
          amount: {kind: 'decimal_string'},
        },
      };

      it('converts only decimal_string fields', () => {
        const input = {
          amount: Decimal.from('99.999'),
          name: 'test',
          count: 5,
        };
        const result = coerceV2RequestData(input, schema) as any;
        expect(result.amount).to.equal('99.999');
        expect(result.name).to.equal('test');
        expect(result.count).to.equal(5);
      });

      it('leaves fields not in the schema unchanged', () => {
        const input = {amount: Decimal.from('1.5'), extra: 'ignored'};
        const result = coerceV2RequestData(input, schema) as any;
        expect(result.amount).to.equal('1.5');
        expect(result.extra).to.equal('ignored');
      });
    });

    describe('nested object with decimal_string', () => {
      const schema: V2RuntimeSchema = {
        kind: 'object',
        fields: {
          pricing: {
            kind: 'object',
            fields: {
              unit_amount: {kind: 'decimal_string'},
            },
          },
        },
      };

      it('recursively converts nested Decimal fields to strings', () => {
        const input = {
          pricing: {unit_amount: Decimal.from('99.99'), currency: 'usd'},
          id: 'abc',
        };
        const result = coerceV2RequestData(input, schema) as any;
        expect(result.pricing.unit_amount).to.equal('99.99');
        expect(result.pricing.currency).to.equal('usd');
        expect(result.id).to.equal('abc');
      });
    });

    describe('int64_string non-regression', () => {
      const schema: V2RuntimeSchema = {kind: 'int64_string'};

      it('still converts bigint to string', () => {
        expect(coerceV2RequestData(9007199254740993n, schema)).to.equal(
          '9007199254740993'
        );
      });

      it('still converts number to string', () => {
        expect(coerceV2RequestData(42, schema)).to.equal('42');
      });
    });

    describe('round-trip: serialize then deserialize', () => {
      it('preserves precision through request encoding and response decoding', () => {
        const original = Decimal.from('99.999');
        const schema: V2RuntimeSchema = {kind: 'decimal_string'};

        // Serialize (request encoding)
        const serialized = coerceV2RequestData(original, schema);
        expect(serialized).to.equal('99.999');
        expect(typeof serialized).to.equal('string');

        // Deserialize (response decoding)
        const deserialized = coerceV2ResponseData(
          serialized as string,
          schema
        ) as Decimal;
        expect(deserialized.toString()).to.equal('99.999');
        expect(deserialized.eq(original)).to.equal(true);
      });

      it('round-trips a complex object with decimal fields', () => {
        const requestSchema: V2RuntimeSchema = {
          kind: 'object',
          fields: {
            unit_amount: {kind: 'decimal_string'},
            tax_rate: {kind: 'decimal_string'},
          },
        };

        const originalRequest = {
          unit_amount: Decimal.from('19.99'),
          tax_rate: Decimal.from('0.0825'),
          currency: 'usd',
        };

        // Encode for the wire
        const encoded = coerceV2RequestData(
          originalRequest,
          requestSchema
        ) as any;
        expect(encoded.unit_amount).to.equal('19.99');
        expect(encoded.tax_rate).to.equal('0.0825');
        expect(encoded.currency).to.equal('usd');

        // Simulate receiving a response with the same structure
        const apiResponse = {
          unit_amount: '19.99',
          tax_rate: '0.0825',
          currency: 'usd',
        };
        const decoded = coerceV2ResponseData(apiResponse, requestSchema) as any;
        expect((decoded.unit_amount as Decimal).toString()).to.equal('19.99');
        expect((decoded.tax_rate as Decimal).toString()).to.equal('0.0825');
        expect(decoded.currency).to.equal('usd');
      });
    });
  });
});
