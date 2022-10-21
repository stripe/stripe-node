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
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
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
              type CaptureMethod = 'automatic' | 'manual';
            }

            interface Alipay {
              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
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
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
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
              type CaptureMethod = 'automatic' | 'manual';

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
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
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
                 * The bank transfer type that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, or `mx_bank_transfer`.
                 */
                type: BankTransfer.Type | null;
              }

              namespace BankTransfer {
                interface EuBankTransfer {
                  /**
                   * The desired country code of the bank account information. Permitted values include: `DE`, `ES`, `FR`, `IE`, or `NL`.
                   */
                  country: EuBankTransfer.Country;
                }

                namespace EuBankTransfer {
                  type Country = 'DE' | 'ES' | 'FR' | 'IE' | 'NL';
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

            interface Ideal {
              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
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
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               */
              setup_future_usage?: 'none';
            }

            interface Link {
              /**
               * Controls when the funds will be captured from the customer's account.
               */
              capture_method?: 'manual';

              /**
               * Token used for persistent Link logins.
               */
              persistent_token: string | null;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
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
            }

            interface SepaDebit {
              mandate_options?: SepaDebit.MandateOptions;

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
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
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
           * Related guide: [Tax Rates](https://stripe.com/docs/billing/taxes/tax-rates).
           */
          rate: Stripe.TaxRate;
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
           * The type of the tax ID, one of `eu_vat`, `br_cnpj`, `br_cpf`, `eu_oss_vat`, `gb_vat`, `nz_gst`, `au_abn`, `au_arn`, `in_gst`, `no_vat`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `li_uid`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, `il_vat`, `ge_vat`, `ua_vat`, `is_vat`, `bg_uic`, `hu_tin`, `si_tin`, `ke_pin`, or `unknown`
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
            | 'au_arn'
            | 'bg_uic'
            | 'br_cnpj'
            | 'br_cpf'
            | 'ca_bn'
            | 'ca_gst_hst'
            | 'ca_pst_bc'
            | 'ca_pst_mb'
            | 'ca_pst_sk'
            | 'ca_qst'
            | 'ch_vat'
            | 'cl_tin'
            | 'es_cif'
            | 'eu_oss_vat'
            | 'eu_vat'
            | 'gb_vat'
            | 'ge_vat'
            | 'hk_br'
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
            | 'si_tin'
            | 'th_vat'
            | 'tw_vat'
            | 'ua_vat'
            | 'unknown'
            | 'us_ein'
            | 'za_vat';
        }
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
             * A discount represents the actual application of a [coupon](https://stripe.com/docs/api#coupons) or [promotion code](https://stripe.com/docs/api#promotion_codes).
             * It contains information about when the discount began, when it will end, and what it is applied to.
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
           * Use this to implement a variable-pricing model in your integration. This is required if `product_data` is not specifed.
           */
          product?: string;

          /**
           * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
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
          description?: string;

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
          tax_code?: string;

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
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<AcssDebit.SetupFutureUsage>;

              /**
               * Verification method for the intent
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
               * Controls when the funds will be captured from the customer's account.
               *
               * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
               *
               * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
               */
              capture_method?: AfterpayClearpay.CaptureMethod;

              /**
               * Order identifier shown to the customer in Afterpay's online portal. We recommend using a value that helps you answer any questions a customer might have about
               * the payment. The identifier is limited to 128 characters and may contain only letters, digits, underscores, backslashes and dashes.
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
              type CaptureMethod = 'automatic' | 'manual';
            }

            interface Alipay {
              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
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
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
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
              type CaptureMethod = 'automatic' | 'manual';

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
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
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
                 * The list of bank transfer types that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, or `mx_bank_transfer`.
                 */
                type: BankTransfer.Type;
              }

              namespace BankTransfer {
                interface EuBankTransfer {
                  /**
                   * The desired country code of the bank account information. Permitted values include: `DE`, `ES`, `FR`, `IE`, or `NL`.
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

            interface Ideal {
              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<Ideal.SetupFutureUsage>;
            }

            namespace Ideal {
              type SetupFutureUsage = 'none' | 'off_session';
            }

            interface Klarna {
              /**
               * Controls when the funds will be captured from the customer's account.
               *
               * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
               *
               * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
               */
              capture_method?: Stripe.Emptyable<'manual'>;

              /**
               * Preferred language of the Klarna authorization page that the customer is redirected to
               */
              preferred_locale?: Klarna.PreferredLocale;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: 'none';
            }

            namespace Klarna {
              type PreferredLocale =
                | 'da-DK'
                | 'de-AT'
                | 'de-CH'
                | 'de-DE'
                | 'en-AT'
                | 'en-AU'
                | 'en-BE'
                | 'en-CA'
                | 'en-CH'
                | 'en-DE'
                | 'en-DK'
                | 'en-ES'
                | 'en-FI'
                | 'en-FR'
                | 'en-GB'
                | 'en-IE'
                | 'en-IT'
                | 'en-NL'
                | 'en-NO'
                | 'en-NZ'
                | 'en-PL'
                | 'en-PT'
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
                | 'sv-FI'
                | 'sv-SE';
            }

            interface Link {
              /**
               * Controls when the funds will be captured from the customer's account.
               *
               * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
               *
               * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
               */
              capture_method?: Stripe.Emptyable<'manual'>;

              /**
               * Token used for persistent Link logins.
               */
              persistent_token?: string;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
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
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
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
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: 'none';

              /**
               * Confirm that the payer has accepted the P24 terms and conditions.
               */
              tos_shown_and_accepted?: boolean;
            }

            interface SepaDebit {
              /**
               * Additional fields for Mandate creation
               */
              mandate_options?: SepaDebit.MandateOptions;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
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
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
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
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
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
        phone?: string;
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
           * Type of the tax ID, one of `ae_trn`, `au_abn`, `au_arn`, `bg_uic`, `br_cnpj`, `br_cpf`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `ch_vat`, `cl_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `hk_br`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kr_brn`, `li_uid`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `no_vat`, `nz_gst`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `th_vat`, `tw_vat`, `ua_vat`, `us_ein`, or `za_vat`
           */
          type: TaxId.Type;

          /**
           * Value of the tax ID.
           */
          value: string;
        }

        namespace TaxId {
          type Type =
            | 'ae_trn'
            | 'au_abn'
            | 'au_arn'
            | 'bg_uic'
            | 'br_cnpj'
            | 'br_cpf'
            | 'ca_bn'
            | 'ca_gst_hst'
            | 'ca_pst_bc'
            | 'ca_pst_mb'
            | 'ca_pst_sk'
            | 'ca_qst'
            | 'ch_vat'
            | 'cl_tin'
            | 'es_cif'
            | 'eu_oss_vat'
            | 'eu_vat'
            | 'gb_vat'
            | 'ge_vat'
            | 'hk_br'
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
            | 'si_tin'
            | 'th_vat'
            | 'tw_vat'
            | 'ua_vat'
            | 'us_ein'
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
      description?: string;

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
           * Use this to implement a variable-pricing model in your integration. This is required if `product_data` is not specifed.
           */
          product?: string;

          /**
           * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
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
          description?: string;

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
          tax_code?: string;

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
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<AcssDebit.SetupFutureUsage>;

              /**
               * Verification method for the intent
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
               * Controls when the funds will be captured from the customer's account.
               *
               * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
               *
               * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
               */
              capture_method?: AfterpayClearpay.CaptureMethod;

              /**
               * Order identifier shown to the customer in Afterpay's online portal. We recommend using a value that helps you answer any questions a customer might have about
               * the payment. The identifier is limited to 128 characters and may contain only letters, digits, underscores, backslashes and dashes.
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
              type CaptureMethod = 'automatic' | 'manual';
            }

            interface Alipay {
              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
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
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
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
              type CaptureMethod = 'automatic' | 'manual';

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
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
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
                 * The list of bank transfer types that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, or `mx_bank_transfer`.
                 */
                type: BankTransfer.Type;
              }

              namespace BankTransfer {
                interface EuBankTransfer {
                  /**
                   * The desired country code of the bank account information. Permitted values include: `DE`, `ES`, `FR`, `IE`, or `NL`.
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

            interface Ideal {
              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: Stripe.Emptyable<Ideal.SetupFutureUsage>;
            }

            namespace Ideal {
              type SetupFutureUsage = 'none' | 'off_session';
            }

            interface Klarna {
              /**
               * Controls when the funds will be captured from the customer's account.
               *
               * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
               *
               * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
               */
              capture_method?: Stripe.Emptyable<'manual'>;

              /**
               * Preferred language of the Klarna authorization page that the customer is redirected to
               */
              preferred_locale?: Klarna.PreferredLocale;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: 'none';
            }

            namespace Klarna {
              type PreferredLocale =
                | 'da-DK'
                | 'de-AT'
                | 'de-CH'
                | 'de-DE'
                | 'en-AT'
                | 'en-AU'
                | 'en-BE'
                | 'en-CA'
                | 'en-CH'
                | 'en-DE'
                | 'en-DK'
                | 'en-ES'
                | 'en-FI'
                | 'en-FR'
                | 'en-GB'
                | 'en-IE'
                | 'en-IT'
                | 'en-NL'
                | 'en-NO'
                | 'en-NZ'
                | 'en-PL'
                | 'en-PT'
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
                | 'sv-FI'
                | 'sv-SE';
            }

            interface Link {
              /**
               * Controls when the funds will be captured from the customer's account.
               *
               * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
               *
               * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
               */
              capture_method?: Stripe.Emptyable<'manual'>;

              /**
               * Token used for persistent Link logins.
               */
              persistent_token?: string;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
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
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
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
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
               */
              setup_future_usage?: 'none';

              /**
               * Confirm that the payer has accepted the P24 terms and conditions.
               */
              tos_shown_and_accepted?: boolean;
            }

            interface SepaDebit {
              /**
               * Additional fields for Mandate creation
               */
              mandate_options?: SepaDebit.MandateOptions;

              /**
               * Indicates that you intend to make future payments with this PaymentIntent's payment method.
               *
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
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
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
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
               * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
               *
               * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
               *
               * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
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
        phone?: string;
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
           * Type of the tax ID, one of `ae_trn`, `au_abn`, `au_arn`, `bg_uic`, `br_cnpj`, `br_cpf`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `ch_vat`, `cl_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `hk_br`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kr_brn`, `li_uid`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `no_vat`, `nz_gst`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `th_vat`, `tw_vat`, `ua_vat`, `us_ein`, or `za_vat`
           */
          type: TaxId.Type;

          /**
           * Value of the tax ID.
           */
          value: string;
        }

        namespace TaxId {
          type Type =
            | 'ae_trn'
            | 'au_abn'
            | 'au_arn'
            | 'bg_uic'
            | 'br_cnpj'
            | 'br_cpf'
            | 'ca_bn'
            | 'ca_gst_hst'
            | 'ca_pst_bc'
            | 'ca_pst_mb'
            | 'ca_pst_sk'
            | 'ca_qst'
            | 'ch_vat'
            | 'cl_tin'
            | 'es_cif'
            | 'eu_oss_vat'
            | 'eu_vat'
            | 'gb_vat'
            | 'ge_vat'
            | 'hk_br'
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
            | 'si_tin'
            | 'th_vat'
            | 'tw_vat'
            | 'ua_vat'
            | 'us_ein'
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
