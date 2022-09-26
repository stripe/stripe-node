// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A subscription schedule allows you to create and manage the lifecycle of a subscription by predefining expected changes.
     *
     * Related guide: [Subscription Schedules](https://stripe.com/docs/billing/subscriptions/subscription-schedules).
     */
    interface SubscriptionSchedule {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'subscription_schedule';

      /**
       * ID of the Connect Application that created the schedule.
       */
      application:
        | string
        | Stripe.Application
        | Stripe.DeletedApplication
        | null;

      /**
       * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time.`prorate_up_front` will bill for all phases within the current billing cycle up front.
       */
      billing_behavior?: SubscriptionSchedule.BillingBehavior;

      /**
       * Time at which the subscription schedule was canceled. Measured in seconds since the Unix epoch.
       */
      canceled_at: number | null;

      /**
       * Time at which the subscription schedule was completed. Measured in seconds since the Unix epoch.
       */
      completed_at: number | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Object representing the start and end dates for the current phase of the subscription schedule, if it is `active`.
       */
      current_phase: SubscriptionSchedule.CurrentPhase | null;

      /**
       * ID of the customer who owns the subscription schedule.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer;

      default_settings: SubscriptionSchedule.DefaultSettings;

      /**
       * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` and `cancel`.
       */
      end_behavior: SubscriptionSchedule.EndBehavior;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * Configuration for the subscription schedule's phases.
       */
      phases: Array<SubscriptionSchedule.Phase>;

      /**
       * Time period and invoice for a Subscription billed in advance.
       */
      prebilling?: SubscriptionSchedule.Prebilling | null;

      /**
       * Time at which the subscription schedule was released. Measured in seconds since the Unix epoch.
       */
      released_at: number | null;

      /**
       * ID of the subscription once managed by the subscription schedule (if it is released).
       */
      released_subscription: string | null;

      /**
       * The present status of the subscription schedule. Possible values are `not_started`, `active`, `completed`, `released`, and `canceled`. You can read more about the different states in our [behavior guide](https://stripe.com/docs/billing/subscriptions/subscription-schedules).
       */
      status: SubscriptionSchedule.Status;

      /**
       * ID of the subscription managed by the subscription schedule.
       */
      subscription: string | Stripe.Subscription | null;

      /**
       * ID of the test clock this subscription schedule belongs to.
       */
      test_clock: string | Stripe.TestHelpers.TestClock | null;
    }

    namespace SubscriptionSchedule {
      type BillingBehavior = 'prorate_on_next_phase' | 'prorate_up_front';

      interface CurrentPhase {
        /**
         * The end of this phase of the subscription schedule.
         */
        end_date: number;

        /**
         * The start of this phase of the subscription schedule.
         */
        start_date: number;
      }

      interface DefaultSettings {
        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account during this phase of the schedule.
         */
        application_fee_percent: number | null;

        automatic_tax?: DefaultSettings.AutomaticTax;

        /**
         * Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
         */
        billing_cycle_anchor: DefaultSettings.BillingCycleAnchor;

        /**
         * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period
         */
        billing_thresholds: DefaultSettings.BillingThresholds | null;

        /**
         * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions.
         */
        collection_method: DefaultSettings.CollectionMethod | null;

        /**
         * ID of the default payment method for the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
         */
        default_payment_method: string | Stripe.PaymentMethod | null;

        /**
         * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription.
         */
        description: string | null;

        /**
         * The subscription schedule's default invoice settings.
         */
        invoice_settings: DefaultSettings.InvoiceSettings | null;

        /**
         * The account (if any) the associated subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices.
         */
        transfer_data: DefaultSettings.TransferData | null;
      }

      namespace DefaultSettings {
        interface AutomaticTax {
          /**
           * Whether Stripe automatically computes tax on invoices created during this phase.
           */
          enabled: boolean;
        }

        type BillingCycleAnchor = 'automatic' | 'phase_start';

        interface BillingThresholds {
          /**
           * Monetary threshold that triggers the subscription to create an invoice
           */
          amount_gte: number | null;

          /**
           * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged. This value may not be `true` if the subscription contains items with plans that have `aggregate_usage=last_ever`.
           */
          reset_billing_cycle_anchor: boolean | null;
        }

        type CollectionMethod = 'charge_automatically' | 'send_invoice';

        interface InvoiceSettings {
          /**
           * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
           */
          days_until_due: number | null;
        }

        interface TransferData {
          /**
           * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
           */
          amount_percent: number | null;

          /**
           * The account where funds from the payment will be transferred to upon payment success.
           */
          destination: string | Stripe.Account;
        }
      }

      type EndBehavior = 'cancel' | 'none' | 'release' | 'renew';

      interface Phase {
        /**
         * A list of prices and quantities that will generate invoice items appended to the next invoice for this phase.
         */
        add_invoice_items: Array<Phase.AddInvoiceItem>;

        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account during this phase of the schedule.
         */
        application_fee_percent: number | null;

        automatic_tax?: Phase.AutomaticTax;

        /**
         * Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
         */
        billing_cycle_anchor: Phase.BillingCycleAnchor | null;

        /**
         * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period
         */
        billing_thresholds: Phase.BillingThresholds | null;

        /**
         * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions.
         */
        collection_method: Phase.CollectionMethod | null;

        /**
         * ID of the coupon to use during this phase of the subscription schedule.
         */
        coupon: string | Stripe.Coupon | Stripe.DeletedCoupon | null;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
         */
        default_payment_method: string | Stripe.PaymentMethod | null;

        /**
         * The default tax rates to apply to the subscription during this phase of the subscription schedule.
         */
        default_tax_rates?: Array<Stripe.TaxRate> | null;

        /**
         * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription.
         */
        description: string | null;

        /**
         * The stackable discounts that will be applied to the subscription on this phase. Subscription item discounts are applied before subscription discounts.
         */
        discounts?: Array<Phase.Discount> | null;

        /**
         * The end of this phase of the subscription schedule.
         */
        end_date: number;

        /**
         * The invoice settings applicable during this phase.
         */
        invoice_settings: Phase.InvoiceSettings | null;

        /**
         * Subscription items to configure the subscription to during this phase of the subscription schedule.
         */
        items: Array<Phase.Item>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to a phase. Metadata on a schedule's phase will update the underlying subscription's `metadata` when the phase is entered. Updating the underlying subscription's `metadata` directly will not affect the current phase's `metadata`.
         */
        metadata: Stripe.Metadata | null;

        /**
         * If the subscription schedule will prorate when transitioning to this phase. Possible values are `create_prorations` and `none`.
         */
        proration_behavior: Phase.ProrationBehavior;

        /**
         * The start of this phase of the subscription schedule.
         */
        start_date: number;

        /**
         * The account (if any) the associated subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices.
         */
        transfer_data: Phase.TransferData | null;

        /**
         * Specify behavior of the trial when crossing schedule phase boundaries
         */
        trial_continuation?: Phase.TrialContinuation | null;

        /**
         * When the trial ends within the phase.
         */
        trial_end: number | null;
      }

      namespace Phase {
        interface AddInvoiceItem {
          /**
           * The stackable discounts that will be applied to the item.
           */
          discounts?: Array<AddInvoiceItem.Discount> | null;

          /**
           * ID of the price used to generate the invoice item.
           */
          price: string | Stripe.Price | Stripe.DeletedPrice;

          /**
           * The quantity of the invoice item.
           */
          quantity: number | null;

          /**
           * The tax rates which apply to the item. When set, the `default_tax_rates` do not apply to this item.
           */
          tax_rates?: Array<Stripe.TaxRate> | null;
        }

        namespace AddInvoiceItem {
          interface Discount {
            /**
             * ID of the coupon to create a new discount for.
             */
            coupon: string | Stripe.Coupon | null;

            /**
             * ID of an existing discount on the object (or one of its ancestors) to reuse.
             */
            discount: string | Stripe.Discount | null;
          }
        }

        interface AutomaticTax {
          /**
           * Whether Stripe automatically computes tax on invoices created during this phase.
           */
          enabled: boolean;
        }

        type BillingCycleAnchor = 'automatic' | 'phase_start';

        interface BillingThresholds {
          /**
           * Monetary threshold that triggers the subscription to create an invoice
           */
          amount_gte: number | null;

          /**
           * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged. This value may not be `true` if the subscription contains items with plans that have `aggregate_usage=last_ever`.
           */
          reset_billing_cycle_anchor: boolean | null;
        }

        type CollectionMethod = 'charge_automatically' | 'send_invoice';

        interface Discount {
          /**
           * ID of the coupon to create a new discount for.
           */
          coupon: string | Stripe.Coupon | null;

          /**
           * ID of an existing discount on the object (or one of its ancestors) to reuse.
           */
          discount: string | Stripe.Discount | null;
        }

        interface InvoiceSettings {
          /**
           * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
           */
          days_until_due: number | null;
        }

        interface Item {
          /**
           * Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period
           */
          billing_thresholds: Item.BillingThresholds | null;

          /**
           * The discounts applied to the subscription item. Subscription item discounts are applied before subscription discounts. Use `expand[]=discounts` to expand each discount.
           */
          discounts?: Array<Item.Discount> | null;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an item. Metadata on this item will update the underlying subscription item's `metadata` when the phase is entered.
           */
          metadata?: Stripe.Metadata | null;

          /**
           * ID of the plan to which the customer should be subscribed.
           */
          plan: string | Stripe.Plan | Stripe.DeletedPlan;

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
          trial?: Item.Trial | null;
        }

        namespace Item {
          interface BillingThresholds {
            /**
             * Usage threshold that triggers the subscription to create an invoice
             */
            usage_gte: number | null;
          }

          interface Discount {
            /**
             * ID of the coupon to create a new discount for.
             */
            coupon: string | Stripe.Coupon | null;

            /**
             * ID of an existing discount on the object (or one of its ancestors) to reuse.
             */
            discount: string | Stripe.Discount | null;
          }

          interface Trial {
            type: Trial.Type;
          }

          namespace Trial {
            type Type = 'free' | 'paid';
          }
        }

        type ProrationBehavior =
          | 'always_invoice'
          | 'create_prorations'
          | 'none';

        interface TransferData {
          /**
           * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
           */
          amount_percent: number | null;

          /**
           * The account where funds from the payment will be transferred to upon payment success.
           */
          destination: string | Stripe.Account;
        }

        type TrialContinuation = 'continue' | 'none';
      }

      interface Prebilling {
        /**
         * ID of the prebilling invoice.
         */
        invoice: string | Stripe.Invoice;

        /**
         * The end of the last period for which the invoice pre-bills.
         */
        period_end: number;

        /**
         * The start of the first period for which the invoice pre-bills.
         */
        period_start: number;
      }

      type Status =
        | 'active'
        | 'canceled'
        | 'completed'
        | 'not_started'
        | 'released';
    }

    interface SubscriptionScheduleCreateParams {
      /**
       * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time.`prorate_up_front` will bill for all phases within the current billing cycle up front.
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
       * Configures how the subscription schedule behaves when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running.`cancel` will end the subscription schedule and cancel the underlying subscription.
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
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
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
         * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. Defaults to `charge_automatically` on creation.
         */
        collection_method?: DefaultSettings.CollectionMethod;

        /**
         * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
         */
        default_payment_method?: string;

        /**
         * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription.
         */
        description?: string;

        /**
         * All invoices will be billed using the specified settings.
         */
        invoice_settings?: DefaultSettings.InvoiceSettings;

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
           * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
           */
          days_until_due?: number;
        }

        interface TransferData {
          /**
           * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
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
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
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
         * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. Defaults to `charge_automatically` on creation.
         */
        collection_method?: Phase.CollectionMethod;

        /**
         * The identifier of the coupon to apply to this phase of the subscription schedule.
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
         * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription.
         */
        description?: string;

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
         * Whether the subscription schedule will create [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when transitioning to this phase. The default value is `create_prorations`.
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
      }

      namespace Phase {
        interface AddInvoiceItem {
          /**
           * The coupons to redeem into discounts for the item.
           */
          discounts?: Array<AddInvoiceItem.Discount>;

          /**
           * The ID of the price object.
           */
          price?: string;

          /**
           * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
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
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }
        }

        interface AutomaticTax {
          /**
           * Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription.
           */
          enabled: boolean;
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
        }

        interface InvoiceSettings {
          /**
           * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
           */
          days_until_due?: number;
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
             * Usage threshold that triggers the subscription to advance to a new billing period
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

          interface Trial {
            /**
             * Determines the type of trial for this item.
             */
            type: Trial.Type;
          }

          namespace Trial {
            type Type = 'free' | 'paid';
          }
        }

        type ProrationBehavior =
          | 'always_invoice'
          | 'create_prorations'
          | 'none';

        interface TransferData {
          /**
           * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
           */
          amount_percent?: number;

          /**
           * ID of an existing, connected Stripe account.
           */
          destination: string;
        }

        type TrialContinuation = 'continue' | 'none';
      }

      interface Prebilling {
        /**
         * This is used to determine the number of billing cycles to prebill.
         */
        iterations: number;
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
       * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time.`prorate_up_front` will bill for all phases within the current billing cycle up front.
       */
      billing_behavior?: SubscriptionScheduleUpdateParams.BillingBehavior;

      /**
       * Object representing the subscription schedule's default settings.
       */
      default_settings?: SubscriptionScheduleUpdateParams.DefaultSettings;

      /**
       * Configures how the subscription schedule behaves when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running.`cancel` will end the subscription schedule and cancel the underlying subscription.
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
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
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
         * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. Defaults to `charge_automatically` on creation.
         */
        collection_method?: DefaultSettings.CollectionMethod;

        /**
         * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
         */
        default_payment_method?: string;

        /**
         * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription.
         */
        description?: string;

        /**
         * All invoices will be billed using the specified settings.
         */
        invoice_settings?: DefaultSettings.InvoiceSettings;

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
           * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
           */
          days_until_due?: number;
        }

        interface TransferData {
          /**
           * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
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
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
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
         * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. Defaults to `charge_automatically` on creation.
         */
        collection_method?: Phase.CollectionMethod;

        /**
         * The identifier of the coupon to apply to this phase of the subscription schedule.
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
         * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription.
         */
        description?: string;

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
         * Whether the subscription schedule will create [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when transitioning to this phase. The default value is `create_prorations`.
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
      }

      namespace Phase {
        interface AddInvoiceItem {
          /**
           * The coupons to redeem into discounts for the item.
           */
          discounts?: Array<AddInvoiceItem.Discount>;

          /**
           * The ID of the price object.
           */
          price?: string;

          /**
           * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
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
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }
        }

        interface AutomaticTax {
          /**
           * Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription.
           */
          enabled: boolean;
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
        }

        interface InvoiceSettings {
          /**
           * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
           */
          days_until_due?: number;
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
             * Usage threshold that triggers the subscription to advance to a new billing period
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

          interface Trial {
            /**
             * Determines the type of trial for this item.
             */
            type: Trial.Type;
          }

          namespace Trial {
            type Type = 'free' | 'paid';
          }
        }

        type ProrationBehavior =
          | 'always_invoice'
          | 'create_prorations'
          | 'none';

        interface TransferData {
          /**
           * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
           */
          amount_percent?: number;

          /**
           * ID of an existing, connected Stripe account.
           */
          destination: string;
        }

        type TrialContinuation = 'continue' | 'none';
      }

      interface Prebilling {
        /**
         * This is used to determine the number of billing cycles to prebill.
         */
        iterations: number;
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
      amendments: Array<SubscriptionScheduleAmendParams.Amendment>;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
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
         * Changes to the coupons being redeemed or discounts being applied during the amendment time span.
         */
        discount_actions?: Array<Amendment.DiscountAction>;

        /**
         * Changes to the subscription items during the amendment time span.
         */
        item_actions?: Array<Amendment.ItemAction>;

        /**
         * Changes to how Stripe handles prorations during the amendment time span. Affects if and how prorations are created when a future phase starts. In cases where the amendment changes the currently active phase, it is used to determine whether or how to prorate now, at the time of the request. Also supported as a point-in-time operation when `amendment_end` is `null`.
         */
        proration_behavior?: Amendment.ProrationBehavior;
      }

      namespace Amendment {
        interface AmendmentEnd {
          /**
           * Time span for the amendment starting from the `amendment_start`.
           */
          duration?: AmendmentEnd.Duration;

          /**
           * A precise Unix timestamp for the amendment to end. Must be after the `amendment_start`.
           */
          timestamp?: AmendmentEnd.Timestamp;

          /**
           * Select one of three ways to pass the `amendment_end`.
           */
          type: AmendmentEnd.Type;
        }

        namespace AmendmentEnd {
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

          interface Timestamp {
            /**
             * A precise numeric timestamp, provided as an integer number of seconds since the Unix epoch.
             */
            value: number;
          }

          type Type = 'duration' | 'schedule_end' | 'timestamp';
        }

        interface AmendmentStart {
          /**
           * Details of another amendment in the same array, immediately after which this amendment should begin.
           */
          amendment_end?: AmendmentStart.AmendmentEnd;

          /**
           * A precise Unix timestamp for the amendment to start.
           */
          timestamp?: AmendmentStart.Timestamp;

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

          interface Timestamp {
            /**
             * A precise numeric timestamp, provided as an integer number of seconds since the Unix epoch.
             */
            value: number;
          }

          type Type = 'amendment_end' | 'now' | 'timestamp';
        }

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
             * The index, starting at 0, at which to position the new discount. When not supplied, Stripe defaults to appending the discount to the end of the `discounts` array.
             */
            index?: number;
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
            }

            interface Trial {
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
             * If the an item with the `price` already exists, passing this will override the `discounts` array on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `discounts`.
             */
            discounts?: Array<Set.Discount>;

            /**
             * If the an item with the `price` already exists, passing this will override the `metadata` on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `metadata`.
             */
            metadata?: Stripe.MetadataParam;

            /**
             * The ID of the price object.
             */
            price: string;

            /**
             * If the an item with the `price` already exists, passing this will override the quantity on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `quantity`.
             */
            quantity?: number;

            /**
             * If the an item with the `price` already exists, passing this will override the `tax_rates` array on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `tax_rates`.
             */
            tax_rates?: Array<string>;

            /**
             * If the an item with the `price` already exists, passing this will override the `trial` configuration on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `trial`.
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
            }

            interface Trial {
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

        type ProrationBehavior =
          | 'always_invoice'
          | 'create_prorations'
          | 'none';
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
        params: SubscriptionScheduleAmendParams,
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
