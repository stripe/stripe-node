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
   * The ID of the Account that owns this FinancialAddress.
   */
  account?: string;

  /**
   * Bank account details for this FinancialAddress.
   */
  bank_account?: FinancialAddress.BankAccount;

  /**
   * The creation timestamp of the FinancialAddress.
   */
  created: string;

  crypto_wallet?: FinancialAddress.CryptoWallet;

  /**
   * The ID of the FinancialAccount this FinancialAddress corresponds to.
   */
  financial_account: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

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

    clabe?: BankAccount.Clabe;

    /**
     * The country of the bank account.
     */
    country?: string;

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
    address: string;

    memo?: string;

    network: CryptoWallet.Network;

    /**
     * A map of supported network names to their details, including supported token currencies.
     */
    supported_network_details: {
      [key: string]: CryptoWallet.SupportedNetworkDetails;
    };
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
       * The SWIFT/BIC code.
       */
      bic?: string;

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
      account_holder_name: string;

      clabe: string;
    }

    export interface Cpa {
      account_holder_name: string;

      account_number?: string;

      bank_name: string;

      bic?: string;

      institution_number: string;

      last4: string;

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
       * The SWIFT/BIC code.
       */
      bic: string;

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
       * The SWIFT/BIC code.
       */
      bic?: string;

      /**
       * The full IBAN.
       */
      iban?: string;

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
      | 'bre_b'
      | 'clabe'
      | 'cpa'
      | 'iban'
      | 'pix'
      | 'sort_code'
      | OtherString;
  }

  export namespace CryptoWallet {
    export type Network =
      | 'arbitrum'
      | 'avalanche_c_chain'
      | 'base'
      | 'bitcoin'
      | 'ethereum'
      | 'optimism'
      | 'polygon'
      | 'solana'
      | 'stellar'
      | 'tempo'
      | OtherString;

    export interface SupportedNetworkDetails {
      /**
       * The token currencies supported on this network.
       */
      supported_token_currencies: Array<
        SupportedNetworkDetails.SupportedTokenCurrency
      >;
    }

    export namespace SupportedNetworkDetails {
      export type SupportedTokenCurrency =
        | 'btc'
        | 'eth'
        | 'sol'
        | 'usdc'
        | 'usdt'
        | OtherString;
    }
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
       * The ID of the Account that owns this FinancialAddress.
       */
      account?: string;

      /**
       * Properties for creating a bank account FinancialAddress.
       */
      bank_account?: FinancialAddressCreateParams.BankAccount;

      crypto_wallet?: FinancialAddressCreateParams.CryptoWallet;

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
          | 'brl'
          | 'cad'
          | 'cop'
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
          | 'bitcoin'
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
       * The ID of the Account that owns the FinancialAddresses.
       */
      account?: string;

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
