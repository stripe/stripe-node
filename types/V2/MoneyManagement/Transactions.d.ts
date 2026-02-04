// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        /**
         * Use Transactions to view changes to your FinancialAccount balance over time. Every flow that moves money, such as OutboundPayments or ReceivedCredits, will have one or more Transactions that describes how the flow impacted your balance. Note that while the FinancialAccount balance will always be up to date, be aware that Transactions and TransactionEntries are created shortly after to reflect changes.
         */
        interface Transaction {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.money_management.transaction';

          /**
           * The amount of the Transaction.
           */
          amount: Transaction.Amount;

          /**
           * The delta to the FinancialAccount's balance. The balance_impact for the Transaction is equal to sum of its
           * TransactionEntries that have `effective_at`s in the past.
           */
          balance_impact: Transaction.BalanceImpact;

          /**
           * Open Enum. A descriptive category used to classify the Transaction.
           */
          category: Transaction.Category;

          /**
           * Time at which the object was created. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
           */
          created: string;

          /**
           * Indicates the FinancialAccount affected by this Transaction.
           */
          financial_account: string;

          /**
           * Details about the Flow object that created the Transaction.
           */
          flow: Transaction.Flow;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Closed Enum. Current status of the Transaction.
           * A Transaction is `pending` if either `balance_impact.inbound_pending` or `balance_impact.outbound_pending` is non-zero.
           * A Transaction is `posted` if only `balance_impact.available` is non-zero.
           * A Transaction is `void` if there is no balance impact.
           * `posted` and `void` are terminal states, and no additional entries will be added to the Transaction.
           */
          status: Transaction.Status;

          /**
           * Timestamps for when the Transaction transitioned to a particular status.
           */
          status_transitions: Transaction.StatusTransitions;
        }

        namespace Transaction {
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

          interface BalanceImpact {
            /**
             * Impact to the available balance.
             */
            available: BalanceImpact.Available;

            /**
             * Impact to the inbound_pending balance.
             */
            inbound_pending: BalanceImpact.InboundPending;

            /**
             * Impact to the outbound_pending balance.
             */
            outbound_pending: BalanceImpact.OutboundPending;
          }

          namespace BalanceImpact {
            interface Available {
              /**
               * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
               */
              value?: number;

              /**
               * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
               */
              currency?: string;
            }

            interface InboundPending {
              /**
               * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
               */
              value?: number;

              /**
               * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
               */
              currency?: string;
            }

            interface OutboundPending {
              /**
               * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
               */
              value?: number;

              /**
               * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
               */
              currency?: string;
            }
          }

          type Category =
            | 'adjustment'
            | 'advance'
            | 'anticipation_repayment'
            | 'balance_transfer'
            | 'charge'
            | 'charge_failure'
            | 'climate_order_purchase'
            | 'climate_order_refund'
            | 'connect_collection_transfer'
            | 'connect_reserved_funds'
            | 'contribution'
            | 'currency_conversion'
            | 'dispute_reversal'
            | 'financing_paydown'
            | 'financing_paydown_reversal'
            | 'inbound_transfer'
            | 'inbound_transfer_reversal'
            | 'issuing_dispute'
            | 'issuing_dispute_fraud_liability_debit'
            | 'issuing_dispute_provisional_credit'
            | 'issuing_dispute_provisional_credit_reversal'
            | 'minimum_balance_hold'
            | 'network_cost'
            | 'obligation'
            | 'outbound_payment'
            | 'outbound_payment_reversal'
            | 'outbound_transfer'
            | 'outbound_transfer_reversal'
            | 'partial_capture_reversal'
            | 'payment_network_reserved_funds'
            | 'platform_earning'
            | 'platform_earning_refund'
            | 'platform_fee'
            | 'received_credit'
            | 'received_credit_reversal'
            | 'received_debit'
            | 'received_debit_reversal'
            | 'refund_failure'
            | 'return'
            | 'risk_reserved_funds'
            | 'stripe_balance_payment_debit'
            | 'stripe_balance_payment_debit_reversal'
            | 'stripe_fee'
            | 'stripe_fee_tax'
            | 'transfer_reversal'
            | 'unreconciled_customer_funds';

          interface Flow {
            /**
             * Open Enum. Type of the flow that created the Transaction. The field matching this value will contain the ID of the flow.
             */
            type: Flow.Type;

            /**
             * If applicable, the ID of the Adjustment that created this Transaction.
             */
            adjustment?: string;

            /**
             * If applicable, the ID of the Application Fee that created this Transaction.
             */
            application_fee?: string;

            /**
             * If applicable, the ID of the Application Fee Refund that created this Transaction.
             */
            application_fee_refund?: string;

            /**
             * If applicable, the ID of the Charge that created this Transaction.
             */
            charge?: string;

            /**
             * In the future, this will be the ID of the currency conversion that created this Transaction. For now, this field is always null.
             */
            currency_conversion?: string;

            /**
             * If applicable, the ID of the Dispute that created this Transaction.
             */
            dispute?: string;

            /**
             * If applicable, the ID of the FeeTransaction that created this Transaction.
             */
            fee_transaction?: string;

            /**
             * If applicable, the ID of the InboundTransfer that created this Transaction.
             */
            inbound_transfer?: string;

            /**
             * If applicable, the ID of the OutboundPayment that created this Transaction.
             */
            outbound_payment?: string;

            /**
             * If applicable, the ID of the OutboundTransfer that created this Transaction.
             */
            outbound_transfer?: string;

            /**
             * If applicable, the ID of the Payout that created this Transaction.
             */
            payout?: string;

            /**
             * If applicable, the ID of the ReceivedCredit that created this Transaction.
             */
            received_credit?: string;

            /**
             * If applicable, the ID of the ReceivedDebit that created this Transaction.
             */
            received_debit?: string;

            /**
             * If applicable, the ID of the Refund that created this Transaction.
             */
            refund?: string;

            /**
             * If applicable, the ID of the Reserve Hold that created this Transaction.
             */
            reserve_hold?: string;

            /**
             * If applicable, the ID of the Reserve Release that created this Transaction.
             */
            reserve_release?: string;

            /**
             * If applicable, the ID of the Topup that created this Transaction.
             */
            topup?: string;

            /**
             * If applicable, the ID of the Transfer that created this Transaction.
             */
            transfer?: string;

            /**
             * If applicable, the ID of the Transfer Reversal that created this Transaction.
             */
            transfer_reversal?: string;
          }

          namespace Flow {
            type Type =
              | 'adjustment'
              | 'application_fee'
              | 'application_fee_refund'
              | 'charge'
              | 'currency_conversion'
              | 'dispute'
              | 'fee_transaction'
              | 'inbound_transfer'
              | 'outbound_payment'
              | 'outbound_transfer'
              | 'payout'
              | 'received_credit'
              | 'received_debit'
              | 'refund'
              | 'reserve_hold'
              | 'reserve_release'
              | 'topup'
              | 'transfer'
              | 'transfer_reversal';
          }

          type Status = 'pending' | 'posted' | 'void';

          interface StatusTransitions {
            /**
             * The time at which the Transaction became posted. Only present if status == posted.
             */
            posted_at?: string;

            /**
             * The time at which the Transaction became void. Only present if status == void.
             */
            void_at?: string;
          }
        }
      }
    }
  }
}
