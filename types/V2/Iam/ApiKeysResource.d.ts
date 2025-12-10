// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Iam {
        interface ApiKeyCreateParams {
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

        namespace ApiKeyCreateParams {
          interface PublicKey {
            /**
             * Caller's identifier of the public key. This is used for tracking purposes only, and will be echoed in the response if provided.
             */
            id?: string;

            /**
             * PEM-formatted public key.
             */
            pem_key?: PublicKey.PemKey;
          }

          namespace PublicKey {
            interface PemKey {
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

          type Type = 'publishable_key' | 'secret_key';
        }
      }

      namespace Iam {
        interface ApiKeyRetrieveParams {}
      }

      namespace Iam {
        interface ApiKeyUpdateParams {
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

      namespace Iam {
        interface ApiKeyListParams {
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

      namespace Iam {
        interface ApiKeyExpireParams {
          /**
           * Duration in minutes before the key expires (defaults to immediate).
           */
          expire_in_minutes?: number;
        }
      }

      namespace Iam {
        interface ApiKeyRotateParams {
          /**
           * Duration in minutes before the current key expires.
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

        namespace ApiKeyRotateParams {
          interface PublicKey {
            /**
             * Caller's identifier of the public key. This is used for tracking purposes only, and will be echoed in the response if provided.
             */
            id?: string;

            /**
             * PEM-formatted public key.
             */
            pem_key?: PublicKey.PemKey;
          }

          namespace PublicKey {
            interface PemKey {
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

      namespace Iam {
        class ApiKeysResource {
          /**
           * Create an API key.
           */
          create(
            params: ApiKeyCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Iam.ApiKey>>;

          /**
           * Retrieve an API key.
           */
          retrieve(
            id: string,
            params?: ApiKeyRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Iam.ApiKey>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Iam.ApiKey>>;

          /**
           * Update an API key.
           */
          update(
            id: string,
            params?: ApiKeyUpdateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Iam.ApiKey>>;

          /**
           * List all API keys of an account.
           */
          list(
            params?: ApiKeyListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Iam.ApiKey>;
          list(options?: RequestOptions): ApiListPromise<Stripe.V2.Iam.ApiKey>;

          /**
           * Expire an API key.
           */
          expire(
            id: string,
            params?: ApiKeyExpireParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Iam.ApiKey>>;
          expire(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Iam.ApiKey>>;

          /**
           * Rotate an API key.
           */
          rotate(
            id: string,
            params?: ApiKeyRotateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Iam.ApiKey>>;
          rotate(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Iam.ApiKey>>;
        }
      }
    }
  }
}
