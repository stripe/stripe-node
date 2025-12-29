import { StripeResource } from '../StripeResource.js';
import { Emptyable } from '../shared.js';
import { RequestOptions, Response } from '../lib.js';
export declare class BalanceSettingResource extends StripeResource {
    /**
     * Retrieves balance settings for a given connected account.
     *  Related guide: [Making API calls for connected accounts](https://docs.stripe.com/connect/authentication)
     */
    retrieve(params?: BalanceSettingsRetrieveParams, options?: RequestOptions): Promise<Response<BalanceSettings>>;
    retrieve(options?: RequestOptions): Promise<Response<BalanceSettings>>;
    /**
     * Updates balance settings for a given connected account.
     *  Related guide: [Making API calls for connected accounts](https://docs.stripe.com/connect/authentication)
     */
    update(params?: BalanceSettingsUpdateParams, options?: RequestOptions): Promise<Response<BalanceSettings>>;
}
export interface BalanceSettings {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'balance_settings';
    payments: BalanceSettings.Payments;
}
export declare namespace BalanceSettings {
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
            type Status = 'disabled' | 'enabled';
            namespace Schedule {
                type Interval = 'daily' | 'manual' | 'monthly' | 'weekly';
                type WeeklyPayoutDay = 'friday' | 'monday' | 'thursday' | 'tuesday' | 'wednesday';
            }
        }
    }
}
export interface BalanceSettingsRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface BalanceSettingsUpdateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Settings that apply to the [Payments Balance](https://docs.stripe.com/api/balance).
     */
    payments?: BalanceSettingsUpdateParams.Payments;
}
export declare namespace BalanceSettingsUpdateParams {
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
             * The minimum balance amount to retain per currency after automatic payouts. Only funds that exceed these amounts are paid out. Learn more about the [minimum balances for automatic payouts](https://docs.stripe.com/payouts/minimum-balances-for-automatic-payouts).
             */
            minimum_balance_by_currency?: Emptyable<{
                [key: string]: Emptyable<number>;
            }>;
            /**
             * Details on when funds from charges are available, and when they are paid out to an external account. For details, see our [Setting Bank and Debit Card Payouts](https://docs.stripe.com/connect/bank-transfers#payout-information) documentation.
             */
            schedule?: Payouts.Schedule;
            /**
             * The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
             */
            statement_descriptor?: string;
        }
        interface SettlementTiming {
            /**
             * Change `delay_days` for this account, which determines the number of days charge funds are held before becoming available. The maximum value is 31. Passing an empty string to `delay_days_override` will return `delay_days` to the default, which is the lowest available value for the account. [Learn more about controlling delay days](https://docs.stripe.com/connect/manage-payout-schedule).
             */
            delay_days_override?: Emptyable<number>;
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
                type WeeklyPayoutDay = 'friday' | 'monday' | 'thursday' | 'tuesday' | 'wednesday';
            }
        }
    }
}
