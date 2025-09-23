// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The Cadence object.
         */
        interface Cadence {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.cadence';

          /**
           * The billing cycle is the object that defines future billing cycle dates.
           */
          billing_cycle: Cadence.BillingCycle;

          /**
           * Timestamp of when the object was created.
           */
          created: string;

          /**
           * The discount rules applied to all invoices for the cadence.
           */
          invoice_discount_rules?: Array<Cadence.InvoiceDiscountRule>;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.Metadata;

          /**
           * The date that the billing cadence will next bill. Null if the cadence is not active.
           */
          next_billing_date?: string;

          /**
           * The payer determines the entity financially responsible for the bill.
           */
          payer: Cadence.Payer;

          /**
           * The settings associated with the cadence.
           */
          settings?: Cadence.Settings;

          /**
           * The current status of the cadence.
           */
          status: Cadence.Status;

          /**
           * The ID of the Test Clock.
           */
          test_clock?: string;
        }

        namespace Cadence {
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

          interface InvoiceDiscountRule {
            /**
             * Unique identifier for the object.
             */
            id: string;

            /**
             * The type of the discount.
             */
            type: 'percent_off';

            /**
             * Details if the discount is a percentage off.
             */
            percent_off?: InvoiceDiscountRule.PercentOff;
          }

          namespace InvoiceDiscountRule {
            interface PercentOff {
              /**
               * The maximum applications configuration for this discount.
               */
              maximum_applications: PercentOff.MaximumApplications;

              /**
               * Percent that will be taken off of the amount. For example, percent_off of 50.0 will make $100 amount $50 instead.
               */
              percent_off: string;
            }

            namespace PercentOff {
              interface MaximumApplications {
                /**
                 * Max applications type of this discount, ex: indefinite.
                 */
                type: 'indefinite';
              }
            }
          }

          interface Payer {
            /**
             * The ID of the Billing Profile object which determines how a bill will be paid.
             */
            billing_profile?: string;

            /**
             * The ID of the Customer object.
             */
            customer?: string;

            /**
             * A string identifying the type of the payer. Currently the only supported value is `customer`.
             */
            type: 'customer';
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

          type Status = 'active' | 'canceled';
        }
      }
    }
  }
}
