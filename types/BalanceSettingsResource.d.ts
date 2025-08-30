// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface BalanceSettingsRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface BalanceSettingsUpdateParams {
      /**
       * Settings that apply to the [Payments Balance](https://docs.stripe.com/api/balance).
       */
      payments: BalanceSettingsUpdateParams.Payments;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    namespace BalanceSettingsUpdateParams {
      interface Payments {
        /**
         * A Boolean indicating whether Stripe should try to reclaim negative balances from an attached bank account. For details, see [Understanding Connect Account Balances](https://docs.stripe.com/connect/account-balances).
         */
        debit_negative_balances?: boolean;

        /**
         * Settings specific to the account's payouts.
         */
        payouts?: Payments.Payouts;

        /**
         * Settings related to the account's balance settlement timing.
         */
        settlement_timing?: Payments.SettlementTiming;
      }

      namespace Payments {
        interface Payouts {
          /**
           * Details on when funds from charges are available, and when they are paid out to an external account. For details, see our [Setting Bank and Debit Card Payouts](https://docs.stripe.com/connect/bank-transfers#payout-information) documentation.
           */
          schedule?: Payouts.Schedule;

          /**
           * The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
           */
          statement_descriptor?: string;
        }

        namespace Payouts {
          interface Schedule {
            /**
             * How frequently available funds are paid out. One of: `daily`, `manual`, `weekly`, or `monthly`. Default is `daily`.
             */
            interval?: Schedule.Interval;

            /**
             * The days of the month when available funds are paid out, specified as an array of numbers between 1--31. Payouts nominally scheduled between the 29th and 31st of the month are instead sent on the last day of a shorter month. Required and applicable only if `interval` is `monthly`.
             */
            monthly_payout_days?: Array<number>;

            /**
             * The days of the week when available funds are paid out, specified as an array, e.g., [`monday`, `tuesday`]. Required and applicable only if `interval` is `weekly`.
             */
            weekly_payout_days?: Array<Schedule.WeeklyPayoutDay>;
          }

          namespace Schedule {
            type Interval = 'daily' | 'manual' | 'monthly' | 'weekly';

            type WeeklyPayoutDay =
              | 'friday'
              | 'monday'
              | 'saturday'
              | 'sunday'
              | 'thursday'
              | 'tuesday'
              | 'wednesday';
          }
        }

        interface SettlementTiming {
          /**
           * The number of days charge funds are held before becoming available. The default value is `minimum`, representing the lowest available value for the account. The maximum value is 31. The `delay_days` parameter remains at the last configured value if `payouts.schedule.interval` is `manual`. [Learn more about controlling delay days](https://docs.stripe.com/connect/manage-payout-schedule).
           */
          delay_days_override?: number;
        }
      }
    }

    class BalanceSettingsResource {
      /**
       * Retrieves balance settings for a given connected account.
       *  Related guide: [Making API calls for connected accounts](https://docs.stripe.com/connect/authentication)
       */
      retrieve(
        params?: BalanceSettingsRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.BalanceSettings>>;
      retrieve(
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.BalanceSettings>>;

      /**
       * Updates balance settings for a given connected account.
       *  Related guide: [Making API calls for connected accounts](https://docs.stripe.com/connect/authentication)
       */
      update(
        params: BalanceSettingsUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.BalanceSettings>>;
    }
  }
}
