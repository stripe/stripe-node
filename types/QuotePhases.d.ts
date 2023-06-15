// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A quote phase describes the line items, coupons, and trialing status of a subscription for a predefined time period.
     */
    interface QuotePhase {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'quote_phase';

      /**
       * Total before any discounts or taxes are applied.
       */
      amount_subtotal: number;

      /**
       * Total after discounts and taxes are applied.
       */
      amount_total: number;

      /**
       * If set to `reset`, the billing_cycle_anchor of the subscription is set to the start of the phase when entering the phase. If unset, then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
       */
      billing_cycle_anchor: 'reset' | null;

      /**
       * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
       */
      collection_method: QuotePhase.CollectionMethod | null;

      /**
       * The default tax rates to apply to the subscription during this phase of the quote.
       */
      default_tax_rates?: Array<string | Stripe.TaxRate>;

      /**
       * The stackable discounts that will be applied to the subscription on this phase. Subscription item discounts are applied before subscription discounts.
       */
      discounts: Array<string | Stripe.Discount>;

      /**
       * The end of this phase of the quote
       */
      end_date: number | null;

      /**
       * The invoice settings applicable during this phase.
       */
      invoice_settings: QuotePhase.InvoiceSettings | null;

      /**
       * Integer representing the multiplier applied to the price interval. For example, `iterations=2` applied to a price with `interval=month` and `interval_count=3` results in a phase of duration `2 * 3 months = 6 months`.
       */
      iterations: number | null;

      /**
       * A list of items the customer is being quoted for.
       */
      line_items?: ApiList<Stripe.LineItem>;

      /**
       * If the quote will prorate when transitioning to this phase. Possible values are `create_prorations` and `none`.
       */
      proration_behavior: QuotePhase.ProrationBehavior;

      total_details: QuotePhase.TotalDetails;

      /**
       * If set to true the entire phase is counted as a trial and the customer will not be charged for any recurring fees.
       */
      trial: boolean | null;

      /**
       * When the trial ends within the phase.
       */
      trial_end: number | null;
    }

    namespace QuotePhase {
      type CollectionMethod = 'charge_automatically' | 'send_invoice';

      interface InvoiceSettings {
        /**
         * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
         */
        days_until_due: number | null;
      }

      type ProrationBehavior = 'always_invoice' | 'create_prorations' | 'none';

      interface TotalDetails {
        /**
         * This is the sum of all the discounts.
         */
        amount_discount: number;

        /**
         * This is the sum of all the shipping amounts.
         */
        amount_shipping: number | null;

        /**
         * This is the sum of all the tax amounts.
         */
        amount_tax: number;

        breakdown?: TotalDetails.Breakdown;
      }

      namespace TotalDetails {
        interface Breakdown {
          /**
           * The aggregated discounts.
           */
          discounts: Array<Breakdown.Discount>;

          /**
           * The aggregated tax amounts by rate.
           */
          taxes: Array<Breakdown.Tax>;
        }

        namespace Breakdown {
          interface Discount {
            /**
             * The amount discounted.
             */
            amount: number;

            /**
             * A discount represents the actual application of a [coupon](https://stripe.com/docs/api#coupons) or [promotion code](https://stripe.com/docs/api#promotion_codes).
             * It contains information about when the discount began, when it will end, and what it is applied to.
             *
             * Related guide: [Applying discounts to subscriptions](https://stripe.com/docs/billing/subscriptions/discounts)
             */
            discount: Stripe.Discount;
          }

          interface Tax {
            /**
             * Amount of tax applied for this rate.
             */
            amount: number;

            /**
             * Tax rates can be applied to [invoices](https://stripe.com/docs/billing/invoices/tax-rates), [subscriptions](https://stripe.com/docs/billing/subscriptions/taxes) and [Checkout Sessions](https://stripe.com/docs/payments/checkout/set-up-a-subscription#tax-rates) to collect tax.
             *
             * Related guide: [Tax rates](https://stripe.com/docs/billing/taxes/tax-rates)
             */
            rate: Stripe.TaxRate;

            /**
             * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
             */
            taxability_reason: Tax.TaxabilityReason | null;

            /**
             * The amount on which tax is calculated, in %s.
             */
            taxable_amount: number | null;
          }

          namespace Tax {
            type TaxabilityReason =
              | 'customer_exempt'
              | 'excluded_territory'
              | 'jurisdiction_unsupported'
              | 'not_collecting'
              | 'not_subject_to_tax'
              | 'not_supported'
              | 'portion_product_exempt'
              | 'portion_reduced_rated'
              | 'portion_standard_rated'
              | 'product_exempt'
              | 'product_exempt_holiday'
              | 'proportionally_rated'
              | 'reduced_rated'
              | 'reverse_charge'
              | 'standard_rated'
              | 'taxable_basis_reduced'
              | 'vat_exempt'
              | 'zero_rated';
          }
        }
      }
    }
  }
}