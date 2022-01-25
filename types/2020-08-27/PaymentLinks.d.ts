// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The PaymentLink object.
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
       * The list of payment method types that customers can use. When `null`, Stripe will dynamically show relevant payment methods you've enabled in your [payment method settings](https://dashboard.stripe.com/settings/payment_methods).
       */
      payment_method_types: Array<'card'> | null;

      phone_number_collection: PaymentLink.PhoneNumberCollection;

      /**
       * Configuration for collecting the customer's shipping address.
       */
      shipping_address_collection: PaymentLink.ShippingAddressCollection | null;

      /**
       * When creating a subscription, the specified configuration data will be used. There must be at least one line item with a recurring price to use `subscription_data`.
       */
      subscription_data: PaymentLink.SubscriptionData | null;

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

      interface SubscriptionData {
        /**
         * Integer representing the number of trial period days before the customer is charged for the first time.
         */
        trial_period_days: number | null;
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
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The line items representing what is being sold. Each line item represents an item being sold. Up to 20 line items are supported.
       */
      line_items?: Array<PaymentLinkCreateParams.LineItem>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. Metadata associated with this Payment Link will automatically be copied to [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * The account on behalf of which to charge.
       */
      on_behalf_of?: string;

      /**
       * The list of payment method types that customers can use. Only `card` is supported. If no value is passed, Stripe will dynamically show relevant payment methods from your [payment method settings](https://dashboard.stripe.com/settings/payment_methods) (20+ payment methods [supported](https://stripe.com/docs/payments/payment-methods/integration-options#payment-method-product-support)).
       */
      payment_method_types?: Array<'card'>;

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
       * When creating a subscription, the specified configuration data will be used. There must be at least one line item with a recurring price to use `subscription_data`.
       */
      subscription_data?: PaymentLinkCreateParams.SubscriptionData;

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

      interface SubscriptionData {
        /**
         * Integer representing the number of trial period days before the customer is charged for the first time. Has to be at least 1.
         */
        trial_period_days?: number;
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
       * The list of payment method types that customers can use. Only `card` is supported. Pass an empty string to enable automatic payment methods that use your [payment method settings](https://dashboard.stripe.com/settings/payment_methods).
       */
      payment_method_types?: Stripe.Emptyable<Array<'card'>>;

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
        params?: PaymentLinkCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentLink>>;
      create(
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
