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
           * A lookup key used to retrieve cadences dynamically from a static string. Maximum length of 200 characters.
           */
          lookup_key?: string;

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
           * Settings data that contains expanded billing settings configuration with actual values.
           */
          settings_data?: Cadence.SettingsData;

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

          interface SettingsData {
            /**
             * Expanded bill settings data with actual configuration values.
             */
            bill: SettingsData.Bill;

            /**
             * Expanded collection settings data with actual configuration values.
             */
            collection: SettingsData.Collection;
          }

          namespace SettingsData {
            interface Bill {
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

            namespace Bill {
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

            interface Collection {
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

            namespace Collection {
              type CollectionMethod = 'automatic' | 'send_invoice';

              interface EmailDelivery {
                /**
                 * Controls emails for when the payment is due. For example after the invoice is finilized and transition to Open state.
                 */
                payment_due?: EmailDelivery.PaymentDue;
              }

              namespace EmailDelivery {
                interface PaymentDue {
                  /**
                   * If true an email for the invoice would be generated and sent out.
                   */
                  enabled: boolean;

                  /**
                   * If true the payment link to hosted invocie page would be included in email and PDF of the invoice.
                   */
                  include_payment_link: boolean;
                }
              }

              interface PaymentMethodOptions {
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

              namespace PaymentMethodOptions {
                interface AcssDebit {
                  /**
                   * Additional fields for Mandate creation.
                   */
                  mandate_options?: AcssDebit.MandateOptions;

                  /**
                   * Verification method.
                   */
                  verification_method?: AcssDebit.VerificationMethod;
                }

                namespace AcssDebit {
                  interface MandateOptions {
                    /**
                     * Transaction type of the mandate.
                     */
                    transaction_type?: MandateOptions.TransactionType;
                  }

                  namespace MandateOptions {
                    type TransactionType = 'business' | 'personal';
                  }

                  type VerificationMethod =
                    | 'automatic'
                    | 'instant'
                    | 'microdeposits';
                }

                interface Bancontact {
                  /**
                   * Preferred language of the Bancontact authorization page that the customer is redirected to.
                   */
                  preferred_language?: Bancontact.PreferredLanguage;
                }

                namespace Bancontact {
                  type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
                }

                interface Card {
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
                   * for authentication based on risk level and [other requirements](https://docs.corp.stripe.com/strong-customer-authentication).
                   * However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option.
                   * Read our guide on [manually requesting 3D Secure](https://docs.corp.stripe.com/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
                   */
                  request_three_d_secure?: Card.RequestThreeDSecure;
                }

                namespace Card {
                  interface MandateOptions {
                    /**
                     * Amount to be charged for future payments.
                     */
                    amount?: number;

                    /**
                     * The AmountType for the mandate. One of `fixed` or `maximum`.
                     */
                    amount_type?: MandateOptions.AmountType;

                    /**
                     * A description of the mandate that is meant to be displayed to the customer.
                     */
                    description?: string;
                  }

                  namespace MandateOptions {
                    type AmountType = 'fixed' | 'maximum';
                  }

                  type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';
                }

                interface CustomerBalance {
                  /**
                   * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
                   */
                  bank_transfer?: CustomerBalance.BankTransfer;

                  /**
                   * The funding method type to be used when there are not enough funds in the customer balance. Currently the only supported value is `bank_transfer`.
                   */
                  funding_type?: 'bank_transfer';
                }

                namespace CustomerBalance {
                  interface BankTransfer {
                    /**
                     * Configuration for `eu_bank_transfer` funding type. Required if `type` is `eu_bank_transfer`.
                     */
                    eu_bank_transfer?: BankTransfer.EuBankTransfer;

                    /**
                     * The bank transfer type that can be used for funding.
                     */
                    type?: BankTransfer.Type;
                  }

                  namespace BankTransfer {
                    interface EuBankTransfer {
                      /**
                       * The desired country code of the bank account information.
                       */
                      country: EuBankTransfer.Country;
                    }

                    namespace EuBankTransfer {
                      type Country = 'BE' | 'DE' | 'ES' | 'FR' | 'IE' | 'NL';
                    }

                    type Type =
                      | 'eu_bank_transfer'
                      | 'gb_bank_transfer'
                      | 'jp_bank_transfer'
                      | 'mx_bank_transfer'
                      | 'us_bank_transfer';
                  }
                }

                interface Konbini {}

                interface SepaDebit {}

                interface UsBankAccount {
                  /**
                   * Additional fields for Financial Connections Session creation.
                   */
                  financial_connections: UsBankAccount.FinancialConnections;

                  /**
                   * Verification method.
                   */
                  verification_method: UsBankAccount.VerificationMethod;
                }

                namespace UsBankAccount {
                  interface FinancialConnections {
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

                  namespace FinancialConnections {
                    interface Filters {
                      /**
                       * The account subcategories to use to filter for selectable accounts.
                       */
                      account_subcategories: Array<Filters.AccountSubcategory>;
                    }

                    namespace Filters {
                      type AccountSubcategory = 'checking' | 'savings';
                    }

                    type Permission =
                      | 'balances'
                      | 'ownership'
                      | 'payment_method'
                      | 'transactions';

                    type Prefetch = 'balances' | 'ownership' | 'transactions';
                  }

                  type VerificationMethod =
                    | 'automatic'
                    | 'instant'
                    | 'microdeposits';
                }
              }
            }
          }

          type Status = 'active' | 'canceled';
        }
      }
    }
  }
}
