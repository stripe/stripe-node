// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface BillSettingCreateParams {
          /**
           * Settings related to calculating a bill.
           */
          calculation?: BillSettingCreateParams.Calculation;

          /**
           * An optional customer-facing display name for the CollectionSetting object.
           * Maximum length of 250 characters.
           */
          display_name?: string;

          /**
           * Settings related to invoice behavior.
           */
          invoice?: BillSettingCreateParams.Invoice;

          /**
           * The ID of the invoice rendering template to be used when generating invoices.
           */
          invoice_rendering_template?: string;

          /**
           * A lookup key used to retrieve settings dynamically from a static string.
           * This may be up to 200 characters.
           */
          lookup_key?: string;
        }

        namespace BillSettingCreateParams {
          interface Calculation {
            /**
             * Settings for calculating tax.
             */
            tax?: Calculation.Tax;
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
            time_until_due?: Invoice.TimeUntilDue;
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

      namespace Billing {
        interface BillSettingRetrieveParams {}
      }

      namespace Billing {
        interface BillSettingUpdateParams {
          /**
           * Settings related to calculating a bill.
           */
          calculation?: BillSettingUpdateParams.Calculation;

          /**
           * An optional customer-facing display name for the BillSetting object.
           * To remove the display name, set it to an empty string in the request.
           * Maximum length of 250 characters.
           */
          display_name?: string;

          /**
           * Settings related to invoice behavior.
           */
          invoice?: BillSettingUpdateParams.Invoice;

          /**
           * The ID of the invoice rendering template to be used when generating invoices.
           */
          invoice_rendering_template?: string;

          /**
           * Optionally change the live version of the BillSetting. Providing `live_version = "latest"` will set the
           * BillSetting' `live_version` to its latest version.
           */
          live_version?: string;

          /**
           * A lookup key used to retrieve settings dynamically from a static string.
           * This may be up to 200 characters.
           */
          lookup_key?: string;
        }

        namespace BillSettingUpdateParams {
          interface Calculation {
            /**
             * Settings for calculating tax.
             */
            tax?: Calculation.Tax;
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
            time_until_due?: Invoice.TimeUntilDue;
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

      namespace Billing {
        interface BillSettingListParams {
          /**
           * Optionally set the maximum number of results per page. Defaults to 20.
           */
          limit?: number;

          /**
           * Only return the settings with these lookup_keys, if any exist.
           * You can specify up to 10 lookup_keys.
           */
          lookup_keys?: Array<string>;
        }
      }

      namespace Billing {
        class BillSettingsResource {
          versions: Stripe.V2.Billing.BillSettings.VersionsResource;

          /**
           * Create a BillSetting object.
           */
          create(
            params?: BillSettingCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.BillSetting>>;
          create(
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.BillSetting>>;

          /**
           * Retrieve a BillSetting object by ID.
           */
          retrieve(
            id: string,
            params?: BillSettingRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.BillSetting>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.BillSetting>>;

          /**
           * Update fields on an existing BillSetting object.
           */
          update(
            id: string,
            params?: BillSettingUpdateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.BillSetting>>;

          /**
           * List all BillSetting objects.
           */
          list(
            params?: BillSettingListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.BillSetting>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.BillSetting>;
        }
      }
    }
  }
}
