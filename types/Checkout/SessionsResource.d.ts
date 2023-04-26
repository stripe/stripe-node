// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Checkout {
      interface SessionCreateParams {
        /**
         * The URL to which Stripe should send customers when payment or setup
         * is complete.
         * If you'd like to use information from the successful Checkout Session on your page,
         * read the guide on [customizing your success page](https://stripe.com/docs/payments/checkout/custom-success-page).
         */
        success_url: string;

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
         * Specify whether Checkout should collect the customer's billing address.
         */
        billing_address_collection?: SessionCreateParams.BillingAddressCollection;

        /**
         * If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website.
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
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency?: string;

        /**
         * Collect additional information from your customer using custom fields. Up to 2 fields are supported.
         */
        custom_fields?: Array<SessionCreateParams.CustomField>;

        /**
         * Display additional text for your customers using custom text.
         */
        custom_text?: SessionCreateParams.CustomText;

        /**
         * ID of an existing Customer, if one exists. In `payment` mode, the customer's most recent card
         * payment method will be used to prefill the email, name, card details, and billing address
         * on the Checkout page. In `subscription` mode, the customer's [default payment method](https://stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method)
         * will be used if it's a card, and otherwise the most recent card will be used. A valid billing address, billing name and billing email are required on the payment method for Checkout to prefill the customer's card details.
         *
         * If the Customer already has a valid [email](https://stripe.com/docs/api/customers/object#customer_object-email) set, the email will be prefilled and not editable in Checkout.
         * If the Customer does not have a valid `email`, Checkout will set the email entered during the session on the Customer.
         *
         * If blank for Checkout Sessions in `payment` or `subscription` mode, Checkout will create a new Customer object based on information provided during the payment flow.
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
         * A list of items the customer is purchasing. Use this parameter to pass one-time or recurring [Prices](https://stripe.com/docs/api/prices).
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
        metadata?: Stripe.MetadataParam;

        /**
         * The mode of the Checkout Session. Pass `subscription` if the Checkout Session includes at least one recurring item.
         */
        mode?: SessionCreateParams.Mode;

        /**
         * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
         */
        payment_intent_data?: SessionCreateParams.PaymentIntentData;

        /**
         * Specify whether Checkout should collect a payment method. When set to `if_required`, Checkout will not collect a payment method when the total due for the session is 0.
         * This may occur if the Checkout Session includes a free trial or a discount.
         *
         * Can only be set in `subscription` mode.
         *
         * If you'd like information on how to collect a payment method outside of Checkout, read the guide on configuring [subscriptions with a free trial](https://stripe.com/docs/payments/checkout/free-trials).
         */
        payment_method_collection?: SessionCreateParams.PaymentMethodCollection;

        /**
         * Payment-method-specific configuration.
         */
        payment_method_options?: SessionCreateParams.PaymentMethodOptions;

        /**
         * A list of the types of payment methods (e.g., `card`) this Checkout Session can accept.
         *
         * In `payment` and `subscription` mode, you can omit this attribute to manage your payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
         * It is required in `setup` mode.
         *
         * Read more about the supported payment methods and their requirements in our [payment
         * method details guide](https://stripe.com/docs/payments/checkout/payment-methods).
         *
         * If multiple payment methods are passed, Checkout will dynamically reorder them to
         * prioritize the most relevant payment methods based on the customer's location and
         * other characteristics.
         */
        payment_method_types?: Array<SessionCreateParams.PaymentMethodType>;

        /**
         * Controls phone number collection settings for the session.
         *
         * We recommend that you review your privacy policy and check with your legal contacts
         * before using this feature. Learn more about [collecting phone numbers with Checkout](https://stripe.com/docs/payments/checkout/phone-numbers).
         */
        phone_number_collection?: SessionCreateParams.PhoneNumberCollection;

        /**
         * A subset of parameters to be passed to SetupIntent creation for Checkout Sessions in `setup` mode.
         */
        setup_intent_data?: SessionCreateParams.SetupIntentData;

        /**
         * When set, provides configuration for Checkout to collect a shipping address from a customer.
         */
        shipping_address_collection?: SessionCreateParams.ShippingAddressCollection;

        /**
         * The shipping rate options to apply to this Session.
         */
        shipping_options?: Array<SessionCreateParams.ShippingOption>;

        /**
         * [Deprecated] The shipping rate to apply to this Session. Only up to one may be specified.
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

        /**
         * Controls tax ID collection settings for the session.
         */
        tax_id_collection?: SessionCreateParams.TaxIdCollection;
      }

      namespace SessionCreateParams {
        interface AfterExpiration {
          /**
           * Configure a Checkout Session that can be used to recover an expired session.
           */
          recovery?: AfterExpiration.Recovery;
        }

        namespace AfterExpiration {
          interface Recovery {
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

        interface AutomaticTax {
          /**
           * Set to true to enable automatic taxes.
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

          /**
           * If set to `required`, it requires customers to check a terms of service checkbox before being able to pay.
           * There must be a valid terms of service URL set in your [Dashboard settings](https://dashboard.stripe.com/settings/public).
           */
          terms_of_service?: ConsentCollection.TermsOfService;
        }

        namespace ConsentCollection {
          type Promotions = 'auto' | 'none';

          type TermsOfService = 'none' | 'required';
        }

        type CustomerCreation = 'always' | 'if_required';

        interface CustomerUpdate {
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

        namespace CustomerUpdate {
          type Address = 'auto' | 'never';

          type Name = 'auto' | 'never';

          type Shipping = 'auto' | 'never';
        }

        interface CustomField {
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
           * Whether the customer is required to complete the field before completing the Checkout Session. Defaults to `false`.
           */
          optional?: boolean;

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
            custom: string;

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
          shipping_address?: Stripe.Emptyable<CustomText.ShippingAddress>;

          /**
           * Custom text that should be displayed alongside the payment confirmation button.
           */
          submit?: Stripe.Emptyable<CustomText.Submit>;
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

        interface InvoiceCreation {
          /**
           * Set to `true` to enable invoice creation.
           */
          enabled: boolean;

          /**
           * Parameters passed when creating invoices for payment-mode Checkout Sessions.
           */
          invoice_data?: InvoiceCreation.InvoiceData;
        }

        namespace InvoiceCreation {
          interface InvoiceData {
            /**
             * The account tax IDs associated with the invoice.
             */
            account_tax_ids?: Stripe.Emptyable<Array<string>>;

            /**
             * Default custom fields to be displayed on invoices for this customer.
             */
            custom_fields?: Stripe.Emptyable<Array<InvoiceData.CustomField>>;

            /**
             * An arbitrary string attached to the object. Often useful for displaying to users.
             */
            description?: string;

            /**
             * Default footer to be displayed on invoices for this customer.
             */
            footer?: string;

            /**
             * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: Stripe.MetadataParam;

            /**
             * Default options for invoice PDF rendering for this customer.
             */
            rendering_options?: Stripe.Emptyable<InvoiceData.RenderingOptions>;
          }

          namespace InvoiceData {
            interface CustomField {
              /**
               * The name of the custom field. This may be up to 30 characters.
               */
              name: string;

              /**
               * The value of the custom field. This may be up to 30 characters.
               */
              value: string;
            }

            interface RenderingOptions {
              /**
               * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs. One of `exclude_tax` or `include_inclusive_tax`. `include_inclusive_tax` will include inclusive tax (and exclude exclusive tax) in invoice PDF amounts. `exclude_tax` will exclude all tax (inclusive and exclusive alike) from invoice PDF amounts.
               */
              amount_tax_display?: Stripe.Emptyable<
                RenderingOptions.AmountTaxDisplay
              >;
            }

            namespace RenderingOptions {
              type AmountTaxDisplay = 'exclude_tax' | 'include_inclusive_tax';
            }
          }
        }

        interface LineItem {
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

        namespace LineItem {
          interface AdjustableQuantity {
            /**
             * Set to true if the quantity can be adjusted to any non-negative integer. By default customers will be able to remove the line item by setting the quantity to 0.
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
               * The product's name, meant to be displayable to the customer.
               */
              name: string;

              /**
               * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
               */
              tax_code?: string;
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

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
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

        interface PaymentIntentData {
          /**
           * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total payment amount. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
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
          type CaptureMethod = 'automatic' | 'automatic_async' | 'manual';

          type SetupFutureUsage = 'off_session' | 'on_session';

          interface Shipping {
            /**
             * Shipping address.
             */
            address: Stripe.ShippingAddressParam;

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

        type PaymentMethodCollection = 'always' | 'if_required';

        interface PaymentMethodOptions {
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
           * contains details about the Klarna payment method options.
           */
          klarna?: PaymentMethodOptions.Klarna;

          /**
           * contains details about the Konbini payment method options.
           */
          konbini?: PaymentMethodOptions.Konbini;

          /**
           * contains details about the OXXO payment method options.
           */
          oxxo?: PaymentMethodOptions.Oxxo;

          /**
           * contains details about the P24 payment method options.
           */
          p24?: PaymentMethodOptions.P24;

          /**
           * contains details about the PayNow payment method options.
           */
          paynow?: PaymentMethodOptions.Paynow;

          /**
           * contains details about the Pix payment method options.
           */
          pix?: PaymentMethodOptions.Pix;

          /**
           * contains details about the Sepa Debit payment method options.
           */
          sepa_debit?: PaymentMethodOptions.SepaDebit;

          /**
           * contains details about the Sofort payment method options.
           */
          sofort?: PaymentMethodOptions.Sofort;

          /**
           * contains details about the Us Bank Account payment method options.
           */
          us_bank_account?: PaymentMethodOptions.UsBankAccount;

          /**
           * contains details about the WeChat Pay payment method options.
           */
          wechat_pay?: PaymentMethodOptions.WechatPay;
        }

        namespace PaymentMethodOptions {
          interface AcssDebit {
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
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: AcssDebit.SetupFutureUsage;

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
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
          }

          interface AfterpayClearpay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
          }

          interface Alipay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
          }

          interface AuBecsDebit {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
          }

          interface BacsDebit {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: BacsDebit.SetupFutureUsage;
          }

          namespace BacsDebit {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
          }

          interface Bancontact {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
          }

          interface Boleto {
            /**
             * The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto invoice will expire on Wednesday at 23:59 America/Sao_Paulo time.
             */
            expires_after_days?: number;

            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: Boleto.SetupFutureUsage;
          }

          namespace Boleto {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
          }

          interface Card {
            /**
             * Installment options for card payments
             */
            installments?: Card.Installments;

            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
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
               * Setting to true enables installments for this Checkout Session.
               * Setting to false will prevent any installment plan from applying to a payment.
               */
              enabled?: boolean;
            }

            type SetupFutureUsage = 'off_session' | 'on_session';
          }

          interface Cashapp {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: Cashapp.SetupFutureUsage;
          }

          namespace Cashapp {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
          }

          interface CustomerBalance {
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
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
          }

          namespace CustomerBalance {
            interface BankTransfer {
              /**
               * Configuration for eu_bank_transfer funding type.
               */
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
               * The list of bank transfer types that this PaymentIntent is allowed to use for funding. Permitted values include: `us_bank_account`, `eu_bank_account`, `id_bank_account`, `gb_bank_account`, `jp_bank_account`, `mx_bank_account`, `eu_bank_transfer`, `gb_bank_transfer`, `id_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
               */
              type: BankTransfer.Type;
            }

            namespace BankTransfer {
              interface EuBankTransfer {
                /**
                 * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
                 */
                country: string;
              }

              type RequestedAddressType =
                | 'iban'
                | 'sepa'
                | 'sort_code'
                | 'spei'
                | 'zengin';

              type Type =
                | 'eu_bank_transfer'
                | 'gb_bank_transfer'
                | 'jp_bank_transfer'
                | 'mx_bank_transfer';
            }
          }

          interface Eps {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
          }

          interface Fpx {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
          }

          interface Giropay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
          }

          interface Grabpay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
          }

          interface Ideal {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
          }

          interface Klarna {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
          }

          interface Konbini {
            /**
             * The number of calendar days (between 1 and 60) after which Konbini payment instructions will expire. For example, if a PaymentIntent is confirmed with Konbini and `expires_after_days` set to 2 on Monday JST, the instructions will expire on Wednesday 23:59:59 JST. Defaults to 3 days.
             */
            expires_after_days?: number;

            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
          }

          interface Oxxo {
            /**
             * The number of calendar days before an OXXO voucher expires. For example, if you create an OXXO voucher on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
             */
            expires_after_days?: number;

            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
          }

          interface P24 {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';

            /**
             * Confirm that the payer has accepted the P24 terms and conditions.
             */
            tos_shown_and_accepted?: boolean;
          }

          interface Paynow {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
          }

          interface Pix {
            /**
             * The number of seconds (between 10 and 1209600) after which Pix payment will expire. Defaults to 86400 seconds.
             */
            expires_after_seconds?: number;
          }

          interface SepaDebit {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: SepaDebit.SetupFutureUsage;
          }

          namespace SepaDebit {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
          }

          interface Sofort {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
          }

          interface UsBankAccount {
            /**
             * Additional fields for Financial Connections Session creation
             */
            financial_connections?: UsBankAccount.FinancialConnections;

            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: UsBankAccount.SetupFutureUsage;

            /**
             * Verification method for the intent
             */
            verification_method?: UsBankAccount.VerificationMethod;
          }

          namespace UsBankAccount {
            interface FinancialConnections {
              /**
               * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
               */
              permissions?: Array<FinancialConnections.Permission>;
            }

            namespace FinancialConnections {
              type Permission =
                | 'balances'
                | 'ownership'
                | 'payment_method'
                | 'transactions';
            }

            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

            type VerificationMethod = 'automatic' | 'instant';
          }

          interface WechatPay {
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
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
          }

          namespace WechatPay {
            type Client = 'android' | 'ios' | 'web';
          }
        }

        type PaymentMethodType =
          | 'acss_debit'
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
          | 'customer_balance'
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

        interface ShippingOption {
          /**
           * The ID of the Shipping Rate to use for this shipping option.
           */
          shipping_rate?: string;

          /**
           * Parameters to be passed to Shipping Rate creation for this shipping option
           */
          shipping_rate_data?: ShippingOption.ShippingRateData;
        }

        namespace ShippingOption {
          interface ShippingRateData {
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
            metadata?: Stripe.MetadataParam;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: ShippingRateData.TaxBehavior;

            /**
             * A [tax code](https://stripe.com/docs/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
             */
            tax_code?: string;

            /**
             * The type of calculation to use on the shipping rate. Can only be `fixed_amount` for now.
             */
            type?: 'fixed_amount';
          }

          namespace ShippingRateData {
            interface DeliveryEstimate {
              /**
               * The upper bound of the estimated range. If empty, represents no upper bound i.e., infinite.
               */
              maximum?: DeliveryEstimate.Maximum;

              /**
               * The lower bound of the estimated range. If empty, represents no lower bound.
               */
              minimum?: DeliveryEstimate.Minimum;
            }

            namespace DeliveryEstimate {
              interface Maximum {
                /**
                 * A unit of time.
                 */
                unit: Maximum.Unit;

                /**
                 * Must be greater than 0.
                 */
                value: number;
              }

              namespace Maximum {
                type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
              }

              interface Minimum {
                /**
                 * A unit of time.
                 */
                unit: Minimum.Unit;

                /**
                 * Must be greater than 0.
                 */
                value: number;
              }

              namespace Minimum {
                type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
              }
            }

            interface FixedAmount {
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

            namespace FixedAmount {
              interface CurrencyOptions {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: CurrencyOptions.TaxBehavior;
              }

              namespace CurrencyOptions {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }
        }

        type SubmitType = 'auto' | 'book' | 'donate' | 'pay';

        interface SubscriptionData {
          /**
           * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. To use an application fee percent, the request must be made on behalf of another account, using the `Stripe-Account` header or an OAuth key. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
           */
          application_fee_percent?: number;

          /**
           * A future timestamp to anchor the subscription's billing cycle for new subscriptions.
           */
          billing_cycle_anchor?: number;

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
           * The subscription's description, meant to be displayable to the customer.
           * Use this field to optionally store an explanation of the subscription
           * for rendering in Stripe hosted surfaces.
           */
          description?: string;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
           */
          metadata?: Stripe.MetadataParam;

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

          /**
           * Settings related to subscription trials.
           */
          trial_settings?: SubscriptionData.TrialSettings;
        }

        namespace SubscriptionData {
          type ProrationBehavior = 'create_prorations' | 'none';

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

          interface TrialSettings {
            /**
             * Defines how the subscription should behave when the user's free trial ends.
             */
            end_behavior: TrialSettings.EndBehavior;
          }

          namespace TrialSettings {
            interface EndBehavior {
              /**
               * Indicates how the subscription should change when the trial ends if the user did not provide a payment method.
               */
              missing_payment_method: EndBehavior.MissingPaymentMethod;
            }

            namespace EndBehavior {
              type MissingPaymentMethod = 'cancel' | 'create_invoice' | 'pause';
            }
          }
        }

        interface TaxIdCollection {
          /**
           * Set to true to enable Tax ID collection.
           */
          enabled: boolean;
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
         * Only return the Checkout Session for the subscription specified.
         */
        subscription?: string;
      }

      namespace SessionListParams {
        interface CustomerDetails {
          /**
           * Customer's email address.
           */
          email: string;
        }
      }

      interface SessionExpireParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface SessionListLineItemsParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
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
         * A Session can be expired when it is in one of these statuses: open
         *
         * After it expires, a customer can't complete a Session and customers loading the Session see a message saying the Session is expired.
         */
        expire(
          id: string,
          params?: SessionExpireParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Checkout.Session>>;
        expire(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Checkout.Session>>;

        /**
         * When retrieving a Checkout Session, there is an includable line_items property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
         */
        listLineItems(
          id: string,
          params?: SessionListLineItemsParams,
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
