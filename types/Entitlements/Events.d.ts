// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Entitlements {
      /**
       * An entitlement event either grants or revokes an entitlement to a feature for a customer.
       */
      interface Event {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'entitlements.event';

        /**
         * The customer that is being granted or revoked entitlement to/from a feature.
         */
        customer: string;

        /**
         * The feature that the customer is being granted/revoked entitlement to/from.
         */
        feature: string;

        /**
         * Contains information about type=grant entitlement event.
         */
        grant: Event.Grant | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Contains information about entitlement events relating to features with type=quantity. Required when the feature has type=quantity.
         */
        quantity: Event.Quantity | null;

        /**
         * Contains information about type=revoke entitlement event.
         */
        revoke: Event.Revoke | null;

        /**
         * Whether the event is a grant or revocation of the feature.
         */
        type: Event.Type;
      }

      namespace Event {
        interface Grant {
          /**
           * When manually creating a grant entitlement event, you can make it a temporary grant by setting it to expire.
           */
          expires_at: number;

          /**
           * Who/what created this grant entitlement event.
           */
          granted_by: Grant.GrantedBy;

          /**
           * If this entitlement event was created by a subscription_item, this will contains information about the subscription_item.
           */
          subscription_item: Grant.SubscriptionItem | null;
        }

        namespace Grant {
          type GrantedBy = 'subscription_item' | 'user';

          interface SubscriptionItem {
            /**
             * The subscription line item quantity.
             */
            item_quantity: number;

            /**
             * The price for the product that contains the feature for this entitlement event.
             */
            price: string;

            /**
             * The product that contains the feature for this entitlement event.
             */
            product: string;

            /**
             * The subscription that created this entitlement event.
             */
            subscription: string;

            /**
             * The subscription item that created this entitlement event.
             */
            subscription_item: string;
          }
        }

        interface Quantity {
          /**
           * When granting or revoking an entitlement to a type=quantity feature, you must specify the number of units you're granting/revoking. When the entitlement event type=grant, this number increments the total quantity available to the customer, and when type=revoke it decrements the total quantity available to the customer.
           */
          units: number;
        }

        interface Revoke {
          /**
           * A revoke entitlement event will always expire at the same time as the grant it is revoking.
           */
          expires_at: number;

          /**
           * Who/what created this revoke entitlement event.
           */
          revoked_by: Revoke.RevokedBy;

          /**
           * If this entitlement event was created by a subscription_item, this will contains information about the subscription_item.
           */
          subscription_item: Revoke.SubscriptionItem | null;
        }

        namespace Revoke {
          type RevokedBy = 'subscription_item' | 'user';

          interface SubscriptionItem {
            /**
             * The subscription line item quantity.
             */
            item_quantity: number;

            /**
             * The price for the product that contains the feature for this entitlement event.
             */
            price: string;

            /**
             * The product that contains the feature for this entitlement event.
             */
            product: string;

            /**
             * The subscription that created this entitlement event.
             */
            subscription: string;

            /**
             * The subscription item that created this entitlement event.
             */
            subscription_item: string;
          }
        }

        type Type = 'grant' | 'revoke';
      }
    }
  }
}
