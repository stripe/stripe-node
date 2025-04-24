// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        namespace Vault {
          /**
           * Use the USBankAccounts API to create and manage US bank accounts objects that you can use to receive funds. Note that these are not interchangeable with v1 Tokens.
           */
          interface UsBankAccount {
            /**
             * The ID of the USBankAccount object.
             */
            id: string;

            /**
             * String representing the object's type. Objects of the same type share the same value of the object field.
             */
            object: 'v2.core.vault.us_bank_account';

            /**
             * Whether this USBankAccount object was archived.
             */
            archived: boolean;

            /**
             * Closed Enum. The type of bank account (checking or savings).
             */
            bank_account_type: UsBankAccount.BankAccountType;

            /**
             * The name of the bank this bank account belongs to. This field is populated automatically by Stripe based on the routing number.
             */
            bank_name: string;

            /**
             * Creation time of the object.
             */
            created: string;

            /**
             * The fedwire routing number of the bank account.
             */
            fedwire_routing_number: string | null;

            /**
             * The last 4 digits of the account number.
             */
            last4: string;

            /**
             * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
             */
            livemode: boolean;

            /**
             * The ACH routing number of the bank account.
             */
            routing_number: string | null;
          }

          namespace UsBankAccount {
            type BankAccountType = 'checking' | 'savings';
          }
        }
      }
    }
  }
}
