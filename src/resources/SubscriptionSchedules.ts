// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {Discount} from './Discounts.js';
import {Application, DeletedApplication} from './Applications.js';
import {Customer, DeletedCustomer} from './Customers.js';
import {Subscription} from './Subscriptions.js';
import {PaymentMethod} from './PaymentMethods.js';
import {Account} from './Accounts.js';
import {TaxId, DeletedTaxId} from './TaxIds.js';
import {TaxRate} from './TaxRates.js';
import {Price, DeletedPrice} from './Prices.js';
import {Coupon} from './Coupons.js';
import {PromotionCode} from './PromotionCodes.js';
import {Plan, DeletedPlan} from './Plans.js';
import * as TestHelpers from './TestHelpers/index.js';
import {
  Emptyable,
  MetadataParam,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../lib.js';
const stripeMethod = StripeResource.method;
export class SubscriptionScheduleResource extends StripeResource {
  /**
   * Retrieves the list of your subscription schedules.
   */
  list(
    params?: SubscriptionScheduleListParams,
    options?: RequestOptions
  ): ApiListPromise<SubscriptionSchedule>;
  list(options?: RequestOptions): ApiListPromise<SubscriptionSchedule>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/subscription_schedules',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates a new subscription schedule object. Each customer can have up to 500 active or scheduled subscriptions.
   */
  create(
    params?: SubscriptionScheduleCreateParams,
    options?: RequestOptions
  ): Promise<Response<SubscriptionSchedule>>;
  create(options?: RequestOptions): Promise<Response<SubscriptionSchedule>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/subscription_schedules',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.
   */
  retrieve(
    id: string,
    params?: SubscriptionScheduleRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<SubscriptionSchedule>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<SubscriptionSchedule>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/subscription_schedules/{schedule}',
    }).call(this, ...args);
  }

  /**
   * Updates an existing subscription schedule.
   */
  update(
    id: string,
    params?: SubscriptionScheduleUpdateParams,
    options?: RequestOptions
  ): Promise<Response<SubscriptionSchedule>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/subscription_schedules/{schedule}',
    }).call(this, ...args);
  }

  /**
   * Cancels a subscription schedule and its associated subscription immediately (if the subscription schedule has an active subscription). A subscription schedule can only be canceled if its status is not_started or active.
   */
  cancel(
    id: string,
    params?: SubscriptionScheduleCancelParams,
    options?: RequestOptions
  ): Promise<Response<SubscriptionSchedule>>;
  cancel(
    id: string,
    options?: RequestOptions
  ): Promise<Response<SubscriptionSchedule>>;
  cancel(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/subscription_schedules/{schedule}/cancel',
    }).call(this, ...args);
  }

  /**
   * Releases the subscription schedule immediately, which will stop scheduling of its phases, but leave any existing subscription in place. A schedule can only be released if its status is not_started or active. If the subscription schedule is currently associated with a subscription, releasing it will remove its subscription property and set the subscription's ID to the released_subscription property.
   */
  release(
    id: string,
    params?: SubscriptionScheduleReleaseParams,
    options?: RequestOptions
  ): Promise<Response<SubscriptionSchedule>>;
  release(
    id: string,
    options?: RequestOptions
  ): Promise<Response<SubscriptionSchedule>>;
  release(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/subscription_schedules/{schedule}/release',
    }).call(this, ...args);
  }
}
export interface SubscriptionSchedule {
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
  application: string | Application | DeletedApplication | null;

  /**
   * The billing mode of the subscription.
   */
  billing_mode: SubscriptionSchedule.BillingMode;

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
  customer: string | Customer | DeletedCustomer;

  /**
   * ID of the account who owns the subscription schedule.
   */
  customer_account: string | null;

  default_settings: SubscriptionSchedule.DefaultSettings;

  /**
   * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running. `cancel` will end the subscription schedule and cancel the underlying subscription.
   */
  end_behavior: SubscriptionSchedule.EndBehavior;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * Configuration for the subscription schedule's phases.
   */
  phases: Array<SubscriptionSchedule.Phase>;

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
  status: SubscriptionSchedule.Status;

