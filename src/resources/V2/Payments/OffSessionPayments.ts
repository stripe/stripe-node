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
    params?: V2.Payments.OffSessionPaymentCaptureParams,
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
   * Provides industry-specific information about the amount.
   */
  amount_details?: V2.Payments.OffSessionPayment.AmountDetails;

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
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;

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
   * Provides industry-specific information about the payment.
   */
  payment_details?: V2.Payments.OffSessionPayment.PaymentDetails;

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
      export interface AmountDetails {
        /**
         * The amount the total transaction was discounted for.
         */
        discount_amount?: number;

        /**
         * Contains information about the error that occurred when validating the current amount details.
         * This field populates when the amount details has a validation error that wasn't enforced because the [enforce_arithmetic_validation](https://docs.corp.stripe.com/api/payment_intents/create#create_payment_intent-amount_details-enforce_arithmetic_validation) parameter was set to `false`.
         */
        error?: AmountDetails.Error;

        /**
         * A list of line items, each containing information about a product in the PaymentIntent. There is a maximum of 100 line items.
         */
        line_items: Array<AmountDetails.LineItem>;

        /**
         * Contains information about the shipping portion of the amount.
         */
        shipping?: AmountDetails.Shipping;

        /**
         * Contains information about the tax portion of the amount.
         */
        tax?: AmountDetails.Tax;
      }

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

      export interface PaymentDetails {
        /**
         * A unique value to identify the customer. This field is applicable only for card payments. For card payments, this field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks.
         */
        customer_reference?: string;

        /**
         * A unique value assigned by the business to identify the transaction. Required for L2 and L3 rates.
         * For Cards, this field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks.
         */
        order_reference?: string;
      }

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

      export namespace AmountDetails {
        export interface Error {
          /**
           * The code of the error that occurred when validating the current amount details.
           */
          code?: Error.Code;

          /**
           * A message providing more details about the error.
           */
          message?: string;
        }

        export interface LineItem {
          /**
           * The amount an item was discounted for. Positive integer.
           */
          discount_amount?: number;

          /**
           * Unique identifier of the product. At most 12 characters long.
           */
          product_code?: string;

          /**
           * Name of the product. At most 100 characters long.
           */
          product_name: string;

          /**
           * Number of items of the product. Positive integer.
           */
          quantity: number;

          /**
           * Contains information about the tax on the item.
           */
          tax?: LineItem.Tax;

          /**
           * Cost of the product. Non-negative integer.
           */
          unit_cost: number;

          /**
           * Unit of measure for the product. At most 12 characters long.
           */
          unit_of_measure?: string;
        }

        export interface Shipping {
          /**
           * Portion of the amount that is for shipping.
           */
          amount?: number;

          /**
           * The postal code that represents the shipping source.
           */
          from_postal_code?: string;

          /**
           * The postal code that represents the shipping destination.
           */
          to_postal_code?: string;
        }

        export interface Tax {
          /**
           * Total portion of the amount that is for tax.
           */
          total_tax_amount?: number;
        }

        export namespace Error {
          export type Code =
            | 'amount_details_amount_mismatch'
            | 'amount_details_amount_greater_than_tax_shipping_discount';
        }

        export namespace LineItem {
          export interface Tax {
            /**
             * Total portion of the amount that is for tax.
             */
            total_tax_amount?: number;
          }
        }
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
       * Provides industry-specific information about the amount.
       */
      amount_details?: OffSessionPaymentCreateParams.AmountDetails;

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
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description?: string;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can
       * attach to an object. This can be useful for storing additional information about
       * the object in a structured format. Learn more about
       * [storing information in metadata](https://docs.stripe.com/payments/payment-intents#storing-information-in-metadata).
       */
      metadata?: MetadataParam;

      /**
       * The account (if any) for which the funds of the OffSessionPayment are intended.
       */
      on_behalf_of?: string;

      /**
       * Provides industry-specific information about the payment.
       */
      payment_details?: OffSessionPaymentCreateParams.PaymentDetails;

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

      export interface AmountDetails {
        /**
         * The amount the total transaction was discounted for.
         */
        discount_amount?: number;

        /**
         * Set to `false` to return arithmetic validation errors in the response without failing the request. Use this when you want the operation to proceed regardless of arithmetic errors in the line item data.
         * Omit or set to `true` to immediately return a 400 error when arithmetic validation fails. Use this for strict validation that prevents processing with line item data that has arithmetic inconsistencies.
         * For card payments, Stripe doesn't send line item data to card networks if there's an arithmetic validation error.
         */
        enforce_arithmetic_validation?: boolean;

        /**
         * A list of line items, each containing information about a product in the OffSessionPayment. There is a maximum of 10 line items.
         */
        line_items?: Array<AmountDetails.LineItem>;

        /**
         * Contains information about the shipping portion of the amount.
         */
        shipping?: AmountDetails.Shipping;

        /**
         * Contains information about the tax portion of the amount.
         */
        tax?: AmountDetails.Tax;
      }

      export interface Capture {
        /**
         * The method to use to capture the payment.
         */
        capture_method: Capture.CaptureMethod;
      }

      export interface PaymentDetails {
        /**
         * A unique value to identify the customer. This field is applicable only for card payments. For card payments, this field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks.
         */
        customer_reference?: string;

        /**
         * A unique value assigned by the business to identify the transaction. Required for L2 and L3 rates.
         * For Cards, this field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks.
         */
        order_reference?: string;
      }

      export interface PaymentMethodData {
        /**
         * Billing information associated with the payment method.
         */
        billing_details?: PaymentMethodData.BillingDetails;

        /**
         * Contains card details that can be used to create a card PaymentMethod for PCI compliant users.
         */
        card?: PaymentMethodData.Card;

        /**
         * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
         */
        type: 'card';
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

      export namespace AmountDetails {
        export interface LineItem {
          /**
           * The amount an item was discounted for. Positive integer.
           */
          discount_amount?: number;

          /**
           * Unique identifier of the product. At most 12 characters long.
           */
          product_code?: string;

          /**
           * Name of the product. At most 100 characters long.
           */
          product_name: string;

          /**
           * Number of items of the product. Positive integer.
           */
          quantity: number;

          /**
           * Contains information about the tax on the item.
           */
          tax?: LineItem.Tax;

          /**
           * Cost of the product. Positive integer.
           */
          unit_cost: number;

          /**
           * A unit of measure for the line item, such as gallons, feet, meters, etc.
           * The maximum length is 12 characters.
           */
          unit_of_measure?: string;
        }

        export interface Shipping {
          /**
           * Portion of the amount that is for shipping.
           */
          amount?: number;

          /**
           * The postal code that represents the shipping source.
           */
          from_postal_code?: string;

          /**
           * The postal code that represents the shipping destination.
           */
          to_postal_code?: string;
        }

        export interface Tax {
          /**
           * Total portion of the amount that is for tax.
           */
          total_tax_amount: number;
        }

        export namespace LineItem {
          export interface Tax {
            /**
             * Total portion of the amount that is for tax.
             */
            total_tax_amount: number;
          }
        }
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
           * The merchant category code for this transaction. Used in interchange and authorization to improve auth rates.
           */
          mcc?: string;

          /**
           * If you are making a Credential On File transaction with a previously saved card, you should pass the Network Transaction ID
           * from a prior initial authorization on Stripe (from a successful SetupIntent or a PaymentIntent with `setup_future_usage` set),
           * or one that you have obtained from another payment processor. This is a token from the network which uniquely identifies the transaction.
           * Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data.
           * Note that you should pass in a Network Transaction ID if you have one, regardless of whether this is a
           * Customer-Initiated Transaction (CIT) or a Merchant-Initiated Transaction (MIT).
           */
          network_transaction_id?: string;
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
       * Provides industry-specific information about the amount.
       */
      amount_details?: OffSessionPaymentCaptureParams.AmountDetails;

      /**
       * The amount to capture.
       */
      amount_to_capture?: number;

      /**
       * The amount of the application fee for this capture.
       */
      application_fee_amount?: V2Amount;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can
       * attach to an object. This can be useful for storing additional information about
       * the object in a structured format. Learn more about
       * [storing information in metadata](https://docs.stripe.com/payments/payment-intents#storing-information-in-metadata).
       */
      metadata?: MetadataParam;

      /**
       * Provides industry-specific information about the payment.
       */
      payment_details?: OffSessionPaymentCaptureParams.PaymentDetails;

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
      export interface AmountDetails {
        /**
         * The amount the total transaction was discounted for.
         */
        discount_amount?: number;

        /**
         * Set to `false` to return arithmetic validation errors in the response without failing the request. Use this when you want the operation to proceed regardless of arithmetic errors in the line item data.
         * Omit or set to `true` to immediately return a 400 error when arithmetic validation fails. Use this for strict validation that prevents processing with line item data that has arithmetic inconsistencies.
         * For card payments, Stripe doesn't send line item data to card networks if there's an arithmetic validation error.
         */
        enforce_arithmetic_validation?: boolean;

        /**
         * A list of line items, each containing information about a product in the OffSessionPayment. There is a maximum of 10 line items.
         */
        line_items?: Array<AmountDetails.LineItem>;

        /**
         * Contains information about the shipping portion of the amount.
         */
        shipping?: AmountDetails.Shipping;

        /**
         * Contains information about the tax portion of the amount.
         */
        tax?: AmountDetails.Tax;
      }

      export interface PaymentDetails {
        /**
         * A unique value to identify the customer. This field is applicable only for card payments. For card payments, this field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks.
         */
        customer_reference?: string;

        /**
         * A unique value assigned by the business to identify the transaction. Required for L2 and L3 rates.
         * For Cards, this field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks.
         */
        order_reference?: string;
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
      }

      export namespace AmountDetails {
        export interface LineItem {
          /**
           * The amount an item was discounted for. Positive integer.
           */
          discount_amount?: number;

          /**
           * Unique identifier of the product. At most 12 characters long.
           */
          product_code?: string;

          /**
           * Name of the product. At most 100 characters long.
           */
          product_name: string;

          /**
           * Number of items of the product. Positive integer.
           */
          quantity: number;

          /**
           * Contains information about the tax on the item.
           */
          tax?: LineItem.Tax;

          /**
           * Cost of the product. Positive integer.
           */
          unit_cost: number;

          /**
           * A unit of measure for the line item, such as gallons, feet, meters, etc.
           * The maximum length is 12 characters.
           */
          unit_of_measure?: string;
        }

        export interface Shipping {
          /**
           * Portion of the amount that is for shipping.
           */
          amount?: number;

          /**
           * The postal code that represents the shipping source.
           */
          from_postal_code?: string;

          /**
           * The postal code that represents the shipping destination.
           */
          to_postal_code?: string;
        }

        export interface Tax {
          /**
           * Total portion of the amount that is for tax.
           */
          total_tax_amount: number;
        }

        export namespace LineItem {
          export interface Tax {
            /**
             * Total portion of the amount that is for tax.
             */
            total_tax_amount: number;
          }
        }
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
