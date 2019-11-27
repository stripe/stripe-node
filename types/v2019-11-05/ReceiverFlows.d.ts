declare namespace Stripe {
  /**
   * The ReceiverFlow object.
   */
  interface ReceiverFlow {
    /**
     * The address of the receiver source. This is the value that should be communicated to the customer to send their funds to.
     */
    address?: string | null;

    /**
     * The total amount that was charged by you. The amount charged is expressed in the source's currency.
     */
    amount_charged?: number;

    /**
     * The total amount received by the receiver source. `amount_received = amount_returned + amount_charged` is true at all time. The amount received is expressed in the source's currency.
     */
    amount_received?: number;

    /**
     * The total amount that was returned to the customer. The amount returned is expressed in the source's currency.
     */
    amount_returned?: number;

    /**
     * Type of refund attribute method, one of `email`, `manual`, or `none`.
     */
    refund_attributes_method?: string;

    /**
     * Type of refund attribute status, one of `missing`, `requested`, or `available`.
     */
    refund_attributes_status?: string;
  }
}