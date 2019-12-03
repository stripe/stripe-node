declare namespace Stripe {
  /**
   * The OrderReturn object.
   */
  interface OrderReturn {
    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'order_return';

    /**
     * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the returned line item.
     */
    amount?: number;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * The items included in this order return.
     */
    items?: Array<OrderItem>;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * The order that this return includes items from.
     */
    order?: string | Order | null;

    /**
     * The ID of the refund issued for this return.
     */
    refund?: string | Refund | null;
  }

  /**
   * Retrieves the details of an existing order return. Supply the unique order ID from either an order return creation request or the order return list, and Stripe will return the corresponding order information.
   */
  interface OrderReturnRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Returns a list of your order returns. The returns are returned sorted by creation date, with the most recently created return appearing first.
   */
  interface OrderReturnListParams {
    /**
     * Date this return was created.
     */
    created?: number | OrderReturnListParams.Created;

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
     * The order to retrieve returns for.
     */
    order?: string;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  namespace OrderReturnListParams {
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

  class OrderReturnsResource {
    /**
     * Retrieves the details of an existing order return. Supply the unique order ID from either an order return creation request or the order return list, and Stripe will return the corresponding order information.
     */
    retrieve(
      id: string,
      params?: OrderReturnRetrieveParams,
      options?: RequestOptions
    ): Promise<OrderReturn>;
    retrieve(id: string, options?: RequestOptions): Promise<OrderReturn>;

    /**
     * Returns a list of your order returns. The returns are returned sorted by creation date, with the most recently created return appearing first.
     */
    list(
      params?: OrderReturnListParams,
      options?: RequestOptions
    ): ApiListPromise<OrderReturn>;
    list(options?: RequestOptions): ApiListPromise<OrderReturn>;
  }
}