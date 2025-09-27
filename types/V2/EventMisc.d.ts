declare module 'stripe' {
  namespace Stripe {
    class StripeContext {
      constructor(segments?: string[]);

      /**
       * Gets a copy of the segments of this Context.
       */
      readonly segments: Array<string>;

      /**
       * Creates a new StripeContext with an additional segment appended.
       */
      push(segment: string): StripeContext;

      /**
       * Creates a new StripeContext with the last segment removed.
       */
      pop(): StripeContext;

      /**
       * Converts this context to its string representation.
       */
      toString(): string;

      static parse(contextStr?: string | null): StripeContext;
    }

    namespace Events {
      /**
       * Represents the shape of an EventNotification that the SDK didn't know about when it was generated.
       */
      export interface UnknownEventNotification
        extends V2.Core.EventNotificationBase {
        /**
         * Object containing the reference to API resource relevant to the event.
         */
        related_object: V2.Core.Events.RelatedObject | null;
        fetchRelatedObject: () => Promise<unknown>;
      }
    }

    namespace V2.Core {
      export interface EventNotificationBase
        extends Omit<EventBase, 'context'> {
        context?: StripeContext;
      }

      namespace Events {
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
    }
  }
}
