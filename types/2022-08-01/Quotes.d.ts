// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A Quote is a way to model prices that you'd like to provide to a customer.
     * Once accepted, it will automatically create an invoice, subscription or subscription schedule.
     */
    interface Quote {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'quote';

      /**
       * Total before any discounts or taxes are applied.
       */
      amount_subtotal: number;

      /**
       * Total after discounts and taxes are applied.
       */
      amount_total: number;

      /**
       * ID of the Connect Application that created the quote.
       */
      application:
        | string
        | Stripe.Application
        | Stripe.DeletedApplication
        | null;

      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. Only applicable if there are no line items with recurring prices on the quote.
       */
      application_fee_amount: number | null;

      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. Only applicable if there are line items with recurring prices on the quote.
       */
      application_fee_percent: number | null;

      automatic_tax: Quote.AutomaticTax;

      /**
       * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or on finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
       */
      collection_method: Quote.CollectionMethod;

      computed: Quote.Computed;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string | null;

      /**
       * The customer which this quote belongs to. A customer is required before finalizing the quote. Once specified, it cannot be changed.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

      /**
       * The tax rates applied to this quote.
       */
      default_tax_rates?: Array<string | Stripe.TaxRate>;

      /**
       * A description that will be displayed on the quote PDF.
       */
      description: string | null;

      /**
       * The discounts applied to this quote.
       */
      discounts: Array<string | Stripe.Discount>;

      /**
       * The date on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
       */
      expires_at: number;

      /**
       * A footer that will be displayed on the quote PDF.
       */
      footer: string | null;

      /**
       * Details of the quote that was cloned. See the [cloning documentation](https://stripe.com/docs/quotes/clone) for more details.
       */
      from_quote: Quote.FromQuote | null;

      /**
       * A header that will be displayed on the quote PDF.
       */
      header: string | null;

      /**
       * The invoice that was created from this quote.
       */
      invoice: string | Stripe.Invoice | Stripe.DeletedInvoice | null;

      /**
       * All invoices will be billed using the specified settings.
       */
      invoice_settings: Quote.InvoiceSettings | null;

      /**
       * A list of items the customer is being quoted for.
       */
      line_items?: ApiList<Stripe.LineItem>;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * A unique number that identifies this particular quote. This number is assigned once the quote is [finalized](https://stripe.com/docs/quotes/overview#finalize).
       */
      number: string | null;

      /**
       * The account on behalf of which to charge. See the [Connect documentation](https://support.stripe.com/questions/sending-invoices-on-behalf-of-connected-accounts) for details.
       */
      on_behalf_of: string | Stripe.Account | null;

      /**
       * The status of the quote.
       */
      status: Quote.Status;

      status_transitions: Quote.StatusTransitions;

      /**
       * The subscription that was created or updated from this quote.
       */
      subscription: string | Stripe.Subscription | null;

      subscription_data: Quote.SubscriptionData;

      /**
       * The subscription schedule that was created or updated from this quote.
       */
      subscription_schedule: string | Stripe.SubscriptionSchedule | null;

      /**
       * ID of the test clock this quote belongs to.
       */
      test_clock: string | Stripe.TestHelpers.TestClock | null;

      total_details: Quote.TotalDetails;

      /**
       * The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the invoices.
       */
      transfer_data: Quote.TransferData | null;
    }

    namespace Quote {
      interface AutomaticTax {
        /**
         * Automatically calculate taxes
         */
        enabled: boolean;

        /**
         * The status of the most recent automated tax calculation for this quote.
         */
        status: AutomaticTax.Status | null;
      }

      namespace AutomaticTax {
        type Status = 'complete' | 'failed' | 'requires_location_inputs';
      }

      type CollectionMethod = 'charge_automatically' | 'send_invoice';

      interface Computed {
        /**
         * The definitive totals and line items the customer will be charged on a recurring basis. Takes into account the line items with recurring prices and discounts with `duration=forever` coupons only. Defaults to `null` if no inputted line items with recurring prices.
         */
        recurring: Computed.Recurring | null;

        upfront: Computed.Upfront;
      }

      namespace Computed {
        interface Recurring {
          /**
           * Total before any discounts or taxes are applied.
           */
          amount_subtotal: number;

          /**
           * Total after discounts and taxes are applied.
           */
          amount_total: number;

          /**
           * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
           */
          interval: Recurring.Interval;

          /**
           * The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
           */
          interval_count: number;

          total_details: Recurring.TotalDetails;
        }

        namespace Recurring {
          type Interval = 'day' | 'month' | 'week' | 'year';

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
                 * Related guide: [Applying Discounts to Subscriptions](https://stripe.com/docs/billing/subscriptions/discounts).
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
                 * Related guide: [Tax Rates](https://stripe.com/docs/billing/taxes/tax-rates).
                 */
                rate: Stripe.TaxRate;
              }
            }
          }
        }

        interface Upfront {
          /**
           * Total before any discounts or taxes are applied.
           */
          amount_subtotal: number;

          /**
           * Total after discounts and taxes are applied.
           */
          amount_total: number;

          /**
           * The line items that will appear on the next invoice after this quote is accepted. This does not include pending invoice items that exist on the customer but may still be included in the next invoice.
           */
          line_items?: ApiList<Stripe.LineItem>;

          total_details: Upfront.TotalDetails;
        }

        namespace Upfront {
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
                 * Related guide: [Applying Discounts to Subscriptions](https://stripe.com/docs/billing/subscriptions/discounts).
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
                 * Related guide: [Tax Rates](https://stripe.com/docs/billing/taxes/tax-rates).
                 */
                rate: Stripe.TaxRate;
              }
            }
          }
        }
      }

      interface FromQuote {
        /**
         * Whether this quote is a revision of a different quote.
         */
        is_revision: boolean;

        /**
         * The quote that was cloned.
         */
        quote: string | Stripe.Quote;
      }

      interface InvoiceSettings {
        /**
         * Number of days within which a customer must pay invoices generated by this quote. This value will be `null` for quotes where `collection_method=charge_automatically`.
         */
        days_until_due: number | null;
      }

      type Status = 'accepted' | 'canceled' | 'draft' | 'open';

      interface StatusTransitions {
        /**
         * The time that the quote was accepted. Measured in seconds since Unix epoch.
         */
        accepted_at: number | null;

        /**
         * The time that the quote was canceled. Measured in seconds since Unix epoch.
         */
        canceled_at: number | null;

        /**
         * The time that the quote was finalized. Measured in seconds since Unix epoch.
         */
        finalized_at: number | null;
      }

      interface SubscriptionData {
        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription.
         */
        description: string | null;

        /**
         * When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. This date is ignored if it is in the past when the quote is accepted. Measured in seconds since the Unix epoch.
         */
        effective_date: number | null;

        /**
         * Integer representing the number of trial period days before the customer is charged for the first time.
         */
        trial_period_days: number | null;
      }

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
             * Related guide: [Applying Discounts to Subscriptions](https://stripe.com/docs/billing/subscriptions/discounts).
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
             * Related guide: [Tax Rates](https://stripe.com/docs/billing/taxes/tax-rates).
             */
            rate: Stripe.TaxRate;
          }
        }
      }

      interface TransferData {
        /**
         * The amount in %s that will be transferred to the destination account when the invoice is paid. By default, the entire amount is transferred to the destination.
         */
        amount: number | null;

        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the destination account. By default, the entire amount will be transferred to the destination.
         */
        amount_percent: number | null;

        /**
         * The account where funds from the payment will be transferred to upon payment success.
         */
        destination: string | Stripe.Account;
      }
    }

    interface QuoteCreateParams {
      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. There cannot be any line items with recurring prices when using this field.
       */
      application_fee_amount?: Stripe.Emptyable<number>;

      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
       */
      application_fee_percent?: Stripe.Emptyable<number>;

      /**
       * Settings for automatic tax lookup for this quote and resulting invoices and subscriptions.
       */
      automatic_tax?: QuoteCreateParams.AutomaticTax;

      /**
       * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or at invoice finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
       */
      collection_method?: QuoteCreateParams.CollectionMethod;

      /**
       * The customer for which this quote belongs to. A customer is required before finalizing the quote. Once specified, it cannot be changed.
       */
      customer?: string;

      /**
       * The tax rates that will apply to any line item that does not have `tax_rates` set.
       */
      default_tax_rates?: Stripe.Emptyable<Array<string>>;

      /**
       * A description that will be displayed on the quote PDF. If no value is passed, the default description configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
       */
      description?: string;

      /**
       * The discounts applied to the quote. You can only set up to one discount.
       */
      discounts?: Stripe.Emptyable<Array<QuoteCreateParams.Discount>>;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch. If no value is passed, the default expiration date configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
       */
      expires_at?: number;

      /**
       * A footer that will be displayed on the quote PDF. If no value is passed, the default footer configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
       */
      footer?: string;

      /**
       * Clone an existing quote. The new quote will be created in `status=draft`. When using this parameter, you cannot specify any other parameters except for `expires_at`.
       */
      from_quote?: QuoteCreateParams.FromQuote;

      /**
       * A header that will be displayed on the quote PDF. If no value is passed, the default header configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
       */
      header?: string;

      /**
       * All invoices will be billed using the specified settings.
       */
      invoice_settings?: QuoteCreateParams.InvoiceSettings;

      /**
       * A list of line items the customer is being quoted for. Each line item includes information about the product, the quantity, and the resulting cost.
       */
      line_items?: Array<QuoteCreateParams.LineItem>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * The account on behalf of which to charge.
       */
      on_behalf_of?: Stripe.Emptyable<string>;

      /**
       * When creating a subscription or subscription schedule, the specified configuration data will be used. There must be at least one line item with a recurring price for a subscription or subscription schedule to be created. A subscription schedule is created if `subscription_data[effective_date]` is present and in the future, otherwise a subscription is created.
       */
      subscription_data?: QuoteCreateParams.SubscriptionData;

      /**
       * ID of the test clock to attach to the quote.
       */
      test_clock?: string;

      /**
       * The data with which to automatically create a Transfer for each of the invoices.
       */
      transfer_data?: Stripe.Emptyable<QuoteCreateParams.TransferData>;
    }

    namespace QuoteCreateParams {
      interface AutomaticTax {
        /**
         * Controls whether Stripe will automatically compute tax on the resulting invoices or subscriptions as well as the quote itself.
         */
        enabled: boolean;
      }

      type CollectionMethod = 'charge_automatically' | 'send_invoice';

      interface Discount {
        /**
         * ID of the coupon to create a new discount for.
         */
        coupon?: string;

        /**
         * ID of an existing discount on the object (or one of its ancestors) to reuse.
         */
        discount?: string;
      }

      interface FromQuote {
        /**
         * Whether this quote is a revision of the previous quote.
         */
        is_revision?: boolean;

        /**
         * The `id` of the quote that will be cloned.
         */
        quote: string;
      }

      interface InvoiceSettings {
        /**
         * Number of days within which a customer must pay the invoice generated by this quote. This value will be `null` for quotes where `collection_method=charge_automatically`.
         */
        days_until_due?: number;
      }

      interface LineItem {
        /**
         * The ID of the price object. One of `price` or `price_data` is required.
         */
        price?: string;

        /**
         * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price` or `price_data` is required.
         */
        price_data?: LineItem.PriceData;

        /**
         * The quantity of the line item.
         */
        quantity?: number;

        /**
         * The tax rates which apply to the line item. When set, the `default_tax_rates` on the quote do not apply to this line item.
         */
        tax_rates?: Stripe.Emptyable<Array<string>>;
      }

      namespace LineItem {
        interface PriceData {
          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * The ID of the product that this price will belong to.
           */
          product: string;

          /**
           * The recurring components of a price such as `interval` and `interval_count`.
           */
          recurring?: PriceData.Recurring;

          /**
           * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
           */
          tax_behavior?: PriceData.TaxBehavior;

          /**
           * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
           */
          unit_amount?: number;

          /**
           * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
           */
          unit_amount_decimal?: string;
        }

        namespace PriceData {
          interface Recurring {
            /**
             * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
             */
            interval: Recurring.Interval;

            /**
             * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
             */
            interval_count?: number;
          }

          namespace Recurring {
            type Interval = 'day' | 'month' | 'week' | 'year';
          }

          type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
      }

      interface SubscriptionData {
        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription.
         */
        description?: string;

        /**
         * When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. When updating a subscription, the date of which the subscription will be updated using a subscription schedule. The special value `current_period_end` can be provided to update a subscription at the end of its current period. The `effective_date` is ignored if it is in the past when the quote is accepted.
         */
        effective_date?: Stripe.Emptyable<'current_period_end' | number>;

        /**
         * Integer representing the number of trial period days before the customer is charged for the first time.
         */
        trial_period_days?: Stripe.Emptyable<number>;
      }

      interface TransferData {
        /**
         * The amount that will be transferred automatically when the invoice is paid. If no amount is set, the full amount is transferred. There cannot be any line items with recurring prices when using this field.
         */
        amount?: number;

        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the destination account. By default, the entire amount is transferred to the destination. There must be at least 1 line item with a recurring price to use this field.
         */
        amount_percent?: number;

        /**
         * ID of an existing, connected Stripe account.
         */
        destination: string;
      }
    }

    interface QuoteRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface QuoteUpdateParams {
      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. There cannot be any line items with recurring prices when using this field.
       */
      application_fee_amount?: Stripe.Emptyable<number>;

      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
       */
      application_fee_percent?: Stripe.Emptyable<number>;

      /**
       * Settings for automatic tax lookup for this quote and resulting invoices and subscriptions.
       */
      automatic_tax?: QuoteUpdateParams.AutomaticTax;

      /**
       * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or at invoice finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
       */
      collection_method?: QuoteUpdateParams.CollectionMethod;

      /**
       * The customer for which this quote belongs to. A customer is required before finalizing the quote. Once specified, it cannot be changed.
       */
      customer?: string;

      /**
       * The tax rates that will apply to any line item that does not have `tax_rates` set.
       */
      default_tax_rates?: Stripe.Emptyable<Array<string>>;

      /**
       * A description that will be displayed on the quote PDF.
       */
      description?: string;

      /**
       * The discounts applied to the quote. You can only set up to one discount.
       */
      discounts?: Stripe.Emptyable<Array<QuoteUpdateParams.Discount>>;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
       */
      expires_at?: number;

      /**
       * A footer that will be displayed on the quote PDF.
       */
      footer?: string;

      /**
       * A header that will be displayed on the quote PDF.
       */
      header?: string;

      /**
       * All invoices will be billed using the specified settings.
       */
      invoice_settings?: QuoteUpdateParams.InvoiceSettings;

      /**
       * A list of line items the customer is being quoted for. Each line item includes information about the product, the quantity, and the resulting cost.
       */
      line_items?: Array<QuoteUpdateParams.LineItem>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * The account on behalf of which to charge.
       */
      on_behalf_of?: Stripe.Emptyable<string>;

      /**
       * When creating a subscription or subscription schedule, the specified configuration data will be used. There must be at least one line item with a recurring price for a subscription or subscription schedule to be created. A subscription schedule is created if `subscription_data[effective_date]` is present and in the future, otherwise a subscription is created.
       */
      subscription_data?: QuoteUpdateParams.SubscriptionData;

      /**
       * The data with which to automatically create a Transfer for each of the invoices.
       */
      transfer_data?: Stripe.Emptyable<QuoteUpdateParams.TransferData>;
    }

    namespace QuoteUpdateParams {
      interface AutomaticTax {
        /**
         * Controls whether Stripe will automatically compute tax on the resulting invoices or subscriptions as well as the quote itself.
         */
        enabled: boolean;
      }

      type CollectionMethod = 'charge_automatically' | 'send_invoice';

      interface Discount {
        /**
         * ID of the coupon to create a new discount for.
         */
        coupon?: string;

        /**
         * ID of an existing discount on the object (or one of its ancestors) to reuse.
         */
        discount?: string;
      }

      interface InvoiceSettings {
        /**
         * Number of days within which a customer must pay the invoice generated by this quote. This value will be `null` for quotes where `collection_method=charge_automatically`.
         */
        days_until_due?: number;
      }

      interface LineItem {
        /**
         * The ID of an existing line item on the quote.
         */
        id?: string;

        /**
         * The ID of the price object. One of `price` or `price_data` is required.
         */
        price?: string;

        /**
         * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price` or `price_data` is required.
         */
        price_data?: LineItem.PriceData;

        /**
         * The quantity of the line item.
         */
        quantity?: number;

        /**
         * The tax rates which apply to the line item. When set, the `default_tax_rates` on the quote do not apply to this line item.
         */
        tax_rates?: Stripe.Emptyable<Array<string>>;
      }

      namespace LineItem {
        interface PriceData {
          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * The ID of the product that this price will belong to.
           */
          product: string;

          /**
           * The recurring components of a price such as `interval` and `interval_count`.
           */
          recurring?: PriceData.Recurring;

          /**
           * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
           */
          tax_behavior?: PriceData.TaxBehavior;

          /**
           * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
           */
          unit_amount?: number;

          /**
           * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
           */
          unit_amount_decimal?: string;
        }

        namespace PriceData {
          interface Recurring {
            /**
             * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
             */
            interval: Recurring.Interval;

            /**
             * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
             */
            interval_count?: number;
          }

          namespace Recurring {
            type Interval = 'day' | 'month' | 'week' | 'year';
          }

          type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
      }

      interface SubscriptionData {
        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription.
         */
        description?: string;

        /**
         * When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. When updating a subscription, the date of which the subscription will be updated using a subscription schedule. The special value `current_period_end` can be provided to update a subscription at the end of its current period. The `effective_date` is ignored if it is in the past when the quote is accepted.
         */
        effective_date?: Stripe.Emptyable<'current_period_end' | number>;

        /**
         * Integer representing the number of trial period days before the customer is charged for the first time.
         */
        trial_period_days?: Stripe.Emptyable<number>;
      }

      interface TransferData {
        /**
         * The amount that will be transferred automatically when the invoice is paid. If no amount is set, the full amount is transferred. There cannot be any line items with recurring prices when using this field.
         */
        amount?: number;

        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the destination account. By default, the entire amount is transferred to the destination. There must be at least 1 line item with a recurring price to use this field.
         */
        amount_percent?: number;

        /**
         * ID of an existing, connected Stripe account.
         */
        destination: string;
      }
    }

    interface QuoteListParams extends PaginationParams {
      /**
       * The ID of the customer whose quotes will be retrieved.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The status of the quote.
       */
      status?: QuoteListParams.Status;

      /**
       * Provides a list of quotes that are associated with the specified test clock. The response will not include quotes with test clocks if this and the customer parameter is not set.
       */
      test_clock?: string;
    }

    namespace QuoteListParams {
      type Status = 'accepted' | 'canceled' | 'draft' | 'open';
    }

    interface QuoteAcceptParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface QuoteCancelParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface QuoteFinalizeQuoteParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
       */
      expires_at?: number;
    }

    interface QuoteListComputedUpfrontLineItemsParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface QuoteListLineItemsParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface QuotePdfParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class QuotesResource {
      /**
       * A quote models prices and services for a customer. Default options for header, description, footer, and expires_at can be set in the dashboard via the [quote template](https://dashboard.stripe.com/settings/billing/quote).
       */
      create(
        params?: QuoteCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;
      create(options?: RequestOptions): Promise<Stripe.Response<Stripe.Quote>>;

      /**
       * Retrieves the quote with the given ID.
       */
      retrieve(
        id: string,
        params?: QuoteRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;

      /**
       * A quote models prices and services for a customer.
       */
      update(
        id: string,
        params?: QuoteUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;

      /**
       * Returns a list of your quotes.
       */
      list(
        params?: QuoteListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Quote>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Quote>;

      /**
       * Accepts the specified quote.
       */
      accept(
        id: string,
        params?: QuoteAcceptParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;
      accept(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;

      /**
       * Cancels the quote.
       */
      cancel(
        id: string,
        params?: QuoteCancelParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;
      cancel(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;

      /**
       * Finalizes the quote.
       */
      finalizeQuote(
        id: string,
        params?: QuoteFinalizeQuoteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;
      finalizeQuote(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;

      /**
       * When retrieving a quote, there is an includable [computed.upfront.line_items](https://stripe.com/docs/api/quotes/object#quote_object-computed-upfront-line_items) property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of upfront line items.
       */
      listComputedUpfrontLineItems(
        id: string,
        params?: QuoteListComputedUpfrontLineItemsParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.LineItem>;
      listComputedUpfrontLineItems(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.LineItem>;

      /**
       * When retrieving a quote, there is an includable line_items property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
       */
      listLineItems(
        id: string,
        params?: QuoteListLineItemsParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.LineItem>;
      listLineItems(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.LineItem>;

      /**
       * Download the PDF for a finalized quote
       */
      pdf(
        id: string,
        params?: QuotePdfParams,
        options?: RequestOptions
      ): Promise<StripeStreamResponse>;
      pdf(id: string, options?: RequestOptions): Promise<StripeStreamResponse>;
    }
  }
}
