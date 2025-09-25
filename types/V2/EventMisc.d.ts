declare module 'stripe' {
  namespace Stripe.V2.Events {
    /**
     * Object containing the reference to API resource relevant to the event.
     */
    export interface RelatedObject {
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
    }
  }
  namespace Stripe.V2 {
    /**
     * Represents the shape of an EventNotification that the SDK didn't know about when it was generated.
     */
    export interface UnknownEventNotification extends V2.EventBase {
      /**
       * Object containing the reference to API resource relevant to the event.
       */
      related_object: Events.RelatedObject | null;
      fetchRelatedObject: () => Promise<unknown>;
    }
  }
}
