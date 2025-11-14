// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * Settings that configure and manage the behavior of collecting payments.
         */
        interface CollectionSetting {
          /**
           * The ID of the CollectionSetting.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.collection_setting';

          /**
           * Either automatic, or send_invoice. When charging automatically, Stripe will attempt to pay this
           * bill at the end of the period using the payment method attached to the payer profile. When sending an invoice,
           * Stripe will email your payer profile an invoice with payment instructions.
           * Defaults to automatic.
           */
          collection_method?: CollectionSetting.CollectionMethod;

          /**
           * Timestamp of when the object was created.
           */
          created: string;

          /**
           * An optional field for adding a display name for the CollectionSetting object.
           */
          display_name?: string;

          /**
           * Email delivery settings.
           */
          email_delivery?: CollectionSetting.EmailDelivery;

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
          lookup_key?: string;

          /**
           * The ID of the PaymentMethodConfiguration object, which controls which payment methods are displayed to your customers.
           */
          payment_method_configuration?: string;

          /**
           * Payment Method specific configuration stored on the object.
           */
          payment_method_options?: CollectionSetting.PaymentMethodOptions;
        }

        namespace CollectionSetting {
          type CollectionMethod = 'automatic' | 'send_invoice';

          interface EmailDelivery {
            /**
             * Controls emails for when the payment is due. For example after the invoice is finalized and transitions to Open state.
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
               * If true the payment link to hosted invoice page would be included in email and PDF of the invoice.
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
               * for authentication based on risk level and [other requirements](https://docs.stripe.com/strong-customer-authentication).
               * However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option.
               * Read our guide on [manually requesting 3D Secure](https://docs.stripe.com/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
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

            type Konbini = {
              [key: string]: unknown;
            };

            type SepaDebit = {
              [key: string]: unknown;
            };

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
    }
  }
}
