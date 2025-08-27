// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The LicenseFeeSubscription object.
         */
        interface LicenseFeeSubscription {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.license_fee_subscription';

          /**
           * The ID of the Billing Cadence.
           */
          billing_cadence: string;

          /**
           * Timestamp of when the object was created.
           */
          created: string;

          /**
           * The ID of the License Fee.
           */
          license_fee: string;

          /**
           * The ID of the License Fee Version.
           */
          license_fee_version: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata: Stripe.Metadata | null;

          /**
           * Quantity of the License Fee subscribed to.
           */
          quantity: number;

          /**
           * The ID of the Test Clock, if any.
           */
          test_clock: string | null;
        }
      }
    }
  }
}
