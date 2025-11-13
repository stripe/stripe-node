// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      /**
       * An Issuing `Program` represents a card program that the user has access to.
       */
      interface Program {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'issuing.program';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Whether or not this is the "default" issuing program new cards are created on. Only one active `is_default` program at the same time.
         */
        is_default: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * The platform's Issuing Program for which this program is associated.
         */
        platform_program: string | null;
      }
    }
  }
}
