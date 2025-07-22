// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Options for customizing account balances and payout settings for a Stripe platform's connected accounts.
     *
     * This API is only available for users enrolled in the public preview for Accounts v2 on Stripe Connect.
     * If you are not in this preview, please use the [Accounts v1 API](https://docs.stripe.com/api/accounts?api-version=2025-03-31.basil)
     * to manage your connected accounts' balance settings instead.
     */
    interface BalanceSettings {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'balance_settings';

      /**
       * A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. See [Understanding Connect account balances](https://docs.stripe.com/connect/account-balances) for details. The default value is `false` when [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts, otherwise `true`.
       */
      debit_negative_balances: boolean | null;

      /**
       * Settings specific to the account's payouts.
       */
      payouts: BalanceSettings.Payouts | null;

      settlement_timing: BalanceSettings.SettlementTiming;
    }

    namespace BalanceSettings {
      interface Payouts {
        /**
         * Details on when funds from charges are available, and when they are paid out to an external account. See our [Setting Bank and Debit Card Payouts](https://stripe.com/docs/connect/bank-transfers#payout-information) documentation for details.
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
          monthly_anchor?: number;

          /**
           * The day of the week funds will be paid out, of the style 'monday', 'tuesday', etc. Only shown if `interval` is weekly.
           */
          weekly_anchor?: Schedule.WeeklyAnchor;
        }

        namespace Schedule {
          type Interval = 'daily' | 'manual' | 'monthly' | 'weekly';

          type WeeklyAnchor =
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
      }
    }
  }
}
