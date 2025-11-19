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

    interface UnhandledNotificationDetails {
      isKnownEventType: boolean;
    }

    type UnhandledEventHandler = (
      event: V2.Core.EventNotificationBase,
      client: Stripe,
      details: UnhandledNotificationDetails
    ) => Promise<void>;

    class EventRouter {
      constructor(
        client: Stripe,
        webhookSecret: string,
        onUnhandledHandler: UnhandledEventHandler
      );

      on<T extends Stripe.V2.Core.EventNotification['type']>(
        eventType: T,
        handler: (
          eventNotification: Extract<
            Stripe.V2.Core.EventNotification,
            {type: T}
          >,
          client: Stripe
        ) => void
        // a very cool thing would be if the whole class was generic and `on` returned all of the event types, but omitting the one we just used.
        // So `.on('a').on('a') would be a type error.
        // but, the event types aren't accessible from the runtime code, so we can't (yet)
      ): this;

      handle(
        rawBody: string | Uint8Array,
        signature: string | Uint8Array
      ): void;
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
        /**
         * Fetches the full object corresponding to the `related_object` field.
         * Returns `null` if there is no `related_object`.
         */
        fetchRelatedObject: () => Promise<unknown>;
        /**
         * Fetches the full Event object corresponding to this notification.
         */
        fetchEvent: () => Promise<V2.Core.EventBase>;
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
