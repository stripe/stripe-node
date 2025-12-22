// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../lib.js';
import {LineItem} from './../LineItems.js';
import {Discount} from './../Discounts.js';
import {Subscription} from './../Subscriptions.js';
import {Customer, DeletedCustomer} from './../Customers.js';
import {Invoice} from './../Invoices.js';
import {PaymentIntent} from './../PaymentIntents.js';
import {PaymentLink} from './../PaymentLinks.js';
import {SetupIntent} from './../SetupIntents.js';
import {Account} from './../Accounts.js';
import {TaxId, DeletedTaxId} from './../TaxIds.js';
import {Coupon} from './../Coupons.js';
import {PromotionCode} from './../PromotionCodes.js';
import {ShippingRate} from './../ShippingRates.js';
import {TaxRate} from './../TaxRates.js';
import {
  MetadataParam,
  Emptyable,
  Address,
  ShippingAddressParam,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../../shared.js';
import {ApiListPromise, Response, ApiList} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class SessionResource extends StripeResource {
  /**
   * Returns a list of Checkout Sessions.
   */
  list(
    params?: Checkout.SessionListParams,
    options?: RequestOptions
  ): ApiListPromise<Session>;
  list(options?: RequestOptions): ApiListPromise<Session>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/checkout/sessions',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates a Checkout Session object.
   */
  create(
    params?: Checkout.SessionCreateParams,
    options?: RequestOptions
  ): Promise<Response<Session>>;
  create(options?: RequestOptions): Promise<Response<Session>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/checkout/sessions',
    }).call(this, ...args);
  }

  /**
   * Retrieves a Checkout Session object.
   */
  retrieve(
    id: string,
    params?: Checkout.SessionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Session>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Session>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/checkout/sessions/{session}',
    }).call(this, ...args);
  }

  /**
   * Updates a Checkout Session object.
   *
   * Related guide: [Dynamically update Checkout](https://docs.stripe.com/payments/checkout/dynamic-updates)
   */
  update(
    id: string,
    params?: Checkout.SessionUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Session>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/checkout/sessions/{session}',
    }).call(this, ...args);
  }

  /**
   * A Checkout Session can be expired when it is in one of these statuses: open
   *
   * After it expires, a customer can't complete a Checkout Session and customers loading the Checkout Session see a message saying the Checkout Session is expired.
   */
  expire(
    id: string,
    params?: Checkout.SessionExpireParams,
    options?: RequestOptions
  ): Promise<Response<Session>>;
  expire(id: string, options?: RequestOptions): Promise<Response<Session>>;
  expire(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/checkout/sessions/{session}/expire',
    }).call(this, ...args);
  }

  /**
   * When retrieving a Checkout Session, there is an includable line_items property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
   */
  listLineItems(
    id: string,
    params?: Checkout.SessionListLineItemsParams,
    options?: RequestOptions
  ): ApiListPromise<LineItem>;
  listLineItems(id: string, options?: RequestOptions): ApiListPromise<LineItem>;
  listLineItems(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/checkout/sessions/{session}/line_items',
      methodType: 'list',
    }).call(this, ...args);
  }
}
export interface Session {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'checkout.session';

  /**
   * Settings for price localization with [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing).
   */
  adaptive_pricing: Checkout.Session.AdaptivePricing | null;

  /**
   * When set, provides configuration for actions to take if this Checkout Session expires.
   */
  after_expiration: Checkout.Session.AfterExpiration | null;

  /**
   * Enables user redeemable promotion codes.
   */
  allow_promotion_codes: boolean | null;

  /**
   * Total of all items before discounts or taxes are applied.
   */
  amount_subtotal: number | null;

  /**
   * Total of all items after discounts and taxes are applied.
   */
  amount_total: number | null;

  automatic_tax: Checkout.Session.AutomaticTax;

  /**
   * Describes whether Checkout should collect the customer's billing address. Defaults to `auto`.
   */
  billing_address_collection: Checkout.Session.BillingAddressCollection | null;

  branding_settings?: Checkout.Session.BrandingSettings;

  /**
   * If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website.
   */
  cancel_url: string | null;

  /**
   * A unique string to reference the Checkout Session. This can be a
   * customer ID, a cart ID, or similar, and can be used to reconcile the
   * Session with your internal systems.
   */
  client_reference_id: string | null;

  /**
   * The client secret of your Checkout Session. Applies to Checkout Sessions with `ui_mode: embedded` or `ui_mode: custom`. For `ui_mode: embedded`, the client secret is to be used when initializing Stripe.js embedded checkout.
   *  For `ui_mode: custom`, use the client secret with [initCheckout](https://stripe.com/docs/js/custom_checkout/init) on your front end.
   */
  client_secret: string | null;

  /**
   * Information about the customer collected within the Checkout Session.
   */
  collected_information: Checkout.Session.CollectedInformation | null;

  /**
   * Results of `consent_collection` for this session.
   */
  consent: Checkout.Session.Consent | null;

  /**
   * When set, provides configuration for the Checkout Session to gather active consent from customers.
   */
  consent_collection: Checkout.Session.ConsentCollection | null;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string | null;

  /**
   * Currency conversion details for [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing) sessions created before 2025-03-31.
   */
  currency_conversion: Checkout.Session.CurrencyConversion | null;

  /**
   * Collect additional information from your customer using custom fields. Up to 3 fields are supported.
   */
  custom_fields: Array<Checkout.Session.CustomField>;

  custom_text: Checkout.Session.CustomText;

  /**
   * The ID of the customer for this Session.
   * For Checkout Sessions in `subscription` mode or Checkout Sessions with `customer_creation` set as `always` in `payment` mode, Checkout
   * will create a new customer object based on information provided
   * during the payment flow unless an existing customer was provided when
   * the Session was created.
   */
  customer: string | Customer | DeletedCustomer | null;

  /**
   * Configure whether a Checkout Session creates a Customer when the Checkout Session completes.
   */
  customer_creation: Checkout.Session.CustomerCreation | null;

  /**
   * The customer details including the customer's tax exempt status and the customer's tax IDs. Customer's address details are not present on Sessions in `setup` mode.
   */
  customer_details: Checkout.Session.CustomerDetails | null;

  /**
   * If provided, this value will be used when the Customer object is created.
   * If not provided, customers will be asked to enter their email address.
   * Use this parameter to prefill customer data if you already have an email
   * on file. To access information about the customer once the payment flow is
   * complete, use the `customer` attribute.
   */
  customer_email: string | null;

  /**
   * List of coupons and promotion codes attached to the Checkout Session.
   */
  discounts: Array<Checkout.Session.Discount> | null;

  /**
   * A list of the types of payment methods (e.g., `card`) that should be excluded from this Checkout Session. This should only be used when payment methods for this Checkout Session are managed through the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
   */
  excluded_payment_method_types?: Array<string>;

  /**
   * The timestamp at which the Checkout Session will expire.
   */
  expires_at: number;

  /**
   * ID of the invoice created by the Checkout Session, if it exists.
   */
  invoice: string | Invoice | null;

  /**
   * Details on the state of invoice creation for the Checkout Session.
   */
  invoice_creation: Checkout.Session.InvoiceCreation | null;

  /**
   * The line items purchased by the customer.
   */
  line_items?: ApiList<LineItem>;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The IETF language tag of the locale Checkout is displayed in. If blank or `auto`, the browser's locale is used.
   */
  locale: Checkout.Session.Locale | null;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * The mode of the Checkout Session.
   */
  mode: Checkout.Session.Mode;

  name_collection?: Checkout.Session.NameCollection;

  /**
   * The optional items presented to the customer at checkout.
   */
  optional_items?: Array<Checkout.Session.OptionalItem> | null;

  /**
   * Where the user is coming from. This informs the optimizations that are applied to the session.
   */
  origin_context: Checkout.Session.OriginContext | null;

  /**
   * The ID of the PaymentIntent for Checkout Sessions in `payment` mode. You can't confirm or cancel the PaymentIntent for a Checkout Session. To cancel, [expire the Checkout Session](https://stripe.com/docs/api/checkout/sessions/expire) instead.
   */
  payment_intent: string | PaymentIntent | null;

  /**
   * The ID of the Payment Link that created this Session.
   */
  payment_link: string | PaymentLink | null;

  /**
   * Configure whether a Checkout Session should collect a payment method. Defaults to `always`.
   */
  payment_method_collection: Checkout.Session.PaymentMethodCollection | null;

  /**
   * Information about the payment method configuration used for this Checkout session if using dynamic payment methods.
   */
  payment_method_configuration_details: Checkout.Session.PaymentMethodConfigurationDetails | null;

  /**
   * Payment-method-specific configuration for the PaymentIntent or SetupIntent of this CheckoutSession.
   */
  payment_method_options: Checkout.Session.PaymentMethodOptions | null;

  /**
   * A list of the types of payment methods (e.g. card) this Checkout
   * Session is allowed to accept.
   */
  payment_method_types: Array<string>;

  /**
   * The payment status of the Checkout Session, one of `paid`, `unpaid`, or `no_payment_required`.
   * You can use this value to decide when to fulfill your customer's order.
   */
  payment_status: Checkout.Session.PaymentStatus;

  /**
   * This property is used to set up permissions for various actions (e.g., update) on the CheckoutSession object.
   *
   * For specific permissions, please refer to their dedicated subsections, such as `permissions.update_shipping_details`.
   */
  permissions: Checkout.Session.Permissions | null;

  phone_number_collection?: Checkout.Session.PhoneNumberCollection;

  presentment_details?: Checkout.Session.PresentmentDetails;

  /**
   * The ID of the original expired Checkout Session that triggered the recovery flow.
   */
  recovered_from: string | null;

  /**
   * This parameter applies to `ui_mode: embedded`. Learn more about the [redirect behavior](https://stripe.com/docs/payments/checkout/custom-success-page?payment-ui=embedded-form) of embedded sessions. Defaults to `always`.
   */
  redirect_on_completion?: Checkout.Session.RedirectOnCompletion;

  /**
   * Applies to Checkout Sessions with `ui_mode: embedded` or `ui_mode: custom`. The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site.
   */
  return_url?: string;

  /**
   * Controls saved payment method settings for the session. Only available in `payment` and `subscription` mode.
   */
  saved_payment_method_options: Checkout.Session.SavedPaymentMethodOptions | null;

  /**
   * The ID of the SetupIntent for Checkout Sessions in `setup` mode. You can't confirm or cancel the SetupIntent for a Checkout Session. To cancel, [expire the Checkout Session](https://stripe.com/docs/api/checkout/sessions/expire) instead.
   */
  setup_intent: string | SetupIntent | null;

  /**
   * When set, provides configuration for Checkout to collect a shipping address from a customer.
   */
  shipping_address_collection: Checkout.Session.ShippingAddressCollection | null;

  /**
   * The details of the customer cost of shipping, including the customer chosen ShippingRate.
   */
  shipping_cost: Checkout.Session.ShippingCost | null;

  /**
   * The shipping rate options applied to this Session.
   */
  shipping_options: Array<Checkout.Session.ShippingOption>;

  /**
   * The status of the Checkout Session, one of `open`, `complete`, or `expired`.
   */
  status: Checkout.Session.Status | null;

  /**
   * Describes the type of transaction being performed by Checkout in order to customize
   * relevant text on the page, such as the submit button. `submit_type` can only be
   * specified on Checkout Sessions in `payment` mode. If blank or `auto`, `pay` is used.
   */
  submit_type: Checkout.Session.SubmitType | null;

  /**
   * The ID of the [Subscription](https://stripe.com/docs/api/subscriptions) for Checkout Sessions in `subscription` mode.
   */
  subscription: string | Subscription | null;

  /**
   * The URL the customer will be directed to after the payment or
   * subscription creation is successful.
   */
  success_url: string | null;

  tax_id_collection?: Checkout.Session.TaxIdCollection;

  /**
   * Tax and discount details for the computed total amount.
   */
  total_details: Checkout.Session.TotalDetails | null;

  /**
   * The UI mode of the Session. Defaults to `hosted`.
   */
  ui_mode: Checkout.Session.UiMode | null;

  /**
   * The URL to the Checkout Session. Applies to Checkout Sessions with `ui_mode: hosted`. Redirect customers to this URL to take them to Checkout. If you're using [Custom Domains](https://stripe.com/docs/payments/checkout/custom-domains), the URL will use your subdomain. Otherwise, it'll use `checkout.stripe.com.`
   * This value is only present when the session is active.
   */
  url: string | null;

  /**
   * Wallet-specific configuration for this Checkout Session.
   */
  wallet_options: Checkout.Session.WalletOptions | null;
}
export namespace Checkout {
  export namespace Session {
    export interface AdaptivePricing {
      /**
       * If enabled, Adaptive Pricing is available on [eligible sessions](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing?payment-ui=stripe-hosted#restrictions).
       */
      enabled: boolean;
    }

    export interface AfterExpiration {
      /**
       * When set, configuration used to recover the Checkout Session on expiry.
       */
      recovery: AfterExpiration.Recovery | null;
    }

    export interface AutomaticTax {
      /**
       * Indicates whether automatic tax is enabled for the session
       */
      enabled: boolean;

      /**
       * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
       */
      liability: AutomaticTax.Liability | null;

      /**
       * The tax provider powering automatic tax.
       */
      provider: string | null;

      /**
       * The status of the most recent automated tax calculation for this session.
       */
      status: AutomaticTax.Status | null;
    }

    export type BillingAddressCollection = 'auto' | 'required';

    export interface BrandingSettings {
      /**
       * A hex color value starting with `#` representing the background color for the Checkout Session.
       */
      background_color: string;

      /**
       * The border style for the Checkout Session. Must be one of `rounded`, `rectangular`, or `pill`.
       */
      border_style: BrandingSettings.BorderStyle;

      /**
       * A hex color value starting with `#` representing the button color for the Checkout Session.
       */
      button_color: string;

      /**
       * The display name shown on the Checkout Session.
       */
      display_name: string;

      /**
       * The font family for the Checkout Session. Must be one of the [supported font families](https://docs.stripe.com/payments/checkout/customization/appearance?payment-ui=stripe-hosted#font-compatibility).
       */
      font_family: string;

      /**
       * The icon for the Checkout Session. You cannot set both `logo` and `icon`.
       */
      icon: BrandingSettings.Icon | null;

      /**
       * The logo for the Checkout Session. You cannot set both `logo` and `icon`.
       */
      logo: BrandingSettings.Logo | null;
    }

    export interface CollectedInformation {
      /**
       * Customer's business name for this Checkout Session
       */
      business_name: string | null;

      /**
       * Customer's individual name for this Checkout Session
       */
      individual_name: string | null;

      /**
       * Shipping information for this Checkout Session.
       */
      shipping_details: CollectedInformation.ShippingDetails | null;
    }

    export interface Consent {
      /**
       * If `opt_in`, the customer consents to receiving promotional communications
       * from the merchant about this Checkout Session.
       */
      promotions: Consent.Promotions | null;

      /**
       * If `accepted`, the customer in this Checkout Session has agreed to the merchant's terms of service.
       */
      terms_of_service: 'accepted' | null;
    }

    export interface ConsentCollection {
      /**
       * If set to `hidden`, it will hide legal text related to the reuse of a payment method.
       */
      payment_method_reuse_agreement: ConsentCollection.PaymentMethodReuseAgreement | null;

      /**
       * If set to `auto`, enables the collection of customer consent for promotional communications. The Checkout
       * Session will determine whether to display an option to opt into promotional communication
       * from the merchant depending on the customer's locale. Only available to US merchants.
       */
      promotions: ConsentCollection.Promotions | null;

      /**
       * If set to `required`, it requires customers to accept the terms of service before being able to pay.
       */
      terms_of_service: ConsentCollection.TermsOfService | null;
    }

    export interface CurrencyConversion {
      /**
       * Total of all items in source currency before discounts or taxes are applied.
       */
      amount_subtotal: number;

      /**
       * Total of all items in source currency after discounts and taxes are applied.
       */
      amount_total: number;

