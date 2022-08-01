// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The LoginLink object.
     */
    interface LoginLink {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'login_link';

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The URL for the login link.
       */
      url: string;
    }

    interface LoginLinkCreateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
