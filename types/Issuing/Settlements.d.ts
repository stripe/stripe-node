// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      /**
       * When a non-stripe BIN is used, any use of an [issued card](https://docs.stripe.com/issuing) must be settled directly with the card network. The net amount owed is represented by an Issuing `Settlement` object.
       */
      interface Settlement {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'issuing.settlement';

        /**
         * The Bank Identification Number reflecting this settlement record.
         */
        bin: string;

        /**
         * The date that the transactions are cleared and posted to user's accounts.
         */
        clearing_date: number;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The total interchange received as reimbursement for the transactions.
         */
        interchange_fees_amount: number;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * The total net amount required to settle with the network.
         */
        net_total_amount: number;

        /**
         * The card network for this settlement report. One of ["visa", "maestro"]
         */
        network: Settlement.Network;

        /**
         * The total amount of fees owed to the network.
         */
        network_fees_amount: number;

        /**
         * The Settlement Identification Number assigned by the network.
         */
        network_settlement_identifier: string;

        /**
         * The total amount of any additional fees assessed by the card network.
         */
        other_fees_amount?: number;

        /**
         * The total number of additional fees assessed by the card network.
         */
        other_fees_count?: number;

        /**
         * One of `international` or `uk_national_net`.
         */
        settlement_service: string;

        /**
         * The current processing status of this settlement.
         */
        status: Settlement.Status;

        /**
         * The total transaction amount reflected in this settlement.
         */
        transaction_amount: number;

        /**
         * The total number of transactions reflected in this settlement.
         */
        transaction_count: number;
      }

      namespace Settlement {
        type Network = 'maestro' | 'visa';

        type Status = 'complete' | 'pending';
      }
    }
  }
}
