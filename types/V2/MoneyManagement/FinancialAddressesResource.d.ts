// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        interface FinancialAddressCreateParams {
          /**
           * The ID of the FinancialAccount the new FinancialAddress should be associated with.
           */
          financial_account: string;

          /**
           * The type of FinancialAddress details to provision.
           */
          type: FinancialAddressCreateParams.Type;

          /**
           * Optional SEPA Bank account options, used to configure the type of SEPA Bank account to create, such as the originating country.
           */
          sepa_bank_account?: FinancialAddressCreateParams.SepaBankAccount;
        }

        namespace FinancialAddressCreateParams {
          interface SepaBankAccount {
            /**
             * The originating country of the SEPA Bank account.
             */
            country: string;
          }

          type Type =
            | 'gb_bank_account'
            | 'sepa_bank_account'
            | 'us_bank_account';
        }
      }

      namespace MoneyManagement {
        interface FinancialAddressRetrieveParams {
          /**
           * Open Enum. A list of fields to reveal in the FinancialAddresses returned.
           */
          include?: Array<FinancialAddressRetrieveParams.Include>;
        }

        namespace FinancialAddressRetrieveParams {
          type Include =
            | 'credentials.gb_bank_account.account_number'
            | 'credentials.sepa_bank_account.iban'
            | 'credentials.us_bank_account.account_number';
        }
      }

      namespace MoneyManagement {
        interface FinancialAddressListParams {
          /**
           * The ID of the FinancialAccount for which FinancialAddresses are to be returned.
           */
          financial_account?: string;

          /**
           * Open Enum. A list of fields to reveal in the FinancialAddresses returned.
           */
          include?: Array<FinancialAddressListParams.Include>;

          /**
           * The page limit.
           */
          limit?: number;
        }

        namespace FinancialAddressListParams {
          type Include =
            | 'credentials.gb_bank_account.account_number'
            | 'credentials.sepa_bank_account.iban'
            | 'credentials.us_bank_account.account_number';
        }
      }

      namespace MoneyManagement {
        class FinancialAddressesResource {
          /**
           * Create a new FinancialAddress for a FinancialAccount.
           * @throws Stripe.FinancialAccountNotOpenError
           * @throws Stripe.FeatureNotEnabledError
           */
          create(
            params: FinancialAddressCreateParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAddress>
          >;

          /**
           * Retrieve a FinancialAddress. By default, the FinancialAddress will be returned in its unexpanded state, revealing only the last 4 digits of the account number.
           */
          retrieve(
            id: string,
            params?: FinancialAddressRetrieveParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAddress>
          >;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAddress>
          >;

          /**
           * List all FinancialAddresses for a FinancialAccount.
           */
          list(
            params?: FinancialAddressListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.FinancialAddress>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.FinancialAddress>;
        }
      }
    }
  }
}
