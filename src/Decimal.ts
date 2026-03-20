// Vendored from apps-extensibility-sdk/libs/apps-extensibility-sdk/src/stdlib/decimal.ts
// Brand symbol declarations (inlined from brand.ts)
declare const __brand: unique symbol;
declare const __stripeType: unique symbol;

type BrandSymbol = typeof __brand;
type StripeTypeSymbol = typeof __stripeType;

/**
 * Rounding mode for division and fixed-precision operations.
 *
 * @remarks
 * Controls how values are rounded when the exact result cannot be
 * represented at the requested precision. Both modes agree when the
 * discarded portion is not exactly half; they differ only at the
 * midpoint.
 *
 * @public
 */
export enum RoundingMode {
  /**
   * Round half away from zero (standard rounding).
   *
   * @remarks
   * This is the default rounding mode and matches the behavior of
   * Java's {@link https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/RoundingMode.html#HALF_UP | RoundingMode.HALF\_UP}.
   *
   * Examples: `0.5 → 1`, `1.5 → 2`, `-0.5 → -1`, `-1.5 → -2`.
   */
  HALF_UP = 'HALF_UP',

  /**
   * Round half to nearest even digit (banker's rounding).
   *
   * @remarks
   * Minimises cumulative rounding bias over many operations.
   * Matches Java's {@link https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/RoundingMode.html#HALF_EVEN | RoundingMode.HALF\_EVEN}.
   *
   * Examples: `0.5 → 0`, `1.5 → 2`, `2.5 → 2`, `3.5 → 4`.
   */
  HALF_EVEN = 'HALF_EVEN',
}

/**
 * Default number of significant decimal digits used by {@link DecimalImpl.div}
 * when the caller does not specify a precision.
 *
 * @remarks
 * 34 matches the coefficient size of IEEE 754 decimal128, which is
 * more than sufficient for any billing calculation.
 *
 * @internal
 */
const DEFAULT_DIV_PRECISION = 34;

/**
 * Maximum number of digits in plain (non-exponential) notation produced
 * by {@link DecimalImpl.toString}. Values exceeding this threshold are
 * emitted in scientific notation (`1.23E+40`).
 *
 * @internal
 */
const PLAIN_NOTATION_DIGIT_LIMIT = 30;

/**
 * Maximum absolute value for the internal exponent. Exponents beyond
 * this limit cannot be represented exactly as a JavaScript `number`
 * (IEEE 754 double) and would silently lose precision in arithmetic.
 *
 * Using `Number.MAX_SAFE_INTEGER` (2^53 − 1) as the bound ensures
 * every exponent value participates in exact integer arithmetic.
 *
 * @internal
 */
const MAX_EXPONENT = Number.MAX_SAFE_INTEGER;

/**
 * Internal implementation of arbitrary-precision decimal arithmetic.
 *
 * @remarks
 * Represents a decimal value as `coefficient × 10^exponent` using
 * native `BigInt` for the coefficient, giving unlimited precision with
 * no rounding on construction. Instances are always
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze | frozen}
 * and all arithmetic produces new instances.
 *
 * This class is **not** exported directly — consumers interact with
 * the branded {@link Decimal} type and the {@link Decimal | Decimal companion object}.
 *
 * @internal
 */
class DecimalImpl {
  /** @internal */
  readonly #coefficient: bigint;

  /** @internal */
  readonly #exponent: number;

  /**
   * Construct and normalise a decimal value.
   *
   * @param coefficient - The unscaled integer value.
   * @param exponent - The power-of-ten scale factor.
   *
   * @internal
   */
  constructor(coefficient: bigint, exponent: number) {
    const [normalizedCoef, normalizedExp] = DecimalImpl.normalize(coefficient, exponent);
    this.#coefficient = normalizedCoef;
    this.#exponent = normalizedExp;
    Object.freeze(this);
  }

