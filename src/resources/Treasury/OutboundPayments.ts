// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../lib.js';
import {Transaction} from './Transactions.js';
import {Mandate} from './../Mandates.js';
import {
  MetadataParam,
  Emptyable,
  AddressParam,
  PaginationParams,
  RangeQueryParam,
  Metadata,
  Address,
} from '../../shared.js';
import {ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class OutboundPaymentResource extends StripeResource {
  /**
   * Returns a list of OutboundPayments sent from the specified FinancialAccount.
   */
  list(
    params: Treasury.OutboundPaymentListParams,
    options?: RequestOptions
  ): ApiListPromise<OutboundPayment>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/treasury/outbound_payments',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates an OutboundPayment.
   */
  create(
    params: Treasury.OutboundPaymentCreateParams,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/treasury/outbound_payments',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of an existing OutboundPayment by passing the unique OutboundPayment ID from either the OutboundPayment creation request or OutboundPayment list.
   */
  retrieve(
    id: string,
    params?: Treasury.OutboundPaymentRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/treasury/outbound_payments/{id}',
    }).call(this, ...args);
  }

  /**
   * Cancel an OutboundPayment.
   */
  cancel(
    id: string,
    params?: Treasury.OutboundPaymentCancelParams,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>>;
  cancel(
    id: string,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>>;
  cancel(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/treasury/outbound_payments/{id}/cancel',
    }).call(this, ...args);
  }
}
export interface OutboundPayment {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'treasury.outbound_payment';

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
   * ID of the [customer](https://stripe.com/docs/api/customers) to whom an OutboundPayment is sent.
   */
  customer: string | null;

  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description: string | null;

  /**
   * The PaymentMethod via which an OutboundPayment is sent. This field can be empty if the OutboundPayment was created using `destination_payment_method_data`.
   */
  destination_payment_method: string | null;

  /**
   * Details about the PaymentMethod for an OutboundPayment.
   */
  destination_payment_method_details: Treasury.OutboundPayment.DestinationPaymentMethodDetails | null;

  /**
   * Details about the end user.
   */
  end_user_details: Treasury.OutboundPayment.EndUserDetails | null;

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
   * Details about a returned OutboundPayment. Only set when the status is `returned`.
   */
  returned_details: Treasury.OutboundPayment.ReturnedDetails | null;

  /**
   * The description that appears on the receiving end for an OutboundPayment (for example, bank statement for external bank transfer).
   */
  statement_descriptor: string;

  /**
   * Current status of the OutboundPayment: `processing`, `failed`, `posted`, `returned`, `canceled`. An OutboundPayment is `processing` if it has been created and is pending. The status changes to `posted` once the OutboundPayment has been "confirmed" and funds have left the account, or to `failed` or `canceled`. If an OutboundPayment fails to arrive at its destination, its status will change to `returned`.
   */
  status: Treasury.OutboundPayment.Status;

  status_transitions: Treasury.OutboundPayment.StatusTransitions;

  /**
   * Details about network-specific tracking information if available.
   */
  tracking_details: Treasury.OutboundPayment.TrackingDetails | null;

  /**
   * The Transaction associated with this object.
   */
  transaction: string | Transaction;
}
export namespace Treasury {
  export namespace OutboundPayment {
    export interface DestinationPaymentMethodDetails {
      billing_details: DestinationPaymentMethodDetails.BillingDetails;

      financial_account?: DestinationPaymentMethodDetails.FinancialAccount;

      /**
       * The type of the payment method used in the OutboundPayment.
       */
      type: DestinationPaymentMethodDetails.Type;

      us_bank_account?: DestinationPaymentMethodDetails.UsBankAccount;
    }

    export interface EndUserDetails {
      /**
       * IP address of the user initiating the OutboundPayment. Set if `present` is set to `true`. IP address collection is required for risk and compliance reasons. This will be used to help determine if the OutboundPayment is authorized or should be blocked.
       */
      ip_address: string | null;

      /**
       * `true` if the OutboundPayment creation request is being made on behalf of an end user by a platform. Otherwise, `false`.
       */
      present: boolean;
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
       * Timestamp describing when an OutboundPayment changed status to `canceled`.
       */
      canceled_at: number | null;

      /**
       * Timestamp describing when an OutboundPayment changed status to `failed`.
       */
      failed_at: number | null;

      /**
       * Timestamp describing when an OutboundPayment changed status to `posted`.
       */
      posted_at: number | null;

      /**
       * Timestamp describing when an OutboundPayment changed status to `returned`.
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
         * ACH trace ID of the OutboundPayment for payments sent over the `ach` network.
         */
        trace_id: string;
      }

      export type Type = 'ach' | 'us_domestic_wire';

