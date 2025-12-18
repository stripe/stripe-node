// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../Types.js';
import {Transaction} from './Transactions.js';
import {Mandate} from './../Mandates.js';
import {
  MetadataParam,
  Emptyable,
  PaginationParams,
  Metadata,
  Address,
} from '../../shared.js';
import {ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class OutboundTransferResource extends StripeResource {
  /**
   * Returns a list of OutboundTransfers sent from the specified FinancialAccount.
   */
  list(
    params: Treasury.OutboundTransferListParams,
    options?: RequestOptions
  ): ApiListPromise<OutboundTransfer>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/treasury/outbound_transfers',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates an OutboundTransfer.
   */
  create(
    params: Treasury.OutboundTransferCreateParams,
    options?: RequestOptions
  ): Promise<Response<OutboundTransfer>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/treasury/outbound_transfers',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of an existing OutboundTransfer by passing the unique OutboundTransfer ID from either the OutboundTransfer creation request or OutboundTransfer list.
   */
  retrieve(
    id: string,
    params?: Treasury.OutboundTransferRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<OutboundTransfer>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<OutboundTransfer>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/treasury/outbound_transfers/{outbound_transfer}',
    }).call(this, ...args);
  }

  /**
   * An OutboundTransfer can be canceled if the funds have not yet been paid out.
   */
  cancel(
    id: string,
    params?: Treasury.OutboundTransferCancelParams,
    options?: RequestOptions
  ): Promise<Response<OutboundTransfer>>;
  cancel(
    id: string,
    options?: RequestOptions
  ): Promise<Response<OutboundTransfer>>;
  cancel(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/treasury/outbound_transfers/{outbound_transfer}/cancel',
    }).call(this, ...args);
  }
}
export /**
 * Use [OutboundTransfers](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-transfers) to transfer funds from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts) to a PaymentMethod belonging to the same entity. To send funds to a different party, use [OutboundPayments](https://stripe.com/docs/api#outbound_payments) instead. You can send funds over ACH rails or through a domestic wire transfer to a user's own external bank account.
 *
 * Simulate OutboundTransfer state changes with the `/v1/test_helpers/treasury/outbound_transfers` endpoints. These methods can only be called on test mode objects.
 *
 * Related guide: [Moving money with Treasury using OutboundTransfer objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-transfers)
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
  destination_payment_method: string | null;

  destination_payment_method_details: Treasury.OutboundTransfer.DestinationPaymentMethodDetails;

  /**
   * The date when funds are expected to arrive in the destination account.
   */
  expected_arrival_date: number;

  /**
   * The FinancialAccount that funds were pulled from.
   */
  financial_account: string;

  /**
   * A [hosted transaction receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
   */
  hosted_regulatory_receipt_url: string | null;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata;

  /**
   * Details about a returned OutboundTransfer. Only set when the status is `returned`.
   */
  returned_details: Treasury.OutboundTransfer.ReturnedDetails | null;

  /**
   * Information about the OutboundTransfer to be sent to the recipient account.
   */
  statement_descriptor: string;

  /**
   * Current status of the OutboundTransfer: `processing`, `failed`, `canceled`, `posted`, `returned`. An OutboundTransfer is `processing` if it has been created and is pending. The status changes to `posted` once the OutboundTransfer has been "confirmed" and funds have left the account, or to `failed` or `canceled`. If an OutboundTransfer fails to arrive at its destination, its status will change to `returned`.
   */
  status: Treasury.OutboundTransfer.Status;

  status_transitions: Treasury.OutboundTransfer.StatusTransitions;

  /**
   * Details about network-specific tracking information if available.
   */
  tracking_details: Treasury.OutboundTransfer.TrackingDetails | null;

  /**
   * The Transaction associated with this object.
   */
  transaction: string | Transaction;
}
export namespace Treasury {
  export namespace OutboundTransfer {
    export interface DestinationPaymentMethodDetails {
      billing_details: DestinationPaymentMethodDetails.BillingDetails;

      financial_account?: DestinationPaymentMethodDetails.FinancialAccount;

