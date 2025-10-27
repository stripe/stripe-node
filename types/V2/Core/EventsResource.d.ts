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
           * Filter for events created after the specified timestamp.
           */
          gt?: string;

          /**
           * Filter for events created at or after the specified timestamp.
           */
          gte?: string;

          /**
           * The page size.
           */
          limit?: number;

          /**
           * Filter for events created before the specified timestamp.
           */
          lt?: string;

          /**
           * Filter for events created at or before the specified timestamp.
           */
          lte?: string;

          /**
           * Primary object ID used to retrieve related events.
           */
          object_id?: string;

          /**
           * An array of up to 20 strings containing specific event names.
           */
          types?: Array<string>;
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
            params?: EventListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Core.Event>;
          list(options?: RequestOptions): ApiListPromise<Stripe.V2.Core.Event>;
        }
      }
    }
  }
}
