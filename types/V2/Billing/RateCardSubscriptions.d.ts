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
          collection_status?: RateCardSubscription.CollectionStatus;

          /**
           * The collection status transitions of the Rate Card Subscription.
           */
          collection_status_transitions?: RateCardSubscription.CollectionStatusTransitions;

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
          metadata?: Stripe.Metadata;

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
          servicing_status?: RateCardSubscription.ServicingStatus;

          /**
           * The servicing status transitions of the Rate Card Subscription.
           */
          servicing_status_transitions?: RateCardSubscription.ServicingStatusTransitions;

          /**
           * The ID of the Test Clock, if any.
           */
          test_clock?: string;
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
          }
        }
      }
    }
  }
}
