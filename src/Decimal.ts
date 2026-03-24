// Brand symbol declarations (inlined — no external brand.ts in stripe-node)
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __brand: unique symbol;
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __stripeType: unique symbol;

type BrandSymbol = typeof __brand;
type StripeTypeSymbol = typeof __stripeType;

// =============================================================================
// Rounding direction
// =============================================================================

/**
 * Rounding direction for Decimal operations.
 *
 * @remarks
 * Seven modes corresponding to
 * {@link https://standards.ieee.org/ieee/754/6210/ | IEEE 754-2019} §4.3
 * rounding-direction attributes:
 *
 * | Direction      | IEEE 754 name           | Behavior                          | Examples (→ integer)                  |
 * | -------------- | ----------------------- | --------------------------------- | ------------------------------------- |
 * | `'ceil'`       | `roundTowardPositive`   | Toward +∞                         |  1.1→2, -1.1→-1                       |
 * | `'floor'`      | `roundTowardNegative`   | Toward -∞                         |  1.9→1, -1.1→-2                       |
 * | `'round-down'` | `roundTowardZero`       | Toward zero (truncate)            |  1.9→1, -1.9→-1                       |
 * | `'round-up'`   | —                       | Away from zero                    |  1.1→2, -1.1→-2                       |
 * | `'half-up'`    | `roundTiesToAway`       | Nearest; ties away from zero      |  0.5→1, -0.5→-1, 1.4→1               |
 * | `'half-down'`  | —                       | Nearest; ties toward zero         |  0.5→0, -0.5→0, 1.6→2                |
 * | `'half-even'`  | `roundTiesToEven`       | Nearest; ties to even (banker's)  |  0.5→0, 1.5→2, 2.5→2, 3.5→4          |
 *
 * @public
 */
export type RoundDirection =
  | 'ceil' // toward +∞
  | 'floor' // toward -∞
  | 'round-down' // toward zero (truncate)
  | 'round-up' // away from zero
  | 'half-up' // nearest; ties away from zero
  | 'half-down' // nearest; ties toward zero
  | 'half-even'; // nearest; ties to even (banker's rounding)

/**
 * Precision specification for {@link DecimalImpl.round}.
 *
 * @remarks
 * Two modes are supported:
 * - `"decimal-places"` — round to a fixed number of digits after the decimal point.
 * - `"significant-figures"` — round to a fixed number of significant digits.
 *
 * @example
 * ```ts
 * // Round to 2 decimal places
 * amount.round('half-even', { mode: 'decimal-places', value: 2 });
 *
 * // Round to 4 significant figures
 * amount.round('half-up', { mode: 'significant-figures', value: 4 });
 * ```
 *
 * @public
 */
export interface DecimalRoundingOptions {
  mode: 'decimal-places' | 'significant-figures';
  value: number;
}

/**
 * Built-in rounding presets keyed by semantic name.
 *
 * @remarks
 * This is an **open interface** — consumers can extend it via declaration
 * merging to register custom presets that are accepted by
 * {@link DecimalImpl.round}:
 *
 * ```ts
 * declare module '@stripe/apps-extensibility-sdk/stdlib' {
 *   interface DecimalRoundingPresets {
 *     'my-custom-preset': DecimalRoundingOptions;
 *   }
 * }
 * ```
 *
 * Built-in presets:
 *
 * | Preset              | Equivalent DecimalRoundingOptions                      |
 * | ------------------- | ------------------------------------------------------ |
 * | `"ubb-usage-count"` | `{ mode: "significant-figures", value: 15 }`          |
 * | `"v1-api"`          | `{ mode: "decimal-places", value: 12 }`               |
 *
 * @public
 */
export interface DecimalRoundingPresets {
  'ubb-usage-count': DecimalRoundingOptions;
  'v1-api': DecimalRoundingOptions;
}

/**
 * Maps built-in preset names to their {@link DecimalRoundingOptions}.
 * Used internally by {@link DecimalImpl.round}.
 *
 * @internal
 */
const ROUNDING_PRESETS: DecimalRoundingPresets = {
  'ubb-usage-count': {mode: 'significant-figures', value: 15},
  'v1-api': {mode: 'decimal-places', value: 12},
};

/**
 * The IEEE 754 decimal128 coefficient size (34 digits) — the recommended
 * precision for {@link DecimalImpl.div} when full precision is desired.
 *
 * @remarks
 * Pass this as the `precision` argument to `div()` when you want the
 * maximum available precision. Division requires explicit precision —
 * no invisible defaults in financial code.
 *
 * @example
 * ```ts
 * // Use the full decimal128 precision explicitly
 * a.div(b, DEFAULT_DIV_PRECISION, 'half-even');
 * ```
 *
 * @public
 */
