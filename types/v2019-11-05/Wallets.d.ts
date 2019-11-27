declare namespace Stripe {
  /**
   * The Wallet object.
   */
  interface Wallet {
    amex_express_checkout?: AmexExpressCheckout;

    apple_pay?: ApplePay;

    /**
     * (For tokenized numbers only.) The last four digits of the device account number.
     */
    dynamic_last4?: string | null;

    google_pay?: GooglePay;

    masterpass?: Masterpass;

    samsung_pay?: SamsungPay;

    /**
     * The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, or `visa_checkout`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
     */
    type?: Wallet.Type;

    visa_checkout?: VisaCheckout;
  }

  namespace Wallet {
    type Type =
      | 'amex_express_checkout'
      | 'apple_pay'
      | 'google_pay'
      | 'masterpass'
      | 'samsung_pay'
      | 'visa_checkout'
  }
}