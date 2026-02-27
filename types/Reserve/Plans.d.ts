// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Reserve {
      /**
       * ReservePlans are used to automatically place holds on a merchant's funds until the plan expires. It takes a portion of each incoming Charge (including those resulting from a Transfer from a platform account).
       */
      interface Plan {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'reserve.plan';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Indicates which party created this ReservePlan.
         */
        created_by: Plan.CreatedBy;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). An unset currency indicates that the plan applies to all currencies.
         */
        currency: string | null;

        /**
         * Time at which the ReservePlan was disabled.
         */
        disabled_at: number | null;

        fixed_release?: Plan.FixedRelease;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: Stripe.Metadata;

        /**
         * The percent of each Charge to reserve.
         */
        percent: number;

        rolling_release?: Plan.RollingRelease;

        /**
         * The current status of the ReservePlan. The ReservePlan only affects charges if it is `active`.
         */
        status: Plan.Status;

        /**
         * The type of the ReservePlan.
         */
        type: Plan.Type;
      }

      namespace Plan {
        type CreatedBy = 'application' | 'stripe';

        interface FixedRelease {
          /**
           * The time after which all reserved funds are requested for release.
           */
          release_after: number;

          /**
           * The time at which reserved funds are scheduled for release, automatically set to midnight UTC of the day after `release_after`.
           */
          scheduled_release: number;
        }

        interface RollingRelease {
          /**
           * The number of days to reserve funds before releasing.
           */
          days_after_charge: number;

          /**
           * The time at which the ReservePlan expires.
           */
          expires_on: number | null;
        }

        type Status = 'active' | 'disabled' | 'expired';

        type Type = 'fixed_release' | 'rolling_release';
      }
    }
  }
}
