// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Reserve {
      /**
       * ReserveHolds are used to place a temporary ReserveHold on a merchant's funds.
       */
      interface Hold {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'reserve.hold';

        /**
         * Amount reserved. A positive integer representing how much is reserved in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
         */
        amount: number;

        /**
         * Amount in cents that can be released from this ReserveHold
         */
        amount_releasable?: number;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Indicates which party created this ReserveHold.
         */
        created_by: Hold.CreatedBy;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * Whether there are any funds available to release on this ReserveHold. Note that if the ReserveHold is in the process of being released, this could be false, even though the funds haven't been fully released yet.
         */
        is_releasable?: boolean;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: Stripe.Metadata;

        /**
         * The reason for the ReserveHold.
         */
        reason: Hold.Reason;

        release_schedule: Hold.ReleaseSchedule;

        /**
         * The ReservePlan which produced this ReserveHold (i.e., resplan_123)
         */
        reserve_plan: string | Stripe.Reserve.Plan | null;

        /**
         * The Charge which funded this ReserveHold (e.g., ch_123)
         */
        source_charge: string | Stripe.Charge | null;

        /**
         * Which source balance type this ReserveHold reserves funds from. One of `bank_account`, `card`, or `fpx`.
         */
        source_type: Hold.SourceType;
      }

      namespace Hold {
        type CreatedBy = 'application' | 'stripe';

        type Reason = 'charge' | 'standalone';

        interface ReleaseSchedule {
          /**
           * The time after which the ReserveHold is requested to be released.
           */
          release_after: number | null;

          /**
           * The time at which the ReserveHold is scheduled to be released, automatically set to midnight UTC of the day after `release_after`.
           */
          scheduled_release: number | null;
        }

        type SourceType = 'bank_account' | 'card' | 'fpx';
      }
    }
  }
}
