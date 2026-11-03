// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {Address, OtherString, MetadataParam, Decimal} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';

export class AccountTokenResource extends StripeResource {
  /**
   * Create an account token with a publishable key and pass it to the Accounts v2 API to
   * create or update an account without its data touching your server.
   * Learn more about [account tokens](https://docs.stripe.com/connect/account-tokens).
   * In live mode, you can only create account tokens with your application's publishable key.
   * In test mode, you can create account tokens with your secret key or publishable key.
   * @throws Stripe.RateLimitError
   */
  create(
    params?: V2.Core.AccountTokenCreateParams,
    options?: RequestOptions
  ): Promise<Response<AccountToken>> {
    return this._makeRequest(
      'POST',
      '/v2/core/account_tokens',
      params,
      options,
      {
        requestSchema: {
          kind: 'object',
          fields: {
            identity: {
              kind: 'object',
              fields: {
                individual: {
                  kind: 'object',
                  fields: {
                    relationship: {
                      kind: 'object',
                      fields: {percent_ownership: {kind: 'decimal_string'}},
                    },
                  },
                },
              },
            },
          },
        },
      }
    ) as any;
  }
  /**
   * Retrieves an Account Token.
   * @throws Stripe.RateLimitError
   */
  retrieve(
    id: string,
    params?: V2.Core.AccountTokenRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<AccountToken>> {
    return this._makeRequest(
      'GET',
      `/v2/core/account_tokens/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface AccountToken {
  /**
   * Unique identifier for the token.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.core.account_token';

  /**
   * Time at which the token was created. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
   */
  created: string;

  /**
   * Time at which the token will expire.
   */
  expires_at: string;

  /**
   * Has the value `true` if the token exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Determines if the token has already been used (tokens can only be used once).
   */
  used: boolean;
}
export namespace V2 {
  export namespace Core {
    export interface AccountTokenCreateParams {
      /**
       * The primary contact email address for the Account.
       */
      contact_email?: string;

      /**
       * The default contact phone for the Account.
       */
      contact_phone?: string;

      /**
       * A descriptive name for the Account. This name will be surfaced in the Stripe Dashboard and on any invoices sent to the Account.
       */
      display_name?: string;

      /**
       * Information about the company, individual, and business represented by the Account.
       */
      identity?: AccountTokenCreateParams.Identity;
    }

    export namespace AccountTokenCreateParams {
      export interface Identity {
        /**
         * Attestations from the identity's key people, e.g. owners, executives, directors, representatives.
         */
        attestations?: Identity.Attestations;

        /**
         * Information about the company or business.
         */
        business_details?: Identity.BusinessDetails;

        /**
         * The entity type.
         */
        entity_type?: Identity.EntityType;

        /**
         * Information about the person represented by the account.
         */
        individual?: Identity.Individual;
      }

      export namespace Identity {
        export interface Attestations {
          /**
           * This hash is used to attest that the directors information provided to Stripe is both current and correct; IP, date, and User Agent are expanded by Stripe.
           */
          directorship_declaration?: Attestations.DirectorshipDeclaration;

          /**
           * This hash is used to attest that the beneficial owner information provided to Stripe is both current and correct; IP, date, and User Agent are expanded by Stripe.
           */
          ownership_declaration?: Attestations.OwnershipDeclaration;

          /**
           * Attestation that all Persons with a specific Relationship value have been provided.
           */
          persons_provided?: Attestations.PersonsProvided;

          /**
           * This hash is used to attest that the representative is authorized to act as the representative of their legal entity; IP, date, and User Agent are expanded by Stripe.
           */
          representative_declaration?: Attestations.RepresentativeDeclaration;

          /**
           * Attestations of accepted terms of service agreements.
           */
          terms_of_service?: Attestations.TermsOfService;
        }

        export interface BusinessDetails {
          /**
           * Additional addresses associated with the business.
           */
          additional_addresses?: Array<BusinessDetails.AdditionalAddress>;

          /**
           * The business registration address of the business entity.
           */
          address?: BusinessDetails.Address;

          /**
           * The business gross annual revenue for its preceding fiscal year.
           */
          annual_revenue?: BusinessDetails.AnnualRevenue;

          /**
           * A document verifying the business.
           */
          documents?: BusinessDetails.Documents;

          /**
           * Estimated maximum number of workers currently engaged by the business (including employees, contractors, and vendors).
           */
          estimated_worker_count?: number;

          /**
           * The ID numbers of a business entity.
           */
          id_numbers?: Array<BusinessDetails.IdNumber>;

          /**
           * An estimate of the monthly revenue of the business.
           */
          monthly_estimated_revenue?: BusinessDetails.MonthlyEstimatedRevenue;

          /**
           * The phone number of the Business Entity.
           */
          phone?: string;

          /**
           * The business legal name.
           */
          registered_name?: string;

          /**
           * When the business was incorporated or registered.
           */
          registration_date?: BusinessDetails.RegistrationDate;

          /**
           * The business registration address of the business entity in non latin script.
           */
          script_addresses?: BusinessDetails.ScriptAddresses;

          /**
           * The business legal name in non latin script.
           */
          script_names?: BusinessDetails.ScriptNames;

          /**
           * The category identifying the legal structure of the business.
           */
          structure?: BusinessDetails.Structure;
        }

        export type EntityType =
          | 'company'
          | 'government_entity'
          | 'individual'
          | 'non_profit'
          | OtherString;

        export interface Individual {
          /**
           * Additional addresses associated with the individual.
           */
          additional_addresses?: Array<Individual.AdditionalAddress>;

          /**
           * Additional names (e.g. aliases) associated with the individual.
           */
          additional_names?: Array<Individual.AdditionalName>;

          /**
           * The individual's residential address.
           */
          address?: Individual.Address;

          /**
           * The individual's date of birth.
           */
          date_of_birth?: Individual.DateOfBirth;

          /**
           * Documents that may be submitted to satisfy various informational requests.
           */
          documents?: Individual.Documents;

          /**
           * The individual's email address. You can only set this field when the Account is configured as a `merchant` or `recipient`. Use `contact_email` as the primary contact email for this Account.
           */
          email?: string;

          /**
           * The individual's first name.
           */
          given_name?: string;

          /**
           * The identification numbers (e.g., SSN) associated with the individual.
           */
          id_numbers?: Array<Individual.IdNumber>;

          /**
           * The individual's gender (International regulations require either "male" or "female").
           */
          legal_gender?: Individual.LegalGender;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: MetadataParam;

          /**
           * The countries where the individual is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
           */
          nationalities?: Array<string>;

          /**
           * The individual's phone number.
           */
          phone?: string;

          /**
           * The individual's political exposure.
           */
          political_exposure?: Individual.PoliticalExposure;

          /**
           * The relationship that this individual has with the account's identity.
           */
          relationship?: Individual.Relationship;

          /**
           * The script addresses (e.g., non-Latin characters) associated with the individual.
           */
          script_addresses?: Individual.ScriptAddresses;

          /**
           * The individuals primary name in non latin script.
           */
          script_names?: Individual.ScriptNames;

          /**
           * The individual's last name.
           */
          surname?: string;
        }

        export namespace Attestations {
          export interface DirectorshipDeclaration {
            /**
             * A boolean indicating if the directors information has been attested.
             */
            attested?: boolean;
          }

          export interface OwnershipDeclaration {
            /**
             * A boolean indicating if the beneficial owner information has been attested.
             */
            attested?: boolean;
          }

          export interface PersonsProvided {
            /**
             * Whether the company's directors have been provided. Set this Boolean to true after creating all the company's directors with the [Persons API](https://docs.stripe.com/api/v2/core/accounts/createperson).
             */
            directors?: boolean;

            /**
             * Whether the company's executives have been provided. Set this Boolean to true after creating all the company's executives with the [Persons API](https://docs.stripe.com/api/v2/core/accounts/createperson).
             */
            executives?: boolean;

            /**
             * Whether the company's owners have been provided. Set this Boolean to true after creating all the company's owners with the [Persons API](https://docs.stripe.com/api/v2/core/accounts/createperson).
             */
            owners?: boolean;

            /**
             * Reason for why the company is exempt from providing ownership information.
             */
            ownership_exemption_reason?: PersonsProvided.OwnershipExemptionReason;
          }

          export interface RepresentativeDeclaration {
            /**
             * A boolean indicating if the representative is authorized to act as the representative of their legal entity.
             */
            attested?: boolean;
          }

          export interface TermsOfService {
            /**
             * Details on the Account's acceptance of the [Stripe Services Agreement]; IP, date, and User Agent are expanded by Stripe.
             */
            account?: TermsOfService.Account;
          }

          export namespace PersonsProvided {
            export type OwnershipExemptionReason =
              | 'qualified_entity_exceeds_ownership_threshold'
              | 'qualifies_as_financial_institution';
          }

          export namespace TermsOfService {
            export interface Account {
              /**
               * The boolean value indicating if the terms of service have been accepted.
               */
              shown_and_accepted?: boolean;
            }
          }
        }

        export namespace BusinessDetails {
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
            purpose: AdditionalAddress.Purpose;

            /**
             * State, county, province, or region.
             */
            state?: string;

            /**
             * Town or district.
             */
            town?: string;
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

          export interface AnnualRevenue {
            /**
             * A non-negative integer representing the amount in the smallest currency unit.
             */
            amount?: V2Amount;

            /**
             * The close-out date of the preceding fiscal year in ISO 8601 format. E.g. 2023-12-31 for the 31st of December, 2023.
             */
            fiscal_year_end?: string;
          }

          export interface Documents {
            /**
             * One or more documents that support the bank account ownership verification requirement. Must be a document associated with the account's primary active bank account that displays the last 4 digits of the account number, either a statement or a check.
             */
            bank_account_ownership_verification?: Documents.BankAccountOwnershipVerification;

            /**
             * One or more documents that demonstrate proof of a company's license to operate.
             */
            company_license?: Documents.CompanyLicense;

            /**
             * One or more documents showing the company's Memorandum of Association.
             */
            company_memorandum_of_association?: Documents.CompanyMemorandumOfAssociation;

            /**
             * Certain countries only: One or more documents showing the ministerial decree legalizing the company's establishment.
             */
            company_ministerial_decree?: Documents.CompanyMinisterialDecree;

            /**
             * One or more documents that demonstrate proof of a company's registration with the appropriate local authorities.
             */
            company_registration_verification?: Documents.CompanyRegistrationVerification;

            /**
             * One or more documents that demonstrate proof of a company's tax ID.
             */
            company_tax_id_verification?: Documents.CompanyTaxIdVerification;

            /**
             * A document verifying the business.
             */
            primary_verification?: Documents.PrimaryVerification;

            /**
             * One or more documents that demonstrate proof of address.
             */
            proof_of_address?: Documents.ProofOfAddress;

            /**
             * One or more documents that demonstrate proof of ultimate beneficial ownership.
             */
            proof_of_registration?: Documents.ProofOfRegistration;

            /**
             * One or more documents that demonstrate proof of ultimate beneficial ownership.
             */
            proof_of_ultimate_beneficial_ownership?: Documents.ProofOfUltimateBeneficialOwnership;
          }

          export interface IdNumber {
            /**
             * The registrar of the ID number (Only valid for DE ID number types).
             */
            registrar?: string;

            /**
             * Open Enum. The ID number type of a business entity.
             */
            type: IdNumber.Type;

            /**
             * The value of the ID number.
             */
            value: string;
          }

          export interface MonthlyEstimatedRevenue {
            /**
             * A non-negative integer representing the amount in the smallest currency unit.
             */
            amount?: V2Amount;
          }

          export interface RegistrationDate {
            /**
             * The day of registration, between 1 and 31.
             */
            day: number;

            /**
             * The month of registration, between 1 and 12.
             */
            month: number;

            /**
             * The four-digit year of registration.
             */
            year: number;
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
             * Kana name.
             */
            kana?: ScriptNames.Kana;

            /**
             * Kanji name.
             */
            kanji?: ScriptNames.Kanji;
          }

          export type Structure =
            | 'cooperative'
            | 'free_zone_establishment'
            | 'free_zone_llc'
            | 'governmental_unit'
            | 'government_instrumentality'
            | 'incorporated_association'
            | 'incorporated_non_profit'
            | 'incorporated_partnership'
            | 'limited_liability_partnership'
            | 'llc'
            | 'multi_member_llc'
            | 'private_company'
            | 'private_corporation'
            | 'private_partnership'
            | 'public_company'
            | 'public_corporation'
            | 'public_listed_corporation'
            | 'public_partnership'
            | 'registered_charity'
            | 'single_member_llc'
            | 'sole_establishment'
            | 'sole_proprietorship'
            | 'tax_exempt_government_instrumentality'
            | 'trust'
            | 'unincorporated_association'
            | 'unincorporated_non_profit'
            | 'unincorporated_partnership'
            | OtherString;

          export namespace AdditionalAddress {
            export type Purpose =
              | 'administrative'
              | 'principal_place_of_business';
          }

          export namespace Documents {
            export interface BankAccountOwnershipVerification {
              /**
               * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/files/create) with a purpose value of `account_requirement`.
               */
              files: Array<string>;

              /**
               * The format of the document. Currently supports `files` only.
               */
              type: BankAccountOwnershipVerification.Type;
            }

            export interface CompanyLicense {
              /**
               * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/files/create) with a purpose value of `account_requirement`.
               */
              files: Array<string>;

              /**
               * The format of the document. Currently supports `files` only.
               */
              type: CompanyLicense.Type;
            }

            export interface CompanyMemorandumOfAssociation {
              /**
               * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/files/create) with a purpose value of `account_requirement`.
               */
              files: Array<string>;

              /**
               * The format of the document. Currently supports `files` only.
               */
              type: CompanyMemorandumOfAssociation.Type;
            }

            export interface CompanyMinisterialDecree {
              /**
               * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/files/create) with a purpose value of `account_requirement`.
               */
              files: Array<string>;

              /**
               * The format of the document. Currently supports `files` only.
               */
              type: CompanyMinisterialDecree.Type;
            }

            export interface CompanyRegistrationVerification {
              /**
               * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/files/create) with a purpose value of `account_requirement`.
               */
              files: Array<string>;

              /**
               * The format of the document. Currently supports `files` only.
               */
              type: CompanyRegistrationVerification.Type;
            }

            export interface CompanyTaxIdVerification {
              /**
               * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/files/create) with a purpose value of `account_requirement`.
               */
              files: Array<string>;

              /**
               * The format of the document. Currently supports `files` only.
               */
              type: CompanyTaxIdVerification.Type;
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

            export interface ProofOfAddress {
              /**
               * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/files/create) with a purpose value of `account_requirement`.
               */
              files: Array<string>;

              /**
               * The format of the document. Currently supports `files` only.
               */
              type: ProofOfAddress.Type;
            }

            export interface ProofOfRegistration {
              /**
               * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/files/create) with a purpose value of `account_requirement`.
               */
              files: Array<string>;

              /**
               * Person that is signing the document.
               */
              signer?: ProofOfRegistration.Signer;

              /**
               * The format of the document. Currently supports `files` only.
               */
              type: ProofOfRegistration.Type;
            }

            export interface ProofOfUltimateBeneficialOwnership {
              /**
               * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/files/create) with a purpose value of `account_requirement`.
               */
              files: Array<string>;

              /**
               * Person that is signing the document.
               */
              signer?: ProofOfUltimateBeneficialOwnership.Signer;

              /**
               * The format of the document. Currently supports `files` only.
               */
              type: ProofOfUltimateBeneficialOwnership.Type;
            }

            export namespace BankAccountOwnershipVerification {
              export type Type = 'files' | OtherString;
            }

            export namespace CompanyLicense {
              export type Type = 'files' | OtherString;
            }

            export namespace CompanyMemorandumOfAssociation {
              export type Type = 'files' | OtherString;
            }

            export namespace CompanyMinisterialDecree {
              export type Type = 'files' | OtherString;
            }

            export namespace CompanyRegistrationVerification {
              export type Type = 'files' | OtherString;
            }

            export namespace CompanyTaxIdVerification {
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

            export namespace ProofOfAddress {
              export type Type = 'files' | OtherString;
            }

            export namespace ProofOfRegistration {
              export interface Signer {
                /**
                 * Person signing the document.
                 */
                person: string;
              }

              export type Type = 'files' | OtherString;
            }

            export namespace ProofOfUltimateBeneficialOwnership {
              export interface Signer {
                /**
                 * Person signing the document.
                 */
                person: string;
              }

              export type Type = 'files' | OtherString;
            }
          }

          export namespace IdNumber {
            export type Type =
              | 'ae_crn'
              | 'ae_vat'
              | 'ag_tin'
              | 'ao_nif'
              | 'ar_cuit'
              | 'at_fn'
              | 'at_stn'
              | 'at_vat'
              | 'au_abn'
              | 'au_acn'
              | 'au_in'
              | 'au_wpn'
              | 'az_tin'
              | 'ba_pib'
              | 'bd_etin'
              | 'be_cbe'
              | 'be_vat'
              | 'bg_uic'
              | 'bg_vat'
              | 'bj_ifu'
              | 'br_cnpj'
              | 'ca_cn'
              | 'ca_crarr'
              | 'ca_gst_hst'
              | 'ca_neq'
              | 'ca_qst'
              | 'ca_rid'
              | 'ch_chid'
              | 'ch_uid'
              | 'cl_rut'
              | 'cr_cpj'
              | 'cr_nite'
              | 'cy_he'
              | 'cy_tic'
              | 'cy_vat'
              | 'cz_dic'
              | 'cz_ico'
              | 'cz_vat'
              | 'de_hrn'
              | 'de_stn'
              | 'de_vat'
              | 'dk_cvr'
              | 'dk_vat'
              | 'do_rcn'
              | 'dz_nif'
              | 'ee_rk'
              | 'ee_vat'
              | 'es_cif'
              | 'es_vat'
              | 'et_tin'
              | 'fi_vat'
              | 'fi_yt'
              | 'fr_rna'
              | 'fr_siren'
              | 'fr_siret'
              | 'fr_vat'
              | 'gb_crn'
              | 'gb_vat'
              | 'ge_tin'
              | 'gi_crn'
              | 'gi_vat'
              | 'gr_afm'
              | 'gr_gemi'
              | 'gr_vat'
              | 'gt_nit'
              | 'hk_br'
              | 'hk_cr'
              | 'hr_mbs'
              | 'hr_oib'
              | 'hr_vat'
              | 'hu_cjs'
              | 'hu_tin'
              | 'hu_vat'
              | 'id_npwp'
              | 'ie_crn'
              | 'ie_trn'
              | 'ie_vat'
              | 'il_tin'
              | 'il_vat'
              | 'in_gst'
              | 'in_pan'
              | 'is_kt'
              | 'it_rea'
              | 'it_vat'
              | 'jp_cn'
              | 'kh_tin'
              | 'kr_brn'
              | 'kz_bin'
              | 'la_tin'
              | 'lc_tin'
              | 'li_uid'
              | 'li_vat'
              | 'lt_ccrn'
              | 'lt_vat'
              | 'lu_nif'
              | 'lu_rcs'
              | 'lu_vat'
              | 'lv_urn'
              | 'lv_vat'
              | 'md_cf'
              | 'mg_nif'
              | 'mk_edb'
              | 'mt_crn'
              | 'mt_tin'
              | 'mt_vat'
              | 'mu_vat'
              | 'mx_rfc'
              | 'my_brn'
              | 'my_coid'
              | 'my_itn'
              | 'my_sst'
              | 'mz_nuit'
              | 'ne_tin'
              | 'nl_kvk'
              | 'nl_rsin'
              | 'nl_vat'
              | 'no_orgnr'
              | 'nz_bn'
              | 'nz_ird'
              | 'om_tin'
              | 'pe_ruc'
              | 'pk_ntn'
              | 'pl_nip'
              | 'pl_regon'
              | 'pl_vat'
              | 'pt_vat'
              | 'qa_tin'
              | 'ro_cui'
              | 'ro_orc'
              | 'ro_vat'
              | 'rw_tin'
              | 'sa_crn'
              | 'sa_tin'
              | 'se_orgnr'
              | 'se_vat'
              | 'sg_uen'
              | 'si_msp'
              | 'si_tin'
              | 'si_vat'
              | 'sk_dic'
              | 'sk_ico'
              | 'sk_vat'
              | 'sm_coe'
              | 'th_crn'
              | 'th_prn'
              | 'th_tin'
              | 'tr_tin'
              | 'tt_bir'
              | 'tt_vat'
              | 'us_ein'
              | 'vn_tin'
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
               * Registered name of the business.
               */
              registered_name?: string;
            }

            export interface Kanji {
              /**
               * Registered name of the business.
               */
              registered_name?: string;
            }
          }
        }

        export namespace Individual {
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
             * Whether the person is a director of the account's identity. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
             */
            director?: boolean;

            /**
             * Whether the person has significant responsibility to control, manage, or direct the organization.
             */
            executive?: boolean;

            /**
             * Whether the person is an owner of the account's identity.
             */
            owner?: boolean;

            /**
             * The percent owned by the person of the account's legal entity.
             */
            percent_ownership?: Decimal;

            /**
             * The person's title (e.g., CEO, Support Engineer).
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
}
export namespace V2 {
  export namespace Core {
    export interface AccountTokenRetrieveParams {}
  }
}
