// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Iam {
        /**
         * An API key.
         */
        interface ApiKey {
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
          managed_by?: ApiKey.ManagedBy;

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
          publishable_key?: ApiKey.PublishableKey;

          /**
           * Token set for a secret key.
           */
          secret_key?: ApiKey.SecretKey;

          /**
           * Current status of the API key (e.g., active, expired).
           */
          status: ApiKey.Status;

          /**
           * Type of the API key.
           */
          type: ApiKey.Type;
        }

        namespace ApiKey {
          interface ManagedBy {
            /**
             * The type of entity.
             */
            type: 'application';

            /**
             * An application.
             */
            application?: ManagedBy.Application;
          }

          namespace ManagedBy {
            interface Application {
              /**
               * Identifier of the application.
               */
              id: string;
            }
          }

          interface PublishableKey {
            /**
             * The plaintext token for the API key.
             */
            token: string;
          }

          interface SecretKey {
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

          namespace SecretKey {
            interface EncryptedSecret {
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

          type Status = 'active' | 'expired';

          type Type = 'publishable_key' | 'secret_key';
        }
      }
    }
  }
}
