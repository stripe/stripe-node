declare namespace Stripe {
  /**
   * Create an external account for a given account.
   */
  interface ExternalAccountCreateParams {
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
   * Retrieve a specified external account for a given account.
   */
  interface ExternalAccountRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates the metadata, account holder name, and account holder type of a bank account belonging to a [Custom account](https://stripe.com/docs/connect/custom-accounts), and optionally sets it as the default for its currency. Other bank account details are not editable by design.
   * You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.
   */
  interface ExternalAccountUpdateParams {
    /**
     * The name of the person or business that owns the bank account.
     */
    account_holder_name?: string;

    /**
     * The type of entity that holds the account. This can be either `individual` or `company`.
     */
    account_holder_type?: '' | ExternalAccountUpdateParams.AccountHolderType;

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

  namespace ExternalAccountUpdateParams {
    type AccountHolderType = 'company' | 'individual'
  }

  /**
   * List external accounts for an account.
   */
  interface ExternalAccountListParams {
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
   * Delete a specified external account for a given account.
   */
  interface ExternalAccountDeleteParams {}
}