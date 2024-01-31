// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Entitlements {
      interface EventCreateParams {
        /**
         * The customer that is being granted or revoked entitlement to/from a feature.
         */
        customer: string;

        /**
         * The feature that the customer is being granted/revoked entitlement to/from.
         */
        feature: string;

        /**
         * Whether the event is a grant or revocation of the feature.
         */
        type: EventCreateParams.Type;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Contains information about type=grant entitlement event.
         */
        grant?: EventCreateParams.Grant;

        /**
         * Contains information about entitlement events relating to features with type=quantity. Required when the feature has type=quantity.
         */
        quantity?: EventCreateParams.Quantity;
      }

      namespace EventCreateParams {
        interface Grant {
          /**
           * When manually creating a grant entitlement event, you can make it a temporary grant by setting it to expire.
           */
          expires_at: number;
        }

        interface Quantity {
          /**
           * When granting or revoking an entitlement to a type=quantity feature, you must specify the number of units you're granting/revoking. When the entitlement event type=grant, this number increments the total quantity available to the customer, and when type=revoke it decrements the total quantity available to the customer.
           */
          units: number;
        }

        type Type = 'grant' | 'revoke';
      }

      class EventsResource {
        /**
         * Create an entitlement event manually, outside of the entitlement events automatically created by Stripe lifecycle events.
         */
        create(
          params: EventCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Entitlements.Event>>;
      }
    }
  }
}
