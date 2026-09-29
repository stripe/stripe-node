// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {FinancialAccountWalletExport} from './../../../V2/MoneyManagement/FinancialAccountWalletExports.js';
import {FinancialAccountWalletExportCredentials} from './../../../V2/MoneyManagement/FinancialAccountWalletExportCredentials.js';
import {OtherString} from '../../../../shared.js';
import {RequestOptions, Response} from '../../../../lib.js';

export class WalletExportResource extends StripeResource {
  /**
   * Retrieves the wallet export metadata for a closed FinancialAccount. Credentials are returned only by the export_credentials action.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.FinancialAccounts.WalletExportRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAccountWalletExport>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/financial_accounts/${encodeURIComponent(
        id
      )}/wallet_export`,
      params,
      options
    ) as any;
  }
  /**
   * Exports wallet credentials encrypted to the supplied recipient key. The first successful request starts one fixed one-hour retrieval window; later requests may use a different recipient key without extending it.
   * @throws Stripe.ServiceUnavailableError
   */
  exportCredentials(
    id: string,
    params: V2.MoneyManagement.FinancialAccounts.WalletExportExportCredentialsParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAccountWalletExportCredentials>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/financial_accounts/${encodeURIComponent(
        id
      )}/wallet_export/export_credentials`,
      params,
      options
    ) as any;
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace FinancialAccounts {
      export interface WalletExportRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace FinancialAccounts {
      export interface WalletExportExportCredentialsParams {
        /**
         * Encryption parameters for the exported credentials.
         */
        encryption: WalletExportExportCredentialsParams.Encryption;
      }

      export namespace WalletExportExportCredentialsParams {
        export interface Encryption {
          /**
           * Base64url-encoded raw P-256 recipient public key. Stripe does not persist this key material.
           */
          recipient_public_key: string;

          /**
           * Encryption scheme for the response. HPKE uses BASE mode, DHKEM_P256_HKDF_SHA256, HKDF_SHA256, and CHACHA20_POLY1305.
           */
          type: Encryption.Type;
        }

        export namespace Encryption {
          export type Type = 'hpke' | OtherString;
        }
      }
    }
  }
}
