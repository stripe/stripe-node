// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Capital {
      /**
       * A financing object describes an account's current financing state. Used by Connect
       * platforms to read the state of Capital offered to their connected accounts.
       */
      interface FinancingSummary {
        /**
         * The object type: financing_summary
         */
        object: 'capital.financing_summary';

        /**
         * Additional information about the financing summary. Describes currency, advance amount,
         * fee amount, withhold rate, remaining amount, paid amount, current repayment interval,
         * repayment start date, and advance payout date.
         */
        details: FinancingSummary.Details | null;

        /**
         * The Financing Offer ID this Financing Summary corresponds to
         */
        financing_offer: string | null;

        /**
         * Status of the Connected Account's financing. [/v1/capital/financing_summary](https://stripe.com/docs/api/capital/financing_summary) will only return `details` for `paid_out` financing.
         */
        status: FinancingSummary.Status | null;
      }

      namespace FinancingSummary {
        interface Details {
          /**
           * Amount of financing offered, in minor units. For example, 1,000 USD is represented as 100000.
           */
          advance_amount: number;

          /**
           * The time at which the funds were paid out to the connected account's Stripe balance. Given in milliseconds since unix epoch.
           */
          advance_paid_out_at: number | null;

          /**
           * Currency that the financing offer is transacted in. For example, `usd`.
           */
          currency: string;

          /**
           * The chronologically current repayment interval for the financing offer.
           */
          current_repayment_interval: Details.CurrentRepaymentInterval | null;

          /**
           * Fixed fee amount, in minor units. For example, 100 USD is represented as 10000.
           */
          fee_amount: number;

          /**
           * The amount the Connected account has paid toward the financing debt so far, in minor units. For example, 1,000 USD is represented as 100000.
           */
          paid_amount: number;

          /**
           * The balance remaining to be paid on the financing, in minor units. For example, 1,000 USD is represented as 100000.
           */
          remaining_amount: number;

          /**
           * The time at which Capital will begin withholding from payments. Given in seconds since unix epoch.
           */
          repayments_begin_at: number | null;

          /**
           * Per-transaction rate at which Stripe withholds funds to repay the financing.
           */
          withhold_rate: number;
        }

        namespace Details {
          interface CurrentRepaymentInterval {
            /**
             * The time at which the minimum payment amount will be due. If not met through withholding, the Connected account's linked bank account or account balance will be debited.
             * Given in seconds since unix epoch.
             */
            due_at: number;

            /**
             * The amount that has already been paid in the current repayment interval, in minor units. For example, 100 USD is represented as 10000.
             */
            paid_amount: number | null;

            /**
             * The amount that is yet to be paid in the current repayment interval, in minor units. For example, 100 USD is represented as 10000.
             */
            remaining_amount: number;
          }
        }

        type Status = 'accepted' | 'delivered' | 'none';
      }
    }
  }
}
