// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {MetadataParam, Metadata} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class CadenceResource extends StripeResource {
  /**
   * List Billing Cadences.
   */
  list(
    params?: V2.Billing.CadenceListParams,
    options?: RequestOptions
  ): ApiListPromise<Cadence>;
  list(options?: RequestOptions): ApiListPromise<Cadence>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/cadences',
      methodType: 'list',
      responseSchema: {
        kind: 'object',
        fields: {
          data: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                settings_data: {
                  kind: 'object',
                  fields: {
                    collection: {
                      kind: 'object',
                      fields: {
                        payment_method_options: {
                          kind: 'object',
                          fields: {
                            card: {
                              kind: 'object',
                              fields: {
                                mandate_options: {
                                  kind: 'object',
                                  fields: {amount: {kind: 'int64_string'}},
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }).call(this, ...args);
  }

  /**
   * Create a Billing Cadence object.
   */
  create(
    params: V2.Billing.CadenceCreateParams,
    options?: RequestOptions
  ): Promise<Response<Cadence>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/billing/cadences',
      responseSchema: {
        kind: 'object',
        fields: {
          settings_data: {
            kind: 'object',
            fields: {
              collection: {
                kind: 'object',
                fields: {
                  payment_method_options: {
                    kind: 'object',
                    fields: {
                      card: {
                        kind: 'object',
                        fields: {
                          mandate_options: {
                            kind: 'object',
                            fields: {amount: {kind: 'int64_string'}},
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }).call(this, ...args);
  }

  /**
   * Retrieve a Billing Cadence object.
   */
  retrieve(
    id: string,
    params?: V2.Billing.CadenceRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Cadence>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Cadence>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/cadences/{id}',
      responseSchema: {
        kind: 'object',
        fields: {
          settings_data: {
            kind: 'object',
            fields: {
              collection: {
                kind: 'object',
                fields: {
                  payment_method_options: {
                    kind: 'object',
                    fields: {
                      card: {
                        kind: 'object',
                        fields: {
                          mandate_options: {
                            kind: 'object',
                            fields: {amount: {kind: 'int64_string'}},
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }).call(this, ...args);
  }

  /**
   * Update a Billing Cadence object.
   */
  update(
    id: string,
    params?: V2.Billing.CadenceUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Cadence>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/billing/cadences/{id}',
      responseSchema: {
        kind: 'object',
        fields: {
          settings_data: {
            kind: 'object',
            fields: {
              collection: {
                kind: 'object',
                fields: {
                  payment_method_options: {
                    kind: 'object',
                    fields: {
                      card: {
                        kind: 'object',
                        fields: {
                          mandate_options: {
                            kind: 'object',
                            fields: {amount: {kind: 'int64_string'}},
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }).call(this, ...args);
  }

  /**
   * Cancel the Billing Cadence.
   */
  cancel(
    id: string,
    params?: V2.Billing.CadenceCancelParams,
    options?: RequestOptions
  ): Promise<Response<Cadence>>;
  cancel(id: string, options?: RequestOptions): Promise<Response<Cadence>>;
  cancel(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/billing/cadences/{id}/cancel',
      responseSchema: {
        kind: 'object',
        fields: {
          settings_data: {
            kind: 'object',
            fields: {
              collection: {
                kind: 'object',
                fields: {
                  payment_method_options: {
                    kind: 'object',
                    fields: {
                      card: {
                        kind: 'object',
                        fields: {
                          mandate_options: {
                            kind: 'object',
                            fields: {amount: {kind: 'int64_string'}},
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }).call(this, ...args);
  }
}
export interface Cadence {
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
  billing_cycle: V2.Billing.Cadence.BillingCycle;

  /**
   * Timestamp of when the object was created.
   */
  created: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * A lookup key used to retrieve cadences dynamically from a static string. Maximum length of 200 characters.
   */
  lookup_key?: string;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * The date that the billing cadence will next bill. Null if the cadence is not active.
   */
  next_billing_date?: string;

  /**
   * The payer determines the entity financially responsible for the bill.
   */
  payer: V2.Billing.Cadence.Payer;

  /**
   * The settings associated with the cadence.
   */
  settings?: V2.Billing.Cadence.Settings;

  /**
   * Settings data that contains expanded billing settings configuration with actual values.
   */
  settings_data?: V2.Billing.Cadence.SettingsData;

  /**
   * The current status of the cadence.
   */
  status: V2.Billing.Cadence.Status;

  /**
   * The ID of the Test Clock.
   */
  test_clock?: string;
}
export namespace V2 {
  export namespace Billing {
    export namespace Cadence {
      export interface BillingCycle {
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

      export interface Payer {
        /**
         * The ID of the Billing Profile object which determines how a bill will be paid.
         */
        billing_profile: string;

        /**
         * The ID of the Customer object.
         */
        customer?: string;

        /**
         * A string identifying the type of the payer. Currently the only supported value is `customer`.
         */
        type: 'customer';
      }

      export interface Settings {
        /**
         * Settings that configure bills generation, which includes calculating totals, tax, and presenting invoices.
         */
        bill?: Settings.Bill;

        /**
         * Settings that configure and manage the behavior of collecting payments.
         */
        collection?: Settings.Collection;
      }

      export interface SettingsData {
        /**
         * Expanded bill settings data with actual configuration values.
         */
        bill: SettingsData.Bill;

        /**
         * Expanded collection settings data with actual configuration values.
         */
        collection: SettingsData.Collection;
      }

      export type Status = 'active' | 'canceled';

      export namespace BillingCycle {
        export type Type = 'day' | 'month' | 'week' | 'year';

        export interface Day {
          /**
           * The time at which the billing cycle ends.
           */
          time: Day.Time;
        }

        export interface Month {
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

        export interface Week {
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

        export interface Year {
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

        export namespace Day {
          export interface Time {
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

        export namespace Month {
          export interface Time {
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

        export namespace Week {
          export interface Time {
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

        export namespace Year {
          export interface Time {
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

      export namespace Settings {
        export interface Bill {
          /**
           * The ID of the referenced settings object.
           */
          id: string;

          /**
           * Returns the Settings Version when the cadence is pinned to a specific version.
           */
          version?: string;
        }

        export interface Collection {
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

      export namespace SettingsData {
        export interface Bill {
          /**
           * Settings related to calculating a bill.
           */
          calculation: Bill.Calculation;

          /**
           * Settings related to invoice behavior.
           */
          invoice: Bill.Invoice;

          /**
           * The ID of the invoice rendering template to be used when generating invoices.
           */
          invoice_rendering_template?: string;
        }

        export interface Collection {
          /**
           * Either automatic, or send_invoice. When charging automatically, Stripe will attempt to pay this
           * bill at the end of the period using the payment method attached to the payer profile. When sending an invoice,
           * Stripe will email your payer profile an invoice with payment instructions.
           * Defaults to automatic.
           */
          collection_method: Collection.CollectionMethod;

          /**
           * Email delivery settings.
           */
          email_delivery: Collection.EmailDelivery;

          /**
           * The ID of the PaymentMethodConfiguration object, which controls which payment methods are displayed to your customers.
           */
          payment_method_configuration: string;

          /**
           * Payment Method specific configuration stored on the object.
           */
          payment_method_options: Collection.PaymentMethodOptions;
        }

        export namespace Bill {
          export interface Calculation {
            /**
             * Settings for calculating tax.
             */
            tax?: Calculation.Tax;
          }

          export interface Invoice {
            /**
             * The amount of time until the invoice will be overdue for payment.
             */
            time_until_due?: Invoice.TimeUntilDue;
          }

          export namespace Calculation {
            export interface Tax {
              /**
               * Determines if tax will be calculated automatically based on a PTC or manually based on rules defined by the merchant. Defaults to "manual".
               */
              type: Tax.Type;
            }

            export namespace Tax {
              export type Type = 'automatic' | 'manual';
            }
          }

          export namespace Invoice {
            export interface TimeUntilDue {
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

            export namespace TimeUntilDue {
              export type Interval = 'day' | 'month' | 'week' | 'year';
            }
          }
        }

        export namespace Collection {
          export type CollectionMethod = 'automatic' | 'send_invoice';

          export interface EmailDelivery {
            /**
             * Controls emails for when the payment is due. For example after the invoice is finalized and transitions to Open state.
             */
            payment_due?: EmailDelivery.PaymentDue;
          }

          export interface PaymentMethodOptions {
            /**
             * This sub-hash contains details about the Canadian pre-authorized debit payment method options.
             */
            acss_debit?: PaymentMethodOptions.AcssDebit;

            /**
             * This sub-hash contains details about the Bancontact payment method.
             */
            bancontact?: PaymentMethodOptions.Bancontact;

            /**
             * This sub-hash contains details about the Card payment method options.
             */
            card?: PaymentMethodOptions.Card;

            /**
             * This sub-hash contains details about the Bank transfer payment method options.
             */
            customer_balance?: PaymentMethodOptions.CustomerBalance;

            /**
             * This sub-hash contains details about the Konbini payment method options.
             */
            konbini?: PaymentMethodOptions.Konbini;

            /**
             * This sub-hash contains details about the SEPA Direct Debit payment method options.
             */
            sepa_debit?: PaymentMethodOptions.SepaDebit;

            /**
             * This sub-hash contains details about the ACH direct debit payment method options.
             */
            us_bank_account?: PaymentMethodOptions.UsBankAccount;
          }

          export namespace EmailDelivery {
            export interface PaymentDue {
              /**
               * If true an email for the invoice would be generated and sent out.
               */
              enabled: boolean;

              /**
               * If true the payment link to hosted invoice page would be included in email and PDF of the invoice.
               */
              include_payment_link: boolean;
            }
          }

          export namespace PaymentMethodOptions {
            export interface AcssDebit {
              /**
               * Additional fields for Mandate creation.
               */
              mandate_options?: AcssDebit.MandateOptions;

              /**
               * Verification method.
               */
              verification_method?: AcssDebit.VerificationMethod;
            }

            export interface Bancontact {
              /**
               * Preferred language of the Bancontact authorization page that the customer is redirected to.
               */
              preferred_language?: Bancontact.PreferredLanguage;
            }

            export interface Card {
              /**
               * Configuration options for setting up an eMandate for cards issued in India.
               */
              mandate_options?: Card.MandateOptions;

              /**
               * Selected network to process the payment on. Depends on the available networks of the card.
               */
              network?: string;

              /**
               * An advanced option 3D Secure. We strongly recommend that you rely on our SCA Engine to automatically prompt your customers
               * for authentication based on risk level and [other requirements](https://docs.stripe.com/strong-customer-authentication).
               * However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option.
               * Read our guide on [manually requesting 3D Secure](https://docs.stripe.com/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
               */
              request_three_d_secure?: Card.RequestThreeDSecure;
            }

            export interface CustomerBalance {
              /**
               * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
               */
              bank_transfer?: CustomerBalance.BankTransfer;

              /**
               * The funding method type to be used when there are not enough funds in the customer balance. Currently the only supported value is `bank_transfer`.
               */
              funding_type?: 'bank_transfer';
            }

            export type Konbini = {
              [key: string]: unknown;
            };

            export type SepaDebit = {
              [key: string]: unknown;
            };

            export interface UsBankAccount {
              /**
               * Additional fields for Financial Connections Session creation.
               */
              financial_connections: UsBankAccount.FinancialConnections;

              /**
               * Verification method.
               */
              verification_method: UsBankAccount.VerificationMethod;
            }

            export namespace AcssDebit {
              export interface MandateOptions {
                /**
                 * Transaction type of the mandate.
                 */
                transaction_type?: MandateOptions.TransactionType;
              }

              export type VerificationMethod =
                | 'automatic'
                | 'instant'
                | 'microdeposits';

              export namespace MandateOptions {
                export type TransactionType = 'business' | 'personal';
              }
            }

            export namespace Bancontact {
              export type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
            }

            export namespace Card {
              export interface MandateOptions {
                /**
                 * Amount to be charged for future payments.
                 */
                amount?: bigint;

                /**
                 * The AmountType for the mandate. One of `fixed` or `maximum`.
                 */
                amount_type?: MandateOptions.AmountType;

                /**
                 * A description of the mandate that is meant to be displayed to the customer.
                 */
                description?: string;
              }

              export type RequestThreeDSecure =
                | 'any'
                | 'automatic'
                | 'challenge';

              export namespace MandateOptions {
                export type AmountType = 'fixed' | 'maximum';
              }
            }

            export namespace CustomerBalance {
              export interface BankTransfer {
                /**
                 * Configuration for `eu_bank_transfer` funding type. Required if `type` is `eu_bank_transfer`.
                 */
                eu_bank_transfer?: BankTransfer.EuBankTransfer;

                /**
                 * The bank transfer type that can be used for funding.
                 */
                type?: BankTransfer.Type;
              }

              export namespace BankTransfer {
                export interface EuBankTransfer {
                  /**
                   * The desired country code of the bank account information.
                   */
                  country: EuBankTransfer.Country;
                }

                export type Type =
                  | 'eu_bank_transfer'
                  | 'gb_bank_transfer'
                  | 'jp_bank_transfer'
                  | 'mx_bank_transfer'
                  | 'us_bank_transfer';

                export namespace EuBankTransfer {
                  export type Country = 'BE' | 'DE' | 'ES' | 'FR' | 'IE' | 'NL';
                }
              }
            }

            export namespace UsBankAccount {
              export interface FinancialConnections {
                /**
                 * Provide filters for the linked accounts that the customer can select for the payment method.
                 */
                filters?: FinancialConnections.Filters;

                /**
                 * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included.
                 */
                permissions: Array<FinancialConnections.Permission>;

                /**
                 * List of data features that you would like to retrieve upon account creation.
                 */
                prefetch: Array<FinancialConnections.Prefetch>;
              }

              export type VerificationMethod =
                | 'automatic'
                | 'instant'
                | 'microdeposits';

              export namespace FinancialConnections {
                export interface Filters {
                  /**
                   * The account subcategories to use to filter for selectable accounts.
                   */
                  account_subcategories: Array<Filters.AccountSubcategory>;
                }

                export type Permission =
                  | 'balances'
                  | 'ownership'
                  | 'payment_method'
                  | 'transactions';

                export type Prefetch =
                  | 'balances'
                  | 'ownership'
                  | 'transactions';

                export namespace Filters {
                  export type AccountSubcategory = 'checking' | 'savings';
                }
              }
            }
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface CadenceCreateParams {
      /**
       * The billing cycle is the object that defines future billing cycle dates.
       */
      billing_cycle: CadenceCreateParams.BillingCycle;

      /**
       * The payer determines the entity financially responsible for the bill.
       */
      payer: CadenceCreateParams.Payer;

      /**
       * A lookup key used to retrieve cadences dynamically from a static string. Maximum length of 200 characters.
       */
      lookup_key?: string;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;

      /**
       * The settings associated with the cadence.
       */
      settings?: CadenceCreateParams.Settings;
    }

    export namespace CadenceCreateParams {
      export interface BillingCycle {
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

      export interface Payer {
        /**
         * The ID of the Billing Profile object which determines how a bill will be paid.
         */
        billing_profile: string;
      }

      export interface Settings {
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

      export namespace BillingCycle {
        export type Type = 'day' | 'month' | 'week' | 'year';

        export interface Day {
          /**
           * The time at which the billing cycle ends.
           * This field is optional, and if not provided, it will default to
           * the time at which the cadence was created in UTC timezone.
           */
          time?: Day.Time;
        }

        export interface Month {
          /**
           * The day to anchor the billing on for a type="month" billing cycle from
           * 1-31. If this number is greater than the number of days in the month being
           * billed, this will anchor to the last day of the month. If not provided,
           * this will default to the day the cadence was created.
           */
          day_of_month: number;

          /**
           * The month to anchor the billing on for a type="month" billing cycle from
           * 1-12. If not provided, this will default to the month the cadence was created.
           * This setting can only be used for monthly billing cycles with `interval_count` of 2, 3, 4 or 6.
           * All occurrences will be calculated from month provided.
           */
          month_of_year?: number;

          /**
           * The time at which the billing cycle ends.
           * This field is optional, and if not provided, it will default to
           * the time at which the cadence was created in UTC timezone.
           */
          time?: Month.Time;
        }

        export interface Week {
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

        export interface Year {
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

        export namespace Day {
          export interface Time {
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
            second: number;
          }
        }

        export namespace Month {
          export interface Time {
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
            second: number;
          }
        }

        export namespace Week {
          export interface Time {
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
            second: number;
          }
        }

        export namespace Year {
          export interface Time {
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
            second: number;
          }
        }
      }

      export namespace Settings {
        export interface Bill {
          /**
           * The ID of the referenced settings object.
           */
          id: string;

          /**
           * An optional field to specify the version of the Settings to use.
           * If not provided, this will always default to the live version any time the settings are used.
           */
          version?: string;
        }

        export interface Collection {
          /**
           * The ID of the referenced settings object.
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
}
export namespace V2 {
  export namespace Billing {
    export interface CadenceRetrieveParams {
      /**
       * Additional resource to include in the response.
       */
      include?: Array<'settings_data'>;
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface CadenceUpdateParams {
      /**
       * A lookup key used to retrieve cadences dynamically from a static string. Maximum length of 200 characters.
       */
      lookup_key?: string;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;

      /**
       * The payer determines the entity financially responsible for the bill.
       */
      payer?: CadenceUpdateParams.Payer;

      /**
       * The settings associated with the cadence.
       */
      settings?: CadenceUpdateParams.Settings;
    }

    export namespace CadenceUpdateParams {
      export interface Payer {
        /**
         * The ID of the Billing Profile object which determines how a bill will be paid.
         */
        billing_profile?: string;
      }

      export interface Settings {
        /**
         * Settings that configure bills generation, which includes calculating totals, tax, and presenting invoices. If null is provided, the current bill settings will be removed from the billing cadence.
         */
        bill?: Settings.Bill;

        /**
         * Settings that configure and manage the behavior of collecting payments. If null is provided, the current collection settings will be removed from the billing cadence.
         */
        collection?: Settings.Collection;
      }

      export namespace Settings {
        export interface Bill {
          /**
           * The ID of the referenced settings object.
           */
          id: string;

          /**
           * An optional field to specify the version of Settings to use.
           * If not provided, this will always default to the `live_version` specified on the setting, any time the settings are used.
           * Using a specific version here will prevent the settings from updating, and is discouraged for cadences.
           * To clear a pinned version, set the version to null.
           */
          version?: string;
        }

        export interface Collection {
          /**
           * The ID of the referenced settings object.
           */
          id: string;

          /**
           * An optional field to specify the version of Settings to use.
           * If not provided, this will always default to the `live_version` specified on the setting, any time the settings are used.
           * Using a specific version here will prevent the settings from updating, and is discouraged for cadences.
           * To clear a pinned version, set the version to null.
           */
          version?: string;
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface CadenceListParams {
      /**
       * Additional resource to include in the response.
       */
      include?: Array<'settings_data'>;

      /**
       * Optionally set the maximum number of results per page. Defaults to 20.
       */
      limit?: number;

      /**
       * Only return the cadences with these lookup_keys, if any exist. You can specify up to 10 lookup_keys.
       * Mutually exclusive with `test_clock` and `payer`.
       */
      lookup_keys?: Array<string>;

      /**
       * If provided, only cadences that specifically reference the payer will be returned. Mutually exclusive with `test_clock` and `lookup_keys`.
       */
      payer?: CadenceListParams.Payer;

      /**
       * If provided, only cadences that specifically reference the provided test clock ID (via the
       * customer's test clock) will be returned.
       * Mutually exclusive with `payer`.
       */
      test_clock?: string;
    }

    export namespace CadenceListParams {
      export interface Payer {
        /**
         * The ID of the Customer object. If provided, only cadences that specifically reference the provided customer ID will be returned.
         */
        customer?: string;

        /**
         * A string identifying the type of the payer. Currently the only supported value is `customer`.
         */
        type: 'customer';
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface CadenceCancelParams {}
  }
}
