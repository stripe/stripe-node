///<reference lib="esnext.asynciterable" />
/// <reference types="node" />

import {Agent} from 'http';

declare module 'stripe' {
  namespace Stripe {
    export type LatestApiVersion = '2020-03-02';
    export type HttpAgent = Agent;

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
       * Request timeout in milliseconds.
       * The default is 80000
       */
      timeout?: number;

      host?: string;

      port?: string | number;

      protocol?: 'https' | 'http';

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
      extends Promise<ApiList<T>>,
        AsyncIterableIterator<T> {
      autoPagingEach(
        handler: (item: T) => boolean | void | Promise<boolean | void>
      ): void;

      autoPagingToArray(opts: {limit: number}): Promise<Array<T>>;
    }

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

    export type Errors = {
      StripeError: typeof StripeError;
      StripeCardError: typeof StripeCardError;
      StripeInvalidRequestError: typeof StripeInvalidRequestError;
      StripeAPIError: typeof StripeAPIError;
      StripeAuthenticationError: typeof StripeAuthenticationError;
      StripePermissionError: typeof StripePermissionError;
      StripeRateLimitError: typeof StripeRateLimitError;
      StripeConnectionError: typeof StripeConnectionError;
      StripeSignatureVerificationError: typeof StripeSignatureVerificationError;
      StripeIdempotencyError: typeof StripeIdempotencyError;
    };

    export type RawErrorType =
      | 'card_error'
      | 'invalid_request_error'
      | 'api_error'
      | 'idempotency_error'
      | 'rate_limit_error'
      | 'authentication_error'
      | 'invalid_grant';

    class StripeError extends Error {
      static populate(type: RawErrorType): StripeError;

      /**
       * A human-readable message giving more details about the error. For card errors, these messages can
       * be shown to your users.
       */
      readonly message: string;

      readonly type: keyof Errors;

      /**
       * See the "error types" section at https://stripe.com/docs/api/errors
       */
      readonly rawType: RawErrorType;

      /**
       * For card errors, a short string describing the kind of card error that occurred.
       *
       * @docs https://stripe.com/docs/error-codes
       */
      readonly code?: string;

      /**
       * Typically a 4xx or 5xx.
       */
      readonly statusCode?: number;

      readonly raw: unknown;

      readonly headers: {
        [key: string]: string;
      };

      readonly requestId: string;

      /**
       * The parameter the error relates to if the error is parameter-specific. You can use this to display a
       * message near the correct form field, for example.
       */
      readonly param?: string;

      /** @deprecated */
      readonly detail?: unknown;

      readonly charge?: string;
      readonly decline_code?: string;
      readonly payment_intent?: PaymentIntent;
      readonly payment_method?: PaymentMethod;
      readonly setup_intent?: SetupIntent;
      readonly source?: Source;
    }

    /**
     * Card errors are the most common type of error you should expect to handle.
     * They result when the user enters a card that can't be charged for some reason.
     */
    class StripeCardError extends StripeError {
      readonly type: 'StripeCardError';
      readonly rawType: 'card_error';

      /**
       * @docs https://stripe.com/docs/declines/codes
       */
      readonly decline_code: string;
    }

    /**
     * Invalid request errors arise when your request has invalid parameters.
     */
    class StripeInvalidRequestError extends StripeError {
      readonly type: 'StripeInvalidRequestError';
      readonly rawType: 'invalid_request_error';
    }

    /**
     * API errors cover any other type of problem (e.g., a temporary problem with Stripe's servers),
     * and are extremely uncommon.
     *
     * It could also be raised in the case that a new error has been introduced in the API,
     * but this version of the library doesn't know how to handle it.
     */
    class StripeAPIError extends StripeError {
      readonly type: 'StripeAPIError';
      readonly rawType: 'api_error';
    }

    /**
     * Failure to properly authenticate yourself in the request.
     */
    class StripeAuthenticationError extends StripeError {
      readonly type: 'StripeAuthenticationError';
      readonly rawType: 'authentication_error';
    }

    /**
     * Access was attempted on a resource that wasn't allowed.
     */
    class StripePermissionError extends StripeError {
      readonly type: 'StripePermissionError';
    }

    /**
     * Too many requests hit the API too quickly.
     * @docs https://stripe.com/docs/rate-limits
     */
    class StripeRateLimitError extends StripeError {
      readonly type: 'StripeRateLimitError';
      readonly rawType: 'rate_limit_error';
    }

    /**
     * The library cannot connect to Stripe.
     * This can happen for a variety of reasons,
     * such as loss of network connectivity or a bad TLS certificate.
     */
    class StripeConnectionError extends StripeError {
      readonly type: 'StripeConnectionError';
    }

    /**
     * The signature verification for a webhook failed.
     * @docs https://stripe.com/docs/webhooks/signatures
     */
    class StripeSignatureVerificationError extends StripeError {
      readonly type: 'StripeSignatureVerificationError';
    }

    /**
     * Idempotency errors occur when an `Idempotency-Key` is re-used on a request that does not match the first request's API endpoint and parameters.
     * @docs https://stripe.com/docs/api/idempotent_requests?lang=node
     */
    class StripeIdempotencyError extends StripeError {
      readonly type: 'StripeIdempotencyError';
      readonly rawType: 'idempotency_error';
    }
  }
}
