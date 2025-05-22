///<reference lib="esnext.asynciterable" />
/// <reference types="node" />

import { Agent } from 'http';
import { AppInfo } from './stripe';

declare module 'stripe' {
  namespace Stripe {
    type StripeResourceClass = typeof StripeResource;

    interface StripeResourceExtension<T extends object>
      extends StripeResourceClass {
      new (stripe: Stripe.StripeConfig): StripeResource & T;
    }

    export class StripeResource {
      static extend<
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        T extends { [prop: string]: any }
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

    export type LatestApiVersion = '2025-04-30.basil';
    export type HttpAgent = Agent;
    export type HttpProtocol = 'http' | 'https';

    // Define HttpClient type
    export interface HttpClient {
      request: (url: string, options: HttpRequestOptions) => Promise<HttpResponse>;
    }

    export interface HttpRequestOptions {
      method: string;
      headers?: Record<string, string>;
      body?: string;
    }

    export interface HttpResponse {
      status: number;
      headers: Record<string, string>;
      body: string;
    }

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
       * Specify the HTTP protocol to use for API Requests.
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

      /**
       * See the [idempotency key docs](https://stripe.com/docs/api/idempotent_requests).
       */
      idempotencyKey?: string;

      /**
       * An account id on whose behalf you wish to make a request.
       */
      stripeAccount?: string;

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
      additionalHeaders?: { [headerName: string]: string };
    };

    export type Response<T> = T & {
      lastResponse: {
        headers: { [key: string]: string };
        requestId: string;
        statusCode: number;
        apiVersion?: string;
        idempotencyKey?: string;
        stripeAccount?: string;
      };
    };

    // Other interfaces and types remain unchanged...
  }
}