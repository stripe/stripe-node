// @ts-nocheck
import {Decimal, RoundingMode} from '../src/Decimal.js';
import {expect} from 'chai';

describe('Decimal', () => {
  describe('Decimal.from(string)', () => {
    it('parses integer strings', () => {
      expect(Decimal.from('42').toString()).to.equal('42');
      expect(Decimal.from('0').toString()).to.equal('0');
      expect(Decimal.from('-42').toString()).to.equal('-42');
    });

    it('parses decimal strings', () => {
      expect(Decimal.from('1.23').toString()).to.equal('1.23');
      expect(Decimal.from('0.1').toString()).to.equal('0.1');
      expect(Decimal.from('-0.1').toString()).to.equal('-0.1');
      expect(Decimal.from('123.456').toString()).to.equal('123.456');
    });

    it('parses strings with leading zeros', () => {
      expect(Decimal.from('0.001').toString()).to.equal('0.001');
      expect(Decimal.from('0.00000001').toString()).to.equal('0.00000001');
    });

    it('parses exponential notation', () => {
      expect(Decimal.from('1e3').toString()).to.equal('1000');
      expect(Decimal.from('1.23e2').toString()).to.equal('123');
      expect(Decimal.from('1.23e-2').toString()).to.equal('0.0123');
      expect(Decimal.from('1E+3').toString()).to.equal('1000');
    });

    it('trims whitespace', () => {
      expect(Decimal.from('  42  ').toString()).to.equal('42');
      expect(Decimal.from('\t1.23\n').toString()).to.equal('1.23');
    });

    it('normalizes trailing zeros', () => {
      expect(Decimal.from('1.00').toString()).to.equal('1');
      expect(Decimal.from('1.2300').toString()).to.equal('1.23');
      expect(Decimal.from('100').toString()).to.equal('100');
    });

    it('normalizes negative zero to zero', () => {
      expect(Decimal.from('-0').toString()).to.equal('0');
      expect(Decimal.from('-0.0').toString()).to.equal('0');
      expect(Decimal.from('-0').isZero()).to.equal(true);
    });

    it('normalizes zero with exponent', () => {
      expect(Decimal.from('0e999').toString()).to.equal('0');
      expect(Decimal.from('0.00e5').toString()).to.equal('0');
    });

    it('throws on empty string', () => {
      expect(() => Decimal.from('')).to.throw(
        'Cannot parse empty string as Decimal'
      );
      expect(() => Decimal.from('   ')).to.throw(
        'Cannot parse empty string as Decimal'
      );
    });

    it('throws on invalid format', () => {
      expect(() => Decimal.from('abc')).to.throw('Invalid decimal string');
      expect(() => Decimal.from('1.2.3')).to.throw('Invalid decimal string');
      expect(() => Decimal.from('1..2')).to.throw('Invalid decimal string');
      expect(() => Decimal.from('--1')).to.throw('Invalid decimal string');
    });
  });

  describe('Decimal.from(number)', () => {
    it('converts finite numbers', () => {
      expect(Decimal.from(42).toString()).to.equal('42');
      expect(Decimal.from(1.23).toString()).to.equal('1.23');
      expect(Decimal.from(-0.1).toString()).to.equal('-0.1');
      expect(Decimal.from(0).toString()).to.equal('0');
    });

    it('preserves user intent for 0.1', () => {
      expect(Decimal.from(0.1).toString()).to.equal('0.1');
    });

    it('throws on Infinity', () => {
      expect(() => Decimal.from(Infinity)).to.throw('Number must be finite');
      expect(() => Decimal.from(-Infinity)).to.throw('Number must be finite');
    });

    it('throws on NaN', () => {
      expect(() => Decimal.from(NaN)).to.throw('Number must be finite');
    });
  });

  describe('Decimal.from(bigint)', () => {
    it('converts bigints as integers', () => {
      expect(Decimal.from(42n).toString()).to.equal('42');
      expect(Decimal.from(0n).toString()).to.equal('0');
      expect(Decimal.from(-42n).toString()).to.equal('-42');
      expect(Decimal.from(123456789012345678901234567890n).toString()).to.equal(
        '123456789012345678901234567890'
      );
    });
  });

  describe('Decimal.zero', () => {
    it('is zero', () => {
      expect(Decimal.zero.toString()).to.equal('0');
      expect(Decimal.zero.isZero()).to.equal(true);
    });
  });

  describe('addition', () => {
    it('adds integers', () => {
      expect(
        Decimal.from('42')
          .add(Decimal.from('8'))
          .toString()
      ).to.equal('50');
      expect(
        Decimal.from('100')
          .add(Decimal.from('200'))
          .toString()
      ).to.equal('300');
    });

    it('adds decimals', () => {
      expect(
        Decimal.from('1.2')
          .add(Decimal.from('3.4'))
          .toString()
      ).to.equal('4.6');
      expect(
        Decimal.from('0.1')
          .add(Decimal.from('0.2'))
          .toString()
      ).to.equal('0.3');
    });

    it('adds with different scales', () => {
      expect(
        Decimal.from('1.5')
          .add(Decimal.from('2'))
          .toString()
      ).to.equal('3.5');
      expect(
        Decimal.from('1.23')
          .add(Decimal.from('4.5'))
          .toString()
      ).to.equal('5.73');
    });

    it('handles negative operands', () => {
      expect(
        Decimal.from('-1')
          .add(Decimal.from('2'))
          .toString()
      ).to.equal('1');
      expect(
        Decimal.from('1')
          .add(Decimal.from('-2'))
          .toString()
      ).to.equal('-1');
      expect(
        Decimal.from('-1')
          .add(Decimal.from('-2'))
          .toString()
      ).to.equal('-3');
    });

    it('handles zero', () => {
      expect(
        Decimal.from('42')
          .add(Decimal.zero)
          .toString()
      ).to.equal('42');
      expect(Decimal.zero.add(Decimal.from('42')).toString()).to.equal('42');
    });
  });

  describe('subtraction', () => {
    it('subtracts integers', () => {
      expect(
        Decimal.from('50')
          .sub(Decimal.from('8'))
          .toString()
      ).to.equal('42');
      expect(
        Decimal.from('200')
          .sub(Decimal.from('100'))
          .toString()
      ).to.equal('100');
    });

    it('subtracts decimals', () => {
      expect(
        Decimal.from('5.5')
          .sub(Decimal.from('2.3'))
          .toString()
      ).to.equal('3.2');
      expect(
        Decimal.from('0.3')
          .sub(Decimal.from('0.1'))
          .toString()
      ).to.equal('0.2');
    });

    it('handles negative results', () => {
      expect(
        Decimal.from('1')
          .sub(Decimal.from('2'))
          .toString()
      ).to.equal('-1');
      expect(
        Decimal.from('-1')
          .sub(Decimal.from('2'))
          .toString()
      ).to.equal('-3');
    });

    it('handles zero', () => {
      expect(
        Decimal.from('42')
          .sub(Decimal.zero)
          .toString()
      ).to.equal('42');
      expect(Decimal.zero.sub(Decimal.from('42')).toString()).to.equal('-42');
    });
  });

  describe('multiplication', () => {
    it('multiplies integers', () => {
      expect(
        Decimal.from('6')
          .mul(Decimal.from('7'))
          .toString()
      ).to.equal('42');
      expect(
        Decimal.from('10')
          .mul(Decimal.from('20'))
          .toString()
      ).to.equal('200');
    });

    it('multiplies decimals', () => {
      expect(
        Decimal.from('1.5')
          .mul(Decimal.from('2'))
          .toString()
      ).to.equal('3');
      expect(
        Decimal.from('2.5')
          .mul(Decimal.from('4'))
          .toString()
      ).to.equal('10');
      expect(
        Decimal.from('0.1')
          .mul(Decimal.from('0.2'))
          .toString()
      ).to.equal('0.02');
    });

    it('handles negative operands', () => {
      expect(
        Decimal.from('-6')
          .mul(Decimal.from('7'))
          .toString()
      ).to.equal('-42');
      expect(
        Decimal.from('6')
          .mul(Decimal.from('-7'))
          .toString()
      ).to.equal('-42');
      expect(
        Decimal.from('-6')
          .mul(Decimal.from('-7'))
          .toString()
      ).to.equal('42');
    });

    it('handles zero', () => {
      expect(
        Decimal.from('42')
          .mul(Decimal.zero)
          .toString()
      ).to.equal('0');
      expect(Decimal.zero.mul(Decimal.from('42')).toString()).to.equal('0');
    });
  });

  describe('division', () => {
    it('divides integers evenly', () => {
      expect(
        Decimal.from('42')
          .div(Decimal.from('6'))
          .toString()
      ).to.equal('7');
      expect(
        Decimal.from('100')
          .div(Decimal.from('10'))
          .toString()
      ).to.equal('10');
    });

    it('divides with decimal results', () => {
      const result = Decimal.from('1').div(Decimal.from('3'), 5);
      expect(result.toString()).to.equal('0.33333');
    });

    it('uses default precision of 34', () => {
      const result = Decimal.from('1').div(Decimal.from('3'));
      const str = result.toString();
      expect(str).to.match(/^0\.3+$/);
    });

    it('handles negative operands', () => {
      expect(
        Decimal.from('-42')
          .div(Decimal.from('6'))
          .toString()
      ).to.equal('-7');
      expect(
        Decimal.from('42')
          .div(Decimal.from('-6'))
          .toString()
      ).to.equal('-7');
      expect(
        Decimal.from('-42')
          .div(Decimal.from('-6'))
          .toString()
      ).to.equal('7');
    });

    it('throws on division by zero', () => {
      expect(() => Decimal.from('42').div(Decimal.zero)).to.throw(
        'Division by zero'
      );
    });

    it('throws on negative precision', () => {
      expect(() => Decimal.from('10').div(Decimal.from('3'), -5)).to.throw(
        'precision must be a non-negative integer'
      );
    });

    it('throws on non-integer precision', () => {
      expect(() => Decimal.from('10').div(Decimal.from('3'), 2.5)).to.throw(
        'precision must be a non-negative integer'
      );
    });

    it('uses HALF_UP rounding by default', () => {
      expect(
        Decimal.from('5')
          .div(Decimal.from('2'), 0)
          .toString()
      ).to.equal('3');
      expect(
        Decimal.from('3')
          .div(Decimal.from('2'), 0)
          .toString()
      ).to.equal('2');
    });

    it('supports HALF_EVEN rounding', () => {
      expect(
        Decimal.from('5')
          .div(Decimal.from('2'), 0, RoundingMode.HALF_EVEN)
          .toString()
      ).to.equal('2');
      expect(
        Decimal.from('7')
          .div(Decimal.from('2'), 0, RoundingMode.HALF_EVEN)
          .toString()
      ).to.equal('4');
    });
  });

  describe('comparison', () => {
    describe('cmp', () => {
      it('compares equal values', () => {
        expect(Decimal.from('42').cmp(Decimal.from('42'))).to.equal(0);
        expect(Decimal.from('1.23').cmp(Decimal.from('1.23'))).to.equal(0);
      });

      it('compares different scales', () => {
        expect(Decimal.from('1.0').cmp(Decimal.from('1'))).to.equal(0);
        expect(Decimal.from('1.00').cmp(Decimal.from('1.0'))).to.equal(0);
      });

      it('returns -1 for less than', () => {
        expect(Decimal.from('1').cmp(Decimal.from('2'))).to.equal(-1);
        expect(Decimal.from('1.23').cmp(Decimal.from('1.24'))).to.equal(-1);
        expect(Decimal.from('-2').cmp(Decimal.from('-1'))).to.equal(-1);
      });

      it('returns 1 for greater than', () => {
        expect(Decimal.from('2').cmp(Decimal.from('1'))).to.equal(1);
        expect(Decimal.from('1.24').cmp(Decimal.from('1.23'))).to.equal(1);
        expect(Decimal.from('-1').cmp(Decimal.from('-2'))).to.equal(1);
      });

      it('compares correctly across different exponents', () => {
        expect(Decimal.from('1.5').cmp(Decimal.from('2'))).to.equal(-1);
        expect(Decimal.from('2').cmp(Decimal.from('1.5'))).to.equal(1);
        expect(Decimal.from('150').cmp(Decimal.from('2'))).to.equal(1);
        expect(Decimal.from('2').cmp(Decimal.from('150'))).to.equal(-1);
        expect(Decimal.from('0.5').cmp(Decimal.from('1'))).to.equal(-1);
        expect(Decimal.from('1000').cmp(Decimal.from('999.99'))).to.equal(1);
      });
    });

    describe('eq', () => {
      it('returns true for equal values', () => {
        expect(Decimal.from('42').eq(Decimal.from('42'))).to.equal(true);
        expect(Decimal.from('1.0').eq(Decimal.from('1'))).to.equal(true);
      });

      it('returns false for unequal values', () => {
        expect(Decimal.from('42').eq(Decimal.from('43'))).to.equal(false);
        expect(Decimal.from('1.23').eq(Decimal.from('1.24'))).to.equal(false);
      });
    });

    describe('lt', () => {
      it('returns true when less than', () => {
        expect(Decimal.from('1').lt(Decimal.from('2'))).to.equal(true);
        expect(Decimal.from('-2').lt(Decimal.from('-1'))).to.equal(true);
      });

      it('returns false when equal or greater', () => {
        expect(Decimal.from('2').lt(Decimal.from('2'))).to.equal(false);
        expect(Decimal.from('2').lt(Decimal.from('1'))).to.equal(false);
      });
    });

    describe('lte', () => {
      it('returns true when less than or equal', () => {
        expect(Decimal.from('1').lte(Decimal.from('2'))).to.equal(true);
        expect(Decimal.from('2').lte(Decimal.from('2'))).to.equal(true);
      });

      it('returns false when greater', () => {
        expect(Decimal.from('2').lte(Decimal.from('1'))).to.equal(false);
      });
    });

    describe('gt', () => {
      it('returns true when greater than', () => {
        expect(Decimal.from('2').gt(Decimal.from('1'))).to.equal(true);
        expect(Decimal.from('-1').gt(Decimal.from('-2'))).to.equal(true);
      });

      it('returns false when equal or less', () => {
        expect(Decimal.from('2').gt(Decimal.from('2'))).to.equal(false);
        expect(Decimal.from('1').gt(Decimal.from('2'))).to.equal(false);
      });
    });

    describe('gte', () => {
      it('returns true when greater than or equal', () => {
        expect(Decimal.from('2').gte(Decimal.from('1'))).to.equal(true);
        expect(Decimal.from('2').gte(Decimal.from('2'))).to.equal(true);
      });

      it('returns false when less', () => {
        expect(Decimal.from('1').gte(Decimal.from('2'))).to.equal(false);
      });
    });
  });

  describe('predicates', () => {
    describe('isZero', () => {
      it('returns true for zero', () => {
        expect(Decimal.from('0').isZero()).to.equal(true);
        expect(Decimal.from('0.0').isZero()).to.equal(true);
        expect(Decimal.zero.isZero()).to.equal(true);
      });

      it('returns false for non-zero', () => {
        expect(Decimal.from('1').isZero()).to.equal(false);
        expect(Decimal.from('-1').isZero()).to.equal(false);
        expect(Decimal.from('0.1').isZero()).to.equal(false);
      });
    });

    describe('isNegative', () => {
      it('returns true for negative values', () => {
        expect(Decimal.from('-1').isNegative()).to.equal(true);
        expect(Decimal.from('-0.1').isNegative()).to.equal(true);
      });

      it('returns false for zero and positive values', () => {
        expect(Decimal.from('0').isNegative()).to.equal(false);
        expect(Decimal.from('1').isNegative()).to.equal(false);
      });
    });

    describe('isPositive', () => {
      it('returns true for positive values', () => {
        expect(Decimal.from('1').isPositive()).to.equal(true);
        expect(Decimal.from('0.1').isPositive()).to.equal(true);
      });

      it('returns false for zero and negative values', () => {
        expect(Decimal.from('0').isPositive()).to.equal(false);
        expect(Decimal.from('-1').isPositive()).to.equal(false);
      });
    });
  });

  describe('unary operations', () => {
    describe('neg', () => {
      it('negates positive values', () => {
        expect(
          Decimal.from('42')
            .neg()
            .toString()
        ).to.equal('-42');
        expect(
          Decimal.from('1.23')
            .neg()
            .toString()
        ).to.equal('-1.23');
      });

      it('negates negative values', () => {
        expect(
          Decimal.from('-42')
            .neg()
            .toString()
        ).to.equal('42');
        expect(
          Decimal.from('-1.23')
            .neg()
            .toString()
        ).to.equal('1.23');
      });

      it('negates zero', () => {
        expect(Decimal.zero.neg().toString()).to.equal('0');
      });
    });

    describe('abs', () => {
      it('returns absolute value of negative', () => {
        expect(
          Decimal.from('-42')
            .abs()
            .toString()
        ).to.equal('42');
        expect(
          Decimal.from('-1.23')
            .abs()
            .toString()
        ).to.equal('1.23');
      });

      it('returns same value for positive', () => {
        expect(
          Decimal.from('42')
            .abs()
            .toString()
        ).to.equal('42');
        expect(
          Decimal.from('1.23')
            .abs()
            .toString()
        ).to.equal('1.23');
      });

      it('returns zero for zero', () => {
        expect(Decimal.zero.abs().toString()).to.equal('0');
      });
    });
  });

  describe('toString', () => {
    it('returns plain notation for reasonable values', () => {
      expect(Decimal.from('123').toString()).to.equal('123');
      expect(Decimal.from('1.23').toString()).to.equal('1.23');
      expect(Decimal.from('0.001').toString()).to.equal('0.001');
    });

    it('uses exponential notation for very large values (over 30 digits)', () => {
      const large = Decimal.from('1234567890123456789012345678901');
      expect(large.toString()).to.equal('1.234567890123456789012345678901E+30');
    });

    it('uses single-digit exponential notation for large round numbers', () => {
      expect(Decimal.from('1e40').toString()).to.equal('1E+40');
    });

    it('keeps values at exactly 30 digits in plain notation', () => {
      expect(Decimal.from('1e29').toString()).to.equal('1' + '0'.repeat(29));
    });

    it('handles zero', () => {
      expect(Decimal.zero.toString()).to.equal('0');
    });

    it('strips trailing zeros', () => {
      expect(Decimal.from('1.00').toString()).to.equal('1');
      expect(Decimal.from('1.2300').toString()).to.equal('1.23');
    });
  });

  describe('toJSON', () => {
    it('returns string representation', () => {
      expect(Decimal.from('42').toJSON()).to.equal('42');
      expect(Decimal.from('1.23').toJSON()).to.equal('1.23');
    });

    it('serializes correctly with JSON.stringify', () => {
      const obj = {price: Decimal.from('19.99')};
      expect(JSON.stringify(obj)).to.equal('{"price":"19.99"}');
    });
  });

  describe('toNumber', () => {
    it('converts to JavaScript number', () => {
      expect(Decimal.from('42').toNumber()).to.equal(42);
      expect(Decimal.from('1.23').toNumber()).to.equal(1.23);
      expect(Decimal.from('-42').toNumber()).to.equal(-42);
    });

    it('may lose precision for very large values', () => {
      const large = Decimal.from('99999999999999999999999999999999');
      const asNumber = large.toNumber();
      expect(typeof asNumber).to.equal('number');
      expect(Number.isFinite(asNumber)).to.equal(true);
    });
  });

  describe('toFixed', () => {
    it('formats with specified decimal places', () => {
      expect(Decimal.from('1.23456').toFixed(2)).to.equal('1.23');
      expect(Decimal.from('1.5').toFixed(3)).to.equal('1.500');
      expect(Decimal.from('42').toFixed(0)).to.equal('42');
    });

    it('formats zero with decimal places', () => {
      expect(Decimal.zero.toFixed(5)).to.equal('0.00000');
      expect(Decimal.from('0').toFixed(2)).to.equal('0.00');
      expect(Decimal.zero.toFixed(0)).to.equal('0');
    });

    it('rounds with HALF_UP by default', () => {
      expect(Decimal.from('1.235').toFixed(2)).to.equal('1.24');
      expect(Decimal.from('1.225').toFixed(2)).to.equal('1.23');
    });

    it('supports HALF_EVEN rounding', () => {
      expect(Decimal.from('1.235').toFixed(2, RoundingMode.HALF_EVEN)).to.equal(
        '1.24'
      );
      expect(Decimal.from('1.225').toFixed(2, RoundingMode.HALF_EVEN)).to.equal(
        '1.22'
      );
    });

    it('throws on negative decimal places', () => {
      expect(() => Decimal.from('1.23').toFixed(-1)).to.throw(
        'decimalPlaces must be a non-negative integer'
      );
    });

    it('throws on non-integer decimal places', () => {
      expect(() => Decimal.from('1.23').toFixed(1.5)).to.throw(
        'decimalPlaces must be a non-negative integer'
      );
    });
  });

  describe('valueOf', () => {
    it('returns string to prevent precision loss', () => {
      const d = Decimal.from('1.23');
      expect(d.valueOf()).to.equal('1.23');
      expect(typeof d.valueOf()).to.equal('string');
    });

    it('prevents silent conversion to number in arithmetic', () => {
      const d = Decimal.from('0.1');
      const result = (d as any) + (d as any);
      expect(typeof result).to.equal('string');
      expect(result).to.equal('0.10.1');
    });
  });

  describe('immutability', () => {
    it('operations return new instances', () => {
      const a = Decimal.from('1');
      const b = Decimal.from('2');
      const sum = a.add(b);
      expect(a.toString()).to.equal('1');
      expect(b.toString()).to.equal('2');
      expect(sum.toString()).to.equal('3');
    });

    it('instances are frozen', () => {
      const d = Decimal.from('42');
      expect(Object.isFrozen(d)).to.equal(true);
    });
  });

  describe('edge cases', () => {
    it('handles very large numbers', () => {
      const large = Decimal.from('123456789012345678901234567890');
      expect(large.add(Decimal.from('1')).toString()).to.equal(
        '123456789012345678901234567891'
      );
    });

    it('handles very small numbers', () => {
      const small = Decimal.from('0.000000000000000000000000000001');
      expect(small.mul(Decimal.from('2')).toString()).to.equal(
        '0.000000000000000000000000000002'
      );
    });

    it('handles mixed-scale arithmetic', () => {
      const a = Decimal.from('1e10');
      const b = Decimal.from('0.0000000001');
      expect(a.mul(b).toString()).to.equal('1');
    });

    it('normalizes zero from subtraction', () => {
      expect(
        Decimal.from('1')
          .sub(Decimal.from('1'))
          .toString()
      ).to.equal('0');
      expect(
        Decimal.from('1.23')
          .sub(Decimal.from('1.23'))
          .isZero()
      ).to.equal(true);
    });

    it('div does not crash when divisor exponent exceeds dividend exponent plus precision', () => {
      const result = Decimal.from('1').div(Decimal.from('1e100'), 0);
      expect(result.toString()).to.equal('0');
    });

    it('toString uses scientific notation for very small exponents', () => {
      const small = Decimal.from('1e-100');
      const str = small.toString();
      expect(str.length).to.be.lessThan(50);
      expect(str).to.equal('1E-100');
    });

    it('from rejects exponents beyond safe integer range', () => {
      expect(() => Decimal.from('1e99999999999999999')).to.throw();
      expect(() => Decimal.from('1e-99999999999999999')).to.throw();
    });
  });

  describe('billing calculation examples', () => {
    it('calculates invoice total with tax', () => {
      const subtotal = Decimal.from('99.99');
      const taxRate = Decimal.from('0.0825');
      const tax = subtotal.mul(taxRate);
      const total = subtotal.add(tax);

      expect(tax.toFixed(2)).to.equal('8.25');
      expect(total.toFixed(2)).to.equal('108.24');
    });

    it('splits bill evenly', () => {
      const total = Decimal.from('100.00');
      const people = Decimal.from('3');
      const perPerson = total.div(people, 2);
      expect(perPerson.toFixed(2)).to.equal('33.33');
    });

    it('accumulates small amounts without floating-point errors', () => {
      let sum = Decimal.zero;
      for (let i = 0; i < 100; i++) {
        sum = sum.add(Decimal.from('0.01'));
      }
      expect(sum.toString()).to.equal('1');
    });
  });

  describe('classic floating-point pitfalls', () => {
    it('0.1 + 0.2 === 0.3', () => {
      const result = Decimal.from('0.1').add(Decimal.from('0.2'));
      expect(result.eq(Decimal.from('0.3'))).to.equal(true);
      expect(result.toString()).to.equal('0.3');
    });

    it('0.1 + 0.2 - 0.3 === 0', () => {
      const result = Decimal.from('0.1')
        .add(Decimal.from('0.2'))
        .sub(Decimal.from('0.3'));
      expect(result.isZero()).to.equal(true);
    });

    it('0.3 - 0.1 === 0.2', () => {
      expect(
        Decimal.from('0.3')
          .sub(Decimal.from('0.1'))
          .eq(Decimal.from('0.2'))
      ).to.equal(true);
    });

    it('0.1 × 3 === 0.3', () => {
      expect(
        Decimal.from('0.1')
          .mul(Decimal.from('3'))
          .eq(Decimal.from('0.3'))
      ).to.equal(true);
    });
  });

  describe('division rounding edge cases', () => {
    it('HALF_UP: rounds 0.5 up', () => {
      expect(Decimal.from('0.5').toFixed(0)).to.equal('1');
      expect(Decimal.from('1.5').toFixed(0)).to.equal('2');
      expect(Decimal.from('2.5').toFixed(0)).to.equal('3');
    });

    it('HALF_UP: rounds negative 0.5 away from zero', () => {
      expect(Decimal.from('-0.5').toFixed(0)).to.equal('-1');
      expect(Decimal.from('-1.5').toFixed(0)).to.equal('-2');
      expect(Decimal.from('-2.5').toFixed(0)).to.equal('-3');
    });

    it('HALF_EVEN: rounds 0.5 to even', () => {
      expect(Decimal.from('0.5').toFixed(0, RoundingMode.HALF_EVEN)).to.equal(
        '0'
      );
      expect(Decimal.from('1.5').toFixed(0, RoundingMode.HALF_EVEN)).to.equal(
        '2'
      );
      expect(Decimal.from('2.5').toFixed(0, RoundingMode.HALF_EVEN)).to.equal(
        '2'
      );
      expect(Decimal.from('3.5').toFixed(0, RoundingMode.HALF_EVEN)).to.equal(
        '4'
      );
    });

    it('HALF_EVEN: rounds negative 0.5 to even', () => {
      expect(Decimal.from('-0.5').toFixed(0, RoundingMode.HALF_EVEN)).to.equal(
        '0'
      );
      expect(Decimal.from('-1.5').toFixed(0, RoundingMode.HALF_EVEN)).to.equal(
        '-2'
      );
      expect(Decimal.from('-2.5').toFixed(0, RoundingMode.HALF_EVEN)).to.equal(
        '-2'
      );
      expect(Decimal.from('-3.5').toFixed(0, RoundingMode.HALF_EVEN)).to.equal(
        '-4'
      );
    });

    it('division precision does not lose significance', () => {
      const result = Decimal.from('1').div(Decimal.from('7'), 10);
      expect(result.toFixed(10)).to.equal('0.1428571429');
    });
  });
});
