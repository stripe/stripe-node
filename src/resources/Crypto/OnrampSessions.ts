// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {
  MetadataParam,
  OtherString,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class OnrampSessionResource extends StripeResource {
  /**
   * Returns a list of onramp sessions that match the filter criteria. The onramp sessions are returned in sorted order, with the most recent onramp sessions appearing first.
   */
  list(
    params?: Crypto.OnrampSessionListParams,
    options?: RequestOptions
  ): ApiListPromise<OnrampSession> {
    return this._makeRequest(
      'GET',
      '/v1/crypto/onramp_sessions',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Creates a CryptoOnrampSession object.
   *
   * After the CryptoOnrampSession is created, display the onramp session modal using the client_secret.
   *
   * Related guide: [Set up an onramp integration](https://docs.stripe.com/docs/crypto/integrate-the-onramp)
   */
  create(
    params?: Crypto.OnrampSessionCreateParams,
    options?: RequestOptions
  ): Promise<Response<OnrampSession>> {
    return this._makeRequest(
      'POST',
      '/v1/crypto/onramp_sessions',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves the details of a CryptoOnrampSession that was previously created.
   */
  retrieve(
    id: string,
    params?: Crypto.OnrampSessionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<OnrampSession>> {
    return this._makeRequest(
      'GET',
      `/v1/crypto/onramp_sessions/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Completes a headless CryptoOnrampSession.
   *
   * This method will attempt to confirm the payment and execute the quote to deliver the crypto to the customer.
   */
  checkout(
    id: string,
    params?: Crypto.OnrampSessionCheckoutParams,
    options?: RequestOptions
  ): Promise<Response<OnrampSession>> {
    return this._makeRequest(
      'POST',
      `/v1/crypto/onramp_sessions/${encodeURIComponent(id)}/checkout`,
      params,
      options
    ) as any;
  }
  /**
   * Refreshes an executable quote for a CryptoOnrampSession.
   */
  quote(
    id: string,
    params?: Crypto.OnrampSessionQuoteParams,
    options?: RequestOptions
  ): Promise<Response<OnrampSession>> {
    return this._makeRequest(
      'POST',
      `/v1/crypto/onramp_sessions/${encodeURIComponent(id)}/quote`,
      params,
      options
    ) as any;
  }
}
export interface OnrampSession {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'crypto.onramp_session';

  /**
   * A client secret that can be used to drive a single session using our embedded widget.
   *
   * Related guide: [Set up an onramp integration](https://docs.stripe.com/crypto/integrate-the-onramp)
   */
  client_secret: string;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Has the value `true` if any user kyc details were provided during the creation of the onramp session. Otherwise, has the value `false`.
   */
  kyc_details_provided: boolean;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * Redirect your users to the URL for a prebuilt frontend integration of the crypto onramp on the standalone hosted onramp.
   *
   * Related guide: [Mint a session with a redirect url](https://docs.stripe.com/crypto/standalone-hosted-onramp#mint-a-session-with-a-redirect-url)
   */
  redirect_url: string | null;

  /**
   * The status of the Onramp Session. One of = `{initialized, rejected, requires_payment, fulfillment_processing, fulfillment_complete}`
   */
  status: string;

  transaction_details: OnrampSession.TransactionDetails;
}
export namespace OnrampSession {
  export interface TransactionDetails {
    /**
     * The amount of crypto the customer will get deposited into their wallet
     */
    destination_amount: string | null;

    /**
     * If a platform wants to lock the currencies an session will support, they can add supported currencies to this array. If left null, the experience will allow selection of all supported destination currencies.
     */
    destination_currencies: Array<
      TransactionDetails.DestinationCurrency
    > | null;

    /**
     * The selected `destination_currency` to convert the `source` to. This should be a crypto currency code. If `destination_currencies` is set, it must be a value in that array.
     */
    destination_currency: TransactionDetails.DestinationCurrency | null;

    /**
     * The specific crypto network the `destination_currency` is settled on. If `destination_networks` is set, it must be a value in that array.
     */
    destination_network: TransactionDetails.DestinationNetwork | null;

    /**
     * If a platform wants to lock the supported networks, they can do so through this array. If left null, the experience will allow selection of all supported networks.
     */
    destination_networks: Array<TransactionDetails.DestinationNetwork> | null;

    /**
     * Details about the fees associated with this transaction
     */
    fees: TransactionDetails.Fees | null;

    /**
     * Whether or not to lock the suggested wallet address.
     */
    lock_wallet_address: boolean | null;

    /**
     * Speed at which the cryptocurrency is delivered to the wallet
     * One of:
     *  `instant` (default): crypto is delivered when payment is confirmed
     *  `standard`: crypto is delivered when payment settles
     */
    settlement_speed: TransactionDetails.SettlementSpeed | null;

    /**
     * The amount of fiat we intend to onramp - excluding fees
     */
    source_amount: string | null;

    /**
     * A fiat currency code
     */
    source_currency: TransactionDetails.SourceCurrency | null;

    /**
     * The on-chain transaction hash (also referred to as transaction ID or tx_hash) of the transaction that was sent to the customer's wallet. The format varies by chain (e.g. `0xc257...1a95` on Ethereum, `5UB1...v3xZ` on Solana, or `a1b2...bf00` on Bitcoin). This will only be set if the session reaches `status=fulfillment_complete` and we've transferred the crypto successfully to the external wallet.
     */
    transaction_id: string | null;

    /**
     * The consumer's wallet address (where crypto will be sent to)
     */
    wallet_address: string | null;

    /**
     * The end customer's crypto wallet address (for each network) to use for this transaction.
     */
    wallet_addresses: TransactionDetails.WalletAddresses | null;
  }

  export namespace TransactionDetails {
    export type DestinationCurrency =
      | 'avax'
      | 'btc'
      | 'eth'
      | 'matic'
      | 'sol'
      | 'usdc'
      | 'wld'
      | 'xlm'
      | OtherString;

    export type DestinationNetwork =
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

    export interface Fees {
      /**
       * The cost associated with moving crypto from Stripe to the end consumer's wallet. e.g: for ETH, this is called 'gas fee', for BTC this is a 'miner's fee'.
       */
      network_fee_amount: string | null;

      /**
       * Fee for processing the transaction.
       */
      transaction_fee_amount: string | null;
    }

    export type SettlementSpeed = 'instant' | 'standard' | OtherString;

    export type SourceCurrency = 'eur' | 'gbp' | 'usd' | OtherString;

    export interface WalletAddresses {
      /**
       * An avalanche address
       */
      avalanche: string | null;

      /**
       * A base address
       */
      base_network: string | null;

      /**
       * A bitcoin address
       */
      bitcoin: string | null;

      /**
       * The end customer's crypto wallet destination tag (for each network) to use for this transaction.
       */
      destination_tags: WalletAddresses.DestinationTags | null;

      /**
       * An ethereum address
       */
      ethereum: string | null;

      /**
       * An optimism address
       */
      optimism: string | null;

      /**
       * A polygon address
       */
      polygon: string | null;

      /**
       * A solana address
       */
      solana: string | null;

      /**
       * A stellar address
       */
      stellar: string | null;

      /**
       * A Sui address
       */
      sui: string | null;

      /**
       * A worldchain address
       */
      worldchain: string | null;
    }

    export namespace WalletAddresses {
      export interface DestinationTags {
        /**
         * A stellar destination tag
         */
        stellar: string | null;
      }
    }
  }
}
export namespace Crypto {
  export interface OnrampSessionCreateParams {
    /**
     * The IP address of the customer the platform intends to onramp.
     *
     * If the user's IP is in a region we can't support, we return an `HTTP 400` with an appropriate error code.
     *
     * We support IPv4 and IPv6 addresses. Geographic supportability is checked again later in the onramp flow, which provides a way to hide the onramp option from ineligible users for a better user experience.
     */
    customer_ip_address?: string;

    /**
     * The default amount of crypto to exchange into.
     *
     * * When left null, a default value is computed if `source_amount`, `destination_currency`, and `destination_network` are set.
     * * When set, both `destination_currency` and `destination_network` must also be set. All cryptocurrencies are supported to their full precisions (for example, 18 decimal places for `eth`). We validate and generate an error if the amount exceeds the supported precision based on the exchange currency. Setting `source_amount` is mutually exclusive with setting `destination_amount` (only one or the other is supported). Users can update the amount in the onramp UI.
     */
    destination_amount?: string;

    /**
     * The list of destination cryptocurrencies a user can choose from.
     *
     * * When left null, all supported cryptocurrencies are shown in the onramp UI subject to `destination_networks` if set.
     * * When set, it must be a non-empty array where all values in the array are valid cryptocurrencies. You can use it to lock users to a specific cryptocurrency by passing a single value array. Users **cannot** override this parameter.
     */
    destination_currencies?: Array<
      OnrampSessionCreateParams.DestinationCurrency
    >;

    /**
     * The default destination cryptocurrency.
     *
     * * When left null, the first value of `destination_currencies` is selected.
     * * When set, if `destination_currencies` is also set, the value of `destination_currency` must be present in that array. To lock a `destination_currency`, specify that value as the single value for `destination_currencies`. Users can select a different cryptocurrency in the onramp UI subject to `destination_currencies` if set.
     */
    destination_currency?: OnrampSessionCreateParams.DestinationCurrency;

    /**
     * The default destination crypto network.
     *
     * * When left null, the first value of `destination_networks` is selected.
     * * When set, if `destination_networks` is also set, the value of `destination_network` must be present in that array. To lock a `destination_network`, specify that value as the single value for `destination_networks`. Users can select a different network in the onramp UI subject to `destination_networks` if set.
     */
    destination_network?: OnrampSessionCreateParams.DestinationNetwork;

    /**
     * The list of destination crypto networks user can choose from.
     *
     * * When left null, all supported crypto networks are shown in the onramp UI.
     * * When set, it must be a non-empty array where values in the array are each a valid crypto network. It can be used to lock users to a specific network by passing a single value array. Users **cannot** override this parameter.
     */
    destination_networks?: Array<OnrampSessionCreateParams.DestinationNetwork>;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Pre-populate some of the required KYC information for the user if you've already collected it within your application.
     *
     * Related guide: [Using the API](https://docs.stripe.com/crypto/using-the-api#how-to-pre-populate-customer-information)
     */
    kyc_details?: OnrampSessionCreateParams.KycDetails;

    /**
     * Whether or not to lock the suggested wallet address. If destination tags are provided, this will also lock the destination tags.
     */
    lock_wallet_address?: boolean;

    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;

    /**
     * Speed at which the cryptocurrency is delivered to the wallet
     * One of:
     *  `instant` (default): crypto is delivered when payment is confirmed
     *  `standard`: crypto is delivered when payment settles
     */
    settlement_speed?: OnrampSessionCreateParams.SettlementSpeed;

    /**
     * The default amount of fiat (in decimal) to exchange into crypto.
     *
     * * When left null, a default value is computed if `destination_amount` is set.
     * * When set, setting `source_amount` is mutually exclusive with setting `destination_amount` (only one or the other is supported). We don't support fractional pennies. If fractional minor units of a currency are passed in, it generates an error. Users can update the value in the onramp UI.
     */
    source_amount?: string;

    /**
     * The default source fiat currency for the onramp session.
     *
     * * When left null, a default currency is selected based on user locale.
     * * When set, it must be one of the fiat currencies supported by onramp. Users can still select a different currency in the onramp UI.
     */
    source_currency?: OnrampSessionCreateParams.SourceCurrency;

    /**
     * The end customer's crypto wallet address (for each network) to use for this transaction.
     *
     * * When left null, the user enters their wallet in the onramp UI.
     * * When set, the platform must set either `destination_networks` or `destination_network` and we perform address validation. Users can still select a different wallet in the onramp UI.
     */
    wallet_addresses?: OnrampSessionCreateParams.WalletAddresses;
  }

  export namespace OnrampSessionCreateParams {
    export type DestinationCurrency =
      | 'avax'
      | 'btc'
      | 'eth'
      | 'matic'
      | 'sol'
      | 'usdc'
      | 'wld'
      | 'xlm'
      | OtherString;

    export type DestinationNetwork =
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

    export interface KycDetails {}

    export type SettlementSpeed = 'instant' | 'standard' | OtherString;

    export type SourceCurrency = 'eur' | 'gbp' | 'usd' | OtherString;

    export interface WalletAddresses {
      /**
       * The end customer's crypto wallet destination tag (for each network) to use for this transaction. This only applies for tag-based assets such as XLM.
       *
       * * When left null, the user enters their wallet in the onramp UI.
       */
      destination_tags?: WalletAddresses.DestinationTags;
    }

    export namespace WalletAddresses {
      export interface DestinationTags {
        stellar?: string;
      }
    }
  }
}
export namespace Crypto {
  export interface OnrampSessionRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Crypto {
  export interface OnrampSessionListParams extends PaginationParams {
    /**
     * Only return onramp sessions that were created during the given date interval.
     */
    created?: RangeQueryParam | number;

    /**
     * The destination cryptocurrency to filter by.
     */
    destination_currency?: OnrampSessionListParams.DestinationCurrency;

    /**
     * The destination blockchain network to filter by.
     */
    destination_network?: OnrampSessionListParams.DestinationNetwork;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The status of the Onramp Session. One of = `{initialized, rejected, requires_payment, fulfillment_processing, fulfillment_complete}`
     */
    status?: OnrampSessionListParams.Status;
  }

  export namespace OnrampSessionListParams {
    export type DestinationCurrency =
      | 'avax'
      | 'btc'
      | 'eth'
      | 'matic'
      | 'sol'
      | 'usdc'
      | 'wld'
      | 'xlm'
      | OtherString;

    export type DestinationNetwork =
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

    export type Status =
      | 'fulfillment_complete'
      | 'fulfillment_processing'
      | 'initialized'
      | 'rejected'
      | 'requires_payment'
      | OtherString;
  }
}
export namespace Crypto {
  export interface OnrampSessionCheckoutParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * This hash contains details about the mandate to create
     */
    mandate_data?: OnrampSessionCheckoutParams.MandateData;
  }

  export namespace OnrampSessionCheckoutParams {
    export interface MandateData {
      /**
       * This hash contains details about the customer acceptance of the Mandate.
       */
      customer_acceptance: MandateData.CustomerAcceptance;
    }

    export namespace MandateData {
      export interface CustomerAcceptance {
        /**
         * The time at which the customer accepted the Mandate.
         */
        accepted_at?: number;

        /**
         * If this is a Mandate accepted offline, this hash contains details about the offline acceptance.
         */
        offline?: CustomerAcceptance.Offline;

        /**
         * If this is a Mandate accepted online, this hash contains details about the online acceptance.
         */
        online?: CustomerAcceptance.Online;

        /**
         * The type of customer acceptance information included with the Mandate. One of `online` or `offline`.
         */
        type: CustomerAcceptance.Type;
      }

      export namespace CustomerAcceptance {
        export interface Offline {}

        export interface Online {
          /**
           * The IP address from which the Mandate was accepted by the customer.
           */
          ip_address: string;

          /**
           * The user agent of the browser from which the Mandate was accepted by the customer.
           */
          user_agent: string;
        }

        export type Type = 'offline' | 'online';
      }
    }
  }
}
export namespace Crypto {
  export interface OnrampSessionQuoteParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
