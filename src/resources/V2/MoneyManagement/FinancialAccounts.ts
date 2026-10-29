// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {MetadataParam, Metadata, OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class FinancialAccountResource extends StripeResource {
  /**
   * Returns a list of FinancialAccounts in your account that match the provided filters.
   */
  list(
    params?: V2.MoneyManagement.FinancialAccountListParams,
    options?: RequestOptions
  ): V2ListPromise<FinancialAccount> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/financial_accounts',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves the details of an existing FinancialAccount.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.FinancialAccountRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAccount>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/financial_accounts/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates an existing FinancialAccount using the provided parameters.
   */
  update(
    id: string,
    params?: V2.MoneyManagement.FinancialAccountUpdateParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAccount>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/financial_accounts/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface FinancialAccount {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.financial_account';

  /**
   * The FinancialAccount's balance, split into `available`, `inbound_pending`, and `outbound_pending` balances.
   * Each balance is a hash keyed by lowercase currency codes, with an amount for each currency.
   */
  balance: FinancialAccount.Balance;

  /**
   * Open Enum. The country where the LegalEntity associated with the FinancialAccount is based, represented as a two-letter country code.
   */
  country: string;

  /**
   * Time at which the object was created. Represented as an RFC 3339 timestamp in UTC with millisecond precision, for example `2022-09-18T13:22:18.123Z`.
   */
  created: string;

  /**
   * A descriptive name for the FinancialAccount, up to 50 characters long. This name appears in the Stripe Dashboard and embedded components.
   */
  display_name?: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information
   * about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * If the FinancialAccount's `type` is `other`, this hash identifies its actual type.
   * Upgrade your API version to see that type in `type`.
   */
  other?: FinancialAccount.Other;

  /**
   * Closed Enum. An enum representing the status of the FinancialAccount. This indicates whether or not the FinancialAccount can be used for any money movement flows.
   */
  status: FinancialAccount.Status;

  /**
   * If the FinancialAccount's `type` is `storage`, this hash contains details specific to that type.
   */
  storage?: FinancialAccount.Storage;

  /**
   * Closed Enum. The type of the FinancialAccount. Details specific to the type appear in the matching hash.
   * For example, a `storage` FinancialAccount includes a `storage` hash.
   */
  type: FinancialAccount.Type;
}
export namespace FinancialAccount {
  export interface Balance {
    /**
     * Balance available for money movement.
     */
    available: {
      [key: string]: V2Amount;
    };

    /**
     * Balance of inbound funds that aren't yet available for money movement and will later move to the `available` balance.
     */
    inbound_pending: {
      [key: string]: V2Amount;
    };

    /**
     * Balance of funds being used for pending outbound money movements.
     */
    outbound_pending: {
      [key: string]: V2Amount;
    };
  }

  export interface Other {
    /**
     * The FinancialAccount's actual type, represented as a string.
     * Upgrade your API version to see this value in `financial_account.type`.
     */
    type: string;
  }

  export type Status = 'closed' | 'open' | 'pending';

  export interface Storage {
    /**
     * Array of eligibility objects, segmented by bank name and deposit insurance scheme.
     */
    deposit_insurance_eligibility?: Array<Storage.DepositInsuranceEligibility>;

    /**
     * The currencies that this FinancialAccount can hold.
     */
    holds_currencies: Array<string>;
  }

  export type Type = 'other' | 'storage';

  export namespace Storage {
    export interface DepositInsuranceEligibility {
      /**
       * The bank where funds are stored.
       */
      bank_name: DepositInsuranceEligibility.BankName;

      /**
       * Currencies eligible for deposit insurance at this bank under this scheme.
       */
      currencies: Array<string>;

      /**
       * The deposit insurance scheme.
       */
      type: DepositInsuranceEligibility.Type;
    }

    export namespace DepositInsuranceEligibility {
      export type BankName = 'fifth_third' | OtherString;

      export type Type = 'fdic' | 'fdic_passthrough' | OtherString;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAccountRetrieveParams {
      /**
       * Additional fields to include in the response.
       */
      include?: Array<'storage.deposit_insurance_eligibility'>;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAccountUpdateParams {
      /**
       * A descriptive name for the FinancialAccount, up to 50 characters long. This name appears in the Stripe Dashboard and embedded components.
       */
      display_name?: string;

      /**
       * Set of key-value pairs that you can attach to the FinancialAccount. Individual keys can be unset by posting
       * null to them.
       */
      metadata?: MetadataParam;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAccountListParams {
      /**
       * Additional fields to include in the response.
       */
      include?: Array<'storage.deposit_insurance_eligibility'>;

      /**
       * The page limit.
       */
      limit?: number;

      /**
       * Return FinancialAccounts whose `status` matches any of the provided values.
       * If omitted, closed FinancialAccounts are not returned.
       */
      statuses?: Array<FinancialAccountListParams.Status>;
    }

    export namespace FinancialAccountListParams {
      export type Status = 'closed' | 'open' | 'pending';
    }
  }
}
