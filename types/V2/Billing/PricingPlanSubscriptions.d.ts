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
           * Unique identifier for the PricingPlanSubscription.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.pricing_plan_subscription';

          /**
           * The ID of the Cadence this subscription is billed on.
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
           * Set of key-value pairs that you can attach to an object.
           */
          metadata: Stripe.Metadata | null;

          /**
           * The ID of the PricingPlan for this subscription.
           */
          pricing_plan: string;

          /**
           * The ID of the PricingPlanVersion for this subscription.
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
           * The ID of the TestClock of the associated Cadence, if any.
           */
          test_clock: string | null;
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
            awaiting_customer_action_at: string | null;

            /**
             * When the collection status transitioned to current.
             */
            current_at: string | null;

            /**
             * When the collection status transitioned to past due.
             */
            past_due_at: string | null;

            /**
             * When the collection status transitioned to paused.
             */
            paused_at: string | null;

            /**
             * When the collection status transitioned to unpaid.
             */
            unpaid_at: string | null;
          }

          type ServicingStatus = 'active' | 'canceled' | 'paused' | 'pending';

          interface ServicingStatusTransitions {
            /**
             * When the servicing status transitioned to activated.
             */
            activated_at: string | null;

            /**
             * When the servicing status transitioned to canceled.
             */
            canceled_at: string | null;

            /**
             * When the servicing status transitioned to paused.
             */
            paused_at: string | null;
          }
        }
      }
    }
  }
}
