///<reference lib="esnext.asynciterable" />
/// <reference types="node" />

import {Agent} from 'http';

import {ApiVersion} from './apiVersion';

declare module 'stripe' {
  namespace Stripe {
    type StripeResourceClass = typeof StripeResource;

    interface StripeResourceExtension<T extends object>
      extends StripeResourceClass {
      new (stripe: Stripe): StripeResource & T;
    }

    export class StripeResource {
      static extend<
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        T extends {[prop: string]: any}
      >(spec: T): StripeResourceExtension<T>;
      static method<ResponseObject = object>(spec: {
        method: string;
        path?: string;
        fullPath?: string;
        // Please note, methodType === 'search' is beta functionality and is subject to
        // change/removal at any time.
        methodType?: 'list' | 'search';
      }): (...args: any[]) => Response<ResponseObject>; //eslint-disable-line @typescript-eslint/no-explicit-any
      static MAX_BUFFERED_REQUEST_METRICS: number;
    }
    export type LatestApiVersion = typeof ApiVersion;
    export const API_VERSION: string;
    export type HttpAgent = Agent;
    export type HttpProtocol = 'http' | 'https';

    export interface StripeConfig {
      /**
       * This library's types only reflect the latest API version.
       *
       * We recommend upgrading your account's API Version to the latest version
       * if you wish to use TypeScript with this library.
       *
       * If you wish to remain on your account's default API version,
       * you may pass `null` or another version instead of the latest version,
       * and add a `@ts-ignore` comment here and anywhere the types differ between API versions.
       *
       * @docs https://stripe.com/docs/api/versioning
       */
      apiVersion?: LatestApiVersion;

      /**
       * Optionally indicate that you are using TypeScript.
       * This currently has no runtime effect other than adding "TypeScript" to your user-agent.
       */
      typescript?: true;

      /**
       * Specifies maximum number of automatic network retries (default 1).
       * Retries will be attempted with exponential backoff.
       * Retries can be disabled by setting this option to 0.
       * [Idempotency keys](https://stripe.com/docs/api/idempotent_requests) are added where appropriate to prevent duplication.
       * @docs https://github.com/stripe/stripe-node#network-retries
       */
      maxNetworkRetries?: number;

      /**
       * Use a custom http(s) agent.
       * Useful for making requests through a proxy.
       */
      httpAgent?: HttpAgent;

      /**
       * Use a custom http client, rather than relying on Node libraries.
       * Useful for making requests in contexts other than NodeJS (eg. using
       * `fetch`).
       */
      httpClient?: HttpClient;

      /**
       * Request timeout in milliseconds.
       * The default is 80000
       */
      timeout?: number;

      /**
       * Specify the host to use for API Requests.
       */
      host?: string;

      /**
       * Specify the port to use for API Requests.
       */
      port?: string | number;

      /**
       * Specify the HTTP protool to use for API Requests.
       */
      protocol?: HttpProtocol;

      /**
       * Pass `telemetry: false` to disable headers that provide Stripe
       * with data about usage of the API.
       * Currently, the only telemetry we send is latency metrics.
       */
      telemetry?: boolean;

      /**
       * For plugin authors to identify their code.
       * @docs https://stripe.com/docs/building-plugins?lang=node#setappinfo
       */
      appInfo?: AppInfo;

      /**
       * An account id on whose behalf you wish to make every request. Prefer `stripeContext` for new code.
       */
      stripeAccount?: string;

      /**
       * An account on whose behalf you wish to make every request. See https://docs.corp.stripe.com/context for more information.
       */
      stripeContext?: string | StripeContext;
    }

    export interface RequestOptions {
      /**
       * Use a specific API Key for this request.
       * For Connect, we recommend using `stripeAccount` instead.
       */
      apiKey?: string;

      /**
       * See the [idempotency key docs](https://stripe.com/docs/api/idempotent_requests).
       */
      idempotencyKey?: string;

      /**
       * An account id on whose behalf you wish to make a request. Prefer `stripeContext` for new code.
       */
      stripeAccount?: string;

      /**
       * An account on whose behalf you wish to make a request. See https://docs.corp.stripe.com/context for more information.
       */
      stripeContext?: string | StripeContext;

      /**
       * The [API Version](https://stripe.com/docs/upgrades) to use for a given request (e.g., '2020-03-02').
       */
      apiVersion?: string;

      /**
       * Specify the number of requests to retry in event of error.
       * This overrides a default set on the Stripe object's config argument.
       */
      maxNetworkRetries?: number;

      /**
       * Specify a timeout for this request in milliseconds.
       */
      timeout?: number;

      /**
       * Specify the host for this request.
       */
      host?: string;
    }

    export type RawRequestOptions = RequestOptions & {
      /**
       * Specify additional request headers. This is an experimental interface and is not yet stable.
       */
      additionalHeaders?: {[headerName: string]: string};
    };

    export type Response<T> = T & {
      lastResponse: {
        headers: {[key: string]: string};
        requestId: string;
        statusCode: number;
        apiVersion?: string;
        idempotencyKey?: string;
        stripeAccount?: string;
      };
    };

    /**
     * A container for paginated lists of objects.
     * The array of objects is on the `.data` property,
     * and `.has_more` indicates whether there are additional objects beyond the end of this list.
     *
     * Learn more in Stripe's [pagination docs](https://stripe.com/docs/api/pagination?lang=node)
     * or, when iterating over many items, try [auto-pagination](https://github.com/stripe/stripe-node#auto-pagination) instead.
     */
    export interface ApiList<T> {
      object: 'list';

      data: Array<T>;

      /**
       * True if this list has another page of items after this one that can be fetched.
       */
      has_more: boolean;

