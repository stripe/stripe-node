///<reference lib="esnext.asynciterable" />

declare namespace Stripe {
  export interface StripeConfig {
    apiVersion?: string;
    maxNetworkRetries?: number;
    httpAgent?: HttpAgent;
    timeout?: number;
    host?: string;
    port?: string | number; // TODO: double-check
    telemetry?: boolean;
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
     * The [API Version](https://stripe.com/docs/upgrades) to use for a given request (eg; '2019-11-05').
     */
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
  }

  export interface ApiListPromise<T> extends Promise<ApiList<T>>, AsyncIterableIterator<T> {
    autoPagingEach(handler: (item: T) => boolean | void | Promise<boolean | void>): void;

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
   * Should be https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/http.d.ts#L326
   */
  export class HttpAgent {
    maxFreeSockets: number;
    maxSockets: number;
    readonly sockets: {
      readonly [key: string]: Object[];
    };
    readonly requests: {
      readonly [key: string]: Object[];
    };
    constructor(options: Object);
    destroy(): void;
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
  }

  export type RawErrorType =
    | 'card_error'
    | 'invalid_request_error'
    | 'api_error'
    | 'idempotency_error'
    | 'invalid_grant';

  export class StripeError  {
    static populate(type: RawErrorType): StripeError;

    /**
     * A human-readable message giving more details about the error. For card errors, these messages can
     * be shown to your users.
     */
    readonly message: string;

    readonly type: keyof Errors;

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

    readonly raw: any;

    readonly headers: {
      [key: string]: string;
    };

    readonly requestId: string;

    /**
     * The parameter the error relates to if the error is parameter-specific. You can use this to display a
     * message near the correct form field, for example.
     */
    readonly params?: string;

    /** @deprecated */
    readonly detail?: any;

    readonly charge?: string;
    readonly decline_code?: string;
    readonly payment_intent?: PaymentIntent;
    readonly payment_method?: PaymentMethod;
    readonly setup_intent?: SetupIntent;
    readonly source?: Source;
  }

  export class StripeCardError extends StripeError {
    readonly type: 'StripeCardError';

    /**
     * @docs https://stripe.com/docs/declines/codes
     */
    readonly decline_code: string;
  }

  export class StripeInvalidRequestError extends StripeError {
    readonly type: 'StripeInvalidRequestError';
  }

  export class StripeAPIError extends StripeError {
    readonly type: 'StripeAPIError';
  }

  export class StripeAuthenticationError extends StripeError {
    readonly type: 'StripeAuthenticationError';
  }

  export class StripePermissionError extends StripeError {
    readonly type: 'StripePermissionError';
  }

  export class StripeRateLimitError extends StripeError {
    readonly type: 'StripeRateLimitError';
  }

  export class StripeConnectionError extends StripeError {
    readonly type: 'StripeConnectionError';
  }

  export class StripeSignatureVerificationError extends StripeError {
    readonly type: 'StripeSignatureVerificationError';
  }

  export class StripeIdempotencyError extends StripeError {
    readonly type: 'StripeIdempotencyError';
  }
}