  /**
   * ID of the subscription managed by the subscription schedule.
   */
  subscription: string | Subscription | null;

  /**
   * ID of the test clock this subscription schedule belongs to.
   */
  test_clock: string | TestHelpers.TestClock | null;
}
export namespace SubscriptionSchedule {
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
     * The account (if any) the associated subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices.
     */
    transfer_data: DefaultSettings.TransferData | null;
  }

  export type EndBehavior = 'cancel' | 'none' | 'release' | 'renew';

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
     * When the trial ends within the phase.
     */
    trial_end: number | null;
  }

  export type Status =
    | 'active'
    | 'canceled'
    | 'completed'
    | 'not_started'
    | 'released';

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
        export type Type = 'account' | 'self';
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
        export type Type = 'account' | 'self';
      }
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
       * ID of the promotion code to create a new discount for.
       */
      promotion_code: string | PromotionCode | null;
    }

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
         * ID of the promotion code to create a new discount for.
         */
        promotion_code: string | PromotionCode | null;
      }

      export interface Period {
        end: Period.End;

        start: Period.Start;
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
        export type Type = 'account' | 'self';
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
        export type Type = 'account' | 'self';
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
         * ID of the promotion code to create a new discount for.
         */
        promotion_code: string | PromotionCode | null;
      }
    }
  }
}
export interface SubscriptionScheduleCreateParams {
  /**
   * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
   */
  billing_mode?: SubscriptionScheduleCreateParams.BillingMode;

  /**
   * The identifier of the customer to create the subscription schedule for.
   */
  customer?: string;

  /**
   * The identifier of the account to create the subscription schedule for.
   */
  customer_account?: string;

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
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;

  /**
   * List representing phases of the subscription schedule. Each phase can be customized to have different durations, plans, and coupons. If there are multiple phases, the `end_date` of one phase will always equal the `start_date` of the next phase.
   */
  phases?: Array<SubscriptionScheduleCreateParams.Phase>;

  /**
   * When the subscription schedule starts. We recommend using `now` so that it starts the subscription immediately. You can also use a Unix timestamp to backdate the subscription so that it starts on a past date, or set a future date for the subscription to start on.
   */
  start_date?: number | 'now';
}
export namespace SubscriptionScheduleCreateParams {
  export interface BillingMode {
    /**
     * Configure behavior for flexible billing mode.
     */
    flexible?: BillingMode.Flexible;

    /**
     * Controls the calculation and orchestration of prorations and invoices for subscriptions. If no value is passed, the default is `flexible`.
     */
    type: BillingMode.Type;
  }

  export interface DefaultSettings {
    /**
     * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
     */
    application_fee_percent?: number;

    /**
     * Default settings for automatic tax computation.
     */
    automatic_tax?: DefaultSettings.AutomaticTax;

    /**
     * Can be set to `phase_start` to set the anchor to the start of the phase or `automatic` to automatically change it if needed. Cannot be set to `phase_start` if this phase specifies a trial. For more information, see the billing cycle [documentation](https://docs.stripe.com/billing/subscriptions/billing-cycle).
     */
    billing_cycle_anchor?: DefaultSettings.BillingCycleAnchor;

    /**
     * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
     */
    billing_thresholds?: Emptyable<DefaultSettings.BillingThresholds>;

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
    description?: Emptyable<string>;

    /**
     * All invoices will be billed using the specified settings.
     */
    invoice_settings?: DefaultSettings.InvoiceSettings;

    /**
     * The account on behalf of which to charge, for each of the associated subscription's invoices.
     */
    on_behalf_of?: Emptyable<string>;

    /**
     * The data with which to automatically create a Transfer for each of the associated subscription's invoices.
     */
    transfer_data?: Emptyable<DefaultSettings.TransferData>;
  }

  export type EndBehavior = 'cancel' | 'none' | 'release' | 'renew';

