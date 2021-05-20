// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Checkout {
      /**
       * The Session object.
       */
      interface Session {
        /**
         * Unique identifier for the object. Used to pass to `redirectToCheckout`
         * in Stripe.js.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'checkout.session';

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

        /**
         * Describes whether Checkout should collect the customer's billing address.
         */
        billing_address_collection: Session.BillingAddressCollection | null;

        /**
         * The URL the customer will be directed to if they decide to cancel payment and return to your website.
         */
        cancel_url: string;

        /**
         * A unique string to reference the Checkout Session. This can be a
         * customer ID, a cart ID, or similar, and can be used to reconcile the
         * Session with your internal systems.
         */
        client_reference_id: string | null;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string | null;

        /**
         * The ID of the customer for this Session.
         * For Checkout Sessions in `payment` or `subscription` mode, Checkout
         * will create a new customer object based on information provided
         * during the payment flow unless an existing customer was provided when
         * the Session was created.
         */
        customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

        /**
         * The customer details including the customer's tax exempt status and the customer's tax IDs. Only present on Sessions in `payment` or `subscription` mode.
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
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata | null;

        /**
         * The mode of the Checkout Session.
         */
        mode: Session.Mode;

        /**
         * The ID of the PaymentIntent for Checkout Sessions in `payment` mode.
         */
        payment_intent: string | Stripe.PaymentIntent | null;

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
         * The ID of the SetupIntent for Checkout Sessions in `setup` mode.
         */
        setup_intent: string | Stripe.SetupIntent | null;

        /**
         * Shipping information for this Checkout Session.
         */
        shipping: Session.Shipping | null;

        /**
         * When set, provides configuration for Checkout to collect a shipping address from a customer.
         */
        shipping_address_collection: Session.ShippingAddressCollection | null;

        /**
         * Describes the type of transaction being performed by Checkout in order to customize
         * relevant text on the page, such as the submit button. `submit_type` can only be
         * specified on Checkout Sessions in `payment` mode, but not Checkout Sessions
         * in `subscription` or `setup` mode.
         */
        submit_type: Session.SubmitType | null;

        /**
         * The ID of the subscription for Checkout Sessions in `subscription` mode.
         */
        subscription: string | Stripe.Subscription | null;

        /**
         * The URL the customer will be directed to after the payment or
         * subscription creation is successful.
         */
        success_url: string;

        /**
         * Tax and discount details for the computed total amount.
         */
        total_details: Session.TotalDetails | null;
      }

      namespace Session {
        type BillingAddressCollection = 'auto' | 'required';

        interface CustomerDetails {
          /**
           * The customer's email at time of checkout.
           */
          email: string | null;

          /**
           * The customer's tax exempt status at time of checkout.
           */
          tax_exempt: CustomerDetails.TaxExempt | null;

          /**
           * The customer's tax IDs at time of checkout.
           */
          tax_ids: Array<CustomerDetails.TaxId> | null;
        }

        namespace CustomerDetails {
          type TaxExempt = 'exempt' | 'none' | 'reverse';

          interface TaxId {
            /**
             * The type of the tax ID, one of `eu_vat`, `br_cnpj`, `br_cpf`, `gb_vat`, `nz_gst`, `au_abn`, `in_gst`, `no_vat`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `li_uid`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, or `unknown`
             */
            type: TaxId.Type;

            /**
             * The value of the tax ID.
             */
            value: string | null;
          }

          namespace TaxId {
            type Type =
              | 'ae_trn'
              | 'au_abn'
              | 'br_cnpj'
              | 'br_cpf'
              | 'ca_bn'
              | 'ca_qst'
              | 'ch_vat'
              | 'cl_tin'
              | 'es_cif'
              | 'eu_vat'
              | 'gb_vat'
              | 'hk_br'
              | 'id_npwp'
              | 'in_gst'
              | 'jp_cn'
              | 'jp_rn'
              | 'kr_brn'
              | 'li_uid'
              | 'mx_rfc'
              | 'my_frp'
              | 'my_itn'
              | 'my_sst'
              | 'no_vat'
              | 'nz_gst'
              | 'ru_inn'
              | 'ru_kpp'
              | 'sa_vat'
              | 'sg_gst'
              | 'sg_uen'
              | 'th_vat'
              | 'tw_vat'
              | 'unknown'
              | 'us_ein'
              | 'za_vat';
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
          | 'fr'
          | 'fr-CA'
          | 'hu'
          | 'id'
          | 'it'
          | 'ja'
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
          | 'zh'
          | 'zh-HK'
          | 'zh-TW';

        type Mode = 'payment' | 'setup' | 'subscription';

        interface PaymentMethodOptions {
          acss_debit?: PaymentMethodOptions.AcssDebit;
        }

        namespace PaymentMethodOptions {
          interface AcssDebit {
            currency?: string;

            mandate_options?: AcssDebit.MandateOptions;

            /**
             * Bank account verification method.
             */
            verification_method?: AcssDebit.VerificationMethod;
          }

          namespace AcssDebit {
            interface MandateOptions {
              /**
               * A URL for custom mandate text
               */
              custom_mandate_url?: string;

              /**
               * Description of the interval. Only required if 'payment_schedule' parmeter is 'interval' or 'combined'.
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
              type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

              type TransactionType = 'business' | 'personal';
            }

            type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
          }
        }

        type PaymentStatus = 'no_payment_required' | 'paid' | 'unpaid';

        interface Shipping {
          address?: Stripe.Address;

          /**
           * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
           */
          carrier?: string | null;

          /**
           * Recipient name.
           */
          name?: string | null;

          /**
           * Recipient phone (including extension).
           */
          phone?: string | null;

          /**
           * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
           */
          tracking_number?: string | null;
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

        type SubmitType = 'auto' | 'book' | 'donate' | 'pay';

        interface TotalDetails {
          /**
           * This is the sum of all the line item discounts.
           */
          amount_discount: number;

          /**
           * This is the sum of all the line item shipping amounts.
           */
          amount_shipping: number | null;

          /**
           * This is the sum of all the line item tax amounts.
           */
          amount_tax: number;

          breakdown?: TotalDetails.Breakdown;
        }

        namespace TotalDetails {
          interface Breakdown {
            /**
             * The aggregated line item discounts.
             */
            discounts: Array<Breakdown.Discount>;

            /**
             * The aggregated line item tax amounts by rate.
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
               * A discount represents the actual application of a coupon to a particular
               * customer. It contains information about when the discount began and when it
               * will end.
               *
               * Related guide: [Applying Discounts to Subscriptions](https://stripe.com/docs/billing/subscriptions/discounts).
               */
              discount: Stripe.Discount;
            }

            interface Tax {
              /**
               * Amount of tax applied for this rate.
               */
              amount: number;

              /**
               * Tax rates can be applied to [invoices](https://stripe.com/docs/billing/invoices/tax-rates), [subscriptions](https://stripe.com/docs/billing/subscriptions/taxes) and [Checkout Sessions](https://stripe.com/docs/payments/checkout/set-up-a-subscription#tax-rates) to collect tax.
               *
               * Related guide: [Tax Rates](https://stripe.com/docs/billing/taxes/tax-rates).
               */
              rate: Stripe.TaxRate;
            }
          }
        }
      }

      interface SessionCreateParams {
        /**
         * The URL the customer will be directed to if they decide to cancel payment and return to your website.
         */
        cancel_url: string;

        /**
         * A list of the types of payment methods (e.g., `card`) this Checkout Session can accept.
         *
         * Read more about the supported payment methods and their requirements in our [payment
         * method details guide](https://stripe.com/docs/payments/checkout/payment-methods).
         *
         * If multiple payment methods are passed, Checkout will dynamically reorder them to
         * prioritize the most relevant payment methods based on the customer's location and
         * other characteristics.
         */
        payment_method_types: Array<SessionCreateParams.PaymentMethodType>;

        /**
         * The URL to which Stripe should send customers when payment or setup
         * is complete.
         * If you'd like access to the Checkout Session for the successful
         * payment, read more about it in the guide on [fulfilling orders](https://stripe.com/docs/payments/checkout/fulfill-orders).
         */
        success_url: string;

        /**
         * Enables user redeemable promotion codes.
         */
        allow_promotion_codes?: boolean;

        /**
         * Specify whether Checkout should collect the customer's billing address.
         */
        billing_address_collection?: SessionCreateParams.BillingAddressCollection;

        /**
         * A unique string to reference the Checkout Session. This can be a
         * customer ID, a cart ID, or similar, and can be used to reconcile the
         * session with your internal systems.
         */
        client_reference_id?: string;

        /**
         * ID of an existing Customer, if one exists. In `payment` mode, the customer's most recent card
         * payment method will be used to prefill the email, name, card details, and billing address
         * on the Checkout page. In `subscription` mode, the customer's [default payment method](https://stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method)
         * will be used if it's a card, and otherwise the most recent card will be used. A valid billing address is required for Checkout to prefill the customer's card details.
         *
         * If the customer changes their email on the Checkout page, the Customer object will be updated with the new email.
         *
         * If blank for Checkout Sessions in `payment` or `subscription` mode, Checkout will create a new Customer object based on information provided during the payment flow.
         *
         * You can set [`payment_intent_data.setup_future_usage`](https://stripe.com/docs/api/checkout/sessions/create#create_checkout_session-payment_intent_data-setup_future_usage) to have Checkout automatically attach the payment method to the Customer you pass in for future reuse.
         */
        customer?: string;

        /**
         * If provided, this value will be used when the Customer object is created.
         * If not provided, customers will be asked to enter their email address.
         * Use this parameter to prefill customer data if you already have an email
         * on file. To access information about the customer once a session is
         * complete, use the `customer` field.
         */
        customer_email?: string;

        /**
         * The coupon or promotion code to apply to this Session. Currently, only up to one may be specified.
         */
        discounts?: Array<SessionCreateParams.Discount>;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * A list of items the customer is purchasing. Use this parameter to pass one-time or recurring [Prices](https://stripe.com/docs/api/prices).
         *
         * For `payment` mode, there is a maximum of 100 line items, however it is recommended to consolidate line items if there are more than a few dozen.
         *
         * For `subscription` mode, there is a maximum of 20 line items with recurring Prices and 20 line items with one-time Prices. Line items with one-time Prices in will be on the initial invoice only.
         */
        line_items?: Array<SessionCreateParams.LineItem>;

        /**
         * The IETF language tag of the locale Checkout is displayed in. If blank or `auto`, the browser's locale is used.
         */
        locale?: SessionCreateParams.Locale;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * The mode of the Checkout Session. Required when using prices or `setup` mode. Pass `subscription` if the Checkout Session includes at least one recurring item.
         */
        mode?: SessionCreateParams.Mode;

        /**
         * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
         */
        payment_intent_data?: SessionCreateParams.PaymentIntentData;

        /**
         * Payment-method-specific configuration.
         */
        payment_method_options?: SessionCreateParams.PaymentMethodOptions;

        /**
         * A subset of parameters to be passed to SetupIntent creation for Checkout Sessions in `setup` mode.
         */
        setup_intent_data?: SessionCreateParams.SetupIntentData;

        /**
         * When set, provides configuration for Checkout to collect a shipping address from a customer.
         */
        shipping_address_collection?: SessionCreateParams.ShippingAddressCollection;

        /**
         * The shipping rate to apply to this Session. Currently, only up to one may be specified
         */
        shipping_rates?: Array<string>;

        /**
         * Describes the type of transaction being performed by Checkout in order to customize
         * relevant text on the page, such as the submit button. `submit_type` can only be
         * specified on Checkout Sessions in `payment` mode, but not Checkout Sessions
         * in `subscription` or `setup` mode.
         */
        submit_type?: SessionCreateParams.SubmitType;

        /**
         * A subset of parameters to be passed to subscription creation for Checkout Sessions in `subscription` mode.
         */
        subscription_data?: SessionCreateParams.SubscriptionData;
      }

      namespace SessionCreateParams {
        type BillingAddressCollection = 'auto' | 'required';

        interface Discount {
          /**
           * The ID of the coupon to apply to this Session.
           */
          coupon?: string;

          /**
           * The ID of a promotion code to apply to this Session.
           */
          promotion_code?: string;
        }

        interface LineItem {
          /**
           * When set, provides configuration for this item's quantity to be adjusted by the customer during Checkout.
           */
          adjustable_quantity?: LineItem.AdjustableQuantity;

          /**
           * The amount to be collected per unit of the line item. If specified, must also pass `currency` and `name`.
           */
          amount?: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). Required if `amount` is passed.
           */
          currency?: string;

          /**
           * The description for the line item, to be displayed on the Checkout page.
           *
           * If using `price` or `price_data`, will default to the name of the associated product.
           */
          description?: string;

          /**
           * The [tax rates](https://stripe.com/docs/api/tax_rates) that will be applied to this line item depending on the customer's billing/shipping address. We currently support the following countries: US, GB, AU, and all countries in the EU.
           */
          dynamic_tax_rates?: Array<string>;

          /**
           * A list of image URLs representing this line item. Each image can be up to 5 MB in size. If passing `price` or `price_data`, specify images on the associated product instead.
           */
          images?: Array<string>;

          /**
           * The name for the item to be displayed on the Checkout page. Required if `amount` is passed.
           */
          name?: string;

          /**
           * The ID of the [Price](https://stripe.com/docs/api/prices) or [Plan](https://stripe.com/docs/api/plans) object. One of `price`, `price_data` or `amount` is required.
           */
          price?: string;

          /**
           * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price`, `price_data` or `amount` is required.
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

        namespace LineItem {
          interface AdjustableQuantity {
            /**
             * Set to true if the quantity can be adjusted to any non-negative integer. By default customers will be able to remove the line item by setting the quantity to 0.
             */
            enabled: boolean;

            /**
             * The maximum quantity the customer can purchase for the Checkout Session. By default this value is 99.
             */
            maximum?: number;

            /**
             * The minimum quantity the customer must purchase for the Checkout Session. By default this value is 0.
             */
            minimum?: number;
          }

          interface PriceData {
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;

            /**
             * The ID of the product that this price will belong to. One of `product` or `product_data` is required.
             */
            product?: string;

            /**
             * Data used to generate a new product object inline. One of `product` or `product_data` is required.
             */
            product_data?: PriceData.ProductData;

            /**
             * The recurring components of a price such as `interval` and `usage_type`.
             */
            recurring?: PriceData.Recurring;

            /**
             * A non-negative integer in %s representing how much to charge. One of `unit_amount` or `unit_amount_decimal` is required.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in %s with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace PriceData {
            interface ProductData {
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
              metadata?: Stripe.MetadataParam;

              /**
               * The product's name, meant to be displayable to the customer. Whenever this product is sold via a subscription, name will show up on associated invoice line item descriptions.
               */
              name: string;
            }

            interface Recurring {
              /**
               * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
               */
              interval: Recurring.Interval;

              /**
               * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
               */
              interval_count?: number;
            }

            namespace Recurring {
              type Interval = 'day' | 'month' | 'week' | 'year';
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
          | 'fr'
          | 'fr-CA'
          | 'hu'
          | 'id'
          | 'it'
          | 'ja'
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
          | 'zh'
          | 'zh-HK'
          | 'zh-TW';

        type Mode = 'payment' | 'setup' | 'subscription';

        interface PaymentIntentData {
          /**
           * The amount of the application fee (if any) that will be requested to be applied to the payment and
           * transferred to the application owner's Stripe account. The amount of the application fee collected
           * will be capped at the total payment amount. To use an application fee, the request must be made on
           * behalf of another account, using the `Stripe-Account` header or an OAuth key. For more information,
           * see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
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
          metadata?: Stripe.MetadataParam;

          /**
           * The Stripe account ID for which these funds are intended. For details,
           * see the PaymentIntents [use case for connected
           * accounts](https://stripe.com/docs/payments/connected-accounts).
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
           * For both values, Checkout will attach the payment method to either the
           * provided Customer for the session, or a new Customer created by Checkout
           * if one has not been provided.
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
           * Extra information about the payment. This will appear on your
           * customer's statement when this payment succeeds in creating a charge.
           */
          statement_descriptor?: string;

          /**
           * Provides information about the charge that customers see on their statements. Concatenated with the
           * prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete
           * statement descriptor. Maximum 22 characters for the concatenated descriptor.
           */
          statement_descriptor_suffix?: string;

          /**
           * The parameters used to automatically create a Transfer when the payment succeeds.
           * For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
           */
          transfer_data?: PaymentIntentData.TransferData;

          /**
           * A string that identifies the resulting payment as part of a group. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts) for details.
           */
          transfer_group?: string;
        }

        namespace PaymentIntentData {
          type CaptureMethod = 'automatic' | 'manual';

          type SetupFutureUsage = 'off_session' | 'on_session';

          interface Shipping {
            /**
             * Shipping address.
             */
            address: Stripe.AddressParam;

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

        interface PaymentMethodOptions {
          /**
           * contains details about the ACSS Debit payment method options.
           */
          acss_debit?: PaymentMethodOptions.AcssDebit;
        }

        namespace PaymentMethodOptions {
          interface AcssDebit {
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency?: AcssDebit.Currency;

            /**
             * Additional fields for Mandate creation
             */
            mandate_options?: AcssDebit.MandateOptions;

            /**
             * Verification method for the intent
             */
            verification_method?: AcssDebit.VerificationMethod;
          }

          namespace AcssDebit {
            type Currency = 'cad' | 'usd';

            interface MandateOptions {
              /**
               * A URL for custom mandate text to render during confirmation step.
               * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
               * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
               */
              custom_mandate_url?: Stripe.Emptyable<string>;

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

            namespace MandateOptions {
              type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

              type TransactionType = 'business' | 'personal';
            }

            type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
          }
        }

        type PaymentMethodType =
          | 'acss_debit'
          | 'afterpay_clearpay'
          | 'alipay'
          | 'bacs_debit'
          | 'bancontact'
          | 'card'
          | 'eps'
          | 'fpx'
          | 'giropay'
          | 'grabpay'
          | 'ideal'
          | 'p24'
          | 'sepa_debit'
          | 'sofort';

        interface SetupIntentData {
          /**
           * An arbitrary string attached to the object. Often useful for displaying to users.
           */
          description?: string;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * The Stripe account for which the setup is intended.
           */
          on_behalf_of?: string;
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

        type SubmitType = 'auto' | 'book' | 'donate' | 'pay';

        interface SubscriptionData {
          /**
           * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. To use an application fee percent, the request must be made on behalf of another account, using the `Stripe-Account` header or an OAuth key. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
           */
          application_fee_percent?: number;

          /**
           * The ID of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription.
           */
          coupon?: string;

          /**
           * The tax rates that will apply to any subscription item that does not have
           * `tax_rates` set. Invoices created will have their `default_tax_rates` populated
           * from the subscription.
           */
          default_tax_rates?: Array<string>;

          /**
           * A list of items, each with an attached plan, that the customer is subscribing to. Prefer using `line_items`.
           */
          items?: Array<SubscriptionData.Item>;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * If specified, the funds from the subscription's invoices will be transferred to the destination and the ID of the resulting transfers will be found on the resulting charges.
           */
          transfer_data?: SubscriptionData.TransferData;

          /**
           * Unix timestamp representing the end of the trial period the customer
           * will get before being charged for the first time. Has to be at least
           * 48 hours in the future.
           */
          trial_end?: number;

          /**
           * Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` on `subscription_data` is preferred. Defaults to `false`.
           */
          trial_from_plan?: boolean;

          /**
           * Integer representing the number of trial period days before the
           * customer is charged for the first time. Has to be at least 1.
           */
          trial_period_days?: number;
        }

        namespace SubscriptionData {
          interface Item {
            /**
             * Plan ID for this item.
             */
            plan: string;

            /**
             * The quantity of the subscription item being purchased. Quantity should not be defined when `recurring.usage_type=metered`.
             */
            quantity?: number;

            /**
             * The tax rates which apply to this item. When set, the `default_tax_rates`
             * on `subscription_data` do not apply to this item.
             */
            tax_rates?: Array<string>;
          }

          interface TransferData {
            /**
             * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
             */
            amount_percent?: number;

            /**
             * ID of an existing, connected Stripe account.
             */
            destination: string;
          }
        }
      }

      interface SessionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface SessionListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return the Checkout Session for the PaymentIntent specified.
         */
        payment_intent?: string;

        /**
         * Only return the Checkout Session for the subscription specified.
         */
        subscription?: string;
      }

      class SessionsResource {
        /**
         * Creates a Session object.
         */
        create(
          params: SessionCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Checkout.Session>>;

        /**
         * Retrieves a Session object.
         */
        retrieve(
          id: string,
          params?: SessionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Checkout.Session>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Checkout.Session>>;

        /**
         * Returns a list of Checkout Sessions.
         */
        list(
          params?: SessionListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Checkout.Session>;
        list(options?: RequestOptions): ApiListPromise<Stripe.Checkout.Session>;

        /**
         * When retrieving a Checkout Session, there is an includable line_items property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
         */
        listLineItems(
          id: string,
          params?: LineItemListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.LineItem>;
        listLineItems(
          id: string,
          options?: RequestOptions
        ): ApiListPromise<Stripe.LineItem>;
      }
    }
  }
}
