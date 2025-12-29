// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {Customer} from './Customers.js';
import {SetupAttempt} from './SetupAttempts.js';
import {Charge} from './Charges.js';
import {Address} from '../shared.js';
import {RequestOptions, Response} from '../lib.js';
const stripeMethod = StripeResource.method;
export class ConfirmationTokenResource extends StripeResource {
  /**
   * Retrieves an existing ConfirmationToken object
   */
  retrieve(
    id: string,
    params?: ConfirmationTokenRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ConfirmationToken>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<ConfirmationToken>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/confirmation_tokens/{confirmation_token}',
    }).call(this, ...args);
  }
}
export interface ConfirmationToken {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'confirmation_token';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Time at which this ConfirmationToken expires and can no longer be used to confirm a PaymentIntent or SetupIntent.
   */
  expires_at: number | null;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Data used for generating a Mandate.
   */
  mandate_data?: ConfirmationToken.MandateData | null;

  /**
   * ID of the PaymentIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used.
   */
  payment_intent: string | null;

  /**
   * Payment-method-specific configuration for this ConfirmationToken.
   */
  payment_method_options: ConfirmationToken.PaymentMethodOptions | null;

  /**
   * Payment details collected by the Payment Element, used to create a PaymentMethod when a PaymentIntent or SetupIntent is confirmed with this ConfirmationToken.
   */
  payment_method_preview: ConfirmationToken.PaymentMethodPreview | null;

  /**
   * Return URL used to confirm the Intent.
   */
  return_url: string | null;

  /**
   * Indicates that you intend to make future payments with this ConfirmationToken's payment method.
   *
   * The presence of this property will [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete.
   */
  setup_future_usage: ConfirmationToken.SetupFutureUsage | null;

  /**
   * ID of the SetupIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used.
   */
  setup_intent: string | null;

  /**
   * Shipping information collected on this ConfirmationToken.
   */
  shipping: ConfirmationToken.Shipping | null;

  /**
   * Indicates whether the Stripe SDK is used to handle confirmation flow. Defaults to `true` on ConfirmationToken.
   */
  use_stripe_sdk: boolean;
}
export namespace ConfirmationToken {
  export interface MandateData {
    /**
     * This hash contains details about the customer acceptance of the Mandate.
     */
    customer_acceptance: MandateData.CustomerAcceptance;
  }

  export interface PaymentMethodOptions {
    /**
     * This hash contains the card payment method options.
     */
    card: PaymentMethodOptions.Card | null;
  }

  export interface PaymentMethodPreview {
    acss_debit?: PaymentMethodPreview.AcssDebit;

    affirm?: PaymentMethodPreview.Affirm;

    afterpay_clearpay?: PaymentMethodPreview.AfterpayClearpay;

    alipay?: PaymentMethodPreview.Alipay;

    /**
     * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to “unspecified”.
     */
    allow_redisplay?: PaymentMethodPreview.AllowRedisplay;

    alma?: PaymentMethodPreview.Alma;

    amazon_pay?: PaymentMethodPreview.AmazonPay;

    au_becs_debit?: PaymentMethodPreview.AuBecsDebit;

    bacs_debit?: PaymentMethodPreview.BacsDebit;

    bancontact?: PaymentMethodPreview.Bancontact;

    billie?: PaymentMethodPreview.Billie;

    billing_details: PaymentMethodPreview.BillingDetails;

    blik?: PaymentMethodPreview.Blik;

    boleto?: PaymentMethodPreview.Boleto;

    card?: PaymentMethodPreview.Card;

    card_present?: PaymentMethodPreview.CardPresent;

    cashapp?: PaymentMethodPreview.Cashapp;

    crypto?: PaymentMethodPreview.Crypto;

    /**
     * The ID of the Customer to which this PaymentMethod is saved. This will not be set when the PaymentMethod has not been saved to a Customer.
     */
    customer: string | Customer | null;

    customer_account: string | null;

    customer_balance?: PaymentMethodPreview.CustomerBalance;

    eps?: PaymentMethodPreview.Eps;

    fpx?: PaymentMethodPreview.Fpx;

    giropay?: PaymentMethodPreview.Giropay;

    grabpay?: PaymentMethodPreview.Grabpay;

    ideal?: PaymentMethodPreview.Ideal;

    interac_present?: PaymentMethodPreview.InteracPresent;

    kakao_pay?: PaymentMethodPreview.KakaoPay;

    klarna?: PaymentMethodPreview.Klarna;

    konbini?: PaymentMethodPreview.Konbini;

    kr_card?: PaymentMethodPreview.KrCard;

    link?: PaymentMethodPreview.Link;

    mb_way?: PaymentMethodPreview.MbWay;

    mobilepay?: PaymentMethodPreview.Mobilepay;

    multibanco?: PaymentMethodPreview.Multibanco;

    naver_pay?: PaymentMethodPreview.NaverPay;

    nz_bank_account?: PaymentMethodPreview.NzBankAccount;