      /**
       * Exchange rate used to convert source currency amounts to customer currency amounts
       */
      fx_rate: string;

      /**
       * Creation currency of the CheckoutSession before localization
       */
      source_currency: string;
    }

    export interface CustomField {
      dropdown?: CustomField.Dropdown;

      /**
       * String of your choice that your integration can use to reconcile this field. Must be unique to this field, alphanumeric, and up to 200 characters.
       */
      key: string;

      label: CustomField.Label;

      numeric?: CustomField.Numeric;

      /**
       * Whether the customer is required to complete the field before completing the Checkout Session. Defaults to `false`.
       */
      optional: boolean;

      text?: CustomField.Text;

      /**
       * The type of the field.
       */
      type: CustomField.Type;
    }

    export interface CustomText {
      /**
       * Custom text that should be displayed after the payment confirmation button.
       */
      after_submit: CustomText.AfterSubmit | null;

      /**
       * Custom text that should be displayed alongside shipping address collection.
       */
      shipping_address: CustomText.ShippingAddress | null;

      /**
       * Custom text that should be displayed alongside the payment confirmation button.
       */
      submit: CustomText.Submit | null;

      /**
       * Custom text that should be displayed in place of the default terms of service agreement text.
       */
      terms_of_service_acceptance: CustomText.TermsOfServiceAcceptance | null;
    }

    export type CustomerCreation = 'always' | 'if_required';

    export interface CustomerDetails {
      /**
       * The customer's address after a completed Checkout Session. Note: This property is populated only for sessions on or after March 30, 2022.
       */
      address: Address | null;

      /**
       * The customer's business name after a completed Checkout Session.
       */
      business_name: string | null;

      /**
       * The email associated with the Customer, if one exists, on the Checkout Session after a completed Checkout Session or at time of session expiry.
       * Otherwise, if the customer has consented to promotional content, this value is the most recent valid email provided by the customer on the Checkout form.
       */
      email: string | null;

      /**
       * The customer's individual name after a completed Checkout Session.
       */
      individual_name: string | null;

      /**
       * The customer's name after a completed Checkout Session. Note: This property is populated only for sessions on or after March 30, 2022.
       */
      name: string | null;

      /**
       * The customer's phone number after a completed Checkout Session.
       */
      phone: string | null;

      /**
       * The customer's tax exempt status after a completed Checkout Session.
       */
      tax_exempt: CustomerDetails.TaxExempt | null;

      /**
       * The customer's tax IDs after a completed Checkout Session.
       */
      tax_ids: Array<CustomerDetails.TaxId> | null;
    }

    export interface Discount {
      /**
       * Coupon attached to the Checkout Session.
       */
      coupon: string | Coupon | null;

      /**
       * Promotion code attached to the Checkout Session.
       */
      promotion_code: string | PromotionCode | null;
    }

    export interface InvoiceCreation {
      /**
       * Indicates whether invoice creation is enabled for the Checkout Session.
       */
      enabled: boolean;

      invoice_data: InvoiceCreation.InvoiceData;
    }

    export type Locale =
      | 'auto'
      | 'bg'
      | 'cs'
      | 'da'
      | 'de'
      | 'el'
      | 'en'
      | 'en-GB'
      | 'es'
      | 'es-419'
      | 'et'
      | 'fi'
      | 'fil'
      | 'fr'
      | 'fr-CA'
      | 'hr'
      | 'hu'
      | 'id'
      | 'it'
      | 'ja'
      | 'ko'
      | 'lt'
      | 'lv'
      | 'ms'
      | 'mt'
      | 'nb'
      | 'nl'
      | 'pl'
      | 'pt'
      | 'pt-BR'
      | 'ro'
      | 'ru'
      | 'sk'
      | 'sl'
      | 'sv'
      | 'th'
      | 'tr'
      | 'vi'
      | 'zh'
      | 'zh-HK'
      | 'zh-TW';

    export type Mode = 'payment' | 'setup' | 'subscription';

    export interface NameCollection {
      business?: NameCollection.Business;

      individual?: NameCollection.Individual;
    }

    export interface OptionalItem {
      adjustable_quantity: OptionalItem.AdjustableQuantity | null;

      price: string;

      quantity: number;
    }

    export type OriginContext = 'mobile_app' | 'web';

    export type PaymentMethodCollection = 'always' | 'if_required';

    export interface PaymentMethodConfigurationDetails {
      /**
       * ID of the payment method configuration used.
       */
      id: string;

      /**
       * ID of the parent payment method configuration used.
       */
      parent: string | null;
    }

    export interface PaymentMethodOptions {
      acss_debit?: PaymentMethodOptions.AcssDebit;

      affirm?: PaymentMethodOptions.Affirm;

      afterpay_clearpay?: PaymentMethodOptions.AfterpayClearpay;

      alipay?: PaymentMethodOptions.Alipay;

      alma?: PaymentMethodOptions.Alma;

      amazon_pay?: PaymentMethodOptions.AmazonPay;

      au_becs_debit?: PaymentMethodOptions.AuBecsDebit;

      bacs_debit?: PaymentMethodOptions.BacsDebit;

      bancontact?: PaymentMethodOptions.Bancontact;

      billie?: PaymentMethodOptions.Billie;

      boleto?: PaymentMethodOptions.Boleto;

      card?: PaymentMethodOptions.Card;

      cashapp?: PaymentMethodOptions.Cashapp;

      customer_balance?: PaymentMethodOptions.CustomerBalance;

      eps?: PaymentMethodOptions.Eps;

      fpx?: PaymentMethodOptions.Fpx;

      giropay?: PaymentMethodOptions.Giropay;

      grabpay?: PaymentMethodOptions.Grabpay;

      ideal?: PaymentMethodOptions.Ideal;

      kakao_pay?: PaymentMethodOptions.KakaoPay;

      klarna?: PaymentMethodOptions.Klarna;

      konbini?: PaymentMethodOptions.Konbini;

      kr_card?: PaymentMethodOptions.KrCard;

      link?: PaymentMethodOptions.Link;

      mobilepay?: PaymentMethodOptions.Mobilepay;

      multibanco?: PaymentMethodOptions.Multibanco;

      naver_pay?: PaymentMethodOptions.NaverPay;

      oxxo?: PaymentMethodOptions.Oxxo;

      p24?: PaymentMethodOptions.P24;

      payco?: PaymentMethodOptions.Payco;

      paynow?: PaymentMethodOptions.Paynow;

      paypal?: PaymentMethodOptions.Paypal;

      pix?: PaymentMethodOptions.Pix;

      revolut_pay?: PaymentMethodOptions.RevolutPay;

      samsung_pay?: PaymentMethodOptions.SamsungPay;

      satispay?: PaymentMethodOptions.Satispay;

      sepa_debit?: PaymentMethodOptions.SepaDebit;

      sofort?: PaymentMethodOptions.Sofort;

      swish?: PaymentMethodOptions.Swish;

      twint?: PaymentMethodOptions.Twint;

      us_bank_account?: PaymentMethodOptions.UsBankAccount;
    }

    export type PaymentStatus = 'no_payment_required' | 'paid' | 'unpaid';

    export interface Permissions {
      /**
       * Determines which entity is allowed to update the shipping details.
       *
       * Default is `client_only`. Stripe Checkout client will automatically update the shipping details. If set to `server_only`, only your server is allowed to update the shipping details.
       *
       * When set to `server_only`, you must add the onShippingDetailsChange event handler when initializing the Stripe Checkout client and manually update the shipping details from your server using the Stripe API.
       */
      update_shipping_details: Permissions.UpdateShippingDetails | null;
    }

    export interface PhoneNumberCollection {
      /**
       * Indicates whether phone number collection is enabled for the session
       */
      enabled: boolean;
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

    export type RedirectOnCompletion = 'always' | 'if_required' | 'never';

    export interface SavedPaymentMethodOptions {
      /**
       * Uses the `allow_redisplay` value of each saved payment method to filter the set presented to a returning customer. By default, only saved payment methods with 'allow_redisplay: ‘always' are shown in Checkout.
       */
      allow_redisplay_filters: Array<
        SavedPaymentMethodOptions.AllowRedisplayFilter
      > | null;

      /**
       * Enable customers to choose if they wish to remove their saved payment methods. Disabled by default.
       */
      payment_method_remove: SavedPaymentMethodOptions.PaymentMethodRemove | null;

      /**
       * Enable customers to choose if they wish to save their payment method for future use. Disabled by default.
       */
      payment_method_save: SavedPaymentMethodOptions.PaymentMethodSave | null;
    }

    export interface ShippingAddressCollection {
      /**
       * An array of two-letter ISO country codes representing which countries Checkout should provide as options for
       * shipping locations. Unsupported country codes: `AS, CX, CC, CU, HM, IR, KP, MH, FM, NF, MP, PW, SY, UM, VI`.
       */
      allowed_countries: Array<ShippingAddressCollection.AllowedCountry>;
    }

    export interface ShippingCost {
      /**
       * Total shipping cost before any discounts or taxes are applied.
       */
      amount_subtotal: number;

      /**
       * Total tax amount applied due to shipping costs. If no tax was applied, defaults to 0.
       */
      amount_tax: number;

      /**
       * Total shipping cost after discounts and taxes are applied.
       */
      amount_total: number;

      /**
       * The ID of the ShippingRate for this order.
       */
      shipping_rate: string | ShippingRate | null;

      /**
       * The taxes applied to the shipping rate.
       */
      taxes?: Array<ShippingCost.Tax>;
    }

    export interface ShippingOption {
      /**
       * A non-negative integer in cents representing how much to charge.
       */
      shipping_amount: number;

      /**
       * The shipping rate.
       */
      shipping_rate: string | ShippingRate;
    }

    export type Status = 'complete' | 'expired' | 'open';

    export type SubmitType = 'auto' | 'book' | 'donate' | 'pay' | 'subscribe';

    export interface TaxIdCollection {
      /**
       * Indicates whether tax ID collection is enabled for the session
       */
      enabled: boolean;

      /**
       * Indicates whether a tax ID is required on the payment page
       */
      required: TaxIdCollection.Required;
    }

    export interface TotalDetails {
      /**
       * This is the sum of all the discounts.
       */
      amount_discount: number;

      /**
       * This is the sum of all the shipping amounts.
       */
      amount_shipping: number | null;

      /**
       * This is the sum of all the tax amounts.
       */
      amount_tax: number;

      breakdown?: TotalDetails.Breakdown;
    }

    export type UiMode = 'custom' | 'embedded' | 'hosted';

    export interface WalletOptions {
      link?: WalletOptions.Link;
    }

    export namespace AfterExpiration {
      export interface Recovery {
        /**
         * Enables user redeemable promotion codes on the recovered Checkout Sessions. Defaults to `false`
         */
        allow_promotion_codes: boolean;

        /**
         * If `true`, a recovery url will be generated to recover this Checkout Session if it
         * expires before a transaction is completed. It will be attached to the
         * Checkout Session object upon expiration.
         */
        enabled: boolean;

        /**
         * The timestamp at which the recovery URL will expire.
         */
        expires_at: number | null;

        /**
         * URL that creates a new Checkout Session when clicked that is a copy of this expired Checkout Session
         */
        url: string | null;
      }
    }

    export namespace AutomaticTax {
      export interface Liability {
        /**
         * The connected account being referenced when `type` is `account`.
         */
        account?: string | Account;

        /**
         * Type of the account referenced.
         */
        type: Liability.Type;
      }

      export type Status = 'complete' | 'failed' | 'requires_location_inputs';

      export namespace Liability {
        export type Type = 'account' | 'self';
      }
    }

    export namespace BrandingSettings {
      export type BorderStyle = 'pill' | 'rectangular' | 'rounded';

      export interface Icon {
        /**
         * The ID of a [File upload](https://stripe.com/docs/api/files) representing the icon. Purpose must be `business_icon`. Required if `type` is `file` and disallowed otherwise.
         */
        file?: string;

        /**
         * The type of image for the icon. Must be one of `file` or `url`.
         */
        type: Icon.Type;

        /**
         * The URL of the image. Present when `type` is `url`.
         */
        url?: string;
      }

      export interface Logo {
        /**
         * The ID of a [File upload](https://stripe.com/docs/api/files) representing the logo. Purpose must be `business_logo`. Required if `type` is `file` and disallowed otherwise.
         */
        file?: string;

        /**
         * The type of image for the logo. Must be one of `file` or `url`.
         */
        type: Logo.Type;

        /**
         * The URL of the image. Present when `type` is `url`.
         */
        url?: string;
      }

      export namespace Icon {
        export type Type = 'file' | 'url';
      }

      export namespace Logo {
        export type Type = 'file' | 'url';
      }
    }

    export namespace CollectedInformation {
      export interface ShippingDetails {
        address: Address;

        /**
         * Customer name.
         */
        name: string;
      }
    }

    export namespace Consent {
      export type Promotions = 'opt_in' | 'opt_out';
    }

    export namespace ConsentCollection {
      export interface PaymentMethodReuseAgreement {
        /**
         * Determines the position and visibility of the payment method reuse agreement in the UI. When set to `auto`, Stripe's defaults will be used.
         *
         * When set to `hidden`, the payment method reuse agreement text will always be hidden in the UI.
         */
        position: PaymentMethodReuseAgreement.Position;
      }

      export type Promotions = 'auto' | 'none';

      export type TermsOfService = 'none' | 'required';

      export namespace PaymentMethodReuseAgreement {
        export type Position = 'auto' | 'hidden';
      }
    }

    export namespace CustomerDetails {
      export type TaxExempt = 'exempt' | 'none' | 'reverse';

      export interface TaxId {
        /**
         * The type of the tax ID, one of `ad_nrt`, `ar_cuit`, `eu_vat`, `bo_tin`, `br_cnpj`, `br_cpf`, `cn_tin`, `co_nit`, `cr_tin`, `do_rcn`, `ec_ruc`, `eu_oss_vat`, `hr_oib`, `pe_ruc`, `ro_tin`, `rs_pib`, `sv_nit`, `uy_ruc`, `ve_rif`, `vn_tin`, `gb_vat`, `nz_gst`, `au_abn`, `au_arn`, `in_gst`, `no_vat`, `no_voec`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `li_uid`, `li_vat`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, `il_vat`, `ge_vat`, `ua_vat`, `is_vat`, `bg_uic`, `hu_tin`, `si_tin`, `ke_pin`, `tr_tin`, `eg_tin`, `ph_tin`, `al_tin`, `bh_vat`, `kz_bin`, `ng_tin`, `om_vat`, `de_stn`, `ch_uid`, `tz_vat`, `uz_vat`, `uz_tin`, `md_vat`, `ma_vat`, `by_tin`, `ao_tin`, `bs_tin`, `bb_tin`, `cd_nif`, `mr_nif`, `me_pib`, `zw_tin`, `ba_tin`, `gn_nif`, `mk_vat`, `sr_fin`, `sn_ninea`, `am_tin`, `np_pan`, `tj_tin`, `ug_tin`, `zm_tin`, `kh_tin`, `aw_tin`, `az_tin`, `bd_bin`, `bj_ifu`, `et_tin`, `kg_tin`, `la_tin`, `cm_niu`, `cv_nif`, `bf_ifu`, or `unknown`
         */
        type: TaxId.Type;

        /**
         * The value of the tax ID.
         */
        value: string | null;
      }

