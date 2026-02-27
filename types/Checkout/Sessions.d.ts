// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Checkout {
      /**
       * A Checkout Session represents your customer's session as they pay for
       * one-time purchases or subscriptions through [Checkout](https://docs.stripe.com/payments/checkout)
       * or [Payment Links](https://docs.stripe.com/payments/payment-links). We recommend creating a
       * new Session each time your customer attempts to pay.
       *
       * Once payment is successful, the Checkout Session will contain a reference
       * to the [Customer](https://docs.stripe.com/api/customers), and either the successful
       * [PaymentIntent](https://docs.stripe.com/api/payment_intents) or an active
       * [Subscription](https://docs.stripe.com/api/subscriptions).
       *
       * You can create a Checkout Session on your server and redirect to its URL
       * to begin Checkout.
       *
       * Related guide: [Checkout quickstart](https://docs.stripe.com/checkout/quickstart)
       */
      interface Session {
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
        adaptive_pricing: Session.AdaptivePricing | null;

        /**
         * When set, provides configuration for actions to take if this Checkout Session expires.
         */
        after_expiration: Session.AfterExpiration | null;

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

        automatic_tax: Session.AutomaticTax;

        /**
         * Describes whether Checkout should collect the customer's billing address. Defaults to `auto`.
         */
        billing_address_collection: Session.BillingAddressCollection | null;

        branding_settings?: Session.BrandingSettings;

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
         *  For `ui_mode: custom`, use the client secret with [initCheckout](https://docs.stripe.com/js/custom_checkout/init) on your front end.
         */
        client_secret: string | null;

        /**
         * Information about the customer collected within the Checkout Session.
         */
        collected_information: Session.CollectedInformation | null;

        /**
         * Results of `consent_collection` for this session.
         */
        consent: Session.Consent | null;

        /**
         * When set, provides configuration for the Checkout Session to gather active consent from customers.
         */
        consent_collection: Session.ConsentCollection | null;

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
        currency_conversion: Session.CurrencyConversion | null;

        /**
         * Collect additional information from your customer using custom fields. Up to 3 fields are supported. You can't set this parameter if `ui_mode` is `custom`.
         */
        custom_fields: Array<Session.CustomField>;

        custom_text: Session.CustomText;

        /**
         * The ID of the customer for this Session.
         * For Checkout Sessions in `subscription` mode or Checkout Sessions with `customer_creation` set as `always` in `payment` mode, Checkout
         * will create a new customer object based on information provided
         * during the payment flow unless an existing customer was provided when
         * the Session was created.
         */
        customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

        /**
         * The ID of the account for this Session.
         */
        customer_account: string | null;

        /**
         * Configure whether a Checkout Session creates a Customer when the Checkout Session completes.
         */
        customer_creation: Session.CustomerCreation | null;

        /**
         * The customer details including the customer's tax exempt status and the customer's tax IDs. Customer's address details are not present on Sessions in `setup` mode.
         */
        customer_details: Session.CustomerDetails | null;

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
        discounts: Array<Session.Discount> | null;

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
        invoice: string | Stripe.Invoice | null;

        /**
         * Details on the state of invoice creation for the Checkout Session.
         */
        invoice_creation: Session.InvoiceCreation | null;

        /**
         * The line items purchased by the customer.
         */
        line_items?: ApiList<Stripe.LineItem>;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The IETF language tag of the locale Checkout is displayed in. If blank or `auto`, the browser's locale is used.
         */
        locale: Session.Locale | null;

        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata | null;

        /**
         * The mode of the Checkout Session.
         */
        mode: Session.Mode;

        name_collection?: Session.NameCollection;

        /**
         * The optional items presented to the customer at checkout.
         */
        optional_items?: Array<Session.OptionalItem> | null;

        /**
         * Where the user is coming from. This informs the optimizations that are applied to the session.
         */
        origin_context: Session.OriginContext | null;

        /**
         * The ID of the PaymentIntent for Checkout Sessions in `payment` mode. You can't confirm or cancel the PaymentIntent for a Checkout Session. To cancel, [expire the Checkout Session](https://docs.stripe.com/api/checkout/sessions/expire) instead.
         */
        payment_intent: string | Stripe.PaymentIntent | null;

        /**
         * The ID of the Payment Link that created this Session.
         */
        payment_link: string | Stripe.PaymentLink | null;

        /**
         * Configure whether a Checkout Session should collect a payment method. Defaults to `always`.
         */
        payment_method_collection: Session.PaymentMethodCollection | null;

        /**
         * Information about the payment method configuration used for this Checkout session if using dynamic payment methods.
         */
        payment_method_configuration_details: Session.PaymentMethodConfigurationDetails | null;

        /**
         * Payment-method-specific configuration for the PaymentIntent or SetupIntent of this CheckoutSession.
         */
        payment_method_options: Session.PaymentMethodOptions | null;

        /**
         * A list of the types of payment methods (e.g. card) this Checkout
         * Session is allowed to accept.
         */
        payment_method_types: Array<string>;

        /**
         * The payment status of the Checkout Session, one of `paid`, `unpaid`, or `no_payment_required`.
         * You can use this value to decide when to fulfill your customer's order.
         */
        payment_status: Session.PaymentStatus;

        /**
         * This property is used to set up permissions for various actions (e.g., update) on the CheckoutSession object.
         *
         * For specific permissions, please refer to their dedicated subsections, such as `permissions.update_shipping_details`.
         */
        permissions: Session.Permissions | null;

        phone_number_collection?: Session.PhoneNumberCollection;

        presentment_details?: Session.PresentmentDetails;

        /**
         * The ID of the original expired Checkout Session that triggered the recovery flow.
         */
        recovered_from: string | null;

        /**
         * This parameter applies to `ui_mode: embedded`. Learn more about the [redirect behavior](https://docs.stripe.com/payments/checkout/custom-success-page?payment-ui=embedded-form) of embedded sessions. Defaults to `always`.
         */
        redirect_on_completion?: Session.RedirectOnCompletion;

        /**
         * Applies to Checkout Sessions with `ui_mode: embedded` or `ui_mode: custom`. The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site.
         */
        return_url?: string;

        /**
         * Controls saved payment method settings for the session. Only available in `payment` and `subscription` mode.
         */
        saved_payment_method_options: Session.SavedPaymentMethodOptions | null;

        /**
         * The ID of the SetupIntent for Checkout Sessions in `setup` mode. You can't confirm or cancel the SetupIntent for a Checkout Session. To cancel, [expire the Checkout Session](https://docs.stripe.com/api/checkout/sessions/expire) instead.
         */
        setup_intent: string | Stripe.SetupIntent | null;

        /**
         * When set, provides configuration for Checkout to collect a shipping address from a customer.
         */
        shipping_address_collection: Session.ShippingAddressCollection | null;

        /**
         * The details of the customer cost of shipping, including the customer chosen ShippingRate.
         */
        shipping_cost: Session.ShippingCost | null;

        /**
         * The shipping rate options applied to this Session.
         */
        shipping_options: Array<Session.ShippingOption>;

        /**
         * The status of the Checkout Session, one of `open`, `complete`, or `expired`.
         */
        status: Session.Status | null;

        /**
         * Describes the type of transaction being performed by Checkout in order to customize
         * relevant text on the page, such as the submit button. `submit_type` can only be
         * specified on Checkout Sessions in `payment` mode. If blank or `auto`, `pay` is used.
         */
        submit_type: Session.SubmitType | null;

        /**
         * The ID of the [Subscription](https://docs.stripe.com/api/subscriptions) for Checkout Sessions in `subscription` mode.
         */
        subscription: string | Stripe.Subscription | null;

        /**
         * The URL the customer will be directed to after the payment or
         * subscription creation is successful.
         */
        success_url: string | null;

        tax_id_collection?: Session.TaxIdCollection;

        /**
         * Tax and discount details for the computed total amount.
         */
        total_details: Session.TotalDetails | null;

        /**
         * The UI mode of the Session. Defaults to `hosted`.
         */
        ui_mode: Session.UiMode | null;

        /**
         * The URL to the Checkout Session. Applies to Checkout Sessions with `ui_mode: hosted`. Redirect customers to this URL to take them to Checkout. If you're using [Custom Domains](https://docs.stripe.com/payments/checkout/custom-domains), the URL will use your subdomain. Otherwise, it'll use `checkout.stripe.com.`
         * This value is only present when the session is active.
         */
        url: string | null;

        /**
         * Wallet-specific configuration for this Checkout Session.
         */
        wallet_options: Session.WalletOptions | null;
      }

      namespace Session {
        interface AdaptivePricing {
          /**
           * If enabled, Adaptive Pricing is available on [eligible sessions](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing?payment-ui=stripe-hosted#restrictions).
           */
          enabled: boolean;
        }

        interface AfterExpiration {
          /**
           * When set, configuration used to recover the Checkout Session on expiry.
           */
          recovery: AfterExpiration.Recovery | null;
        }

        namespace AfterExpiration {
          interface Recovery {
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

        interface AutomaticTax {
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

        namespace AutomaticTax {
          interface Liability {
            /**
             * The connected account being referenced when `type` is `account`.
             */
            account?: string | Stripe.Account;

            /**
             * Type of the account referenced.
             */
            type: Liability.Type;
          }

          namespace Liability {
            type Type = 'account' | 'self';
          }

          type Status = 'complete' | 'failed' | 'requires_location_inputs';
        }

        type BillingAddressCollection = 'auto' | 'required';

        interface BrandingSettings {
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

        namespace BrandingSettings {
          type BorderStyle = 'pill' | 'rectangular' | 'rounded';

          interface Icon {
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

          namespace Icon {
            type Type = 'file' | 'url';
          }

          interface Logo {
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

          namespace Logo {
            type Type = 'file' | 'url';
          }
        }

        interface CollectedInformation {
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

        namespace CollectedInformation {
          interface ShippingDetails {
            address: Stripe.Address;

            /**
             * Customer name.
             */
            name: string;
          }
        }

        interface Consent {
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

        namespace Consent {
          type Promotions = 'opt_in' | 'opt_out';
        }

        interface ConsentCollection {
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

        namespace ConsentCollection {
          interface PaymentMethodReuseAgreement {
            /**
             * Determines the position and visibility of the payment method reuse agreement in the UI. When set to `auto`, Stripe's defaults will be used.
             *
             * When set to `hidden`, the payment method reuse agreement text will always be hidden in the UI.
             */
            position: PaymentMethodReuseAgreement.Position;
          }

          namespace PaymentMethodReuseAgreement {
            type Position = 'auto' | 'hidden';
          }

          type Promotions = 'auto' | 'none';

          type TermsOfService = 'none' | 'required';
        }

        interface CurrencyConversion {
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

        type CustomerCreation = 'always' | 'if_required';

        interface CustomerDetails {
          /**
           * The customer's address after a completed Checkout Session. Note: This property is populated only for sessions on or after March 30, 2022.
           */
          address: Stripe.Address | null;

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

        namespace CustomerDetails {
          type TaxExempt = 'exempt' | 'none' | 'reverse';

          interface TaxId {
            /**
             * The type of the tax ID, one of `ad_nrt`, `ar_cuit`, `eu_vat`, `bo_tin`, `br_cnpj`, `br_cpf`, `cn_tin`, `co_nit`, `cr_tin`, `do_rcn`, `ec_ruc`, `eu_oss_vat`, `hr_oib`, `pe_ruc`, `ro_tin`, `rs_pib`, `sv_nit`, `uy_ruc`, `ve_rif`, `vn_tin`, `gb_vat`, `nz_gst`, `au_abn`, `au_arn`, `in_gst`, `no_vat`, `no_voec`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `pl_nip`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `li_uid`, `li_vat`, `lk_vat`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, `il_vat`, `ge_vat`, `ua_vat`, `is_vat`, `bg_uic`, `hu_tin`, `si_tin`, `ke_pin`, `tr_tin`, `eg_tin`, `ph_tin`, `al_tin`, `bh_vat`, `kz_bin`, `ng_tin`, `om_vat`, `de_stn`, `ch_uid`, `tz_vat`, `uz_vat`, `uz_tin`, `md_vat`, `ma_vat`, `by_tin`, `ao_tin`, `bs_tin`, `bb_tin`, `cd_nif`, `mr_nif`, `me_pib`, `zw_tin`, `ba_tin`, `gn_nif`, `mk_vat`, `sr_fin`, `sn_ninea`, `am_tin`, `np_pan`, `tj_tin`, `ug_tin`, `zm_tin`, `kh_tin`, `aw_tin`, `az_tin`, `bd_bin`, `bj_ifu`, `et_tin`, `kg_tin`, `la_tin`, `cm_niu`, `cv_nif`, `bf_ifu`, or `unknown`
             */
            type: TaxId.Type;

            /**
             * The value of the tax ID.
             */
            value: string | null;
          }

          namespace TaxId {
            type Type =
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
              | 'lk_vat'
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
              | 'pl_nip'
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

        interface CustomField {
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

        namespace CustomField {
          interface Dropdown {
            /**
             * The value that pre-fills on the payment page.
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

          interface Numeric {
            /**
             * The value that pre-fills the field on the payment page.
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

          interface Text {
            /**
             * The value that pre-fills the field on the payment page.
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

          type Type = 'dropdown' | 'numeric' | 'text';
        }

        interface CustomText {
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

        namespace CustomText {
          interface AfterSubmit {
            /**
             * Text can be up to 1200 characters in length.
             */
            message: string;
          }

          interface ShippingAddress {
            /**
             * Text can be up to 1200 characters in length.
             */
            message: string;
          }

          interface Submit {
            /**
             * Text can be up to 1200 characters in length.
             */
            message: string;
          }

          interface TermsOfServiceAcceptance {
            /**
             * Text can be up to 1200 characters in length.
             */
            message: string;
          }
        }

        interface Discount {
          /**
           * Coupon attached to the Checkout Session.
           */
          coupon: string | Stripe.Coupon | null;

          /**
           * Promotion code attached to the Checkout Session.
           */
          promotion_code: string | Stripe.PromotionCode | null;
        }

        interface InvoiceCreation {
          /**
           * Indicates whether invoice creation is enabled for the Checkout Session.
           */
          enabled: boolean;

          invoice_data: InvoiceCreation.InvoiceData;
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
             * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
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

            interface Issuer {
              /**
               * The connected account being referenced when `type` is `account`.
               */
              account?: string | Stripe.Account;

              /**
               * Type of the account referenced.
               */
              type: Issuer.Type;
            }

            namespace Issuer {
              type Type = 'account' | 'self';
            }

            interface RenderingOptions {
              /**
               * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs.
               */
              amount_tax_display: string | null;

              /**
               * ID of the invoice rendering template to be used for the generated invoice.
               */
              template: string | null;
            }
          }
        }

        type Locale =
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

        type Mode = 'payment' | 'setup' | 'subscription';

        interface NameCollection {
          business?: NameCollection.Business;

          individual?: NameCollection.Individual;
        }

        namespace NameCollection {
          interface Business {
            /**
             * Indicates whether business name collection is enabled for the session
             */
            enabled: boolean;

            /**
             * Whether the customer is required to complete the field before completing the Checkout Session. Defaults to `false`.
             */
            optional: boolean;
          }

          interface Individual {
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

        interface OptionalItem {
          adjustable_quantity: OptionalItem.AdjustableQuantity | null;

          price: string;

          quantity: number;
        }

        namespace OptionalItem {
          interface AdjustableQuantity {
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

        type OriginContext = 'mobile_app' | 'web';

        type PaymentMethodCollection = 'always' | 'if_required';

        interface PaymentMethodConfigurationDetails {
          /**
           * ID of the payment method configuration used.
           */
          id: string;

          /**
           * ID of the parent payment method configuration used.
           */
          parent: string | null;
        }

        interface PaymentMethodOptions {
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

          payto?: PaymentMethodOptions.Payto;

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

        namespace PaymentMethodOptions {
          interface AcssDebit {
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

          namespace AcssDebit {
            type Currency = 'cad' | 'usd';

            interface MandateOptions {
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

            namespace MandateOptions {
              type DefaultFor = 'invoice' | 'subscription';

              type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

              type TransactionType = 'business' | 'personal';
            }

            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

            type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
          }

          interface Affirm {
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

          interface AfterpayClearpay {
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

          interface Alipay {
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

          interface Alma {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
          }

          interface AmazonPay {
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

          namespace AmazonPay {
            type SetupFutureUsage = 'none' | 'off_session';
          }

          interface AuBecsDebit {
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

          interface BacsDebit {
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

          namespace BacsDebit {
            interface MandateOptions {
              /**
               * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'DDIC' or 'STRIPE'.
               */
              reference_prefix?: string;
            }

            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
          }

          interface Bancontact {
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

          interface Billie {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
          }

          interface Boleto {
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

          namespace Boleto {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
          }

          interface Card {
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
             * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://docs.stripe.com/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://docs.stripe.com/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
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

          namespace Card {
            interface Installments {
              /**
               * Indicates if installments are enabled
               */
              enabled?: boolean;
            }

            type RequestExtendedAuthorization = 'if_available' | 'never';

            type RequestIncrementalAuthorization = 'if_available' | 'never';

            type RequestMulticapture = 'if_available' | 'never';

            type RequestOvercapture = 'if_available' | 'never';

            type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';

            interface Restrictions {
              /**
               * Specify the card brands to block in the Checkout Session. If a customer enters or selects a card belonging to a blocked brand, they can't complete the Session.
               */
              brands_blocked?: Array<Restrictions.BrandsBlocked>;
            }

            namespace Restrictions {
              type BrandsBlocked =
                | 'american_express'
                | 'discover_global_network'
                | 'mastercard'
                | 'visa';
            }

            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
          }

          interface Cashapp {
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

          interface CustomerBalance {
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

          namespace CustomerBalance {
            interface BankTransfer {
              eu_bank_transfer?: BankTransfer.EuBankTransfer;

              /**
               * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
               *
               * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
               */
              requested_address_types?: Array<
                BankTransfer.RequestedAddressType
              >;

              /**
               * The bank transfer type that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
               */
              type: BankTransfer.Type | null;
            }

            namespace BankTransfer {
              interface EuBankTransfer {
                /**
                 * The desired country code of the bank account information. Permitted values include: `DE`, `FR`, `IE`, or `NL`.
                 */
                country: EuBankTransfer.Country;
              }

              namespace EuBankTransfer {
                type Country = 'BE' | 'DE' | 'ES' | 'FR' | 'IE' | 'NL';
              }

              type RequestedAddressType =
                | 'aba'
                | 'iban'
                | 'sepa'
                | 'sort_code'
                | 'spei'
                | 'swift'
                | 'zengin';

              type Type =
                | 'eu_bank_transfer'
                | 'gb_bank_transfer'
                | 'jp_bank_transfer'
                | 'mx_bank_transfer'
                | 'us_bank_transfer';
            }
          }

          interface Eps {
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

          interface Fpx {
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

          interface Giropay {
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

          interface Grabpay {
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

          interface Ideal {
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

          interface KakaoPay {
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

          namespace KakaoPay {
            type SetupFutureUsage = 'none' | 'off_session';
          }

          interface Klarna {
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

          namespace Klarna {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
          }

          interface Konbini {
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

          interface KrCard {
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

          namespace KrCard {
            type SetupFutureUsage = 'none' | 'off_session';
          }

          interface Link {
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

          namespace Link {
            type SetupFutureUsage = 'none' | 'off_session';
          }

          interface Mobilepay {
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

          interface Multibanco {
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

          interface NaverPay {
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

          namespace NaverPay {
            type SetupFutureUsage = 'none' | 'off_session';
          }

          interface Oxxo {
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

          interface P24 {
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

          interface Payco {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
          }

          interface Paynow {
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

          interface Paypal {
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

          namespace Paypal {
            type SetupFutureUsage = 'none' | 'off_session';
          }

          interface Payto {
            mandate_options?: Payto.MandateOptions;

            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Payto.SetupFutureUsage;
          }

          namespace Payto {
            interface MandateOptions {
              /**
               * Amount that will be collected. It is required when `amount_type` is `fixed`.
               */
              amount: number | null;

              /**
               * The type of amount that will be collected. The amount charged must be exact or up to the value of `amount` param for `fixed` or `maximum` type respectively. Defaults to `maximum`.
               */
              amount_type: MandateOptions.AmountType | null;

              /**
               * Date, in YYYY-MM-DD format, after which payments will not be collected. Defaults to no end date.
               */
              end_date: string | null;

              /**
               * The periodicity at which payments will be collected. Defaults to `adhoc`.
               */
              payment_schedule: MandateOptions.PaymentSchedule | null;

              /**
               * The number of payments that will be made during a payment period. Defaults to 1 except for when `payment_schedule` is `adhoc`. In that case, it defaults to no limit.
               */
              payments_per_period: number | null;

              /**
               * The purpose for which payments are made. Has a default value based on your merchant category code.
               */
              purpose: MandateOptions.Purpose | null;

              /**
               * Date, in YYYY-MM-DD format, from which payments will be collected. Defaults to confirmation time.
               */
              start_date: string | null;
            }

            namespace MandateOptions {
              type AmountType = 'fixed' | 'maximum';

              type PaymentSchedule =
                | 'adhoc'
                | 'annual'
                | 'daily'
                | 'fortnightly'
                | 'monthly'
                | 'quarterly'
                | 'semi_annual'
                | 'weekly';

              type Purpose =
                | 'dependant_support'
                | 'government'
                | 'loan'
                | 'mortgage'
                | 'other'
                | 'pension'
                | 'personal'
                | 'retail'
                | 'salary'
                | 'tax'
                | 'utility';
            }

            type SetupFutureUsage = 'none' | 'off_session';
          }

          interface Pix {
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

          namespace Pix {
            type AmountIncludesIof = 'always' | 'never';
          }

          interface RevolutPay {
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

          namespace RevolutPay {
            type SetupFutureUsage = 'none' | 'off_session';
          }

          interface SamsungPay {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
          }

          interface Satispay {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
          }

          interface SepaDebit {
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

          namespace SepaDebit {
            interface MandateOptions {
              /**
               * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'STRIPE'.
               */
              reference_prefix?: string;
            }

            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
          }

          interface Sofort {
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

          interface Swish {
            /**
             * The order reference that will be displayed to customers in the Swish application. Defaults to the `id` of the Payment Intent.
             */
            reference: string | null;
          }

          interface Twint {
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

          interface UsBankAccount {
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

          namespace UsBankAccount {
            interface FinancialConnections {
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

            namespace FinancialConnections {
              interface Filters {
                /**
                 * The account subcategories to use to filter for possible accounts to link. Valid subcategories are `checking` and `savings`.
                 */
                account_subcategories?: Array<Filters.AccountSubcategory>;
              }

              namespace Filters {
                type AccountSubcategory = 'checking' | 'savings';
              }

              type Permission =
                | 'balances'
                | 'ownership'
                | 'payment_method'
                | 'transactions';

              type Prefetch = 'balances' | 'ownership' | 'transactions';
            }

            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

            type VerificationMethod = 'automatic' | 'instant';
          }
        }

        type PaymentStatus = 'no_payment_required' | 'paid' | 'unpaid';

        interface Permissions {
          /**
           * Determines which entity is allowed to update the shipping details.
           *
           * Default is `client_only`. Stripe Checkout client will automatically update the shipping details. If set to `server_only`, only your server is allowed to update the shipping details.
           *
           * When set to `server_only`, you must add the onShippingDetailsChange event handler when initializing the Stripe Checkout client and manually update the shipping details from your server using the Stripe API.
           */
          update_shipping_details: Permissions.UpdateShippingDetails | null;
        }

        namespace Permissions {
          type UpdateShippingDetails = 'client_only' | 'server_only';
        }

        interface PhoneNumberCollection {
          /**
           * Indicates whether phone number collection is enabled for the session
           */
          enabled: boolean;
        }

        interface PresentmentDetails {
          /**
           * Amount intended to be collected by this payment, denominated in `presentment_currency`.
           */
          presentment_amount: number;

          /**
           * Currency presented to the customer during payment.
           */
          presentment_currency: string;
        }

        type RedirectOnCompletion = 'always' | 'if_required' | 'never';

        interface SavedPaymentMethodOptions {
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

        namespace SavedPaymentMethodOptions {
          type AllowRedisplayFilter = 'always' | 'limited' | 'unspecified';

          type PaymentMethodRemove = 'disabled' | 'enabled';

          type PaymentMethodSave = 'disabled' | 'enabled';
        }

        interface ShippingAddressCollection {
          /**
           * An array of two-letter ISO country codes representing which countries Checkout should provide as options for
           * shipping locations. Unsupported country codes: `AS, CX, CC, CU, HM, IR, KP, MH, FM, NF, MP, PW, SY, UM, VI`.
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

        interface ShippingCost {
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
          shipping_rate: string | Stripe.ShippingRate | null;

          /**
           * The taxes applied to the shipping rate.
           */
          taxes?: Array<ShippingCost.Tax>;
        }

        namespace ShippingCost {
          interface Tax {
            /**
             * Amount of tax applied for this rate.
             */
            amount: number;

            /**
             * Tax rates can be applied to [invoices](https://docs.stripe.com/invoicing/taxes/tax-rates), [subscriptions](https://docs.stripe.com/billing/taxes/tax-rates) and [Checkout Sessions](https://docs.stripe.com/payments/checkout/use-manual-tax-rates) to collect tax.
             *
             * Related guide: [Tax rates](https://docs.stripe.com/billing/taxes/tax-rates)
             */
            rate: Stripe.TaxRate;

            /**
             * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
             */
            taxability_reason: Tax.TaxabilityReason | null;

            /**
             * The amount on which tax is calculated, in cents (or local equivalent).
             */
            taxable_amount: number | null;
          }

          namespace Tax {
            type TaxabilityReason =
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

        interface ShippingOption {
          /**
           * A non-negative integer in cents representing how much to charge.
           */
          shipping_amount: number;

          /**
           * The shipping rate.
           */
          shipping_rate: string | Stripe.ShippingRate;
        }

        type Status = 'complete' | 'expired' | 'open';

        type SubmitType = 'auto' | 'book' | 'donate' | 'pay' | 'subscribe';

        interface TaxIdCollection {
          /**
           * Indicates whether tax ID collection is enabled for the session
           */
          enabled: boolean;

          /**
           * Indicates whether a tax ID is required on the payment page
           */
          required: TaxIdCollection.Required;
        }

        namespace TaxIdCollection {
          type Required = 'if_supported' | 'never';
        }

        interface TotalDetails {
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

        namespace TotalDetails {
          interface Breakdown {
            /**
             * The aggregated discounts.
             */
            discounts: Array<Breakdown.Discount>;

            /**
             * The aggregated tax amounts by rate.
             */
            taxes: Array<Breakdown.Tax>;
          }

          namespace Breakdown {
            interface Discount {
              /**
               * The amount discounted.
               */
              amount: number;

              /**
               * A discount represents the actual application of a [coupon](https://api.stripe.com#coupons) or [promotion code](https://api.stripe.com#promotion_codes).
               * It contains information about when the discount began, when it will end, and what it is applied to.
               *
               * Related guide: [Applying discounts to subscriptions](https://docs.stripe.com/billing/subscriptions/discounts)
               */
              discount: Stripe.Discount;
            }

            interface Tax {
              /**
               * Amount of tax applied for this rate.
               */
              amount: number;

              /**
               * Tax rates can be applied to [invoices](https://docs.stripe.com/invoicing/taxes/tax-rates), [subscriptions](https://docs.stripe.com/billing/taxes/tax-rates) and [Checkout Sessions](https://docs.stripe.com/payments/checkout/use-manual-tax-rates) to collect tax.
               *
               * Related guide: [Tax rates](https://docs.stripe.com/billing/taxes/tax-rates)
               */
              rate: Stripe.TaxRate;

              /**
               * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
               */
              taxability_reason: Tax.TaxabilityReason | null;

              /**
               * The amount on which tax is calculated, in cents (or local equivalent).
               */
              taxable_amount: number | null;
            }

            namespace Tax {
              type TaxabilityReason =
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

        type UiMode = 'custom' | 'embedded' | 'hosted';

        interface WalletOptions {
          link?: WalletOptions.Link;
        }

        namespace WalletOptions {
          interface Link {
            /**
             * Describes whether Checkout should display Link. Defaults to `auto`.
             */
            display?: Link.Display;
          }

          namespace Link {
            type Display = 'auto' | 'never';
          }
        }
      }
    }
  }
}
