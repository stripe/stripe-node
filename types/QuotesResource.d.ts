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
       * A list of lines on the quote. These lines describe changes that will be used to create new subscription schedules or update existing subscription schedules when the quote is accepted.
       */
      lines?: Array<QuoteCreateParams.Line>;

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
       * List representing overrides for `subscription_data` configurations for specific groups.
       */
      subscription_data_overrides?: Array<
        QuoteCreateParams.SubscriptionDataOverride
      >;

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

      interface Line {
        /**
         * An array of operations the quote line performs.
         */
        actions?: Array<Line.Action>;

        /**
         * Details to identify the subscription schedule the quote line applies to.
         */
        applies_to?: Line.AppliesTo;

        /**
         * For a point-in-time operation, this attribute lets you set or update whether the subscription's billing cycle anchor is reset at the `starts_at` timestamp.
         */
        billing_cycle_anchor?: Line.BillingCycleAnchor;

        /**
         * Details to identify the end of the time range modified by the proposed change. If not supplied, the quote line is considered a point-in-time operation that only affects the exact timestamp at `starts_at`, and a restricted set of attributes is supported on the quote line.
         */
        ends_at?: Line.EndsAt;

        /**
         * Changes to how Stripe handles prorations during the quote line's time span. Affects if and how prorations are created when a future phase starts.
         */
        proration_behavior?: Line.ProrationBehavior;

        /**
         * Timestamp helper to end the underlying schedule early, based on the acompanying line's start or end date.
         */
        set_schedule_end?: Line.SetScheduleEnd;

        /**
         * Details to identify the earliest timestamp where the proposed change should take effect.
         */
        starts_at?: Line.StartsAt;

        /**
         * Settings related to subscription trials.
         */
        trial_settings?: Line.TrialSettings;
      }

      namespace Line {
        interface Action {
          /**
           * Details for the `add_discount` type.
           */
          add_discount?: Action.AddDiscount;

          /**
           * Details for the `add_item` type.
           */
          add_item?: Action.AddItem;

          /**
           * Details for the `add_metadata` type: specify a hash of key-value pairs.
           */
          add_metadata?: {
            [key: string]: string;
          };

          /**
           * Details for the `remove_discount` type.
           */
          remove_discount?: Action.RemoveDiscount;

          /**
           * Details for the `remove_item` type.
           */
          remove_item?: Action.RemoveItem;

          /**
           * Details for the `remove_metadata` type: specify an array of metadata keys.
           */
          remove_metadata?: Array<string>;

          /**
           * Details for the `set_discounts` type.
           */
          set_discounts?: Array<Action.SetDiscount>;

          /**
           * Details for the `set_items` type.
           */
          set_items?: Array<Action.SetItem>;

          /**
           * Details for the `set_metadata` type: specify an array of key-value pairs.
           */
          set_metadata?: Stripe.Emptyable<{
            [key: string]: string;
          }>;

          /**
           * The type of action the quote line performs.
           */
          type: Action.Type;
        }

        namespace Action {
          interface AddDiscount {
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
            discount_end?: AddDiscount.DiscountEnd;

            /**
             * The index, starting at 0, at which to position the new discount. When not supplied, Stripe defaults to appending the discount to the end of the `discounts` array.
             */
            index?: number;
          }

          namespace AddDiscount {
            interface DiscountEnd {
              /**
               * The type of calculation made to determine when the discount ends.
               */
              type: 'line_ends_at';
            }
          }

          interface AddItem {
            /**
             * The discounts applied to the item. Subscription item discounts are applied before subscription discounts.
             */
            discounts?: Array<AddItem.Discount>;

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
            trial?: AddItem.Trial;
          }

          namespace AddItem {
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

            interface Trial {
              /**
               * List of price IDs which, if present on the subscription following a paid trial, constitute opting-in to the paid trial.
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

          interface RemoveDiscount {
            /**
             * The coupon code to remove from the `discounts` array.
             */
            coupon?: string;

            /**
             * The ID of a discount to remove from the `discounts` array.
             */
            discount?: string;
          }

          interface RemoveItem {
            /**
             * ID of a price to remove.
             */
            price: string;
          }

          interface SetDiscount {
            /**
             * The coupon code to replace the `discounts` array with.
             */
            coupon?: string;

            /**
             * An ID of an existing discount to replace the `discounts` array with.
             */
            discount?: string;
          }

          interface SetItem {
            /**
             * If an item with the `price` already exists, passing this will override the `discounts` array on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `discounts`.
             */
            discounts?: Array<SetItem.Discount>;

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
            trial?: SetItem.Trial;
          }

          namespace SetItem {
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

            interface Trial {
              /**
               * List of price IDs which, if present on the subscription following a paid trial, constitute opting-in to the paid trial.
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

          type Type =
            | 'add_discount'
            | 'add_item'
            | 'add_metadata'
            | 'clear_discounts'
            | 'clear_metadata'
            | 'remove_discount'
            | 'remove_item'
            | 'remove_metadata'
            | 'set_discounts'
            | 'set_items'
            | 'set_metadata';
        }

        interface AppliesTo {
          /**
           * A custom string that identifies a new subscription schedule being created upon quote acceptance. All quote lines with the same `new_reference` field will be applied to the creation of a new subscription schedule.
           */
          new_reference?: string;

          /**
           * The ID of the schedule the line applies to.
           */
          subscription_schedule?: string;

          /**
           * Describes whether the quote line is affecting a new schedule or an existing schedule.
           */
          type: AppliesTo.Type;
        }

        namespace AppliesTo {
          type Type = 'new_reference' | 'subscription_schedule';
        }

        type BillingCycleAnchor = 'automatic' | 'line_starts_at';

        interface EndsAt {
          /**
           * Use the `end` time of a given discount.
           */
          discount_end?: EndsAt.DiscountEnd;

          /**
           * Time span for the quote line starting from the `starts_at` date.
           */
          duration?: EndsAt.Duration;

          /**
           * A precise Unix timestamp.
           */
          timestamp?: number;

          /**
           * Select a way to pass in `ends_at`.
           */
          type: EndsAt.Type;
        }

        namespace EndsAt {
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
            | 'quote_acceptance_date'
            | 'schedule_end'
            | 'timestamp'
            | 'upcoming_invoice';
        }

        type ProrationBehavior =
          | 'always_invoice'
          | 'create_prorations'
          | 'none';

        type SetScheduleEnd = 'line_ends_at' | 'line_starts_at';

        interface StartsAt {
          /**
           * Use the `end` time of a given discount.
           */
          discount_end?: StartsAt.DiscountEnd;

          /**
           * The timestamp the given line ends at.
           */
          line_ends_at?: StartsAt.LineEndsAt;

          /**
           * A precise Unix timestamp.
           */
          timestamp?: number;

          /**
           * Select a way to pass in `starts_at`.
           */
          type: StartsAt.Type;
        }

        namespace StartsAt {
          interface DiscountEnd {
            /**
             * The ID of a specific discount.
             */
            discount: string;
          }

          interface LineEndsAt {
            /**
             * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
             */
            index?: number;
          }

          type Type =
            | 'discount_end'
            | 'line_ends_at'
            | 'now'
            | 'quote_acceptance_date'
            | 'schedule_end'
            | 'timestamp'
            | 'upcoming_invoice';
        }

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
         * Describes the period to bill for upon accepting the quote.
         */
        bill_on_acceptance?: SubscriptionData.BillOnAcceptance;

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
         * Behavior of the subscription schedule and underlying subscription when it ends.
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

        interface BillOnAcceptance {
          /**
           * The start of the period to bill from when the Quote is accepted.
           */
          bill_from?: BillOnAcceptance.BillFrom;

          /**
           * The end of the period to bill until when the Quote is accepted.
           */
          bill_until?: BillOnAcceptance.BillUntil;
        }

        namespace BillOnAcceptance {
          interface BillFrom {
            /**
             * Details of a Quote line to start the bill period from.
             */
            line_starts_at?: BillFrom.LineStartsAt;

            /**
             * A precise Unix timestamp.
             */
            timestamp?: number;

            /**
             * The type of method to specify the `bill_from` time.
             */
            type: BillFrom.Type;
          }

          namespace BillFrom {
            interface LineStartsAt {
              /**
               * The ID of a quote line.
               */
              id?: string;

              /**
               * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
               */
              index?: number;
            }

            type Type =
              | 'line_starts_at'
              | 'now'
              | 'quote_acceptance_date'
              | 'timestamp';
          }

          interface BillUntil {
            /**
             * Details of the duration over which to bill.
             */
            duration?: BillUntil.Duration;

            /**
             * Details of a Quote line item from which to bill until.
             */
            line_ends_at?: BillUntil.LineEndsAt;

            /**
             * A precise Unix timestamp.
             */
            timestamp?: number;

            /**
             * The type of method to specify the `bill_until` time.
             */
            type: BillUntil.Type;
          }

          namespace BillUntil {
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

            interface LineEndsAt {
              /**
               * The ID of a quote line.
               */
              id?: string;

              /**
               * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
               */
              index?: number;
            }

            type Type =
              | 'duration'
              | 'line_ends_at'
              | 'schedule_end'
              | 'timestamp'
              | 'upcoming_invoice';
          }
        }

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

      interface SubscriptionDataOverride {
        /**
         * Whether the override applies to an existing Subscription Schedule or a new Subscription Schedule.
         */
        applies_to: SubscriptionDataOverride.AppliesTo;

        /**
         * Describes the period to bill for upon accepting the quote.
         */
        bill_on_acceptance?: SubscriptionDataOverride.BillOnAcceptance;

        /**
         * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time.`prorate_up_front` will bill for all phases within the current billing cycle up front.
         */
        billing_behavior?: SubscriptionDataOverride.BillingBehavior;

        /**
         * The customer the Subscription Data override applies to. This is only relevant when `applies_to.type=new_reference`.
         */
        customer?: string;

        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription.
         */
        description?: string;

        /**
         * Behavior of the subscription schedule and underlying subscription when it ends.
         */
        end_behavior?: SubscriptionDataOverride.EndBehavior;

        /**
         * Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations). When creating a subscription, valid values are `create_prorations` or `none`.
         *
         * When updating a subscription, valid values are `create_prorations`, `none`, or `always_invoice`.
         *
         * Passing `create_prorations` will cause proration invoice items to be created when applicable. These proration items will only be invoiced immediately under [certain conditions](https://stripe.com/docs/subscriptions/upgrading-downgrading#immediate-payment). In order to always invoice immediately for prorations, pass `always_invoice`.
         *
         * Prorations can be disabled by passing `none`.
         */
        proration_behavior?: SubscriptionDataOverride.ProrationBehavior;
      }

      namespace SubscriptionDataOverride {
        interface AppliesTo {
          /**
           * A custom string that identifies a new subscription schedule being created upon quote acceptance. All quote lines with the same `new_reference` field will be applied to the creation of a new subscription schedule.
           */
          new_reference?: string;

          /**
           * The ID of the schedule the line applies to.
           */
          subscription_schedule?: string;

          /**
           * Describes whether the quote line is affecting a new schedule or an existing schedule.
           */
          type: AppliesTo.Type;
        }

        namespace AppliesTo {
          type Type = 'new_reference' | 'subscription_schedule';
        }

        type BillingBehavior = 'prorate_on_next_phase' | 'prorate_up_front';

        interface BillOnAcceptance {
          /**
           * The start of the period to bill from when the Quote is accepted.
           */
          bill_from?: BillOnAcceptance.BillFrom;

          /**
           * The end of the period to bill until when the Quote is accepted.
           */
          bill_until?: BillOnAcceptance.BillUntil;
        }

        namespace BillOnAcceptance {
          interface BillFrom {
            /**
             * Details of a Quote line to start the bill period from.
             */
            line_starts_at?: BillFrom.LineStartsAt;

            /**
             * A precise Unix timestamp.
             */
            timestamp?: number;

            /**
             * The type of method to specify the `bill_from` time.
             */
            type: BillFrom.Type;
          }

          namespace BillFrom {
            interface LineStartsAt {
              /**
               * The ID of a quote line.
               */
              id?: string;

              /**
               * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
               */
              index?: number;
            }

            type Type =
              | 'line_starts_at'
              | 'now'
              | 'quote_acceptance_date'
              | 'timestamp';
          }

          interface BillUntil {
            /**
             * Details of the duration over which to bill.
             */
            duration?: BillUntil.Duration;

            /**
             * Details of a Quote line item from which to bill until.
             */
            line_ends_at?: BillUntil.LineEndsAt;

            /**
             * A precise Unix timestamp.
             */
            timestamp?: number;

            /**
             * The type of method to specify the `bill_until` time.
             */
            type: BillUntil.Type;
          }

          namespace BillUntil {
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

            interface LineEndsAt {
              /**
               * The ID of a quote line.
               */
              id?: string;

              /**
               * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
               */
              index?: number;
            }

            type Type =
              | 'duration'
              | 'line_ends_at'
              | 'schedule_end'
              | 'timestamp'
              | 'upcoming_invoice';
          }
        }

        type EndBehavior = 'cancel' | 'release';

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
       * A list of lines on the quote. These lines describe changes that will be used to create new subscription schedules or update existing subscription schedules when the quote is accepted.
       */
      lines?: Array<QuoteUpdateParams.Line>;

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
       * List representing overrides for `subscription_data` configurations for specific groups.
       */
      subscription_data_overrides?: Stripe.Emptyable<
        Array<QuoteUpdateParams.SubscriptionDataOverride>
      >;

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

      interface Line {
        /**
         * An array of operations the quote line performs.
         */
        actions?: Array<Line.Action>;

        /**
         * Details to identify the subscription schedule the quote line applies to.
         */
        applies_to?: Line.AppliesTo;

        /**
         * For a point-in-time operation, this attribute lets you set or update whether the subscription's billing cycle anchor is reset at the `starts_at` timestamp.
         */
        billing_cycle_anchor?: Line.BillingCycleAnchor;

        /**
         * Details to identify the end of the time range modified by the proposed change. If not supplied, the quote line is considered a point-in-time operation that only affects the exact timestamp at `starts_at`, and a restricted set of attributes is supported on the quote line.
         */
        ends_at?: Line.EndsAt;

        /**
         * The ID of an existing line on the quote.
         */
        id?: string;

        /**
         * Changes to how Stripe handles prorations during the quote line's time span. Affects if and how prorations are created when a future phase starts.
         */
        proration_behavior?: Line.ProrationBehavior;

        /**
         * Timestamp helper to end the underlying schedule early, based on the acompanying line's start or end date.
         */
        set_schedule_end?: Line.SetScheduleEnd;

        /**
         * Details to identify the earliest timestamp where the proposed change should take effect.
         */
        starts_at?: Line.StartsAt;

        /**
         * Settings related to subscription trials.
         */
        trial_settings?: Line.TrialSettings;
      }

      namespace Line {
        interface Action {
          /**
           * Details for the `add_discount` type.
           */
          add_discount?: Action.AddDiscount;

          /**
           * Details for the `add_item` type.
           */
          add_item?: Action.AddItem;

          /**
           * Details for the `add_metadata` type: specify a hash of key-value pairs.
           */
          add_metadata?: {
            [key: string]: string;
          };

          /**
           * Details for the `remove_discount` type.
           */
          remove_discount?: Action.RemoveDiscount;

          /**
           * Details for the `remove_item` type.
           */
          remove_item?: Action.RemoveItem;

          /**
           * Details for the `remove_metadata` type: specify an array of metadata keys.
           */
          remove_metadata?: Array<string>;

          /**
           * Details for the `set_discounts` type.
           */
          set_discounts?: Array<Action.SetDiscount>;

          /**
           * Details for the `set_items` type.
           */
          set_items?: Array<Action.SetItem>;

          /**
           * Details for the `set_metadata` type: specify an array of key-value pairs.
           */
          set_metadata?: Stripe.Emptyable<{
            [key: string]: string;
          }>;

          /**
           * The type of action the quote line performs.
           */
          type: Action.Type;
        }

        namespace Action {
          interface AddDiscount {
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
            discount_end?: AddDiscount.DiscountEnd;

            /**
             * The index, starting at 0, at which to position the new discount. When not supplied, Stripe defaults to appending the discount to the end of the `discounts` array.
             */
            index?: number;
          }

          namespace AddDiscount {
            interface DiscountEnd {
              /**
               * The type of calculation made to determine when the discount ends.
               */
              type: 'line_ends_at';
            }
          }

          interface AddItem {
            /**
             * The discounts applied to the item. Subscription item discounts are applied before subscription discounts.
             */
            discounts?: Array<AddItem.Discount>;

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
            trial?: AddItem.Trial;
          }

          namespace AddItem {
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

            interface Trial {
              /**
               * List of price IDs which, if present on the subscription following a paid trial, constitute opting-in to the paid trial.
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

          interface RemoveDiscount {
            /**
             * The coupon code to remove from the `discounts` array.
             */
            coupon?: string;

            /**
             * The ID of a discount to remove from the `discounts` array.
             */
            discount?: string;
          }

          interface RemoveItem {
            /**
             * ID of a price to remove.
             */
            price: string;
          }

          interface SetDiscount {
            /**
             * The coupon code to replace the `discounts` array with.
             */
            coupon?: string;

            /**
             * An ID of an existing discount to replace the `discounts` array with.
             */
            discount?: string;
          }

          interface SetItem {
            /**
             * If an item with the `price` already exists, passing this will override the `discounts` array on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `discounts`.
             */
            discounts?: Array<SetItem.Discount>;

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
            trial?: SetItem.Trial;
          }

          namespace SetItem {
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

            interface Trial {
              /**
               * List of price IDs which, if present on the subscription following a paid trial, constitute opting-in to the paid trial.
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

          type Type =
            | 'add_discount'
            | 'add_item'
            | 'add_metadata'
            | 'clear_discounts'
            | 'clear_metadata'
            | 'remove_discount'
            | 'remove_item'
            | 'remove_metadata'
            | 'set_discounts'
            | 'set_items'
            | 'set_metadata';
        }

        interface AppliesTo {
          /**
           * A custom string that identifies a new subscription schedule being created upon quote acceptance. All quote lines with the same `new_reference` field will be applied to the creation of a new subscription schedule.
           */
          new_reference?: string;

          /**
           * The ID of the schedule the line applies to.
           */
          subscription_schedule?: string;

          /**
           * Describes whether the quote line is affecting a new schedule or an existing schedule.
           */
          type: AppliesTo.Type;
        }

        namespace AppliesTo {
          type Type = 'new_reference' | 'subscription_schedule';
        }

        type BillingCycleAnchor = 'automatic' | 'line_starts_at';

        interface EndsAt {
          /**
           * Use the `end` time of a given discount.
           */
          discount_end?: EndsAt.DiscountEnd;

          /**
           * Time span for the quote line starting from the `starts_at` date.
           */
          duration?: EndsAt.Duration;

          /**
           * A precise Unix timestamp.
           */
          timestamp?: number;

          /**
           * Select a way to pass in `ends_at`.
           */
          type: EndsAt.Type;
        }

        namespace EndsAt {
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
            | 'quote_acceptance_date'
            | 'schedule_end'
            | 'timestamp'
            | 'upcoming_invoice';
        }

        type ProrationBehavior =
          | 'always_invoice'
          | 'create_prorations'
          | 'none';

        type SetScheduleEnd = 'line_ends_at' | 'line_starts_at';

        interface StartsAt {
          /**
           * Use the `end` time of a given discount.
           */
          discount_end?: StartsAt.DiscountEnd;

          /**
           * The timestamp the given line ends at.
           */
          line_ends_at?: StartsAt.LineEndsAt;

          /**
           * A precise Unix timestamp.
           */
          timestamp?: number;

          /**
           * Select a way to pass in `starts_at`.
           */
          type: StartsAt.Type;
        }

        namespace StartsAt {
          interface DiscountEnd {
            /**
             * The ID of a specific discount.
             */
            discount: string;
          }

          interface LineEndsAt {
            /**
             * The ID of a quote line.
             */
            id?: string;

            /**
             * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
             */
            index?: number;
          }

          type Type =
            | 'discount_end'
            | 'line_ends_at'
            | 'now'
            | 'quote_acceptance_date'
            | 'schedule_end'
            | 'timestamp'
            | 'upcoming_invoice';
        }

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
         * Describes the period to bill for upon accepting the quote.
         */
        bill_on_acceptance?: Stripe.Emptyable<
          SubscriptionData.BillOnAcceptance
        >;

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
         * Behavior of the subscription schedule and underlying subscription when it ends.
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

        interface BillOnAcceptance {
          /**
           * The start of the period to bill from when the Quote is accepted.
           */
          bill_from?: BillOnAcceptance.BillFrom;

          /**
           * The end of the period to bill until when the Quote is accepted.
           */
          bill_until?: BillOnAcceptance.BillUntil;
        }

        namespace BillOnAcceptance {
          interface BillFrom {
            /**
             * Details of a Quote line to start the bill period from.
             */
            line_starts_at?: BillFrom.LineStartsAt;

            /**
             * A precise Unix timestamp.
             */
            timestamp?: number;

            /**
             * The type of method to specify the `bill_from` time.
             */
            type: BillFrom.Type;
          }

          namespace BillFrom {
            interface LineStartsAt {
              /**
               * The ID of a quote line.
               */
              id?: string;

              /**
               * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
               */
              index?: number;
            }

            type Type =
              | 'line_starts_at'
              | 'now'
              | 'quote_acceptance_date'
              | 'timestamp';
          }

          interface BillUntil {
            /**
             * Details of the duration over which to bill.
             */
            duration?: BillUntil.Duration;

            /**
             * Details of a Quote line item from which to bill until.
             */
            line_ends_at?: BillUntil.LineEndsAt;

            /**
             * A precise Unix timestamp.
             */
            timestamp?: number;

            /**
             * The type of method to specify the `bill_until` time.
             */
            type: BillUntil.Type;
          }

          namespace BillUntil {
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

            interface LineEndsAt {
              /**
               * The ID of a quote line.
               */
              id?: string;

              /**
               * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
               */
              index?: number;
            }

            type Type =
              | 'duration'
              | 'line_ends_at'
              | 'schedule_end'
              | 'timestamp'
              | 'upcoming_invoice';
          }
        }

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

      interface SubscriptionDataOverride {
        /**
         * Whether the override applies to an existing Subscription Schedule or a new Subscription Schedule.
         */
        applies_to: SubscriptionDataOverride.AppliesTo;

        /**
         * Describes the period to bill for upon accepting the quote.
         */
        bill_on_acceptance?: Stripe.Emptyable<
          SubscriptionDataOverride.BillOnAcceptance
        >;

        /**
         * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time.`prorate_up_front` will bill for all phases within the current billing cycle up front.
         */
        billing_behavior?: SubscriptionDataOverride.BillingBehavior;

        /**
         * The customer the Subscription Data override applies to.
         */
        customer?: string;

        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription.
         */
        description?: string;

        /**
         * Behavior of the subscription schedule and underlying subscription when it ends.
         */
        end_behavior?: SubscriptionDataOverride.EndBehavior;

        /**
         * Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations). When creating a subscription, valid values are `create_prorations` or `none`.
         *
         * When updating a subscription, valid values are `create_prorations`, `none`, or `always_invoice`.
         *
         * Passing `create_prorations` will cause proration invoice items to be created when applicable. These proration items will only be invoiced immediately under [certain conditions](https://stripe.com/docs/subscriptions/upgrading-downgrading#immediate-payment). In order to always invoice immediately for prorations, pass `always_invoice`.
         *
         * Prorations can be disabled by passing `none`.
         */
        proration_behavior?: SubscriptionDataOverride.ProrationBehavior;
      }

      namespace SubscriptionDataOverride {
        interface AppliesTo {
          /**
           * A custom string that identifies a new subscription schedule being created upon quote acceptance. All quote lines with the same `new_reference` field will be applied to the creation of a new subscription schedule.
           */
          new_reference?: string;

          /**
           * The ID of the schedule the line applies to.
           */
          subscription_schedule?: string;

          /**
           * Describes whether the quote line is affecting a new schedule or an existing schedule.
           */
          type: AppliesTo.Type;
        }

        namespace AppliesTo {
          type Type = 'new_reference' | 'subscription_schedule';
        }

        type BillingBehavior = 'prorate_on_next_phase' | 'prorate_up_front';

        interface BillOnAcceptance {
          /**
           * The start of the period to bill from when the Quote is accepted.
           */
          bill_from?: BillOnAcceptance.BillFrom;

          /**
           * The end of the period to bill until when the Quote is accepted.
           */
          bill_until?: BillOnAcceptance.BillUntil;
        }

        namespace BillOnAcceptance {
          interface BillFrom {
            /**
             * Details of a Quote line to start the bill period from.
             */
            line_starts_at?: BillFrom.LineStartsAt;

            /**
             * A precise Unix timestamp.
             */
            timestamp?: number;

            /**
             * The type of method to specify the `bill_from` time.
             */
            type: BillFrom.Type;
          }

          namespace BillFrom {
            interface LineStartsAt {
              /**
               * The ID of a quote line.
               */
              id?: string;

              /**
               * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
               */
              index?: number;
            }

            type Type =
              | 'line_starts_at'
              | 'now'
              | 'quote_acceptance_date'
              | 'timestamp';
          }

          interface BillUntil {
            /**
             * Details of the duration over which to bill.
             */
            duration?: BillUntil.Duration;

            /**
             * Details of a Quote line item from which to bill until.
             */
            line_ends_at?: BillUntil.LineEndsAt;

            /**
             * A precise Unix timestamp.
             */
            timestamp?: number;

            /**
             * The type of method to specify the `bill_until` time.
             */
            type: BillUntil.Type;
          }

          namespace BillUntil {
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

            interface LineEndsAt {
              /**
               * The ID of a quote line.
               */
              id?: string;

              /**
               * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
               */
              index?: number;
            }

            type Type =
              | 'duration'
              | 'line_ends_at'
              | 'schedule_end'
              | 'timestamp'
              | 'upcoming_invoice';
          }
        }

        type EndBehavior = 'cancel' | 'release';

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
      type Status =
        | 'accepted'
        | 'accepting'
        | 'canceled'
        | 'draft'
        | 'open'
        | 'stale';
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

    interface QuoteDraftQuoteParams {
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

    interface QuoteListLinesParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface QuoteMarkStaleQuoteParams {
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

    interface QuotePreviewInvoiceLinesParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface QuotePreviewInvoicesParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface QuotePreviewSubscriptionSchedulesParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface QuoteReestimateParams {
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
       * Converts a stale quote to draft.
       */
      draftQuote(
        id: string,
        params?: QuoteDraftQuoteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;
      draftQuote(
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
       * Retrieves a paginated list of lines for a quote. These lines describe changes that will be used to create new subscription schedules or update existing subscription schedules when the quote is accepted.
       */
      listLines(
        id: string,
        params?: QuoteListLinesParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.QuoteLine>;
      listLines(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.QuoteLine>;

      /**
       * Converts a draft or open quote to stale.
       */
      markStaleQuote(
        id: string,
        params?: QuoteMarkStaleQuoteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;
      markStaleQuote(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;

      /**
       * Download the PDF for a finalized quote
       */
      pdf(
        id: string,
        params?: QuotePdfParams,
        options?: RequestOptions
      ): Promise<StripeStreamResponse>;
      pdf(id: string, options?: RequestOptions): Promise<StripeStreamResponse>;

      /**
       * Preview the invoice line items that would be generated by accepting the quote.
       */
      previewInvoiceLines(
        quoteId: string,
        id: string,
        params?: QuotePreviewInvoiceLinesParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.InvoiceLineItem>;
      previewInvoiceLines(
        quoteId: string,
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.InvoiceLineItem>;

      /**
       * Preview the invoices that would be generated by accepting the quote.
       */
      previewInvoices(
        id: string,
        params?: QuotePreviewInvoicesParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Invoice>;
      previewInvoices(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Invoice>;

      /**
       * Preview the schedules that would be generated by accepting the quote
       */
      previewSubscriptionSchedules(
        id: string,
        params?: QuotePreviewSubscriptionSchedulesParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.SubscriptionSchedule>;
      previewSubscriptionSchedules(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.SubscriptionSchedule>;

      /**
       * Recompute the upcoming invoice estimate for the quote.
       */
      reestimate(
        id: string,
        params?: QuoteReestimateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;
      reestimate(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;
    }
  }
}
