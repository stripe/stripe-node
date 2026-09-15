export {Decimal} from './Decimal.js';
/**
 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
export interface Metadata {
  [name: string]: string;
}

/**
 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 * While you can send values as numbers, they will be returned as strings.
 */
export interface MetadataParam {
  [name: string]: string | number | null;
}

/**
 * The Address object.
 */
export interface Address {
  /**
   * City/District/Suburb/Town/Village.
   */
  city: string | null;

  /**
   * 2-letter country code.
   */
  country: string | null;

  /**
   * Address line 1 (Street address/PO Box/Company name).
   */
  line1: string | null;

  /**
   * Address line 2 (Apartment/Suite/Unit/Building).
   */
  line2: string | null;

  /**
   * ZIP or postal code.
   */
  postal_code: string | null;

  /**
   * State/County/Province/Region.
   */
  state: string | null;
}

export interface JapanAddress {
  /**
   * City/Ward.
   */
  city: string | null;

  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country: string | null;

  /**
   * Block/Building number.
   */
  line1: string | null;

  /**
   * Building details.
   */
  line2: string | null;

  /**
   * Zip/Postal Code.
   */
  postal_code: string | null;

  /**
   * Prefecture.
   */
  state: string | null;

  /**
   * Town/cho-me.
   */
  town: string | null;
}

export interface AddressParam {
  /**
   * City, district, suburb, town, village, or ward.
   */
  city?: string;

  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country?: string;

  /**
   * Address line 1 (e.g., street, block, PO Box, or company name).
   */
  line1?: string;

  /**
   * Address line 2 (e.g., apartment, suite, unit, or building).
   */
  line2?: string;

  /**
   * ZIP or postal code.
   */
  postal_code?: string;

  /**
   * State, county, province, prefecture, or region.
   */
  state?: string;
}

export interface ShippingAddressParam extends AddressParam {
  /**
   * Address line 1 (e.g., street, PO Box, or company name).
   */
  line1: string;
}

export interface JapanAddressParam extends AddressParam {
  /**
   * Town or cho-me.
   */
  town?: string;
}

export interface RangeQueryParam {
  /**
   * Minimum value to filter by (exclusive)
   */
  gt?: number;

  /**
   * Minimum value to filter by (inclusive)
   */
  gte?: number;

  /**
   * Maximum value to filter by (exclusive)
   */
  lt?: number;

  /**
   * Maximum value to filter by (inclusive)
   */
  lte?: number;
}

/**
 * @docs https://stripe.com/docs/api/pagination
 */
export interface PaginationParams {
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  ending_before?: string;

  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number;

  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  starting_after?: string;
}

/**
 * The Stripe API uses url-encoding for requests, and stripe-node encodes a
 * `null` param as an empty string, because there is no concept of `null`
 * in url-encoding. Both `null` and `''` behave identically.
 */
export type Emptyable<T> = null | '' | T;

/**
 * Stripe's enums are considered either "open" or "closed". Open enums can have new values added that are backported to older API versions. Because the SDK only includes the enum members that existed when the SDK was released, values you might see at runtime may not be present in the generated types.
 *
 * So, we intentionally join the enum Literal types with `OtherString`, which resolves down to `string`. This is to help communicate that your integration should be prepared to handle enum variants that are listed in the API Documentation (but not the SDK).
 *
 * For more information, see: https://github.com/stripe/stripe-node#open-and-closed-enum
 */
export type OtherString = string & Record<never, never>;

type Nullish = null | undefined;

/**
 * The first segment of each dotted path in the union `P`.
 * `'a.b.c' | 'd'` -> `'a' | 'd'`
 */
type PathRoot<P extends string> = P extends `${infer Head}.${string}`
  ? Head
  : P;

/**
 * The sub-paths of `P` that live beneath the key `K`.
 * `P = 'a.b.c' | 'a.d' | 'e'`, `K = 'a'` -> `'b.c' | 'd'`
 */
type PathRest<
  P extends string,
  K extends string
> = P extends `${K}.${infer Rest}` ? Rest : never;

/**
 * Drops the bare `string` (the unexpanded id) from an expandable field.
 *
 * The outer check makes this a no-op unless the field has a non-string, non-nullish
 * member — that is, unless it's actually expandable. Without it, an open enum
 * (`'a' | 'b' | OtherString`) would lose its `OtherString` escape hatch and a plain
 * `string | null` field would collapse to `null`, because `string` is assignable to
 * both of those.
 */
type Unexpand<V> = [Exclude<V, string | Nullish>] extends [never]
  ? V
  : UnexpandKnown<V>;

// The array check is deliberately wrapped in a tuple: distributing over `V` would
// test each member of `string | Customer | null` separately, the union-level
// `Exclude` above would never run, and nothing would be unexpanded at all. Nullish
// members are set aside first, so that `Array<string | Discount> | null` — which a
// handful of fields really are — still reaches the array branch.
type UnexpandKnown<V> = [Exclude<V, Nullish>] extends [readonly (infer U)[]]
  ? Array<Unexpand<U>> | Extract<V, Nullish>
  : Exclude<V, string>;

// Recurses into the (already unexpanded) value of a field. Unlike `UnexpandKnown` above,
// this one *should* distribute, so that `Subscription | null` keeps its `null`.
type ExpandInto<V, R extends string> = V extends readonly (infer U)[]
  ? Array<ExpandInto<U, R>>
  : // `object` is the right test here: it's asking "is this something with properties
  // to recurse into", and `Record<string, unknown>` wouldn't match a resource
  // interface, which has no index signature.
  // eslint-disable-next-line @typescript-eslint/ban-types
  V extends object
  ? Expanded<V, R>
  : V;

type ExpandField<V, R extends string> = [R] extends [never]
  ? Unexpand<V>
  : ExpandInto<Unexpand<V>, R>;

/**
 * `T` as it looks when the fields named by `P` have been
 * [expanded](https://stripe.com/docs/expand): every expanded field loses the `string`
 * (id-only) half of its type.
 *
 * `P` is the union of dotted expand paths, and it nests the same way `expand` does, so
 * an intermediate segment is treated as expanded too:
 *
 * ```ts
 * type T = Stripe.Expanded<
 *   Stripe.Checkout.Session,
 *   'subscription' | 'subscription.items.data.price.product'
 * >;
 * // T['subscription'] is Stripe.Subscription | null, and
 * // T['subscription']['items']['data'][number]['price']['product'] is
 * // Stripe.Product | Stripe.DeletedProduct
 * ```
 *
 * Paths that don't correspond to an expandable field are ignored.
 */
export type Expanded<T, P extends string> = {
  [K in keyof T]: K extends PathRoot<P>
    ? ExpandField<T[K], PathRest<P, K & string>>
    : T[K];
};

/**
 * @internal Referenced by generated method signatures. Resolves to `T` unchanged when
 * `P` is `never` (no `expand` was passed) or `string` (a value that isn't a literal —
 * e.g. a `string[]` variable — was passed, so there's nothing to narrow).
 */
export type ApplyExpand<T, P extends string> = [P] extends [never]
  ? T
  : string extends P
  ? T
  : Expanded<T, P>;

/**
 * @internal Referenced by generated `list` and `search` signatures. Expand paths on a
 * list endpoint address the list envelope, so they're prefixed with `data.`; anything
 * that isn't falls out to `never` and leaves the item type alone.
 */
export type ApplyExpandListItem<T, P extends string> = ApplyExpand<
  T,
  P extends `data.${infer Rest}` ? Rest : never
>;