      export namespace TaxId {
        export type Type =
          | 'ad_nrt'
          | 'ae_trn'
          | 'al_tin'
          | 'am_tin'
          | 'ao_tin'
          | 'ar_cuit'
          | 'au_abn'
          | 'au_arn'
          | 'aw_tin'
          | 'az_tin'
          | 'ba_tin'
          | 'bb_tin'
          | 'bd_bin'
          | 'bf_ifu'
          | 'bg_uic'
          | 'bh_vat'
          | 'bj_ifu'
          | 'bo_tin'
          | 'br_cnpj'
          | 'br_cpf'
          | 'bs_tin'
          | 'by_tin'
          | 'ca_bn'
          | 'ca_gst_hst'
          | 'ca_pst_bc'
          | 'ca_pst_mb'
          | 'ca_pst_sk'
          | 'ca_qst'
          | 'cd_nif'
          | 'ch_uid'
          | 'ch_vat'
          | 'cl_tin'
          | 'cm_niu'
          | 'cn_tin'
          | 'co_nit'
          | 'cr_tin'
          | 'cv_nif'
          | 'de_stn'
          | 'do_rcn'
          | 'ec_ruc'
          | 'eg_tin'
          | 'es_cif'
          | 'et_tin'
          | 'eu_oss_vat'
          | 'eu_vat'
          | 'gb_vat'
          | 'ge_vat'
          | 'gn_nif'
          | 'hk_br'
          | 'hr_oib'
          | 'hu_tin'
          | 'id_npwp'
          | 'il_vat'
          | 'in_gst'
          | 'is_vat'
          | 'jp_cn'
          | 'jp_rn'
          | 'jp_trn'
          | 'ke_pin'
          | 'kg_tin'
          | 'kh_tin'
          | 'kr_brn'
          | 'kz_bin'
          | 'la_tin'
          | 'li_uid'
          | 'li_vat'
          | 'ma_vat'
          | 'md_vat'
          | 'me_pib'
          | 'mk_vat'
          | 'mr_nif'
          | 'mx_rfc'
          | 'my_frp'
          | 'my_itn'
          | 'my_sst'
          | 'ng_tin'
          | 'no_vat'
          | 'no_voec'
          | 'np_pan'
          | 'nz_gst'
          | 'om_vat'
          | 'pe_ruc'
          | 'ph_tin'
          | 'ro_tin'
          | 'rs_pib'
          | 'ru_inn'
          | 'ru_kpp'
          | 'sa_vat'
          | 'sg_gst'
          | 'sg_uen'
          | 'si_tin'
          | 'sn_ninea'
          | 'sr_fin'
          | 'sv_nit'
          | 'th_vat'
          | 'tj_tin'
          | 'tr_tin'
          | 'tw_vat'
          | 'tz_vat'
          | 'ua_vat'
          | 'ug_tin'
          | 'unknown'
          | 'us_ein'
          | 'uy_ruc'
          | 'uz_tin'
          | 'uz_vat'
          | 've_rif'
          | 'vn_tin'
          | 'za_vat'
          | 'zm_tin'
          | 'zw_tin';
      }
    }

    export namespace CustomField {
      export interface Dropdown {
        /**
         * The value that will pre-fill on the payment page.
         */
        default_value: string | null;

        /**
         * The options available for the customer to select. Up to 200 options allowed.
         */
        options: Array<Dropdown.Option>;

        /**
         * The option selected by the customer. This will be the `value` for the option.
         */
        value: string | null;
      }

      export interface Label {
        /**
         * Custom text for the label, displayed to the customer. Up to 50 characters.
         */
        custom: string | null;

        /**
         * The type of the label.
         */
        type: 'custom';
      }

      export interface Numeric {
        /**
         * The value that will pre-fill the field on the payment page.
         */
        default_value: string | null;

        /**
         * The maximum character length constraint for the customer's input.
         */
        maximum_length: number | null;

        /**
         * The minimum character length requirement for the customer's input.
         */
        minimum_length: number | null;

        /**
         * The value entered by the customer, containing only digits.
         */
        value: string | null;
      }

      export interface Text {
        /**
         * The value that will pre-fill the field on the payment page.
         */
        default_value: string | null;

        /**
         * The maximum character length constraint for the customer's input.
         */
        maximum_length: number | null;

        /**
         * The minimum character length requirement for the customer's input.
         */
        minimum_length: number | null;

        /**
         * The value entered by the customer.
         */
        value: string | null;
      }

      export type Type = 'dropdown' | 'numeric' | 'text';

      export namespace Dropdown {
        export interface Option {
          /**
           * The label for the option, displayed to the customer. Up to 100 characters.
           */
          label: string;

          /**
           * The value for this option, not displayed to the customer, used by your integration to reconcile the option selected by the customer. Must be unique to this option, alphanumeric, and up to 100 characters.
           */
          value: string;
        }
      }
    }

    export namespace CustomText {
      export interface AfterSubmit {
        /**
         * Text may be up to 1200 characters in length.
         */
        message: string;
      }

      export interface ShippingAddress {
        /**
         * Text may be up to 1200 characters in length.
         */
        message: string;
      }

      export interface Submit {
        /**
         * Text may be up to 1200 characters in length.
         */
        message: string;
      }

      export interface TermsOfServiceAcceptance {
        /**
         * Text may be up to 1200 characters in length.
         */
        message: string;
      }
    }

    export namespace InvoiceCreation {
      export interface InvoiceData {
        /**
         * The account tax IDs associated with the invoice.
         */
        account_tax_ids: Array<string | TaxId | DeletedTaxId> | null;

        /**
         * Custom fields displayed on the invoice.
         */
        custom_fields: Array<InvoiceData.CustomField> | null;

        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description: string | null;

        /**
         * Footer displayed on the invoice.
         */
        footer: string | null;

        /**
         * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
         */
        issuer: InvoiceData.Issuer | null;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Metadata | null;

        /**
         * Options for invoice PDF rendering.
         */
        rendering_options: InvoiceData.RenderingOptions | null;
      }

      export namespace InvoiceData {
        export interface CustomField {
          /**
           * The name of the custom field.
           */
          name: string;

          /**
           * The value of the custom field.
           */
          value: string;
        }

        export interface Issuer {
          /**
           * The connected account being referenced when `type` is `account`.
           */
          account?: string | Account;

          /**
           * Type of the account referenced.
           */
          type: Issuer.Type;
        }

        export interface RenderingOptions {
          /**
           * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs.
           */
          amount_tax_display: string | null;

          /**
           * ID of the invoice rendering template to be used for the generated invoice.
           */
          template: string | null;
        }

        export namespace Issuer {
          export type Type = 'account' | 'self';
        }
      }
    }

    export namespace NameCollection {
      export interface Business {
        /**
         * Indicates whether business name collection is enabled for the session
         */
        enabled: boolean;

        /**
         * Whether the customer is required to complete the field before completing the Checkout Session. Defaults to `false`.
         */
        optional: boolean;
      }

      export interface Individual {
        /**
         * Indicates whether individual name collection is enabled for the session
         */
        enabled: boolean;

        /**
         * Whether the customer is required to complete the field before completing the Checkout Session. Defaults to `false`.
         */
        optional: boolean;
      }
    }

    export namespace OptionalItem {
      export interface AdjustableQuantity {
        /**
         * Set to true if the quantity can be adjusted to any non-negative integer.
         */
        enabled: boolean;

        /**
         * The maximum quantity of this item the customer can purchase. By default this value is 99. You can specify a value up to 999999.
         */
        maximum: number | null;

        /**
         * The minimum quantity of this item the customer must purchase, if they choose to purchase it. Because this item is optional, the customer will always be able to remove it from their order, even if the `minimum` configured here is greater than 0. By default this value is 0.
         */
        minimum: number | null;
      }
    }

    export namespace PaymentMethodOptions {
      export interface AcssDebit {
        /**
         * Currency supported by the bank account. Returned when the Session is in `setup` mode.
         */
        currency?: AcssDebit.Currency;

        mandate_options?: AcssDebit.MandateOptions;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: AcssDebit.SetupFutureUsage;

        /**
         * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
         */
        target_date?: string;

        /**
         * Bank account verification method.
         */
        verification_method?: AcssDebit.VerificationMethod;
      }

      export interface Affirm {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface AfterpayClearpay {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Alipay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Alma {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';
      }

      export interface AmazonPay {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: AmazonPay.SetupFutureUsage;
      }

      export interface AuBecsDebit {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';

        /**
         * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
         */
        target_date?: string;
      }

      export interface BacsDebit {
        mandate_options?: BacsDebit.MandateOptions;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: BacsDebit.SetupFutureUsage;

        /**
         * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
         */
        target_date?: string;
      }

      export interface Bancontact {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Billie {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';
      }

      export interface Boleto {
        /**
         * The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto voucher will expire on Wednesday at 23:59 America/Sao_Paulo time.
         */
        expires_after_days: number;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: Boleto.SetupFutureUsage;
      }

      export interface Card {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        installments?: Card.Installments;

        /**
         * Request ability to [capture beyond the standard authorization validity window](https://docs.stripe.com/payments/extended-authorization) for this CheckoutSession.
         */
        request_extended_authorization?: Card.RequestExtendedAuthorization;

        /**
         * Request ability to [increment the authorization](https://docs.stripe.com/payments/incremental-authorization) for this CheckoutSession.
         */
        request_incremental_authorization?: Card.RequestIncrementalAuthorization;

        /**
         * Request ability to make [multiple captures](https://docs.stripe.com/payments/multicapture) for this CheckoutSession.
         */
        request_multicapture?: Card.RequestMulticapture;

        /**
         * Request ability to [overcapture](https://docs.stripe.com/payments/overcapture) for this CheckoutSession.
         */
        request_overcapture?: Card.RequestOvercapture;

        /**
         * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
         */
        request_three_d_secure: Card.RequestThreeDSecure;

        restrictions?: Card.Restrictions;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: Card.SetupFutureUsage;

        /**
         * Provides information about a card payment that customers see on their statements. Concatenated with the Kana prefix (shortened Kana descriptor) or Kana statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 22 characters.
         */
        statement_descriptor_suffix_kana?: string;

        /**
         * Provides information about a card payment that customers see on their statements. Concatenated with the Kanji prefix (shortened Kanji descriptor) or Kanji statement descriptor that's set on the account to form the complete statement descriptor. Maximum 17 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 17 characters.
         */
        statement_descriptor_suffix_kanji?: string;
      }

      export interface Cashapp {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface CustomerBalance {
        bank_transfer?: CustomerBalance.BankTransfer;

