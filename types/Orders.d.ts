// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * An Order describes a purchase being made by a customer, including the
     * products & quantities being purchased, the order status, the payment information,
     * and the billing/shipping details.
     *
     * Related guide: [Orders overview](https://stripe.com/docs/orders)
     */
    interface Order {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'order';

      amount_remaining?: number;

      /**
       * Order cost before any discounts or taxes are applied. A positive integer representing the subtotal of the order in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency).
       */
      amount_subtotal: number;

      /**
       * Total order cost after discounts and taxes are applied. A positive integer representing the cost of the order in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). To submit an order, the total must be either 0 or at least $0.50 USD or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts).
       */
      amount_total: number;

      /**
       * ID of the Connect application that created the Order, if any.
       */
      application: string | Stripe.Application | null;

      automatic_tax?: Order.AutomaticTax;

      /**
       * Customer billing details associated with the order.
       */
      billing_details: Order.BillingDetails | null;

      /**
       * The client secret of this Order. Used for client-side retrieval using a publishable key.
       *
       * The client secret can be used to complete a payment for an Order from your frontend. It should not be stored, logged, embedded in URLs, or exposed to anyone other than the customer. Make sure that you have TLS enabled on any page that includes the client secret.
       *
       * Refer to our docs for [creating and processing an order](https://stripe.com/docs/orders-beta/create-and-process) to learn about how client_secret should be handled.
       */
      client_secret: string | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The credits applied to the Order. At most 10 credits can be applied to an Order.
       */
      credits?: Array<Order.Credit>;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * The customer which this orders belongs to.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description: string | null;

      /**
       * The discounts applied to the order. Use `expand[]=discounts` to expand each discount.
       */
      discounts: Array<string | Stripe.Discount> | null;

      /**
       * A recent IP address of the purchaser used for tax reporting and tax location inference.
       */
      ip_address: string | null;

      /**
       * A list of line items the customer is ordering. Each line item includes information about the product, the quantity, and the resulting cost. There is a maximum of 100 line items.
       */
      line_items?: ApiList<Stripe.LineItem>;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      payment: Order.Payment;

      /**
       * The details of the customer cost of shipping, including the customer chosen ShippingRate.
       */
      shipping_cost: Order.ShippingCost | null;

      /**
       * Customer shipping information associated with the order.
       */
      shipping_details: Order.ShippingDetails | null;

      /**
       * The overall status of the order.
       */
      status: Order.Status;

      tax_details?: Order.TaxDetails;

      total_details: Order.TotalDetails;
    }

    namespace Order {
      interface AutomaticTax {
        /**
         * Whether Stripe automatically computes tax on this Order.
         */
        enabled: boolean;

        /**
         * The status of the most recent automated tax calculation for this Order.
         */
        status: AutomaticTax.Status | null;
      }

      namespace AutomaticTax {
        type Status = 'complete' | 'failed' | 'requires_location_inputs';
      }

      interface BillingDetails {
        /**
         * Billing address for the order.
         */
        address: Stripe.Address | null;

        /**
         * Email address for the order.
         */
        email: string | null;

        /**
         * Full name for the order.
         */
        name: string | null;

        /**
         * Billing phone number for the order (including extension).
         */
        phone: string | null;
      }

      interface Credit {
        /**
         * The amount of this credit to apply to the order.
         */
        amount: number;

        /**
         * Details for a gift card.
         */
        gift_card: Credit.GiftCard | null;

        /**
         * Line items on this order that are ineligible for this credit
         */
        ineligible_line_items: Array<string> | null;

        /**
         * The type of credit to apply to the order, only `gift_card` currently supported.
         */
        type: 'gift_card';
      }

      namespace Credit {
        interface GiftCard {
          /**
           * The token of the gift card applied to the order
           */
          card: string;
        }
      }

      interface Payment {
        /**
         * ID of the payment intent associated with this order. Null when the order is `open`.
         */
        payment_intent: string | Stripe.PaymentIntent | null;

        /**
         * Settings describing how the order should configure generated PaymentIntents.
         */
        settings: Payment.Settings | null;

        /**
         * The status of the underlying payment associated with this order, if any. Null when the order is `open`.
         */
        status: Payment.Status | null;
      }

      namespace Payment {
        interface Settings {
          /**
           * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account.
           */
          application_fee_amount: number | null;

          /**
           * Indicates whether order has been opted into using [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) to manage payment method types.
           */
          automatic_payment_methods: Settings.AutomaticPaymentMethods | null;

          /**
           * PaymentMethod-specific configuration to provide to the order's PaymentIntent.
           */
          payment_method_options: Settings.PaymentMethodOptions | null;

          /**
           * The list of [payment method types](https://stripe.com/docs/payments/payment-methods/overview) to provide to the order's PaymentIntent. Do not include this attribute if you prefer to manage your payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
           */
          payment_method_types: Array<Settings.PaymentMethodType> | null;

          /**
           * The URL to redirect the customer to after they authenticate their payment.
           */
          return_url: string | null;

          /**
           * For non-card charges, you can use this value as the complete description that appears on your customers' statements. Must contain at least one letter, maximum 22 characters.
           */
          statement_descriptor: string | null;

          /**
           * Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
           */
          statement_descriptor_suffix: string | null;

          /**
           * Provides configuration for completing a transfer for the order after it is paid.
           */
          transfer_data: Settings.TransferData | null;
        }

        namespace Settings {
          interface AutomaticPaymentMethods {
            /**
             * Whether this Order has been opted into managing payment method types via the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
             */
            enabled: boolean;
          }

          interface PaymentMethodOptions {
            acss_debit?: PaymentMethodOptions.AcssDebit;

            afterpay_clearpay?: PaymentMethodOptions.AfterpayClearpay;

            alipay?: PaymentMethodOptions.Alipay;

            bancontact?: PaymentMethodOptions.Bancontact;

            card?: PaymentMethodOptions.Card;

            customer_balance?: PaymentMethodOptions.CustomerBalance;

            ideal?: PaymentMethodOptions.Ideal;

            klarna?: PaymentMethodOptions.Klarna;

            link?: PaymentMethodOptions.Link;

            oxxo?: PaymentMethodOptions.Oxxo;

            p24?: PaymentMethodOptions.P24;

            paypal?: PaymentMethodOptions.Paypal;

            sepa_debit?: PaymentMethodOptions.SepaDebit;

            sofort?: PaymentMethodOptions.Sofort;

            wechat_pay?: PaymentMethodOptions.WechatPay;
          }

          namespace PaymentMethodOptions {
            interface AcssDebit {
              mandate_options?: AcssDebit.MandateOptions;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               */
              setup_future_usage?: AcssDebit.SetupFutureUsage;

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
               * Controls when the funds will be captured from the customer's account.
               */
              capture_method?: AfterpayClearpay.CaptureMethod;

              /**
               * Order identifier shown to the user in Afterpay's online portal. We recommend using a value that helps you answer any questions a customer might have about the payment. The identifier is limited to 128 characters and may contain only letters, digits, underscores, backslashes and dashes.
               */
              reference: string | null;

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
               */
              setup_future_usage?: Alipay.SetupFutureUsage;
            }

            namespace Alipay {
              type SetupFutureUsage = 'none' | 'off_session';
            }

            interface Bancontact {
              /**
               * Preferred language of the Bancontact authorization page that the customer is redirected to.
               */
              preferred_language: Bancontact.PreferredLanguage;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               */
              setup_future_usage?: Bancontact.SetupFutureUsage;
            }

            namespace Bancontact {
              type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';

              type SetupFutureUsage = 'none' | 'off_session';
            }

            interface Card {
              /**
               * Controls when the funds will be captured from the customer's account.
               */
              capture_method: Card.CaptureMethod;

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
              bank_transfer?: CustomerBalance.BankTransfer;

              /**
               * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
               */
              funding_type: 'bank_transfer' | null;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
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
                   * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
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

            interface Ideal {
              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               */
              setup_future_usage?: Ideal.SetupFutureUsage;
            }

            namespace Ideal {
              type SetupFutureUsage = 'none' | 'off_session';
            }

            interface Klarna {
              /**
               * Controls when the funds will be captured from the customer's account.
               */
              capture_method?: 'manual';

              /**
               * Preferred locale of the Klarna checkout page that the customer is redirected to.
               */
              preferred_locale: string | null;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               */
              setup_future_usage?: 'none';
            }

            interface Link {
              /**
               * Controls when the funds will be captured from the customer's account.
               */
              capture_method?: 'manual';

              /**
               * [Deprecated] This is a legacy parameter that no longer has any function.
               * @deprecated
               */
              persistent_token: string | null;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               */
              setup_future_usage?: Link.SetupFutureUsage;
            }

            namespace Link {
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
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
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
               */
              setup_future_usage?: 'none';
            }

            interface Paypal {
              /**
               * Controls when the funds will be captured from the customer's account.
               */
              capture_method?: 'manual';

              /**
               * The line items purchased by the customer.
               */
              line_items?: Array<Paypal.LineItem>;

              /**
               * Preferred locale of the PayPal checkout page that the customer is redirected to.
               */
              preferred_locale: string | null;

              /**
               * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
               */
              reference: string | null;

              /**
               * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
               */
              reference_id?: string | null;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               */
              setup_future_usage?: Paypal.SetupFutureUsage;

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
                 * Quantity of the line item. Cannot be a negative number.
                 */
                quantity: number;

                /**
                 * Client facing stock keeping unit, article number or similar.
                 */
                sku?: string;

                /**
                 * The Stripe account ID of the connected account that sells the item. This is only needed when using [Separate Charges and Transfers](https://docs.stripe.com/connect/separate-charges-and-transfers).
                 */
                sold_by?: string;

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

              type SetupFutureUsage = 'none' | 'off_session';
            }

            interface SepaDebit {
              mandate_options?: SepaDebit.MandateOptions;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               */
              setup_future_usage?: SepaDebit.SetupFutureUsage;
            }

            namespace SepaDebit {
              interface MandateOptions {}

              type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
            }

            interface Sofort {
              /**
               * Preferred language of the SOFORT authorization page that the customer is redirected to.
               */
              preferred_language: Sofort.PreferredLanguage | null;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
               */
              setup_future_usage?: Sofort.SetupFutureUsage;
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
              app_id: string | null;

              /**
               * The client type that the end customer will pay from
               */
              client: WechatPay.Client | null;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
               *
               * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
               *
               * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://stripe.com/strong-customer-authentication).
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
            amount: number | null;

            /**
             * ID of the Connected account receiving the transfer.
             */
            destination: string | Stripe.Account;
          }
        }

        type Status =
          | 'canceled'
          | 'complete'
          | 'not_required'
          | 'processing'
          | 'requires_action'
          | 'requires_capture'
          | 'requires_confirmation'
          | 'requires_payment_method';
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
           * Tax rates can be applied to [invoices](https://stripe.com/docs/billing/invoices/tax-rates), [subscriptions](https://stripe.com/docs/billing/subscriptions/taxes) and [Checkout Sessions](https://stripe.com/docs/payments/checkout/set-up-a-subscription#tax-rates) to collect tax.
           *
           * Related guide: [Tax rates](https://stripe.com/docs/billing/taxes/tax-rates)
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

      interface ShippingDetails {
        /**
         * Recipient shipping address. Required if the order includes products that are shippable.
         */
        address: Stripe.Address | null;

        /**
         * Recipient name.
         */
        name: string | null;

        /**
         * Recipient phone (including extension).
         */
        phone: string | null;
      }

      type Status =
        | 'canceled'
        | 'complete'
        | 'open'
        | 'processing'
        | 'submitted';

      interface TaxDetails {
        /**
         * Describes the purchaser's tax exemption status. One of `none`, `exempt`, or `reverse`.
         */
        tax_exempt: TaxDetails.TaxExempt;

        /**
         * The purchaser's tax IDs to be used in calculation of tax for this Order.
         */
        tax_ids: Array<TaxDetails.TaxId>;
      }

      namespace TaxDetails {
        type TaxExempt = 'exempt' | 'none' | 'reverse';

        interface TaxId {
          /**
           * The type of the tax ID, one of `ad_nrt`, `ar_cuit`, `eu_vat`, `bo_tin`, `br_cnpj`, `br_cpf`, `cn_tin`, `co_nit`, `cr_tin`, `do_rcn`, `ec_ruc`, `eu_oss_vat`, `hr_oib`, `pe_ruc`, `ro_tin`, `rs_pib`, `sv_nit`, `uy_ruc`, `ve_rif`, `vn_tin`, `gb_vat`, `nz_gst`, `au_abn`, `au_arn`, `in_gst`, `no_vat`, `no_voec`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `li_uid`, `li_vat`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, `il_vat`, `ge_vat`, `ua_vat`, `is_vat`, `bg_uic`, `hu_tin`, `si_tin`, `ke_pin`, `tr_tin`, `eg_tin`, `ph_tin`, `bh_vat`, `kz_bin`, `ng_tin`, `om_vat`, `de_stn`, `ch_uid`, `tz_vat`, `uz_vat`, `uz_tin`, `md_vat`, `ma_vat`, `by_tin`, or `unknown`
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
            | 'unknown'
            | 'us_ein'
            | 'uy_ruc'
            | 'uz_tin'
            | 'uz_vat'
            | 've_rif'
            | 'vn_tin'
            | 'za_vat';
        }
      }

      interface TotalDetails {
        amount_credit?: number;

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
             * A discount represents the actual application of a [coupon](https://stripe.com/docs/api#coupons) or [promotion code](https://stripe.com/docs/api#promotion_codes).
             * It contains information about when the discount began, when it will end, and what it is applied to.
             *
             * Related guide: [Applying discounts to subscriptions](https://stripe.com/docs/billing/subscriptions/discounts)
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
             * Related guide: [Tax rates](https://stripe.com/docs/billing/taxes/tax-rates)
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
    }
  }
}