  /**
   * Strip trailing zeros from `coefficient`, incrementing `exponent`
   * for each zero removed. Zero always normalises to `(0n, 0)`.
   *
   * @param coefficient - Raw coefficient before normalisation.
   * @param exponent - Raw exponent before normalisation.
   * @returns A `[coefficient, exponent]` tuple with trailing zeros removed.
   *
   * @internal
   */
  private static normalize(coefficient: bigint, exponent: number): [bigint, number] {
    if (coefficient === 0n) {
      return [0n, 0];
    }

    let coef = coefficient;
    let exp = exponent;

    while (coef !== 0n && coef % 10n === 0n) {
      coef = coef / 10n;
      exp++;
    }

    return [coef, exp];
  }

  /**
   * Apply rounding to the result of an integer division.
   *
   * @remarks
   * BigInt division truncates toward zero. This helper inspects the
   * `remainder` to decide whether to adjust the truncated `quotient`
   * by ±1 according to the chosen {@link RoundingMode}.
   *
   * The rounding direction is derived from the signs of `remainder`
   * and `divisor`: when they agree the exact fractional part is
   * positive (the truncation point is below the true value, so +1
   * rounds to nearest); when they disagree the fractional part is
   * negative (−1 rounds to nearest).
   *
   * @param quotient - Truncated integer quotient (`dividend / divisor`).
   * @param remainder - Division remainder (`dividend % divisor`).
   * @param divisor - The divisor used in the division.
   * @param roundingMode - The rounding strategy to apply.
   * @returns The rounded quotient.
   *
   * @internal
   */
  private static roundDivision(
    quotient: bigint,
    remainder: bigint,
    divisor: bigint,
    roundingMode: RoundingMode
  ): bigint {
    if (remainder === 0n) {
      return quotient;
    }

    const absRemainder = remainder < 0n ? -remainder : remainder;
    const absDivisor = divisor < 0n ? -divisor : divisor;
    const doubled = absRemainder * 2n;

    const cmp = doubled === absDivisor ? 0 : doubled < absDivisor ? -1 : 1;

    if (cmp < 0) {
      // Less than half — truncation is already the nearest value.
      return quotient;
    }

    // Determine rounding direction: the sign of remainder/divisor tells us
    // which side of the truncation point the exact value lies on.
    // Same sign → fractional part is positive → round up (+1).
    // Opposite sign → fractional part is negative → round down (-1).
    const roundDir = remainder > 0n === divisor > 0n ? 1n : -1n;

    if (cmp > 0) {
      // More than half — round to nearest (away from truncation point).
      return quotient + roundDir;
    }

    // Exactly half.
    if (roundingMode === RoundingMode.HALF_UP) {
      // Round away from zero.
      return quotient + roundDir;
    } else {
      // HALF_EVEN: round to nearest even.
      if (quotient % 2n === 0n) {
        // Already even — stay at truncation.
        return quotient;
      } else {
        // Odd — adjust to make even.
        return quotient + roundDir;
      }
    }
  }

  // -------------------------------------------------------------------
  // Arithmetic
  // -------------------------------------------------------------------

