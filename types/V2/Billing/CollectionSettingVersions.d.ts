// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The CollectionSettingVersion object.
         */
        interface CollectionSettingVersion {
          /**
           * The ID of the CollectionSettingVersion object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.collection_setting_version';

          /**
           * Either automatic, or send_invoice. When charging automatically, Stripe will attempt to pay this
           * bill at the end of the period using the payment method attached to the payer profile. When sending an invoice,
           * Stripe will email your payer profile an invoice with payment instructions.
           * Defaults to automatic.
           */
          collection_method: CollectionSettingVersion.CollectionMethod | null;

          /**
           * Timestamp of when the object was created.
           */
          created: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * The ID of the PaymentMethodConfiguration object, which controls which payment methods are displayed to your customers.
           */
          payment_method_configuration: string | null;

          /**
           * Payment Method specific configuration stored on the object.
           */
          payment_method_options: CollectionSettingVersion.PaymentMethodOptions | null;
        }

        namespace CollectionSettingVersion {
          type CollectionMethod = 'automatic' | 'send_invoice';

          interface PaymentMethodOptions {
            /**
             * This sub-hash contains details about the Canadian pre-authorized debit payment method options.
             */
            acss_debit: PaymentMethodOptions.AcssDebit | null;

            /**
             * This sub-hash contains details about the Bancontact payment method.
             */
            bancontact: PaymentMethodOptions.Bancontact | null;

            /**
             * This sub-hash contains details about the Card payment method options.
             */
            card: PaymentMethodOptions.Card | null;

            /**
             * This sub-hash contains details about the Bank transfer payment method options.
             */
            customer_balance: PaymentMethodOptions.CustomerBalance | null;

            /**
             * This sub-hash contains details about the Konbini payment method options.
             */
            konbini: PaymentMethodOptions.Konbini | null;

            /**
             * This sub-hash contains details about the SEPA Direct Debit payment method options.
             */
            sepa_debit: PaymentMethodOptions.SepaDebit | null;

            /**
             * This sub-hash contains details about the ACH direct debit payment method options.
             */
            us_bank_account: PaymentMethodOptions.UsBankAccount | null;
          }

          namespace PaymentMethodOptions {
            interface AcssDebit {
              /**
               * Additional fields for Mandate creation.
               */
              mandate_options: AcssDebit.MandateOptions | null;

              /**
               * Verification method.
               */
              verification_method: AcssDebit.VerificationMethod | null;
            }

            namespace AcssDebit {
              interface MandateOptions {
                /**
                 * Transaction type of the mandate.
                 */
                transaction_type: MandateOptions.TransactionType | null;
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
              preferred_language: Bancontact.PreferredLanguage | null;
            }

            namespace Bancontact {
              type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
            }

            interface Card {
              /**
               * Configuration options for setting up an eMandate for cards issued in India.
               */
              mandate_options: Card.MandateOptions | null;

              /**
               * Selected network to process the payment on. Depends on the available networks of the card.
               */
              network: string | null;

              /**
               * An advanced option 3D Secure. We strongly recommend that you rely on our SCA Engine to automatically prompt your customers
               * for authentication based on risk level and [other requirements](https://docs.corp.stripe.com/strong-customer-authentication).
               * However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option.
               * Read our guide on [manually requesting 3D Secure](https://docs.corp.stripe.com/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
               */
              request_three_d_secure: Card.RequestThreeDSecure | null;
            }

            namespace Card {
              interface MandateOptions {
                /**
                 * Amount to be charged for future payments.
                 */
                amount: number | null;

                /**
                 * The AmountType for the mandate. One of `fixed` or `maximum`.
                 */
                amount_type: MandateOptions.AmountType | null;

                /**
                 * A description of the mandate that is meant to be displayed to the customer.
                 */
                description: string | null;
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
              bank_transfer: CustomerBalance.BankTransfer | null;

              /**
               * The funding method type to be used when there are not enough funds in the customer balance. Currently the only supported value is `bank_transfer`.
               */
              funding_type: 'bank_transfer' | null;
            }

            namespace CustomerBalance {
              interface BankTransfer {
                /**
                 * Configuration for `eu_bank_transfer` funding type. Required if `type` is `eu_bank_transfer`.
                 */
                eu_bank_transfer: BankTransfer.EuBankTransfer | null;

                /**
                 * The bank transfer type that can be used for funding.
                 */
                type: BankTransfer.Type | null;
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
                filters: FinancialConnections.Filters | null;

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