    oxxo?: PaymentMethodPreview.Oxxo;

    p24?: PaymentMethodPreview.P24;

    pay_by_bank?: PaymentMethodPreview.PayByBank;

    payco?: PaymentMethodPreview.Payco;

    paynow?: PaymentMethodPreview.Paynow;

    paypal?: PaymentMethodPreview.Paypal;

    payto?: PaymentMethodPreview.Payto;

    pix?: PaymentMethodPreview.Pix;

    promptpay?: PaymentMethodPreview.Promptpay;

    revolut_pay?: PaymentMethodPreview.RevolutPay;

    samsung_pay?: PaymentMethodPreview.SamsungPay;

    satispay?: PaymentMethodPreview.Satispay;

    sepa_debit?: PaymentMethodPreview.SepaDebit;

    sofort?: PaymentMethodPreview.Sofort;

    swish?: PaymentMethodPreview.Swish;

    twint?: PaymentMethodPreview.Twint;

    /**
     * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
     */
    type: PaymentMethodPreview.Type;

    us_bank_account?: PaymentMethodPreview.UsBankAccount;

    wechat_pay?: PaymentMethodPreview.WechatPay;

    zip?: PaymentMethodPreview.Zip;
  }

  export type SetupFutureUsage = 'off_session' | 'on_session';

  export interface Shipping {
    address: Address;

    /**
     * Recipient name.
     */
    name: string;

    /**
     * Recipient phone (including extension).
     */
    phone: string | null;
  }

  export namespace MandateData {
    export interface CustomerAcceptance {
      /**
       * If this is a Mandate accepted online, this hash contains details about the online acceptance.
       */
      online: CustomerAcceptance.Online | null;

      /**
       * The type of customer acceptance information included with the Mandate.
       */
      type: string;
    }

    export namespace CustomerAcceptance {
      export interface Online {
        /**
         * The IP address from which the Mandate was accepted by the customer.
         */
        ip_address: string | null;

        /**
         * The user agent of the browser from which the Mandate was accepted by the customer.
         */
        user_agent: string | null;
      }
    }
  }

  export namespace PaymentMethodOptions {
    export interface Card {
      /**
       * The `cvc_update` Token collected from the Payment Element.
       */
      cvc_token: string | null;

      /**
       * Installment configuration for payments.
       */
      installments?: Card.Installments;
    }

    export namespace Card {
      export interface Installments {
        plan?: Installments.Plan;
      }

      export namespace Installments {
        export interface Plan {
          /**
           * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
           */
          count: number | null;

          /**
           * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
           * One of `month`.
           */
          interval: 'month' | null;

          /**
           * Type of installment plan, one of `fixed_count`, `bonus`, or `revolving`.
           */
          type: Plan.Type;
        }

        export namespace Plan {
          export type Type = 'bonus' | 'fixed_count' | 'revolving';
        }
      }
    }
  }

  export namespace PaymentMethodPreview {
    export interface AcssDebit {
      /**
       * Name of the bank associated with the bank account.
       */
      bank_name: string | null;

      /**
       * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
       */
      fingerprint: string | null;

      /**
       * Institution number of the bank account.
       */
      institution_number: string | null;

      /**
       * Last four digits of the bank account number.
       */
      last4: string | null;

      /**
       * Transit number of the bank account.
       */
      transit_number: string | null;
    }

    export interface Affirm {}

    export interface AfterpayClearpay {}

    export interface Alipay {}

    export type AllowRedisplay = 'always' | 'limited' | 'unspecified';

    export interface Alma {}

    export interface AmazonPay {}

    export interface AuBecsDebit {
      /**
       * Six-digit number identifying bank and branch associated with this bank account.
       */
      bsb_number: string | null;

      /**
       * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
       */
      fingerprint: string | null;

      /**
       * Last four digits of the bank account number.
       */
      last4: string | null;
    }

    export interface BacsDebit {
      /**
       * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
       */
      fingerprint: string | null;

      /**
       * Last four digits of the bank account number.
       */
      last4: string | null;

      /**
       * Sort code of the bank account. (e.g., `10-20-30`)
       */
      sort_code: string | null;
    }

    export interface Bancontact {}

    export interface Billie {}

    export interface BillingDetails {
      /**
       * Billing address.
       */
      address: Address | null;

      /**
       * Email address.
       */
      email: string | null;

      /**
       * Full name.
       */
      name: string | null;

      /**
       * Billing phone number (including extension).
       */
      phone: string | null;

      /**
       * Taxpayer identification number. Used only for transactions between LATAM buyers and non-LATAM sellers.
       */
      tax_id: string | null;
    }

    export interface Blik {}

    export interface Boleto {
      /**
       * Uniquely identifies the customer tax id (CNPJ or CPF)
       */
      tax_id: string;
    }

    export interface Card {
      /**
       * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
       */
      brand: string;

      /**
       * Checks on Card address and CVC if provided.
       */
      checks: Card.Checks | null;

