// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';

export class FundingSessionResource extends StripeResource {
  /**
   * Create a FundingSession: a hosted funding surface for a customer to fund a FinancialAccount.
   */
  create(
    params: V2.MoneyManagement.FundingSessionCreateParams,
    options?: RequestOptions
  ): Promise<Response<FundingSession>> {
    return this._makeRequest(
      'POST',
      '/v2/money_management/funding_sessions',
      params,
      options
    ) as any;
  }
}
export interface FundingSession {
  /**
   * The ID of the FundingSession. ID prefix: `fndsess`.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.funding_session';

  /**
   * The ID of the Account that owns the FinancialAccount.
   */
  account: string;

  /**
   * The creation timestamp of the FundingSession.
   */
  created: string;

  /**
   * The ID of the FinancialAccount this FundingSession funds.
   */
  financial_account: string;

  /**
   * Per-type options used when creating the FinancialAddress.
   */
  financial_address_options: FundingSession.FinancialAddressOptions;

  /**
   * Open Enum. The types of FinancialAddress that can be funded in this session.
   */
  financial_address_types: Array<FundingSession.FinancialAddressType>;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The URL the customer is redirected to after completing (or abandoning) the funding session.
   */
  return_url: string;

  /**
   * The short-lived hosted funding URL the customer visits to fund the FinancialAccount.
   */
  url: string;
}
export namespace FundingSession {
  export interface FinancialAddressOptions {
    /**
     * Options for a crypto wallet FinancialAddress. Required if `crypto_wallet` is requested.
     */
    crypto_wallet?: FinancialAddressOptions.CryptoWallet;
  }

  export type FinancialAddressType =
    | 'bank_account'
    | 'crypto_wallet'
    | OtherString;

  export namespace FinancialAddressOptions {
    export interface CryptoWallet {
      /**
       * Open Enum. The currency the crypto wallet FinancialAddress settles into the FinancialAccount. Required.
       */
      settlement_currency: string;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FundingSessionCreateParams {
      /**
       * The ID of the Account that owns the FinancialAccount. Required.
       */
      account: string;

      /**
       * The ID of the FinancialAccount to fund. Required.
       */
      financial_account: string;

      /**
       * Per-type options used when creating the FinancialAddress. Required.
       */
      financial_address_options: FundingSessionCreateParams.FinancialAddressOptions;

      /**
       * Open Enum. The types of FinancialAddress that can be funded in this session. At least one is required.
       */
      financial_address_types: Array<
        FundingSessionCreateParams.FinancialAddressType
      >;

      /**
       * The URL the customer is redirected to after completing or abandoning the funding session. Required.
       */
      return_url: string;
    }

    export namespace FundingSessionCreateParams {
      export interface FinancialAddressOptions {
        /**
         * Options for a crypto wallet FinancialAddress. Required if `crypto_wallet` is requested.
         */
        crypto_wallet?: FinancialAddressOptions.CryptoWallet;
      }

      export type FinancialAddressType =
        | 'bank_account'
        | 'crypto_wallet'
        | OtherString;

      export namespace FinancialAddressOptions {
        export interface CryptoWallet {
          /**
           * Open Enum. The currency the crypto wallet FinancialAddress settles into the FinancialAccount. Required.
           */
          settlement_currency: string;
        }
      }
    }
  }
}
