// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {RequestOptions, Response} from '../../../../lib.js';

export class NetworkTokenResource extends StripeResource {
  /**
   * Create or Return a Network Token Using Raw Card Data.
   * @throws Stripe.CannotProceedError
   * @throws Stripe.BlockedByStripeError
   * @throws Stripe.MerchantNotGatedError
   */
  create(
    params: V2.Core.Vault.NetworkTokenCreateParams,
    options?: RequestOptions
  ): Promise<Response<NetworkToken>> {
    return this._makeRequest(
      'POST',
      '/v2/core/vault/network_tokens',
      params,
      options
    ) as any;
  }
  /**
   * Creates or returns a Network Token from an existing card reference.
   * @throws Stripe.CannotProceedError
   * @throws Stripe.BlockedByStripeError
   */
  createFromCredential(
    params: V2.Core.Vault.NetworkTokenCreateFromCredentialParams,
    options?: RequestOptions
  ): Promise<Response<NetworkToken>> {
    return this._makeRequest(
      'POST',
      '/v2/core/vault/network_tokens/create_from_credential',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves an existing network token.
   */
  retrieve(
    id: string,
    params?: V2.Core.Vault.NetworkTokenRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<NetworkToken>> {
    return this._makeRequest(
      'GET',
      `/v2/core/vault/network_tokens/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Every successful call generates a new cryptogram, and retrying can generate another cryptogram.
   * The cryptogram is returned only in this response and is never persisted.
   * @throws Stripe.RateLimitError
   * @throws Stripe.CannotProceedError
   */
  generateCryptogram(
    id: string,
    params?: V2.Core.Vault.NetworkTokenGenerateCryptogramParams,
    options?: RequestOptions
  ): Promise<Response<NetworkToken>> {
    return this._makeRequest(
      'POST',
      `/v2/core/vault/network_tokens/${encodeURIComponent(
        id
      )}/generate_cryptogram`,
      params,
      options
    ) as any;
  }
}
export interface NetworkToken {
  /**
   * ID of the NetworkToken object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.core.vault.network_token';

  /**
   * Created timestamp.
   */
  created: string;

  /**
   * This field is unset in create and retrieve responses. It is populated only after a successful generate_cryptogram request.
   */
  cryptogram?: NetworkToken.Cryptogram;

  /**
   * The month the network token expires.
   */
  exp_month?: string;

  /**
   * The year the network token expires.
   */
  exp_year?: string;

  /**
   * Whether the object exists in live mode or in test mode.
   */
  livemode: boolean;

  /**
   * The network token number.
   */
  number?: string;

  /**
   * Closed Enum. The status of the network token.
   */
  status: NetworkToken.Status;
}
export namespace NetworkToken {
  export interface Cryptogram {
    /**
     * The electronic commerce indicator associated with the cryptogram.
     */
    eci?: string;

    /**
     * The cryptogram type.
     */
    type: string;

    /**
     * The cryptogram value.
     */
    value: string;
  }

  export type Status = 'active' | 'deactivated' | 'suspended';
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export interface NetworkTokenCreateParams {
        /**
         * Private preview supports card only.
         */
        type: 'card';

        /**
         * Raw card values used to provision the network token.
         */
        card?: NetworkTokenCreateParams.Card;
      }

      export namespace NetworkTokenCreateParams {
        export interface Card {
          /**
           * The two-digit number representing the card's expiration month.
           */
          exp_month: string;

          /**
           * The four-digit number representing the card's expiration year.
           */
          exp_year: string;

          /**
           * The card number.
           */
          number: string;

          /**
           * The optional origin attestation for the card.
           */
          origin?: 'card_on_file';

          /**
           * Optional owner contact details used only when a network requires them for raw-card tokenization.
           */
          owner_details?: Card.OwnerDetails;
        }

        export namespace Card {
          export interface OwnerDetails {
            /**
             * Cardholder email address.
             */
            email?: string;

            /**
             * Cardholder phone number in international format, for example +15555550123.
             */
            phone?: string;
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export interface NetworkTokenRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export interface NetworkTokenCreateFromCredentialParams {
        /**
         * Private preview supports card only.
         */
        type: 'card';

        /**
         * The existing Stripe card reference to provision or resolve.
         */
        card?: NetworkTokenCreateFromCredentialParams.Card;
      }

      export namespace NetworkTokenCreateFromCredentialParams {
        export interface Card {
          /**
           * The optional origin attestation for the referenced card.
           */
          origin?: 'card_on_file';

          /**
           * A supported v2 Card ID or v1 PaymentMethod ID of type card.
           */
          reference: string;
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Vault {
      export interface NetworkTokenGenerateCryptogramParams {
        /**
         * The cryptogram type. When omitted, token_cryptogram is used.
         */
        type?: 'token_cryptogram';
      }
    }
  }
}
