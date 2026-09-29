// File generated from our OpenAPI spec

import {OtherString} from '../../../shared.js';
import {RequestOptions} from '../../../lib.js';
export interface FinancialAccountWalletExport {
  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.financial_account_wallet_export';

  /**
   * End of the fixed one-hour credentials retrieval window. Null until the first successful credential export; remains readable after expiry.
   */
  credentials_available_until?: string;

  /**
   * FinancialAccount whose wallet is being exported.
   */
  financial_account: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Current wallet export status. The lifecycle is pending, ready, then complete.
   */
  status: FinancialAccountWalletExport.Status;

  /**
   * Public wallet metadata. Null while pending or ready, and retained after the credential window expires.
   */
  wallets?: Array<FinancialAccountWalletExport.Wallet>;
}
export namespace FinancialAccountWalletExport {
  export type Status = 'complete' | 'pending' | 'ready';

  export interface Wallet {
    /**
     * Public address of the exported wallet.
     */
    address: string;

    /**
     * Network on which each stablecoin currency is stored. Keys are lowercase currency codes.
     */
    currency_networks: {
      [key: string]: Wallet.CurrencyNetworks;
    };

    /**
     * Network family for the wallet address.
     */
    network_type: Wallet.NetworkType;
  }

  export namespace Wallet {
    export type CurrencyNetworks = 'tempo' | OtherString;

    export type NetworkType = 'ethereum' | OtherString;
  }
}