      /**
       * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
       */
      country: string | null;

      /**
       * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
       */
      description?: string | null;

      /**
       * The brand to use when displaying the card, this accounts for customer's brand choice on dual-branded cards. Can be `american_express`, `cartes_bancaires`, `diners_club`, `discover`, `eftpos_australia`, `interac`, `jcb`, `mastercard`, `union_pay`, `visa`, or `other` and may contain more values in the future.
       */
      display_brand: string | null;

      /**
       * Two-digit number representing the card's expiration month.
       */
      exp_month: number;

      /**
       * Four-digit number representing the card's expiration year.
       */
      exp_year: number;

      /**
       * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
       *
       * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
       */
      fingerprint?: string | null;

      /**
       * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
       */
      funding: string;

      /**
       * Details of the original PaymentMethod that created this object.
       */
      generated_from: Card.GeneratedFrom | null;

      /**
       * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
       */
      iin?: string | null;

      /**
       * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
       */
      issuer?: string | null;

      /**
       * The last four digits of the card.
       */
      last4: string;

      /**
       * Contains information about card networks that can be used to process the payment.
       */
      networks: Card.Networks | null;

      /**
       * Status of a card based on the card issuer.
       */
      regulated_status: Card.RegulatedStatus | null;

      /**
       * Contains details on how this Card may be used for 3D Secure authentication.
       */
      three_d_secure_usage: Card.ThreeDSecureUsage | null;

      /**
       * If this Card is part of a card wallet, this contains the details of the card wallet.
       */
      wallet: Card.Wallet | null;
    }

    export interface CardPresent {
      /**
       * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
       */
      brand: string | null;

      /**
       * The [product code](https://stripe.com/docs/card-product-codes) that identifies the specific program or product associated with a card.
       */
      brand_product: string | null;

      /**
       * The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay.
       */
      cardholder_name: string | null;

      /**
       * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
       */
      country: string | null;

      /**
       * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
       */
      description?: string | null;

      /**
       * Two-digit number representing the card's expiration month.
       */
      exp_month: number;

      /**
       * Four-digit number representing the card's expiration year.
       */
      exp_year: number;

      /**
       * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
       *
       * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
       */
      fingerprint: string | null;

      /**
       * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
       */
      funding: string | null;

      /**
       * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
       */
      iin?: string | null;

      /**
       * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
       */
      issuer?: string | null;

      /**
       * The last four digits of the card.
       */
      last4: string | null;

      /**
       * Contains information about card networks that can be used to process the payment.
       */
      networks: CardPresent.Networks | null;

      /**
       * Details about payment methods collected offline.
       */
      offline: CardPresent.Offline | null;

      /**
       * The languages that the issuing bank recommends using for localizing any customer-facing text, as read from the card. Referenced from EMV tag 5F2D, data encoded on the card's chip.
       */
      preferred_locales: Array<string> | null;

      /**
       * How card details were read in this transaction.
       */
      read_method: CardPresent.ReadMethod | null;

      wallet?: CardPresent.Wallet;
    }

    export interface Cashapp {
      /**
       * A unique and immutable identifier assigned by Cash App to every buyer.
       */
      buyer_id: string | null;

      /**
       * A public identifier for buyers using Cash App.
       */
      cashtag: string | null;
    }

    export interface Crypto {}

    export interface CustomerBalance {}

    export interface Eps {
      /**
       * The customer's bank. Should be one of `arzte_und_apotheker_bank`, `austrian_anadi_bank_ag`, `bank_austria`, `bankhaus_carl_spangler`, `bankhaus_schelhammer_und_schattera_ag`, `bawag_psk_ag`, `bks_bank_ag`, `brull_kallmus_bank_ag`, `btv_vier_lander_bank`, `capital_bank_grawe_gruppe_ag`, `deutsche_bank_ag`, `dolomitenbank`, `easybank_ag`, `erste_bank_und_sparkassen`, `hypo_alpeadriabank_international_ag`, `hypo_noe_lb_fur_niederosterreich_u_wien`, `hypo_oberosterreich_salzburg_steiermark`, `hypo_tirol_bank_ag`, `hypo_vorarlberg_bank_ag`, `hypo_bank_burgenland_aktiengesellschaft`, `marchfelder_bank`, `oberbank_ag`, `raiffeisen_bankengruppe_osterreich`, `schoellerbank_ag`, `sparda_bank_wien`, `volksbank_gruppe`, `volkskreditbank_ag`, or `vr_bank_braunau`.
       */
      bank: Eps.Bank | null;
    }

    export interface Fpx {
      /**
       * Account holder type, if provided. Can be one of `individual` or `company`.
       */
      account_holder_type: Fpx.AccountHolderType | null;

