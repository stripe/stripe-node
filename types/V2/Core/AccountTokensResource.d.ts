// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        interface AccountTokenCreateParams {
          /**
           * The default contact email address for the Account. Required when configuring the account as a merchant or recipient.
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

        namespace AccountTokenCreateParams {
          interface Identity {
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

          namespace Identity {
            interface Attestations {
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

            namespace Attestations {
              interface DirectorshipDeclaration {
                /**
                 * A boolean indicating if the directors information has been attested.
                 */
                attested?: boolean;
              }

              interface OwnershipDeclaration {
                /**
                 * A boolean indicating if the beneficial owner information has been attested.
                 */
                attested?: boolean;
              }

              interface PersonsProvided {
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

              namespace PersonsProvided {
                type OwnershipExemptionReason =
                  | 'qualified_entity_exceeds_ownership_threshold'
                  | 'qualifies_as_financial_institution';
              }

              interface RepresentativeDeclaration {
                /**
                 * A boolean indicating if the representative is authorized to act as the representative of their legal entity.
                 */
                attested?: boolean;
              }

              interface TermsOfService {
                /**
                 * Details on the Account's acceptance of the [Stripe Services Agreement]; IP, date, and User Agent are expanded by Stripe.
                 */
                account?: TermsOfService.Account;
              }

              namespace TermsOfService {
                interface Account {
                  /**
                   * The boolean value indicating if the terms of service have been accepted.
                   */
                  shown_and_accepted?: boolean;
                }
              }
            }

            interface BusinessDetails {
              /**
               * The business registration address of the business entity.
               */
              address?: Stripe.JapanAddressParam;

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

            namespace BusinessDetails {
              interface AnnualRevenue {
                /**
                 * A non-negative integer representing the amount in the smallest currency unit.
                 */
                amount?: AnnualRevenue.Amount;

                /**
                 * The close-out date of the preceding fiscal year in ISO 8601 format. E.g. 2023-12-31 for the 31st of December, 2023.
                 */
                fiscal_year_end?: string;
              }

              namespace AnnualRevenue {
                interface Amount {
                  /**
                   * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
                   */
                  value?: number;

                  /**
                   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
                   */
                  currency?: string;
                }
              }

              interface Documents {
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
                 * One or more documents showing the company's proof of registration with the national business registry.
                 */
                proof_of_registration?: Documents.ProofOfRegistration;

                /**
                 * One or more documents that demonstrate proof of ultimate beneficial ownership.
                 */
                proof_of_ultimate_beneficial_ownership?: Documents.ProofOfUltimateBeneficialOwnership;
              }

              namespace Documents {
                interface BankAccountOwnershipVerification {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
                }

                interface CompanyLicense {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
                }

                interface CompanyMemorandumOfAssociation {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
                }

                interface CompanyMinisterialDecree {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
                }

                interface CompanyRegistrationVerification {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
                }

                interface CompanyTaxIdVerification {
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

                interface ProofOfAddress {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
                }

                interface ProofOfRegistration {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
                }

                interface ProofOfUltimateBeneficialOwnership {
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

              namespace IdNumber {
                type Type =
                  | 'ae_crn'
                  | 'ae_vat'
                  | 'ao_nif'
                  | 'ar_cuit'
                  | 'at_fn'
                  | 'at_stn'
                  | 'at_vat'
                  | 'au_abn'
                  | 'au_acn'
                  | 'au_in'
                  | 'az_tin'
                  | 'bd_etin'
                  | 'be_cbe'
                  | 'be_vat'
                  | 'bg_uic'
                  | 'bg_vat'
                  | 'br_cnpj'
                  | 'ca_cn'
                  | 'ca_crarr'
                  | 'ca_gst_hst'
                  | 'ca_neq'
                  | 'ca_rid'
                  | 'ch_chid'
                  | 'ch_uid'
                  | 'cr_cpj'
                  | 'cr_nite'
                  | 'cy_he'
                  | 'cy_tic'
                  | 'cy_vat'
                  | 'cz_ico'
                  | 'cz_vat'
                  | 'de_hrn'
                  | 'de_stn'
                  | 'de_vat'
                  | 'dk_cvr'
                  | 'dk_vat'
                  | 'do_rcn'
                  | 'ee_rk'
                  | 'ee_vat'
                  | 'es_cif'
                  | 'es_vat'
                  | 'fi_vat'
                  | 'fi_yt'
                  | 'fr_rna'
                  | 'fr_siren'
                  | 'fr_vat'
                  | 'gb_crn'
                  | 'gb_vat'
                  | 'gi_crn'
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
                  | 'ie_crn'
                  | 'ie_trn'
                  | 'ie_vat'
                  | 'it_rea'
                  | 'it_vat'
                  | 'jp_cn'
                  | 'kz_bin'
                  | 'li_uid'
                  | 'lt_ccrn'
                  | 'lt_vat'
                  | 'lu_nif'
                  | 'lu_rcs'
                  | 'lu_vat'
                  | 'lv_urn'
                  | 'lv_vat'
                  | 'mt_crn'
                  | 'mt_tin'
                  | 'mt_vat'
                  | 'mx_rfc'
                  | 'my_brn'
                  | 'my_coid'
                  | 'my_itn'
                  | 'my_sst'
                  | 'mz_nuit'
                  | 'nl_kvk'
                  | 'nl_rsin'
                  | 'nl_vat'
                  | 'no_orgnr'
                  | 'nz_bn'
                  | 'nz_ird'
                  | 'pe_ruc'
                  | 'pk_ntn'
                  | 'pl_nip'
                  | 'pl_regon'
                  | 'pl_vat'
                  | 'pt_vat'
                  | 'ro_cui'
                  | 'ro_orc'
                  | 'ro_vat'
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
                  | 'th_crn'
                  | 'th_prn'
                  | 'th_tin'
                  | 'us_ein';
              }

              interface MonthlyEstimatedRevenue {
                /**
                 * A non-negative integer representing the amount in the smallest currency unit.
                 */
                amount?: MonthlyEstimatedRevenue.Amount;
              }

              namespace MonthlyEstimatedRevenue {
                interface Amount {
                  /**
                   * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
                   */
                  value?: number;

                  /**
                   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
                   */
                  currency?: string;
                }
              }

              interface RegistrationDate {
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
                 * Kana name.
                 */
                kana?: ScriptNames.Kana;

                /**
                 * Kanji name.
                 */
                kanji?: ScriptNames.Kanji;
              }

              namespace ScriptNames {
                interface Kana {
                  /**
                   * Registered name of the business.
                   */
                  registered_name?: string;
                }

                interface Kanji {
                  /**
                   * Registered name of the business.
                   */
                  registered_name?: string;
                }
              }

              type Structure =
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
                | 'unincorporated_partnership';
            }

            type EntityType =
              | 'company'
              | 'government_entity'
              | 'individual'
              | 'non_profit';

            interface Individual {
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
              address?: Stripe.JapanAddressParam;

              /**
               * The individual's date of birth.
               */
              date_of_birth?: Individual.DateOfBirth;

              /**
               * Documents that may be submitted to satisfy various informational requests.
               */
              documents?: Individual.Documents;

              /**
               * The individual's email address.
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
              metadata?: Stripe.MetadataParam;

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

            namespace Individual {
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
                percent_ownership?: string;

                /**
                 * The person's title (e.g., CEO, Support Engineer).
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
      }

      namespace Core {
        interface AccountTokenRetrieveParams {}
      }

      namespace Core {
        class AccountTokensResource {
          /**
           * Creates an Account Token.
           */
          create(
            params?: AccountTokenCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.AccountToken>>;
          create(
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.AccountToken>>;

          /**
           * Retrieves an Account Token.
           */
          retrieve(
            id: string,
            params?: AccountTokenRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.AccountToken>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.AccountToken>>;
        }
      }
    }
  }
}
