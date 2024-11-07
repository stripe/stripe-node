// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface OrderCreateParams {
      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * A list of line items the customer is ordering. Each line item includes information about the product, the quantity, and the resulting cost.
       */
      line_items: Array<OrderCreateParams.LineItem>;

      /**
       * Settings for automatic tax calculation for this order.
       */
      automatic_tax?: OrderCreateParams.AutomaticTax;

      /**
       * Billing details for the customer. If a customer is provided, this will be automatically populated with values from that customer if override values are not provided.
       */
      billing_details?: Stripe.Emptyable<OrderCreateParams.BillingDetails>;

      /**
       * The credits to apply to the order, only `gift_card` currently supported.
       */
      credits?: Stripe.Emptyable<Array<OrderCreateParams.Credit>>;

      /**
       * The customer associated with this order.
       */
      customer?: string;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description?: string;

      /**
       * The coupons, promotion codes, and/or discounts to apply to the order.
       */
      discounts?: Stripe.Emptyable<Array<OrderCreateParams.Discount>>;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The IP address of the purchaser for this order.
       */
      ip_address?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * Payment information associated with the order, including payment settings.
       */
      payment?: OrderCreateParams.Payment;

      /**
       * Settings for the customer cost of shipping for this order.
       */
      shipping_cost?: Stripe.Emptyable<OrderCreateParams.ShippingCost>;

      /**
       * Shipping details for the order.
       */
      shipping_details?: Stripe.Emptyable<OrderCreateParams.ShippingDetails>;

      /**
       * Additional tax details about the purchaser to be used for this order.
       */
      tax_details?: OrderCreateParams.TaxDetails;
    }

    namespace OrderCreateParams {
      interface AutomaticTax {
        /**
         * Enable automatic tax calculation which will automatically compute tax rates on this order.
         */
        enabled: boolean;
      }

      interface BillingDetails {
        /**
         * The billing address provided by the customer.
         */
        address?: Stripe.AddressParam;

        /**
         * The billing email provided by the customer.
         */
        email?: string;

        /**
         * The billing name provided by the customer.
         */
        name?: string;

        /**
         * The billing phone number provided by the customer.
         */
        phone?: string;
      }

      interface Credit {
        /**
         * The gift card to apply to the order.
         */
        gift_card?: string;

        /**
         * The type of credit to apply to the order, only `gift_card` currently supported.
         */
        type: 'gift_card';
      }

      interface Discount {
        /**
         * ID of the coupon to create a new discount for.
         */
        coupon?: string;

        /**
         * ID of an existing discount on the object (or one of its ancestors) to reuse.
         */
        discount?: string;

        /**
         * ID of the promotion code to create a new discount for.
         */
        promotion_code?: string;
      }

      interface LineItem {
        /**
         * The description for the line item. Will default to the name of the associated product.
         */
        description?: string;

        /**
         * The discounts applied to this line item.
         */
        discounts?: Stripe.Emptyable<Array<LineItem.Discount>>;

        /**
         * The ID of a [Price](https://stripe.com/docs/api/prices) to add to the Order.
         *
         * The `price` parameter is an alternative to using the `product` parameter. If each of your products are sold at a single price, you can set `Product.default_price` and then pass the `product` parameter when creating a line item. If your products are sold at several possible prices, use the `price` parameter to explicitly specify which one to use.
         */
        price?: string;

        /**
         * Data used to generate a new Price object inline.
         *
         * The `price_data` parameter is an alternative to using the `product` or `price` parameters. If you create products upfront and configure a `Product.default_price`, pass the `product` parameter when creating a line item. If you prefer not to define products upfront, or if you charge variable prices, pass the `price_data` parameter to describe the price for this line item.
         *
         * Each time you pass `price_data` we create a Price for the product. This Price is hidden in both the Dashboard and API lists and cannot be reused.
         */
        price_data?: LineItem.PriceData;

        /**
         * The ID of a [Product](https://stripe.com/docs/api/products) to add to the Order.
         *
         * The product must have a `default_price` specified. Otherwise, specify the price by passing the `price` or `price_data` parameter.
         */
        product?: string;

        /**
         * Defines a Product inline and adds it to the Order.
         *
         * `product_data` is an alternative to the `product` parameter. If you created a Product upfront, use the `product` parameter to refer to the existing Product. But if you prefer not to create Products upfront, pass the `product_data` parameter to define a Product inline as part of configuring the Order.
         *
         * `product_data` automatically creates a Product, just as if you had manually created the Product. If a Product with the same ID already exists, then `product_data` re-uses it to avoid duplicates.
         */
        product_data?: LineItem.ProductData;

        /**
         * The quantity of the line item.
         */
        quantity?: number;

        /**
         * The tax rates applied to this line item.
         */
        tax_rates?: Stripe.Emptyable<Array<string>>;
      }

      namespace LineItem {
        interface Discount {
          /**
           * ID of the coupon to create a new discount for.
           */
          coupon?: string;

          /**
           * ID of an existing discount on the object (or one of its ancestors) to reuse.
           */
          discount?: string;
        }

        interface PriceData {
          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency?: string;

          /**
           * ID of the product this price belongs to.
           *
           * Use this to implement a variable-pricing model in your integration. This is required if `product_data` is not specified.
           */
          product?: string;

          /**
           * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
           */
          tax_behavior?: PriceData.TaxBehavior;

          /**
           * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
           */
          unit_amount?: number;

          /**
           * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
           */
          unit_amount_decimal?: string;
        }

        namespace PriceData {
          type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }

        interface ProductData {
          /**
           * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
           */
          description?: Stripe.Emptyable<string>;

          /**
           * A unique identifier for this product.
           *
           * `product_data` automatically creates a Product with this ID. If a Product with the same ID already exists, then `product_data` re-uses it to avoid duplicates. If any of the fields in the existing Product are different from the values in `product_data`, `product_data` updates the existing Product with the new information. So set `product_data[id]` to the same string every time you sell the same product, but don't re-use the same string for different products.
           */
          id: string;

          /**
           * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
           */
          images?: Stripe.Emptyable<Array<string>>;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
           */
          metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

          /**
           * The product's name, meant to be displayable to the customer.
           */
          name: string;

          /**
           * The dimensions of this product for shipping purposes.
           */
          package_dimensions?: Stripe.Emptyable<ProductData.PackageDimensions>;

          /**
           * Whether this product is shipped (i.e., physical goods).
           */
          shippable?: boolean;

          /**
           * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
           */
          tax_code?: Stripe.Emptyable<string>;

          /**
           * A URL of a publicly-accessible webpage for this product.
           */
          url?: Stripe.Emptyable<string>;
        }

        namespace ProductData {
          interface PackageDimensions {
            /**
             * Height, in inches. Maximum precision is 2 decimal places.
             */
            height: number;

            /**
             * Length, in inches. Maximum precision is 2 decimal places.
             */
            length: number;

            /**
             * Weight, in ounces. Maximum precision is 2 decimal places.
             */
            weight: number;

            /**
             * Width, in inches. Maximum precision is 2 decimal places.
             */
            width: number;
          }
        }
      }

      interface Payment {
        /**
         * Settings describing how the order should configure generated PaymentIntents.
         */
        settings: Payment.Settings;
      }

      namespace Payment {
        interface Settings {
          /**
           * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account.
           */
          application_fee_amount?: number;

          /**
           * PaymentMethod-specific configuration to provide to the order's PaymentIntent.
           */
          payment_method_options?: Settings.PaymentMethodOptions;

          /**
           * The list of [payment method types](https://stripe.com/docs/payments/payment-methods/overview) to provide to the order's PaymentIntent. Do not include this attribute if you prefer to manage your payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
           */
          payment_method_types?: Array<Settings.PaymentMethodType>;

          /**
           * The URL to redirect the customer to after they authenticate their payment.
           */
          return_url?: string;

          /**
           * For non-card charges, you can use this value as the complete description that appears on your customers' statements. Must contain at least one letter, maximum 22 characters.
           */
          statement_descriptor?: string;

          /**
           * Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
           */
          statement_descriptor_suffix?: string;

          /**
           * Provides configuration for completing a transfer for the order after it is paid.
           */
          transfer_data?: Settings.TransferData;
        }

        namespace Settings {
          interface PaymentMethodOptions {
            /**
             * If paying by `acss_debit`, this sub-hash contains details about the ACSS Debit payment method options to pass to the order's PaymentIntent.
             */
            acss_debit?: PaymentMethodOptions.AcssDebit;

            /**
             * If paying by `afterpay_clearpay`, this sub-hash contains details about the AfterpayClearpay payment method options to pass to the order's PaymentIntent.
             */
            afterpay_clearpay?: PaymentMethodOptions.AfterpayClearpay;

            /**
             * If paying by `alipay`, this sub-hash contains details about the Alipay payment method options to pass to the order's PaymentIntent.
             */
            alipay?: PaymentMethodOptions.Alipay;

            /**
             * If paying by `bancontact`, this sub-hash contains details about the Bancontact payment method options to pass to the order's PaymentIntent.
             */
            bancontact?: PaymentMethodOptions.Bancontact;

            /**
             * If paying by `card`, this sub-hash contains details about the Card payment method options to pass to the order's PaymentIntent.
             */
            card?: PaymentMethodOptions.Card;

            /**
             * If paying by `customer_balance`, this sub-hash contains details about the Customer Balance payment method options to pass to the order's PaymentIntent.
             */
            customer_balance?: PaymentMethodOptions.CustomerBalance;

            /**
             * If paying by `ideal`, this sub-hash contains details about the iDEAL payment method options to pass to the order's PaymentIntent.
             */
            ideal?: PaymentMethodOptions.Ideal;

            /**
             * If paying by `klarna`, this sub-hash contains details about the Klarna payment method options to pass to the order's PaymentIntent.
             */
            klarna?: PaymentMethodOptions.Klarna;

            /**
             * If paying by `link`, this sub-hash contains details about the Link payment method options to pass to the order's PaymentIntent.
             */
            link?: PaymentMethodOptions.Link;

            /**
             * If paying by `oxxo`, this sub-hash contains details about the OXXO payment method options to pass to the order's PaymentIntent.
             */
            oxxo?: PaymentMethodOptions.Oxxo;

            /**
             * If paying by `p24`, this sub-hash contains details about the P24 payment method options to pass to the order's PaymentIntent.
             */
            p24?: PaymentMethodOptions.P24;

            /**
             * If paying by `paypal`, this sub-hash contains details about the PayPal payment method options to pass to the order's PaymentIntent.
             */
            paypal?: PaymentMethodOptions.Paypal;

            /**
             * If paying by `sepa_debit`, this sub-hash contains details about the SEPA Debit payment method options to pass to the order's PaymentIntent.
             */
            sepa_debit?: PaymentMethodOptions.SepaDebit;

            /**
             * If paying by `sofort`, this sub-hash contains details about the Sofort payment method options to pass to the order's PaymentIntent.
             */
            sofort?: PaymentMethodOptions.Sofort;

            /**
             * If paying by `wechat_pay`, this sub-hash contains details about the WeChat Pay payment method options to pass to the order's PaymentIntent.
             */
            wechat_pay?: PaymentMethodOptions.WechatPay;
          }

          namespace PaymentMethodOptions {
            interface AcssDebit {
              /**
               * Additional fields for Mandate creation
               */
              mandate_options?: AcssDebit.MandateOptions;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<AcssDebit.SetupFutureUsage>;

              /**
               * Bank account verification method.
               */
              verification_method?: AcssDebit.VerificationMethod;
            }

            namespace AcssDebit {
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

              type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

              type VerificationMethod =
                | 'automatic'
                | 'instant'
                | 'microdeposits';
            }

            interface AfterpayClearpay {
              /**
               * Controls when the funds are captured from the customer's account.
               *
               * If provided, this parameter overrides the behavior of the top-level [capture_method](https://stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
               *
               * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
               */
              capture_method?: AfterpayClearpay.CaptureMethod;

              /**
               * An internal identifier or reference this payment corresponds to. The identifier is limited to 128 characters and may contain only letters, digits, underscores, backslashes and dashes.
               */
              reference?: string;

              /**
               * Indicates that you intend to make future payments with the payment method.
               *
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the order's Customer, if present, after the order's PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: 'none';
            }

            namespace AfterpayClearpay {
              type CaptureMethod = 'automatic' | 'automatic_async' | 'manual';
            }

            interface Alipay {
              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<Alipay.SetupFutureUsage>;
            }

            namespace Alipay {
              type SetupFutureUsage = 'none' | 'off_session';
            }

            interface Bancontact {
              /**
               * Preferred language of the Bancontact authorization page that the customer is redirected to.
               */
              preferred_language?: Bancontact.PreferredLanguage;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<
                Bancontact.SetupFutureUsage
              >;
            }

            namespace Bancontact {
              type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';

              type SetupFutureUsage = 'none' | 'off_session';
            }

            interface Card {
              /**
               * Controls when the funds will be captured from the customer's account.
               */
              capture_method?: Card.CaptureMethod;

              /**
               * Indicates that you intend to make future payments with the payment method.
               *
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the order's Customer, if present, after the order's PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Card.SetupFutureUsage;
            }

            namespace Card {
              type CaptureMethod = 'automatic' | 'automatic_async' | 'manual';

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
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: 'none';
            }

            namespace CustomerBalance {
              interface BankTransfer {
                /**
                 * Configuration for the eu_bank_transfer funding type.
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
                 * The list of bank transfer types that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
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

            interface Ideal {
              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<Ideal.SetupFutureUsage>;
            }

            namespace Ideal {
              type SetupFutureUsage = 'none' | 'off_session';
            }

            interface Klarna {
              /**
               * Controls when the funds are captured from the customer's account.
               *
               * If provided, this parameter overrides the behavior of the top-level [capture_method](https://stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
               *
               * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
               */
              capture_method?: Stripe.Emptyable<'manual'>;

              /**
               * Preferred language of the Klarna authorization page that the customer is redirected to
               */
              preferred_locale?: Klarna.PreferredLocale;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: 'none';
            }

            namespace Klarna {
              type PreferredLocale =
                | 'cs-CZ'
                | 'da-DK'
                | 'de-AT'
                | 'de-CH'
                | 'de-DE'
                | 'el-GR'
                | 'en-AT'
                | 'en-AU'
                | 'en-BE'
                | 'en-CA'
                | 'en-CH'
                | 'en-CZ'
                | 'en-DE'
                | 'en-DK'
                | 'en-ES'
                | 'en-FI'
                | 'en-FR'
                | 'en-GB'
                | 'en-GR'
                | 'en-IE'
                | 'en-IT'
                | 'en-NL'
                | 'en-NO'
                | 'en-NZ'
                | 'en-PL'
                | 'en-PT'
                | 'en-RO'
                | 'en-SE'
                | 'en-US'
                | 'es-ES'
                | 'es-US'
                | 'fi-FI'
                | 'fr-BE'
                | 'fr-CA'
                | 'fr-CH'
                | 'fr-FR'
                | 'it-CH'
                | 'it-IT'
                | 'nb-NO'
                | 'nl-BE'
                | 'nl-NL'
                | 'pl-PL'
                | 'pt-PT'
                | 'ro-RO'
                | 'sv-FI'
                | 'sv-SE';
            }

            interface Link {
              /**
               * Controls when the funds are captured from the customer's account.
               *
               * If provided, this parameter overrides the behavior of the top-level [capture_method](https://stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
               *
               * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
               */
              capture_method?: Stripe.Emptyable<'manual'>;

              /**
               * [Deprecated] This is a legacy parameter that no longer has any function.
               * @deprecated
               */
              persistent_token?: string;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<Link.SetupFutureUsage>;
            }

            namespace Link {
              type SetupFutureUsage = 'none' | 'off_session';
            }

            interface Oxxo {
              /**
               * The number of calendar days before an OXXO voucher expires. For example, if you create an OXXO voucher on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
               */
              expires_after_days?: number;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: 'none';
            }

            interface P24 {
              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: 'none';

              /**
               * Confirm that the payer has accepted the P24 terms and conditions.
               */
              tos_shown_and_accepted?: boolean;
            }

            interface Paypal {
              /**
               * Controls when the funds will be captured from the customer's account.
               */
              capture_method?: Stripe.Emptyable<'manual'>;

              /**
               * The line items purchased by the customer.
               */
              line_items?: Array<Paypal.LineItem>;

              /**
               * [Preferred locale](https://stripe.com/docs/payments/paypal/supported-locales) of the PayPal checkout page that the customer is redirected to.
               */
              preferred_locale?: Paypal.PreferredLocale;

              /**
               * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
               */
              reference?: string;

              /**
               * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
               */
              reference_id?: string;

              /**
               * The risk correlation ID for an on-session payment using a saved PayPal payment method.
               */
              risk_correlation_id?: string;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<Paypal.SetupFutureUsage>;

              /**
               * The Stripe connected account IDs of the sellers on the platform for this transaction (optional). Only allowed when [separate charges and transfers](https://stripe.com/docs/connect/separate-charges-and-transfers) are used.
               */
              subsellers?: Array<string>;
            }

            namespace Paypal {
              interface LineItem {
                /**
                 * Type of the line item.
                 */
                category?: LineItem.Category;

                /**
                 * Description of the line item.
                 */
                description?: string;

                /**
                 * Descriptive name of the line item.
                 */
                name: string;

                /**
                 * Quantity of the line item. Must be a positive number.
                 */
                quantity: number;

                /**
                 * Client facing stock keeping unit, article number or similar.
                 */
                sku?: string;

                /**
                 * The Stripe account ID of the connected account that sells the item.
                 */
                sold_by?: string;

                /**
                 * The tax information for the line item.
                 */
                tax?: LineItem.Tax;

                /**
                 * Price for a single unit of the line item in minor units. Cannot be a negative number.
                 */
                unit_amount: number;
              }

              namespace LineItem {
                type Category = 'digital_goods' | 'donation' | 'physical_goods';

                interface Tax {
                  /**
                   * The tax for a single unit of the line item in minor units. Cannot be a negative number.
                   */
                  amount: number;

                  /**
                   * The tax behavior for the line item.
                   */
                  behavior: Tax.Behavior;
                }

                namespace Tax {
                  type Behavior = 'exclusive' | 'inclusive';
                }
              }

              type PreferredLocale =
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

              type SetupFutureUsage = 'none' | 'off_session';
            }

            interface SepaDebit {
              /**
               * Additional fields for Mandate creation
               */
              mandate_options?: SepaDebit.MandateOptions;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<SepaDebit.SetupFutureUsage>;
            }

            namespace SepaDebit {
              interface MandateOptions {}

              type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
            }

            interface Sofort {
              /**
               * Language shown to the payer on redirect.
               */
              preferred_language?: Stripe.Emptyable<Sofort.PreferredLanguage>;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<Sofort.SetupFutureUsage>;
            }

            namespace Sofort {
              type PreferredLanguage =
                | 'de'
                | 'en'
                | 'es'
                | 'fr'
                | 'it'
                | 'nl'
                | 'pl';

              type SetupFutureUsage = 'none' | 'off_session';
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
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: 'none';
            }

            namespace WechatPay {
              type Client = 'android' | 'ios' | 'web';
            }
          }

          type PaymentMethodType =
            | 'acss_debit'
            | 'afterpay_clearpay'
            | 'alipay'
            | 'au_becs_debit'
            | 'bacs_debit'
            | 'bancontact'
            | 'card'
            | 'customer_balance'
            | 'eps'
            | 'fpx'
            | 'giropay'
            | 'grabpay'
            | 'ideal'
            | 'klarna'
            | 'link'
            | 'oxxo'
            | 'p24'
            | 'paypal'
            | 'sepa_debit'
            | 'sofort'
            | 'wechat_pay';

          interface TransferData {
            /**
             * The amount that will be transferred automatically when the order is paid. If no amount is set, the full amount is transferred. There cannot be any line items with recurring prices when using this field.
             */
            amount?: number;

            /**
             * ID of the Connected account receiving the transfer.
             */
            destination: string;
          }
        }
      }

      interface ShippingCost {
        /**
         * The ID of the shipping rate to use for this order.
         */
        shipping_rate?: string;

        /**
         * Parameters to create a new ad-hoc shipping rate for this order.
         */
        shipping_rate_data?: ShippingCost.ShippingRateData;
      }

      namespace ShippingCost {
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
           * The type of calculation to use on the shipping rate.
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

      interface ShippingDetails {
        /**
         * The shipping address for the order.
         */
        address: Stripe.AddressParam;

        /**
         * The name of the recipient of the order.
         */
        name: string;

        /**
         * The phone number (including extension) for the recipient of the order.
         */
        phone?: Stripe.Emptyable<string>;
      }

      interface TaxDetails {
        /**
         * The purchaser's tax exemption status. One of `none`, `exempt`, or `reverse`.
         */
        tax_exempt?: Stripe.Emptyable<TaxDetails.TaxExempt>;

        /**
         * The purchaser's tax IDs to be used for this order.
         */
        tax_ids?: Array<TaxDetails.TaxId>;
      }

      namespace TaxDetails {
        type TaxExempt = 'exempt' | 'none' | 'reverse';

        interface TaxId {
          /**
           * Type of the tax ID, one of `ad_nrt`, `ae_trn`, `ar_cuit`, `au_abn`, `au_arn`, `bg_uic`, `bh_vat`, `bo_tin`, `br_cnpj`, `br_cpf`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `ch_uid`, `ch_vat`, `cl_tin`, `cn_tin`, `co_nit`, `cr_tin`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `hk_br`, `hr_oib`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kr_brn`, `kz_bin`, `li_uid`, `li_vat`, `ma_vat`, `md_vat`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sv_nit`, `th_vat`, `tr_tin`, `tw_vat`, `tz_vat`, `ua_vat`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, or `za_vat`
           */
          type: TaxId.Type;

          /**
           * Value of the tax ID.
           */
          value: string;
        }

        namespace TaxId {
          type Type =
            | 'ad_nrt'
            | 'ae_trn'
            | 'ar_cuit'
            | 'au_abn'
            | 'au_arn'
            | 'bg_uic'
            | 'bh_vat'
            | 'bo_tin'
            | 'br_cnpj'
            | 'br_cpf'
            | 'by_tin'
            | 'ca_bn'
            | 'ca_gst_hst'
            | 'ca_pst_bc'
            | 'ca_pst_mb'
            | 'ca_pst_sk'
            | 'ca_qst'
            | 'ch_uid'
            | 'ch_vat'
            | 'cl_tin'
            | 'cn_tin'
            | 'co_nit'
            | 'cr_tin'
            | 'de_stn'
            | 'do_rcn'
            | 'ec_ruc'
            | 'eg_tin'
            | 'es_cif'
            | 'eu_oss_vat'
            | 'eu_vat'
            | 'gb_vat'
            | 'ge_vat'
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
            | 'kr_brn'
            | 'kz_bin'
            | 'li_uid'
            | 'li_vat'
            | 'ma_vat'
            | 'md_vat'
            | 'mx_rfc'
            | 'my_frp'
            | 'my_itn'
            | 'my_sst'
            | 'ng_tin'
            | 'no_vat'
            | 'no_voec'
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
            | 'sv_nit'
            | 'th_vat'
            | 'tr_tin'
            | 'tw_vat'
            | 'tz_vat'
            | 'ua_vat'
            | 'us_ein'
            | 'uy_ruc'
            | 'uz_tin'
            | 'uz_vat'
            | 've_rif'
            | 'vn_tin'
            | 'za_vat';
        }
      }
    }

    interface OrderRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface OrderUpdateParams {
      /**
       * Settings for automatic tax calculation for this order.
       */
      automatic_tax?: OrderUpdateParams.AutomaticTax;

      /**
       * Billing details for the customer. If a customer is provided, this will be automatically populated with values from that customer if override values are not provided.
       */
      billing_details?: Stripe.Emptyable<OrderUpdateParams.BillingDetails>;

      /**
       * The credits to apply to the order, only `gift_card` currently supported. Pass the empty string `""` to unset this field.
       */
      credits?: Stripe.Emptyable<Array<OrderUpdateParams.Credit>>;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: string;

      /**
       * The customer associated with this order.
       */
      customer?: string;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description?: Stripe.Emptyable<string>;

      /**
       * The coupons, promotion codes, and/or discounts to apply to the order. Pass the empty string `""` to unset this field.
       */
      discounts?: Stripe.Emptyable<Array<OrderUpdateParams.Discount>>;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The IP address of the purchaser for this order.
       */
      ip_address?: string;

      /**
       * A list of line items the customer is ordering. Each line item includes information about the product, the quantity, and the resulting cost.
       */
      line_items?: Array<OrderUpdateParams.LineItem>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Payment information associated with the order, including payment settings.
       */
      payment?: OrderUpdateParams.Payment;

      /**
       * Settings for the customer cost of shipping for this order.
       */
      shipping_cost?: Stripe.Emptyable<OrderUpdateParams.ShippingCost>;

      /**
       * Shipping details for the order.
       */
      shipping_details?: Stripe.Emptyable<OrderUpdateParams.ShippingDetails>;

      /**
       * Additional tax details about the purchaser to be used for this order.
       */
      tax_details?: OrderUpdateParams.TaxDetails;
    }

    namespace OrderUpdateParams {
      interface AutomaticTax {
        /**
         * Enable automatic tax calculation which will automatically compute tax rates on this order.
         */
        enabled: boolean;
      }

      interface BillingDetails {
        /**
         * The billing address provided by the customer.
         */
        address?: Stripe.AddressParam;

        /**
         * The billing email provided by the customer.
         */
        email?: string;

        /**
         * The billing name provided by the customer.
         */
        name?: string;

        /**
         * The billing phone number provided by the customer.
         */
        phone?: string;
      }

      interface Credit {
        /**
         * The gift card to apply to the order.
         */
        gift_card?: string;

        /**
         * The type of credit to apply to the order, only `gift_card` currently supported.
         */
        type: 'gift_card';
      }

      interface Discount {
        /**
         * ID of the coupon to create a new discount for.
         */
        coupon?: string;

        /**
         * ID of an existing discount on the object (or one of its ancestors) to reuse.
         */
        discount?: string;

        /**
         * ID of the promotion code to create a new discount for.
         */
        promotion_code?: string;
      }

      interface LineItem {
        /**
         * The description for the line item. Will default to the name of the associated product.
         */
        description?: string;

        /**
         * The discounts applied to this line item.
         */
        discounts?: Stripe.Emptyable<Array<LineItem.Discount>>;

        /**
         * The ID of an existing line item on the order.
         */
        id?: string;

        /**
         * The ID of a [Price](https://stripe.com/docs/api/prices) to add to the Order.
         *
         * The `price` parameter is an alternative to using the `product` parameter. If each of your products are sold at a single price, you can set `Product.default_price` and then pass the `product` parameter when creating a line item. If your products are sold at several possible prices, use the `price` parameter to explicitly specify which one to use.
         */
        price?: string;

        /**
         * Data used to generate a new Price object inline.
         *
         * The `price_data` parameter is an alternative to using the `product` or `price` parameters. If you create products upfront and configure a `Product.default_price`, pass the `product` parameter when creating a line item. If you prefer not to define products upfront, or if you charge variable prices, pass the `price_data` parameter to describe the price for this line item.
         *
         * Each time you pass `price_data` we create a Price for the product. This Price is hidden in both the Dashboard and API lists and cannot be reused.
         */
        price_data?: LineItem.PriceData;

        /**
         * The ID of a [Product](https://stripe.com/docs/api/products) to add to the Order.
         *
         * The product must have a `default_price` specified. Otherwise, specify the price by passing the `price` or `price_data` parameter.
         */
        product?: string;

        /**
         * Defines a Product inline and adds it to the Order.
         *
         * `product_data` is an alternative to the `product` parameter. If you created a Product upfront, use the `product` parameter to refer to the existing Product. But if you prefer not to create Products upfront, pass the `product_data` parameter to define a Product inline as part of configuring the Order.
         *
         * `product_data` automatically creates a Product, just as if you had manually created the Product. If a Product with the same ID already exists, then `product_data` re-uses it to avoid duplicates.
         */
        product_data?: LineItem.ProductData;

        /**
         * The quantity of the line item.
         */
        quantity?: number;

        /**
         * The tax rates applied to this line item.
         */
        tax_rates?: Stripe.Emptyable<Array<string>>;
      }

      namespace LineItem {
        interface Discount {
          /**
           * ID of the coupon to create a new discount for.
           */
          coupon?: string;

          /**
           * ID of an existing discount on the object (or one of its ancestors) to reuse.
           */
          discount?: string;
        }

        interface PriceData {
          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency?: string;

          /**
           * ID of the product this price belongs to.
           *
           * Use this to implement a variable-pricing model in your integration. This is required if `product_data` is not specified.
           */
          product?: string;

          /**
           * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
           */
          tax_behavior?: PriceData.TaxBehavior;

          /**
           * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
           */
          unit_amount?: number;

          /**
           * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
           */
          unit_amount_decimal?: string;
        }

        namespace PriceData {
          type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }

        interface ProductData {
          /**
           * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
           */
          description?: Stripe.Emptyable<string>;

          /**
           * A unique identifier for this product.
           *
           * `product_data` automatically creates a Product with this ID. If a Product with the same ID already exists, then `product_data` re-uses it to avoid duplicates. If any of the fields in the existing Product are different from the values in `product_data`, `product_data` updates the existing Product with the new information. So set `product_data[id]` to the same string every time you sell the same product, but don't re-use the same string for different products.
           */
          id: string;

          /**
           * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
           */
          images?: Stripe.Emptyable<Array<string>>;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
           */
          metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

          /**
           * The product's name, meant to be displayable to the customer.
           */
          name: string;

          /**
           * The dimensions of this product for shipping purposes.
           */
          package_dimensions?: Stripe.Emptyable<ProductData.PackageDimensions>;

          /**
           * Whether this product is shipped (i.e., physical goods).
           */
          shippable?: boolean;

          /**
           * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
           */
          tax_code?: Stripe.Emptyable<string>;

          /**
           * A URL of a publicly-accessible webpage for this product.
           */
          url?: Stripe.Emptyable<string>;
        }

        namespace ProductData {
          interface PackageDimensions {
            /**
             * Height, in inches. Maximum precision is 2 decimal places.
             */
            height: number;

            /**
             * Length, in inches. Maximum precision is 2 decimal places.
             */
            length: number;

            /**
             * Weight, in ounces. Maximum precision is 2 decimal places.
             */
            weight: number;

            /**
             * Width, in inches. Maximum precision is 2 decimal places.
             */
            width: number;
          }
        }
      }

      interface Payment {
        /**
         * Settings describing how the order should configure generated PaymentIntents.
         */
        settings: Payment.Settings;
      }

      namespace Payment {
        interface Settings {
          /**
           * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account.
           */
          application_fee_amount?: Stripe.Emptyable<number>;

          /**
           * PaymentMethod-specific configuration to provide to the order's PaymentIntent.
           */
          payment_method_options?: Settings.PaymentMethodOptions;

          /**
           * The list of [payment method types](https://stripe.com/docs/payments/payment-methods/overview) to provide to the order's PaymentIntent. Do not include this attribute if you prefer to manage your payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
           */
          payment_method_types?: Array<Settings.PaymentMethodType>;

          /**
           * The URL to redirect the customer to after they authenticate their payment.
           */
          return_url?: Stripe.Emptyable<string>;

          /**
           * For non-card charges, you can use this value as the complete description that appears on your customers' statements. Must contain at least one letter, maximum 22 characters.
           */
          statement_descriptor?: string;

          /**
           * Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
           */
          statement_descriptor_suffix?: string;

          /**
           * Provides configuration for completing a transfer for the order after it is paid.
           */
          transfer_data?: Stripe.Emptyable<Settings.TransferData>;
        }

        namespace Settings {
          interface PaymentMethodOptions {
            /**
             * If paying by `acss_debit`, this sub-hash contains details about the ACSS Debit payment method options to pass to the order's PaymentIntent.
             */
            acss_debit?: Stripe.Emptyable<PaymentMethodOptions.AcssDebit>;

            /**
             * If paying by `afterpay_clearpay`, this sub-hash contains details about the AfterpayClearpay payment method options to pass to the order's PaymentIntent.
             */
            afterpay_clearpay?: Stripe.Emptyable<
              PaymentMethodOptions.AfterpayClearpay
            >;

            /**
             * If paying by `alipay`, this sub-hash contains details about the Alipay payment method options to pass to the order's PaymentIntent.
             */
            alipay?: Stripe.Emptyable<PaymentMethodOptions.Alipay>;

            /**
             * If paying by `bancontact`, this sub-hash contains details about the Bancontact payment method options to pass to the order's PaymentIntent.
             */
            bancontact?: Stripe.Emptyable<PaymentMethodOptions.Bancontact>;

            /**
             * If paying by `card`, this sub-hash contains details about the Card payment method options to pass to the order's PaymentIntent.
             */
            card?: Stripe.Emptyable<PaymentMethodOptions.Card>;

            /**
             * If paying by `customer_balance`, this sub-hash contains details about the Customer Balance payment method options to pass to the order's PaymentIntent.
             */
            customer_balance?: Stripe.Emptyable<
              PaymentMethodOptions.CustomerBalance
            >;

            /**
             * If paying by `ideal`, this sub-hash contains details about the iDEAL payment method options to pass to the order's PaymentIntent.
             */
            ideal?: Stripe.Emptyable<PaymentMethodOptions.Ideal>;

            /**
             * If paying by `klarna`, this sub-hash contains details about the Klarna payment method options to pass to the order's PaymentIntent.
             */
            klarna?: Stripe.Emptyable<PaymentMethodOptions.Klarna>;

            /**
             * If paying by `link`, this sub-hash contains details about the Link payment method options to pass to the order's PaymentIntent.
             */
            link?: Stripe.Emptyable<PaymentMethodOptions.Link>;

            /**
             * If paying by `oxxo`, this sub-hash contains details about the OXXO payment method options to pass to the order's PaymentIntent.
             */
            oxxo?: Stripe.Emptyable<PaymentMethodOptions.Oxxo>;

            /**
             * If paying by `p24`, this sub-hash contains details about the P24 payment method options to pass to the order's PaymentIntent.
             */
            p24?: Stripe.Emptyable<PaymentMethodOptions.P24>;

            /**
             * If paying by `paypal`, this sub-hash contains details about the PayPal payment method options to pass to the order's PaymentIntent.
             */
            paypal?: Stripe.Emptyable<PaymentMethodOptions.Paypal>;

            /**
             * If paying by `sepa_debit`, this sub-hash contains details about the SEPA Debit payment method options to pass to the order's PaymentIntent.
             */
            sepa_debit?: Stripe.Emptyable<PaymentMethodOptions.SepaDebit>;

            /**
             * If paying by `sofort`, this sub-hash contains details about the Sofort payment method options to pass to the order's PaymentIntent.
             */
            sofort?: Stripe.Emptyable<PaymentMethodOptions.Sofort>;

            /**
             * If paying by `wechat_pay`, this sub-hash contains details about the WeChat Pay payment method options to pass to the order's PaymentIntent.
             */
            wechat_pay?: Stripe.Emptyable<PaymentMethodOptions.WechatPay>;
          }

          namespace PaymentMethodOptions {
            interface AcssDebit {
              /**
               * Additional fields for Mandate creation
               */
              mandate_options?: AcssDebit.MandateOptions;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<AcssDebit.SetupFutureUsage>;

              /**
               * Bank account verification method.
               */
              verification_method?: AcssDebit.VerificationMethod;
            }

            namespace AcssDebit {
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

              type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

              type VerificationMethod =
                | 'automatic'
                | 'instant'
                | 'microdeposits';
            }

            interface AfterpayClearpay {
              /**
               * Controls when the funds are captured from the customer's account.
               *
               * If provided, this parameter overrides the behavior of the top-level [capture_method](https://stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
               *
               * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
               */
              capture_method?: AfterpayClearpay.CaptureMethod;

              /**
               * An internal identifier or reference this payment corresponds to. The identifier is limited to 128 characters and may contain only letters, digits, underscores, backslashes and dashes.
               */
              reference?: string;

              /**
               * Indicates that you intend to make future payments with the payment method.
               *
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the order's Customer, if present, after the order's PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: 'none';
            }

            namespace AfterpayClearpay {
              type CaptureMethod = 'automatic' | 'automatic_async' | 'manual';
            }

            interface Alipay {
              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<Alipay.SetupFutureUsage>;
            }

            namespace Alipay {
              type SetupFutureUsage = 'none' | 'off_session';
            }

            interface Bancontact {
              /**
               * Preferred language of the Bancontact authorization page that the customer is redirected to.
               */
              preferred_language?: Bancontact.PreferredLanguage;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<
                Bancontact.SetupFutureUsage
              >;
            }

            namespace Bancontact {
              type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';

              type SetupFutureUsage = 'none' | 'off_session';
            }

            interface Card {
              /**
               * Controls when the funds will be captured from the customer's account.
               */
              capture_method?: Card.CaptureMethod;

              /**
               * Indicates that you intend to make future payments with the payment method.
               *
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the order's Customer, if present, after the order's PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Card.SetupFutureUsage;
            }

            namespace Card {
              type CaptureMethod = 'automatic' | 'automatic_async' | 'manual';

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
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: 'none';
            }

            namespace CustomerBalance {
              interface BankTransfer {
                /**
                 * Configuration for the eu_bank_transfer funding type.
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
                 * The list of bank transfer types that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
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

            interface Ideal {
              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<Ideal.SetupFutureUsage>;
            }

            namespace Ideal {
              type SetupFutureUsage = 'none' | 'off_session';
            }

            interface Klarna {
              /**
               * Controls when the funds are captured from the customer's account.
               *
               * If provided, this parameter overrides the behavior of the top-level [capture_method](https://stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
               *
               * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
               */
              capture_method?: Stripe.Emptyable<'manual'>;

              /**
               * Preferred language of the Klarna authorization page that the customer is redirected to
               */
              preferred_locale?: Klarna.PreferredLocale;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: 'none';
            }

            namespace Klarna {
              type PreferredLocale =
                | 'cs-CZ'
                | 'da-DK'
                | 'de-AT'
                | 'de-CH'
                | 'de-DE'
                | 'el-GR'
                | 'en-AT'
                | 'en-AU'
                | 'en-BE'
                | 'en-CA'
                | 'en-CH'
                | 'en-CZ'
                | 'en-DE'
                | 'en-DK'
                | 'en-ES'
                | 'en-FI'
                | 'en-FR'
                | 'en-GB'
                | 'en-GR'
                | 'en-IE'
                | 'en-IT'
                | 'en-NL'
                | 'en-NO'
                | 'en-NZ'
                | 'en-PL'
                | 'en-PT'
                | 'en-RO'
                | 'en-SE'
                | 'en-US'
                | 'es-ES'
                | 'es-US'
                | 'fi-FI'
                | 'fr-BE'
                | 'fr-CA'
                | 'fr-CH'
                | 'fr-FR'
                | 'it-CH'
                | 'it-IT'
                | 'nb-NO'
                | 'nl-BE'
                | 'nl-NL'
                | 'pl-PL'
                | 'pt-PT'
                | 'ro-RO'
                | 'sv-FI'
                | 'sv-SE';
            }

            interface Link {
              /**
               * Controls when the funds are captured from the customer's account.
               *
               * If provided, this parameter overrides the behavior of the top-level [capture_method](https://stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
               *
               * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
               */
              capture_method?: Stripe.Emptyable<'manual'>;

              /**
               * [Deprecated] This is a legacy parameter that no longer has any function.
               * @deprecated
               */
              persistent_token?: string;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<Link.SetupFutureUsage>;
            }

            namespace Link {
              type SetupFutureUsage = 'none' | 'off_session';
            }

            interface Oxxo {
              /**
               * The number of calendar days before an OXXO voucher expires. For example, if you create an OXXO voucher on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
               */
              expires_after_days?: number;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: 'none';
            }

            interface P24 {
              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: 'none';

              /**
               * Confirm that the payer has accepted the P24 terms and conditions.
               */
              tos_shown_and_accepted?: boolean;
            }

            interface Paypal {
              /**
               * Controls when the funds will be captured from the customer's account.
               */
              capture_method?: Stripe.Emptyable<'manual'>;

              /**
               * The line items purchased by the customer.
               */
              line_items?: Array<Paypal.LineItem>;

              /**
               * [Preferred locale](https://stripe.com/docs/payments/paypal/supported-locales) of the PayPal checkout page that the customer is redirected to.
               */
              preferred_locale?: Paypal.PreferredLocale;

              /**
               * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
               */
              reference?: string;

              /**
               * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
               */
              reference_id?: string;

              /**
               * The risk correlation ID for an on-session payment using a saved PayPal payment method.
               */
              risk_correlation_id?: string;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<Paypal.SetupFutureUsage>;

              /**
               * The Stripe connected account IDs of the sellers on the platform for this transaction (optional). Only allowed when [separate charges and transfers](https://stripe.com/docs/connect/separate-charges-and-transfers) are used.
               */
              subsellers?: Array<string>;
            }

            namespace Paypal {
              interface LineItem {
                /**
                 * Type of the line item.
                 */
                category?: LineItem.Category;

                /**
                 * Description of the line item.
                 */
                description?: string;

                /**
                 * Descriptive name of the line item.
                 */
                name: string;

                /**
                 * Quantity of the line item. Must be a positive number.
                 */
                quantity: number;

                /**
                 * Client facing stock keeping unit, article number or similar.
                 */
                sku?: string;

                /**
                 * The Stripe account ID of the connected account that sells the item.
                 */
                sold_by?: string;

                /**
                 * The tax information for the line item.
                 */
                tax?: LineItem.Tax;

                /**
                 * Price for a single unit of the line item in minor units. Cannot be a negative number.
                 */
                unit_amount: number;
              }

              namespace LineItem {
                type Category = 'digital_goods' | 'donation' | 'physical_goods';

                interface Tax {
                  /**
                   * The tax for a single unit of the line item in minor units. Cannot be a negative number.
                   */
                  amount: number;

                  /**
                   * The tax behavior for the line item.
                   */
                  behavior: Tax.Behavior;
                }

                namespace Tax {
                  type Behavior = 'exclusive' | 'inclusive';
                }
              }

              type PreferredLocale =
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

              type SetupFutureUsage = 'none' | 'off_session';
            }

            interface SepaDebit {
              /**
               * Additional fields for Mandate creation
               */
              mandate_options?: SepaDebit.MandateOptions;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<SepaDebit.SetupFutureUsage>;
            }

            namespace SepaDebit {
              interface MandateOptions {}

              type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
            }

            interface Sofort {
              /**
               * Language shown to the payer on redirect.
               */
              preferred_language?: Stripe.Emptyable<Sofort.PreferredLanguage>;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<Sofort.SetupFutureUsage>;
            }

            namespace Sofort {
              type PreferredLanguage =
                | 'de'
                | 'en'
                | 'es'
                | 'fr'
                | 'it'
                | 'nl'
                | 'pl';

              type SetupFutureUsage = 'none' | 'off_session';
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
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               *
               * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: 'none';
            }

            namespace WechatPay {
              type Client = 'android' | 'ios' | 'web';
            }
          }

          type PaymentMethodType =
            | 'acss_debit'
            | 'afterpay_clearpay'
            | 'alipay'
            | 'au_becs_debit'
            | 'bacs_debit'
            | 'bancontact'
            | 'card'
            | 'customer_balance'
            | 'eps'
            | 'fpx'
            | 'giropay'
            | 'grabpay'
            | 'ideal'
            | 'klarna'
            | 'link'
            | 'oxxo'
            | 'p24'
            | 'paypal'
            | 'sepa_debit'
            | 'sofort'
            | 'wechat_pay';

          interface TransferData {
            /**
             * The amount that will be transferred automatically when the order is paid. If no amount is set, the full amount is transferred. There cannot be any line items with recurring prices when using this field.
             */
            amount?: number;

            /**
             * ID of the Connected account receiving the transfer.
             */
            destination: string;
          }
        }
      }

      interface ShippingCost {
        /**
         * The ID of the shipping rate to use for this order.
         */
        shipping_rate?: string;

        /**
         * Parameters to create a new ad-hoc shipping rate for this order.
         */
        shipping_rate_data?: ShippingCost.ShippingRateData;
      }

      namespace ShippingCost {
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
           * The type of calculation to use on the shipping rate.
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

      interface ShippingDetails {
        /**
         * The shipping address for the order.
         */
        address: Stripe.AddressParam;

        /**
         * The name of the recipient of the order.
         */
        name: string;

        /**
         * The phone number (including extension) for the recipient of the order.
         */
        phone?: Stripe.Emptyable<string>;
      }

      interface TaxDetails {
        /**
         * The purchaser's tax exemption status. One of `none`, `exempt`, or `reverse`.
         */
        tax_exempt?: Stripe.Emptyable<TaxDetails.TaxExempt>;

        /**
         * The purchaser's tax IDs to be used for this order.
         */
        tax_ids?: Array<TaxDetails.TaxId>;
      }

      namespace TaxDetails {
        type TaxExempt = 'exempt' | 'none' | 'reverse';

        interface TaxId {
          /**
           * Type of the tax ID, one of `ad_nrt`, `ae_trn`, `ar_cuit`, `au_abn`, `au_arn`, `bg_uic`, `bh_vat`, `bo_tin`, `br_cnpj`, `br_cpf`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `ch_uid`, `ch_vat`, `cl_tin`, `cn_tin`, `co_nit`, `cr_tin`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `hk_br`, `hr_oib`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kr_brn`, `kz_bin`, `li_uid`, `li_vat`, `ma_vat`, `md_vat`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sv_nit`, `th_vat`, `tr_tin`, `tw_vat`, `tz_vat`, `ua_vat`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, or `za_vat`
           */
          type: TaxId.Type;

          /**
           * Value of the tax ID.
           */
          value: string;
        }

        namespace TaxId {
          type Type =
            | 'ad_nrt'
            | 'ae_trn'
            | 'ar_cuit'
            | 'au_abn'
            | 'au_arn'
            | 'bg_uic'
            | 'bh_vat'
            | 'bo_tin'
            | 'br_cnpj'
            | 'br_cpf'
            | 'by_tin'
            | 'ca_bn'
            | 'ca_gst_hst'
            | 'ca_pst_bc'
            | 'ca_pst_mb'
            | 'ca_pst_sk'
            | 'ca_qst'
            | 'ch_uid'
            | 'ch_vat'
            | 'cl_tin'
            | 'cn_tin'
            | 'co_nit'
            | 'cr_tin'
            | 'de_stn'
            | 'do_rcn'
            | 'ec_ruc'
            | 'eg_tin'
            | 'es_cif'
            | 'eu_oss_vat'
            | 'eu_vat'
            | 'gb_vat'
            | 'ge_vat'
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
            | 'kr_brn'
            | 'kz_bin'
            | 'li_uid'
            | 'li_vat'
            | 'ma_vat'
            | 'md_vat'
            | 'mx_rfc'
            | 'my_frp'
            | 'my_itn'
            | 'my_sst'
            | 'ng_tin'
            | 'no_vat'
            | 'no_voec'
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
            | 'sv_nit'
            | 'th_vat'
            | 'tr_tin'
            | 'tw_vat'
            | 'tz_vat'
            | 'ua_vat'
            | 'us_ein'
            | 'uy_ruc'
            | 'uz_tin'
            | 'uz_vat'
            | 've_rif'
            | 'vn_tin'
            | 'za_vat';
        }
      }
    }

    interface OrderListParams extends PaginationParams {
      /**
       * Only return orders for the given customer.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface OrderCancelParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface OrderListLineItemsParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface OrderReopenParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface OrderSubmitParams {
      /**
       * `expected_total` should always be set to the order's `amount_total` field. If they don't match, submitting the order will fail. This helps detect race conditions where something else concurrently modifies the order.
       */
      expected_total: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class OrdersResource {
      /**
       * Creates a new open order object.
       */
      create(
        params: OrderCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Order>>;

      /**
       * Retrieves the details of an existing order. Supply the unique order ID from either an order creation request or the order list, and Stripe will return the corresponding order information.
       */
      retrieve(
        id: string,
        params?: OrderRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Order>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Order>>;

      /**
       * Updates the specific order by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       */
      update(
        id: string,
        params?: OrderUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Order>>;

      /**
       * Returns a list of your orders. The orders are returned sorted by creation date, with the most recently created orders appearing first.
       */
      list(
        params?: OrderListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Order>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Order>;

      /**
       * Cancels the order as well as the payment intent if one is attached.
       */
      cancel(
        id: string,
        params?: OrderCancelParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Order>>;
      cancel(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Order>>;

      /**
       * When retrieving an order, there is an includable line_items property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
       */
      listLineItems(
        id: string,
        params?: OrderListLineItemsParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.LineItem>;
      listLineItems(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.LineItem>;

      /**
       * Reopens a submitted order.
       */
      reopen(
        id: string,
        params?: OrderReopenParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Order>>;
      reopen(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Order>>;

      /**
       * Submitting an Order transitions the status to processing and creates a PaymentIntent object so the order can be paid. If the Order has an amount_total of 0, no PaymentIntent object will be created. Once the order is submitted, its contents cannot be changed, unless the [reopen](https://stripe.com/docs/api#reopen_order) method is called.
       */
      submit(
        id: string,
        params: OrderSubmitParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Order>>;
    }
  }
}