        /**
         * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
         */
        funding_type: 'bank_transfer' | null;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Eps {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Fpx {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Giropay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Grabpay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Ideal {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface KakaoPay {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: KakaoPay.SetupFutureUsage;
      }

      export interface Klarna {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: Klarna.SetupFutureUsage;
      }

      export interface Konbini {
        /**
         * The number of calendar days (between 1 and 60) after which Konbini payment instructions will expire. For example, if a PaymentIntent is confirmed with Konbini and `expires_after_days` set to 2 on Monday JST, the instructions will expire on Wednesday 23:59:59 JST.
         */
        expires_after_days: number | null;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface KrCard {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: KrCard.SetupFutureUsage;
      }

      export interface Link {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: Link.SetupFutureUsage;
      }

      export interface Mobilepay {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Multibanco {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface NaverPay {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: NaverPay.SetupFutureUsage;
      }

      export interface Oxxo {
        /**
         * The number of calendar days before an OXXO invoice expires. For example, if you create an OXXO invoice on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
         */
        expires_after_days: number;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface P24 {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Payco {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';
      }

      export interface Paynow {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Paypal {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Preferred locale of the PayPal checkout page that the customer is redirected to.
         */
        preferred_locale: string | null;

        /**
         * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
         */
        reference: string | null;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: Paypal.SetupFutureUsage;
      }

      export interface Pix {
        /**
         * Determines if the amount includes the IOF tax.
         */
        amount_includes_iof?: Pix.AmountIncludesIof;

        /**
         * The number of seconds after which Pix payment will expire.
         */
        expires_after_seconds: number | null;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface RevolutPay {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: RevolutPay.SetupFutureUsage;
      }

      export interface SamsungPay {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';
      }

      export interface Satispay {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';
      }

      export interface SepaDebit {
        mandate_options?: SepaDebit.MandateOptions;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: SepaDebit.SetupFutureUsage;

        /**
         * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
         */
        target_date?: string;
      }

      export interface Sofort {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Swish {
        /**
         * The order reference that will be displayed to customers in the Swish application. Defaults to the `id` of the Payment Intent.
         */
        reference: string | null;
      }

      export interface Twint {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface UsBankAccount {
        financial_connections?: UsBankAccount.FinancialConnections;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: UsBankAccount.SetupFutureUsage;

        /**
         * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
         */
        target_date?: string;

        /**
         * Bank account verification method.
         */
        verification_method?: UsBankAccount.VerificationMethod;
      }

      export namespace AcssDebit {
        export type Currency = 'cad' | 'usd';

        export interface MandateOptions {
          /**
           * A URL for custom mandate text
           */
          custom_mandate_url?: string;

          /**
           * List of Stripe products where this mandate can be selected automatically. Returned when the Session is in `setup` mode.
           */
          default_for?: Array<MandateOptions.DefaultFor>;

          /**
           * Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'.
           */
          interval_description: string | null;

          /**
           * Payment schedule for the mandate.
           */
          payment_schedule: MandateOptions.PaymentSchedule | null;

          /**
           * Transaction type of the mandate.
           */
          transaction_type: MandateOptions.TransactionType | null;
        }

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

        export type VerificationMethod =
          | 'automatic'
          | 'instant'
          | 'microdeposits';

        export namespace MandateOptions {
          export type DefaultFor = 'invoice' | 'subscription';

          export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

          export type TransactionType = 'business' | 'personal';
        }
      }

      export namespace AmazonPay {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      export namespace BacsDebit {
        export interface MandateOptions {
          /**
           * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'DDIC' or 'STRIPE'.
           */
          reference_prefix?: string;
        }

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      export namespace Boleto {
        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      export namespace Card {
        export interface Installments {
          /**
           * Indicates if installments are enabled
           */
          enabled?: boolean;
        }

        export type RequestExtendedAuthorization = 'if_available' | 'never';

        export type RequestIncrementalAuthorization = 'if_available' | 'never';

        export type RequestMulticapture = 'if_available' | 'never';

        export type RequestOvercapture = 'if_available' | 'never';

        export type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';

        export interface Restrictions {
          /**
           * Specify the card brands to block in the Checkout Session. If a customer enters or selects a card belonging to a blocked brand, they can't complete the Session.
           */
          brands_blocked?: Array<Restrictions.BrandsBlocked>;
        }

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

        export namespace Restrictions {
          export type BrandsBlocked =
            | 'american_express'
            | 'discover_global_network'
            | 'mastercard'
            | 'visa';
        }
      }

      export namespace CustomerBalance {
        export interface BankTransfer {
          eu_bank_transfer?: BankTransfer.EuBankTransfer;

          /**
           * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
           *
           * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
           */
          requested_address_types?: Array<BankTransfer.RequestedAddressType>;

          /**
           * The bank transfer type that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
           */
          type: BankTransfer.Type | null;
        }

        export namespace BankTransfer {
          export interface EuBankTransfer {
            /**
             * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
             */
            country: EuBankTransfer.Country;
          }

          export type RequestedAddressType =
            | 'aba'
            | 'iban'
            | 'sepa'
            | 'sort_code'
            | 'spei'
            | 'swift'
            | 'zengin';

          export type Type =
            | 'eu_bank_transfer'
            | 'gb_bank_transfer'
            | 'jp_bank_transfer'
            | 'mx_bank_transfer'
            | 'us_bank_transfer';

          export namespace EuBankTransfer {
            export type Country = 'BE' | 'DE' | 'ES' | 'FR' | 'IE' | 'NL';
          }
        }
      }

      export namespace KakaoPay {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      export namespace Klarna {
        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      export namespace KrCard {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      export namespace Link {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      export namespace NaverPay {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      export namespace Paypal {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      export namespace Pix {
        export type AmountIncludesIof = 'always' | 'never';
      }

      export namespace RevolutPay {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      export namespace SepaDebit {
        export interface MandateOptions {
          /**
           * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'STRIPE'.
           */
          reference_prefix?: string;
        }

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      export namespace UsBankAccount {
        export interface FinancialConnections {
          filters?: FinancialConnections.Filters;

          /**
           * The list of permissions to request. The `payment_method` permission must be included.
           */
          permissions?: Array<FinancialConnections.Permission>;

          /**
           * Data features requested to be retrieved upon account creation.
           */
          prefetch: Array<FinancialConnections.Prefetch> | null;

          /**
           * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
           */
          return_url?: string;
        }

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

        export type VerificationMethod = 'automatic' | 'instant';

        export namespace FinancialConnections {
          export interface Filters {
            /**
             * The account subcategories to use to filter for possible accounts to link. Valid subcategories are `checking` and `savings`.
             */
            account_subcategories?: Array<Filters.AccountSubcategory>;
          }

          export type Permission =
            | 'balances'
            | 'ownership'
            | 'payment_method'
            | 'transactions';

          export type Prefetch = 'balances' | 'ownership' | 'transactions';

          export namespace Filters {
            export type AccountSubcategory = 'checking' | 'savings';
          }
        }
      }
    }

    export namespace Permissions {
      export type UpdateShippingDetails = 'client_only' | 'server_only';
    }

    export namespace SavedPaymentMethodOptions {
      export type AllowRedisplayFilter = 'always' | 'limited' | 'unspecified';

      export type PaymentMethodRemove = 'disabled' | 'enabled';

      export type PaymentMethodSave = 'disabled' | 'enabled';
    }

    export namespace ShippingAddressCollection {
      export type AllowedCountry =
        | 'AC'
        | 'AD'
        | 'AE'
        | 'AF'
        | 'AG'
        | 'AI'
        | 'AL'
        | 'AM'
        | 'AO'
        | 'AQ'
        | 'AR'
        | 'AT'
        | 'AU'
        | 'AW'
        | 'AX'
        | 'AZ'
        | 'BA'
        | 'BB'
        | 'BD'
        | 'BE'
        | 'BF'
        | 'BG'
        | 'BH'
        | 'BI'
        | 'BJ'
        | 'BL'
        | 'BM'
        | 'BN'
        | 'BO'
        | 'BQ'
        | 'BR'
        | 'BS'
        | 'BT'
        | 'BV'
        | 'BW'
        | 'BY'
        | 'BZ'
        | 'CA'
        | 'CD'
        | 'CF'
        | 'CG'
        | 'CH'
        | 'CI'
        | 'CK'
        | 'CL'
        | 'CM'
        | 'CN'
        | 'CO'
        | 'CR'
        | 'CV'
        | 'CW'
        | 'CY'
        | 'CZ'
        | 'DE'
        | 'DJ'
        | 'DK'
        | 'DM'
        | 'DO'
        | 'DZ'
        | 'EC'
        | 'EE'
        | 'EG'
        | 'EH'
        | 'ER'
        | 'ES'
        | 'ET'
        | 'FI'
        | 'FJ'
        | 'FK'
        | 'FO'
        | 'FR'
        | 'GA'
        | 'GB'
        | 'GD'
        | 'GE'
        | 'GF'
        | 'GG'
        | 'GH'
        | 'GI'
        | 'GL'
        | 'GM'
        | 'GN'
        | 'GP'
        | 'GQ'
        | 'GR'
        | 'GS'
        | 'GT'
        | 'GU'
        | 'GW'
        | 'GY'
        | 'HK'
        | 'HN'
        | 'HR'
        | 'HT'
        | 'HU'
        | 'ID'
        | 'IE'
        | 'IL'
        | 'IM'
        | 'IN'
        | 'IO'
        | 'IQ'
        | 'IS'
        | 'IT'
        | 'JE'
        | 'JM'
        | 'JO'
        | 'JP'
        | 'KE'
        | 'KG'
        | 'KH'
        | 'KI'
        | 'KM'
        | 'KN'
        | 'KR'
        | 'KW'
        | 'KY'
        | 'KZ'
        | 'LA'
        | 'LB'
        | 'LC'
        | 'LI'
        | 'LK'
        | 'LR'
        | 'LS'
        | 'LT'
        | 'LU'
        | 'LV'
        | 'LY'
        | 'MA'
        | 'MC'
        | 'MD'
        | 'ME'
        | 'MF'
        | 'MG'
        | 'MK'
        | 'ML'
        | 'MM'
        | 'MN'
        | 'MO'
        | 'MQ'
        | 'MR'
        | 'MS'
        | 'MT'
        | 'MU'
        | 'MV'
        | 'MW'
        | 'MX'
        | 'MY'
        | 'MZ'
        | 'NA'
        | 'NC'
        | 'NE'
        | 'NG'
        | 'NI'
        | 'NL'
        | 'NO'
        | 'NP'
        | 'NR'
        | 'NU'
        | 'NZ'
        | 'OM'
        | 'PA'
        | 'PE'
        | 'PF'
        | 'PG'
        | 'PH'
        | 'PK'
        | 'PL'
        | 'PM'
        | 'PN'
        | 'PR'
        | 'PS'
        | 'PT'
        | 'PY'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RS'
        | 'RU'
        | 'RW'
        | 'SA'
        | 'SB'
        | 'SC'
        | 'SD'
        | 'SE'
        | 'SG'
        | 'SH'
        | 'SI'
        | 'SJ'
        | 'SK'
        | 'SL'
        | 'SM'
        | 'SN'
        | 'SO'
        | 'SR'
        | 'SS'
        | 'ST'
        | 'SV'
        | 'SX'
        | 'SZ'
        | 'TA'
        | 'TC'
        | 'TD'
        | 'TF'
        | 'TG'
        | 'TH'
        | 'TJ'
        | 'TK'
        | 'TL'
        | 'TM'
        | 'TN'
        | 'TO'
        | 'TR'
        | 'TT'
        | 'TV'
        | 'TW'
        | 'TZ'
        | 'UA'
        | 'UG'
        | 'US'
        | 'UY'
        | 'UZ'
        | 'VA'
        | 'VC'
        | 'VE'
        | 'VG'
        | 'VN'
        | 'VU'
        | 'WF'
        | 'WS'
        | 'XK'
        | 'YE'
        | 'YT'
        | 'ZA'
        | 'ZM'
        | 'ZW'
        | 'ZZ';
    }

    export namespace ShippingCost {
      export interface Tax {
        /**
         * Amount of tax applied for this rate.
         */
        amount: number;

        /**
         * Tax rates can be applied to [invoices](https://docs.stripe.com/invoicing/taxes/tax-rates), [subscriptions](https://docs.stripe.com/billing/taxes/tax-rates) and [Checkout Sessions](https://docs.stripe.com/payments/checkout/use-manual-tax-rates) to collect tax.
         *
         * Related guide: [Tax rates](https://docs.stripe.com/billing/taxes/tax-rates)
         */
        rate: TaxRate;

        /**
         * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
         */
        taxability_reason: Tax.TaxabilityReason | null;

        /**
         * The amount on which tax is calculated, in cents (or local equivalent).
         */
        taxable_amount: number | null;
      }

      export namespace Tax {
        export type TaxabilityReason =
          | 'customer_exempt'
          | 'not_collecting'
          | 'not_subject_to_tax'
          | 'not_supported'
          | 'portion_product_exempt'
          | 'portion_reduced_rated'
          | 'portion_standard_rated'
          | 'product_exempt'
          | 'product_exempt_holiday'
          | 'proportionally_rated'
          | 'reduced_rated'
          | 'reverse_charge'
          | 'standard_rated'
          | 'taxable_basis_reduced'
          | 'zero_rated';
      }
    }

    export namespace TaxIdCollection {
      export type Required = 'if_supported' | 'never';
    }

    export namespace TotalDetails {
      export interface Breakdown {
        /**
         * The aggregated discounts.
         */
        discounts: Array<Breakdown.Discount>;

        /**
         * The aggregated tax amounts by rate.
         */
        taxes: Array<Breakdown.Tax>;
      }

      export namespace Breakdown {
        export interface Discount {
          /**
           * The amount discounted.
           */
          amount: number;

          /**
           * A discount represents the actual application of a [coupon](https://stripe.com/docs/api#coupons) or [promotion code](https://stripe.com/docs/api#promotion_codes).
           * It contains information about when the discount began, when it will end, and what it is applied to.
           *
           * Related guide: [Applying discounts to subscriptions](https://stripe.com/docs/billing/subscriptions/discounts)
           */
          discount: Discount;
        }

        export interface Tax {
          /**
           * Amount of tax applied for this rate.
           */
          amount: number;

          /**
           * Tax rates can be applied to [invoices](https://docs.stripe.com/invoicing/taxes/tax-rates), [subscriptions](https://docs.stripe.com/billing/taxes/tax-rates) and [Checkout Sessions](https://docs.stripe.com/payments/checkout/use-manual-tax-rates) to collect tax.
           *
           * Related guide: [Tax rates](https://docs.stripe.com/billing/taxes/tax-rates)
           */
          rate: TaxRate;

          /**
           * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
           */
          taxability_reason: Tax.TaxabilityReason | null;

          /**
           * The amount on which tax is calculated, in cents (or local equivalent).
           */
          taxable_amount: number | null;
        }

        export namespace Tax {
          export type TaxabilityReason =
            | 'customer_exempt'
            | 'not_collecting'
            | 'not_subject_to_tax'
            | 'not_supported'
            | 'portion_product_exempt'
            | 'portion_reduced_rated'
            | 'portion_standard_rated'
            | 'product_exempt'
            | 'product_exempt_holiday'
            | 'proportionally_rated'
            | 'reduced_rated'
            | 'reverse_charge'
            | 'standard_rated'
            | 'taxable_basis_reduced'
            | 'zero_rated';
        }
      }
    }

    export namespace WalletOptions {
      export interface Link {
        /**
         * Describes whether Checkout should display Link. Defaults to `auto`.
         */
        display?: Link.Display;
      }

      export namespace Link {
        export type Display = 'auto' | 'never';
      }
    }
  }
}
export namespace Checkout {
  export interface SessionCreateParams {
    /**
     * Settings for price localization with [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing).
     */
    adaptive_pricing?: SessionCreateParams.AdaptivePricing;

    /**
     * Configure actions after a Checkout Session has expired.
     */
    after_expiration?: SessionCreateParams.AfterExpiration;

    /**
     * Enables user redeemable promotion codes.
     */
    allow_promotion_codes?: boolean;

    /**
     * Settings for automatic tax lookup for this session and resulting payments, invoices, and subscriptions.
     */
    automatic_tax?: SessionCreateParams.AutomaticTax;

    /**
     * Specify whether Checkout should collect the customer's billing address. Defaults to `auto`.
     */
    billing_address_collection?: SessionCreateParams.BillingAddressCollection;

    /**
     * The branding settings for the Checkout Session. This parameter is not allowed if ui_mode is `custom`.
     */
    branding_settings?: SessionCreateParams.BrandingSettings;

    /**
     * If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website. This parameter is not allowed if ui_mode is `embedded` or `custom`.
     */
    cancel_url?: string;

    /**
     * A unique string to reference the Checkout Session. This can be a
     * customer ID, a cart ID, or similar, and can be used to reconcile the
     * session with your internal systems.
     */
    client_reference_id?: string;

    /**
     * Configure fields for the Checkout Session to gather active consent from customers.
     */
    consent_collection?: SessionCreateParams.ConsentCollection;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). Required in `setup` mode when `payment_method_types` is not set.
     */
    currency?: string;

    /**
     * Collect additional information from your customer using custom fields. Up to 3 fields are supported.
     */
    custom_fields?: Array<SessionCreateParams.CustomField>;

    /**
     * Display additional text for your customers using custom text.
     */
    custom_text?: SessionCreateParams.CustomText;

    /**
     * ID of an existing Customer, if one exists. In `payment` mode, the customer's most recently saved card
     * payment method will be used to prefill the email, name, card details, and billing address
     * on the Checkout page. In `subscription` mode, the customer's [default payment method](https://stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method)
     * will be used if it's a card, otherwise the most recently saved card will be used. A valid billing address, billing name and billing email are required on the payment method for Checkout to prefill the customer's card details.
     *
     * If the Customer already has a valid [email](https://stripe.com/docs/api/customers/object#customer_object-email) set, the email will be prefilled and not editable in Checkout.
     * If the Customer does not have a valid `email`, Checkout will set the email entered during the session on the Customer.
     *
     * If blank for Checkout Sessions in `subscription` mode or with `customer_creation` set as `always` in `payment` mode, Checkout will create a new Customer object based on information provided during the payment flow.
     *
     * You can set [`payment_intent_data.setup_future_usage`](https://stripe.com/docs/api/checkout/sessions/create#create_checkout_session-payment_intent_data-setup_future_usage) to have Checkout automatically attach the payment method to the Customer you pass in for future reuse.
     */
    customer?: string;

    /**
     * Configure whether a Checkout Session creates a [Customer](https://stripe.com/docs/api/customers) during Session confirmation.
     *
     * When a Customer is not created, you can still retrieve email, address, and other customer data entered in Checkout
     * with [customer_details](https://stripe.com/docs/api/checkout/sessions/object#checkout_session_object-customer_details).
     *
     * Sessions that don't create Customers instead are grouped by [guest customers](https://stripe.com/docs/payments/checkout/guest-customers)
     * in the Dashboard. Promotion codes limited to first time customers will return invalid for these Sessions.
     *
     * Can only be set in `payment` and `setup` mode.
     */
    customer_creation?: SessionCreateParams.CustomerCreation;

    /**
     * If provided, this value will be used when the Customer object is created.
     * If not provided, customers will be asked to enter their email address.
     * Use this parameter to prefill customer data if you already have an email
     * on file. To access information about the customer once a session is
     * complete, use the `customer` field.
     */
    customer_email?: string;

    /**
     * Controls what fields on Customer can be updated by the Checkout Session. Can only be provided when `customer` is provided.
     */
    customer_update?: SessionCreateParams.CustomerUpdate;

    /**
     * The coupon or promotion code to apply to this Session. Currently, only up to one may be specified.
     */
    discounts?: Array<SessionCreateParams.Discount>;

    /**
     * A list of the types of payment methods (e.g., `card`) that should be excluded from this Checkout Session. This should only be used when payment methods for this Checkout Session are managed through the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
     */
    excluded_payment_method_types?: Array<
      SessionCreateParams.ExcludedPaymentMethodType
    >;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The Epoch time in seconds at which the Checkout Session will expire. It can be anywhere from 30 minutes to 24 hours after Checkout Session creation. By default, this value is 24 hours from creation.
     */
    expires_at?: number;

    /**
     * Generate a post-purchase Invoice for one-time payments.
     */
    invoice_creation?: SessionCreateParams.InvoiceCreation;

    /**
     * A list of items the customer is purchasing. Use this parameter to pass one-time or recurring [Prices](https://stripe.com/docs/api/prices). The parameter is required for `payment` and `subscription` mode.
     *
     * For `payment` mode, there is a maximum of 100 line items, however it is recommended to consolidate line items if there are more than a few dozen.
     *
     * For `subscription` mode, there is a maximum of 20 line items with recurring Prices and 20 line items with one-time Prices. Line items with one-time Prices will be on the initial invoice only.
     */
    line_items?: Array<SessionCreateParams.LineItem>;

    /**
     * The IETF language tag of the locale Checkout is displayed in. If blank or `auto`, the browser's locale is used.
     */
    locale?: SessionCreateParams.Locale;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;

    /**
     * The mode of the Checkout Session. Pass `subscription` if the Checkout Session includes at least one recurring item.
     */
    mode?: SessionCreateParams.Mode;

    /**
     * Controls name collection settings for the session.
     *
     * You can configure Checkout to collect your customers' business names, individual names, or both. Each name field can be either required or optional.
     *
     * If a [Customer](https://stripe.com/docs/api/customers) is created or provided, the names can be saved to the Customer object as well.
     */
    name_collection?: SessionCreateParams.NameCollection;

    /**
     * A list of optional items the customer can add to their order at checkout. Use this parameter to pass one-time or recurring [Prices](https://stripe.com/docs/api/prices).
     *
     * There is a maximum of 10 optional items allowed on a Checkout Session, and the existing limits on the number of line items allowed on a Checkout Session apply to the combined number of line items and optional items.
     *
     * For `payment` mode, there is a maximum of 100 combined line items and optional items, however it is recommended to consolidate items if there are more than a few dozen.
     *
     * For `subscription` mode, there is a maximum of 20 line items and optional items with recurring Prices and 20 line items and optional items with one-time Prices.
     */
    optional_items?: Array<SessionCreateParams.OptionalItem>;

    /**
     * Where the user is coming from. This informs the optimizations that are applied to the session.
     */
    origin_context?: SessionCreateParams.OriginContext;

    /**
     * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
     */
    payment_intent_data?: SessionCreateParams.PaymentIntentData;

    /**
     * Specify whether Checkout should collect a payment method. When set to `if_required`, Checkout will not collect a payment method when the total due for the session is 0.
     * This may occur if the Checkout Session includes a free trial or a discount.
     *
     * Can only be set in `subscription` mode. Defaults to `always`.
     *
     * If you'd like information on how to collect a payment method outside of Checkout, read the guide on configuring [subscriptions with a free trial](https://stripe.com/docs/payments/checkout/free-trials).
     */
    payment_method_collection?: SessionCreateParams.PaymentMethodCollection;

    /**
     * The ID of the payment method configuration to use with this Checkout session.
     */
    payment_method_configuration?: string;

    /**
     * This parameter allows you to set some attributes on the payment method created during a Checkout session.
     */
    payment_method_data?: SessionCreateParams.PaymentMethodData;

    /**
     * Payment-method-specific configuration.
     */
    payment_method_options?: SessionCreateParams.PaymentMethodOptions;

    /**
     * A list of the types of payment methods (e.g., `card`) this Checkout Session can accept.
     *
     * You can omit this attribute to manage your payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
     * See [Dynamic Payment Methods](https://stripe.com/docs/payments/payment-methods/integration-options#using-dynamic-payment-methods) for more details.
     *
     * Read more about the supported payment methods and their requirements in our [payment
     * method details guide](https://docs.stripe.com/docs/payments/checkout/payment-methods).
     *
     * If multiple payment methods are passed, Checkout will dynamically reorder them to
     * prioritize the most relevant payment methods based on the customer's location and
     * other characteristics.
     */
    payment_method_types?: Array<SessionCreateParams.PaymentMethodType>;

    /**
     * This property is used to set up permissions for various actions (e.g., update) on the CheckoutSession object. Can only be set when creating `embedded` or `custom` sessions.
     *
     * For specific permissions, please refer to their dedicated subsections, such as `permissions.update_shipping_details`.
     */
    permissions?: SessionCreateParams.Permissions;

    /**
     * Controls phone number collection settings for the session.
     *
     * We recommend that you review your privacy policy and check with your legal contacts
     * before using this feature. Learn more about [collecting phone numbers with Checkout](https://stripe.com/docs/payments/checkout/phone-numbers).
     */
    phone_number_collection?: SessionCreateParams.PhoneNumberCollection;

    /**
     * This parameter applies to `ui_mode: embedded`. Learn more about the [redirect behavior](https://stripe.com/docs/payments/checkout/custom-success-page?payment-ui=embedded-form) of embedded sessions. Defaults to `always`.
     */
    redirect_on_completion?: SessionCreateParams.RedirectOnCompletion;

    /**
     * The URL to redirect your customer back to after they authenticate or cancel their payment on the
     * payment method's app or site. This parameter is required if `ui_mode` is `embedded` or `custom`
     * and redirect-based payment methods are enabled on the session.
     */
    return_url?: string;

    /**
     * Controls saved payment method settings for the session. Only available in `payment` and `subscription` mode.
     */
    saved_payment_method_options?: SessionCreateParams.SavedPaymentMethodOptions;

    /**
     * A subset of parameters to be passed to SetupIntent creation for Checkout Sessions in `setup` mode.
     */
    setup_intent_data?: SessionCreateParams.SetupIntentData;

    /**
     * When set, provides configuration for Checkout to collect a shipping address from a customer.
     */
    shipping_address_collection?: SessionCreateParams.ShippingAddressCollection;

    /**
     * The shipping rate options to apply to this Session. Up to a maximum of 5.
     */
    shipping_options?: Array<SessionCreateParams.ShippingOption>;

    /**
     * Describes the type of transaction being performed by Checkout in order
     * to customize relevant text on the page, such as the submit button.
     *  `submit_type` can only be specified on Checkout Sessions in
     * `payment` or `subscription` mode. If blank or `auto`, `pay` is used.
     */
    submit_type?: SessionCreateParams.SubmitType;

    /**
     * A subset of parameters to be passed to subscription creation for Checkout Sessions in `subscription` mode.
     */
    subscription_data?: SessionCreateParams.SubscriptionData;

    /**
     * The URL to which Stripe should send customers when payment or setup
     * is complete.
     * This parameter is not allowed if ui_mode is `embedded` or `custom`. If you'd like to use
     * information from the successful Checkout Session on your page, read the
     * guide on [customizing your success page](https://stripe.com/docs/payments/checkout/custom-success-page).
     */
    success_url?: string;

    /**
     * Controls tax ID collection during checkout.
     */
    tax_id_collection?: SessionCreateParams.TaxIdCollection;

    /**
     * The UI mode of the Session. Defaults to `hosted`.
     */
    ui_mode?: SessionCreateParams.UiMode;

    /**
     * Wallet-specific configuration.
     */
    wallet_options?: SessionCreateParams.WalletOptions;
  }

  export namespace SessionCreateParams {
    export interface AdaptivePricing {
      /**
       * If set to `true`, Adaptive Pricing is available on [eligible sessions](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing?payment-ui=stripe-hosted#restrictions). Defaults to your [dashboard setting](https://dashboard.stripe.com/settings/adaptive-pricing).
       */
      enabled?: boolean;
    }

    export interface AfterExpiration {
      /**
       * Configure a Checkout Session that can be used to recover an expired session.
       */
      recovery?: AfterExpiration.Recovery;
    }

    export interface AutomaticTax {
      /**
       * Set to `true` to [calculate tax automatically](https://docs.stripe.com/tax) using the customer's location.
       *
       * Enabling this parameter causes Checkout to collect any billing address information necessary for tax calculation.
       */
      enabled: boolean;

      /**
       * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
       */
      liability?: AutomaticTax.Liability;
    }

    export type BillingAddressCollection = 'auto' | 'required';

    export interface BrandingSettings {
      /**
       * A hex color value starting with `#` representing the background color for the Checkout Session.
       */
      background_color?: Emptyable<string>;

      /**
       * The border style for the Checkout Session.
       */
      border_style?: Emptyable<BrandingSettings.BorderStyle>;

      /**
       * A hex color value starting with `#` representing the button color for the Checkout Session.
       */
      button_color?: Emptyable<string>;

      /**
       * A string to override the business name shown on the Checkout Session. This only shows at the top of the Checkout page, and your business name still appears in terms, receipts, and other places.
       */
      display_name?: string;

      /**
       * The font family for the Checkout Session corresponding to one of the [supported font families](https://docs.stripe.com/payments/checkout/customization/appearance?payment-ui=stripe-hosted#font-compatibility).
       */
      font_family?: Emptyable<BrandingSettings.FontFamily>;

      /**
       * The icon for the Checkout Session. For best results, use a square image.
       */
      icon?: BrandingSettings.Icon;

      /**
       * The logo for the Checkout Session.
       */
      logo?: BrandingSettings.Logo;
    }

    export interface ConsentCollection {
      /**
       * Determines the display of payment method reuse agreement text in the UI. If set to `hidden`, it will hide legal text related to the reuse of a payment method.
       */
      payment_method_reuse_agreement?: ConsentCollection.PaymentMethodReuseAgreement;

      /**
       * If set to `auto`, enables the collection of customer consent for promotional communications. The Checkout
       * Session will determine whether to display an option to opt into promotional communication
       * from the merchant depending on the customer's locale. Only available to US merchants.
       */
      promotions?: ConsentCollection.Promotions;

      /**
       * If set to `required`, it requires customers to check a terms of service checkbox before being able to pay.
       * There must be a valid terms of service URL set in your [Dashboard settings](https://dashboard.stripe.com/settings/public).
       */
      terms_of_service?: ConsentCollection.TermsOfService;
    }

    export interface CustomField {
      /**
       * Configuration for `type=dropdown` fields.
       */
      dropdown?: CustomField.Dropdown;

      /**
       * String of your choice that your integration can use to reconcile this field. Must be unique to this field, alphanumeric, and up to 200 characters.
       */
      key: string;

      /**
       * The label for the field, displayed to the customer.
       */
      label: CustomField.Label;

      /**
       * Configuration for `type=numeric` fields.
       */
      numeric?: CustomField.Numeric;

      /**
       * Whether the customer is required to complete the field before completing the Checkout Session. Defaults to `false`.
       */
      optional?: boolean;

      /**
       * Configuration for `type=text` fields.
       */
      text?: CustomField.Text;

      /**
       * The type of the field.
       */
      type: CustomField.Type;
    }

    export interface CustomText {
      /**
       * Custom text that should be displayed after the payment confirmation button.
       */
      after_submit?: Emptyable<CustomText.AfterSubmit>;

      /**
       * Custom text that should be displayed alongside shipping address collection.
       */
      shipping_address?: Emptyable<CustomText.ShippingAddress>;

      /**
       * Custom text that should be displayed alongside the payment confirmation button.
       */
      submit?: Emptyable<CustomText.Submit>;

      /**
       * Custom text that should be displayed in place of the default terms of service agreement text.
       */
      terms_of_service_acceptance?: Emptyable<
        CustomText.TermsOfServiceAcceptance
      >;
    }

    export type CustomerCreation = 'always' | 'if_required';

    export interface CustomerUpdate {
      /**
       * Describes whether Checkout saves the billing address onto `customer.address`.
       * To always collect a full billing address, use `billing_address_collection`. Defaults to `never`.
       */
      address?: CustomerUpdate.Address;

      /**
       * Describes whether Checkout saves the name onto `customer.name`. Defaults to `never`.
       */
      name?: CustomerUpdate.Name;

      /**
       * Describes whether Checkout saves shipping information onto `customer.shipping`.
       * To collect shipping information, use `shipping_address_collection`. Defaults to `never`.
       */
      shipping?: CustomerUpdate.Shipping;
    }

    export interface Discount {
      /**
       * The ID of the coupon to apply to this Session.
       */
      coupon?: string;

      /**
       * The ID of a promotion code to apply to this Session.
       */
      promotion_code?: string;
    }

    export type ExcludedPaymentMethodType =
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
      | 'cashapp'
      | 'crypto'
      | 'customer_balance'
      | 'eps'
      | 'fpx'
      | 'giropay'
      | 'grabpay'
      | 'ideal'
      | 'kakao_pay'
      | 'klarna'
      | 'konbini'
      | 'kr_card'
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

    export interface InvoiceCreation {
      /**
       * Set to `true` to enable invoice creation.
       */
      enabled: boolean;

      /**
       * Parameters passed when creating invoices for payment-mode Checkout Sessions.
       */
      invoice_data?: InvoiceCreation.InvoiceData;
    }

    export interface LineItem {
      /**
       * When set, provides configuration for this item's quantity to be adjusted by the customer during Checkout.
       */
      adjustable_quantity?: LineItem.AdjustableQuantity;

      /**
       * The [tax rates](https://stripe.com/docs/api/tax_rates) that will be applied to this line item depending on the customer's billing/shipping address. We currently support the following countries: US, GB, AU, and all countries in the EU.
       */
      dynamic_tax_rates?: Array<string>;

      /**
       * The ID of the [Price](https://stripe.com/docs/api/prices) or [Plan](https://stripe.com/docs/api/plans) object. One of `price` or `price_data` is required.
       */
      price?: string;

      /**
       * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price` or `price_data` is required.
       */
      price_data?: LineItem.PriceData;

      /**
       * The quantity of the line item being purchased. Quantity should not be defined when `recurring.usage_type=metered`.
       */
      quantity?: number;

      /**
       * The [tax rates](https://stripe.com/docs/api/tax_rates) which apply to this line item.
       */
      tax_rates?: Array<string>;
    }

    export type Locale =
      | 'auto'
      | 'bg'
      | 'cs'
      | 'da'
      | 'de'
      | 'el'
      | 'en'
      | 'en-GB'
      | 'es'
      | 'es-419'
      | 'et'
      | 'fi'
      | 'fil'
      | 'fr'
      | 'fr-CA'
      | 'hr'
      | 'hu'
      | 'id'
      | 'it'
      | 'ja'
      | 'ko'
      | 'lt'
      | 'lv'
      | 'ms'
      | 'mt'
      | 'nb'
      | 'nl'
      | 'pl'
      | 'pt'
      | 'pt-BR'
      | 'ro'
      | 'ru'
      | 'sk'
      | 'sl'
      | 'sv'
      | 'th'
      | 'tr'
      | 'vi'
      | 'zh'
      | 'zh-HK'
      | 'zh-TW';

    export type Mode = 'payment' | 'setup' | 'subscription';

    export interface NameCollection {
      /**
       * Controls settings applied for collecting the customer's business name on the session.
       */
      business?: NameCollection.Business;

      /**
       * Controls settings applied for collecting the customer's individual name on the session.
       */
      individual?: NameCollection.Individual;
    }

    export interface OptionalItem {
      /**
       * When set, provides configuration for the customer to adjust the quantity of the line item created when a customer chooses to add this optional item to their order.
       */
      adjustable_quantity?: OptionalItem.AdjustableQuantity;

      /**
       * The ID of the [Price](https://stripe.com/docs/api/prices) or [Plan](https://stripe.com/docs/api/plans) object.
       */
      price: string;

      /**
       * The initial quantity of the line item created when a customer chooses to add this optional item to their order.
       */
      quantity: number;
    }

    export type OriginContext = 'mobile_app' | 'web';

    export interface PaymentIntentData {
      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total amount captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
       */
      application_fee_amount?: number;

      /**
       * Controls when the funds will be captured from the customer's account.
       */
      capture_method?: PaymentIntentData.CaptureMethod;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam;

      /**
       * The Stripe account ID for which these funds are intended. For details,
       * see the PaymentIntents [use case for connected
       * accounts](https://docs.stripe.com/docs/payments/connected-accounts).
       */
      on_behalf_of?: string;

      /**
       * Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
       */
      receipt_email?: string;

      /**
       * Indicates that you intend to [make future payments](https://stripe.com/docs/payments/payment-intents#future-usage) with the payment
       * method collected by this Checkout Session.
       *
       * When setting this to `on_session`, Checkout will show a notice to the
       * customer that their payment details will be saved.
       *
       * When setting this to `off_session`, Checkout will show a notice to the
       * customer that their payment details will be saved and used for future
       * payments.
       *
       * If a Customer has been provided or Checkout creates a new Customer,
       * Checkout will attach the payment method to the Customer.
       *
       * If Checkout does not create a Customer, the payment method is not attached
       * to a Customer. To reuse the payment method, you can retrieve it from the
       * Checkout Session's PaymentIntent.
       *
       * When processing card payments, Checkout also uses `setup_future_usage`
       * to dynamically optimize your payment flow and comply with regional
       * legislation and network rules, such as SCA.
       */
      setup_future_usage?: PaymentIntentData.SetupFutureUsage;

      /**
       * Shipping information for this payment.
       */
      shipping?: PaymentIntentData.Shipping;

      /**
       * Text that appears on the customer's statement as the statement descriptor for a non-card charge. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
       *
       * Setting this value for a card charge returns an error. For card charges, set the [statement_descriptor_suffix](https://docs.stripe.com/get-started/account/statement-descriptors#dynamic) instead.
       */
      statement_descriptor?: string;

      /**
       * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement.
       */
      statement_descriptor_suffix?: string;

      /**
       * The parameters used to automatically create a Transfer when the payment succeeds.
       * For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
       */
      transfer_data?: PaymentIntentData.TransferData;

      /**
       * A string that identifies the resulting payment as part of a group. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/connect/separate-charges-and-transfers) for details.
       */
      transfer_group?: string;
    }

    export type PaymentMethodCollection = 'always' | 'if_required';

    export interface PaymentMethodData {
      /**
       * Allow redisplay will be set on the payment method on confirmation and indicates whether this payment method can be shown again to the customer in a checkout flow. Only set this field if you wish to override the allow_redisplay value determined by Checkout.
       */
      allow_redisplay?: PaymentMethodData.AllowRedisplay;
    }

    export interface PaymentMethodOptions {
      /**
       * contains details about the ACSS Debit payment method options.
       */
      acss_debit?: PaymentMethodOptions.AcssDebit;

      /**
       * contains details about the Affirm payment method options.
       */
      affirm?: PaymentMethodOptions.Affirm;

      /**
       * contains details about the Afterpay Clearpay payment method options.
       */
      afterpay_clearpay?: PaymentMethodOptions.AfterpayClearpay;

      /**
       * contains details about the Alipay payment method options.
       */
      alipay?: PaymentMethodOptions.Alipay;

      /**
       * contains details about the Alma payment method options.
       */
      alma?: PaymentMethodOptions.Alma;

      /**
       * contains details about the AmazonPay payment method options.
       */
      amazon_pay?: PaymentMethodOptions.AmazonPay;

      /**
       * contains details about the AU Becs Debit payment method options.
       */
      au_becs_debit?: PaymentMethodOptions.AuBecsDebit;

      /**
       * contains details about the Bacs Debit payment method options.
       */
      bacs_debit?: PaymentMethodOptions.BacsDebit;

      /**
       * contains details about the Bancontact payment method options.
       */
      bancontact?: PaymentMethodOptions.Bancontact;

      /**
       * contains details about the Billie payment method options.
       */
      billie?: PaymentMethodOptions.Billie;

      /**
       * contains details about the Boleto payment method options.
       */
      boleto?: PaymentMethodOptions.Boleto;

      /**
       * contains details about the Card payment method options.
       */
      card?: PaymentMethodOptions.Card;

      /**
       * contains details about the Cashapp Pay payment method options.
       */
      cashapp?: PaymentMethodOptions.Cashapp;

      /**
       * contains details about the Customer Balance payment method options.
       */
      customer_balance?: PaymentMethodOptions.CustomerBalance;

      /**
       * contains details about the DemoPay payment method options.
       */
      demo_pay?: PaymentMethodOptions.DemoPay;

      /**
       * contains details about the EPS payment method options.
       */
      eps?: PaymentMethodOptions.Eps;

      /**
       * contains details about the FPX payment method options.
       */
      fpx?: PaymentMethodOptions.Fpx;

      /**
       * contains details about the Giropay payment method options.
       */
      giropay?: PaymentMethodOptions.Giropay;

      /**
       * contains details about the Grabpay payment method options.
       */
      grabpay?: PaymentMethodOptions.Grabpay;

      /**
       * contains details about the Ideal payment method options.
       */
      ideal?: PaymentMethodOptions.Ideal;

      /**
       * contains details about the Kakao Pay payment method options.
       */
      kakao_pay?: PaymentMethodOptions.KakaoPay;

      /**
       * contains details about the Klarna payment method options.
       */
      klarna?: PaymentMethodOptions.Klarna;

      /**
       * contains details about the Konbini payment method options.
       */
      konbini?: PaymentMethodOptions.Konbini;

      /**
       * contains details about the Korean card payment method options.
       */
      kr_card?: PaymentMethodOptions.KrCard;

      /**
       * contains details about the Link payment method options.
       */
      link?: PaymentMethodOptions.Link;

      /**
       * contains details about the Mobilepay payment method options.
       */
      mobilepay?: PaymentMethodOptions.Mobilepay;

      /**
       * contains details about the Multibanco payment method options.
       */
      multibanco?: PaymentMethodOptions.Multibanco;

      /**
       * contains details about the Naver Pay payment method options.
       */
      naver_pay?: PaymentMethodOptions.NaverPay;

      /**
       * contains details about the OXXO payment method options.
       */
      oxxo?: PaymentMethodOptions.Oxxo;

      /**
       * contains details about the P24 payment method options.
       */
      p24?: PaymentMethodOptions.P24;

      /**
       * contains details about the Pay By Bank payment method options.
       */
      pay_by_bank?: PaymentMethodOptions.PayByBank;

      /**
       * contains details about the PAYCO payment method options.
       */
      payco?: PaymentMethodOptions.Payco;

      /**
       * contains details about the PayNow payment method options.
       */
      paynow?: PaymentMethodOptions.Paynow;

      /**
       * contains details about the PayPal payment method options.
       */
      paypal?: PaymentMethodOptions.Paypal;

      /**
       * contains details about the Pix payment method options.
       */
      pix?: PaymentMethodOptions.Pix;

      /**
       * contains details about the RevolutPay payment method options.
       */
      revolut_pay?: PaymentMethodOptions.RevolutPay;

      /**
       * contains details about the Samsung Pay payment method options.
       */
      samsung_pay?: PaymentMethodOptions.SamsungPay;

      /**
       * contains details about the Satispay payment method options.
       */
      satispay?: PaymentMethodOptions.Satispay;

      /**
       * contains details about the Sepa Debit payment method options.
       */
      sepa_debit?: PaymentMethodOptions.SepaDebit;

      /**
       * contains details about the Sofort payment method options.
       */
      sofort?: PaymentMethodOptions.Sofort;

      /**
       * contains details about the Swish payment method options.
       */
      swish?: PaymentMethodOptions.Swish;

      /**
       * contains details about the TWINT payment method options.
       */
      twint?: PaymentMethodOptions.Twint;

      /**
       * contains details about the Us Bank Account payment method options.
       */
      us_bank_account?: PaymentMethodOptions.UsBankAccount;

      /**
       * contains details about the WeChat Pay payment method options.
       */
      wechat_pay?: PaymentMethodOptions.WechatPay;
    }

    export type PaymentMethodType =
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
      | 'cashapp'
      | 'crypto'
      | 'customer_balance'
      | 'eps'
      | 'fpx'
      | 'giropay'
      | 'grabpay'
      | 'ideal'
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

    export interface Permissions {
      /**
       * Determines which entity is allowed to update the shipping details.
       *
       * Default is `client_only`. Stripe Checkout client will automatically update the shipping details. If set to `server_only`, only your server is allowed to update the shipping details.
       *
       * When set to `server_only`, you must add the onShippingDetailsChange event handler when initializing the Stripe Checkout client and manually update the shipping details from your server using the Stripe API.
       */
      update_shipping_details?: Permissions.UpdateShippingDetails;
    }

    export interface PhoneNumberCollection {
      /**
       * Set to `true` to enable phone number collection.
       *
       * Can only be set in `payment` and `subscription` mode.
       */
      enabled: boolean;
    }

    export type RedirectOnCompletion = 'always' | 'if_required' | 'never';

    export interface SavedPaymentMethodOptions {
      /**
       * Uses the `allow_redisplay` value of each saved payment method to filter the set presented to a returning customer. By default, only saved payment methods with 'allow_redisplay: ‘always' are shown in Checkout.
       */
      allow_redisplay_filters?: Array<
        SavedPaymentMethodOptions.AllowRedisplayFilter
      >;

      /**
       * Enable customers to choose if they wish to remove their saved payment methods. Disabled by default.
       */
      payment_method_remove?: SavedPaymentMethodOptions.PaymentMethodRemove;

      /**
       * Enable customers to choose if they wish to save their payment method for future use. Disabled by default.
       */
      payment_method_save?: SavedPaymentMethodOptions.PaymentMethodSave;
    }

    export interface SetupIntentData {
      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam;

      /**
       * The Stripe account for which the setup is intended.
       */
      on_behalf_of?: string;
    }

    export interface ShippingAddressCollection {
      /**
       * An array of two-letter ISO country codes representing which countries Checkout should provide as options for
       * shipping locations.
       */
      allowed_countries: Array<ShippingAddressCollection.AllowedCountry>;
    }

    export interface ShippingOption {
      /**
       * The ID of the Shipping Rate to use for this shipping option.
       */
      shipping_rate?: string;

      /**
       * Parameters to be passed to Shipping Rate creation for this shipping option.
       */
      shipping_rate_data?: ShippingOption.ShippingRateData;
    }

    export type SubmitType = 'auto' | 'book' | 'donate' | 'pay' | 'subscribe';

    export interface SubscriptionData {
      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. To use an application fee percent, the request must be made on behalf of another account, using the `Stripe-Account` header or an OAuth key. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
       */
      application_fee_percent?: number;

      /**
       * A future timestamp to anchor the subscription's billing cycle for new subscriptions.
       */
      billing_cycle_anchor?: number;

      /**
       * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
       */
      billing_mode?: SubscriptionData.BillingMode;

      /**
       * The tax rates that will apply to any subscription item that does not have
       * `tax_rates` set. Invoices created will have their `default_tax_rates` populated
       * from the subscription.
       */
      default_tax_rates?: Array<string>;

      /**
       * The subscription's description, meant to be displayable to the customer.
       * Use this field to optionally store an explanation of the subscription
       * for rendering in the [customer portal](https://stripe.com/docs/customer-management).
       */
      description?: string;

      /**
       * All invoices will be billed using the specified settings.
       */
      invoice_settings?: SubscriptionData.InvoiceSettings;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam;

      /**
       * The account on behalf of which to charge, for each of the subscription's invoices.
       */
      on_behalf_of?: string;

      /**
       * Determines how to handle prorations resulting from the `billing_cycle_anchor`. If no value is passed, the default is `create_prorations`.
       */
      proration_behavior?: SubscriptionData.ProrationBehavior;

      /**
       * If specified, the funds from the subscription's invoices will be transferred to the destination and the ID of the resulting transfers will be found on the resulting charges.
       */
      transfer_data?: SubscriptionData.TransferData;

      /**
       * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. Has to be at least 48 hours in the future.
       */
      trial_end?: number;

      /**
       * Integer representing the number of trial period days before the customer is charged for the first time. Has to be at least 1.
       */
      trial_period_days?: number;

      /**
       * Settings related to subscription trials.
       */
      trial_settings?: SubscriptionData.TrialSettings;
    }

    export interface TaxIdCollection {
      /**
       * Enable tax ID collection during checkout. Defaults to `false`.
       */
      enabled: boolean;

      /**
       * Describes whether a tax ID is required during checkout. Defaults to `never`.
       */
      required?: TaxIdCollection.Required;
    }

    export type UiMode = 'custom' | 'embedded' | 'hosted';

    export interface WalletOptions {
      /**
       * contains details about the Link wallet options.
       */
      link?: WalletOptions.Link;
    }

    export namespace AfterExpiration {
      export interface Recovery {
        /**
         * Enables user redeemable promotion codes on the recovered Checkout Sessions. Defaults to `false`
         */
        allow_promotion_codes?: boolean;

        /**
         * If `true`, a recovery URL will be generated to recover this Checkout Session if it
         * expires before a successful transaction is completed. It will be attached to the
         * Checkout Session object upon expiration.
         */
        enabled: boolean;
      }
    }

    export namespace AutomaticTax {
      export interface Liability {
        /**
         * The connected account being referenced when `type` is `account`.
         */
        account?: string;

        /**
         * Type of the account referenced in the request.
         */
        type: Liability.Type;
      }

      export namespace Liability {
        export type Type = 'account' | 'self';
      }
    }

    export namespace BrandingSettings {
      export type BorderStyle = 'pill' | 'rectangular' | 'rounded';

      export type FontFamily =
        | 'be_vietnam_pro'
        | 'bitter'
        | 'chakra_petch'
        | 'default'
        | 'hahmlet'
        | 'inconsolata'
        | 'inter'
        | 'lato'
        | 'lora'
        | 'm_plus_1_code'
        | 'montserrat'
        | 'noto_sans'
        | 'noto_sans_jp'
        | 'noto_serif'
        | 'nunito'
        | 'open_sans'
        | 'pridi'
        | 'pt_sans'
        | 'pt_serif'
        | 'raleway'
        | 'roboto'
        | 'roboto_slab'
        | 'source_sans_pro'
        | 'titillium_web'
        | 'ubuntu_mono'
        | 'zen_maru_gothic';

      export interface Icon {
        /**
         * The ID of a [File upload](https://stripe.com/docs/api/files) representing the icon. Purpose must be `business_icon`. Required if `type` is `file` and disallowed otherwise.
         */
        file?: string;

        /**
         * The type of image for the icon. Must be one of `file` or `url`.
         */
        type: Icon.Type;

        /**
         * The URL of the image. Required if `type` is `url` and disallowed otherwise.
         */
        url?: string;
      }

      export interface Logo {
        /**
         * The ID of a [File upload](https://stripe.com/docs/api/files) representing the logo. Purpose must be `business_logo`. Required if `type` is `file` and disallowed otherwise.
         */
        file?: string;

        /**
         * The type of image for the logo. Must be one of `file` or `url`.
         */
        type: Logo.Type;

        /**
         * The URL of the image. Required if `type` is `url` and disallowed otherwise.
         */
        url?: string;
      }

      export namespace Icon {
        export type Type = 'file' | 'url';
      }

      export namespace Logo {
        export type Type = 'file' | 'url';
      }
    }

    export namespace ConsentCollection {
      export interface PaymentMethodReuseAgreement {
        /**
         * Determines the position and visibility of the payment method reuse agreement in the UI. When set to `auto`, Stripe's
         * defaults will be used. When set to `hidden`, the payment method reuse agreement text will always be hidden in the UI.
         */
        position: PaymentMethodReuseAgreement.Position;
      }

      export type Promotions = 'auto' | 'none';

      export type TermsOfService = 'none' | 'required';

      export namespace PaymentMethodReuseAgreement {
        export type Position = 'auto' | 'hidden';
      }
    }

    export namespace CustomerUpdate {
      export type Address = 'auto' | 'never';

      export type Name = 'auto' | 'never';

      export type Shipping = 'auto' | 'never';
    }

    export namespace CustomField {
      export interface Dropdown {
        /**
         * The value that will pre-fill the field on the payment page.Must match a `value` in the `options` array.
         */
        default_value?: string;

        /**
         * The options available for the customer to select. Up to 200 options allowed.
         */
        options: Array<Dropdown.Option>;
      }

      export interface Label {
        /**
         * Custom text for the label, displayed to the customer. Up to 50 characters.
         */
        custom: string;

        /**
         * The type of the label.
         */
        type: 'custom';
      }

      export interface Numeric {
        /**
         * The value that will pre-fill the field on the payment page.
         */
        default_value?: string;

        /**
         * The maximum character length constraint for the customer's input.
         */
        maximum_length?: number;

        /**
         * The minimum character length requirement for the customer's input.
         */
        minimum_length?: number;
      }

      export interface Text {
        /**
         * The value that will pre-fill the field on the payment page.
         */
        default_value?: string;

        /**
         * The maximum character length constraint for the customer's input.
         */
        maximum_length?: number;

        /**
         * The minimum character length requirement for the customer's input.
         */
        minimum_length?: number;
      }

      export type Type = 'dropdown' | 'numeric' | 'text';

      export namespace Dropdown {
        export interface Option {
          /**
           * The label for the option, displayed to the customer. Up to 100 characters.
           */
          label: string;

          /**
           * The value for this option, not displayed to the customer, used by your integration to reconcile the option selected by the customer. Must be unique to this option, alphanumeric, and up to 100 characters.
           */
          value: string;
        }
      }
    }

    export namespace CustomText {
      export interface AfterSubmit {
        /**
         * Text may be up to 1200 characters in length.
         */
        message: string;
      }

      export interface ShippingAddress {
        /**
         * Text may be up to 1200 characters in length.
         */
        message: string;
      }

      export interface Submit {
        /**
         * Text may be up to 1200 characters in length.
         */
        message: string;
      }

      export interface TermsOfServiceAcceptance {
        /**
         * Text may be up to 1200 characters in length.
         */
        message: string;
      }
    }

    export namespace InvoiceCreation {
      export interface InvoiceData {
        /**
         * The account tax IDs associated with the invoice.
         */
        account_tax_ids?: Emptyable<Array<string>>;

        /**
         * Default custom fields to be displayed on invoices for this customer.
         */
        custom_fields?: Emptyable<Array<InvoiceData.CustomField>>;

        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description?: string;

        /**
         * Default footer to be displayed on invoices for this customer.
         */
        footer?: string;

        /**
         * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
         */
        issuer?: InvoiceData.Issuer;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;

        /**
         * Default options for invoice PDF rendering for this customer.
         */
        rendering_options?: Emptyable<InvoiceData.RenderingOptions>;
      }

      export namespace InvoiceData {
        export interface CustomField {
          /**
           * The name of the custom field. This may be up to 40 characters.
           */
          name: string;

          /**
           * The value of the custom field. This may be up to 140 characters.
           */
          value: string;
        }

        export interface Issuer {
          /**
           * The connected account being referenced when `type` is `account`.
           */
          account?: string;

          /**
           * Type of the account referenced in the request.
           */
          type: Issuer.Type;
        }

        export interface RenderingOptions {
          /**
           * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs. One of `exclude_tax` or `include_inclusive_tax`. `include_inclusive_tax` will include inclusive tax (and exclude exclusive tax) in invoice PDF amounts. `exclude_tax` will exclude all tax (inclusive and exclusive alike) from invoice PDF amounts.
           */
          amount_tax_display?: Emptyable<RenderingOptions.AmountTaxDisplay>;

          /**
           * ID of the invoice rendering template to use for this invoice.
           */
          template?: string;
        }

        export namespace Issuer {
          export type Type = 'account' | 'self';
        }

        export namespace RenderingOptions {
          export type AmountTaxDisplay =
            | 'exclude_tax'
            | 'include_inclusive_tax';
        }
      }
    }

    export namespace LineItem {
      export interface AdjustableQuantity {
        /**
         * Set to true if the quantity can be adjusted to any non-negative integer.
         */
        enabled: boolean;

        /**
         * The maximum quantity the customer can purchase for the Checkout Session. By default this value is 99. You can specify a value up to 999999.
         */
        maximum?: number;

        /**
         * The minimum quantity the customer must purchase for the Checkout Session. By default this value is 0.
         */
        minimum?: number;
      }

      export interface PriceData {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to. One of `product` or `product_data` is required.
         */
        product?: string;

        /**
         * Data used to generate a new [Product](https://docs.stripe.com/api/products) object inline. One of `product` or `product_data` is required.
         */
        product_data?: PriceData.ProductData;

        /**
         * The recurring components of a price such as `interval` and `interval_count`.
         */
        recurring?: PriceData.Recurring;

        /**
         * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
         */
        tax_behavior?: PriceData.TaxBehavior;

        /**
         * A non-negative integer in cents (or local equivalent) representing how much to charge. One of `unit_amount` or `unit_amount_decimal` is required.
         */
        unit_amount?: number;

        /**
         * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
         */
        unit_amount_decimal?: string;
      }

      export namespace PriceData {
        export interface ProductData {
          /**
           * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
           */
          description?: string;

          /**
           * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
           */
          images?: Array<string>;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
           */
          metadata?: MetadataParam;

          /**
           * The product's name, meant to be displayable to the customer.
           */
          name: string;

          /**
           * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
           */
          tax_code?: string;

          /**
           * A label that represents units of this product. When set, this will be included in customers' receipts, invoices, Checkout, and the customer portal.
           */
          unit_label?: string;
        }

        export interface Recurring {
          /**
           * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
           */
          interval: Recurring.Interval;

          /**
           * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).
           */
          interval_count?: number;
        }

        export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

        export namespace Recurring {
          export type Interval = 'day' | 'month' | 'week' | 'year';
        }
      }
    }

    export namespace NameCollection {
      export interface Business {
        /**
         * Enable business name collection on the Checkout Session. Defaults to `false`.
         */
        enabled: boolean;

        /**
         * Whether the customer is required to provide a business name before completing the Checkout Session. Defaults to `false`.
         */
        optional?: boolean;
      }

      export interface Individual {
        /**
         * Enable individual name collection on the Checkout Session. Defaults to `false`.
         */
        enabled: boolean;

        /**
         * Whether the customer is required to provide their name before completing the Checkout Session. Defaults to `false`.
         */
        optional?: boolean;
      }
    }

    export namespace OptionalItem {
      export interface AdjustableQuantity {
        /**
         * Set to true if the quantity can be adjusted to any non-negative integer.
         */
        enabled: boolean;

        /**
         * The maximum quantity of this item the customer can purchase. By default this value is 99. You can specify a value up to 999999.
         */
        maximum?: number;

        /**
         * The minimum quantity of this item the customer must purchase, if they choose to purchase it. Because this item is optional, the customer will always be able to remove it from their order, even if the `minimum` configured here is greater than 0. By default this value is 0.
         */
        minimum?: number;
      }
    }

    export namespace PaymentIntentData {
      export type CaptureMethod = 'automatic' | 'automatic_async' | 'manual';

      export type SetupFutureUsage = 'off_session' | 'on_session';

      export interface Shipping {
        /**
         * Shipping address.
         */
        address: ShippingAddressParam;

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
         * The amount that will be transferred automatically when a charge succeeds.
         */
        amount?: number;

        /**
         * If specified, successful charges will be attributed to the destination
         * account for tax reporting, and the funds from charges will be transferred
         * to the destination account. The ID of the resulting transfer will be
         * returned on the successful charge's `transfer` field.
         */
        destination: string;
      }
    }

    export namespace PaymentMethodData {
      export type AllowRedisplay = 'always' | 'limited' | 'unspecified';
    }

    export namespace PaymentMethodOptions {
      export interface AcssDebit {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). This is only accepted for Checkout Sessions in `setup` mode.
         */
        currency?: AcssDebit.Currency;

        /**
         * Additional fields for Mandate creation
         */
        mandate_options?: AcssDebit.MandateOptions;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: AcssDebit.SetupFutureUsage;

        /**
         * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
         */
        target_date?: string;

        /**
         * Verification method for the intent
         */
        verification_method?: AcssDebit.VerificationMethod;
      }

      export interface Affirm {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface AfterpayClearpay {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Alipay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Alma {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';
      }

      export interface AmazonPay {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: AmazonPay.SetupFutureUsage;
      }

      export interface AuBecsDebit {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';

        /**
         * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
         */
        target_date?: string;
      }

      export interface BacsDebit {
        /**
         * Additional fields for Mandate creation
         */
        mandate_options?: BacsDebit.MandateOptions;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: BacsDebit.SetupFutureUsage;

        /**
         * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
         */
        target_date?: string;
      }

      export interface Bancontact {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Billie {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';
      }

      export interface Boleto {
        /**
         * The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto invoice will expire on Wednesday at 23:59 America/Sao_Paulo time.
         */
        expires_after_days?: number;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: Boleto.SetupFutureUsage;
      }

      export interface Card {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Installment options for card payments
         */
        installments?: Card.Installments;

        /**
         * Request ability to [capture beyond the standard authorization validity window](https://docs.stripe.com/payments/extended-authorization) for this CheckoutSession.
         */
        request_extended_authorization?: Card.RequestExtendedAuthorization;

        /**
         * Request ability to [increment the authorization](https://docs.stripe.com/payments/incremental-authorization) for this CheckoutSession.
         */
        request_incremental_authorization?: Card.RequestIncrementalAuthorization;

        /**
         * Request ability to make [multiple captures](https://docs.stripe.com/payments/multicapture) for this CheckoutSession.
         */
        request_multicapture?: Card.RequestMulticapture;

        /**
         * Request ability to [overcapture](https://docs.stripe.com/payments/overcapture) for this CheckoutSession.
         */
        request_overcapture?: Card.RequestOvercapture;

        /**
         * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
         */
        request_three_d_secure?: Card.RequestThreeDSecure;

        /**
         * Restrictions to apply to the card payment method. For example, you can block specific card brands.
         */
        restrictions?: Card.Restrictions;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: Card.SetupFutureUsage;

        /**
         * Provides information about a card payment that customers see on their statements. Concatenated with the Kana prefix (shortened Kana descriptor) or Kana statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 22 characters.
         */
        statement_descriptor_suffix_kana?: string;

        /**
         * Provides information about a card payment that customers see on their statements. Concatenated with the Kanji prefix (shortened Kanji descriptor) or Kanji statement descriptor that's set on the account to form the complete statement descriptor. Maximum 17 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 17 characters.
         */
        statement_descriptor_suffix_kanji?: string;
      }

      export interface Cashapp {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: Cashapp.SetupFutureUsage;
      }

      export interface CustomerBalance {
        /**
         * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
         */
        bank_transfer?: CustomerBalance.BankTransfer;

        /**
         * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
         */
        funding_type?: 'bank_transfer';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface DemoPay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: DemoPay.SetupFutureUsage;
      }

      export interface Eps {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Fpx {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Giropay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Grabpay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Ideal {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface KakaoPay {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: KakaoPay.SetupFutureUsage;
      }

      export interface Klarna {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';

        /**
         * Subscription details if the Checkout Session sets up a future subscription.
         */
        subscriptions?: Emptyable<Array<Klarna.Subscription>>;
      }

      export interface Konbini {
        /**
         * The number of calendar days (between 1 and 60) after which Konbini payment instructions will expire. For example, if a PaymentIntent is confirmed with Konbini and `expires_after_days` set to 2 on Monday JST, the instructions will expire on Wednesday 23:59:59 JST. Defaults to 3 days.
         */
        expires_after_days?: number;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface KrCard {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: KrCard.SetupFutureUsage;
      }

      export interface Link {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: Link.SetupFutureUsage;
      }

      export interface Mobilepay {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Multibanco {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface NaverPay {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: NaverPay.SetupFutureUsage;
      }

      export interface Oxxo {
        /**
         * The number of calendar days before an OXXO voucher expires. For example, if you create an OXXO voucher on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
         */
        expires_after_days?: number;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface P24 {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';

        /**
         * Confirm that the payer has accepted the P24 terms and conditions.
         */
        tos_shown_and_accepted?: boolean;
      }

      export interface PayByBank {}

      export interface Payco {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';
      }

      export interface Paynow {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Paypal {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: Emptyable<'manual'>;

        /**
         * [Preferred locale](https://stripe.com/docs/payments/paypal/supported-locales) of the PayPal checkout page that the customer is redirected to.
         */
        preferred_locale?: Paypal.PreferredLocale;

        /**
         * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
         */
        reference?: string;

        /**
         * The risk correlation ID for an on-session payment using a saved PayPal payment method.
         */
        risk_correlation_id?: string;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         *
         * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Emptyable<Paypal.SetupFutureUsage>;
      }

      export interface Pix {
        /**
         * Determines if the amount includes the IOF tax. Defaults to `never`.
         */
        amount_includes_iof?: Pix.AmountIncludesIof;

        /**
         * The number of seconds (between 10 and 1209600) after which Pix payment will expire. Defaults to 86400 seconds.
         */
        expires_after_seconds?: number;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface RevolutPay {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: RevolutPay.SetupFutureUsage;
      }

      export interface SamsungPay {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';
      }

      export interface Satispay {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';
      }

      export interface SepaDebit {
        /**
         * Additional fields for Mandate creation
         */
        mandate_options?: SepaDebit.MandateOptions;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: SepaDebit.SetupFutureUsage;

        /**
         * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
         */
        target_date?: string;
      }

      export interface Sofort {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Swish {
        /**
         * The order reference that will be displayed to customers in the Swish application. Defaults to the `id` of the Payment Intent.
         */
        reference?: string;
      }

      export interface Twint {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface UsBankAccount {
        /**
         * Additional fields for Financial Connections Session creation
         */
        financial_connections?: UsBankAccount.FinancialConnections;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: UsBankAccount.SetupFutureUsage;

        /**
         * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
         */
        target_date?: string;

        /**
         * Verification method for the intent
         */
        verification_method?: UsBankAccount.VerificationMethod;
      }

      export interface WechatPay {
        /**
         * The app ID registered with WeChat Pay. Only required when client is ios or android.
         */
        app_id?: string;

        /**
         * The client type that the end customer will pay from
         */
        client: WechatPay.Client;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
         *
         * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
         *
         * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export namespace AcssDebit {
        export type Currency = 'cad' | 'usd';

        export interface MandateOptions {
          /**
           * A URL for custom mandate text to render during confirmation step.
           * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
           * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
           */
          custom_mandate_url?: Emptyable<string>;

          /**
           * List of Stripe products where this mandate can be selected automatically. Only usable in `setup` mode.
           */
          default_for?: Array<MandateOptions.DefaultFor>;

          /**
           * Description of the mandate interval. Only required if 'payment_schedule' parameter is 'interval' or 'combined'.
           */
          interval_description?: string;

          /**
           * Payment schedule for the mandate.
           */
          payment_schedule?: MandateOptions.PaymentSchedule;

          /**
           * Transaction type of the mandate.
           */
          transaction_type?: MandateOptions.TransactionType;
        }

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

        export type VerificationMethod =
          | 'automatic'
          | 'instant'
          | 'microdeposits';

        export namespace MandateOptions {
          export type DefaultFor = 'invoice' | 'subscription';

          export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

          export type TransactionType = 'business' | 'personal';
        }
      }

      export namespace AmazonPay {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      export namespace BacsDebit {
        export interface MandateOptions {
          /**
           * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'DDIC' or 'STRIPE'.
           */
          reference_prefix?: Emptyable<string>;
        }

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      export namespace Boleto {
        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      export namespace Card {
        export interface Installments {
          /**
           * Setting to true enables installments for this Checkout Session.
           * Setting to false will prevent any installment plan from applying to a payment.
           */
          enabled?: boolean;
        }

        export type RequestExtendedAuthorization = 'if_available' | 'never';

        export type RequestIncrementalAuthorization = 'if_available' | 'never';

        export type RequestMulticapture = 'if_available' | 'never';

        export type RequestOvercapture = 'if_available' | 'never';

        export type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';

        export interface Restrictions {
          /**
           * Specify the card brands to block in the Checkout Session. If a customer enters or selects a card belonging to a blocked brand, they can't complete the Session.
           */
          brands_blocked?: Array<Restrictions.BrandsBlocked>;
        }

        export type SetupFutureUsage = 'off_session' | 'on_session';

        export namespace Restrictions {
          export type BrandsBlocked =
            | 'american_express'
            | 'discover_global_network'
            | 'mastercard'
            | 'visa';
        }
      }

      export namespace Cashapp {
        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      export namespace CustomerBalance {
        export interface BankTransfer {
          /**
           * Configuration for eu_bank_transfer funding type.
           */
          eu_bank_transfer?: BankTransfer.EuBankTransfer;

          /**
           * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
           *
           * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
           */
          requested_address_types?: Array<BankTransfer.RequestedAddressType>;

          /**
           * The list of bank transfer types that this PaymentIntent is allowed to use for funding.
           */
          type: BankTransfer.Type;
        }

        export namespace BankTransfer {
          export interface EuBankTransfer {
            /**
             * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
             */
            country: string;
          }

          export type RequestedAddressType =
            | 'aba'
            | 'iban'
            | 'sepa'
            | 'sort_code'
            | 'spei'
            | 'swift'
            | 'zengin';

          export type Type =
            | 'eu_bank_transfer'
            | 'gb_bank_transfer'
            | 'jp_bank_transfer'
            | 'mx_bank_transfer'
            | 'us_bank_transfer';
        }
      }

      export namespace DemoPay {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      export namespace KakaoPay {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      export namespace Klarna {
        export interface Subscription {
          /**
           * Unit of time between subscription charges.
           */
          interval: Subscription.Interval;

          /**
           * The number of intervals (specified in the `interval` attribute) between subscription charges. For example, `interval=month` and `interval_count=3` charges every 3 months.
           */
          interval_count?: number;

          /**
           * Name for subscription.
           */
          name?: string;

          /**
           * Describes the upcoming charge for this subscription.
           */
          next_billing: Subscription.NextBilling;

          /**
           * A non-customer-facing reference to correlate subscription charges in the Klarna app. Use a value that persists across subscription charges.
           */
          reference: string;
        }

        export namespace Subscription {
          export type Interval = 'day' | 'month' | 'week' | 'year';

          export interface NextBilling {
            /**
             * The amount of the next charge for the subscription.
             */
            amount: number;

            /**
             * The date of the next charge for the subscription in YYYY-MM-DD format.
             */
            date: string;
          }
        }
      }

      export namespace KrCard {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      export namespace Link {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      export namespace NaverPay {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      export namespace Paypal {
        export type PreferredLocale =
          | 'cs-CZ'
          | 'da-DK'
          | 'de-AT'
          | 'de-DE'
          | 'de-LU'
          | 'el-GR'
          | 'en-GB'
          | 'en-US'
          | 'es-ES'
          | 'fi-FI'
          | 'fr-BE'
          | 'fr-FR'
          | 'fr-LU'
          | 'hu-HU'
          | 'it-IT'
          | 'nl-BE'
          | 'nl-NL'
          | 'pl-PL'
          | 'pt-PT'
          | 'sk-SK'
          | 'sv-SE';

        export type SetupFutureUsage = 'none' | 'off_session';
      }

      export namespace Pix {
        export type AmountIncludesIof = 'always' | 'never';
      }

      export namespace RevolutPay {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      export namespace SepaDebit {
        export interface MandateOptions {
          /**
           * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'STRIPE'.
           */
          reference_prefix?: Emptyable<string>;
        }

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      export namespace UsBankAccount {
        export interface FinancialConnections {
          /**
           * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
           */
          permissions?: Array<FinancialConnections.Permission>;

          /**
           * List of data features that you would like to retrieve upon account creation.
           */
          prefetch?: Array<FinancialConnections.Prefetch>;
        }

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

        export type VerificationMethod = 'automatic' | 'instant';

        export namespace FinancialConnections {
          export type Permission =
            | 'balances'
            | 'ownership'
            | 'payment_method'
            | 'transactions';

          export type Prefetch = 'balances' | 'ownership' | 'transactions';
        }
      }

      export namespace WechatPay {
        export type Client = 'android' | 'ios' | 'web';
      }
    }

    export namespace Permissions {
      export type UpdateShippingDetails = 'client_only' | 'server_only';
    }

    export namespace SavedPaymentMethodOptions {
      export type AllowRedisplayFilter = 'always' | 'limited' | 'unspecified';

      export type PaymentMethodRemove = 'disabled' | 'enabled';

      export type PaymentMethodSave = 'disabled' | 'enabled';
    }

    export namespace ShippingAddressCollection {
      export type AllowedCountry =
        | 'AC'
        | 'AD'
        | 'AE'
        | 'AF'
        | 'AG'
        | 'AI'
        | 'AL'
        | 'AM'
        | 'AO'
        | 'AQ'
        | 'AR'
        | 'AT'
        | 'AU'
        | 'AW'
        | 'AX'
        | 'AZ'
        | 'BA'
        | 'BB'
        | 'BD'
        | 'BE'
        | 'BF'
        | 'BG'
        | 'BH'
        | 'BI'
        | 'BJ'
        | 'BL'
        | 'BM'
        | 'BN'
        | 'BO'
        | 'BQ'
        | 'BR'
        | 'BS'
        | 'BT'
        | 'BV'
        | 'BW'
        | 'BY'
        | 'BZ'
        | 'CA'
        | 'CD'
        | 'CF'
        | 'CG'
        | 'CH'
        | 'CI'
        | 'CK'
        | 'CL'
        | 'CM'
        | 'CN'
        | 'CO'
        | 'CR'
        | 'CV'
        | 'CW'
        | 'CY'
        | 'CZ'
        | 'DE'
        | 'DJ'
        | 'DK'
        | 'DM'
        | 'DO'
        | 'DZ'
        | 'EC'
        | 'EE'
        | 'EG'
        | 'EH'
        | 'ER'
        | 'ES'
        | 'ET'
        | 'FI'
        | 'FJ'
        | 'FK'
        | 'FO'
        | 'FR'
        | 'GA'
        | 'GB'
        | 'GD'
        | 'GE'
        | 'GF'
        | 'GG'
        | 'GH'
        | 'GI'
        | 'GL'
        | 'GM'
        | 'GN'
        | 'GP'
        | 'GQ'
        | 'GR'
        | 'GS'
        | 'GT'
        | 'GU'
        | 'GW'
        | 'GY'
        | 'HK'
        | 'HN'
        | 'HR'
        | 'HT'
        | 'HU'
        | 'ID'
        | 'IE'
        | 'IL'
        | 'IM'
        | 'IN'
        | 'IO'
        | 'IQ'
        | 'IS'
        | 'IT'
        | 'JE'
        | 'JM'
        | 'JO'
        | 'JP'
        | 'KE'
        | 'KG'
        | 'KH'
        | 'KI'
        | 'KM'
        | 'KN'
        | 'KR'
        | 'KW'
        | 'KY'
        | 'KZ'
        | 'LA'
        | 'LB'
        | 'LC'
        | 'LI'
        | 'LK'
        | 'LR'
        | 'LS'
        | 'LT'
        | 'LU'
        | 'LV'
        | 'LY'
        | 'MA'
        | 'MC'
        | 'MD'
        | 'ME'
        | 'MF'
        | 'MG'
        | 'MK'
        | 'ML'
        | 'MM'
        | 'MN'
        | 'MO'
        | 'MQ'
        | 'MR'
        | 'MS'
        | 'MT'
        | 'MU'
        | 'MV'
        | 'MW'
        | 'MX'
        | 'MY'
        | 'MZ'
        | 'NA'
        | 'NC'
        | 'NE'
        | 'NG'
        | 'NI'
        | 'NL'
        | 'NO'
        | 'NP'
        | 'NR'
        | 'NU'
        | 'NZ'
        | 'OM'
        | 'PA'
        | 'PE'
        | 'PF'
        | 'PG'
        | 'PH'
        | 'PK'
        | 'PL'
        | 'PM'
        | 'PN'
        | 'PR'
        | 'PS'
        | 'PT'
        | 'PY'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RS'
        | 'RU'
        | 'RW'
        | 'SA'
        | 'SB'
        | 'SC'
        | 'SD'
        | 'SE'
        | 'SG'
        | 'SH'
        | 'SI'
        | 'SJ'
        | 'SK'
        | 'SL'
        | 'SM'
        | 'SN'
        | 'SO'
        | 'SR'
        | 'SS'
        | 'ST'
        | 'SV'
        | 'SX'
        | 'SZ'
        | 'TA'
        | 'TC'
        | 'TD'
        | 'TF'
        | 'TG'
        | 'TH'
        | 'TJ'
        | 'TK'
        | 'TL'
        | 'TM'
        | 'TN'
        | 'TO'
        | 'TR'
        | 'TT'
        | 'TV'
        | 'TW'
        | 'TZ'
        | 'UA'
        | 'UG'
        | 'US'
        | 'UY'
        | 'UZ'
        | 'VA'
        | 'VC'
        | 'VE'
        | 'VG'
        | 'VN'
        | 'VU'
        | 'WF'
        | 'WS'
        | 'XK'
        | 'YE'
        | 'YT'
        | 'ZA'
        | 'ZM'
        | 'ZW'
        | 'ZZ';
    }

    export namespace ShippingOption {
      export interface ShippingRateData {
        /**
         * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
         */
        delivery_estimate?: ShippingRateData.DeliveryEstimate;

        /**
         * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
         */
        display_name: string;

        /**
         * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
         */
        fixed_amount?: ShippingRateData.FixedAmount;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;

        /**
         * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
         */
        tax_behavior?: ShippingRateData.TaxBehavior;

        /**
         * A [tax code](https://stripe.com/docs/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
         */
        tax_code?: string;

        /**
         * The type of calculation to use on the shipping rate.
         */
        type?: 'fixed_amount';
      }

      export namespace ShippingRateData {
        export interface DeliveryEstimate {
          /**
           * The upper bound of the estimated range. If empty, represents no upper bound i.e., infinite.
           */
          maximum?: DeliveryEstimate.Maximum;

          /**
           * The lower bound of the estimated range. If empty, represents no lower bound.
           */
          minimum?: DeliveryEstimate.Minimum;
        }

        export interface FixedAmount {
          /**
           * A non-negative integer in cents representing how much to charge.
           */
          amount: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * Shipping rates defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
           */
          currency_options?: {
            [key: string]: FixedAmount.CurrencyOptions;
          };
        }

        export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

        export namespace DeliveryEstimate {
          export interface Maximum {
            /**
             * A unit of time.
             */
            unit: Maximum.Unit;

            /**
             * Must be greater than 0.
             */
            value: number;
          }

          export interface Minimum {
            /**
             * A unit of time.
             */
            unit: Minimum.Unit;

            /**
             * Must be greater than 0.
             */
            value: number;
          }

          export namespace Maximum {
            export type Unit =
              | 'business_day'
              | 'day'
              | 'hour'
              | 'month'
              | 'week';
          }

          export namespace Minimum {
            export type Unit =
              | 'business_day'
              | 'day'
              | 'hour'
              | 'month'
              | 'week';
          }
        }

        export namespace FixedAmount {
          export interface CurrencyOptions {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: CurrencyOptions.TaxBehavior;
          }

          export namespace CurrencyOptions {
            export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }
        }
      }
    }

    export namespace SubscriptionData {
      export interface BillingMode {
        /**
         * Configure behavior for flexible billing mode.
         */
        flexible?: BillingMode.Flexible;

        /**
         * Controls the calculation and orchestration of prorations and invoices for subscriptions. If no value is passed, the default is `flexible`.
         */
        type: BillingMode.Type;
      }

      export interface InvoiceSettings {
        /**
         * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
         */
        issuer?: InvoiceSettings.Issuer;
      }

      export type ProrationBehavior = 'create_prorations' | 'none';

      export interface TransferData {
        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
         */
        amount_percent?: number;

        /**
         * ID of an existing, connected Stripe account.
         */
        destination: string;
      }

      export interface TrialSettings {
        /**
         * Defines how the subscription should behave when the user's free trial ends.
         */
        end_behavior: TrialSettings.EndBehavior;
      }

      export namespace BillingMode {
        export interface Flexible {
          /**
           * Controls how invoices and invoice items display proration amounts and discount amounts.
           */
          proration_discounts?: Flexible.ProrationDiscounts;
        }

        export type Type = 'classic' | 'flexible';

        export namespace Flexible {
          export type ProrationDiscounts = 'included' | 'itemized';
        }
      }

      export namespace InvoiceSettings {
        export interface Issuer {
          /**
           * The connected account being referenced when `type` is `account`.
           */
          account?: string;

          /**
           * Type of the account referenced in the request.
           */
          type: Issuer.Type;
        }

        export namespace Issuer {
          export type Type = 'account' | 'self';
        }
      }

      export namespace TrialSettings {
        export interface EndBehavior {
          /**
           * Indicates how the subscription should change when the trial ends if the user did not provide a payment method.
           */
          missing_payment_method: EndBehavior.MissingPaymentMethod;
        }

        export namespace EndBehavior {
          export type MissingPaymentMethod =
            | 'cancel'
            | 'create_invoice'
            | 'pause';
        }
      }
    }

    export namespace TaxIdCollection {
      export type Required = 'if_supported' | 'never';
    }

    export namespace WalletOptions {
      export interface Link {
        /**
         * Specifies whether Checkout should display Link as a payment option. By default, Checkout will display all the supported wallets that the Checkout Session was created with. This is the `auto` behavior, and it is the default choice.
         */
        display?: Link.Display;
      }

      export namespace Link {
        export type Display = 'auto' | 'never';
      }
    }
  }
}
export namespace Checkout {
  export interface SessionRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Checkout {
  export interface SessionUpdateParams {
    /**
     * Information about the customer collected within the Checkout Session. Can only be set when updating `embedded` or `custom` sessions.
     */
    collected_information?: SessionUpdateParams.CollectedInformation;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;

    /**
     * The shipping rate options to apply to this Session. Up to a maximum of 5.
     */
    shipping_options?: Emptyable<Array<SessionUpdateParams.ShippingOption>>;
  }

  export namespace SessionUpdateParams {
    export interface CollectedInformation {
      /**
       * The shipping details to apply to this Session.
       */
      shipping_details?: CollectedInformation.ShippingDetails;
    }

    export interface ShippingOption {
      /**
       * The ID of the Shipping Rate to use for this shipping option.
       */
      shipping_rate?: string;

      /**
       * Parameters to be passed to Shipping Rate creation for this shipping option.
       */
      shipping_rate_data?: ShippingOption.ShippingRateData;
    }

    export namespace CollectedInformation {
      export interface ShippingDetails {
        /**
         * The address of the customer
         */
        address: ShippingDetails.Address;

        /**
         * The name of customer
         */
        name: string;
      }

      export namespace ShippingDetails {
        export interface Address {
          /**
           * City, district, suburb, town, or village.
           */
          city?: string;

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
          postal_code?: string;

          /**
           * State, county, province, or region.
           */
          state?: string;
        }
      }
    }

    export namespace ShippingOption {
      export interface ShippingRateData {
        /**
         * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
         */
        delivery_estimate?: ShippingRateData.DeliveryEstimate;

        /**
         * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
         */
        display_name: string;

        /**
         * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
         */
        fixed_amount?: ShippingRateData.FixedAmount;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;

        /**
         * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
         */
        tax_behavior?: ShippingRateData.TaxBehavior;

        /**
         * A [tax code](https://stripe.com/docs/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
         */
        tax_code?: string;

        /**
         * The type of calculation to use on the shipping rate.
         */
        type?: 'fixed_amount';
      }

      export namespace ShippingRateData {
        export interface DeliveryEstimate {
          /**
           * The upper bound of the estimated range. If empty, represents no upper bound i.e., infinite.
           */
          maximum?: DeliveryEstimate.Maximum;

          /**
           * The lower bound of the estimated range. If empty, represents no lower bound.
           */
          minimum?: DeliveryEstimate.Minimum;
        }

        export interface FixedAmount {
          /**
           * A non-negative integer in cents representing how much to charge.
           */
          amount: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * Shipping rates defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
           */
          currency_options?: {
            [key: string]: FixedAmount.CurrencyOptions;
          };
        }

        export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

        export namespace DeliveryEstimate {
          export interface Maximum {
            /**
             * A unit of time.
             */
            unit: Maximum.Unit;

            /**
             * Must be greater than 0.
             */
            value: number;
          }

          export interface Minimum {
            /**
             * A unit of time.
             */
            unit: Minimum.Unit;

            /**
             * Must be greater than 0.
             */
            value: number;
          }

          export namespace Maximum {
            export type Unit =
              | 'business_day'
              | 'day'
              | 'hour'
              | 'month'
              | 'week';
          }

          export namespace Minimum {
            export type Unit =
              | 'business_day'
              | 'day'
              | 'hour'
              | 'month'
              | 'week';
          }
        }

        export namespace FixedAmount {
          export interface CurrencyOptions {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: CurrencyOptions.TaxBehavior;
          }

          export namespace CurrencyOptions {
            export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }
        }
      }
    }
  }
}
export namespace Checkout {
  export interface SessionListParams extends PaginationParams {
    /**
     * Only return Checkout Sessions that were created during the given date interval.
     */
    created?: RangeQueryParam | number;

    /**
     * Only return the Checkout Sessions for the Customer specified.
     */
    customer?: string;

    /**
     * Only return the Checkout Sessions for the Customer details specified.
     */
    customer_details?: SessionListParams.CustomerDetails;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return the Checkout Session for the PaymentIntent specified.
     */
    payment_intent?: string;

    /**
     * Only return the Checkout Sessions for the Payment Link specified.
     */
    payment_link?: string;

    /**
     * Only return the Checkout Sessions matching the given status.
     */
    status?: SessionListParams.Status;

    /**
     * Only return the Checkout Session for the subscription specified.
     */
    subscription?: string;
  }

  export namespace SessionListParams {
    export interface CustomerDetails {
      /**
       * Customer's email address.
       */
      email: string;
    }

    export type Status = 'complete' | 'expired' | 'open';
  }
}
export namespace Checkout {
  export interface SessionExpireParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Checkout {
  export interface SessionListLineItemsParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
