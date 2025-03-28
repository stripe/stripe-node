// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A quote line defines a set of changes, in the order provided, that will be applied upon quote acceptance.
     */
    interface QuoteLine {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'quote_line';

      /**
       * A list of items the customer is being quoted for.
       */
      actions?: Array<QuoteLine.Action>;

      /**
       * Details to identify the subscription schedule the quote line applies to.
       */
      applies_to: QuoteLine.AppliesTo | null;

      /**
       * For point-in-time quote lines (having no `ends_at` timestamp), this attribute lets you set or remove whether the subscription's billing cycle anchor is reset at the Quote Line `starts_at` timestamp.For time-span based quote lines (having both `starts_at` and `ends_at`), the only valid value is `automatic`, which removes any previously configured billing cycle anchor resets during the window of time spanning the quote line.
       */
      billing_cycle_anchor: QuoteLine.BillingCycleAnchor | null;

      /**
       * A point-in-time operation that cancels an existing subscription schedule at the line's starts_at timestamp. Currently only compatible with `quote_acceptance_date` for `starts_at`. When using cancel_subscription_schedule, the subscription schedule on the quote remains unalterable, except for modifications to the metadata, collection_method or invoice_settings.
       */
      cancel_subscription_schedule: QuoteLine.CancelSubscriptionSchedule | null;

      /**
       * Details to identify the end of the time range modified by the proposed change. If not supplied, the quote line is considered a point-in-time operation that only affects the exact timestamp at `starts_at`, and a restricted set of attributes is supported on the quote line.
       */
      ends_at: QuoteLine.EndsAt | null;

      /**
       * Changes to how Stripe handles prorations during the quote line's time span. Affects if and how prorations are created when a future phase starts.
       */
      proration_behavior: QuoteLine.ProrationBehavior | null;

      /**
       * Details to modify the pause_collection behavior of the subscription schedule.
       */
      set_pause_collection?: QuoteLine.SetPauseCollection | null;

      /**
       * Timestamp helper to end the underlying schedule early, based on the acompanying line's start or end date.
       */
      set_schedule_end: QuoteLine.SetScheduleEnd | null;

      /**
       * Details to identify the earliest timestamp where the proposed change should take effect.
       */
      starts_at: QuoteLine.StartsAt | null;

      /**
       * Settings related to subscription trials.
       */
      trial_settings?: QuoteLine.TrialSettings | null;
    }

    namespace QuoteLine {
      interface Action {
        /**
         * Details for the `add_discount` type.
         */
        add_discount: Action.AddDiscount | null;

        /**
         * Details for the `add_item` type.
         */
        add_item: Action.AddItem | null;

        /**
         * Details for the `add_metadata` type: specify a hash of key-value pairs.
         */
        add_metadata: {
          [key: string]: string;
        } | null;

        /**
         * Details for the `remove_discount` type.
         */
        remove_discount: Action.RemoveDiscount | null;

        /**
         * Details for the `remove_item` type.
         */
        remove_item: Action.RemoveItem | null;

        /**
         * Details for the `remove_metadata` type: specify an array of metadata keys.
         */
        remove_metadata: Array<string> | null;

        /**
         * Details for the `set_discounts` type.
         */
        set_discounts: Array<Action.SetDiscount> | null;

        /**
         * Details for the `set_items` type.
         */
        set_items: Array<Action.SetItem> | null;

        /**
         * Details for the `set_metadata` type: specify an array of key-value pairs.
         */
        set_metadata: {
          [key: string]: string;
        } | null;

        /**
         * The type of action the quote line performs.
         */
        type: Action.Type;
      }

      namespace Action {
        interface AddDiscount {
          /**
           * ID of the coupon to create a new discount for.
           */
          coupon: string | Stripe.Coupon | null;

          /**
           * ID of an existing discount on the object (or one of its ancestors) to reuse.
           */
          discount: string | Stripe.Discount | null;

          /**
           * Details to determine how long the discount should be applied for.
           */
          discount_end?: AddDiscount.DiscountEnd | null;

          /**
           * The index, starting at 0, at which to position the new discount. When not supplied, Stripe defaults to appending the discount to the end of the `discounts` array.
           */
          index: number | null;

          /**
           * ID of the promotion code to create a new discount for.
           */
          promotion_code: string | Stripe.PromotionCode | null;
        }

        namespace AddDiscount {
          interface DiscountEnd {
            /**
             * The discount end type.
             */
            type: 'line_ends_at';
          }
        }

        interface AddItem {
          /**
           * The discounts applied to the subscription item. Subscription item discounts are applied before subscription discounts. Use `expand[]=discounts` to expand each discount.
           */
          discounts: Array<AddItem.Discount>;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an item. Metadata on this item will update the underlying subscription item's `metadata` when the phase is entered.
           */
          metadata: Stripe.Metadata | null;

          /**
           * ID of the price to which the customer should be subscribed.
           */
          price: string | Stripe.Price | Stripe.DeletedPrice;

          /**
           * Quantity of the plan to which the customer should be subscribed.
           */
          quantity?: number;

          /**
           * The tax rates which apply to this `phase_item`. When set, the `default_tax_rates` on the phase do not apply to this `phase_item`.
           */
          tax_rates?: Array<Stripe.TaxRate> | null;

          /**
           * Options that configure the trial on the subscription item.
           */
          trial?: AddItem.Trial | null;
        }

        namespace AddItem {
          interface Discount {
            /**
             * ID of the coupon to create a new discount for.
             */
            coupon: string | Stripe.Coupon | null;

            /**
             * ID of an existing discount on the object (or one of its ancestors) to reuse.
             */
            discount: string | Stripe.Discount | null;

            /**
             * Details to determine how long the discount should be applied for.
             */
            discount_end?: Discount.DiscountEnd | null;

            /**
             * ID of the promotion code to create a new discount for.
             */
            promotion_code: string | Stripe.PromotionCode | null;
          }

          namespace Discount {
            interface DiscountEnd {
              /**
               * The discount end timestamp.
               */
              timestamp: number | null;

              /**
               * The discount end type.
               */
              type: 'timestamp';
            }
          }

          interface Trial {
            /**
             * List of price IDs which, if present on the subscription following a paid trial, constitute opting-in to the paid trial.
             */
            converts_to?: Array<string> | null;

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
           * ID of the coupon to create a new discount for.
           */
          coupon: string | Stripe.Coupon | null;

          /**
           * ID of an existing discount on the object (or one of its ancestors) to reuse.
           */
          discount: string | Stripe.Discount | null;

          /**
           * Details to determine how long the discount should be applied for.
           */
          discount_end?: RemoveDiscount.DiscountEnd | null;

          /**
           * ID of the promotion code to create a new discount for.
           */
          promotion_code: string | Stripe.PromotionCode | null;
        }

        namespace RemoveDiscount {
          interface DiscountEnd {
            /**
             * The discount end timestamp.
             */
            timestamp: number | null;

            /**
             * The discount end type.
             */
            type: 'timestamp';
          }
        }

        interface RemoveItem {
          /**
           * ID of a price to remove.
           */
          price: string | Stripe.Price | Stripe.DeletedPrice;
        }

        interface SetDiscount {
          /**
           * ID of the coupon to create a new discount for.
           */
          coupon: string | Stripe.Coupon | null;

          /**
           * ID of an existing discount on the object (or one of its ancestors) to reuse.
           */
          discount: string | Stripe.Discount | null;

          /**
           * Details to determine how long the discount should be applied for.
           */
          discount_end?: SetDiscount.DiscountEnd | null;

          /**
           * ID of the promotion code to create a new discount for.
           */
          promotion_code: string | Stripe.PromotionCode | null;
        }

        namespace SetDiscount {
          interface DiscountEnd {
            /**
             * The discount end timestamp.
             */
            timestamp: number | null;

            /**
             * The discount end type.
             */
            type: 'timestamp';
          }
        }

        interface SetItem {
          /**
           * The discounts applied to the subscription item. Subscription item discounts are applied before subscription discounts. Use `expand[]=discounts` to expand each discount.
           */
          discounts: Array<SetItem.Discount>;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an item. Metadata on this item will update the underlying subscription item's `metadata` when the phase is entered.
           */
          metadata: Stripe.Metadata | null;

          /**
           * ID of the price to which the customer should be subscribed.
           */
          price: string | Stripe.Price | Stripe.DeletedPrice;

          /**
           * Quantity of the plan to which the customer should be subscribed.
           */
          quantity?: number;

          /**
           * The tax rates which apply to this `phase_item`. When set, the `default_tax_rates` on the phase do not apply to this `phase_item`.
           */
          tax_rates?: Array<Stripe.TaxRate> | null;

          /**
           * Options that configure the trial on the subscription item.
           */
          trial?: SetItem.Trial | null;
        }

        namespace SetItem {
          interface Discount {
            /**
             * ID of the coupon to create a new discount for.
             */
            coupon: string | Stripe.Coupon | null;

            /**
             * ID of an existing discount on the object (or one of its ancestors) to reuse.
             */
            discount: string | Stripe.Discount | null;

            /**
             * Details to determine how long the discount should be applied for.
             */
            discount_end?: Discount.DiscountEnd | null;

            /**
             * ID of the promotion code to create a new discount for.
             */
            promotion_code: string | Stripe.PromotionCode | null;
          }

          namespace Discount {
            interface DiscountEnd {
              /**
               * The discount end timestamp.
               */
              timestamp: number | null;

              /**
               * The discount end type.
               */
              type: 'timestamp';
            }
          }

          interface Trial {
            /**
             * List of price IDs which, if present on the subscription following a paid trial, constitute opting-in to the paid trial.
             */
            converts_to?: Array<string> | null;

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
        new_reference: string | null;

        /**
         * The ID of the schedule the line applies to.
         */
        subscription_schedule: string | null;

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
        invoice_now: boolean | null;

        /**
         * If the subscription schedule is `active`, indicates if the cancellation should be prorated. Boolean that defaults to `true`.
         */
        prorate: boolean | null;
      }

      interface EndsAt {
        /**
         * The timestamp value that will be used to determine when to make changes to the subscription schedule, as computed from the `ends_at` field. For example, if `ends_at[type]=upcoming_invoice`, the upcoming invoice date will be computed at the time the `ends_at` field was specified and saved. This field will not be recomputed upon future requests to update or finalize the quote unless `ends_at` is respecified. This field is guaranteed to be populated after quote acceptance.
         */
        computed: number | null;

        /**
         * Use the `end` time of a given discount.
         */
        discount_end?: EndsAt.DiscountEnd | null;

        /**
         * Time span for the quote line starting from the `starts_at` date.
         */
        duration: EndsAt.Duration | null;

        /**
         * A precise Unix timestamp.
         */
        timestamp: number | null;

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

      type ProrationBehavior = 'always_invoice' | 'create_prorations' | 'none';

      interface SetPauseCollection {
        /**
         * If specified, payment collection for this subscription will be paused. Note that the subscription status will be unchanged and will not be updated to `paused`. Learn more about [pausing collection](https://stripe.com/docs/billing/subscriptions/pause-payment).
         */
        set?: SetPauseCollection.Set | null;

        /**
         * Defines the type of the pause_collection behavior for the quote line.
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
         * The timestamp value that will be used to determine when to make changes to the subscription schedule, as computed from the `starts_at` field. For example, if `starts_at[type]=upcoming_invoice`, the upcoming invoice date will be computed at the time the `starts_at` field was specified and saved. This field will not be recomputed upon future requests to update or finalize the quote unless `starts_at` is respecified. This field is guaranteed to be populated after quote acceptance.
         */
        computed: number | null;

        /**
         * Use the `end` time of a given discount.
         */
        discount_end?: StartsAt.DiscountEnd | null;

        /**
         * The timestamp the given line ends at.
         */
        line_ends_at: StartsAt.LineEndsAt | null;

        /**
         * A precise Unix timestamp.
         */
        timestamp: number | null;

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
           * Unique identifier for the object.
           */
          id: string;
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
        end_behavior: TrialSettings.EndBehavior | null;
      }

      namespace TrialSettings {
        interface EndBehavior {
          /**
           * Configure how an opt-in following a paid trial is billed when using `billing_behavior: prorate_up_front`.
           */
          prorate_up_front: EndBehavior.ProrateUpFront | null;
        }

        namespace EndBehavior {
          type ProrateUpFront = 'defer' | 'include';
        }
      }
    }
  }
}
