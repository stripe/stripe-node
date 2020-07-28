// File generated from our OpenAPI spec
declare module 'stripe' {
  namespace Stripe {
    /**
     * The Order object.
     */
    interface Order {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'order';

      /**
       * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the order.
       */
      amount: number;

      /**
       * The total amount that was returned to the customer.
       */
      amount_returned: number | null;

      /**
       * ID of the Connect Application that created the order.
       */
      application: string | null;

      /**
       * A fee in cents that will be applied to the order and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees documentation.
       */
      application_fee: number | null;

      /**
       * The ID of the payment used to pay for the order. Present if the order status is `paid`, `fulfilled`, or `refunded`.
       */
      charge: string | Stripe.Charge | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * The customer used for the order.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

      /**
       * The email address of the customer placing the order.
       */
      email: string | null;

      /**
       * External coupon code to load for this order.
       */
      external_coupon_code?: string;

      /**
       * List of items constituting the order. An order can have up to 25 items.
       */
      items: Array<Stripe.OrderItem>;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Metadata;

      /**
       * A list of returns that have taken place for this order.
       */
      returns: ApiList<Stripe.OrderReturn> | null;

      /**
       * The shipping method that is currently selected for this order, if any. If present, it is equal to one of the `id`s of shipping methods in the `shipping_methods` array. At order creation time, if there are multiple shipping methods, Stripe will automatically selected the first method.
       */
      selected_shipping_method: string | null;

      /**
       * The shipping address for the order. Present if the order is for goods to be shipped.
       */
      shipping: Order.Shipping | null;

      /**
       * A list of supported shipping methods for this order. The desired shipping method can be specified either by updating the order, or when paying it.
       */
      shipping_methods: Array<Order.ShippingMethod> | null;

      /**
       * Current order status. One of `created`, `paid`, `canceled`, `fulfilled`, or `returned`. More details in the [Orders Guide](https://stripe.com/docs/orders/guide#understanding-order-statuses).
       */
      status: string;

      /**
       * The timestamps at which the order status was updated.
       */
      status_transitions: Order.StatusTransitions | null;

      /**
       * Time at which the object was last updated. Measured in seconds since the Unix epoch.
       */
      updated: number | null;

      /**
       * The user's order ID if it is different from the Stripe order ID.
       */
      upstream_id?: string;
    }

    namespace Order {
      interface Shipping {
        address?: Address;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string | null;

        /**
         * Recipient name.
         */
        name?: string | null;

        /**
         * Recipient phone (including extension).
         */
        phone?: string | null;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string | null;
      }

      interface ShippingMethod {
        /**
         * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the line item.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The estimated delivery date for the given shipping method. Can be either a specific date or a range.
         */
        delivery_estimate: ShippingMethod.DeliveryEstimate | null;

        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description: string;

        /**
         * Unique identifier for the object.
         */
        id: string;
      }

      namespace ShippingMethod {
        interface DeliveryEstimate {
          /**
           * If `type` is `"exact"`, `date` will be the expected delivery date in the format YYYY-MM-DD.
           */
          date?: string;

          /**
           * If `type` is `"range"`, `earliest` will be be the earliest delivery date in the format YYYY-MM-DD.
           */
          earliest?: string;

          /**
           * If `type` is `"range"`, `latest` will be the latest delivery date in the format YYYY-MM-DD.
           */
          latest?: string;

          /**
           * The type of estimate. Must be either `"range"` or `"exact"`.
           */
          type: string;
        }
      }

      interface StatusTransitions {
        /**
         * The time that the order was canceled.
         */
        canceled: number | null;

        /**
         * The time that the order was fulfilled.
         */
        fulfiled: number | null;

        /**
         * The time that the order was paid.
         */
        paid: number | null;

        /**
         * The time that the order was returned.
         */
        returned: number | null;
      }
    }

    interface OrderCreateParams {
      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * A coupon code that represents a discount to be applied to this order. Must be one-time duration and in same currency as the order. An order can have multiple coupons.
       */
      coupon?: string;

      /**
       * The ID of an existing customer to use for this order. If provided, the customer email and shipping address will be used to create the order. Subsequently, the customer will also be charged to pay the order. If `email` or `shipping` are also provided, they will override the values retrieved from the customer object.
       */
      customer?: string;

      /**
       * The email address of the customer placing the order.
       */
      email?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * List of items constituting the order. An order can have up to 25 items.
       */
      items?: Array<OrderCreateParams.Item>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam;

      /**
       * Shipping address for the order. Required if any of the SKUs are for products that have `shippable` set to true.
       */
      shipping?: OrderCreateParams.Shipping;
    }

    namespace OrderCreateParams {
      interface Item {
        amount?: number;

        currency?: string;

        description?: string;

        /**
         * The ID of the SKU being ordered.
         */
        parent?: string;

        /**
         * The quantity of this order item. When type is `sku`, this is the number of instances of the SKU to be ordered.
         */
        quantity?: number;

        type?: Item.Type;
      }

      namespace Item {
        type Type = 'discount' | 'shipping' | 'sku' | 'tax';
      }

      interface Shipping {
        /**
         * Customer shipping address.
         */
        address: AddressParam;

        /**
         * Customer name.
         */
        name: string;

        /**
         * Customer phone (including extension).
         */
        phone?: string;
      }
    }

