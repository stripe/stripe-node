// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Payments {
        /**
         * OffSessionPayment resource.
         */
        interface OffSessionPayment {
          /**
           * Unique identifier for the object..
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.payments.off_session_payment';

          /**
           * The “presentment amount” to be collected from the customer.
           */
          amount_requested: Amount;

          /**
           * The frequency of the underlying payment.
           */
          cadence: OffSessionPayment.Cadence;

          /**
           * ID of the owning compartment.
           */
          compartment_id: string;

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
          failure_reason?: OffSessionPayment.FailureReason;

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
           * Set of [key-value pairs](https://docs.corp.stripe.com/api/metadata) that you can
           * attach to an object. This can be useful for storing additional information about
           * the object in a structured format. Learn more about
           * [storing information in metadata](https://docs.corp.stripe.com/payments/payment-intents#storing-information-in-metadata).
           */
          metadata: Stripe.Metadata;

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
           * Details about the OffSessionPayment retries.
           */
          retry_details: OffSessionPayment.RetryDetails;

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
          status: OffSessionPayment.Status;

          /**
           * Test clock that can be used to advance the retry attempts in a sandbox.
           */
          test_clock?: string;

          /**
           * The data that automatically creates a Transfer after the payment finalizes. Learn more about the use case for [connected accounts](https://docs.corp.stripe.com/payments/connected-accounts).
           */
          transfer_data?: OffSessionPayment.TransferData;
        }

        namespace OffSessionPayment {
          type Cadence = 'recurring' | 'unscheduled';

          type FailureReason = 'rejected_by_partner' | 'retries_exhausted';

          interface RetryDetails {
            /**
             * Number of authorization attempts so far.
             */
            attempts: number;

            /**
             * Indicates the strategy for how you want Stripe to retry the payment.
             */
            retry_strategy: RetryDetails.RetryStrategy;
          }

          namespace RetryDetails {
            type RetryStrategy = 'none' | 'smart';
          }

          type Status =
            | 'canceled'
            | 'failed'
            | 'pending'
            | 'pending_retry'
            | 'processing'
            | 'requires_capture'
            | 'succeeded';

          interface TransferData {
            /**
             * The amount transferred to the destination account. This transfer will occur
             * automatically after the payment succeeds. If no amount is specified, by default
             * the entire payment amount is transferred to the destination account. The amount
             * must be less than or equal to the
             * [amount_requested](https://docs.corp.stripe.com/api/v2/off-session-payments/object?api-version=2025-05-28.preview#v2_off_session_payment_object-amount_requested),
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
        }
      }
    }
  }
}
