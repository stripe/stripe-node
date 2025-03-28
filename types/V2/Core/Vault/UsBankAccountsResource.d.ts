// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        namespace Vault {
          interface UsBankAccountCreateParams {
            /**
             * The account number of the bank account.
             */
            account_number: string;

            /**
             * Closed Enum. The type of the bank account (checking or savings).
             */
            bank_account_type?: UsBankAccountCreateParams.BankAccountType;

            /**
             * The fedwire routing number of the bank account. Note that certain banks have the same ACH and wire routing number.
             */
            fedwire_routing_number?: string;

            /**
             * The ACH routing number of the bank account. Note that certain banks have the same ACH and wire routing number.
             */
            routing_number?: string;
          }

          namespace UsBankAccountCreateParams {
            type BankAccountType = 'checking' | 'savings';
          }
        }
      }

      namespace Core {
        namespace Vault {
          interface UsBankAccountRetrieveParams {}
        }
      }

      namespace Core {
        namespace Vault {
          interface UsBankAccountUpdateParams {
            /**
             * The bank account's fedwire routing number can be provided for update it was were empty previously.
             */
            fedwire_routing_number?: string;

            /**
             * The bank account's ACH routing number can be provided for update if it was empty previously.
             */
            routing_number?: string;
          }
        }
      }

      namespace Core {
        namespace Vault {
          interface UsBankAccountArchiveParams {}
        }
      }

      namespace Core {
        namespace Vault {
          class UsBankAccountsResource {
            /**
             * Create a UsBankAccount object.
             * @throws Stripe.BlockedByStripeError
             * @throws Stripe.InvalidPaymentMethodError
             * @throws Stripe.QuotaExceededError
             */
            create(
              params: UsBankAccountCreateParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.Vault.UsBankAccount>>;

            /**
             * Retrieve a UsBankAccount object.
             */
            retrieve(
              id: string,
              params?: UsBankAccountRetrieveParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.Vault.UsBankAccount>>;
            retrieve(
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.Vault.UsBankAccount>>;

            /**
             * Update a UsBankAccount object. This is limited to supplying a previously empty routing_number field.
             * @throws Stripe.BlockedByStripeError
             * @throws Stripe.InvalidPaymentMethodError
             * @throws Stripe.QuotaExceededError
             */
            update(
              id: string,
              params?: UsBankAccountUpdateParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.Vault.UsBankAccount>>;

            /**
             * Archive a UsBankAccount object. UsBankAccount objects will not be automatically archived by Stripe.
             * Archived UsBankAccount objects cannot be used as outbound destinations
             * and will not appear in the outbound destination list.
             * @throws Stripe.ControlledByDashboardError
             */
            archive(
              id: string,
              params?: UsBankAccountArchiveParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.Vault.UsBankAccount>>;
            archive(
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.Vault.UsBankAccount>>;
          }
        }
      }
    }
  }
}
