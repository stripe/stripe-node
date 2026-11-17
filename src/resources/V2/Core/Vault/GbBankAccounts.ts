// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {RequestOptions, V2ListPromise, Response} from '../../../../lib.js';

export class GbBankAccountResource extends StripeResource {
  /**
   * List objects that can be used as destinations for outbound money movement via OutboundPayment.
   */
  list(
    params?: V2.Core.Vault.GbBankAccountListParams,
    options?: RequestOptions
  ): V2ListPromise<GbBankAccount> {
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
   * @throws Stripe.BlockedByStripeError
   * @throws Stripe.CannotProceedError
   * @throws Stripe.InvalidVaultedCredentialError
   * @throws Stripe.QuotaExceededError
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
      `/v2/core/vault/gb_bank_accounts/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Archive a GBBankAccount object. Archived GBBankAccount objects cannot be used as outbound destinations
   * and will not appear in the outbound destination list.
   * @throws Stripe.CannotProceedError
   * @throws Stripe.ControlledByAlternateResourceError
   */
  archive(
    id: string,
    params?: V2.Core.Vault.GbBankAccountArchiveParams,
    options?: RequestOptions
  ): Promise<Response<GbBankAccount>> {
    return this._makeRequest(
      'POST',
      `/v2/core/vault/gb_bank_accounts/${encodeURIComponent(id)}/archive`,
      params,
      options
    ) as any;
  }
  /**
   * Unarchive a GBBankAccount object.
   * @throws Stripe.ControlledByAlternateResourceError
   */
  unarchive(
    id: string,
    params?: V2.Core.Vault.GbBankAccountUnarchiveParams,
    options?: RequestOptions
  ): Promise<Response<GbBankAccount>> {
    return this._makeRequest(
      'POST',
      `/v2/core/vault/gb_bank_accounts/${encodeURIComponent(id)}/unarchive`,
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
   * Whether the GB Bank Account is currently unusable for money movement, despite potentially being correctly set up. Please reach out to Stripe Support for more information.
   */
  restricted: boolean;

  /**
   * The Sort Code of the bank account.
   */
  sort_code?: string;

  /**
   * The list of currencies supported by this bank account.
   */
  supported_currencies: Array<string>;
}
export namespace GbBankAccount {
  export type BankAccountType = 'checking' | 'savings';
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
         * The IBAN of the bank account.
         */
        iban?: string;

        /**
         * The Sort Code of the bank account.
         */
        sort_code?: string;
      }

      export namespace GbBankAccountCreateParams {
        export type BankAccountType = 'checking' | 'savings';
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
      export interface GbBankAccountArchiveParams {}
    }
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export interface GbBankAccountUnarchiveParams {}
    }
  }
}
