// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The Person object.
     */
    interface Person {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'person';

      /**
       * The account the person is associated with.
       */
      account: string;

      address?: Stripe.Address;

      /**
       * The Kana variation of the person's address (Japan only).
       */
      address_kana?: Person.AddressKana | null;

      /**
       * The Kanji variation of the person's address (Japan only).
       */
      address_kanji?: Person.AddressKanji | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      deleted?: void;

      dob?: Person.Dob;

      /**
       * The person's email address.
       */
      email?: string | null;

      /**
       * The person's first name.
       */
      first_name?: string | null;

      /**
       * The Kana variation of the person's first name (Japan only).
       */
      first_name_kana?: string | null;

      /**
       * The Kanji variation of the person's first name (Japan only).
       */
      first_name_kanji?: string | null;

      /**
       * The person's gender (International regulations require either "male" or "female").
       */
      gender?: string | null;

      /**
       * Whether the person's `id_number` was provided.
       */
      id_number_provided?: boolean;

      /**
       * The person's last name.
       */
      last_name?: string | null;

      /**
       * The Kana variation of the person's last name (Japan only).
       */
      last_name_kana?: string | null;

      /**
       * The Kanji variation of the person's last name (Japan only).
       */
      last_name_kanji?: string | null;

      /**
       * The person's maiden name.
       */
      maiden_name?: string | null;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: Stripe.Metadata;

      /**
       * The country where the person is a national.
       */
      nationality?: string | null;

      /**
       * The person's phone number.
       */
      phone?: string | null;

      /**
       * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
       */
      political_exposure?: Person.PoliticalExposure;

      relationship?: Person.Relationship;

      /**
       * Information about the requirements for this person, including what information needs to be collected, and by when.
       */
      requirements?: Person.Requirements | null;

      /**
       * Whether the last four digits of the person's Social Security number have been provided (U.S. only).
       */
      ssn_last_4_provided?: boolean;

      verification?: Person.Verification;
    }

    namespace Person {
      interface AddressKana {
        /**
         * City/Ward.
         */
        city: string | null;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country: string | null;

        /**
         * Block/Building number.
         */
        line1: string | null;

        /**
         * Building details.
         */
        line2: string | null;

        /**
         * ZIP or postal code.
         */
        postal_code: string | null;

        /**
         * Prefecture.
         */
        state: string | null;

        /**
         * Town/cho-me.
         */
        town: string | null;
      }

      interface AddressKanji {
        /**
         * City/Ward.
         */
        city: string | null;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country: string | null;

        /**
         * Block/Building number.
         */
        line1: string | null;

        /**
         * Building details.
         */
        line2: string | null;

        /**
         * ZIP or postal code.
         */
        postal_code: string | null;

        /**
         * Prefecture.
         */
        state: string | null;

        /**
         * Town/cho-me.
         */
        town: string | null;
      }

      interface Dob {
        /**
         * The day of birth, between 1 and 31.
         */
        day: number | null;

        /**
         * The month of birth, between 1 and 12.
         */
        month: number | null;

        /**
         * The four-digit year of birth.
         */
        year: number | null;
      }

      type PoliticalExposure = 'existing' | 'none';

      interface Relationship {
        /**
         * Whether the person is a director of the account's legal entity. Currently only required for accounts in the EU. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
         */
        director: boolean | null;

        /**
         * Whether the person has significant responsibility to control, manage, or direct the organization.
         */
        executive: boolean | null;

        /**
         * Whether the person is an owner of the account's legal entity.
         */
        owner: boolean | null;

        /**
         * The percent owned by the person of the account's legal entity.
         */
        percent_ownership: number | null;

        /**
         * Whether the person is authorized as the primary representative of the account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
         */
        representative: boolean | null;

        /**
         * The person's title (e.g., CEO, Support Engineer).
         */
        title: string | null;
      }

      interface Requirements {
        /**
         * Fields that need to be collected to keep the person's account enabled. If not collected by the account's `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
         */
        currently_due: Array<string>;

        /**
         * Fields that are `currently_due` and need to be collected again because validation or verification failed.
         */
        errors: Array<Requirements.Error>;

        /**
         * Fields that need to be collected assuming all volume thresholds are reached. As they become required, they appear in `currently_due` as well, and the account's `current_deadline` becomes set.
         */
        eventually_due: Array<string>;

        /**
         * Fields that weren't collected by the account's `current_deadline`. These fields need to be collected to enable the person's account.
         */
        past_due: Array<string>;

        /**
         * Fields that may become required depending on the results of verification or review. Will be an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`.
         */
        pending_verification: Array<string>;
      }

      namespace Requirements {
        interface Error {
          /**
           * The code for the type of error.
           */
          code: Error.Code;

          /**
           * An informative message that indicates the error type and provides additional details about the error.
           */
          reason: string;

          /**
           * The specific user onboarding requirement field (in the requirements hash) that needs to be resolved.
           */
          requirement: string;
        }

        namespace Error {
          type Code =
            | 'invalid_address_city_state_postal_code'
            | 'invalid_street_address'
            | 'invalid_value_other'
            | 'verification_document_address_mismatch'
            | 'verification_document_address_missing'
            | 'verification_document_corrupt'
            | 'verification_document_country_not_supported'
            | 'verification_document_dob_mismatch'
            | 'verification_document_duplicate_type'
            | 'verification_document_expired'
            | 'verification_document_failed_copy'
            | 'verification_document_failed_greyscale'
            | 'verification_document_failed_other'
            | 'verification_document_failed_test_mode'
            | 'verification_document_fraudulent'
            | 'verification_document_id_number_mismatch'
            | 'verification_document_id_number_missing'
            | 'verification_document_incomplete'
            | 'verification_document_invalid'
            | 'verification_document_issue_or_expiry_date_missing'
            | 'verification_document_manipulated'
            | 'verification_document_missing_back'
            | 'verification_document_missing_front'
            | 'verification_document_name_mismatch'
            | 'verification_document_name_missing'
            | 'verification_document_nationality_mismatch'
            | 'verification_document_not_readable'
            | 'verification_document_not_signed'
            | 'verification_document_not_uploaded'
            | 'verification_document_photo_mismatch'
            | 'verification_document_too_large'
            | 'verification_document_type_not_supported'
            | 'verification_failed_address_match'
            | 'verification_failed_business_iec_number'
            | 'verification_failed_document_match'
            | 'verification_failed_id_number_match'
            | 'verification_failed_keyed_identity'
            | 'verification_failed_keyed_match'
            | 'verification_failed_name_match'
            | 'verification_failed_other'
            | 'verification_failed_tax_id_match'
            | 'verification_failed_tax_id_not_issued'
            | 'verification_missing_executives'
            | 'verification_missing_owners'
            | 'verification_requires_additional_memorandum_of_associations';
        }
      }

      interface Verification {
        /**
         * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
         */
        additional_document?: Verification.AdditionalDocument | null;

        /**
         * A user-displayable string describing the verification state for the person. For example, this may say "Provided identity information could not be verified".
         */
        details?: string | null;

        /**
         * One of `document_address_mismatch`, `document_dob_mismatch`, `document_duplicate_type`, `document_id_number_mismatch`, `document_name_mismatch`, `document_nationality_mismatch`, `failed_keyed_identity`, or `failed_other`. A machine-readable code specifying the verification state for the person.
         */
        details_code?: string | null;

        document?: Verification.Document;

        /**
         * The state of verification for the person. Possible values are `unverified`, `pending`, or `verified`.
         */
        status: string;
      }

      namespace Verification {
        interface AdditionalDocument {
          /**
           * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
           */
          back: string | Stripe.File | null;

          /**
           * A user-displayable string describing the verification state of this document. For example, if a document is uploaded and the picture is too fuzzy, this may say "Identity document is too unclear to read".
           */
          details: string | null;

          /**
           * One of `document_corrupt`, `document_country_not_supported`, `document_expired`, `document_failed_copy`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_failed_greyscale`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_missing_back`, `document_missing_front`, `document_not_readable`, `document_not_uploaded`, `document_photo_mismatch`, `document_too_large`, or `document_type_not_supported`. A machine-readable code specifying the verification state for this document.
           */
          details_code: string | null;

          /**
           * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
           */
          front: string | Stripe.File | null;
        }

        interface Document {
          /**
           * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
           */
          back: string | Stripe.File | null;

          /**
           * A user-displayable string describing the verification state of this document. For example, if a document is uploaded and the picture is too fuzzy, this may say "Identity document is too unclear to read".
           */
          details: string | null;

          /**
           * One of `document_corrupt`, `document_country_not_supported`, `document_expired`, `document_failed_copy`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_failed_greyscale`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_missing_back`, `document_missing_front`, `document_not_readable`, `document_not_uploaded`, `document_photo_mismatch`, `document_too_large`, or `document_type_not_supported`. A machine-readable code specifying the verification state for this document.
           */
          details_code: string | null;

          /**
           * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
           */
          front: string | Stripe.File | null;
        }
      }
    }

    /**
     * The DeletedPerson object.
     */
    interface DeletedPerson {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'person';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    interface PersonCreateParams {
      /**
       * The person's address.
       */
      address?: PersonCreateParams.Address;

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
       * The person's gender (International regulations require either "male" or "female").
       */
      gender?: string;

      /**
       * The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://stripe.com/docs/stripe.js#collecting-pii-data).
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
      interface Address {
        /**
         * City, district, suburb, town, or village.
         */
        city?: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country?: string;

        /**
         * Address line 1 (e.g., street, PO Box, or company name).
         */
        line1?: string;

        /**
         * Address line 2 (e.g., apartment, suite, unit, or building).
         */
        line2?: string;

        /**
         * ZIP or postal code.
         */
        postal_code?: string;

        /**
         * State, county, province, or region.
         */
        state?: string;
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

      interface Relationship {
        /**
         * Whether the person is a director of the account's legal entity. Currently only required for accounts in the EU. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
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
      address?: PersonUpdateParams.Address;

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
       * The person's gender (International regulations require either "male" or "female").
       */
      gender?: string;

      /**
       * The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://stripe.com/docs/stripe.js#collecting-pii-data).
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
      interface Address {
        /**
         * City, district, suburb, town, or village.
         */
        city?: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country?: string;

        /**
         * Address line 1 (e.g., street, PO Box, or company name).
         */
        line1?: string;

        /**
         * Address line 2 (e.g., apartment, suite, unit, or building).
         */
        line2?: string;

        /**
         * ZIP or postal code.
         */
        postal_code?: string;

        /**
         * State, county, province, or region.
         */
        state?: string;
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

      interface Relationship {
        /**
         * Whether the person is a director of the account's legal entity. Currently only required for accounts in the EU. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
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
