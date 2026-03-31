// File generated from our OpenAPI spec

import {Application, DeletedApplication} from './Applications.js';
import {Customer, DeletedCustomer} from './Customers.js';
import {Invoice} from './Invoices.js';
import {Subscription} from './Subscriptions.js';
import {Price, DeletedPrice} from './Prices.js';
import {PaymentMethod} from './PaymentMethods.js';
import {Account} from './Accounts.js';
import {TaxId, DeletedTaxId} from './TaxIds.js';
import {TaxRate} from './TaxRates.js';
import {Discount} from './Discounts.js';
import {Coupon} from './Coupons.js';
import {PromotionCode} from './PromotionCodes.js';
import {Plan, DeletedPlan} from './Plans.js';
import * as TestHelpers from './TestHelpers/index.js';
import {Metadata} from '../shared.js';
import {RequestOptions} from '../lib.js';
export interface QuotePreviewSubscriptionSchedule {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'quote_preview_subscription_schedule';

  /**
   * ID of the Connect Application that created the schedule.
   */
  application: string | Application | DeletedApplication | null;

  applies_to: QuotePreviewSubscriptionSchedule.AppliesTo;

  /**
   * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time. `prorate_up_front` will bill for all phases within the current billing cycle up front.
   */
  billing_behavior?: QuotePreviewSubscriptionSchedule.BillingBehavior;

  /**
   * The billing mode of the subscription.
   */
  billing_mode: QuotePreviewSubscriptionSchedule.BillingMode;

  /**
   * Billing schedules for this subscription schedule.
   */
  billing_schedules?: Array<QuotePreviewSubscriptionSchedule.BillingSchedule>;

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
  current_phase: QuotePreviewSubscriptionSchedule.CurrentPhase | null;

  /**
   * ID of the customer who owns the subscription schedule.
   */
  customer: string | Customer | DeletedCustomer;

  /**
   * ID of the account who owns the subscription schedule.
   */
  customer_account: string | null;

  default_settings: QuotePreviewSubscriptionSchedule.DefaultSettings;

  /**
   * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running. `cancel` will end the subscription schedule and cancel the underlying subscription.
   */
  end_behavior: QuotePreviewSubscriptionSchedule.EndBehavior;

  /**
   * Details of the most recent price migration that failed for the subscription schedule.
   */
  last_price_migration_error?: QuotePreviewSubscriptionSchedule.LastPriceMigrationError | null;

  /**
   * The most recent invoice this subscription schedule has generated.
   */
  latest_invoice?: string | Invoice | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * Configuration for the subscription schedule's phases.
   */
  phases: Array<QuotePreviewSubscriptionSchedule.Phase>;

  /**
   * Time period and invoice for a Subscription billed in advance.
   */
  prebilling?: QuotePreviewSubscriptionSchedule.Prebilling | null;

  /**
   * Time at which the subscription schedule was released. Measured in seconds since the Unix epoch.
   */
  released_at: number | null;

  /**
   * ID of the subscription once managed by the subscription schedule (if it is released).
   */
  released_subscription: string | null;

  /**
   * The present status of the subscription schedule. Possible values are `not_started`, `active`, `completed`, `released`, and `canceled`. You can read more about the different states in our [behavior guide](https://docs.stripe.com/billing/subscriptions/subscription-schedules).
   */
  status: QuotePreviewSubscriptionSchedule.Status;

  /**
   * ID of the subscription managed by the subscription schedule.
   */
  subscription: string | Subscription | null;

  /**
   * ID of the test clock this subscription schedule belongs to.
   */
  test_clock: string | TestHelpers.TestClock | null;
}
export namespace QuotePreviewSubscriptionSchedule {
  export interface AppliesTo {
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

  export type BillingBehavior = 'prorate_on_next_phase' | 'prorate_up_front';

  export interface BillingMode {
    /**
     * Configure behavior for flexible billing mode
     */
    flexible: BillingMode.Flexible | null;

    /**
     * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
     */
    type: BillingMode.Type;

    /**
     * Details on when the current billing_mode was adopted.
     */
    updated_at?: number;
  }

  export interface BillingSchedule {
    /**
     * Specifies which subscription items the billing schedule applies to.
     */
    applies_to: Array<BillingSchedule.AppliesTo> | null;

