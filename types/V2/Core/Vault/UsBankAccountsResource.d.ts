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
          interface UsBankAccountListParams {
            /**
             * Optionally set the maximum number of results per page. Defaults to 10.
             */
            limit?: number;

            /**
             * Optionally filter by verification status. Mutually exclusive with `unverified`, `verified`, `awaiting_verification`, and `verification_failed`.
             */
            verification_status?: string;
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
          interface UsBankAccountConfirmMicrodepositsParams {
            /**
             * Two amounts received through Send Microdeposits must match the input to Confirm Microdeposits to verify US Bank Account.
             */
            amounts?: Array<number>;

            /**
             * Descriptor code received through Send Microdeposits must match the input to Confirm Microdeposits to verify US Bank Account.
             */
            descriptor_code?: string;
          }
        }
      }

      namespace Core {
        namespace Vault {
          interface UsBankAccountSendMicrodepositsParams {}
        }
      }

      namespace Core {
        namespace Vault {
          class UsBankAccountsResource {
            /**
             * Create a USBankAccount object.
             * @throws Stripe.BlockedByStripeError
             * @throws Stripe.InvalidPaymentMethodError
             * @throws Stripe.QuotaExceededError
             */
            create(
              params: UsBankAccountCreateParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.Vault.UsBankAccount>>;

            /**
             * Retrieve a USBankAccount object.
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
             * Update a USBankAccount object. This is limited to supplying a previously empty routing_number field.
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
             * List USBankAccount objects. Optionally filter by verification status.
             */
            list(
              params?: UsBankAccountListParams,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Core.Vault.UsBankAccount>;
            list(
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Core.Vault.UsBankAccount>;

            /**
             * Archive a USBankAccount object. USBankAccount objects will not be automatically archived by Stripe.
             * Archived USBankAccount objects cannot be used as outbound destinations
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

            /**
             * Confirm microdeposits amounts or descriptor code that you have received from the Send Microdeposits request. Once you correctly confirm this, this US Bank Account will be verified and eligible to transfer funds with.
             */
            confirmMicrodeposits(
              id: string,
              params?: UsBankAccountConfirmMicrodepositsParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.Vault.UsBankAccount>>;
            confirmMicrodeposits(
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.Vault.UsBankAccount>>;

            /**
             * Send microdeposits in order to verify your US Bank Account so it is eligible to transfer funds. This will start the verification process and you must Confirm Microdeposits to successfully verify your US Bank Account.
             */
            sendMicrodeposits(
              id: string,
              params?: UsBankAccountSendMicrodepositsParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.Vault.UsBankAccount>>;
            sendMicrodeposits(
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.Vault.UsBankAccount>>;
          }
        }
      }
    }
  }
}