      /**
       * The customer's bank, if provided. Can be one of `affin_bank`, `agrobank`, `alliance_bank`, `ambank`, `bank_islam`, `bank_muamalat`, `bank_rakyat`, `bsn`, `cimb`, `hong_leong_bank`, `hsbc`, `kfh`, `maybank2u`, `ocbc`, `public_bank`, `rhb`, `standard_chartered`, `uob`, `deutsche_bank`, `maybank2e`, `pb_enterprise`, or `bank_of_china`.
       */
      bank: Fpx.Bank;
    }

    export interface Giropay {}

    export interface Grabpay {}

    export interface Ideal {
      /**
       * The customer's bank, if provided. Can be one of `abn_amro`, `asn_bank`, `bunq`, `buut`, `finom`, `handelsbanken`, `ing`, `knab`, `mollie`, `moneyou`, `n26`, `nn`, `rabobank`, `regiobank`, `revolut`, `sns_bank`, `triodos_bank`, `van_lanschot`, or `yoursafe`.
       */
      bank: Ideal.Bank | null;

      /**
       * The Bank Identifier Code of the customer's bank, if the bank was provided.
       */
      bic: Ideal.Bic | null;
    }

    export interface InteracPresent {
      /**
       * Card brand. Can be `interac`, `mastercard` or `visa`.
       */
      brand: string | null;

      /**
       * The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay.
       */
      cardholder_name: string | null;

      /**
       * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
       */
      country: string | null;

      /**
       * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
       */
      description?: string | null;

      /**
       * Two-digit number representing the card's expiration month.
       */
      exp_month: number;

      /**
       * Four-digit number representing the card's expiration year.
       */
      exp_year: number;

      /**
       * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
       *
       * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
       */
      fingerprint: string | null;

      /**
       * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
       */
      funding: string | null;

      /**
       * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
       */
      iin?: string | null;

      /**
       * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
       */
      issuer?: string | null;

      /**
       * The last four digits of the card.
       */
      last4: string | null;

      /**
       * Contains information about card networks that can be used to process the payment.
       */
      networks: InteracPresent.Networks | null;

      /**
       * The languages that the issuing bank recommends using for localizing any customer-facing text, as read from the card. Referenced from EMV tag 5F2D, data encoded on the card's chip.
       */
      preferred_locales: Array<string> | null;

      /**
       * How card details were read in this transaction.
       */
      read_method: InteracPresent.ReadMethod | null;
    }

    export interface KakaoPay {}

    export interface Klarna {
      /**
       * The customer's date of birth, if provided.
       */
      dob?: Klarna.Dob | null;
    }

    export interface Konbini {}

    export interface KrCard {
      /**
       * The local credit or debit card brand.
       */
      brand: KrCard.Brand | null;

      /**
       * The last four digits of the card. This may not be present for American Express cards.
       */
      last4: string | null;
    }

    export interface Link {
      /**
       * Account owner's email address.
       */
      email: string | null;

      /**
       * [Deprecated] This is a legacy parameter that no longer has any function.
       * @deprecated
       */
      persistent_token?: string;
    }

    export interface MbWay {}

    export interface Mobilepay {}

    export interface Multibanco {}

    export interface NaverPay {
      /**
       * Uniquely identifies this particular Naver Pay account. You can use this attribute to check whether two Naver Pay accounts are the same.
       */
      buyer_id: string | null;

      /**
       * Whether to fund this transaction with Naver Pay points or a card.
       */
      funding: NaverPay.Funding;
    }

    export interface NzBankAccount {
      /**
       * The name on the bank account. Only present if the account holder name is different from the name of the authorized signatory collected in the PaymentMethod's billing details.
       */
      account_holder_name: string | null;

      /**
       * The numeric code for the bank account's bank.
       */
      bank_code: string;

      /**
       * The name of the bank.
       */
      bank_name: string;

      /**
       * The numeric code for the bank account's bank branch.
       */
      branch_code: string;

      /**
       * Last four digits of the bank account number.
       */
      last4: string;

      /**
       * The suffix of the bank account number.
       */
      suffix: string | null;
    }

    export interface Oxxo {}

    export interface P24 {
      /**
       * The customer's bank, if provided.
       */
      bank: P24.Bank | null;
    }

    export interface PayByBank {}

    export interface Payco {}

    export interface Paynow {}

    export interface Paypal {
      /**
       * Two-letter ISO code representing the buyer's country. Values are provided by PayPal directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
       */
      country: string | null;

      /**
       * Owner's email. Values are provided by PayPal directly
       * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
       */
      payer_email: string | null;

      /**
       * PayPal account PayerID. This identifier uniquely identifies the PayPal customer.
       */
      payer_id: string | null;
    }

    export interface Payto {
      /**
       * Bank-State-Branch number of the bank account.
       */
      bsb_number: string | null;

      /**
       * Last four digits of the bank account number.
       */
      last4: string | null;

      /**
       * The PayID alias for the bank account.
       */
      pay_id: string | null;
    }

    export interface Pix {}

    export interface Promptpay {}

    export interface RevolutPay {}

    export interface SamsungPay {}

    export interface Satispay {}

