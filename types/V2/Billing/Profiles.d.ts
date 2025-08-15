// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The Profile object.
         */
        interface Profile {
          /**
           * The ID of the billing profile object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.profile';

          /**
           * Timestamp of when the object was created.
           */
          created: string;

          /**
           * The ID of the customer object.
           */
          customer: string | null;

          /**
           * The ID of the payment method object.
           */
          default_payment_method: string | null;

          /**
           * A customer-facing name for the billing profile.
           * Maximum length of 250 characters.
           */
          display_name: string | null;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * An internal key you can use to search for a particular billing profile.
           * Maximum length of 200 characters.
           */
          lookup_key: string | null;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata: Stripe.Metadata | null;

          /**
           * The current status of the billing profile.
           */
          status: Profile.Status;
        }

        namespace Profile {
          type Status = 'active' | 'inactive';
        }
      }
    }
  }
}
