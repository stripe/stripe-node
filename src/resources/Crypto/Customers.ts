// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {CustomerConsumerWallet} from './CustomerConsumerWallets.js';
import {CustomerPaymentToken} from './CustomerPaymentTokens.js';
import {PaginationParams} from '../../shared.js';
import {RequestOptions, Response, ApiListPromise} from '../../lib.js';

export class CustomerResource extends StripeResource {
  /**
   * Retrieves the details of a Crypto Customer.
   */
  retrieve(
    id: string,
    params?: Crypto.CustomerRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Customer>> {
    return this._makeRequest(
      'GET',
      `/v1/crypto/customers/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Lists the Consumer Wallets for a Crypto Customer.
   */
  listConsumerWallets(
    id: string,
    params?: Crypto.CustomerListConsumerWalletsParams,
    options?: RequestOptions
  ): ApiListPromise<CustomerConsumerWallet> {
    return this._makeRequest(
      'GET',
      `/v1/crypto/customers/${encodeURIComponent(id)}/crypto_consumer_wallets`,
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Lists the Payment Tokens for a Crypto Customer.
   */
  listPaymentTokens(
    id: string,
    params?: Crypto.CustomerListPaymentTokensParams,
    options?: RequestOptions
  ): ApiListPromise<CustomerPaymentToken> {
    return this._makeRequest(
      'GET',
      `/v1/crypto/customers/${encodeURIComponent(id)}/payment_tokens`,
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
}
export interface Customer {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'crypto.customer';

  /**
   * The KYC region determined by the customer's address country.
   */
  kyc_region: Customer.KycRegion | null;

  /**
   * List of KYC tiers and their verification status.
   */
  kyc_tiers: Array<Customer.KycTier>;

  /**
   * The set of KYC Fields provided for this customers.
   */
  provided_fields: Array<Customer.ProvidedField>;

  /**
   * List of verifications and their outcome.
   */
  verifications: Array<Customer.Verification>;
}
export namespace Customer {
  export type KycRegion = 'eu' | 'us';

  export interface KycTier {
    /**
     * The KYC tier level (e.g., l0, l1, l2).
     */
    tier: KycTier.Tier;

    /**
     * List of errors associated with this KYC tier verification.
     */
    verification_errors: Array<KycTier.VerificationError>;

    /**
     * The verification status for this KYC tier.
     */
    verification_status: KycTier.VerificationStatus;
  }

  export type ProvidedField =
    | 'address_city'
    | 'address_country'
    | 'address_line_1'
    | 'address_line_2'
    | 'address_postal_code'
    | 'address_state'
    | 'attestation'
    | 'birth_city'
    | 'birth_country'
    | 'dob'
    | 'first_name'
    | 'id_document'
    | 'id_number'
    | 'id_type'
    | 'identifiers'
    | 'last_name'
    | 'nationalities'
    | 'selfie';

  export interface Verification {
    /**
     * List of errors associated with the verification.
     */
    errors: Array<Verification.Error>;

    /**
     * Type of verification.
     */
    name: Verification.Name;

    /**
     * Outcome of the verification.
     */
    status: Verification.Status;
  }

  export namespace KycTier {
    export type Tier = 'l0' | 'l1' | 'l2';

    export type VerificationError =
      | 'id_document_verification_failed'
      | 'phone_verification_failed'
      | 'user_has_reached_max_verification_attempts';

    export type VerificationStatus =
      | 'not_available'
      | 'not_started'
      | 'pending'
      | 'rejected'
      | 'verified';
  }

  export namespace Verification {
    export type Error =
      | 'id_document_verification_failed'
      | 'phone_verification_failed'
      | 'user_has_reached_max_verification_attempts';

    export type Name =
      | 'id_document_verified'
      | 'kyc_verified'
      | 'phone_verified';

    export type Status =
      | 'not_available'
      | 'not_started'
      | 'pending'
      | 'rejected'
      | 'verified';
  }
}
export namespace Crypto {
  export interface CustomerRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Crypto {
  export interface CustomerListConsumerWalletsParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Crypto {
  export interface CustomerListPaymentTokensParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
