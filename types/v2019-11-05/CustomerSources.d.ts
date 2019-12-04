declare namespace Stripe {
  /**
   * When you create a new credit card, you must specify a customer or recipient on which to create it.
   *
   * If the card's owner has no default card, then the new card will become the default.
   * However, if the owner already has a default, then it will not change.
   * To change the default, you should [update the customer](https://stripe.com/docs/api#update_customer) to have a new default_source.
   */
  interface CustomerSourceCreateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A set of key-value pairs that you can attach to a card object. It can be useful for storing additional information about the card in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * Please refer to full [documentation](https://stripe.com/docs/api) instead.
     */
    source: string;
  }

  /**
   * Retrieve a specified source for a given customer.
   */
  interface CustomerSourceRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Update a specified source for a given customer.
   */
  interface CustomerSourceUpdateParams {
    /**
     * The name of the person or business that owns the bank account.
     */
    account_holder_name?: string;

    /**
     * The type of entity that holds the account. This can be either `individual` or `company`.
     */
    account_holder_type?: CustomerSourceUpdateParams.AccountHolderType;

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

    owner?: CustomerSourceUpdateParams.Owner;
  }

  namespace CustomerSourceUpdateParams {
    type AccountHolderType = 'company' | 'individual'

    interface Owner {
      /**
       * Owner's address.
       */
      address?: Owner.Address;

      /**
       * Owner's email address.
       */
      email?: string;

      /**
       * Owner's full name.
       */
      name?: string;

      /**
       * Owner's phone number.
       */
      phone?: string;
    }

    namespace Owner {
      interface Address {
        city?: string;

        country?: string;

        line1?: string;

        line2?: string;

        postal_code?: string;

        state?: string;
      }
    }
  }

  /**
   * List sources for a specified customer.
   */
  interface CustomerSourceListParams {
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
     * Filter sources according to a particular object type.
     */
    object?: string;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  /**
   * Delete a specified source for a given customer.
   */
  interface CustomerSourceDeleteParams {}

  /**
   * Verify a specified bank account for a given customer.
   */
  interface CustomerSourceVerifyParams {
    /**
     * Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.
     */
    amounts?: Array<number>;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}