  export interface Phase {
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
     * Can be set to `phase_start` to set the anchor to the start of the phase or `automatic` to automatically change it if needed. Cannot be set to `phase_start` if this phase specifies a trial. For more information, see the billing cycle [documentation](https://docs.stripe.com/billing/subscriptions/billing-cycle).
     */
    billing_cycle_anchor?: Phase.BillingCycleAnchor;

    /**
     * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
     */
    billing_thresholds?: Emptyable<Phase.BillingThresholds>;

    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically` on creation.
     */
    collection_method?: Phase.CollectionMethod;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
     */
    default_payment_method?: string;

    /**
     * A list of [Tax Rate](https://docs.stripe.com/api/tax_rates) ids. These Tax Rates will set the Subscription's [`default_tax_rates`](https://docs.stripe.com/api/subscriptions/create#create_subscription-default_tax_rates), which means they will be the Invoice's [`default_tax_rates`](https://docs.stripe.com/api/invoices/create#create_invoice-default_tax_rates) for any Invoices issued by the Subscription during this Phase.
     */
    default_tax_rates?: Emptyable<Array<string>>;

    /**
     * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
     */
    description?: Emptyable<string>;

    /**
     * The coupons to redeem into discounts for the schedule phase. If not specified, inherits the discount from the subscription's customer. Pass an empty string to avoid inheriting any discounts.
     */
    discounts?: Emptyable<Array<Phase.Discount>>;

    /**
     * The number of intervals the phase should last. If set, `end_date` must not be set.
     */
    duration?: Phase.Duration;

    /**
     * The date at which this phase of the subscription schedule ends. If set, `duration` must not be set.
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
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to a phase. Metadata on a schedule's phase will update the underlying subscription's `metadata` when the phase is entered, adding new keys and replacing existing keys in the subscription's `metadata`. Individual keys in the subscription's `metadata` can be unset by posting an empty value to them in the phase's `metadata`. To unset all keys in the subscription's `metadata`, update the subscription directly or unset every key individually from the phase's `metadata`.
     */
    metadata?: MetadataParam;

    /**
     * The account on behalf of which to charge, for each of the associated subscription's invoices.
     */
    on_behalf_of?: string;

    /**
     * Controls whether the subscription schedule should create [prorations](https://docs.stripe.com/billing/subscriptions/prorations) when transitioning to this phase if there is a difference in billing configuration. It's different from the request-level [proration_behavior](https://docs.stripe.com/api/subscription_schedules/update#update_subscription_schedule-proration_behavior) parameter which controls what happens if the update request affects the billing configuration (item price, quantity, etc.) of the current phase.
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
     * Sets the phase to trialing from the start date to this date. Must be before the phase end date, can not be combined with `trial`
     */
    trial_end?: number;
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

  export namespace DefaultSettings {
    export interface AutomaticTax {
      /**
       * Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription.
       */
      enabled: boolean;

      /**
       * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
       */
      liability?: AutomaticTax.Liability;
    }

    export type BillingCycleAnchor = 'automatic' | 'phase_start';

    export interface BillingThresholds {
      /**
       * Monetary threshold that triggers the subscription to advance to a new billing period
       */
      amount_gte?: number;

      /**
       * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged.
       */
      reset_billing_cycle_anchor?: boolean;
    }

    export type CollectionMethod = 'charge_automatically' | 'send_invoice';

    export interface InvoiceSettings {
      /**
       * The account tax IDs associated with the subscription schedule. Will be set on invoices generated by the subscription schedule.
       */
      account_tax_ids?: Emptyable<Array<string>>;

      /**
       * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `collection_method=charge_automatically`.
       */
      days_until_due?: number;

      /**
       * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
       */
      issuer?: InvoiceSettings.Issuer;
    }

    export interface TransferData {
      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
       */
      amount_percent?: number;

      /**
       * ID of an existing, connected Stripe account.
       */
      destination: string;
    }

    export namespace AutomaticTax {
      export interface Liability {
        /**
         * The connected account being referenced when `type` is `account`.
         */
        account?: string;

        /**
         * Type of the account referenced in the request.
         */
        type: Liability.Type;
      }

      export namespace Liability {
        export type Type = 'account' | 'self';
      }
    }

    export namespace InvoiceSettings {
      export interface Issuer {
        /**
         * The connected account being referenced when `type` is `account`.
         */
        account?: string;

        /**
         * Type of the account referenced in the request.
         */
        type: Issuer.Type;
      }

      export namespace Issuer {
        export type Type = 'account' | 'self';
      }
    }
  }

  export namespace Phase {
    export interface AddInvoiceItem {
      /**
       * The coupons to redeem into discounts for the item.
       */
      discounts?: Array<AddInvoiceItem.Discount>;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam;

      /**
       * The period associated with this invoice item. If not set, `period.start.type` defaults to `max_item_period_start` and `period.end.type` defaults to `min_item_period_end`.
       */
      period?: AddInvoiceItem.Period;

      /**
       * The ID of the price object. One of `price` or `price_data` is required.
       */
      price?: string;

      /**
       * Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline. One of `price` or `price_data` is required.
       */
      price_data?: AddInvoiceItem.PriceData;

      /**
       * Quantity for this item. Defaults to 1.
       */
      quantity?: number;

      /**
       * The tax rates which apply to the item. When set, the `default_tax_rates` do not apply to this item.
       */
      tax_rates?: Emptyable<Array<string>>;
    }

    export interface AutomaticTax {
      /**
       * Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription.
       */
      enabled: boolean;

      /**
       * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
       */
      liability?: AutomaticTax.Liability;
    }

    export type BillingCycleAnchor = 'automatic' | 'phase_start';

    export interface BillingThresholds {
      /**
       * Monetary threshold that triggers the subscription to advance to a new billing period
       */
      amount_gte?: number;

      /**
       * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged.
       */
      reset_billing_cycle_anchor?: boolean;
    }

    export type CollectionMethod = 'charge_automatically' | 'send_invoice';

    export interface Discount {
      /**
       * ID of the coupon to create a new discount for.
       */
      coupon?: string;

      /**
       * ID of an existing discount on the object (or one of its ancestors) to reuse.
       */
      discount?: string;

      /**
       * ID of the promotion code to create a new discount for.
       */
      promotion_code?: string;
    }

    export interface Duration {
      /**
       * Specifies phase duration. Either `day`, `week`, `month` or `year`.
       */
      interval: Duration.Interval;

      /**
       * The multiplier applied to the interval.
       */
      interval_count?: number;
    }

    export interface InvoiceSettings {
      /**
       * The account tax IDs associated with this phase of the subscription schedule. Will be set on invoices generated by this phase of the subscription schedule.
       */
      account_tax_ids?: Emptyable<Array<string>>;

      /**
       * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
       */
      days_until_due?: number;

      /**
       * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
       */
      issuer?: InvoiceSettings.Issuer;
    }

    export interface Item {
      /**
       * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
       */
      billing_thresholds?: Emptyable<Item.BillingThresholds>;

      /**
       * The coupons to redeem into discounts for the subscription item.
       */
      discounts?: Emptyable<Array<Item.Discount>>;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to a configuration item. Metadata on a configuration item will update the underlying subscription item's `metadata` when the phase is entered, adding new keys and replacing existing keys. Individual keys in the subscription item's `metadata` can be unset by posting an empty value to them in the configuration item's `metadata`. To unset all keys in the subscription item's `metadata`, update the subscription item directly or unset every key individually from the configuration item's `metadata`.
       */
      metadata?: MetadataParam;

      /**
       * The plan ID to subscribe to. You may specify the same ID in `plan` and `price`.
       */
      plan?: string;

      /**
       * The ID of the price object.
       */
      price?: string;

      /**
       * Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline.
       */
      price_data?: Item.PriceData;

      /**
       * Quantity for the given price. Can be set only if the price's `usage_type` is `licensed` and not `metered`.
       */
      quantity?: number;

      /**
       * A list of [Tax Rate](https://docs.stripe.com/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://docs.stripe.com/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
       */
      tax_rates?: Emptyable<Array<string>>;
    }

    export type ProrationBehavior =
      | 'always_invoice'
      | 'create_prorations'
      | 'none';

    export interface TransferData {
      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
       */
      amount_percent?: number;

      /**
       * ID of an existing, connected Stripe account.
       */
      destination: string;
    }

    export namespace AddInvoiceItem {
      export interface Discount {
        /**
         * ID of the coupon to create a new discount for.
         */
        coupon?: string;

        /**
         * ID of an existing discount on the object (or one of its ancestors) to reuse.
         */
        discount?: string;

        /**
         * ID of the promotion code to create a new discount for.
         */
        promotion_code?: string;
      }

      export interface Period {
        /**
         * End of the invoice item period.
         */
        end: Period.End;

        /**
         * Start of the invoice item period.
         */
        start: Period.Start;
      }

      export interface PriceData {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to.
         */
        product: string;

        /**
         * Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
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

      export namespace PriceData {
        export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
      }
    }

    export namespace AutomaticTax {
      export interface Liability {
        /**
         * The connected account being referenced when `type` is `account`.
         */
        account?: string;

        /**
         * Type of the account referenced in the request.
         */
        type: Liability.Type;
      }

      export namespace Liability {
        export type Type = 'account' | 'self';
      }
    }

    export namespace Duration {
      export type Interval = 'day' | 'month' | 'week' | 'year';
    }

    export namespace InvoiceSettings {
      export interface Issuer {
        /**
         * The connected account being referenced when `type` is `account`.
         */
        account?: string;

        /**
         * Type of the account referenced in the request.
         */
        type: Issuer.Type;
      }

      export namespace Issuer {
        export type Type = 'account' | 'self';
      }
    }

    export namespace Item {
      export interface BillingThresholds {
        /**
         * Number of units that meets the billing threshold to advance the subscription to a new billing period (e.g., it takes 10 $5 units to meet a $50 [monetary threshold](https://docs.stripe.com/api/subscriptions/update#update_subscription-billing_thresholds-amount_gte))
         */
        usage_gte: number;
      }

      export interface Discount {
        /**
         * ID of the coupon to create a new discount for.
         */
        coupon?: string;

        /**
         * ID of an existing discount on the object (or one of its ancestors) to reuse.
         */
        discount?: string;

        /**
         * ID of the promotion code to create a new discount for.
         */
        promotion_code?: string;
      }

      export interface PriceData {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to.
         */
        product: string;

        /**
         * The recurring components of a price such as `interval` and `interval_count`.
         */
        recurring: PriceData.Recurring;

        /**
         * Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
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

      export namespace PriceData {
        export interface Recurring {
          /**
           * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
           */
          interval: Recurring.Interval;

          /**
           * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).
           */
          interval_count?: number;
        }

        export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

        export namespace Recurring {
          export type Interval = 'day' | 'month' | 'week' | 'year';
        }
      }
    }
  }
}
export interface SubscriptionScheduleRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface SubscriptionScheduleUpdateParams {
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
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;

  /**
   * List representing phases of the subscription schedule. Each phase can be customized to have different durations, plans, and coupons. If there are multiple phases, the `end_date` of one phase will always equal the `start_date` of the next phase. Note that past phases can be omitted.
   */
  phases?: Array<SubscriptionScheduleUpdateParams.Phase>;

  /**
   * If the update changes the billing configuration (item price, quantity, etc.) of the current phase, indicates how prorations from this change should be handled. The default value is `create_prorations`.
   */
  proration_behavior?: SubscriptionScheduleUpdateParams.ProrationBehavior;
}
export namespace SubscriptionScheduleUpdateParams {
  export interface DefaultSettings {
    /**
     * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
     */
    application_fee_percent?: number;

    /**
     * Default settings for automatic tax computation.
     */
    automatic_tax?: DefaultSettings.AutomaticTax;

    /**
     * Can be set to `phase_start` to set the anchor to the start of the phase or `automatic` to automatically change it if needed. Cannot be set to `phase_start` if this phase specifies a trial. For more information, see the billing cycle [documentation](https://docs.stripe.com/billing/subscriptions/billing-cycle).
     */
    billing_cycle_anchor?: DefaultSettings.BillingCycleAnchor;

    /**
     * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
     */
    billing_thresholds?: Emptyable<DefaultSettings.BillingThresholds>;

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
    description?: Emptyable<string>;

    /**
     * All invoices will be billed using the specified settings.
     */
    invoice_settings?: DefaultSettings.InvoiceSettings;

    /**
     * The account on behalf of which to charge, for each of the associated subscription's invoices.
     */
    on_behalf_of?: Emptyable<string>;

    /**
     * The data with which to automatically create a Transfer for each of the associated subscription's invoices.
     */
    transfer_data?: Emptyable<DefaultSettings.TransferData>;
  }

  export type EndBehavior = 'cancel' | 'none' | 'release' | 'renew';

  export interface Phase {
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
     * Can be set to `phase_start` to set the anchor to the start of the phase or `automatic` to automatically change it if needed. Cannot be set to `phase_start` if this phase specifies a trial. For more information, see the billing cycle [documentation](https://docs.stripe.com/billing/subscriptions/billing-cycle).
     */
    billing_cycle_anchor?: Phase.BillingCycleAnchor;

    /**
     * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
     */
    billing_thresholds?: Emptyable<Phase.BillingThresholds>;

    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically` on creation.
     */
    collection_method?: Phase.CollectionMethod;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
     */
    default_payment_method?: string;

    /**
     * A list of [Tax Rate](https://docs.stripe.com/api/tax_rates) ids. These Tax Rates will set the Subscription's [`default_tax_rates`](https://docs.stripe.com/api/subscriptions/create#create_subscription-default_tax_rates), which means they will be the Invoice's [`default_tax_rates`](https://docs.stripe.com/api/invoices/create#create_invoice-default_tax_rates) for any Invoices issued by the Subscription during this Phase.
     */
    default_tax_rates?: Emptyable<Array<string>>;

    /**
     * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
     */
    description?: Emptyable<string>;

    /**
     * The coupons to redeem into discounts for the schedule phase. If not specified, inherits the discount from the subscription's customer. Pass an empty string to avoid inheriting any discounts.
     */
    discounts?: Emptyable<Array<Phase.Discount>>;

    /**
     * The number of intervals the phase should last. If set, `end_date` must not be set.
     */
    duration?: Phase.Duration;

    /**
     * The date at which this phase of the subscription schedule ends. If set, `duration` must not be set.
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
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to a phase. Metadata on a schedule's phase will update the underlying subscription's `metadata` when the phase is entered, adding new keys and replacing existing keys in the subscription's `metadata`. Individual keys in the subscription's `metadata` can be unset by posting an empty value to them in the phase's `metadata`. To unset all keys in the subscription's `metadata`, update the subscription directly or unset every key individually from the phase's `metadata`.
     */
    metadata?: MetadataParam;

    /**
     * The account on behalf of which to charge, for each of the associated subscription's invoices.
     */
    on_behalf_of?: string;

    /**
     * Controls whether the subscription schedule should create [prorations](https://docs.stripe.com/billing/subscriptions/prorations) when transitioning to this phase if there is a difference in billing configuration. It's different from the request-level [proration_behavior](https://docs.stripe.com/api/subscription_schedules/update#update_subscription_schedule-proration_behavior) parameter which controls what happens if the update request affects the billing configuration (item price, quantity, etc.) of the current phase.
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
     * Sets the phase to trialing from the start date to this date. Must be before the phase end date, can not be combined with `trial`
     */
    trial_end?: number | 'now';
  }