    /**
     * Specifies the start of the billing period.
     */
    bill_from?: BillingSchedule.BillFrom | null;

    /**
     * Specifies the end of billing period.
     */
    bill_until: BillingSchedule.BillUntil;

    /**
     * Unique identifier for the billing schedule.
     */
    key: string;
  }

  export interface CurrentPhase {
    /**
     * The end of this phase of the subscription schedule.
     */
    end_date: number;

    /**
     * The start of this phase of the subscription schedule.
     */
    start_date: number;
  }

  export interface DefaultSettings {
    /**
     * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account during this phase of the schedule.
     */
    application_fee_percent: number | null;

    automatic_tax?: DefaultSettings.AutomaticTax;

    /**
     * Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://docs.stripe.com/billing/subscriptions/billing-cycle).
     */
    billing_cycle_anchor: DefaultSettings.BillingCycleAnchor;

    /**
     * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period
     */
    billing_thresholds: DefaultSettings.BillingThresholds | null;

    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
     */
    collection_method: DefaultSettings.CollectionMethod | null;

    /**
     * ID of the default payment method for the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
     */
    default_payment_method: string | PaymentMethod | null;

    /**
     * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
     */
    description: string | null;

    invoice_settings: DefaultSettings.InvoiceSettings;

    /**
     * The account (if any) the charge was made on behalf of for charges associated with the schedule's subscription. See the Connect documentation for details.
     */
    on_behalf_of: string | Account | null;

    /**
     * Configures how the subscription schedule handles billing for phase transitions. Possible values are `phase_start` (default) or `billing_period_start`. `phase_start` bills based on the current state of the subscription, ignoring changes scheduled in future phases. `billing_period_start` bills predictively for upcoming phase transitions within the current billing cycle, including pricing changes and service period adjustments that will occur before the next invoice.
     */
    phase_effective_at?: DefaultSettings.PhaseEffectiveAt;

    /**
     * The account (if any) the associated subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices.
     */
    transfer_data: DefaultSettings.TransferData | null;
  }

  export type EndBehavior = 'cancel' | 'none' | 'release' | 'renew';

  export interface LastPriceMigrationError {
    /**
     * The time at which the price migration encountered an error.
     */
    errored_at: number;

    /**
     * The involved price pairs in each failed transition.
     */
    failed_transitions: Array<LastPriceMigrationError.FailedTransition>;

    /**
     * The type of error encountered by the price migration.
     */
    type: 'price_uniqueness_violation';
  }

  export interface Phase {
    /**
     * A list of prices and quantities that will generate invoice items appended to the next invoice for this phase.
     */
    add_invoice_items: Array<Phase.AddInvoiceItem>;

    /**
     * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account during this phase of the schedule.
     */
    application_fee_percent: number | null;

    automatic_tax?: Phase.AutomaticTax;

    /**
     * Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://docs.stripe.com/billing/subscriptions/billing-cycle).
     */
    billing_cycle_anchor: Phase.BillingCycleAnchor | null;

    /**
     * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period
     */
    billing_thresholds: Phase.BillingThresholds | null;

    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
     */
    collection_method: Phase.CollectionMethod | null;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
     */
    default_payment_method: string | PaymentMethod | null;

    /**
     * The default tax rates to apply to the subscription during this phase of the subscription schedule.
     */
    default_tax_rates?: Array<TaxRate> | null;

    /**
     * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
     */
    description: string | null;

    /**
     * The stackable discounts that will be applied to the subscription on this phase. Subscription item discounts are applied before subscription discounts.
     */
    discounts: Array<Phase.Discount>;

    /**
     * Configures how the subscription schedule handles billing for phase transitions. Possible values are `phase_start` (default) or `billing_period_start`. `phase_start` bills based on the current state of the subscription, ignoring changes scheduled in future phases. `billing_period_start` bills predictively for upcoming phase transitions within the current billing cycle, including pricing changes and service period adjustments that will occur before the next invoice.
     */
    effective_at?: Phase.EffectiveAt | null;

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
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to a phase. Metadata on a schedule's phase will update the underlying subscription's `metadata` when the phase is entered. Updating the underlying subscription's `metadata` directly will not affect the current phase's `metadata`.
     */
    metadata: Metadata | null;