  /**
   * Return the sum of this value and `other`.
   *
   * @param other - The addend.
   * @returns A new {@link Decimal} equal to `this + other`.
   *
   * @public
   */
  add(other: Decimal): Decimal {
    const otherImpl = other as unknown as DecimalImpl;

    // Align exponents — use the smaller (more precision) exponent as target.
    if (this.#exponent === otherImpl.#exponent) {
      return new DecimalImpl(
        this.#coefficient + otherImpl.#coefficient,
        this.#exponent
      ) as unknown as Decimal;
    }

    if (this.#exponent < otherImpl.#exponent) {
      const scale = 10n ** BigInt(otherImpl.#exponent - this.#exponent);
      return new DecimalImpl(
        this.#coefficient + otherImpl.#coefficient * scale,
        this.#exponent
      ) as unknown as Decimal;
    } else {
      const scale = 10n ** BigInt(this.#exponent - otherImpl.#exponent);
      return new DecimalImpl(
        this.#coefficient * scale + otherImpl.#coefficient,
        otherImpl.#exponent
      ) as unknown as Decimal;
    }
  }

  /**
   * Return the difference of this value and `other`.
   *
   * @param other - The subtrahend.
   * @returns A new {@link Decimal} equal to `this - other`.
   *
   * @public
   */
  sub(other: Decimal): Decimal {
    const otherImpl = other as unknown as DecimalImpl;

    if (this.#exponent === otherImpl.#exponent) {
      return new DecimalImpl(
        this.#coefficient - otherImpl.#coefficient,
        this.#exponent
      ) as unknown as Decimal;
    }

    if (this.#exponent < otherImpl.#exponent) {
      const scale = 10n ** BigInt(otherImpl.#exponent - this.#exponent);
      return new DecimalImpl(
        this.#coefficient - otherImpl.#coefficient * scale,
        this.#exponent
      ) as unknown as Decimal;
    } else {
      const scale = 10n ** BigInt(this.#exponent - otherImpl.#exponent);
      return new DecimalImpl(
        this.#coefficient * scale - otherImpl.#coefficient,
        otherImpl.#exponent
      ) as unknown as Decimal;
    }
  }

  /**
   * Return the product of this value and `other`.
   *
   * @param other - The multiplicand.
   * @returns A new {@link Decimal} equal to `this × other`.
   *
   * @public
   */
  mul(other: Decimal): Decimal {
    const otherImpl = other as unknown as DecimalImpl;
    return new DecimalImpl(
      this.#coefficient * otherImpl.#coefficient,
      this.#exponent + otherImpl.#exponent
    ) as unknown as Decimal;
  }

  /**
   * Return the quotient of this value divided by `other`.
   *
   * @remarks
   * Division scales the dividend to produce `precision` decimal digits
   * in the result, then applies integer division and rounds the
   * remainder according to `roundingMode`.
   *
   * @example
   * ```ts
   * Decimal.from('1').div(Decimal.from('3'), 5);          // "0.33333"
   * Decimal.from('5').div(Decimal.from('2'), 0);           // "3"  (HALF_UP)
   * Decimal.from('5').div(Decimal.from('2'), 0,
   *   RoundingMode.HALF_EVEN);                             // "2"
   * ```
   *
   * @param other - The divisor. Must not be zero.
   * @param precision - Maximum number of decimal digits in the result.
   *   Defaults to 34 (IEEE 754 decimal128 coefficient size).
   * @param roundingMode - How to round when the exact quotient cannot
   *   be represented at the requested precision.
   *   Defaults to {@link RoundingMode.HALF_UP}.
   * @returns A new {@link Decimal} equal to `this ÷ other`, rounded to
   *   `precision` decimal places.
   * @throws {@link Error} if `other` is zero.
   * @throws {@link Error} if `precision` is negative or non-integer.
   *
   * @public
   */
  div(
    other: Decimal,
    precision: number = DEFAULT_DIV_PRECISION,
    roundingMode: RoundingMode = RoundingMode.HALF_UP
  ): Decimal {
    if (precision < 0 || !Number.isInteger(precision)) {
      throw new Error('precision must be a non-negative integer');
    }

    const otherImpl = other as unknown as DecimalImpl;

    if (otherImpl.#coefficient === 0n) {
      throw new Error('Division by zero');
    }

    // result_coefficient = this.coefficient × 10^(thisExp - otherExp + precision) / other.coefficient
    // result_exponent   = -precision
    const scale = this.#exponent - otherImpl.#exponent + precision;

    let quotient: bigint;
    let remainder: bigint;
    let roundingDivisor: bigint;

    if (scale >= 0) {
      const scaledDividend = this.#coefficient * 10n ** BigInt(scale);
      quotient = scaledDividend / otherImpl.#coefficient;
      remainder = scaledDividend % otherImpl.#coefficient;
      roundingDivisor = otherImpl.#coefficient;
    } else {
      // Negative scale: shift the power onto the divisor side to avoid
      // BigInt exponentiation with a negative exponent (which throws).
      const scaledDivisor = otherImpl.#coefficient * 10n ** BigInt(-scale);
      quotient = this.#coefficient / scaledDivisor;
      remainder = this.#coefficient % scaledDivisor;
      roundingDivisor = scaledDivisor;
    }

    const roundedQuotient = DecimalImpl.roundDivision(
      quotient,
      remainder,
      roundingDivisor,
      roundingMode
    );

    return new DecimalImpl(roundedQuotient, -precision) as unknown as Decimal;
  }

  // -------------------------------------------------------------------
  // Comparison
  // -------------------------------------------------------------------

  /**
   * Three-way comparison of this value with `other`.
   *
   * @example
   * ```ts
   * const a = Decimal.from('1.5');
   * const b = Decimal.from('2');
   * a.cmp(b); // -1
   * b.cmp(a); //  1
   * a.cmp(a); //  0
   * ```
   *
   * @param other - The value to compare against.
   * @returns `-1` if `this \< other`, `0` if equal, `1` if `this \> other`.
   *
   * @public
   */
  cmp(other: Decimal): -1 | 0 | 1 {
    const otherImpl = other as unknown as DecimalImpl;

    if (this.#exponent === otherImpl.#exponent) {
      if (this.#coefficient < otherImpl.#coefficient) return -1;
      if (this.#coefficient > otherImpl.#coefficient) return 1;
      return 0;
    }

    if (this.#exponent < otherImpl.#exponent) {
      // this has smaller exponent — scale other's coefficient to match.
      const scale = 10n ** BigInt(otherImpl.#exponent - this.#exponent);
      const scaledOther = otherImpl.#coefficient * scale;
      if (this.#coefficient < scaledOther) return -1;
      if (this.#coefficient > scaledOther) return 1;
      return 0;
    } else {
      // other has smaller exponent — scale this's coefficient to match.
      const scale = 10n ** BigInt(this.#exponent - otherImpl.#exponent);
      const scaledThis = this.#coefficient * scale;
      if (scaledThis < otherImpl.#coefficient) return -1;
      if (scaledThis > otherImpl.#coefficient) return 1;
      return 0;
    }
  }

  /**
   * Return `true` if this value is numerically equal to `other`.
   *
   * @param other - The value to compare against.
   * @returns `true` if `this === other` in value, `false` otherwise.
   *
   * @public
   */
  eq(other: Decimal): boolean {
    return this.cmp(other) === 0;
  }

  /**
   * Return `true` if this value is strictly less than `other`.
   *
   * @param other - The value to compare against.
   * @returns `true` if `this \< other`, `false` otherwise.
   *
   * @public
   */
  lt(other: Decimal): boolean {
    return this.cmp(other) === -1;
  }

  /**
   * Return `true` if this value is less than or equal to `other`.
   *
   * @param other - The value to compare against.
   * @returns `true` if `this ≤ other`, `false` otherwise.
   *
   * @public
   */
  lte(other: Decimal): boolean {
    return this.cmp(other) <= 0;
  }

  /**
   * Return `true` if this value is strictly greater than `other`.
   *
   * @param other - The value to compare against.
   * @returns `true` if `this \> other`, `false` otherwise.
   *
   * @public
   */
  gt(other: Decimal): boolean {
    return this.cmp(other) === 1;
  }

  /**
   * Return `true` if this value is greater than or equal to `other`.
   *
   * @param other - The value to compare against.
   * @returns `true` if `this ≥ other`, `false` otherwise.
   *
   * @public
   */
  gte(other: Decimal): boolean {
    return this.cmp(other) >= 0;
  }

  // -------------------------------------------------------------------
  // Predicates
  // -------------------------------------------------------------------

  /**
   * Return `true` if this value is exactly zero.
   *
   * @returns `true` if the value is zero, `false` otherwise.
   *
   * @public
   */
  isZero(): boolean {
    return this.#coefficient === 0n;
  }

  /**
   * Return `true` if this value is strictly less than zero.
   *
   * @returns `true` if negative, `false` if zero or positive.
   *
   * @public
   */
  isNegative(): boolean {
    return this.#coefficient < 0n;
  }

  /**
   * Return `true` if this value is strictly greater than zero.
   *
   * @returns `true` if positive, `false` if zero or negative.
   *
   * @public
   */
  isPositive(): boolean {
    return this.#coefficient > 0n;
  }

  // -------------------------------------------------------------------
  // Unary operations
  // -------------------------------------------------------------------

  /**
   * Return the additive inverse of this value.
   *
   * @returns A new {@link Decimal} equal to `-this`.
   *
   * @public
   */
  neg(): Decimal {
    return new DecimalImpl(-this.#coefficient, this.#exponent) as unknown as Decimal;
  }

  /**
   * Return the absolute value.
   *
   * @returns A new {@link Decimal} equal to `|this|`. If this value is
   *   already non-negative, returns `this` (no allocation).
   *
   * @public
   */
  abs(): Decimal {
    if (this.#coefficient < 0n) {
      return new DecimalImpl(-this.#coefficient, this.#exponent) as unknown as Decimal;
    }
    return this as unknown as Decimal;
  }

  // -------------------------------------------------------------------
  // Conversion / serialisation
  // -------------------------------------------------------------------

  /**
   * Return a human-readable string representation.
   *
   * @remarks
   * Output is compatible with Java's
   * {@link https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html#toString() | BigDecimal.toString()}:
   * plain notation for values whose digit count is at most 30, and
   * scientific notation (`1.23E+40`) for larger values. Trailing zeros
   * are never present because the internal representation is normalised.
   *
   * @public
   */
  toString(): string {
    if (this.#coefficient === 0n) {
      return '0';
    }

    const coeffStr = this.#coefficient.toString();
    const isNeg = coeffStr.startsWith('-');
    const absCoeffStr = isNeg ? coeffStr.slice(1) : coeffStr;

    if (this.#exponent < 0) {
      const decimalPlaces = -this.#exponent;

      // Guard against unbounded string allocation for extreme negative
      // exponents (e.g. 1e-1000000 would otherwise produce a million-char
      // string of leading zeros). Switch to scientific notation when the
      // number of leading zeros alone exceeds the digit limit. Normal
      // fractional values (e.g. 34-digit division results) pass through.
      const leadingZeroCount =
        decimalPlaces >= absCoeffStr.length ? decimalPlaces - absCoeffStr.length : 0;
      if (leadingZeroCount > PLAIN_NOTATION_DIGIT_LIMIT) {
        if (absCoeffStr.length === 1) {
          return `${coeffStr}E${String(this.#exponent)}`;
        }
        const intPart = absCoeffStr[0] ?? '';
        const fracPart = absCoeffStr.slice(1);
        const adjustedExp = this.#exponent + absCoeffStr.length - 1;
        return `${isNeg ? '-' : ''}${intPart}.${fracPart}E${String(adjustedExp)}`;
      }

      if (decimalPlaces >= absCoeffStr.length) {
        const leadingZeros = '0'.repeat(decimalPlaces - absCoeffStr.length);
        return `${isNeg ? '-' : ''}0.${leadingZeros}${absCoeffStr}`;
      } else {
        const integerPart = absCoeffStr.slice(0, absCoeffStr.length - decimalPlaces);
        const fractionalPart = absCoeffStr.slice(absCoeffStr.length - decimalPlaces);
        return `${isNeg ? '-' : ''}${integerPart}.${fractionalPart}`;
      }
    }

    const plainLength = absCoeffStr.length + this.#exponent;
    if (plainLength <= PLAIN_NOTATION_DIGIT_LIMIT) {
      if (this.#exponent === 0) {
        return coeffStr;
      }
      const trailingZeros = '0'.repeat(this.#exponent);
      return `${isNeg ? '-' : ''}${absCoeffStr}${trailingZeros}`;
    } else {
      if (absCoeffStr.length === 1) {
        return `${coeffStr}E+${String(this.#exponent)}`;
      }
      const integerPart = absCoeffStr[0] ?? '';
      const fractionalPart = absCoeffStr.slice(1);
      const adjustedExponent = this.#exponent + absCoeffStr.length - 1;
      return `${isNeg ? '-' : ''}${integerPart}.${fractionalPart}E+${String(adjustedExponent)}`;
    }
  }

  /**
   * Return the JSON-serialisable representation.
   *
   * @remarks
   * Returns a plain string matching the Stripe API convention where
   * decimal values are serialised as strings in JSON. Called
   * automatically by `JSON.stringify`.
   *
   * @public
   */
  toJSON(): string {
    return this.toString();
  }

  /**
   * Convert to a JavaScript `number`.
   *
   * @remarks
   * This is an explicit, intentionally lossy conversion. Use it only
   * when you need a numeric value for display or interop with APIs
   * that require `number`. Prefer {@link Decimal.toString | toString}
   * or {@link Decimal.toFixed | toFixed} for lossless output.
   *
   * @public
   */
  toNumber(): number {
    return Number(this.toString());
  }

  /**
   * Format this value as a fixed-point string with exactly
   * `decimalPlaces` digits after the decimal point.
   *
   * @remarks
   * Values are rounded according to `roundingMode` when the internal
   * precision exceeds the requested number of decimal places.
   *
   * @example
   * ```ts
   * Decimal.from('1.235').toFixed(2);                         // "1.24"
   * Decimal.from('1.225').toFixed(2, RoundingMode.HALF_EVEN); // "1.22"
   * Decimal.from('42').toFixed(3);                            // "42.000"
   * ```
   *
   * @param decimalPlaces - Number of digits after the decimal point.
   *   Must be a non-negative integer.
   * @param roundingMode - How to round when truncating excess digits.
   *   Defaults to {@link RoundingMode.HALF_UP}.
   * @returns A string with exactly `decimalPlaces` fractional digits.
   * @throws {@link Error} if `decimalPlaces` is negative or non-integer.
   *
   * @public
   */
  toFixed(
    decimalPlaces: number,
    roundingMode: RoundingMode = RoundingMode.HALF_UP
  ): string {
    if (decimalPlaces < 0 || !Number.isInteger(decimalPlaces)) {
      throw new Error('decimalPlaces must be a non-negative integer');
    }

    const formatFixed = (coef: bigint): string => {
      const coeffStr = coef.toString();
      const isNeg = coeffStr.startsWith('-');
      const absCoeffStr = isNeg ? coeffStr.slice(1) : coeffStr;

      if (decimalPlaces === 0) {
        return coeffStr;
      }

      if (decimalPlaces >= absCoeffStr.length) {
        const leadingZeros = '0'.repeat(decimalPlaces - absCoeffStr.length);
        return `${isNeg ? '-' : ''}0.${leadingZeros}${absCoeffStr}`;
      } else {
        const integerPart = absCoeffStr.slice(0, absCoeffStr.length - decimalPlaces);
        const fractionalPart = absCoeffStr.slice(absCoeffStr.length - decimalPlaces);
        return `${isNeg ? '-' : ''}${integerPart}.${fractionalPart}`;
      }
    };

    const targetExponent = -decimalPlaces;
    if (this.#exponent === targetExponent) {
      return formatFixed(this.#coefficient);
    }

    if (this.#exponent < targetExponent) {
      // Need to reduce precision — round the excess digits.
      const scaleDiff = targetExponent - this.#exponent;
      const divisor = 10n ** BigInt(scaleDiff);
      const quotient = this.#coefficient / divisor;
      const remainder = this.#coefficient % divisor;

      const rounded = DecimalImpl.roundDivision(
        quotient,
        remainder,
        divisor,
        roundingMode
      );
      return formatFixed(rounded);
    } else {
      // Need to increase precision — pad with trailing zeros.
      const scaleDiff = this.#exponent - targetExponent;
      const scaled = this.#coefficient * 10n ** BigInt(scaleDiff);
      return formatFixed(scaled);
    }
  }

  /**
   * Return a string primitive when the runtime coerces the value.
   *
   * @remarks
   * Deliberately returns a `string` (not a `number`) to discourage
   * silent precision loss through implicit arithmetic coercion.
   * When used in a numeric context (for example, `+myDecimal`), the
   * JavaScript runtime will first call this method and then coerce
   * the resulting string to a `number`, which may lose precision.
   * Callers should prefer the explicit
   * {@link Decimal.toNumber | toNumber} method when an IEEE 754
   * `number` is required.
   *
   * @public
   */
  valueOf(): string {
    return this.toString();
  }
}

// =====================================================================
// Public API surface
// =====================================================================

/**
 * Arbitrary-precision decimal type for billing calculations.
 *
 * @remarks
 * `Decimal` is a branded wrapper around an internal class that stores
 * values as `coefficient × 10^exponent` using `BigInt`. It avoids
 * every common binary floating-point pitfall — `Decimal.from('0.1').add(Decimal.from('0.2'))`
 * is exactly `0.3`.
 *
 * Instances are immutable (frozen) and all arithmetic returns a new
 * `Decimal`. The type carries two brand symbols so the type system
 * prevents accidental assignment from plain `number`, `string`, or
 * `bigint`.
 *
 * Create values via the companion object:
 *
 * @example
 * ```ts
 * import { Decimal, RoundingMode } from './Decimal';
 *
 * const price = Decimal.from('19.99');
 * const tax   = price.mul(Decimal.from('0.0825'));
 * const total = price.add(tax);
 *
 * console.log(total.toFixed(2));                         // "21.64"
 * console.log(JSON.stringify({ total }));                // '{"total":"21.639175"}'
 * console.log(total.toFixed(2, RoundingMode.HALF_EVEN)); // "21.64"
 * ```
 *
 * @public
 */
export type Decimal = DecimalImpl & {
  readonly [__brand]: 'Decimal';
  readonly [__stripeType]: 'decimal';
};

/**
 * Companion object for creating {@link Decimal} instances.
 *
 * @public
 */
export const Decimal = {
  /**
   * Create a {@link Decimal} from a string, number, or bigint.
   *
   * @remarks
   * - **string**: Parsed as a decimal literal. Accepts an optional sign,
   *   integer digits, an optional fractional part, and an optional `e`/`E`
   *   exponent. Leading/trailing whitespace is trimmed.
   * - **number**: Must be finite. Converted via `Number.prototype.toString()`
   *   then parsed, so `Decimal.from(0.1)` produces `"0.1"` (not the
   *   53-bit binary approximation).
   * - **bigint**: Treated as an integer with exponent 0.
   *
   * @example
   * ```ts
   * Decimal.from('1.23');   // string
   * Decimal.from(42);       // number
   * Decimal.from(100n);     // bigint
   * Decimal.from('1.5e3');  // scientific notation → 1500
   * ```
   *
   * @param value - The value to convert.
   * @returns A new frozen {@link Decimal} instance.
   * @throws {@link Error} if `value` is a non-finite number, an empty
   *   string, or a string that does not match the decimal literal grammar.
   *
   * @public
   */
  from(value: string | number | bigint): Decimal {
    if (typeof value === 'bigint') {
      return new DecimalImpl(value, 0) as unknown as Decimal;
    }

    if (typeof value === 'number') {
      if (!Number.isFinite(value)) {
        throw new Error('Number must be finite');
      }
      return Decimal.from(value.toString());
    }

    // Parse string.
    const trimmed = value.trim();
    if (trimmed === '') {
      throw new Error('Cannot parse empty string as Decimal');
    }

    // Match: optional sign, integer digits, optional fraction, optional exponent.
    const match = /^([+-]?)(\d+)(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/.exec(trimmed);
    if (!match) {
      throw new Error(`Invalid decimal string: ${value}`);
    }

    const sign = match[1] === '-' ? -1n : 1n;
    const integerPart = match[2] ?? '';
    const fractionalPart = match[3] ?? '';
    const exponentPart = match[4] ? Number(match[4]) : 0;

    if (
      !Number.isSafeInteger(exponentPart) ||
      exponentPart > MAX_EXPONENT ||
      exponentPart < -MAX_EXPONENT
    ) {
      throw new Error(
        `Exponent out of range: ${String(match[4])} exceeds safe integer bounds`
      );
    }

    const coefficientStr = integerPart + fractionalPart;
    const coefficient = sign * BigInt(coefficientStr);
    const exponent = exponentPart - fractionalPart.length;

    if (
      !Number.isSafeInteger(exponent) ||
      exponent > MAX_EXPONENT ||
      exponent < -MAX_EXPONENT
    ) {
      throw new Error(
        `Computed exponent out of range: ${String(exponent)} exceeds safe integer bounds`
      );
    }

    return new DecimalImpl(coefficient, exponent) as unknown as Decimal;
  },

  /**
   * The {@link Decimal} value representing zero.
   *
   * @remarks
   * Pre-allocated singleton — prefer `Decimal.zero` over
   * `Decimal.from(0)` to avoid an unnecessary allocation.
   *
   * @public
   */
  zero: new DecimalImpl(0n, 0) as unknown as Decimal,
};
