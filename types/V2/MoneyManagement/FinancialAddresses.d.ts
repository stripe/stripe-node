// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        /**
         * A FinancialAddress contains information needed to transfer money to a Financial Account. A Financial Account can have more than one Financial Address.
         */
        interface FinancialAddress {
          /**
           * The ID of a FinancialAddress.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.money_management.financial_address';

          /**
           * The creation timestamp of the FinancialAddress.
           */
          created: string;

          /**
           * Object indicates the type of credentials that have been allocated and attached to the FinancialAddress.
           * It contains all necessary banking details with which to perform money movements with the FinancialAddress.
           * This field is only available for FinancialAddresses with an active status.
           */
          credentials?: FinancialAddress.Credentials;

          /**
           * Open Enum. The currency the FinancialAddress supports.
           */
          currency: string;

          /**
           * A ID of the FinancialAccount this FinancialAddress corresponds to.
           */
          financial_account: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Open Enum. The currency the FinancialAddress settles into the FinancialAccount.
           */
          settlement_currency?: string;

          /**
           * Closed Enum. An enum representing the status of the FinancialAddress. This indicates whether or not the FinancialAddress can be used for any money movement flows.
           */
          status: FinancialAddress.Status;
        }

        namespace FinancialAddress {
          interface Credentials {
            /**
             * Open Enum. The type of Credentials that are provisioned for the FinancialAddress.
             */
            type: Credentials.Type;

            /**
             * The credentials of the UK Bank Account for the FinancialAddress. This contains unique banking details such as the sort code, account number, etc. of a UK bank account.
             */
            gb_bank_account?: Credentials.GbBankAccount;

            /**
             * The credentials of the SEPA Bank Account for the FinancialAddress. This contains unique banking details such as the IBAN, BIC, etc. of a SEPA bank account.
             */
            sepa_bank_account?: Credentials.SepaBankAccount;

            /**
             * The credentials of the US Bank Account for the FinancialAddress. This contains unique banking details such as the routing number, account number, etc. of a US bank account.
             */
            us_bank_account?: Credentials.UsBankAccount;
          }

          namespace Credentials {
            interface GbBankAccount {
              /**
               * The account holder name to be used during bank transference.
               */
              account_holder_name: string;

              /**
               * The account number of the UK Bank Account.
               */
              account_number?: string;

              /**
               * The last four digits of the UK Bank Account number. This will always be returned.
               * To view the full account number when retrieving or listing FinancialAddresses, use the `include` request parameter.
               */
              last4: string;

              /**
               * The sort code of the UK Bank Account.
               */
              sort_code: string;
            }

            interface SepaBankAccount {
              /**
               * The account holder name to be used during bank transfers.
               */
              account_holder_name: string;

              /**
               * The name of the Bank.
               */
              bank_name: string;

              /**
               * The BIC of the SEPA Bank Account.
               */
              bic: string;

              /**
               * The originating country of the SEPA Bank account.
               */
              country: string;

              /**
               * The IBAN of the SEPA Bank Account.
               */
              iban: string;

              /**
               * The last four digits of the SEPA Bank Account number. This will always be returned.
               * To view the full account number when retrieving or listing FinancialAddresses, use the `include` request parameter.
               */
              last4: string;
            }

            type Type =
              | 'gb_bank_account'
              | 'sepa_bank_account'
              | 'us_bank_account';

            interface UsBankAccount {
              /**
               * The account number of the US Bank Account.
               */
              account_number?: string;

              /**
               * The name of the Bank.
               */
              bank_name?: string;

              /**
               * The last four digits of the US Bank Account number. This will always be returned.
               * To view the full account number when retrieving or listing FinancialAddresses, use the `include` request parameter.
               */
              last4: string;

              /**
               * The routing number of the US Bank Account.
               */
              routing_number: string;

              /**
               * The swift code of the bank or financial institution.
               */
              swift_code?: string;
            }
          }

          type Status = 'active' | 'archived' | 'failed' | 'pending';
        }
      }
    }
  }
}
