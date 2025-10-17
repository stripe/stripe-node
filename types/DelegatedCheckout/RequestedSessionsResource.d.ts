// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace DelegatedCheckout {
      interface RequestedSessionCreateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface RequestedSessionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface RequestedSessionUpdateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface RequestedSessionConfirmParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The PaymentMethod to use with the requested session.
         */
        payment_method?: string;
      }

      interface RequestedSessionExpireParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class RequestedSessionsResource {
        /**
         * Creates a requested session
         */
        create(
          params?: RequestedSessionCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.DelegatedCheckout.RequestedSession>>;
        create(
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.DelegatedCheckout.RequestedSession>>;

        /**
         * Retrieves a requested session
         */
        retrieve(
          id: string,
          params?: RequestedSessionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.DelegatedCheckout.RequestedSession>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.DelegatedCheckout.RequestedSession>>;

        /**
         * Updates a requested session
         */
        update(
          id: string,
          params?: RequestedSessionUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.DelegatedCheckout.RequestedSession>>;

        /**
         * Confirms a requested session
         */
        confirm(
          id: string,
          params?: RequestedSessionConfirmParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.DelegatedCheckout.RequestedSession>>;
        confirm(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.DelegatedCheckout.RequestedSession>>;

        /**
         * Expires a requested session
         */
        expire(
          id: string,
          params?: RequestedSessionExpireParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.DelegatedCheckout.RequestedSession>>;
        expire(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.DelegatedCheckout.RequestedSession>>;
      }
    }
  }
}
