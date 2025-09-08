// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      /**
       * The DeletedObject object.
       */
      interface DeletedObject {
        /**
         * The ID of the object that's being deleted.
         */
        id: string;

        /**
         * String representing the type of the object that has been deleted. Objects of the same type share the same value of the object field.
         */
        object?: string;
      }
    }
  }
}
