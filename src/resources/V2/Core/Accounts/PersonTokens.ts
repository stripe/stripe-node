// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {AccountPersonToken} from './../../../V2/Core/AccountPersonTokens.js';
import {
  Address,
  MetadataParam,
  OtherString,
  Decimal,
} from '../../../../shared.js';
import {RequestOptions, Response} from '../../../../lib.js';

export class PersonTokenResource extends StripeResource {
  /**
   * Creates a single-use token that represents the details for a person. Use this when you create or update persons associated with an Account v2. Learn more about [account tokens](https://docs.stripe.com/connect/account-tokens).
   * You can only create person tokens with your application's publishable key and in live mode. You can use your application's secret key to create person tokens only in test mode.
   * @throws Stripe.RateLimitError
   */
  create(
    accountId: string,
    params?: V2.Core.Accounts.PersonTokenCreateParams,
    options?: RequestOptions
  ): Promise<Response<AccountPersonToken>> {
    return this._makeRequest(
      'POST',
      `/v2/core/accounts/${encodeURIComponent(accountId)}/person_tokens`,
      params,
      options,
      {
        requestSchema: {
          kind: 'object',
          fields: {
            relationship: {
              kind: 'object',
              fields: {percent_ownership: {kind: 'decimal_string'}},
            },
          },
        },
      }
    ) as any;
  }
  /**
   * Retrieves a Person Token associated with an Account.
   * @throws Stripe.RateLimitError
   */
  retrieve(
    accountId: string,
    id: string,
    params?: V2.Core.Accounts.PersonTokenRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<AccountPersonToken>> {
    return this._makeRequest(
      'GET',
      `/v2/core/accounts/${encodeURIComponent(
        accountId
      )}/person_tokens/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Accounts {
      export interface PersonTokenCreateParams {
        /**
         * Additional addresses associated with the person.
         */
        additional_addresses?: Array<PersonTokenCreateParams.AdditionalAddress>;

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
        address?: PersonTokenCreateParams.Address;

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
        metadata?: MetadataParam;

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

      export namespace PersonTokenCreateParams {
        export interface AdditionalAddress {
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

        export interface AdditionalName {
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

        export interface AdditionalTermsOfService {
          /**
           * Details on the Person's acceptance of the [Stripe Services Agreement]; IP, date, and User Agent are expanded by Stripe.
           */
          account?: AdditionalTermsOfService.Account;
        }

        export interface Address {
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

        export interface DateOfBirth {
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

        export interface Documents {
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

        export interface IdNumber {
          /**
           * The ID number type of an individual.
           */
          type: IdNumber.Type;

          /**
           * The value of the ID number.
           */
          value: string;
        }

        export type LegalGender = 'female' | 'male' | OtherString;

        export type PoliticalExposure = 'existing' | 'none' | OtherString;

        export interface Relationship {
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
          percent_ownership?: Decimal;

          /**
           * Indicates whether the person is a representative of the associated legal entity.
           */
          representative?: boolean;

          /**
           * The title or position the person holds in the associated legal entity.
           */
          title?: string;
        }

        export interface ScriptAddresses {
          /**
           * Kana Address.
           */
          kana?: ScriptAddresses.Kana;

          /**
           * Kanji Address.
           */
          kanji?: ScriptAddresses.Kanji;
        }

        export interface ScriptNames {
          /**
           * Persons name in kana script.
           */
          kana?: ScriptNames.Kana;

          /**
           * Persons name in kanji script.
           */
          kanji?: ScriptNames.Kanji;
        }

        export namespace AdditionalName {
          export type Purpose = 'alias' | 'maiden';
        }

        export namespace AdditionalTermsOfService {
          export interface Account {
            /**
             * The boolean value indicating if the terms of service have been accepted.
             */
            shown_and_accepted?: boolean;
          }
        }

        export namespace Documents {
          export interface CompanyAuthorization {
            /**
             * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/files/create) with a purpose value of `account_requirement`.
             */
            files: Array<string>;

            /**
             * The format of the document. Currently supports `files` only.
             */
            type: CompanyAuthorization.Type;
          }

          export interface Passport {
            /**
             * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/files/create) with a purpose value of `account_requirement`.
             */
            files: Array<string>;

            /**
             * The format of the document. Currently supports `files` only.
             */
            type: Passport.Type;
          }

          export interface PrimaryVerification {
            /**
             * The [file upload](https://docs.stripe.com/api/files/create) tokens referring to each side of the document.
             */
            front_back: PrimaryVerification.FrontBack;

            /**
             * The format of the verification document. Currently supports `front_back` only.
             */
            type: PrimaryVerification.Type;
          }

          export interface SecondaryVerification {
            /**
             * The [file upload](https://docs.stripe.com/api/files/create) tokens referring to each side of the document.
             */
            front_back: SecondaryVerification.FrontBack;

            /**
             * The format of the verification document. Currently supports `front_back` only.
             */
            type: SecondaryVerification.Type;
          }

          export interface Visa {
            /**
             * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/files/create) with a purpose value of `account_requirement`.
             */
            files: Array<string>;

            /**
             * The format of the document. Currently supports `files` only.
             */
            type: Visa.Type;
          }

          export namespace CompanyAuthorization {
            export type Type = 'files' | OtherString;
          }

          export namespace Passport {
            export type Type = 'files' | OtherString;
          }

          export namespace PrimaryVerification {
            export interface FrontBack {
              /**
               * A [file upload](https://docs.stripe.com/api/files/create) token representing the back of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
               */
              back?: string;

              /**
               * A [file upload](https://docs.stripe.com/api/files/create) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
               */
              front?: string;
            }

            export type Type = 'front_back' | OtherString;
          }

          export namespace SecondaryVerification {
            export interface FrontBack {
              /**
               * A [file upload](https://docs.stripe.com/api/files/create) token representing the back of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
               */
              back?: string;

              /**
               * A [file upload](https://docs.stripe.com/api/files/create) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
               */
              front?: string;
            }

            export type Type = 'front_back' | OtherString;
          }

          export namespace Visa {
            export type Type = 'files' | OtherString;
          }
        }

        export namespace IdNumber {
          export type Type =
            | 'ae_eid'
            | 'ae_pp'
            | 'al_pp'
            | 'am_pp'
            | 'ao_nif'
            | 'ar_cuil'
            | 'ar_dni'
            | 'ar_pp'
            | 'at_pp'
            | 'at_stn'
            | 'au_pp'
            | 'az_pin'
            | 'az_pp'
            | 'az_tin'
            | 'bd_brc'
            | 'bd_etin'
            | 'bd_nid'
            | 'bd_pp'
            | 'be_nrn'
            | 'be_pp'
            | 'bg_pp'
            | 'bg_ucn'
            | 'bh_pp'
            | 'bj_pp'
            | 'bn_nric'
            | 'bo_pp'
            | 'br_cpf'
            | 'br_pp'
            | 'br_rg'
            | 'bs_pp'
            | 'bs_tin'
            | 'by_pp'
            | 'ca_pp'
            | 'ca_sin'
            | 'ch_oasi'
            | 'ch_pp'
            | 'ci_pp'
            | 'cl_pp'
            | 'cl_rut'
            | 'cm_pp'
            | 'cn_pp'
            | 'co_nuip'
            | 'co_pp'
            | 'cr_ci'
            | 'cr_cpf'
            | 'cr_dimex'
            | 'cr_nite'
            | 'cr_pp'
            | 'cy_pp'
            | 'cy_tic'
            | 'cz_dic'
            | 'cz_pp'
            | 'cz_rc'
            | 'de_pp'
            | 'de_stn'
            | 'dk_cpr'
            | 'dk_pp'
            | 'do_cie'
            | 'do_pp'
            | 'do_rcn'
            | 'dz_pp'
            | 'ec_ci'
            | 'ec_pp'
            | 'ee_ik'
            | 'ee_pp'
            | 'eg_pp'
            | 'es_nif'
            | 'es_pp'
            | 'et_tin'
            | 'fi_hetu'
            | 'fi_pp'
            | 'fr_nir'
            | 'fr_pp'
            | 'fr_spi'
            | 'ga_nif'
            | 'gb_nino'
            | 'gb_pp'
            | 'ge_pp'
            | 'gh_pp'
            | 'gr_afm'
            | 'gr_pp'
            | 'gt_cui'
            | 'gt_nit'
            | 'gt_pp'
            | 'hk_id'
            | 'hk_pp'
            | 'hn_dni'
            | 'hn_pp'
            | 'hr_oib'
            | 'hr_pp'
            | 'ht_pp'
            | 'hu_ad'
            | 'hu_pp'
            | 'id_nik'
            | 'id_pp'
            | 'ie_pp'
            | 'ie_ppsn'
            | 'il_pp'
            | 'in_pan'
            | 'in_pp'
            | 'iq_pp'
            | 'is_kt'
            | 'is_pp'
            | 'it_cf'
            | 'it_pp'
            | 'je_pp'
            | 'jm_pp'
            | 'jo_pp'
            | 'jp_inc'
            | 'jp_pp'
            | 'ke_pin'
            | 'ke_pp'
            | 'kr_pp'
            | 'kw_pp'
            | 'kz_iin'
            | 'kz_pp'
            | 'lb_pp'
            | 'li_peid'
            | 'li_pp'
            | 'lk_pp'
            | 'lt_ak'
            | 'lt_pp'
            | 'lu_nif'
            | 'lu_pp'
            | 'lv_pk'
            | 'lv_pp'
            | 'ma_pp'
            | 'md_cf'
            | 'md_pp'
            | 'mg_nif'
            | 'mk_pin'
            | 'mk_pp'
            | 'mm_pp'
            | 'mn_pp'
            | 'mt_pp'
            | 'mu_pp'
            | 'mx_curp'
            | 'mx_pp'
            | 'mx_rfc'
            | 'my_nric'
            | 'my_pp'
            | 'mz_nuit'
            | 'ng_nin'
            | 'ng_pp'
            | 'nl_bsn'
            | 'nl_pp'
            | 'no_nin'
            | 'no_pp'
            | 'np_pp'
            | 'nz_ird'
            | 'nz_pp'
            | 'pa_pp'
            | 'pe_dni'
            | 'pe_pp'
            | 'ph_pp'
            | 'pk_cnic'
            | 'pk_pp'
            | 'pk_snic'
            | 'pl_pesel'
            | 'pl_pp'
            | 'pr_pp'
            | 'ps_pp'
            | 'pt_nif'
            | 'pt_pp'
            | 'py_ci'
            | 'py_pp'
            | 'ro_cnp'
            | 'ro_pp'
            | 'rs_pp'
            | 'ru_pp'
            | 'rw_tin'
            | 'sa_pp'
            | 'sa_ptin'
            | 'sa_tin'
            | 'se_pin'
            | 'se_pp'
            | 'sg_fin'
            | 'sg_nric'
            | 'sg_pp'
            | 'si_pp'
            | 'si_ptin'
            | 'sk_dic'
            | 'sk_pp'
            | 'sv_pp'
            | 'th_lc'
            | 'th_pin'
            | 'th_pp'
            | 'tn_pp'
            | 'tr_pp'
            | 'tr_tin'
            | 'tt_bir'
            | 'tw_pp'
            | 'ua_pp'
            | 'ug_pp'
            | 'us_itin'
            | 'us_itin_last_4'
            | 'us_pp'
            | 'us_ssn'
            | 'us_ssn_last_4'
            | 'uy_dni'
            | 'uy_pp'
            | 'uz_pp'
            | 'uz_tin'
            | 've_pp'
            | 'vn_pp'
            | 'za_id'
            | 'za_pp'
            | OtherString;
        }

        export namespace ScriptAddresses {
          export interface Kana {
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

          export interface Kanji {
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

        export namespace ScriptNames {
          export interface Kana {
            /**
             * The person's first or given name.
             */
            given_name?: string;

            /**
             * The person's last or family name.
             */
            surname?: string;
          }

          export interface Kanji {
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
export namespace V2 {
  export namespace Core {
    export namespace Accounts {
      export interface PersonTokenRetrieveParams {}
    }
  }
}
