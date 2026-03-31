// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {MetadataParam, Metadata} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class OutboundTransferResource extends StripeResource {
  /**
   * Returns a list of OutboundTransfers that match the provided filters.
   */
  list(
    params?: V2.MoneyManagement.OutboundTransferListParams,
    options?: RequestOptions
  ): ApiListPromise<OutboundTransfer>;
  list(options?: RequestOptions): ApiListPromise<OutboundTransfer>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/money_management/outbound_transfers',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates an OutboundTransfer.
   * @throws Stripe.InsufficientFundsError
   * @throws Stripe.FeatureNotEnabledError
   */
  create(
    params: V2.MoneyManagement.OutboundTransferCreateParams,
    options?: RequestOptions
  ): Promise<Response<OutboundTransfer>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/money_management/outbound_transfers',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of an existing OutboundTransfer by passing the unique OutboundTransfer ID from either the OutboundPayment create or list response.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.OutboundTransferRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<OutboundTransfer>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<OutboundTransfer>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/money_management/outbound_transfers/{id}',
    }).call(this, ...args);
  }

  /**
   * Cancels an OutboundTransfer. Only processing OutboundTransfers can be canceled.
   * @throws Stripe.AlreadyCanceledError
   * @throws Stripe.NotCancelableError
   */
  cancel(
    id: string,
    params?: V2.MoneyManagement.OutboundTransferCancelParams,
    options?: RequestOptions
  ): Promise<Response<OutboundTransfer>>;
  cancel(
    id: string,
    options?: RequestOptions
  ): Promise<Response<OutboundTransfer>>;
  cancel(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/money_management/outbound_transfers/{id}/cancel',
    }).call(this, ...args);
  }
}
export interface OutboundTransfer {
  /**
   * Unique identifier for the OutboundTransfer.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.outbound_transfer';

  /**
   * The "presentment amount" for the OutboundTransfer.
   */
  amount: V2Amount;

  /**
   * Returns true if the OutboundTransfer can be canceled, and false otherwise.
   */
  cancelable: boolean;

  /**
   * Time at which the OutboundTransfer was created.
   * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
   */
  created: string;

  /**
   * Delivery options to be used to send the OutboundTransfer.
   */
  delivery_options?: V2.MoneyManagement.OutboundTransfer.DeliveryOptions;

  /**
   * An arbitrary string attached to the OutboundTransfer. Often useful for displaying to users.
   */
  description?: string;

  /**
   * The date when funds are expected to arrive in the payout method. This field is not set if the payout method is in a `failed`, `canceled`, or `returned` state.
   * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
   */
  expected_arrival_date?: string;

  /**
   * The FinancialAccount that funds were pulled from.
   */
  from: V2.MoneyManagement.OutboundTransfer.From;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * A link to the Stripe-hosted receipt for this OutboundTransfer. The receipt link remains active for 60 days from the OutboundTransfer creation date. After this period, the link will expire and the receipt url value will be null.
   */
  receipt_url?: string;

  /**
   * The recipient verification id for this OutboundTransfer. Only required for countries with regulatory mandates to verify recipient names before OutboundTransfer creation.
   */
  recipient_verification?: string;

  /**
   * The description that appears on the receiving end for an OutboundTransfer (for example, bank statement for external bank transfer). It will default to `STRIPE` if not set on the account settings.
   */
  statement_descriptor: string;

  /**
   * Closed Enum. Current status of the OutboundTransfer: `processing`, `failed`, `posted`, `returned`, `canceled`.
   * An OutboundTransfer is `processing` if it has been created and is processing.
   * The status changes to `posted` once the OutboundTransfer has been "confirmed" and funds have left the account, or to `failed` or `canceled`.
   * If an OutboundTransfer fails to arrive at its payout method, its status will change to `returned`.
   */
  status: V2.MoneyManagement.OutboundTransfer.Status;

  /**
   * Status details for an OutboundTransfer in a `failed` or `returned` state.
   */
  status_details?: V2.MoneyManagement.OutboundTransfer.StatusDetails;

  /**
   * Hash containing timestamps of when the object transitioned to a particular status.
   */
  status_transitions?: V2.MoneyManagement.OutboundTransfer.StatusTransitions;

  /**
   * To which payout method the OutboundTransfer was sent.
   */
  to: V2.MoneyManagement.OutboundTransfer.To;

