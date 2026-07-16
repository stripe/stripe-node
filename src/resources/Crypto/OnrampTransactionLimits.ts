// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {OtherString} from '../../shared.js';
import {RequestOptions, Response} from '../../lib.js';

export class OnrampTransactionLimitResource extends StripeResource {
  /**
   * Retrieves the remaining onramp limit for a crypto customer.
   */
  retrieve(
    params?: Crypto.OnrampTransactionLimitsRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<OnrampTransactionLimits>> {
    return this._makeRequest(
      'GET',
      '/v1/crypto/onramp_transaction_limits',
      params,
      options
    ) as any;
  }
}
export interface OnrampTransactionLimits {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'crypto.onramp_transaction_limits';

  /**
   * The ID of the crypto customer.
   */
  crypto_customer_id: string;

  /**
   * The remaining onramp limit for the crypto customer, separated by currency, payment method, and settlement speed.
   *
   * Limits are shown for currencies that correspond to the regions where the customer previously transacted. If the customer has no prior transactions, we return limits for all supported currencies.
   */
  limits: OnrampTransactionLimits.Limits;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;
}
export namespace OnrampTransactionLimits {
  export type Limits = {
    [key: string]: unknown;
  };
}
export namespace Crypto {
  export interface OnrampTransactionLimitsRetrieveParams {
    /**
     * The IP address of the customer requesting transaction limits. We support IPv4 and IPv6 addresses.
     */
    customer_ip_address?: string;

    /**
     * The destination blockchain network to use for limit calculations.
     */
    destination_network?: OnrampTransactionLimitsRetrieveParams.DestinationNetwork;

    /**
     * The destination tag for the wallet address, if applicable for the network.
     */
    destination_tag?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The wallet address to use for destination-specific limit calculations.
     */
    wallet_address?: string;
  }

  export namespace OnrampTransactionLimitsRetrieveParams {
    export type DestinationNetwork =
      | 'avalanche'
      | 'base'
      | 'bitcoin'
      | 'ethereum'
      | 'optimism'
      | 'polygon'
      | 'solana'
      | 'stellar'
      | 'worldchain'
      | OtherString;
  }
}
