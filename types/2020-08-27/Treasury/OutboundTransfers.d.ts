// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      /**
       * The OutboundTransfer object.
       */
      interface OutboundTransfer {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'treasury.outbound_transfer';

        /**
         * Amount (in cents) transferred.
         */
        amount: number;

        /**
         * Returns `true` if the object can be canceled, and `false` otherwise.
         */
        cancelable: boolean;

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
        description: string | null;

        /**
         * The PaymentMethod used as the payment instrument for an OutboundTransfer.
         */
        destination_payment_method: string;

        destination_payment_method_details: OutboundTransfer.DestinationPaymentMethodDetails;

        /**
         * The date when funds are expected to arrive in the destination account.
         */
        expected_arrival_date: number;

        /**
         * The FinancialAccount that funds were pulled from.
         */
        financial_account: string;

        /**
         * A hosted transaction receipt URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
         */
        hosted_regulatory_receipt_url: string | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * Details about a returned OutboundTransfer. Only set when the status is `returned`.
         */
        returned_details: OutboundTransfer.ReturnedDetails | null;

        /**
         * Information about the OutboundTransfer to be sent to the recipient account.
         */
        statement_descriptor: string;

        /**
         * Current status of the OutboundTransfer: `processing`, `failed`, `canceled`, `posted`, `returned`. An OutboundTransfer is `processing` if it has been created and is pending. The status changes to `posted` once the OutboundTransfer has been "confirmed" and funds have left the account, or to `failed` or `canceled`. If an OutboundTransfer fails to arrive at its destination, its status will change to `returned`.
         */
        status: OutboundTransfer.Status;

        status_transitions: OutboundTransfer.StatusTransitions;

        /**
         * The Transaction associated with this object.
         */
        transaction: string | Stripe.Treasury.Transaction;
      }

      namespace OutboundTransfer {
        interface DestinationPaymentMethodDetails {
          billing_details: DestinationPaymentMethodDetails.BillingDetails;

          /**
           * The type of the payment method used in the OutboundTransfer.
           */
          type: 'us_bank_account';

          us_bank_account?: DestinationPaymentMethodDetails.UsBankAccount;
        }

        namespace DestinationPaymentMethodDetails {
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

          interface UsBankAccount {
            /**
             * Account holder type: individual or company.
             */
            account_holder_type: UsBankAccount.AccountHolderType | null;

            /**
             * Account type: checkings or savings. Defaults to checking if omitted.
             */
            account_type: UsBankAccount.AccountType | null;

            /**
             * Name of the bank associated with the bank account.
             */
            bank_name: string | null;

            /**
             * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
             */
            fingerprint: string | null;

            /**
             * Last four digits of the bank account number.
             */
            last4: string | null;

            /**
             * The US bank account network used to send funds.
             */
            network: UsBankAccount.Network;

            /**
             * Routing number of the bank account.
             */
            routing_number: string | null;
          }

          namespace UsBankAccount {
            type AccountHolderType = 'company' | 'individual';

            type AccountType = 'checking' | 'savings';

            type Network = 'ach' | 'us_domestic_wire';
          }
        }

        interface ReturnedDetails {
          /**
           * Reason for the return.
           */
          code: ReturnedDetails.Code;

          /**
           * The Transaction associated with this object.
           */
          transaction: string | Stripe.Treasury.Transaction;
        }

        namespace ReturnedDetails {
          type Code =
            | 'account_closed'
            | 'account_frozen'
            | 'bank_account_restricted'
            | 'bank_ownership_changed'
            | 'declined'
            | 'incorrect_account_holder_name'
            | 'invalid_account_number'
            | 'invalid_currency'
            | 'no_account'
            | 'other';
        }

        type Status =
          | 'canceled'
          | 'failed'
          | 'posted'
          | 'processing'
          | 'returned';

        interface StatusTransitions {
          /**
           * Timestamp describing when an OutboundTransfer changed status to `canceled`
           */
          canceled_at: number | null;

          /**
           * Timestamp describing when an OutboundTransfer changed status to `failed`
           */
          failed_at: number | null;

          /**
           * Timestamp describing when an OutboundTransfer changed status to `posted`
           */
          posted_at: number | null;

          /**
           * Timestamp describing when an OutboundTransfer changed status to `returned`
           */
          returned_at: number | null;
        }
      }

      interface OutboundTransferCreateParams {
        /**
         * Amount (in cents) to be transferred.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The PaymentMethod to use as the payment instrument for the OutboundTransfer.
         */
        destination_payment_method: string;

        /**
         * The FinancialAccount to pull funds from.
         */
        financial_account: string;

        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description?: string;

        /**
         * Hash describing payment method configuration details.
         */
        destination_payment_method_options?: OutboundTransferCreateParams.DestinationPaymentMethodOptions;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * Statement descriptor to be shown on the receiving end of an OutboundTransfer. Maximum 10 characters for `ach` transfers or 140 characters for `wire` transfers. The default value is `transfer`.
         */
        statement_descriptor?: string;
      }

      namespace OutboundTransferCreateParams {
        interface DestinationPaymentMethodOptions {
          /**
           * Optional fields for `us_bank_account`.
           */
          us_bank_account?: Stripe.Emptyable<
            DestinationPaymentMethodOptions.UsBankAccount
          >;
        }

        namespace DestinationPaymentMethodOptions {
          interface UsBankAccount {
            /**
             * Designate the OutboundTransfer as using a US bank account network configuration.
             */
            network?: UsBankAccount.Network;
          }

          namespace UsBankAccount {
            type Network = 'ach' | 'us_domestic_wire';
          }
        }
      }

      interface OutboundTransferRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface OutboundTransferListParams extends PaginationParams {
        /**
         * Returns objects associated with this FinancialAccount.
         */
        financial_account: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return OutboundTransfers that have the given status: `processing`, `canceled`, `failed`, `posted`, or `returned`.
         */
        status?: OutboundTransferListParams.Status;
      }

      namespace OutboundTransferListParams {
        type Status =
          | 'canceled'
          | 'failed'
          | 'posted'
          | 'processing'
          | 'returned';
      }

      interface OutboundTransferCancelParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class OutboundTransfersResource {
        /**
         * Creates an OutboundTransfer.
         */
        create(
          params: OutboundTransferCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.OutboundTransfer>>;

        /**
         * Retrieves the details of an existing OutboundTransfer by passing the unique OutboundTransfer ID from either the OutboundTransfer creation request or OutboundTransfer list.
         */
        retrieve(
          id: string,
          params?: OutboundTransferRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.OutboundTransfer>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.OutboundTransfer>>;

        /**
         * Returns a list of OutboundTransfers sent from the specified FinancialAccount.
         */
        list(
          params: OutboundTransferListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Treasury.OutboundTransfer>;

        /**
         * An OutboundTransfer can be canceled if the funds have not yet been paid out.
         */
        cancel(
          id: string,
          params?: OutboundTransferCancelParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.OutboundTransfer>>;
        cancel(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.OutboundTransfer>>;
      }
    }
  }
}