  export type ProrationBehavior =
    | 'always_invoice'
    | 'create_prorations'
    | 'none';

  export namespace DefaultSettings {
    export interface AutomaticTax {
      /**
       * Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription.
       */
      enabled: boolean;

      /**
       * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
       */
      liability?: AutomaticTax.Liability;
    }

    export type BillingCycleAnchor = 'automatic' | 'phase_start';

    export interface BillingThresholds {
      /**
       * Monetary threshold that triggers the subscription to advance to a new billing period
       */
      amount_gte?: number;

      /**
       * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged.
       */
      reset_billing_cycle_anchor?: boolean;
    }

    export type CollectionMethod = 'charge_automatically' | 'send_invoice';

    export interface InvoiceSettings {
      /**
       * The account tax IDs associated with the subscription schedule. Will be set on invoices generated by the subscription schedule.
       */
      account_tax_ids?: Emptyable<Array<string>>;

      /**
       * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `collection_method=charge_automatically`.
       */
      days_until_due?: number;

      /**
       * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
       */
      issuer?: InvoiceSettings.Issuer;
    }

    export interface TransferData {
      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
       */
      amount_percent?: number;

      /**
       * ID of an existing, connected Stripe account.
       */
      destination: string;
    }

    export namespace AutomaticTax {
      export interface Liability {
        /**
         * The connected account being referenced when `type` is `account`.
         */
        account?: string;