    /**
     * The account (if any) the charge was made on behalf of for charges associated with the schedule's subscription. See the Connect documentation for details.
     */
    on_behalf_of: string | Account | null;

    /**
     * If specified, payment collection for this subscription will be paused. Note that the subscription status will be unchanged and will not be updated to `paused`. Learn more about [pausing collection](https://docs.stripe.com/billing/subscriptions/pause-payment).
     */
    pause_collection?: Phase.PauseCollection | null;

    /**
     * When transitioning phases, controls how prorations are handled (if any). Possible values are `create_prorations`, `none`, and `always_invoice`.
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

    /**
     * Settings related to any trials on the subscription during this phase.
     */
    trial_settings?: Phase.TrialSettings | null;
  }

  export interface Prebilling {
    /**
     * ID of the prebilling invoice.
     */
    invoice: string | Invoice;

    /**
     * The end of the last period for which the invoice pre-bills.
     */
    period_end: number;

    /**
     * The start of the first period for which the invoice pre-bills.
     */
    period_start: number;

    /**
     * Whether to cancel or preserve `prebilling` if the subscription is updated during the prebilled period.
     */
    update_behavior?: Prebilling.UpdateBehavior;
  }

  export type Status =
    | 'active'
    | 'canceled'
    | 'completed'
    | 'not_started'
    | 'released';

  export namespace AppliesTo {
    export type Type = 'new_reference' | 'subscription_schedule';
  }

  export namespace BillingMode {
    export interface Flexible {
      /**
       * Controls how invoices and invoice items display proration amounts and discount amounts.
       */
      proration_discounts?: Flexible.ProrationDiscounts;
    }

    export type Type = 'classic' | 'flexible';

    export namespace Flexible {
      export type ProrationDiscounts = 'included' | 'itemized';
    }
  }

  export namespace BillingSchedule {
    export interface AppliesTo {
      /**
       * The billing schedule will apply to the subscription item with the given price ID.
       */
      price: string | Price | null;

      /**
       * Controls which subscription items the billing schedule applies to.
       */
      type: 'price';
    }

    export interface BillFrom {
      /**
       * The time the billing schedule applies from.
       */
      computed_timestamp: number;

      /**
       * Use a precise Unix timestamp for prebilling to start. Must be earlier than `bill_until`.
       */
      timestamp: number | null;

      /**
       * Describes how the billing schedule determines the start date. Possible values are `timestamp`.
       */
      type: 'timestamp';
    }

    export interface BillUntil {
      /**
       * The timestamp the billing schedule will apply until.
       */
      computed_timestamp: number;

      /**
       * Specifies the billing period.
       */
      duration: BillUntil.Duration | null;

      /**
       * If specified, the billing schedule will apply until the specified timestamp.
       */
      timestamp: number | null;

      /**
       * Describes how the billing schedule will determine the end date. Either `duration` or `timestamp`.
       */
      type: BillUntil.Type;
    }

    export namespace BillUntil {
      export interface Duration {
        /**
         * Specifies billing duration. Either `day`, `week`, `month` or `year`.
         */
        interval: Duration.Interval;

        /**
         * The multiplier applied to the interval.
         */
        interval_count: number | null;
      }

      export type Type = 'duration' | 'timestamp';

      export namespace Duration {
        export type Interval = 'day' | 'month' | 'week' | 'year';
      }
    }
  }

  export namespace DefaultSettings {
    export interface AutomaticTax {
      /**
       * If Stripe disabled automatic tax, this enum describes why.
       */
      disabled_reason: 'requires_location_inputs' | null;

      /**
       * Whether Stripe automatically computes tax on invoices created during this phase.
       */
      enabled: boolean;

      /**
       * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
       */
      liability: AutomaticTax.Liability | null;
    }

    export type BillingCycleAnchor = 'automatic' | 'phase_start';

    export interface BillingThresholds {
      /**
       * Monetary threshold that triggers the subscription to create an invoice
       */
      amount_gte: number | null;

      /**
       * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged. This value may not be `true` if the subscription contains items with plans that have `aggregate_usage=last_ever`.
       */
      reset_billing_cycle_anchor: boolean | null;
    }

