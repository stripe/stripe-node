// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {RequestOptions, ApiListPromise, Response} from '../../../../lib.js';

export class GbBankAccountResource extends StripeResource {
  /**
   * List objects that can be used as destinations for outbound money movement via OutboundPayment.
   */
  list(
    params?: V2.Core.Vault.GbBankAccountListParams,
    options?: RequestOptions
  ): ApiListPromise<GbBankAccount> {
    return this._makeRequest(
      'GET',
      '/v2/core/vault/gb_bank_accounts',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Create a GB bank account.
   */
  create(
    params: V2.Core.Vault.GbBankAccountCreateParams,
    options?: RequestOptions
  ): Promise<Response<GbBankAccount>> {
    return this._makeRequest(
      'POST',
      '/v2/core/vault/gb_bank_accounts',
      params,
      options
    ) as any;
  }
  /**
   * Retrieve a GB bank account.
   */
  retrieve(
    id: string,
    params?: V2.Core.Vault.GbBankAccountRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<GbBankAccount>> {
    return this._makeRequest(
      'GET',
      `/v2/core/vault/gb_bank_accounts/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Confirm that you have received the result of the Confirmation of Payee request, and that you are okay with
   * proceeding to pay out to this bank account despite the account not matching, partially matching, or the service
   * being unavailable. Once you confirm this, you will be able to send OutboundPayments, but this may lead to
   * funds being sent to the wrong account, which we might not be able to recover.
   */
  acknowledgeConfirmationOfPayee(
    id: string,
    params?: V2.Core.Vault.GbBankAccountAcknowledgeConfirmationOfPayeeParams,
    options?: RequestOptions
  ): Promise<Response<GbBankAccount>> {
    return this._makeRequest(
      'POST',
      `/v2/core/vault/gb_bank_accounts/${id}/acknowledge_confirmation_of_payee`,
      params,
      options
    ) as any;
  }
  /**
   * Archive a GBBankAccount object. Archived GBBankAccount objects cannot be used as outbound destinations
   * and will not appear in the outbound destination list.
   */
  archive(
    id: string,
    params?: V2.Core.Vault.GbBankAccountArchiveParams,
    options?: RequestOptions
  ): Promise<Response<GbBankAccount>> {
    return this._makeRequest(
      'POST',
      `/v2/core/vault/gb_bank_accounts/${id}/archive`,
      params,
      options
    ) as any;
  }
  /**
   * Initiate Confirmation of Payee (CoP) in order to verify that the owner of a UK bank account matches
   * who you expect. This must be done on all UK bank accounts before sending domestic OutboundPayments. If
   * the result is a partial match or a non match, explicit acknowledgement using AcknowledgeConfirmationOfPayee
   * is required before sending funds.
   */
  initiateConfirmationOfPayee(
    id: string,
    params?: V2.Core.Vault.GbBankAccountInitiateConfirmationOfPayeeParams,
    options?: RequestOptions
  ): Promise<Response<GbBankAccount>> {
    return this._makeRequest(
      'POST',
      `/v2/core/vault/gb_bank_accounts/${id}/initiate_confirmation_of_payee`,
      params,
      options
    ) as any;
  }
}
export interface GbBankAccount {
  /**
   * The ID of the GBBankAccount object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.core.vault.gb_bank_account';

  /**
   * The alternative reference for this payout method, if it's a projected payout method.
   */
  alternative_reference?: V2.Core.Vault.GbBankAccount.AlternativeReference;

  /**
   * Whether this bank account object was archived. Bank account objects can be archived through
   * the /archive API, and they will not be automatically archived by Stripe. Archived bank account objects
   * cannot be used as outbound destinations and will not appear in the outbound destination list.
   */
  archived: boolean;

  /**
   * Closed Enum. The type of the bank account (checking or savings).
   */
  bank_account_type: V2.Core.Vault.GbBankAccount.BankAccountType;

  /**
   * The name of the bank.
   */
  bank_name: string;

  /**
   * Information around the status of Confirmation of Payee matching done on this bank account.
   * Confirmation of Payee is a name matching service that must be done before making OutboundPayments in the UK.
   */
  confirmation_of_payee: V2.Core.Vault.GbBankAccount.ConfirmationOfPayee;

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
  sort_code?: string;

  /**
   * The list of currencies supported by this bank account.
   */
  supported_currencies: Array<string>;
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export namespace GbBankAccount {
        export interface AlternativeReference {
          /**
           * The ID of the alternative resource being referenced.
           */
          id: string;

          /**
           * The type of the alternative reference (e.g., external_account for V1 external accounts).
           */
          type: AlternativeReference.Type;
        }

        export type BankAccountType = 'checking' | 'futsu' | 'savings' | 'toza';

        export interface ConfirmationOfPayee {
          /**
           * The result of the Confirmation of Payee check, once the check has been initiated. Closed enum.
           */
          result: ConfirmationOfPayee.Result;

          /**
           * The current state of Confirmation of Payee on this bank account. Closed enum.
           */
          status: ConfirmationOfPayee.Status;
        }

        export namespace AlternativeReference {
          export type Type = 'external_account' | 'payment_method';
        }

        export namespace ConfirmationOfPayee {
          export interface Result {
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

          export type Status =
            | 'awaiting_acknowledgement'
            | 'confirmed'
            | 'uninitiated';

          export namespace Result {
            export type MatchResult =
              | 'match'
              | 'mismatch'
              | 'partial_match'
              | 'unavailable';

            export interface Matched {
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

            export interface Provided {
              /**
               * The provided or Legal Entity business type to match against the CoP service. Closed enum.
               */
              business_type: Provided.BusinessType;

              /**
               * The provided or Legal Entity name to match against the CoP service.
               */
              name: string;
            }

            export namespace Matched {
              export type BusinessType = 'business' | 'personal';
            }

            export namespace Provided {
              export type BusinessType = 'business' | 'personal';
            }
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export interface GbBankAccountCreateParams {
        /**
         * The currency of the bank account.
         */
        currency: string;

        /**
         * The Account Number of the bank account.
         */
        account_number?: string;

        /**
         * Closed Enum. The type of the bank account (checking or savings).
         */
        bank_account_type?: GbBankAccountCreateParams.BankAccountType;

        /**
         * Whether or not to automatically perform Confirmation of Payee to verify the users information
         * against what was provided by the bank. Doing so is required for all bank accounts not owned
         * by you before making domestic UK OutboundPayments.
         */
        confirmation_of_payee?: GbBankAccountCreateParams.ConfirmationOfPayee;

        /**
         * The IBAN of the bank account.
         */
        iban?: string;

        /**
         * The Sort Code of the bank account.
         */
        sort_code?: string;
      }

      export namespace GbBankAccountCreateParams {
        export type BankAccountType = 'checking' | 'futsu' | 'savings' | 'toza';

        export interface ConfirmationOfPayee {
          /**
           * The business type to be checked against. Legal entity information will be used if unspecified.
           * Closed enum.
           */
          business_type?: ConfirmationOfPayee.BusinessType;

          /**
           * User specifies whether Confirmation of Payee is automatically initiated when creating the bank account.
           */
          initiate: boolean;

          /**
           * The name to be checked against. Legal entity information will be used if unspecified.
           */
          name?: string;
        }

        export namespace ConfirmationOfPayee {
          export type BusinessType = 'business' | 'personal';
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export interface GbBankAccountRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export interface GbBankAccountListParams {
        /**
         * Optionally set the maximum number of results per page. Defaults to 10.
         */
        limit?: number;
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export interface GbBankAccountAcknowledgeConfirmationOfPayeeParams {}
    }
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export interface GbBankAccountArchiveParams {}
    }
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export interface GbBankAccountInitiateConfirmationOfPayeeParams {
        /**
         * The business type to be checked against. Legal entity information will be used if unspecified.
         */
        business_type?: GbBankAccountInitiateConfirmationOfPayeeParams.BusinessType;

        /**
         * The name of the user to be checked against. Legal entity information will be used if unspecified.
         */
        name?: string;
      }

      export namespace GbBankAccountInitiateConfirmationOfPayeeParams {
        export type BusinessType = 'business' | 'personal';
      }
    }
  }
}
