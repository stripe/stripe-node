// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A (partner) margin represents a specific discount distributed in partner reseller programs to business partners who
     * resell products and services and earn a discount (margin) for doing so.
     */
    interface Margin {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'margin';

      /**
       * Whether the margin can be applied to invoices, invoice items, or invoice line items. Defaults to `true`.
       */
      active: boolean;

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
      metadata: Stripe.Metadata | null;

      /**
       * Name of the margin that's displayed on, for example, invoices.
       */
      name: string | null;

      /**
       * Percent that will be taken off the subtotal before tax (after all other discounts and promotions) of any invoice to which the margin is applied.
       */
      percent_off: number;

      /**
       * Time at which the object was last updated. Measured in seconds since the Unix epoch.
       */
      updated: number;
    }
  }
}