      /**
       * The type of the payment method used in the OutboundTransfer.
       */
      type: DestinationPaymentMethodDetails.Type;

      us_bank_account?: DestinationPaymentMethodDetails.UsBankAccount;
    }

    export interface ReturnedDetails {
      /**
       * Reason for the return.
       */
      code: ReturnedDetails.Code;

      /**
       * The Transaction associated with this object.
       */
      transaction: string | Transaction;
    }

    export type Status =
      | 'canceled'
      | 'failed'
      | 'posted'
      | 'processing'
      | 'returned';

    export interface StatusTransitions {
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

    export interface TrackingDetails {
      ach?: TrackingDetails.Ach;

      /**
       * The US bank account network used to send funds.
       */
      type: TrackingDetails.Type;

      us_domestic_wire?: TrackingDetails.UsDomesticWire;
    }

    export namespace DestinationPaymentMethodDetails {
      export interface BillingDetails {
        address: Address;

        /**
         * Email address.
         */
        email: string | null;

        /**
         * Full name.
         */
        name: string | null;
      }

      export interface FinancialAccount {
        /**
         * Token of the FinancialAccount.
         */
        id: string;

        /**
         * The rails used to send funds.
         */
        network: 'stripe';
      }

      export type Type = 'financial_account' | 'us_bank_account';

      export interface UsBankAccount {
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
         * ID of the mandate used to make this payment.
         */
        mandate?: string | Mandate;

        /**
         * The network rails used. See the [docs](https://stripe.com/docs/treasury/money-movement/timelines) to learn more about money movement timelines for each network type.
         */
        network: UsBankAccount.Network;

        /**
         * Routing number of the bank account.
         */
        routing_number: string | null;
      }

      export namespace UsBankAccount {
        export type AccountHolderType = 'company' | 'individual';

        export type AccountType = 'checking' | 'savings';

        export type Network = 'ach' | 'us_domestic_wire';
      }
    }

    export namespace ReturnedDetails {
      export type Code =
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

    export namespace TrackingDetails {
      export interface Ach {
        /**
         * ACH trace ID of the OutboundTransfer for transfers sent over the `ach` network.
         */
        trace_id: string;
      }

      export type Type = 'ach' | 'us_domestic_wire';

      export interface UsDomesticWire {
        /**
         * CHIPS System Sequence Number (SSN) of the OutboundTransfer for transfers sent over the `us_domestic_wire` network.
         */
        chips: string | null;

        /**
         * IMAD of the OutboundTransfer for transfers sent over the `us_domestic_wire` network.
         */
        imad: string | null;

        /**
         * OMAD of the OutboundTransfer for transfers sent over the `us_domestic_wire` network.
         */
        omad: string | null;
      }
    }
  }
}
export namespace Treasury {
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
    metadata?: MetadataParam;

    /**
     * Statement descriptor to be shown on the receiving end of an OutboundTransfer. Maximum 10 characters for `ach` transfers or 140 characters for `us_domestic_wire` transfers. The default value is "transfer".
     */
    statement_descriptor?: string;
  }

  export namespace OutboundTransferCreateParams {
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
      us_bank_account?: Emptyable<
        DestinationPaymentMethodOptions.UsBankAccount
      >;
    }

    export namespace DestinationPaymentMethodOptions {
      export interface UsBankAccount {
        /**
         * Specifies the network rails to be used. If not set, will default to the PaymentMethod's preferred network. See the [docs](https://stripe.com/docs/treasury/money-movement/timelines) to learn more about money movement timelines for each network type.
         */
        network?: UsBankAccount.Network;
      }

      export namespace UsBankAccount {
        export type Network = 'ach' | 'us_domestic_wire';
      }
    }
  }
}
export namespace Treasury {
  export interface OutboundTransferRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Treasury {
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

  export namespace OutboundTransferListParams {
    export type Status =
      | 'canceled'
      | 'failed'
      | 'posted'
      | 'processing'
      | 'returned';
  }
}
export namespace Treasury {
  export interface OutboundTransferCancelParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
