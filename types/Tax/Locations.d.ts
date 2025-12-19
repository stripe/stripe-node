// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      /**
       * Tax locations represent venues for services, tickets, or other product types.
       */
      interface Location {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'tax.location';

        address: Stripe.Address;

        /**
         * A descriptive text providing additional context about the tax location. This can include information about the venue, types of events held, services available, or any relevant details for better identification (e.g., "A spacious auditorium suitable for large concerts and events.").
         */
        description: string | null;

        /**
         * The type of tax location to be defined. Currently the only option is `performance`.
         */
        type: 'performance';
      }
    }
  }
}
