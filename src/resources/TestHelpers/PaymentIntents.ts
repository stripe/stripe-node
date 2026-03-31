// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {PaymentIntent} from './../PaymentIntents.js';
import {RequestOptions, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;

export class PaymentIntentResource extends StripeResource {
  /**
   * Simulate an incoming crypto deposit for a testmode PaymentIntent with payment_method_options[crypto][mode]=deposit. The transaction_hash parameter determines whether the simulated deposit succeeds or fails. Learn more about [testing your integration](https://docs.stripe.com/docs/payments/deposit-mode-stablecoin-payments#test-your-integration).
   */
  simulateCryptoDeposit(
    id: string,
    params: TestHelpers.PaymentIntentSimulateCryptoDepositParams,
    options?: RequestOptions
  ): Promise<Response<PaymentIntent>>;
  simulateCryptoDeposit(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath:
        '/v1/test_helpers/payment_intents/{intent}/simulate_crypto_deposit',
    }).call(this, ...args);
  }
}
export namespace TestHelpers {
  export interface PaymentIntentSimulateCryptoDepositParams {
    /**
     * The buyer's wallet address from which the crypto deposit is originating.
     */
    buyer_wallet: string;

    /**
     * The blockchain network of the simulated crypto deposit.
     */
    network: PaymentIntentSimulateCryptoDepositParams.Network;

    /**
     * The token currency of the simulated crypto deposit.
     */
    token_currency: 'usdc';

    /**
     * A testmode transaction hash that determines the outcome of the simulated deposit.
     */
    transaction_hash: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export namespace PaymentIntentSimulateCryptoDepositParams {
    export type Network = 'base' | 'solana' | 'tempo';
  }
}
