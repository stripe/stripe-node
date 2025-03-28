// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        interface FinancialAccountRetrieveParams {}
      }

      namespace MoneyManagement {
        interface FinancialAccountListParams {
          /**
           * The page limit.
           */
          limit?: number;
        }
      }

      namespace MoneyManagement {
        class FinancialAccountsResource {
          /**
           * Retrieves the details of an existing FinancialAccount.
           */
          retrieve(
            id: string,
            params?: FinancialAccountRetrieveParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAccount>
          >;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAccount>
          >;

          /**
           * Lists FinancialAccounts in this compartment.
           */
          list(
            params?: FinancialAccountListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.FinancialAccount>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.FinancialAccount>;
        }
      }
    }
  }
}
