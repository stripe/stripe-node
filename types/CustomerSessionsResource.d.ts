// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface CustomerSessionCreateParams {
      /**
       * The ID of an existing customer for which to create the customer session.
       */
      customer: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class CustomerSessionsResource {
      /**
       * Creates a customer session object that includes a single-use client secret that you can use on your front-end to grant client-side API access for certain customer resources.
       */
      create(
        params: CustomerSessionCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.CustomerSession>>;
    }
  }
}