        /**
         * Type of the account referenced in the request.
         */
        type: Liability.Type;
      }

      export namespace Liability {
        export type Type = 'account' | 'self';
      }
    }

    export namespace InvoiceSettings {
      export interface Issuer {
        /**
         * The connected account being referenced when `type` is `account`.
         */
        account?: string;

        /**
         * Type of the account referenced in the request.
         */
        type: Issuer.Type;
      }

      export namespace Issuer {
        export type Type = 'account' | 'self';
      }
    }
  }

  export namespace Phase {
    export interface AddInvoiceItem {
      /**
       * The coupons to redeem into discounts for the item.
       */
      discounts?: Array<AddInvoiceItem.Discount>;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam;

      /**
       * The period associated with this invoice item. If not set, `period.start.type` defaults to `max_item_period_start` and `period.end.type` defaults to `min_item_period_end`.
       */
      period?: AddInvoiceItem.Period;

      /**
       * The ID of the price object. One of `price` or `price_data` is required.
       */
      price?: string;

      /**
       * Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline. One of `price` or `price_data` is required.
       */
      price_data?: AddInvoiceItem.PriceData;

      /**
       * Quantity for this item. Defaults to 1.
       */
      quantity?: number;

      /**
       * The tax rates which apply to the item. When set, the `default_tax_rates` do not apply to this item.
       */
      tax_rates?: Emptyable<Array<string>>;
    }

