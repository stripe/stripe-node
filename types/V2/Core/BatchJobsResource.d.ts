// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        interface BatchJobCreateParams {
          /**
           * The endpoint configuration for the batch job.
           */
          endpoint: BatchJobCreateParams.Endpoint;

          /**
           * The metadata of the `BatchJob` object.
           */
          metadata: Stripe.MetadataParam;

          /**
           * Allows the user to skip validation.
           */
          skip_validation: boolean;

          /**
           * Optional field that allows the user to control how fast they want this batch job to run.
           * Gives them a control over the number of webhooks they receive.
           */
          maximum_rps?: number;

          /**
           * Notification suppression settings for the batch job.
           */
          notification_suppression?: BatchJobCreateParams.NotificationSuppression;
        }

        namespace BatchJobCreateParams {
          interface Endpoint {
            /**
             * The HTTP method to use when calling the endpoint.
             */
            http_method: 'post';

            /**
             * The path of the endpoint to run this batch job against.
             * In the form used in the documentation. For instance, for
             * subscription migration this would be `/v1/subscriptions/:id/migrate`.
             */
            path: Endpoint.Path;
          }

          namespace Endpoint {
            type Path =
              | '/v1/accounts/:account'
              | '/v1/credit_notes'
              | '/v1/customers/:customer'
              | '/v1/invoices/:invoice'
              | '/v1/invoices/:invoice/pay'
              | '/v1/promotion_codes'
              | '/v1/promotion_codes/:promotion_code'
              | '/v1/subscriptions/:subscription_exposed_id'
              | '/v1/subscriptions/:subscription/migrate'
              | '/v1/subscription_schedules'
              | '/v1/subscription_schedules/:schedule'
              | '/v1/subscription_schedules/:schedule/cancel';
          }

          interface NotificationSuppression {
            /**
             * The scope of notification suppression.
             */
            scope: NotificationSuppression.Scope;
          }

          namespace NotificationSuppression {
            type Scope = 'all' | 'none';
          }
        }
      }

      namespace Core {
        interface BatchJobRetrieveParams {}
      }

      namespace Core {
        interface BatchJobCancelParams {}
      }

      namespace Core {
        class BatchJobsResource {
          /**
           * Creates a new batch job.
           */
          create(
            params: BatchJobCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.BatchJob>>;

          /**
           * Retrieves an existing batch job.
           */
          retrieve(
            id: string,
            params?: BatchJobRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.BatchJob>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.BatchJob>>;

          /**
           * Cancels an existing batch job.
           */
          cancel(
            id: string,
            params?: BatchJobCancelParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.BatchJob>>;
          cancel(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.BatchJob>>;
        }
      }
    }
  }
}
