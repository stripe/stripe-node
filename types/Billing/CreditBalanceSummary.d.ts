// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      /**
       * Indicates the credit balance for credits granted to a customer.
       */
      interface CreditBalanceSummary {
        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing.credit_balance_summary';

        /**
         * The credit balances. One entry per credit grant currency. If a customer only has credit grants in a single currency, then this will have a single balance entry.
         */
        balances: Array<CreditBalanceSummary.Balance>;

        /**
         * The customer the balance is for.
         */
        customer: string | Stripe.Customer | Stripe.DeletedCustomer;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;
      }

      namespace CreditBalanceSummary {
        interface Balance {
          available_balance: Balance.AvailableBalance;

          ledger_balance: Balance.LedgerBalance;
        }

        namespace Balance {
          interface AvailableBalance {
            /**
             * The monetary amount.
             */
            monetary: AvailableBalance.Monetary | null;

            /**
             * The type of this amount. We currently only support `monetary` credits.
             */
            type: 'monetary';
          }

          namespace AvailableBalance {
            interface Monetary {
              /**
               * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
               */
              currency: string;

              /**
               * A positive integer representing the amount.
               */
              value: number;
            }
          }

          interface LedgerBalance {
            /**
             * The monetary amount.
             */
            monetary: LedgerBalance.Monetary | null;

            /**
             * The type of this amount. We currently only support `monetary` credits.
             */
            type: 'monetary';
          }

          namespace LedgerBalance {
            interface Monetary {
              /**
               * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
               */
              currency: string;

              /**
               * A positive integer representing the amount.
               */
              value: number;
            }
          }
        }
      }
    }
  }
}