    export interface AutomaticTax {
      /**
       * Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription.
       */
      enabled: boolean;

      /**
       * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
       */
      liability?: AutomaticTax.Liability;
    }

    export type BillingCycleAnchor = 'automatic' | 'phase_start';

    export interface BillingThresholds {
      /**
       * Monetary threshold that triggers the subscription to advance to a new billing period
       */
      amount_gte?: number;

      /**
       * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged.
       */
      reset_billing_cycle_anchor?: boolean;
    }

    export type CollectionMethod = 'charge_automatically' | 'send_invoice';

    export interface Discount {
      /**
       * ID of the coupon to create a new discount for.
       */
      coupon?: string;

      /**
       * ID of an existing discount on the object (or one of its ancestors) to reuse.
       */
      discount?: string;

      /**
       * ID of the promotion code to create a new discount for.
       */
      promotion_code?: string;
    }

    export interface Duration {
      /**
       * Specifies phase duration. Either `day`, `week`, `month` or `year`.
       */
      interval: Duration.Interval;

      /**
       * The multiplier applied to the interval.
       */
      interval_count?: number;
    }

    export interface InvoiceSettings {
      /**
       * The account tax IDs associated with this phase of the subscription schedule. Will be set on invoices generated by this phase of the subscription schedule.
       */
      account_tax_ids?: Emptyable<Array<string>>;

