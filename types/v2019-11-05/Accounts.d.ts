declare namespace Stripe {
  /**
   * The Account object.
   */
  interface Account {
    /**
     * Optional information related to the business.
     */
    business_profile: BusinessProfile | null;

    /**
     * The business type. Can be `individual` or `company`.
     */
    business_type: string | null;

    capabilities: Capabilities;

    /**
     * Whether the account can create live charges.
     */
    charges_enabled: boolean;

    company: Company;

    /**
     * The account's country.
     */
    country: string;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
     */
    default_currency: string;

    /**
     * Whether account details have been submitted. Standard accounts cannot receive payouts before this is true.
     */
    details_submitted: boolean;

    /**
     * The primary user's email address.
     */
    email: string | null;

    /**
     * External accounts (bank accounts and debit cards) currently attached to this account
     */
    external_accounts: ExternalAccountList;

    /**
     * Unique identifier for the object.
     */
    id: string;

    individual: Person;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: {
      [key: string]: string;
    };

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'account';

    /**
     * Whether Stripe can send payouts to this account.
     */
    payouts_enabled: boolean;

    requirements: Requirements;

    /**
     * Options for customizing how the account functions within Stripe.
     */
    settings: Settings | null;

    tos_acceptance: TosAcceptance;

    /**
     * The Stripe account type. Can be `standard`, `express`, or `custom`.
     */
    type: Account.Type;
  }

  namespace Account {
    type Type = 'custom' | 'express' | 'standard'
  }

  interface DeletedAccount {
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

  /**
   * The Capability object.
   */
  interface Capability {
    /**
     * The account for which the capability enables functionality.
     */
    account?: string | Account;

    /**
     * The identifier for the capability.
     */
    id?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'capability';

    /**
     * Whether the capability has been requested.
     */
    requested?: boolean;

    /**
     * Time at which the capability was requested. Measured in seconds since the Unix epoch.
     */
    requested_at?: number | null;

    requirements?: Requirements;

    /**
     * The status of the capability. Can be `active`, `inactive`, `pending`, or `unrequested`.
     */
    status?: Capability.Status;
  }

  namespace Capability {
    type Status = 'active' | 'disabled' | 'inactive' | 'pending' | 'unrequested'
  }

  /**
   * The ExternalAccount object.
   */
  interface ExternalAccount {}

  /**
   * The LoginLink object.
   */
  interface LoginLink {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'login_link';

    /**
     * The URL for the login link.
     */
    url?: string;
  }

  /**
   * The Person object.
   */
  interface Person {
    /**
     * The account the person is associated with.
     */
    account: string;

    address: Address;

    /**
     * The Kana variation of the person's address (Japan only).
     */
    address_kana: JapanAddress | null;

    /**
     * The Kanji variation of the person's address (Japan only).
     */
    address_kanji: JapanAddress | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    dob: DateOfBirth;

    /**
     * The person's email address.
     */
    email: string | null;

    /**
     * The person's first name.
     */
    first_name: string | null;

    /**
     * The Kana variation of the person's first name (Japan only).
     */
    first_name_kana: string | null;

    /**
     * The Kanji variation of the person's first name (Japan only).
     */
    first_name_kanji: string | null;

    /**
     * The person's gender (International regulations require either "male" or "female").
     */
    gender: string | null;

    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * Whether the person's `id_number` was provided.
     */
    id_number_provided: boolean;

    /**
     * The person's last name.
     */
    last_name: string | null;

    /**
     * The Kana variation of the person's last name (Japan only).
     */
    last_name_kana: string | null;

    /**
     * The Kanji variation of the person's last name (Japan only).
     */
    last_name_kanji: string | null;

    /**
     * The person's maiden name.
     */
    maiden_name: string | null;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: {
      [key: string]: string;
    };

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'person';

    /**
     * The person's phone number.
     */
    phone: string | null;

    relationship: Relationship;

    /**
     * Information about the requirements for this person, including what information needs to be collected, and by when.
     */
    requirements: Requirements | null;

    /**
     * Whether the last 4 digits of this person's SSN have been provided.
     */
    ssn_last_4_provided: boolean;

    verification: Verification;
  }interface DeletedPerson {
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

  /**
   * With [Connect](https://stripe.com/docs/connect), you can create Stripe accounts for your users.
   * To do this, you'll first need to [register your platform](https://dashboard.stripe.com/account/applications/settings).
   *
   * For Standard accounts, parameters other than country, email, and type
   * are used to prefill the account application that we ask the account holder to complete.
   */
  interface AccountCreateParams {
    /**
     * An [account token](https://stripe.com/docs/api#create_account_token), used to securely provide details to the account.
     */
    account_token?: string;

    /**
     * Non-essential business information about the account
     */
    business_profile?: business_profile_specs;

    /**
     * The business type. Can be `individual` or `company`.
     */
    business_type?: string;

    /**
     * Information about the company or business. This field is null unless `business_type` is set to `company`.
     */
    company?: company_specs;

    /**
     * The country in which the account holder resides, or in which the business is legally established. This should be an ISO 3166-1 alpha-2 country code. For example, if you are in the United States and the business for which you're creating an account is legally represented in Canada, you would use `CA` as the country for the account being created.
     */
    country?: string;

    /**
     * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
     */
    default_currency?: string;

    /**
     * The email address of the account holder. For Custom accounts, this is only to make the account easier to identify to you: Stripe will never directly email your users.
     */
    email?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A card or bank account to attach to the account. You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/stripe.js), or a dictionary, as documented in the `external_account` parameter for [bank account](https://stripe.com/docs/api#account_create_bank_account) creation.
     *
     * By default, providing an external account sets it as the new default external account for its currency, and deletes the old default if one exists. To add additional external accounts without replacing the existing default for the currency, use the bank account or card creation API.
     */
    external_account?: string;

    /**
     * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`.
     */
    individual?: individual_specs;

    /**
     * A set of key-value pairs that you can attach to an `Account` object. This can be useful for storing additional information about the account in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * The set of capabilities you want to unlock for this account. Each capability will be inactive until you have provided its specific requirements and Stripe has verified them. An account may have some of its requested capabilities be active and some be inactive.
     */
    requested_capabilities?: Array<AccountCreateParams.RequestedCapability>;

    /**
     * Options for customizing how the account functions within Stripe.
     */
    settings?: settings_specs;

    /**
     * Details on the account's acceptance of the [Stripe Services Agreement](https://stripe.com/docs/connect/updating-accounts#tos-acceptance).
     */
    tos_acceptance?: tos_acceptance_specs;

    /**
     * The type of Stripe account to create. Currently must be `custom`, as only [Custom accounts](https://stripe.com/docs/connect/custom-accounts) may be created via the API.
     */
    type?: AccountCreateParams.Type;
  }

  namespace AccountCreateParams {
    type RequestedCapability =
      | 'card_issuing'
      | 'card_payments'
      | 'legacy_payments'
      | 'transfers'

    type Type = 'custom' | 'express' | 'standard'
  }

  /**
   * With [Connect](https://stripe.com/docs/connect), you can delete Custom or Express accounts you manage.
   *
   * Accounts created using test-mode keys can be deleted at any time. Accounts created using live-mode keys can only be deleted once all balances are zero.
   *
   * If you want to delete your own account, use the [data tab in your account settings](https://dashboard.stripe.com/account/data) instead.
   */
  interface AccountDelParams {}

  /**
   * Returns a list of accounts connected to your platform via [Connect](https://stripe.com/docs/connect). If you're not a platform, the list is empty.
   */
  interface AccountListParams {
    created?: range_query_specs | number;

    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  /**
   * With [Connect](https://stripe.com/docs/connect), you may flag accounts as suspicious.
   *
   * Test-mode Custom and Express accounts can be rejected at any time. Accounts created using live-mode keys may only be rejected once all balances are zero.
   */
  interface AccountRejectParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The reason for rejecting the account. Can be `fraud`, `terms_of_service`, or `other`.
     */
    reason: string;
  }

  /**
   * Retrieves the details of an account.
   */
  interface AccountRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates a connected [Express or Custom account](https://stripe.com/docs/connect/accounts) by setting the values of the parameters passed. Any parameters not provided are left unchanged. Most parameters can be changed only for Custom accounts. (These are marked Custom Only below.) Parameters marked Custom and Express are supported by both account types.
   *
   * To update your own account, use the [Dashboard](https://dashboard.stripe.com/account). Refer to our [Connect](https://stripe.com/docs/connect/updating-accounts) documentation to learn more about updating accounts.
   */
  interface AccountUpdateParams {
    /**
     * An [account token](https://stripe.com/docs/api#create_account_token), used to securely provide details to the account.
     */
    account_token?: string;

    /**
     * Non-essential business information about the account
     */
    business_profile?: business_profile_specs;

    /**
     * The business type. Can be `individual` or `company`.
     */
    business_type?: string;

    /**
     * Information about the company or business. This field is null unless `business_type` is set to `company`.
     */
    company?: company_specs;

    /**
     * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
     */
    default_currency?: string;

    /**
     * Email address of the account representative. For Standard accounts, this is used to ask them to claim their Stripe account. For Custom accounts, this only makes the account easier to identify to platforms; Stripe does not email the account representative.
     */
    email?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A card or bank account to attach to the account. You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/stripe.js), or a dictionary, as documented in the `external_account` parameter for [bank account](https://stripe.com/docs/api#account_create_bank_account) creation.
     *
     * By default, providing an external account sets it as the new default external account for its currency, and deletes the old default if one exists. To add additional external accounts without replacing the existing default for the currency, use the bank account or card creation API.
     */
    external_account?: string;

    /**
     * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`.
     */
    individual?: individual_specs;

    /**
     * A set of key-value pairs that you can attach to an `Account` object. This can be useful for storing additional information about the account in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * The set of capabilities you want to unlock for this account. Each capability will be inactive until you have provided its specific requirements and Stripe has verified them. An account may have some of its requested capabilities be active and some be inactive.
     */
    requested_capabilities?: Array<AccountUpdateParams.RequestedCapability>;

    /**
     * Options for customizing how the account functions within Stripe.
     */
    settings?: settings_specs;

    /**
     * Details on the account's acceptance of the [Stripe Services Agreement](https://stripe.com/docs/connect/updating-accounts#tos-acceptance).
     */
    tos_acceptance?: tos_acceptance_specs;
  }

  namespace AccountUpdateParams {
    type RequestedCapability =
      | 'card_issuing'
      | 'card_payments'
      | 'legacy_payments'
      | 'transfers'
  }

  /**
   * Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.
   */
  interface AccountListCapabilitiesParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Retrieves information about the specified Account Capability.
   */
  interface AccountRetrieveCapabilityParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates an existing Account Capability.
   */
  interface AccountUpdateCapabilityParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
     */
    requested?: boolean;
  }

  /**
   * Create an external account for a given account.
   */
  interface AccountCreateExternalAccountParams {
    /**
     * When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.
     */
    default_for_currency?: boolean;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Please refer to full [documentation](https://stripe.com/docs/api) instead.
     */
    external_account: string;

    /**
     * A set of key-value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };
  }

  /**
   * Delete a specified external account for a given account.
   */
  interface AccountDeleteExternalAccountParams {}

  /**
   * List external accounts for an account.
   */
  interface AccountListExternalAccountsParams {
    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  /**
   * Retrieve a specified external account for a given account.
   */
  interface AccountRetrieveExternalAccountParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates the metadata, account holder name, and account holder type of a bank account belonging to a [Custom account](https://stripe.com/docs/connect/custom-accounts), and optionally sets it as the default for its currency. Other bank account details are not editable by design.
   * You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.
   */
  interface AccountUpdateExternalAccountParams {
    /**
     * The name of the person or business that owns the bank account.
     */
    account_holder_name?: string;

    /**
     * The type of entity that holds the account. This can be either `individual` or `company`.
     */
    account_holder_type?:
      | ''
      | AccountUpdateExternalAccountParams.AccountHolderType;

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

    metadata?: {
      [key: string]: string;
    };

    /**
     * Cardholder name.
     */
    name?: string;
  }

  namespace AccountUpdateExternalAccountParams {
    type AccountHolderType = 'company' | 'individual'
  }

  /**
   * Creates a single-use login link for an Express account to access their Stripe dashboard.
   *
   * You may only create login links for [Express accounts](https://stripe.com/docs/connect/express-accounts) connected to your platform.
   */
  interface AccountCreateLoginLinkParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Where to redirect the user after they log out of their dashboard.
     */
    redirect_url?: string;
  }

  /**
   * Creates a new person.
   */
  interface AccountCreatePersonParams {
    /**
     * The person's address.
     */
    address?: address_specs;

    /**
     * The Kana variation of the person's address (Japan only).
     */
    address_kana?: japan_address_kana_specs;

    /**
     * The Kanji variation of the person's address (Japan only).
     */
    address_kanji?: japan_address_kanji_specs;

    /**
     * The person's date of birth.
     */
    dob?: date_of_birth_specs | '';

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
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * A [person token](https://stripe.com/docs/connect/account-tokens), used to securely provide details to the person.
     */
    person_token?: string;

    /**
     * The person's phone number.
     */
    phone?: string;

    /**
     * The relationship that this person has with the account's legal entity.
     */
    relationship?: relationship_specs;

    /**
     * The last 4 digits of the person's social security number.
     */
    ssn_last_4?: string;

    /**
     * The person's verification status.
     */
    verification?: person_verification_specs;
  }

  /**
   * Deletes an existing person's relationship to the account's legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the account_opener. If your integration is using the executive parameter, you cannot delete the only verified executive on file.
   */
  interface AccountDeletePersonParams {}

  /**
   * Returns a list of people associated with the account's legal entity. The people are returned sorted by creation date, with the most recent people appearing first.
   */
  interface AccountListPersonsParams {
    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * Filters on the list of people returned based on the person's relationship to the account's company.
     */
    relationship?: all_people_relationship_specs;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  /**
   * Retrieves an existing person.
   */
  interface AccountRetrievePersonParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates an existing person.
   */
  interface AccountUpdatePersonParams {
    /**
     * The person's address.
     */
    address?: address_specs;

    /**
     * The Kana variation of the person's address (Japan only).
     */
    address_kana?: japan_address_kana_specs;

    /**
     * The Kanji variation of the person's address (Japan only).
     */
    address_kanji?: japan_address_kanji_specs;

    /**
     * The person's date of birth.
     */
    dob?: date_of_birth_specs | '';

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
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * A [person token](https://stripe.com/docs/connect/account-tokens), used to securely provide details to the person.
     */
    person_token?: string;

    /**
     * The person's phone number.
     */
    phone?: string;

    /**
     * The relationship that this person has with the account's legal entity.
     */
    relationship?: relationship_specs;

    /**
     * The last 4 digits of the person's social security number.
     */
    ssn_last_4?: string;

    /**
     * The person's verification status.
     */
    verification?: person_verification_specs;
  }

  class AccountsResource {
    /**
     * With [Connect](https://stripe.com/docs/connect), you can create Stripe accounts for your users.
     * To do this, you'll first need to [register your platform](https://dashboard.stripe.com/account/applications/settings).
     *
     * For Standard accounts, parameters other than country, email, and type
     * are used to prefill the account application that we ask the account holder to complete.
     */
    create(
      params?: AccountCreateParams,
      options?: HeaderOptions
    ): Promise<Account>;

    /**
     * With [Connect](https://stripe.com/docs/connect), you can delete Custom or Express accounts you manage.
     *
     * Accounts created using test-mode keys can be deleted at any time. Accounts created using live-mode keys can only be deleted once all balances are zero.
     *
     * If you want to delete your own account, use the [data tab in your account settings](https://dashboard.stripe.com/account/data) instead.
     */
    del(
      id: string,
      params?: AccountDelParams,
      options?: HeaderOptions
    ): Promise<DeletedAccount>;

    /**
     * Returns a list of accounts connected to your platform via [Connect](https://stripe.com/docs/connect). If you're not a platform, the list is empty.
     */
    list(
      params?: AccountListParams,
      options?: HeaderOptions
    ): Promise<ApiList<Account>>;

    /**
     * With [Connect](https://stripe.com/docs/connect), you may flag accounts as suspicious.
     *
     * Test-mode Custom and Express accounts can be rejected at any time. Accounts created using live-mode keys may only be rejected once all balances are zero.
     */
    reject(
      id: string,
      params: AccountRejectParams,
      options?: HeaderOptions
    ): Promise<Account>;

    /**
     * Retrieves the details of an account.
     */
    retrieve(
      params?: AccountRetrieveParams,
      options?: HeaderOptions
    ): Promise<Account>;

    /**
     * Updates a connected [Express or Custom account](https://stripe.com/docs/connect/accounts) by setting the values of the parameters passed. Any parameters not provided are left unchanged. Most parameters can be changed only for Custom accounts. (These are marked Custom Only below.) Parameters marked Custom and Express are supported by both account types.
     *
     * To update your own account, use the [Dashboard](https://dashboard.stripe.com/account). Refer to our [Connect](https://stripe.com/docs/connect/updating-accounts) documentation to learn more about updating accounts.
     */
    update(
      id: string,
      params?: AccountUpdateParams,
      options?: HeaderOptions
    ): Promise<Account>;

    /**
     * Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.
     */
    listCapabilities(
      id: string,
      params?: AccountListCapabilitiesParams,
      options?: HeaderOptions
    ): Promise<ListAccountCapability>;

    /**
     * Retrieves information about the specified Account Capability.
     */
    retrieveCapability(
      accountId: string,
      id: string,
      params?: AccountRetrieveCapabilityParams,
      options?: HeaderOptions
    ): Promise<Capability>;

    /**
     * Updates an existing Account Capability.
     */
    updateCapability(
      accountId: string,
      id: string,
      params?: AccountUpdateCapabilityParams,
      options?: HeaderOptions
    ): Promise<Capability>;

    /**
     * Create an external account for a given account.
     */
    createExternalAccount(
      id: string,
      params: AccountCreateExternalAccountParams,
      options?: HeaderOptions
    ): Promise<BankAccount | Card>;

    /**
     * Delete a specified external account for a given account.
     */
    deleteExternalAccount(
      accountId: string,
      id: string,
      params?: AccountDeleteExternalAccountParams,
      options?: HeaderOptions
    ): Promise<BankAccount | Card>;

    /**
     * List external accounts for an account.
     */
    listExternalAccounts(
      id: string,
      params?: AccountListExternalAccountsParams,
      options?: HeaderOptions
    ): Promise<ExternalAccountList>;

    /**
     * Retrieve a specified external account for a given account.
     */
    retrieveExternalAccount(
      accountId: string,
      id: string,
      params?: AccountRetrieveExternalAccountParams,
      options?: HeaderOptions
    ): Promise<BankAccount | Card>;

    /**
     * Updates the metadata, account holder name, and account holder type of a bank account belonging to a [Custom account](https://stripe.com/docs/connect/custom-accounts), and optionally sets it as the default for its currency. Other bank account details are not editable by design.
     * You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.
     */
    updateExternalAccount(
      accountId: string,
      id: string,
      params?: AccountUpdateExternalAccountParams,
      options?: HeaderOptions
    ): Promise<BankAccount | Card>;

    /**
     * Creates a single-use login link for an Express account to access their Stripe dashboard.
     *
     * You may only create login links for [Express accounts](https://stripe.com/docs/connect/express-accounts) connected to your platform.
     */
    createLoginLink(
      id: string,
      params?: AccountCreateLoginLinkParams,
      options?: HeaderOptions
    ): Promise<LoginLink>;

    /**
     * Creates a new person.
     */
    createPerson(
      id: string,
      params?: AccountCreatePersonParams,
      options?: HeaderOptions
    ): Promise<Person>;

    /**
     * Deletes an existing person's relationship to the account's legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the account_opener. If your integration is using the executive parameter, you cannot delete the only verified executive on file.
     */
    deletePerson(
      accountId: string,
      id: string,
      params?: AccountDeletePersonParams,
      options?: HeaderOptions
    ): Promise<DeletedPerson>;

    /**
     * Returns a list of people associated with the account's legal entity. The people are returned sorted by creation date, with the most recent people appearing first.
     */
    listPersons(
      id: string,
      params?: AccountListPersonsParams,
      options?: HeaderOptions
    ): Promise<ApiList<Person>>;

    /**
     * Retrieves an existing person.
     */
    retrievePerson(
      accountId: string,
      id: string,
      params?: AccountRetrievePersonParams,
      options?: HeaderOptions
    ): Promise<Person>;

    /**
     * Updates an existing person.
     */
    updatePerson(
      accountId: string,
      id: string,
      params?: AccountUpdatePersonParams,
      options?: HeaderOptions
    ): Promise<Person>;
  }
}