///<reference lib="esnext.asynciterable" />
/// <reference types="node" />

import {Agent} from 'http';

declare module 'stripe' {
  namespace Stripe {
    export class StripeResource {
      static extend<
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        T extends {[prop: string]: any} & {
          includeBasic?: Array<
            'create' | 'retrieve' | 'update' | 'list' | 'del'
          >;
        }
      >(spec: T): typeof StripeResource & T;
      static method(spec: {
        method: string;
        path?: string;
        fullPath?: string;
        // Please note, methodType === 'search' is beta functionality and is subject to
        // change/removal at any time.
        methodType?: 'list' | 'search';
      }): (...args: any[]) => object; //eslint-disable-line @typescript-eslint/no-explicit-any
      static BASIC_METHODS: {
        create<T>(
          params: CouponCreateParams,
          options?: RequestOptions
        ): Promise<T>;
        retrieve<T>(
          id: string,
          params?: CouponRetrieveParams,
          options?: RequestOptions
        ): Promise<T>;
        update<T>(
          id: string,
          params?: CouponUpdateParams,
          options?: RequestOptions
        ): Promise<T>;
        list<T>(
          params?: CouponListParams,
          options?: RequestOptions
        ): ApiListPromise<T>;
        del<T>(id: string, options?: RequestOptions): Promise<T>;
      };
      static MAX_BUFFERED_REQUEST_METRICS: number;
    }
    export type LatestApiVersion = '2020-08-27';
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
      apiVersion: LatestApiVersion;

      /**
       * Optionally indicate that you are using TypeScript.
       * This currently has no runtime effect other than adding "TypeScript" to your user-agent.
       */
      typescript?: true;

      /**
       * Enables automatic network retries with exponential backoff, up to the specified number of retries (default 0).
       * Idempotency keys](https://stripe.com/docs/api/idempotent_requests) are added where appropriate to prevent duplication.
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

      host?: string;

      port?: string | number;

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
       * An account id on whose behalf you wish to make every request.
       */
      stripeAccount?: string;
    }

    export interface RequestOptions {
      /**
       * Use a specific API Key for this request.
       * For Connect, we recommend using `stripeAccount` instead.
       */
      apiKey?: string;
      /** @deprecated Please use apiKey instead. */
      api_key?: string;

      /**
       * See the [idempotency key docs](https://stripe.com/docs/api/idempotency).
       */
      idempotencyKey?: string;
      /** @deprecated Please use idempotencyKey instead. */
      idempotency_key?: string;

      /**
       * An account id on whose behalf you wish to make a request.
       */
      stripeAccount?: string;
      /** @deprecated Please use stripeAccount instead. */
      stripe_account?: string;

      /**
       * The [API Version](https://stripe.com/docs/upgrades) to use for a given request (e.g., '2020-03-02').
       */
      apiVersion?: string;
      /** @deprecated Please use apiVersion instead. */
      stripeVersion?: string;
      /** @deprecated Please use stripeVersion instead. */
      stripe_version?: string;

      /**
       * Specify the number of requests to retry in event of error.
       * This overrides a default set on the Stripe object's config argument.
       */
      maxNetworkRetries?: number;

      /**
       * Specify a timeout for this request in milliseconds.
       */
      timeout?: number;
    }

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
        handler: (item: T) => boolean | void | Promise<boolean | void>
      ): Promise<void>;

      autoPagingToArray(opts: {limit: number}): Promise<Array<T>>;
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
       * true, this will be set.
       */
      next_page?: string;
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
  }
}
