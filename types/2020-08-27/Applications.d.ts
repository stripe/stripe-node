// File generated from our OpenAPI spec
declare module 'stripe' {
  namespace Stripe {
    /**
     * The Application object.
     */
    interface Application {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'application';

      /**
       * The name of the application.
       */
      name: string | null;
    }
  }
}
