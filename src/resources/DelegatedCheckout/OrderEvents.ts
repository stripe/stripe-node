// File generated from our OpenAPI spec

import {RequestOptions} from '../../lib.js';
export interface OrderEvent {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'delegated_checkout.order_event';

  /**
   * The adjustment details for this order event.
   */
  adjustment: OrderEvent.Adjustment | null;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * The fulfillment details for this order event.
   */
  fulfillment: OrderEvent.Fulfillment | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Time at which this event occurred. Measured in seconds since the Unix epoch.
   */
  occurred_at: number;

  /**
   * The delegated checkout order associated with this order event.
   */
  order: string;

  /**
   * The requested session associated with this order event.
   */
  requested_session: string;

  /**
   * The type of order event.
   */
  type: OrderEvent.Type;
}
export namespace OrderEvent {
  export interface Adjustment {
    /**
     * The amount associated with the adjustment.
     */
    amount: number | null;

    /**
     * The currency associated with the adjustment amount.
     */
    currency: string | null;

    /**
     * The description of the adjustment.
     */
    description: string;

    /**
     * The line items associated with the adjustment.
     */
    line_items: Array<Adjustment.LineItem> | null;

    /**
     * The status of the adjustment.
     */
    status: Adjustment.Status;

    /**
     * The type of adjustment.
     */
    type: Adjustment.Type;
  }

  export interface Fulfillment {
    /**
     * The carrier for the fulfillment.
     */
    carrier: string | null;

    /**
     * Time at which the fulfillment was delivered. Measured in seconds since the Unix epoch.
     */
    delivered_at: number | null;

    /**
     * The line items associated with the fulfillment.
     */
    line_items: Array<Fulfillment.LineItem>;

    /**
     * Time at which the fulfillment shipped. Measured in seconds since the Unix epoch.
     */
    shipped_at: number | null;

    /**
     * The status of the fulfillment.
     */
    status: Fulfillment.Status;

    /**
     * The tracking number for the fulfillment.
     */
    tracking_number: string | null;

    /**
     * The tracking URL for the fulfillment.
     */
    tracking_url: string | null;
  }

  export type Type = 'adjustment' | 'fulfillment';

  export namespace Adjustment {
    export interface LineItem {
      /**
       * The line item key.
       */
      key: string;

      /**
       * The quantity associated with the order event.
       */
      quantity: number;
    }

    export type Status = 'completed' | 'failed' | 'pending';

    export type Type =
      | 'cancellation'
      | 'credit'
      | 'dispute'
      | 'original_payment_refund'
      | 'return'
      | 'store_credit_refund';
  }

  export namespace Fulfillment {
    export interface LineItem {
      /**
       * The line item key.
       */
      key: string;

      /**
       * The quantity associated with the order event.
       */
      quantity: number;
    }

    export type Status =
      | 'confirmed'
      | 'delivered'
      | 'fulfilled'
      | 'pending'
      | 'returned'
      | 'shipped';
  }
}
