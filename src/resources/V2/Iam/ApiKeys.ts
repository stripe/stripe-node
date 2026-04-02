// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class ApiKeyResource extends StripeResource {
  /**
   * List all API Keys of an account.
   */
  list(
    params?: V2.Iam.ApiKeyListParams,
    options?: RequestOptions
  ): ApiListPromise<ApiKey> {
    return this._makeRequest('GET', '/v2/iam/api_keys', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Create an API Key. To create a secret key in livemode, a public key for encryption must be provided.
   */
  create(
    params: V2.Iam.ApiKeyCreateParams,
    options?: RequestOptions
  ): Promise<Response<ApiKey>> {
    return this._makeRequest(
      'POST',
      '/v2/iam/api_keys',
      params,
      options
    ) as any;
  }
  /**
   * Retrieve an API Key. For livemode secret keys, secret tokens are only returned on creation, and never returned here.
   */
  retrieve(
    id: string,
    params?: V2.Iam.ApiKeyRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ApiKey>> {
    return this._makeRequest(
      'GET',
      `/v2/iam/api_keys/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Update an API Key. Only parameters that are specified in the request will be updated.
   */
  update(
    id: string,
    params?: V2.Iam.ApiKeyUpdateParams,
    options?: RequestOptions
  ): Promise<Response<ApiKey>> {
    return this._makeRequest(
      'POST',
      `/v2/iam/api_keys/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Expire an API Key. The specified key becomes invalid immediately.
   */
  expire(
    id: string,
    params?: V2.Iam.ApiKeyExpireParams,
    options?: RequestOptions
  ): Promise<Response<ApiKey>> {
    return this._makeRequest(
      'POST',
      `/v2/iam/api_keys/${id}/expire`,
      params,
      options
    ) as any;
  }
  /**
   * Rotate an API Key. A new key with the same properties is created and returned. The existing key is expired immediately, unless an expiry time is specified.
   */
  rotate(
    id: string,
    params?: V2.Iam.ApiKeyRotateParams,
    options?: RequestOptions
  ): Promise<Response<ApiKey>> {
    return this._makeRequest(
      'POST',
      `/v2/iam/api_keys/${id}/rotate`,
      params,
      options
    ) as any;
  }
}
export interface ApiKey {
  /**
   * Unique identifier of the API key.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.iam.api_key';

  /**
   * Timestamp when the API key was created.
   */
  created: string;

  /**
   * Timestamp when the API key expires.
   */
  expires_at?: string;

  /**
   * List of IP addresses allowed to use this API key. Addresses use IPv4 protocol, and may be a CIDR range (e.g., [100.10.38.255, 100.10.38.0/24]).
   */
  ip_allowlist: Array<string>;

  /**
   * Timestamp when the API key was last used.
   */
  last_used?: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Account that manages this API key (for keys managed by platforms).
   */
  managed_by?: V2.Iam.ApiKey.ManagedBy;

  /**
   * Name of the API key.
   */
  name?: string;

  /**
   * Note or description for the API key.
   */
  note?: string;

  /**
   * Token set for a publishable key.
   */
  publishable_key?: V2.Iam.ApiKey.PublishableKey;

  /**
   * Token set for a secret key.
   */
  secret_key?: V2.Iam.ApiKey.SecretKey;

  /**
   * Current status of the API key (e.g., active, expired).
   */
  status: V2.Iam.ApiKey.Status;

  /**
   * Type of the API key.
   */
  type: V2.Iam.ApiKey.Type;
}
export namespace V2 {
  export namespace Iam {
    export namespace ApiKey {
      export interface ManagedBy {
        /**
         * The type of entity.
         */
        type: 'application';

        /**
         * An application.
         */
        application?: ManagedBy.Application;
      }

      export interface PublishableKey {
        /**
         * The plaintext token for the API key.
         */
        token: string;
      }

      export interface SecretKey {
        /**
         * The encrypted secret for the API key. Only included when a key is first created.
         */
        encrypted_secret?: SecretKey.EncryptedSecret;

        /**
         * Redacted version of the secret token for display purposes.
         */
        secret_token_redacted?: string;

        /**
         * The plaintext token for the API key. Only included for testmode keys.
         */
        token?: string;
      }

      export type Status = 'active' | 'expired';

      export type Type = 'publishable_key' | 'secret_key';

      export namespace ManagedBy {
        export interface Application {
          /**
           * Identifier of the application.
           */
          id: string;
        }
      }

      export namespace SecretKey {
        export interface EncryptedSecret {
          /**
           * The encrypted secret data in base64 format.
           */
          ciphertext: string;

          /**
           * The format of the encrypted secret (e.g., jwe_compact).
           */
          format: string;

          /**
           * The caller's identifier of the public key provided.
           */
          recipient_key_id?: string;
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Iam {
    export interface ApiKeyCreateParams {
      /**
       * Type of the API key to create (secret or publishable).
       */
      type: ApiKeyCreateParams.Type;

      /**
       * Name for the API key.
       */
      name?: string;

      /**
       * Note or description for the API key.
       */
      note?: string;

      /**
       * Public key for encrypting the API key secret.
       * This must a PEM-formatted RSA key suitable for encryption, >= 2048 bits.
       * A public key is required when creating secret keys.
       * Publishable keys are not encrypted and a public key should not be included.
       */
      public_key?: ApiKeyCreateParams.PublicKey;
    }

    export namespace ApiKeyCreateParams {
      export type Type = 'publishable_key' | 'secret_key';

      export interface PublicKey {
        /**
         * Caller's identifier of the public key. This is used for tracking purposes only, and will be echoed in the response if provided.
         */
        id?: string;

        /**
         * PEM-formatted public key.
         */
        pem_key?: PublicKey.PemKey;
      }

      export namespace PublicKey {
        export interface PemKey {
          /**
           * The encryption algorithm used with this key (e.g., RSA).
           */
          algorithm: string;

          /**
           * The PEM-encoded public key data. Newlines are required between header/footer and body, and optional within the body.
           */
          data: string;
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Iam {
    export interface ApiKeyRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Iam {
    export interface ApiKeyUpdateParams {
      /**
       * Name to set for the API key. If blank, the field is left unchanged.
       */
      name?: string;

      /**
       * Note or description to set for the API key. If blank, the field is left unchanged.
       */
      note?: string;
    }
  }
}
export namespace V2 {
  export namespace Iam {
    export interface ApiKeyListParams {
      /**
       * Whether to include expired API keys in the response.
       */
      include_expired?: boolean;

      /**
       * Limit of items to return per page.
       */
      limit?: number;
    }
  }
}
export namespace V2 {
  export namespace Iam {
    export interface ApiKeyExpireParams {}
  }
}
export namespace V2 {
  export namespace Iam {
    export interface ApiKeyRotateParams {
      /**
       * Duration in minutes before the current key expires, with a maximum of 7 days (10080 minutes).
       * If not provided, the current key expires immediately.
       */
      expire_current_key_in_minutes?: number;

      /**
       * Public key for encrypting the new API key secret.
       * This must a PEM-formatted RSA key suitable for encryption, >= 2048 bits.
       * A public key is required when rotating secret keys.
       * Publishable keys are not encrypted and a public key should not be included.
       */
      public_key?: ApiKeyRotateParams.PublicKey;
    }

    export namespace ApiKeyRotateParams {
      export interface PublicKey {
        /**
         * Caller's identifier of the public key. This is used for tracking purposes only, and will be echoed in the response if provided.
         */
        id?: string;

        /**
         * PEM-formatted public key.
         */
        pem_key?: PublicKey.PemKey;
      }

      export namespace PublicKey {
        export interface PemKey {
          /**
           * The encryption algorithm used with this key (e.g., RSA).
           */
          algorithm: string;

          /**
           * The PEM-encoded public key data. Newlines are required between header/footer and body, and optional within the body.
           */
          data: string;
        }
      }
    }
  }
}
