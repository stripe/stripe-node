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
           * The ID of the RateCardVersion.
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
           * The ID of the RateCard that this version belongs to.
           */
          rate_card_id: string;
        }
      }
    }
  }
}