    export type CollectionMethod = 'charge_automatically' | 'send_invoice';

    export interface InvoiceSettings {
      /**
       * The account tax IDs associated with the subscription schedule. Will be set on invoices generated by the subscription schedule.
       */
      account_tax_ids: Array<string | TaxId | DeletedTaxId> | null;

      /**
       * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
       */
      days_until_due: number | null;

      issuer: InvoiceSettings.Issuer;
    }

    export type PhaseEffectiveAt = 'billing_period_start' | 'phase_start';

    export interface TransferData {
      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
       */
      amount_percent: number | null;

      /**
       * The account where funds from the payment will be transferred to upon payment success.
       */
      destination: string | Account;
    }

    export namespace AutomaticTax {
      export interface Liability {
        /**
         * The connected account being referenced when `type` is `account`.
         */
        account?: string | Account;

        /**
         * Type of the account referenced.
         */
        type: Liability.Type;
      }

      export namespace Liability {
        export type Type = 'account' | 'application' | 'self';
      }
    }

    export namespace InvoiceSettings {
      export interface Issuer {
        /**
         * The connected account being referenced when `type` is `account`.
         */
        account?: string | Account;

        /**
         * Type of the account referenced.
         */
        type: Issuer.Type;
      }

      export namespace Issuer {
        export type Type = 'account' | 'application' | 'self';
      }
    }
  }

  export namespace LastPriceMigrationError {
    export interface FailedTransition {
      /**
       * The original price to be migrated.
       */
      source_price: string;

      /**
       * The intended resulting price of the migration.
       */
      target_price: string;
    }
  }

  export namespace Phase {
    export interface AddInvoiceItem {
      /**
       * The stackable discounts that will be applied to the item.
       */
      discounts: Array<AddInvoiceItem.Discount>;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Metadata | null;

      period: AddInvoiceItem.Period;

      /**
       * ID of the price used to generate the invoice item.
       */
      price: string | Price | DeletedPrice;

      /**
       * The quantity of the invoice item.
       */
      quantity: number | null;

      /**
       * The tax rates which apply to the item. When set, the `default_tax_rates` do not apply to this item.
       */
      tax_rates?: Array<TaxRate> | null;
    }

    export interface AutomaticTax {
      /**
       * If Stripe disabled automatic tax, this enum describes why.
       */
      disabled_reason: 'requires_location_inputs' | null;

      /**
       * Whether Stripe automatically computes tax on invoices created during this phase.
       */
      enabled: boolean;

      /**
       * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
       */
      liability: AutomaticTax.Liability | null;
    }

    export type BillingCycleAnchor = 'automatic' | 'phase_start';

    export interface BillingThresholds {
      /**
       * Monetary threshold that triggers the subscription to create an invoice
       */
      amount_gte: number | null;

      /**
       * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged. This value may not be `true` if the subscription contains items with plans that have `aggregate_usage=last_ever`.
       */
      reset_billing_cycle_anchor: boolean | null;
    }

    export type CollectionMethod = 'charge_automatically' | 'send_invoice';

    export interface Discount {
      /**
       * ID of the coupon to create a new discount for.
       */
      coupon: string | Coupon | null;

      /**
       * ID of an existing discount on the object (or one of its ancestors) to reuse.
       */
      discount: string | Discount | null;

      /**
       * Details to determine how long the discount should be applied for.
       */
      discount_end?: Discount.DiscountEnd | null;

      /**
       * ID of the promotion code to create a new discount for.
       */
      promotion_code: string | PromotionCode | null;

      settings?: Discount.Settings;
    }

    export type EffectiveAt = 'billing_period_start' | 'phase_start';

    export interface InvoiceSettings {
      /**
       * The account tax IDs associated with this phase of the subscription schedule. Will be set on invoices generated by this phase of the subscription schedule.
       */
      account_tax_ids: Array<string | TaxId | DeletedTaxId> | null;

      /**
       * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
       */
      days_until_due: number | null;

      /**
       * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
       */
      issuer: InvoiceSettings.Issuer | null;
    }

    export interface Item {
      /**
       * Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period
       */
      billing_thresholds: Item.BillingThresholds | null;

