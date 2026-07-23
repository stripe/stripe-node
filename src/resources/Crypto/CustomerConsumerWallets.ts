// File generated from our OpenAPI spec

import {OtherString} from '../../shared.js';
import {RequestOptions} from '../../lib.js';
export interface CustomerConsumerWallet {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'crypto.consumer_wallet';

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The blockchain network for this wallet
   */
  network: CustomerConsumerWallet.Network;

  /**
   * Whether ownership of this wallet has been verified
   */
  verified_ownership: boolean;

  /**
   * The wallet address
   */
  wallet_address: string;
}
export namespace CustomerConsumerWallet {
  export type Network =
    | 'aptos'
    | 'avalanche'
    | 'base'
    | 'bitcoin'
    | 'ethereum'
    | 'optimism'
    | 'polygon'
    | 'solana'
    | 'stellar'
    | 'sui'
    | 'worldchain'
    | OtherString;
}
