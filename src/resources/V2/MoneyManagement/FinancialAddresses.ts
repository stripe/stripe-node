// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString, JapanAddress} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class FinancialAddressResource extends StripeResource {
  /**
   * List all FinancialAddresses for a FinancialAccount (V2 shape).
   */
  list(
    params?: V2.MoneyManagement.FinancialAddressListParams,
    options?: RequestOptions
  ): V2ListPromise<FinancialAddress> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/financial_addresses',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Create a new FinancialAddress for a FinancialAccount (V2 shape).
   * @throws Stripe.FinancialAccountNotOpenError
   * @throws Stripe.FeatureNotEnabledError
   */
  create(
    params: V2.MoneyManagement.FinancialAddressCreateParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAddress>> {
    return this._makeRequest(
      'POST',
      '/v2/money_management/financial_addresses',
      params,
      options
    ) as any;
  }
  /**
   * Retrieve a FinancialAddress (V2 shape).
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.FinancialAddressRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAddress>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/financial_addresses/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface FinancialAddress {
  /**
   * The ID of the FinancialAddress.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.financial_address';

  /**
   * Bank account details for this FinancialAddress.
   */
  bank_account?: FinancialAddress.BankAccount;

  /**
   * The creation timestamp of the FinancialAddress.
   */
  created: string;

  /**
   * Crypto wallet details for this FinancialAddress.
   */
  crypto_wallet?: FinancialAddress.CryptoWallet;

  /**
   * The ID of the FinancialAccount this FinancialAddress corresponds to.
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
   * Closed Enum. The status of the FinancialAddress.
   */
  status: FinancialAddress.Status;

  /**
   * Open Enum. The type of FinancialAddress.
   */
  type: FinancialAddress.Type;
}
export namespace FinancialAddress {
  export interface BankAccount {
    /**
     * ABA bank account details (US).
     */
    aba?: BankAccount.Aba;

    /**
     * CLABE bank account details (Mexico).
     */
    clabe?: BankAccount.Clabe;

    /**
     * The country of the bank account.
     */
    country?: string;

    /**
     * CPA bank account details (Canada).
     */
    cpa?: BankAccount.Cpa;

    /**
     * Open Enum. The currency of the bank account.
     */
    currency: string;

    /**
     * IBAN bank account details.
     */
    iban?: BankAccount.Iban;

    /**
     * Sort code bank account details (UK).
     */
    sort_code?: BankAccount.SortCode;

    /**
     * Open Enum. The type of bank account details.
     */
    type: BankAccount.Type;
  }

  export interface CryptoWallet {
    /**
     * The blockchain wallet address.
     */
    address: string;

    /**
     * An optional memo or tag required by some networks to identify the recipient.
     */
    memo?: string;

    /**
     * Open Enum. The blockchain network of the crypto wallet.
     */
    network: CryptoWallet.Network;
  }

  export type Status = 'active' | 'archived' | 'failed' | 'pending';

  export type Type = 'bank_account' | 'crypto_wallet' | OtherString;

  export namespace BankAccount {
    export interface Aba {
      /**
       * The address of the account holder.
       */
      account_holder_address?: JapanAddress;

      /**
       * The name of the account holder.
       */
      account_holder_name?: string;

      /**
       * The full account number.
       */
      account_number?: string;

      /**
       * The name of the bank.
       */
      bank_name?: string;

      /**
       * The last four digits of the account number.
       */
      last4: string;

      /**
       * The ABA routing number.
       */
      routing_number: string;
    }

    export interface Clabe {
      /**
       * The name of the account holder.
       */
      account_holder_name: string;

      /**
       * The CLABE interbank code.
       */
      clabe: string;
    }

    export interface Cpa {
      /**
       * The name of the account holder.
       */
      account_holder_name: string;

      /**
       * The full account number.
       */
      account_number?: string;

      /**
       * The name of the bank.
       */
      bank_name: string;

      /**
       * The institution number.
       */
      institution_number: string;

      /**
       * The last four digits of the account number.
       */
      last4: string;

      /**
       * The transit number.
       */
      transit_number: string;
    }

    export interface Iban {
      /**
       * The name of the account holder.
       */
      account_holder_name: string;

      /**
       * The name of the bank.
       */
      bank_name: string;

      /**
       * The country of the bank account.
       */
      country: string;

      /**
       * The full IBAN.
       */
      iban?: string;

      /**
       * The last four digits of the IBAN.
       */
      last4: string;
    }

    export interface SortCode {
      /**
       * The name of the account holder.
       */
      account_holder_name: string;

      /**
       * The full account number.
       */
      account_number?: string;

      /**
       * The last four digits of the account number.
       */
      last4: string;

      /**
       * The sort code.
       */
      sort_code: string;
    }

    export type Type =
      | 'aba'
      | 'clabe'
      | 'cpa'
      | 'iban'
      | 'sort_code'
      | OtherString;
  }

  export namespace CryptoWallet {
    export type Network =
      | 'arbitrum'
      | 'avalanche_c_chain'
      | 'base'
      | 'ethereum'
      | 'optimism'
      | 'polygon'
      | 'solana'
      | 'stellar'
      | 'tempo'
      | OtherString;
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAddressCreateParams {
      /**
       * The ID of the FinancialAccount the new FinancialAddress should be associated with.
       */
      financial_account: string;

      /**
       * The type of FinancialAddress to create. Must agree with which branch of financial_address_type_properties is set.
       */
      type: FinancialAddressCreateParams.Type;

      /**
       * Properties for creating a bank account FinancialAddress.
       */
      bank_account?: FinancialAddressCreateParams.BankAccount;

      /**
       * Properties for creating a crypto wallet FinancialAddress.
       */
      crypto_wallet?: FinancialAddressCreateParams.CryptoWallet;

      /**
       * Open Enum. The currency the FinancialAddress settles into the FinancialAccount.
       */
      settlement_currency?: string;
    }

    export namespace FinancialAddressCreateParams {
      export type Type = 'bank_account' | 'crypto_wallet' | OtherString;

      export interface BankAccount {
        /**
         * The country for the bank account. Used to select the appropriate rails (e.g. for SEPA).
         */
        country?: string;

        /**
         * The currency of the bank account to provision.
         */
        currency: BankAccount.Currency;
      }

      export interface CryptoWallet {
        /**
         * The blockchain network of the crypto wallet.
         */
        network: CryptoWallet.Network;
      }

      export namespace BankAccount {
        export type Currency =
          | 'cad'
          | 'eur'
          | 'gbp'
          | 'mxn'
          | 'usd'
          | OtherString;
      }

      export namespace CryptoWallet {
        export type Network =
          | 'arbitrum'
          | 'avalanche_c_chain'
          | 'base'
          | 'ethereum'
          | 'optimism'
          | 'polygon'
          | 'solana'
          | 'stellar'
          | 'tempo'
          | OtherString;
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAddressRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAddressListParams {
      /**
       * The ID of the FinancialAccount for which FinancialAddresses are to be returned.
       */
      financial_account?: string;

      /**
       * The page limit.
       */
      limit?: number;
    }
  }
}
