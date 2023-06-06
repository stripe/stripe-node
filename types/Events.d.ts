// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Events are our way of letting you know when something interesting happens in
     * your account. When an interesting event occurs, we create a new `Event`
     * object. For example, when a charge succeeds, we create a `charge.succeeded`
     * event; and when an invoice payment attempt fails, we create an
     * `invoice.payment_failed` event. Note that many API requests may cause multiple
     * events to be created. For example, if you create a new subscription for a
     * customer, you will receive both a `customer.subscription.created` event and a
     * `charge.succeeded` event.
     *
     * Events occur when the state of another API resource changes. The state of that
     * resource at the time of the change is embedded in the event's data field. For
     * example, a `charge.succeeded` event will contain a charge, and an
     * `invoice.payment_failed` event will contain an invoice.
     *
     * As with other API resources, you can use endpoints to retrieve an
     * [individual event](https://stripe.com/docs/api#retrieve_event) or a [list of events](https://stripe.com/docs/api#list_events)
     * from the API. We also have a separate
     * [webhooks](http://en.wikipedia.org/wiki/Webhook) system for sending the
     * `Event` objects directly to an endpoint on your server. Webhooks are managed
     * in your
     * [account settings](https://dashboard.stripe.com/account/webhooks),
     * and our [Using Webhooks](https://stripe.com/docs/webhooks) guide will help you get set up.
     *
     * When using [Connect](https://stripe.com/docs/connect), you can also receive notifications of
     * events that occur in connected accounts. For these events, there will be an
     * additional `account` attribute in the received `Event` object.
     *
     * **NOTE:** Right now, access to events through the [Retrieve Event API](https://stripe.com/docs/api#retrieve_event) is
     * guaranteed only for 30 days.
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
         * Object containing the names of the updated attributes and their values prior to the event (only included in events of type `*.updated`). If an array attribute has any updated elements, this object contains the entire array. In Stripe API versions 2017-04-06 or earlier, an updated array attribute in this object includes only the updated array elements.
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
  }
}