      /**
       * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
       */
      days_until_due?: number;

      /**
       * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
       */
      issuer?: InvoiceSettings.Issuer;
    }

    export interface Item {
      /**
       * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
       */
      billing_thresholds?: Emptyable<Item.BillingThresholds>;

      /**
       * The coupons to redeem into discounts for the subscription item.
       */
      discounts?: Emptyable<Array<Item.Discount>>;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to a configuration item. Metadata on a configuration item will update the underlying subscription item's `metadata` when the phase is entered, adding new keys and replacing existing keys. Individual keys in the subscription item's `metadata` can be unset by posting an empty value to them in the configuration item's `metadata`. To unset all keys in the subscription item's `metadata`, update the subscription item directly or unset every key individually from the configuration item's `metadata`.
       */
      metadata?: MetadataParam;

      /**
       * The plan ID to subscribe to. You may specify the same ID in `plan` and `price`.
       */
      plan?: string;

      /**
       * The ID of the price object.
       */
      price?: string;

      /**
       * Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline.
       */
      price_data?: Item.PriceData;

      /**
       * Quantity for the given price. Can be set only if the price's `usage_type` is `licensed` and not `metered`.
       */
      quantity?: number;

      /**
       * A list of [Tax Rate](https://docs.stripe.com/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://docs.stripe.com/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
       */
      tax_rates?: Emptyable<Array<string>>;
    }

