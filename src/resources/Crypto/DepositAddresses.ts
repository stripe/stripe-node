// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {MetadataParam, PaginationParams, Metadata} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class DepositAddressResource extends StripeResource {
  /**
   * Lists crypto deposit addresses for the authenticated merchant.
   * Supports cursor-based pagination and optional filtering by customer, network, or on-chain address.
   */
  list(
    params?: Crypto.DepositAddressListParams,
    options?: RequestOptions
  ): ApiListPromise<DepositAddress> {
    return this._makeRequest(
      'GET',
      '/v1/crypto/deposit_addresses',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Creates a new crypto deposit address for the authenticated merchant on the specified network.
   * The returned address can be used across multiple PaymentIntents.
   */
  create(
    params: Crypto.DepositAddressCreateParams,
    options?: RequestOptions
  ): Promise<Response<DepositAddress>> {
    return this._makeRequest(
      'POST',
      '/v1/crypto/deposit_addresses',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves the details of an existing crypto deposit address by ID.
   */
  retrieve(
    id: string,
    params?: Crypto.DepositAddressRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<DepositAddress>> {
    return this._makeRequest(
      'GET',
      `/v1/crypto/deposit_addresses/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface DepositAddress {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'crypto.deposit_address';

  /**
   * The on-chain address where funds can be received.
   */
  address: string;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * If set, this deposit address is scoped to a [Customer](https://docs.stripe.com/api/customers/object) and can only receive funds from that customer. Otherwise, this deposit address can receive funds from any customer.
   */
  customer?: string;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata;

  /**
   * The blockchain network where this address can accept funds.
   */
  network: DepositAddress.Network;

  /**
   * The tokens that can be sent to this deposit address on its network.
   */
  supported_tokens: Array<DepositAddress.SupportedToken>;
}
export namespace DepositAddress {
  export type Network = 'base' | 'solana' | 'tempo';

  export interface SupportedToken {
    /**
     * The on-chain contract address for the supported token currency on this specific network.
     */
    token_contract_address: string;

    /**
     * The supported token currency. Supported token currencies include: `usdc`.
     */
    token_currency: 'usdc';
  }
}
export namespace Crypto {
  export interface DepositAddressCreateParams {
    /**
     * The blockchain network to generate a deposit address for.
     */
    network: DepositAddressCreateParams.Network;

    /**
     * If set, this deposit address is scoped to a [Customer](https://docs.stripe.com/api/customers/object) and can only receive funds from that customer. Otherwise, this deposit address can receive funds from any customer.
     */
    customer?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: MetadataParam;
  }

  export namespace DepositAddressCreateParams {
    export type Network = 'base' | 'solana' | 'tempo';
  }
}
export namespace Crypto {
  export interface DepositAddressRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Crypto {
  export interface DepositAddressListParams extends PaginationParams {
    /**
     * Only return the deposit address matching this on-chain address.
     */
    address?: string;

    /**
     * Only return deposit addresses scoped to this [Customer](https://docs.stripe.com/api/customers/object).
     */
    customer?: string;

    /**
     * Only return deposit addresses belonging to this customer account.
     */
    customer_account?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return deposit addresses for this blockchain network.
     */
    network?: DepositAddressListParams.Network;
  }

  export namespace DepositAddressListParams {
    export type Network = 'base' | 'solana' | 'tempo';
  }
}
