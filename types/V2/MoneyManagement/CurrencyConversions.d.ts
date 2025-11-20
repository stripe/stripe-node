// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        /**
         * The CurrencyConversion object. Contains details such as the amount debited and credited and the FinancialAccount the CurrencyConversion was performed on.
         */
        interface CurrencyConversion {
          /**
           * The id of the CurrencyConversion.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.money_management.currency_conversion';

          /**
           * The time the CurrencyConversion was created at.
           */
          created: string;

          /**
           * The exchange rate used when processing the CurrencyConversion.
           */
          exchange_rate: string;

          /**
           * The FinancialAccount the CurrencyConversion was performed on.
           */
          financial_account: string;

          /**
           * The from block containing what was debited.
           */
          from: CurrencyConversion.From;

          /**
           * If the CurrencyConversion was performed in livemode or not.
           */
          livemode: boolean;

          /**
           * The to block containing what was credited.
           */
          to: CurrencyConversion.To;
        }

        namespace CurrencyConversion {
          interface From {
            /**
             * Amount object.
             */
            amount: From.Amount;
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
            amount: To.Amount;
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
    }
  }
}
