// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      /**
       * A credit balance transaction is a resource representing a transaction (either a credit or a debit) against an existing credit grant.
       */
      interface CreditBalanceTransaction {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing.credit_balance_transaction';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Credit details for this balance transaction. Only present if type is `credit`.
         */
        credit: CreditBalanceTransaction.Credit | null;

        /**
         * The credit grant associated with this balance transaction.
         */
        credit_grant: string | Stripe.Billing.CreditGrant;

        /**
         * Debit details for this balance transaction. Only present if type is `debit`.
         */
        debit: CreditBalanceTransaction.Debit | null;

        /**
         * The effective time of this balance transaction.
         */
        effective_at: number;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * ID of the test clock this credit balance transaction belongs to.
         */
        test_clock: string | Stripe.TestHelpers.TestClock | null;

        /**
         * The type of balance transaction (credit or debit).
         */
        type: CreditBalanceTransaction.Type | null;
      }

      namespace CreditBalanceTransaction {
        interface Credit {
          amount: Credit.Amount;

          /**
           * The type of credit transaction.
           */
          type: 'credits_granted';
        }

        namespace Credit {
          interface Amount {
            /**
             * The monetary amount.
             */
            monetary: Amount.Monetary | null;

            /**
             * The type of this amount. We currently only support `monetary` credits.
             */
            type: 'monetary';
          }

          namespace Amount {
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

        interface Debit {
          amount: Debit.Amount;

          /**
           * Details of how the credits were applied to an invoice. Only present if `type` is `credits_applied`.
           */
          credits_applied: Debit.CreditsApplied | null;

          /**
           * The type of debit transaction.
           */
          type: Debit.Type;
        }

        namespace Debit {
          interface Amount {
            /**
             * The monetary amount.
             */
            monetary: Amount.Monetary | null;

            /**
             * The type of this amount. We currently only support `monetary` credits.
             */
            type: 'monetary';
          }

          namespace Amount {
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

          interface CreditsApplied {
            /**
             * The invoice to which the credits were applied.
             */
            invoice: string | Stripe.Invoice;

            /**
             * The invoice line item to which the credits were applied.
             */
            invoice_line_item: string;
          }

          type Type = 'credits_applied' | 'credits_expired' | 'credits_voided';
        }

        type Type = 'credit' | 'debit';
      }
    }
  }
}
