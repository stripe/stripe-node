// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {OrderEvent} from './OrderEvents.js';
import {RequestOptions, Response} from '../../lib.js';

export class OrderResource extends StripeResource {
  /**
   * Retrieves a delegated checkout order.
   */
  retrieve(
    id: string,
    params?: DelegatedCheckout.OrderRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Order>> {
    return this._makeRequest(
      'GET',
      `/v1/delegated_checkout/orders/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface Order {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'delegated_checkout.order';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * The latest order event for this order.
   */
  latest_order_event: OrderEvent | null;

  /**
   * The line items in this order.
   */
  line_items: Array<Order.LineItem>;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The permalink URL for this order.
   */
  permalink_url: string | null;

  /**
   * The requested session associated with this order.
   */
  requested_session: string;

  /**
   * The seller reference for this order.
   */
  seller_reference: string | null;

  /**
   * The totals for this order.
   */
  totals: Order.Totals | null;
}
export namespace Order {
  export interface LineItem {
    /**
     * The order line item key.
     */
    key: string;

    product_details: LineItem.ProductDetails;

    quantity: LineItem.Quantity;

    /**
     * The SKU ID of the line item.
     */
    sku_id: string;

    /**
     * The totals for this line item.
     */
    totals: LineItem.Totals | null;

    /**
     * The line item unit amount.
     */
    unit_amount: number;
  }

  export interface Totals {
    /**
     * The discount amount for the order.
     */
    discount: number | null;

    /**
     * The fulfillment amount for the order.
     */
    fulfillment: number | null;

    /**
     * The subtotal amount for the order.
     */
    subtotal: number | null;

    /**
     * The tax amount for the order.
     */
    tax: number | null;

    /**
     * The total amount for the order.
     */
    total: number | null;
  }

  export namespace LineItem {
    export interface ProductDetails {
      /**
       * The item description.
       */
      description: string | null;

      /**
       * The item images.
       */
      images: Array<string> | null;

      /**
       * The item title.
       */
      title: string;
    }

    export interface Quantity {
      /**
       * The current quantity.
       */
      current: number;

      /**
       * The ordered quantity.
       */
      ordered: number;

      /**
       * The shipped quantity.
       */
      shipped: number;
    }

    export interface Totals {
      /**
       * The base amount for the line item.
       */
      base_amount: number | null;

      /**
       * The discount amount for the line item.
       */
      discount: number | null;

      /**
       * The subtotal amount for the line item.
       */
      subtotal: number | null;

      /**
       * The tax amount for the line item.
       */
      tax: number | null;

      /**
       * The total amount for the line item.
       */
      total: number | null;
    }
  }
}
export namespace DelegatedCheckout {
  export interface OrderRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
