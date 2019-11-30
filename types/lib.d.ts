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

  export interface HeaderOptions {
    /**
     * Use a specific API Key for this request.
     * For Connect, we recommend using `stripeAccount` instead.
     */
    apiKey?: string,
    /** @deprecated Please use apiKey instead. */
    api_key?: string,

    /**
     * See the [idempotency key docs](https://stripe.com/docs/api/idempotency).
     */
    idempotencyKey?: string,
    /** @deprecated Please use idempotencyKey instead. */
    idempotency_key?: string,

    /**
     * An account id on whose behalf you wish to make a request.
     */
    stripeAccount?: string,
    /** @deprecated Please use stripeAccount instead. */
    stripe_account?: string,

    /**
     * The [API Version](https://stripe.com/docs/upgrades) to use for a given request (eg; '2019-11-05').
     */
    stripeVersion?: string,
    /** @deprecated Please use stripeVersion instead. */
    stripe_version?: string,

    /**
     * Specify the number of requests to retry in event of error.
     * This overrides a default set on the Stripe object's config argument.
     */
    maxNetworkRetries?: number,

    /**
     * Specify a timeout for this request in milliseconds.
     */
    timeout?: number,
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
}
