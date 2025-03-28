// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        interface ReceivedDebitRetrieveParams {}
      }

      namespace MoneyManagement {
        interface ReceivedDebitListParams {
          /**
           * The page limit.
           */
          limit?: number;
        }
      }

      namespace MoneyManagement {
        class ReceivedDebitsResource {
          /**
           * Retrieves a single ReceivedDebit by ID.
           */
          retrieve(
            id: string,
            params?: ReceivedDebitRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.MoneyManagement.ReceivedDebit>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.MoneyManagement.ReceivedDebit>>;

          /**
           * Retrieves a list of ReceivedDebits, given the selected filters.
           */
          list(
            params?: ReceivedDebitListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.ReceivedDebit>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.ReceivedDebit>;
        }
      }
    }
  }
}
