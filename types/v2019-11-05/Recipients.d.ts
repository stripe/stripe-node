declare namespace Stripe {
  /**
   * The Recipient object.
   */
  interface Recipient {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'recipient';

    /**
     * Hash describing the current account on the recipient, if there is one.
     */
    active_account: BankAccount | null;

    cards: ApiList<Card> | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * The default card to use for creating transfers to this recipient.
     */
    default_card: string | Card | DeletedCard | null;

    deleted?: void;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description: string | null;

    email: string | null;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: {
      [key: string]: string;
    };

    /**
     * The ID of the [Custom account](https://stripe.com/docs/connect/custom-accounts) this recipient was migrated to. If set, the recipient can no longer be updated, nor can transfers be made to it: use the Custom account instead.
     */
    migrated_to: string | Account | DeletedAccount | null;

    /**
     * Full, legal name of the recipient.
     */
    name: string | null;

    rolled_back_from: string | Account | DeletedAccount;

    /**
     * Type of the recipient, one of `individual` or `corporation`.
     */
    type: string;

    /**
     * Whether the recipient has been verified. This field is non-standard, and maybe removed in the future
     */
    verified: boolean;
  }

  interface DeletedRecipient {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'recipient';

    /**
     * Always true for a deleted object
     */
    deleted: true;
  }

  /**
   * Creates a new Recipient object and verifies the recipient's identity.
   * Also verifies the recipient's bank account information or debit card, if either is provided.
   */
  interface RecipientCreateParams {
    /**
     * A bank account to attach to the recipient. You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/stripe-js), or a dictionary containing a user's bank account details, with the options described below.
     */
    bank_account?: string;

    /**
     * A U.S. Visa or MasterCard debit card (_not_ prepaid) to attach to the recipient. If the debit card is not valid, recipient creation will fail. You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/stripe-js), or a dictionary containing a user's debit card details, with the options described below. Although not all information is required, the extra info helps prevent fraud.
     */
    card?: string;

    /**
     * An arbitrary string which you can attach to a `Recipient` object. It is displayed alongside the recipient in the web interface.
     */
    description?: string;

    /**
     * The recipient's email address. It is displayed alongside the recipient in the web interface, and can be useful for searching and tracking.
     */
    email?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * The recipient's full, legal name. For type `individual`, should be in the format `First Last`, `First Middle Last`, or `First M Last` (no prefixes or suffixes). For `corporation`, the full, incorporated name.
     */
    name: string;

    /**
     * The recipient's tax ID, as a string. For type `individual`, the full SSN; for type `corporation`, the full EIN.
     */
    tax_id?: string;

    /**
     * Type of the recipient: either `individual` or `corporation`.
     */
    type: string;
  }

  /**
   * Retrieves the details of an existing recipient. You need only supply the unique recipient identifier that was returned upon recipient creation.
   */
  interface RecipientRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates the specified recipient by setting the values of the parameters passed.
   * Any parameters not provided will be left unchanged.
   *
   * If you update the name or tax ID, the identity verification will automatically be rerun.
   * If you update the bank account, the bank account validation will automatically be rerun.
   */
  interface RecipientUpdateParams {
    /**
     * A bank account to attach to the recipient. You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/stripe-js), or a dictionary containing a user's bank account details, with the options described below.
     */
    bank_account?: string;

    /**
     * A U.S. Visa or MasterCard debit card (not prepaid) to attach to the recipient. You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/stripe-js), or a dictionary containing a user's debit card details, with the options described below. Passing `card` will create a new card, make it the new recipient default card, and delete the old recipient default (if one exists). If you want to add additional debit cards instead of replacing the existing default, use the [card creation API](#create_card). Whenever you attach a card to a recipient, Stripe will automatically validate the debit card.
     */
    card?: string;

    /**
     * ID of the card to set as the recipient's new default for payouts.
     */
    default_card?: string;

    /**
     * An arbitrary string which you can attach to a `Recipient` object. It is displayed alongside the recipient in the web interface.
     */
    description?: string;

    /**
     * The recipient's email address. It is displayed alongside the recipient in the web interface, and can be useful for searching and tracking.
     */
    email?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * The recipient's full, legal name. For type `individual`, should be in the format `First Last`, `First Middle Last`, or `First M Last` (no prefixes or suffixes). For `corporation`, the full, incorporated name.
     */
    name?: string;

    /**
     * The recipient's tax ID, as a string. For type `individual`, the full SSN; for type `corporation`, the full EIN.
     */
    tax_id?: string;
  }

  /**
   * Returns a list of your recipients. The recipients are returned sorted by creation date, with the most recently created recipients appearing first.
   */
  interface RecipientListParams {
    created?: number | RecipientListParams.Created;

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

    type?: RecipientListParams.Type;

    /**
     * Only return recipients that are verified or unverified.
     */
    verified?: boolean;
  }

  namespace RecipientListParams {
    interface Created {
      /**
       * Minimum value to filter by (exclusive)
       */
      gt?: number;

      /**
       * Minimum value to filter by (inclusive)
       */
      gte?: number;

      /**
       * Maximum value to filter by (exclusive)
       */
      lt?: number;

      /**
       * Maximum value to filter by (inclusive)
       */
      lte?: number;
    }

    type Type = 'corporation' | 'individual'
  }

  /**
   * Permanently deletes a recipient. It cannot be undone.
   */
  interface RecipientDeleteParams {}

  class RecipientsResource {
    /**
     * Creates a new Recipient object and verifies the recipient's identity.
     * Also verifies the recipient's bank account information or debit card, if either is provided.
     */
    create(
      params: RecipientCreateParams,
      options?: RequestOptions
    ): Promise<Recipient>;

    /**
     * Retrieves the details of an existing recipient. You need only supply the unique recipient identifier that was returned upon recipient creation.
     */
    retrieve(
      id: string,
      params?: RecipientRetrieveParams,
      options?: RequestOptions
    ): Promise<Recipient>;
    retrieve(id: string, options?: RequestOptions): Promise<Recipient>;

    /**
     * Updates the specified recipient by setting the values of the parameters passed.
     * Any parameters not provided will be left unchanged.
     *
     * If you update the name or tax ID, the identity verification will automatically be rerun.
     * If you update the bank account, the bank account validation will automatically be rerun.
     */
    update(
      id: string,
      params?: RecipientUpdateParams,
      options?: RequestOptions
    ): Promise<Recipient>;

    /**
     * Returns a list of your recipients. The recipients are returned sorted by creation date, with the most recently created recipients appearing first.
     */
    list(
      params?: RecipientListParams,
      options?: RequestOptions
    ): ApiListPromise<Recipient>;
    list(options?: RequestOptions): ApiListPromise<Recipient>;

    /**
     * Permanently deletes a recipient. It cannot be undone.
     */
    del(
      id: string,
      params?: RecipientDeleteParams,
      options?: RequestOptions
    ): Promise<DeletedRecipient>;
    del(id: string, options?: RequestOptions): Promise<DeletedRecipient>;
  }
}