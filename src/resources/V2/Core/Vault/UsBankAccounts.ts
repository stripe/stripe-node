// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {RequestOptions, ApiListPromise, Response} from '../../../../lib.js';
const stripeMethod = StripeResource.method;

export class UsBankAccountResource extends StripeResource {
  /**
   * List USBankAccount objects. Optionally filter by verification status.
   */
  list(
    params?: V2.Core.Vault.UsBankAccountListParams,
    options?: RequestOptions
  ): ApiListPromise<UsBankAccount>;
  list(options?: RequestOptions): ApiListPromise<UsBankAccount>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/core/vault/us_bank_accounts',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Create a USBankAccount object.
   * @throws Stripe.BlockedByStripeError
   * @throws Stripe.InvalidPaymentMethodError
   * @throws Stripe.QuotaExceededError
   */
  create(
    params: V2.Core.Vault.UsBankAccountCreateParams,
    options?: RequestOptions
  ): Promise<Response<UsBankAccount>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/core/vault/us_bank_accounts',
    }).call(this, ...args);
  }

  /**
   * Retrieve a USBankAccount object.
   */
  retrieve(
    id: string,
    params?: V2.Core.Vault.UsBankAccountRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<UsBankAccount>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<UsBankAccount>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/core/vault/us_bank_accounts/{id}',
    }).call(this, ...args);
  }

  /**
   * Update a USBankAccount object. This is limited to supplying a previously empty routing_number field.
   * @throws Stripe.BlockedByStripeError
   * @throws Stripe.InvalidPaymentMethodError
   * @throws Stripe.QuotaExceededError
   */
  update(
    id: string,
    params?: V2.Core.Vault.UsBankAccountUpdateParams,
    options?: RequestOptions
  ): Promise<Response<UsBankAccount>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/core/vault/us_bank_accounts/{id}',
    }).call(this, ...args);
  }

  /**
   * Archive a USBankAccount object. USBankAccount objects will not be automatically archived by Stripe.
   * Archived USBankAccount objects cannot be used as outbound destinations
   * and will not appear in the outbound destination list.
   * @throws Stripe.ControlledByDashboardError
   */
  archive(
    id: string,
    params?: V2.Core.Vault.UsBankAccountArchiveParams,
    options?: RequestOptions
  ): Promise<Response<UsBankAccount>>;
  archive(
    id: string,
    options?: RequestOptions
  ): Promise<Response<UsBankAccount>>;
  archive(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/core/vault/us_bank_accounts/{id}/archive',
    }).call(this, ...args);
  }

  /**
   * Confirm microdeposits amounts or descriptor code that you have received from the Send Microdeposits request. Once you correctly confirm this, this US Bank Account will be verified and eligible to transfer funds with.
   */
  confirmMicrodeposits(
    id: string,
    params?: V2.Core.Vault.UsBankAccountConfirmMicrodepositsParams,
    options?: RequestOptions
  ): Promise<Response<UsBankAccount>>;
  confirmMicrodeposits(
    id: string,
    options?: RequestOptions
  ): Promise<Response<UsBankAccount>>;
  confirmMicrodeposits(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/core/vault/us_bank_accounts/{id}/confirm_microdeposits',
    }).call(this, ...args);
  }

  /**
   * Send microdeposits in order to verify your US Bank Account so it is eligible to transfer funds. This will start the verification process and you must Confirm Microdeposits to successfully verify your US Bank Account.
   */
  sendMicrodeposits(
    id: string,
    params?: V2.Core.Vault.UsBankAccountSendMicrodepositsParams,
    options?: RequestOptions
  ): Promise<Response<UsBankAccount>>;
  sendMicrodeposits(
    id: string,
    options?: RequestOptions
  ): Promise<Response<UsBankAccount>>;
  sendMicrodeposits(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/core/vault/us_bank_accounts/{id}/send_microdeposits',
    }).call(this, ...args);
  }
}
export interface UsBankAccount {
  /**
   * The ID of the USBankAccount object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.core.vault.us_bank_account';

  /**
   * The alternative reference for this payout method, if it's a projected payout method.
   */
  alternative_reference?: V2.Core.Vault.UsBankAccount.AlternativeReference;

