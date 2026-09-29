// File generated from our OpenAPI spec

import {OtherString} from '../../../shared.js';
import {RequestOptions} from '../../../lib.js';
export interface FinancialAccountWalletExportCredentials {
  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.financial_account_wallet_export_credentials';

  /**
   * End of the fixed one-hour credentials retrieval window.
   */
  credentials_available_until: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Exported wallets and credentials encrypted to the supplied recipient public key.
   */
  wallets: Array<FinancialAccountWalletExportCredentials.Wallet>;
}
export namespace FinancialAccountWalletExportCredentials {
  export interface Wallet {
    /**
     * Public address of the exported wallet.
     */
    address: string;

    /**
     * Credentials encrypted to the supplied recipient public key.
     */
    credentials_encrypted: Wallet.CredentialsEncrypted;

    /**
     * Tempo network configured for each stablecoin currency. Keys are lowercase currency codes.
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
    export interface CredentialsEncrypted {
      /**
       * Base64url-encoded encrypted wallet credentials. Stripe does not persist this response.
       */
      ciphertext: string;

      /**
       * Base64url-encoded HPKE encapsulated key.
       */
      encapsulated_key: string;

      /**
       * Encryption scheme used for these credentials.
       */
      type: CredentialsEncrypted.Type;
    }

    export type CurrencyNetworks = 'tempo' | OtherString;

    export type NetworkType = 'ethereum' | OtherString;

    export namespace CredentialsEncrypted {
      export type Type = 'hpke' | OtherString;
    }
  }
}
