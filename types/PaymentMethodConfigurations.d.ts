// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * An object detailing payment method configurations.
     */
    interface PaymentMethodConfiguration {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'payment_method_configuration';

      acss_debit?: PaymentMethodConfiguration.AcssDebit;

      /**
       * Whether the configuration can be used for new payments.
       */
      active: boolean;

      affirm?: PaymentMethodConfiguration.Affirm;

      afterpay_clearpay?: PaymentMethodConfiguration.AfterpayClearpay;

      alipay?: PaymentMethodConfiguration.Alipay;

      apple_pay?: PaymentMethodConfiguration.ApplePay;

      /**
       * The Connect application associated with this configuration.
       */
      application: string | null;

      au_becs_debit?: PaymentMethodConfiguration.AuBecsDebit;

      bacs_debit?: PaymentMethodConfiguration.BacsDebit;

      bancontact?: PaymentMethodConfiguration.Bancontact;

      blik?: PaymentMethodConfiguration.Blik;

      boleto?: PaymentMethodConfiguration.Boleto;

      card?: PaymentMethodConfiguration.Card;

      cartes_bancaires?: PaymentMethodConfiguration.CartesBancaires;

      cashapp?: PaymentMethodConfiguration.Cashapp;

      eps?: PaymentMethodConfiguration.Eps;

      fpx?: PaymentMethodConfiguration.Fpx;

      giropay?: PaymentMethodConfiguration.Giropay;

      google_pay?: PaymentMethodConfiguration.GooglePay;

      grabpay?: PaymentMethodConfiguration.Grabpay;

      id_bank_transfer?: PaymentMethodConfiguration.IdBankTransfer;

      ideal?: PaymentMethodConfiguration.Ideal;

      /**
       * The default configuration is used whenever no payment method configuration is specified.
       */
      is_default: boolean;

      jcb?: PaymentMethodConfiguration.Jcb;

      klarna?: PaymentMethodConfiguration.Klarna;

      konbini?: PaymentMethodConfiguration.Konbini;

      link?: PaymentMethodConfiguration.Link;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      multibanco?: PaymentMethodConfiguration.Multibanco;

      /**
       * Configuration name.
       */
      name: string;

      netbanking?: PaymentMethodConfiguration.Netbanking;

      oxxo?: PaymentMethodConfiguration.Oxxo;

      p24?: PaymentMethodConfiguration.P24;

      /**
       * The configuration's parent configuration.
       */
      parent: string | null;

      pay_by_bank?: PaymentMethodConfiguration.PayByBank;

      paynow?: PaymentMethodConfiguration.Paynow;

      paypal?: PaymentMethodConfiguration.Paypal;

      promptpay?: PaymentMethodConfiguration.Promptpay;

      sepa_debit?: PaymentMethodConfiguration.SepaDebit;

      sofort?: PaymentMethodConfiguration.Sofort;

      upi?: PaymentMethodConfiguration.Upi;

      us_bank_account?: PaymentMethodConfiguration.UsBankAccount;

      wechat_pay?: PaymentMethodConfiguration.WechatPay;
    }

    namespace PaymentMethodConfiguration {
      interface AcssDebit {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: AcssDebit.DisplayPreference;
      }

      namespace AcssDebit {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Affirm {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Affirm.DisplayPreference;
      }

      namespace Affirm {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface AfterpayClearpay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: AfterpayClearpay.DisplayPreference;
      }

      namespace AfterpayClearpay {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Alipay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Alipay.DisplayPreference;
      }

      namespace Alipay {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface ApplePay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: ApplePay.DisplayPreference;
      }

      namespace ApplePay {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface AuBecsDebit {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: AuBecsDebit.DisplayPreference;
      }

      namespace AuBecsDebit {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface BacsDebit {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: BacsDebit.DisplayPreference;
      }

      namespace BacsDebit {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Bancontact {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Bancontact.DisplayPreference;
      }

      namespace Bancontact {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Blik {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Blik.DisplayPreference;
      }

      namespace Blik {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Boleto {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Boleto.DisplayPreference;
      }

      namespace Boleto {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Card {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Card.DisplayPreference;
      }

      namespace Card {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface CartesBancaires {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: CartesBancaires.DisplayPreference;
      }

      namespace CartesBancaires {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Cashapp {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Cashapp.DisplayPreference;
      }

      namespace Cashapp {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Eps {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Eps.DisplayPreference;
      }

      namespace Eps {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Fpx {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Fpx.DisplayPreference;
      }

      namespace Fpx {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Giropay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Giropay.DisplayPreference;
      }

      namespace Giropay {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface GooglePay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: GooglePay.DisplayPreference;
      }

      namespace GooglePay {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Grabpay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Grabpay.DisplayPreference;
      }

      namespace Grabpay {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface IdBankTransfer {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: IdBankTransfer.DisplayPreference;
      }

      namespace IdBankTransfer {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Ideal {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Ideal.DisplayPreference;
      }

      namespace Ideal {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Jcb {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Jcb.DisplayPreference;
      }

      namespace Jcb {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Klarna {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Klarna.DisplayPreference;
      }

      namespace Klarna {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Konbini {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Konbini.DisplayPreference;
      }

      namespace Konbini {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Link {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Link.DisplayPreference;
      }

      namespace Link {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Multibanco {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Multibanco.DisplayPreference;
      }

      namespace Multibanco {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Netbanking {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Netbanking.DisplayPreference;
      }

      namespace Netbanking {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Oxxo {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Oxxo.DisplayPreference;
      }

      namespace Oxxo {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface P24 {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: P24.DisplayPreference;
      }

      namespace P24 {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface PayByBank {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: PayByBank.DisplayPreference;
      }

      namespace PayByBank {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Paynow {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Paynow.DisplayPreference;
      }

      namespace Paynow {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Paypal {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Paypal.DisplayPreference;
      }

      namespace Paypal {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Promptpay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Promptpay.DisplayPreference;
      }

      namespace Promptpay {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface SepaDebit {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: SepaDebit.DisplayPreference;
      }

      namespace SepaDebit {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Sofort {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Sofort.DisplayPreference;
      }

      namespace Sofort {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Upi {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Upi.DisplayPreference;
      }

      namespace Upi {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface UsBankAccount {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: UsBankAccount.DisplayPreference;
      }

      namespace UsBankAccount {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface WechatPay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: WechatPay.DisplayPreference;
      }

      namespace WechatPay {
        interface DisplayPreference {
          /**
           * For child configurations, whether or not the account's preference will be observed. If `false`, the parent configuration's preference is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }
    }
  }
}
