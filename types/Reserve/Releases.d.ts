// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Reserve {
      /**
       * ReserveReleases represent the release of funds from a ReserveHold.
       */
      interface Release {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'reserve.release';

        /**
         * Amount released. A positive integer representing how much is released in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
         */
        amount: number;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Indicates which party created this ReserveRelease.
         */
        created_by: Release.CreatedBy;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: Stripe.Metadata;

        /**
         * The reason for the ReserveRelease, indicating why the funds were released.
         */
        reason: Release.Reason;

        /**
         * The release timestamp of the funds.
         */
        released_at: number;

        /**
         * The ReserveHold this ReserveRelease is associated with.
         */
        reserve_hold: string | Stripe.Reserve.Hold | null;

        /**
         * The ReservePlan ID this ReserveRelease is associated with. This field is only populated if a ReserveRelease is created by a ReservePlan disable operation, or from a scheduled ReservedHold expiry.
         */
        reserve_plan: string | Stripe.Reserve.Plan | null;

        source_transaction?: Release.SourceTransaction;
      }

      namespace Release {
        type CreatedBy = 'application' | 'stripe';

        type Reason =
          | 'bulk_hold_expiry'
          | 'hold_released_early'
          | 'hold_reversed'
          | 'plan_disabled';

        interface SourceTransaction {
          /**
           * The ID of the dispute.
           */
          dispute?: string | Stripe.Dispute;

          /**
           * The ID of the refund.
           */
          refund?: string | Stripe.Refund;

          /**
           * The type of source transaction.
           */
          type: SourceTransaction.Type;
        }

        namespace SourceTransaction {
          type Type = 'dispute' | 'refund';
        }
      }
    }
  }
}
