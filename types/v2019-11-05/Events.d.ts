declare namespace Stripe {
  /**
   * The Event object.
   */
  interface Event {
    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'event';

    /**
     * The connected account that originated the event.
     */
    account?: string;

    /**
     * The Stripe API version used to render `data`. *Note: This property is populated only for events on or after October 31, 2014*.
     */
    api_version?: string | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    data?: Event.Data;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * Number of webhooks that have yet to be successfully delivered (i.e., to return a 20x response) to the URLs you've specified.
     */
    pending_webhooks?: number;

    /**
     * Information on the API request that instigated the event.
     */
    request?: Event.Request | null;

    /**
     * Description of the event (e.g., `invoice.created` or `charge.refunded`).
     */
    type?: string;
  }

  namespace Event {
    interface Data {
      /**
       * Object containing the API resource relevant to the event. For example, an `invoice.created` event will have a full [invoice object](#invoice_object) as the value of the object key.
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
      id?: string | null;

      /**
       * The idempotency key transmitted during the request, if any. *Note: This property is populated only for events on or after May 23, 2017*.
       */
      idempotency_key?: string | null;
    }
  }

  /**
   * Retrieves the details of an event. Supply the unique identifier of the event, which you might have received in a webhook.
   */
  interface EventRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * List events, going back up to 30 days. Each event data is rendered according to Stripe API version at its creation time, specified in [event object](https://stripe.com/docs/api/events/object) api_version attribute (not according to your current Stripe API version or Stripe-Version header).
   */
  interface EventListParams {
    created?: number | EventListParams.Created;

    /**
     * Filter events by whether all webhooks were successfully delivered. If false, events which are still pending or have failed all delivery attempts to a webhook endpoint will be returned.
     */
    delivery_success?: boolean;

    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;

    /**
     * A string containing a specific event name, or group of events using * as a wildcard. The list will be filtered to include only events with a matching event property.
     */
    type?: string;

    /**
     * An array of up to 20 strings containing specific event names. The list will be filtered to include only events with a matching event property. You may pass either `type` or `types`, but not both.
     */
    types?: Array<string>;
  }

  namespace EventListParams {
    interface Created {
      /**
       * Minimum value to filter by (exclusive)
       */
      gt?: number;

      /**
       * Minimum value to filter by (inclusive)
       */
      gte?: number;

      /**
       * Maximum value to filter by (exclusive)
       */
      lt?: number;

      /**
       * Maximum value to filter by (inclusive)
       */
      lte?: number;
    }
  }

  class EventsResource {
    /**
     * Retrieves the details of an event. Supply the unique identifier of the event, which you might have received in a webhook.
     */
    retrieve(
      id: string,
      params?: EventRetrieveParams,
      options?: RequestOptions
    ): Promise<Event>;
    retrieve(id: string, options?: RequestOptions): Promise<Event>;

    /**
     * List events, going back up to 30 days. Each event data is rendered according to Stripe API version at its creation time, specified in [event object](https://stripe.com/docs/api/events/object) api_version attribute (not according to your current Stripe API version or Stripe-Version header).
     */
    list(
      params?: EventListParams,
      options?: RequestOptions
    ): ApiListPromise<Event>;
    list(options?: RequestOptions): ApiListPromise<Event>;
  }
}