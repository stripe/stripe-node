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
           * The account (if any) for which the funds of the OffSessionPayment are intended.
           */
          on_behalf_of?: string;

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

          interface RetryDetails {
            /**
             * Indicates the strategy for how you want Stripe to retry the payment.
             */
            retry_strategy: RetryDetails.RetryStrategy;
          }

          namespace RetryDetails {
            type RetryStrategy = 'none' | 'smart';
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
        }
      }
    }
  }
}
