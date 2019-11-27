declare namespace Stripe {
  /**
   * The Company object.
   */
  interface Company {
    address?: Address;

    /**
     * The Kana variation of the company's primary address (Japan only).
     */
    address_kana?: JapanAddress | null;

    /**
     * The Kanji variation of the company's primary address (Japan only).
     */
    address_kanji?: JapanAddress | null;

    /**
     * Whether the company's directors have been provided. This Boolean will be `true` if you've manually indicated that all directors are provided via [the `directors_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-directors_provided).
     */
    directors_provided?: boolean;

    /**
     * The company's legal name.
     */
    name?: string | null;

    /**
     * The Kana variation of the company's legal name (Japan only).
     */
    name_kana?: string | null;

    /**
     * The Kanji variation of the company's legal name (Japan only).
     */
    name_kanji?: string | null;

    /**
     * Whether the company's owners have been provided. This Boolean will be `true` if you've manually indicated that all owners are provided via [the `owners_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-owners_provided), or if Stripe determined that all owners were provided. Stripe determines ownership requirements using both the number of owners provided and their total percent ownership (calculated by adding the `percent_ownership` of each owner together).
     */
    owners_provided?: boolean;

    /**
     * The company's phone number (used for verification).
     */
    phone?: string | null;

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
    verification?: Verification | null;
  }
}