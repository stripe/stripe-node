// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * BillSetting is responsible for settings which dictate generating bills, which include settings for calculating totals on bills, tax on bill items, as well as how to generate and present invoices.
         */
        interface BillSetting {
          /**
           * The ID of the BillSetting object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.bill_setting';

          /**
           * Settings related to calculating a bill.
           */
          calculation: BillSetting.Calculation | null;

          /**
           * Timestamp of when the object was created.
           */
          created: string;

          /**
           * An optional field for adding a display name for the BillSetting object.
           */
          display_name: string | null;

          /**
           * Settings related to invoice behavior.
           */
          invoice: BillSetting.Invoice | null;

          /**
           * The ID of the invoice rendering template to be used when generating invoices.
           */
          invoice_rendering_template: string | null;

          /**
           * The latest version of the current settings object. This will be
           * Updated every time an attribute of the settings is updated.
           */
          latest_version: string;

          /**
           * The current live version of the settings object. This can be different from
           * latest_version if settings are updated without setting live_version='latest'.
           */
          live_version: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * A lookup key used to retrieve settings dynamically from a static string.
           * This may be up to 200 characters.
           */
          lookup_key: string | null;
        }

        namespace BillSetting {
          interface Calculation {
            /**
             * Settings for calculating tax.
             */
            tax: Calculation.Tax | null;
          }

          namespace Calculation {
            interface Tax {
              /**
               * Determines if tax will be calculated automatically based on a PTC or manually based on rules defined by the merchant. Defaults to "manual".
               */
              type: Tax.Type;
            }

            namespace Tax {
              type Type = 'automatic' | 'manual';
            }
          }

          interface Invoice {
            /**
             * The amount of time until the invoice will be overdue for payment.
             */
            time_until_due: Invoice.TimeUntilDue | null;
          }

          namespace Invoice {
            interface TimeUntilDue {
              /**
               * The interval unit for the time until due.
               */
              interval: TimeUntilDue.Interval;

              /**
               * The number of interval units. For example, if interval=day and interval_count=30,
               * the invoice will be due in 30 days.
               */
              interval_count: number;
            }

            namespace TimeUntilDue {
              type Interval = 'day' | 'month' | 'week' | 'year';
            }
          }
        }
      }
    }
  }
}