  /**
   * Whether this USBankAccount object was archived.
   */
  archived: boolean;

  /**
   * Closed Enum. The type of bank account (checking or savings).
   */
  bank_account_type: V2.Core.Vault.UsBankAccount.BankAccountType;

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
  fedwire_routing_number?: string;

  /**
   * The ID of the Financial Connections Account used to create the bank account.
   */
  financial_connections_account?: string;

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
  routing_number?: string;

  /**
   * The list of currencies supported by this bank account.
   */
  supported_currencies: Array<string>;

  /**
   * The bank account verification details.
   */
  verification: V2.Core.Vault.UsBankAccount.Verification;
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export namespace UsBankAccount {
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

        export type BankAccountType = 'checking' | 'savings';

        export interface Verification {
          /**
           * The microdeposit verification details if the status is awaiting verification.
           */
          microdeposit_verification_details?: Verification.MicrodepositVerificationDetails;

          /**
           * The bank account verification status.
           */
          status: Verification.Status;
        }

        export namespace AlternativeReference {
          export type Type = 'external_account' | 'payment_method';
        }

        export namespace Verification {
          export interface MicrodepositVerificationDetails {
            /**
             * Time when microdeposits will expire and have to be re-sent.
             */
            expires: string;

            /**
             * Microdeposit type can be amounts or descriptor_type.
             */
            microdeposit_type: MicrodepositVerificationDetails.MicrodepositType;

            /**
             * Time when microdeposits were sent.
             */
            sent: string;
          }

          export type Status =
            | 'awaiting_verification'
            | 'unverified'
            | 'verification_failed'
            | 'verified';

          export namespace MicrodepositVerificationDetails {
            export type MicrodepositType = 'amounts' | 'descriptor_code';
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export interface UsBankAccountCreateParams {
        /**
         * The account number of the bank account.
         */
        account_number: string;

        /**
         * The currency of the bank account.
         */
        currency: string;

        /**
         * Closed Enum. The type of the bank account (checking or savings).
         */
        bank_account_type?: UsBankAccountCreateParams.BankAccountType;

        /**
         * The fedwire routing number of the bank account. Note that certain banks have the same ACH and wire routing number.
         */
        fedwire_routing_number?: string;

        /**
         * The ACH routing number of the bank account. Note that certain banks have the same ACH and wire routing number.
         */
        routing_number?: string;
      }

      export namespace UsBankAccountCreateParams {
        export type BankAccountType = 'checking' | 'savings';
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export interface UsBankAccountRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export interface UsBankAccountUpdateParams {
        /**
         * The bank account's Fedwire routing number can be provided for update if it was empty previously.
         */
        fedwire_routing_number?: string;

        /**
         * The bank account's ACH routing number can be provided for update if it was empty previously.
         */
        routing_number?: string;
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export interface UsBankAccountListParams {
        /**
         * Optionally set the maximum number of results per page. Defaults to 10.
         */
        limit?: number;

        /**
         * Optionally filter by verification status. Mutually exclusive with `unverified`, `verified`, `awaiting_verification`, and `verification_failed`.
         */
        verification_status?: string;
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export interface UsBankAccountArchiveParams {}
    }
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export interface UsBankAccountConfirmMicrodepositsParams {
        /**
         * Two amounts received through Send Microdeposits must match the input to Confirm Microdeposits to verify US Bank Account.
         */
        amounts?: Array<number>;

        /**
         * Descriptor code received through Send Microdeposits must match the input to Confirm Microdeposits to verify US Bank Account.
         */
        descriptor_code?: string;
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export interface UsBankAccountSendMicrodepositsParams {}
    }
  }
}
