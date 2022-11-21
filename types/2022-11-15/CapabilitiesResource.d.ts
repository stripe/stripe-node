// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface CapabilityRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface CapabilityUpdateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
       */
      requested?: boolean;
    }

    interface CapabilityListParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
