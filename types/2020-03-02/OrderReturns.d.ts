// File generated from our OpenAPI spec
declare module 'stripe' {
  namespace Stripe {
    /**
     * The OrderReturn object.
     */
    interface OrderReturn {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'order_return';

      /**
       * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the returned line item.
       */
      amount: number;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * The items included in this order return.
       */
      items: Array<Stripe.OrderItem>;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The order that this return includes items from.
       */
      order: string | Stripe.Order | null;

      /**
       * The ID of the refund issued for this return.
       */
      refund: string | Stripe.Refund | null;
    }

    interface OrderReturnRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface OrderReturnListParams extends PaginationParams {
      /**
       * Date this return was created.
       */
      created?: RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The order to retrieve returns for.
       */
      order?: string;
    }

    class OrderReturnsResource {
      /**
       * Retrieves the details of an existing order return. Supply the unique order ID from either an order return creation request or the order return list, and Stripe will return the corresponding order information.
       */
      retrieve(
        id: string,
        params?: OrderReturnRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.OrderReturn>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.OrderReturn>;

      /**
       * Returns a list of your order returns. The returns are returned sorted by creation date, with the most recently created return appearing first.
       */
      list(
        params?: OrderReturnListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.OrderReturn>;
      list(options?: RequestOptions): ApiListPromise<Stripe.OrderReturn>;
    }
  }
}