  /**
   * A unique identifier that can be used to track this OutboundTransfer with recipient bank. Banks might call this a "reference number" or something similar.
   */
  trace_id: V2.MoneyManagement.OutboundTransfer.TraceId;
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace OutboundTransfer {
      export interface DeliveryOptions {
        /**
         * Open Enum. Method for bank account.
         */
        bank_account?: DeliveryOptions.BankAccount;
      }

      export interface From {
        /**
         * The monetary amount debited from the sender, only set on responses.
         */
        debited: V2Amount;

        /**
         * The FinancialAccount that funds were pulled from.
         */
        financial_account: string;
      }

      export type Status =
        | 'canceled'
        | 'failed'
        | 'posted'
        | 'processing'
        | 'returned';

      export interface StatusDetails {
        /**
         * The `failed` status reason.
         */
        failed?: StatusDetails.Failed;

        /**
         * The `returned` status reason.
         */
        returned?: StatusDetails.Returned;
      }

      export interface StatusTransitions {
        /**
         * Timestamp describing when an OutboundTransfer changed status to `canceled`.
         * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
         */
        canceled_at?: string;

        /**
         * Timestamp describing when an OutboundTransfer changed status to `failed`.
         * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
         */
        failed_at?: string;

        /**
         * Timestamp describing when an OutboundTransfer changed status to `posted`.
         * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
         */
        posted_at?: string;

        /**
         * Timestamp describing when an OutboundTransfer changed status to `returned`.
         * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
         */
        returned_at?: string;
      }

      export interface To {
        /**
         * The monetary amount being credited to the destination.
         */
        credited: V2Amount;

        /**
         * The payout method which the OutboundTransfer uses to send payout.
         */
        payout_method: string;
      }

      export interface TraceId {
        /**
         * Possible values are `pending`, `supported`, and `unsupported`. Initially set to `pending`, it changes to
         * `supported` when the recipient bank provides a trace ID, or `unsupported` if the recipient bank doesn't support it.
         * Note that this status may not align with the OutboundPayment or OutboundTransfer status and can remain `pending`
         * even after the payment or transfer is posted.
         */
        status: TraceId.Status;

        /**
         * The trace ID value if `trace_id.status` is `supported`, otherwise empty.
         */
        value?: string;
      }

      export namespace DeliveryOptions {
        export type BankAccount = 'automatic' | 'local' | 'wire';
      }

      export namespace StatusDetails {
        export interface Failed {
          /**
           * Open Enum. The `failed` status reason.
           */
          reason: Failed.Reason;
        }

        export interface Returned {
          /**
           * Open Enum. The `returned` status reason.
           */
          reason: Returned.Reason;
        }

        export namespace Failed {
          export type Reason =
            | 'payout_method_declined'
            | 'payout_method_does_not_exist'
            | 'payout_method_expired'
            | 'payout_method_unsupported'
            | 'payout_method_usage_frequency_limit_exceeded'
            | 'unknown_failure';
        }

        export namespace Returned {
          export type Reason =
            | 'payout_method_canceled_by_customer'
            | 'payout_method_closed'
            | 'payout_method_currency_unsupported'
            | 'payout_method_does_not_exist'
            | 'payout_method_holder_address_incorrect'
            | 'payout_method_holder_details_incorrect'
            | 'payout_method_holder_name_incorrect'
            | 'payout_method_invalid_account_number'
            | 'payout_method_restricted'
            | 'recalled'
            | 'unknown_failure';
        }
      }

      export namespace TraceId {
        export type Status = 'pending' | 'supported' | 'unsupported';
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface OutboundTransferCreateParams {
      /**
       * The "presentment amount" for the OutboundPayment.
       */
      amount: V2Amount;

      /**
       * The FinancialAccount to pull funds from.
       */
      from: OutboundTransferCreateParams.From;

      /**
       * To which payout method to send the OutboundTransfer.
       */
      to: OutboundTransferCreateParams.To;

      /**
       * Delivery options to be used to send the OutboundTransfer.
       */
      delivery_options?: OutboundTransferCreateParams.DeliveryOptions;

      /**
       * An arbitrary string attached to the OutboundTransfer. Often useful for displaying to users.
       */
      description?: string;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;

      /**
       * The recipient verification id for this OutboundTransfer. Only required for countries with regulatory mandates to verify recipient names before OutboundTransfer creation.
       */
      recipient_verification?: string;

      /**
       * The description that appears on the receiving end for an OutboundTransfer (for example, on a bank statement). Must be between 3 and 22 characters long, and not contain profanity.
       */
      statement_descriptor?: string;
    }

    export namespace OutboundTransferCreateParams {
      export interface From {
        /**
         * Describes the FinancialAmount's currency drawn from.
         */
        currency: string;

        /**
         * The FinancialAccount that funds were pulled from.
         */
        financial_account: string;
      }

      export interface To {
        /**
         * Describes the currency to send to the recipient.
         * If included, this currency must match a currency supported by the destination.
         * Can be omitted in the following cases:
         * - destination only supports one currency
         * - destination supports multiple currencies and one of the currencies matches the FA currency
         * - destination supports multiple currencies and one of the currencies matches the presentment currency
         * Note - when both FA currency and presentment currency are supported, we pick the FA currency to minimize FX.
         */
        currency?: string;

        /**
         * The payout method which the OutboundTransfer uses to send payout.
         */
        payout_method: string;
      }

      export interface DeliveryOptions {
        /**
         * Open Enum. Method for bank account.
         */
        bank_account?: DeliveryOptions.BankAccount;
      }

      export namespace DeliveryOptions {
        export type BankAccount = 'automatic' | 'local' | 'wire';
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface OutboundTransferRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface OutboundTransferListParams {
      /**
       * Filter for objects created at the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created?: string;

      /**
       * Filter for objects created after the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_gt?: string;

      /**
       * Filter for objects created on or after the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_gte?: string;

      /**
       * Filter for objects created before the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_lt?: string;

      /**
       * Filter for objects created on or before the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_lte?: string;

      /**
       * The maximum number of results to return.
       */
      limit?: number;

      /**
       * Closed Enum. Only return OutboundTransfers with this status.
       */
      status?: Array<OutboundTransferListParams.Status>;
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
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface OutboundTransferCancelParams {}
  }
}
