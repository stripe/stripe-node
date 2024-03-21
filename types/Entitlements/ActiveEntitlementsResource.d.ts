// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Entitlements {
      interface ActiveEntitlementListParams extends PaginationParams {
        /**
         * The ID of the customer.
         */
        customer: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class ActiveEntitlementsResource {
        /**
         * Retrieve a list of active entitlements for a customer
         */
        list(
          params: ActiveEntitlementListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Entitlements.ActiveEntitlement>;
      }
    }
  }
}
