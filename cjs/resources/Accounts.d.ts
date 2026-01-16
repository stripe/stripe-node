import { StripeResource } from '../StripeResource.js';
import { Capability } from './Capabilities.js';
import { DeletedExternalAccount, ExternalAccount } from './ExternalAccounts.js';
import { LoginLink } from './LoginLinks.js';
import { DeletedPerson, Person } from './Persons.js';
import { File } from './Files.js';
import { TaxId } from './TaxIds.js';
import { Emptyable, MetadataParam, AddressParam, JapanAddressParam, PaginationParams, RangeQueryParam, Metadata, Address } from '../shared.js';
import { RequestOptions, Response, ApiListPromise, ApiList } from '../lib.js';
export declare class AccountResource extends StripeResource {
    /**
     * With [Connect](https://docs.stripe.com/connect), you can delete accounts you manage.
     *
     * Test-mode accounts can be deleted at any time.
     *
     * Live-mode accounts that have access to the standard dashboard and Stripe is responsible for negative account balances cannot be deleted, which includes Standard accounts. All other Live-mode accounts, can be deleted when all [balances](https://docs.stripe.com/api/balance/balance_object) are zero.
     *
     * If you want to delete your own account, use the [account information tab in your account settings](https://dashboard.stripe.com/settings/account) instead.
     */
    del(id: string, params?: AccountDeleteParams, options?: RequestOptions): Promise<Response<DeletedAccount>>;
    del(id: string, options?: RequestOptions): Promise<Response<DeletedAccount>>;
    /**
     * Retrieves the details of an account.
     */
    retrieve(id: string, params?: AccountRetrieveParams, options?: RequestOptions): Promise<Response<Account>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<Account>>;
    /**
     * Updates a [connected account](https://docs.stripe.com/connect/accounts) by setting the values of the parameters passed. Any parameters not provided are
     * left unchanged.
     *
     * For accounts where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection)
     * is application, which includes Custom accounts, you can update any information on the account.
     *
     * For accounts where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection)
     * is stripe, which includes Standard and Express accounts, you can update all information until you create
     * an [Account Link or <a href="/api/account_sessions">Account Session](https://docs.stripe.com/api/account_links) to start Connect onboarding,
     * after which some properties can no longer be updated.
     *
     * To update your own account, use the [Dashboard](https://dashboard.stripe.com/settings/account). Refer to our
     * [Connect](https://docs.stripe.com/docs/connect/updating-accounts) documentation to learn more about updating accounts.
     */
    update(id: string, params?: AccountUpdateParams, options?: RequestOptions): Promise<Response<Account>>;
    /**
     * Retrieves the details of an account.
     */
    retrieveCurrent(params?: AccountRetrieveCurrentParams, options?: RequestOptions): Promise<Response<Account>>;
    retrieveCurrent(options?: RequestOptions): Promise<Response<Account>>;
    /**
     * Returns a list of accounts connected to your platform via [Connect](https://docs.stripe.com/docs/connect). If you're not a platform, the list is empty.
     */
    list(params?: AccountListParams, options?: RequestOptions): ApiListPromise<Account>;
    list(options?: RequestOptions): ApiListPromise<Account>;
    /**
     * With [Connect](https://docs.stripe.com/docs/connect), you can create Stripe accounts for your users.
     * To do this, you'll first need to [register your platform](https://dashboard.stripe.com/account/applications/settings).
     *
     * If you've already collected information for your connected accounts, you [can prefill that information](https://docs.stripe.com/docs/connect/best-practices#onboarding) when
     * creating the account. Connect Onboarding won't ask for the prefilled information during account onboarding.
     * You can prefill any information on the account.
     */
    create(params?: AccountCreateParams, options?: RequestOptions): Promise<Response<Account>>;
    create(options?: RequestOptions): Promise<Response<Account>>;
    /**
     * With [Connect](https://docs.stripe.com/connect), you can reject accounts that you have flagged as suspicious.
     *
     * Only accounts where your platform is liable for negative account balances, which includes Custom and Express accounts, can be rejected. Test-mode accounts can be rejected at any time. Live-mode accounts can only be rejected after all balances are zero.
     */
    reject(id: string, params: AccountRejectParams, options?: RequestOptions): Promise<Response<Account>>;
    /**
     * Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.
     */
    listCapabilities(id: string, params?: AccountListCapabilitiesParams, options?: RequestOptions): ApiListPromise<Capability>;
    listCapabilities(id: string, options?: RequestOptions): ApiListPromise<Capability>;
    /**
     * Retrieves information about the specified Account Capability.
     */
    retrieveCapability(accountId: string, id: string, params?: AccountRetrieveCapabilityParams, options?: RequestOptions): Promise<Response<Capability>>;
    retrieveCapability(accountId: string, id: string, options?: RequestOptions): Promise<Response<Capability>>;
    /**
     * Updates an existing Account Capability. Request or remove a capability by updating its requested parameter.
     */
    updateCapability(accountId: string, id: string, params?: AccountUpdateCapabilityParams, options?: RequestOptions): Promise<Response<Capability>>;
    updateCapability(accountId: string, id: string, options?: RequestOptions): Promise<Response<Capability>>;
    /**
     * Delete a specified external account for a given account.
     */
    deleteExternalAccount(accountId: string, id: string, params?: AccountDeleteExternalAccountParams, options?: RequestOptions): Promise<Response<DeletedExternalAccount>>;
    deleteExternalAccount(accountId: string, id: string, options?: RequestOptions): Promise<Response<DeletedExternalAccount>>;
    /**
     * Retrieve a specified external account for a given account.
     */
    retrieveExternalAccount(accountId: string, id: string, params?: AccountRetrieveExternalAccountParams, options?: RequestOptions): Promise<Response<ExternalAccount>>;
    retrieveExternalAccount(accountId: string, id: string, options?: RequestOptions): Promise<Response<ExternalAccount>>;
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
    updateExternalAccount(accountId: string, id: string, params?: AccountUpdateExternalAccountParams, options?: RequestOptions): Promise<Response<ExternalAccount>>;
    updateExternalAccount(accountId: string, id: string, options?: RequestOptions): Promise<Response<ExternalAccount>>;
    /**
     * List external accounts for an account.
     */
    listExternalAccounts(id: string, params?: AccountListExternalAccountsParams, options?: RequestOptions): ApiListPromise<ExternalAccount>;
    listExternalAccounts(id: string, options?: RequestOptions): ApiListPromise<ExternalAccount>;
    /**
     * Create an external account for a given account.
     */
    createExternalAccount(id: string, params: AccountCreateExternalAccountParams, options?: RequestOptions): Promise<Response<ExternalAccount>>;
    /**
     * Creates a login link for a connected account to access the Express Dashboard.
     *
     * You can only create login links for accounts that use the [Express Dashboard](https://docs.stripe.com/connect/express-dashboard) and are connected to your platform.
     */
    createLoginLink(id: string, params?: AccountCreateLoginLinkParams, options?: RequestOptions): Promise<Response<LoginLink>>;
    createLoginLink(id: string, options?: RequestOptions): Promise<Response<LoginLink>>;
    /**
     * Deletes an existing person's relationship to the account's legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the account_opener. If your integration is using the executive parameter, you cannot delete the only verified executive on file.
     */
    deletePerson(accountId: string, id: string, params?: AccountDeletePersonParams, options?: RequestOptions): Promise<Response<DeletedPerson>>;
    deletePerson(accountId: string, id: string, options?: RequestOptions): Promise<Response<DeletedPerson>>;
    /**
     * Retrieves an existing person.
     */
    retrievePerson(accountId: string, id: string, params?: AccountRetrievePersonParams, options?: RequestOptions): Promise<Response<Person>>;
    retrievePerson(accountId: string, id: string, options?: RequestOptions): Promise<Response<Person>>;
    /**
     * Updates an existing person.
     */
    updatePerson(accountId: string, id: string, params?: AccountUpdatePersonParams, options?: RequestOptions): Promise<Response<Person>>;
    updatePerson(accountId: string, id: string, options?: RequestOptions): Promise<Response<Person>>;
    /**
     * Returns a list of people associated with the account's legal entity. The people are returned sorted by creation date, with the most recent people appearing first.
     */
    listPersons(id: string, params?: AccountListPersonsParams, options?: RequestOptions): ApiListPromise<Person>;
    listPersons(id: string, options?: RequestOptions): ApiListPromise<Person>;
    /**
     * Creates a new person.
     */
    createPerson(id: string, params?: AccountCreatePersonParams, options?: RequestOptions): Promise<Response<Person>>;
    createPerson(id: string, options?: RequestOptions): Promise<Response<Person>>;
}
export interface Account {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'account';
    /**
     * Business information about the account.
     */
    business_profile?: Account.BusinessProfile | null;
    /**
     * The business type.
     */
    business_type?: Account.BusinessType | null;
    capabilities?: Account.Capabilities;
    /**
     * Whether the account can process charges.
     */
    charges_enabled: boolean;
    company?: Account.Company;
    controller?: Account.Controller;
    /**
     * The account's country.
     */
    country?: string;
    /**
     * Time at which the account was connected. Measured in seconds since the Unix epoch.
     */
    created?: number;
    /**
     * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
     */
    default_currency?: string;
    /**
     * Always true for a deleted object
     */
    deleted?: void;
    /**
     * Whether account details have been submitted. Accounts with Stripe Dashboard access, which includes Standard accounts, cannot receive payouts before this is true. Accounts where this is false should be directed to [an onboarding flow](https://docs.stripe.com/connect/onboarding) to finish submitting account details.
     */
    details_submitted: boolean;
    /**
     * An email address associated with the account. It's not used for authentication and Stripe doesn't market to this field without explicit approval from the platform.
     */
    email: string | null;
    /**
     * External accounts (bank accounts and debit cards) currently attached to this account. External accounts are only returned for requests where `controller[is_controller]` is true.
     */
    external_accounts?: ApiList<ExternalAccount>;
    future_requirements?: Account.FutureRequirements;
    /**
     * The groups associated with the account.
     */
    groups?: Account.Groups | null;
    /**
     * This is an object representing a person associated with a Stripe account.
     *
     * A platform can only access a subset of data in a person for an account where [account.controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `stripe`, which includes Standard and Express accounts, after creating an Account Link or Account Session to start Connect onboarding.
     *
     * See the [Standard onboarding](https://docs.stripe.com/connect/standard-accounts) or [Express onboarding](https://docs.stripe.com/connect/express-accounts) documentation for information about prefilling information and account onboarding steps. Learn more about [handling identity verification with the API](https://docs.stripe.com/connect/handling-api-verification#person-information).
     */
    individual?: Person;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Metadata;
    /**
     * Whether the funds in this account can be paid out.
     */
    payouts_enabled: boolean;
    requirements?: Account.Requirements;
    /**
     * Options for customizing how the account functions within Stripe.
     */
    settings?: Account.Settings | null;
    tos_acceptance?: Account.TosAcceptance;
    /**
     * The Stripe account type. Can be `standard`, `express`, `custom`, or `none`.
     */
    type: Account.Type;
}
export interface DeletedAccount {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'account';
    /**
     * Always true for a deleted object
     */
    deleted: true;
}
export declare namespace Account {
    interface BusinessProfile {
        /**
         * The applicant's gross annual revenue for its preceding fiscal year.
         */
        annual_revenue?: BusinessProfile.AnnualRevenue | null;
        /**
         * An estimated upper bound of employees, contractors, vendors, etc. currently working for the business.
         */
        estimated_worker_count?: number | null;
        /**
         * [The merchant category code for the account](https://docs.stripe.com/connect/setting-mcc). MCCs are used to classify businesses based on the goods or services they provide.
         */
        mcc: string | null;
        /**
         * Whether the business is a minority-owned, women-owned, and/or LGBTQI+ -owned business.
         */
        minority_owned_business_designation: Array<BusinessProfile.MinorityOwnedBusinessDesignation> | null;
        monthly_estimated_revenue?: BusinessProfile.MonthlyEstimatedRevenue;
        /**
         * The customer-facing business name.
         */
        name: string | null;
        /**
         * Internal-only description of the product sold or service provided by the business. It's used by Stripe for risk and underwriting purposes.
         */
        product_description?: string | null;
        /**
         * A publicly available mailing address for sending support issues to.
         */
        support_address: Address | null;
        /**
         * A publicly available email address for sending support issues to.
         */
        support_email: string | null;
        /**
         * A publicly available phone number to call with support issues.
         */
        support_phone: string | null;
        /**
         * A publicly available website for handling support issues.
         */
        support_url: string | null;
        /**
         * The business's publicly available website.
         */
        url: string | null;
    }
    type BusinessType = 'company' | 'government_entity' | 'individual' | 'non_profit';
    interface Capabilities {
        /**
         * The status of the Canadian pre-authorized debits payments capability of the account, or whether the account can directly process Canadian pre-authorized debits charges.
         */
        acss_debit_payments?: Capabilities.AcssDebitPayments;
        /**
         * The status of the Affirm capability of the account, or whether the account can directly process Affirm charges.
         */
        affirm_payments?: Capabilities.AffirmPayments;
        /**
         * The status of the Afterpay Clearpay capability of the account, or whether the account can directly process Afterpay Clearpay charges.
         */
        afterpay_clearpay_payments?: Capabilities.AfterpayClearpayPayments;
        /**
         * The status of the Alma capability of the account, or whether the account can directly process Alma payments.
         */
        alma_payments?: Capabilities.AlmaPayments;
        /**
         * The status of the AmazonPay capability of the account, or whether the account can directly process AmazonPay payments.
         */
        amazon_pay_payments?: Capabilities.AmazonPayPayments;
        /**
         * The status of the BECS Direct Debit (AU) payments capability of the account, or whether the account can directly process BECS Direct Debit (AU) charges.
         */
        au_becs_debit_payments?: Capabilities.AuBecsDebitPayments;
        /**
         * The status of the Bacs Direct Debits payments capability of the account, or whether the account can directly process Bacs Direct Debits charges.
         */
        bacs_debit_payments?: Capabilities.BacsDebitPayments;
        /**
         * The status of the Bancontact payments capability of the account, or whether the account can directly process Bancontact charges.
         */
        bancontact_payments?: Capabilities.BancontactPayments;
        /**
         * The status of the customer_balance payments capability of the account, or whether the account can directly process customer_balance charges.
         */
        bank_transfer_payments?: Capabilities.BankTransferPayments;
        /**
         * The status of the Billie capability of the account, or whether the account can directly process Billie payments.
         */
        billie_payments?: Capabilities.BilliePayments;
        /**
         * The status of the blik payments capability of the account, or whether the account can directly process blik charges.
         */
        blik_payments?: Capabilities.BlikPayments;
        /**
         * The status of the boleto payments capability of the account, or whether the account can directly process boleto charges.
         */
        boleto_payments?: Capabilities.BoletoPayments;
        /**
         * The status of the card issuing capability of the account, or whether you can use Issuing to distribute funds on cards
         */
        card_issuing?: Capabilities.CardIssuing;
        /**
         * The status of the card payments capability of the account, or whether the account can directly process credit and debit card charges.
         */
        card_payments?: Capabilities.CardPayments;
        /**
         * The status of the Cartes Bancaires payments capability of the account, or whether the account can directly process Cartes Bancaires card charges in EUR currency.
         */
        cartes_bancaires_payments?: Capabilities.CartesBancairesPayments;
        /**
         * The status of the Cash App Pay capability of the account, or whether the account can directly process Cash App Pay payments.
         */
        cashapp_payments?: Capabilities.CashappPayments;
        /**
         * The status of the Crypto capability of the account, or whether the account can directly process Crypto payments.
         */
        crypto_payments?: Capabilities.CryptoPayments;
        /**
         * The status of the EPS payments capability of the account, or whether the account can directly process EPS charges.
         */
        eps_payments?: Capabilities.EpsPayments;
        /**
         * The status of the FPX payments capability of the account, or whether the account can directly process FPX charges.
         */
        fpx_payments?: Capabilities.FpxPayments;
        /**
         * The status of the GB customer_balance payments (GBP currency) capability of the account, or whether the account can directly process GB customer_balance charges.
         */
        gb_bank_transfer_payments?: Capabilities.GbBankTransferPayments;
        /**
         * The status of the giropay payments capability of the account, or whether the account can directly process giropay charges.
         */
        giropay_payments?: Capabilities.GiropayPayments;
        /**
         * The status of the GrabPay payments capability of the account, or whether the account can directly process GrabPay charges.
         */
        grabpay_payments?: Capabilities.GrabpayPayments;
        /**
         * The status of the iDEAL payments capability of the account, or whether the account can directly process iDEAL charges.
         */
        ideal_payments?: Capabilities.IdealPayments;
        /**
         * The status of the india_international_payments capability of the account, or whether the account can process international charges (non INR) in India.
         */
        india_international_payments?: Capabilities.IndiaInternationalPayments;
        /**
         * The status of the JCB payments capability of the account, or whether the account (Japan only) can directly process JCB credit card charges in JPY currency.
         */
        jcb_payments?: Capabilities.JcbPayments;
        /**
         * The status of the Japanese customer_balance payments (JPY currency) capability of the account, or whether the account can directly process Japanese customer_balance charges.
         */
        jp_bank_transfer_payments?: Capabilities.JpBankTransferPayments;
        /**
         * The status of the KakaoPay capability of the account, or whether the account can directly process KakaoPay payments.
         */
        kakao_pay_payments?: Capabilities.KakaoPayPayments;
        /**
         * The status of the Klarna payments capability of the account, or whether the account can directly process Klarna charges.
         */
        klarna_payments?: Capabilities.KlarnaPayments;
        /**
         * The status of the konbini payments capability of the account, or whether the account can directly process konbini charges.
         */
        konbini_payments?: Capabilities.KonbiniPayments;
        /**
         * The status of the KrCard capability of the account, or whether the account can directly process KrCard payments.
         */
        kr_card_payments?: Capabilities.KrCardPayments;
        /**
         * The status of the legacy payments capability of the account.
         */
        legacy_payments?: Capabilities.LegacyPayments;
        /**
         * The status of the link_payments capability of the account, or whether the account can directly process Link charges.
         */
        link_payments?: Capabilities.LinkPayments;
        /**
         * The status of the MB WAY payments capability of the account, or whether the account can directly process MB WAY charges.
         */
        mb_way_payments?: Capabilities.MbWayPayments;
        /**
         * The status of the MobilePay capability of the account, or whether the account can directly process MobilePay charges.
         */
        mobilepay_payments?: Capabilities.MobilepayPayments;
        /**
         * The status of the Multibanco payments capability of the account, or whether the account can directly process Multibanco charges.
         */
        multibanco_payments?: Capabilities.MultibancoPayments;
        /**
         * The status of the Mexican customer_balance payments (MXN currency) capability of the account, or whether the account can directly process Mexican customer_balance charges.
         */
        mx_bank_transfer_payments?: Capabilities.MxBankTransferPayments;
        /**
         * The status of the NaverPay capability of the account, or whether the account can directly process NaverPay payments.
         */
        naver_pay_payments?: Capabilities.NaverPayPayments;
        /**
         * The status of the New Zealand BECS Direct Debit payments capability of the account, or whether the account can directly process New Zealand BECS Direct Debit charges.
         */
        nz_bank_account_becs_debit_payments?: Capabilities.NzBankAccountBecsDebitPayments;
        /**
         * The status of the OXXO payments capability of the account, or whether the account can directly process OXXO charges.
         */
        oxxo_payments?: Capabilities.OxxoPayments;
        /**
         * The status of the P24 payments capability of the account, or whether the account can directly process P24 charges.
         */
        p24_payments?: Capabilities.P24Payments;
        /**
         * The status of the pay_by_bank payments capability of the account, or whether the account can directly process pay_by_bank charges.
         */
        pay_by_bank_payments?: Capabilities.PayByBankPayments;
        /**
         * The status of the Payco capability of the account, or whether the account can directly process Payco payments.
         */
        payco_payments?: Capabilities.PaycoPayments;
        /**
         * The status of the paynow payments capability of the account, or whether the account can directly process paynow charges.
         */
        paynow_payments?: Capabilities.PaynowPayments;
        /**
         * The status of the PayTo capability of the account, or whether the account can directly process PayTo charges.
         */
        payto_payments?: Capabilities.PaytoPayments;
        /**
         * The status of the pix payments capability of the account, or whether the account can directly process pix charges.
         */
        pix_payments?: Capabilities.PixPayments;
        /**
         * The status of the promptpay payments capability of the account, or whether the account can directly process promptpay charges.
         */
        promptpay_payments?: Capabilities.PromptpayPayments;
        /**
         * The status of the RevolutPay capability of the account, or whether the account can directly process RevolutPay payments.
         */
        revolut_pay_payments?: Capabilities.RevolutPayPayments;
        /**
         * The status of the SamsungPay capability of the account, or whether the account can directly process SamsungPay payments.
         */
        samsung_pay_payments?: Capabilities.SamsungPayPayments;
        /**
         * The status of the Satispay capability of the account, or whether the account can directly process Satispay payments.
         */
        satispay_payments?: Capabilities.SatispayPayments;
        /**
         * The status of the SEPA customer_balance payments (EUR currency) capability of the account, or whether the account can directly process SEPA customer_balance charges.
         */
        sepa_bank_transfer_payments?: Capabilities.SepaBankTransferPayments;
        /**
         * The status of the SEPA Direct Debits payments capability of the account, or whether the account can directly process SEPA Direct Debits charges.
         */
        sepa_debit_payments?: Capabilities.SepaDebitPayments;
        /**
         * The status of the Sofort payments capability of the account, or whether the account can directly process Sofort charges.
         */
        sofort_payments?: Capabilities.SofortPayments;
        /**
         * The status of the Swish capability of the account, or whether the account can directly process Swish payments.
         */
        swish_payments?: Capabilities.SwishPayments;
        /**
         * The status of the tax reporting 1099-K (US) capability of the account.
         */
        tax_reporting_us_1099_k?: Capabilities.TaxReportingUs1099K;
        /**
         * The status of the tax reporting 1099-MISC (US) capability of the account.
         */
        tax_reporting_us_1099_misc?: Capabilities.TaxReportingUs1099Misc;
        /**
         * The status of the transfers capability of the account, or whether your platform can transfer funds to the account.
         */
        transfers?: Capabilities.Transfers;
        /**
         * The status of the banking capability, or whether the account can have bank accounts.
         */
        treasury?: Capabilities.Treasury;
        /**
         * The status of the TWINT capability of the account, or whether the account can directly process TWINT charges.
         */
        twint_payments?: Capabilities.TwintPayments;
        /**
         * The status of the US bank account ACH payments capability of the account, or whether the account can directly process US bank account charges.
         */
        us_bank_account_ach_payments?: Capabilities.UsBankAccountAchPayments;
        /**
         * The status of the US customer_balance payments (USD currency) capability of the account, or whether the account can directly process US customer_balance charges.
         */
        us_bank_transfer_payments?: Capabilities.UsBankTransferPayments;
        /**
         * The status of the Zip capability of the account, or whether the account can directly process Zip charges.
         */
        zip_payments?: Capabilities.ZipPayments;
    }
    interface Company {
        address?: Address;
        /**
         * The Kana variation of the company's primary address (Japan only).
         */
        address_kana?: Company.AddressKana | null;
        /**
         * The Kanji variation of the company's primary address (Japan only).
         */
        address_kanji?: Company.AddressKanji | null;
        /**
         * Whether the company's directors have been provided. This Boolean will be `true` if you've manually indicated that all directors are provided via [the `directors_provided` parameter](https://docs.stripe.com/api/accounts/update#update_account-company-directors_provided).
         */
        directors_provided?: boolean;
        /**
         * This hash is used to attest that the director information provided to Stripe is both current and correct.
         */
        directorship_declaration?: Company.DirectorshipDeclaration | null;
        /**
         * Whether the company's executives have been provided. This Boolean will be `true` if you've manually indicated that all executives are provided via [the `executives_provided` parameter](https://docs.stripe.com/api/accounts/update#update_account-company-executives_provided), or if Stripe determined that sufficient executives were provided.
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
         * The company's legal name. Also available for accounts where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
         */
        name?: string | null;
        /**
         * The Kana variation of the company's legal name (Japan only). Also available for accounts where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
         */
        name_kana?: string | null;
        /**
         * The Kanji variation of the company's legal name (Japan only). Also available for accounts where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
         */
        name_kanji?: string | null;
        /**
         * Whether the company's owners have been provided. This Boolean will be `true` if you've manually indicated that all owners are provided via [the `owners_provided` parameter](https://docs.stripe.com/api/accounts/update#update_account-company-owners_provided), or if Stripe determined that sufficient owners were provided. Stripe determines ownership requirements using both the number of owners provided and their total percent ownership (calculated by adding the `percent_ownership` of each owner together).
         */
        owners_provided?: boolean;
        /**
         * This hash is used to attest that the beneficial owner information provided to Stripe is both current and correct.
         */
        ownership_declaration?: Company.OwnershipDeclaration | null;
        /**
         * This value is used to determine if a business is exempt from providing ultimate beneficial owners. See [this support article](https://support.stripe.com/questions/exemption-from-providing-ownership-details) and [changelog](https://docs.stripe.com/changelog/acacia/2025-01-27/ownership-exemption-reason-accounts-api) for more details.
         */
        ownership_exemption_reason?: Company.OwnershipExemptionReason;
        /**
         * The company's phone number (used for verification).
         */
        phone?: string | null;
        registration_date?: Company.RegistrationDate;
        /**
         * This hash is used to attest that the representative is authorized to act as the representative of their legal entity.
         */
        representative_declaration?: Company.RepresentativeDeclaration | null;
        /**
         * The category identifying the legal structure of the company or legal entity. Also available for accounts where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `stripe`. See [Business structure](https://docs.stripe.com/connect/identity-verification#business-structure) for more details.
         */
        structure?: Company.Structure;
        /**
         * Whether the company's business ID number was provided.
         */
        tax_id_provided?: boolean;
        /**
         * The jurisdiction in which the `tax_id` is registered (Germany-based companies only).
         */
        tax_id_registrar?: string;
        /**
         * Whether the company's business VAT number was provided.
         */
        vat_id_provided?: boolean;
        /**
         * Information on the verification state of the company.
         */
        verification?: Company.Verification | null;
    }
    interface Controller {
        fees?: Controller.Fees;
        /**
         * `true` if the Connect application retrieving the resource controls the account and can therefore exercise [platform controls](https://docs.stripe.com/connect/platform-controls-for-standard-accounts). Otherwise, this field is null.
         */
        is_controller?: boolean;
        losses?: Controller.Losses;
        /**
         * A value indicating responsibility for collecting requirements on this account. Only returned when the Connect application retrieving the resource controls the account.
         */
        requirement_collection?: Controller.RequirementCollection;
        stripe_dashboard?: Controller.StripeDashboard;
        /**
         * The controller type. Can be `application`, if a Connect application controls the account, or `account`, if the account controls itself.
         */
        type: Controller.Type;
    }
    interface FutureRequirements {
        /**
         * Fields that are due and can be resolved by providing the corresponding alternative fields instead. Many alternatives can list the same `original_fields_due`, and any of these alternatives can serve as a pathway for attempting to resolve the fields again. Re-providing `original_fields_due` also serves as a pathway for attempting to resolve the fields again.
         */
        alternatives: Array<FutureRequirements.Alternative> | null;
        /**
         * Date on which `future_requirements` becomes the main `requirements` hash and `future_requirements` becomes empty. After the transition, `currently_due` requirements may immediately become `past_due`, but the account may also be given a grace period depending on its enablement state prior to transitioning.
         */
        current_deadline: number | null;
        /**
         * Fields that need to be resolved to keep the account enabled. If not resolved by `future_requirements[current_deadline]`, these fields will transition to the main `requirements` hash.
         */
        currently_due: Array<string> | null;
        /**
         * This is typed as an enum for consistency with `requirements.disabled_reason`.
         */
        disabled_reason: FutureRequirements.DisabledReason | null;
        /**
         * Details about validation and verification failures for `due` requirements that must be resolved.
         */
        errors: Array<FutureRequirements.Error> | null;
        /**
         * Fields you must collect when all thresholds are reached. As they become required, they appear in `currently_due` as well.
         */
        eventually_due: Array<string> | null;
        /**
         * Fields that haven't been resolved by `requirements.current_deadline`. These fields need to be resolved to enable the capability on the account. `future_requirements.past_due` is a subset of `requirements.past_due`.
         */
        past_due: Array<string> | null;
        /**
         * Fields that are being reviewed, or might become required depending on the results of a review. If the review fails, these fields can move to `eventually_due`, `currently_due`, `past_due` or `alternatives`. Fields might appear in `eventually_due`, `currently_due`, `past_due` or `alternatives` and in `pending_verification` if one verification fails but another is still pending.
         */
        pending_verification: Array<string> | null;
    }
    interface Groups {
        /**
         * The group the account is in to determine their payments pricing, and null if the account is on customized pricing. [See the Platform pricing tool documentation](https://docs.stripe.com/connect/platform-pricing-tools) for details.
         */
        payments_pricing: string | null;
    }
    interface Requirements {
        /**
         * Fields that are due and can be resolved by providing the corresponding alternative fields instead. Many alternatives can list the same `original_fields_due`, and any of these alternatives can serve as a pathway for attempting to resolve the fields again. Re-providing `original_fields_due` also serves as a pathway for attempting to resolve the fields again.
         */
        alternatives: Array<Requirements.Alternative> | null;
        /**
         * Date by which the fields in `currently_due` must be collected to keep the account enabled. These fields may disable the account sooner if the next threshold is reached before they are collected.
         */
        current_deadline: number | null;
        /**
         * Fields that need to be resolved to keep the account enabled. If not resolved by `current_deadline`, these fields will appear in `past_due` as well, and the account is disabled.
         */
        currently_due: Array<string> | null;
        /**
         * If the account is disabled, this enum describes why. [Learn more about handling verification issues](https://docs.stripe.com/connect/handling-api-verification).
         */
        disabled_reason: Requirements.DisabledReason | null;
        /**
         * Details about validation and verification failures for `due` requirements that must be resolved.
         */
        errors: Array<Requirements.Error> | null;
        /**
         * Fields you must collect when all thresholds are reached. As they become required, they appear in `currently_due` as well, and `current_deadline` becomes set.
         */
        eventually_due: Array<string> | null;
        /**
         * Fields that haven't been resolved by `current_deadline`. These fields need to be resolved to enable the account.
         */
        past_due: Array<string> | null;
        /**
         * Fields that are being reviewed, or might become required depending on the results of a review. If the review fails, these fields can move to `eventually_due`, `currently_due`, `past_due` or `alternatives`. Fields might appear in `eventually_due`, `currently_due`, `past_due` or `alternatives` and in `pending_verification` if one verification fails but another is still pending.
         */
        pending_verification: Array<string> | null;
    }
    interface Settings {
        bacs_debit_payments?: Settings.BacsDebitPayments;
        branding: Settings.Branding;
        card_issuing?: Settings.CardIssuing;
        card_payments: Settings.CardPayments;
        dashboard: Settings.Dashboard;
        invoices?: Settings.Invoices;
        payments: Settings.Payments;
        payouts?: Settings.Payouts;
        sepa_debit_payments?: Settings.SepaDebitPayments;
        treasury?: Settings.Treasury;
    }
    interface TosAcceptance {
        /**
         * The Unix timestamp marking when the account representative accepted their service agreement
         */
        date?: number | null;
        /**
         * The IP address from which the account representative accepted their service agreement
         */
        ip?: string | null;
        /**
         * The user's service agreement type
         */
        service_agreement?: string;
        /**
         * The user agent of the browser from which the account representative accepted their service agreement
         */
        user_agent?: string | null;
    }
    type Type = 'custom' | 'express' | 'none' | 'standard';
    namespace BusinessProfile {
        interface AnnualRevenue {
            /**
             * A non-negative integer representing the amount in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
             */
            amount: number | null;
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string | null;
            /**
             * The close-out date of the preceding fiscal year in ISO 8601 format. E.g. 2023-12-31 for the 31st of December, 2023.
             */
            fiscal_year_end: string | null;
        }
        type MinorityOwnedBusinessDesignation = 'lgbtqi_owned_business' | 'minority_owned_business' | 'none_of_these_apply' | 'prefer_not_to_answer' | 'women_owned_business';
        interface MonthlyEstimatedRevenue {
            /**
             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
             */
            amount: number;
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;
        }
    }
    namespace Capabilities {
        type AcssDebitPayments = 'active' | 'inactive' | 'pending';
        type AffirmPayments = 'active' | 'inactive' | 'pending';
        type AfterpayClearpayPayments = 'active' | 'inactive' | 'pending';
        type AlmaPayments = 'active' | 'inactive' | 'pending';
        type AmazonPayPayments = 'active' | 'inactive' | 'pending';
        type AuBecsDebitPayments = 'active' | 'inactive' | 'pending';
        type BacsDebitPayments = 'active' | 'inactive' | 'pending';
        type BancontactPayments = 'active' | 'inactive' | 'pending';
        type BankTransferPayments = 'active' | 'inactive' | 'pending';
        type BilliePayments = 'active' | 'inactive' | 'pending';
        type BlikPayments = 'active' | 'inactive' | 'pending';
        type BoletoPayments = 'active' | 'inactive' | 'pending';
        type CardIssuing = 'active' | 'inactive' | 'pending';
        type CardPayments = 'active' | 'inactive' | 'pending';
        type CartesBancairesPayments = 'active' | 'inactive' | 'pending';
        type CashappPayments = 'active' | 'inactive' | 'pending';
        type CryptoPayments = 'active' | 'inactive' | 'pending';
        type EpsPayments = 'active' | 'inactive' | 'pending';
        type FpxPayments = 'active' | 'inactive' | 'pending';
        type GbBankTransferPayments = 'active' | 'inactive' | 'pending';
        type GiropayPayments = 'active' | 'inactive' | 'pending';
        type GrabpayPayments = 'active' | 'inactive' | 'pending';
        type IdealPayments = 'active' | 'inactive' | 'pending';
        type IndiaInternationalPayments = 'active' | 'inactive' | 'pending';
        type JcbPayments = 'active' | 'inactive' | 'pending';
        type JpBankTransferPayments = 'active' | 'inactive' | 'pending';
        type KakaoPayPayments = 'active' | 'inactive' | 'pending';
        type KlarnaPayments = 'active' | 'inactive' | 'pending';
        type KonbiniPayments = 'active' | 'inactive' | 'pending';
        type KrCardPayments = 'active' | 'inactive' | 'pending';
        type LegacyPayments = 'active' | 'inactive' | 'pending';
        type LinkPayments = 'active' | 'inactive' | 'pending';
        type MbWayPayments = 'active' | 'inactive' | 'pending';
        type MobilepayPayments = 'active' | 'inactive' | 'pending';
        type MultibancoPayments = 'active' | 'inactive' | 'pending';
        type MxBankTransferPayments = 'active' | 'inactive' | 'pending';
        type NaverPayPayments = 'active' | 'inactive' | 'pending';
        type NzBankAccountBecsDebitPayments = 'active' | 'inactive' | 'pending';
        type OxxoPayments = 'active' | 'inactive' | 'pending';
        type P24Payments = 'active' | 'inactive' | 'pending';
        type PayByBankPayments = 'active' | 'inactive' | 'pending';
        type PaycoPayments = 'active' | 'inactive' | 'pending';
        type PaynowPayments = 'active' | 'inactive' | 'pending';
        type PaytoPayments = 'active' | 'inactive' | 'pending';
        type PixPayments = 'active' | 'inactive' | 'pending';
        type PromptpayPayments = 'active' | 'inactive' | 'pending';
        type RevolutPayPayments = 'active' | 'inactive' | 'pending';
        type SamsungPayPayments = 'active' | 'inactive' | 'pending';
        type SatispayPayments = 'active' | 'inactive' | 'pending';
        type SepaBankTransferPayments = 'active' | 'inactive' | 'pending';
        type SepaDebitPayments = 'active' | 'inactive' | 'pending';
        type SofortPayments = 'active' | 'inactive' | 'pending';
        type SwishPayments = 'active' | 'inactive' | 'pending';
        type TaxReportingUs1099K = 'active' | 'inactive' | 'pending';
        type TaxReportingUs1099Misc = 'active' | 'inactive' | 'pending';
        type Transfers = 'active' | 'inactive' | 'pending';
        type Treasury = 'active' | 'inactive' | 'pending';
        type TwintPayments = 'active' | 'inactive' | 'pending';
        type UsBankAccountAchPayments = 'active' | 'inactive' | 'pending';
        type UsBankTransferPayments = 'active' | 'inactive' | 'pending';
        type ZipPayments = 'active' | 'inactive' | 'pending';
    }
    namespace Company {
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
        interface DirectorshipDeclaration {
            /**
             * The Unix timestamp marking when the directorship declaration attestation was made.
             */
            date: number | null;
            /**
             * The IP address from which the directorship declaration attestation was made.
             */
            ip: string | null;
            /**
             * The user-agent string from the browser where the directorship declaration attestation was made.
             */
            user_agent: string | null;
        }
        interface OwnershipDeclaration {
            /**
             * The Unix timestamp marking when the beneficial owner attestation was made.
             */
            date: number | null;
            /**
             * The IP address from which the beneficial owner attestation was made.
             */
            ip: string | null;
            /**
             * The user-agent string from the browser where the beneficial owner attestation was made.
             */
            user_agent: string | null;
        }
        type OwnershipExemptionReason = 'qualified_entity_exceeds_ownership_threshold' | 'qualifies_as_financial_institution';
        interface RegistrationDate {
            /**
             * The day of registration, between 1 and 31.
             */
            day: number | null;
            /**
             * The month of registration, between 1 and 12.
             */
            month: number | null;
            /**
             * The four-digit year of registration.
             */
            year: number | null;
        }
        interface RepresentativeDeclaration {
            /**
             * The Unix timestamp marking when the representative declaration attestation was made.
             */
            date: number | null;
            /**
             * The IP address from which the representative declaration attestation was made.
             */
            ip: string | null;
            /**
             * The user-agent string from the browser where the representative declaration attestation was made.
             */
            user_agent: string | null;
        }
        type Structure = 'free_zone_establishment' | 'free_zone_llc' | 'government_instrumentality' | 'governmental_unit' | 'incorporated_non_profit' | 'incorporated_partnership' | 'limited_liability_partnership' | 'llc' | 'multi_member_llc' | 'private_company' | 'private_corporation' | 'private_partnership' | 'public_company' | 'public_corporation' | 'public_partnership' | 'registered_charity' | 'single_member_llc' | 'sole_establishment' | 'sole_proprietorship' | 'tax_exempt_government_instrumentality' | 'unincorporated_association' | 'unincorporated_non_profit' | 'unincorporated_partnership';
        interface Verification {
            document: Verification.Document;
        }
        namespace Verification {
            interface Document {
                /**
                 * The back of a document returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `additional_verification`. Note that `additional_verification` files are [not downloadable](https://docs.stripe.com/file-upload#uploading-a-file).
                 */
                back: string | File | null;
                /**
                 * A user-displayable string describing the verification state of this document.
                 */
                details: string | null;
                /**
                 * One of `document_corrupt`, `document_expired`, `document_failed_copy`, `document_failed_greyscale`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_not_readable`, `document_not_uploaded`, `document_type_not_supported`, or `document_too_large`. A machine-readable code specifying the verification state for this document.
                 */
                details_code: string | null;
                /**
                 * The front of a document returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `additional_verification`. Note that `additional_verification` files are [not downloadable](https://docs.stripe.com/file-upload#uploading-a-file).
                 */
                front: string | File | null;
            }
        }
    }
    namespace Controller {
        interface Fees {
            /**
             * A value indicating the responsible payer of a bundle of Stripe fees for pricing-control eligible products on this account. Learn more about [fee behavior on connected accounts](https://docs.stripe.com/connect/direct-charges-fee-payer-behavior).
             */
            payer: Fees.Payer;
        }
        interface Losses {
            /**
             * A value indicating who is liable when this account can't pay back negative balances from payments.
             */
            payments: Losses.Payments;
        }
        type RequirementCollection = 'application' | 'stripe';
        interface StripeDashboard {
            /**
             * A value indicating the Stripe dashboard this account has access to independent of the Connect application.
             */
            type: StripeDashboard.Type;
        }
        type Type = 'account' | 'application';
        namespace Fees {
            type Payer = 'account' | 'application' | 'application_custom' | 'application_express';
        }
        namespace Losses {
            type Payments = 'application' | 'stripe';
        }
        namespace StripeDashboard {
            type Type = 'express' | 'full' | 'none';
        }
    }
    namespace FutureRequirements {
        interface Alternative {
            /**
             * Fields that can be provided to resolve all fields in `original_fields_due`.
             */
            alternative_fields_due: Array<string>;
            /**
             * Fields that are due and can be resolved by providing all fields in `alternative_fields_due`.
             */
            original_fields_due: Array<string>;
        }
        type DisabledReason = 'action_required.requested_capabilities' | 'listed' | 'other' | 'platform_paused' | 'rejected.fraud' | 'rejected.incomplete_verification' | 'rejected.listed' | 'rejected.other' | 'rejected.platform_fraud' | 'rejected.platform_other' | 'rejected.platform_terms_of_service' | 'rejected.terms_of_service' | 'requirements.past_due' | 'requirements.pending_verification' | 'under_review';
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
            type Code = 'external_request' | 'information_missing' | 'invalid_address_city_state_postal_code' | 'invalid_address_highway_contract_box' | 'invalid_address_private_mailbox' | 'invalid_business_profile_name' | 'invalid_business_profile_name_denylisted' | 'invalid_company_name_denylisted' | 'invalid_dob_age_over_maximum' | 'invalid_dob_age_under_18' | 'invalid_dob_age_under_minimum' | 'invalid_product_description_length' | 'invalid_product_description_url_match' | 'invalid_representative_country' | 'invalid_signator' | 'invalid_statement_descriptor_business_mismatch' | 'invalid_statement_descriptor_denylisted' | 'invalid_statement_descriptor_length' | 'invalid_statement_descriptor_prefix_denylisted' | 'invalid_statement_descriptor_prefix_mismatch' | 'invalid_street_address' | 'invalid_tax_id' | 'invalid_tax_id_format' | 'invalid_tos_acceptance' | 'invalid_url_denylisted' | 'invalid_url_format' | 'invalid_url_length' | 'invalid_url_web_presence_detected' | 'invalid_url_website_business_information_mismatch' | 'invalid_url_website_empty' | 'invalid_url_website_inaccessible' | 'invalid_url_website_inaccessible_geoblocked' | 'invalid_url_website_inaccessible_password_protected' | 'invalid_url_website_incomplete' | 'invalid_url_website_incomplete_cancellation_policy' | 'invalid_url_website_incomplete_customer_service_details' | 'invalid_url_website_incomplete_legal_restrictions' | 'invalid_url_website_incomplete_refund_policy' | 'invalid_url_website_incomplete_return_policy' | 'invalid_url_website_incomplete_terms_and_conditions' | 'invalid_url_website_incomplete_under_construction' | 'invalid_url_website_other' | 'invalid_value_other' | 'unsupported_business_type' | 'verification_directors_mismatch' | 'verification_document_address_mismatch' | 'verification_document_address_missing' | 'verification_document_corrupt' | 'verification_document_country_not_supported' | 'verification_document_directors_mismatch' | 'verification_document_dob_mismatch' | 'verification_document_duplicate_type' | 'verification_document_expired' | 'verification_document_failed_copy' | 'verification_document_failed_greyscale' | 'verification_document_failed_other' | 'verification_document_failed_test_mode' | 'verification_document_fraudulent' | 'verification_document_id_number_mismatch' | 'verification_document_id_number_missing' | 'verification_document_incomplete' | 'verification_document_invalid' | 'verification_document_issue_or_expiry_date_missing' | 'verification_document_manipulated' | 'verification_document_missing_back' | 'verification_document_missing_front' | 'verification_document_name_mismatch' | 'verification_document_name_missing' | 'verification_document_nationality_mismatch' | 'verification_document_not_readable' | 'verification_document_not_signed' | 'verification_document_not_uploaded' | 'verification_document_photo_mismatch' | 'verification_document_too_large' | 'verification_document_type_not_supported' | 'verification_extraneous_directors' | 'verification_failed_address_match' | 'verification_failed_authorizer_authority' | 'verification_failed_business_iec_number' | 'verification_failed_document_match' | 'verification_failed_id_number_match' | 'verification_failed_keyed_identity' | 'verification_failed_keyed_match' | 'verification_failed_name_match' | 'verification_failed_other' | 'verification_failed_representative_authority' | 'verification_failed_residential_address' | 'verification_failed_tax_id_match' | 'verification_failed_tax_id_not_issued' | 'verification_legal_entity_structure_mismatch' | 'verification_missing_directors' | 'verification_missing_executives' | 'verification_missing_owners' | 'verification_rejected_ownership_exemption_reason' | 'verification_requires_additional_memorandum_of_associations' | 'verification_requires_additional_proof_of_registration' | 'verification_supportability';
        }
    }
    namespace Requirements {
        interface Alternative {
            /**
             * Fields that can be provided to resolve all fields in `original_fields_due`.
             */
            alternative_fields_due: Array<string>;
            /**
             * Fields that are due and can be resolved by providing all fields in `alternative_fields_due`.
             */
            original_fields_due: Array<string>;
        }
        type DisabledReason = 'action_required.requested_capabilities' | 'listed' | 'other' | 'platform_paused' | 'rejected.fraud' | 'rejected.incomplete_verification' | 'rejected.listed' | 'rejected.other' | 'rejected.platform_fraud' | 'rejected.platform_other' | 'rejected.platform_terms_of_service' | 'rejected.terms_of_service' | 'requirements.past_due' | 'requirements.pending_verification' | 'under_review';
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
            type Code = 'external_request' | 'information_missing' | 'invalid_address_city_state_postal_code' | 'invalid_address_highway_contract_box' | 'invalid_address_private_mailbox' | 'invalid_business_profile_name' | 'invalid_business_profile_name_denylisted' | 'invalid_company_name_denylisted' | 'invalid_dob_age_over_maximum' | 'invalid_dob_age_under_18' | 'invalid_dob_age_under_minimum' | 'invalid_product_description_length' | 'invalid_product_description_url_match' | 'invalid_representative_country' | 'invalid_signator' | 'invalid_statement_descriptor_business_mismatch' | 'invalid_statement_descriptor_denylisted' | 'invalid_statement_descriptor_length' | 'invalid_statement_descriptor_prefix_denylisted' | 'invalid_statement_descriptor_prefix_mismatch' | 'invalid_street_address' | 'invalid_tax_id' | 'invalid_tax_id_format' | 'invalid_tos_acceptance' | 'invalid_url_denylisted' | 'invalid_url_format' | 'invalid_url_length' | 'invalid_url_web_presence_detected' | 'invalid_url_website_business_information_mismatch' | 'invalid_url_website_empty' | 'invalid_url_website_inaccessible' | 'invalid_url_website_inaccessible_geoblocked' | 'invalid_url_website_inaccessible_password_protected' | 'invalid_url_website_incomplete' | 'invalid_url_website_incomplete_cancellation_policy' | 'invalid_url_website_incomplete_customer_service_details' | 'invalid_url_website_incomplete_legal_restrictions' | 'invalid_url_website_incomplete_refund_policy' | 'invalid_url_website_incomplete_return_policy' | 'invalid_url_website_incomplete_terms_and_conditions' | 'invalid_url_website_incomplete_under_construction' | 'invalid_url_website_other' | 'invalid_value_other' | 'unsupported_business_type' | 'verification_directors_mismatch' | 'verification_document_address_mismatch' | 'verification_document_address_missing' | 'verification_document_corrupt' | 'verification_document_country_not_supported' | 'verification_document_directors_mismatch' | 'verification_document_dob_mismatch' | 'verification_document_duplicate_type' | 'verification_document_expired' | 'verification_document_failed_copy' | 'verification_document_failed_greyscale' | 'verification_document_failed_other' | 'verification_document_failed_test_mode' | 'verification_document_fraudulent' | 'verification_document_id_number_mismatch' | 'verification_document_id_number_missing' | 'verification_document_incomplete' | 'verification_document_invalid' | 'verification_document_issue_or_expiry_date_missing' | 'verification_document_manipulated' | 'verification_document_missing_back' | 'verification_document_missing_front' | 'verification_document_name_mismatch' | 'verification_document_name_missing' | 'verification_document_nationality_mismatch' | 'verification_document_not_readable' | 'verification_document_not_signed' | 'verification_document_not_uploaded' | 'verification_document_photo_mismatch' | 'verification_document_too_large' | 'verification_document_type_not_supported' | 'verification_extraneous_directors' | 'verification_failed_address_match' | 'verification_failed_authorizer_authority' | 'verification_failed_business_iec_number' | 'verification_failed_document_match' | 'verification_failed_id_number_match' | 'verification_failed_keyed_identity' | 'verification_failed_keyed_match' | 'verification_failed_name_match' | 'verification_failed_other' | 'verification_failed_representative_authority' | 'verification_failed_residential_address' | 'verification_failed_tax_id_match' | 'verification_failed_tax_id_not_issued' | 'verification_legal_entity_structure_mismatch' | 'verification_missing_directors' | 'verification_missing_executives' | 'verification_missing_owners' | 'verification_rejected_ownership_exemption_reason' | 'verification_requires_additional_memorandum_of_associations' | 'verification_requires_additional_proof_of_registration' | 'verification_supportability';
        }
    }
    namespace Settings {
        interface BacsDebitPayments {
            /**
             * The Bacs Direct Debit display name for this account. For payments made with Bacs Direct Debit, this name appears on the mandate as the statement descriptor. Mobile banking apps display it as the name of the business. To use custom branding, set the Bacs Direct Debit Display Name during or right after creation. Custom branding incurs an additional monthly fee for the platform. The fee appears 5 business days after requesting Bacs. If you don't set the display name before requesting Bacs capability, it's automatically set as "Stripe" and the account is onboarded to Stripe branding, which is free.
             */
            display_name: string | null;
            /**
             * The Bacs Direct Debit Service user number for this account. For payments made with Bacs Direct Debit, this number is a unique identifier of the account with our banking partners.
             */
            service_user_number: string | null;
        }
        interface Branding {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) An icon for the account. Must be square and at least 128px x 128px.
             */
            icon: string | File | null;
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for the account that will be used in Checkout instead of the icon and without the account's name next to it if provided. Must be at least 128px x 128px.
             */
            logo: string | File | null;
            /**
             * A CSS hex color value representing the primary branding color for this account
             */
            primary_color: string | null;
            /**
             * A CSS hex color value representing the secondary branding color for this account
             */
            secondary_color: string | null;
        }
        interface CardIssuing {
            tos_acceptance?: CardIssuing.TosAcceptance;
        }
        interface CardPayments {
            decline_on?: CardPayments.DeclineOn;
            /**
             * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge. `statement_descriptor_prefix` is useful for maximizing descriptor space for the dynamic portion.
             */
            statement_descriptor_prefix: string | null;
            /**
             * The Kana variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kana` specified on the charge. `statement_descriptor_prefix_kana` is useful for maximizing descriptor space for the dynamic portion.
             */
            statement_descriptor_prefix_kana: string | null;
            /**
             * The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kanji` specified on the charge. `statement_descriptor_prefix_kanji` is useful for maximizing descriptor space for the dynamic portion.
             */
            statement_descriptor_prefix_kanji: string | null;
        }
        interface Dashboard {
            /**
             * The display name for this account. This is used on the Stripe Dashboard to differentiate between accounts.
             */
            display_name: string | null;
            /**
             * The timezone used in the Stripe Dashboard for this account. A list of possible time zone values is maintained at the [IANA Time Zone Database](http://www.iana.org/time-zones).
             */
            timezone: string | null;
        }
        interface Invoices {
            /**
             * The list of default Account Tax IDs to automatically include on invoices. Account Tax IDs get added when an invoice is finalized.
             */
            default_account_tax_ids: Array<string | TaxId> | null;
            /**
             * Whether to save the payment method after a payment is completed for a one-time invoice or a subscription invoice when the customer already has a default payment method on the hosted invoice page.
             */
            hosted_payment_method_save: Invoices.HostedPaymentMethodSave | null;
        }
        interface Payments {
            /**
             * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge.
             */
            statement_descriptor: string | null;
            /**
             * The Kana variation of `statement_descriptor` used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
             */
            statement_descriptor_kana: string | null;
            /**
             * The Kanji variation of `statement_descriptor` used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
             */
            statement_descriptor_kanji: string | null;
            /**
             * The Kana variation of `statement_descriptor_prefix` used for card charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
             */
            statement_descriptor_prefix_kana: string | null;
            /**
             * The Kanji variation of `statement_descriptor_prefix` used for card charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
             */
            statement_descriptor_prefix_kanji: string | null;
        }
        interface Payouts {
            /**
             * A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. See [Understanding Connect account balances](https://docs.stripe.com/connect/account-balances) for details. The default value is `false` when [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts, otherwise `true`.
             */
            debit_negative_balances: boolean;
            schedule: Payouts.Schedule;
            /**
             * The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
             */
            statement_descriptor: string | null;
        }
        interface SepaDebitPayments {
            /**
             * SEPA creditor identifier that identifies the company making the payment.
             */
            creditor_id?: string;
        }
        interface Treasury {
            tos_acceptance?: Treasury.TosAcceptance;
        }
        namespace CardIssuing {
            interface TosAcceptance {
                /**
                 * The Unix timestamp marking when the account representative accepted the service agreement.
                 */
                date: number | null;
                /**
                 * The IP address from which the account representative accepted the service agreement.
                 */
                ip: string | null;
                /**
                 * The user agent of the browser from which the account representative accepted the service agreement.
                 */
                user_agent?: string;
            }
        }
        namespace CardPayments {
            interface DeclineOn {
                /**
                 * Whether Stripe automatically declines charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and they fail bank verification.
                 */
                avs_failure: boolean;
                /**
                 * Whether Stripe automatically declines charges with an incorrect CVC. This setting only applies when a CVC is provided and it fails bank verification.
                 */
                cvc_failure: boolean;
            }
        }
        namespace Invoices {
            type HostedPaymentMethodSave = 'always' | 'never' | 'offer';
        }
        namespace Payouts {
            interface Schedule {
                /**
                 * The number of days charges for the account will be held before being paid out.
                 */
                delay_days: number;
                /**
                 * How frequently funds will be paid out. One of `manual` (payouts only created via API call), `daily`, `weekly`, or `monthly`.
                 */
                interval: string;
                /**
                 * The day of the month funds will be paid out. Only shown if `interval` is monthly. Payouts scheduled between the 29th and 31st of the month are sent on the last day of shorter months.
                 */
                monthly_anchor?: number;
                /**
                 * The days of the month funds will be paid out. Only shown if `interval` is monthly. Payouts scheduled between the 29th and 31st of the month are sent on the last day of shorter months.
                 */
                monthly_payout_days?: Array<number>;
                /**
                 * The day of the week funds will be paid out, of the style 'monday', 'tuesday', etc. Only shown if `interval` is weekly.
                 */
                weekly_anchor?: string;
                /**
                 * The days of the week when available funds are paid out, specified as an array, for example, [`monday`, `tuesday`]. Only shown if `interval` is weekly.
                 */
                weekly_payout_days?: Array<Schedule.WeeklyPayoutDay>;
            }
            namespace Schedule {
                type WeeklyPayoutDay = 'friday' | 'monday' | 'thursday' | 'tuesday' | 'wednesday';
            }
        }
        namespace Treasury {
            interface TosAcceptance {
                /**
                 * The Unix timestamp marking when the account representative accepted the service agreement.
                 */
                date: number | null;
                /**
                 * The IP address from which the account representative accepted the service agreement.
                 */
                ip: string | null;
                /**
                 * The user agent of the browser from which the account representative accepted the service agreement.
                 */
                user_agent?: string;
            }
        }
    }
}
export interface AccountCreateParams {
    /**
     * An [account token](https://api.stripe.com#create_account_token), used to securely provide details to the account.
     */
    account_token?: string;
    /**
     * Business information about the account.
     */
    business_profile?: AccountCreateParams.BusinessProfile;
    /**
     * The business type. Once you create an [Account Link](https://docs.stripe.com/api/account_links) or [Account Session](https://docs.stripe.com/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
     */
    business_type?: AccountCreateParams.BusinessType;
    /**
     * Each key of the dictionary represents a capability, and each capability
     * maps to its settings (for example, whether it has been requested or not). Each
     * capability is inactive until you have provided its specific
     * requirements and Stripe has verified them. An account might have some
     * of its requested capabilities be active and some be inactive.
     *
     * Required when [account.controller.stripe_dashboard.type](https://docs.stripe.com/api/accounts/create#create_account-controller-dashboard-type)
     * is `none`, which includes Custom accounts.
     */
    capabilities?: AccountCreateParams.Capabilities;
    /**
     * Information about the company or business. This field is available for any `business_type`. Once you create an [Account Link](https://docs.stripe.com/api/account_links) or [Account Session](https://docs.stripe.com/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
     */
    company?: AccountCreateParams.Company;
    /**
     * A hash of configuration describing the account controller's attributes.
     */
    controller?: AccountCreateParams.Controller;
    /**
     * The country in which the account holder resides, or in which the business is legally established. This should be an ISO 3166-1 alpha-2 country code. For example, if you are in the United States and the business for which you're creating an account is legally represented in Canada, you would use `CA` as the country for the account being created. Available countries include [Stripe's global markets](https://stripe.com/global) as well as countries where [cross-border payouts](https://stripe.com/docs/connect/cross-border-payouts) are supported.
     */
    country?: string;
    /**
     * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://docs.stripe.com/payouts).
     */
    default_currency?: string;
    /**
     * Documents that may be submitted to satisfy various informational requests.
     */
    documents?: AccountCreateParams.Documents;
    /**
     * The email address of the account holder. This is only to make the account easier to identify to you. If [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts, Stripe doesn't email the account without your consent.
     */
    email?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * A card or bank account to attach to the account for receiving [payouts](https://docs.stripe.com/connect/bank-debit-card-payouts) (you won't be able to use it for top-ups). You can provide either a token, like the ones returned by [Stripe.js](https://docs.stripe.com/js), or a dictionary, as documented in the `external_account` parameter for [bank account](https://docs.stripe.com/api#account_create_bank_account) creation.
     *
     * By default, providing an external account sets it as the new default external account for its currency, and deletes the old default if one exists. To add additional external accounts without replacing the existing default for the currency, use the [bank account](https://docs.stripe.com/api#account_create_bank_account) or [card creation](https://docs.stripe.com/api#account_create_card) APIs. After you create an [Account Link](https://docs.stripe.com/api/account_links) or [Account Session](https://docs.stripe.com/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
     */
    external_account?: string | AccountCreateParams.ExternalAccount;
    /**
     * A hash of account group type to tokens. These are account groups this account should be added to.
     */
    groups?: AccountCreateParams.Groups;
    /**
     * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`. Once you create an [Account Link](https://docs.stripe.com/api/account_links) or [Account Session](https://docs.stripe.com/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
     */
    individual?: AccountCreateParams.Individual;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
    /**
     * Options for customizing how the account functions within Stripe.
     */
    settings?: AccountCreateParams.Settings;
    /**
     * Details on the account's acceptance of the [Stripe Services Agreement](https://docs.stripe.com/connect/updating-accounts#tos-acceptance). This property can only be updated for accounts where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. This property defaults to a `full` service agreement when empty.
     */
    tos_acceptance?: AccountCreateParams.TosAcceptance;
    /**
     * The type of Stripe account to create. May be one of `custom`, `express` or `standard`.
     */
    type?: AccountCreateParams.Type;
}
export declare namespace AccountCreateParams {
    interface BusinessProfile {
        /**
         * The applicant's gross annual revenue for its preceding fiscal year.
         */
        annual_revenue?: BusinessProfile.AnnualRevenue;
        /**
         * An estimated upper bound of employees, contractors, vendors, etc. currently working for the business.
         */
        estimated_worker_count?: number;
        /**
         * [The merchant category code for the account](https://docs.stripe.com/connect/setting-mcc). MCCs are used to classify businesses based on the goods or services they provide.
         */
        mcc?: string;
        /**
         * Whether the business is a minority-owned, women-owned, and/or LGBTQI+ -owned business.
         */
        minority_owned_business_designation?: Array<BusinessProfile.MinorityOwnedBusinessDesignation>;
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
        support_address?: AddressParam;
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
        support_url?: Emptyable<string>;
        /**
         * The business's publicly available website.
         */
        url?: string;
    }
    type BusinessType = 'company' | 'government_entity' | 'individual' | 'non_profit';
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
         * The alma_payments capability.
         */
        alma_payments?: Capabilities.AlmaPayments;
        /**
         * The amazon_pay_payments capability.
         */
        amazon_pay_payments?: Capabilities.AmazonPayPayments;
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
         * The billie_payments capability.
         */
        billie_payments?: Capabilities.BilliePayments;
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
         * The crypto_payments capability.
         */
        crypto_payments?: Capabilities.CryptoPayments;
        /**
         * The eps_payments capability.
         */
        eps_payments?: Capabilities.EpsPayments;
        /**
         * The fpx_payments capability.
         */
        fpx_payments?: Capabilities.FpxPayments;
        /**
         * The gb_bank_transfer_payments capability.
         */
        gb_bank_transfer_payments?: Capabilities.GbBankTransferPayments;
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
         * The jp_bank_transfer_payments capability.
         */
        jp_bank_transfer_payments?: Capabilities.JpBankTransferPayments;
        /**
         * The kakao_pay_payments capability.
         */
        kakao_pay_payments?: Capabilities.KakaoPayPayments;
        /**
         * The klarna_payments capability.
         */
        klarna_payments?: Capabilities.KlarnaPayments;
        /**
         * The konbini_payments capability.
         */
        konbini_payments?: Capabilities.KonbiniPayments;
        /**
         * The kr_card_payments capability.
         */
        kr_card_payments?: Capabilities.KrCardPayments;
        /**
         * The legacy_payments capability.
         */
        legacy_payments?: Capabilities.LegacyPayments;
        /**
         * The link_payments capability.
         */
        link_payments?: Capabilities.LinkPayments;
        /**
         * The mb_way_payments capability.
         */
        mb_way_payments?: Capabilities.MbWayPayments;
        /**
         * The mobilepay_payments capability.
         */
        mobilepay_payments?: Capabilities.MobilepayPayments;
        /**
         * The multibanco_payments capability.
         */
        multibanco_payments?: Capabilities.MultibancoPayments;
        /**
         * The mx_bank_transfer_payments capability.
         */
        mx_bank_transfer_payments?: Capabilities.MxBankTransferPayments;
        /**
         * The naver_pay_payments capability.
         */
        naver_pay_payments?: Capabilities.NaverPayPayments;
        /**
         * The nz_bank_account_becs_debit_payments capability.
         */
        nz_bank_account_becs_debit_payments?: Capabilities.NzBankAccountBecsDebitPayments;
        /**
         * The oxxo_payments capability.
         */
        oxxo_payments?: Capabilities.OxxoPayments;
        /**
         * The p24_payments capability.
         */
        p24_payments?: Capabilities.P24Payments;
        /**
         * The pay_by_bank_payments capability.
         */
        pay_by_bank_payments?: Capabilities.PayByBankPayments;
        /**
         * The payco_payments capability.
         */
        payco_payments?: Capabilities.PaycoPayments;
        /**
         * The paynow_payments capability.
         */
        paynow_payments?: Capabilities.PaynowPayments;
        /**
         * The payto_payments capability.
         */
        payto_payments?: Capabilities.PaytoPayments;
        /**
         * The pix_payments capability.
         */
        pix_payments?: Capabilities.PixPayments;
        /**
         * The promptpay_payments capability.
         */
        promptpay_payments?: Capabilities.PromptpayPayments;
        /**
         * The revolut_pay_payments capability.
         */
        revolut_pay_payments?: Capabilities.RevolutPayPayments;
        /**
         * The samsung_pay_payments capability.
         */
        samsung_pay_payments?: Capabilities.SamsungPayPayments;
        /**
         * The satispay_payments capability.
         */
        satispay_payments?: Capabilities.SatispayPayments;
        /**
         * The sepa_bank_transfer_payments capability.
         */
        sepa_bank_transfer_payments?: Capabilities.SepaBankTransferPayments;
        /**
         * The sepa_debit_payments capability.
         */
        sepa_debit_payments?: Capabilities.SepaDebitPayments;
        /**
         * The sofort_payments capability.
         */
        sofort_payments?: Capabilities.SofortPayments;
        /**
         * The swish_payments capability.
         */
        swish_payments?: Capabilities.SwishPayments;
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
         * The twint_payments capability.
         */
        twint_payments?: Capabilities.TwintPayments;
        /**
         * The us_bank_account_ach_payments capability.
         */
        us_bank_account_ach_payments?: Capabilities.UsBankAccountAchPayments;
        /**
         * The us_bank_transfer_payments capability.
         */
        us_bank_transfer_payments?: Capabilities.UsBankTransferPayments;
        /**
         * The zip_payments capability.
         */
        zip_payments?: Capabilities.ZipPayments;
    }
    interface Company {
        /**
         * The company's primary address.
         */
        address?: AddressParam;
        /**
         * The Kana variation of the company's primary address (Japan only).
         */
        address_kana?: JapanAddressParam;
        /**
         * The Kanji variation of the company's primary address (Japan only).
         */
        address_kanji?: JapanAddressParam;
        /**
         * Whether the company's directors have been provided. Set this Boolean to `true` after creating all the company's directors with [the Persons API](https://docs.stripe.com/api/persons) for accounts with a `relationship.director` requirement. This value is not automatically set to `true` after creating directors, so it needs to be updated to indicate all directors have been provided.
         */
        directors_provided?: boolean;
        /**
         * This hash is used to attest that the directors information provided to Stripe is both current and correct.
         */
        directorship_declaration?: Company.DirectorshipDeclaration;
        /**
         * Whether the company's executives have been provided. Set this Boolean to `true` after creating all the company's executives with [the Persons API](https://docs.stripe.com/api/persons) for accounts with a `relationship.executive` requirement.
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
         * Whether the company's owners have been provided. Set this Boolean to `true` after creating all the company's owners with [the Persons API](https://docs.stripe.com/api/persons) for accounts with a `relationship.owner` requirement.
         */
        owners_provided?: boolean;
        /**
         * This hash is used to attest that the beneficial owner information provided to Stripe is both current and correct.
         */
        ownership_declaration?: Company.OwnershipDeclaration;
        /**
         * This value is used to determine if a business is exempt from providing ultimate beneficial owners. See [this support article](https://support.stripe.com/questions/exemption-from-providing-ownership-details) and [changelog](https://docs.stripe.com/changelog/acacia/2025-01-27/ownership-exemption-reason-accounts-api) for more details.
         */
        ownership_exemption_reason?: Emptyable<Company.OwnershipExemptionReason>;
        /**
         * The company's phone number (used for verification).
         */
        phone?: string;
        /**
         * When the business was incorporated or registered.
         */
        registration_date?: Emptyable<Company.RegistrationDate>;
        /**
         * The identification number given to a company when it is registered or incorporated, if distinct from the identification number used for filing taxes. (Examples are the CIN for companies and LLP IN for partnerships in India, and the Company Registration Number in Hong Kong).
         */
        registration_number?: string;
        /**
         * This hash is used to attest that the representative is authorized to act as the representative of their legal entity.
         */
        representative_declaration?: Company.RepresentativeDeclaration;
        /**
         * The category identifying the legal structure of the company or legal entity. See [Business structure](https://docs.stripe.com/connect/identity-verification#business-structure) for more details. Pass an empty string to unset this value.
         */
        structure?: Emptyable<Company.Structure>;
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
    interface Controller {
        /**
         * A hash of configuration for who pays Stripe fees for product usage on this account.
         */
        fees?: Controller.Fees;
        /**
         * A hash of configuration for products that have negative balance liability, and whether Stripe or a Connect application is responsible for them.
         */
        losses?: Controller.Losses;
        /**
         * A value indicating responsibility for collecting updated information when requirements on the account are due or change. Defaults to `stripe`.
         */
        requirement_collection?: Controller.RequirementCollection;
        /**
         * A hash of configuration for Stripe-hosted dashboards.
         */
        stripe_dashboard?: Controller.StripeDashboard;
    }
    interface Documents {
        /**
         * One or more documents that support the [Bank account ownership verification](https://support.stripe.com/questions/bank-account-ownership-verification) requirement. Must be a document associated with the account's primary active bank account that displays the last 4 digits of the account number, either a statement or a check.
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
    interface Groups {
        /**
         * The group the account is in to determine their payments pricing, and null if the account is on customized pricing. [See the Platform pricing tool documentation](https://docs.stripe.com/connect/platform-pricing-tools) for details.
         */
        payments_pricing?: Emptyable<string>;
    }
    interface Individual {
        /**
         * The individual's primary address.
         */
        address?: AddressParam;
        /**
         * The Kana variation of the individual's primary address (Japan only).
         */
        address_kana?: JapanAddressParam;
        /**
         * The Kanji variation of the individual's primary address (Japan only).
         */
        address_kanji?: JapanAddressParam;
        /**
         * The individual's date of birth.
         */
        dob?: Emptyable<Individual.Dob>;
        /**
         * The individual's email address.
         */
        email?: string;
        /**
         * The individual's first name.
         */
        first_name?: string;
        /**
         * The Kana variation of the individual's first name (Japan only).
         */
        first_name_kana?: string;
        /**
         * The Kanji variation of the individual's first name (Japan only).
         */
        first_name_kanji?: string;
        /**
         * A list of alternate names or aliases that the individual is known by.
         */
        full_name_aliases?: Emptyable<Array<string>>;
        /**
         * The individual's gender
         */
        gender?: string;
        /**
         * The government-issued ID number of the individual, as appropriate for the representative's country. (Examples are a Social Security Number in the U.S., or a Social Insurance Number in Canada). Instead of the number itself, you can also provide a [PII token created with Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
         */
        id_number?: string;
        /**
         * The government-issued secondary ID number of the individual, as appropriate for the representative's country, will be used for enhanced verification checks. In Thailand, this would be the laser code found on the back of an ID card. Instead of the number itself, you can also provide a [PII token created with Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
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
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Emptyable<MetadataParam>;
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
        registered_address?: AddressParam;
        /**
         * Describes the person's relationship to the account.
         */
        relationship?: Individual.Relationship;
        /**
         * The last four digits of the individual's Social Security Number (U.S. only).
         */
        ssn_last_4?: string;
        /**
         * The individual's verification document information.
         */
        verification?: Individual.Verification;
    }
    interface Settings {
        /**
         * Settings specific to Bacs Direct Debit.
         */
        bacs_debit_payments?: Settings.BacsDebitPayments;
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
         * Settings specific to the account's use of Invoices.
         */
        invoices?: Settings.Invoices;
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
    namespace BusinessProfile {
        interface AnnualRevenue {
            /**
             * A non-negative integer representing the amount in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
             */
            amount: number;
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;
            /**
             * The close-out date of the preceding fiscal year in ISO 8601 format. E.g. 2023-12-31 for the 31st of December, 2023.
             */
            fiscal_year_end: string;
        }
        type MinorityOwnedBusinessDesignation = 'lgbtqi_owned_business' | 'minority_owned_business' | 'none_of_these_apply' | 'prefer_not_to_answer' | 'women_owned_business';
        interface MonthlyEstimatedRevenue {
            /**
             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
             */
            amount: number;
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;
        }
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
        interface AlmaPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface AmazonPayPayments {
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
        interface BilliePayments {
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
        interface CryptoPayments {
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
        interface GbBankTransferPayments {
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
        interface JpBankTransferPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface KakaoPayPayments {
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
        interface KrCardPayments {
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
        interface MbWayPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface MobilepayPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface MultibancoPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface MxBankTransferPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface NaverPayPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface NzBankAccountBecsDebitPayments {
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
        interface PayByBankPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface PaycoPayments {
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
        interface PaytoPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface PixPayments {
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
        interface RevolutPayPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface SamsungPayPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface SatispayPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface SepaBankTransferPayments {
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
        interface SwishPayments {
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
        interface TwintPayments {
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
        interface UsBankTransferPayments {
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
    namespace Company {
        interface DirectorshipDeclaration {
            /**
             * The Unix timestamp marking when the directorship declaration attestation was made.
             */
            date?: number;
            /**
             * The IP address from which the directorship declaration attestation was made.
             */
            ip?: string;
            /**
             * The user agent of the browser from which the directorship declaration attestation was made.
             */
            user_agent?: string;
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
        type OwnershipExemptionReason = 'qualified_entity_exceeds_ownership_threshold' | 'qualifies_as_financial_institution';
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
        interface RepresentativeDeclaration {
            /**
             * The Unix timestamp marking when the representative declaration attestation was made.
             */
            date?: number;
            /**
             * The IP address from which the representative declaration attestation was made.
             */
            ip?: string;
            /**
             * The user agent of the browser from which the representative declaration attestation was made.
             */
            user_agent?: string;
        }
        type Structure = 'free_zone_establishment' | 'free_zone_llc' | 'government_instrumentality' | 'governmental_unit' | 'incorporated_non_profit' | 'incorporated_partnership' | 'limited_liability_partnership' | 'llc' | 'multi_member_llc' | 'private_company' | 'private_corporation' | 'private_partnership' | 'public_company' | 'public_corporation' | 'public_partnership' | 'registered_charity' | 'single_member_llc' | 'sole_establishment' | 'sole_proprietorship' | 'tax_exempt_government_instrumentality' | 'unincorporated_association' | 'unincorporated_non_profit' | 'unincorporated_partnership';
        interface Verification {
            /**
             * A document verifying the business.
             */
            document?: Verification.Document;
        }
        namespace Verification {
            interface Document {
                /**
                 * The back of a document returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `additional_verification`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                 */
                back?: string;
                /**
                 * The front of a document returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `additional_verification`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                 */
                front?: string;
            }
        }
    }
    namespace Controller {
        interface Fees {
            /**
             * A value indicating the responsible payer of Stripe fees on this account. Defaults to `account`. Learn more about [fee behavior on connected accounts](https://docs.stripe.com/connect/direct-charges-fee-payer-behavior).
             */
            payer?: Fees.Payer;
        }
        interface Losses {
            /**
             * A value indicating who is liable when this account can't pay back negative balances resulting from payments. Defaults to `stripe`.
             */
            payments?: Losses.Payments;
        }
        type RequirementCollection = 'application' | 'stripe';
        interface StripeDashboard {
            /**
             * Whether this account should have access to the full Stripe Dashboard (`full`), to the Express Dashboard (`express`), or to no Stripe-hosted dashboard (`none`). Defaults to `full`.
             */
            type?: StripeDashboard.Type;
        }
        namespace Fees {
            type Payer = 'account' | 'application';
        }
        namespace Losses {
            type Payments = 'application' | 'stripe';
        }
        namespace StripeDashboard {
            type Type = 'express' | 'full' | 'none';
        }
    }
    namespace Documents {
        interface BankAccountOwnershipVerification {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
        interface CompanyLicense {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
        interface CompanyMemorandumOfAssociation {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
        interface CompanyMinisterialDecree {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
        interface CompanyRegistrationVerification {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
        interface CompanyTaxIdVerification {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
        interface ProofOfAddress {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
        interface ProofOfRegistration {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
            /**
             * Information regarding the person signing the document if applicable.
             */
            signer?: ProofOfRegistration.Signer;
        }
        interface ProofOfUltimateBeneficialOwnership {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
            /**
             * Information regarding the person signing the document if applicable.
             */
            signer?: ProofOfUltimateBeneficialOwnership.Signer;
        }
        namespace ProofOfRegistration {
            interface Signer {
                /**
                 * The token of the person signing the document, if applicable.
                 */
                person?: string;
            }
        }
        namespace ProofOfUltimateBeneficialOwnership {
            interface Signer {
                /**
                 * The token of the person signing the document, if applicable.
                 */
                person?: string;
            }
        }
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
            percent_ownership?: Emptyable<number>;
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
                 * The back of an ID returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                 */
                back?: string;
                /**
                 * The front of an ID returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                 */
                front?: string;
            }
            interface Document {
                /**
                 * The back of an ID returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                 */
                back?: string;
                /**
                 * The front of an ID returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                 */
                front?: string;
            }
        }
    }
    namespace Settings {
        interface BacsDebitPayments {
            /**
             * The Bacs Direct Debit Display Name for this account. For payments made with Bacs Direct Debit, this name appears on the mandate as the statement descriptor. Mobile banking apps display it as the name of the business. To use custom branding, set the Bacs Direct Debit Display Name during or right after creation. Custom branding incurs an additional monthly fee for the platform. If you don't set the display name before requesting Bacs capability, it's automatically set as "Stripe" and the account is onboarded to Stripe branding, which is free.
             */
            display_name?: string;
        }
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
             * Details on the account's acceptance of the [Stripe Issuing Terms and Disclosures](https://docs.stripe.com/issuing/connect/tos_acceptance).
             */
            tos_acceptance?: CardIssuing.TosAcceptance;
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
            statement_descriptor_prefix_kana?: Emptyable<string>;
            /**
             * The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kanji` specified on the charge. `statement_descriptor_prefix_kanji` is useful for maximizing descriptor space for the dynamic portion.
             */
            statement_descriptor_prefix_kanji?: Emptyable<string>;
        }
        interface Invoices {
            /**
             * Whether to save the payment method after a payment is completed for a one-time invoice or a subscription invoice when the customer already has a default payment method on the hosted invoice page.
             */
            hosted_payment_method_save?: Invoices.HostedPaymentMethodSave;
        }
        interface Payments {
            /**
             * The default text that appears on statements for non-card charges outside of Japan. For card charges, if you don't set a `statement_descriptor_prefix`, this text is also used as the statement descriptor prefix. In that case, if concatenating the statement descriptor suffix causes the combined statement descriptor to exceed 22 characters, we truncate the `statement_descriptor` text to limit the full descriptor to 22 characters. For more information about statement descriptors and their requirements, see the [account settings documentation](https://docs.stripe.com/get-started/account/statement-descriptors).
             */
            statement_descriptor?: string;
            /**
             * The Kana variation of `statement_descriptor` used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
             */
            statement_descriptor_kana?: string;
            /**
             * The Kanji variation of `statement_descriptor` used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
             */
            statement_descriptor_kanji?: string;
        }
        interface Payouts {
            /**
             * A Boolean indicating whether Stripe should try to reclaim negative balances from an attached bank account. For details, see [Understanding Connect Account Balances](https://docs.stripe.com/connect/account-balances).
             */
            debit_negative_balances?: boolean;
            /**
             * Details on when funds from charges are available, and when they are paid out to an external account. For details, see our [Setting Bank and Debit Card Payouts](https://docs.stripe.com/connect/bank-transfers#payout-information) documentation.
             */
            schedule?: Payouts.Schedule;
            /**
             * The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
             */
            statement_descriptor?: string;
        }
        interface Treasury {
            /**
             * Details on the account's acceptance of the Stripe Treasury Services Agreement.
             */
            tos_acceptance?: Treasury.TosAcceptance;
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
                user_agent?: Emptyable<string>;
            }
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
        namespace Invoices {
            type HostedPaymentMethodSave = 'always' | 'never' | 'offer';
        }
        namespace Payouts {
            interface Schedule {
                /**
                 * The number of days charge funds are held before being paid out. May also be set to `minimum`, representing the lowest available value for the account country. Default is `minimum`. The `delay_days` parameter remains at the last configured value if `interval` is `manual`. [Learn more about controlling payout delay days](https://docs.stripe.com/connect/manage-payout-schedule).
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
                 * The days of the month when available funds are paid out, specified as an array of numbers between 1--31. Payouts nominally scheduled between the 29th and 31st of the month are instead sent on the last day of a shorter month. Required and applicable only if `interval` is `monthly` and `monthly_anchor` is not set.
                 */
                monthly_payout_days?: Array<number>;
                /**
                 * The day of the week when available funds are paid out, specified as `monday`, `tuesday`, etc. Required and applicable only if `interval` is `weekly`.
                 */
                weekly_anchor?: Schedule.WeeklyAnchor;
                /**
                 * The days of the week when available funds are paid out, specified as an array, e.g., [`monday`, `tuesday`]. Required and applicable only if `interval` is `weekly`.
                 */
                weekly_payout_days?: Array<Schedule.WeeklyPayoutDay>;
            }
            namespace Schedule {
                type Interval = 'daily' | 'manual' | 'monthly' | 'weekly';
                type WeeklyAnchor = 'friday' | 'monday' | 'saturday' | 'sunday' | 'thursday' | 'tuesday' | 'wednesday';
                type WeeklyPayoutDay = 'friday' | 'monday' | 'thursday' | 'tuesday' | 'wednesday';
            }
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
                user_agent?: Emptyable<string>;
            }
        }
    }
}
export interface AccountRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface AccountUpdateParams {
    /**
     * An [account token](https://api.stripe.com#create_account_token), used to securely provide details to the account.
     */
    account_token?: string;
    /**
     * Business information about the account.
     */
    business_profile?: AccountUpdateParams.BusinessProfile;
    /**
     * The business type. Once you create an [Account Link](https://docs.stripe.com/api/account_links) or [Account Session](https://docs.stripe.com/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
     */
    business_type?: AccountUpdateParams.BusinessType;
    /**
     * Each key of the dictionary represents a capability, and each capability
     * maps to its settings (for example, whether it has been requested or not). Each
     * capability is inactive until you have provided its specific
     * requirements and Stripe has verified them. An account might have some
     * of its requested capabilities be active and some be inactive.
     *
     * Required when [account.controller.stripe_dashboard.type](https://docs.stripe.com/api/accounts/create#create_account-controller-dashboard-type)
     * is `none`, which includes Custom accounts.
     */
    capabilities?: AccountUpdateParams.Capabilities;
    /**
     * Information about the company or business. This field is available for any `business_type`. Once you create an [Account Link](https://docs.stripe.com/api/account_links) or [Account Session](https://docs.stripe.com/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
     */
    company?: AccountUpdateParams.Company;
    /**
     * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://docs.stripe.com/payouts).
     */
    default_currency?: string;
    /**
     * Documents that may be submitted to satisfy various informational requests.
     */
    documents?: AccountUpdateParams.Documents;
    /**
     * The email address of the account holder. This is only to make the account easier to identify to you. If [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts, Stripe doesn't email the account without your consent.
     */
    email?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * A card or bank account to attach to the account for receiving [payouts](https://docs.stripe.com/connect/bank-debit-card-payouts) (you won't be able to use it for top-ups). You can provide either a token, like the ones returned by [Stripe.js](https://docs.stripe.com/js), or a dictionary, as documented in the `external_account` parameter for [bank account](https://docs.stripe.com/api#account_create_bank_account) creation.
     *
     * By default, providing an external account sets it as the new default external account for its currency, and deletes the old default if one exists. To add additional external accounts without replacing the existing default for the currency, use the [bank account](https://docs.stripe.com/api#account_create_bank_account) or [card creation](https://docs.stripe.com/api#account_create_card) APIs. After you create an [Account Link](https://docs.stripe.com/api/account_links) or [Account Session](https://docs.stripe.com/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
     */
    external_account?: Emptyable<string | AccountUpdateParams.BankAccount | AccountUpdateParams.Card | AccountUpdateParams.CardToken>;
    /**
     * A hash of account group type to tokens. These are account groups this account should be added to.
     */
    groups?: AccountUpdateParams.Groups;
    /**
     * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`. Once you create an [Account Link](https://docs.stripe.com/api/account_links) or [Account Session](https://docs.stripe.com/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
     */
    individual?: AccountUpdateParams.Individual;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
    /**
     * Options for customizing how the account functions within Stripe.
     */
    settings?: AccountUpdateParams.Settings;
    /**
     * Details on the account's acceptance of the [Stripe Services Agreement](https://docs.stripe.com/connect/updating-accounts#tos-acceptance). This property can only be updated for accounts where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. This property defaults to a `full` service agreement when empty.
     */
    tos_acceptance?: AccountUpdateParams.TosAcceptance;
}
export declare namespace AccountUpdateParams {
    interface BusinessProfile {
        /**
         * The applicant's gross annual revenue for its preceding fiscal year.
         */
        annual_revenue?: BusinessProfile.AnnualRevenue;
        /**
         * An estimated upper bound of employees, contractors, vendors, etc. currently working for the business.
         */
        estimated_worker_count?: number;
        /**
         * [The merchant category code for the account](https://docs.stripe.com/connect/setting-mcc). MCCs are used to classify businesses based on the goods or services they provide.
         */
        mcc?: string;
        /**
         * Whether the business is a minority-owned, women-owned, and/or LGBTQI+ -owned business.
         */
        minority_owned_business_designation?: Array<BusinessProfile.MinorityOwnedBusinessDesignation>;
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
        support_address?: AddressParam;
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
        support_url?: Emptyable<string>;
        /**
         * The business's publicly available website.
         */
        url?: string;
    }
    type BusinessType = 'company' | 'government_entity' | 'individual' | 'non_profit';
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
         * The alma_payments capability.
         */
        alma_payments?: Capabilities.AlmaPayments;
        /**
         * The amazon_pay_payments capability.
         */
        amazon_pay_payments?: Capabilities.AmazonPayPayments;
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
         * The billie_payments capability.
         */
        billie_payments?: Capabilities.BilliePayments;
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
         * The crypto_payments capability.
         */
        crypto_payments?: Capabilities.CryptoPayments;
        /**
         * The eps_payments capability.
         */
        eps_payments?: Capabilities.EpsPayments;
        /**
         * The fpx_payments capability.
         */
        fpx_payments?: Capabilities.FpxPayments;
        /**
         * The gb_bank_transfer_payments capability.
         */
        gb_bank_transfer_payments?: Capabilities.GbBankTransferPayments;
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
         * The jp_bank_transfer_payments capability.
         */
        jp_bank_transfer_payments?: Capabilities.JpBankTransferPayments;
        /**
         * The kakao_pay_payments capability.
         */
        kakao_pay_payments?: Capabilities.KakaoPayPayments;
        /**
         * The klarna_payments capability.
         */
        klarna_payments?: Capabilities.KlarnaPayments;
        /**
         * The konbini_payments capability.
         */
        konbini_payments?: Capabilities.KonbiniPayments;
        /**
         * The kr_card_payments capability.
         */
        kr_card_payments?: Capabilities.KrCardPayments;
        /**
         * The legacy_payments capability.
         */
        legacy_payments?: Capabilities.LegacyPayments;
        /**
         * The link_payments capability.
         */
        link_payments?: Capabilities.LinkPayments;
        /**
         * The mb_way_payments capability.
         */
        mb_way_payments?: Capabilities.MbWayPayments;
        /**
         * The mobilepay_payments capability.
         */
        mobilepay_payments?: Capabilities.MobilepayPayments;
        /**
         * The multibanco_payments capability.
         */
        multibanco_payments?: Capabilities.MultibancoPayments;
        /**
         * The mx_bank_transfer_payments capability.
         */
        mx_bank_transfer_payments?: Capabilities.MxBankTransferPayments;
        /**
         * The naver_pay_payments capability.
         */
        naver_pay_payments?: Capabilities.NaverPayPayments;
        /**
         * The nz_bank_account_becs_debit_payments capability.
         */
        nz_bank_account_becs_debit_payments?: Capabilities.NzBankAccountBecsDebitPayments;
        /**
         * The oxxo_payments capability.
         */
        oxxo_payments?: Capabilities.OxxoPayments;
        /**
         * The p24_payments capability.
         */
        p24_payments?: Capabilities.P24Payments;
        /**
         * The pay_by_bank_payments capability.
         */
        pay_by_bank_payments?: Capabilities.PayByBankPayments;
        /**
         * The payco_payments capability.
         */
        payco_payments?: Capabilities.PaycoPayments;
        /**
         * The paynow_payments capability.
         */
        paynow_payments?: Capabilities.PaynowPayments;
        /**
         * The payto_payments capability.
         */
        payto_payments?: Capabilities.PaytoPayments;
        /**
         * The pix_payments capability.
         */
        pix_payments?: Capabilities.PixPayments;
        /**
         * The promptpay_payments capability.
         */
        promptpay_payments?: Capabilities.PromptpayPayments;
        /**
         * The revolut_pay_payments capability.
         */
        revolut_pay_payments?: Capabilities.RevolutPayPayments;
        /**
         * The samsung_pay_payments capability.
         */
        samsung_pay_payments?: Capabilities.SamsungPayPayments;
        /**
         * The satispay_payments capability.
         */
        satispay_payments?: Capabilities.SatispayPayments;
        /**
         * The sepa_bank_transfer_payments capability.
         */
        sepa_bank_transfer_payments?: Capabilities.SepaBankTransferPayments;
        /**
         * The sepa_debit_payments capability.
         */
        sepa_debit_payments?: Capabilities.SepaDebitPayments;
        /**
         * The sofort_payments capability.
         */
        sofort_payments?: Capabilities.SofortPayments;
        /**
         * The swish_payments capability.
         */
        swish_payments?: Capabilities.SwishPayments;
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
         * The twint_payments capability.
         */
        twint_payments?: Capabilities.TwintPayments;
        /**
         * The us_bank_account_ach_payments capability.
         */
        us_bank_account_ach_payments?: Capabilities.UsBankAccountAchPayments;
        /**
         * The us_bank_transfer_payments capability.
         */
        us_bank_transfer_payments?: Capabilities.UsBankTransferPayments;
        /**
         * The zip_payments capability.
         */
        zip_payments?: Capabilities.ZipPayments;
    }
    interface Company {
        /**
         * The company's primary address.
         */
        address?: AddressParam;
        /**
         * The Kana variation of the company's primary address (Japan only).
         */
        address_kana?: JapanAddressParam;
        /**
         * The Kanji variation of the company's primary address (Japan only).
         */
        address_kanji?: JapanAddressParam;
        /**
         * Whether the company's directors have been provided. Set this Boolean to `true` after creating all the company's directors with [the Persons API](https://docs.stripe.com/api/persons) for accounts with a `relationship.director` requirement. This value is not automatically set to `true` after creating directors, so it needs to be updated to indicate all directors have been provided.
         */
        directors_provided?: boolean;
        /**
         * This hash is used to attest that the directors information provided to Stripe is both current and correct.
         */
        directorship_declaration?: Company.DirectorshipDeclaration;
        /**
         * Whether the company's executives have been provided. Set this Boolean to `true` after creating all the company's executives with [the Persons API](https://docs.stripe.com/api/persons) for accounts with a `relationship.executive` requirement.
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
         * Whether the company's owners have been provided. Set this Boolean to `true` after creating all the company's owners with [the Persons API](https://docs.stripe.com/api/persons) for accounts with a `relationship.owner` requirement.
         */
        owners_provided?: boolean;
        /**
         * This hash is used to attest that the beneficial owner information provided to Stripe is both current and correct.
         */
        ownership_declaration?: Company.OwnershipDeclaration;
        /**
         * This value is used to determine if a business is exempt from providing ultimate beneficial owners. See [this support article](https://support.stripe.com/questions/exemption-from-providing-ownership-details) and [changelog](https://docs.stripe.com/changelog/acacia/2025-01-27/ownership-exemption-reason-accounts-api) for more details.
         */
        ownership_exemption_reason?: Emptyable<Company.OwnershipExemptionReason>;
        /**
         * The company's phone number (used for verification).
         */
        phone?: string;
        registration_date?: Emptyable<Company.RegistrationDate>;
        /**
         * The identification number given to a company when it is registered or incorporated, if distinct from the identification number used for filing taxes. (Examples are the CIN for companies and LLP IN for partnerships in India, and the Company Registration Number in Hong Kong).
         */
        registration_number?: string;
        /**
         * This hash is used to attest that the representative is authorized to act as the representative of their legal entity.
         */
        representative_declaration?: Company.RepresentativeDeclaration;
        /**
         * The category identifying the legal structure of the company or legal entity. See [Business structure](https://docs.stripe.com/connect/identity-verification#business-structure) for more details. Pass an empty string to unset this value.
         */
        structure?: Emptyable<Company.Structure>;
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
    interface Documents {
        /**
         * One or more documents that support the [Bank account ownership verification](https://support.stripe.com/questions/bank-account-ownership-verification) requirement. Must be a document associated with the account's primary active bank account that displays the last 4 digits of the account number, either a statement or a check.
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
        metadata?: MetadataParam;
        default_for_currency?: boolean;
    }
    interface CardToken {
        object: 'card';
        currency?: string;
        token: string;
    }
    interface Groups {
        /**
         * The group the account is in to determine their payments pricing, and null if the account is on customized pricing. [See the Platform pricing tool documentation](https://docs.stripe.com/connect/platform-pricing-tools) for details.
         */
        payments_pricing?: Emptyable<string>;
    }
    interface Individual {
        /**
         * The individual's primary address.
         */
        address?: AddressParam;
        /**
         * The Kana variation of the individual's primary address (Japan only).
         */
        address_kana?: JapanAddressParam;
        /**
         * The Kanji variation of the individual's primary address (Japan only).
         */
        address_kanji?: JapanAddressParam;
        /**
         * The individual's date of birth.
         */
        dob?: Emptyable<Individual.Dob>;
        /**
         * The individual's email address.
         */
        email?: string;
        /**
         * The individual's first name.
         */
        first_name?: string;
        /**
         * The Kana variation of the individual's first name (Japan only).
         */
        first_name_kana?: string;
        /**
         * The Kanji variation of the individual's first name (Japan only).
         */
        first_name_kanji?: string;
        /**
         * A list of alternate names or aliases that the individual is known by.
         */
        full_name_aliases?: Emptyable<Array<string>>;
        /**
         * The individual's gender
         */
        gender?: string;
        /**
         * The government-issued ID number of the individual, as appropriate for the representative's country. (Examples are a Social Security Number in the U.S., or a Social Insurance Number in Canada). Instead of the number itself, you can also provide a [PII token created with Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
         */
        id_number?: string;
        /**
         * The government-issued secondary ID number of the individual, as appropriate for the representative's country, will be used for enhanced verification checks. In Thailand, this would be the laser code found on the back of an ID card. Instead of the number itself, you can also provide a [PII token created with Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
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
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Emptyable<MetadataParam>;
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
        registered_address?: AddressParam;
        /**
         * Describes the person's relationship to the account.
         */
        relationship?: Individual.Relationship;
        /**
         * The last four digits of the individual's Social Security Number (U.S. only).
         */
        ssn_last_4?: string;
        /**
         * The individual's verification document information.
         */
        verification?: Individual.Verification;
    }
    interface Settings {
        /**
         * Settings specific to Bacs Direct Debit payments.
         */
        bacs_debit_payments?: Settings.BacsDebitPayments;
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
         * Settings specific to the account's use of Invoices.
         */
        invoices?: Settings.Invoices;
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
    namespace BankAccount {
        type AccountHolderType = 'company' | 'individual';
    }
    namespace BusinessProfile {
        interface AnnualRevenue {
            /**
             * A non-negative integer representing the amount in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
             */
            amount: number;
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;
            /**
             * The close-out date of the preceding fiscal year in ISO 8601 format. E.g. 2023-12-31 for the 31st of December, 2023.
             */
            fiscal_year_end: string;
        }
        type MinorityOwnedBusinessDesignation = 'lgbtqi_owned_business' | 'minority_owned_business' | 'none_of_these_apply' | 'prefer_not_to_answer' | 'women_owned_business';
        interface MonthlyEstimatedRevenue {
            /**
             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
             */
            amount: number;
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;
        }
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
        interface AlmaPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface AmazonPayPayments {
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
        interface BilliePayments {
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
        interface CryptoPayments {
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
        interface GbBankTransferPayments {
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
        interface JpBankTransferPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface KakaoPayPayments {
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
        interface KrCardPayments {
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
        interface MbWayPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface MobilepayPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface MultibancoPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface MxBankTransferPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface NaverPayPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface NzBankAccountBecsDebitPayments {
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
        interface PayByBankPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface PaycoPayments {
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
        interface PaytoPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface PixPayments {
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
        interface RevolutPayPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface SamsungPayPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface SatispayPayments {
            /**
             * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
             */
            requested?: boolean;
        }
        interface SepaBankTransferPayments {
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
        interface SwishPayments {
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
        interface TwintPayments {
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
        interface UsBankTransferPayments {
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
    namespace Company {
        interface DirectorshipDeclaration {
            /**
             * The Unix timestamp marking when the directorship declaration attestation was made.
             */
            date?: number;
            /**
             * The IP address from which the directorship declaration attestation was made.
             */
            ip?: string;
            /**
             * The user agent of the browser from which the directorship declaration attestation was made.
             */
            user_agent?: string;
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
        type OwnershipExemptionReason = 'qualified_entity_exceeds_ownership_threshold' | 'qualifies_as_financial_institution';
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
        interface RepresentativeDeclaration {
            /**
             * The Unix timestamp marking when the representative declaration attestation was made.
             */
            date?: number;
            /**
             * The IP address from which the representative declaration attestation was made.
             */
            ip?: string;
            /**
             * The user agent of the browser from which the representative declaration attestation was made.
             */
            user_agent?: string;
        }
        type Structure = 'free_zone_establishment' | 'free_zone_llc' | 'government_instrumentality' | 'governmental_unit' | 'incorporated_non_profit' | 'incorporated_partnership' | 'limited_liability_partnership' | 'llc' | 'multi_member_llc' | 'private_company' | 'private_corporation' | 'private_partnership' | 'public_company' | 'public_corporation' | 'public_partnership' | 'registered_charity' | 'single_member_llc' | 'sole_establishment' | 'sole_proprietorship' | 'tax_exempt_government_instrumentality' | 'unincorporated_association' | 'unincorporated_non_profit' | 'unincorporated_partnership';
        interface Verification {
            /**
             * A document verifying the business.
             */
            document?: Verification.Document;
        }
        namespace Verification {
            interface Document {
                /**
                 * The back of a document returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `additional_verification`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                 */
                back?: string;
                /**
                 * The front of a document returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `additional_verification`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                 */
                front?: string;
            }
        }
    }
    namespace Documents {
        interface BankAccountOwnershipVerification {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
        interface CompanyLicense {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
        interface CompanyMemorandumOfAssociation {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
        interface CompanyMinisterialDecree {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
        interface CompanyRegistrationVerification {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
        interface CompanyTaxIdVerification {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
        interface ProofOfAddress {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
        interface ProofOfRegistration {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
            /**
             * Information regarding the person signing the document if applicable.
             */
            signer?: ProofOfRegistration.Signer;
        }
        interface ProofOfUltimateBeneficialOwnership {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
            /**
             * Information regarding the person signing the document if applicable.
             */
            signer?: ProofOfUltimateBeneficialOwnership.Signer;
        }
        namespace ProofOfRegistration {
            interface Signer {
                /**
                 * The token of the person signing the document, if applicable.
                 */
                person?: string;
            }
        }
        namespace ProofOfUltimateBeneficialOwnership {
            interface Signer {
                /**
                 * The token of the person signing the document, if applicable.
                 */
                person?: string;
            }
        }
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
            percent_ownership?: Emptyable<number>;
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
                 * The back of an ID returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                 */
                back?: string;
                /**
                 * The front of an ID returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                 */
                front?: string;
            }
            interface Document {
                /**
                 * The back of an ID returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                 */
                back?: string;
                /**
                 * The front of an ID returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                 */
                front?: string;
            }
        }
    }
    namespace Settings {
        interface BacsDebitPayments {
            /**
             * The Bacs Direct Debit Display Name for this account. For payments made with Bacs Direct Debit, this name appears on the mandate as the statement descriptor. Mobile banking apps display it as the name of the business. To use custom branding, set the Bacs Direct Debit Display Name during or right after creation. Custom branding incurs an additional monthly fee for the platform. If you don't set the display name before requesting Bacs capability, it's automatically set as "Stripe" and the account is onboarded to Stripe branding, which is free.
             */
            display_name?: string;
        }
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
             * Details on the account's acceptance of the [Stripe Issuing Terms and Disclosures](https://docs.stripe.com/issuing/connect/tos_acceptance).
             */
            tos_acceptance?: CardIssuing.TosAcceptance;
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
            statement_descriptor_prefix_kana?: Emptyable<string>;
            /**
             * The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kanji` specified on the charge. `statement_descriptor_prefix_kanji` is useful for maximizing descriptor space for the dynamic portion.
             */
            statement_descriptor_prefix_kanji?: Emptyable<string>;
        }
        interface Invoices {
            /**
             * The list of default Account Tax IDs to automatically include on invoices. Account Tax IDs get added when an invoice is finalized.
             */
            default_account_tax_ids?: Emptyable<Array<string>>;
            /**
             * Whether to save the payment method after a payment is completed for a one-time invoice or a subscription invoice when the customer already has a default payment method on the hosted invoice page.
             */
            hosted_payment_method_save?: Invoices.HostedPaymentMethodSave;
        }
        interface Payments {
            /**
             * The default text that appears on statements for non-card charges outside of Japan. For card charges, if you don't set a `statement_descriptor_prefix`, this text is also used as the statement descriptor prefix. In that case, if concatenating the statement descriptor suffix causes the combined statement descriptor to exceed 22 characters, we truncate the `statement_descriptor` text to limit the full descriptor to 22 characters. For more information about statement descriptors and their requirements, see the [account settings documentation](https://docs.stripe.com/get-started/account/statement-descriptors).
             */
            statement_descriptor?: string;
            /**
             * The Kana variation of `statement_descriptor` used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
             */
            statement_descriptor_kana?: string;
            /**
             * The Kanji variation of `statement_descriptor` used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
             */
            statement_descriptor_kanji?: string;
        }
        interface Payouts {
            /**
             * A Boolean indicating whether Stripe should try to reclaim negative balances from an attached bank account. For details, see [Understanding Connect Account Balances](https://docs.stripe.com/connect/account-balances).
             */
            debit_negative_balances?: boolean;
            /**
             * Details on when funds from charges are available, and when they are paid out to an external account. For details, see our [Setting Bank and Debit Card Payouts](https://docs.stripe.com/connect/bank-transfers#payout-information) documentation.
             */
            schedule?: Payouts.Schedule;
            /**
             * The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
             */
            statement_descriptor?: string;
        }
        interface Treasury {
            /**
             * Details on the account's acceptance of the Stripe Treasury Services Agreement.
             */
            tos_acceptance?: Treasury.TosAcceptance;
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
                user_agent?: Emptyable<string>;
            }
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
        namespace Invoices {
            type HostedPaymentMethodSave = 'always' | 'never' | 'offer';
        }
        namespace Payouts {
            interface Schedule {
                /**
                 * The number of days charge funds are held before being paid out. May also be set to `minimum`, representing the lowest available value for the account country. Default is `minimum`. The `delay_days` parameter remains at the last configured value if `interval` is `manual`. [Learn more about controlling payout delay days](https://docs.stripe.com/connect/manage-payout-schedule).
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
                 * The days of the month when available funds are paid out, specified as an array of numbers between 1--31. Payouts nominally scheduled between the 29th and 31st of the month are instead sent on the last day of a shorter month. Required and applicable only if `interval` is `monthly` and `monthly_anchor` is not set.
                 */
                monthly_payout_days?: Array<number>;
                /**
                 * The day of the week when available funds are paid out, specified as `monday`, `tuesday`, etc. Required and applicable only if `interval` is `weekly`.
                 */
                weekly_anchor?: Schedule.WeeklyAnchor;
                /**
                 * The days of the week when available funds are paid out, specified as an array, e.g., [`monday`, `tuesday`]. Required and applicable only if `interval` is `weekly`.
                 */
                weekly_payout_days?: Array<Schedule.WeeklyPayoutDay>;
            }
            namespace Schedule {
                type Interval = 'daily' | 'manual' | 'monthly' | 'weekly';
                type WeeklyAnchor = 'friday' | 'monday' | 'saturday' | 'sunday' | 'thursday' | 'tuesday' | 'wednesday';
                type WeeklyPayoutDay = 'friday' | 'monday' | 'thursday' | 'tuesday' | 'wednesday';
            }
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
                user_agent?: Emptyable<string>;
            }
        }
    }
}
export interface AccountListParams extends PaginationParams {
    /**
     * Only return connected accounts that were created during the given date interval.
     */
    created?: RangeQueryParam | number;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface AccountDeleteParams {
}
export interface AccountCreateExternalAccountParams {
    /**
     * A token, like the ones returned by [Stripe.js](https://docs.stripe.com/js) or a dictionary containing a user's external account details (with the options shown below). Please refer to full [documentation](https://stripe.com/docs/api/external_accounts) instead.
     */
    external_account: string | AccountCreateExternalAccountParams.Card | AccountCreateExternalAccountParams.BankAccount | AccountCreateExternalAccountParams.CardToken;
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
    metadata?: MetadataParam;
}
export declare namespace AccountCreateExternalAccountParams {
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
        metadata?: MetadataParam;
    }
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
    interface CardToken {
        object: 'card';
        currency?: string;
        token: string;
    }
    namespace BankAccount {
        type AccountHolderType = 'company' | 'individual';
    }
}
export interface AccountCreateLoginLinkParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface AccountCreatePersonParams {
    /**
     * Details on the legal guardian's or authorizer's acceptance of the required Stripe agreements.
     */
    additional_tos_acceptances?: AccountCreatePersonParams.AdditionalTosAcceptances;
    /**
     * The person's address.
     */
    address?: AddressParam;
    /**
     * The Kana variation of the person's address (Japan only).
     */
    address_kana?: JapanAddressParam;
    /**
     * The Kanji variation of the person's address (Japan only).
     */
    address_kanji?: JapanAddressParam;
    /**
     * The person's date of birth.
     */
    dob?: Emptyable<AccountCreatePersonParams.Dob>;
    /**
     * Documents that may be submitted to satisfy various informational requests.
     */
    documents?: AccountCreatePersonParams.Documents;
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
    full_name_aliases?: Emptyable<Array<string>>;
    /**
     * The person's gender (International regulations require either "male" or "female").
     */
    gender?: string;
    /**
     * The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
     */
    id_number?: string;
    /**
     * The person's secondary ID number, as appropriate for their country, will be used for enhanced verification checks. In Thailand, this would be the laser code found on the back of an ID card. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
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
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
    /**
     * The country where the person is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)), or "XX" if unavailable.
     */
    nationality?: string;
    /**
     * A [person token](https://docs.stripe.com/connect/account-tokens), used to securely provide details to the person.
     */
    person_token?: string;
    /**
     * The person's phone number.
     */
    phone?: string;
    /**
     * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
     */
    political_exposure?: AccountCreatePersonParams.PoliticalExposure;
    /**
     * The person's registered address.
     */
    registered_address?: AddressParam;
    /**
     * The relationship that this person has with the account's legal entity.
     */
    relationship?: AccountCreatePersonParams.Relationship;
    /**
     * The last four digits of the person's Social Security number (U.S. only).
     */
    ssn_last_4?: string;
    /**
     * Demographic data related to the person.
     */
    us_cfpb_data?: AccountCreatePersonParams.UsCfpbData;
    /**
     * The person's verification status.
     */
    verification?: AccountCreatePersonParams.Verification;
}
export declare namespace AccountCreatePersonParams {
    interface AdditionalTosAcceptances {
        /**
         * Details on the legal guardian's acceptance of the main Stripe service agreement.
         */
        account?: AdditionalTosAcceptances.Account;
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
    type PoliticalExposure = 'existing' | 'none';
    interface Relationship {
        /**
         * Whether the person is the authorizer of the account's representative.
         */
        authorizer?: boolean;
        /**
         * Whether the person is a director of the account's legal entity. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
         */
        director?: boolean;
        /**
         * Whether the person has significant responsibility to control, manage, or direct the organization.
         */
        executive?: boolean;
        /**
         * Whether the person is the legal guardian of the account's representative.
         */
        legal_guardian?: boolean;
        /**
         * Whether the person is an owner of the account's legal entity.
         */
        owner?: boolean;
        /**
         * The percent owned by the person of the account's legal entity.
         */
        percent_ownership?: Emptyable<number>;
        /**
         * Whether the person is authorized as the primary representative of the account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
         */
        representative?: boolean;
        /**
         * The person's title (e.g., CEO, Support Engineer).
         */
        title?: string;
    }
    interface UsCfpbData {
        /**
         * The persons ethnicity details
         */
        ethnicity_details?: UsCfpbData.EthnicityDetails;
        /**
         * The persons race details
         */
        race_details?: UsCfpbData.RaceDetails;
        /**
         * The persons self-identified gender
         */
        self_identified_gender?: string;
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
    namespace AdditionalTosAcceptances {
        interface Account {
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
            user_agent?: Emptyable<string>;
        }
    }
    namespace Documents {
        interface CompanyAuthorization {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
        interface Passport {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
        interface Visa {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
    }
    namespace UsCfpbData {
        interface EthnicityDetails {
            /**
             * The persons ethnicity
             */
            ethnicity?: Array<EthnicityDetails.Ethnicity>;
            /**
             * Please specify your origin, when other is selected.
             */
            ethnicity_other?: string;
        }
        interface RaceDetails {
            /**
             * The persons race.
             */
            race?: Array<RaceDetails.Race>;
            /**
             * Please specify your race, when other is selected.
             */
            race_other?: string;
        }
        namespace EthnicityDetails {
            type Ethnicity = 'cuban' | 'hispanic_or_latino' | 'mexican' | 'not_hispanic_or_latino' | 'other_hispanic_or_latino' | 'prefer_not_to_answer' | 'puerto_rican';
        }
        namespace RaceDetails {
            type Race = 'african_american' | 'american_indian_or_alaska_native' | 'asian' | 'asian_indian' | 'black_or_african_american' | 'chinese' | 'ethiopian' | 'filipino' | 'guamanian_or_chamorro' | 'haitian' | 'jamaican' | 'japanese' | 'korean' | 'native_hawaiian' | 'native_hawaiian_or_other_pacific_islander' | 'nigerian' | 'other_asian' | 'other_black_or_african_american' | 'other_pacific_islander' | 'prefer_not_to_answer' | 'samoan' | 'somali' | 'vietnamese' | 'white';
        }
    }
    namespace Verification {
        interface AdditionalDocument {
            /**
             * The back of an ID returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            back?: string;
            /**
             * The front of an ID returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            front?: string;
        }
        interface Document {
            /**
             * The back of an ID returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            back?: string;
            /**
             * The front of an ID returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            front?: string;
        }
    }
}
export interface AccountDeleteExternalAccountParams {
}
export interface AccountDeletePersonParams {
}
export interface AccountListCapabilitiesParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface AccountListExternalAccountsParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Filter external accounts according to a particular object type.
     */
    object?: AccountListExternalAccountsParams.Object;
}
export declare namespace AccountListExternalAccountsParams {
    type Object = 'bank_account' | 'card';
}
export interface AccountListPersonsParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Filters on the list of people returned based on the person's relationship to the account's company.
     */
    relationship?: AccountListPersonsParams.Relationship;
}
export declare namespace AccountListPersonsParams {
    interface Relationship {
        /**
         * A filter on the list of people returned based on whether these people are authorizers of the account's representative.
         */
        authorizer?: boolean;
        /**
         * A filter on the list of people returned based on whether these people are directors of the account's company.
         */
        director?: boolean;
        /**
         * A filter on the list of people returned based on whether these people are executives of the account's company.
         */
        executive?: boolean;
        /**
         * A filter on the list of people returned based on whether these people are legal guardians of the account's representative.
         */
        legal_guardian?: boolean;
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
export interface AccountRejectParams {
    /**
     * The reason for rejecting the account. Can be `fraud`, `terms_of_service`, or `other`.
     */
    reason: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface AccountRetrieveCurrentParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface AccountRetrieveCapabilityParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface AccountRetrieveExternalAccountParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface AccountRetrievePersonParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface AccountUpdateCapabilityParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * To request a new capability for an account, pass true. There can be a delay before the requested capability becomes active. If the capability has any activation requirements, the response includes them in the `requirements` arrays.
     *
     * If a capability isn't permanent, you can remove it from the account by passing false. Some capabilities are permanent after they've been requested. Attempting to remove a permanent capability returns an error.
     */
    requested?: boolean;
}
export interface AccountUpdateExternalAccountParams {
    /**
     * The name of the person or business that owns the bank account.
     */
    account_holder_name?: string;
    /**
     * The type of entity that holds the account. This can be either `individual` or `company`.
     */
    account_holder_type?: Emptyable<AccountUpdateExternalAccountParams.AccountHolderType>;
    /**
     * The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`.
     */
    account_type?: AccountUpdateExternalAccountParams.AccountType;
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
    documents?: AccountUpdateExternalAccountParams.Documents;
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
    metadata?: Emptyable<MetadataParam>;
    /**
     * Cardholder name.
     */
    name?: string;
}
export declare namespace AccountUpdateExternalAccountParams {
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
export interface AccountUpdatePersonParams {
    /**
     * Details on the legal guardian's or authorizer's acceptance of the required Stripe agreements.
     */
    additional_tos_acceptances?: AccountUpdatePersonParams.AdditionalTosAcceptances;
    /**
     * The person's address.
     */
    address?: AddressParam;
    /**
     * The Kana variation of the person's address (Japan only).
     */
    address_kana?: JapanAddressParam;
    /**
     * The Kanji variation of the person's address (Japan only).
     */
    address_kanji?: JapanAddressParam;
    /**
     * The person's date of birth.
     */
    dob?: Emptyable<AccountUpdatePersonParams.Dob>;
    /**
     * Documents that may be submitted to satisfy various informational requests.
     */
    documents?: AccountUpdatePersonParams.Documents;
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
    full_name_aliases?: Emptyable<Array<string>>;
    /**
     * The person's gender (International regulations require either "male" or "female").
     */
    gender?: string;
    /**
     * The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
     */
    id_number?: string;
    /**
     * The person's secondary ID number, as appropriate for their country, will be used for enhanced verification checks. In Thailand, this would be the laser code found on the back of an ID card. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
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
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
    /**
     * The country where the person is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)), or "XX" if unavailable.
     */
    nationality?: string;
    /**
     * A [person token](https://docs.stripe.com/connect/account-tokens), used to securely provide details to the person.
     */
    person_token?: string;
    /**
     * The person's phone number.
     */
    phone?: string;
    /**
     * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
     */
    political_exposure?: AccountUpdatePersonParams.PoliticalExposure;
    /**
     * The person's registered address.
     */
    registered_address?: AddressParam;
    /**
     * The relationship that this person has with the account's legal entity.
     */
    relationship?: AccountUpdatePersonParams.Relationship;
    /**
     * The last four digits of the person's Social Security number (U.S. only).
     */
    ssn_last_4?: string;
    /**
     * Demographic data related to the person.
     */
    us_cfpb_data?: AccountUpdatePersonParams.UsCfpbData;
    /**
     * The person's verification status.
     */
    verification?: AccountUpdatePersonParams.Verification;
}
export declare namespace AccountUpdatePersonParams {
    interface AdditionalTosAcceptances {
        /**
         * Details on the legal guardian's acceptance of the main Stripe service agreement.
         */
        account?: AdditionalTosAcceptances.Account;
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
    type PoliticalExposure = 'existing' | 'none';
    interface Relationship {
        /**
         * Whether the person is the authorizer of the account's representative.
         */
        authorizer?: boolean;
        /**
         * Whether the person is a director of the account's legal entity. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
         */
        director?: boolean;
        /**
         * Whether the person has significant responsibility to control, manage, or direct the organization.
         */
        executive?: boolean;
        /**
         * Whether the person is the legal guardian of the account's representative.
         */
        legal_guardian?: boolean;
        /**
         * Whether the person is an owner of the account's legal entity.
         */
        owner?: boolean;
        /**
         * The percent owned by the person of the account's legal entity.
         */
        percent_ownership?: Emptyable<number>;
        /**
         * Whether the person is authorized as the primary representative of the account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
         */
        representative?: boolean;
        /**
         * The person's title (e.g., CEO, Support Engineer).
         */
        title?: string;
    }
    interface UsCfpbData {
        /**
         * The persons ethnicity details
         */
        ethnicity_details?: UsCfpbData.EthnicityDetails;
        /**
         * The persons race details
         */
        race_details?: UsCfpbData.RaceDetails;
        /**
         * The persons self-identified gender
         */
        self_identified_gender?: string;
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
    namespace AdditionalTosAcceptances {
        interface Account {
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
            user_agent?: Emptyable<string>;
        }
    }
    namespace Documents {
        interface CompanyAuthorization {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
        interface Passport {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
        interface Visa {
            /**
             * One or more document ids returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `account_requirement`.
             */
            files?: Array<string>;
        }
    }
    namespace UsCfpbData {
        interface EthnicityDetails {
            /**
             * The persons ethnicity
             */
            ethnicity?: Array<EthnicityDetails.Ethnicity>;
            /**
             * Please specify your origin, when other is selected.
             */
            ethnicity_other?: string;
        }
        interface RaceDetails {
            /**
             * The persons race.
             */
            race?: Array<RaceDetails.Race>;
            /**
             * Please specify your race, when other is selected.
             */
            race_other?: string;
        }
        namespace EthnicityDetails {
            type Ethnicity = 'cuban' | 'hispanic_or_latino' | 'mexican' | 'not_hispanic_or_latino' | 'other_hispanic_or_latino' | 'prefer_not_to_answer' | 'puerto_rican';
        }
        namespace RaceDetails {
            type Race = 'african_american' | 'american_indian_or_alaska_native' | 'asian' | 'asian_indian' | 'black_or_african_american' | 'chinese' | 'ethiopian' | 'filipino' | 'guamanian_or_chamorro' | 'haitian' | 'jamaican' | 'japanese' | 'korean' | 'native_hawaiian' | 'native_hawaiian_or_other_pacific_islander' | 'nigerian' | 'other_asian' | 'other_black_or_african_american' | 'other_pacific_islander' | 'prefer_not_to_answer' | 'samoan' | 'somali' | 'vietnamese' | 'white';
        }
    }
    namespace Verification {
        interface AdditionalDocument {
            /**
             * The back of an ID returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            back?: string;
            /**
             * The front of an ID returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            front?: string;
        }
        interface Document {
            /**
             * The back of an ID returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            back?: string;
            /**
             * The front of an ID returned by a [file upload](https://api.stripe.com#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            front?: string;
        }
    }
}