      /**
       * The URL where this list can be accessed.
       */
      url: string;

      // Looking for `total_count`? It is deprecated; please do not use it.
    }

    export interface ApiListPromise<T>
      extends Promise<Response<ApiList<T>>>,
        AsyncIterableIterator<T> {
      autoPagingEach(
        handler: (item: T) => boolean | void | Promise<boolean | void>,
        onDone?: (err: any) => void
      ): Promise<void>;

      autoPagingToArray(
        opts: {limit: number},
        onDone?: (err: any) => void
      ): Promise<Array<T>>;
    }

    /**
     * A container for paginated lists of search results.
     * The array of objects is on the `.data` property,
     * and `.has_more` indicates whether there are additional objects beyond the end of this list.
     * The `.next_page` field can be used to paginate forwards.
     *
     * Please note, ApiSearchResult<T> is beta functionality and is subject to change/removal
     * at any time.
     */
    export interface ApiSearchResult<T> {
      object: 'search_result';

      data: Array<T>;

      /**
       * True if this list has another page of items after this one that can be fetched.
       */
      has_more: boolean;

      /**
       * The URL where this list can be accessed.
       */
      url: string;

      /**
       * The page token to use to get the next page of results. If `has_more` is
       * true, this will be set to a concrete string value.
       */
      next_page: string | null;

      /**
       * The total number of search results. Only present when `expand` request
       * parameter contains `total_count`.
       */
      total_count?: number;
    }
    export interface ApiSearchResultPromise<T>
      extends Promise<Response<ApiSearchResult<T>>>,
        AsyncIterableIterator<T> {
      autoPagingEach(
        handler: (item: T) => boolean | void | Promise<boolean | void>
      ): Promise<void>;

      autoPagingToArray(opts: {limit: number}): Promise<Array<T>>;
    }

    export type StripeStreamResponse = NodeJS.ReadableStream;

    /**
     * The Stripe API uses url-encoding for requests, and stripe-node encodes a
     * `null` param as an empty string, because there is no concept of `null`
     * in url-encoding. Both `null` and `''` behave identically.
     */
    export type Emptyable<T> = null | '' | T;

    export interface RequestEvent {
      api_version: string;
      account?: string;
      idempotency_key?: string;
      method: string;
      path: string;
      request_start_time: number;
    }

    export interface ResponseEvent {
      api_version: string;
      account?: string;
      idempotency_key?: string;
      method: string;
      path: string;
      status: number;
      request_id: string;
      elapsed: number;
      request_start_time: number;
      request_end_time: number;
    }

    /**
     * Identify your plugin.
     * @docs https://stripe.com/docs/building-plugins?lang=node#setappinfo
     */
    export interface AppInfo {
      name: string;
      partner_id?: string;
      url?: string;
      version?: string;
    }

    export interface FileData {
      data: string | Buffer | Uint8Array;
      name?: string;
      type?: string;
    }

    /**
     * Rounding direction for Decimal operations (IEEE 754-2019 §4.3).
     */
    type RoundDirection =
      | 'ceil'
      | 'floor'
      | 'round-down'
      | 'round-up'
      | 'half-up'
      | 'half-down'
      | 'half-even';

    /**
     * Precision specification for {@link Decimal.round}.
     */
    interface DecimalRoundingOptions {
      mode: 'decimal-places' | 'significant-figures';
      value: number;
    }

    /**
     * Built-in rounding presets accepted by {@link Decimal.round}.
     * Extensible via declaration merging.
     */
    interface DecimalRoundingPresets {
      'ubb-usage-count': DecimalRoundingOptions;
      'v1-api': DecimalRoundingOptions;
    }

    /**
     * IEEE 754 decimal128 coefficient size (34 digits) — the recommended
     * precision for {@link Decimal.div} when full precision is desired.
     */
    const DEFAULT_DIV_PRECISION: 34;

    /**
     * Check whether a value is a {@link Decimal} instance.
     */
    function isDecimal(value: unknown): value is Stripe.Decimal;

    /**
     * Arbitrary-precision decimal number for working with Stripe decimal_string fields
     * without floating-point precision loss.
     *
     * Use `Decimal.from(value)` to construct instances. Instances are immutable.
     *
     * @example
     * import { Decimal } from 'stripe';
     * const price = Decimal.from("99.99");
     * const tax = Decimal.from("0.08");
     * const total = price.mul(tax.add(Decimal.from("1")));
     */
    interface Decimal {
      add(other: Decimal): Decimal;
      sub(other: Decimal): Decimal;
      mul(other: Decimal): Decimal;
      div(
        other: Decimal,
        precision: number,
        direction: Stripe.RoundDirection
      ): Decimal;
      cmp(other: Decimal): -1 | 0 | 1;
      eq(other: Decimal): boolean;
      lt(other: Decimal): boolean;
      lte(other: Decimal): boolean;
      gt(other: Decimal): boolean;
      gte(other: Decimal): boolean;
      isZero(): boolean;
      isNegative(): boolean;
      isPositive(): boolean;
      neg(): Decimal;
      abs(): Decimal;
      round(
        direction: Stripe.RoundDirection,
        options:
          | keyof Stripe.DecimalRoundingPresets
          | Stripe.DecimalRoundingOptions
      ): Decimal;
      toFixed(decimalPlaces: number, direction: Stripe.RoundDirection): string;
      toNumber(): number;
      toString(): string;
      toJSON(): string;
      valueOf(): string;
    }
    namespace Decimal {
      function from(value: string | number | bigint): Stripe.Decimal;
      const zero: Stripe.Decimal;
    }

    namespace V2 {
      /**
       * Represents a monetary amount with associated currency
       */
      export interface Amount {
        value: number;
        currency: string;
      }
    }
  }
}
