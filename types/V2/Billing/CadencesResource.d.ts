// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface CadenceCreateParams {
          /**
           * The billing cycle is the object that defines future billing cycle dates.
           */
          billing_cycle: CadenceCreateParams.BillingCycle;

          /**
           * The payer determines the entity financially responsible for the bill.
           */
          payer: CadenceCreateParams.Payer;

          /**
           * Additional resource to include in the response.
           */
          include?: Array<'invoice_discount_rules'>;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful
           * for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * The settings associated with the cadence.
           */
          settings?: CadenceCreateParams.Settings;
        }

        namespace CadenceCreateParams {
          interface BillingCycle {
            /**
             * The number of intervals (specified in the interval attribute) between
             * cadence billings. For example, type=month and interval_count=3 bills every
             * 3 months. If this is not provided, it will default to 1.
             */
            interval_count?: number;

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
               * This field is optional, and if not provided, it will default to
               * the time at which the cadence was created in UTC timezone.
               */
              time?: Day.Time;
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
                 * Will default to the minute the cadence was created in UTC timezone.
                 */
                minute?: number;
              }
            }

            interface Month {
              /**
               * The day to anchor the billing on for a type="month" billing cycle from
               * 1-31. If this number is greater than the number of days in the month being
               * billed, this will anchor to the last day of the month. If not provided,
               * this will default to the day the cadence was created.
               */
              day_of_month: number;

              /**
               * The time at which the billing cycle ends.
               * This field is optional, and if not provided, it will default to
               * the time at which the cadence was created in UTC timezone.
               */
              time?: Month.Time;
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
                 * Will default to the minute the cadence was created in UTC timezone.
                 */
                minute?: number;
              }
            }

            type Type = 'day' | 'month' | 'week' | 'year';

            interface Week {
              /**
               * The day of the week to bill the type=week billing cycle on.
               * Numbered from 1-7 for Monday to Sunday respectively, based on the ISO-8601
               * week day numbering. If not provided, this will default to the day the
               * cadence was created.
               */
              day_of_week: number;

              /**
               * The time at which the billing cycle ends.
               * This field is optional, and if not provided, it will default to
               * the time at which the cadence was created in UTC timezone.
               */
              time?: Week.Time;
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
                 * Will default to the minute the cadence was created in UTC timezone.
                 */
                minute?: number;
              }
            }

            interface Year {
              /**
               * The day to anchor the billing on for a type="month" billing cycle from
               * 1-31. If this number is greater than the number of days in the month being
               * billed, this will anchor to the last day of the month. If not provided,
               * this will default to the day the cadence was created.
               */
              day_of_month?: number;

              /**
               * The month to bill on from 1-12. If not provided, this will default to the
               * month the cadence was created.
               */
              month_of_year?: number;

              /**
               * The time at which the billing cycle ends.
               * This field is optional, and if not provided, it will default to
               * the time at which the cadence was created in UTC timezone.
               */
              time?: Year.Time;
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
                 * Will default to the minute the cadence was created in UTC timezone.
                 */
                minute?: number;
              }
            }
          }

          interface Payer {
            /**
             * The ID of the Billing Profile object which determines how a bill will be paid. If provided, the created cadence will be
             * associated with the provided Billing Profile. If not provided, a new Billing Profile will be created and associated with the cadence.
             */
            billing_profile?: string;

            /**
             * The ID of the Customer object.
             */
            customer?: string;

            /**
             * A string identifying the type of the payer. Currently the only supported value is `customer`.
             */
            type?: 'customer';
          }

          interface Settings {
            /**
             * Settings that configure bill generation, which includes calculating totals, tax, and presenting invoices.
             * If no setting is provided here, the settings from the customer referenced on the payer will be used.
             * If no customer settings are present, the merchant default settings will be used.
             */
            bill?: Settings.Bill;

            /**
             * Settings that configure and manage the behavior of collecting payments.
             * If no setting is provided here, the settings from the customer referenced from the payer will be used if they exist.
             * If no customer settings are present, the merchant default settings will be used.
             */
            collection?: Settings.Collection;
          }

          namespace Settings {
            interface Bill {
              /**
               * The ID of the referenced Settings object.
               */
              id: string;

              /**
               * An optional field to specify the version of the Settings to use.
               * If not provided, this will always default to the live version any time the settings are used.
               */
              version?: string;
            }

            interface Collection {
              /**
               * The ID of the referenced Settings object.
               */
              id: string;

              /**
               * An optional field to specify the version of the Settings to use.
               * If not provided, this will always default to the live version any time the settings are used.
               */
              version?: string;
            }
          }
        }
      }

      namespace Billing {
        interface CadenceRetrieveParams {
          /**
           * Additional resource to include in the response.
           */
          include?: Array<'invoice_discount_rules'>;
        }
      }

      namespace Billing {
        interface CadenceUpdateParams {
          /**
           * Additional resource to include in the response.
           */
          include?: Array<'invoice_discount_rules'>;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * The payer determines the entity financially responsible for the bill.
           */
          payer?: CadenceUpdateParams.Payer;

          /**
           * The settings associated with the cadence.
           */
          settings?: CadenceUpdateParams.Settings;
        }

        namespace CadenceUpdateParams {
          interface Payer {
            /**
             * The ID of the Billing Profile object which determines how a bill will be paid.
             */
            billing_profile?: string;
          }

          interface Settings {
            /**
             * Settings that configure bills generation, which includes calculating totals, tax, and presenting invoices. If null is provided, the current bill settings will be removed from the billing cadence.
             */
            bill?: Settings.Bill | null;

            /**
             * Settings that configure and manage the behavior of collecting payments. If null is provided, the current collection settings will be removed from the billing cadence.
             */
            collection?: Settings.Collection | null;
          }

          namespace Settings {
            interface Bill {
              /**
               * The ID of the referenced Settings object.
               */
              id: string;

              /**
               * An optional field to specify the version of Settings to use.
               * If not provided, this will always default to the `live_version` specified on the setting, any time the settings are used.
               * Using a specific version here will prevent the settings from updating, and is discouraged for cadences.
               * To clear a pinned version, set the version to null.
               */
              version?: string | null;
            }

            interface Collection {
              /**
               * The ID of the referenced Settings object.
               */
              id: string;

              /**
               * An optional field to specify the version of Settings to use.
               * If not provided, this will always default to the `live_version` specified on the setting, any time the settings are used.
               * Using a specific version here will prevent the settings from updating, and is discouraged for cadences.
               * To clear a pinned version, set the version to null.
               */
              version?: string | null;
            }
          }
        }
      }

      namespace Billing {
        interface CadenceListParams {
          /**
           * Additional resource to include in the response.
           */
          include?: Array<'invoice_discount_rules'>;

          /**
           * Optionally set the maximum number of results per page. Defaults to 20.
           */
          limit?: number;

          /**
           * If provided, only Cadences that specifically reference the payer will be returned. Mutually exclusive with `test_clock`.
           */
          payer?: CadenceListParams.Payer;

          /**
           * If provided, only Cadences that specifically reference the provided test clock ID (via the
           * customer's test clock) will be returned.
           * Mutually exclusive with `payer`.
           */
          test_clock?: string;
        }

        namespace CadenceListParams {
          interface Payer {
            /**
             * The ID of the Customer object. If provided, only Cadences that specifically reference the provided customer ID will be returned.
             */
            customer?: string;

            /**
             * A string identifying the type of the payer. Currently the only supported value is `customer`.
             */
            type: 'customer';
          }
        }
      }

      namespace Billing {
        interface CadenceCancelParams {
          /**
           * Additional resource to include in the response.
           */
          include?: Array<'invoice_discount_rules'>;
        }
      }

      namespace Billing {
        class CadencesResource {
          /**
           * Create a billing Cadence object.
           */
          create(
            params: CadenceCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Cadence>>;

          /**
           * Retrieve a billing Cadence object.
           */
          retrieve(
            id: string,
            params?: CadenceRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Cadence>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Cadence>>;

          /**
           * Update a billing Cadence object.
           */
          update(
            id: string,
            params?: CadenceUpdateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Cadence>>;

          /**
           * List all the billing Cadences.
           */
          list(
            params?: CadenceListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.Cadence>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.Cadence>;

          /**
           * Cancel the billing cadence.
           */
          cancel(
            id: string,
            params?: CadenceCancelParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Cadence>>;
          cancel(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Cadence>>;
        }
      }
    }
  }
}
