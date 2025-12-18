// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../Types.js';
import {
  MetadataParam,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../../shared.js';
import {ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class RequestResource extends StripeResource {
  /**
   * Lists all ForwardingRequest objects.
   */
  list(
    params?: Forwarding.RequestListParams,
    options?: RequestOptions
  ): ApiListPromise<Request>;
  list(options?: RequestOptions): ApiListPromise<Request>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/forwarding/requests',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates a ForwardingRequest object.
   */
  create(
    params: Forwarding.RequestCreateParams,
    options?: RequestOptions
  ): Promise<Response<Request>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/forwarding/requests',
    }).call(this, ...args);
  }

  /**
   * Retrieves a ForwardingRequest object.
   */
  retrieve(
    id: string,
    params?: Forwarding.RequestRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Request>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Request>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/forwarding/requests/{id}',
    }).call(this, ...args);
  }
}
export /**
 * Instructs Stripe to make a request on your behalf using the destination URL. The destination URL
 * is activated by Stripe at the time of onboarding. Stripe verifies requests with your credentials
 * provided during onboarding, and injects card details from the payment_method into the request.
 *
 * Stripe redacts all sensitive fields and headers, including authentication credentials and card numbers,
 * before storing the request and response data in the forwarding Request object, which are subject to a
 * 30-day retention period.
 *
 * You can provide a Stripe idempotency key to make sure that requests with the same key result in only one
 * outbound request. The Stripe idempotency key provided should be unique and different from any idempotency
 * keys provided on the underlying third-party request.
 *
 * Forwarding Requests are synchronous requests that return a response or time out according to
 * Stripe's limits.
 *
 * Related guide: [Forward card details to third-party API endpoints](https://docs.stripe.com/payments/forwarding).
 */
interface Request {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'forwarding.request';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata | null;

  /**
   * The PaymentMethod to insert into the forwarded request. Forwarding previously consumed PaymentMethods is allowed.
   */
  payment_method: string;

  /**
   * The field kinds to be replaced in the forwarded request.
   */
  replacements: Array<Forwarding.Request.Replacement>;

  /**
   * Context about the request from Stripe's servers to the destination endpoint.
   */
  request_context: Forwarding.Request.RequestContext | null;

  /**
   * The request that was sent to the destination endpoint. We redact any sensitive fields.
   */
  request_details: Forwarding.Request.RequestDetails | null;

  /**
   * The response that the destination endpoint returned to us. We redact any sensitive fields.
   */
  response_details: Forwarding.Request.ResponseDetails | null;

  /**
   * The destination URL for the forwarded request. Must be supported by the config.
   */
  url: string | null;
}
export namespace Forwarding {
  export namespace Request {
    export type Replacement =
      | 'card_cvc'
      | 'card_expiry'
      | 'card_number'
      | 'cardholder_name'
      | 'request_signature';

    export interface RequestContext {
      /**
       * The time it took in milliseconds for the destination endpoint to respond.
       */
      destination_duration: number;

      /**
       * The IP address of the destination.
       */
      destination_ip_address: string;
    }

    export interface RequestDetails {
      /**
       * The body payload to send to the destination endpoint.
       */
      body: string;

      /**
       * The headers to include in the forwarded request. Can be omitted if no additional headers (excluding Stripe-generated ones such as the Content-Type header) should be included.
       */
      headers: Array<RequestDetails.Header>;

      /**
       * The HTTP method used to call the destination endpoint.
       */
      http_method: 'POST';
    }

    export interface ResponseDetails {
      /**
       * The response body from the destination endpoint to Stripe.
       */
      body: string;

      /**
       * HTTP headers that the destination endpoint returned.
       */
      headers: Array<ResponseDetails.Header>;

      /**
       * The HTTP status code that the destination endpoint returned.
       */
      status: number;
    }

    export namespace RequestDetails {
      export interface Header {
        /**
         * The header name.
         */
        name: string;

        /**
         * The header value.
         */
        value: string;
      }
    }

    export namespace ResponseDetails {
      export interface Header {
        /**
         * The header name.
         */
        name: string;

        /**
         * The header value.
         */
        value: string;
      }
    }
  }
}
export namespace Forwarding {
  export interface RequestCreateParams {
    /**
     * The PaymentMethod to insert into the forwarded request. Forwarding previously consumed PaymentMethods is allowed.
     */
    payment_method: string;

    /**
     * The field kinds to be replaced in the forwarded request.
     */
    replacements: Array<RequestCreateParams.Replacement>;

    /**
     * The request body and headers to be sent to the destination endpoint.
     */
    request: RequestCreateParams.Request;

    /**
     * The destination URL for the forwarded request. Must be supported by the config.
     */
    url: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;
  }

  export namespace RequestCreateParams {
    export type Replacement =
      | 'card_cvc'
      | 'card_expiry'
      | 'card_number'
      | 'cardholder_name'
      | 'request_signature';

    export interface Request {
      /**
       * The body payload to send to the destination endpoint.
       */
      body?: string;

      /**
       * The headers to include in the forwarded request. Can be omitted if no additional headers (excluding Stripe-generated ones such as the Content-Type header) should be included.
       */
      headers?: Array<Request.Header>;
    }

    export namespace Request {
      export interface Header {
        /**
         * The header name.
         */
        name: string;

        /**
         * The header value.
         */
        value: string;
      }
    }
  }
}
export namespace Forwarding {
  export interface RequestRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Forwarding {
  export interface RequestListParams extends PaginationParams {
    /**
     * Similar to other List endpoints, filters results based on created timestamp. You can pass gt, gte, lt, and lte timestamp values.
     */
    created?: RangeQueryParam;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
