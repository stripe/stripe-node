// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * A Billing Intent represents a proposed change to a customer's billing configuration, such as subscribing to a new service,
         * modifying an existing subscription, or canceling service. Intents follow a draft-reserve-commit workflow where they can be
         * previewed before committing, allowing you to see the billing impact before changes take effect.
         */
        interface Intent {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.intent';

          /**
           * Breakdown of the amount for this Billing Intent.
           */
          amount_details: Intent.AmountDetails;

          /**
           * ID of an existing Cadence to use.
           */
          cadence?: string;

          /**
           * Data for creating a new Cadence.
           */
          cadence_data?: Intent.CadenceData;

          /**
           * Time at which the object was created.
           */
          created: string;

          /**
           * Three-letter ISO currency code, in lowercase. Must be a supported currency.
           */
          currency: string;

          /**
           * Invoice resources associated with this Billing Intent. Populated when include parameters are specified.
           */
          invoice_resources?: Intent.InvoiceResources;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Current status of the Billing Intent.
           */
          status: Intent.Status;

          /**
           * Timestamps for status transitions of the Billing Intent.
           */
          status_transitions: Intent.StatusTransitions;
        }

        namespace Intent {
          interface AmountDetails {
            /**
             * The outstanding amount after discount, tax, and customer balance application.
             */
            amount_due: string;

            /**
             * Three-letter ISO currency code, in lowercase. Must be a supported currency.
             */
            currency: string;

            /**
             * The customer's account balance applied to the amount.
             */
            customer_balance_applied: string;

            /**
             * Amount of discount applied.
             */
            discount: string;

            /**
             * Amount of shipping charges.
             */
            shipping: string;

            /**
             * Subtotal amount before tax and discounts.
             */
            subtotal: string;

            /**
             * Amount of tax.
             */
            tax: string;

            /**
             * Total amount for the Billing Intent.
             */
            total: string;
          }

          interface CadenceData {
            /**
             * The billing cycle configuration for this Cadence.
             */
            billing_cycle: CadenceData.BillingCycle;

            /**
             * Information about the payer for this Cadence.
             */
            payer: CadenceData.Payer;

            /**
             * Settings for creating the Cadence.
             */
            settings?: CadenceData.Settings;
          }

          namespace CadenceData {
            interface BillingCycle {
              /**
               * The number of intervals (specified in the interval attribute) between cadence billings. For example, type=month and interval_count=3 bills every 3 months.
               */
              interval_count: number;

              /**
               * The frequency at which a cadence bills.
               */
              type: BillingCycle.Type;

              /**
               * Specific configuration for determining billing dates when type=day.
               */
              day?: BillingCycle.Day;

              /**
               * Specific configuration for determining billing dates when type=month.
               */
              month?: BillingCycle.Month;

              /**
               * Specific configuration for determining billing dates when type=week.
               */
              week?: BillingCycle.Week;

              /**
               * Specific configuration for determining billing dates when type=year.
               */
              year?: BillingCycle.Year;
            }

            namespace BillingCycle {
              interface Day {
                /**
                 * The time at which the billing cycle ends.
                 */
                time: Day.Time;
              }

              namespace Day {
                interface Time {
                  /**
                   * The hour at which the billing cycle ends.
                   * This must be an integer between 0 and 23, inclusive.
                   * 0 represents midnight, and 23 represents 11 PM.
                   */
                  hour: number;

                  /**
                   * The minute at which the billing cycle ends.
                   * Must be an integer between 0 and 59, inclusive.
                   */
                  minute: number;

                  /**
                   * The second at which the billing cycle ends.
                   * Must be an integer between 0 and 59, inclusive.
                   */
                  second?: number;
                }
              }

              interface Month {
                /**
                 * The day to anchor the billing on for a type="month" billing cycle from 1-31.
                 * If this number is greater than the number of days in the month being billed,
                 * this will anchor to the last day of the month.
                 */
                day_of_month: number;

                /**
                 * The month to anchor the billing on for a type="month" billing cycle from
                 * 1-12. Occurrences are calculated from the month anchor.
                 */
                month_of_year?: number;

                /**
                 * The time at which the billing cycle ends.
                 */
                time: Month.Time;
              }

              namespace Month {
                interface Time {
                  /**
                   * The hour at which the billing cycle ends.
                   * This must be an integer between 0 and 23, inclusive.
                   * 0 represents midnight, and 23 represents 11 PM.
                   */
                  hour: number;

                  /**
                   * The minute at which the billing cycle ends.
                   * Must be an integer between 0 and 59, inclusive.
                   */
                  minute: number;

                  /**
                   * The second at which the billing cycle ends.
                   * Must be an integer between 0 and 59, inclusive.
                   */
                  second?: number;
                }
              }

              type Type = 'day' | 'month' | 'week' | 'year';

              interface Week {
                /**
                 * The day of the week to bill the type=week billing cycle on.
                 * Numbered from 1-7 for Monday to Sunday respectively, based on the ISO-8601 week day numbering.
                 */
                day_of_week: number;

                /**
                 * The time at which the billing cycle ends.
                 */
                time: Week.Time;
              }

              namespace Week {
                interface Time {
                  /**
                   * The hour at which the billing cycle ends.
                   * This must be an integer between 0 and 23, inclusive.
                   * 0 represents midnight, and 23 represents 11 PM.
                   */
                  hour: number;

                  /**
                   * The minute at which the billing cycle ends.
                   * Must be an integer between 0 and 59, inclusive.
                   */
                  minute: number;

                  /**
                   * The second at which the billing cycle ends.
                   * Must be an integer between 0 and 59, inclusive.
                   */
                  second?: number;
                }
              }

              interface Year {
                /**
                 * The day to anchor the billing on for a type="month" billing cycle from 1-31.
                 * If this number is greater than the number of days in the month being billed,
                 * this will anchor to the last day of the month.
                 */
                day_of_month: number;

                /**
                 * The month to bill on from 1-12. If not provided, this will default to the month the cadence was created.
                 */
                month_of_year: number;

                /**
                 * The time at which the billing cycle ends.
                 */
                time: Year.Time;
              }

              namespace Year {
                interface Time {
                  /**
                   * The hour at which the billing cycle ends.
                   * This must be an integer between 0 and 23, inclusive.
                   * 0 represents midnight, and 23 represents 11 PM.
                   */
                  hour: number;

                  /**
                   * The minute at which the billing cycle ends.
                   * Must be an integer between 0 and 59, inclusive.
                   */
                  minute: number;

                  /**
                   * The second at which the billing cycle ends.
                   * Must be an integer between 0 and 59, inclusive.
                   */
                  second?: number;
                }
              }
            }

            interface Payer {
              /**
               * The ID of the Billing Profile object which determines how a bill will be paid.
               */
              billing_profile?: string;

              /**
               * Data for creating a new profile.
               */
              billing_profile_data?: Payer.BillingProfileData;
            }

            namespace Payer {
              interface BillingProfileData {
                /**
                 * The customer to associate with the profile.
                 */
                customer: string;

                /**
                 * The default payment method to use when billing this profile.
                 * If none is provided, the customer `default_payment_method` will be used.
                 */
                default_payment_method?: string;
              }
            }

            interface Settings {
              /**
               * Settings that configure bills generation, which includes calculating totals, tax, and presenting invoices.
               */
              bill?: Settings.Bill;

              /**
               * Settings that configure and manage the behavior of collecting payments.
               */
              collection?: Settings.Collection;
            }

            namespace Settings {
              interface Bill {
                /**
                 * The ID of the referenced settings object.
                 */
                id: string;

                /**
                 * Returns the Settings Version when the cadence is pinned to a specific version.
                 */
                version?: string;
              }

              interface Collection {
                /**
                 * The ID of the referenced settings object.
                 */
                id: string;

                /**
                 * Returns the Settings Version when the cadence is pinned to a specific version.
                 */
                version?: string;
              }
            }
          }

          interface InvoiceResources {
            /**
             * ID of a preview invoice showing the breakdown of line items. Null if the billing intent will not create an invoice. Only present when "invoice_resources.preview_invoice" is included.
             */
            preview_invoice?: string;
          }

          type Status = 'canceled' | 'committed' | 'draft' | 'reserved';

          interface StatusTransitions {
            /**
             * Time at which the Billing Intent was canceled.
             */
            canceled_at?: string;

            /**
             * Time at which the Billing Intent was committed.
             */
            committed_at?: string;

            /**
             * Time at which the Billing Intent was drafted.
             */
            drafted_at?: string;

            /**
             * Time at which the Billing Intent will expire.
             */
            expires_at: string;

            /**
             * Time at which the Billing Intent was reserved.
             */
            reserved_at?: string;
          }
        }
      }
    }
  }
}