    export interface SepaDebit {
      /**
       * Bank code of bank associated with the bank account.
       */
      bank_code: string | null;

      /**
       * Branch code of bank associated with the bank account.
       */
      branch_code: string | null;

      /**
       * Two-letter ISO code representing the country the bank account is located in.
       */
      country: string | null;

      /**
       * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
       */
      fingerprint: string | null;

      /**
       * Information about the object that generated this PaymentMethod.
       */
      generated_from: SepaDebit.GeneratedFrom | null;

      /**
       * Last four characters of the IBAN.
       */
      last4: string | null;
    }

    export interface Sofort {
      /**
       * Two-letter ISO code representing the country the bank account is located in.
       */
      country: string | null;
    }

    export interface Swish {}

    export interface Twint {}

    export type Type =
      | 'acss_debit'
      | 'affirm'
      | 'afterpay_clearpay'
      | 'alipay'
      | 'alma'
      | 'amazon_pay'
      | 'au_becs_debit'
      | 'bacs_debit'
      | 'bancontact'
      | 'billie'
      | 'blik'
      | 'boleto'
      | 'card'
      | 'card_present'
      | 'cashapp'
      | 'crypto'
      | 'custom'
      | 'customer_balance'
      | 'eps'
      | 'fpx'
      | 'giropay'
      | 'grabpay'
      | 'ideal'
      | 'interac_present'
      | 'kakao_pay'
      | 'klarna'
      | 'konbini'
      | 'kr_card'
      | 'link'
      | 'mb_way'
      | 'mobilepay'
      | 'multibanco'
      | 'naver_pay'
      | 'nz_bank_account'
      | 'oxxo'
      | 'p24'
      | 'pay_by_bank'
      | 'payco'
      | 'paynow'
      | 'paypal'
      | 'payto'
      | 'pix'
      | 'promptpay'
      | 'revolut_pay'
      | 'samsung_pay'
      | 'satispay'
      | 'sepa_debit'
      | 'sofort'
      | 'swish'
      | 'twint'
      | 'us_bank_account'
      | 'wechat_pay'
      | 'zip';

    export interface UsBankAccount {
      /**
       * Account holder type: individual or company.
       */
      account_holder_type: UsBankAccount.AccountHolderType | null;

      /**
       * Account type: checkings or savings. Defaults to checking if omitted.
       */
      account_type: UsBankAccount.AccountType | null;

      /**
       * The name of the bank.
       */
      bank_name: string | null;

      /**
       * The ID of the Financial Connections Account used to create the payment method.
       */
      financial_connections_account: string | null;

      /**
       * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
       */
      fingerprint: string | null;

      /**
       * Last four digits of the bank account number.
       */
      last4: string | null;

      /**
       * Contains information about US bank account networks that can be used.
       */
      networks: UsBankAccount.Networks | null;

      /**
       * Routing number of the bank account.
       */
      routing_number: string | null;

      /**
       * Contains information about the future reusability of this PaymentMethod.
       */
      status_details: UsBankAccount.StatusDetails | null;
    }

    export interface WechatPay {}

    export interface Zip {}

    export namespace Card {
      export interface Checks {
        /**
         * If a address line1 was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
         */
        address_line1_check: string | null;

        /**
         * If a address postal code was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
         */
        address_postal_code_check: string | null;

        /**
         * If a CVC was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
         */
        cvc_check: string | null;
      }

      export interface GeneratedFrom {
        /**
         * The charge that created this object.
         */
        charge: string | null;

        /**
         * Transaction-specific details of the payment method used in the payment.
         */
        payment_method_details: GeneratedFrom.PaymentMethodDetails | null;

        /**
         * The ID of the SetupAttempt that generated this PaymentMethod, if any.
         */
        setup_attempt: string | SetupAttempt | null;
      }

      export interface Networks {
        /**
         * All networks available for selection via [payment_method_options.card.network](https://docs.stripe.com/api/payment_intents/confirm#confirm_payment_intent-payment_method_options-card-network).
         */
        available: Array<string>;

        /**
         * The preferred network for co-branded cards. Can be `cartes_bancaires`, `mastercard`, `visa` or `invalid_preference` if requested network is not valid for the card.
         */
        preferred: string | null;
      }

      export type RegulatedStatus = 'regulated' | 'unregulated';

      export interface ThreeDSecureUsage {
        /**
         * Whether 3D Secure is supported on this card.
         */
        supported: boolean;
      }

      export interface Wallet {
        amex_express_checkout?: Wallet.AmexExpressCheckout;

        apple_pay?: Wallet.ApplePay;

        /**
         * (For tokenized numbers only.) The last four digits of the device account number.
         */
        dynamic_last4: string | null;

        google_pay?: Wallet.GooglePay;

        link?: Wallet.Link;

        masterpass?: Wallet.Masterpass;

        samsung_pay?: Wallet.SamsungPay;

        /**
         * The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, `visa_checkout`, or `link`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
         */
        type: Wallet.Type;

