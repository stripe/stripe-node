// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      /**
       * Represents a record from the card network of a money movement or change in state for an Issuing dispute. These records are included in the settlement reports that we receive from networks and expose to users as Settlement objects.
       */
      interface DisputeSettlementDetail {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'issuing.dispute_settlement_detail';

        /**
         * Disputed amount in the card's currency and in the smallest currency unit. Usually the amount of the transaction, but can differ (usually because of currency fluctuation).
         */
        amount: number;

        /**
         * The card used to make the original transaction.
         */
        card: string;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * The currency the original transaction was made in. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The ID of the linked dispute.
         */
        dispute: string;

        /**
         * The type of event corresponding to this dispute settlement detail, representing the stage in the dispute network lifecycle.
         */
        event_type: DisputeSettlementDetail.EventType;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The card network for this dispute settlement detail. One of ["visa", "mastercard", "maestro"]
         */
        network: DisputeSettlementDetail.Network;

        /**
         * The ID of the linked card network settlement.
         */
        settlement: string | null;
      }

      namespace DisputeSettlementDetail {
        type EventType = 'filing' | 'loss' | 'representment' | 'win';

        type Network = 'maestro' | 'mastercard' | 'visa';
      }
    }
  }
}
