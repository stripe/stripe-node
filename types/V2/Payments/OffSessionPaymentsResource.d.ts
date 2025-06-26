// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Payments {
        interface OffSessionPaymentCreateParams {
          /**
           * Amount you want to collect.
           */
          amount: Amount;

          /**
           * The frequency of the OSP.
           */
          cadence: OffSessionPaymentCreateParams.Cadence;

          /**
           * Customer that owns the provided payment method.
           */
          customer: string;

          /**
           * Any of your internal data you want to track here.
           */
          metadata: Stripe.MetadataParam;

          /**
           * Payment method you want to debit. Must be attached to a customer and set up for off-session usage.
           */
          payment_method: string;

          /**
           * The OBO merchant you want to use.
           */
          on_behalf_of?: string;

          /**
           * How you want stripe to retry the OSP.
           */
          retry_details?: OffSessionPaymentCreateParams.RetryDetails;

          /**
           * String you want to appear on your customer's statement.
           */
          statement_descriptor?: string;

          /**
           * Suffix appended to your account level descriptor.
           */
          statement_descriptor_suffix?: string;

          /**
           * Test clock to be used for testing your retry handling. Only usable in a sandbox.
           */
          test_clock?: string;

          /**
           * How you want to transfer the funds to your connected accounts.
           */
          transfer_data?: OffSessionPaymentCreateParams.TransferData;
        }

        namespace OffSessionPaymentCreateParams {
          type Cadence = 'recurring' | 'unscheduled';

          interface RetryDetails {
            /**
             * How you want Stripe to retry the payment.
             */
            retry_strategy: RetryDetails.RetryStrategy;
          }

          namespace RetryDetails {
            type RetryStrategy = 'none' | 'smart';
          }

          interface TransferData {
            /**
             * Amount in minor units that you want to transfer.
             */
            amount?: number;

            /**
             * ID of the connected account where you want money to go.
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
           * The page size limit, if not provided the default is 20.
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
           * Create OSP.
           */
          create(
            params: OffSessionPaymentCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Payments.OffSessionPayment>>;

          /**
           * Retrieve OSP by ID.
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
           * List OSPs matching filter.
           */
          list(
            params?: OffSessionPaymentListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Payments.OffSessionPayment>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Payments.OffSessionPayment>;

          /**
           * Cancel OSP.
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
