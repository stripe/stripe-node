// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Payments {
        /**
         * SettlementAllocationIntentSplit resource.
         */
        interface SettlementAllocationIntentSplit {
          /**
           * Unique identifier for the SettlementAllocationIntentSplit.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.payments.settlement_allocation_intent_split';

          /**
           * The ID of the account that will be used for the debit/credit.
           */
          account: string;

          /**
           * The amount and currency of the SettlementAllocationIntentSplit.
           */
          amount: SettlementAllocationIntentSplit.Amount;

          /**
           * Timestamp at which SettlementAllocationIntentSplit was created.
           */
          created: string;

          /**
           * Details about the Flow object that settled the split.
           */
          flow: SettlementAllocationIntentSplit.Flow;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * The ID of the SettlementAllocationIntent that this split belongs too.
           */
          settlement_allocation_intent: string;

          /**
           * The status of the SettlementAllocationIntentSplit.
           */
          status: SettlementAllocationIntentSplit.Status;

          /**
           * The type of the SettlementAllocationIntentSplit.
           */
          type: SettlementAllocationIntentSplit.Type;
        }

        namespace SettlementAllocationIntentSplit {
          interface Amount {
            /**
             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
             */
            value?: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency?: string;
          }

          interface Flow {
            /**
             * Type of the flow linked to the transaction which settled the split. The field matching this value will contain the ID of the flow.
             */
            type: Flow.Type;

            /**
             * If applicable, the ID of the OutboundPayment that created this Transaction.
             */
            outbound_payment?: string;

            /**
             * If applicable, the ID of the OutboundTransfer that created this Transaction.
             */
            outbound_transfer?: string;

            /**
             * If applicable, the ID of the ReceivedCredit that created this Transaction.
             */
            received_credit?: string;
          }

          namespace Flow {
            type Type =
              | 'outbound_payment'
              | 'outbound_transfer'
              | 'received_credit';
          }

          type Status = 'canceled' | 'pending' | 'settled';

          type Type = 'credit' | 'debit';
        }
      }
    }
  }
}
