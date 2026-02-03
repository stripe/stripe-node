// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        /**
         * A Person represents an individual associated with an Account's identity (for example, an owner, director, executive, or representative). Use Persons to provide and update identity information for verification and compliance.
         */
        interface AccountPerson {
          /**
           * Unique identifier for the Person.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.core.account_person';

          /**
           * The account ID which the individual belongs to.
           */
          account: string;

          /**
           * Additional addresses associated with the person.
           */
          additional_addresses?: Array<AccountPerson.AdditionalAddress>;

          /**
           * Additional names (e.g. aliases) associated with the person.
           */
          additional_names?: Array<AccountPerson.AdditionalName>;

          /**
           * Attestations of accepted terms of service agreements.
           */
          additional_terms_of_service?: AccountPerson.AdditionalTermsOfService;

          /**
           * The person's residential address.
           */
          address?: AccountPerson.Address;

          /**
           * Time at which the object was created. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
           */
          created: string;

          /**
           * The person's date of birth.
           */
          date_of_birth?: AccountPerson.DateOfBirth;

          /**
           * Documents that may be submitted to satisfy various informational requests.
           */
          documents?: AccountPerson.Documents;

          /**
           * The person's email address.
           */
          email?: string;

          /**
           * The person's first name.
           */
          given_name?: string;

          /**
           * The identification numbers (e.g., SSN) associated with the person.
           */
          id_numbers?: Array<AccountPerson.IdNumber>;

          /**
           * The person's gender (International regulations require either "male" or "female").
           */
          legal_gender?: AccountPerson.LegalGender;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.Metadata;

          /**
           * The countries where the person is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
           */
          nationalities?: Array<string>;

          /**
           * The person's phone number.
           */
          phone?: string;

          /**
           * The person's political exposure.
           */
          political_exposure?: AccountPerson.PoliticalExposure;

          /**
           * The relationship that this person has with the Account's business or legal entity.
           */
          relationship?: AccountPerson.Relationship;

          /**
           * The script addresses (e.g., non-Latin characters) associated with the person.
           */
          script_addresses?: AccountPerson.ScriptAddresses;

          /**
           * The script names (e.g. non-Latin characters) associated with the person.
           */
          script_names?: AccountPerson.ScriptNames;

          /**
           * The person's last name.
           */
          surname?: string;

          /**
           * Time at which the object was last updated. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
           */
          updated: string;
        }

        namespace AccountPerson {
          interface AdditionalAddress {
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
             * Purpose of additional address.
             */
            purpose: 'registered';

            /**
             * State, county, province, or region.
             */
            state?: string;

            /**
             * Town or district.
             */
            town?: string;
          }

          interface AdditionalName {
            /**
             * The individual's full name.
             */
            full_name?: string;

            /**
             * The individual's first or given name.
             */
            given_name?: string;

            /**
             * The purpose or type of the additional name.
             */
            purpose: AdditionalName.Purpose;

            /**
             * The individual's last or family name.
             */
            surname?: string;
          }

          namespace AdditionalName {
            type Purpose = 'alias' | 'maiden';
          }

          interface AdditionalTermsOfService {
            /**
             * Stripe terms of service agreement.
             */
            account?: AdditionalTermsOfService.Account;
          }

          namespace AdditionalTermsOfService {
            interface Account {
              /**
               * The time when the Account's representative accepted the terms of service. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
               */
              date?: string;

              /**
               * The IP address from which the Account's representative accepted the terms of service.
               */
              ip?: string;

              /**
               * The user agent of the browser from which the Account's representative accepted the terms of service.
               */
              user_agent?: string;
            }
          }

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

            /**
             * Town or district.
             */
            town?: string;
          }

          interface DateOfBirth {
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
             * An identifying document showing the person's name, either a passport or local ID card.
             */
            primary_verification?: Documents.PrimaryVerification;

            /**
             * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
             */
            secondary_verification?: Documents.SecondaryVerification;

            /**
             * One or more documents showing the person's visa required for living in the country where they are residing.
             */
            visa?: Documents.Visa;
          }

          namespace Documents {
            interface CompanyAuthorization {
              /**
               * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
               */
              files: Array<string>;

              /**
               * The format of the document. Currently supports `files` only.
               */
              type: 'files';
            }

            interface Passport {
              /**
               * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
               */
              files: Array<string>;

              /**
               * The format of the document. Currently supports `files` only.
               */
              type: 'files';
            }

            interface PrimaryVerification {
              /**
               * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens for the front and back of the verification document.
               */
              front_back: PrimaryVerification.FrontBack;

              /**
               * The format of the verification document. Currently supports `front_back` only.
               */
              type: 'front_back';
            }

            namespace PrimaryVerification {
              interface FrontBack {
                /**
                 * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the back of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                 */
                back?: string;

                /**
                 * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                 */
                front: string;
              }
            }

            interface SecondaryVerification {
              /**
               * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens for the front and back of the verification document.
               */
              front_back: SecondaryVerification.FrontBack;

              /**
               * The format of the verification document. Currently supports `front_back` only.
               */
              type: 'front_back';
            }

            namespace SecondaryVerification {
              interface FrontBack {
                /**
                 * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the back of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                 */
                back?: string;

                /**
                 * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                 */
                front: string;
              }
            }

            interface Visa {
              /**
               * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
               */
              files: Array<string>;

              /**
               * The format of the document. Currently supports `files` only.
               */
              type: 'files';
            }
          }

          interface IdNumber {
            /**
             * The ID number type of an individual.
             */
            type: IdNumber.Type;
          }

          namespace IdNumber {
            type Type =
              | 'ae_eid'
              | 'ao_nif'
              | 'ar_cuil'
              | 'ar_dni'
              | 'at_stn'
              | 'az_tin'
              | 'bd_brc'
              | 'bd_etin'
              | 'bd_nid'
              | 'be_nrn'
              | 'bg_ucn'
              | 'bn_nric'
              | 'br_cpf'
              | 'ca_sin'
              | 'ch_oasi'
              | 'cl_rut'
              | 'cn_pp'
              | 'co_nuip'
              | 'cr_ci'
              | 'cr_cpf'
              | 'cr_dimex'
              | 'cr_nite'
              | 'cy_tic'
              | 'cz_rc'
              | 'de_stn'
              | 'dk_cpr'
              | 'do_cie'
              | 'do_rcn'
              | 'ec_ci'
              | 'ee_ik'
              | 'es_nif'
              | 'fi_hetu'
              | 'fr_nir'
              | 'gb_nino'
              | 'gr_afm'
              | 'gt_nit'
              | 'hk_id'
              | 'hr_oib'
              | 'hu_ad'
              | 'id_nik'
              | 'ie_ppsn'
              | 'is_kt'
              | 'it_cf'
              | 'jp_inc'
              | 'ke_pin'
              | 'kz_iin'
              | 'li_peid'
              | 'lt_ak'
              | 'lu_nif'
              | 'lv_pk'
              | 'mx_rfc'
              | 'my_nric'
              | 'mz_nuit'
              | 'ng_nin'
              | 'nl_bsn'
              | 'no_nin'
              | 'nz_ird'
              | 'pe_dni'
              | 'pk_cnic'
              | 'pk_snic'
              | 'pl_pesel'
              | 'pt_nif'
              | 'ro_cnp'
              | 'sa_tin'
              | 'se_pin'
              | 'sg_fin'
              | 'sg_nric'
              | 'sk_dic'
              | 'th_lc'
              | 'th_pin'
              | 'tr_tin'
              | 'us_itin'
              | 'us_itin_last_4'
              | 'us_ssn'
              | 'us_ssn_last_4'
              | 'uy_dni'
              | 'za_id';
          }

          type LegalGender = 'female' | 'male';

          type PoliticalExposure = 'existing' | 'none';

          interface Relationship {
            /**
             * Whether the individual is an authorizer of the Account's identity.
             */
            authorizer?: boolean;

            /**
             * Whether the individual is a director of the Account's identity. Directors are typically members of the governing board of the company or are responsible for making sure that the company meets its regulatory obligations.
             */
            director?: boolean;

            /**
             * Whether the individual has significant responsibility to control, manage, or direct the organization.
             */
            executive?: boolean;

            /**
             * Whether the individual is the legal guardian of the Account's representative.
             */
            legal_guardian?: boolean;

            /**
             * Whether the individual is an owner of the Account's identity.
             */
            owner?: boolean;

            /**
             * The percentage of the Account's identity that the individual owns.
             */
            percent_ownership?: string;

            /**
             * Whether the individual is authorized as the primary representative of the Account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
             */
            representative?: boolean;

            /**
             * The individual's title (e.g., CEO, Support Engineer).
             */
            title?: string;
          }

          interface ScriptAddresses {
            /**
             * Kana Address.
             */
            kana?: ScriptAddresses.Kana;

            /**
             * Kanji Address.
             */
            kanji?: ScriptAddresses.Kanji;
          }

          namespace ScriptAddresses {
            interface Kana {
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

              /**
               * Town or district.
               */
              town?: string;
            }

            interface Kanji {
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

              /**
               * Town or district.
               */
              town?: string;
            }
          }

          interface ScriptNames {
            /**
             * Persons name in kana script.
             */
            kana?: ScriptNames.Kana;

            /**
             * Persons name in kanji script.
             */
            kanji?: ScriptNames.Kanji;
          }

          namespace ScriptNames {
            interface Kana {
              /**
               * The person's first or given name.
               */
              given_name?: string;

              /**
               * The person's last or family name.
               */
              surname?: string;
            }

            interface Kanji {
              /**
               * The person's first or given name.
               */
              given_name?: string;

              /**
               * The person's last or family name.
               */
              surname?: string;
            }
          }
        }
      }
    }
  }
}
