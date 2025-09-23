// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        namespace Vault {
          /**
           * Use the GBBankAccounts API to create and manage GB bank account objects
           */
          interface GbBankAccount {
            /**
             * The ID of the GBBankAccount object.
             */
            id: string;

            /**
             * String representing the object's type. Objects of the same type share the same value of the object field.
             */
            object: 'v2.core.vault.gb_bank_account';

            /**
             * Whether this bank account object was archived. Bank account objects can be archived through
             * the /archive API, and they will not be automatically archived by Stripe. Archived bank account objects
             * cannot be used as outbound destinations and will not appear in the outbound destination list.
             */
            archived: boolean;

            /**
             * Closed Enum. The type of the bank account (checking or savings).
             */
            bank_account_type: GbBankAccount.BankAccountType;

            /**
             * The name of the bank.
             */
            bank_name: string;

            /**
             * Information around the status of Confirmation of Payee matching done on this bank account.
             * Confirmation of Payee is a name matching service that must be done before making OutboundPayments in the UK.
             */
            confirmation_of_payee: GbBankAccount.ConfirmationOfPayee;

            /**
             * Creation time.
             */
            created: string;

            /**
             * The last 4 digits of the account number or IBAN.
             */
            last4: string;

            /**
             * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
             */
            livemode: boolean;

            /**
             * The Sort Code of the bank account.
             */
            sort_code: string;
          }

          namespace GbBankAccount {
            type BankAccountType = 'checking' | 'savings';

            interface ConfirmationOfPayee {
              /**
               * The result of the Confirmation of Payee check, once the check has been initiated. Closed enum.
               */
              result: ConfirmationOfPayee.Result;

              /**
               * The current state of Confirmation of Payee on this bank account. Closed enum.
               */
              status: ConfirmationOfPayee.Status;
            }

            namespace ConfirmationOfPayee {
              interface Result {
                /**
                 * When the CoP result was created.
                 */
                created: string;

                /**
                 * Whether or not the information of the bank account matches what you have provided. Closed enum.
                 */
                match_result: Result.MatchResult;

                /**
                 * The fields that CoP service matched against. Only has value if MATCH or PARTIAL_MATCH, empty otherwise.
                 */
                matched: Result.Matched;

                /**
                 * Human-readable message describing the match result.
                 */
                message: string;

                /**
                 * The fields that are matched against what the network has on file.
                 */
                provided: Result.Provided;
              }

              namespace Result {
                interface Matched {
                  /**
                   * The business type given by the bank for this account, in case of a MATCH or PARTIAL_MATCH.
                   * Closed enum.
                   */
                  business_type?: Matched.BusinessType;

                  /**
                   * The name given by the bank for this account, in case of a MATCH or PARTIAL_MATCH.
                   */
                  name?: string;
                }

                namespace Matched {
                  type BusinessType = 'business' | 'personal';
                }

                type MatchResult =
                  | 'match'
                  | 'mismatch'
                  | 'partial_match'
                  | 'unavailable';

                interface Provided {
                  /**
                   * The provided or Legal Entity business type to match against the CoP service. Closed enum.
                   */
                  business_type: Provided.BusinessType;

                  /**
                   * The provided or Legal Entity name to match against the CoP service.
                   */
                  name: string;
                }

                namespace Provided {
                  type BusinessType = 'business' | 'personal';
                }
              }

              type Status =
                | 'awaiting_acknowledgement'
                | 'confirmed'
                | 'uninitiated';
            }
          }
        }
      }
    }
  }
}
