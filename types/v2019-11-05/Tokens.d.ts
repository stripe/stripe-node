declare namespace Stripe {
  /**
   * The Token object.
   */
  interface Token {
    bank_account?: BankAccount;

    card?: Card;

    /**
     * IP address of the client that generated the token.
     */
    client_ip?: string | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * Email of the user, whose token is created during Stripe Checkout. This field is non-standard, and maybe removed in the future.
     */
    email?: string;

    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'token';

    /**
     * Type of the token: `account`, `bank_account`, `card`, or `pii`.
     */
    type?: string;

    /**
     * Whether this token has already been used (tokens can be used only once).
     */
    used?: boolean;
  }

  /**
   * Creates a single-use token that represents a bank account's details.
   * This token can be used with any API method in place of a bank account dictionary. This token can be used only once, by attaching it to a [Custom account](https://stripe.com/docs/api#accounts).
   */
  interface TokenCreateParams {
    /**
     * The bank account this token will represent.
     */
    bank_account?: token_create_bank_account;

    card?: credit_card_specs | string;

    /**
     * The customer (owned by the application's account) for which to create a token. For use only with [Stripe Connect](https://stripe.com/docs/connect). Also, this can be used only with an [OAuth access token](https://stripe.com/docs/connect/standard-accounts) or [Stripe-Account header](https://stripe.com/docs/connect/authentication). For more details, see [Cloning Saved Payment Methods](https://stripe.com/docs/connect/cloning-saved-payment-methods).
     */
    customer?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Information for the person this token will represent.
     */
    person?: person_token_specs;

    /**
     * The PII this token will represent.
     */
    pii?: pii_token_specs;
  }

  /**
   * Retrieves the token with the given ID.
   */
  interface TokenRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  class TokensResource {
    /**
     * Creates a single-use token that represents a bank account's details.
     * This token can be used with any API method in place of a bank account dictionary. This token can be used only once, by attaching it to a [Custom account](https://stripe.com/docs/api#accounts).
     */
    create(params?: TokenCreateParams, options?: HeaderOptions): Promise<Token>;

    /**
     * Retrieves the token with the given ID.
     */
    retrieve(
      id: string,
      params?: TokenRetrieveParams,
      options?: HeaderOptions
    ): Promise<Token>;
  }
}