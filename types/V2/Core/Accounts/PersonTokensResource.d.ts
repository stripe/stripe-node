// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        namespace Accounts {
          interface PersonTokenCreateParams {
            /**
             * Additional addresses associated with the person.
             */
            additional_addresses?: Array<
              PersonTokenCreateParams.AdditionalAddress
            >;

            /**
             * Additional names (e.g. aliases) associated with the person.
             */
            additional_names?: Array<PersonTokenCreateParams.AdditionalName>;

            /**
             * Attestations of accepted terms of service agreements.
             */
            additional_terms_of_service?: PersonTokenCreateParams.AdditionalTermsOfService;

            /**
             * The person's residential address.
             */
            address?: Stripe.JapanAddressParam;

            /**
             * The person's date of birth.
             */
            date_of_birth?: PersonTokenCreateParams.DateOfBirth;

            /**
             * Documents that may be submitted to satisfy various informational requests.
             */
            documents?: PersonTokenCreateParams.Documents;

            /**
             * Email.
             */
            email?: string;

            /**
             * The person's first name.
             */
            given_name?: string;

            /**
             * The identification numbers (e.g., SSN) associated with the person.
             */
            id_numbers?: Array<PersonTokenCreateParams.IdNumber>;

            /**
             * The person's gender (International regulations require either "male" or "female").
             */
            legal_gender?: PersonTokenCreateParams.LegalGender;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata?: Stripe.MetadataParam;

            /**
             * The nationalities (countries) this person is associated with.
             */
            nationalities?: Array<string>;

            /**
             * The phone number for this person.
             */
            phone?: string;

            /**
             * The person's political exposure.
             */
            political_exposure?: PersonTokenCreateParams.PoliticalExposure;

            /**
             * The relationship that this person has with the Account's business or legal entity.
             */
            relationship?: PersonTokenCreateParams.Relationship;

            /**
             * The script addresses (e.g., non-Latin characters) associated with the person.
             */
            script_addresses?: PersonTokenCreateParams.ScriptAddresses;

            /**
             * The script names (e.g. non-Latin characters) associated with the person.
             */
            script_names?: PersonTokenCreateParams.ScriptNames;

            /**
             * The person's last name.
             */
            surname?: string;
          }

          namespace PersonTokenCreateParams {
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
               * The person's full name.
               */
              full_name?: string;

              /**
               * The person's first or given name.
               */
              given_name?: string;

              /**
               * The purpose or type of the additional name.
               */
              purpose: AdditionalName.Purpose;

              /**
               * The person's last or family name.
               */
              surname?: string;
            }

            namespace AdditionalName {
              type Purpose = 'alias' | 'maiden';
            }

            interface AdditionalTermsOfService {
              /**
               * Details on the Person's acceptance of the [Stripe Services Agreement]; IP, date, and User Agent are expanded by Stripe.
               */
              account?: AdditionalTermsOfService.Account;
            }

            namespace AdditionalTermsOfService {
              interface Account {
                /**
                 * The boolean value indicating if the terms of service have been accepted.
                 */
                shown_and_accepted?: boolean;
              }
            }

            interface DateOfBirth {
              /**
               * The day of the birth.
               */
              day: number;

              /**
               * The month of birth.
               */
              month: number;

              /**
               * The year of birth.
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
                 * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens referring to each side of the document.
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
                  front?: string;
                }
              }

              interface SecondaryVerification {
                /**
                 * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens referring to each side of the document.
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
                  front?: string;
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

              /**
               * The value of the ID number.
               */
              value: string;
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
               * Indicates whether the person is a director of the associated legal entity.
               */
              director?: boolean;

              /**
               * Indicates whether the person is an executive of the associated legal entity.
               */
              executive?: boolean;

              /**
               * Indicates whether the person is a legal guardian of the associated legal entity.
               */
              legal_guardian?: boolean;

              /**
               * Indicates whether the person is an owner of the associated legal entity.
               */
              owner?: boolean;

              /**
               * The percentage of ownership the person has in the associated legal entity.
               */
              percent_ownership?: string;

              /**
               * Indicates whether the person is a representative of the associated legal entity.
               */
              representative?: boolean;

              /**
               * The title or position the person holds in the associated legal entity.
               */
              title?: string;
            }

            interface ScriptAddresses {
              /**
               * Kana Address.
               */
              kana?: Stripe.JapanAddressParam;

              /**
               * Kanji Address.
               */
              kanji?: Stripe.JapanAddressParam;
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

      namespace Core {
        namespace Accounts {
          interface PersonTokenRetrieveParams {}
        }
      }

      namespace Core {
        namespace Accounts {
          class PersonTokensResource {
            /**
             * Creates a Person Token associated with an Account.
             */
            create(
              id: string,
              params?: PersonTokenCreateParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.AccountPersonToken>>;
            create(
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.AccountPersonToken>>;

            /**
             * Retrieves a Person Token associated with an Account.
             */
            retrieve(
              accountId: string,
              id: string,
              params?: PersonTokenRetrieveParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.AccountPersonToken>>;
            retrieve(
              accountId: string,
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.AccountPersonToken>>;
          }
        }
      }
    }
  }
}
