// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace TestHelpers {
      interface PaymentIntentSimulateCryptoDepositParams {
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

      namespace PaymentIntentSimulateCryptoDepositParams {
        type Network = 'base' | 'solana' | 'tempo';
      }

      class PaymentIntentsResource {
        /**
         * Simulate an incoming crypto deposit for a testmode PaymentIntent with payment_method_options[crypto][mode]=deposit. The transaction_hash parameter determines whether the simulated deposit succeeds or fails. Learn more about [testing your integration](https://docs.stripe.com/docs/payments/deposit-mode-stablecoin-payments#test-your-integration).
         */
        simulateCryptoDeposit(
          id: string,
          params: PaymentIntentSimulateCryptoDepositParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.PaymentIntent>>;
      }
    }
  }
}
