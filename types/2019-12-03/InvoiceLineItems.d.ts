declare namespace Stripe {
  /**
   * The InvoiceLineItem object.
   */
  interface InvoiceLineItem {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'line_item';

    /**
     * The amount, in %s.
     */
    amount: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description: string | null;

    /**
     * If true, discounts will apply to this line item. Always false for prorations.
     */
    discountable: boolean;

    invoice_item?: string;

    /**
     * Whether this is a test line item.
     */
    livemode: boolean;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Note that for line items with `type=subscription` this will reflect the metadata of the subscription that caused the line item to be created.
     */
    metadata: {
      [key: string]: string;
    };

    period: InvoiceLineItem.Period;

    /**
     * The plan of the subscription, if the line item is a subscription or a proration.
     */
    plan: Plan | null;

    /**
     * Whether this is a proration.
     */
    proration: boolean;

    /**
     * The quantity of the subscription, if the line item is a subscription or a proration.
     */
    quantity: number | null;

    /**
     * The subscription that the invoice item pertains to, if any.
     */
    subscription: string | null;

    /**
     * The subscription item that generated this invoice item. Left empty if the line item is not an explicit result of a subscription.
     */
    subscription_item?: string;

    /**
     * The amount of tax calculated per tax rate for this line item
     */
    tax_amounts?: Array<InvoiceLineItem.TaxAmount> | null;

    /**
     * The tax rates which apply to the line item.
     */
    tax_rates?: Array<TaxRate> | null;

    /**
     * A string identifying the type of the source of this line item, either an `invoiceitem` or a `subscription`.
     */
    type: InvoiceLineItem.Type;

    /**
     * For prorations this indicates whether Stripe automatically grouped multiple related debit and credit line items into a single combined line item.
     */
    unified_proration?: boolean;
  }

  namespace InvoiceLineItem {
    interface Period {
      /**
       * End of the line item's billing period
       */
      end: number;

      /**
       * Start of the line item's billing period
       */
      start: number;
    }

    interface TaxAmount {
      /**
       * The amount, in %s, of the tax.
       */
      amount: number;

      /**
       * Whether this tax amount is inclusive or exclusive.
       */
      inclusive: boolean;

      /**
       * The tax rate that was applied to get this tax amount.
       */
      tax_rate: string | TaxRate;
    }

    type Type = 'invoiceitem' | 'subscription'
  }

  interface InvoiceLineItemListParams {
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

  interface InvoiceLineItemListUpcomingParams {
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
}