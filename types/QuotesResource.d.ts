// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
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
       * List representing phases of the Quote. Each phase can be customized to have different durations, prices, and coupons.
       */
      phases?: Array<QuoteCreateParams.Phase>;

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

        /**
         * Details to determine how long the discount should be applied for.
         */
        discount_end?: Discount.DiscountEnd;
      }

      namespace Discount {
        interface DiscountEnd {
          /**
           * Time span for the redeemed discount.
           */
          duration?: DiscountEnd.Duration;

          /**
           * A precise Unix timestamp for the discount to end. Must be in the future.
           */
          timestamp?: number;

          /**
           * The type of calculation made to determine when the discount ends.
           */
          type: DiscountEnd.Type;
        }

        namespace DiscountEnd {
          interface Duration {
            /**
             * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
             */
            interval: Duration.Interval;

            /**
             * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
             */
            interval_count: number;
          }

          namespace Duration {
            type Interval = 'day' | 'month' | 'week' | 'year';
          }

          type Type = 'duration' | 'timestamp';
        }
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
         * The discounts applied to this line item.
         */
        discounts?: Stripe.Emptyable<Array<LineItem.Discount>>;

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
        interface Discount {
          /**
           * ID of the coupon to create a new discount for.
           */
          coupon?: string;

          /**
           * ID of an existing discount on the object (or one of its ancestors) to reuse.
           */
          discount?: string;

          /**
           * Details to determine how long the discount should be applied for.
           */
          discount_end?: Discount.DiscountEnd;
        }

        namespace Discount {
          interface DiscountEnd {
            /**
             * Time span for the redeemed discount.
             */
            duration?: DiscountEnd.Duration;

            /**
             * A precise Unix timestamp for the discount to end. Must be in the future.
             */
            timestamp?: number;

            /**
             * The type of calculation made to determine when the discount ends.
             */
            type: DiscountEnd.Type;
          }

          namespace DiscountEnd {
            interface Duration {
              /**
               * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
               */
              interval: Duration.Interval;

              /**
               * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
               */
              interval_count: number;
            }

            namespace Duration {
              type Interval = 'day' | 'month' | 'week' | 'year';
            }

            type Type = 'duration' | 'timestamp';
          }
        }

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

      interface Phase {
        /**
         * When specified as `reset`, the subscription will always start a new billing period when the quote is accepted.
         */
        billing_cycle_anchor?: 'reset';

        /**
         * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically` on creation.
         */
        collection_method?: Phase.CollectionMethod;

        /**
         * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will set the Subscription's [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates), which means they will be the Invoice's [`default_tax_rates`](https://stripe.com/docs/api/invoices/create#create_invoice-default_tax_rates) for any Invoices issued by the Subscription during this Phase.
         */
        default_tax_rates?: Stripe.Emptyable<Array<string>>;

        /**
         * The coupons to redeem into discounts for the schedule phase. If not specified, inherits the discount from the subscription's customer. Pass an empty string to avoid inheriting any discounts.
         */
        discounts?: Stripe.Emptyable<Array<Phase.Discount>>;

        /**
         * The date at which this phase of the quote ends. If set, `iterations` must not be set.
         */
        end_date?: number;

        /**
         * All invoices will be billed using the specified settings.
         */
        invoice_settings?: Phase.InvoiceSettings;

        /**
         * Integer representing the multiplier applied to the price interval. For example, `iterations=2` applied to a price with `interval=month` and `interval_count=3` results in a phase of duration `2 * 3 months = 6 months`. If set, `end_date` must not be set.
         */
        iterations?: number;

        /**
         * A list of line items the customer is being quoted for within this phase. Each line item includes information about the product, the quantity, and the resulting cost.
         */
        line_items: Array<Phase.LineItem>;

        /**
         * If the update changes the current phase, indicates whether the changes should be prorated. The default value is `create_prorations`.
         */
        proration_behavior?: Phase.ProrationBehavior;

        /**
         * If set to true the entire phase is counted as a trial and the customer will not be charged for any fees.
         */
        trial?: boolean;

        /**
         * Sets the phase to trialing from the start date to this date. Must be before the phase end date, can not be combined with `trial`.
         */
        trial_end?: number;
      }

      namespace Phase {
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

          /**
           * Details to determine how long the discount should be applied for.
           */
          discount_end?: Discount.DiscountEnd;
        }

        namespace Discount {
          interface DiscountEnd {
            /**
             * Time span for the redeemed discount.
             */
            duration?: DiscountEnd.Duration;

            /**
             * A precise Unix timestamp for the discount to end. Must be in the future.
             */
            timestamp?: number;

            /**
             * The type of calculation made to determine when the discount ends.
             */
            type: DiscountEnd.Type;
          }

          namespace DiscountEnd {
            interface Duration {
              /**
               * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
               */
              interval: Duration.Interval;

              /**
               * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
               */
              interval_count: number;
            }

            namespace Duration {
              type Interval = 'day' | 'month' | 'week' | 'year';
            }

            type Type = 'duration' | 'timestamp';
          }
        }

        interface InvoiceSettings {
          /**
           * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
           */
          days_until_due?: number;
        }

        interface LineItem {
          /**
           * The discounts applied to this line item.
           */
          discounts?: Stripe.Emptyable<Array<LineItem.Discount>>;

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
          interface Discount {
            /**
             * ID of the coupon to create a new discount for.
             */
            coupon?: string;

            /**
             * ID of an existing discount on the object (or one of its ancestors) to reuse.
             */
            discount?: string;

            /**
             * Details to determine how long the discount should be applied for.
             */
            discount_end?: Discount.DiscountEnd;
          }

          namespace Discount {
            interface DiscountEnd {
              /**
               * Time span for the redeemed discount.
               */
              duration?: DiscountEnd.Duration;

              /**
               * A precise Unix timestamp for the discount to end. Must be in the future.
               */
              timestamp?: number;

              /**
               * The type of calculation made to determine when the discount ends.
               */
              type: DiscountEnd.Type;
            }

            namespace DiscountEnd {
              interface Duration {
                /**
                 * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
                 */
                interval: Duration.Interval;

                /**
                 * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
                 */
                interval_count: number;
              }

              namespace Duration {
                type Interval = 'day' | 'month' | 'week' | 'year';
              }

              type Type = 'duration' | 'timestamp';
            }
          }

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

        type ProrationBehavior =
          | 'always_invoice'
          | 'create_prorations'
          | 'none';
      }

      interface SubscriptionData {
        /**
         * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time.`prorate_up_front` will bill for all phases within the current billing cycle up front.
         */
        billing_behavior?: SubscriptionData.BillingBehavior;

        /**
         * When specified as `reset`, the subscription will always start a new billing period when the quote is accepted.
         */
        billing_cycle_anchor?: Stripe.Emptyable<'reset'>;

        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription.
         */
        description?: string;

        /**
         * When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. When updating a subscription, the date of which the subscription will be updated using a subscription schedule. The special value `current_period_end` can be provided to update a subscription at the end of its current period. The `effective_date` is ignored if it is in the past when the quote is accepted.
         */
        effective_date?: Stripe.Emptyable<'current_period_end' | number>;

        /**
         * Configures how the subscription schedule behaves when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running.`cancel` will end the subscription schedule and cancel the underlying subscription.
         */
        end_behavior?: SubscriptionData.EndBehavior;

        /**
         * The id of a subscription schedule the quote will update. The quote will inherit the state of the subscription schedule, such as `phases`. Cannot be combined with other parameters.
         */
        from_schedule?: string;

        /**
         * The id of a subscription that the quote will update. By default, the quote will contain the state of the subscription (such as line items, collection method and billing thresholds) unless overridden.
         */
        from_subscription?: string;

        /**
         * If specified, the invoicing for the given billing cycle iterations will be processed when the quote is accepted. Cannot be used with `effective_date`.
         */
        prebilling?: Stripe.Emptyable<SubscriptionData.Prebilling>;

        /**
         * Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations). When creating a subscription, valid values are `create_prorations` or `none`.
         *
         * When updating a subscription, valid values are `create_prorations`, `none`, or `always_invoice`.
         *
         * Passing `create_prorations` will cause proration invoice items to be created when applicable. These proration items will only be invoiced immediately under [certain conditions](https://stripe.com/docs/subscriptions/upgrading-downgrading#immediate-payment). In order to always invoice immediately for prorations, pass `always_invoice`.
         *
         * Prorations can be disabled by passing `none`.
         */
        proration_behavior?: SubscriptionData.ProrationBehavior;

        /**
         * Integer representing the number of trial period days before the customer is charged for the first time.
         */
        trial_period_days?: Stripe.Emptyable<number>;
      }

      namespace SubscriptionData {
        type BillingBehavior = 'prorate_on_next_phase' | 'prorate_up_front';

        type EndBehavior = 'cancel' | 'release';

        interface Prebilling {
          /**
           * This is used to determine the number of billing cycles to prebill.
           */
          iterations: number;
        }

        type ProrationBehavior =
          | 'always_invoice'
          | 'create_prorations'
          | 'none';
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
       * List representing phases of the Quote. Each phase can be customized to have different durations, prices, and coupons.
       */
      phases?: Array<QuoteUpdateParams.Phase>;

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

        /**
         * Details to determine how long the discount should be applied for.
         */
        discount_end?: Discount.DiscountEnd;
      }

      namespace Discount {
        interface DiscountEnd {
          /**
           * Time span for the redeemed discount.
           */
          duration?: DiscountEnd.Duration;

          /**
           * A precise Unix timestamp for the discount to end. Must be in the future.
           */
          timestamp?: number;

          /**
           * The type of calculation made to determine when the discount ends.
           */
          type: DiscountEnd.Type;
        }

        namespace DiscountEnd {
          interface Duration {
            /**
             * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
             */
            interval: Duration.Interval;

            /**
             * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
             */
            interval_count: number;
          }

          namespace Duration {
            type Interval = 'day' | 'month' | 'week' | 'year';
          }

          type Type = 'duration' | 'timestamp';
        }
      }

      interface InvoiceSettings {
        /**
         * Number of days within which a customer must pay the invoice generated by this quote. This value will be `null` for quotes where `collection_method=charge_automatically`.
         */
        days_until_due?: number;
      }

      interface LineItem {
        /**
         * The discounts applied to this line item.
         */
        discounts?: Stripe.Emptyable<Array<LineItem.Discount>>;

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
        interface Discount {
          /**
           * ID of the coupon to create a new discount for.
           */
          coupon?: string;

          /**
           * ID of an existing discount on the object (or one of its ancestors) to reuse.
           */
          discount?: string;

          /**
           * Details to determine how long the discount should be applied for.
           */
          discount_end?: Discount.DiscountEnd;
        }

        namespace Discount {
          interface DiscountEnd {
            /**
             * Time span for the redeemed discount.
             */
            duration?: DiscountEnd.Duration;

            /**
             * A precise Unix timestamp for the discount to end. Must be in the future.
             */
            timestamp?: number;

            /**
             * The type of calculation made to determine when the discount ends.
             */
            type: DiscountEnd.Type;
          }

          namespace DiscountEnd {
            interface Duration {
              /**
               * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
               */
              interval: Duration.Interval;

              /**
               * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
               */
              interval_count: number;
            }

            namespace Duration {
              type Interval = 'day' | 'month' | 'week' | 'year';
            }

            type Type = 'duration' | 'timestamp';
          }
        }

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

      interface Phase {
        /**
         * When specified as `reset`, the subscription will always start a new billing period when the quote is accepted.
         */
        billing_cycle_anchor?: 'reset';

        /**
         * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically` on creation.
         */
        collection_method?: Phase.CollectionMethod;

        /**
         * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will set the Subscription's [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates), which means they will be the Invoice's [`default_tax_rates`](https://stripe.com/docs/api/invoices/create#create_invoice-default_tax_rates) for any Invoices issued by the Subscription during this Phase.
         */
        default_tax_rates?: Stripe.Emptyable<Array<string>>;

        /**
         * The coupons to redeem into discounts for the schedule phase. If not specified, inherits the discount from the subscription's customer. Pass an empty string to avoid inheriting any discounts.
         */
        discounts?: Stripe.Emptyable<Array<Phase.Discount>>;

        /**
         * The date at which this phase of the quote ends. If set, `iterations` must not be set.
         */
        end_date?: number;

        /**
         * All invoices will be billed using the specified settings.
         */
        invoice_settings?: Phase.InvoiceSettings;

        /**
         * Integer representing the multiplier applied to the price interval. For example, `iterations=2` applied to a price with `interval=month` and `interval_count=3` results in a phase of duration `2 * 3 months = 6 months`. If set, `end_date` must not be set.
         */
        iterations?: number;

        /**
         * A list of line items the customer is being quoted for within this phase. Each line item includes information about the product, the quantity, and the resulting cost.
         */
        line_items: Array<Phase.LineItem>;

        /**
         * If the update changes the current phase, indicates whether the changes should be prorated. The default value is `create_prorations`.
         */
        proration_behavior?: Phase.ProrationBehavior;

        /**
         * If set to true the entire phase is counted as a trial and the customer will not be charged for any fees.
         */
        trial?: boolean;

        /**
         * Sets the phase to trialing from the start date to this date. Must be before the phase end date, can not be combined with `trial`.
         */
        trial_end?: number;
      }

      namespace Phase {
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

          /**
           * Details to determine how long the discount should be applied for.
           */
          discount_end?: Discount.DiscountEnd;
        }

        namespace Discount {
          interface DiscountEnd {
            /**
             * Time span for the redeemed discount.
             */
            duration?: DiscountEnd.Duration;

            /**
             * A precise Unix timestamp for the discount to end. Must be in the future.
             */
            timestamp?: number;

            /**
             * The type of calculation made to determine when the discount ends.
             */
            type: DiscountEnd.Type;
          }

          namespace DiscountEnd {
            interface Duration {
              /**
               * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
               */
              interval: Duration.Interval;

              /**
               * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
               */
              interval_count: number;
            }

            namespace Duration {
              type Interval = 'day' | 'month' | 'week' | 'year';
            }

            type Type = 'duration' | 'timestamp';
          }
        }

        interface InvoiceSettings {
          /**
           * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
           */
          days_until_due?: number;
        }

        interface LineItem {
          /**
           * The discounts applied to this line item.
           */
          discounts?: Stripe.Emptyable<Array<LineItem.Discount>>;

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
          interface Discount {
            /**
             * ID of the coupon to create a new discount for.
             */
            coupon?: string;

            /**
             * ID of an existing discount on the object (or one of its ancestors) to reuse.
             */
            discount?: string;

            /**
             * Details to determine how long the discount should be applied for.
             */
            discount_end?: Discount.DiscountEnd;
          }

          namespace Discount {
            interface DiscountEnd {
              /**
               * Time span for the redeemed discount.
               */
              duration?: DiscountEnd.Duration;

              /**
               * A precise Unix timestamp for the discount to end. Must be in the future.
               */
              timestamp?: number;

              /**
               * The type of calculation made to determine when the discount ends.
               */
              type: DiscountEnd.Type;
            }

            namespace DiscountEnd {
              interface Duration {
                /**
                 * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
                 */
                interval: Duration.Interval;

                /**
                 * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
                 */
                interval_count: number;
              }

              namespace Duration {
                type Interval = 'day' | 'month' | 'week' | 'year';
              }

              type Type = 'duration' | 'timestamp';
            }
          }

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

        type ProrationBehavior =
          | 'always_invoice'
          | 'create_prorations'
          | 'none';
      }

      interface SubscriptionData {
        /**
         * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time.`prorate_up_front` will bill for all phases within the current billing cycle up front.
         */
        billing_behavior?: SubscriptionData.BillingBehavior;

        /**
         * When specified as `reset`, the subscription will always start a new billing period when the quote is accepted.
         */
        billing_cycle_anchor?: Stripe.Emptyable<'reset'>;

        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription.
         */
        description?: string;

        /**
         * When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. When updating a subscription, the date of which the subscription will be updated using a subscription schedule. The special value `current_period_end` can be provided to update a subscription at the end of its current period. The `effective_date` is ignored if it is in the past when the quote is accepted.
         */
        effective_date?: Stripe.Emptyable<'current_period_end' | number>;

        /**
         * Configures how the subscription schedule behaves when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running.`cancel` will end the subscription schedule and cancel the underlying subscription.
         */
        end_behavior?: SubscriptionData.EndBehavior;

        /**
         * If specified, the invoicing for the given billing cycle iterations will be processed when the quote is accepted. Cannot be used with `effective_date`.
         */
        prebilling?: Stripe.Emptyable<SubscriptionData.Prebilling>;

        /**
         * Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations). When creating a subscription, valid values are `create_prorations` or `none`.
         *
         * When updating a subscription, valid values are `create_prorations`, `none`, or `always_invoice`.
         *
         * Passing `create_prorations` will cause proration invoice items to be created when applicable. These proration items will only be invoiced immediately under [certain conditions](https://stripe.com/docs/subscriptions/upgrading-downgrading#immediate-payment). In order to always invoice immediately for prorations, pass `always_invoice`.
         *
         * Prorations can be disabled by passing `none`.
         */
        proration_behavior?: SubscriptionData.ProrationBehavior;

        /**
         * Integer representing the number of trial period days before the customer is charged for the first time.
         */
        trial_period_days?: Stripe.Emptyable<number>;
      }

      namespace SubscriptionData {
        type BillingBehavior = 'prorate_on_next_phase' | 'prorate_up_front';

        type EndBehavior = 'cancel' | 'release';

        interface Prebilling {
          /**
           * This is used to determine the number of billing cycles to prebill.
           */
          iterations: number;
        }

        type ProrationBehavior =
          | 'always_invoice'
          | 'create_prorations'
          | 'none';
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
       * The subscription which the quote updates.
       */
      from_subscription?: string;

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
