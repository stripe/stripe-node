// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      /**
       * The ReceivedCredit object.
       */
      interface ReceivedCredit {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'treasury.received_credit';

        /**
         * Amount (in cents) transferred.
         */
        amount: number;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description: string;

        /**
         * Reason for the failure. A ReceivedCredit might fail because the receiving FinancialAccount is closed or frozen.
         */
        failure_code: ReceivedCredit.FailureCode | null;

        /**
         * The FinancialAccount that received the funds.
         */
        financial_account: string | null;

        initiating_payment_method_details: ReceivedCredit.InitiatingPaymentMethodDetails;

        linked_flows: ReceivedCredit.LinkedFlows;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The rails used to send the funds.
         */
        network: ReceivedCredit.Network;

        /**
         * Status of the ReceivedCredit. ReceivedCredits are created either `succeeded` (approved) or `failed` (declined). If a ReceivedCredit is declined, the failure reason can be found in the `failure_code` field.
         */
        status: ReceivedCredit.Status;

        /**
         * The Transaction associated with this object.
         */
        transaction: string | Stripe.Treasury.Transaction | null;
      }

      namespace ReceivedCredit {
        type FailureCode = 'account_closed' | 'account_frozen' | 'other';

        interface InitiatingPaymentMethodDetails {
          /**
           * Set when `type` is `balance`.
           */
          balance?: 'payments';

          billing_details: InitiatingPaymentMethodDetails.BillingDetails;

          financial_account?: InitiatingPaymentMethodDetails.FinancialAccount;

          /**
           * Set when `type` is `issuing_card`. This is an [Issuing Card](https://stripe.com/docs/api#issuing_cards) ID.
           */
          issuing_card?: string;

          /**
           * Polymorphic type matching the originating money movement's source. This can be an external account, a Stripe balance, or a FinancialAccount.
           */
          type: InitiatingPaymentMethodDetails.Type;

          us_bank_account?: InitiatingPaymentMethodDetails.UsBankAccount;
        }

        namespace InitiatingPaymentMethodDetails {
          interface BillingDetails {
            address: Stripe.Address;

            /**
             * Email address.
             */
            email: string | null;

            /**
             * Full name.
             */
            name: string | null;
          }

          interface FinancialAccount {
            /**
             * The FinancialAccount ID.
             */
            id: string;

            /**
             * The rails the ReceivedCredit was sent over. A FinancialAccount can only send funds over `stripe`.
             */
            network: 'stripe';
          }

          type Type =
            | 'balance'
            | 'financial_account'
            | 'issuing_card'
            | 'stripe'
            | 'us_bank_account';

          interface UsBankAccount {
            /**
             * Bank name.
             */
            bank_name: string | null;

            /**
             * The last four digits of the bank account number.
             */
            last4: string | null;

            /**
             * The routing number for the bank account.
             */
            routing_number: string | null;
          }
        }

        interface LinkedFlows {
          /**
           * The CreditReversal created as a result of this ReceivedCredit being reversed.
           */
          credit_reversal: string | null;

          /**
           * Set if the ReceivedCredit was created due to an [Issuing Authorization](https://stripe.com/docs/api#issuing_authorizations) object.
           */
          issuing_authorization: string | null;

          /**
           * Set if the ReceivedCredit is also viewable as an [Issuing transaction](https://stripe.com/docs/api#issuing_transactions) object.
           */
          issuing_transaction: string | null;

          /**
           * ID of the source flow. Set if `network` is `stripe` and the source flow is visible to the merchant. Examples of source flows include OutboundPayments, payouts, or CreditReversals.
           */
          source_flow: string | null;

          /**
           * The expandable object of the source flow.
           */
          source_flow_details: LinkedFlows.SourceFlowDetails | null;

          /**
           * The type of flow that originated the ReceivedCredit (for example, `outbound_payment`).
           */
          source_flow_type: string | null;
        }

        namespace LinkedFlows {
          interface SourceFlowDetails {
            /**
             * You can reverse some [ReceivedCredits](https://stripe.com/docs/api#received_credits) depending on their network and source flow. Reversing a ReceivedCredit leads to the creation of a new object known as a CreditReversal.
             */
            credit_reversal?: Stripe.Treasury.CreditReversal;

            /**
             * Use OutboundPayments to send funds to another party's external bank account or [FinancialAccount](https://stripe.com/docs/api#financial_accounts). To send money to an account belonging to the same user, use an [OutboundTransfer](https://stripe.com/docs/api#outbound_transfers).
             *
             * Simulate OutboundPayment state changes with the `/v1/test_helpers/treasury/outbound_payments` endpoints. These methods can only be called on test mode objects.
             */
            outbound_payment?: Stripe.Treasury.OutboundPayment;

            /**
             * A `Payout` object is created when you receive funds from Stripe, or when you
             * initiate a payout to either a bank account or debit card of a [connected
             * Stripe account](https://stripe.com/docs/connect/bank-debit-card-payouts). You can retrieve individual payouts,
             * as well as list all payouts. Payouts are made on [varying
             * schedules](https://stripe.com/docs/connect/manage-payout-schedule), depending on your country and
             * industry.
             *
             * Related guide: [Receiving Payouts](https://stripe.com/docs/payouts).
             */
            payout?: Stripe.Payout;

            /**
             * The type of the source flow that originated the ReceivedCredit.
             */
            type: SourceFlowDetails.Type;
          }

          namespace SourceFlowDetails {
            type Type =
              | 'credit_reversal'
              | 'other'
              | 'outbound_payment'
              | 'payout';
          }
        }

        type Network = 'ach' | 'card' | 'stripe' | 'us_domestic_wire';

        type Status = 'failed' | 'succeeded';
      }

      interface ReceivedCreditRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ReceivedCreditListParams extends PaginationParams {
        /**
         * The FinancialAccount that received the funds.
         */
        financial_account: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return ReceivedCredits described by the flow.
         */
        linked_flows?: ReceivedCreditListParams.LinkedFlows;

        /**
         * Only return ReceivedCredits that have the given status: `succeeded` or `failed`.
         */
        status?: ReceivedCreditListParams.Status;
      }

      namespace ReceivedCreditListParams {
        interface LinkedFlows {
          /**
           * The source flow type.
           */
          source_flow_type: LinkedFlows.SourceFlowType;
        }

        namespace LinkedFlows {
          type SourceFlowType =
            | 'credit_reversal'
            | 'other'
            | 'outbound_payment'
            | 'payout';
        }

        type Status = 'failed' | 'succeeded';
      }

      class ReceivedCreditsResource {
        /**
         * Retrieves the details of an existing ReceivedCredit by passing the unique ReceivedCredit ID from the ReceivedCredit list.
         */
        retrieve(
          id: string,
          params?: ReceivedCreditRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.ReceivedCredit>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.ReceivedCredit>>;

        /**
         * Returns a list of ReceivedCredits.
         */
        list(
          params: ReceivedCreditListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Treasury.ReceivedCredit>;
      }
    }
  }
}