        visa_checkout?: Wallet.VisaCheckout;
      }

      export namespace GeneratedFrom {
        export interface PaymentMethodDetails {
          card_present?: PaymentMethodDetails.CardPresent;

          /**
           * The type of payment method transaction-specific details from the transaction that generated this `card` payment method. Always `card_present`.
           */
          type: string;
        }

        export namespace PaymentMethodDetails {
          export interface CardPresent {
            /**
             * The authorized amount
             */
            amount_authorized: number | null;

            /**
             * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
             */
            brand: string | null;

            /**
             * The [product code](https://stripe.com/docs/card-product-codes) that identifies the specific program or product associated with a card.
             */
            brand_product: string | null;

            /**
             * When using manual capture, a future timestamp after which the charge will be automatically refunded if uncaptured.
             */
            capture_before?: number;

            /**
             * The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay.
             */
            cardholder_name: string | null;

            /**
             * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
             */
            country: string | null;

            /**
             * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
             */
            description?: string | null;

            /**
             * Authorization response cryptogram.
             */
            emv_auth_data: string | null;

            /**
             * Two-digit number representing the card's expiration month.
             */
            exp_month: number;

            /**
             * Four-digit number representing the card's expiration year.
             */
            exp_year: number;

            /**
             * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
             *
             * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
             */
            fingerprint: string | null;

            /**
             * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
             */
            funding: string | null;

            /**
             * ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
             */
            generated_card: string | null;

            /**
             * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
             */
            iin?: string | null;

            /**
             * Whether this [PaymentIntent](https://docs.stripe.com/api/payment_intents) is eligible for incremental authorizations. Request support using [request_incremental_authorization_support](https://docs.stripe.com/api/payment_intents/create#create_payment_intent-payment_method_options-card_present-request_incremental_authorization_support).
             */
            incremental_authorization_supported: boolean;

            /**
             * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
             */
            issuer?: string | null;

            /**
             * The last four digits of the card.
             */
            last4: string | null;

            /**
             * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
             */
            network: string | null;

            /**
             * This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. This value will be present if it is returned by the financial network in the authorization response, and null otherwise.
             */
            network_transaction_id: string | null;

            /**
             * Details about payments collected offline.
             */
            offline: CardPresent.Offline | null;

            /**
             * Defines whether the authorized amount can be over-captured or not
             */
            overcapture_supported: boolean;

            /**
             * The languages that the issuing bank recommends using for localizing any customer-facing text, as read from the card. Referenced from EMV tag 5F2D, data encoded on the card's chip.
             */
            preferred_locales: Array<string> | null;

            /**
             * How card details were read in this transaction.
             */
            read_method: CardPresent.ReadMethod | null;

            /**
             * A collection of fields required to be displayed on receipts. Only required for EMV transactions.
             */
            receipt: CardPresent.Receipt | null;

            wallet?: CardPresent.Wallet;
          }

          export namespace CardPresent {
            export interface Offline {
              /**
               * Time at which the payment was collected while offline
               */
              stored_at: number | null;

              /**
               * The method used to process this payment method offline. Only deferred is allowed.
               */
              type: 'deferred' | null;
            }

            export type ReadMethod =
              | 'contact_emv'
              | 'contactless_emv'
              | 'contactless_magstripe_mode'
              | 'magnetic_stripe_fallback'
              | 'magnetic_stripe_track2';

            export interface Receipt {
              /**
               * The type of account being debited or credited
               */
              account_type?: Receipt.AccountType;

              /**
               * The Application Cryptogram, a unique value generated by the card to authenticate the transaction with issuers.
               */
              application_cryptogram: string | null;

              /**
               * The Application Identifier (AID) on the card used to determine which networks are eligible to process the transaction. Referenced from EMV tag 9F12, data encoded on the card's chip.
               */
              application_preferred_name: string | null;

              /**
               * Identifier for this transaction.
               */
              authorization_code: string | null;

              /**
               * EMV tag 8A. A code returned by the card issuer.
               */
              authorization_response_code: string | null;

              /**
               * Describes the method used by the cardholder to verify ownership of the card. One of the following: `approval`, `failure`, `none`, `offline_pin`, `offline_pin_and_signature`, `online_pin`, or `signature`.
               */
              cardholder_verification_method: string | null;

              /**
               * Similar to the application_preferred_name, identifying the applications (AIDs) available on the card. Referenced from EMV tag 84.
               */
              dedicated_file_name: string | null;

              /**
               * A 5-byte string that records the checks and validations that occur between the card and the terminal. These checks determine how the terminal processes the transaction and what risk tolerance is acceptable. Referenced from EMV Tag 95.
               */
              terminal_verification_results: string | null;

              /**
               * An indication of which steps were completed during the card read process. Referenced from EMV Tag 9B.
               */
              transaction_status_information: string | null;
            }

