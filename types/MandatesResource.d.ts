// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface MandateRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface MandateListParams extends PaginationParams {
      payment_method: string;

      /**
       * The status of the mandates to retrieve. Status indicates whether or not you can use it to initiate a payment, and can have a value of `active`, `pending`, or `inactive`.
       */
      status: MandateListParams.Status;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The Stripe account ID that the mandates are intended for. Learn more about the [use case for connected accounts payments](https://stripe.com/docs/payments/connected-accounts).
       */
      on_behalf_of?: string;
    }

    namespace MandateListParams {
      type Status = 'active' | 'inactive' | 'pending';
    }

    class MandatesResource {
      /**
       * Retrieves a Mandate object.
       */
      retrieve(
        id: string,
        params?: MandateRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Mandate>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Mandate>>;

      /**
       * Retrieves a list of Mandates for a given PaymentMethod.
       */
      list(
        params: MandateListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Mandate>;
    }
  }
}
