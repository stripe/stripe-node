// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface ExternalAccountCreateParams {
      /**
       * Either a token, like the ones returned by [Stripe.js](https://docs.stripe.com/js), or a dictionary containing a user's external account details (with the options shown below).
       */
      external_account:
        | string
        | ExternalAccountCreateParams.Card
        | ExternalAccountCreateParams.BankAccount
        | ExternalAccountCreateParams.CardToken;

      /**
       * When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.
       */
      default_for_currency?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;
    }

    namespace ExternalAccountCreateParams {
      interface BankAccount {
        object: 'bank_account';

        /**
         * The name of the person or business that owns the bank account.This field is required when attaching the bank account to a `Customer` object.
         */
        account_holder_name?: string;

        /**
         * The type of entity that holds the account. It can be `company` or `individual`. This field is required when attaching the bank account to a `Customer` object.
         */
        account_holder_type?: BankAccount.AccountHolderType;

        /**
         * The account number for the bank account, in string form. Must be a checking account.
         */
        account_number: string;

        /**
         * The country in which the bank account is located.
         */
        country: string;

        /**
         * The currency the bank account is in. This must be a country/currency pairing that [Stripe supports.](docs/payouts)
         */
        currency?: string;

        /**
         * The routing number, sort code, or other country-appropriate institution number for the bank account. For US bank accounts, this is required and should be the ACH routing number, not the wire routing number. If you are providing an IBAN for `account_number`, this field is not required.
         */
        routing_number?: string;
      }

      namespace BankAccount {
        type AccountHolderType = 'company' | 'individual';
      }

      interface Card {
        object: 'card';

        address_city?: string;

        address_country?: string;

        address_line1?: string;

        address_line2?: string;

        address_state?: string;

        address_zip?: string;

        currency?: string;

        cvc?: string;

        exp_month: number;

        exp_year: number;

        name?: string;

        number: string;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: Stripe.MetadataParam;
      }

      interface CardToken {
        object: 'card';

        currency?: string;

        token: string;
      }
    }

    interface ExternalAccountRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ExternalAccountUpdateParams {
      /**
       * The name of the person or business that owns the bank account.
       */
      account_holder_name?: string;

      /**
       * The type of entity that holds the account. This can be either `individual` or `company`.
       */
      account_holder_type?: Stripe.Emptyable<
        ExternalAccountUpdateParams.AccountHolderType
      >;

      /**
       * The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`.
       */
      account_type?: ExternalAccountUpdateParams.AccountType;

      /**
       * City/District/Suburb/Town/Village.
       */
      address_city?: string;

      /**
       * Billing address country, if provided when creating card.
       */
      address_country?: string;

      /**
       * Address line 1 (Street address/PO Box/Company name).
       */
      address_line1?: string;

      /**
       * Address line 2 (Apartment/Suite/Unit/Building).
       */
      address_line2?: string;

      /**
       * State/County/Province/Region.
       */
      address_state?: string;

      /**
       * ZIP or postal code.
       */
      address_zip?: string;

      /**
       * When set to true, this becomes the default external account for its currency.
       */
      default_for_currency?: boolean;

      /**
       * Documents that may be submitted to satisfy various informational requests.
       */
      documents?: ExternalAccountUpdateParams.Documents;

      /**
       * Two digit number representing the card's expiration month.
       */
      exp_month?: string;

      /**
       * Four digit number representing the card's expiration year.
       */
      exp_year?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Cardholder name.
       */
      name?: string;
    }

    namespace ExternalAccountUpdateParams {
      type AccountHolderType = 'company' | 'individual';

      type AccountType = 'checking' | 'futsu' | 'savings' | 'toza';

      interface Documents {
        /**
         * One or more documents that support the [Bank account ownership verification](https://support.stripe.com/questions/bank-account-ownership-verification) requirement. Must be a document associated with the bank account that displays the last 4 digits of the account number, either a statement or a check.
         */
        bank_account_ownership_verification?: Documents.BankAccountOwnershipVerification;
      }

      namespace Documents {
        interface BankAccountOwnershipVerification {
          /**
           * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }
      }
    }

    interface ExternalAccountListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Filter external accounts according to a particular object type.
       */
      object?: ExternalAccountListParams.Object;
    }

    namespace ExternalAccountListParams {
      type Object = 'bank_account' | 'card';
    }

    interface ExternalAccountDeleteParams {}

    class ExternalAccountsResource {
      /**
       * Create an external account for a given connected account.
       */
      create(
        params: ExternalAccountCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ExternalAccount>>;

      /**
       * Retrieve a specified external account for a given account.
       */
      retrieve(
        id: string,
        params?: ExternalAccountRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ExternalAccount>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ExternalAccount>>;

      /**
       * Updates the metadata, account holder name, account holder type of a bank account belonging to
       * a connected account and optionally sets it as the default for its currency. Other bank account
       * details are not editable by design.
       *
       * You can only update bank accounts when [account.controller.requirement_collection is application, which includes <a href="/connect/custom-accounts">Custom accounts](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection).
       *
       * You can re-enable a disabled bank account by performing an update call without providing any
       * arguments or changes.
       */
      update(
        id: string,
        params?: ExternalAccountUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ExternalAccount>>;

      /**
       * List external accounts for an account.
       */
      list(
        params?: ExternalAccountListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.ExternalAccount>;
      list(options?: RequestOptions): ApiListPromise<Stripe.ExternalAccount>;

      /**
       * Delete a specified external account for a given account.
       */
      del(
        id: string,
        params?: ExternalAccountDeleteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedExternalAccount>>;
      del(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedExternalAccount>>;
    }
  }
}