    interface OrderRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface OrderUpdateParams {
      /**
       * A coupon code that represents a discount to be applied to this order. Must be one-time duration and in same currency as the order. An order can have multiple coupons.
       */
      coupon?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam | null;

      /**
       * The shipping method to select for fulfilling this order. If specified, must be one of the `id`s of a shipping method in the `shipping_methods` array. If specified, will overwrite the existing selected shipping method, updating `items` as necessary.
       */
      selected_shipping_method?: string;

      /**
       * Tracking information once the order has been fulfilled.
       */
      shipping?: OrderUpdateParams.Shipping;

      /**
       * Current order status. One of `created`, `paid`, `canceled`, `fulfilled`, or `returned`. More detail in the [Orders Guide](https://stripe.com/docs/orders/guide#understanding-order-statuses).
       */
      status?: OrderUpdateParams.Status;
    }

    namespace OrderUpdateParams {
      interface Shipping {
        /**
         * The name of the carrier like `USPS`, `UPS`, or `FedEx`.
         */
        carrier: string;

        /**
         * The tracking number provided by the carrier.
         */
        tracking_number: string;
      }

      type Status = 'canceled' | 'created' | 'fulfilled' | 'paid' | 'returned';
    }

    interface OrderListParams extends PaginationParams {
      /**
       * Date this order was created.
       */
      created?: RangeQueryParam | number;

      /**
       * Only return orders for the given customer.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return orders with the given IDs.
       */
      ids?: Array<string>;

      /**
       * Only return orders that have the given status. One of `created`, `paid`, `fulfilled`, or `refunded`.
       */
      status?: string;

      /**
       * Filter orders based on when they were paid, fulfilled, canceled, or returned.
       */
      status_transitions?: OrderListParams.StatusTransitions;

      /**
       * Only return orders with the given upstream order IDs.
       */
      upstream_ids?: Array<string>;
    }

    namespace OrderListParams {
      interface StatusTransitions {
        /**
         * Date this order was canceled.
         */
        canceled?: RangeQueryParam | number;

        /**
         * Date this order was fulfilled.
         */
        fulfilled?: RangeQueryParam | number;

        /**
         * Date this order was paid.
         */
        paid?: RangeQueryParam | number;

        /**
         * Date this order was returned.
         */
        returned?: RangeQueryParam | number;
      }
    }

    interface OrderPayParams {
      /**
       * A fee in %s that will be applied to the order and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the `Stripe-Account` header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/connect/direct-charges#collecting-fees).
       */
      application_fee?: number;

      /**
       * The ID of an existing customer that will be charged for this order. If no customer was attached to the order at creation, either `source` or `customer` is required. Otherwise, the specified customer will be charged instead of the one attached to the order.
       */
      customer?: string;

      /**
       * The email address of the customer placing the order. Required if not previously specified for the order.
       */
      email?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam;

      /**
       * A [Token](https://stripe.com/docs/api#tokens)'s or a [Source](https://stripe.com/docs/api#sources)'s ID, as returned by [Elements](https://stripe.com/docs/elements). If no customer was attached to the order at creation, either `source` or `customer` is required. Otherwise, the specified source will be charged intead of the customer attached to the order.
       */
      source?: string;
    }

    interface OrderReturnOrderParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * List of items to return.
       */
      items?: Array<OrderReturnOrderParams.Item> | null;
    }

    namespace OrderReturnOrderParams {
      interface Item {
        /**
         * The amount (price) for this order item to return.
         */
        amount?: number;

        /**
         * If returning a `tax` item, use description to disambiguate which one to return.
         */
        description?: string;

        /**
         * The ID of the SKU, tax, or shipping item being returned.
         */
        parent?: string;

        /**
         * When type is `sku`, this is the number of instances of the SKU to be returned.
         */
        quantity?: number;

        /**
         * The type of this order item. Must be `sku`, `tax`, or `shipping`.
         */
        type?: Item.Type;
      }

      namespace Item {
        type Type = 'discount' | 'shipping' | 'sku' | 'tax';
      }
    }

    class OrdersResource {
      /**
       * Creates a new order object.
       */
      create(
        params: OrderCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Order>;

      /**
       * Retrieves the details of an existing order. Supply the unique order ID from either an order creation request or the order list, and Stripe will return the corresponding order information.
       */
      retrieve(
        id: string,
        params?: OrderRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Order>;
      retrieve(id: string, options?: RequestOptions): Promise<Stripe.Order>;

      /**
       * Updates the specific order by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       */
      update(
        id: string,
        params?: OrderUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Order>;

      /**
       * Returns a list of your orders. The orders are returned sorted by creation date, with the most recently created orders appearing first.
       */
      list(
        params?: OrderListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Order>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Order>;

      /**
       * Pay an order by providing a source to create a payment.
       */
      pay(
        id: string,
        params?: OrderPayParams,
        options?: RequestOptions
      ): Promise<Stripe.Order>;
      pay(id: string, options?: RequestOptions): Promise<Stripe.Order>;

      /**
       * Return all or part of an order. The order must have a status of paid or fulfilled before it can be returned. Once all items have been returned, the order will become canceled or returned depending on which status the order started in.
       */
      returnOrder(
        id: string,
        params?: OrderReturnOrderParams,
        options?: RequestOptions
      ): Promise<Stripe.OrderReturn>;
      returnOrder(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.OrderReturn>;
    }
  }
}
