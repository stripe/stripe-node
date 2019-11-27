declare namespace Stripe {
  /**
   * The PlatformTaxFee object.
   */
  interface PlatformTaxFee {
    /**
     * The Connected account that incurred this charge.
     */
    account?: string;

    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'platform_tax_fee';

    /**
     * The payment object that caused this tax to be inflicted.
     */
    source_transaction?: string;

    /**
     * The type of tax (VAT).
     */
    type?: string;
  }
}