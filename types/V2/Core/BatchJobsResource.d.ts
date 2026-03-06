// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        interface BatchJobCreateParams {
          /**
           * The API endpoint to batch (e.g., /v1/customers/:id for batch customer updates).
           */
          endpoint: BatchJobCreateParams.Endpoint;
        }

        namespace BatchJobCreateParams {
          type Endpoint =
            | '/v1/subscription_schedules'
            | '/v1/customers/:customer'
            | '/v1/subscriptions/:subscription_exposed_id';
        }
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
           * Serializes a Customer update request into a batch job JSONL line.
           */
          serializeV1CustomerUpdate(
            customer: string,
            params?: CustomerUpdateParams,
            options?: RequestOptions
          ): string;
          serializeV1CustomerUpdate(
            customer: string,
            options?: RequestOptions
          ): string;

          /**
           * Serializes a SubscriptionSchedule create request into a batch job JSONL line.
           */
          serializeV1SubscriptionScheduleCreate(
            params?: SubscriptionScheduleCreateParams,
            options?: RequestOptions
          ): string;
          serializeV1SubscriptionScheduleCreate(
            options?: RequestOptions
          ): string;

          /**
           * Serializes a Subscription update request into a batch job JSONL line.
           */
          serializeV1SubscriptionUpdate(
            subscription_exposed_id: string,
            params?: SubscriptionUpdateParams,
            options?: RequestOptions
          ): string;
          serializeV1SubscriptionUpdate(
            subscription_exposed_id: string,
            options?: RequestOptions
          ): string;
        }
      }
    }
  }
}
