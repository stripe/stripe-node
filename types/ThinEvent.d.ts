// This is a manually maintained file

declare module 'stripe' {
  namespace Stripe {
    namespace Event {
      interface RelatedObject {
        /**
         * Object containing the reference to API resource relevant to the event.
         */
        related_object: {
          /**
           * Unique identifier for the object relevant to the event.
           */
          id: string;

          /**
           * Type of the object relevant to the event.
           */
          type: string;

          /**
           * URL to retrieve the resource.
           */
          url: string;
        };
      }
    }
    /**
     * The Event object as recieved from StripeClient.parseThinEvent.
     */
    interface ThinEvent extends V2.EventBase {
      /**
       * Object containing the reference to API resource relevant to the event.
       */
      related_object: Event.RelatedObject;
    }
  }
}