      /**
       * The discounts applied to the subscription item. Subscription item discounts are applied before subscription discounts. Use `expand[]=discounts` to expand each discount.
       */
      discounts: Array<Item.Discount>;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an item. Metadata on this item will update the underlying subscription item's `metadata` when the phase is entered.
       */
      metadata: Metadata | null;

      /**
       * ID of the plan to which the customer should be subscribed.
       */
      plan: string | Plan | DeletedPlan;

      /**
       * ID of the price to which the customer should be subscribed.
       */
      price: string | Price | DeletedPrice;

      /**
       * Quantity of the plan to which the customer should be subscribed.
       */
      quantity?: number;

      /**
       * The tax rates which apply to this `phase_item`. When set, the `default_tax_rates` on the phase do not apply to this `phase_item`.
       */
      tax_rates?: Array<TaxRate> | null;

      /**
       * Options that configure the trial on the subscription item.
       */
      trial?: Item.Trial | null;

      /**
       * The ID of the trial offer to apply to the configuration item.
       */
      trial_offer?: string | null;
    }

    export interface PauseCollection {
      /**
       * The payment collection behavior for this subscription while paused.
       */
      behavior: PauseCollection.Behavior;
    }

    export type ProrationBehavior =
      | 'always_invoice'
      | 'create_prorations'
      | 'none';

    export interface TransferData {
      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
       */
      amount_percent: number | null;

      /**
       * The account where funds from the payment will be transferred to upon payment success.
       */
      destination: string | Account;
    }

    export type TrialContinuation = 'continue' | 'none';

    export interface TrialSettings {
      /**
       * Defines how the subscription should behave when a trial ends.
       */
      end_behavior: TrialSettings.EndBehavior | null;
    }

    export namespace AddInvoiceItem {
      export interface Discount {
        /**
         * ID of the coupon to create a new discount for.
         */
        coupon: string | Coupon | null;

        /**
         * ID of an existing discount on the object (or one of its ancestors) to reuse.
         */
        discount: string | Discount | null;

        /**
         * Details to determine how long the discount should be applied for.
         */
        discount_end?: Discount.DiscountEnd | null;

        /**
         * ID of the promotion code to create a new discount for.
         */
        promotion_code: string | PromotionCode | null;
      }

      export interface Period {
        end: Period.End;

        start: Period.Start;
      }

      export namespace Discount {
        export interface DiscountEnd {
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

      export namespace Period {
        export interface End {
          /**
           * A precise Unix timestamp for the end of the invoice item period. Must be greater than or equal to `period.start`.
           */
          timestamp?: number;

          /**
           * Select how to calculate the end of the invoice item period.
           */
          type: End.Type;
        }

        export interface Start {
          /**
           * A precise Unix timestamp for the start of the invoice item period. Must be less than or equal to `period.end`.
           */
          timestamp?: number;

          /**
           * Select how to calculate the start of the invoice item period.
           */
          type: Start.Type;
        }

        export namespace End {
          export type Type = 'min_item_period_end' | 'phase_end' | 'timestamp';
        }

        export namespace Start {
          export type Type =
            | 'max_item_period_start'
            | 'phase_start'
            | 'timestamp';
        }
      }
    }

    export namespace AutomaticTax {
      export interface Liability {
        /**
         * The connected account being referenced when `type` is `account`.
         */
        account?: string | Account;

        /**
         * Type of the account referenced.
         */
        type: Liability.Type;
      }

      export namespace Liability {
        export type Type = 'account' | 'application' | 'self';
      }
    }

    export namespace Discount {
      export interface DiscountEnd {
        /**
         * The discount end timestamp.
         */
        timestamp: number | null;

        /**
         * The discount end type.
         */
        type: 'timestamp';
      }

      export interface Settings {
        service_period_anchor_config: Settings.ServicePeriodAnchorConfig;

        /**
         * The start date of the discount's service period when applying a coupon or promotion code with a service period duration.
         */
        start_date: Settings.StartDate;
      }

      export namespace Settings {
        export interface ServicePeriodAnchorConfig {
          custom?: ServicePeriodAnchorConfig.Custom;

          /**
           * The type of service period anchor config.
           */
          type: ServicePeriodAnchorConfig.Type;
        }

        export type StartDate =
          | 'current_period_end'
          | 'current_period_start'
          | 'phase_start';