    export type ProrationBehavior =
      | 'always_invoice'
      | 'create_prorations'
      | 'none';

    export interface TransferData {
      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
       */
      amount_percent?: number;

      /**
       * ID of an existing, connected Stripe account.
       */
      destination: string;
    }

    export namespace AddInvoiceItem {
      export interface Discount {
        /**
         * ID of the coupon to create a new discount for.
         */
        coupon?: string;

        /**
         * ID of an existing discount on the object (or one of its ancestors) to reuse.
         */
        discount?: string;

        /**
         * ID of the promotion code to create a new discount for.
         */
        promotion_code?: string;
      }

      export interface Period {
        /**
         * End of the invoice item period.
         */
        end: Period.End;

        /**
         * Start of the invoice item period.
         */
        start: Period.Start;
      }

      export interface PriceData {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to.
         */
        product: string;

        /**
         * Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
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

      export namespace PriceData {
        export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
      }
    }

    export namespace AutomaticTax {
      export interface Liability {
        /**
         * The connected account being referenced when `type` is `account`.
         */
        account?: string;

        /**
         * Type of the account referenced in the request.
         */
        type: Liability.Type;
      }

      export namespace Liability {
        export type Type = 'account' | 'self';
      }
    }

    export namespace Duration {
      export type Interval = 'day' | 'month' | 'week' | 'year';
    }

    export namespace InvoiceSettings {
      export interface Issuer {
        /**
         * The connected account being referenced when `type` is `account`.
         */
        account?: string;

        /**
         * Type of the account referenced in the request.
         */
        type: Issuer.Type;
      }

      export namespace Issuer {
        export type Type = 'account' | 'self';
      }
    }

    export namespace Item {
      export interface BillingThresholds {
        /**
         * Number of units that meets the billing threshold to advance the subscription to a new billing period (e.g., it takes 10 $5 units to meet a $50 [monetary threshold](https://docs.stripe.com/api/subscriptions/update#update_subscription-billing_thresholds-amount_gte))
         */
        usage_gte: number;
      }

      export interface Discount {
        /**
         * ID of the coupon to create a new discount for.
         */
        coupon?: string;

        /**
         * ID of an existing discount on the object (or one of its ancestors) to reuse.
         */
        discount?: string;

        /**
         * ID of the promotion code to create a new discount for.
         */
        promotion_code?: string;
      }

      export interface PriceData {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to.
         */
        product: string;

        /**
         * The recurring components of a price such as `interval` and `interval_count`.
         */
        recurring: PriceData.Recurring;

        /**
         * Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
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

      export namespace PriceData {
        export interface Recurring {
          /**
           * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
           */
          interval: Recurring.Interval;

          /**
           * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).
           */
          interval_count?: number;
        }

        export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

        export namespace Recurring {
          export type Interval = 'day' | 'month' | 'week' | 'year';
        }
      }
    }
  }
}
export interface SubscriptionScheduleListParams extends PaginationParams {
  /**
   * Only return subscription schedules that were created canceled the given date interval.
   */
  canceled_at?: RangeQueryParam | number;

  /**
   * Only return subscription schedules that completed during the given date interval.
   */
  completed_at?: RangeQueryParam | number;

  /**
   * Only return subscription schedules that were created during the given date interval.
   */
  created?: RangeQueryParam | number;

  /**
   * Only return subscription schedules for the given customer.
   */
  customer?: string;

  /**
   * Only return subscription schedules for the given account.
   */
  customer_account?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Only return subscription schedules that were released during the given date interval.
   */
  released_at?: RangeQueryParam | number;

  /**
   * Only return subscription schedules that have not started yet.
   */
  scheduled?: boolean;
}
export interface SubscriptionScheduleCancelParams {
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
export interface SubscriptionScheduleReleaseParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Keep any cancellation on the subscription that the schedule has set
   */
  preserve_cancel_date?: boolean;
}
