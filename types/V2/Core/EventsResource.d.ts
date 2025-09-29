// File generated from our OpenAPI spec

/// <reference path='EventTypes.d.ts' />

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        interface EventRetrieveParams {}
      }

      namespace Core {
        interface EventListParams {
          /**
           * Primary object ID used to retrieve related events.
           */
          object_id: string;

          /**
           * The page size.
           */
          limit?: number;
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
          ): Promise<Stripe.Response<Stripe.V2.Core.Event>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.Event>>;

          /**
           * List events, going back up to 30 days.
           */
          list(
            params: EventListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Core.Event>;
        }
      }
    }
  }
}