            export interface Wallet {
              /**
               * The type of mobile wallet, one of `apple_pay`, `google_pay`, `samsung_pay`, or `unknown`.
               */
              type: Wallet.Type;
            }

            export namespace Receipt {
              export type AccountType =
                | 'checking'
                | 'credit'
                | 'prepaid'
                | 'unknown';
            }

            export namespace Wallet {
              export type Type =
                | 'apple_pay'
                | 'google_pay'
                | 'samsung_pay'
                | 'unknown';
            }
          }
        }
      }

      export namespace Wallet {
        export interface AmexExpressCheckout {}

        export interface ApplePay {}

        export interface GooglePay {}

        export interface Link {}

        export interface Masterpass {
          /**
           * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          billing_address: Address | null;

          /**
           * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          email: string | null;

          /**
           * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          name: string | null;

          /**
           * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          shipping_address: Address | null;
        }

        export interface SamsungPay {}

        export type Type =
          | 'amex_express_checkout'
          | 'apple_pay'
          | 'google_pay'
          | 'link'
          | 'masterpass'
          | 'samsung_pay'
          | 'visa_checkout';

        export interface VisaCheckout {
          /**
           * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          billing_address: Address | null;

          /**
           * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          email: string | null;

          /**
           * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          name: string | null;

          /**
           * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          shipping_address: Address | null;
        }
      }
    }

    export namespace CardPresent {
      export interface Networks {
        /**
         * All networks available for selection via [payment_method_options.card.network](https://docs.stripe.com/api/payment_intents/confirm#confirm_payment_intent-payment_method_options-card-network).
         */
        available: Array<string>;

        /**
         * The preferred network for the card.
         */
        preferred: string | null;
      }

      export interface Offline {
        /**
         * Time at which the payment was collected while offline
         */
        stored_at: number | null;

        /**
         * The method used to process this payment method offline. Only deferred is allowed.
         */
        type: 'deferred' | null;
      }

      export type ReadMethod =
        | 'contact_emv'
        | 'contactless_emv'
        | 'contactless_magstripe_mode'
        | 'magnetic_stripe_fallback'
        | 'magnetic_stripe_track2';

      export interface Wallet {
        /**
         * The type of mobile wallet, one of `apple_pay`, `google_pay`, `samsung_pay`, or `unknown`.
         */
        type: Wallet.Type;
      }

      export namespace Wallet {
        export type Type =
          | 'apple_pay'
          | 'google_pay'
          | 'samsung_pay'
          | 'unknown';
      }
    }

    export namespace Eps {
      export type Bank =
        | 'arzte_und_apotheker_bank'
        | 'austrian_anadi_bank_ag'
        | 'bank_austria'
        | 'bankhaus_carl_spangler'
        | 'bankhaus_schelhammer_und_schattera_ag'
        | 'bawag_psk_ag'
        | 'bks_bank_ag'
        | 'brull_kallmus_bank_ag'
        | 'btv_vier_lander_bank'
        | 'capital_bank_grawe_gruppe_ag'
        | 'deutsche_bank_ag'
        | 'dolomitenbank'
        | 'easybank_ag'
        | 'erste_bank_und_sparkassen'
        | 'hypo_alpeadriabank_international_ag'
        | 'hypo_bank_burgenland_aktiengesellschaft'
        | 'hypo_noe_lb_fur_niederosterreich_u_wien'
        | 'hypo_oberosterreich_salzburg_steiermark'
        | 'hypo_tirol_bank_ag'
        | 'hypo_vorarlberg_bank_ag'
        | 'marchfelder_bank'
        | 'oberbank_ag'
        | 'raiffeisen_bankengruppe_osterreich'
        | 'schoellerbank_ag'
        | 'sparda_bank_wien'
        | 'volksbank_gruppe'
        | 'volkskreditbank_ag'
        | 'vr_bank_braunau';
    }

    export namespace Fpx {
      export type AccountHolderType = 'company' | 'individual';

      export type Bank =
        | 'affin_bank'
        | 'agrobank'
        | 'alliance_bank'
        | 'ambank'
        | 'bank_islam'
        | 'bank_muamalat'
        | 'bank_of_china'
        | 'bank_rakyat'
        | 'bsn'
        | 'cimb'
        | 'deutsche_bank'
        | 'hong_leong_bank'
        | 'hsbc'
        | 'kfh'
        | 'maybank2e'
        | 'maybank2u'
        | 'ocbc'
        | 'pb_enterprise'
        | 'public_bank'
        | 'rhb'
        | 'standard_chartered'
        | 'uob';
    }

    export namespace Ideal {
      export type Bank =
        | 'abn_amro'
        | 'asn_bank'
        | 'bunq'
        | 'buut'
        | 'finom'
        | 'handelsbanken'
        | 'ing'
        | 'knab'
        | 'mollie'
        | 'moneyou'
        | 'n26'
        | 'nn'
        | 'rabobank'
        | 'regiobank'
        | 'revolut'
        | 'sns_bank'
        | 'triodos_bank'
        | 'van_lanschot'
        | 'yoursafe';

