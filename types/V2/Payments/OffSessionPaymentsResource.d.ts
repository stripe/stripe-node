// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Payments {
        interface OffSessionPaymentCreateParams {
          /**
           * The “presentment amount” to be collected from the customer.
           */
          amount: Amount;

          /**
           * The frequency of the underlying payment.
           */
          cadence: OffSessionPaymentCreateParams.Cadence;

          /**
           * ID of the Customer to which this OffSessionPayment belongs.
           */
          customer: string;

          /**
           * Set of [key-value pairs](https://docs.corp.stripe.com/api/metadata) that you can
           * attach to an object. This can be useful for storing additional information about
           * the object in a structured format. Learn more about
           * [storing information in metadata](https://docs.corp.stripe.com/payments/payment-intents#storing-information-in-metadata).
           */
          metadata: Stripe.MetadataParam;

          /**
           * ID of the payment method used in this OffSessionPayment.
           */
          payment_method: string;

          /**
           * Details about the capture configuration for the OffSessionPayment.
           */
          capture?: OffSessionPaymentCreateParams.Capture;

          /**
           * The account (if any) for which the funds of the OffSessionPayment are intended.
           */
          on_behalf_of?: string;

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
           * The data that automatically creates a Transfer after the payment finalizes. Learn more about the use case for [connected accounts](https://docs.corp.stripe.com/payments/connected-accounts).
           */
          transfer_data?: OffSessionPaymentCreateParams.TransferData;
        }

        namespace OffSessionPaymentCreateParams {
          type Cadence = 'recurring' | 'unscheduled';

          interface Capture {
            /**
             * The method to use to capture the payment.
             */
            capture_method: Capture.CaptureMethod;
          }

          namespace Capture {
            type CaptureMethod = 'automatic' | 'manual';
          }

          interface PaymentMethodOptions {
            /**
             * Payment method options for the card payment type.
             */
            card?: PaymentMethodOptions.Card;
          }

          namespace PaymentMethodOptions {
            interface Card {
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

          interface PaymentsOrchestration {
            /**
             * True when you want to enable payments orchestration for this off-session payment. False otherwise.
             */
            enabled: boolean;
          }

          interface RetryDetails {
            /**
             * The pre-configured retry policy to use for the payment.
             */
            retry_policy?: string;

            /**
             * Indicates the strategy for how you want Stripe to retry the payment.
             */
            retry_strategy?: RetryDetails.RetryStrategy;
          }

          namespace RetryDetails {
            type RetryStrategy = 'best_available' | 'none';
          }

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

      namespace Payments {
        interface OffSessionPaymentRetrieveParams {}
      }

      namespace Payments {
        interface OffSessionPaymentListParams {
          /**
           * The page size limit. If not provided, the default is 20.
           */
          limit?: number;
        }
      }

      namespace Payments {
        interface OffSessionPaymentCancelParams {}
      }

      namespace Payments {
        interface OffSessionPaymentCaptureParams {
          /**
           * Set of [key-value pairs](https://docs.corp.stripe.com/api/metadata) that you can
           * attach to an object. This can be useful for storing additional information about
           * the object in a structured format. Learn more about
           * [storing information in metadata](https://docs.corp.stripe.com/payments/payment-intents#storing-information-in-metadata).
           */
          metadata: Stripe.MetadataParam;

          /**
           * The amount to capture.
           */
          amount_to_capture?: number;

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
           * The data that automatically creates a Transfer after the payment finalizes. Learn more about the use case for [connected accounts](https://docs.corp.stripe.com/payments/connected-accounts).
           */
          transfer_data?: OffSessionPaymentCaptureParams.TransferData;
        }

        namespace OffSessionPaymentCaptureParams {
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
          }
        }
      }

      namespace Payments {
        class OffSessionPaymentsResource {
          /**
           * Creates an OffSessionPayment object.
           */
          create(
            params: OffSessionPaymentCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Payments.OffSessionPayment>>;

          /**
           * Retrieves the details of an OffSessionPayment that has previously been created.
           */
          retrieve(
            id: string,
            params?: OffSessionPaymentRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Payments.OffSessionPayment>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Payments.OffSessionPayment>>;

          /**
           * Returns a list of OffSessionPayments matching a filter.
           */
          list(
            params?: OffSessionPaymentListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Payments.OffSessionPayment>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Payments.OffSessionPayment>;

          /**
           * Cancel an OffSessionPayment that has previously been created.
           */
          cancel(
            id: string,
            params?: OffSessionPaymentCancelParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Payments.OffSessionPayment>>;
          cancel(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Payments.OffSessionPayment>>;

          /**
           * Captures an OffSessionPayment that has previously been created.
           */
          capture(
            id: string,
            params: OffSessionPaymentCaptureParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Payments.OffSessionPayment>>;
        }
      }
    }
  }
}
