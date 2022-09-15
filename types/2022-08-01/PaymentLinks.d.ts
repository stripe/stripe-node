// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A payment link is a shareable URL that will take your customers to a hosted payment page. A payment link can be shared and used multiple times.
     *
     * When a customer opens a payment link it will open a new [checkout session](https://stripe.com/docs/api/checkout/sessions) to render the payment page. You can use [checkout session events](https://stripe.com/docs/api/events/types#event_types-checkout.session.completed) to track payments through payment links.
     *
     * Related guide: [Payment Links API](https://stripe.com/docs/payments/payment-links/api)
     */
    interface PaymentLink {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'payment_link';

      /**
       * Whether the payment link's `url` is active. If `false`, customers visiting the URL will be shown a page saying that the link has been deactivated.
       */
      active: boolean;

      after_completion: PaymentLink.AfterCompletion;

      /**
       * Whether user redeemable promotion codes are enabled.
       */
      allow_promotion_codes: boolean;

      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account.
       */
      application_fee_amount: number | null;

      /**
       * This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account.
       */
      application_fee_percent: number | null;

      automatic_tax: PaymentLink.AutomaticTax;

      /**
       * Configuration for collecting the customer's billing address.
       */
      billing_address_collection: PaymentLink.BillingAddressCollection;

      /**
       * When set, provides configuration to gather active consent from customers.
       */
      consent_collection: PaymentLink.ConsentCollection | null;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * Configuration for Customer creation during checkout.
       */
      customer_creation: PaymentLink.CustomerCreation;

      /**
       * The line items representing what is being sold.
       */
      line_items?: ApiList<Stripe.LineItem>;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * The account on behalf of which to charge. See the [Connect documentation](https://support.stripe.com/questions/sending-invoices-on-behalf-of-connected-accounts) for details.
       */
      on_behalf_of: string | Stripe.Account | null;

      /**
       * Indicates the parameters to be passed to PaymentIntent creation during checkout.
       */
      payment_intent_data: PaymentLink.PaymentIntentData | null;

      /**
       * Configuration for collecting a payment method during checkout.
       */
      payment_method_collection: PaymentLink.PaymentMethodCollection;

      /**
       * The list of payment method types that customers can use. When `null`, Stripe will dynamically show relevant payment methods you've enabled in your [payment method settings](https://dashboard.stripe.com/settings/payment_methods).
       */
      payment_method_types: Array<PaymentLink.PaymentMethodType> | null;

      phone_number_collection: PaymentLink.PhoneNumberCollection;

      /**
       * Configuration for collecting the customer's shipping address.
       */
      shipping_address_collection: PaymentLink.ShippingAddressCollection | null;

      /**
       * The shipping rate options applied to the session.
       */
      shipping_options: Array<PaymentLink.ShippingOption>;

      /**
       * Indicates the type of transaction being performed which customizes relevant text on the page, such as the submit button.
       */
      submit_type: PaymentLink.SubmitType;

      /**
       * When creating a subscription, the specified configuration data will be used. There must be at least one line item with a recurring price to use `subscription_data`.
       */
      subscription_data: PaymentLink.SubscriptionData | null;

      tax_id_collection: PaymentLink.TaxIdCollection;

      /**
       * The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to.
       */
      transfer_data: PaymentLink.TransferData | null;

      /**
       * The public URL that can be shared with customers.
       */
      url: string;
    }

    namespace PaymentLink {
      interface AfterCompletion {
        hosted_confirmation?: AfterCompletion.HostedConfirmation;

        redirect?: AfterCompletion.Redirect;

        /**
         * The specified behavior after the purchase is complete.
         */
        type: AfterCompletion.Type;
      }

      namespace AfterCompletion {
        interface HostedConfirmation {
          /**
           * The custom message that is displayed to the customer after the purchase is complete.
           */
          custom_message: string | null;
        }

        interface Redirect {
          /**
           * The URL the customer will be redirected to after the purchase is complete.
           */
          url: string;
        }

        type Type = 'hosted_confirmation' | 'redirect';
      }

      interface AutomaticTax {
        /**
         * If `true`, tax will be calculated automatically using the customer's location.
         */
        enabled: boolean;
      }

      type BillingAddressCollection = 'auto' | 'required';

      interface ConsentCollection {
        /**
         * If set to `auto`, enables the collection of customer consent for promotional communications.
         */
        promotions: ConsentCollection.Promotions | null;
      }

      namespace ConsentCollection {
        type Promotions = 'auto' | 'none';
      }

      type CustomerCreation = 'always' | 'if_required';

      interface PaymentIntentData {
        /**
         * Indicates when the funds will be captured from the customer's account.
         */
        capture_method: PaymentIntentData.CaptureMethod | null;

        /**
         * Indicates that you intend to make future payments with the payment method collected during checkout.
         */
        setup_future_usage: PaymentIntentData.SetupFutureUsage | null;
      }

      namespace PaymentIntentData {
        type CaptureMethod = 'automatic' | 'manual';

        type SetupFutureUsage = 'off_session' | 'on_session';
      }

      type PaymentMethodCollection = 'always' | 'if_required';

      type PaymentMethodType =
        | 'affirm'
        | 'afterpay_clearpay'
        | 'alipay'
        | 'au_becs_debit'
        | 'bacs_debit'
        | 'bancontact'
        | 'blik'
        | 'boleto'
        | 'card'
        | 'eps'
        | 'fpx'
        | 'giropay'
        | 'grabpay'
        | 'ideal'
        | 'klarna'
        | 'konbini'
        | 'oxxo'
        | 'p24'
        | 'paynow'
        | 'pix'
        | 'promptpay'
        | 'sepa_debit'
        | 'sofort'
        | 'us_bank_account'
        | 'wechat_pay';

      interface PhoneNumberCollection {
        /**
         * If `true`, a phone number will be collected during checkout.
         */
        enabled: boolean;
      }

      interface ShippingAddressCollection {
        /**
         * An array of two-letter ISO country codes representing which countries Checkout should provide as options for shipping locations. Unsupported country codes: `AS, CX, CC, CU, HM, IR, KP, MH, FM, NF, MP, PW, SD, SY, UM, VI`.
         */
        allowed_countries: Array<ShippingAddressCollection.AllowedCountry>;
      }

      namespace ShippingAddressCollection {
        type AllowedCountry =
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

      interface ShippingOption {
        /**
         * A non-negative integer in cents representing how much to charge.
         */
        shipping_amount: number;

        /**
         * The ID of the Shipping Rate to use for this shipping option.
         */
        shipping_rate: string | Stripe.ShippingRate;
      }

      type SubmitType = 'auto' | 'book' | 'donate' | 'pay';

      interface SubscriptionData {
        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription.
         */
        description: string | null;

        /**
         * Integer representing the number of trial period days before the customer is charged for the first time.
         */
        trial_period_days: number | null;
      }

      interface TaxIdCollection {
        /**
         * Indicates whether tax ID collection is enabled for the session.
         */
        enabled: boolean;
      }

      interface TransferData {
        /**
         * The amount in %s that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
         */
        amount: number | null;

        /**
         * The connected account receiving the transfer.
         */
        destination: string | Stripe.Account;
      }
    }

    interface PaymentLinkCreateParams {
      /**
       * The line items representing what is being sold. Each line item represents an item being sold. Up to 20 line items are supported.
       */
      line_items: Array<PaymentLinkCreateParams.LineItem>;

      /**
       * Behavior after the purchase is complete.
       */
      after_completion?: PaymentLinkCreateParams.AfterCompletion;

      /**
       * Enables user redeemable promotion codes.
       */
      allow_promotion_codes?: boolean;

      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. Can only be applied when there are no line items with recurring prices.
       */
      application_fee_amount?: number;

      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
       */
      application_fee_percent?: number;

      /**
       * Configuration for automatic tax collection.
       */
      automatic_tax?: PaymentLinkCreateParams.AutomaticTax;

      /**
       * Configuration for collecting the customer's billing address.
       */
      billing_address_collection?: PaymentLinkCreateParams.BillingAddressCollection;

      /**
       * Configure fields to gather active consent from customers.
       */
      consent_collection?: PaymentLinkCreateParams.ConsentCollection;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies) and supported by each line item's price.
       */
      currency?: string;

      /**
       * Configures whether [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link create a [Customer](https://stripe.com/docs/api/customers).
       */
      customer_creation?: PaymentLinkCreateParams.CustomerCreation;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. Metadata associated with this Payment Link will automatically be copied to [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * The account on behalf of which to charge.
       */
      on_behalf_of?: string;

      /**
       * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
       */
      payment_intent_data?: PaymentLinkCreateParams.PaymentIntentData;

      /**
       * Specify whether Checkout should collect a payment method. When set to `if_required`, Checkout will not collect a payment method when the total due for the session is 0.This may occur if the Checkout Session includes a free trial or a discount.
       *
       * Can only be set in `subscription` mode.
       *
       * If you'd like information on how to collect a payment method outside of Checkout, read the guide on [configuring subscriptions with a free trial](https://stripe.com/docs/payments/checkout/free-trials).
       */
      payment_method_collection?: PaymentLinkCreateParams.PaymentMethodCollection;

      /**
       * The list of payment method types that customers can use. If no value is passed, Stripe will dynamically show relevant payment methods from your [payment method settings](https://dashboard.stripe.com/settings/payment_methods) (20+ payment methods [supported](https://stripe.com/docs/payments/payment-methods/integration-options#payment-method-product-support)).
       */
      payment_method_types?: Array<PaymentLinkCreateParams.PaymentMethodType>;

      /**
       * Controls phone number collection settings during checkout.
       *
       * We recommend that you review your privacy policy and check with your legal contacts.
       */
      phone_number_collection?: PaymentLinkCreateParams.PhoneNumberCollection;

      /**
       * Configuration for collecting the customer's shipping address.
       */
      shipping_address_collection?: PaymentLinkCreateParams.ShippingAddressCollection;

      /**
       * The shipping rate options to apply to [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link.
       */
      shipping_options?: Array<PaymentLinkCreateParams.ShippingOption>;

      /**
       * Describes the type of transaction being performed in order to customize relevant text on the page, such as the submit button. Changing this value will also affect the hostname in the [url](https://stripe.com/docs/api/payment_links/payment_links/object#url) property (example: `donate.stripe.com`).
       */
      submit_type?: PaymentLinkCreateParams.SubmitType;

      /**
       * When creating a subscription, the specified configuration data will be used. There must be at least one line item with a recurring price to use `subscription_data`.
       */
      subscription_data?: PaymentLinkCreateParams.SubscriptionData;

      /**
       * Controls tax ID collection during checkout.
       */
      tax_id_collection?: PaymentLinkCreateParams.TaxIdCollection;

      /**
       * The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to.
       */
      transfer_data?: PaymentLinkCreateParams.TransferData;
    }

    namespace PaymentLinkCreateParams {
      interface AfterCompletion {
        /**
         * Configuration when `type=hosted_confirmation`.
         */
        hosted_confirmation?: AfterCompletion.HostedConfirmation;

        /**
         * Configuration when `type=redirect`.
         */
        redirect?: AfterCompletion.Redirect;

        /**
         * The specified behavior after the purchase is complete. Either `redirect` or `hosted_confirmation`.
         */
        type: AfterCompletion.Type;
      }

      namespace AfterCompletion {
        interface HostedConfirmation {
          /**
           * A custom message to display to the customer after the purchase is complete.
           */
          custom_message?: string;
        }

        interface Redirect {
          /**
           * The URL the customer will be redirected to after the purchase is complete. You can embed `{CHECKOUT_SESSION_ID}` into the URL to have the `id` of the completed [checkout session](https://stripe.com/docs/api/checkout/sessions/object#checkout_session_object-id) included.
           */
          url: string;
        }

        type Type = 'hosted_confirmation' | 'redirect';
      }

      interface AutomaticTax {
        /**
         * If `true`, tax will be calculated automatically using the customer's location.
         */
        enabled: boolean;
      }

      type BillingAddressCollection = 'auto' | 'required';

      interface ConsentCollection {
        /**
         * If set to `auto`, enables the collection of customer consent for promotional communications. The Checkout
         * Session will determine whether to display an option to opt into promotional communication
         * from the merchant depending on the customer's locale. Only available to US merchants.
         */
        promotions?: ConsentCollection.Promotions;
      }

      namespace ConsentCollection {
        type Promotions = 'auto' | 'none';
      }

      type CustomerCreation = 'always' | 'if_required';

      interface LineItem {
        /**
         * When set, provides configuration for this item's quantity to be adjusted by the customer during checkout.
         */
        adjustable_quantity?: LineItem.AdjustableQuantity;

        /**
         * The ID of the [Price](https://stripe.com/docs/api/prices) or [Plan](https://stripe.com/docs/api/plans) object.
         */
        price: string;

        /**
         * The quantity of the line item being purchased.
         */
        quantity: number;
      }

      namespace LineItem {
        interface AdjustableQuantity {
          /**
           * Set to true if the quantity can be adjusted to any non-negative Integer.
           */
          enabled: boolean;

          /**
           * The maximum quantity the customer can purchase. By default this value is 99. You can specify a value up to 99.
           */
          maximum?: number;

          /**
           * The minimum quantity the customer can purchase. By default this value is 0. You can specify a value up to 98. If there is only one item in the cart then that item's quantity cannot go down to 0.
           */
          minimum?: number;
        }
      }

      interface PaymentIntentData {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: PaymentIntentData.CaptureMethod;

        /**
         * Indicates that you intend to [make future payments](https://stripe.com/docs/payments/payment-intents#future-usage) with the payment method collected by this Checkout Session.
         *
         * When setting this to `on_session`, Checkout will show a notice to the customer that their payment details will be saved.
         *
         * When setting this to `off_session`, Checkout will show a notice to the customer that their payment details will be saved and used for future payments.
         *
         * If a Customer has been provided or Checkout creates a new Customer,Checkout will attach the payment method to the Customer.
         *
         * If Checkout does not create a Customer, the payment method is not attached to a Customer. To reuse the payment method, you can retrieve it from the Checkout Session's PaymentIntent.
         *
         * When processing card payments, Checkout also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as SCA.
         */
        setup_future_usage?: PaymentIntentData.SetupFutureUsage;
      }

      namespace PaymentIntentData {
        type CaptureMethod = 'automatic' | 'manual';

        type SetupFutureUsage = 'off_session' | 'on_session';
      }

      type PaymentMethodCollection = 'always' | 'if_required';

      type PaymentMethodType =
        | 'affirm'
        | 'afterpay_clearpay'
        | 'alipay'
        | 'au_becs_debit'
        | 'bacs_debit'
        | 'bancontact'
        | 'blik'
        | 'boleto'
        | 'card'
        | 'eps'
        | 'fpx'
        | 'giropay'
        | 'grabpay'
        | 'ideal'
        | 'klarna'
        | 'konbini'
        | 'oxxo'
        | 'p24'
        | 'paynow'
        | 'pix'
        | 'promptpay'
        | 'sepa_debit'
        | 'sofort'
        | 'us_bank_account'
        | 'wechat_pay';

      interface PhoneNumberCollection {
        /**
         * Set to `true` to enable phone number collection.
         */
        enabled: boolean;
      }

      interface ShippingAddressCollection {
        /**
         * An array of two-letter ISO country codes representing which countries Checkout should provide as options for
         * shipping locations. Unsupported country codes: `AS, CX, CC, CU, HM, IR, KP, MH, FM, NF, MP, PW, SD, SY, UM, VI`.
         */
        allowed_countries: Array<ShippingAddressCollection.AllowedCountry>;
      }

      namespace ShippingAddressCollection {
        type AllowedCountry =
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

      interface ShippingOption {
        /**
         * The ID of the Shipping Rate to use for this shipping option.
         */
        shipping_rate?: string;
      }

      type SubmitType = 'auto' | 'book' | 'donate' | 'pay';

      interface SubscriptionData {
        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription.
         */
        description?: string;

        /**
         * Integer representing the number of trial period days before the customer is charged for the first time. Has to be at least 1.
         */
        trial_period_days?: number;
      }

      interface TaxIdCollection {
        /**
         * Set to `true` to enable tax ID collection.
         */
        enabled: boolean;
      }

      interface TransferData {
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

    interface PaymentLinkRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PaymentLinkUpdateParams {
      /**
       * Whether the payment link's `url` is active. If `false`, customers visiting the URL will be shown a page saying that the link has been deactivated.
       */
      active?: boolean;

      /**
       * Behavior after the purchase is complete.
       */
      after_completion?: PaymentLinkUpdateParams.AfterCompletion;

      /**
       * Enables user redeemable promotion codes.
       */
      allow_promotion_codes?: boolean;

      /**
       * Configuration for automatic tax collection.
       */
      automatic_tax?: PaymentLinkUpdateParams.AutomaticTax;

      /**
       * Configuration for collecting the customer's billing address.
       */
      billing_address_collection?: PaymentLinkUpdateParams.BillingAddressCollection;

      /**
       * Configures whether [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link create a [Customer](https://stripe.com/docs/api/customers).
       */
      customer_creation?: PaymentLinkUpdateParams.CustomerCreation;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The line items representing what is being sold. Each line item represents an item being sold. Up to 20 line items are supported.
       */
      line_items?: Array<PaymentLinkUpdateParams.LineItem>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. Metadata associated with this Payment Link will automatically be copied to [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * Specify whether Checkout should collect a payment method. When set to `if_required`, Checkout will not collect a payment method when the total due for the session is 0.This may occur if the Checkout Session includes a free trial or a discount.
       *
       * Can only be set in `subscription` mode.
       *
       * If you'd like information on how to collect a payment method outside of Checkout, read the guide on [configuring subscriptions with a free trial](https://stripe.com/docs/payments/checkout/free-trials).
       */
      payment_method_collection?: PaymentLinkUpdateParams.PaymentMethodCollection;

      /**
       * The list of payment method types that customers can use. Pass an empty string to enable automatic payment methods that use your [payment method settings](https://dashboard.stripe.com/settings/payment_methods).
       */
      payment_method_types?: Stripe.Emptyable<
        Array<PaymentLinkUpdateParams.PaymentMethodType>
      >;

      /**
       * Configuration for collecting the customer's shipping address.
       */
      shipping_address_collection?: Stripe.Emptyable<
        PaymentLinkUpdateParams.ShippingAddressCollection
      >;
    }

    namespace PaymentLinkUpdateParams {
      interface AfterCompletion {
        /**
         * Configuration when `type=hosted_confirmation`.
         */
        hosted_confirmation?: AfterCompletion.HostedConfirmation;

        /**
         * Configuration when `type=redirect`.
         */
        redirect?: AfterCompletion.Redirect;

        /**
         * The specified behavior after the purchase is complete. Either `redirect` or `hosted_confirmation`.
         */
        type: AfterCompletion.Type;
      }

      namespace AfterCompletion {
        interface HostedConfirmation {
          /**
           * A custom message to display to the customer after the purchase is complete.
           */
          custom_message?: string;
        }

        interface Redirect {
          /**
           * The URL the customer will be redirected to after the purchase is complete. You can embed `{CHECKOUT_SESSION_ID}` into the URL to have the `id` of the completed [checkout session](https://stripe.com/docs/api/checkout/sessions/object#checkout_session_object-id) included.
           */
          url: string;
        }

        type Type = 'hosted_confirmation' | 'redirect';
      }

      interface AutomaticTax {
        /**
         * If `true`, tax will be calculated automatically using the customer's location.
         */
        enabled: boolean;
      }

      type BillingAddressCollection = 'auto' | 'required';

      type CustomerCreation = 'always' | 'if_required';

      interface LineItem {
        /**
         * When set, provides configuration for this item's quantity to be adjusted by the customer during checkout.
         */
        adjustable_quantity?: LineItem.AdjustableQuantity;

        /**
         * The ID of an existing line item on the payment link.
         */
        id: string;

        /**
         * The quantity of the line item being purchased.
         */
        quantity?: number;
      }

      namespace LineItem {
        interface AdjustableQuantity {
          /**
           * Set to true if the quantity can be adjusted to any non-negative Integer.
           */
          enabled: boolean;

          /**
           * The maximum quantity the customer can purchase. By default this value is 99. You can specify a value up to 99.
           */
          maximum?: number;

          /**
           * The minimum quantity the customer can purchase. By default this value is 0. You can specify a value up to 98. If there is only one item in the cart then that item's quantity cannot go down to 0.
           */
          minimum?: number;
        }
      }

      type PaymentMethodCollection = 'always' | 'if_required';

      type PaymentMethodType =
        | 'affirm'
        | 'afterpay_clearpay'
        | 'alipay'
        | 'au_becs_debit'
        | 'bacs_debit'
        | 'bancontact'
        | 'blik'
        | 'boleto'
        | 'card'
        | 'eps'
        | 'fpx'
        | 'giropay'
        | 'grabpay'
        | 'ideal'
        | 'klarna'
        | 'konbini'
        | 'oxxo'
        | 'p24'
        | 'paynow'
        | 'pix'
        | 'promptpay'
        | 'sepa_debit'
        | 'sofort'
        | 'us_bank_account'
        | 'wechat_pay';

      interface ShippingAddressCollection {
        /**
         * An array of two-letter ISO country codes representing which countries Checkout should provide as options for
         * shipping locations. Unsupported country codes: `AS, CX, CC, CU, HM, IR, KP, MH, FM, NF, MP, PW, SD, SY, UM, VI`.
         */
        allowed_countries: Array<ShippingAddressCollection.AllowedCountry>;
      }

      namespace ShippingAddressCollection {
        type AllowedCountry =
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
    }

    interface PaymentLinkListParams extends PaginationParams {
      /**
       * Only return payment links that are active or inactive (e.g., pass `false` to list all inactive payment links).
       */
      active?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PaymentLinkListLineItemsParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class PaymentLinksResource {
      /**
       * Creates a payment link.
       */
      create(
        params: PaymentLinkCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentLink>>;

      /**
       * Retrieve a payment link.
       */
      retrieve(
        id: string,
        params?: PaymentLinkRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentLink>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentLink>>;

      /**
       * Updates a payment link.
       */
      update(
        id: string,
        params?: PaymentLinkUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentLink>>;

      /**
       * Returns a list of your payment links.
       */
      list(
        params?: PaymentLinkListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.PaymentLink>;
      list(options?: RequestOptions): ApiListPromise<Stripe.PaymentLink>;

      /**
       * When retrieving a payment link, there is an includable line_items property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
       */
      listLineItems(
        id: string,
        params?: PaymentLinkListLineItemsParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.LineItem>;
      listLineItems(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.LineItem>;
    }
  }
}
