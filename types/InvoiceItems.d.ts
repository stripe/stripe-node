// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The DeletedInvoiceItem object.
     */
    interface DeletedInvoiceItem {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'invoiceitem';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    /**
     * Invoice Items represent the component lines of an [invoice](https://docs.stripe.com/api/invoices). When you create an invoice item with an `invoice` field, it is attached to the specified invoice and included as [an invoice line item](https://docs.stripe.com/api/invoices/line_item) within [invoice.lines](https://docs.stripe.com/api/invoices/object#invoice_object-lines).
     *
     * Invoice Items can be created before you are ready to actually send the invoice. This can be particularly useful when combined
     * with a [subscription](https://docs.stripe.com/api/subscriptions). Sometimes you want to add a charge or credit to a customer, but actually charge
     * or credit the customer's card only at the end of a regular billing cycle. This is useful for combining several charges
     * (to minimize per-transaction fees), or for having Stripe tabulate your usage-based billing totals.
     *
     * Related guides: [Integrate with the Invoicing API](https://docs.stripe.com/invoicing/integration), [Subscription Invoices](https://docs.stripe.com/billing/invoices/subscription#adding-upcoming-invoice-items).
     */
    interface InvoiceItem {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'invoiceitem';

      /**
       * Amount (in the `currency` specified) of the invoice item. This should always be equal to `unit_amount * quantity`.
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * The ID of the customer to bill for this invoice item.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer;

      /**
       * The ID of the account to bill for this invoice item.
       */
      customer_account: string | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      date: number;

      /**
       * Always true for a deleted object
       */
      deleted?: void;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description: string | null;

      /**
       * If true, discounts will apply to this invoice item. Always false for prorations.
       */
      discountable: boolean;

      /**
       * The discounts which apply to the invoice item. Item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
       */
      discounts: Array<string | Stripe.Discount> | null;

      /**
       * The ID of the invoice this invoice item belongs to.
       */
      invoice: string | Stripe.Invoice | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The margins which apply to the invoice item. When set, the `default_margins` on the invoice do not apply to this invoice item.
       */
      margins?: Array<string | Stripe.Margin> | null;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * The amount after discounts, but before credits and taxes. This field is `null` for `discountable=true` items.
       */
      net_amount?: number;

      /**
       * The parent that generated this invoice item.
       */
      parent: InvoiceItem.Parent | null;

      period: InvoiceItem.Period;

      /**
       * The pricing information of the invoice item.
       */
      pricing: InvoiceItem.Pricing | null;

      /**
       * Whether the invoice item was created automatically as a proration adjustment when the customer switched plans.
       */
      proration: boolean;

      proration_details?: InvoiceItem.ProrationDetails;

      /**
       * Quantity of units for the invoice item. If the invoice item is a proration, the quantity of the subscription that the proration was computed for.
       */
      quantity: number;

      /**
       * The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item.
       */
      tax_rates: Array<Stripe.TaxRate> | null;

      /**
       * ID of the test clock this invoice item belongs to.
       */
      test_clock: string | Stripe.TestHelpers.TestClock | null;
    }

    namespace InvoiceItem {
      interface Parent {
        /**
         * Details about the license fee subscription that generated this invoice item
         */
        license_fee_subscription_details?: Parent.LicenseFeeSubscriptionDetails | null;

        /**
         * Details about the rate card subscription that generated this invoice item
         */
        rate_card_subscription_details?: Parent.RateCardSubscriptionDetails | null;

        /**
         * Details about the subscription schedule that generated this invoice item
         */
        schedule_details?: Parent.ScheduleDetails | null;

        /**
         * Details about the subscription that generated this invoice item
         */
        subscription_details: Parent.SubscriptionDetails | null;

        /**
         * The type of parent that generated this invoice item
         */
        type: Parent.Type;
      }

      namespace Parent {
        interface LicenseFeeSubscriptionDetails {
          /**
           * The license fee subscription that generated this invoice item
           */
          license_fee_subscription: string;

          /**
           * The license fee version that generated this invoice item
           */
          license_fee_version: string;

          /**
           * The pricing plan subscription that manages the license fee subscription
           */
          pricing_plan_subscription: string;

          /**
           * The pricing plan version at the time this invoice item was generated
           */
          pricing_plan_version: string;
        }

        interface RateCardSubscriptionDetails {
          /**
           * The pricing plan subscription that manages the rate card subscription
           */
          pricing_plan_subscription?: string | null;

          /**
           * The pricing plan version at the time this invoice item was generated
           */
          pricing_plan_version?: string | null;

          /**
           * The rate card subscription that generated this invoice item
           */
          rate_card_subscription: string;

          /**
           * The rate card version that generated this invoice item
           */
          rate_card_version: string;
        }

        interface ScheduleDetails {
          /**
           * The subscription schedule that generated this invoice item
           */
          schedule: string;
        }

        interface SubscriptionDetails {
          /**
           * The subscription that generated this invoice item
           */
          subscription: string;

          /**
           * The subscription item that generated this invoice item
           */
          subscription_item?: string;
        }

        type Type =
          | 'license_fee_subscription_details'
          | 'rate_card_subscription_details'
          | 'schedule_details'
          | 'subscription_details';
      }

      interface Period {
        /**
         * The end of the period, which must be greater than or equal to the start. This value is inclusive.
         */
        end: number;

        /**
         * The start of the period. This value is inclusive.
         */
        start: number;
      }

      interface Pricing {
        license_fee_details?: Pricing.LicenseFeeDetails;

        price_details?: Pricing.PriceDetails;

        rate_card_rate_details?: Pricing.RateCardRateDetails;

        /**
         * The type of the pricing details.
         */
        type: Pricing.Type;

        /**
         * The unit amount (in the `currency` specified) of the item which contains a decimal value with at most 12 decimal places.
         */
        unit_amount_decimal: string | null;
      }

      namespace Pricing {
        interface LicenseFeeDetails {
          /**
           * The ID of the license fee this item is associated with
           */
          license_fee: string;

          /**
           * The version of the license fee this item is associated with
           */
          license_fee_version: string;

          /**
           * The ID of the licensed item this item is associated with
           */
          licensed_item: string;
        }

        interface PriceDetails {
          /**
           * The ID of the price this item is associated with.
           */
          price: string;

          /**
           * The ID of the product this item is associated with.
           */
          product: string;
        }

        interface RateCardRateDetails {
          /**
           * The ID of billable item this item is associated with
           */
          metered_item: string;

          /**
           * The ID of the rate card this item is associated with
           */
          rate_card: string;

          /**
           * The ID of the rate card rate this item is associated with
           */
          rate_card_rate: string;
        }

        type Type =
          | 'license_fee_details'
          | 'price_details'
          | 'rate_card_rate_details';
      }

      interface ProrationDetails {
        /**
         * Discount amounts applied when the proration was created.
         */
        discount_amounts: Array<ProrationDetails.DiscountAmount>;
      }

      namespace ProrationDetails {
        interface DiscountAmount {
          /**
           * The amount, in cents (or local equivalent), of the discount.
           */
          amount: number;

          /**
           * The discount that was applied to get this discount amount.
           */
          discount: string | Stripe.Discount | Stripe.DeletedDiscount;
        }
      }
    }
  }
}