      export type Bic =
        | 'ABNANL2A'
        | 'ASNBNL21'
        | 'BITSNL2A'
        | 'BUNQNL2A'
        | 'BUUTNL2A'
        | 'FNOMNL22'
        | 'FVLBNL22'
        | 'HANDNL2A'
        | 'INGBNL2A'
        | 'KNABNL2H'
        | 'MLLENL2A'
        | 'MOYONL21'
        | 'NNBANL2G'
        | 'NTSBDEB1'
        | 'RABONL2U'
        | 'RBRBNL21'
        | 'REVOIE23'
        | 'REVOLT21'
        | 'SNSBNL2A'
        | 'TRIONL2U';
    }

    export namespace InteracPresent {
      export interface Networks {
        /**
         * All networks available for selection via [payment_method_options.card.network](https://docs.stripe.com/api/payment_intents/confirm#confirm_payment_intent-payment_method_options-card-network).
         */
        available: Array<string>;

        /**
         * The preferred network for the card.
         */
        preferred: string | null;
      }

      export type ReadMethod =
        | 'contact_emv'
        | 'contactless_emv'
        | 'contactless_magstripe_mode'
        | 'magnetic_stripe_fallback'
        | 'magnetic_stripe_track2';
    }

    export namespace Klarna {
      export interface Dob {
        /**
         * The day of birth, between 1 and 31.
         */
        day: number | null;

        /**
         * The month of birth, between 1 and 12.
         */
        month: number | null;

        /**
         * The four-digit year of birth.
         */
        year: number | null;
      }
    }

    export namespace KrCard {
      export type Brand =
        | 'bc'
        | 'citi'
        | 'hana'
        | 'hyundai'
        | 'jeju'
        | 'jeonbuk'
        | 'kakaobank'
        | 'kbank'
        | 'kdbbank'
        | 'kookmin'
        | 'kwangju'
        | 'lotte'
        | 'mg'
        | 'nh'
        | 'post'
        | 'samsung'
        | 'savingsbank'
        | 'shinhan'
        | 'shinhyup'
        | 'suhyup'
        | 'tossbank'
        | 'woori';
    }

    export namespace NaverPay {
      export type Funding = 'card' | 'points';
    }

    export namespace P24 {
      export type Bank =
        | 'alior_bank'
        | 'bank_millennium'
        | 'bank_nowy_bfg_sa'
        | 'bank_pekao_sa'
        | 'banki_spbdzielcze'
        | 'blik'
        | 'bnp_paribas'
        | 'boz'
        | 'citi_handlowy'
        | 'credit_agricole'
        | 'envelobank'
        | 'etransfer_pocztowy24'
        | 'getin_bank'
        | 'ideabank'
        | 'ing'
        | 'inteligo'
        | 'mbank_mtransfer'
        | 'nest_przelew'
        | 'noble_pay'
        | 'pbac_z_ipko'
        | 'plus_bank'
        | 'santander_przelew24'
        | 'tmobile_usbugi_bankowe'
        | 'toyota_bank'
        | 'velobank'
        | 'volkswagen_bank';
    }

    export namespace SepaDebit {
      export interface GeneratedFrom {
        /**
         * The ID of the Charge that generated this PaymentMethod, if any.
         */
        charge: string | Charge | null;

        /**
         * The ID of the SetupAttempt that generated this PaymentMethod, if any.
         */
        setup_attempt: string | SetupAttempt | null;
      }
    }

    export namespace UsBankAccount {
      export type AccountHolderType = 'company' | 'individual';

      export type AccountType = 'checking' | 'savings';

      export interface Networks {
        /**
         * The preferred network.
         */
        preferred: string | null;

        /**
         * All supported networks.
         */
        supported: Array<Networks.Supported>;
      }

      export interface StatusDetails {
        blocked?: StatusDetails.Blocked;
      }

      export namespace Networks {
        export type Supported = 'ach' | 'us_domestic_wire';
      }

      export namespace StatusDetails {
        export interface Blocked {
          /**
           * The ACH network code that resulted in this block.
           */
          network_code: Blocked.NetworkCode | null;

          /**
           * The reason why this PaymentMethod's fingerprint has been blocked
           */
          reason: Blocked.Reason | null;
        }

        export namespace Blocked {
          export type NetworkCode =
            | 'R02'
            | 'R03'
            | 'R04'
            | 'R05'
            | 'R07'
            | 'R08'
            | 'R10'
            | 'R11'
            | 'R16'
            | 'R20'
            | 'R29'
            | 'R31';

          export type Reason =
            | 'bank_account_closed'
            | 'bank_account_frozen'
            | 'bank_account_invalid_details'
            | 'bank_account_restricted'
            | 'bank_account_unusable'
            | 'debit_not_authorized'
            | 'tokenized_account_number_deactivated';
        }
      }
    }
  }
}
export interface ConfirmationTokenRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
