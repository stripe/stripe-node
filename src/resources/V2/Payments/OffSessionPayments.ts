// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {MetadataParam, AddressParam, Metadata} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class OffSessionPaymentResource extends StripeResource {
  /**
   * Returns a list of OffSessionPayments matching a filter.
   */
  list(
    params?: V2.Payments.OffSessionPaymentListParams,
    options?: RequestOptions
  ): ApiListPromise<OffSessionPayment> {
    return this._makeRequest(
      'GET',
      '/v2/payments/off_session_payments',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Creates an OffSessionPayment object.
   */
  create(
    params: V2.Payments.OffSessionPaymentCreateParams,
    options?: RequestOptions
  ): Promise<Response<OffSessionPayment>> {
    return this._makeRequest(
      'POST',
      '/v2/payments/off_session_payments',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves the details of an OffSessionPayment that has previously been created.
   */
  retrieve(
    id: string,
    params?: V2.Payments.OffSessionPaymentRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<OffSessionPayment>> {
    return this._makeRequest(
      'GET',
      `/v2/payments/off_session_payments/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Cancel an OffSessionPayment that has previously been created.
   */
  cancel(
    id: string,
    params?: V2.Payments.OffSessionPaymentCancelParams,
    options?: RequestOptions
  ): Promise<Response<OffSessionPayment>> {
    return this._makeRequest(
      'POST',
      `/v2/payments/off_session_payments/${id}/cancel`,
      params,
      options
    ) as any;
  }
  /**
   * Captures an OffSessionPayment that has previously been created.
   */
  capture(
    id: string,
    params: V2.Payments.OffSessionPaymentCaptureParams,
    options?: RequestOptions
  ): Promise<Response<OffSessionPayment>> {
    return this._makeRequest(
      'POST',
      `/v2/payments/off_session_payments/${id}/capture`,
      params,
      options
    ) as any;
  }
  /**
   * Pauses an OffSessionPayment that has previously been created.
   */
  pause(
    id: string,
    params?: V2.Payments.OffSessionPaymentPauseParams,
    options?: RequestOptions
  ): Promise<Response<OffSessionPayment>> {
    return this._makeRequest(
      'POST',
      `/v2/payments/off_session_payments/${id}/pause`,
      params,
      options
    ) as any;
  }
  /**
   * Resumes an OffSessionPayment that has previously been paused.
   */
  resume(
    id: string,
    params?: V2.Payments.OffSessionPaymentResumeParams,
    options?: RequestOptions
  ): Promise<Response<OffSessionPayment>> {
    return this._makeRequest(
      'POST',
      `/v2/payments/off_session_payments/${id}/resume`,
      params,
      options
    ) as any;
  }
}
export interface OffSessionPayment {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.payments.off_session_payment';

  /**
   * The amount available to be captured.
   */
  amount_capturable?: V2Amount;

  /**
   * The “presentment amount” to be collected from the customer.
   */
  amount_requested: V2Amount;

  /**
   * The amount of the application fee requested to be applied to the payment.
   */
  application_fee_amount_requested?: V2Amount;

  /**
   * The frequency of the underlying payment.
   */
  cadence: V2.Payments.OffSessionPayment.Cadence;

  /**
   * Details about the capture configuration for the OffSessionPayment.
   */
  capture?: V2.Payments.OffSessionPayment.Capture;

  /**
   * Creation time of the OffSessionPayment. Represented as a RFC 3339 date & time UTC
   * value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
   */
  created: string;

  /**
   * ID of the Customer to which this OffSessionPayment belongs.
   */
  customer: string;

  /**
   * The reason why the OffSessionPayment failed.
   */
  failure_reason?: V2.Payments.OffSessionPayment.FailureReason;

  /**
   * The payment error encountered in the previous attempt to authorize the payment.
   */
  last_authorization_attempt_error?: string;

  /**
   * Payment attempt record for the latest attempt, if one exists.
   */
  latest_payment_attempt_record?: string;

  /**
   * Has the value true if the object exists in live mode or the value false if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can
   * attach to an object. This can be useful for storing additional information about
   * the object in a structured format. Learn more about
   * [storing information in metadata](https://docs.stripe.com/payments/payment-intents#storing-information-in-metadata).
   */
  metadata: Metadata;

  /**
   * The account (if any) for which the funds of the OffSessionPayment are intended.
   */
  on_behalf_of?: string;

  /**
   * ID of the payment method used in this OffSessionPayment.
   */
  payment_method: string;

  /**
   * Payment record associated with the OffSessionPayment.
   */
  payment_record?: string;

  /**
   * Details about the payments orchestration configuration.
   */
  payments_orchestration: V2.Payments.OffSessionPayment.PaymentsOrchestration;

  /**
   * Details about the OffSessionPayment retries.
   */
  retry_details: V2.Payments.OffSessionPayment.RetryDetails;

  /**
   * Text that appears on the customer's statement as the statement descriptor for a
   * non-card charge. This value overrides the account's default statement descriptor.
   * For information about requirements, including the 22-character limit, see the
   * [Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
   */
  statement_descriptor?: string;

  /**
   * Provides information about a card charge. Concatenated to the account's
   * [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static)
   * to form the complete statement descriptor that appears on the customer's statement.
   */
  statement_descriptor_suffix?: string;

  /**
   * Status of this OffSessionPayment, one of `pending`, `pending_retry`, `processing`,
   * `failed`, `canceled`, `requires_capture`, or `succeeded`.
   */
  status: V2.Payments.OffSessionPayment.Status;

  /**
   * Test clock that can be used to advance the retry attempts in a sandbox.
   */
  test_clock?: string;

  /**
   * The data that automatically creates a Transfer after the payment finalizes. Learn more about the use case for [connected accounts](https://docs.stripe.com/payments/connected-accounts).
   */
  transfer_data?: V2.Payments.OffSessionPayment.TransferData;
}
export namespace V2 {
  export namespace Payments {
    export namespace OffSessionPayment {
      export type Cadence = 'recurring' | 'unscheduled';

      export interface Capture {
        /**
         * The timestamp when this payment is no longer eligible to be captured.
         */
        capture_before?: string;

        /**
         * The method to use to capture the payment.
         */
        capture_method: Capture.CaptureMethod;
      }

      export type FailureReason =
        | 'authorization_expired'
        | 'exceeded_retry_window'
        | 'no_valid_payment_method'
        | 'rejected_by_partner'
        | 'retries_exhausted';

      export interface PaymentsOrchestration {
        /**
         * True when you want to enable payments orchestration for this off-session payment. False otherwise.
         */
        enabled: boolean;
      }

      export interface RetryDetails {
        /**
         * Number of authorization attempts so far.
         */
        attempts: number;

        /**
         * The pre-configured retry policy to use for the payment.
         */
        retry_policy?: string;

        /**
         * Indicates the strategy for how you want Stripe to retry the payment.
         */
        retry_strategy: RetryDetails.RetryStrategy;

        /**
         * The timestamp when this payment is no longer eligible to be retried. When this timestamp is reached, the payment will be marked as failed.
         */
        retry_until?: string;
      }

      export type Status =
        | 'canceled'
        | 'failed'
        | 'paused'
        | 'pending'
        | 'pending_retry'
        | 'processing'
        | 'requires_capture'
        | 'succeeded';

      export interface TransferData {
        /**
         * The amount transferred to the destination account. This transfer will occur
         * automatically after the payment succeeds. If no amount is specified, by default
         * the entire payment amount is transferred to the destination account. The amount
         * must be less than or equal to the
         * [amount_requested](https://docs.stripe.com/api/v2/off-session-payments/object?api-version=2025-05-28.preview#v2_off_session_payment_object-amount_requested),
         * and must be a positive integer representing how much to transfer in the smallest
         * currency unit (e.g., 100 cents to charge $1.00).
         */
        amount?: number;

        /**
         * The account (if any) that the payment is attributed to for tax reporting, and
         * where funds from the payment are transferred to after payment success.
         */
        destination: string;
      }

      export namespace Capture {
        export type CaptureMethod = 'automatic' | 'manual';
      }

      export namespace RetryDetails {
        export type RetryStrategy =
          | 'heuristic'
          | 'none'
          | 'scheduled'
          | 'smart';
      }
    }
  }
}
export namespace V2 {
  export namespace Payments {
    export interface OffSessionPaymentCreateParams {
      /**
       * The “presentment amount” to be collected from the customer.
       */
      amount: V2Amount;

      /**
       * The frequency of the underlying payment.
       */
      cadence: OffSessionPaymentCreateParams.Cadence;

      /**
       * ID of the Customer to which this OffSessionPayment belongs.
       */
      customer: string;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can
       * attach to an object. This can be useful for storing additional information about
       * the object in a structured format. Learn more about
       * [storing information in metadata](https://docs.stripe.com/payments/payment-intents#storing-information-in-metadata).
       */
      metadata: MetadataParam;

      /**
       * The amount of the application fee (if any) that will be requested to be applied to the
       * payment and transferred to the application owner's Stripe account.
       */
      application_fee_amount?: V2Amount;

      /**
       * Details about the capture configuration for the OffSessionPayment.
       */
      capture?: OffSessionPaymentCreateParams.Capture;

      /**
       * The account (if any) for which the funds of the OffSessionPayment are intended.
       */
      on_behalf_of?: string;

      /**
       * ID of the payment method used in this OffSessionPayment.
       */
      payment_method?: string;

      /**
       * If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear in the payment_method property on the OffSessionPayment.
       */
      payment_method_data?: OffSessionPaymentCreateParams.PaymentMethodData;

      /**
       * Payment method options for the off-session payment.
       */
      payment_method_options?: OffSessionPaymentCreateParams.PaymentMethodOptions;

      /**
       * Details about the payments orchestration configuration.
       */
      payments_orchestration?: OffSessionPaymentCreateParams.PaymentsOrchestration;

      /**
       * Details about the OffSessionPayment retries.
       */
      retry_details?: OffSessionPaymentCreateParams.RetryDetails;

      /**
       * Text that appears on the customer's statement as the statement descriptor for a
       * non-card charge. This value overrides the account's default statement descriptor.
       * For information about requirements, including the 22-character limit, see the
       * [Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
       */
      statement_descriptor?: string;

      /**
       * Provides information about a card charge. Concatenated to the account's
       * [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static)
       * to form the complete statement descriptor that appears on the customer's statement.
       */
      statement_descriptor_suffix?: string;

      /**
       * Test clock that can be used to advance the retry attempts in a sandbox.
       */
      test_clock?: string;

      /**
       * The data that automatically creates a Transfer after the payment finalizes. Learn more about the use case for [connected accounts](https://docs.stripe.com/payments/connected-accounts).
       */
      transfer_data?: OffSessionPaymentCreateParams.TransferData;
    }

    export namespace OffSessionPaymentCreateParams {
      export type Cadence = 'recurring' | 'unscheduled';

      export interface Capture {
        /**
         * The method to use to capture the payment.
         */
        capture_method: Capture.CaptureMethod;
      }

      export interface PaymentMethodData {
        /**
         * Billing information associated with the payment method.
         */
        billing_details?: PaymentMethodData.BillingDetails;

        /**
         * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
         */
        type: 'card';

        /**
         * Contains card details that can be used to create a card PaymentMethod for PCI compliant users.
         */
        card?: PaymentMethodData.Card;
      }

      export interface PaymentMethodOptions {
        /**
         * Payment method options for the card payment type.
         */
        card?: PaymentMethodOptions.Card;
      }

      export interface PaymentsOrchestration {
        /**
         * True when you want to enable payments orchestration for this off-session payment. False otherwise.
         */
        enabled: boolean;
      }

      export interface RetryDetails {
        /**
         * The pre-configured retry policy to use for the payment.
         */
        retry_policy?: string;

        /**
         * Indicates the strategy for how you want Stripe to retry the payment.
         */
        retry_strategy?: RetryDetails.RetryStrategy;
      }

      export interface TransferData {
        /**
         * The amount transferred to the destination account. This transfer will occur
         * automatically after the payment succeeds. If no amount is specified, by default
         * the entire payment amount is transferred to the destination account. The amount
         * must be less than or equal to the
         * [amount_requested](https://docs.stripe.com/api/v2/off-session-payments/object?api-version=2025-05-28.preview#v2_off_session_payment_object-amount_requested),
         * and must be a positive integer representing how much to transfer in the smallest
         * currency unit (e.g., 100 cents to charge $1.00).
         */
        amount?: number;

        /**
         * The account (if any) that the payment is attributed to for tax reporting, and
         * where funds from the payment are transferred to after payment success.
         */
        destination: string;
      }

      export namespace Capture {
        export type CaptureMethod = 'automatic' | 'manual';
      }

      export namespace PaymentMethodData {
        export interface BillingDetails {
          /**
           * Billing address.
           */
          address?: AddressParam;

          /**
           * Email address.
           */
          email?: string;

          /**
           * Full name.
           */
          name?: string;

          /**
           * Billing phone number (including extension).
           */
          phone?: string;
        }

        export interface Card {
          /**
           * The card CVC.
           */
          cvc?: string;

          /**
           * The card expiration month.
           */
          exp_month: string;

          /**
           * The card expiration year.
           */
          exp_year: string;

          /**
           * The card number.
           */
          number?: string;
        }
      }

      export namespace PaymentMethodOptions {
        export interface Card {
          /**
           * If you are making a Credential On File transaction with a previously saved card, you should pass the Network Transaction ID
           * from a prior initial authorization on Stripe (from a successful SetupIntent or a PaymentIntent with `setup_future_usage` set),
           * or one that you have obtained from another payment processor. This is a token from the network which uniquely identifies the transaction.
           * Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data.
           * Note that you should pass in a Network Transaction ID if you have one, regardless of whether this is a
           * Customer-Initiated Transaction (CIT) or a Merchant-Initiated Transaction (MIT).
           */
          network_transaction_id: string;
        }
      }

      export namespace RetryDetails {
        export type RetryStrategy = 'best_available' | 'none';
      }
    }
  }
}
export namespace V2 {
  export namespace Payments {
    export interface OffSessionPaymentRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Payments {
    export interface OffSessionPaymentListParams {
      /**
       * The page size limit. If not provided, the default is 20.
       */
      limit?: number;
    }
  }
}
export namespace V2 {
  export namespace Payments {
    export interface OffSessionPaymentCancelParams {}
  }
}
export namespace V2 {
  export namespace Payments {
    export interface OffSessionPaymentCaptureParams {
      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can
       * attach to an object. This can be useful for storing additional information about
       * the object in a structured format. Learn more about
       * [storing information in metadata](https://docs.stripe.com/payments/payment-intents#storing-information-in-metadata).
       */
      metadata: MetadataParam;

      /**
       * The amount to capture.
       */
      amount_to_capture?: number;

      /**
       * The amount of the application fee for this capture.
       */
      application_fee_amount?: V2Amount;

      /**
       * Text that appears on the customer's statement as the statement descriptor for a
       * non-card charge. This value overrides the account's default statement descriptor.
       * For information about requirements, including the 22-character limit, see the
       * [Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
       */
      statement_descriptor?: string;

      /**
       * Provides information about a card charge. Concatenated to the account's
       * [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static)
       * to form the complete statement descriptor that appears on the customer's statement.
       */
      statement_descriptor_suffix?: string;

      /**
       * The data that automatically creates a Transfer after the payment finalizes. Learn more about the use case for [connected accounts](https://docs.stripe.com/payments/connected-accounts).
       */
      transfer_data?: OffSessionPaymentCaptureParams.TransferData;
    }

    export namespace OffSessionPaymentCaptureParams {
      export interface TransferData {
        /**
         * The amount transferred to the destination account. This transfer will occur
         * automatically after the payment succeeds. If no amount is specified, by default
         * the entire payment amount is transferred to the destination account. The amount
         * must be less than or equal to the
         * [amount_requested](https://docs.stripe.com/api/v2/off-session-payments/object?api-version=2025-05-28.preview#v2_off_session_payment_object-amount_requested),
         * and must be a positive integer representing how much to transfer in the smallest
         * currency unit (e.g., 100 cents to charge $1.00).
         */
        amount?: number;
      }
    }
  }
}
export namespace V2 {
  export namespace Payments {
    export interface OffSessionPaymentPauseParams {}
  }
}
export namespace V2 {
  export namespace Payments {
    export interface OffSessionPaymentResumeParams {}
  }
}
