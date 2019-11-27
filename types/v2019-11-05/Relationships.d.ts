declare namespace Stripe {
  /**
   * The Relationship object.
   */
  interface Relationship {
    /**
     * Whether the person is a director of the account's legal entity. Currently only required for accounts in the EU. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
     */
    director?: boolean | null;

    /**
     * Whether the person has significant responsibility to control, manage, or direct the organization.
     */
    executive?: boolean | null;

    /**
     * Whether the person is an owner of the account's legal entity.
     */
    owner?: boolean | null;

    /**
     * The percent owned by the person of the account's legal entity.
     */
    percent_ownership?: number | null;

    /**
     * Whether the person is authorized as the primary representative of the account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
     */
    representative?: boolean | null;

    /**
     * The person's title (e.g., CEO, Support Engineer).
     */
    title?: string | null;
  }
}