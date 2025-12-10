// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Options for customizing account balances and payout settings for a Stripe platform's connected accounts.
     */
    interface BalanceSettings {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'balance_settings';

      payments: BalanceSettings.Payments;
    }

    namespace BalanceSettings {
      interface Payments {
        /**
         * A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. See [Understanding Connect account balances](https://docs.stripe.com/connect/account-balances) for details. The default value is `false` when [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts, otherwise `true`.
         */
        debit_negative_balances: boolean | null;

        /**
         * Settings specific to the account's payouts.
         */
        payouts: Payments.Payouts | null;

        settlement_timing: Payments.SettlementTiming;
      }

      namespace Payments {
        interface Payouts {
          /**
           * The minimum balance amount to retain per currency after automatic payouts. Only funds that exceed these amounts are paid out. Learn more about the [minimum balances for automatic payouts](https://docs.stripe.com/payouts/minimum-balances-for-automatic-payouts).
           */
          minimum_balance_by_currency: {
            [key: string]: number;
          } | null;

          /**
           * Details on when funds from charges are available, and when they are paid out to an external account. See our [Setting Bank and Debit Card Payouts](https://docs.stripe.com/connect/bank-transfers#payout-information) documentation for details.
           */
          schedule: Payouts.Schedule | null;

          /**
           * The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
           */
          statement_descriptor: string | null;

          /**
           * Whether the funds in this account can be paid out.
           */
          status: Payouts.Status;
        }

        namespace Payouts {
          interface Schedule {
            /**
             * How frequently funds will be paid out. One of `manual` (payouts only created via API call), `daily`, `weekly`, or `monthly`.
             */
            interval: Schedule.Interval | null;

            /**
             * The day of the month funds will be paid out. Only shown if `interval` is monthly. Payouts scheduled between the 29th and 31st of the month are sent on the last day of shorter months.
             */
            monthly_payout_days?: Array<number>;

            /**
             * The days of the week when available funds are paid out, specified as an array, for example, [`monday`, `tuesday`]. Only shown if `interval` is weekly.
             */
            weekly_payout_days?: Array<Schedule.WeeklyPayoutDay>;
          }

          namespace Schedule {
            type Interval = 'daily' | 'manual' | 'monthly' | 'weekly';

            type WeeklyPayoutDay =
              | 'friday'
              | 'monday'
              | 'thursday'
              | 'tuesday'
              | 'wednesday';
          }

          type Status = 'disabled' | 'enabled';
        }

        interface SettlementTiming {
          /**
           * The number of days charge funds are held before becoming available.
           */
          delay_days: number;

          /**
           * The number of days charge funds are held before becoming available. If present, overrides the default, or minimum available, for the account.
           */
          delay_days_override?: number;
        }
      }
    }
  }
}
