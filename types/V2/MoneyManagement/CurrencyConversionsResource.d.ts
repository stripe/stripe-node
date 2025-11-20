// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        interface CurrencyConversionCreateParams {
          /**
           * The FinancialAccount id to create the CurrencyConversion on.
           */
          financial_account: string;

          /**
           * From amount object indicating the from currency or optional amount.
           */
          from: CurrencyConversionCreateParams.From;

          /**
           * To amount object indicating the to currency or optional amount.
           */
          to: CurrencyConversionCreateParams.To;
        }

        namespace CurrencyConversionCreateParams {
          interface From {
            /**
             * Amount object.
             */
            amount?: From.Amount;

            /**
             * A lowercase alpha3 currency code like "usd".
             */
            currency?: string;
          }

          namespace From {
            interface Amount {
              /**
               * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
               */
              value?: number;

              /**
               * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
               */
              currency?: string;
            }
          }

          interface To {
            /**
             * Amount object.
             */
            amount?: To.Amount;

            /**
             * A lowercase alpha3 currency code like "usd".
             */
            currency?: string;
          }

          namespace To {
            interface Amount {
              /**
               * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
               */
              value?: number;

              /**
               * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
               */
              currency?: string;
            }
          }
        }
      }

      namespace MoneyManagement {
        interface CurrencyConversionRetrieveParams {}
      }

      namespace MoneyManagement {
        interface CurrencyConversionListParams {
          /**
           * The ID of the FinancialAccount to filter by.
           */
          financial_account?: string;

          /**
           * The page limit.
           */
          limit?: number;
        }
      }

      namespace MoneyManagement {
        class CurrencyConversionsResource {
          /**
           * Create a CurrencyConversion.
           * @throws Stripe.FeatureNotEnabledError
           */
          create(
            params: CurrencyConversionCreateParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.CurrencyConversion>
          >;

          /**
           * Retrieve details of a CurrencyConversion by id.
           */
          retrieve(
            id: string,
            params?: CurrencyConversionRetrieveParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.CurrencyConversion>
          >;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.CurrencyConversion>
          >;

          /**
           * List all CurrencyConversion on an account with the option to filter by FinancialAccount.
           */
          list(
            params?: CurrencyConversionListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.CurrencyConversion>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.CurrencyConversion>;
        }
      }
    }
  }
}
