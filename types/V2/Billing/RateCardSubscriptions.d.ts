// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The RateCardSubscription object.
         */
        interface RateCardSubscription {
          /**
           * The ID of the RateCardSubscription.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.rate_card_subscription';

          /**
           * The ID of the billing Cadence.
           */
          billing_cadence: string;

          /**
           * The payment status of a RateCardSubscription.
           */
          collection_status: RateCardSubscription.CollectionStatus | null;

          /**
           * The collection status transitions of the RateCardSubscription.
           */
          collection_status_transitions: RateCardSubscription.CollectionStatusTransitions | null;

          /**
           * Timestamp of when the object was created.
           */
          created: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata: Stripe.Metadata | null;

          /**
           * The ID of the RateCard.
           */
          rate_card: string;

          /**
           * The ID of the RateCardVersion.
           */
          rate_card_version: string;

          /**
           * The servicing status of a RateCardSubscription.
           */
          servicing_status: RateCardSubscription.ServicingStatus | null;

          /**
           * The servicing status transitions of the RateCardSubscription.
           */
          servicing_status_transitions: RateCardSubscription.ServicingStatusTransitions | null;

          /**
           * The ID of the Test Clock, if any.
           */
          test_clock: string | null;
        }

        namespace RateCardSubscription {
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
