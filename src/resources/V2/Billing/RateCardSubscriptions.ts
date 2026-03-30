// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {MetadataParam, Metadata} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class RateCardSubscriptionResource extends StripeResource {
  /**
   * List all Rate Card Subscription objects.
   */
  list(
    params?: V2.Billing.RateCardSubscriptionListParams,
    options?: RequestOptions
  ): ApiListPromise<RateCardSubscription>;
  list(options?: RequestOptions): ApiListPromise<RateCardSubscription>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/rate_card_subscriptions',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Create a Rate Card Subscription to bill a Rate Card on a specified Billing Cadence.
   */
  create(
    params: V2.Billing.RateCardSubscriptionCreateParams,
    options?: RequestOptions
  ): Promise<Response<RateCardSubscription>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/billing/rate_card_subscriptions',
    }).call(this, ...args);
  }

  /**
   * Retrieve a Rate Card Subscription by ID.
   */
  retrieve(
    id: string,
    params?: V2.Billing.RateCardSubscriptionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<RateCardSubscription>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<RateCardSubscription>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/rate_card_subscriptions/{id}',
    }).call(this, ...args);
  }

  /**
   * Update fields on an existing, active Rate Card Subscription.
   */
  update(
    id: string,
    params?: V2.Billing.RateCardSubscriptionUpdateParams,
    options?: RequestOptions
  ): Promise<Response<RateCardSubscription>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/billing/rate_card_subscriptions/{id}',
    }).call(this, ...args);
  }

  /**
   * Cancel an existing, active Rate Card Subscription.
   */
  cancel(
    id: string,
    params?: V2.Billing.RateCardSubscriptionCancelParams,
    options?: RequestOptions
  ): Promise<Response<RateCardSubscription>>;
  cancel(
    id: string,
    options?: RequestOptions
  ): Promise<Response<RateCardSubscription>>;
  cancel(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/billing/rate_card_subscriptions/{id}/cancel',
    }).call(this, ...args);
  }
}
export interface RateCardSubscription {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.rate_card_subscription';

  /**
   * The ID of the Billing Cadence.
   */
  billing_cadence: string;

  /**
   * The payment status of a Rate Card Subscription.
   */
  collection_status?: V2.Billing.RateCardSubscription.CollectionStatus;

  /**
   * The collection status transitions of the Rate Card Subscription.
   */
  collection_status_transitions?: V2.Billing.RateCardSubscription.CollectionStatusTransitions;

  /**
   * Timestamp of when the object was created.
   */
  created: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * The ID of the Rate Card.
   */
  rate_card: string;

  /**
   * The ID of the Rate Card Version.
   */
  rate_card_version: string;

  /**
   * The servicing status of a Rate Card Subscription.
   */
  servicing_status?: V2.Billing.RateCardSubscription.ServicingStatus;

  /**
   * The servicing status transitions of the Rate Card Subscription.
   */
  servicing_status_transitions?: V2.Billing.RateCardSubscription.ServicingStatusTransitions;

  /**
   * The ID of the Test Clock, if any.
   */
  test_clock?: string;
}
export namespace V2 {
  export namespace Billing {
    export namespace RateCardSubscription {
      export type CollectionStatus =
        | 'awaiting_customer_action'
        | 'current'
        | 'past_due'
        | 'paused'
        | 'unpaid';

      export interface CollectionStatusTransitions {
        /**
         * When the collection status transitioned to awaiting customer action.
         */
        awaiting_customer_action_at?: string;

        /**
         * When the collection status transitioned to current.
         */
        current_at?: string;

        /**
         * When the collection status transitioned to past due.
         */
        past_due_at?: string;

        /**
         * When the collection status transitioned to paused.
         */
        paused_at?: string;

        /**
         * When the collection status transitioned to unpaid.
         */
        unpaid_at?: string;
      }

      export type ServicingStatus =
        | 'active'
        | 'canceled'
        | 'paused'
        | 'pending';

      export interface ServicingStatusTransitions {
        /**
         * When the servicing status transitioned to activated.
         */
        activated_at?: string;

        /**
         * When the servicing status transitioned to canceled.
         */
        canceled_at?: string;

        /**
         * When the servicing status transitioned to paused.
         */
        paused_at?: string;

        /**
         * When the servicing is scheduled to transition to activate.
         */
        will_activate_at?: string;

        /**
         * When the servicing is scheduled to cancel.
         */
        will_cancel_at?: string;
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface RateCardSubscriptionCreateParams {
      /**
       * The ID of the Billing Cadence.
       */
      billing_cadence: string;

      /**
       * The ID of the Rate Card.
       */
      rate_card: string;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;

      /**
       * The ID of the Rate Card Version. If not specified, defaults to the "live_version" of the Rate Card at the time of creation.
       */
      rate_card_version?: string;
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface RateCardSubscriptionRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Billing {
    export interface RateCardSubscriptionUpdateParams {
      /**
       * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface RateCardSubscriptionListParams {
      /**
       * Optionally filter by a BillingCadence. Mutually exclusive with `payers`, `rate_card`, and `rate_card_version`.
       */
      billing_cadence?: string;

      /**
       * The page size limit. Defaults to 20.
       */
      limit?: number;

      /**
       * Optionally filter by the payer associated with Billing Cadences which the Rate Card Subscriptions are subscribed to.
       * Mutually exclusive with `billing_cadence`, `rate_card`, and `rate_card_version`.
       */
      payer?: RateCardSubscriptionListParams.Payer;

      /**
       * Optionally filter by a RateCard. Mutually exclusive with `billing_cadence`, `payers`, and `rate_card_version`.
       */
      rate_card?: string;

      /**
       * Optionally filter by a RateCard version. Mutually exclusive with `billing_cadence`, `payers`, and `rate_card`.
       */
      rate_card_version?: string;

      /**
       * Optionally filter by servicing status.
       */
      servicing_status?: RateCardSubscriptionListParams.ServicingStatus;
    }

    export namespace RateCardSubscriptionListParams {
      export interface Payer {
        /**
         * The ID of the Customer object. If provided, only the Rate Card Subscriptions that are subscribed on the Billing Cadences with the specified payer will be returned.
         */
        customer?: string;

        /**
         * A string identifying the type of the payer. Currently the only supported value is `customer`.
         */
        type: 'customer';
      }

      export type ServicingStatus =
        | 'active'
        | 'canceled'
        | 'paused'
        | 'pending';
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface RateCardSubscriptionCancelParams {}
  }
}
