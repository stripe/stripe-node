// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      /**
       * Adjustments represent Stripe-initiated credits or debits to a user balance. They might be used to amend balances due to technical or operational error.
       */
      interface Adjustment {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value of the object field.
         */
        object: 'v2.money_management.adjustment';

        /**
         * If applicable, contains information about the original flow linked to this Adjustment.
         */
        adjusted_flow: Adjustment.AdjustedFlow | null;

        /**
         * The amount of the Adjustment.
         */
        amount: Amount;

        /**
         * Time at which the object was created. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
         */
        created: string;

        /**
         * Description of the Adjustment and what it was used for.
         */
        description: string | null;

        /**
         * The FinancialAccount that this adjustment is for.
         */
        financial_account: string;

        /**
         * A hosted transaction receipt URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
         */
        receipt_url: string;
      }

      namespace Adjustment {
        interface AdjustedFlow {
          /**
           * Closed Enum. If applicable, the type of flow linked to this Adjustment. The field matching this value will contain the ID of the flow.
           */
          type: AdjustedFlow.Type;

          /**
           * If applicable, the ID of the Adjustment linked to this Adjustment.
           */
          adjustment: string | null;

          /**
           * If applicable, the ID of the InboundTransfer linked to this Adjustment.
           */
          inbound_transfer: string | null;

          /**
           * If applicable, the ID of the OutboundPayment linked to this Adjustment.
           */
          outbound_payment: string | null;

          /**
           * If applicable, the ID of the OutboundTransfer linked to this Adjustment.
           */
          outbound_transfer: string | null;

          /**
           * If applicable, the ID of the ReceivedCredit linked to this Adjustment.
           */
          received_credit: string | null;

          /**
           * If applicable, the ID of the ReceivedDebit linked to this Adjustment.
           */
          received_debit: string | null;
        }

        namespace AdjustedFlow {
          type Type =
            | 'adjustment'
            | 'balance_exchange'
            | 'inbound_payment'
            | 'inbound_transfer'
            | 'outbound_payment'
            | 'outbound_transfer'
            | 'received_credit'
            | 'received_debit';
        }
      }
    }
  }
}
