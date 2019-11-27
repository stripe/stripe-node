declare namespace Stripe {
  /**
   * The BusinessProfile object.
   */
  interface BusinessProfile {
    /**
     * The merchant category code for the account. MCCs are used to classify businesses based on the goods or services they provide.
     */
    mcc?: string | null;

    /**
     * The customer-facing business name.
     */
    name?: string | null;

    /**
     * Internal-only description of the product sold or service provided by the business. It's used by Stripe for risk and underwriting purposes.
     */
    product_description?: string | null;

    /**
     * A publicly available mailing address for sending support issues to.
     */
    support_address?: Address | null;

    /**
     * A publicly available email address for sending support issues to.
     */
    support_email?: string | null;

    /**
     * A publicly available phone number to call with support issues.
     */
    support_phone?: string | null;

    /**
     * A publicly available website for handling support issues.
     */
    support_url?: string | null;

    /**
     * The business's publicly available website.
     */
    url?: string | null;
  }
}