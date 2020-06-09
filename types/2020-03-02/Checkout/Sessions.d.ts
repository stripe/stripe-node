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
         * The value (`auto` or `required`) for whether Checkout collected the
         * customer's billing address.
         */
        billing_address_collection: string | null;

        /**
         * The URL the customer will be directed to if they decide to cancel payment and return to your website.
         */
        cancel_url: string;

        /**
         * A unique string to reference the Checkout Session. This can be a
         * customer ID, a cart ID, or similar, and can be used to reconcile the
         * session with your internal systems.
         */
        client_reference_id: string | null;

        /**
         * The ID of the customer for this session.
         * For Checkout Sessions in `payment` or `subscription` mode, Checkout
         * will create a new customer object based on information provided
         * during the session unless an existing customer was provided when
         * the session was created.
         */
        customer: string | Stripe.Customer | null;

        /**
         * If provided, this value will be used when the Customer object is created.
         * If not provided, customers will be asked to enter their email address.
         * Use this parameter to prefill customer data if you already have an email
         * on file. To access information about the customer once a session is
         * complete, use the `customer` attribute.
         */
        customer_email: string | null;

        /**
         * The line items, plans, or SKUs purchased by the customer. Prefer using `line_items`.
         */
        display_items?: Array<Session.DisplayItem>;

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
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Metadata | null;

        /**
         * The mode of the Checkout Session, one of `payment`, `setup`, or `subscription`.
         */
        mode: Session.Mode | null;

        /**
         * The ID of the PaymentIntent for Checkout Sessions in `payment` mode.
         */
        payment_intent: string | Stripe.PaymentIntent | null;

        /**
         * A list of the types of payment methods (e.g. card) this Checkout
         * Session is allowed to accept.
         */
        payment_method_types: Array<string>;

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
      }

      namespace Session {
        interface DisplayItem {
          /**
           * Amount for the display item.
           */
          amount?: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency?: string;

          custom?: DisplayItem.Custom;

          /**
           * You can now model subscriptions more flexibly using the [Prices API](https://stripe.com/docs/api#prices). It replaces the Plans API and is backwards compatible to simplify your migration.
           *
           * Plans define the base price, currency, and billing cycle for recurring purchases of products.
           * [Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and plans help you track pricing. Different physical goods or levels of service should be represented by products, and pricing options should be represented by plans. This approach lets you change prices without having to change your provisioning scheme.
           *
           * For example, you might have a single "gold" product that has plans for $10/month, $100/year, €9/month, and €90/year.
           *
           * Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription) and more about [products and prices](https://stripe.com/docs/billing/prices-guide).
           */
          plan?: Stripe.Plan;

          /**
           * Quantity of the display item being purchased.
           */
          quantity?: number;

          /**
           * Stores representations of [stock keeping units](http://en.wikipedia.org/wiki/Stock_keeping_unit).
           * SKUs describe specific product variations, taking into account any combination of: attributes,
           * currency, and cost. For example, a product may be a T-shirt, whereas a specific SKU represents
           * the `size: large`, `color: red` version of that shirt.
           *
           * Can also be used to manage inventory.
           *
           * Related guide: [Tax, Shipping, and Inventory](https://stripe.com/docs/orders).
           */
          sku?: Stripe.Sku;

          /**
           * The type of display item. One of `custom`, `plan` or `sku`
           */
          type?: string;
        }

        namespace DisplayItem {
          interface Custom {
            /**
             * The description of the line item.
             */
            description: string | null;

            /**
             * The images of the line item.
             */
            images: Array<string> | null;

            /**
             * The name of the line item.
             */
            name: string;
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
          | 'es'
          | 'et'
          | 'fi'
          | 'fr'
          | 'hu'
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
          | 'tr'
          | 'zh';

        type Mode = 'payment' | 'setup' | 'subscription';

        interface Shipping {
          address?: Address;

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
      }

      interface SessionCreateParams {
        /**
         * The URL the customer will be directed to if they decide to cancel payment and return to your website.
         */
        cancel_url: string;

        /**
         * A list of the types of payment methods (e.g., `card`) this Checkout session can accept.
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
         * payment, read more about it in our guide on [fulfilling your payments
         * with webhooks](https://stripe.com/docs/payments/checkout/accept-a-payment#payment-success).
         */
        success_url: string;

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
         * ID of an existing customer, if one exists. The email stored on the
         * customer will be used to prefill the email field on the Checkout page.
         * If the customer changes their email on the Checkout page, the Customer
         * object will be updated with the new email.
         * If blank for Checkout Sessions in `payment` or `subscription` mode,
         * Checkout will create a new customer object based on information
         * provided during the session.
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
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * A list of items the customer is purchasing. Use this parameter to pass one-time or recurring [prices](https://stripe.com/docs/api/prices).
         * One-time prices in `subscription` mode will be on the initial invoice only.
         *
         * There is a maximum of 100 line items, however it is recommended to
         * consolidate line items if there are more than a few dozen.
         */
        line_items?: Array<SessionCreateParams.LineItem>;

        /**
         * The IETF language tag of the locale Checkout is displayed in. If blank or `auto`, the browser's locale is used.
         */
        locale?: SessionCreateParams.Locale;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;

        /**
         * The mode of the Checkout Session, one of `payment`, `setup`, or `subscription`. Required when using prices or `setup` mode. Pass `subscription` if Checkout session includes at least one recurring item.
         */
        mode?: SessionCreateParams.Mode;

        /**
         * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
         */
        payment_intent_data?: SessionCreateParams.PaymentIntentData;

        /**
         * A subset of parameters to be passed to SetupIntent creation for Checkout Sessions in `setup` mode.
         */
        setup_intent_data?: SessionCreateParams.SetupIntentData;

        /**
         * When set, provides configuration for Checkout to collect a shipping address from a customer.
         */
        shipping_address_collection?: SessionCreateParams.ShippingAddressCollection;

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

        interface LineItem {
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
           * A list of image URLs representing this line item. Each image can be up to 5 MB in size. If passing `price` or `price_data`, specify images on the associated product instead.
           */
          images?: Array<string>;

          /**
           * The name for the item to be displayed on the Checkout page. Required if `amount` is passed.
           */
          name?: string;

          /**
           * The ID of the price or plan object. One of `price`, `price_data` or `amount` is required.
           */
          price?: string;

          /**
           * Data used to generate a new price object inline. One of `price`, `price_data` or `amount` is required.
           */
          price_data?: LineItem.PriceData;

          /**
           * The quantity of the line item being purchased.
           */
          quantity: number;

          /**
           * The tax rates which apply to this line item. This is only allowed in subscription mode.
           */
          tax_rates?: Array<string>;
        }

        namespace LineItem {
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
             * A positive integer in %s representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
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
               * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
               */
              metadata?: MetadataParam;

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
          | 'es'
          | 'et'
          | 'fi'
          | 'fr'
          | 'hu'
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
          | 'tr'
          | 'zh';

        type Mode = 'payment' | 'setup' | 'subscription';

        interface PaymentIntentData {
          /**
           * The amount of the application fee (if any) that will be applied to the payment and transferred to the
           * application owner's Stripe account. To use an application fee, the request must be made on
           * behalf of another account, using the `Stripe-Account` header or an OAuth key. For more
           * information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
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
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
           */
          metadata?: MetadataParam;

          /**
           * The Stripe account ID for which these funds are intended. For details,
           * see the PaymentIntents [use case for connected
           * accounts](https://stripe.com/docs/payments/connected-accounts).
           */
          on_behalf_of?: string;

          /**
           * Email address that the receipt for the resulting payment will be sent to.
           */
          receipt_email?: string;

          /**
           * Indicates that you intend to make future payments with the payment
           * method collected by this Checkout Session.
           *
           * When setting this to `off_session`, Checkout will show a notice to the
           * customer that their payment details will be saved and used for future
           * payments.
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

        type PaymentMethodType =
          | 'bacs_debit'
          | 'bancontact'
          | 'card'
          | 'eps'
          | 'fpx'
          | 'giropay'
          | 'ideal'
          | 'p24';

        interface SetupIntentData {
          /**
           * An arbitrary string attached to the object. Often useful for displaying to users.
           */
          description?: string;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
           */
          metadata?: MetadataParam;

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
           * The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription.
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
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
           */
          metadata?: MetadataParam;

          /**
           * Unix timestamp representing the end of the trial period the customer
           * will get before being charged for the first time. Has to be at least
           * 48 hours in the future.
           */
          trial_end?: number;

          /**
           * Indicates if a plan's `trial_period_days` should be applied to the
           * subscription. Setting `trial_end` on `subscription_data` is preferred.
           * Defaults to `false`.
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
             * Quantity for this item.
             */
            quantity?: number;

            /**
             * The tax rates which apply to this item. When set, the `default_tax_rates`
             * on `subscription_data` do not apply to this item.
             */
            tax_rates?: Array<string>;
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
        ): Promise<Stripe.Checkout.Session>;

        /**
         * Retrieves a Session object.
         */
        retrieve(
          id: string,
          params?: SessionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Checkout.Session>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Checkout.Session>;

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
