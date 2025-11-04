// File generated from our OpenAPI spec

namespace Treasury {
  export interface OutboundTransferCreateParams {
    /**
     * Amount (in cents) to be transferred.
     */
    amount: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * The FinancialAccount to pull funds from.
     */
    financial_account: string;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;

    /**
     * The PaymentMethod to use as the payment instrument for the OutboundTransfer.
     */
    destination_payment_method?: string;

    /**
     * Hash used to generate the PaymentMethod to be used for this OutboundTransfer. Exclusive with `destination_payment_method`.
     */
    destination_payment_method_data?: OutboundTransferCreateParams.DestinationPaymentMethodData;

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
     * Statement descriptor to be shown on the receiving end of an OutboundTransfer. Maximum 10 characters for `ach` transfers or 140 characters for `us_domestic_wire` transfers. The default value is "transfer".
     */
    statement_descriptor?: string;
  }

  namespace OutboundTransferCreateParams {
    export interface DestinationPaymentMethodData {
      /**
       * Required if type is set to `financial_account`. The FinancialAccount ID to send funds to.
       */
      financial_account?: string;

      /**
       * The type of the destination.
       */
      type: 'financial_account';
    }

    export interface DestinationPaymentMethodOptions {
      /**
       * Optional fields for `us_bank_account`.
       */
      us_bank_account?: Stripe.Emptyable<
        DestinationPaymentMethodOptions.UsBankAccount
      >;
    }

    namespace DestinationPaymentMethodOptions {
      export interface UsBankAccount {
        /**
         * Specifies the network rails to be used. If not set, will default to the PaymentMethod's preferred network. See the [docs](https://stripe.com/docs/treasury/money-movement/timelines) to learn more about money movement timelines for each network type.
         */
        network?: UsBankAccount.Network;
      }

      namespace UsBankAccount {
        export type Network = 'ach' | 'us_domestic_wire';
      }
    }
  }
}
namespace Treasury {
  export interface OutboundTransferRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Treasury {
  export interface OutboundTransferListParams extends PaginationParams {
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
    export type Status =
      | 'canceled'
      | 'failed'
      | 'posted'
      | 'processing'
      | 'returned';
  }
}
namespace Treasury {
  export interface OutboundTransferCancelParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
