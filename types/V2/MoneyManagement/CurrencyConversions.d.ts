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
            amount: Amount;
          }

          interface To {
            /**
             * Amount object.
             */
            amount: Amount;
          }
        }
      }
    }
  }
}
