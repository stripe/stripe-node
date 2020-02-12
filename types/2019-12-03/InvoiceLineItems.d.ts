declare module 'stripe' {
  namespace Stripe {
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

      /**
       * The ID of the [invoice item](https://stripe.com/docs/api/invoiceitems) associated with this line item if any.
       */
      invoice_item?: string;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Note that for line items with `type=subscription` this will reflect the metadata of the subscription that caused the line item to be created.
       */
      metadata: Metadata;

      period: InvoiceLineItem.Period;

      /**
       * The plan of the subscription, if the line item is a subscription or a proration.
       */
      plan: Stripe.Plan | null;

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
      tax_rates?: Array<Stripe.TaxRate> | null;

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
        tax_rate: string | Stripe.TaxRate;
      }

      type Type = 'invoiceitem' | 'subscription';
    }

    interface InvoiceLineItemListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface InvoiceLineItemListUpcomingParams extends PaginationParams {
      /**
       * The code of the coupon to apply. If `subscription` or `subscription_items` is provided, the invoice returned will preview updating or creating a subscription with that coupon. Otherwise, it will preview applying that coupon to the customer for the next upcoming invoice from among the customer's subscriptions. The invoice can be previewed without a coupon by passing this value as an empty string.
       */
      coupon?: string;

      /**
       * The identifier of the customer whose upcoming invoice you'd like to retrieve.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * List of invoice items to add or update in the upcoming invoice preview.
       */
      invoice_items?: Array<InvoiceLineItemListUpcomingParams.InvoiceItem>;

      /**
       * The identifier of the unstarted schedule whose upcoming invoice you'd like to retrieve. Cannot be used with subscription or subscription fields.
       */
      schedule?: string;

      /**
       * The identifier of the subscription for which you'd like to retrieve the upcoming invoice. If not provided, but a `subscription_items` is provided, you will preview creating a subscription with those items. If neither `subscription` nor `subscription_items` is provided, you will retrieve the next upcoming invoice from among the customer's subscriptions.
       */
      subscription?: string;

      /**
       * For new subscriptions, a future timestamp to anchor the subscription's [billing cycle](https://stripe.com/docs/subscriptions/billing-cycle). This is used to determine the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. For existing subscriptions, the value can only be set to `now` or `unchanged`.
       */
      subscription_billing_cycle_anchor?:
        | InvoiceLineItemListUpcomingParams.SubscriptionBillingCycleAnchor
        | number;

      /**
       * Timestamp indicating when the subscription should be scheduled to cancel. Will prorate if within the current period and prorations have been enabled using `proration_behavior`.`
       */
      subscription_cancel_at?: number | null;

      /**
       * Boolean indicating whether this subscription should cancel at the end of the current period.
       */
      subscription_cancel_at_period_end?: boolean;

      /**
       * This simulates the subscription being canceled or expired immediately.
       */
      subscription_cancel_now?: boolean;

      /**
       * If provided, the invoice returned will preview updating or creating a subscription with these default tax rates. The default tax rates will apply to any line item that does not have `tax_rates` set.
       */
      subscription_default_tax_rates?: Array<string> | null;

      /**
       * List of subscription items, each with an attached plan.
       */
      subscription_items?: Array<
        InvoiceLineItemListUpcomingParams.SubscriptionItem
      >;

      /**
       * If previewing an update to a subscription, this decides whether the preview will show the result of applying prorations or not. If set, one of `subscription_items` or `subscription`, and one of `subscription_items` or `subscription_trial_end` are required.
       */
      subscription_prorate?: boolean;

      /**
       * Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. Valid values are `create_prorations`, `none`, or `always_invoice`.
       *
       * Passing `create_prorations` will cause proration invoice items to be created when applicable. These proration items will only be invoiced immediately under [certain conditions](https://stripe.com/docs/subscriptions/upgrading-downgrading#immediate-payment). In order to always invoice immediately for prorations, pass `always_invoice`.
       *
       * Prorations can be disabled by passing `none`.
       */
      subscription_proration_behavior?: InvoiceLineItemListUpcomingParams.SubscriptionProrationBehavior;

      /**
       * If previewing an update to a subscription, and doing proration, `subscription_proration_date` forces the proration to be calculated as though the update was done at the specified time. The time given must be within the current subscription period, and cannot be before the subscription was on its current plan. If set, `subscription`, and one of `subscription_items`, or `subscription_trial_end` are required. Also, `subscription_proration` cannot be set to false.
       */
      subscription_proration_date?: number;

      /**
       * Date a subscription is intended to start (can be future or past)
       */
      subscription_start_date?: number;

      /**
       * If provided, the invoice returned will preview updating or creating a subscription with that tax percent. If set, one of `subscription_items` or `subscription` is required. This field has been deprecated and will be removed in a future API version, for further information view the [migration docs](https://stripe.com/docs/billing/migration/taxes) for `tax_rates`.
       */
      subscription_tax_percent?: number;

      /**
       * If provided, the invoice returned will preview updating or creating a subscription with that trial end. If set, one of `subscription_items` or `subscription` is required.
       */
      subscription_trial_end?: 'now' | number;

      /**
       * Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `subscription_trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `subscription_trial_end` is not allowed.
       */
      subscription_trial_from_plan?: boolean;
    }

    namespace InvoiceLineItemListUpcomingParams {
      interface InvoiceItem {
        /**
         * The integer amount in **%s** of previewed invoice item.
         */
        amount?: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). Only applicable to new invoice items.
         */
        currency?: string;

        /**
         * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
         */
        description?: string;

        /**
         * Explicitly controls whether discounts apply to this invoice item. Defaults to true, except for negative invoice items.
         */
        discountable?: boolean;

        /**
         * The ID of the invoice item to update in preview. If not specified, a new invoice item will be added to the preview of the upcoming invoice.
         */
        invoiceitem?: string;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;

        /**
         * The period associated with this invoice item.
         */
        period?: InvoiceItem.Period;

        /**
         * Non-negative integer. The quantity of units for the invoice item.
         */
        quantity?: number;

        tax_rates?: Array<string> | null;

        /**
         * The integer unit amount in **%s** of the charge to be applied to the upcoming invoice. This unit_amount will be multiplied by the quantity to get the full amount. If you want to apply a credit to the customer's account, pass a negative unit_amount.
         */
        unit_amount?: number;

        /**
         * Same as `unit_amount`, but accepts a decimal string with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
         */
        unit_amount_decimal?: string;
      }

      namespace InvoiceItem {
        interface Period {
          /**
           * The end of the period, which must be greater than or equal to the start.
           */
          end: number;

          /**
           * The start of the period.
           */
          start: number;
        }
      }

      type SubscriptionBillingCycleAnchor = 'now' | 'unchanged';

      interface SubscriptionItem {
        /**
         * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
         */
        billing_thresholds?: SubscriptionItem.BillingThresholds | null;

        /**
         * Delete all usage for a given subscription item. Allowed only when `deleted` is set to `true` and the current plan's `usage_type` is `metered`.
         */
        clear_usage?: boolean;

        /**
         * A flag that, if set to `true`, will delete the specified item.
         */
        deleted?: boolean;

        /**
         * Subscription item to update.
         */
        id?: string;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;

        /**
         * Plan ID for this item, as a string.
         */
        plan?: string;

        /**
         * Quantity for this item.
         */
        quantity?: number;

        /**
         * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
         */
        tax_rates?: Array<string> | null;
      }

      namespace SubscriptionItem {
        interface BillingThresholds {
          /**
           * Usage threshold that triggers the subscription to advance to a new billing period
           */
          usage_gte: number;
        }
      }

      type SubscriptionProrationBehavior =
        | 'always_invoice'
        | 'create_prorations'
        | 'none';
    }
  }
}
