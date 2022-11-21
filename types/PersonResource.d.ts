// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface PersonCreateParams {
      /**
       * The person's address.
       */
      address?: Stripe.AddressParam;

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
      dob?: Stripe.Emptyable<PersonCreateParams.Dob>;

      /**
       * Documents that may be submitted to satisfy various informational requests.
       */
      documents?: PersonCreateParams.Documents;

      /**
       * The person's email address.
       */
      email?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

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
       * The person's secondary ID number, as appropriate for their country, will be used for enhanced verification checks. In Thailand, this would be the laser code found on the back of an ID card. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://stripe.com/docs/js/tokens_sources/create_token?type=pii).
       */
      id_number_secondary?: string;

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
       * A [person token](https://stripe.com/docs/connect/account-tokens), used to securely provide details to the person.
       */
      person_token?: string;

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
      registered_address?: Stripe.AddressParam;

      /**
       * The relationship that this person has with the account's legal entity.
       */
      relationship?: PersonCreateParams.Relationship;

      /**
       * The last four digits of the person's Social Security number (U.S. only).
       */
      ssn_last_4?: string;

      /**
       * The person's verification status.
       */
      verification?: PersonCreateParams.Verification;
    }

    namespace PersonCreateParams {
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

    interface PersonRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PersonUpdateParams {
      /**
       * The person's address.
       */
      address?: Stripe.AddressParam;

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
      dob?: Stripe.Emptyable<PersonUpdateParams.Dob>;

      /**
       * Documents that may be submitted to satisfy various informational requests.
       */
      documents?: PersonUpdateParams.Documents;

      /**
       * The person's email address.
       */
      email?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

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
       * The person's secondary ID number, as appropriate for their country, will be used for enhanced verification checks. In Thailand, this would be the laser code found on the back of an ID card. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://stripe.com/docs/js/tokens_sources/create_token?type=pii).
       */
      id_number_secondary?: string;

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
       * A [person token](https://stripe.com/docs/connect/account-tokens), used to securely provide details to the person.
       */
      person_token?: string;

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
      registered_address?: Stripe.AddressParam;

      /**
       * The relationship that this person has with the account's legal entity.
       */
      relationship?: PersonUpdateParams.Relationship;

      /**
       * The last four digits of the person's Social Security number (U.S. only).
       */
      ssn_last_4?: string;

      /**
       * The person's verification status.
       */
      verification?: PersonUpdateParams.Verification;
    }

    namespace PersonUpdateParams {
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

    interface PersonListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Filters on the list of people returned based on the person's relationship to the account's company.
       */
      relationship?: PersonListParams.Relationship;
    }

    namespace PersonListParams {
      interface Relationship {
        /**
         * A filter on the list of people returned based on whether these people are directors of the account's company.
         */
        director?: boolean;

        /**
         * A filter on the list of people returned based on whether these people are executives of the account's company.
         */
        executive?: boolean;

        /**
         * A filter on the list of people returned based on whether these people are owners of the account's company.
         */
        owner?: boolean;

        /**
         * A filter on the list of people returned based on whether these people are the representative of the account's company.
         */
        representative?: boolean;
      }
    }

    interface PersonDeleteParams {}
  }
}
