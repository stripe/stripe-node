// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        interface FinancialAccountCreateParams {
          /**
           * The type of FinancialAccount to create.
           */
          type: 'storage';

          /**
           * A descriptive name for the FinancialAccount, up to 50 characters long. This name will be used in the Stripe Dashboard and embedded components.
           */
          display_name?: string;

          /**
           * Metadata associated with the FinancialAccount.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * Parameters specific to creating `storage` type FinancialAccounts.
           */
          storage?: FinancialAccountCreateParams.Storage;
        }

        namespace FinancialAccountCreateParams {
          interface Storage {
            /**
             * The currencies that this FinancialAccount can hold.
             */
            holds_currencies: Array<string>;
          }
        }
      }

      namespace MoneyManagement {
        interface FinancialAccountRetrieveParams {}
      }

      namespace MoneyManagement {
        interface FinancialAccountUpdateParams {
          /**
           * A descriptive name for the FinancialAccount, up to 50 characters long. This name will be used in the Stripe Dashboard and embedded components.
           */
          display_name?: string;

          /**
           * Metadata associated with the FinancialAccount.
           */
          metadata?: Stripe.MetadataParam;
        }
      }

      namespace MoneyManagement {
        interface FinancialAccountListParams {
          /**
           * The page limit.
           */
          limit?: number;

          /**
           * The status of the FinancialAccount to filter by. By default, closed FinancialAccounts are not returned.
           */
          status?: FinancialAccountListParams.Status;

          /**
           * Filter for FinancialAccount `type`. By default, FinancialAccounts of any `type` are returned.
           */
          types?: Array<FinancialAccountListParams.Type>;
        }

        namespace FinancialAccountListParams {
          type Status = 'closed' | 'open' | 'pending';

          type Type = 'payments' | 'storage';
        }
      }

      namespace MoneyManagement {
        interface FinancialAccountCloseParams {
          /**
           * The addresses to forward any incoming transactions to.
           */
          forwarding_settings?: FinancialAccountCloseParams.ForwardingSettings;
        }

        namespace FinancialAccountCloseParams {
          interface ForwardingSettings {
            /**
             * The address to send forwarded payments to.
             */
            payment_method?: string;

            /**
             * The address to send forwarded payouts to.
             */
            payout_method?: string;
          }
        }
      }

      namespace MoneyManagement {
        class FinancialAccountsResource {
          /**
           * Creates a new FinancialAccount.
           * @throws Stripe.AlreadyExistsError
           * @throws Stripe.FeatureNotEnabledError
           */
          create(
            params: FinancialAccountCreateParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAccount>
          >;

          /**
           * Retrieves the details of an existing FinancialAccount.
           */
          retrieve(
            id: string,
            params?: FinancialAccountRetrieveParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAccount>
          >;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAccount>
          >;

          /**
           * Updates an existing FinancialAccount.
           */
          update(
            id: string,
            params?: FinancialAccountUpdateParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAccount>
          >;

          /**
           * Lists FinancialAccounts in this compartment.
           */
          list(
            params?: FinancialAccountListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.FinancialAccount>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.FinancialAccount>;

          /**
           * Closes a FinancialAccount with or without forwarding settings.
           * @throws Stripe.NonZeroBalanceError
           */
          close(
            id: string,
            params?: FinancialAccountCloseParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAccount>
          >;
          close(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAccount>
          >;
        }
      }
    }
  }
}
