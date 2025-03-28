// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        interface PayoutMethodsBankAccountSpecRetrieveParams {
          /**
           * The countries to fetch the bank account spec for.
           */
          countries?: Array<string>;
        }
      }

      namespace MoneyManagement {
        class PayoutMethodsBankAccountSpecResource {
          /**
           * Fetch the specifications for a set of countries to know which
           * credential fields are required, the validations for each fields, and how to translate these
           * country-specific fields to the generic fields in the PayoutMethodBankAccount type.
           */
          retrieve(
            params?: PayoutMethodsBankAccountSpecRetrieveParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<
              Stripe.V2.MoneyManagement.PayoutMethodsBankAccountSpec
            >
          >;
          retrieve(
            options?: RequestOptions
          ): Promise<
            Stripe.Response<
              Stripe.V2.MoneyManagement.PayoutMethodsBankAccountSpec
            >
          >;
        }
      }
    }
  }
}
