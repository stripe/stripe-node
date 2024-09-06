// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface QuoteCreateParams {
      /**
       * Set to true to allow quote lines to have `starts_at` in the past if collection is paused between `starts_at` and now.
       */
      allow_backdated_lines?: boolean;

      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. There cannot be any line items with recurring prices when using this field.
       */
      application_fee_amount?: Stripe.Emptyable<number>;

      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
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
      description?: Stripe.Emptyable<string>;

      /**
       * The discounts applied to the quote.
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
      footer?: Stripe.Emptyable<string>;

      /**
       * Clone an existing quote. The new quote will be created in `status=draft`. When using this parameter, you cannot specify any other parameters except for `expires_at`.
       */
      from_quote?: QuoteCreateParams.FromQuote;

      /**
       * A header that will be displayed on the quote PDF. If no value is passed, the default header configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
       */
      header?: Stripe.Emptyable<string>;

      /**
       * All invoices will be billed using the specified settings.
       */
      invoice_settings?: QuoteCreateParams.InvoiceSettings;

      /**
       * A list of line items the customer is being quoted for. Each line item includes information about the product, the quantity, and the resulting cost.
       */
      line_items?: Array<QuoteCreateParams.LineItem>;

      /**
       * A list of [quote lines](https://docs.stripe.com/api/quote_lines) on the quote. These lines describe changes, in the order provided, that will be used to create new subscription schedules or update existing subscription schedules when the quote is accepted.
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
       * When creating a subscription or subscription schedule, the specified configuration data will be used. There must be at least one line item with a recurring price for a subscription or subscription schedule to be created. A subscription schedule is created if `subscription_data[effective_date]` is present and in the future, otherwise a subscription is created.
       */
      subscription_data?: QuoteCreateParams.SubscriptionData;

      /**
       * List representing overrides for `subscription_data` configurations for specific subscription schedules.
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
         * For point-in-time quote lines (having no `ends_at` timestamp), this attribute lets you set or remove whether the subscription's billing cycle anchor is reset at the Quote Line `starts_at` timestamp.For time-span based quote lines (having both `starts_at` and `ends_at`), the only valid value is `automatic`, which removes any previously configured billing cycle anchor resets during the window of time spanning the quote line.
         */
        billing_cycle_anchor?: Line.BillingCycleAnchor;

        /**
         * A point-in-time operation that cancels an existing subscription schedule at the line's starts_at timestamp. Currently only compatible with `quote_acceptance_date` for `starts_at`. When using cancel_subscription_schedule, the subscription schedule on the quote remains unalterable, except for modifications to the metadata, collection_method or invoice_settings.
         */
        cancel_subscription_schedule?: Line.CancelSubscriptionSchedule;

        /**
         * Details to identify the end of the time range modified by the proposed change. If not supplied, the quote line is considered a point-in-time operation that only affects the exact timestamp at `starts_at`, and a restricted set of attributes is supported on the quote line.
         */
        ends_at?: Line.EndsAt;

        /**
         * Changes to how Stripe handles prorations during the quote line's time span. Affects if and how prorations are created when a future phase starts.
         */
        proration_behavior?: Line.ProrationBehavior;

        /**
         * Defines how to pause collection for the underlying subscription throughout the duration of the amendment.
         */
        set_pause_collection?: Line.SetPauseCollection;

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

            /**
             * The promotion code to redeem.
             */
            promotion_code?: string;
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

          interface RemoveDiscount {
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

            /**
             * An ID of an existing promotion code to replace the `discounts` array with.
             */
            promotion_code?: string;
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

        interface CancelSubscriptionSchedule {
          /**
           * Timestamp helper to cancel the underlying schedule on the accompanying line's start date. Must be set to `line_starts_at`.
           */
          cancel_at: 'line_starts_at';

          /**
           * If the subscription schedule is `active`, indicates if a final invoice will be generated that contains any un-invoiced metered usage and new/pending proration invoice items. Boolean that defaults to `true`.
           */
          invoice_now?: boolean;

          /**
           * If the subscription schedule is `active`, indicates if the cancellation should be prorated. Boolean that defaults to `true`.
           */
          prorate?: boolean;
        }

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
            | 'billing_period_end'
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
             * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).
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
         * Describes the period to bill for upon accepting the quote.
         */
        bill_on_acceptance?: SubscriptionData.BillOnAcceptance;

        /**
         * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time. `prorate_up_front` will bill for all phases within the current billing cycle up front.
         */
        billing_behavior?: SubscriptionData.BillingBehavior;

        /**
         * When specified as `reset`, the subscription will always start a new billing period when the quote is accepted.
         */
        billing_cycle_anchor?: Stripe.Emptyable<'reset'>;

        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
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
         * The id of a subscription that the quote will update. By default, the quote will contain the state of the subscription (such as line items, collection method and billing thresholds) unless overridden.
         */
        from_subscription?: string;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will set metadata on the subscription or subscription schedule when the quote is accepted. If a recurring price is included in `line_items`, this field will be passed to the resulting subscription's `metadata` field. If `subscription_data.effective_date` is used, this field will be passed to the resulting subscription schedule's `phases.metadata` field. Unlike object-level metadata, this field is declarative. Updates will clear prior values.
         */
        metadata?: Stripe.MetadataParam;

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
              | 'pause_collection_start'
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
         * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time. `prorate_up_front` will bill for all phases within the current billing cycle up front.
         */
        billing_behavior?: SubscriptionDataOverride.BillingBehavior;

        /**
         * The customer the Subscription Data override applies to. This is only relevant when `applies_to.type=new_reference`.
         */
        customer?: string;

        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
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
              | 'pause_collection_start'
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
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination. There must be at least 1 line item with a recurring price to use this field.
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
       * Set to true to allow quote lines to have `starts_at` in the past if collection is paused between `starts_at` and now.
       */
      allow_backdated_lines?: boolean;

      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. There cannot be any line items with recurring prices when using this field.
       */
      application_fee_amount?: Stripe.Emptyable<number>;

      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
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
      description?: Stripe.Emptyable<string>;

      /**
       * The discounts applied to the quote.
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
      footer?: Stripe.Emptyable<string>;

      /**
       * A header that will be displayed on the quote PDF.
       */
      header?: Stripe.Emptyable<string>;

      /**
       * All invoices will be billed using the specified settings.
       */
      invoice_settings?: QuoteUpdateParams.InvoiceSettings;

      /**
       * A list of line items the customer is being quoted for. Each line item includes information about the product, the quantity, and the resulting cost.
       */
      line_items?: Array<QuoteUpdateParams.LineItem>;

      /**
       * A list of [quote lines](https://docs.stripe.com/api/quote_lines) on the quote. These lines describe changes, in the order provided, that will be used to create new subscription schedules or update existing subscription schedules when the quote is accepted.
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
       * When creating a subscription or subscription schedule, the specified configuration data will be used. There must be at least one line item with a recurring price for a subscription or subscription schedule to be created. A subscription schedule is created if `subscription_data[effective_date]` is present and in the future, otherwise a subscription is created.
       */
      subscription_data?: QuoteUpdateParams.SubscriptionData;

      /**
       * List representing overrides for `subscription_data` configurations for specific subscription schedules.
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
         * Number of days within which a customer must pay the invoice generated by this quote. This value will be `null` for quotes where `collection_method=charge_automatically`.
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
         * For point-in-time quote lines (having no `ends_at` timestamp), this attribute lets you set or remove whether the subscription's billing cycle anchor is reset at the Quote Line `starts_at` timestamp.For time-span based quote lines (having both `starts_at` and `ends_at`), the only valid value is `automatic`, which removes any previously configured billing cycle anchor resets during the window of time spanning the quote line.
         */
        billing_cycle_anchor?: Line.BillingCycleAnchor;

        /**
         * A point-in-time operation that cancels an existing subscription schedule at the line's starts_at timestamp. Currently only compatible with `quote_acceptance_date` for `starts_at`. When using cancel_subscription_schedule, the subscription schedule on the quote remains unalterable, except for modifications to the metadata, collection_method or invoice_settings.
         */
        cancel_subscription_schedule?: Line.CancelSubscriptionSchedule;

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
         * Defines how to pause collection for the underlying subscription throughout the duration of the amendment.
         */
        set_pause_collection?: Line.SetPauseCollection;

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

            /**
             * The promotion code to redeem.
             */
            promotion_code?: string;
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

          interface RemoveDiscount {
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

            /**
             * An ID of an existing promotion code to replace the `discounts` array with.
             */
            promotion_code?: string;
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

        interface CancelSubscriptionSchedule {
          /**
           * Timestamp helper to cancel the underlying schedule on the accompanying line's start date. Must be set to `line_starts_at`.
           */
          cancel_at: 'line_starts_at';

          /**
           * If the subscription schedule is `active`, indicates if a final invoice will be generated that contains any un-invoiced metered usage and new/pending proration invoice items. Boolean that defaults to `true`.
           */
          invoice_now?: boolean;

          /**
           * If the subscription schedule is `active`, indicates if the cancellation should be prorated. Boolean that defaults to `true`.
           */
          prorate?: boolean;
        }

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
            | 'billing_period_end'
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
             * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).
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
         * Describes the period to bill for upon accepting the quote.
         */
        bill_on_acceptance?: Stripe.Emptyable<
          SubscriptionData.BillOnAcceptance
        >;

        /**
         * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time. `prorate_up_front` will bill for all phases within the current billing cycle up front.
         */
        billing_behavior?: SubscriptionData.BillingBehavior;

        /**
         * When specified as `reset`, the subscription will always start a new billing period when the quote is accepted.
         */
        billing_cycle_anchor?: Stripe.Emptyable<'reset'>;

        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description?: Stripe.Emptyable<string>;

        /**
         * When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. When updating a subscription, the date of which the subscription will be updated using a subscription schedule. The special value `current_period_end` can be provided to update a subscription at the end of its current period. The `effective_date` is ignored if it is in the past when the quote is accepted.
         */
        effective_date?: Stripe.Emptyable<'current_period_end' | number>;

        /**
         * Behavior of the subscription schedule and underlying subscription when it ends.
         */
        end_behavior?: SubscriptionData.EndBehavior;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will set metadata on the subscription or subscription schedule when the quote is accepted. If a recurring price is included in `line_items`, this field will be passed to the resulting subscription's `metadata` field. If `subscription_data.effective_date` is used, this field will be passed to the resulting subscription schedule's `phases.metadata` field. Unlike object-level metadata, this field is declarative. Updates will clear prior values.
         */
        metadata?: Stripe.MetadataParam;

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
              | 'pause_collection_start'
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
         * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time. `prorate_up_front` will bill for all phases within the current billing cycle up front.
         */
        billing_behavior?: SubscriptionDataOverride.BillingBehavior;

        /**
         * The customer the Subscription Data override applies to.
         */
        customer?: string;

        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description?: Stripe.Emptyable<string>;

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
              | 'pause_collection_start'
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
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination. There must be at least 1 line item with a recurring price to use this field.
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

    interface QuoteListPreviewInvoiceLinesParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
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

    interface QuoteListPreviewInvoicesParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface QuoteListPreviewSubscriptionSchedulesParams
      extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface QuoteMarkDraftParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface QuoteMarkStaleParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Reason the Quote is being marked stale.
       */
      reason?: string;
    }

    interface QuotePdfParams {
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
       * Preview the invoice line items that would be generated by accepting the quote.
       */
      listPreviewInvoiceLines(
        quoteId: string,
        id: string,
        params?: QuoteListPreviewInvoiceLinesParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.InvoiceLineItem>;
      listPreviewInvoiceLines(
        quoteId: string,
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.InvoiceLineItem>;

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
       * Preview the invoices that would be generated by accepting the quote.
       */
      listPreviewInvoices(
        id: string,
        params?: QuoteListPreviewInvoicesParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.QuotePreviewInvoice>;
      listPreviewInvoices(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.QuotePreviewInvoice>;

      /**
       * Preview the schedules that would be generated by accepting the quote
       */
      listPreviewSubscriptionSchedules(
        id: string,
        params?: QuoteListPreviewSubscriptionSchedulesParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.QuotePreviewSubscriptionSchedule>;
      listPreviewSubscriptionSchedules(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.QuotePreviewSubscriptionSchedule>;

      /**
       * Converts a stale quote to draft.
       */
      markDraft(
        id: string,
        params?: QuoteMarkDraftParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;
      markDraft(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;

      /**
       * Converts a draft or open quote to stale.
       */
      markStale(
        id: string,
        params?: QuoteMarkStaleParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;
      markStale(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;

      /**
       * Download the PDF for a finalized quote. Explanation for special handling can be found [here](https://docs.stripe.com/quotes/overview#quote_pdf)
       */
      pdf(
        id: string,
        params?: QuotePdfParams,
        options?: RequestOptions
      ): Promise<StripeStreamResponse>;
      pdf(id: string, options?: RequestOptions): Promise<StripeStreamResponse>;

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
