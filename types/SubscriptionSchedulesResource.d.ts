// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface SubscriptionScheduleCreateParams {
      /**
       * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time. `prorate_up_front` will bill for all phases within the current billing cycle up front.
       */
      billing_behavior?: SubscriptionScheduleCreateParams.BillingBehavior;

      /**
       * The identifier of the customer to create the subscription schedule for.
       */
      customer?: string;

      /**
       * Object representing the subscription schedule's default settings.
       */
      default_settings?: SubscriptionScheduleCreateParams.DefaultSettings;

      /**
       * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running. `cancel` will end the subscription schedule and cancel the underlying subscription.
       */
      end_behavior?: SubscriptionScheduleCreateParams.EndBehavior;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Migrate an existing subscription to be managed by a subscription schedule. If this parameter is set, a subscription schedule will be created using the subscription's item(s), set to auto-renew using the subscription's interval. When using this parameter, other parameters (such as phase values) cannot be set. To create a subscription schedule with other modifications, we recommend making two separate API calls.
       */
      from_subscription?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * List representing phases of the subscription schedule. Each phase can be customized to have different durations, plans, and coupons. If there are multiple phases, the `end_date` of one phase will always equal the `start_date` of the next phase.
       */
      phases?: Array<SubscriptionScheduleCreateParams.Phase>;

      /**
       * If specified, the invoicing for the given billing cycle iterations will be processed now.
       */
      prebilling?: SubscriptionScheduleCreateParams.Prebilling;

      /**
       * When the subscription schedule starts. We recommend using `now` so that it starts the subscription immediately. You can also use a Unix timestamp to backdate the subscription so that it starts on a past date, or set a future date for the subscription to start on.
       */
      start_date?: number | 'now';
    }

    namespace SubscriptionScheduleCreateParams {
      type BillingBehavior = 'prorate_on_next_phase' | 'prorate_up_front';

      interface DefaultSettings {
        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
         */
        application_fee_percent?: number;

        /**
         * Default settings for automatic tax computation.
         */
        automatic_tax?: DefaultSettings.AutomaticTax;

        /**
         * Can be set to `phase_start` to set the anchor to the start of the phase or `automatic` to automatically change it if needed. Cannot be set to `phase_start` if this phase specifies a trial. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
         */
        billing_cycle_anchor?: DefaultSettings.BillingCycleAnchor;

        /**
         * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
         */
        billing_thresholds?: Stripe.Emptyable<
          DefaultSettings.BillingThresholds
        >;

        /**
         * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically` on creation.
         */
        collection_method?: DefaultSettings.CollectionMethod;

        /**
         * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
         */
        default_payment_method?: string;

        /**
         * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description?: Stripe.Emptyable<string>;

        /**
         * All invoices will be billed using the specified settings.
         */
        invoice_settings?: DefaultSettings.InvoiceSettings;

        /**
         * The account on behalf of which to charge, for each of the associated subscription's invoices.
         */
        on_behalf_of?: Stripe.Emptyable<string>;

        /**
         * The data with which to automatically create a Transfer for each of the associated subscription's invoices.
         */
        transfer_data?: Stripe.Emptyable<DefaultSettings.TransferData>;
      }

      namespace DefaultSettings {
        interface AutomaticTax {
          /**
           * Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription.
           */
          enabled: boolean;

          /**
           * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
           */
          liability?: AutomaticTax.Liability;
        }

        namespace AutomaticTax {
          interface Liability {
            /**
             * The connected account being referenced when `type` is `account`.
             */
            account?: string;

            /**
             * Type of the account referenced in the request.
             */
            type: Liability.Type;
          }

          namespace Liability {
            type Type = 'account' | 'self';
          }
        }

        type BillingCycleAnchor = 'automatic' | 'phase_start';

        interface BillingThresholds {
          /**
           * Monetary threshold that triggers the subscription to advance to a new billing period
           */
          amount_gte?: number;

          /**
           * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged.
           */
          reset_billing_cycle_anchor?: boolean;
        }

        type CollectionMethod = 'charge_automatically' | 'send_invoice';

        interface InvoiceSettings {
          /**
           * The account tax IDs associated with the subscription schedule. Will be set on invoices generated by the subscription schedule.
           */
          account_tax_ids?: Stripe.Emptyable<Array<string>>;

          /**
           * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `collection_method=charge_automatically`.
           */
          days_until_due?: number;

          /**
           * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
           */
          issuer?: InvoiceSettings.Issuer;
        }

        namespace InvoiceSettings {
          interface Issuer {
            /**
             * The connected account being referenced when `type` is `account`.
             */
            account?: string;

            /**
             * Type of the account referenced in the request.
             */
            type: Issuer.Type;
          }

          namespace Issuer {
            type Type = 'account' | 'self';
          }
        }

        interface TransferData {
          /**
           * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
           */
          amount_percent?: number;

          /**
           * ID of an existing, connected Stripe account.
           */
          destination: string;
        }
      }

      type EndBehavior = 'cancel' | 'none' | 'release' | 'renew';

      interface Phase {
        /**
         * A list of prices and quantities that will generate invoice items appended to the next invoice for this phase. You may pass up to 20 items.
         */
        add_invoice_items?: Array<Phase.AddInvoiceItem>;

        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
         */
        application_fee_percent?: number;

        /**
         * Automatic tax settings for this phase.
         */
        automatic_tax?: Phase.AutomaticTax;

        /**
         * Can be set to `phase_start` to set the anchor to the start of the phase or `automatic` to automatically change it if needed. Cannot be set to `phase_start` if this phase specifies a trial. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
         */
        billing_cycle_anchor?: Phase.BillingCycleAnchor;

        /**
         * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
         */
        billing_thresholds?: Stripe.Emptyable<Phase.BillingThresholds>;

        /**
         * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically` on creation.
         */
        collection_method?: Phase.CollectionMethod;

        /**
         * The ID of the coupon to apply to this phase of the subscription schedule. This field has been deprecated and will be removed in a future API version. Use `discounts` instead.
         */
        coupon?: string;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency?: string;

        /**
         * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
         */
        default_payment_method?: string;

        /**
         * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will set the Subscription's [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates), which means they will be the Invoice's [`default_tax_rates`](https://stripe.com/docs/api/invoices/create#create_invoice-default_tax_rates) for any Invoices issued by the Subscription during this Phase.
         */
        default_tax_rates?: Stripe.Emptyable<Array<string>>;

        /**
         * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description?: Stripe.Emptyable<string>;

        /**
         * The coupons to redeem into discounts for the schedule phase. If not specified, inherits the discount from the subscription's customer. Pass an empty string to avoid inheriting any discounts.
         */
        discounts?: Stripe.Emptyable<Array<Phase.Discount>>;

        /**
         * The date at which this phase of the subscription schedule ends. If set, `iterations` must not be set.
         */
        end_date?: number;

        /**
         * All invoices will be billed using the specified settings.
         */
        invoice_settings?: Phase.InvoiceSettings;

        /**
         * List of configuration items, each with an attached price, to apply during this phase of the subscription schedule.
         */
        items: Array<Phase.Item>;

        /**
         * Integer representing the multiplier applied to the price interval. For example, `iterations=2` applied to a price with `interval=month` and `interval_count=3` results in a phase of duration `2 * 3 months = 6 months`. If set, `end_date` must not be set.
         */
        iterations?: number;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to a phase. Metadata on a schedule's phase will update the underlying subscription's `metadata` when the phase is entered, adding new keys and replacing existing keys in the subscription's `metadata`. Individual keys in the subscription's `metadata` can be unset by posting an empty value to them in the phase's `metadata`. To unset all keys in the subscription's `metadata`, update the subscription directly or unset every key individually from the phase's `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * The account on behalf of which to charge, for each of the associated subscription's invoices.
         */
        on_behalf_of?: string;

        /**
         * If specified, payment collection for this subscription will be paused. Note that the subscription status will be unchanged and will not be updated to `paused`. Learn more about [pausing collection](https://stripe.com/docs/billing/subscriptions/pause-payment).
         */
        pause_collection?: Phase.PauseCollection;

        /**
         * Whether the subscription schedule will create [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when transitioning to this phase. The default value is `create_prorations`. This setting controls prorations when a phase is started asynchronously and it is persisted as a field on the phase. It's different from the request-level [proration_behavior](https://stripe.com/docs/api/subscription_schedules/update#update_subscription_schedule-proration_behavior) parameter which controls what happens if the update request affects the billing configuration of the current phase.
         */
        proration_behavior?: Phase.ProrationBehavior;

        /**
         * The data with which to automatically create a Transfer for each of the associated subscription's invoices.
         */
        transfer_data?: Phase.TransferData;

        /**
         * If set to true the entire phase is counted as a trial and the customer will not be charged for any fees.
         */
        trial?: boolean;

        /**
         * Specify trial behavior when crossing phase boundaries
         */
        trial_continuation?: Phase.TrialContinuation;

        /**
         * Sets the phase to trialing from the start date to this date. Must be before the phase end date, can not be combined with `trial`
         */
        trial_end?: number;

        /**
         * Settings related to subscription trials.
         */
        trial_settings?: Phase.TrialSettings;
      }

      namespace Phase {
        interface AddInvoiceItem {
          /**
           * The coupons to redeem into discounts for the item.
           */
          discounts?: Array<AddInvoiceItem.Discount>;

          /**
           * The ID of the price object. One of `price` or `price_data` is required.
           */
          price?: string;

          /**
           * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price` or `price_data` is required.
           */
          price_data?: AddInvoiceItem.PriceData;

          /**
           * Quantity for this item. Defaults to 1.
           */
          quantity?: number;

          /**
           * The tax rates which apply to the item. When set, the `default_tax_rates` do not apply to this item.
           */
          tax_rates?: Stripe.Emptyable<Array<string>>;
        }

        namespace AddInvoiceItem {
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

            /**
             * ID of the promotion code to create a new discount for.
             */
            promotion_code?: string;
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
             * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: PriceData.TaxBehavior;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge or a negative integer representing the amount to credit to the customer.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace PriceData {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }
        }

        interface AutomaticTax {
          /**
           * Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription.
           */
          enabled: boolean;

          /**
           * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
           */
          liability?: AutomaticTax.Liability;
        }

        namespace AutomaticTax {
          interface Liability {
            /**
             * The connected account being referenced when `type` is `account`.
             */
            account?: string;

            /**
             * Type of the account referenced in the request.
             */
            type: Liability.Type;
          }

          namespace Liability {
            type Type = 'account' | 'self';
          }
        }

        type BillingCycleAnchor = 'automatic' | 'phase_start';

        interface BillingThresholds {
          /**
           * Monetary threshold that triggers the subscription to advance to a new billing period
           */
          amount_gte?: number;

          /**
           * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged.
           */
          reset_billing_cycle_anchor?: boolean;
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

          /**
           * ID of the promotion code to create a new discount for.
           */
          promotion_code?: string;
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
           * The account tax IDs associated with this phase of the subscription schedule. Will be set on invoices generated by this phase of the subscription schedule.
           */
          account_tax_ids?: Stripe.Emptyable<Array<string>>;

          /**
           * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
           */
          days_until_due?: number;

          /**
           * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
           */
          issuer?: InvoiceSettings.Issuer;
        }

        namespace InvoiceSettings {
          interface Issuer {
            /**
             * The connected account being referenced when `type` is `account`.
             */
            account?: string;

            /**
             * Type of the account referenced in the request.
             */
            type: Issuer.Type;
          }

          namespace Issuer {
            type Type = 'account' | 'self';
          }
        }

        interface Item {
          /**
           * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
           */
          billing_thresholds?: Stripe.Emptyable<Item.BillingThresholds>;

          /**
           * The coupons to redeem into discounts for the subscription item.
           */
          discounts?: Stripe.Emptyable<Array<Item.Discount>>;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to a configuration item. Metadata on a configuration item will update the underlying subscription item's `metadata` when the phase is entered, adding new keys and replacing existing keys. Individual keys in the subscription item's `metadata` can be unset by posting an empty value to them in the configuration item's `metadata`. To unset all keys in the subscription item's `metadata`, update the subscription item directly or unset every key individually from the configuration item's `metadata`.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * The plan ID to subscribe to. You may specify the same ID in `plan` and `price`.
           */
          plan?: string;

          /**
           * The ID of the price object.
           */
          price?: string;

          /**
           * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
           */
          price_data?: Item.PriceData;

          /**
           * Quantity for the given price. Can be set only if the price's `usage_type` is `licensed` and not `metered`.
           */
          quantity?: number;

          /**
           * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
           */
          tax_rates?: Stripe.Emptyable<Array<string>>;

          /**
           * Options that configure the trial on the subscription item.
           */
          trial?: Item.Trial;
        }

        namespace Item {
          interface BillingThresholds {
            /**
             * Number of units that meets the billing threshold to advance the subscription to a new billing period (e.g., it takes 10 $5 units to meet a $50 [monetary threshold](https://stripe.com/docs/api/subscriptions/update#update_subscription-billing_thresholds-amount_gte))
             */
            usage_gte: number;
          }

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

            /**
             * ID of the promotion code to create a new discount for.
             */
            promotion_code?: string;
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
            recurring: PriceData.Recurring;

            /**
             * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
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
               * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).
               */
              interval_count?: number;
            }

            namespace Recurring {
              type Interval = 'day' | 'month' | 'week' | 'year';
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Trial {
            /**
             * List of price IDs which, if present on the subscription following a paid trial, constitute opting-in to the paid trial. Currently only supports at most 1 price ID.
             */
            converts_to?: Array<string>;

            /**
             * Determines the type of trial for this item.
             */
            type: Trial.Type;
          }

          namespace Trial {
            type Type = 'free' | 'paid';
          }
        }

        interface PauseCollection {
          /**
           * The payment collection behavior for this subscription while paused. One of `keep_as_draft`, `mark_uncollectible`, or `void`.
           */
          behavior: PauseCollection.Behavior;
        }

        namespace PauseCollection {
          type Behavior = 'keep_as_draft' | 'mark_uncollectible' | 'void';
        }

        type ProrationBehavior =
          | 'always_invoice'
          | 'create_prorations'
          | 'none';

        interface TransferData {
          /**
           * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
           */
          amount_percent?: number;

          /**
           * ID of an existing, connected Stripe account.
           */
          destination: string;
        }

        type TrialContinuation = 'continue' | 'none';

        interface TrialSettings {
          /**
           * Defines how the subscription should behave when a trial ends.
           */
          end_behavior?: TrialSettings.EndBehavior;
        }

        namespace TrialSettings {
          interface EndBehavior {
            /**
             * Configure how an opt-in following a paid trial is billed when using `billing_behavior: prorate_up_front`.
             */
            prorate_up_front?: EndBehavior.ProrateUpFront;
          }

          namespace EndBehavior {
            type ProrateUpFront = 'defer' | 'include';
          }
        }
      }

      interface Prebilling {
        /**
         * This is used to determine the number of billing cycles to prebill.
         */
        iterations: number;

        /**
         * Whether to cancel or preserve `prebilling` if the subscription is updated during the prebilled period. The default value is `reset`.
         */
        update_behavior?: Prebilling.UpdateBehavior;
      }

      namespace Prebilling {
        type UpdateBehavior = 'prebill' | 'reset';
      }
    }

    interface SubscriptionScheduleRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface SubscriptionScheduleUpdateParams {
      /**
       * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time. `prorate_up_front` will bill for all phases within the current billing cycle up front.
       */
      billing_behavior?: SubscriptionScheduleUpdateParams.BillingBehavior;

      /**
       * Object representing the subscription schedule's default settings.
       */
      default_settings?: SubscriptionScheduleUpdateParams.DefaultSettings;

      /**
       * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running. `cancel` will end the subscription schedule and cancel the underlying subscription.
       */
      end_behavior?: SubscriptionScheduleUpdateParams.EndBehavior;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * List representing phases of the subscription schedule. Each phase can be customized to have different durations, plans, and coupons. If there are multiple phases, the `end_date` of one phase will always equal the `start_date` of the next phase. Note that past phases can be omitted.
       */
      phases?: Array<SubscriptionScheduleUpdateParams.Phase>;

      /**
       * If specified, the invoicing for the given billing cycle iterations will be processed now.
       */
      prebilling?: SubscriptionScheduleUpdateParams.Prebilling;

      /**
       * If the update changes the current phase, indicates whether the changes should be prorated. The default value is `create_prorations`.
       */
      proration_behavior?: SubscriptionScheduleUpdateParams.ProrationBehavior;
    }

    namespace SubscriptionScheduleUpdateParams {
      type BillingBehavior = 'prorate_on_next_phase' | 'prorate_up_front';

      interface DefaultSettings {
        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
         */
        application_fee_percent?: number;

        /**
         * Default settings for automatic tax computation.
         */
        automatic_tax?: DefaultSettings.AutomaticTax;

        /**
         * Can be set to `phase_start` to set the anchor to the start of the phase or `automatic` to automatically change it if needed. Cannot be set to `phase_start` if this phase specifies a trial. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
         */
        billing_cycle_anchor?: DefaultSettings.BillingCycleAnchor;

        /**
         * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
         */
        billing_thresholds?: Stripe.Emptyable<
          DefaultSettings.BillingThresholds
        >;

        /**
         * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically` on creation.
         */
        collection_method?: DefaultSettings.CollectionMethod;

        /**
         * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
         */
        default_payment_method?: string;

        /**
         * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description?: Stripe.Emptyable<string>;

        /**
         * All invoices will be billed using the specified settings.
         */
        invoice_settings?: DefaultSettings.InvoiceSettings;

        /**
         * The account on behalf of which to charge, for each of the associated subscription's invoices.
         */
        on_behalf_of?: Stripe.Emptyable<string>;

        /**
         * The data with which to automatically create a Transfer for each of the associated subscription's invoices.
         */
        transfer_data?: Stripe.Emptyable<DefaultSettings.TransferData>;
      }

      namespace DefaultSettings {
        interface AutomaticTax {
          /**
           * Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription.
           */
          enabled: boolean;

          /**
           * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
           */
          liability?: AutomaticTax.Liability;
        }

        namespace AutomaticTax {
          interface Liability {
            /**
             * The connected account being referenced when `type` is `account`.
             */
            account?: string;

            /**
             * Type of the account referenced in the request.
             */
            type: Liability.Type;
          }

          namespace Liability {
            type Type = 'account' | 'self';
          }
        }

        type BillingCycleAnchor = 'automatic' | 'phase_start';

        interface BillingThresholds {
          /**
           * Monetary threshold that triggers the subscription to advance to a new billing period
           */
          amount_gte?: number;

          /**
           * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged.
           */
          reset_billing_cycle_anchor?: boolean;
        }

        type CollectionMethod = 'charge_automatically' | 'send_invoice';

        interface InvoiceSettings {
          /**
           * The account tax IDs associated with the subscription schedule. Will be set on invoices generated by the subscription schedule.
           */
          account_tax_ids?: Stripe.Emptyable<Array<string>>;

          /**
           * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `collection_method=charge_automatically`.
           */
          days_until_due?: number;

          /**
           * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
           */
          issuer?: InvoiceSettings.Issuer;
        }

        namespace InvoiceSettings {
          interface Issuer {
            /**
             * The connected account being referenced when `type` is `account`.
             */
            account?: string;

            /**
             * Type of the account referenced in the request.
             */
            type: Issuer.Type;
          }

          namespace Issuer {
            type Type = 'account' | 'self';
          }
        }

        interface TransferData {
          /**
           * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
           */
          amount_percent?: number;

          /**
           * ID of an existing, connected Stripe account.
           */
          destination: string;
        }
      }

      type EndBehavior = 'cancel' | 'none' | 'release' | 'renew';

      interface Phase {
        /**
         * A list of prices and quantities that will generate invoice items appended to the next invoice for this phase. You may pass up to 20 items.
         */
        add_invoice_items?: Array<Phase.AddInvoiceItem>;

        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
         */
        application_fee_percent?: number;

        /**
         * Automatic tax settings for this phase.
         */
        automatic_tax?: Phase.AutomaticTax;

        /**
         * Can be set to `phase_start` to set the anchor to the start of the phase or `automatic` to automatically change it if needed. Cannot be set to `phase_start` if this phase specifies a trial. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
         */
        billing_cycle_anchor?: Phase.BillingCycleAnchor;

        /**
         * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
         */
        billing_thresholds?: Stripe.Emptyable<Phase.BillingThresholds>;

        /**
         * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically` on creation.
         */
        collection_method?: Phase.CollectionMethod;

        /**
         * The ID of the coupon to apply to this phase of the subscription schedule. This field has been deprecated and will be removed in a future API version. Use `discounts` instead.
         */
        coupon?: string;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency?: string;

        /**
         * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
         */
        default_payment_method?: string;

        /**
         * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will set the Subscription's [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates), which means they will be the Invoice's [`default_tax_rates`](https://stripe.com/docs/api/invoices/create#create_invoice-default_tax_rates) for any Invoices issued by the Subscription during this Phase.
         */
        default_tax_rates?: Stripe.Emptyable<Array<string>>;

        /**
         * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description?: Stripe.Emptyable<string>;

        /**
         * The coupons to redeem into discounts for the schedule phase. If not specified, inherits the discount from the subscription's customer. Pass an empty string to avoid inheriting any discounts.
         */
        discounts?: Stripe.Emptyable<Array<Phase.Discount>>;

        /**
         * The date at which this phase of the subscription schedule ends. If set, `iterations` must not be set.
         */
        end_date?: number | 'now';

        /**
         * All invoices will be billed using the specified settings.
         */
        invoice_settings?: Phase.InvoiceSettings;

        /**
         * List of configuration items, each with an attached price, to apply during this phase of the subscription schedule.
         */
        items: Array<Phase.Item>;

        /**
         * Integer representing the multiplier applied to the price interval. For example, `iterations=2` applied to a price with `interval=month` and `interval_count=3` results in a phase of duration `2 * 3 months = 6 months`. If set, `end_date` must not be set.
         */
        iterations?: number;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to a phase. Metadata on a schedule's phase will update the underlying subscription's `metadata` when the phase is entered, adding new keys and replacing existing keys in the subscription's `metadata`. Individual keys in the subscription's `metadata` can be unset by posting an empty value to them in the phase's `metadata`. To unset all keys in the subscription's `metadata`, update the subscription directly or unset every key individually from the phase's `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * The account on behalf of which to charge, for each of the associated subscription's invoices.
         */
        on_behalf_of?: string;

        /**
         * If specified, payment collection for this subscription will be paused. Note that the subscription status will be unchanged and will not be updated to `paused`. Learn more about [pausing collection](https://stripe.com/docs/billing/subscriptions/pause-payment).
         */
        pause_collection?: Phase.PauseCollection;

        /**
         * Whether the subscription schedule will create [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when transitioning to this phase. The default value is `create_prorations`. This setting controls prorations when a phase is started asynchronously and it is persisted as a field on the phase. It's different from the request-level [proration_behavior](https://stripe.com/docs/api/subscription_schedules/update#update_subscription_schedule-proration_behavior) parameter which controls what happens if the update request affects the billing configuration of the current phase.
         */
        proration_behavior?: Phase.ProrationBehavior;

        /**
         * The date at which this phase of the subscription schedule starts or `now`. Must be set on the first phase.
         */
        start_date?: number | 'now';

        /**
         * The data with which to automatically create a Transfer for each of the associated subscription's invoices.
         */
        transfer_data?: Phase.TransferData;

        /**
         * If set to true the entire phase is counted as a trial and the customer will not be charged for any fees.
         */
        trial?: boolean;

        /**
         * Specify trial behavior when crossing phase boundaries
         */
        trial_continuation?: Phase.TrialContinuation;

        /**
         * Sets the phase to trialing from the start date to this date. Must be before the phase end date, can not be combined with `trial`
         */
        trial_end?: number | 'now';

        /**
         * Settings related to subscription trials.
         */
        trial_settings?: Phase.TrialSettings;
      }

      namespace Phase {
        interface AddInvoiceItem {
          /**
           * The coupons to redeem into discounts for the item.
           */
          discounts?: Array<AddInvoiceItem.Discount>;

          /**
           * The ID of the price object. One of `price` or `price_data` is required.
           */
          price?: string;

          /**
           * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price` or `price_data` is required.
           */
          price_data?: AddInvoiceItem.PriceData;

          /**
           * Quantity for this item. Defaults to 1.
           */
          quantity?: number;

          /**
           * The tax rates which apply to the item. When set, the `default_tax_rates` do not apply to this item.
           */
          tax_rates?: Stripe.Emptyable<Array<string>>;
        }

        namespace AddInvoiceItem {
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

            /**
             * ID of the promotion code to create a new discount for.
             */
            promotion_code?: string;
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
             * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: PriceData.TaxBehavior;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge or a negative integer representing the amount to credit to the customer.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace PriceData {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }
        }

        interface AutomaticTax {
          /**
           * Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription.
           */
          enabled: boolean;

          /**
           * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
           */
          liability?: AutomaticTax.Liability;
        }

        namespace AutomaticTax {
          interface Liability {
            /**
             * The connected account being referenced when `type` is `account`.
             */
            account?: string;

            /**
             * Type of the account referenced in the request.
             */
            type: Liability.Type;
          }

          namespace Liability {
            type Type = 'account' | 'self';
          }
        }

        type BillingCycleAnchor = 'automatic' | 'phase_start';

        interface BillingThresholds {
          /**
           * Monetary threshold that triggers the subscription to advance to a new billing period
           */
          amount_gte?: number;

          /**
           * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged.
           */
          reset_billing_cycle_anchor?: boolean;
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

          /**
           * ID of the promotion code to create a new discount for.
           */
          promotion_code?: string;
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
           * The account tax IDs associated with this phase of the subscription schedule. Will be set on invoices generated by this phase of the subscription schedule.
           */
          account_tax_ids?: Stripe.Emptyable<Array<string>>;

          /**
           * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
           */
          days_until_due?: number;

          /**
           * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
           */
          issuer?: InvoiceSettings.Issuer;
        }

        namespace InvoiceSettings {
          interface Issuer {
            /**
             * The connected account being referenced when `type` is `account`.
             */
            account?: string;

            /**
             * Type of the account referenced in the request.
             */
            type: Issuer.Type;
          }

          namespace Issuer {
            type Type = 'account' | 'self';
          }
        }

        interface Item {
          /**
           * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
           */
          billing_thresholds?: Stripe.Emptyable<Item.BillingThresholds>;

          /**
           * The coupons to redeem into discounts for the subscription item.
           */
          discounts?: Stripe.Emptyable<Array<Item.Discount>>;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to a configuration item. Metadata on a configuration item will update the underlying subscription item's `metadata` when the phase is entered, adding new keys and replacing existing keys. Individual keys in the subscription item's `metadata` can be unset by posting an empty value to them in the configuration item's `metadata`. To unset all keys in the subscription item's `metadata`, update the subscription item directly or unset every key individually from the configuration item's `metadata`.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * The plan ID to subscribe to. You may specify the same ID in `plan` and `price`.
           */
          plan?: string;

          /**
           * The ID of the price object.
           */
          price?: string;

          /**
           * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
           */
          price_data?: Item.PriceData;

          /**
           * Quantity for the given price. Can be set only if the price's `usage_type` is `licensed` and not `metered`.
           */
          quantity?: number;

          /**
           * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
           */
          tax_rates?: Stripe.Emptyable<Array<string>>;

          /**
           * Options that configure the trial on the subscription item.
           */
          trial?: Item.Trial;
        }

        namespace Item {
          interface BillingThresholds {
            /**
             * Number of units that meets the billing threshold to advance the subscription to a new billing period (e.g., it takes 10 $5 units to meet a $50 [monetary threshold](https://stripe.com/docs/api/subscriptions/update#update_subscription-billing_thresholds-amount_gte))
             */
            usage_gte: number;
          }

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

            /**
             * ID of the promotion code to create a new discount for.
             */
            promotion_code?: string;
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
            recurring: PriceData.Recurring;

            /**
             * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
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
               * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).
               */
              interval_count?: number;
            }

            namespace Recurring {
              type Interval = 'day' | 'month' | 'week' | 'year';
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Trial {
            /**
             * List of price IDs which, if present on the subscription following a paid trial, constitute opting-in to the paid trial. Currently only supports at most 1 price ID.
             */
            converts_to?: Array<string>;

            /**
             * Determines the type of trial for this item.
             */
            type: Trial.Type;
          }

          namespace Trial {
            type Type = 'free' | 'paid';
          }
        }

        interface PauseCollection {
          /**
           * The payment collection behavior for this subscription while paused. One of `keep_as_draft`, `mark_uncollectible`, or `void`.
           */
          behavior: PauseCollection.Behavior;
        }

        namespace PauseCollection {
          type Behavior = 'keep_as_draft' | 'mark_uncollectible' | 'void';
        }

        type ProrationBehavior =
          | 'always_invoice'
          | 'create_prorations'
          | 'none';

        interface TransferData {
          /**
           * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
           */
          amount_percent?: number;

          /**
           * ID of an existing, connected Stripe account.
           */
          destination: string;
        }

        type TrialContinuation = 'continue' | 'none';

        interface TrialSettings {
          /**
           * Defines how the subscription should behave when a trial ends.
           */
          end_behavior?: TrialSettings.EndBehavior;
        }

        namespace TrialSettings {
          interface EndBehavior {
            /**
             * Configure how an opt-in following a paid trial is billed when using `billing_behavior: prorate_up_front`.
             */
            prorate_up_front?: EndBehavior.ProrateUpFront;
          }

          namespace EndBehavior {
            type ProrateUpFront = 'defer' | 'include';
          }
        }
      }

      interface Prebilling {
        /**
         * This is used to determine the number of billing cycles to prebill.
         */
        iterations: number;

        /**
         * Whether to cancel or preserve `prebilling` if the subscription is updated during the prebilled period. The default value is `reset`.
         */
        update_behavior?: Prebilling.UpdateBehavior;
      }

      namespace Prebilling {
        type UpdateBehavior = 'prebill' | 'reset';
      }

      type ProrationBehavior = 'always_invoice' | 'create_prorations' | 'none';
    }

    interface SubscriptionScheduleListParams extends PaginationParams {
      /**
       * Only return subscription schedules that were created canceled the given date interval.
       */
      canceled_at?: Stripe.RangeQueryParam | number;

      /**
       * Only return subscription schedules that completed during the given date interval.
       */
      completed_at?: Stripe.RangeQueryParam | number;

      /**
       * Only return subscription schedules that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Only return subscription schedules for the given customer.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return subscription schedules that were released during the given date interval.
       */
      released_at?: Stripe.RangeQueryParam | number;

      /**
       * Only return subscription schedules that have not started yet.
       */
      scheduled?: boolean;
    }

    interface SubscriptionScheduleAmendParams {
      /**
       * Changes to apply to the phases of the subscription schedule, in the order provided.
       */
      amendments?: Array<SubscriptionScheduleAmendParams.Amendment>;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Provide any time periods to bill in advance.
       */
      prebilling?: Stripe.Emptyable<
        Array<SubscriptionScheduleAmendParams.Prebilling>
      >;

      /**
       * In cases where the amendment changes the currently active phase,
       *  specifies if and how to prorate at the time of the request.
       */
      proration_behavior?: SubscriptionScheduleAmendParams.ProrationBehavior;

      /**
       * Changes to apply to the subscription schedule.
       */
      schedule_settings?: SubscriptionScheduleAmendParams.ScheduleSettings;
    }

    namespace SubscriptionScheduleAmendParams {
      interface Amendment {
        /**
         * Details to identify the end of the time range modified by the proposed change. If not supplied, the amendment is considered a point-in-time operation that only affects the exact timestamp at `amendment_start`, and a restricted set of attributes is supported on the amendment.
         */
        amendment_end?: Amendment.AmendmentEnd;

        /**
         * Details to identify the earliest timestamp where the proposed change should take effect.
         */
        amendment_start: Amendment.AmendmentStart;

        /**
         * For point-in-time amendments (having no `amendment_end`), this attribute lets you set or remove whether the subscription's billing cycle anchor is reset at the `amendment_start` timestamp.For time-span based amendments (having both `amendment_start` and `amendment_end`), the only value valid is `automatic`, which removes any previously configured billing cycle anchor resets scheduled to occur during the window of time spanned by the amendment.
         */
        billing_cycle_anchor?: Amendment.BillingCycleAnchor;

        /**
         * Changes to the coupons being redeemed or discounts being applied during the amendment time span.
         */
        discount_actions?: Array<Amendment.DiscountAction>;

        /**
         * Changes to the subscription items during the amendment time span.
         */
        item_actions?: Array<Amendment.ItemAction>;

        /**
         * Instructions for how to modify phase metadata
         */
        metadata_actions?: Array<Amendment.MetadataAction>;

        /**
         * Changes to how Stripe handles prorations during the amendment time span. Affects if and how prorations are created when a future phase starts. In cases where the amendment changes the currently active phase, it is used to determine whether or how to prorate now, at the time of the request. Also supported as a point-in-time operation when `amendment_end` is `null`.
         */
        proration_behavior?: Amendment.ProrationBehavior;

        /**
         * Defines how to pause collection for the underlying subscription throughout the duration of the amendment.
         */
        set_pause_collection?: Amendment.SetPauseCollection;

        /**
         * Ends the subscription schedule early as dictated by either the accompanying amendment's start or end.
         */
        set_schedule_end?: Amendment.SetScheduleEnd;

        /**
         * Settings related to subscription trials.
         */
        trial_settings?: Amendment.TrialSettings;
      }

      namespace Amendment {
        interface AmendmentEnd {
          /**
           * Use the `end` time of a given discount.
           */
          discount_end?: AmendmentEnd.DiscountEnd;

          /**
           * Time span for the amendment starting from the `amendment_start`.
           */
          duration?: AmendmentEnd.Duration;

          /**
           * A precise Unix timestamp for the amendment to end. Must be after the `amendment_start`.
           */
          timestamp?: number;

          /**
           * Select one of three ways to pass the `amendment_end`.
           */
          type: AmendmentEnd.Type;
        }

        namespace AmendmentEnd {
          interface DiscountEnd {
            /**
             * The ID of a specific discount.
             */
            discount: string;
          }

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

          type Type =
            | 'discount_end'
            | 'duration'
            | 'schedule_end'
            | 'timestamp'
            | 'trial_end'
            | 'trial_start'
            | 'upcoming_invoice';
        }

        interface AmendmentStart {
          /**
           * Details of another amendment in the same array, immediately after which this amendment should begin.
           */
          amendment_end?: AmendmentStart.AmendmentEnd;

          /**
           * Use the `end` time of a given discount.
           */
          discount_end?: AmendmentStart.DiscountEnd;

          /**
           * A precise Unix timestamp for the amendment to start.
           */
          timestamp?: number;

          /**
           * Select one of three ways to pass the `amendment_start`.
           */
          type: AmendmentStart.Type;
        }

        namespace AmendmentStart {
          interface AmendmentEnd {
            /**
             * The position of the previous amendment in the `amendments` array after which this amendment should begin. Indexes start from 0 and must be less than the index of the current amendment in the array.
             */
            index: number;
          }

          interface DiscountEnd {
            /**
             * The ID of a specific discount.
             */
            discount: string;
          }

          type Type =
            | 'amendment_end'
            | 'discount_end'
            | 'now'
            | 'schedule_end'
            | 'timestamp'
            | 'trial_end'
            | 'trial_start'
            | 'upcoming_invoice';
        }

        type BillingCycleAnchor = 'amendment_start' | 'automatic';

        interface DiscountAction {
          /**
           * Details of the discount to add.
           */
          add?: DiscountAction.Add;

          /**
           * Details of the discount to remove.
           */
          remove?: DiscountAction.Remove;

          /**
           * Details of the discount to replace the existing discounts with.
           */
          set?: DiscountAction.Set;

          /**
           * Determines the type of discount action.
           */
          type: DiscountAction.Type;
        }

        namespace DiscountAction {
          interface Add {
            /**
             * The coupon code to redeem.
             */
            coupon?: string;

            /**
             * An ID of an existing discount for a coupon that was already redeemed.
             */
            discount?: string;

            /**
             * Details to determine how long the discount should be applied for.
             */
            discount_end?: Add.DiscountEnd;

            /**
             * The index, starting at 0, at which to position the new discount. When not supplied, Stripe defaults to appending the discount to the end of the `discounts` array.
             */
            index?: number;

            /**
             * The promotion code to redeem.
             */
            promotion_code?: string;
          }

          namespace Add {
            interface DiscountEnd {
              /**
               * The type of calculation made to determine when the discount ends.
               */
              type: 'amendment_end';
            }
          }

          interface Remove {
            /**
             * The coupon code to remove from the `discounts` array.
             */
            coupon?: string;

            /**
             * The ID of a discount to remove from the `discounts` array.
             */
            discount?: string;

            /**
             * The ID of a promotion code to remove from the `discounts` array.
             */
            promotion_code?: string;
          }

          interface Set {
            /**
             * The coupon code to replace the `discounts` array with.
             */
            coupon?: string;

            /**
             * An ID of an existing discount to replace the `discounts` array with.
             */
            discount?: string;

            /**
             * An ID of an existing promotion code to replace the `discounts` array with.
             */
            promotion_code?: string;
          }

          type Type = 'add' | 'remove' | 'set';
        }

        interface ItemAction {
          /**
           * Details of the subscription item to add. If an item with the same `price` exists, it will be replaced by this new item. Otherwise, it adds the new item.
           */
          add?: ItemAction.Add;

          /**
           * Details of the subscription item to remove.
           */
          remove?: ItemAction.Remove;

          /**
           * Details of the subscription item to replace the existing items with. If an item with the `set[price]` already exists, the `items` array is not cleared. Instead, all of the other `set` properties that are passed in this request will replace the existing values for the configuration item.
           */
          set?: ItemAction.Set;

          /**
           * Determines the type of item action.
           */
          type: ItemAction.Type;
        }

        namespace ItemAction {
          interface Add {
            /**
             * The discounts applied to the item. Subscription item discounts are applied before subscription discounts.
             */
            discounts?: Array<Add.Discount>;

            /**
             * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: Stripe.MetadataParam;

            /**
             * The ID of the price object.
             */
            price: string;

            /**
             * Quantity for this item.
             */
            quantity?: number;

            /**
             * The tax rates that apply to this subscription item. When set, the `default_tax_rates` on the subscription do not apply to this `subscription_item`.
             */
            tax_rates?: Array<string>;

            /**
             * Options that configure the trial on the subscription item.
             */
            trial?: Add.Trial;
          }

          namespace Add {
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

              /**
               * ID of the promotion code to create a new discount for.
               */
              promotion_code?: string;
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

            interface Trial {
              /**
               * List of price IDs which, if present on the subscription following a paid trial, constitute opting-in to the paid trial. Currently only supports at most 1 price ID.
               */
              converts_to?: Array<string>;

              /**
               * Determines the type of trial for this item.
               */
              type: Trial.Type;
            }

            namespace Trial {
              type Type = 'free' | 'paid';
            }
          }

          interface Remove {
            /**
             * ID of a price to remove.
             */
            price: string;
          }

          interface Set {
            /**
             * If an item with the `price` already exists, passing this will override the `discounts` array on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `discounts`.
             */
            discounts?: Array<Set.Discount>;

            /**
             * If an item with the `price` already exists, passing this will override the `metadata` on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `metadata`.
             */
            metadata?: Stripe.MetadataParam;

            /**
             * The ID of the price object.
             */
            price: string;

            /**
             * If an item with the `price` already exists, passing this will override the quantity on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `quantity`.
             */
            quantity?: number;

            /**
             * If an item with the `price` already exists, passing this will override the `tax_rates` array on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `tax_rates`.
             */
            tax_rates?: Array<string>;

            /**
             * If an item with the `price` already exists, passing this will override the `trial` configuration on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `trial`.
             */
            trial?: Set.Trial;
          }

          namespace Set {
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

              /**
               * ID of the promotion code to create a new discount for.
               */
              promotion_code?: string;
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

            interface Trial {
              /**
               * List of price IDs which, if present on the subscription following a paid trial, constitute opting-in to the paid trial. Currently only supports at most 1 price ID.
               */
              converts_to?: Array<string>;

              /**
               * Determines the type of trial for this item.
               */
              type: Trial.Type;
            }

            namespace Trial {
              type Type = 'free' | 'paid';
            }
          }

          type Type = 'add' | 'remove' | 'set';
        }

        interface MetadataAction {
          /**
           * Key-value pairs to add to schedule phase metadata. These values will merge with existing schedule phase metadata.
           */
          add?: {
            [key: string]: string;
          };

          /**
           * Keys to remove from schedule phase metadata.
           */
          remove?: Array<string>;

          /**
           * Key-value pairs to set as schedule phase metadata. Existing schedule phase metadata will be overwritten.
           */
          set?: Stripe.Emptyable<{
            [key: string]: string;
          }>;

          /**
           * Select one of three ways to update phase-level `metadata` on subscription schedules.
           */
          type: MetadataAction.Type;
        }

        namespace MetadataAction {
          type Type = 'add' | 'remove' | 'set';
        }

        type ProrationBehavior =
          | 'always_invoice'
          | 'create_prorations'
          | 'none';

        interface SetPauseCollection {
          /**
           * Details of the pause_collection behavior to apply to the amendment.
           */
          set?: SetPauseCollection.Set;

          /**
           * Determines the type of the pause_collection amendment.
           */
          type: SetPauseCollection.Type;
        }

        namespace SetPauseCollection {
          interface Set {
            /**
             * The payment collection behavior for this subscription while paused. One of `keep_as_draft`, `mark_uncollectible`, or `void`.
             */
            behavior: Set.Behavior;
          }

          namespace Set {
            type Behavior = 'keep_as_draft' | 'mark_uncollectible' | 'void';
          }

          type Type = 'remove' | 'set';
        }

        type SetScheduleEnd = 'amendment_end' | 'amendment_start';

        interface TrialSettings {
          /**
           * Defines how the subscription should behave when a trial ends.
           */
          end_behavior?: TrialSettings.EndBehavior;
        }

        namespace TrialSettings {
          interface EndBehavior {
            /**
             * Configure how an opt-in following a paid trial is billed when using `billing_behavior: prorate_up_front`.
             */
            prorate_up_front?: EndBehavior.ProrateUpFront;
          }

          namespace EndBehavior {
            type ProrateUpFront = 'defer' | 'include';
          }
        }
      }

      interface Prebilling {
        /**
         * The beginning of the prebilled time period. The default value is `now`.
         */
        bill_from?: Prebilling.BillFrom;

        /**
         * The end of the prebilled time period.
         */
        bill_until?: Prebilling.BillUntil;

        /**
         * When the prebilling invoice should be created. The default value is `now`.
         */
        invoice_at?: 'now';

        /**
         * Whether to cancel or preserve `prebilling` if the subscription is updated during the prebilled period. The default value is `reset`.
         */
        update_behavior?: Prebilling.UpdateBehavior;
      }

      namespace Prebilling {
        interface BillFrom {
          /**
           * Start the prebilled period when a specified amendment begins.
           */
          amendment_start?: BillFrom.AmendmentStart;

          /**
           * Start the prebilled period at a precise integer timestamp, starting from the Unix epoch.
           */
          timestamp?: number;

          /**
           * Select one of several ways to pass the `bill_from` value.
           */
          type: BillFrom.Type;
        }

        namespace BillFrom {
          interface AmendmentStart {
            /**
             * The position of the amendment in the `amendments` array with which prebilling should begin. Indexes start from 0 and must be less than the total number of supplied amendments.
             */
            index: number;
          }

          type Type = 'amendment_start' | 'now' | 'timestamp';
        }

        interface BillUntil {
          /**
           * End the prebilled period when a specified amendment ends.
           */
          amendment_end?: BillUntil.AmendmentEnd;

          /**
           * Time span for prebilling, starting from `bill_from`.
           */
          duration?: BillUntil.Duration;

          /**
           * End the prebilled period at a precise integer timestamp, starting from the Unix epoch.
           */
          timestamp?: number;

          /**
           * Select one of several ways to pass the `bill_until` value.
           */
          type: BillUntil.Type;
        }

        namespace BillUntil {
          interface AmendmentEnd {
            /**
             * The position of the amendment in the `amendments` array at which prebilling should end. Indexes start from 0 and must be less than the total number of supplied amendments.
             */
            index: number;
          }

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

          type Type =
            | 'amendment_end'
            | 'duration'
            | 'schedule_end'
            | 'timestamp';
        }

        type UpdateBehavior = 'prebill' | 'reset';
      }

      type ProrationBehavior = 'always_invoice' | 'create_prorations' | 'none';

      interface ScheduleSettings {
        /**
         * Behavior of the subscription schedule and underlying subscription when it ends.
         */
        end_behavior?: ScheduleSettings.EndBehavior;
      }

      namespace ScheduleSettings {
        type EndBehavior = 'cancel' | 'release';
      }
    }

    interface SubscriptionScheduleCancelParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * If the subscription schedule is `active`, indicates if a final invoice will be generated that contains any un-invoiced metered usage and new/pending proration invoice items. Defaults to `true`.
       */
      invoice_now?: boolean;

      /**
       * If the subscription schedule is `active`, indicates if the cancellation should be prorated. Defaults to `true`.
       */
      prorate?: boolean;
    }

    interface SubscriptionScheduleReleaseParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Keep any cancellation on the subscription that the schedule has set
       */
      preserve_cancel_date?: boolean;
    }

    class SubscriptionSchedulesResource {
      /**
       * Creates a new subscription schedule object. Each customer can have up to 500 active or scheduled subscriptions.
       */
      create(
        params?: SubscriptionScheduleCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;
      create(
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;

      /**
       * Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.
       */
      retrieve(
        id: string,
        params?: SubscriptionScheduleRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;

      /**
       * Updates an existing subscription schedule.
       */
      update(
        id: string,
        params?: SubscriptionScheduleUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;

      /**
       * Retrieves the list of your subscription schedules.
       */
      list(
        params?: SubscriptionScheduleListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.SubscriptionSchedule>;
      list(
        options?: RequestOptions
      ): ApiListPromise<Stripe.SubscriptionSchedule>;

      /**
       * Amends an existing subscription schedule.
       */
      amend(
        id: string,
        params?: SubscriptionScheduleAmendParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;
      amend(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;

      /**
       * Cancels a subscription schedule and its associated subscription immediately (if the subscription schedule has an active subscription). A subscription schedule can only be canceled if its status is not_started or active.
       */
      cancel(
        id: string,
        params?: SubscriptionScheduleCancelParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;
      cancel(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;

      /**
       * Releases the subscription schedule immediately, which will stop scheduling of its phases, but leave any existing subscription in place. A schedule can only be released if its status is not_started or active. If the subscription schedule is currently associated with a subscription, releasing it will remove its subscription property and set the subscription's ID to the released_subscription property.
       */
      release(
        id: string,
        params?: SubscriptionScheduleReleaseParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;
      release(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;
    }
  }
}
