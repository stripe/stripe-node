// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The RateCardVersion object.
         */
        interface RateCardVersion {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.rate_card_version';

          /**
           * Timestamp of when the object was created.
           */
          created: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * The ID of the Rate Card that this version belongs to.
           */
          rate_card_id: string;
        }
      }
    }
  }
}