export const DEFAULT_DIV_PRECISION = 34;

/**
 * Maximum number of digits in plain (non-exponential) notation produced
 * by {@link DecimalImpl.toString}. Values exceeding this threshold are
 * emitted in scientific notation (`1.23E+40`).
 *
 * @internal
 */
const PLAIN_NOTATION_DIGIT_LIMIT = 30;

/**
 * Maximum absolute value for the internal exponent.
 *
 * @remarks
 * This bound also implicitly limits exponent differences used in
 * arithmetic (e.g., scaling by `10^exponentDiff`), preventing
 * astronomically large BigInt allocations that could hang or
 * exhaust the process.
 *
 * The chosen limit is intentionally conservative but still far beyond
 * any magnitude needed for typical financial or billing calculations.
 *
 * @internal
 */
const MAX_EXPONENT = 1_000_000;

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
  private readonly _coefficient: bigint;

  /** @internal */
  private readonly _exponent: number;

  /**
   * Construct and normalise a decimal value.
   *
   * @param coefficient - The unscaled integer value.
   * @param exponent - The power-of-ten scale factor.
   *
   * @internal
   */
  constructor(coefficient: bigint, exponent: number) {
    const [normalizedCoef, normalizedExp] = DecimalImpl.normalize(
      coefficient,
      exponent
    );
    this._coefficient = normalizedCoef;
    this._exponent = normalizedExp;
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
  private static normalize(
    coefficient: bigint,
    exponent: number
  ): [bigint, number] {
    if (coefficient === 0n) {
      return [0n, 0];
    }

    let coef = coefficient;
    let exp = exponent;

    while (coef !== 0n && coef % 10n === 0n) {
      coef /= 10n;
      exp += 1;
    }

    return [coef, exp];
  }

  /**
   * Apply rounding to the result of an integer division.
   *
   * @remarks
   * BigInt division truncates toward zero. This helper inspects the
   * `remainder` to decide whether to adjust the truncated `quotient`
   * by ±1 according to the chosen {@link RoundDirection}.
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
   * @param direction - The rounding strategy to apply.
   * @returns The rounded quotient.
   *
   * @internal
   */
  private static roundDivision(
    quotient: bigint,
    remainder: bigint,
    divisor: bigint,
    direction: RoundDirection
  ): bigint {
    if (remainder === 0n) {
      return quotient;
    }

    // 'round-down': truncate toward zero — BigInt division already does this.
    if (direction === 'round-down') {
      return quotient;
    }

    // The sign of remainder/divisor tells us which side of the truncation
    // point the exact value lies on.
    // Same sign → fractional part is positive (exact value > quotient) → +1 adjusts upward.
    // Opposite sign → fractional part is negative (exact value < quotient) → -1 adjusts downward.
    const roundDir = remainder > 0n === divisor > 0n ? 1n : -1n;

    // 'round-up': away from zero whenever there is any remainder.
    if (direction === 'round-up') {
      return quotient + roundDir;
    }

    // 'ceil': toward positive infinity.
    // If the fractional part is positive (roundDir === 1n), round up.
    // If the fractional part is negative (roundDir === -1n), truncation already went toward +∞.
    if (direction === 'ceil') {
      return roundDir === 1n ? quotient + 1n : quotient;
    }

    // 'floor': toward negative infinity.
    // If the fractional part is negative (roundDir === -1n), round down.
    // If the fractional part is positive (roundDir === 1n), truncation already went toward -∞.
    if (direction === 'floor') {
      return roundDir === -1n ? quotient - 1n : quotient;
    }

    // For the half-* modes we need to compare the remainder to exactly half the divisor.
    const absRemainder = remainder < 0n ? -remainder : remainder;
    const absDivisor = divisor < 0n ? -divisor : divisor;
    const doubled = absRemainder * 2n;

    let cmp: -1 | 0 | 1;
    if (doubled === absDivisor) {
      cmp = 0;
    } else if (doubled < absDivisor) {
      cmp = -1;
    } else {
      cmp = 1;
    }

    if (cmp < 0) {
      // Less than half — truncation is already the nearest value.
      return quotient;
    }

    if (cmp > 0) {
      // More than half — round to nearest (away from truncation point).
      return quotient + roundDir;
    }

    // Exactly half — tie-breaking depends on the chosen mode.
    if (direction === 'half-up') {
      // Round away from zero.
      return quotient + roundDir;
    }

    if (direction === 'half-down') {
      // Round toward zero — stay at the truncated quotient.
      return quotient;
    }

    // HALF_EVEN: round to nearest even.
    if (quotient % 2n === 0n) {
      // Already even — stay at truncation.
      return quotient;
    } else {
      // Odd — adjust to make even.
      return quotient + roundDir;
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
    const otherImpl = (other as unknown) as DecimalImpl;

    // Align exponents — use the smaller (more precision) exponent as target.
    if (this._exponent === otherImpl._exponent) {
      return (new DecimalImpl(
        this._coefficient + otherImpl._coefficient,
        this._exponent
      ) as unknown) as Decimal;
    }

    if (this._exponent < otherImpl._exponent) {
      const scale = 10n ** BigInt(otherImpl._exponent - this._exponent);
      return (new DecimalImpl(
        this._coefficient + otherImpl._coefficient * scale,
        this._exponent
      ) as unknown) as Decimal;
    } else {
      const scale = 10n ** BigInt(this._exponent - otherImpl._exponent);
      return (new DecimalImpl(
        this._coefficient * scale + otherImpl._coefficient,
        otherImpl._exponent
      ) as unknown) as Decimal;
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
    const otherImpl = (other as unknown) as DecimalImpl;

    if (this._exponent === otherImpl._exponent) {
      return (new DecimalImpl(
        this._coefficient - otherImpl._coefficient,
        this._exponent
      ) as unknown) as Decimal;
    }

    if (this._exponent < otherImpl._exponent) {
      const scale = 10n ** BigInt(otherImpl._exponent - this._exponent);
      return (new DecimalImpl(
        this._coefficient - otherImpl._coefficient * scale,
        this._exponent
      ) as unknown) as Decimal;
    } else {
      const scale = 10n ** BigInt(this._exponent - otherImpl._exponent);
      return (new DecimalImpl(
        this._coefficient * scale - otherImpl._coefficient,
        otherImpl._exponent
      ) as unknown) as Decimal;
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
    const otherImpl = (other as unknown) as DecimalImpl;
    return (new DecimalImpl(
      this._coefficient * otherImpl._coefficient,
      this._exponent + otherImpl._exponent
    ) as unknown) as Decimal;
  }

  /**
   * Return the quotient of this value divided by `other`.
   *
   * @remarks
   * Division scales the dividend to produce `precision` decimal digits
   * in the result, then applies integer division and rounds the
   * remainder according to `direction`.
   *
   * Division requires explicit rounding control — no invisible defaults
   * in financial code. For full precision use {@link DEFAULT_DIV_PRECISION}
   * (34, matching the IEEE 754 decimal128 coefficient size).
   *
   * @example
   * ```ts
   * Decimal.from('1').div(Decimal.from('3'), 5, 'half-up');   // "0.33333"
   * Decimal.from('5').div(Decimal.from('2'), 0, 'half-up');   // "3"
   * Decimal.from('5').div(Decimal.from('2'), 0, 'half-even'); // "2"
   * ```
   *
   * @param other - The divisor. Must not be zero.
   * @param precision - Maximum number of decimal digits in the result.
   * @param direction - How to round when the exact quotient cannot
   *   be represented at the requested precision.
   * @returns A new {@link Decimal} equal to `this ÷ other`, rounded to
   *   `precision` decimal places.
   * @throws {@link Error} if `other` is zero.
   * @throws {@link Error} if `precision` is negative or non-integer.
   *
   * @public
   */
  div(other: Decimal, precision: number, direction: RoundDirection): Decimal {
    if (precision < 0 || !Number.isInteger(precision)) {
      throw new Error('precision must be a non-negative integer');
    }

    const otherImpl = (other as unknown) as DecimalImpl;

    if (otherImpl._coefficient === 0n) {
      throw new Error('Division by zero');
    }

    // result_coefficient = this.coefficient × 10^(thisExp - otherExp + precision) / other.coefficient
    // result_exponent   = -precision
    const scale = this._exponent - otherImpl._exponent + precision;

    let quotient: bigint;
    let remainder: bigint;
    let roundingDivisor: bigint;

    if (scale >= 0) {
      const scaledDividend = this._coefficient * 10n ** BigInt(scale);
      quotient = scaledDividend / otherImpl._coefficient;
      remainder = scaledDividend % otherImpl._coefficient;
      roundingDivisor = otherImpl._coefficient;
    } else {
      // Negative scale: shift the power onto the divisor side to avoid
      // BigInt exponentiation with a negative exponent (which throws).
      const scaledDivisor = otherImpl._coefficient * 10n ** BigInt(-scale);
      quotient = this._coefficient / scaledDivisor;
      remainder = this._coefficient % scaledDivisor;
      roundingDivisor = scaledDivisor;
    }

    const roundedQuotient = DecimalImpl.roundDivision(
      quotient,
      remainder,
      roundingDivisor,
      direction
    );

    return (new DecimalImpl(roundedQuotient, -precision) as unknown) as Decimal;
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
    const otherImpl = (other as unknown) as DecimalImpl;

    if (this._exponent === otherImpl._exponent) {
      if (this._coefficient < otherImpl._coefficient) return -1;
      if (this._coefficient > otherImpl._coefficient) return 1;
      return 0;
    }

    if (this._exponent < otherImpl._exponent) {
      // this has smaller exponent — scale other's coefficient to match.
      const scale = 10n ** BigInt(otherImpl._exponent - this._exponent);
      const scaledOther = otherImpl._coefficient * scale;
      if (this._coefficient < scaledOther) return -1;
      if (this._coefficient > scaledOther) return 1;
      return 0;
    } else {
      // other has smaller exponent — scale this's coefficient to match.
      const scale = 10n ** BigInt(this._exponent - otherImpl._exponent);
      const scaledThis = this._coefficient * scale;
      if (scaledThis < otherImpl._coefficient) return -1;
      if (scaledThis > otherImpl._coefficient) return 1;
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
    return this._coefficient === 0n;
  }

  /**
   * Return `true` if this value is strictly less than zero.
   *
   * @returns `true` if negative, `false` if zero or positive.
   *
   * @public
   */
  isNegative(): boolean {
    return this._coefficient < 0n;
  }

  /**
   * Return `true` if this value is strictly greater than zero.
   *
   * @returns `true` if positive, `false` if zero or negative.
   *
   * @public
   */
  isPositive(): boolean {
    return this._coefficient > 0n;
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
    return (new DecimalImpl(
      -this._coefficient,
      this._exponent
    ) as unknown) as Decimal;
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
    if (this._coefficient < 0n) {
      return (new DecimalImpl(
        -this._coefficient,
        this._exponent
      ) as unknown) as Decimal;
    }
    return (this as unknown) as Decimal;
  }

  // -------------------------------------------------------------------
  // Rounding
  // -------------------------------------------------------------------

  /**
   * Round this value to a specified precision.
   *
   * @remarks
   * **Rounding directions** (IEEE 754-2019 §4.3):
   *
   * | Direction      | Behavior                                       |
   * | -------------- | ---------------------------------------------- |
   * | `'ceil'`       |  1.1→2, -1.1→-1, 1.0→1 (toward +∞)             |
   * | `'floor'`      |  1.9→1, -1.1→-2, 1.0→1 (toward -∞)             |
   * | `'round-down'` |  1.9→1, -1.9→-1 (toward zero / truncate)       |
   * | `'round-up'`   |  1.1→2, -1.1→-2 (away from zero)               |
   * | `'half-up'`    |  0.5→1, 1.5→2, -0.5→-1 (ties away from zero)   |
   * | `'half-down'`  |  0.5→0, 1.5→1, -0.5→0 (ties toward zero)       |
   * | `'half-even'`  |  0.5→0, 1.5→2, 2.5→2, 3.5→4 (ties to even)     |
   *
   * **Precision** is specified as a {@link DecimalRoundingOptions} object
   * or a preset name from {@link DecimalRoundingPresets}:
   *
   * @example
   * ```ts
   * // Using a preset
   * amount.round('half-even', 'v1-api');
   *
   * // Using explicit options
   * amount.round('half-even', { mode: 'decimal-places', value: 2 });
   * amount.round('half-up', { mode: 'significant-figures', value: 4 });
   * ```
   *
   * @param direction - How to round.
   * @param options - A {@link DecimalRoundingOptions} object or key of {@link DecimalRoundingPresets}.
   * @returns A new {@link Decimal} rounded to the specified precision.
   * @throws {@link Error} if `options.value` is negative or non-integer.
   * @throws {@link Error} if the preset name is not recognized.
   *
   * @public
   */
  round(
    direction: RoundDirection,
    options: keyof DecimalRoundingPresets | DecimalRoundingOptions
  ): Decimal {
    const resolved: DecimalRoundingOptions | undefined =
      typeof options === 'string'
        ? // Declaration merging allows consumers to add keys at compile time, but
          // ROUNDING_PRESETS only knows about built-in keys at runtime.  The double
          // cast through `unknown` is intentional: we want an undefined-safe lookup
          // so the runtime guard below can produce a clear error for unrecognised
          // (e.g. declaration-merged) preset names that were not also added to
          // ROUNDING_PRESETS.
          ((ROUNDING_PRESETS as unknown) as Record<
            string,
            DecimalRoundingOptions | undefined
          >)[options]
        : options;

    if (resolved === undefined) {
      throw new Error(`Unknown rounding preset: "${options as string}"`);
    }

    if (resolved.value < 0 || !Number.isInteger(resolved.value)) {
      throw new Error(
        'DecimalRoundingOptions.value must be a non-negative integer'
      );
    }

    if (resolved.mode === 'decimal-places') {
      // Reuse toFixed logic: round to resolved.value decimal places then re-parse.
      const fixed = this.toFixed(resolved.value, direction);
      return Decimal.from(fixed);
    }

    // significant-figures: round to resolved.value total significant digits.
    if (this._coefficient === 0n) {
      return (this as unknown) as Decimal;
    }

    const coeffStr =
      this._coefficient < 0n
        ? (-this._coefficient).toString()
        : this._coefficient.toString();
    const currentSigFigs = coeffStr.length;

    if (resolved.value === 0) {
      // 0 significant figures is a degenerate case — return zero.
      return Decimal.zero;
    }

    if (currentSigFigs <= resolved.value) {
      // Already at or below requested precision — no rounding needed.
      return (this as unknown) as Decimal;
    }

    // We need to reduce the number of significant figures.
    // The number of digits to drop from the coefficient:
    const digitsToTrim = currentSigFigs - resolved.value;
    const divisor = 10n ** BigInt(digitsToTrim);
    const quotient = this._coefficient / divisor;
    const remainder = this._coefficient % divisor;

    const rounded = DecimalImpl.roundDivision(
      quotient,
      remainder,
      divisor,
      direction
    );
    // The new exponent shifts to account for trimmed digits.
    return (new DecimalImpl(
      rounded,
      this._exponent + digitsToTrim
    ) as unknown) as Decimal;
  }

  // -------------------------------------------------------------------
  // Conversion / serialisation
  // -------------------------------------------------------------------

  /**
   * Return a human-readable string representation.
   *
   * @remarks
   * Plain notation for values whose digit count is at most 30, and
   * scientific notation (`1.23E+40`) for larger values. Trailing zeros
   * are never present because the internal representation is normalised.
   *
   * @public
   */
  toString(): string {
    if (this._coefficient === 0n) {
      return '0';
    }

    const coeffStr = this._coefficient.toString();
    const isNeg = coeffStr.startsWith('-');
    const absCoeffStr = isNeg ? coeffStr.slice(1) : coeffStr;

    if (this._exponent < 0) {
      const decimalPlaces = -this._exponent;

      // Guard against unbounded string allocation for extreme negative
      // exponents (e.g. 1e-1000000 would otherwise produce a million-char
      // string of leading zeros). Switch to scientific notation when the
      // number of leading zeros alone exceeds the digit limit. Normal
      // fractional values (e.g. 34-digit division results) pass through.
      const leadingZeroCount =
        decimalPlaces >= absCoeffStr.length
          ? decimalPlaces - absCoeffStr.length
          : 0;
      if (leadingZeroCount > PLAIN_NOTATION_DIGIT_LIMIT) {
        if (absCoeffStr.length === 1) {
          return `${coeffStr}E${String(this._exponent)}`;
        }
        const intPart = absCoeffStr[0] ?? '';
        const fracPart = absCoeffStr.slice(1);
        const adjustedExp = this._exponent + absCoeffStr.length - 1;
        return `${isNeg ? '-' : ''}${intPart}.${fracPart}E${String(
          adjustedExp
        )}`;
      }

      if (decimalPlaces >= absCoeffStr.length) {
        const leadingZeros = '0'.repeat(decimalPlaces - absCoeffStr.length);
        return `${isNeg ? '-' : ''}0.${leadingZeros}${absCoeffStr}`;
      } else {
        const integerPart = absCoeffStr.slice(
          0,
          absCoeffStr.length - decimalPlaces
        );
        const fractionalPart = absCoeffStr.slice(
          absCoeffStr.length - decimalPlaces
        );
        return `${isNeg ? '-' : ''}${integerPart}.${fractionalPart}`;
      }
    }

    const plainLength = absCoeffStr.length + this._exponent;
    if (plainLength <= PLAIN_NOTATION_DIGIT_LIMIT) {
      if (this._exponent === 0) {
        return coeffStr;
      }
      const trailingZeros = '0'.repeat(this._exponent);
      return `${isNeg ? '-' : ''}${absCoeffStr}${trailingZeros}`;
    } else {
      if (absCoeffStr.length === 1) {
        return `${coeffStr}E+${String(this._exponent)}`;
      }
      const integerPart = absCoeffStr[0] ?? '';
      const fractionalPart = absCoeffStr.slice(1);
      const adjustedExponent = this._exponent + absCoeffStr.length - 1;
      return `${isNeg ? '-' : ''}${integerPart}.${fractionalPart}E+${String(
        adjustedExponent
      )}`;
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
   * Values are rounded according to `direction` when the internal
   * precision exceeds the requested number of decimal places.
   * The rounding direction is always required — no invisible defaults
   * in financial code.
   *
   * @example
   * ```ts
   * Decimal.from('1.235').toFixed(2, 'half-up');   // "1.24"
   * Decimal.from('1.225').toFixed(2, 'half-even'); // "1.22"
   * Decimal.from('42').toFixed(3, 'half-up');      // "42.000"
   * ```
   *
   * @param decimalPlaces - Number of digits after the decimal point.
   *   Must be a non-negative integer.
   * @param direction - How to round when truncating excess digits.
   * @returns A string with exactly `decimalPlaces` fractional digits.
   * @throws {@link Error} if `decimalPlaces` is negative or non-integer.
   *
   * @public
   */
  toFixed(decimalPlaces: number, direction: RoundDirection): string {
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
        const integerPart = absCoeffStr.slice(
          0,
          absCoeffStr.length - decimalPlaces
        );
        const fractionalPart = absCoeffStr.slice(
          absCoeffStr.length - decimalPlaces
        );
        return `${isNeg ? '-' : ''}${integerPart}.${fractionalPart}`;
      }
    };

    const targetExponent = -decimalPlaces;
    if (this._exponent === targetExponent) {
      return formatFixed(this._coefficient);
    }

    if (this._exponent < targetExponent) {
      // Need to reduce precision — round the excess digits.
      const scaleDiff = targetExponent - this._exponent;
      const divisor = 10n ** BigInt(scaleDiff);
      const quotient = this._coefficient / divisor;
      const remainder = this._coefficient % divisor;

      const rounded = DecimalImpl.roundDivision(
        quotient,
        remainder,
        divisor,
        direction
      );
      return formatFixed(rounded);
    } else {
      // Need to increase precision — pad with trailing zeros.
      const scaleDiff = this._exponent - targetExponent;
      const scaled = this._coefficient * 10n ** BigInt(scaleDiff);
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
 * import { Decimal, RoundDirection } from '@stripe/apps-extensibility-sdk/stdlib';
 *
 * const price = Decimal.from('19.99');
 * const tax   = price.mul(Decimal.from('0.0825'));
 * const total = price.add(tax);
 *
 * console.log(total.toFixed(2, 'half-up'));   // "21.64"
 * console.log(JSON.stringify({ total }));          // '{"total":"21.639175"}'
 * console.log(total.toFixed(2, 'half-even')); // "21.64"
 * ```
 *
 * @public
 */
export type Decimal = DecimalImpl & {
  readonly [__brand]: 'Decimal';
  readonly [__stripeType]: 'decimal';
};

/**
 * Check whether a value is a {@link Decimal} instance.
 *
 * @remarks
 * Use this instead of `instanceof` — the underlying class is not
 * publicly exported, so `instanceof` checks are not available to
 * consumers.
 *
 * @example
 * ```ts
 * if (isDecimal(value)) {
 *   value.add(Decimal.from('1')); // value is Decimal
 * }
 * ```
 *
 * @public
 */
export function isDecimal(value: unknown): value is Decimal {
  return value instanceof DecimalImpl;
}

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
      return (new DecimalImpl(value, 0) as unknown) as Decimal;
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
        `Computed exponent out of range: ${String(
          exponent
        )} exceeds safe integer bounds`
      );
    }

    return (new DecimalImpl(coefficient, exponent) as unknown) as Decimal;
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
  zero: (new DecimalImpl(0n, 0) as unknown) as Decimal,
};
