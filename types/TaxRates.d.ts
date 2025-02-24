// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Tax rates can be applied to [invoices](https://stripe.com/invoicing/taxes/tax-rates), [subscriptions](https://stripe.com/billing/taxes/tax-rates) and [Checkout Sessions](https://stripe.com/payments/checkout/use-manual-tax-rates) to collect tax.
     *
     * Related guide: [Tax rates](https://stripe.com/billing/taxes/tax-rates)
     */
    interface TaxRate {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'tax_rate';

      /**
       * Defaults to `true`. When set to `false`, this tax rate cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.
       */
      active: boolean;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country: string | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
       */
      description: string | null;

      /**
       * The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page.
       */
      display_name: string;

      /**
       * Actual/effective tax rate percentage out of 100. For tax calculations with automatic_tax[enabled]=true,
       * this percentage reflects the rate actually used to calculate tax based on the product's taxability
       * and whether the user is registered to collect taxes in the corresponding jurisdiction.
       */
      effective_percentage: number | null;

      /**
       * The amount of the tax rate when the `rate_type` is `flat_amount`. Tax rates with `rate_type` `percentage` can vary based on the transaction, resulting in this field being `null`. This field exposes the amount and currency of the flat tax rate.
       */
      flat_amount: TaxRate.FlatAmount | null;

      /**
       * This specifies if the tax rate is inclusive or exclusive.
       */
      inclusive: boolean;

      /**
       * The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer's invoice.
       */
      jurisdiction: string | null;

      /**
       * The level of the jurisdiction that imposes this tax rate. Will be `null` for manually defined tax rates.
       */
      jurisdiction_level: TaxRate.JurisdictionLevel | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * Tax rate percentage out of 100. For tax calculations with automatic_tax[enabled]=true, this percentage includes the statutory tax rate of non-taxable jurisdictions.
       */
      percentage: number;

      /**
       * Indicates the type of tax rate applied to the taxable amount. This value can be `null` when no tax applies to the location.
       */
      rate_type: TaxRate.RateType | null;

      /**
       * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. For example, "NY" for New York, United States.
       */
      state: string | null;

      /**
       * The high-level tax type, such as `vat` or `sales_tax`.
       */
      tax_type: TaxRate.TaxType | null;
    }

    namespace TaxRate {
      interface FlatAmount {
        /**
         * Amount of the tax when the `rate_type` is `flat_amount`. This positive integer represents how much to charge in the smallest currency unit (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
         */
        amount: number;

        /**
         * Three-letter ISO currency code, in lowercase.
         */
        currency: string;
      }

      type JurisdictionLevel =
        | 'city'
        | 'country'
        | 'county'
        | 'district'
        | 'multiple'
        | 'state';

      type RateType = 'flat_amount' | 'percentage';

      type TaxType =
        | 'amusement_tax'
        | 'communications_tax'
        | 'gst'
        | 'hst'
        | 'igst'
        | 'jct'
        | 'lease_tax'
        | 'pst'
        | 'qst'
        | 'retail_delivery_fee'
        | 'rst'
        | 'sales_tax'
        | 'service_tax'
        | 'vat';
    }
  }
}
