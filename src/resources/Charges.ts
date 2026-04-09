// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {TransitBalance} from './TransitBalances.js';
import {Application} from './Applications.js';
import {ApplicationFee} from './ApplicationFees.js';
import {BalanceTransaction} from './BalanceTransactions.js';
import {Customer, DeletedCustomer} from './Customers.js';
import {Account} from './Accounts.js';
import {PaymentIntent} from './PaymentIntents.js';
import {Refund} from './Refunds.js';
import {Review} from './Reviews.js';
import {CustomerSource} from './CustomerSources.js';
import {Transfer} from './Transfers.js';
import {PaymentMethod} from './PaymentMethods.js';
import {Mandate} from './Mandates.js';
import {
  Emptyable,
  MetadataParam,
  AddressParam,
  Address,
  ShippingAddressParam,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../shared.js';
import {
  RequestOptions,
  ApiListPromise,
  Response,
  ApiList,
  ApiSearchResultPromise,
} from '../lib.js';

export class ChargeResource extends StripeResource {
  /**
   * Returns a list of charges you've previously created. The charges are returned in sorted order, with the most recent charges appearing first.
   */
  list(
    params?: ChargeListParams,
    options?: RequestOptions
  ): ApiListPromise<Charge> {
    return this._makeRequest('GET', '/v1/charges', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * This method is no longer recommended—use the [Payment Intents API](https://docs.stripe.com/docs/api/payment_intents)
   * to initiate a new payment instead. Confirmation of the PaymentIntent creates the Charge
   * object used to request payment.
   */
  create(
    params?: ChargeCreateParams,
    options?: RequestOptions
  ): Promise<Response<Charge>> {
    return this._makeRequest('POST', '/v1/charges', params, options) as any;
  }
  /**
   * Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.
   */
  retrieve(
    id: string,
    params?: ChargeRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Charge>> {
    return this._makeRequest(
      'GET',
      `/v1/charges/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   */
  update(
    id: string,
    params?: ChargeUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Charge>> {
    return this._makeRequest(
      'POST',
      `/v1/charges/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Search for charges you've previously created using Stripe's [Search Query Language](https://docs.stripe.com/docs/search#search-query-language).
   * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
   * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
   * to an hour behind during outages. Search functionality is not available to merchants in India.
   */
  search(
    params: ChargeSearchParams,
    options?: RequestOptions
  ): ApiSearchResultPromise<Charge> {
    return this._makeRequest('GET', '/v1/charges/search', params, options, {
      methodType: 'search',
    }) as any;
  }
  /**
   * Capture the payment of an existing, uncaptured charge that was created with the capture option set to false.
   *
   * Uncaptured payments expire a set number of days after they are created ([7 by default](https://docs.stripe.com/docs/charges/placing-a-hold)), after which they are marked as refunded and capture attempts will fail.
   *
   * Don't use this method to capture a PaymentIntent-initiated charge. Use [Capture a PaymentIntent](https://docs.stripe.com/docs/api/payment_intents/capture).
   */
  capture(
    id: string,
    params?: ChargeCaptureParams,
    options?: RequestOptions
  ): Promise<Response<Charge>> {
    return this._makeRequest(
      'POST',
      `/v1/charges/${id}/capture`,
      params,
      options
    ) as any;
  }
}
export interface Charge {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'charge';

  /**
   * Funds that are in transit and destined for another balance or another connected account.
   */
  allocated_funds?: TransitBalance;

  /**
   * Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://docs.stripe.com/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
   */
  amount: number;

  /**
   * Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made).
   */
  amount_captured: number;

  /**
   * Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued).
   */
  amount_refunded: number;

  /**
   * ID of the Connect application that created the charge.
   */
  application: string | Application | null;

  /**
   * The application fee (if any) for the charge. [See the Connect documentation](https://docs.stripe.com/connect/direct-charges#collect-fees) for details.
   */
  application_fee: string | ApplicationFee | null;

  /**
   * The amount of the application fee (if any) requested for the charge. [See the Connect documentation](https://docs.stripe.com/connect/direct-charges#collect-fees) for details.
   */
  application_fee_amount: number | null;

  /**
   * Authorization code on the charge.
   */
  authorization_code?: string;

  /**
   * ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes).
   */
  balance_transaction: string | BalanceTransaction | null;

  billing_details: Charge.BillingDetails;

  /**
   * The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. Allows you to see what the statement descriptor looks like after the static and dynamic portions are combined. This value only exists for card payments.
   */
  calculated_statement_descriptor: string | null;

  /**
   * If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured.
   */
  captured: boolean;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * ID of the customer this charge is for if one exists.
   */
  customer: string | Customer | DeletedCustomer | null;

  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description: string | null;

  /**
   * Whether the charge has been disputed.
   */
  disputed: boolean;

  /**
   * ID of the balance transaction that describes the reversal of the balance on your account due to payment failure.
   */
  failure_balance_transaction: string | BalanceTransaction | null;

  /**
   * Error code explaining reason for charge failure if available (see [the errors section](https://docs.stripe.com/error-codes) for a list of codes).
   */
  failure_code: string | null;

  /**
   * Message to user further explaining reason for charge failure if available.
   */
  failure_message: string | null;

  /**
   * Information on fraud assessments for the charge.
   */
  fraud_details: Charge.FraudDetails | null;

  level3?: Charge.Level3;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata;

  /**
   * The account (if any) the charge was made on behalf of without triggering an automatic transfer. See the [Connect documentation](https://docs.stripe.com/connect/separate-charges-and-transfers) for details.
   */
  on_behalf_of: string | Account | null;

  /**
   * Details about whether the payment was accepted, and why. See [understanding declines](https://docs.stripe.com/declines) for details.
   */
  outcome: Charge.Outcome | null;

  /**
   * `true` if the charge succeeded, or was successfully authorized for later capture.
   */
  paid: boolean;

  /**
   * ID of the PaymentIntent associated with this charge, if one exists.
   */
  payment_intent: string | PaymentIntent | null;

  /**
   * ID of the payment method used in this charge.
   */
  payment_method: string | null;

  /**
   * Details about the payment method at the time of the transaction.
   */
  payment_method_details: Charge.PaymentMethodDetails | null;

  presentment_details?: Charge.PresentmentDetails;

  /**
   * Options to configure Radar. See [Radar Session](https://docs.stripe.com/radar/radar-session) for more information.
   */
  radar_options?: Charge.RadarOptions;

  /**
   * This is the email address that the receipt for this charge was sent to.
   */
  receipt_email: string | null;

  /**
   * This is the transaction number that appears on email receipts sent for this charge. This attribute will be `null` until a receipt has been sent.
   */
  receipt_number: string | null;

  /**
   * This is the URL to view the receipt for this charge. The receipt is kept up-to-date to the latest state of the charge, including any refunds. If the charge is for an Invoice, the receipt will be stylized as an Invoice receipt.
   */
  receipt_url: string | null;

  /**
   * Whether the charge has been fully refunded. If the charge is only partially refunded, this attribute will still be false.
   */
  refunded: boolean;

  /**
   * A list of refunds that have been applied to the charge.
   */
  refunds?: ApiList<Refund> | null;

  /**
   * ID of the review associated with this charge if one exists.
   */
  review: string | Review | null;

  /**
   * Shipping information for the charge.
   */
  shipping: Charge.Shipping | null;

  /**
   * This is a legacy field that will be removed in the future. It contains the Source, Card, or BankAccount object used for the charge. For details about the payment method used for this charge, refer to `payment_method` or `payment_method_details` instead.
   */
  source: CustomerSource | null;

  /**
   * The transfer ID which created this charge. Only present if the charge came from another Stripe account. [See the Connect documentation](https://docs.stripe.com/connect/destination-charges) for details.
   */
  source_transfer: string | Transfer | null;

  /**
   * For a non-card charge, text that appears on the customer's statement as the statement descriptor. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
   *
   * For a card charge, this value is ignored unless you don't specify a `statement_descriptor_suffix`, in which case this value is used as the suffix.
   */
  statement_descriptor: string | null;

  /**
   * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement. If the account has no prefix value, the suffix is concatenated to the account's statement descriptor.
   */
  statement_descriptor_suffix: string | null;

  /**
   * The status of the payment is either `succeeded`, `pending`, or `failed`.
   */
  status: Charge.Status;

  /**
   * ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter).
   */
  transfer?: string | Transfer;

  /**
   * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://docs.stripe.com/connect/destination-charges) for details.
   */
  transfer_data: Charge.TransferData | null;

  /**
   * A string that identifies this transaction as part of a group. See the [Connect documentation](https://docs.stripe.com/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transfer_group: string | null;
}
export namespace Charge {
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

  export interface FraudDetails {
    /**
     * Assessments from Stripe. If set, the value is `fraudulent`.
     */
    stripe_report?: string;

    /**
     * Assessments reported by you. If set, possible values of are `safe` and `fraudulent`.
     */
    user_report?: string;
  }

  export interface Level3 {
    customer_reference?: string;

    line_items: Array<Level3.LineItem>;

    merchant_reference: string;

    shipping_address_zip?: string;

    shipping_amount?: number;

    shipping_from_zip?: string;
  }

  export interface Outcome {
    /**
     * An enumerated value providing a more detailed explanation on [how to proceed with an error](https://docs.stripe.com/declines#retrying-issuer-declines).
     */
    advice_code: Outcome.AdviceCode | null;

    /**
     * For charges declined by the network, a 2 digit code which indicates the advice returned by the network on how to proceed with an error.
     */
    network_advice_code: string | null;

    /**
     * For charges declined by the network, an alphanumeric code which indicates the reason the charge failed.
     */
    network_decline_code: string | null;

    /**
     * Possible values are `approved_by_network`, `declined_by_network`, `not_sent_to_network`, and `reversed_after_approval`. The value `reversed_after_approval` indicates the payment was [blocked by Stripe](https://docs.stripe.com/declines#blocked-payments) after bank authorization, and may temporarily appear as "pending" on a cardholder's statement.
     */
    network_status: string | null;

    /**
     * An enumerated value providing a more detailed explanation of the outcome's `type`. Charges blocked by Radar's default block rule have the value `highest_risk_level`. Charges placed in review by Radar's default review rule have the value `elevated_risk_level`. Charges blocked because the payment is unlikely to be authorized have the value `low_probability_of_authorization`. Charges authorized, blocked, or placed in review by custom rules have the value `rule`. See [understanding declines](https://docs.stripe.com/declines) for more details.
     */
    reason: string | null;

    /**
     * Stripe Radar's evaluation of the riskiness of the payment. Possible values for evaluated payments are `normal`, `elevated`, `highest`. For non-card payments, and card-based payments predating the public assignment of risk levels, this field will have the value `not_assessed`. In the event of an error in the evaluation, this field will have the value `unknown`. This field is only available with Radar.
     */
    risk_level?: string;

    /**
     * Stripe Radar's evaluation of the riskiness of the payment. Possible values for evaluated payments are between 0 and 100. For non-card payments, card-based payments predating the public assignment of risk scores, or in the event of an error during evaluation, this field will not be present. This field is only available with Radar for Fraud Teams.
     */
    risk_score?: number;

    /**
     * The ID of the Radar rule that matched the payment, if applicable.
     */
    rule?: string | Outcome.Rule;

    /**
     * A human-readable description of the outcome type and reason, designed for you (the recipient of the payment), not your customer.
     */
    seller_message: string | null;

    /**
     * Possible values are `authorized`, `manual_review`, `issuer_declined`, `blocked`, and `invalid`. See [understanding declines](https://docs.stripe.com/declines) and [Radar reviews](https://docs.stripe.com/radar/reviews) for details.
     */
    type: string;
  }

  export interface PaymentMethodDetails {
    ach_credit_transfer?: PaymentMethodDetails.AchCreditTransfer;

    ach_debit?: PaymentMethodDetails.AchDebit;

    acss_debit?: PaymentMethodDetails.AcssDebit;

    affirm?: PaymentMethodDetails.Affirm;

    afterpay_clearpay?: PaymentMethodDetails.AfterpayClearpay;

    alipay?: PaymentMethodDetails.Alipay;

    alma?: PaymentMethodDetails.Alma;

    amazon_pay?: PaymentMethodDetails.AmazonPay;

    au_becs_debit?: PaymentMethodDetails.AuBecsDebit;

    bacs_debit?: PaymentMethodDetails.BacsDebit;

    bancontact?: PaymentMethodDetails.Bancontact;

    billie?: PaymentMethodDetails.Billie;

    blik?: PaymentMethodDetails.Blik;

    boleto?: PaymentMethodDetails.Boleto;

    card?: PaymentMethodDetails.Card;

    card_present?: PaymentMethodDetails.CardPresent;

    cashapp?: PaymentMethodDetails.Cashapp;

    crypto?: PaymentMethodDetails.Crypto;

    customer_balance?: PaymentMethodDetails.CustomerBalance;

    eps?: PaymentMethodDetails.Eps;

    fpx?: PaymentMethodDetails.Fpx;

    giropay?: PaymentMethodDetails.Giropay;

    gopay?: PaymentMethodDetails.Gopay;

    grabpay?: PaymentMethodDetails.Grabpay;

    id_bank_transfer?: PaymentMethodDetails.IdBankTransfer;

    ideal?: PaymentMethodDetails.Ideal;

    interac_present?: PaymentMethodDetails.InteracPresent;

    kakao_pay?: PaymentMethodDetails.KakaoPay;

    klarna?: PaymentMethodDetails.Klarna;

    konbini?: PaymentMethodDetails.Konbini;

    kr_card?: PaymentMethodDetails.KrCard;

    link?: PaymentMethodDetails.Link;

    mb_way?: PaymentMethodDetails.MbWay;

    mobilepay?: PaymentMethodDetails.Mobilepay;

    multibanco?: PaymentMethodDetails.Multibanco;

    naver_pay?: PaymentMethodDetails.NaverPay;

    nz_bank_account?: PaymentMethodDetails.NzBankAccount;

    oxxo?: PaymentMethodDetails.Oxxo;

    p24?: PaymentMethodDetails.P24;

    pay_by_bank?: PaymentMethodDetails.PayByBank;

    payco?: PaymentMethodDetails.Payco;

    paynow?: PaymentMethodDetails.Paynow;

    paypal?: PaymentMethodDetails.Paypal;

    paypay?: PaymentMethodDetails.Paypay;

    payto?: PaymentMethodDetails.Payto;

    pix?: PaymentMethodDetails.Pix;

    promptpay?: PaymentMethodDetails.Promptpay;

    qris?: PaymentMethodDetails.Qris;

    rechnung?: PaymentMethodDetails.Rechnung;

    revolut_pay?: PaymentMethodDetails.RevolutPay;

    samsung_pay?: PaymentMethodDetails.SamsungPay;

    satispay?: PaymentMethodDetails.Satispay;

    sepa_credit_transfer?: PaymentMethodDetails.SepaCreditTransfer;

    sepa_debit?: PaymentMethodDetails.SepaDebit;

    shopeepay?: PaymentMethodDetails.Shopeepay;

    sofort?: PaymentMethodDetails.Sofort;

    stripe_account?: PaymentMethodDetails.StripeAccount;

    stripe_balance?: PaymentMethodDetails.StripeBalance;

    swish?: PaymentMethodDetails.Swish;

    twint?: PaymentMethodDetails.Twint;

    /**
     * The type of transaction-specific details of the payment method used in the payment. See [PaymentMethod.type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type) for the full list of possible types.
     * An additional hash is included on `payment_method_details` with a name matching this value.
     * It contains information specific to the payment method.
     */
    type: string;

    upi?: PaymentMethodDetails.Upi;

    us_bank_account?: PaymentMethodDetails.UsBankAccount;

    wechat?: PaymentMethodDetails.Wechat;

    wechat_pay?: PaymentMethodDetails.WechatPay;

    zip?: PaymentMethodDetails.Zip;
  }

  export interface PresentmentDetails {
    /**
     * Amount intended to be collected by this payment, denominated in `presentment_currency`.
     */
    presentment_amount: number;

    /**
     * Currency presented to the customer during payment.
     */
    presentment_currency: string;
  }

  export interface RadarOptions {
    /**
     * A [Radar Session](https://docs.stripe.com/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
     */
    session?: string;
  }

  export interface Shipping {
    address?: Address;

    /**
     * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
     */
    carrier?: string | null;

    /**
     * Recipient name.
     */
    name?: string;

    /**
     * Recipient phone (including extension).
     */
    phone?: string | null;

    /**
     * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
     */
    tracking_number?: string | null;
  }

  export type Status = 'failed' | 'pending' | 'succeeded';

  export interface TransferData {
    /**
     * The amount transferred to the destination account, if specified. By default, the entire charge amount is transferred to the destination account.
     */
    amount: number | null;

    /**
     * ID of an existing, connected Stripe account to transfer funds to if `transfer_data` was specified in the charge request.
     */
    destination: string | Account;
  }

  export namespace Level3 {
    export interface LineItem {
      discount_amount: number | null;

      product_code: string;

      product_description: string;

      quantity: number | null;

      tax_amount: number | null;

      unit_cost: number | null;
    }
  }

  export namespace Outcome {
    export type AdviceCode =
      | 'confirm_card_data'
      | 'do_not_try_again'
      | 'try_again_later';

    export interface Rule {
      /**
       * The action taken on the payment.
       */
      action: string;

      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * The predicate to evaluate the payment against.
       */
      predicate: string;
    }
  }

  export namespace PaymentMethodDetails {
    export interface AchCreditTransfer {
      /**
       * Account number to transfer funds to.
       */
      account_number: string | null;

      /**
       * Name of the bank associated with the routing number.
       */
      bank_name: string | null;

      /**
       * Routing transit number for the bank account to transfer funds to.
       */
      routing_number: string | null;

      /**
       * SWIFT code of the bank associated with the routing number.
       */
      swift_code: string | null;
    }

    export interface AchDebit {
      /**
       * Type of entity that holds the account. This can be either `individual` or `company`.
       */
      account_holder_type: AchDebit.AccountHolderType | null;

      /**
       * Name of the bank associated with the bank account.
       */
      bank_name: string | null;

      /**
       * Two-letter ISO code representing the country the bank account is located in.
       */
      country: string | null;

      /**
       * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
       */
      fingerprint: string | null;

      /**
       * Last four digits of the bank account number.
       */
      last4: string | null;

      /**
       * Routing transit number of the bank account.
       */
      routing_number: string | null;
    }

    export interface AcssDebit {
      /**
       * Name of the bank associated with the bank account.
       */
      bank_name: string | null;

      /**
       * Estimated date to debit the customer's bank account. A date string in YYYY-MM-DD format.
       */
      expected_debit_date?: string;

      /**
       * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
       */
      fingerprint: string | null;

      /**
       * Institution number of the bank account
       */
      institution_number: string | null;

      /**
       * Last four digits of the bank account number.
       */
      last4: string | null;

      /**
       * ID of the mandate used to make this payment.
       */
      mandate?: string;

      /**
       * Transit number of the bank account.
       */
      transit_number: string | null;
    }

    export interface Affirm {
      /**
       * ID of the [location](https://docs.stripe.com/api/terminal/locations) that this transaction's reader is assigned to.
       */
      location?: string;

      /**
       * ID of the [reader](https://docs.stripe.com/api/terminal/readers) this transaction was made on.
       */
      reader?: string;

      /**
       * The Affirm transaction ID associated with this payment.
       */
      transaction_id: string | null;
    }

    export interface AfterpayClearpay {
      /**
       * The Afterpay order ID associated with this payment intent.
       */
      order_id: string | null;

      /**
       * Order identifier shown to the merchant in Afterpay's online portal.
       */
      reference: string | null;
    }

    export interface Alipay {
      /**
       * Uniquely identifies this particular Alipay account. You can use this attribute to check whether two Alipay accounts are the same.
       */
      buyer_id?: string;

      /**
       * Uniquely identifies this particular Alipay account. You can use this attribute to check whether two Alipay accounts are the same.
       */
      fingerprint: string | null;

      /**
       * Transaction ID of this particular Alipay transaction.
       */
      transaction_id: string | null;
    }

    export interface Alma {
      installments?: Alma.Installments;

      /**
       * The Alma transaction ID associated with this payment.
       */
      transaction_id: string | null;
    }

    export interface AmazonPay {
      funding?: AmazonPay.Funding;

      /**
       * The Amazon Pay transaction ID associated with this payment.
       */
      transaction_id: string | null;
    }

    export interface AuBecsDebit {
      /**
       * Bank-State-Branch number of the bank account.
       */
      bsb_number: string | null;

      /**
       * Estimated date to debit the customer's bank account. A date string in YYYY-MM-DD format.
       */
      expected_debit_date?: string;

      /**
       * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
       */
      fingerprint: string | null;

      /**
       * Last four digits of the bank account number.
       */
      last4: string | null;

      /**
       * ID of the mandate used to make this payment.
       */
      mandate?: string;
    }

    export interface BacsDebit {
      /**
       * Estimated date to debit the customer's bank account. A date string in YYYY-MM-DD format.
       */
      expected_debit_date?: string;

      /**
       * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
       */
      fingerprint: string | null;

      /**
       * Last four digits of the bank account number.
       */
      last4: string | null;

      /**
       * ID of the mandate used to make this payment.
       */
      mandate: string | null;

      /**
       * Sort code of the bank account. (e.g., `10-20-30`)
       */
      sort_code: string | null;
    }

    export interface Bancontact {
      /**
       * Bank code of bank associated with the bank account.
       */
      bank_code: string | null;

      /**
       * Name of the bank associated with the bank account.
       */
      bank_name: string | null;

      /**
       * Bank Identifier Code of the bank associated with the bank account.
       */
      bic: string | null;

      /**
       * The ID of the SEPA Direct Debit PaymentMethod which was generated by this Charge.
       */
      generated_sepa_debit: string | PaymentMethod | null;

      /**
       * The mandate for the SEPA Direct Debit PaymentMethod which was generated by this Charge.
       */
      generated_sepa_debit_mandate: string | Mandate | null;

      /**
       * Last four characters of the IBAN.
       */
      iban_last4: string | null;

      /**
       * Preferred language of the Bancontact authorization page that the customer is redirected to.
       * Can be one of `en`, `de`, `fr`, or `nl`
       */
      preferred_language: Bancontact.PreferredLanguage | null;

      /**
       * Owner's verified full name. Values are verified or provided by Bancontact directly
       * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
       */
      verified_name: string | null;
    }

    export interface Billie {
      /**
       * The Billie transaction ID associated with this payment.
       */
      transaction_id: string | null;
    }

    export interface Blik {
      /**
       * A unique and immutable identifier assigned by BLIK to every buyer.
       */
      buyer_id: string | null;
    }

    export interface Boleto {
      /**
       * The tax ID of the customer (CPF for individuals consumers or CNPJ for businesses consumers)
       */
      tax_id: string;
    }

    export interface Card {
      /**
       * The authorized amount.
       */
      amount_authorized: number | null;

      /**
       * The latest amount intended to be authorized by this charge.
       */
      amount_requested?: number | null;

      /**
       * Authorization code on the charge.
       */
      authorization_code: string | null;

      benefits?: Card.Benefits;

      /**
       * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
       */
      brand: string | null;

      /**
       * When using manual capture, a future timestamp at which the charge will be automatically refunded if uncaptured.
       */
      capture_before?: number;

      /**
       * Check results by Card networks on Card address and CVC at time of payment.
       */
      checks: Card.Checks | null;

      /**
       * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
       */
      country: string | null;

      decremental_authorization?: Card.DecrementalAuthorization;

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

      extended_authorization?: Card.ExtendedAuthorization;

      /**
       * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
       *
       * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
       */
      fingerprint?: string | null;

      /**
       * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
       */
      funding: string | null;

      /**
       * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
       */
      iin?: string | null;

      incremental_authorization?: Card.IncrementalAuthorization;

      /**
       * Installment details for this payment.
       *
       * For more information, see the [installments integration guide](https://docs.stripe.com/payments/installments).
       */
      installments: Card.Installments | null;

      /**
       * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
       */
      issuer?: string | null;

      /**
       * The last four digits of the card.
       */
      last4: string | null;

      /**
       * ID of the mandate used to make this payment or created by it.
       */
      mandate: string | null;

      /**
       * True if this payment was marked as MOTO and out of scope for SCA.
       */
      moto?: boolean | null;

      multicapture?: Card.Multicapture;

      /**
       * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
       */
      network: string | null;

      /**
       * If this card has network token credentials, this contains the details of the network token credentials.
       */
      network_token?: Card.NetworkToken | null;

      /**
       * This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. This value will be present if it is returned by the financial network in the authorization response, and null otherwise.
       */
      network_transaction_id: string | null;

      overcapture?: Card.Overcapture;

      partial_authorization?: Card.PartialAuthorization;

      /**
       * Whether the PaymentIntent can be reauthorized or not.
       */
      reauthorization?: Card.Reauthorization | null;

      /**
       * The time at which the associated PaymentIntent will transition to a terminal state if it is not reauthorized.
       */
      reauthorize_before?: number | null;

      /**
       * Status of a card based on the card issuer.
       */
      regulated_status: Card.RegulatedStatus | null;

      /**
       * Populated if this transaction used 3D Secure authentication.
       */
      three_d_secure: Card.ThreeDSecure | null;

      /**
       * If this Card is part of a card wallet, this contains the details of the card wallet.
       */
      wallet: Card.Wallet | null;

      account_funding?: Card.AccountFunding;
    }

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
       * ID of the [location](https://docs.stripe.com/api/terminal/locations) that this transaction's reader is assigned to.
       */
      location?: string;

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
       * ID of the [reader](https://docs.stripe.com/api/terminal/readers) this transaction was made on.
       */
      reader?: string;

      /**
       * Whether the PaymentIntent can be reauthorized or not.
       */
      reauthorization?: CardPresent.Reauthorization | null;

      /**
       * The time at which the associated PaymentIntent will transition to a terminal state if it is not reauthorized.
       */
      reauthorize_before?: number | null;

      /**
       * A collection of fields required to be displayed on receipts. Only required for EMV transactions.
       */
      receipt: CardPresent.Receipt | null;

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

      /**
       * A unique and immutable identifier of payments assigned by Cash App
       */
      transaction_id: string | null;
    }

    export interface Crypto {
      /**
       * The wallet address of the customer.
       */
      buyer_address?: string;

      /**
       * The blockchain network that the transaction was sent on.
       */
      network?: Crypto.Network;

      /**
       * The token currency that the transaction was sent with.
       */
      token_currency?: Crypto.TokenCurrency;

      /**
       * The blockchain transaction hash of the crypto payment.
       */
      transaction_hash?: string;
    }

    export interface CustomerBalance {}

    export interface Eps {
      /**
       * The customer's bank. Should be one of `arzte_und_apotheker_bank`, `austrian_anadi_bank_ag`, `bank_austria`, `bankhaus_carl_spangler`, `bankhaus_schelhammer_und_schattera_ag`, `bawag_psk_ag`, `bks_bank_ag`, `brull_kallmus_bank_ag`, `btv_vier_lander_bank`, `capital_bank_grawe_gruppe_ag`, `deutsche_bank_ag`, `dolomitenbank`, `easybank_ag`, `erste_bank_und_sparkassen`, `hypo_alpeadriabank_international_ag`, `hypo_noe_lb_fur_niederosterreich_u_wien`, `hypo_oberosterreich_salzburg_steiermark`, `hypo_tirol_bank_ag`, `hypo_vorarlberg_bank_ag`, `hypo_bank_burgenland_aktiengesellschaft`, `marchfelder_bank`, `oberbank_ag`, `raiffeisen_bankengruppe_osterreich`, `schoellerbank_ag`, `sparda_bank_wien`, `volksbank_gruppe`, `volkskreditbank_ag`, or `vr_bank_braunau`.
       */
      bank: Eps.Bank | null;

      /**
       * Owner's verified full name. Values are verified or provided by EPS directly
       * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
       * EPS rarely provides this information so the attribute is usually empty.
       */
      verified_name: string | null;
    }

    export interface Fpx {
      /**
       * Account holder type, if provided. Can be one of `individual` or `company`.
       */
      account_holder_type: Fpx.AccountHolderType | null;

      /**
       * The customer's bank. Can be one of `affin_bank`, `agrobank`, `alliance_bank`, `ambank`, `bank_islam`, `bank_muamalat`, `bank_rakyat`, `bsn`, `cimb`, `hong_leong_bank`, `hsbc`, `kfh`, `maybank2u`, `ocbc`, `public_bank`, `rhb`, `standard_chartered`, `uob`, `deutsche_bank`, `maybank2e`, `pb_enterprise`, or `bank_of_china`.
       */
      bank: Fpx.Bank;

      /**
       * Unique transaction id generated by FPX for every request from the merchant
       */
      transaction_id: string | null;
    }

    export interface Giropay {
      /**
       * Bank code of bank associated with the bank account.
       */
      bank_code: string | null;

      /**
       * Name of the bank associated with the bank account.
       */
      bank_name: string | null;

      /**
       * Bank Identifier Code of the bank associated with the bank account.
       */
      bic: string | null;

      /**
       * Owner's verified full name. Values are verified or provided by Giropay directly
       * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
       * Giropay rarely provides this information so the attribute is usually empty.
       */
      verified_name: string | null;
    }

    export interface Gopay {}

    export interface Grabpay {
      /**
       * Unique transaction id generated by GrabPay
       */
      transaction_id: string | null;
    }

    export interface IdBankTransfer {
      /**
       * Account number of the bank account to transfer funds to.
       */
      account_number: string;

      /**
       * Bank where the account is located.
       */
      bank: IdBankTransfer.Bank;

      /**
       * Local bank code of the bank.
       */
      bank_code?: string;

      /**
       * Name of the bank associated with the bank account.
       */
      bank_name?: string;

      /**
       * Merchant name and billing details name, for the customer to check for the correct merchant when performing the bank transfer.
       */
      display_name?: string;
    }

    export interface Ideal {
      /**
       * The customer's bank. Can be one of `abn_amro`, `adyen`, `asn_bank`, `bunq`, `buut`, `finom`, `handelsbanken`, `ing`, `knab`, `mollie`, `moneyou`, `n26`, `nn`, `rabobank`, `regiobank`, `revolut`, `sns_bank`, `triodos_bank`, `van_lanschot`, or `yoursafe`.
       */
      bank: Ideal.Bank | null;

      /**
       * The Bank Identifier Code of the customer's bank.
       */
      bic: Ideal.Bic | null;

      /**
       * The ID of the SEPA Direct Debit PaymentMethod which was generated by this Charge.
       */
      generated_sepa_debit: string | PaymentMethod | null;

      /**
       * The mandate for the SEPA Direct Debit PaymentMethod which was generated by this Charge.
       */
      generated_sepa_debit_mandate: string | Mandate | null;

      /**
       * Last four characters of the IBAN.
       */
      iban_last4: string | null;

      /**
       * Unique transaction ID generated by iDEAL.
       */
      transaction_id: string | null;

      /**
       * Owner's verified full name. Values are verified or provided by iDEAL directly
       * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
       */
      verified_name: string | null;
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
       * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
       */
      issuer?: string | null;

      /**
       * The last four digits of the card.
       */
      last4: string | null;

      /**
       * ID of the [location](https://docs.stripe.com/api/terminal/locations) that this transaction's reader is assigned to.
       */
      location?: string;

      /**
       * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
       */
      network: string | null;

      /**
       * This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. This value will be present if it is returned by the financial network in the authorization response, and null otherwise.
       */
      network_transaction_id: string | null;

      /**
       * The languages that the issuing bank recommends using for localizing any customer-facing text, as read from the card. Referenced from EMV tag 5F2D, data encoded on the card's chip.
       */
      preferred_locales: Array<string> | null;

      /**
       * How card details were read in this transaction.
       */
      read_method: InteracPresent.ReadMethod | null;

      /**
       * ID of the [reader](https://docs.stripe.com/api/terminal/readers) this transaction was made on.
       */
      reader?: string;

      /**
       * A collection of fields required to be displayed on receipts. Only required for EMV transactions.
       */
      receipt: InteracPresent.Receipt | null;
    }

    export interface KakaoPay {
      /**
       * A unique identifier for the buyer as determined by the local payment processor.
       */
      buyer_id: string | null;

      /**
       * The Kakao Pay transaction ID associated with this payment.
       */
      transaction_id: string | null;
    }

    export interface Klarna {
      /**
       * The payer details for this transaction.
       */
      payer_details: Klarna.PayerDetails | null;

      /**
       * The Klarna payment method used for this transaction.
       * Can be one of `pay_later`, `pay_now`, `pay_with_financing`, or `pay_in_installments`
       */
      payment_method_category: string | null;

      /**
       * Preferred language of the Klarna authorization page that the customer is redirected to.
       * Can be one of `de-AT`, `en-AT`, `nl-BE`, `fr-BE`, `en-BE`, `de-DE`, `en-DE`, `da-DK`, `en-DK`, `es-ES`, `en-ES`, `fi-FI`, `sv-FI`, `en-FI`, `en-GB`, `en-IE`, `it-IT`, `en-IT`, `nl-NL`, `en-NL`, `nb-NO`, `en-NO`, `sv-SE`, `en-SE`, `en-US`, `es-US`, `fr-FR`, `en-FR`, `cs-CZ`, `en-CZ`, `ro-RO`, `en-RO`, `el-GR`, `en-GR`, `en-AU`, `en-NZ`, `en-CA`, `fr-CA`, `pl-PL`, `en-PL`, `pt-PT`, `en-PT`, `de-CH`, `fr-CH`, `it-CH`, or `en-CH`
       */
      preferred_locale: string | null;
    }

    export interface Konbini {
      /**
       * If the payment succeeded, this contains the details of the convenience store where the payment was completed.
       */
      store: Konbini.Store | null;
    }

    export interface KrCard {
      /**
       * The local credit or debit card brand.
       */
      brand: KrCard.Brand | null;

      /**
       * A unique identifier for the buyer as determined by the local payment processor.
       */
      buyer_id: string | null;

      /**
       * The last four digits of the card. This may not be present for American Express cards.
       */
      last4: string | null;

      /**
       * The Korean Card transaction ID associated with this payment.
       */
      transaction_id: string | null;
    }

    export interface Link {
      /**
       * Two-letter ISO code representing the funding source country beneath the Link payment.
       * You could use this attribute to get a sense of international fees.
       */
      country: string | null;
    }

    export interface MbWay {}

    export interface Mobilepay {
      /**
       * Internal card details
       */
      card: Mobilepay.Card | null;
    }

    export interface Multibanco {
      /**
       * Entity number associated with this Multibanco payment.
       */
      entity: string | null;

      /**
       * Reference number associated with this Multibanco payment.
       */
      reference: string | null;
    }

    export interface NaverPay {
      /**
       * A unique identifier for the buyer as determined by the local payment processor.
       */
      buyer_id: string | null;

      /**
       * The Naver Pay transaction ID associated with this payment.
       */
      transaction_id: string | null;
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
       * Estimated date to debit the customer's bank account. A date string in YYYY-MM-DD format.
       */
      expected_debit_date?: string;

      /**
       * Last four digits of the bank account number.
       */
      last4: string;

      /**
       * The suffix of the bank account number.
       */
      suffix: string | null;
    }

    export interface Oxxo {
      /**
       * OXXO reference number
       */
      number: string | null;
    }

    export interface P24 {
      /**
       * The customer's bank. Can be one of `ing`, `citi_handlowy`, `tmobile_usbugi_bankowe`, `plus_bank`, `etransfer_pocztowy24`, `banki_spbdzielcze`, `bank_nowy_bfg_sa`, `getin_bank`, `velobank`, `blik`, `noble_pay`, `ideabank`, `envelobank`, `santander_przelew24`, `nest_przelew`, `mbank_mtransfer`, `inteligo`, `pbac_z_ipko`, `bnp_paribas`, `credit_agricole`, `toyota_bank`, `bank_pekao_sa`, `volkswagen_bank`, `bank_millennium`, `alior_bank`, or `boz`.
       */
      bank: P24.Bank | null;

      /**
       * Unique reference for this Przelewy24 payment.
       */
      reference: string | null;

      /**
       * Owner's verified full name. Values are verified or provided by Przelewy24 directly
       * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
       * Przelewy24 rarely provides this information so the attribute is usually empty.
       */
      verified_name: string | null;
    }

    export interface PayByBank {}

    export interface Payco {
      /**
       * A unique identifier for the buyer as determined by the local payment processor.
       */
      buyer_id: string | null;

      /**
       * The Payco transaction ID associated with this payment.
       */
      transaction_id: string | null;
    }

    export interface Paynow {
      /**
       * ID of the [location](https://docs.stripe.com/api/terminal/locations) that this transaction's reader is assigned to.
       */
      location?: string;

      /**
       * ID of the [reader](https://docs.stripe.com/api/terminal/readers) this transaction was made on.
       */
      reader?: string;

      /**
       * Reference number associated with this PayNow payment
       */
      reference: string | null;
    }

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

      /**
       * Owner's full name. Values provided by PayPal directly
       * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
       */
      payer_name: string | null;

      /**
       * The level of protection offered as defined by PayPal Seller Protection for Merchants, for this transaction.
       */
      seller_protection: Paypal.SellerProtection | null;

      /**
       * The shipping address for the customer, as supplied by the merchant at the point of payment
       * execution. This shipping address will not be updated if the merchant updates the shipping
       * address on the PaymentIntent after the PaymentIntent was successfully confirmed.
       */
      shipping?: Address | null;

      /**
       * A unique ID generated by PayPal for this transaction.
       */
      transaction_id: string | null;

      /**
       * The shipping address for the customer, as supplied by the merchant at the point of payment
       * execution. This shipping address will not be updated if the merchant updates the shipping
       * address on the PaymentIntent after the PaymentIntent was successfully confirmed.
       */
      verified_address?: Address | null;

      /**
       * Owner's verified email. Values are verified or provided by PayPal directly
       * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
       */
      verified_email?: string | null;

      /**
       * Owner's verified full name. Values are verified or provided by PayPal directly
       * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
       */
      verified_name?: string | null;
    }

    export interface Paypay {}

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
       * ID of the mandate used to make this payment.
       */
      mandate?: string;

      /**
       * The PayID alias for the bank account.
       */
      pay_id: string | null;
    }

    export interface Pix {
      /**
       * Unique transaction id generated by BCB
       */
      bank_transaction_id?: string | null;

      /**
       * ID of the multi use Mandate generated by the PaymentIntent
       */
      mandate?: string;
    }

    export interface Promptpay {
      /**
       * Bill reference generated by PromptPay
       */
      reference: string | null;
    }

    export interface Qris {}

    export interface Rechnung {
      /**
       * Payment portal URL.
       */
      payment_portal_url: string | null;
    }

    export interface RevolutPay {
      funding?: RevolutPay.Funding;

      /**
       * The Revolut Pay transaction ID associated with this payment.
       */
      transaction_id: string | null;
    }

    export interface SamsungPay {
      /**
       * A unique identifier for the buyer as determined by the local payment processor.
       */
      buyer_id: string | null;

      /**
       * The Samsung Pay transaction ID associated with this payment.
       */
      transaction_id: string | null;
    }

    export interface Satispay {
      /**
       * The Satispay transaction ID associated with this payment.
       */
      transaction_id: string | null;
    }

    export interface SepaCreditTransfer {
      /**
       * Name of the bank associated with the bank account.
       */
      bank_name: string | null;

      /**
       * Bank Identifier Code of the bank associated with the bank account.
       */
      bic: string | null;

      /**
       * IBAN of the bank account to transfer funds to.
       */
      iban: string | null;
    }

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
       * Estimated date to debit the customer's bank account. A date string in YYYY-MM-DD format.
       */
      expected_debit_date?: string;

      /**
       * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
       */
      fingerprint: string | null;

      /**
       * Last four characters of the IBAN.
       */
      last4: string | null;

      /**
       * Find the ID of the mandate used for this payment under the [payment_method_details.sepa_debit.mandate](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-sepa_debit-mandate) property on the Charge. Use this mandate ID to [retrieve the Mandate](https://docs.stripe.com/api/mandates/retrieve).
       */
      mandate: string | null;
    }

    export interface Shopeepay {}

    export interface Sofort {
      /**
       * Bank code of bank associated with the bank account.
       */
      bank_code: string | null;

      /**
       * Name of the bank associated with the bank account.
       */
      bank_name: string | null;

      /**
       * Bank Identifier Code of the bank associated with the bank account.
       */
      bic: string | null;

      /**
       * Two-letter ISO code representing the country the bank account is located in.
       */
      country: string | null;

      /**
       * The ID of the SEPA Direct Debit PaymentMethod which was generated by this Charge.
       */
      generated_sepa_debit: string | PaymentMethod | null;

      /**
       * The mandate for the SEPA Direct Debit PaymentMethod which was generated by this Charge.
       */
      generated_sepa_debit_mandate: string | Mandate | null;

      /**
       * Last four characters of the IBAN.
       */
      iban_last4: string | null;

      /**
       * Preferred language of the SOFORT authorization page that the customer is redirected to.
       * Can be one of `de`, `en`, `es`, `fr`, `it`, `nl`, or `pl`
       */
      preferred_language: Sofort.PreferredLanguage | null;

      /**
       * Owner's verified full name. Values are verified or provided by SOFORT directly
       * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
       */
      verified_name: string | null;
    }

    export interface StripeAccount {}

    export interface StripeBalance {
      /**
       * The connected account ID whose Stripe balance to use as the source of payment
       */
      account?: string | null;
    }

    export interface Swish {
      /**
       * Uniquely identifies the payer's Swish account. You can use this attribute to check whether two Swish transactions were paid for by the same payer
       */
      fingerprint: string | null;

      /**
       * Payer bank reference number for the payment
       */
      payment_reference: string | null;

      /**
       * The last four digits of the Swish account phone number
       */
      verified_phone_last4: string | null;
    }

    export interface Twint {}

    export interface Upi {
      /**
       * Customer's unique Virtual Payment Address.
       */
      vpa: string | null;
    }

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
       * Name of the bank associated with the bank account.
       */
      bank_name: string | null;

      /**
       * Estimated date to debit the customer's bank account. A date string in YYYY-MM-DD format.
       */
      expected_debit_date?: string;

      /**
       * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
       */
      fingerprint: string | null;

      /**
       * Last four digits of the bank account number.
       */
      last4: string | null;

      /**
       * ID of the mandate used to make this payment.
       */
      mandate?: string | Mandate;

      /**
       * Reference number to locate ACH payments with customer's bank.
       */
      payment_reference: string | null;

      /**
       * Routing number of the bank account.
       */
      routing_number: string | null;
    }

    export interface Wechat {}

    export interface WechatPay {
      /**
       * Uniquely identifies this particular WeChat Pay account. You can use this attribute to check whether two WeChat accounts are the same.
       */
      fingerprint: string | null;

      /**
       * ID of the [location](https://docs.stripe.com/api/terminal/locations) that this transaction's reader is assigned to.
       */
      location?: string;

      /**
       * ID of the [reader](https://docs.stripe.com/api/terminal/readers) this transaction was made on.
       */
      reader?: string;

      /**
       * Transaction ID of this particular WeChat Pay transaction.
       */
      transaction_id: string | null;
    }

    export interface Zip {}

    export namespace AchDebit {
      export type AccountHolderType = 'company' | 'individual';
    }

    export namespace Alma {
      export interface Installments {
        /**
         * The number of installments.
         */
        count: number;
      }
    }

    export namespace AmazonPay {
      export interface Funding {
        card?: Funding.Card;

        /**
         * funding type of the underlying payment method.
         */
        type: 'card' | null;
      }

      export namespace Funding {
        export interface Card {
          /**
           * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
           */
          brand: string | null;

          /**
           * The [product code](https://stripe.com/docs/card-product-codes) that identifies the specific program or product associated with a card. (For internal use only and not typically available in standard API requests.)
           */
          brand_product?: string | null;

          /**
           * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
           */
          country: string | null;

          /**
           * Two-digit number representing the card's expiration month.
           */
          exp_month: number | null;

          /**
           * Four-digit number representing the card's expiration year.
           */
          exp_year: number | null;

          /**
           * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
           */
          funding: string | null;

          /**
           * The last four digits of the card.
           */
          last4: string | null;
        }
      }
    }

    export namespace Bancontact {
      export type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
    }

    export namespace Card {
      export interface Benefits {
        /**
         * Issuer of the benefit card utilized on this payment
         */
        issuer: string | null;
      }

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

      export interface DecrementalAuthorization {
        /**
         * Indicates whether or not the decremental authorization feature is supported.
         */
        status: DecrementalAuthorization.Status;
      }

      export interface ExtendedAuthorization {
        /**
         * Indicates whether or not the capture window is extended beyond the standard authorization.
         */
        status: ExtendedAuthorization.Status;
      }

      export interface IncrementalAuthorization {
        /**
         * Indicates whether or not the incremental authorization feature is supported.
         */
        status: IncrementalAuthorization.Status;
      }

      export interface Installments {
        /**
         * Installment plan selected for the payment.
         */
        plan: Installments.Plan | null;
      }

      export interface Multicapture {
        /**
         * Indicates whether or not multiple captures are supported.
         */
        status: Multicapture.Status;
      }

      export interface NetworkToken {
        /**
         * Indicates if Stripe used a network token, either user provided or Stripe managed when processing the transaction.
         */
        used: boolean;
      }

      export interface Overcapture {
        /**
         * The maximum amount that can be captured.
         */
        maximum_amount_capturable: number;

        /**
         * Indicates whether or not the authorized amount can be over-captured.
         */
        status: Overcapture.Status;
      }

      export interface PartialAuthorization {
        /**
         * Indicates whether the transaction requested for partial authorization feature and the authorization outcome.
         */
        status: PartialAuthorization.Status;
      }

      export interface Reauthorization {
        /**
         * Indicates whether or not the reauthorization feature is supported.
         */
        status: Reauthorization.Status;
      }

      export type RegulatedStatus = 'regulated' | 'unregulated';

      export interface ThreeDSecure {
        /**
         * For authenticated transactions: how the customer was authenticated by
         * the issuing bank.
         */
        authentication_flow: ThreeDSecure.AuthenticationFlow | null;

        /**
         * The Electronic Commerce Indicator (ECI). A protocol-level field
         * indicating what degree of authentication was performed.
         */
        electronic_commerce_indicator: ThreeDSecure.ElectronicCommerceIndicator | null;

        /**
         * The exemption requested via 3DS and accepted by the issuer at authentication time.
         */
        exemption_indicator: ThreeDSecure.ExemptionIndicator | null;

        /**
         * Whether Stripe requested the value of `exemption_indicator` in the transaction. This will depend on
         * the outcome of Stripe's internal risk assessment.
         */
        exemption_indicator_applied?: boolean;

        /**
         * Indicates the outcome of 3D Secure authentication.
         */
        result: ThreeDSecure.Result | null;

        /**
         * Additional information about why 3D Secure succeeded or failed based
         * on the `result`.
         */
        result_reason: ThreeDSecure.ResultReason | null;

        /**
         * The 3D Secure 1 XID or 3D Secure 2 Directory Server Transaction ID
         * (dsTransId) for this payment.
         */
        transaction_id: string | null;

        /**
         * The version of 3D Secure that was used.
         */
        version: ThreeDSecure.Version | null;
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

      export interface AccountFunding {
        /**
         * The transaction type of the card transaction. One of `account_funding` or `purchase`.
         */
        processed_transaction_type?: AccountFunding.ProcessedTransactionType;
      }

      export namespace AccountFunding {
        export type ProcessedTransactionType = 'account_funding' | 'purchase';
      }

      export namespace DecrementalAuthorization {
        export type Status = 'available' | 'unavailable';
      }

      export namespace ExtendedAuthorization {
        export type Status = 'disabled' | 'enabled';
      }

      export namespace IncrementalAuthorization {
        export type Status = 'available' | 'unavailable';
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

      export namespace Multicapture {
        export type Status = 'available' | 'unavailable';
      }

      export namespace Overcapture {
        export type Status = 'available' | 'unavailable';
      }

      export namespace PartialAuthorization {
        export type Status =
          | 'declined'
          | 'fully_authorized'
          | 'not_requested'
          | 'partially_authorized';
      }

      export namespace Reauthorization {
        export type Status = 'available' | 'unavailable';
      }

      export namespace ThreeDSecure {
        export type AuthenticationFlow = 'challenge' | 'frictionless';

        export type ElectronicCommerceIndicator =
          | '01'
          | '02'
          | '05'
          | '06'
          | '07';

        export type ExemptionIndicator = 'low_risk' | 'none';

        export type Result =
          | 'attempt_acknowledged'
          | 'authenticated'
          | 'exempted'
          | 'failed'
          | 'not_supported'
          | 'processing_error';

        export type ResultReason =
          | 'abandoned'
          | 'bypassed'
          | 'canceled'
          | 'card_not_enrolled'
          | 'network_not_supported'
          | 'protocol_error'
          | 'rejected';

        export type Version = '1.0.2' | '2.1.0' | '2.2.0' | '2.3.0' | '2.3.1';
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

      export interface Reauthorization {
        /**
         * Indicates whether or not the reauthorization feature is supported.
         */
        status: Reauthorization.Status;
      }

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

      export namespace Reauthorization {
        export type Status = 'available' | 'unavailable';
      }

      export namespace Receipt {
        export type AccountType = 'checking' | 'credit' | 'prepaid' | 'unknown';
      }

      export namespace Wallet {
        export type Type =
          | 'apple_pay'
          | 'google_pay'
          | 'samsung_pay'
          | 'unknown';
      }
    }

    export namespace Crypto {
      export type Network =
        | 'base'
        | 'ethereum'
        | 'polygon'
        | 'solana'
        | 'tempo';

      export type TokenCurrency = 'usdc' | 'usdg' | 'usdp';
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

    export namespace IdBankTransfer {
      export type Bank = 'bca' | 'bni' | 'bri' | 'cimb' | 'permata';
    }

    export namespace Ideal {
      export type Bank =
        | 'abn_amro'
        | 'adyen'
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
        | 'ADYBNL2A'
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

      export namespace Receipt {
        export type AccountType = 'checking' | 'savings' | 'unknown';
      }
    }

    export namespace Klarna {
      export interface PayerDetails {
        /**
         * The payer's address
         */
        address: PayerDetails.Address | null;
      }

      export namespace PayerDetails {
        export interface Address {
          /**
           * The payer address country
           */
          country: string | null;
        }
      }
    }

    export namespace Konbini {
      export interface Store {
        /**
         * The name of the convenience store chain where the payment was completed.
         */
        chain: Store.Chain | null;
      }

      export namespace Store {
        export type Chain = 'familymart' | 'lawson' | 'ministop' | 'seicomart';
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

    export namespace Mobilepay {
      export interface Card {
        /**
         * Brand of the card used in the transaction
         */
        brand: string | null;

        /**
         * Two-letter ISO code representing the country of the card
         */
        country: string | null;

        /**
         * Two digit number representing the card's expiration month
         */
        exp_month: number | null;

        /**
         * Two digit number representing the card's expiration year
         */
        exp_year: number | null;

        /**
         * The last 4 digits of the card
         */
        last4: string | null;
      }
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

    export namespace Paypal {
      export interface SellerProtection {
        /**
         * An array of conditions that are covered for the transaction, if applicable.
         */
        dispute_categories: Array<SellerProtection.DisputeCategory> | null;

        /**
         * Indicates whether the transaction is eligible for PayPal's seller protection.
         */
        status: SellerProtection.Status;
      }

      export namespace SellerProtection {
        export type DisputeCategory = 'fraudulent' | 'product_not_received';

        export type Status = 'eligible' | 'not_eligible' | 'partially_eligible';
      }
    }

    export namespace RevolutPay {
      export interface Funding {
        card?: Funding.Card;

        /**
         * funding type of the underlying payment method.
         */
        type: 'card' | null;
      }

      export namespace Funding {
        export interface Card {
          /**
           * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
           */
          brand: string | null;

          /**
           * The [product code](https://stripe.com/docs/card-product-codes) that identifies the specific program or product associated with a card. (For internal use only and not typically available in standard API requests.)
           */
          brand_product?: string | null;

          /**
           * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
           */
          country: string | null;

          /**
           * Two-digit number representing the card's expiration month.
           */
          exp_month: number | null;

          /**
           * Four-digit number representing the card's expiration year.
           */
          exp_year: number | null;

          /**
           * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
           */
          funding: string | null;

          /**
           * The last four digits of the card.
           */
          last4: string | null;
        }
      }
    }

    export namespace Sofort {
      export type PreferredLanguage =
        | 'de'
        | 'en'
        | 'es'
        | 'fr'
        | 'it'
        | 'nl'
        | 'pl';
    }

    export namespace UsBankAccount {
      export type AccountHolderType = 'company' | 'individual';

      export type AccountType = 'checking' | 'savings';
    }
  }
}
export interface ChargeCreateParams {
  /**
   * Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://docs.stripe.com/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
   */
  amount?: number;

  application_fee?: number;

  /**
   * A fee in cents (or local equivalent) that will be applied to the charge and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the `Stripe-Account` header in order to take an application fee. For more information, see the application fees [documentation](https://docs.stripe.com/connect/direct-charges#collect-fees).
   */
  application_fee_amount?: number;

  /**
   * Whether to immediately capture the charge. Defaults to `true`. When `false`, the charge issues an authorization (or pre-authorization), and will need to be [captured](https://api.stripe.com#capture_charge) later. Uncaptured charges expire after a set number of days (7 by default). For more information, see the [authorizing charges and settling later](https://docs.stripe.com/charges/placing-a-hold) documentation.
   */
  capture?: boolean;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string;

  /**
   * The ID of an existing customer that will be charged in this request.
   */
  customer?: string;

  /**
   * An arbitrary string which you can attach to a `Charge` object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
   */
  description?: string;

  destination?: ChargeCreateParams.Destination;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;

  /**
   * The Stripe account ID for which these funds are intended. You can specify the business of record as the connected account using the `on_behalf_of` attribute on the charge. For details, see [Creating Separate Charges and Transfers](https://docs.stripe.com/connect/separate-charges-and-transfers#settlement-merchant).
   */
  on_behalf_of?: string;

  /**
   * Options to configure Radar. See [Radar Session](https://docs.stripe.com/radar/radar-session) for more information.
   */
  radar_options?: ChargeCreateParams.RadarOptions;

  /**
   * The email address to which this charge's [receipt](https://docs.stripe.com/dashboard/receipts) will be sent. The receipt will not be sent until the charge is paid, and no receipts will be sent for test mode charges. If this charge is for a [Customer](https://docs.stripe.com/api/customers/object), the email address specified here will override the customer's email address. If `receipt_email` is specified for a charge in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
   */
  receipt_email?: string;

  /**
   * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
   */
  shipping?: ChargeCreateParams.Shipping;

  /**
   * A payment source to be charged. This can be the ID of a [card](https://docs.stripe.com/api#cards) (i.e., credit or debit card), a [bank account](https://docs.stripe.com/api#bank_accounts), a [source](https://docs.stripe.com/api#sources), a [token](https://docs.stripe.com/api#tokens), or a [connected account](https://docs.stripe.com/connect/account-debits#charging-a-connected-account). For certain sources---namely, [cards](https://docs.stripe.com/api#cards), [bank accounts](https://docs.stripe.com/api#bank_accounts), and attached [sources](https://docs.stripe.com/api#sources)---you must also pass the ID of the associated customer.
   */
  source?: string;

  /**
   * For a non-card charge, text that appears on the customer's statement as the statement descriptor. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
   *
   * For a card charge, this value is ignored unless you don't specify a `statement_descriptor_suffix`, in which case this value is used as the suffix.
   */
  statement_descriptor?: string;

  /**
   * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement. If the account has no prefix value, the suffix is concatenated to the account's statement descriptor.
   */
  statement_descriptor_suffix?: string;

  /**
   * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://docs.stripe.com/connect/destination-charges) for details.
   */
  transfer_data?: ChargeCreateParams.TransferData;

  /**
   * A string that identifies this transaction as part of a group. For details, see [Grouping transactions](https://docs.stripe.com/connect/separate-charges-and-transfers#transfer-options).
   */
  transfer_group?: string;
}
export namespace ChargeCreateParams {
  export interface Destination {
    /**
     * ID of an existing, connected Stripe account.
     */
    account: string;

    /**
     * The amount to transfer to the destination account without creating an `Application Fee` object. Cannot be combined with the `application_fee` parameter. Must be less than or equal to the charge amount.
     */
    amount?: number;
  }

  export interface RadarOptions {
    /**
     * A [Radar Session](https://docs.stripe.com/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
     */
    session?: string;
  }

  export interface Shipping {
    /**
     * Shipping address.
     */
    address: AddressParam;

    /**
     * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
     */
    carrier?: string;

    /**
     * Recipient name.
     */
    name: string;

    /**
     * Recipient phone (including extension).
     */
    phone?: string;

    /**
     * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
     */
    tracking_number?: string;
  }

  export interface TransferData {
    /**
     * The amount transferred to the destination account, if specified. By default, the entire charge amount is transferred to the destination account.
     */
    amount?: number;

    /**
     * ID of an existing, connected Stripe account.
     */
    destination: string;
  }
}
export interface ChargeRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ChargeUpdateParams {
  /**
   * The ID of an existing customer that will be associated with this request. This field may only be updated if there is no existing associated customer with this charge.
   */
  customer?: string;

  /**
   * An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
   */
  description?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * A set of key-value pairs you can attach to a charge giving information about its riskiness. If you believe a charge is fraudulent, include a `user_report` key with a value of `fraudulent`. If you believe a charge is safe, include a `user_report` key with a value of `safe`. Stripe will use the information you send to improve our fraud detection algorithms.
   */
  fraud_details?: ChargeUpdateParams.FraudDetails;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;

  /**
   * Provides industry-specific information about the charge.
   */
  payment_details?: ChargeUpdateParams.PaymentDetails;

  /**
   * This is the email address that the receipt for this charge will be sent to. If this field is updated, then a new email receipt will be sent to the updated address.
   */
  receipt_email?: string;

  /**
   * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
   */
  shipping?: ChargeUpdateParams.Shipping;

  /**
   * A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](https://docs.stripe.com/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transfer_group?: string;
}
export namespace ChargeUpdateParams {
  export interface FraudDetails {
    /**
     * Either `safe` or `fraudulent`.
     */
    user_report: Emptyable<FraudDetails.UserReport>;
  }

  export interface PaymentDetails {
    /**
     * Car rental details for this PaymentIntent.
     */
    car_rental?: PaymentDetails.CarRental;

    /**
     * Car rental data for this PaymentIntent.
     */
    car_rental_data?: Emptyable<Array<PaymentDetails.CarRentalDatum>>;

    /**
     * A unique value to identify the customer. This field is available only for card payments.
     *
     * This field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks.
     */
    customer_reference?: Emptyable<string>;

    /**
     * Event details for this PaymentIntent
     */
    event_details?: PaymentDetails.EventDetails;

    /**
     * Flight reservation details for this PaymentIntent
     */
    flight?: PaymentDetails.Flight;

    /**
     * Flight data for this PaymentIntent.
     */
    flight_data?: Emptyable<Array<PaymentDetails.FlightDatum>>;

    /**
     * Lodging reservation details for this PaymentIntent
     */
    lodging?: PaymentDetails.Lodging;

    /**
     * Lodging data for this PaymentIntent.
     */
    lodging_data?: Emptyable<Array<PaymentDetails.LodgingDatum>>;

    /**
     * A unique value assigned by the business to identify the transaction. Required for L2 and L3 rates.
     *
     * For Cards, this field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks. For Klarna, this field is truncated to 255 characters and is visible to customers when they view the order in the Klarna app.
     */
    order_reference?: Emptyable<string>;

    /**
     * Subscription details for this PaymentIntent
     */
    subscription?: PaymentDetails.Subscription;

    /**
     * Fleet data for this PaymentIntent.
     */
    fleet_data?: Emptyable<Array<PaymentDetails.FleetDatum>>;

    /**
     * Money services details for this PaymentIntent.
     */
    money_services?: Emptyable<PaymentDetails.MoneyServices>;
  }

  export interface Shipping {
    /**
     * Shipping address.
     */
    address: AddressParam;

    /**
     * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
     */
    carrier?: string;

    /**
     * Recipient name.
     */
    name: string;

    /**
     * Recipient phone (including extension).
     */
    phone?: string;

    /**
     * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
     */
    tracking_number?: string;
  }

  export namespace FraudDetails {
    export type UserReport = 'fraudulent' | 'safe';
  }

  export namespace PaymentDetails {
    export interface CarRental {
      /**
       * Affiliate details for this purchase.
       */
      affiliate?: CarRental.Affiliate;

      /**
       * The booking number associated with the car rental.
       */
      booking_number: string;

      /**
       * Class code of the car.
       */
      car_class_code?: string;

      /**
       * Make of the car.
       */
      car_make?: string;

      /**
       * Model of the car.
       */
      car_model?: string;

      /**
       * The name of the rental car company.
       */
      company?: string;

      /**
       * The customer service phone number of the car rental company.
       */
      customer_service_phone_number?: string;

      /**
       * Number of days the car is being rented.
       */
      days_rented: number;

      /**
       * Delivery details for this purchase.
       */
      delivery?: CarRental.Delivery;

      /**
       * The details of the distance traveled during the rental period.
       */
      distance?: CarRental.Distance;

      /**
       * The details of the passengers in the travel reservation
       */
      drivers?: Array<CarRental.Driver>;

      /**
       * List of additional charges being billed.
       */
      extra_charges?: Array<CarRental.ExtraCharge>;

      /**
       * Indicates if the customer did not keep nor cancel their booking.
       */
      no_show?: boolean;

      /**
       * Car pick-up address.
       */
      pickup_address?: AddressParam;

      /**
       * Car pick-up time. Measured in seconds since the Unix epoch.
       */
      pickup_at: number;

      /**
       * Name of the pickup location.
       */
      pickup_location_name?: string;

      /**
       * Rental rate.
       */
      rate_amount?: number;

      /**
       * The frequency at which the rate amount is applied. One of `day`, `week` or `month`
       */
      rate_interval?: CarRental.RateInterval;

      /**
       * The name of the person or entity renting the car.
       */
      renter_name?: string;

      /**
       * Car return address.
       */
      return_address?: AddressParam;

      /**
       * Car return time. Measured in seconds since the Unix epoch.
       */
      return_at: number;

      /**
       * Name of the return location.
       */
      return_location_name?: string;

      /**
       * Indicates whether the goods or services are tax-exempt or tax is not collected.
       */
      tax_exempt?: boolean;

      /**
       * The vehicle identification number.
       */
      vehicle_identification_number?: string;
    }

    export interface CarRentalDatum {
      /**
       * Affiliate (such as travel agency) details for the rental.
       */
      affiliate?: CarRentalDatum.Affiliate;

      /**
       * Booking confirmation number for the car rental.
       */
      booking_number?: string;

      /**
       * Name of the car rental company.
       */
      carrier_name?: string;

      /**
       * Customer service phone number for the car rental company.
       */
      customer_service_phone_number?: string;

      /**
       * Number of days the car is being rented.
       */
      days_rented?: number;

      /**
       * Distance details for the rental.
       */
      distance?: CarRentalDatum.Distance;

      /**
       * List of drivers for the rental.
       */
      drivers?: Array<CarRentalDatum.Driver>;

      /**
       * Drop-off location details.
       */
      drop_off: CarRentalDatum.DropOff;

      /**
       * Insurance details for the rental.
       */
      insurances?: Array<CarRentalDatum.Insurance>;

      /**
       * Indicates if the customer was a no-show.
       */
      no_show_indicator?: boolean;

      /**
       * Pickup location details.
       */
      pickup: CarRentalDatum.Pickup;

      /**
       * Name of the person renting the vehicle.
       */
      renter_name?: string;

      /**
       * Total cost breakdown for the rental.
       */
      total: CarRentalDatum.Total;

      /**
       * Vehicle details for the rental.
       */
      vehicle?: CarRentalDatum.Vehicle;
    }

    export interface EventDetails {
      /**
       * Indicates if the tickets are digitally checked when entering the venue.
       */
      access_controlled_venue?: boolean;

      /**
       * The event location's address.
       */
      address?: AddressParam;

      /**
       * Affiliate details for this purchase.
       */
      affiliate?: EventDetails.Affiliate;

      /**
       * The name of the company
       */
      company?: string;

      /**
       * Delivery details for this purchase.
       */
      delivery?: EventDetails.Delivery;

      /**
       * Event end time. Measured in seconds since the Unix epoch.
       */
      ends_at?: number;

      /**
       * Type of the event entertainment (concert, sports event etc)
       */
      genre?: string;

      /**
       * The name of the event.
       */
      name: string;

      /**
       * Event start time. Measured in seconds since the Unix epoch.
       */
      starts_at?: number;
    }

    export interface Flight {
      /**
       * Affiliate details for this purchase.
       */
      affiliate?: Flight.Affiliate;

      /**
       * The agency number (i.e. International Air Transport Association (IATA) agency number) of the travel agency that made the booking.
       */
      agency_number?: string;

      /**
       * The International Air Transport Association (IATA) carrier code of the carrier that issued the ticket.
       */
      carrier?: string;

      /**
       * Delivery details for this purchase.
       */
      delivery?: Flight.Delivery;

      /**
       * The name of the person or entity on the reservation.
       */
      passenger_name?: string;

      /**
       * The details of the passengers in the travel reservation.
       */
      passengers?: Array<Flight.Passenger>;

      /**
       * The individual flight segments associated with the trip.
       */
      segments: Array<Flight.Segment>;

      /**
       * The ticket number associated with the travel reservation.
       */
      ticket_number?: string;
    }

    export interface FlightDatum {
      /**
       * Affiliate details if applicable.
       */
      affiliate?: FlightDatum.Affiliate;

      /**
       * Reservation reference.
       */
      booking_number?: string;

      /**
       * Computerized reservation system used to make the reservation and purchase the ticket.
       */
      computerized_reservation_system?: string;

      /**
       * Ticket restrictions.
       */
      endorsements_and_restrictions?: string;

      /**
       * List of insurances.
       */
      insurances?: Array<FlightDatum.Insurance>;

      /**
       * List of passengers.
       */
      passengers?: Array<FlightDatum.Passenger>;

      /**
       * List of flight segments.
       */
      segments: Array<FlightDatum.Segment>;

      /**
       * Electronic ticket indicator.
       */
      ticket_electronically_issued_indicator?: boolean;

      /**
       * Total cost breakdown.
       */
      total: FlightDatum.Total;

      /**
       * Type of flight transaction.
       */
      transaction_type?: FlightDatum.TransactionType;
    }

    export interface Lodging {
      /**
       * The lodging location's address.
       */
      address?: AddressParam;

      /**
       * The number of adults on the booking
       */
      adults?: number;

      /**
       * Affiliate details for this purchase.
       */
      affiliate?: Lodging.Affiliate;

      /**
       * The booking number associated with the lodging reservation.
       */
      booking_number?: string;

      /**
       * The lodging category
       */
      category?: Lodging.Category;

      /**
       * Lodging check-in time. Measured in seconds since the Unix epoch.
       */
      checkin_at: number;

      /**
       * Lodging check-out time. Measured in seconds since the Unix epoch.
       */
      checkout_at: number;

      /**
       * The customer service phone number of the lodging company.
       */
      customer_service_phone_number?: string;

      /**
       * The daily lodging room rate.
       */
      daily_room_rate_amount?: number;

      /**
       * Delivery details for this purchase.
       */
      delivery?: Lodging.Delivery;

      /**
       * List of additional charges being billed.
       */
      extra_charges?: Array<Lodging.ExtraCharge>;

      /**
       * Indicates whether the lodging location is compliant with the Fire Safety Act.
       */
      fire_safety_act_compliance?: boolean;

      /**
       * The name of the lodging location.
       */
      name?: string;

      /**
       * Indicates if the customer did not keep their booking while failing to cancel the reservation.
       */
      no_show?: boolean;

      /**
       * The number of rooms on the booking
       */
      number_of_rooms?: number;

      /**
       * The details of the passengers in the travel reservation
       */
      passengers?: Array<Lodging.Passenger>;

      /**
       * The phone number of the lodging location.
       */
      property_phone_number?: string;

      /**
       * The room class for this purchase.
       */
      room_class?: string;

      /**
       * The number of room nights
       */
      room_nights?: number;

      /**
       * The total tax amount associating with the room reservation.
       */
      total_room_tax_amount?: number;

      /**
       * The total tax amount
       */
      total_tax_amount?: number;
    }

    export interface LodgingDatum {
      /**
       * Accommodation details for the lodging.
       */
      accommodation?: LodgingDatum.Accommodation;

      /**
       * Affiliate details if applicable.
       */
      affiliate?: LodgingDatum.Affiliate;

      /**
       * Booking confirmation number for the lodging.
       */
      booking_number?: string;

      /**
       * Check-in date.
       */
      checkin_at: number;

      /**
       * Check-out date.
       */
      checkout_at: number;

      /**
       * Customer service phone number for the lodging company.
       */
      customer_service_phone_number?: string;

      /**
       * Whether the lodging is compliant with any hotel fire safety regulations.
       */
      fire_safety_act_compliance_indicator?: boolean;

      /**
       * List of guests for the lodging.
       */
      guests?: Array<LodgingDatum.Guest>;

      /**
       * Host details for the lodging.
       */
      host?: LodgingDatum.Host;

      /**
       * List of insurances for the lodging.
       */
      insurances?: Array<LodgingDatum.Insurance>;

      /**
       * Whether the renter is a no-show.
       */
      no_show_indicator?: boolean;

      /**
       * Renter ID number for the lodging.
       */
      renter_id_number?: string;

      /**
       * Renter name for the lodging.
       */
      renter_name?: string;

      /**
       * Total details for the lodging.
       */
      total: LodgingDatum.Total;
    }

    export interface Subscription {
      /**
       * Affiliate details for this purchase.
       */
      affiliate?: Subscription.Affiliate;

      /**
       * Info whether the subscription will be auto renewed upon expiry.
       */
      auto_renewal?: boolean;

      /**
       * Subscription billing details for this purchase.
       */
      billing_interval?: Subscription.BillingInterval;

      /**
       * Subscription end time. Measured in seconds since the Unix epoch.
       */
      ends_at?: number;

      /**
       * Name of the product on subscription. e.g. Apple Music Subscription
       */
      name: string;

      /**
       * Subscription start time. Measured in seconds since the Unix epoch.
       */
      starts_at?: number;
    }

    export interface FleetDatum {
      /**
       * Primary fuel fields for the transaction.
       */
      primary_fuel_fields?: FleetDatum.PrimaryFuelFields;

      /**
       * Station and acceptor location details.
       */
      station?: FleetDatum.Station;

      /**
       * VAT and Invoice on Behalf (IOB) details.
       */
      vat?: FleetDatum.Vat;
    }

    export interface MoneyServices {
      /**
       * Account funding transaction details including sender and beneficiary information.
       */
      account_funding?: Emptyable<MoneyServices.AccountFunding>;

      /**
       * The type of money services transaction.
       */
      transaction_type?: Emptyable<'account_funding'>;
    }

    export namespace CarRental {
      export interface Affiliate {
        /**
         * The name of the affiliate that originated the purchase.
         */
        name: string;
      }

      export interface Delivery {
        /**
         * The delivery method for the payment
         */
        mode?: Delivery.Mode;

        /**
         * Details of the recipient.
         */
        recipient?: Delivery.Recipient;
      }

      export interface Distance {
        /**
         * Distance traveled.
         */
        amount?: number;

        /**
         * Unit of measurement for the distance traveled. One of `miles` or `kilometers`.
         */
        unit?: Distance.Unit;
      }

      export interface Driver {
        /**
         * Driver's identification number.
         */
        driver_identification_number?: string;

        /**
         * Driver's tax number.
         */
        driver_tax_number?: string;

        /**
         * Full name of the person or entity on the car reservation.
         */
        name: string;
      }

      export type ExtraCharge =
        | 'extra_mileage'
        | 'gas'
        | 'late_return'
        | 'one_way_service'
        | 'parking_violation';

      export type RateInterval = 'day' | 'month' | 'week';

      export namespace Delivery {
        export type Mode = 'email' | 'phone' | 'pickup' | 'post';

        export interface Recipient {
          /**
           * The email of the recipient the ticket is delivered to.
           */
          email?: string;

          /**
           * The name of the recipient the ticket is delivered to.
           */
          name?: string;

          /**
           * The phone number of the recipient the ticket is delivered to.
           */
          phone?: string;
        }
      }

      export namespace Distance {
        export type Unit = 'kilometers' | 'miles';
      }
    }

    export namespace CarRentalDatum {
      export interface Affiliate {
        /**
         * Affiliate partner code.
         */
        code?: string;

        /**
         * Name of affiliate partner.
         */
        name?: string;
      }

      export interface Distance {
        /**
         * Distance traveled.
         */
        amount: number;

        /**
         * Unit of measurement for the distance traveled. One of `miles` or `kilometers`.
         */
        unit: Distance.Unit;
      }

      export interface Driver {
        /**
         * Driver's date of birth.
         */
        date_of_birth?: Driver.DateOfBirth;

        /**
         * Driver's identification number.
         */
        driver_identification_number?: string;

        /**
         * Driver's tax number.
         */
        driver_tax_number?: string;

        /**
         * Driver's full name.
         */
        name: string;
      }

      export interface DropOff {
        /**
         * Address of the rental location.
         */
        address: DropOff.Address;

        /**
         * Location name.
         */
        location_name?: string;

        /**
         * Timestamp for the location.
         */
        time: number;
      }

      export interface Insurance {
        /**
         * Amount of the insurance coverage in cents.
         */
        amount: number;

        /**
         * Currency of the insurance amount.
         */
        currency?: string;

        /**
         * Name of the insurance company.
         */
        insurance_company_name?: string;

        /**
         * Type of insurance coverage.
         */
        insurance_type: Insurance.InsuranceType;
      }

      export interface Pickup {
        /**
         * Address of the rental location.
         */
        address: Pickup.Address;

        /**
         * Location name.
         */
        location_name?: string;

        /**
         * Timestamp for the location.
         */
        time: number;
      }

      export interface Total {
        /**
         * Total amount in cents.
         */
        amount: number;

        /**
         * Currency of the amount.
         */
        currency?: string;

        /**
         * Discount details for the rental.
         */
        discounts?: Total.Discounts;

        /**
         * Additional charges for the rental.
         */
        extra_charges?: Array<Total.ExtraCharge>;

        /**
         * Rate per unit for the rental.
         */
        rate_per_unit?: number;

        /**
         * Unit of measurement for the rate.
         */
        rate_unit?: Total.RateUnit;

        /**
         * Tax breakdown for the rental.
         */
        tax?: Total.Tax;
      }

      export interface Vehicle {
        /**
         * Make of the rental vehicle.
         */
        make?: string;

        /**
         * Model of the rental vehicle.
         */
        model?: string;

        /**
         * Odometer reading at the time of rental.
         */
        odometer?: number;

        /**
         * Type of the rental vehicle.
         */
        type?: Vehicle.Type;

        /**
         * Class of the rental vehicle.
         */
        vehicle_class?: Vehicle.VehicleClass;

        /**
         * Vehicle identification number (VIN).
         */
        vehicle_identification_number?: string;
      }

      export namespace Distance {
        export type Unit = 'kilometers' | 'miles';
      }

      export namespace Driver {
        export interface DateOfBirth {
          /**
           * Day of birth (1-31).
           */
          day: number;

          /**
           * Month of birth (1-12).
           */
          month: number;

          /**
           * Year of birth (must be greater than 1900).
           */
          year: number;
        }
      }

      export namespace DropOff {
        export interface Address {
          /**
           * City, district, suburb, town, or village.
           */
          city: string;

          /**
           * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
           */
          country: string;

          /**
           * Address line 1, such as the street, PO Box, or company name.
           */
          line1: string;

          /**
           * Address line 2, such as the apartment, suite, unit, or building.
           */
          line2?: string;

          /**
           * ZIP or postal code.
           */
          postal_code: string;

          /**
           * State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
           */
          state?: string;
        }
      }

      export namespace Insurance {
        export type InsuranceType =
          | 'liability_supplement'
          | 'loss_damage_waiver'
          | 'other'
          | 'partial_damage_waiver'
          | 'personal_accident'
          | 'personal_effects';
      }

      export namespace Pickup {
        export interface Address {
          /**
           * City, district, suburb, town, or village.
           */
          city: string;

          /**
           * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
           */
          country: string;

          /**
           * Address line 1, such as the street, PO Box, or company name.
           */
          line1: string;

          /**
           * Address line 2, such as the apartment, suite, unit, or building.
           */
          line2?: string;

          /**
           * ZIP or postal code.
           */
          postal_code: string;

          /**
           * State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
           */
          state?: string;
        }
      }

      export namespace Total {
        export interface Discounts {
          /**
           * Corporate client discount code.
           */
          corporate_client_code?: string;

          /**
           * Coupon code applied to the rental.
           */
          coupon?: string;

          /**
           * Maximum number of free miles or kilometers included.
           */
          maximum_free_miles_or_kilometers?: number;
        }

        export interface ExtraCharge {
          /**
           * Amount of the extra charge in cents.
           */
          amount: number;

          /**
           * Type of extra charge.
           */
          type: ExtraCharge.Type;
        }

        export type RateUnit =
          | 'days'
          | 'kilometers'
          | 'miles'
          | 'months'
          | 'weeks';

        export interface Tax {
          /**
           * Indicates if the transaction is tax exempt.
           */
          tax_exempt_indicator?: boolean;

          /**
           * Array of tax details.
           */
          taxes?: Array<Tax.Tax>;
        }

        export namespace ExtraCharge {
          export type Type =
            | 'extra_mileage'
            | 'gas'
            | 'gps'
            | 'late_charge'
            | 'one_way_drop_off'
            | 'other'
            | 'parking'
            | 'phone'
            | 'regular_mileage'
            | 'towing';
        }

        export namespace Tax {
          export interface Tax {
            /**
             * Tax amount.
             */
            amount?: number;

            /**
             * Tax rate applied.
             */
            rate?: number;

            /**
             * Type of tax applied.
             */
            type?: string;
          }
        }
      }

      export namespace Vehicle {
        export type Type =
          | 'cargo_van'
          | 'compact'
          | 'economy'
          | 'exotic'
          | 'exotic_suv'
          | 'fifteen_passenger_van'
          | 'four_wheel_drive'
          | 'full_size'
          | 'intermediate'
          | 'large_suv'
          | 'large_truck'
          | 'luxury'
          | 'medium_suv'
          | 'midsize'
          | 'mini'
          | 'minivan'
          | 'miscellaneous'
          | 'moped'
          | 'moving_van'
          | 'premium'
          | 'regular'
          | 'small_medium_truck'
          | 'small_suv'
          | 'special'
          | 'standard'
          | 'stretch'
          | 'subcompact'
          | 'taxi'
          | 'twelve_foot_truck'
          | 'twelve_passenger_van'
          | 'twenty_foot_truck'
          | 'twenty_four_foot_truck'
          | 'twenty_six_foot_truck'
          | 'unique';

        export type VehicleClass =
          | 'business'
          | 'economy'
          | 'first_class'
          | 'premium_economy';
      }
    }

    export namespace EventDetails {
      export interface Affiliate {
        /**
         * The name of the affiliate that originated the purchase.
         */
        name: string;
      }

      export interface Delivery {
        /**
         * The delivery method for the payment
         */
        mode?: Delivery.Mode;

        /**
         * Details of the recipient.
         */
        recipient?: Delivery.Recipient;
      }

      export namespace Delivery {
        export type Mode = 'email' | 'phone' | 'pickup' | 'post';

        export interface Recipient {
          /**
           * The email of the recipient the ticket is delivered to.
           */
          email?: string;

          /**
           * The name of the recipient the ticket is delivered to.
           */
          name?: string;

          /**
           * The phone number of the recipient the ticket is delivered to.
           */
          phone?: string;
        }
      }
    }

    export namespace FleetDatum {
      export interface PrimaryFuelFields {
        /**
         * The fuel brand.
         */
        brand?: PrimaryFuelFields.Brand;
      }

      export interface Station {
        /**
         * Additional contact information for the station.
         */
        additional_contact_info?: string;

        /**
         * The customer service phone number of the station.
         */
        customer_service_phone_number?: string;

        /**
         * The partner ID code of the station.
         */
        partner_id_code?: string;

        /**
         * The phone number of the station.
         */
        phone_number?: string;

        /**
         * The physical location of the station.
         */
        service_location?: ShippingAddressParam;

        /**
         * The URL of the station.
         */
        url?: string;
      }

      export interface Vat {
        /**
         * Indicates the merchant's agreement for Invoice on Behalf (IOB) VAT processing.
         */
        iob_indicator: Vat.IobIndicator;
      }

      export namespace PrimaryFuelFields {
        export type Brand =
          | 'aafes'
          | 'amerada_hess'
          | 'amoco_canada'
          | 'amoco_petroleum_products'
          | 'arco_products'
          | 'asda'
          | 'ashland_oil'
          | 'bfl'
          | 'bp_mobil'
          | 'bp_oil'
          | 'burrnah_major'
          | 'butler_arndale'
          | 'canadian_tire'
          | 'canadian_turbo'
          | 'caseys_general_store'
          | 'cenex'
          | 'chevron_canada'
          | 'chevron_usa'
          | 'circle_k_stores'
          | 'citgo_petroleum'
          | 'clark_brands'
          | 'conoco_canada'
          | 'conoco_inc'
          | 'crown_central_petroleum'
          | 'diamond_shamrock_inc'
          | 'discount_tire'
          | 'domo_gas'
          | 'elf'
          | 'erickson_oil'
          | 'esso'
          | 'esso_canada'
          | 'exxon'
          | 'exxonmobil'
          | 'family_express'
          | 'fas_gas_oil'
          | 'federated_coop_sonic'
          | 'fina'
          | 'fina_inc'
          | 'fkg_oil'
          | 'flare'
          | 'flying_j_inc'
          | 'gas_america'
          | 'gate_petroleum'
          | 'getty_petroleum'
          | 'giant_eagle'
          | 'grow_mark_inc'
          | 'gulf'
          | 'gulf_canada'
          | 'gulf_chevron'
          | 'handy_way_food'
          | 'heron'
          | 'holiday_stores'
          | 'home_depot'
          | 'husky'
          | 'hyvees'
          | 'irving'
          | 'irving_oil'
          | 'j_sainsbury'
          | 'jet_conoco'
          | 'krogers'
          | 'kuwait'
          | 'kwik_trip_inc'
          | 'lassus'
          | 'loves_country_stores'
          | 'mapco_express_inc'
          | 'marathon_oil'
          | 'martin_bailey_inc_dba_hucks'
          | 'maxol'
          | 'meineke'
          | 'mfa'
          | 'mohawk'
          | 'mr_gas'
          | 'murco'
          | 'murphy_oil_canada'
          | 'murphy_oil_usa_inc'
          | 'nexcom'
          | 'nordstrom_oil'
          | 'olco'
          | 'pdq_store'
          | 'pennzoil_products_inc'
          | 'petro'
          | 'petro_canada'
          | 'petro_t'
          | 'phillips'
          | 'pilot'
          | 'pioneer'
          | 'pure_oil'
          | 'quaker_state'
          | 'quarles_oil'
          | 'quiktrip'
          | 'racetrac_petroleum_inc'
          | 'raceway_petroleum'
          | 'repsol'
          | 'rudy'
          | 'safeway'
          | 'seven_eleven'
          | 'sheetz'
          | 'shell'
          | 'shell_canada'
          | 'shell_oil'
          | 'sinclair_oil'
          | 'southland_oil'
          | 'spar'
          | 'speedway'
          | 'sun_company_inc'
          | 'suncor_sunoco_canada'
          | 'tempo'
          | 'tesco'
          | 'tesoro_alaska'
          | 'texaco'
          | 'the_pantry_inc'
          | 'thornton_oil'
          | 'tosco'
          | 'total'
          | 'travel_centers_of_america'
          | 'uk'
          | 'ultramar_canada'
          | 'unbranded_or_unassigned'
          | 'unbranded_unassigned'
          | 'union_76'
          | 'united_dairy_farmer'
          | 'united_refining_kwikfill'
          | 'us_oil'
          | 'usa_petroleum'
          | 'valvoline'
          | 'vg'
          | 'w_morrison'
          | 'warren_equities'
          | 'wawa'
          | 'western_energetix'
          | 'wilco'
          | 'zions';
      }

      export namespace Vat {
        export type IobIndicator =
          | 'issuer_to_iob'
          | 'issuer_to_iob_and_incremental_certification'
          | 'merchant_does_not_agree_to_iob';
      }
    }

    export namespace Flight {
      export interface Affiliate {
        /**
         * The name of the affiliate that originated the purchase.
         */
        name: string;
      }

      export interface Delivery {
        /**
         * The delivery method for the payment
         */
        mode?: Delivery.Mode;

        /**
         * Details of the recipient.
         */
        recipient?: Delivery.Recipient;
      }

      export interface Passenger {
        /**
         * Full name of the person or entity on the flight reservation.
         */
        name: string;
      }

      export interface Segment {
        /**
         * The flight segment amount.
         */
        amount?: number;

        /**
         * The International Air Transport Association (IATA) airport code for the arrival airport.
         */
        arrival_airport?: string;

        /**
         * The arrival time for the flight segment. Measured in seconds since the Unix epoch.
         */
        arrives_at?: number;

        /**
         * The International Air Transport Association (IATA) carrier code of the carrier operating the flight segment.
         */
        carrier?: string;

        /**
         * The departure time for the flight segment. Measured in seconds since the Unix epoch.
         */
        departs_at: number;

        /**
         * The International Air Transport Association (IATA) airport code for the departure airport.
         */
        departure_airport?: string;

        /**
         * The flight number associated with the segment
         */
        flight_number?: string;

        /**
         * The fare class for the segment.
         */
        service_class?: Segment.ServiceClass;
      }

      export namespace Delivery {
        export type Mode = 'email' | 'phone' | 'pickup' | 'post';

        export interface Recipient {
          /**
           * The email of the recipient the ticket is delivered to.
           */
          email?: string;

          /**
           * The name of the recipient the ticket is delivered to.
           */
          name?: string;

          /**
           * The phone number of the recipient the ticket is delivered to.
           */
          phone?: string;
        }
      }

      export namespace Segment {
        export type ServiceClass =
          | 'business'
          | 'economy'
          | 'first'
          | 'premium_economy';
      }
    }

    export namespace FlightDatum {
      export interface Affiliate {
        /**
         * Affiliate partner code.
         */
        code?: string;

        /**
         * Name of affiliate partner.
         */
        name?: string;

        /**
         * Code provided by the company to a travel agent authorizing ticket issuance.
         */
        travel_authorization_code?: string;
      }

      export interface Insurance {
        /**
         * Insurance cost.
         */
        amount: number;

        /**
         * Insurance currency.
         */
        currency?: string;

        /**
         * Insurance company name.
         */
        insurance_company_name?: string;

        /**
         * Type of insurance.
         */
        insurance_type: Insurance.InsuranceType;
      }

      export interface Passenger {
        /**
         * Passenger's full name.
         */
        name: string;
      }

      export interface Segment {
        /**
         * Segment fare amount.
         */
        amount?: number;

        /**
         * Arrival details.
         */
        arrival: Segment.Arrival;

        /**
         * Airline carrier code.
         */
        carrier_code: string;

        /**
         * Carrier name.
         */
        carrier_name?: string;

        /**
         * Segment currency.
         */
        currency?: string;

        /**
         * Departure details.
         */
        departure: Segment.Departure;

        /**
         * Exchange ticket number.
         */
        exchange_ticket_number?: string;

        /**
         * Fare basis code.
         */
        fare_basis_code?: string;

        /**
         * Additional fees.
         */
        fees?: number;

        /**
         * Flight number.
         */
        flight_number?: string;

        /**
         * Stopover indicator.
         */
        is_stop_over_indicator?: boolean;

        /**
         * Refundable ticket indicator.
         */
        refundable?: boolean;

        /**
         * Class of service.
         */
        service_class: Segment.ServiceClass;

        /**
         * Tax amount for segment.
         */
        tax_amount?: number;

        /**
         * Ticket number.
         */
        ticket_number?: string;
      }

      export interface Total {
        /**
         * Total flight amount.
         */
        amount: number;

        /**
         * Reason for credit.
         */
        credit_reason?: Total.CreditReason;

        /**
         * Total currency.
         */
        currency?: string;

        /**
         * Discount details.
         */
        discounts?: Total.Discounts;

        /**
         * Additional charges.
         */
        extra_charges?: Array<Total.ExtraCharge>;

        /**
         * Tax breakdown.
         */
        tax?: Total.Tax;
      }

      export type TransactionType =
        | 'exchange_ticket'
        | 'miscellaneous'
        | 'refund'
        | 'ticket_purchase';

      export namespace Insurance {
        export type InsuranceType =
          | 'baggage'
          | 'bankruptcy'
          | 'cancelation'
          | 'emergency'
          | 'medical';
      }

      export namespace Segment {
        export interface Arrival {
          /**
           * Arrival airport IATA code.
           */
          airport: string;

          /**
           * Arrival date/time.
           */
          arrives_at?: number;

          /**
           * Arrival city.
           */
          city?: string;

          /**
           * Arrival country.
           */
          country?: string;
        }

        export interface Departure {
          /**
           * Departure airport IATA code.
           */
          airport: string;

          /**
           * Departure city.
           */
          city?: string;

          /**
           * Departure country.
           */
          country?: string;

          /**
           * Departure date/time.
           */
          departs_at: number;
        }

        export type ServiceClass =
          | 'business'
          | 'economy'
          | 'first_class'
          | 'premium_economy';
      }

      export namespace Total {
        export type CreditReason =
          | 'other'
          | 'partial_ticket_refund'
          | 'passenger_transport_ancillary_cancellation'
          | 'ticket_and_ancillary_cancellation'
          | 'ticket_cancellation';

        export interface Discounts {
          /**
           * Corporate client discount code.
           */
          corporate_client_code?: string;
        }

        export interface ExtraCharge {
          /**
           * Amount of additional charges.
           */
          amount?: number;

          /**
           * Type of additional charges.
           */
          type?: ExtraCharge.Type;
        }

        export interface Tax {
          /**
           * Array of tax details.
           */
          taxes?: Array<Tax.Tax>;
        }

        export namespace ExtraCharge {
          export type Type =
            | 'additional_fees'
            | 'ancillary_service_charges'
            | 'exchange_fee';
        }

        export namespace Tax {
          export interface Tax {
            /**
             * Tax amount.
             */
            amount?: number;

            /**
             * Tax rate.
             */
            rate?: number;

            /**
             * Type of tax.
             */
            type?: string;
          }
        }
      }
    }

    export namespace Lodging {
      export interface Affiliate {
        /**
         * The name of the affiliate that originated the purchase.
         */
        name: string;
      }

      export type Category = 'hotel' | 'vacation_rental';

      export interface Delivery {
        /**
         * The delivery method for the payment
         */
        mode?: Delivery.Mode;

        /**
         * Details of the recipient.
         */
        recipient?: Delivery.Recipient;
      }

      export type ExtraCharge =
        | 'gift_shop'
        | 'laundry'
        | 'mini_bar'
        | 'other'
        | 'restaurant'
        | 'telephone';

      export interface Passenger {
        /**
         * Full name of the person or entity on the lodging reservation.
         */
        name: string;
      }

      export namespace Delivery {
        export type Mode = 'email' | 'phone' | 'pickup' | 'post';

        export interface Recipient {
          /**
           * The email of the recipient the ticket is delivered to.
           */
          email?: string;

          /**
           * The name of the recipient the ticket is delivered to.
           */
          name?: string;

          /**
           * The phone number of the recipient the ticket is delivered to.
           */
          phone?: string;
        }
      }
    }

    export namespace LodgingDatum {
      export interface Accommodation {
        /**
         * Type of accommodation.
         */
        accommodation_type?: Accommodation.AccommodationType;

        /**
         * Bed type.
         */
        bed_type?: string;

        /**
         * Daily accommodation rate in cents.
         */
        daily_rate_amount?: number;

        /**
         * Number of nights.
         */
        nights?: number;

        /**
         * Number of rooms, cabanas, apartments, and so on.
         */
        number_of_rooms?: number;

        /**
         * Rate type.
         */
        rate_type?: string;

        /**
         * Whether smoking is allowed.
         */
        smoking_indicator?: boolean;
      }

      export interface Affiliate {
        /**
         * Affiliate partner code.
         */
        code?: string;

        /**
         * Affiliate partner name.
         */
        name?: string;
      }

      export interface Guest {
        /**
         * Guest's full name.
         */
        name: string;
      }

      export interface Host {
        /**
         * Address of the host.
         */
        address?: Host.Address;

        /**
         * Host's country of domicile.
         */
        country_of_domicile?: string;

        /**
         * Reference number for the host.
         */
        host_reference?: string;

        /**
         * Type of host.
         */
        host_type?: Host.HostType;

        /**
         * Name of the lodging property or host.
         */
        name?: string;

        /**
         * Total number of reservations for the host.
         */
        number_of_reservations?: number;

        /**
         * Property phone number.
         */
        property_phone_number?: string;

        /**
         * Host's registration date.
         */
        registered_at?: number;
      }

      export interface Insurance {
        /**
         * Price of the insurance coverage in cents.
         */
        amount: number;

        /**
         * Currency of the insurance amount.
         */
        currency?: string;

        /**
         * Name of the insurance company.
         */
        insurance_company_name?: string;

        /**
         * Type of insurance coverage.
         */
        insurance_type: Insurance.InsuranceType;
      }

      export interface Total {
        /**
         * Total price of the lodging reservation in cents.
         */
        amount: number;

        /**
         * Cash advances in cents.
         */
        cash_advances?: number;

        /**
         * Currency of the total amount.
         */
        currency?: string;

        /**
         * Discount details for the lodging.
         */
        discounts?: Total.Discounts;

        /**
         * Additional charges for the lodging.
         */
        extra_charges?: Array<Total.ExtraCharge>;

        /**
         * Prepaid amount in cents.
         */
        prepaid_amount?: number;

        /**
         * Tax breakdown for the lodging reservation.
         */
        tax?: Total.Tax;
      }

      export namespace Accommodation {
        export type AccommodationType =
          | 'apartment'
          | 'cabana'
          | 'house'
          | 'penthouse'
          | 'room'
          | 'standard'
          | 'suite'
          | 'villa';
      }

      export namespace Host {
        export interface Address {
          /**
           * City, district, suburb, town, or village.
           */
          city: string;

          /**
           * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
           */
          country: string;

          /**
           * Address line 1, such as the street, PO Box, or company name.
           */
          line1: string;

          /**
           * Address line 2, such as the apartment, suite, unit, or building.
           */
          line2?: string;

          /**
           * ZIP or postal code.
           */
          postal_code: string;

          /**
           * State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
           */
          state?: string;
        }

        export type HostType = 'hostel' | 'hotel' | 'owner' | 'rental_agency';
      }

      export namespace Insurance {
        export type InsuranceType =
          | 'bankruptcy'
          | 'cancelation'
          | 'emergency'
          | 'medical';
      }

      export namespace Total {
        export interface Discounts {
          /**
           * Corporate client discount code.
           */
          corporate_client_code?: string;

          /**
           * Coupon code.
           */
          coupon?: string;
        }

        export interface ExtraCharge {
          /**
           * Amount of the extra charge in cents.
           */
          amount?: number;

          /**
           * Type of extra charge.
           */
          type?: ExtraCharge.Type;
        }

        export interface Tax {
          /**
           * Indicates whether the transaction is tax exempt.
           */
          tax_exempt_indicator?: boolean;

          /**
           * Tax details.
           */
          taxes?: Array<Tax.Tax>;
        }

        export namespace ExtraCharge {
          export type Type =
            | 'gift_shop'
            | 'laundry'
            | 'mini_bar'
            | 'other'
            | 'phone'
            | 'restaurant';
        }

        export namespace Tax {
          export interface Tax {
            /**
             * Tax amount in cents.
             */
            amount?: number;

            /**
             * Tax rate.
             */
            rate?: number;

            /**
             * Type of tax applied.
             */
            type?: string;
          }
        }
      }
    }

    export namespace MoneyServices {
      export interface AccountFunding {
        /**
         * ID of the Account representing the beneficiary in this account funding transaction.
         */
        beneficiary_account?: string;

        /**
         * Inline identity details for the beneficiary of this account funding transaction.
         */
        beneficiary_details?: Emptyable<AccountFunding.BeneficiaryDetails>;

        /**
         * ID of the Account representing the sender in this account funding transaction.
         */
        sender_account?: string;

        /**
         * Inline identity details for the sender of this account funding transaction.
         */
        sender_details?: Emptyable<AccountFunding.SenderDetails>;
      }

      export namespace AccountFunding {
        export interface BeneficiaryDetails {
          /**
           * Address.
           */
          address?: AddressParam;

          /**
           * Date of birth.
           */
          date_of_birth?: BeneficiaryDetails.DateOfBirth;

          /**
           * Email address.
           */
          email?: string;

          /**
           * Full name.
           */
          name?: string;

          /**
           * Phone number.
           */
          phone?: string;
        }

        export interface SenderDetails {
          /**
           * Address.
           */
          address?: AddressParam;

          /**
           * Date of birth.
           */
          date_of_birth?: SenderDetails.DateOfBirth;

          /**
           * Email address.
           */
          email?: string;

          /**
           * Full name.
           */
          name?: string;

          /**
           * Phone number.
           */
          phone?: string;
        }

        export namespace BeneficiaryDetails {
          export interface DateOfBirth {
            /**
             * Day of birth, between 1 and 31.
             */
            day: number;

            /**
             * Month of birth, between 1 and 12.
             */
            month: number;

            /**
             * Four-digit year of birth.
             */
            year: number;
          }
        }

        export namespace SenderDetails {
          export interface DateOfBirth {
            /**
             * Day of birth, between 1 and 31.
             */
            day: number;

            /**
             * Month of birth, between 1 and 12.
             */
            month: number;

            /**
             * Four-digit year of birth.
             */
            year: number;
          }
        }
      }
    }

    export namespace Subscription {
      export interface Affiliate {
        /**
         * The name of the affiliate that originated the purchase.
         */
        name: string;
      }

      export interface BillingInterval {
        /**
         * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
         */
        count: number;

        /**
         * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
         */
        interval: BillingInterval.Interval;
      }

      export namespace BillingInterval {
        export type Interval = 'day' | 'month' | 'week' | 'year';
      }
    }
  }
}
export interface ChargeListParams extends PaginationParams {
  /**
   * Only return charges that were created during the given date interval.
   */
  created?: RangeQueryParam | number;

  /**
   * Only return charges for the customer specified by this customer ID.
   */
  customer?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Only return charges that were created by the PaymentIntent specified by this PaymentIntent ID.
   */
  payment_intent?: string;

  /**
   * Only return charges for this transfer group, limited to 100.
   */
  transfer_group?: string;
}
export interface ChargeCaptureParams {
  /**
   * The amount to capture, which must be less than or equal to the original amount.
   */
  amount?: number;

  /**
   * An application fee to add on to this charge.
   */
  application_fee?: number;

  /**
   * An application fee amount to add on to this charge, which must be less than or equal to the original amount.
   */
  application_fee_amount?: number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Provides industry-specific information about the charge.
   */
  payment_details?: ChargeCaptureParams.PaymentDetails;

  /**
   * The email address to send this charge's receipt to. This will override the previously-specified email address for this charge, if one was set. Receipts will not be sent in test mode.
   */
  receipt_email?: string;

  /**
   * For a non-card charge, text that appears on the customer's statement as the statement descriptor. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
   *
   * For a card charge, this value is ignored unless you don't specify a `statement_descriptor_suffix`, in which case this value is used as the suffix.
   */
  statement_descriptor?: string;

  /**
   * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement. If the account has no prefix value, the suffix is concatenated to the account's statement descriptor.
   */
  statement_descriptor_suffix?: string;

  /**
   * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://docs.stripe.com/connect/destination-charges) for details.
   */
  transfer_data?: ChargeCaptureParams.TransferData;

  /**
   * A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](https://docs.stripe.com/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transfer_group?: string;
}
export namespace ChargeCaptureParams {
  export interface PaymentDetails {
    /**
     * Car rental details for this PaymentIntent.
     */
    car_rental?: PaymentDetails.CarRental;

    /**
     * Car rental data for this PaymentIntent.
     */
    car_rental_data?: Emptyable<Array<PaymentDetails.CarRentalDatum>>;

    /**
     * A unique value to identify the customer. This field is available only for card payments.
     *
     * This field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks.
     */
    customer_reference?: Emptyable<string>;

    /**
     * Event details for this PaymentIntent
     */
    event_details?: PaymentDetails.EventDetails;

    /**
     * Flight reservation details for this PaymentIntent
     */
    flight?: PaymentDetails.Flight;

    /**
     * Flight data for this PaymentIntent.
     */
    flight_data?: Emptyable<Array<PaymentDetails.FlightDatum>>;

    /**
     * Lodging reservation details for this PaymentIntent
     */
    lodging?: PaymentDetails.Lodging;

    /**
     * Lodging data for this PaymentIntent.
     */
    lodging_data?: Emptyable<Array<PaymentDetails.LodgingDatum>>;

    /**
     * A unique value assigned by the business to identify the transaction. Required for L2 and L3 rates.
     *
     * For Cards, this field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks. For Klarna, this field is truncated to 255 characters and is visible to customers when they view the order in the Klarna app.
     */
    order_reference?: Emptyable<string>;

    /**
     * Subscription details for this PaymentIntent
     */
    subscription?: PaymentDetails.Subscription;

    /**
     * Fleet data for this PaymentIntent.
     */
    fleet_data?: Emptyable<Array<PaymentDetails.FleetDatum>>;

    /**
     * Money services details for this PaymentIntent.
     */
    money_services?: Emptyable<PaymentDetails.MoneyServices>;
  }

  export interface TransferData {
    /**
     * The amount transferred to the destination account, if specified. By default, the entire charge amount is transferred to the destination account.
     */
    amount?: number;
  }

  export namespace PaymentDetails {
    export interface CarRental {
      /**
       * Affiliate details for this purchase.
       */
      affiliate?: CarRental.Affiliate;

      /**
       * The booking number associated with the car rental.
       */
      booking_number: string;

      /**
       * Class code of the car.
       */
      car_class_code?: string;

      /**
       * Make of the car.
       */
      car_make?: string;

      /**
       * Model of the car.
       */
      car_model?: string;

      /**
       * The name of the rental car company.
       */
      company?: string;

      /**
       * The customer service phone number of the car rental company.
       */
      customer_service_phone_number?: string;

      /**
       * Number of days the car is being rented.
       */
      days_rented: number;

      /**
       * Delivery details for this purchase.
       */
      delivery?: CarRental.Delivery;

      /**
       * The details of the distance traveled during the rental period.
       */
      distance?: CarRental.Distance;

      /**
       * The details of the passengers in the travel reservation
       */
      drivers?: Array<CarRental.Driver>;

      /**
       * List of additional charges being billed.
       */
      extra_charges?: Array<CarRental.ExtraCharge>;

      /**
       * Indicates if the customer did not keep nor cancel their booking.
       */
      no_show?: boolean;

      /**
       * Car pick-up address.
       */
      pickup_address?: AddressParam;

      /**
       * Car pick-up time. Measured in seconds since the Unix epoch.
       */
      pickup_at: number;

      /**
       * Name of the pickup location.
       */
      pickup_location_name?: string;

      /**
       * Rental rate.
       */
      rate_amount?: number;

      /**
       * The frequency at which the rate amount is applied. One of `day`, `week` or `month`
       */
      rate_interval?: CarRental.RateInterval;

      /**
       * The name of the person or entity renting the car.
       */
      renter_name?: string;

      /**
       * Car return address.
       */
      return_address?: AddressParam;

      /**
       * Car return time. Measured in seconds since the Unix epoch.
       */
      return_at: number;

      /**
       * Name of the return location.
       */
      return_location_name?: string;

      /**
       * Indicates whether the goods or services are tax-exempt or tax is not collected.
       */
      tax_exempt?: boolean;

      /**
       * The vehicle identification number.
       */
      vehicle_identification_number?: string;
    }

    export interface CarRentalDatum {
      /**
       * Affiliate (such as travel agency) details for the rental.
       */
      affiliate?: CarRentalDatum.Affiliate;

      /**
       * Booking confirmation number for the car rental.
       */
      booking_number?: string;

      /**
       * Name of the car rental company.
       */
      carrier_name?: string;

      /**
       * Customer service phone number for the car rental company.
       */
      customer_service_phone_number?: string;

      /**
       * Number of days the car is being rented.
       */
      days_rented?: number;

      /**
       * Distance details for the rental.
       */
      distance?: CarRentalDatum.Distance;

      /**
       * List of drivers for the rental.
       */
      drivers?: Array<CarRentalDatum.Driver>;

      /**
       * Drop-off location details.
       */
      drop_off: CarRentalDatum.DropOff;

      /**
       * Insurance details for the rental.
       */
      insurances?: Array<CarRentalDatum.Insurance>;

      /**
       * Indicates if the customer was a no-show.
       */
      no_show_indicator?: boolean;

      /**
       * Pickup location details.
       */
      pickup: CarRentalDatum.Pickup;

      /**
       * Name of the person renting the vehicle.
       */
      renter_name?: string;

      /**
       * Total cost breakdown for the rental.
       */
      total: CarRentalDatum.Total;

      /**
       * Vehicle details for the rental.
       */
      vehicle?: CarRentalDatum.Vehicle;
    }

    export interface EventDetails {
      /**
       * Indicates if the tickets are digitally checked when entering the venue.
       */
      access_controlled_venue?: boolean;

      /**
       * The event location's address.
       */
      address?: AddressParam;

      /**
       * Affiliate details for this purchase.
       */
      affiliate?: EventDetails.Affiliate;

      /**
       * The name of the company
       */
      company?: string;

      /**
       * Delivery details for this purchase.
       */
      delivery?: EventDetails.Delivery;

      /**
       * Event end time. Measured in seconds since the Unix epoch.
       */
      ends_at?: number;

      /**
       * Type of the event entertainment (concert, sports event etc)
       */
      genre?: string;

      /**
       * The name of the event.
       */
      name: string;

      /**
       * Event start time. Measured in seconds since the Unix epoch.
       */
      starts_at?: number;
    }

    export interface Flight {
      /**
       * Affiliate details for this purchase.
       */
      affiliate?: Flight.Affiliate;

      /**
       * The agency number (i.e. International Air Transport Association (IATA) agency number) of the travel agency that made the booking.
       */
      agency_number?: string;

      /**
       * The International Air Transport Association (IATA) carrier code of the carrier that issued the ticket.
       */
      carrier?: string;

      /**
       * Delivery details for this purchase.
       */
      delivery?: Flight.Delivery;

      /**
       * The name of the person or entity on the reservation.
       */
      passenger_name?: string;

      /**
       * The details of the passengers in the travel reservation.
       */
      passengers?: Array<Flight.Passenger>;

      /**
       * The individual flight segments associated with the trip.
       */
      segments: Array<Flight.Segment>;

      /**
       * The ticket number associated with the travel reservation.
       */
      ticket_number?: string;
    }

    export interface FlightDatum {
      /**
       * Affiliate details if applicable.
       */
      affiliate?: FlightDatum.Affiliate;

      /**
       * Reservation reference.
       */
      booking_number?: string;

      /**
       * Computerized reservation system used to make the reservation and purchase the ticket.
       */
      computerized_reservation_system?: string;

      /**
       * Ticket restrictions.
       */
      endorsements_and_restrictions?: string;

      /**
       * List of insurances.
       */
      insurances?: Array<FlightDatum.Insurance>;

      /**
       * List of passengers.
       */
      passengers?: Array<FlightDatum.Passenger>;

      /**
       * List of flight segments.
       */
      segments: Array<FlightDatum.Segment>;

      /**
       * Electronic ticket indicator.
       */
      ticket_electronically_issued_indicator?: boolean;

      /**
       * Total cost breakdown.
       */
      total: FlightDatum.Total;

      /**
       * Type of flight transaction.
       */
      transaction_type?: FlightDatum.TransactionType;
    }

    export interface Lodging {
      /**
       * The lodging location's address.
       */
      address?: AddressParam;

      /**
       * The number of adults on the booking
       */
      adults?: number;

      /**
       * Affiliate details for this purchase.
       */
      affiliate?: Lodging.Affiliate;

      /**
       * The booking number associated with the lodging reservation.
       */
      booking_number?: string;

      /**
       * The lodging category
       */
      category?: Lodging.Category;

      /**
       * Lodging check-in time. Measured in seconds since the Unix epoch.
       */
      checkin_at: number;

      /**
       * Lodging check-out time. Measured in seconds since the Unix epoch.
       */
      checkout_at: number;

      /**
       * The customer service phone number of the lodging company.
       */
      customer_service_phone_number?: string;

      /**
       * The daily lodging room rate.
       */
      daily_room_rate_amount?: number;

      /**
       * Delivery details for this purchase.
       */
      delivery?: Lodging.Delivery;

      /**
       * List of additional charges being billed.
       */
      extra_charges?: Array<Lodging.ExtraCharge>;

      /**
       * Indicates whether the lodging location is compliant with the Fire Safety Act.
       */
      fire_safety_act_compliance?: boolean;

      /**
       * The name of the lodging location.
       */
      name?: string;

      /**
       * Indicates if the customer did not keep their booking while failing to cancel the reservation.
       */
      no_show?: boolean;

      /**
       * The number of rooms on the booking
       */
      number_of_rooms?: number;

      /**
       * The details of the passengers in the travel reservation
       */
      passengers?: Array<Lodging.Passenger>;

      /**
       * The phone number of the lodging location.
       */
      property_phone_number?: string;

      /**
       * The room class for this purchase.
       */
      room_class?: string;

      /**
       * The number of room nights
       */
      room_nights?: number;

      /**
       * The total tax amount associating with the room reservation.
       */
      total_room_tax_amount?: number;

      /**
       * The total tax amount
       */
      total_tax_amount?: number;
    }

    export interface LodgingDatum {
      /**
       * Accommodation details for the lodging.
       */
      accommodation?: LodgingDatum.Accommodation;

      /**
       * Affiliate details if applicable.
       */
      affiliate?: LodgingDatum.Affiliate;

      /**
       * Booking confirmation number for the lodging.
       */
      booking_number?: string;

      /**
       * Check-in date.
       */
      checkin_at: number;

      /**
       * Check-out date.
       */
      checkout_at: number;

      /**
       * Customer service phone number for the lodging company.
       */
      customer_service_phone_number?: string;

      /**
       * Whether the lodging is compliant with any hotel fire safety regulations.
       */
      fire_safety_act_compliance_indicator?: boolean;

      /**
       * List of guests for the lodging.
       */
      guests?: Array<LodgingDatum.Guest>;

      /**
       * Host details for the lodging.
       */
      host?: LodgingDatum.Host;

      /**
       * List of insurances for the lodging.
       */
      insurances?: Array<LodgingDatum.Insurance>;

      /**
       * Whether the renter is a no-show.
       */
      no_show_indicator?: boolean;

      /**
       * Renter ID number for the lodging.
       */
      renter_id_number?: string;

      /**
       * Renter name for the lodging.
       */
      renter_name?: string;

      /**
       * Total details for the lodging.
       */
      total: LodgingDatum.Total;
    }

    export interface Subscription {
      /**
       * Affiliate details for this purchase.
       */
      affiliate?: Subscription.Affiliate;

      /**
       * Info whether the subscription will be auto renewed upon expiry.
       */
      auto_renewal?: boolean;

      /**
       * Subscription billing details for this purchase.
       */
      billing_interval?: Subscription.BillingInterval;

      /**
       * Subscription end time. Measured in seconds since the Unix epoch.
       */
      ends_at?: number;

      /**
       * Name of the product on subscription. e.g. Apple Music Subscription
       */
      name: string;

      /**
       * Subscription start time. Measured in seconds since the Unix epoch.
       */
      starts_at?: number;
    }

    export interface FleetDatum {
      /**
       * Primary fuel fields for the transaction.
       */
      primary_fuel_fields?: FleetDatum.PrimaryFuelFields;

      /**
       * Station and acceptor location details.
       */
      station?: FleetDatum.Station;

      /**
       * VAT and Invoice on Behalf (IOB) details.
       */
      vat?: FleetDatum.Vat;
    }

    export interface MoneyServices {
      /**
       * Account funding transaction details including sender and beneficiary information.
       */
      account_funding?: Emptyable<MoneyServices.AccountFunding>;

      /**
       * The type of money services transaction.
       */
      transaction_type?: Emptyable<'account_funding'>;
    }

    export namespace CarRental {
      export interface Affiliate {
        /**
         * The name of the affiliate that originated the purchase.
         */
        name: string;
      }

      export interface Delivery {
        /**
         * The delivery method for the payment
         */
        mode?: Delivery.Mode;

        /**
         * Details of the recipient.
         */
        recipient?: Delivery.Recipient;
      }

      export interface Distance {
        /**
         * Distance traveled.
         */
        amount?: number;

        /**
         * Unit of measurement for the distance traveled. One of `miles` or `kilometers`.
         */
        unit?: Distance.Unit;
      }

      export interface Driver {
        /**
         * Driver's identification number.
         */
        driver_identification_number?: string;

        /**
         * Driver's tax number.
         */
        driver_tax_number?: string;

        /**
         * Full name of the person or entity on the car reservation.
         */
        name: string;
      }

      export type ExtraCharge =
        | 'extra_mileage'
        | 'gas'
        | 'late_return'
        | 'one_way_service'
        | 'parking_violation';

      export type RateInterval = 'day' | 'month' | 'week';

      export namespace Delivery {
        export type Mode = 'email' | 'phone' | 'pickup' | 'post';

        export interface Recipient {
          /**
           * The email of the recipient the ticket is delivered to.
           */
          email?: string;

          /**
           * The name of the recipient the ticket is delivered to.
           */
          name?: string;

          /**
           * The phone number of the recipient the ticket is delivered to.
           */
          phone?: string;
        }
      }

      export namespace Distance {
        export type Unit = 'kilometers' | 'miles';
      }
    }

    export namespace CarRentalDatum {
      export interface Affiliate {
        /**
         * Affiliate partner code.
         */
        code?: string;

        /**
         * Name of affiliate partner.
         */
        name?: string;
      }

      export interface Distance {
        /**
         * Distance traveled.
         */
        amount: number;

        /**
         * Unit of measurement for the distance traveled. One of `miles` or `kilometers`.
         */
        unit: Distance.Unit;
      }

      export interface Driver {
        /**
         * Driver's date of birth.
         */
        date_of_birth?: Driver.DateOfBirth;

        /**
         * Driver's identification number.
         */
        driver_identification_number?: string;

        /**
         * Driver's tax number.
         */
        driver_tax_number?: string;

        /**
         * Driver's full name.
         */
        name: string;
      }

      export interface DropOff {
        /**
         * Address of the rental location.
         */
        address: DropOff.Address;

        /**
         * Location name.
         */
        location_name?: string;

        /**
         * Timestamp for the location.
         */
        time: number;
      }

      export interface Insurance {
        /**
         * Amount of the insurance coverage in cents.
         */
        amount: number;

        /**
         * Currency of the insurance amount.
         */
        currency?: string;

        /**
         * Name of the insurance company.
         */
        insurance_company_name?: string;

        /**
         * Type of insurance coverage.
         */
        insurance_type: Insurance.InsuranceType;
      }

      export interface Pickup {
        /**
         * Address of the rental location.
         */
        address: Pickup.Address;

        /**
         * Location name.
         */
        location_name?: string;

        /**
         * Timestamp for the location.
         */
        time: number;
      }

      export interface Total {
        /**
         * Total amount in cents.
         */
        amount: number;

        /**
         * Currency of the amount.
         */
        currency?: string;

        /**
         * Discount details for the rental.
         */
        discounts?: Total.Discounts;

        /**
         * Additional charges for the rental.
         */
        extra_charges?: Array<Total.ExtraCharge>;

        /**
         * Rate per unit for the rental.
         */
        rate_per_unit?: number;

        /**
         * Unit of measurement for the rate.
         */
        rate_unit?: Total.RateUnit;

        /**
         * Tax breakdown for the rental.
         */
        tax?: Total.Tax;
      }

      export interface Vehicle {
        /**
         * Make of the rental vehicle.
         */
        make?: string;

        /**
         * Model of the rental vehicle.
         */
        model?: string;

        /**
         * Odometer reading at the time of rental.
         */
        odometer?: number;

        /**
         * Type of the rental vehicle.
         */
        type?: Vehicle.Type;

        /**
         * Class of the rental vehicle.
         */
        vehicle_class?: Vehicle.VehicleClass;

        /**
         * Vehicle identification number (VIN).
         */
        vehicle_identification_number?: string;
      }

      export namespace Distance {
        export type Unit = 'kilometers' | 'miles';
      }

      export namespace Driver {
        export interface DateOfBirth {
          /**
           * Day of birth (1-31).
           */
          day: number;

          /**
           * Month of birth (1-12).
           */
          month: number;

          /**
           * Year of birth (must be greater than 1900).
           */
          year: number;
        }
      }

      export namespace DropOff {
        export interface Address {
          /**
           * City, district, suburb, town, or village.
           */
          city: string;

          /**
           * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
           */
          country: string;

          /**
           * Address line 1, such as the street, PO Box, or company name.
           */
          line1: string;

          /**
           * Address line 2, such as the apartment, suite, unit, or building.
           */
          line2?: string;

          /**
           * ZIP or postal code.
           */
          postal_code: string;

          /**
           * State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
           */
          state?: string;
        }
      }

      export namespace Insurance {
        export type InsuranceType =
          | 'liability_supplement'
          | 'loss_damage_waiver'
          | 'other'
          | 'partial_damage_waiver'
          | 'personal_accident'
          | 'personal_effects';
      }

      export namespace Pickup {
        export interface Address {
          /**
           * City, district, suburb, town, or village.
           */
          city: string;

          /**
           * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
           */
          country: string;

          /**
           * Address line 1, such as the street, PO Box, or company name.
           */
          line1: string;

          /**
           * Address line 2, such as the apartment, suite, unit, or building.
           */
          line2?: string;

          /**
           * ZIP or postal code.
           */
          postal_code: string;

          /**
           * State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
           */
          state?: string;
        }
      }

      export namespace Total {
        export interface Discounts {
          /**
           * Corporate client discount code.
           */
          corporate_client_code?: string;

          /**
           * Coupon code applied to the rental.
           */
          coupon?: string;

          /**
           * Maximum number of free miles or kilometers included.
           */
          maximum_free_miles_or_kilometers?: number;
        }

        export interface ExtraCharge {
          /**
           * Amount of the extra charge in cents.
           */
          amount: number;

          /**
           * Type of extra charge.
           */
          type: ExtraCharge.Type;
        }

        export type RateUnit =
          | 'days'
          | 'kilometers'
          | 'miles'
          | 'months'
          | 'weeks';

        export interface Tax {
          /**
           * Indicates if the transaction is tax exempt.
           */
          tax_exempt_indicator?: boolean;

          /**
           * Array of tax details.
           */
          taxes?: Array<Tax.Tax>;
        }

        export namespace ExtraCharge {
          export type Type =
            | 'extra_mileage'
            | 'gas'
            | 'gps'
            | 'late_charge'
            | 'one_way_drop_off'
            | 'other'
            | 'parking'
            | 'phone'
            | 'regular_mileage'
            | 'towing';
        }

        export namespace Tax {
          export interface Tax {
            /**
             * Tax amount.
             */
            amount?: number;

            /**
             * Tax rate applied.
             */
            rate?: number;

            /**
             * Type of tax applied.
             */
            type?: string;
          }
        }
      }

      export namespace Vehicle {
        export type Type =
          | 'cargo_van'
          | 'compact'
          | 'economy'
          | 'exotic'
          | 'exotic_suv'
          | 'fifteen_passenger_van'
          | 'four_wheel_drive'
          | 'full_size'
          | 'intermediate'
          | 'large_suv'
          | 'large_truck'
          | 'luxury'
          | 'medium_suv'
          | 'midsize'
          | 'mini'
          | 'minivan'
          | 'miscellaneous'
          | 'moped'
          | 'moving_van'
          | 'premium'
          | 'regular'
          | 'small_medium_truck'
          | 'small_suv'
          | 'special'
          | 'standard'
          | 'stretch'
          | 'subcompact'
          | 'taxi'
          | 'twelve_foot_truck'
          | 'twelve_passenger_van'
          | 'twenty_foot_truck'
          | 'twenty_four_foot_truck'
          | 'twenty_six_foot_truck'
          | 'unique';

        export type VehicleClass =
          | 'business'
          | 'economy'
          | 'first_class'
          | 'premium_economy';
      }
    }

    export namespace EventDetails {
      export interface Affiliate {
        /**
         * The name of the affiliate that originated the purchase.
         */
        name: string;
      }

      export interface Delivery {
        /**
         * The delivery method for the payment
         */
        mode?: Delivery.Mode;

        /**
         * Details of the recipient.
         */
        recipient?: Delivery.Recipient;
      }

      export namespace Delivery {
        export type Mode = 'email' | 'phone' | 'pickup' | 'post';

        export interface Recipient {
          /**
           * The email of the recipient the ticket is delivered to.
           */
          email?: string;

          /**
           * The name of the recipient the ticket is delivered to.
           */
          name?: string;

          /**
           * The phone number of the recipient the ticket is delivered to.
           */
          phone?: string;
        }
      }
    }

    export namespace FleetDatum {
      export interface PrimaryFuelFields {
        /**
         * The fuel brand.
         */
        brand?: PrimaryFuelFields.Brand;
      }

      export interface Station {
        /**
         * Additional contact information for the station.
         */
        additional_contact_info?: string;

        /**
         * The customer service phone number of the station.
         */
        customer_service_phone_number?: string;

        /**
         * The partner ID code of the station.
         */
        partner_id_code?: string;

        /**
         * The phone number of the station.
         */
        phone_number?: string;

        /**
         * The physical location of the station.
         */
        service_location?: ShippingAddressParam;

        /**
         * The URL of the station.
         */
        url?: string;
      }

      export interface Vat {
        /**
         * Indicates the merchant's agreement for Invoice on Behalf (IOB) VAT processing.
         */
        iob_indicator: Vat.IobIndicator;
      }

      export namespace PrimaryFuelFields {
        export type Brand =
          | 'aafes'
          | 'amerada_hess'
          | 'amoco_canada'
          | 'amoco_petroleum_products'
          | 'arco_products'
          | 'asda'
          | 'ashland_oil'
          | 'bfl'
          | 'bp_mobil'
          | 'bp_oil'
          | 'burrnah_major'
          | 'butler_arndale'
          | 'canadian_tire'
          | 'canadian_turbo'
          | 'caseys_general_store'
          | 'cenex'
          | 'chevron_canada'
          | 'chevron_usa'
          | 'circle_k_stores'
          | 'citgo_petroleum'
          | 'clark_brands'
          | 'conoco_canada'
          | 'conoco_inc'
          | 'crown_central_petroleum'
          | 'diamond_shamrock_inc'
          | 'discount_tire'
          | 'domo_gas'
          | 'elf'
          | 'erickson_oil'
          | 'esso'
          | 'esso_canada'
          | 'exxon'
          | 'exxonmobil'
          | 'family_express'
          | 'fas_gas_oil'
          | 'federated_coop_sonic'
          | 'fina'
          | 'fina_inc'
          | 'fkg_oil'
          | 'flare'
          | 'flying_j_inc'
          | 'gas_america'
          | 'gate_petroleum'
          | 'getty_petroleum'
          | 'giant_eagle'
          | 'grow_mark_inc'
          | 'gulf'
          | 'gulf_canada'
          | 'gulf_chevron'
          | 'handy_way_food'
          | 'heron'
          | 'holiday_stores'
          | 'home_depot'
          | 'husky'
          | 'hyvees'
          | 'irving'
          | 'irving_oil'
          | 'j_sainsbury'
          | 'jet_conoco'
          | 'krogers'
          | 'kuwait'
          | 'kwik_trip_inc'
          | 'lassus'
          | 'loves_country_stores'
          | 'mapco_express_inc'
          | 'marathon_oil'
          | 'martin_bailey_inc_dba_hucks'
          | 'maxol'
          | 'meineke'
          | 'mfa'
          | 'mohawk'
          | 'mr_gas'
          | 'murco'
          | 'murphy_oil_canada'
          | 'murphy_oil_usa_inc'
          | 'nexcom'
          | 'nordstrom_oil'
          | 'olco'
          | 'pdq_store'
          | 'pennzoil_products_inc'
          | 'petro'
          | 'petro_canada'
          | 'petro_t'
          | 'phillips'
          | 'pilot'
          | 'pioneer'
          | 'pure_oil'
          | 'quaker_state'
          | 'quarles_oil'
          | 'quiktrip'
          | 'racetrac_petroleum_inc'
          | 'raceway_petroleum'
          | 'repsol'
          | 'rudy'
          | 'safeway'
          | 'seven_eleven'
          | 'sheetz'
          | 'shell'
          | 'shell_canada'
          | 'shell_oil'
          | 'sinclair_oil'
          | 'southland_oil'
          | 'spar'
          | 'speedway'
          | 'sun_company_inc'
          | 'suncor_sunoco_canada'
          | 'tempo'
          | 'tesco'
          | 'tesoro_alaska'
          | 'texaco'
          | 'the_pantry_inc'
          | 'thornton_oil'
          | 'tosco'
          | 'total'
          | 'travel_centers_of_america'
          | 'uk'
          | 'ultramar_canada'
          | 'unbranded_or_unassigned'
          | 'unbranded_unassigned'
          | 'union_76'
          | 'united_dairy_farmer'
          | 'united_refining_kwikfill'
          | 'us_oil'
          | 'usa_petroleum'
          | 'valvoline'
          | 'vg'
          | 'w_morrison'
          | 'warren_equities'
          | 'wawa'
          | 'western_energetix'
          | 'wilco'
          | 'zions';
      }

      export namespace Vat {
        export type IobIndicator =
          | 'issuer_to_iob'
          | 'issuer_to_iob_and_incremental_certification'
          | 'merchant_does_not_agree_to_iob';
      }
    }

    export namespace Flight {
      export interface Affiliate {
        /**
         * The name of the affiliate that originated the purchase.
         */
        name: string;
      }

      export interface Delivery {
        /**
         * The delivery method for the payment
         */
        mode?: Delivery.Mode;

        /**
         * Details of the recipient.
         */
        recipient?: Delivery.Recipient;
      }

      export interface Passenger {
        /**
         * Full name of the person or entity on the flight reservation.
         */
        name: string;
      }

      export interface Segment {
        /**
         * The flight segment amount.
         */
        amount?: number;

        /**
         * The International Air Transport Association (IATA) airport code for the arrival airport.
         */
        arrival_airport?: string;

        /**
         * The arrival time for the flight segment. Measured in seconds since the Unix epoch.
         */
        arrives_at?: number;

        /**
         * The International Air Transport Association (IATA) carrier code of the carrier operating the flight segment.
         */
        carrier?: string;

        /**
         * The departure time for the flight segment. Measured in seconds since the Unix epoch.
         */
        departs_at: number;

        /**
         * The International Air Transport Association (IATA) airport code for the departure airport.
         */
        departure_airport?: string;

        /**
         * The flight number associated with the segment
         */
        flight_number?: string;

        /**
         * The fare class for the segment.
         */
        service_class?: Segment.ServiceClass;
      }

      export namespace Delivery {
        export type Mode = 'email' | 'phone' | 'pickup' | 'post';

        export interface Recipient {
          /**
           * The email of the recipient the ticket is delivered to.
           */
          email?: string;

          /**
           * The name of the recipient the ticket is delivered to.
           */
          name?: string;

          /**
           * The phone number of the recipient the ticket is delivered to.
           */
          phone?: string;
        }
      }

      export namespace Segment {
        export type ServiceClass =
          | 'business'
          | 'economy'
          | 'first'
          | 'premium_economy';
      }
    }

    export namespace FlightDatum {
      export interface Affiliate {
        /**
         * Affiliate partner code.
         */
        code?: string;

        /**
         * Name of affiliate partner.
         */
        name?: string;

        /**
         * Code provided by the company to a travel agent authorizing ticket issuance.
         */
        travel_authorization_code?: string;
      }

      export interface Insurance {
        /**
         * Insurance cost.
         */
        amount: number;

        /**
         * Insurance currency.
         */
        currency?: string;

        /**
         * Insurance company name.
         */
        insurance_company_name?: string;

        /**
         * Type of insurance.
         */
        insurance_type: Insurance.InsuranceType;
      }

      export interface Passenger {
        /**
         * Passenger's full name.
         */
        name: string;
      }

      export interface Segment {
        /**
         * Segment fare amount.
         */
        amount?: number;

        /**
         * Arrival details.
         */
        arrival: Segment.Arrival;

        /**
         * Airline carrier code.
         */
        carrier_code: string;

        /**
         * Carrier name.
         */
        carrier_name?: string;

        /**
         * Segment currency.
         */
        currency?: string;

        /**
         * Departure details.
         */
        departure: Segment.Departure;

        /**
         * Exchange ticket number.
         */
        exchange_ticket_number?: string;

        /**
         * Fare basis code.
         */
        fare_basis_code?: string;

        /**
         * Additional fees.
         */
        fees?: number;

        /**
         * Flight number.
         */
        flight_number?: string;

        /**
         * Stopover indicator.
         */
        is_stop_over_indicator?: boolean;

        /**
         * Refundable ticket indicator.
         */
        refundable?: boolean;

        /**
         * Class of service.
         */
        service_class: Segment.ServiceClass;

        /**
         * Tax amount for segment.
         */
        tax_amount?: number;

        /**
         * Ticket number.
         */
        ticket_number?: string;
      }

      export interface Total {
        /**
         * Total flight amount.
         */
        amount: number;

        /**
         * Reason for credit.
         */
        credit_reason?: Total.CreditReason;

        /**
         * Total currency.
         */
        currency?: string;

        /**
         * Discount details.
         */
        discounts?: Total.Discounts;

        /**
         * Additional charges.
         */
        extra_charges?: Array<Total.ExtraCharge>;

        /**
         * Tax breakdown.
         */
        tax?: Total.Tax;
      }

      export type TransactionType =
        | 'exchange_ticket'
        | 'miscellaneous'
        | 'refund'
        | 'ticket_purchase';

      export namespace Insurance {
        export type InsuranceType =
          | 'baggage'
          | 'bankruptcy'
          | 'cancelation'
          | 'emergency'
          | 'medical';
      }

      export namespace Segment {
        export interface Arrival {
          /**
           * Arrival airport IATA code.
           */
          airport: string;

          /**
           * Arrival date/time.
           */
          arrives_at?: number;

          /**
           * Arrival city.
           */
          city?: string;

          /**
           * Arrival country.
           */
          country?: string;
        }

        export interface Departure {
          /**
           * Departure airport IATA code.
           */
          airport: string;

          /**
           * Departure city.
           */
          city?: string;

          /**
           * Departure country.
           */
          country?: string;

          /**
           * Departure date/time.
           */
          departs_at: number;
        }

        export type ServiceClass =
          | 'business'
          | 'economy'
          | 'first_class'
          | 'premium_economy';
      }

      export namespace Total {
        export type CreditReason =
          | 'other'
          | 'partial_ticket_refund'
          | 'passenger_transport_ancillary_cancellation'
          | 'ticket_and_ancillary_cancellation'
          | 'ticket_cancellation';

        export interface Discounts {
          /**
           * Corporate client discount code.
           */
          corporate_client_code?: string;
        }

        export interface ExtraCharge {
          /**
           * Amount of additional charges.
           */
          amount?: number;

          /**
           * Type of additional charges.
           */
          type?: ExtraCharge.Type;
        }

        export interface Tax {
          /**
           * Array of tax details.
           */
          taxes?: Array<Tax.Tax>;
        }

        export namespace ExtraCharge {
          export type Type =
            | 'additional_fees'
            | 'ancillary_service_charges'
            | 'exchange_fee';
        }

        export namespace Tax {
          export interface Tax {
            /**
             * Tax amount.
             */
            amount?: number;

            /**
             * Tax rate.
             */
            rate?: number;

            /**
             * Type of tax.
             */
            type?: string;
          }
        }
      }
    }

    export namespace Lodging {
      export interface Affiliate {
        /**
         * The name of the affiliate that originated the purchase.
         */
        name: string;
      }

      export type Category = 'hotel' | 'vacation_rental';

      export interface Delivery {
        /**
         * The delivery method for the payment
         */
        mode?: Delivery.Mode;

        /**
         * Details of the recipient.
         */
        recipient?: Delivery.Recipient;
      }

      export type ExtraCharge =
        | 'gift_shop'
        | 'laundry'
        | 'mini_bar'
        | 'other'
        | 'restaurant'
        | 'telephone';

      export interface Passenger {
        /**
         * Full name of the person or entity on the lodging reservation.
         */
        name: string;
      }

      export namespace Delivery {
        export type Mode = 'email' | 'phone' | 'pickup' | 'post';

        export interface Recipient {
          /**
           * The email of the recipient the ticket is delivered to.
           */
          email?: string;

          /**
           * The name of the recipient the ticket is delivered to.
           */
          name?: string;

          /**
           * The phone number of the recipient the ticket is delivered to.
           */
          phone?: string;
        }
      }
    }

    export namespace LodgingDatum {
      export interface Accommodation {
        /**
         * Type of accommodation.
         */
        accommodation_type?: Accommodation.AccommodationType;

        /**
         * Bed type.
         */
        bed_type?: string;

        /**
         * Daily accommodation rate in cents.
         */
        daily_rate_amount?: number;

        /**
         * Number of nights.
         */
        nights?: number;

        /**
         * Number of rooms, cabanas, apartments, and so on.
         */
        number_of_rooms?: number;

        /**
         * Rate type.
         */
        rate_type?: string;

        /**
         * Whether smoking is allowed.
         */
        smoking_indicator?: boolean;
      }

      export interface Affiliate {
        /**
         * Affiliate partner code.
         */
        code?: string;

        /**
         * Affiliate partner name.
         */
        name?: string;
      }

      export interface Guest {
        /**
         * Guest's full name.
         */
        name: string;
      }

      export interface Host {
        /**
         * Address of the host.
         */
        address?: Host.Address;

        /**
         * Host's country of domicile.
         */
        country_of_domicile?: string;

        /**
         * Reference number for the host.
         */
        host_reference?: string;

        /**
         * Type of host.
         */
        host_type?: Host.HostType;

        /**
         * Name of the lodging property or host.
         */
        name?: string;

        /**
         * Total number of reservations for the host.
         */
        number_of_reservations?: number;

        /**
         * Property phone number.
         */
        property_phone_number?: string;

        /**
         * Host's registration date.
         */
        registered_at?: number;
      }

      export interface Insurance {
        /**
         * Price of the insurance coverage in cents.
         */
        amount: number;

        /**
         * Currency of the insurance amount.
         */
        currency?: string;

        /**
         * Name of the insurance company.
         */
        insurance_company_name?: string;

        /**
         * Type of insurance coverage.
         */
        insurance_type: Insurance.InsuranceType;
      }

      export interface Total {
        /**
         * Total price of the lodging reservation in cents.
         */
        amount: number;

        /**
         * Cash advances in cents.
         */
        cash_advances?: number;

        /**
         * Currency of the total amount.
         */
        currency?: string;

        /**
         * Discount details for the lodging.
         */
        discounts?: Total.Discounts;

        /**
         * Additional charges for the lodging.
         */
        extra_charges?: Array<Total.ExtraCharge>;

        /**
         * Prepaid amount in cents.
         */
        prepaid_amount?: number;

        /**
         * Tax breakdown for the lodging reservation.
         */
        tax?: Total.Tax;
      }

      export namespace Accommodation {
        export type AccommodationType =
          | 'apartment'
          | 'cabana'
          | 'house'
          | 'penthouse'
          | 'room'
          | 'standard'
          | 'suite'
          | 'villa';
      }

      export namespace Host {
        export interface Address {
          /**
           * City, district, suburb, town, or village.
           */
          city: string;

          /**
           * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
           */
          country: string;

          /**
           * Address line 1, such as the street, PO Box, or company name.
           */
          line1: string;

          /**
           * Address line 2, such as the apartment, suite, unit, or building.
           */
          line2?: string;

          /**
           * ZIP or postal code.
           */
          postal_code: string;

          /**
           * State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
           */
          state?: string;
        }

        export type HostType = 'hostel' | 'hotel' | 'owner' | 'rental_agency';
      }

      export namespace Insurance {
        export type InsuranceType =
          | 'bankruptcy'
          | 'cancelation'
          | 'emergency'
          | 'medical';
      }

      export namespace Total {
        export interface Discounts {
          /**
           * Corporate client discount code.
           */
          corporate_client_code?: string;

          /**
           * Coupon code.
           */
          coupon?: string;
        }

        export interface ExtraCharge {
          /**
           * Amount of the extra charge in cents.
           */
          amount?: number;

          /**
           * Type of extra charge.
           */
          type?: ExtraCharge.Type;
        }

        export interface Tax {
          /**
           * Indicates whether the transaction is tax exempt.
           */
          tax_exempt_indicator?: boolean;

          /**
           * Tax details.
           */
          taxes?: Array<Tax.Tax>;
        }

        export namespace ExtraCharge {
          export type Type =
            | 'gift_shop'
            | 'laundry'
            | 'mini_bar'
            | 'other'
            | 'phone'
            | 'restaurant';
        }

        export namespace Tax {
          export interface Tax {
            /**
             * Tax amount in cents.
             */
            amount?: number;

            /**
             * Tax rate.
             */
            rate?: number;

            /**
             * Type of tax applied.
             */
            type?: string;
          }
        }
      }
    }

    export namespace MoneyServices {
      export interface AccountFunding {
        /**
         * ID of the Account representing the beneficiary in this account funding transaction.
         */
        beneficiary_account?: string;

        /**
         * Inline identity details for the beneficiary of this account funding transaction.
         */
        beneficiary_details?: Emptyable<AccountFunding.BeneficiaryDetails>;

        /**
         * ID of the Account representing the sender in this account funding transaction.
         */
        sender_account?: string;

        /**
         * Inline identity details for the sender of this account funding transaction.
         */
        sender_details?: Emptyable<AccountFunding.SenderDetails>;
      }

      export namespace AccountFunding {
        export interface BeneficiaryDetails {
          /**
           * Address.
           */
          address?: AddressParam;

          /**
           * Date of birth.
           */
          date_of_birth?: BeneficiaryDetails.DateOfBirth;

          /**
           * Email address.
           */
          email?: string;

          /**
           * Full name.
           */
          name?: string;

          /**
           * Phone number.
           */
          phone?: string;
        }

        export interface SenderDetails {
          /**
           * Address.
           */
          address?: AddressParam;

          /**
           * Date of birth.
           */
          date_of_birth?: SenderDetails.DateOfBirth;

          /**
           * Email address.
           */
          email?: string;

          /**
           * Full name.
           */
          name?: string;

          /**
           * Phone number.
           */
          phone?: string;
        }

        export namespace BeneficiaryDetails {
          export interface DateOfBirth {
            /**
             * Day of birth, between 1 and 31.
             */
            day: number;

            /**
             * Month of birth, between 1 and 12.
             */
            month: number;

            /**
             * Four-digit year of birth.
             */
            year: number;
          }
        }

        export namespace SenderDetails {
          export interface DateOfBirth {
            /**
             * Day of birth, between 1 and 31.
             */
            day: number;

            /**
             * Month of birth, between 1 and 12.
             */
            month: number;

            /**
             * Four-digit year of birth.
             */
            year: number;
          }
        }
      }
    }

    export namespace Subscription {
      export interface Affiliate {
        /**
         * The name of the affiliate that originated the purchase.
         */
        name: string;
      }

      export interface BillingInterval {
        /**
         * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
         */
        count: number;

        /**
         * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
         */
        interval: BillingInterval.Interval;
      }

      export namespace BillingInterval {
        export type Interval = 'day' | 'month' | 'week' | 'year';
      }
    }
  }
}
export interface ChargeSearchParams {
  /**
   * The search query string. See [search query language](https://docs.stripe.com/search#search-query-language) and the list of supported [query fields for charges](https://docs.stripe.com/search#query-fields-for-charges).
   */
  query: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number;

  /**
   * A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
   */
  page?: string;
}
