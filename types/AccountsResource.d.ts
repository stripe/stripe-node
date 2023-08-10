// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface AccountCreateParams {
      /**
       * An [account token](https://stripe.com/docs/api#create_account_token), used to securely provide details to the account.
       */
      account_token?: string;

      /**
       * Business information about the account.
       */
      business_profile?: AccountCreateParams.BusinessProfile;

      /**
       * The business type.
       */
      business_type?: AccountCreateParams.BusinessType;

      /**
       * Each key of the dictionary represents a capability, and each capability maps to its settings (e.g. whether it has been requested or not). Each capability will be inactive until you have provided its specific requirements and Stripe has verified them. An account may have some of its requested capabilities be active and some be inactive.
       */
      capabilities?: AccountCreateParams.Capabilities;

      /**
       * Information about the company or business. This field is available for any `business_type`.
       */
      company?: AccountCreateParams.Company;

      /**
       * The country in which the account holder resides, or in which the business is legally established. This should be an ISO 3166-1 alpha-2 country code. For example, if you are in the United States and the business for which you're creating an account is legally represented in Canada, you would use `CA` as the country for the account being created. Available countries include [Stripe's global markets](https://stripe.com/global) as well as countries where [cross-border payouts](https://stripe.com/docs/connect/cross-border-payouts) are supported.
       */
      country?: string;

      /**
       * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
       */
      default_currency?: string;

      /**
       * Documents that may be submitted to satisfy various informational requests.
       */
      documents?: AccountCreateParams.Documents;

      /**
       * The email address of the account holder. This is only to make the account easier to identify to you. Stripe only emails Custom accounts with your consent.
       */
      email?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A card or bank account to attach to the account for receiving [payouts](https://stripe.com/docs/connect/bank-debit-card-payouts) (you won't be able to use it for top-ups). You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary, as documented in the `external_account` parameter for [bank account](https://stripe.com/docs/api#account_create_bank_account) creation.
       *
       * By default, providing an external account sets it as the new default external account for its currency, and deletes the old default if one exists. To add additional external accounts without replacing the existing default for the currency, use the [bank account](https://stripe.com/docs/api#account_create_bank_account) or [card creation](https://stripe.com/docs/api#account_create_card) APIs.
       */
      external_account?: string | AccountCreateParams.ExternalAccount;

      /**
       * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`.
       */
      individual?: AccountCreateParams.Individual;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Options for customizing how the account functions within Stripe.
       */
      settings?: AccountCreateParams.Settings;

      /**
       * Details on the account's acceptance of the [Stripe Services Agreement](https://stripe.com/docs/connect/updating-accounts#tos-acceptance).
       */
      tos_acceptance?: AccountCreateParams.TosAcceptance;

      /**
       * The type of Stripe account to create. May be one of `custom`, `express` or `standard`.
       */
      type?: AccountCreateParams.Type;
    }

    namespace AccountCreateParams {
      interface BusinessProfile {
        /**
         * [The merchant category code for the account](https://stripe.com/docs/connect/setting-mcc). MCCs are used to classify businesses based on the goods or services they provide.
         */
        mcc?: string;

        /**
         * An estimate of the monthly revenue of the business. Only accepted for accounts in Brazil and India.
         */
        monthly_estimated_revenue?: BusinessProfile.MonthlyEstimatedRevenue;

        /**
         * The customer-facing business name.
         */
        name?: string;

        /**
         * Internal-only description of the product sold by, or service provided by, the business. Used by Stripe for risk and underwriting purposes.
         */
        product_description?: string;

        /**
         * A publicly available mailing address for sending support issues to.
         */
        support_address?: Stripe.AddressParam;

        /**
         * A publicly available email address for sending support issues to.
         */
        support_email?: string;

        /**
         * A publicly available phone number to call with support issues.
         */
        support_phone?: string;

        /**
         * A publicly available website for handling support issues.
         */
        support_url?: Stripe.Emptyable<string>;

        /**
         * The business's publicly available website.
         */
        url?: string;
      }

      namespace BusinessProfile {
        interface MonthlyEstimatedRevenue {
          /**
           * A non-negative integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          amount: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;
        }
      }

      type BusinessType =
        | 'company'
        | 'government_entity'
        | 'individual'
        | 'non_profit';

      interface Capabilities {
        /**
         * The acss_debit_payments capability.
         */
        acss_debit_payments?: Capabilities.AcssDebitPayments;

        /**
         * The affirm_payments capability.
         */
        affirm_payments?: Capabilities.AffirmPayments;

        /**
         * The afterpay_clearpay_payments capability.
         */
        afterpay_clearpay_payments?: Capabilities.AfterpayClearpayPayments;

        /**
         * The au_becs_debit_payments capability.
         */
        au_becs_debit_payments?: Capabilities.AuBecsDebitPayments;

        /**
         * The bacs_debit_payments capability.
         */
        bacs_debit_payments?: Capabilities.BacsDebitPayments;

        /**
         * The bancontact_payments capability.
         */
        bancontact_payments?: Capabilities.BancontactPayments;

        /**
         * The bank_transfer_payments capability.
         */
        bank_transfer_payments?: Capabilities.BankTransferPayments;

        /**
         * The blik_payments capability.
         */
        blik_payments?: Capabilities.BlikPayments;

        /**
         * The boleto_payments capability.
         */
        boleto_payments?: Capabilities.BoletoPayments;

        /**
         * The card_issuing capability.
         */
        card_issuing?: Capabilities.CardIssuing;

        /**
         * The card_payments capability.
         */
        card_payments?: Capabilities.CardPayments;

        /**
         * The cartes_bancaires_payments capability.
         */
        cartes_bancaires_payments?: Capabilities.CartesBancairesPayments;

        /**
         * The cashapp_payments capability.
         */
        cashapp_payments?: Capabilities.CashappPayments;

        /**
         * The eps_payments capability.
         */
        eps_payments?: Capabilities.EpsPayments;

        /**
         * The fpx_payments capability.
         */
        fpx_payments?: Capabilities.FpxPayments;

        /**
         * The giropay_payments capability.
         */
        giropay_payments?: Capabilities.GiropayPayments;

        /**
         * The grabpay_payments capability.
         */
        grabpay_payments?: Capabilities.GrabpayPayments;

        /**
         * The ideal_payments capability.
         */
        ideal_payments?: Capabilities.IdealPayments;

        /**
         * The india_international_payments capability.
         */
        india_international_payments?: Capabilities.IndiaInternationalPayments;

        /**
         * The jcb_payments capability.
         */
        jcb_payments?: Capabilities.JcbPayments;

        /**
         * The klarna_payments capability.
         */
        klarna_payments?: Capabilities.KlarnaPayments;

        /**
         * The konbini_payments capability.
         */
        konbini_payments?: Capabilities.KonbiniPayments;

        /**
         * The legacy_payments capability.
         */
        legacy_payments?: Capabilities.LegacyPayments;

        /**
         * The link_payments capability.
         */
        link_payments?: Capabilities.LinkPayments;

        /**
         * The oxxo_payments capability.
         */
        oxxo_payments?: Capabilities.OxxoPayments;

        /**
         * The p24_payments capability.
         */
        p24_payments?: Capabilities.P24Payments;

        /**
         * The paynow_payments capability.
         */
        paynow_payments?: Capabilities.PaynowPayments;

        /**
         * The promptpay_payments capability.
         */
        promptpay_payments?: Capabilities.PromptpayPayments;

        /**
         * The sepa_debit_payments capability.
         */
        sepa_debit_payments?: Capabilities.SepaDebitPayments;

        /**
         * The sofort_payments capability.
         */
        sofort_payments?: Capabilities.SofortPayments;

        /**
         * The tax_reporting_us_1099_k capability.
         */
        tax_reporting_us_1099_k?: Capabilities.TaxReportingUs1099K;

        /**
         * The tax_reporting_us_1099_misc capability.
         */
        tax_reporting_us_1099_misc?: Capabilities.TaxReportingUs1099Misc;

        /**
         * The transfers capability.
         */
        transfers?: Capabilities.Transfers;

        /**
         * The treasury capability.
         */
        treasury?: Capabilities.Treasury;

        /**
         * The us_bank_account_ach_payments capability.
         */
        us_bank_account_ach_payments?: Capabilities.UsBankAccountAchPayments;

        /**
         * The zip_payments capability.
         */
        zip_payments?: Capabilities.ZipPayments;
      }

      namespace Capabilities {
        interface AcssDebitPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface AffirmPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface AfterpayClearpayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface AuBecsDebitPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BacsDebitPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BancontactPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BankTransferPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BlikPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BoletoPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface CardIssuing {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface CardPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface CartesBancairesPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface CashappPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface EpsPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface FpxPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface GiropayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface GrabpayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface IdealPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface IndiaInternationalPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface JcbPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface KlarnaPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface KonbiniPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface LegacyPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface LinkPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface OxxoPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface P24Payments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface PaynowPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface PromptpayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface SepaDebitPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface SofortPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface TaxReportingUs1099K {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface TaxReportingUs1099Misc {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface Transfers {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface Treasury {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface UsBankAccountAchPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface ZipPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }
      }

      interface Company {
        /**
         * The company's primary address.
         */
        address?: Stripe.AddressParam;

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
         * The export license ID number of the company, also referred as Import Export Code (India only).
         */
        export_license_id?: string;

        /**
         * The purpose code to use for export transactions (India only).
         */
        export_purpose_code?: string;

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
          | 'incorporated_partnership'
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
          | 'unincorporated_non_profit'
          | 'unincorporated_partnership';

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

      interface Documents {
        /**
         * One or more documents that support the [Bank account ownership verification](https://support.stripe.com/questions/bank-account-ownership-verification) requirement. Must be a document associated with the account's primary active bank account that displays the last 4 digits of the account number, either a statement or a voided check.
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
         * (Certain countries only) One or more documents showing the ministerial decree legalizing the company's establishment.
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
         * One or more documents showing the company's proof of registration with the national business registry.
         */
        proof_of_registration?: Documents.ProofOfRegistration;
      }

      namespace Documents {
        interface BankAccountOwnershipVerification {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyLicense {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyMemorandumOfAssociation {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyMinisterialDecree {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyRegistrationVerification {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyTaxIdVerification {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface ProofOfRegistration {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }
      }

      interface ExternalAccount {
        /**
         * The type of external account. Should be bank_account.
         */
        object: string;

        /**
         * The country in which the bank account is located.
         */
        country: string;

        /**
         * The currency the bank account is in. This must be a country/currency pairing that [Stripe supports](https://stripe.com/docs/payouts).
         */
        currency: string;

        /**
         * The name of the person or business that owns the bank account. This field is required when attaching the bank account to a Customer object.
         */
        account_holder_name?: string;

        /**
         * The type of entity that holds the account. This can be either individual or company. This field is required when attaching the bank account to a Customer object.
         */
        account_holder_type?: string;

        /**
         * The routing number, sort code, or other country-appropriate institution number for the bank account. For US bank accounts, this is required and should be the ACH routing number, not the wire routing number. If you are providing an IBAN for account_number, this field is not required.
         */
        routing_number?: string;

        /**
         * The account number for the bank account, in string form. Must be a checking account.
         */
        account_number: string;
      }

      interface Individual {
        /**
         * The individual's primary address.
         */
        address?: Stripe.AddressParam;

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
         * The government-issued secondary ID number of the individual, as appropriate for the representative's country, will be used for enhanced verification checks. In Thailand, this would be the laser code found on the back of an ID card. Instead of the number itself, you can also provide a [PII token created with Stripe.js](https://stripe.com/docs/js/tokens_sources/create_token?type=pii).
         */
        id_number_secondary?: string;

        /**
         * The individual's last name.
         */
        last_name?: string;

        /**
         * The Kana variation of the individual's last name (Japan only).
         */
        last_name_kana?: string;

        /**
         * The Kanji variation of the individual's last name (Japan only).
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
        registered_address?: Stripe.AddressParam;

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

      interface Settings {
        /**
         * Settings used to apply the account's branding to email receipts, invoices, Checkout, and other products.
         */
        branding?: Settings.Branding;

        /**
         * Settings specific to the account's use of the Card Issuing product.
         */
        card_issuing?: Settings.CardIssuing;

        /**
         * Settings specific to card charging on the account.
         */
        card_payments?: Settings.CardPayments;

        /**
         * Settings that apply across payment methods for charging on the account.
         */
        payments?: Settings.Payments;

        /**
         * Settings specific to the account's payouts.
         */
        payouts?: Settings.Payouts;

        /**
         * Settings specific to the account's Treasury FinancialAccounts.
         */
        treasury?: Settings.Treasury;
      }

      namespace Settings {
        interface Branding {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) An icon for the account. Must be square and at least 128px x 128px.
           */
          icon?: string;

          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for the account that will be used in Checkout instead of the icon and without the account's name next to it if provided. Must be at least 128px x 128px.
           */
          logo?: string;

          /**
           * A CSS hex color value representing the primary branding color for this account.
           */
          primary_color?: string;

          /**
           * A CSS hex color value representing the secondary branding color for this account.
           */
          secondary_color?: string;
        }

        interface CardIssuing {
          /**
           * Details on the account's acceptance of the [Stripe Issuing Terms and Disclosures](https://stripe.com/docs/issuing/connect/tos_acceptance).
           */
          tos_acceptance?: CardIssuing.TosAcceptance;
        }

        namespace CardIssuing {
          interface TosAcceptance {
            /**
             * The Unix timestamp marking when the account representative accepted the service agreement.
             */
            date?: number;

            /**
             * The IP address from which the account representative accepted the service agreement.
             */
            ip?: string;

            /**
             * The user agent of the browser from which the account representative accepted the service agreement.
             */
            user_agent?: Stripe.Emptyable<string>;
          }
        }

        interface CardPayments {
          /**
           * Automatically declines certain charge types regardless of whether the card issuer accepted or declined the charge.
           */
          decline_on?: CardPayments.DeclineOn;

          /**
           * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge. `statement_descriptor_prefix` is useful for maximizing descriptor space for the dynamic portion.
           */
          statement_descriptor_prefix?: string;

          /**
           * The Kana variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kana` specified on the charge. `statement_descriptor_prefix_kana` is useful for maximizing descriptor space for the dynamic portion.
           */
          statement_descriptor_prefix_kana?: Stripe.Emptyable<string>;

          /**
           * The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kanji` specified on the charge. `statement_descriptor_prefix_kanji` is useful for maximizing descriptor space for the dynamic portion.
           */
          statement_descriptor_prefix_kanji?: Stripe.Emptyable<string>;
        }

        namespace CardPayments {
          interface DeclineOn {
            /**
             * Whether Stripe automatically declines charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and they fail bank verification.
             */
            avs_failure?: boolean;

            /**
             * Whether Stripe automatically declines charges with an incorrect CVC. This setting only applies when a CVC is provided and it fails bank verification.
             */
            cvc_failure?: boolean;
          }
        }

        interface Payments {
          /**
           * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge.
           */
          statement_descriptor?: string;

          /**
           * The Kana variation of the default text that appears on credit card statements when a charge is made (Japan only).
           */
          statement_descriptor_kana?: string;

          /**
           * The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only).
           */
          statement_descriptor_kanji?: string;
        }

        interface Payouts {
          /**
           * A Boolean indicating whether Stripe should try to reclaim negative balances from an attached bank account. For details, see [Understanding Connect Account Balances](https://stripe.com/docs/connect/account-balances).
           */
          debit_negative_balances?: boolean;

          /**
           * Details on when funds from charges are available, and when they are paid out to an external account. For details, see our [Setting Bank and Debit Card Payouts](https://stripe.com/docs/connect/bank-transfers#payout-information) documentation.
           */
          schedule?: Payouts.Schedule;

          /**
           * The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
           */
          statement_descriptor?: string;
        }

        namespace Payouts {
          interface Schedule {
            /**
             * The number of days charge funds are held before being paid out. May also be set to `minimum`, representing the lowest available value for the account country. Default is `minimum`. The `delay_days` parameter remains at the last configured value if `interval` is `manual`. [Learn more about controlling payout delay days](https://stripe.com/docs/connect/manage-payout-schedule).
             */
            delay_days?: 'minimum' | number;

            /**
             * How frequently available funds are paid out. One of: `daily`, `manual`, `weekly`, or `monthly`. Default is `daily`.
             */
            interval?: Schedule.Interval;

            /**
             * The day of the month when available funds are paid out, specified as a number between 1--31. Payouts nominally scheduled between the 29th and 31st of the month are instead sent on the last day of a shorter month. Required and applicable only if `interval` is `monthly`.
             */
            monthly_anchor?: number;

            /**
             * The day of the week when available funds are paid out, specified as `monday`, `tuesday`, etc. (required and applicable only if `interval` is `weekly`.)
             */
            weekly_anchor?: Schedule.WeeklyAnchor;
          }

          namespace Schedule {
            type Interval = 'daily' | 'manual' | 'monthly' | 'weekly';

            type WeeklyAnchor =
              | 'friday'
              | 'monday'
              | 'saturday'
              | 'sunday'
              | 'thursday'
              | 'tuesday'
              | 'wednesday';
          }
        }

        interface Treasury {
          /**
           * Details on the account's acceptance of the Stripe Treasury Services Agreement.
           */
          tos_acceptance?: Treasury.TosAcceptance;
        }

        namespace Treasury {
          interface TosAcceptance {
            /**
             * The Unix timestamp marking when the account representative accepted the service agreement.
             */
            date?: number;

            /**
             * The IP address from which the account representative accepted the service agreement.
             */
            ip?: string;

            /**
             * The user agent of the browser from which the account representative accepted the service agreement.
             */
            user_agent?: Stripe.Emptyable<string>;
          }
        }
      }

      interface TosAcceptance {
        /**
         * The Unix timestamp marking when the account representative accepted their service agreement.
         */
        date?: number;

        /**
         * The IP address from which the account representative accepted their service agreement.
         */
        ip?: string;

        /**
         * The user's service agreement type.
         */
        service_agreement?: string;

        /**
         * The user agent of the browser from which the account representative accepted their service agreement.
         */
        user_agent?: string;
      }

      type Type = 'custom' | 'express' | 'standard';
    }

    interface AccountRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface AccountUpdateParams {
      /**
       * An [account token](https://stripe.com/docs/api#create_account_token), used to securely provide details to the account.
       */
      account_token?: string;

      /**
       * Business information about the account.
       */
      business_profile?: AccountUpdateParams.BusinessProfile;

      /**
       * The business type.
       */
      business_type?: AccountUpdateParams.BusinessType;

      /**
       * Each key of the dictionary represents a capability, and each capability maps to its settings (e.g. whether it has been requested or not). Each capability will be inactive until you have provided its specific requirements and Stripe has verified them. An account may have some of its requested capabilities be active and some be inactive.
       */
      capabilities?: AccountUpdateParams.Capabilities;

      /**
       * Information about the company or business. This field is available for any `business_type`.
       */
      company?: AccountUpdateParams.Company;

      /**
       * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
       */
      default_currency?: string;

      /**
       * Documents that may be submitted to satisfy various informational requests.
       */
      documents?: AccountUpdateParams.Documents;

      /**
       * The email address of the account holder. This is only to make the account easier to identify to you. Stripe only emails Custom accounts with your consent.
       */
      email?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A card or bank account to attach to the account for receiving [payouts](https://stripe.com/docs/connect/bank-debit-card-payouts) (you won't be able to use it for top-ups). You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary, as documented in the `external_account` parameter for [bank account](https://stripe.com/docs/api#account_create_bank_account) creation.
       *
       * By default, providing an external account sets it as the new default external account for its currency, and deletes the old default if one exists. To add additional external accounts without replacing the existing default for the currency, use the [bank account](https://stripe.com/docs/api#account_create_bank_account) or [card creation](https://stripe.com/docs/api#account_create_card) APIs.
       */
      external_account?: string;

      /**
       * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`.
       */
      individual?: AccountUpdateParams.Individual;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Options for customizing how the account functions within Stripe.
       */
      settings?: AccountUpdateParams.Settings;

      /**
       * Details on the account's acceptance of the [Stripe Services Agreement](https://stripe.com/docs/connect/updating-accounts#tos-acceptance).
       */
      tos_acceptance?: AccountUpdateParams.TosAcceptance;
    }

    namespace AccountUpdateParams {
      interface BusinessProfile {
        /**
         * [The merchant category code for the account](https://stripe.com/docs/connect/setting-mcc). MCCs are used to classify businesses based on the goods or services they provide.
         */
        mcc?: string;

        /**
         * An estimate of the monthly revenue of the business. Only accepted for accounts in Brazil and India.
         */
        monthly_estimated_revenue?: BusinessProfile.MonthlyEstimatedRevenue;

        /**
         * The customer-facing business name.
         */
        name?: string;

        /**
         * Internal-only description of the product sold by, or service provided by, the business. Used by Stripe for risk and underwriting purposes.
         */
        product_description?: string;

        /**
         * A publicly available mailing address for sending support issues to.
         */
        support_address?: Stripe.AddressParam;

        /**
         * A publicly available email address for sending support issues to.
         */
        support_email?: string;

        /**
         * A publicly available phone number to call with support issues.
         */
        support_phone?: string;

        /**
         * A publicly available website for handling support issues.
         */
        support_url?: Stripe.Emptyable<string>;

        /**
         * The business's publicly available website.
         */
        url?: string;
      }

      namespace BusinessProfile {
        interface MonthlyEstimatedRevenue {
          /**
           * A non-negative integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          amount: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;
        }
      }

      type BusinessType =
        | 'company'
        | 'government_entity'
        | 'individual'
        | 'non_profit';

      interface Capabilities {
        /**
         * The acss_debit_payments capability.
         */
        acss_debit_payments?: Capabilities.AcssDebitPayments;

        /**
         * The affirm_payments capability.
         */
        affirm_payments?: Capabilities.AffirmPayments;

        /**
         * The afterpay_clearpay_payments capability.
         */
        afterpay_clearpay_payments?: Capabilities.AfterpayClearpayPayments;

        /**
         * The au_becs_debit_payments capability.
         */
        au_becs_debit_payments?: Capabilities.AuBecsDebitPayments;

        /**
         * The bacs_debit_payments capability.
         */
        bacs_debit_payments?: Capabilities.BacsDebitPayments;

        /**
         * The bancontact_payments capability.
         */
        bancontact_payments?: Capabilities.BancontactPayments;

        /**
         * The bank_transfer_payments capability.
         */
        bank_transfer_payments?: Capabilities.BankTransferPayments;

        /**
         * The blik_payments capability.
         */
        blik_payments?: Capabilities.BlikPayments;

        /**
         * The boleto_payments capability.
         */
        boleto_payments?: Capabilities.BoletoPayments;

        /**
         * The card_issuing capability.
         */
        card_issuing?: Capabilities.CardIssuing;

        /**
         * The card_payments capability.
         */
        card_payments?: Capabilities.CardPayments;

        /**
         * The cartes_bancaires_payments capability.
         */
        cartes_bancaires_payments?: Capabilities.CartesBancairesPayments;

        /**
         * The cashapp_payments capability.
         */
        cashapp_payments?: Capabilities.CashappPayments;

        /**
         * The eps_payments capability.
         */
        eps_payments?: Capabilities.EpsPayments;

        /**
         * The fpx_payments capability.
         */
        fpx_payments?: Capabilities.FpxPayments;

        /**
         * The giropay_payments capability.
         */
        giropay_payments?: Capabilities.GiropayPayments;

        /**
         * The grabpay_payments capability.
         */
        grabpay_payments?: Capabilities.GrabpayPayments;

        /**
         * The ideal_payments capability.
         */
        ideal_payments?: Capabilities.IdealPayments;

        /**
         * The india_international_payments capability.
         */
        india_international_payments?: Capabilities.IndiaInternationalPayments;

        /**
         * The jcb_payments capability.
         */
        jcb_payments?: Capabilities.JcbPayments;

        /**
         * The klarna_payments capability.
         */
        klarna_payments?: Capabilities.KlarnaPayments;

        /**
         * The konbini_payments capability.
         */
        konbini_payments?: Capabilities.KonbiniPayments;

        /**
         * The legacy_payments capability.
         */
        legacy_payments?: Capabilities.LegacyPayments;

        /**
         * The link_payments capability.
         */
        link_payments?: Capabilities.LinkPayments;

        /**
         * The oxxo_payments capability.
         */
        oxxo_payments?: Capabilities.OxxoPayments;

        /**
         * The p24_payments capability.
         */
        p24_payments?: Capabilities.P24Payments;

        /**
         * The paynow_payments capability.
         */
        paynow_payments?: Capabilities.PaynowPayments;

        /**
         * The promptpay_payments capability.
         */
        promptpay_payments?: Capabilities.PromptpayPayments;

        /**
         * The sepa_debit_payments capability.
         */
        sepa_debit_payments?: Capabilities.SepaDebitPayments;

        /**
         * The sofort_payments capability.
         */
        sofort_payments?: Capabilities.SofortPayments;

        /**
         * The tax_reporting_us_1099_k capability.
         */
        tax_reporting_us_1099_k?: Capabilities.TaxReportingUs1099K;

        /**
         * The tax_reporting_us_1099_misc capability.
         */
        tax_reporting_us_1099_misc?: Capabilities.TaxReportingUs1099Misc;

        /**
         * The transfers capability.
         */
        transfers?: Capabilities.Transfers;

        /**
         * The treasury capability.
         */
        treasury?: Capabilities.Treasury;

        /**
         * The us_bank_account_ach_payments capability.
         */
        us_bank_account_ach_payments?: Capabilities.UsBankAccountAchPayments;

        /**
         * The zip_payments capability.
         */
        zip_payments?: Capabilities.ZipPayments;
      }

      namespace Capabilities {
        interface AcssDebitPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface AffirmPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface AfterpayClearpayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface AuBecsDebitPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BacsDebitPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BancontactPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BankTransferPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BlikPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BoletoPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface CardIssuing {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface CardPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface CartesBancairesPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface CashappPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface EpsPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface FpxPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface GiropayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface GrabpayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface IdealPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface IndiaInternationalPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface JcbPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface KlarnaPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface KonbiniPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface LegacyPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface LinkPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface OxxoPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface P24Payments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface PaynowPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface PromptpayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface SepaDebitPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface SofortPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface TaxReportingUs1099K {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface TaxReportingUs1099Misc {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface Transfers {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface Treasury {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface UsBankAccountAchPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface ZipPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }
      }

      interface Company {
        /**
         * The company's primary address.
         */
        address?: Stripe.AddressParam;

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
         * The export license ID number of the company, also referred as Import Export Code (India only).
         */
        export_license_id?: string;

        /**
         * The purpose code to use for export transactions (India only).
         */
        export_purpose_code?: string;

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
          | 'incorporated_partnership'
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
          | 'unincorporated_non_profit'
          | 'unincorporated_partnership';

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

      interface Documents {
        /**
         * One or more documents that support the [Bank account ownership verification](https://support.stripe.com/questions/bank-account-ownership-verification) requirement. Must be a document associated with the account's primary active bank account that displays the last 4 digits of the account number, either a statement or a voided check.
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
         * (Certain countries only) One or more documents showing the ministerial decree legalizing the company's establishment.
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
         * One or more documents showing the company's proof of registration with the national business registry.
         */
        proof_of_registration?: Documents.ProofOfRegistration;
      }

      namespace Documents {
        interface BankAccountOwnershipVerification {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyLicense {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyMemorandumOfAssociation {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyMinisterialDecree {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyRegistrationVerification {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyTaxIdVerification {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface ProofOfRegistration {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }
      }

      interface Individual {
        /**
         * The individual's primary address.
         */
        address?: Stripe.AddressParam;

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
         * The government-issued secondary ID number of the individual, as appropriate for the representative's country, will be used for enhanced verification checks. In Thailand, this would be the laser code found on the back of an ID card. Instead of the number itself, you can also provide a [PII token created with Stripe.js](https://stripe.com/docs/js/tokens_sources/create_token?type=pii).
         */
        id_number_secondary?: string;

        /**
         * The individual's last name.
         */
        last_name?: string;

        /**
         * The Kana variation of the individual's last name (Japan only).
         */
        last_name_kana?: string;

        /**
         * The Kanji variation of the individual's last name (Japan only).
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
        registered_address?: Stripe.AddressParam;

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

      interface Settings {
        /**
         * Settings used to apply the account's branding to email receipts, invoices, Checkout, and other products.
         */
        branding?: Settings.Branding;

        /**
         * Settings specific to the account's use of the Card Issuing product.
         */
        card_issuing?: Settings.CardIssuing;

        /**
         * Settings specific to card charging on the account.
         */
        card_payments?: Settings.CardPayments;

        /**
         * Settings that apply across payment methods for charging on the account.
         */
        payments?: Settings.Payments;

        /**
         * Settings specific to the account's payouts.
         */
        payouts?: Settings.Payouts;

        /**
         * Settings specific to the account's Treasury FinancialAccounts.
         */
        treasury?: Settings.Treasury;
      }

      namespace Settings {
        interface Branding {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) An icon for the account. Must be square and at least 128px x 128px.
           */
          icon?: string;

          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for the account that will be used in Checkout instead of the icon and without the account's name next to it if provided. Must be at least 128px x 128px.
           */
          logo?: string;

          /**
           * A CSS hex color value representing the primary branding color for this account.
           */
          primary_color?: string;

          /**
           * A CSS hex color value representing the secondary branding color for this account.
           */
          secondary_color?: string;
        }

        interface CardIssuing {
          /**
           * Details on the account's acceptance of the [Stripe Issuing Terms and Disclosures](https://stripe.com/docs/issuing/connect/tos_acceptance).
           */
          tos_acceptance?: CardIssuing.TosAcceptance;
        }

        namespace CardIssuing {
          interface TosAcceptance {
            /**
             * The Unix timestamp marking when the account representative accepted the service agreement.
             */
            date?: number;

            /**
             * The IP address from which the account representative accepted the service agreement.
             */
            ip?: string;

            /**
             * The user agent of the browser from which the account representative accepted the service agreement.
             */
            user_agent?: Stripe.Emptyable<string>;
          }
        }

        interface CardPayments {
          /**
           * Automatically declines certain charge types regardless of whether the card issuer accepted or declined the charge.
           */
          decline_on?: CardPayments.DeclineOn;

          /**
           * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge. `statement_descriptor_prefix` is useful for maximizing descriptor space for the dynamic portion.
           */
          statement_descriptor_prefix?: string;

          /**
           * The Kana variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kana` specified on the charge. `statement_descriptor_prefix_kana` is useful for maximizing descriptor space for the dynamic portion.
           */
          statement_descriptor_prefix_kana?: Stripe.Emptyable<string>;

          /**
           * The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kanji` specified on the charge. `statement_descriptor_prefix_kanji` is useful for maximizing descriptor space for the dynamic portion.
           */
          statement_descriptor_prefix_kanji?: Stripe.Emptyable<string>;
        }

        namespace CardPayments {
          interface DeclineOn {
            /**
             * Whether Stripe automatically declines charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and they fail bank verification.
             */
            avs_failure?: boolean;

            /**
             * Whether Stripe automatically declines charges with an incorrect CVC. This setting only applies when a CVC is provided and it fails bank verification.
             */
            cvc_failure?: boolean;
          }
        }

        interface Payments {
          /**
           * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge.
           */
          statement_descriptor?: string;

          /**
           * The Kana variation of the default text that appears on credit card statements when a charge is made (Japan only).
           */
          statement_descriptor_kana?: string;

          /**
           * The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only).
           */
          statement_descriptor_kanji?: string;
        }

        interface Payouts {
          /**
           * A Boolean indicating whether Stripe should try to reclaim negative balances from an attached bank account. For details, see [Understanding Connect Account Balances](https://stripe.com/docs/connect/account-balances).
           */
          debit_negative_balances?: boolean;

          /**
           * Details on when funds from charges are available, and when they are paid out to an external account. For details, see our [Setting Bank and Debit Card Payouts](https://stripe.com/docs/connect/bank-transfers#payout-information) documentation.
           */
          schedule?: Payouts.Schedule;

          /**
           * The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
           */
          statement_descriptor?: string;
        }

        namespace Payouts {
          interface Schedule {
            /**
             * The number of days charge funds are held before being paid out. May also be set to `minimum`, representing the lowest available value for the account country. Default is `minimum`. The `delay_days` parameter remains at the last configured value if `interval` is `manual`. [Learn more about controlling payout delay days](https://stripe.com/docs/connect/manage-payout-schedule).
             */
            delay_days?: 'minimum' | number;

            /**
             * How frequently available funds are paid out. One of: `daily`, `manual`, `weekly`, or `monthly`. Default is `daily`.
             */
            interval?: Schedule.Interval;

            /**
             * The day of the month when available funds are paid out, specified as a number between 1--31. Payouts nominally scheduled between the 29th and 31st of the month are instead sent on the last day of a shorter month. Required and applicable only if `interval` is `monthly`.
             */
            monthly_anchor?: number;

            /**
             * The day of the week when available funds are paid out, specified as `monday`, `tuesday`, etc. (required and applicable only if `interval` is `weekly`.)
             */
            weekly_anchor?: Schedule.WeeklyAnchor;
          }

          namespace Schedule {
            type Interval = 'daily' | 'manual' | 'monthly' | 'weekly';

            type WeeklyAnchor =
              | 'friday'
              | 'monday'
              | 'saturday'
              | 'sunday'
              | 'thursday'
              | 'tuesday'
              | 'wednesday';
          }
        }

        interface Treasury {
          /**
           * Details on the account's acceptance of the Stripe Treasury Services Agreement.
           */
          tos_acceptance?: Treasury.TosAcceptance;
        }

        namespace Treasury {
          interface TosAcceptance {
            /**
             * The Unix timestamp marking when the account representative accepted the service agreement.
             */
            date?: number;

            /**
             * The IP address from which the account representative accepted the service agreement.
             */
            ip?: string;

            /**
             * The user agent of the browser from which the account representative accepted the service agreement.
             */
            user_agent?: Stripe.Emptyable<string>;
          }
        }
      }

      interface TosAcceptance {
        /**
         * The Unix timestamp marking when the account representative accepted their service agreement.
         */
        date?: number;

        /**
         * The IP address from which the account representative accepted their service agreement.
         */
        ip?: string;

        /**
         * The user's service agreement type.
         */
        service_agreement?: string;

        /**
         * The user agent of the browser from which the account representative accepted their service agreement.
         */
        user_agent?: string;
      }
    }

    interface AccountListParams extends PaginationParams {
      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface AccountDeleteParams {}

    interface ExternalAccountCreateParams {
      /**
       * Please refer to full [documentation](https://stripe.com/docs/api) instead.
       */
      external_account: string;

      /**
       * When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.
       */
      default_for_currency?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;
    }

    interface LoginLinkCreateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

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

    interface ExternalAccountDeleteParams {}

    interface PersonDeleteParams {}

    interface CapabilityListParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ExternalAccountListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      object?: ExternalAccountListParams.Object;
    }

    namespace ExternalAccountListParams {
      type Object = 'bank_account' | 'card';
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

    interface AccountRejectParams {
      /**
       * The reason for rejecting the account. Can be `fraud`, `terms_of_service`, or `other`.
       */
      reason: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface CapabilityRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ExternalAccountRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PersonRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface CapabilityUpdateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
       */
      requested?: boolean;
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
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
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
         * One or more documents that support the [Bank account ownership verification](https://support.stripe.com/questions/bank-account-ownership-verification) requirement. Must be a document associated with the bank account that displays the last 4 digits of the account number, either a statement or a voided check.
         */
        bank_account_ownership_verification?: Documents.BankAccountOwnershipVerification;
      }

      namespace Documents {
        interface BankAccountOwnershipVerification {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }
      }
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

    class AccountsResource {
      /**
       * With [Connect](https://stripe.com/docs/connect), you can create Stripe accounts for your users.
       * To do this, you'll first need to [register your platform](https://dashboard.stripe.com/account/applications/settings).
       *
       * If you've already collected information for your connected accounts, you [can prefill that information](https://stripe.com/docs/connect/best-practices#onboarding) when
       * creating the account. Connect Onboarding won't ask for the prefilled information during account onboarding.
       * You can prefill any information on the account.
       */
      create(
        params?: AccountCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Account>>;
      create(
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Account>>;

      /**
       * Retrieves the details of an account.
       */
      retrieve(
        params?: AccountRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Account>>;
      retrieve(
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Account>>;

      /**
       * Retrieves the details of an account.
       */
      retrieve(
        id: string,
        params?: AccountRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Account>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Account>>;

      /**
       * Updates a [connected account](https://stripe.com/docs/connect/accounts) by setting the values of the parameters passed. Any parameters not provided are
       * left unchanged.
       *
       * For Custom accounts, you can update any information on the account. For other accounts, you can update all information until that
       * account has started to go through Connect Onboarding. Once you create an [Account Link](https://stripe.com/docs/api/account_links)
       * for a Standard or Express account, some parameters can no longer be changed. These are marked as Custom Only or Custom and Express
       * below.
       *
       * To update your own account, use the [Dashboard](https://dashboard.stripe.com/settings/account). Refer to our
       * [Connect](https://stripe.com/docs/connect/updating-accounts) documentation to learn more about updating accounts.
       */
      update(
        id: string,
        params?: AccountUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Account>>;

      /**
       * Returns a list of accounts connected to your platform via [Connect](https://stripe.com/docs/connect). If you're not a platform, the list is empty.
       */
      list(
        params?: AccountListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Account>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Account>;

      /**
       * With [Connect](https://stripe.com/docs/connect), you can delete accounts you manage.
       *
       * Accounts created using test-mode keys can be deleted at any time. Standard accounts created using live-mode keys cannot be deleted. Custom or Express accounts created using live-mode keys can only be deleted once all balances are zero.
       *
       * If you want to delete your own account, use the [account information tab in your account settings](https://dashboard.stripe.com/settings/account) instead.
       */
      del(
        id: string,
        params?: AccountDeleteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedAccount>>;
      del(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedAccount>>;

      /**
       * Create an external account for a given account.
       */
      createExternalAccount(
        id: string,
        params: ExternalAccountCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.BankAccount | Stripe.Card>>;

      /**
       * Creates a single-use login link for an Express account to access their Stripe dashboard.
       *
       * You may only create login links for [Express accounts](https://stripe.com/docs/connect/express-accounts) connected to your platform.
       */
      createLoginLink(
        id: string,
        params?: LoginLinkCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.LoginLink>>;
      createLoginLink(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.LoginLink>>;

      /**
       * Creates a new person.
       */
      createPerson(
        id: string,
        params?: PersonCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Person>>;
      createPerson(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Person>>;

      /**
       * Delete a specified external account for a given account.
       */
      deleteExternalAccount(
        accountId: string,
        id: string,
        params?: ExternalAccountDeleteParams,
        options?: RequestOptions
      ): Promise<
        Stripe.Response<Stripe.DeletedBankAccount | Stripe.DeletedCard>
      >;
      deleteExternalAccount(
        accountId: string,
        id: string,
        options?: RequestOptions
      ): Promise<
        Stripe.Response<Stripe.DeletedBankAccount | Stripe.DeletedCard>
      >;

      /**
       * Deletes an existing person's relationship to the account's legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the account_opener. If your integration is using the executive parameter, you cannot delete the only verified executive on file.
       */
      deletePerson(
        accountId: string,
        id: string,
        params?: PersonDeleteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedPerson>>;
      deletePerson(
        accountId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedPerson>>;

      /**
       * Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.
       */
      listCapabilities(
        id: string,
        params?: CapabilityListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Capability>;
      listCapabilities(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Capability>;

      /**
       * List external accounts for an account.
       */
      listExternalAccounts(
        id: string,
        params?: ExternalAccountListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.BankAccount | Stripe.Card>;
      listExternalAccounts(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.BankAccount | Stripe.Card>;

      /**
       * Returns a list of people associated with the account's legal entity. The people are returned sorted by creation date, with the most recent people appearing first.
       */
      listPersons(
        id: string,
        params?: PersonListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Person>;
      listPersons(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Person>;

      /**
       * With [Connect](https://stripe.com/docs/connect), you may flag accounts as suspicious.
       *
       * Test-mode Custom and Express accounts can be rejected at any time. Accounts created using live-mode keys may only be rejected once all balances are zero.
       */
      reject(
        id: string,
        params: AccountRejectParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Account>>;

      /**
       * Retrieves information about the specified Account Capability.
       */
      retrieveCapability(
        accountId: string,
        id: string,
        params?: CapabilityRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Capability>>;
      retrieveCapability(
        accountId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Capability>>;

      /**
       * Retrieve a specified external account for a given account.
       */
      retrieveExternalAccount(
        accountId: string,
        id: string,
        params?: ExternalAccountRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.BankAccount | Stripe.Card>>;
      retrieveExternalAccount(
        accountId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.BankAccount | Stripe.Card>>;

      /**
       * Retrieves an existing person.
       */
      retrievePerson(
        accountId: string,
        id: string,
        params?: PersonRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Person>>;
      retrievePerson(
        accountId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Person>>;

      /**
       * Updates an existing Account Capability.
       */
      updateCapability(
        accountId: string,
        id: string,
        params?: CapabilityUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Capability>>;
      updateCapability(
        accountId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Capability>>;

      /**
       * Updates the metadata, account holder name, account holder type of a bank account belonging to a [Custom account](https://stripe.com/docs/connect/custom-accounts), and optionally sets it as the default for its currency. Other bank account details are not editable by design.
       *
       * You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.
       */
      updateExternalAccount(
        accountId: string,
        id: string,
        params?: ExternalAccountUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.BankAccount | Stripe.Card>>;
      updateExternalAccount(
        accountId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.BankAccount | Stripe.Card>>;

      /**
       * Updates an existing person.
       */
      updatePerson(
        accountId: string,
        id: string,
        params?: PersonUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Person>>;
      updatePerson(
        accountId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Person>>;
    }
  }
}
