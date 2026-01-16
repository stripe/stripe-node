// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {Charge} from './Charges.js';
import {PaymentIntent} from './PaymentIntents.js';
import {PaginationParams, RangeQueryParam} from '../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../lib.js';
const stripeMethod = StripeResource.method;
export class ReviewResource extends StripeResource {
  /**
   * Returns a list of Review objects that have open set to true. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
   */
  list(
    params?: ReviewListParams,
    options?: RequestOptions
  ): ApiListPromise<Review>;
  list(options?: RequestOptions): ApiListPromise<Review>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/reviews',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieves a Review object.
   */
  retrieve(
    id: string,
    params?: ReviewRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Review>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Review>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/reviews/{review}',
    }).call(this, ...args);
  }

  /**
   * Approves a Review object, closing it and removing it from the list of reviews.
   */
  approve(
    id: string,
    params?: ReviewApproveParams,
    options?: RequestOptions
  ): Promise<Response<Review>>;
  approve(id: string, options?: RequestOptions): Promise<Response<Review>>;
  approve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/reviews/{review}/approve',
    }).call(this, ...args);
  }
}
export interface Review {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'review';

  /**
   * The ZIP or postal code of the card used, if applicable.
   */
  billing_zip: string | null;

  /**
   * The charge associated with this review.
   */
  charge: string | Charge | null;

  /**
   * The reason the review was closed, or null if it has not yet been closed. One of `approved`, `refunded`, `refunded_as_fraud`, `disputed`, `redacted`, `canceled`, `payment_never_settled`, or `acknowledged`.
   */
  closed_reason: Review.ClosedReason | null;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * The IP address where the payment originated.
   */
  ip_address: string | null;

  /**
   * Information related to the location of the payment. Note that this information is an approximation and attempts to locate the nearest population center - it should not be used to determine a specific address.
   */
  ip_address_location: Review.IpAddressLocation | null;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * If `true`, the review needs action.
   */
  open: boolean;

  /**
   * The reason the review was opened. One of `rule` or `manual`.
   */
  opened_reason: Review.OpenedReason;

  /**
   * The PaymentIntent ID associated with this review, if one exists.
   */
  payment_intent?: string | PaymentIntent;

  /**
   * The reason the review is currently open or closed. One of `rule`, `manual`, `approved`, `refunded`, `refunded_as_fraud`, `disputed`, `redacted`, `canceled`, `payment_never_settled`, or `acknowledged`.
   */
  reason: string;

  /**
   * Information related to the browsing session of the user who initiated the payment.
   */
  session: Review.Session | null;
}
export namespace Review {
  export type ClosedReason =
    | 'acknowledged'
    | 'approved'
    | 'canceled'
    | 'disputed'
    | 'payment_never_settled'
    | 'redacted'
    | 'refunded'
    | 'refunded_as_fraud';

  export interface IpAddressLocation {
    /**
     * The city where the payment originated.
     */
    city: string | null;

    /**
     * Two-letter ISO code representing the country where the payment originated.
     */
    country: string | null;

    /**
     * The geographic latitude where the payment originated.
     */
    latitude: number | null;

    /**
     * The geographic longitude where the payment originated.
     */
    longitude: number | null;

    /**
     * The state/county/province/region where the payment originated.
     */
    region: string | null;
  }

  export type OpenedReason = 'manual' | 'rule';

  export interface Session {
    /**
     * The browser used in this browser session (e.g., `Chrome`).
     */
    browser: string | null;

    /**
     * Information about the device used for the browser session (e.g., `Samsung SM-G930T`).
     */
    device: string | null;

    /**
     * The platform for the browser session (e.g., `Macintosh`).
     */
    platform: string | null;

    /**
     * The version for the browser session (e.g., `61.0.3163.100`).
     */
    version: string | null;
  }
}
export interface ReviewRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ReviewListParams extends PaginationParams {
  /**
   * Only return reviews that were created during the given date interval.
   */
  created?: RangeQueryParam | number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ReviewApproveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
