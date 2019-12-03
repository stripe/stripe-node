declare namespace Stripe {
  /**
   * The Review object.
   */
  interface Review {
    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'review';

    /**
     * The ZIP or postal code of the card used, if applicable.
     */
    billing_zip?: string | null;

    /**
     * The charge associated with this review.
     */
    charge?: string | Charge | null;

    /**
     * The reason the review was closed, or null if it has not yet been closed. One of `approved`, `refunded`, `refunded_as_fraud`, or `disputed`.
     */
    closed_reason?: Review.ClosedReason | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * The IP address where the payment originated.
     */
    ip_address?: string | null;

    /**
     * Information related to the location of the payment. Note that this information is an approximation and attempts to locate the nearest population center - it should not be used to determine a specific address.
     */
    ip_address_location?: Review.IpAddressLocation | null;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * If `true`, the review needs action.
     */
    open?: boolean;

    /**
     * The reason the review was opened. One of `rule` or `manual`.
     */
    opened_reason?: Review.OpenedReason;

    /**
     * The PaymentIntent ID associated with this review, if one exists.
     */
    payment_intent?: string | PaymentIntent;

    /**
     * The reason the review is currently open or closed. One of `rule`, `manual`, `approved`, `refunded`, `refunded_as_fraud`, or `disputed`.
     */
    reason?: string;

    /**
     * Information related to the browsing session of the user who initiated the payment.
     */
    session?: Review.Session | null;
  }

  namespace Review {
    type ClosedReason =
      | 'approved'
      | 'disputed'
      | 'refunded'
      | 'refunded_as_fraud'

    interface IpAddressLocation {
      /**
       * The city where the payment originated.
       */
      city?: string | null;

      /**
       * Two-letter ISO code representing the country where the payment originated.
       */
      country?: string | null;

      /**
       * The geographic latitude where the payment originated.
       */
      latitude?: number | null;

      /**
       * The geographic longitude where the payment originated.
       */
      longitude?: number | null;

      /**
       * The state/county/province/region where the payment originated.
       */
      region?: string | null;
    }

    type OpenedReason = 'manual' | 'rule'

    interface Session {
      /**
       * The browser used in this browser session (e.g., `Chrome`).
       */
      browser?: string | null;

      /**
       * Information about the device used for the browser session (e.g., `Samsung SM-G930T`).
       */
      device?: string | null;

      /**
       * The platform for the browser session (e.g., `Macintosh`).
       */
      platform?: string | null;

      /**
       * The version for the browser session (e.g., `61.0.3163.100`).
       */
      version?: string | null;
    }
  }

  /**
   * Retrieves a Review object.
   */
  interface ReviewRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Returns a list of Review objects that have open set to true. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
   */
  interface ReviewListParams {
    created?: number | ReviewListParams.Created;

    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  namespace ReviewListParams {
    interface Created {
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
  }

  /**
   * Approves a Review object, closing it and removing it from the list of reviews.
   */
  interface ReviewApproveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  class ReviewsResource {
    /**
     * Retrieves a Review object.
     */
    retrieve(
      id: string,
      params?: ReviewRetrieveParams,
      options?: RequestOptions
    ): Promise<Review>;
    retrieve(id: string, options?: RequestOptions): Promise<Review>;

    /**
     * Returns a list of Review objects that have open set to true. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    list(
      params?: ReviewListParams,
      options?: RequestOptions
    ): ApiListPromise<Review>;
    list(options?: RequestOptions): ApiListPromise<Review>;

    /**
     * Approves a Review object, closing it and removing it from the list of reviews.
     */
    approve(
      id: string,
      params?: ReviewApproveParams,
      options?: RequestOptions
    ): Promise<Review>;
    approve(id: string, options?: RequestOptions): Promise<Review>;
  }
}