      export interface UsDomesticWire {
        /**
         * CHIPS System Sequence Number (SSN) of the OutboundPayment for payments sent over the `us_domestic_wire` network.
         */
        chips: string | null;

        /**
         * IMAD of the OutboundPayment for payments sent over the `us_domestic_wire` network.
         */
        imad: string | null;

        /**
         * OMAD of the OutboundPayment for payments sent over the `us_domestic_wire` network.
         */
        omad: string | null;
      }
    }
  }
}
export namespace Treasury {
  export interface OutboundPaymentCreateParams {
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
     * ID of the customer to whom the OutboundPayment is sent. Must match the Customer attached to the `destination_payment_method` passed in.
     */
    customer?: string;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;

    /**
     * The PaymentMethod to use as the payment instrument for the OutboundPayment. Exclusive with `destination_payment_method_data`.
     */
    destination_payment_method?: string;

    /**
     * Hash used to generate the PaymentMethod to be used for this OutboundPayment. Exclusive with `destination_payment_method`.
     */
    destination_payment_method_data?: OutboundPaymentCreateParams.DestinationPaymentMethodData;

    /**
     * Payment method-specific configuration for this OutboundPayment.
     */
    destination_payment_method_options?: OutboundPaymentCreateParams.DestinationPaymentMethodOptions;

    /**
     * End user details.
     */
    end_user_details?: OutboundPaymentCreateParams.EndUserDetails;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;

    /**
     * The description that appears on the receiving end for this OutboundPayment (for example, bank statement for external bank transfer). Maximum 10 characters for `ach` payments, 140 characters for `us_domestic_wire` payments, or 500 characters for `stripe` network transfers. The default value is "payment".
     */
    statement_descriptor?: string;
  }

  export namespace OutboundPaymentCreateParams {
    export interface DestinationPaymentMethodData {
      /**
       * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
       */
      billing_details?: DestinationPaymentMethodData.BillingDetails;

      /**
       * Required if type is set to `financial_account`. The FinancialAccount ID to send funds to.
       */
      financial_account?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam;

      /**
       * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
       */
      type: DestinationPaymentMethodData.Type;

      /**
       * Required hash if type is set to `us_bank_account`.
       */
      us_bank_account?: DestinationPaymentMethodData.UsBankAccount;
    }

    export interface DestinationPaymentMethodOptions {
      /**
       * Optional fields for `us_bank_account`.
       */
      us_bank_account?: Emptyable<
        DestinationPaymentMethodOptions.UsBankAccount
      >;
    }

    export interface EndUserDetails {
      /**
       * IP address of the user initiating the OutboundPayment. Must be supplied if `present` is set to `true`.
       */
      ip_address?: string;

      /**
       * `True` if the OutboundPayment creation request is being made on behalf of an end user by a platform. Otherwise, `false`.
       */
      present: boolean;
    }

    export namespace DestinationPaymentMethodData {
      export interface BillingDetails {
        /**
         * Billing address.
         */
        address?: Emptyable<AddressParam>;

        /**
         * Email address.
         */
        email?: Emptyable<string>;

        /**
         * Full name.
         */
        name?: Emptyable<string>;

        /**
         * Billing phone number (including extension).
         */
        phone?: Emptyable<string>;
      }

      export type Type = 'financial_account' | 'us_bank_account';

      export interface UsBankAccount {
        /**
         * Account holder type: individual or company.
         */
        account_holder_type?: UsBankAccount.AccountHolderType;

        /**
         * Account number of the bank account.
         */
        account_number?: string;

        /**
         * Account type: checkings or savings. Defaults to checking if omitted.
         */
        account_type?: UsBankAccount.AccountType;

        /**
         * The ID of a Financial Connections Account to use as a payment method.
         */
        financial_connections_account?: string;

        /**
         * Routing number of the bank account.
         */
        routing_number?: string;
      }

      export namespace UsBankAccount {
        export type AccountHolderType = 'company' | 'individual';

        export type AccountType = 'checking' | 'savings';
      }
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
  export interface OutboundPaymentRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Treasury {
  export interface OutboundPaymentListParams extends PaginationParams {
    /**
     * Returns objects associated with this FinancialAccount.
     */
    financial_account: string;

    /**
     * Only return OutboundPayments that were created during the given date interval.
     */
    created?: RangeQueryParam | number;

    /**
     * Only return OutboundPayments sent to this customer.
     */
    customer?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return OutboundPayments that have the given status: `processing`, `failed`, `posted`, `returned`, or `canceled`.
     */
    status?: OutboundPaymentListParams.Status;
  }

  export namespace OutboundPaymentListParams {
    export type Status =
      | 'canceled'
      | 'failed'
      | 'posted'
      | 'processing'
      | 'returned';
  }
}
export namespace Treasury {
  export interface OutboundPaymentCancelParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
