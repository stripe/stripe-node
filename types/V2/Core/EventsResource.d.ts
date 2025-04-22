// File generated from our OpenAPI spec

/// <reference path='../EventTypes.d.ts' />

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        interface EventRetrieveParams {}
      }

      namespace Core {
        interface EventListParams {
          /**
           * Filter for events created after the specified timestamp.
           */
          created_gt?: string;

          /**
           * Filter for events created at or after the specified timestamp.
           */
          created_gte?: string;

          /**
           * Filter for events created before the specified timestamp.
           */
          created_lt?: string;

          /**
           * Filter for events created at or before the specified timestamp.
           */
          created_lte?: string;

          /**
           * Filter events based on whether they were successfully delivered to all subscribed event destinations. If false, events which are still pending or have failed all delivery attempts to a event destination will be returned.
           */
          delivery_success?: boolean;

          /**
           * The page size.
           */
          limit?: number;

          /**
           * Primary object ID used to retrieve related events.
           */
          object_id?: string;
        }
      }

      namespace Core {
        class EventsResource {
          /**
           * Retrieves the details of an event.
           */
          retrieve(
            id: string,
            params?: EventRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Event>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Event>>;

          /**
           * List events, going back up to 30 days.
           */
          list(
            params?: EventListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Event>;
          list(options?: RequestOptions): ApiListPromise<Stripe.V2.Event>;
        }
      }
    }
  }
}
