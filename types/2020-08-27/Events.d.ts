// File generated from our OpenAPI spec
declare module 'stripe' {
  namespace Stripe {
    /**
     * The Event object.
     */
    interface Event {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'event';

      /**
       * The connected account that originated the event.
       */
      account?: string;

      /**
       * The Stripe API version used to render `data`. *Note: This property is populated only for events on or after October 31, 2014*.
       */
      api_version: string | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      data: Event.Data;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Number of webhooks that have yet to be successfully delivered (i.e., to return a 20x response) to the URLs you've specified.
       */
      pending_webhooks: number;

      /**
       * Information on the API request that instigated the event.
       */
      request: Event.Request | null;

      /**
       * Description of the event (e.g., `invoice.created` or `charge.refunded`).
       */
      type: string;
    }

    namespace Event {
      interface Data {
        /**
         * Object containing the API resource relevant to the event. For example, an `invoice.created` event will have a full [invoice object](https://stripe.com/docs/api#invoice_object) as the value of the object key.
         */
        object: Data.Object;

        /**
         * Object containing the names of the attributes that have changed, and their previous values (sent along only with *.updated events).
         */
        previous_attributes?: Data.PreviousAttributes;
      }

      namespace Data {
        interface Object {}

        interface PreviousAttributes {}
      }

      interface Request {
        /**
         * ID of the API request that caused the event. If null, the event was automatic (e.g., Stripe's automatic subscription handling). Request logs are available in the [dashboard](https://dashboard.stripe.com/logs), but currently not in the API.
         */
        id: string | null;

        /**
         * The idempotency key transmitted during the request, if any. *Note: This property is populated only for events on or after May 23, 2017*.
         */
        idempotency_key: string | null;
      }
    }

    interface EventRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface EventListParams extends PaginationParams {
      created?: Stripe.RangeQueryParam | number;

      /**
       * Filter events by whether all webhooks were successfully delivered. If false, events which are still pending or have failed all delivery attempts to a webhook endpoint will be returned.
       */
      delivery_success?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A string containing a specific event name, or group of events using * as a wildcard. The list will be filtered to include only events with a matching event property.
       */
      type?: string;

      /**
       * An array of up to 20 strings containing specific event names. The list will be filtered to include only events with a matching event property. You may pass either `type` or `types`, but not both.
       */
      types?: Array<string>;
    }

    class EventsResource {
      /**
       * Retrieves the details of an event. Supply the unique identifier of the event, which you might have received in a webhook.
       */
      retrieve(
        id: string,
        params?: EventRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Event>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Event>>;

      /**
       * List events, going back up to 30 days. Each event data is rendered according to Stripe API version at its creation time, specified in [event object](https://stripe.com/docs/api/events/object) api_version attribute (not according to your current Stripe API version or Stripe-Version header).
       */
      list(
        params?: EventListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Event>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Event>;
    }
  }
}
