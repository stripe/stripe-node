// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The Token object.
     */
    interface Token {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'token';

      /**
       * These bank accounts are payment methods on `Customer` objects.
       *
       * On the other hand [External Accounts](https://stripe.com/docs/api#external_accounts) are transfer
       * destinations on `Account` objects for [Custom accounts](https://stripe.com/docs/connect/custom-accounts).
       * They can be bank accounts or debit cards as well, and are documented in the links above.
       *
       * Related guide: [Bank Debits and Transfers](https://stripe.com/docs/payments/bank-debits-transfers).
       */
      bank_account?: Stripe.BankAccount;

      /**
       * You can store multiple cards on a customer in order to charge the customer
       * later. You can also store multiple debit cards on a recipient in order to
       * transfer to those cards later.
       *
       * Related guide: [Card Payments with Sources](https://stripe.com/docs/sources/cards).
       */
      card?: Stripe.Card;

      /**
       * IP address of the client that generated the token.
       */
      client_ip: string | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Type of the token: `account`, `bank_account`, `card`, or `pii`.
       */
      type: string;

      /**
       * Whether this token has already been used (tokens can be used only once).
       */
      used: boolean;
    }

    interface TokenCreateParams {
      /**
       * Information for the account this token will represent.
       */
      account?: TokenCreateParams.Account;

      /**
       * The bank account this token will represent.
       */
      bank_account?: string | TokenCreateParams.BankAccount;

      card?: TokenCreateParams.Card | string;

      /**
       * The customer (owned by the application's account) for which to create a token. This can be used only with an [OAuth access token](https://stripe.com/docs/connect/standard-accounts) or [Stripe-Account header](https://stripe.com/docs/connect/authentication). For more details, see [Cloning Saved Payment Methods](https://stripe.com/docs/connect/cloning-saved-payment-methods).
       */
      customer?: string;

      /**
       * The updated CVC value this token will represent.
       */
      cvc_update?: TokenCreateParams.CvcUpdate;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Information for the person this token will represent.
       */
      person?: TokenCreateParams.Person;

      /**
       * The PII this token will represent.
       */
      pii?: TokenCreateParams.Pii;
    }

    namespace TokenCreateParams {
      interface Account {
        /**
         * The business type.
         */
        business_type?: Account.BusinessType;

        /**
         * Information about the company or business.
         */
        company?: Account.Company;

        /**
         * Information about the person represented by the account.
         */
        individual?: Account.Individual;

        /**
         * Whether the user described by the data in the token has been shown [the Stripe Connected Account Agreement](https://stripe.com/docs/connect/account-tokens#stripe-connected-account-agreement). When creating an account token to create a new Connect account, this value must be `true`.
         */
        tos_shown_and_accepted?: boolean;
      }

      namespace Account {
        type BusinessType =
          | 'company'
          | 'government_entity'
          | 'individual'
          | 'non_profit';

        interface Company {
          /**
           * The company's primary address.
           */
          address?: Company.Address;

          /**
           * The Kana variation of the company's primary address (Japan only).
           */
          address_kana?: Stripe.JapanAddressParam;

          /**
           * The Kanji variation of the company's primary address (Japan only).
           */
          address_kanji?: Stripe.JapanAddressParam;

          /**
           * Whether the company's directors have been provided. Set this Boolean to `true` after creating all the company's directors with [the Persons API](https://stripe.com/docs/api/persons) for accounts with a `relationship.director` requirement. This value is not automatically set to `true` after creating directors, so it needs to be updated to indicate all directors have been provided.
           */
          directors_provided?: boolean;

          /**
           * Whether the company's executives have been provided. Set this Boolean to `true` after creating all the company's executives with [the Persons API](https://stripe.com/docs/api/persons) for accounts with a `relationship.executive` requirement.
           */
          executives_provided?: boolean;

          /**
           * The company's legal name.
           */
          name?: string;

          /**
           * The Kana variation of the company's legal name (Japan only).
           */
          name_kana?: string;

          /**
           * The Kanji variation of the company's legal name (Japan only).
           */
          name_kanji?: string;

          /**
           * Whether the company's owners have been provided. Set this Boolean to `true` after creating all the company's owners with [the Persons API](https://stripe.com/docs/api/persons) for accounts with a `relationship.owner` requirement.
           */
          owners_provided?: boolean;

          /**
           * This hash is used to attest that the beneficial owner information provided to Stripe is both current and correct.
           */
          ownership_declaration?: Company.OwnershipDeclaration;

          /**
           * Whether the user described by the data in the token has been shown the Ownership Declaration and indicated that it is correct.
           */
          ownership_declaration_shown_and_signed?: boolean;

          /**
           * The company's phone number (used for verification).
           */
          phone?: string;

          /**
           * The identification number given to a company when it is registered or incorporated, if distinct from the identification number used for filing taxes. (Examples are the CIN for companies and LLP IN for partnerships in India, and the Company Registration Number in Hong Kong).
           */
          registration_number?: string;

          /**
           * The category identifying the legal structure of the company or legal entity. See [Business structure](https://stripe.com/docs/connect/identity-verification#business-structure) for more details.
           */
          structure?: Stripe.Emptyable<Company.Structure>;

          /**
           * The business ID number of the company, as appropriate for the company's country. (Examples are an Employer ID Number in the U.S., a Business Number in Canada, or a Company Number in the UK.)
           */
          tax_id?: string;

          /**
           * The jurisdiction in which the `tax_id` is registered (Germany-based companies only).
           */
          tax_id_registrar?: string;

          /**
           * The VAT number of the company.
           */
          vat_id?: string;

          /**
           * Information on the verification state of the company.
           */
          verification?: Company.Verification;
        }

        namespace Company {
          interface Address extends Omit<Stripe.AddressParam, 'line1'> {
            line1?: string;
          }

          interface OwnershipDeclaration {
            /**
             * The Unix timestamp marking when the beneficial owner attestation was made.
             */
            date?: number;

            /**
             * The IP address from which the beneficial owner attestation was made.
             */
            ip?: string;

            /**
             * The user agent of the browser from which the beneficial owner attestation was made.
             */
            user_agent?: string;
          }

          type Structure =
            | 'free_zone_establishment'
            | 'free_zone_llc'
            | 'government_instrumentality'
            | 'governmental_unit'
            | 'incorporated_non_profit'
            | 'limited_liability_partnership'
            | 'llc'
            | 'multi_member_llc'
            | 'private_company'
            | 'private_corporation'
            | 'private_partnership'
            | 'public_company'
            | 'public_corporation'
            | 'public_partnership'
            | 'single_member_llc'
            | 'sole_establishment'
            | 'sole_proprietorship'
            | 'tax_exempt_government_instrumentality'
            | 'unincorporated_association'
            | 'unincorporated_non_profit';

          interface Verification {
            /**
             * A document verifying the business.
             */
            document?: Verification.Document;
          }

          namespace Verification {
            interface Document {
              /**
               * The back of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `additional_verification`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
               */
              back?: string;

              /**
               * The front of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `additional_verification`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
               */
              front?: string;
            }
          }
        }

        interface Individual {
          /**
           * The individual's primary address.
           */
          address?: Individual.Address;

          /**
           * The Kana variation of the the individual's primary address (Japan only).
           */
          address_kana?: Stripe.JapanAddressParam;

          /**
           * The Kanji variation of the the individual's primary address (Japan only).
           */
          address_kanji?: Stripe.JapanAddressParam;

          /**
           * The individual's date of birth.
           */
          dob?: Stripe.Emptyable<Individual.Dob>;

          /**
           * The individual's email address.
           */
          email?: string;

          /**
           * The individual's first name.
           */
          first_name?: string;

          /**
           * The Kana variation of the the individual's first name (Japan only).
           */
          first_name_kana?: string;

          /**
           * The Kanji variation of the individual's first name (Japan only).
           */
          first_name_kanji?: string;

          /**
           * A list of alternate names or aliases that the individual is known by.
           */
          full_name_aliases?: Stripe.Emptyable<Array<string>>;

          /**
           * The individual's gender (International regulations require either "male" or "female").
           */
          gender?: string;

          /**
           * The government-issued ID number of the individual, as appropriate for the representative's country. (Examples are a Social Security Number in the U.S., or a Social Insurance Number in Canada). Instead of the number itself, you can also provide a [PII token created with Stripe.js](https://stripe.com/docs/js/tokens_sources/create_token?type=pii).
           */
          id_number?: string;

          /**
           * The individual's last name.
           */
          last_name?: string;

          /**
           * The Kana varation of the individual's last name (Japan only).
           */
          last_name_kana?: string;

          /**
           * The Kanji varation of the individual's last name (Japan only).
           */
          last_name_kanji?: string;

          /**
           * The individual's maiden name.
           */
          maiden_name?: string;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
           */
          metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

          /**
           * The individual's phone number.
           */
          phone?: string;

          /**
           * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
           */
          political_exposure?: Individual.PoliticalExposure;

          /**
           * The individual's registered address.
           */
          registered_address?: Individual.RegisteredAddress;

          /**
           * The last four digits of the individual's Social Security Number (U.S. only).
           */
          ssn_last_4?: string;

          /**
           * The individual's verification document information.
           */
          verification?: Individual.Verification;
        }

        namespace Individual {
          interface Address extends Omit<Stripe.AddressParam, 'line1'> {
            line1?: string;
          }

          interface Dob {
            /**
             * The day of birth, between 1 and 31.
             */
            day: number;

            /**
             * The month of birth, between 1 and 12.
             */
            month: number;

            /**
             * The four-digit year of birth.
             */
            year: number;
          }

          type PoliticalExposure = 'existing' | 'none';

          interface RegisteredAddress
            extends Omit<Stripe.AddressParam, 'line1'> {
            line1?: string;
          }

          interface Verification {
            /**
             * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
             */
            additional_document?: Verification.AdditionalDocument;

            /**
             * An identifying document, either a passport or local ID card.
             */
            document?: Verification.Document;
          }

          namespace Verification {
            interface AdditionalDocument {
              /**
               * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
               */
              back?: string;

              /**
               * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
               */
              front?: string;
            }

            interface Document {
              /**
               * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
               */
              back?: string;

              /**
               * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
               */
              front?: string;
            }
          }
        }
      }

      interface BankAccount {
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
         * The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`.
         */
        account_type?: BankAccount.AccountType;

        /**
         * The country in which the bank account is located.
         */
        country: string;

        /**
         * The currency the bank account is in. This must be a country/currency pairing that [Stripe supports.](https://stripe.com/docs/payouts)
         */
        currency?: string;

        /**
         * The routing number, sort code, or other country-appropriateinstitution number for the bank account. For US bank accounts, this is required and should bethe ACH routing number, not the wire routing number. If you are providing an IBAN for`account_number`, this field is not required.
         */
        routing_number?: string;
      }

      namespace BankAccount {
        type AccountHolderType = 'company' | 'individual';

        type AccountType = 'checking' | 'futsu' | 'savings' | 'toza';
      }

      interface Card {
        address_city?: string;

        address_country?: string;

        address_line1?: string;

        address_line2?: string;

        address_state?: string;

        address_zip?: string;

        currency?: string;

        cvc?: string;

        exp_month: string;

        exp_year: string;

        name?: string;

        number: string;
      }

      interface CvcUpdate {
        /**
         * The CVC value, in string form.
         */
        cvc: string;
      }

      interface Person {
        /**
         * The person's address.
         */
        address?: Person.Address;

        /**
         * The Kana variation of the person's address (Japan only).
         */
        address_kana?: Stripe.JapanAddressParam;

        /**
         * The Kanji variation of the person's address (Japan only).
         */
        address_kanji?: Stripe.JapanAddressParam;

        /**
         * The person's date of birth.
         */
        dob?: Stripe.Emptyable<Person.Dob>;

        /**
         * Documents that may be submitted to satisfy various informational requests.
         */
        documents?: Person.Documents;

        /**
         * The person's email address.
         */
        email?: string;

        /**
         * The person's first name.
         */
        first_name?: string;

        /**
         * The Kana variation of the person's first name (Japan only).
         */
        first_name_kana?: string;

        /**
         * The Kanji variation of the person's first name (Japan only).
         */
        first_name_kanji?: string;

        /**
         * A list of alternate names or aliases that the person is known by.
         */
        full_name_aliases?: Stripe.Emptyable<Array<string>>;

        /**
         * The person's gender (International regulations require either "male" or "female").
         */
        gender?: string;

        /**
         * The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://stripe.com/docs/js/tokens_sources/create_token?type=pii).
         */
        id_number?: string;

        /**
         * The person's last name.
         */
        last_name?: string;

        /**
         * The Kana variation of the person's last name (Japan only).
         */
        last_name_kana?: string;

        /**
         * The Kanji variation of the person's last name (Japan only).
         */
        last_name_kanji?: string;

        /**
         * The person's maiden name.
         */
        maiden_name?: string;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

        /**
         * The country where the person is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)), or "XX" if unavailable.
         */
        nationality?: string;

        /**
         * The person's phone number.
         */
        phone?: string;

        /**
         * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
         */
        political_exposure?: string;

        /**
         * The person's registered address.
         */
        registered_address?: Person.RegisteredAddress;

        /**
         * The relationship that this person has with the account's legal entity.
         */
        relationship?: Person.Relationship;

        /**
         * The last four digits of the person's Social Security number (U.S. only).
         */
        ssn_last_4?: string;

        /**
         * The person's verification status.
         */
        verification?: Person.Verification;
      }

      namespace Person {
        interface Address extends Omit<Stripe.AddressParam, 'line1'> {
          line1?: string;
        }

        interface Dob {
          /**
           * The day of birth, between 1 and 31.
           */
          day: number;

          /**
           * The month of birth, between 1 and 12.
           */
          month: number;

          /**
           * The four-digit year of birth.
           */
          year: number;
        }

        interface Documents {
          /**
           * One or more documents that demonstrate proof that this person is authorized to represent the company.
           */
          company_authorization?: Documents.CompanyAuthorization;

          /**
           * One or more documents showing the person's passport page with photo and personal data.
           */
          passport?: Documents.Passport;

          /**
           * One or more documents showing the person's visa required for living in the country where they are residing.
           */
          visa?: Documents.Visa;
        }

        namespace Documents {
          interface CompanyAuthorization {
            /**
             * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
          }

          interface Passport {
            /**
             * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
          }

          interface Visa {
            /**
             * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
          }
        }

        interface RegisteredAddress extends Omit<Stripe.AddressParam, 'line1'> {
          line1?: string;
        }

        interface Relationship {
          /**
           * Whether the person is a director of the account's legal entity. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
           */
          director?: boolean;

          /**
           * Whether the person has significant responsibility to control, manage, or direct the organization.
           */
          executive?: boolean;

          /**
           * Whether the person is an owner of the account's legal entity.
           */
          owner?: boolean;

          /**
           * The percent owned by the person of the account's legal entity.
           */
          percent_ownership?: Stripe.Emptyable<number>;

          /**
           * Whether the person is authorized as the primary representative of the account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
           */
          representative?: boolean;

          /**
           * The person's title (e.g., CEO, Support Engineer).
           */
          title?: string;
        }

        interface Verification {
          /**
           * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
           */
          additional_document?: Verification.AdditionalDocument;

          /**
           * An identifying document, either a passport or local ID card.
           */
          document?: Verification.Document;
        }

        namespace Verification {
          interface AdditionalDocument {
            /**
             * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            back?: string;

            /**
             * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            front?: string;
          }

          interface Document {
            /**
             * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            back?: string;

            /**
             * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            front?: string;
          }
        }
      }

      interface Pii {
        /**
         * The `id_number` for the PII, in string form.
         */
        id_number?: string;
      }
    }

    interface TokenRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class TokensResource {
      /**
       * Creates a single-use token that represents a bank account's details.
       * This token can be used with any API method in place of a bank account dictionary. This token can be used only once, by attaching it to a [Custom account](https://stripe.com/docs/api#accounts).
       */
      create(
        params?: TokenCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Token>>;
      create(options?: RequestOptions): Promise<Stripe.Response<Stripe.Token>>;

      /**
       * Retrieves the token with the given ID.
       */
      retrieve(
        id: string,
        params?: TokenRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Token>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Token>>;
    }
  }
}
