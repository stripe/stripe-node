// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A payment link is a shareable URL that will take your customers to a hosted payment page. A payment link can be shared and used multiple times.
     *
     * When a customer opens a payment link it will open a new [checkout session](https://stripe.com/docs/api/checkout/sessions) to render the payment page. You can use [checkout session events](https://stripe.com/docs/api/events/types#event_types-checkout.session.completed) to track payments through payment links.
     *
     * Related guide: [Payment Links API](https://stripe.com/docs/payment-links)
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
       * Collect additional information from your customer using custom fields. Up to 2 fields are supported.
       */
      custom_fields: Array<PaymentLink.CustomField>;

      custom_text: PaymentLink.CustomText;

      /**
       * Configuration for Customer creation during checkout.
       */
      customer_creation: PaymentLink.CustomerCreation;

      /**
       * Configuration for creating invoice for payment mode payment links.
       */
      invoice_creation: PaymentLink.InvoiceCreation | null;

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

        /**
         * If set to `required`, it requires cutomers to accept the terms of service before being able to pay. If set to `none`, customers won't be shown a checkbox to accept the terms of service.
         */
        terms_of_service: ConsentCollection.TermsOfService | null;
      }

      namespace ConsentCollection {
        type Promotions = 'auto' | 'none';

        type TermsOfService = 'none' | 'required';
      }

      type CustomerCreation = 'always' | 'if_required';

      interface CustomField {
        /**
         * Configuration for `type=dropdown` fields.
         */
        dropdown: CustomField.Dropdown | null;

        /**
         * String of your choice that your integration can use to reconcile this field. Must be unique to this field, alphanumeric, and up to 200 characters.
         */
        key: string;

        label: CustomField.Label;

        /**
         * Whether the customer is required to complete the field before completing the Checkout Session. Defaults to `false`.
         */
        optional: boolean;

        /**
         * The type of the field.
         */
        type: CustomField.Type;
      }

      namespace CustomField {
        interface Dropdown {
          /**
           * The options available for the customer to select. Up to 200 options allowed.
           */
          options: Array<Dropdown.Option>;
        }

        namespace Dropdown {
          interface Option {
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

        interface Label {
          /**
           * Custom text for the label, displayed to the customer. Up to 50 characters.
           */
          custom: string | null;

          /**
           * The type of the label.
           */
          type: 'custom';
        }

        type Type = 'dropdown' | 'numeric' | 'text';
      }

      interface CustomText {
        /**
         * Custom text that should be displayed alongside shipping address collection.
         */
        shipping_address: CustomText.ShippingAddress | null;

        /**
         * Custom text that should be displayed alongside the payment confirmation button.
         */
        submit: CustomText.Submit | null;
      }

      namespace CustomText {
        interface ShippingAddress {
          /**
           * Text may be up to 1000 characters in length.
           */
          message: string;
        }

        interface Submit {
          /**
           * Text may be up to 1000 characters in length.
           */
          message: string;
        }
      }

      interface InvoiceCreation {
        /**
         * Enable creating an invoice on successful payment.
         */
        enabled: boolean;

        /**
         * Configuration for the invoice. Default invoice values will be used if unspecified.
         */
        invoice_data: InvoiceCreation.InvoiceData | null;
      }

      namespace InvoiceCreation {
        interface InvoiceData {
          /**
           * The account tax IDs associated with the invoice.
           */
          account_tax_ids: Array<
            string | Stripe.TaxId | Stripe.DeletedTaxId
          > | null;

          /**
           * A list of up to 4 custom fields to be displayed on the invoice.
           */
          custom_fields: Array<InvoiceData.CustomField> | null;

          /**
           * An arbitrary string attached to the object. Often useful for displaying to users.
           */
          description: string | null;

          /**
           * Footer to be displayed on the invoice.
           */
          footer: string | null;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata: Stripe.Metadata | null;

          /**
           * Options for invoice PDF rendering.
           */
          rendering_options: InvoiceData.RenderingOptions | null;
        }

        namespace InvoiceData {
          interface CustomField {
            /**
             * The name of the custom field.
             */
            name: string;

            /**
             * The value of the custom field.
             */
            value: string;
          }

          interface RenderingOptions {
            /**
             * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs.
             */
            amount_tax_display: string | null;
          }
        }
      }

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
        type CaptureMethod = 'automatic' | 'automatic_async' | 'manual';

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
        | 'cashapp'
        | 'eps'
        | 'fpx'
        | 'giropay'
        | 'grabpay'
        | 'ideal'
        | 'klarna'
        | 'konbini'
        | 'link'
        | 'oxxo'
        | 'p24'
        | 'paynow'
        | 'paypal'
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
  }
}
