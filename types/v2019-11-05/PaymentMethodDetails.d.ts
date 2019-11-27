declare namespace Stripe {
  /**
   * The PaymentMethodDetails object.
   */
  interface PaymentMethodDetails {
    ach_credit_transfer?: AchCreditTransfer;

    ach_debit?: AchDebit;

    acss_debit?: AcssDebit;

    alipay?: Alipay;

    au_becs_debit?: AuBecsDebit;

    bancontact?: Bancontact;

    bitcoin?: Bitcoin;

    card?: Card;

    card_present?: CardPresent;

    eps?: Eps;

    giropay?: Giropay;

    ideal?: Ideal;

    klarna?: Klarna;

    multibanco?: Multibanco;

    p24?: P24;

    sepa_credit_transfer?: SepaCreditTransfer;

    sepa_debit?: SepaDebit;

    sofort?: Sofort;

    stripe_account?: StripeAccount;

    /**
     * The type of transaction-specific details of the payment method used in the payment, one of `ach_credit_transfer`, `ach_debit`, `alipay`, `bancontact`, `card`, `card_present`, `eps`, `giropay`, `ideal`, `klarna`, `multibanco`, `p24`, `sepa_debit`, `sofort`, `stripe_account`, or `wechat`.
     * An additional hash is included on `payment_method_details` with a name matching this value.
     * It contains information specific to the payment method.
     */
    type?: string;

    wechat?: Wechat;
  }
}