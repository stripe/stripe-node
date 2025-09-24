// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The PricingPlanSubscription object.
         */
        interface PricingPlanSubscription {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.pricing_plan_subscription';

          /**
           * The ID of the Billing Cadence this subscription is billed on.
           */
          billing_cadence: string;

          /**
           * Current collection status of this subscription.
           */
          collection_status: PricingPlanSubscription.CollectionStatus;

          /**
           * Timestamps for collection status transitions.
           */
          collection_status_transitions: PricingPlanSubscription.CollectionStatusTransitions;

          /**
           * Time at which the object was created.
           */
          created: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.Metadata;

          /**
           * The ID of the Pricing Plan for this subscription.
           */
          pricing_plan: string;

          /**
           * The ID of the Pricing Plan Version for this subscription.
           */
          pricing_plan_version: string;

          /**
           * Current servicing status of this subscription.
           */
          servicing_status: PricingPlanSubscription.ServicingStatus;

          /**
           * Timestamps for servicing status transitions.
           */
          servicing_status_transitions: PricingPlanSubscription.ServicingStatusTransitions;

          /**
           * The ID of the Test Clock of the associated Billing Cadence, if any.
           */
          test_clock?: string;
        }

        namespace PricingPlanSubscription {
          type CollectionStatus =
            | 'awaiting_customer_action'
            | 'current'
            | 'past_due'
            | 'paused'
            | 'unpaid';

          interface CollectionStatusTransitions {
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

          type ServicingStatus = 'active' | 'canceled' | 'paused' | 'pending';

          interface ServicingStatusTransitions {
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
  }
}