        export namespace ServicePeriodAnchorConfig {
          export interface Custom {
            /**
             * The day of the month the anchor should be. Ranges from 1 to 31.
             */
            day_of_month: number;

            /**
             * The hour of the day the anchor should be. Ranges from 0 to 23.
             */
            hour: number | null;

            /**
             * The minute of the hour the anchor should be. Ranges from 0 to 59.
             */
            minute: number | null;

            /**
             * The month to start full cycle periods. Ranges from 1 to 12.
             */
            month: number | null;

            /**
             * The second of the minute the anchor should be. Ranges from 0 to 59.
             */
            second: number | null;
          }

          export type Type = 'custom' | 'inherit';
        }
      }
    }

    export namespace InvoiceSettings {
      export interface Issuer {
        /**
         * The connected account being referenced when `type` is `account`.
         */
        account?: string | Account;

        /**
         * Type of the account referenced.
         */
        type: Issuer.Type;
      }

      export namespace Issuer {
        export type Type = 'account' | 'application' | 'self';
      }
    }

    export namespace Item {
      export interface BillingThresholds {
        /**
         * Usage threshold that triggers the subscription to create an invoice
         */
        usage_gte: number | null;
      }

      export interface Discount {
        /**
         * ID of the coupon to create a new discount for.
         */
        coupon: string | Coupon | null;

        /**
         * ID of an existing discount on the object (or one of its ancestors) to reuse.
         */
        discount: string | Discount | null;

        /**
         * Details to determine how long the discount should be applied for.
         */
        discount_end?: Discount.DiscountEnd | null;

        /**
         * ID of the promotion code to create a new discount for.
         */
        promotion_code: string | PromotionCode | null;

        settings?: Discount.Settings;
      }

      export interface Trial {
        /**
         * List of price IDs which, if present on the subscription following a paid trial, constitute opting-in to the paid trial.
         */
        converts_to?: Array<string> | null;

        /**
         * Determines the type of trial for this item.
         */
        type: Trial.Type;
      }

      export namespace Discount {
        export interface DiscountEnd {
          /**
           * The discount end timestamp.
           */
          timestamp: number | null;

          /**
           * The discount end type.
           */
          type: 'timestamp';
        }

        export interface Settings {
          service_period_anchor_config: Settings.ServicePeriodAnchorConfig;

          /**
           * The start date of the discount's service period when applying a coupon or promotion code with a service period duration.
           */
          start_date: Settings.StartDate;
        }

        export namespace Settings {
          export interface ServicePeriodAnchorConfig {
            custom?: ServicePeriodAnchorConfig.Custom;

            /**
             * The type of service period anchor config.
             */
            type: ServicePeriodAnchorConfig.Type;
          }

          export type StartDate =
            | 'current_period_end'
            | 'current_period_start'
            | 'phase_start';

          export namespace ServicePeriodAnchorConfig {
            export interface Custom {
              /**
               * The day of the month the anchor should be. Ranges from 1 to 31.
               */
              day_of_month: number;

              /**
               * The hour of the day the anchor should be. Ranges from 0 to 23.
               */
              hour: number | null;

              /**
               * The minute of the hour the anchor should be. Ranges from 0 to 59.
               */
              minute: number | null;

              /**
               * The month to start full cycle periods. Ranges from 1 to 12.
               */
              month: number | null;

              /**
               * The second of the minute the anchor should be. Ranges from 0 to 59.
               */
              second: number | null;
            }

            export type Type = 'custom' | 'inherit';
          }
        }
      }

      export namespace Trial {
        export type Type = 'free' | 'paid';
      }
    }

    export namespace PauseCollection {
      export type Behavior = 'keep_as_draft' | 'mark_uncollectible' | 'void';
    }

    export namespace TrialSettings {
      export interface EndBehavior {
        /**
         * Configure how an opt-in following a paid trial is billed when using `billing_behavior: prorate_up_front`.
         */
        prorate_up_front: EndBehavior.ProrateUpFront | null;
      }

      export namespace EndBehavior {
        export type ProrateUpFront = 'defer' | 'include';
      }
    }
  }

  export namespace Prebilling {
    export type UpdateBehavior = 'prebill' | 'reset';
  }
}
