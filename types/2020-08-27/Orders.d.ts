// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The Order object.
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
           * The type of the tax ID, one of `eu_vat`, `br_cnpj`, `br_cpf`, `eu_oss_vat`, `gb_vat`, `nz_gst`, `au_abn`, `au_arn`, `in_gst`, `no_vat`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `li_uid`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, `il_vat`, `ge_vat`, `ua_vat`, `is_vat`, `bg_uic`, `hu_tin`, `si_tin`, or `unknown`
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
        address?: BillingDetails.Address;

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

      namespace BillingDetails {
        interface Address extends Omit<Stripe.AddressParam, 'line1'> {
          line1?: string;
        }
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
         * The ID of the price object. One of `product` (with default price) or `price` or `price_data` is required.
         */
        price?: string;

        /**
         * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `product` (with default price) or `price` or `price_data` is required.
         */
        price_data?: LineItem.PriceData;

        /**
         * The product of the line item. The product must have a default price specified. One of `product` (with default price) or `price` or `price_data` is required.
         */
        product?: string;

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
           * The ID of the product that this price will belong to.
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
                | 'de-DE'
                | 'en-AT'
                | 'en-AU'
                | 'en-BE'
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
                | 'en-SE'
                | 'en-US'
                | 'es-ES'
                | 'es-US'
                | 'fi-FI'
                | 'fr-BE'
                | 'fr-FR'
                | 'it-IT'
                | 'nb-NO'
                | 'nl-BE'
                | 'nl-NL'
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
            currency_options?: FixedAmount.CurrencyOptions;
          }

          namespace FixedAmount {
            interface CurrencyOptions {
              /**
               * Shipping rate defined in AED.
               */
              aed?: CurrencyOptions.Aed;

              /**
               * Shipping rate defined in AFN.
               */
              afn?: CurrencyOptions.Afn;

              /**
               * Shipping rate defined in ALL.
               */
              all?: CurrencyOptions.All;

              /**
               * Shipping rate defined in AMD.
               */
              amd?: CurrencyOptions.Amd;

              /**
               * Shipping rate defined in ANG.
               */
              ang?: CurrencyOptions.Ang;

              /**
               * Shipping rate defined in AOA.
               */
              aoa?: CurrencyOptions.Aoa;

              /**
               * Shipping rate defined in ARS.
               */
              ars?: CurrencyOptions.Ars;

              /**
               * Shipping rate defined in AUD.
               */
              aud?: CurrencyOptions.Aud;

              /**
               * Shipping rate defined in AWG.
               */
              awg?: CurrencyOptions.Awg;

              /**
               * Shipping rate defined in AZN.
               */
              azn?: CurrencyOptions.Azn;

              /**
               * Shipping rate defined in BAM.
               */
              bam?: CurrencyOptions.Bam;

              /**
               * Shipping rate defined in BBD.
               */
              bbd?: CurrencyOptions.Bbd;

              /**
               * Shipping rate defined in BDT.
               */
              bdt?: CurrencyOptions.Bdt;

              /**
               * Shipping rate defined in BGN.
               */
              bgn?: CurrencyOptions.Bgn;

              /**
               * Shipping rate defined in BHD.
               */
              bhd?: CurrencyOptions.Bhd;

              /**
               * Shipping rate defined in BIF.
               */
              bif?: CurrencyOptions.Bif;

              /**
               * Shipping rate defined in BMD.
               */
              bmd?: CurrencyOptions.Bmd;

              /**
               * Shipping rate defined in BND.
               */
              bnd?: CurrencyOptions.Bnd;

              /**
               * Shipping rate defined in BOB.
               */
              bob?: CurrencyOptions.Bob;

              /**
               * Shipping rate defined in BRL.
               */
              brl?: CurrencyOptions.Brl;

              /**
               * Shipping rate defined in BSD.
               */
              bsd?: CurrencyOptions.Bsd;

              /**
               * Shipping rate defined in BTN.
               */
              btn?: CurrencyOptions.Btn;

              /**
               * Shipping rate defined in BWP.
               */
              bwp?: CurrencyOptions.Bwp;

              /**
               * Shipping rate defined in BYN.
               */
              byn?: CurrencyOptions.Byn;

              /**
               * Shipping rate defined in BZD.
               */
              bzd?: CurrencyOptions.Bzd;

              /**
               * Shipping rate defined in CAD.
               */
              cad?: CurrencyOptions.Cad;

              /**
               * Shipping rate defined in CDF.
               */
              cdf?: CurrencyOptions.Cdf;

              /**
               * Shipping rate defined in CHF.
               */
              chf?: CurrencyOptions.Chf;

              /**
               * Shipping rate defined in CLP.
               */
              clp?: CurrencyOptions.Clp;

              /**
               * Shipping rate defined in CNY.
               */
              cny?: CurrencyOptions.Cny;

              /**
               * Shipping rate defined in COP.
               */
              cop?: CurrencyOptions.Cop;

              /**
               * Shipping rate defined in CRC.
               */
              crc?: CurrencyOptions.Crc;

              /**
               * Shipping rate defined in CVE.
               */
              cve?: CurrencyOptions.Cve;

              /**
               * Shipping rate defined in CZK.
               */
              czk?: CurrencyOptions.Czk;

              /**
               * Shipping rate defined in DJF.
               */
              djf?: CurrencyOptions.Djf;

              /**
               * Shipping rate defined in DKK.
               */
              dkk?: CurrencyOptions.Dkk;

              /**
               * Shipping rate defined in DOP.
               */
              dop?: CurrencyOptions.Dop;

              /**
               * Shipping rate defined in DZD.
               */
              dzd?: CurrencyOptions.Dzd;

              /**
               * Shipping rate defined in EGP.
               */
              egp?: CurrencyOptions.Egp;

              /**
               * Shipping rate defined in ETB.
               */
              etb?: CurrencyOptions.Etb;

              /**
               * Shipping rate defined in EUR.
               */
              eur?: CurrencyOptions.Eur;

              /**
               * Shipping rate defined in FJD.
               */
              fjd?: CurrencyOptions.Fjd;

              /**
               * Shipping rate defined in FKP.
               */
              fkp?: CurrencyOptions.Fkp;

              /**
               * Shipping rate defined in GBP.
               */
              gbp?: CurrencyOptions.Gbp;

              /**
               * Shipping rate defined in GEL.
               */
              gel?: CurrencyOptions.Gel;

              /**
               * Shipping rate defined in GHS.
               */
              ghs?: CurrencyOptions.Ghs;

              /**
               * Shipping rate defined in GIP.
               */
              gip?: CurrencyOptions.Gip;

              /**
               * Shipping rate defined in GMD.
               */
              gmd?: CurrencyOptions.Gmd;

              /**
               * Shipping rate defined in GNF.
               */
              gnf?: CurrencyOptions.Gnf;

              /**
               * Shipping rate defined in GTQ.
               */
              gtq?: CurrencyOptions.Gtq;

              /**
               * Shipping rate defined in GYD.
               */
              gyd?: CurrencyOptions.Gyd;

              /**
               * Shipping rate defined in HKD.
               */
              hkd?: CurrencyOptions.Hkd;

              /**
               * Shipping rate defined in HNL.
               */
              hnl?: CurrencyOptions.Hnl;

              /**
               * Shipping rate defined in HRK.
               */
              hrk?: CurrencyOptions.Hrk;

              /**
               * Shipping rate defined in HTG.
               */
              htg?: CurrencyOptions.Htg;

              /**
               * Shipping rate defined in HUF.
               */
              huf?: CurrencyOptions.Huf;

              /**
               * Shipping rate defined in IDR.
               */
              idr?: CurrencyOptions.Idr;

              /**
               * Shipping rate defined in ILS.
               */
              ils?: CurrencyOptions.Ils;

              /**
               * Shipping rate defined in INR.
               */
              inr?: CurrencyOptions.Inr;

              /**
               * Shipping rate defined in ISK.
               */
              isk?: CurrencyOptions.Isk;

              /**
               * Shipping rate defined in JMD.
               */
              jmd?: CurrencyOptions.Jmd;

              /**
               * Shipping rate defined in JOD.
               */
              jod?: CurrencyOptions.Jod;

              /**
               * Shipping rate defined in JPY.
               */
              jpy?: CurrencyOptions.Jpy;

              /**
               * Shipping rate defined in KES.
               */
              kes?: CurrencyOptions.Kes;

              /**
               * Shipping rate defined in KGS.
               */
              kgs?: CurrencyOptions.Kgs;

              /**
               * Shipping rate defined in KHR.
               */
              khr?: CurrencyOptions.Khr;

              /**
               * Shipping rate defined in KMF.
               */
              kmf?: CurrencyOptions.Kmf;

              /**
               * Shipping rate defined in KRW.
               */
              krw?: CurrencyOptions.Krw;

              /**
               * Shipping rate defined in KWD.
               */
              kwd?: CurrencyOptions.Kwd;

              /**
               * Shipping rate defined in KYD.
               */
              kyd?: CurrencyOptions.Kyd;

              /**
               * Shipping rate defined in KZT.
               */
              kzt?: CurrencyOptions.Kzt;

              /**
               * Shipping rate defined in LAK.
               */
              lak?: CurrencyOptions.Lak;

              /**
               * Shipping rate defined in LBP.
               */
              lbp?: CurrencyOptions.Lbp;

              /**
               * Shipping rate defined in LKR.
               */
              lkr?: CurrencyOptions.Lkr;

              /**
               * Shipping rate defined in LRD.
               */
              lrd?: CurrencyOptions.Lrd;

              /**
               * Shipping rate defined in LSL.
               */
              lsl?: CurrencyOptions.Lsl;

              /**
               * Shipping rate defined in MAD.
               */
              mad?: CurrencyOptions.Mad;

              /**
               * Shipping rate defined in MDL.
               */
              mdl?: CurrencyOptions.Mdl;

              /**
               * Shipping rate defined in MGA.
               */
              mga?: CurrencyOptions.Mga;

              /**
               * Shipping rate defined in MKD.
               */
              mkd?: CurrencyOptions.Mkd;

              /**
               * Shipping rate defined in MMK.
               */
              mmk?: CurrencyOptions.Mmk;

              /**
               * Shipping rate defined in MNT.
               */
              mnt?: CurrencyOptions.Mnt;

              /**
               * Shipping rate defined in MOP.
               */
              mop?: CurrencyOptions.Mop;

              /**
               * Shipping rate defined in MRO.
               */
              mro?: CurrencyOptions.Mro;

              /**
               * Shipping rate defined in MUR.
               */
              mur?: CurrencyOptions.Mur;

              /**
               * Shipping rate defined in MVR.
               */
              mvr?: CurrencyOptions.Mvr;

              /**
               * Shipping rate defined in MWK.
               */
              mwk?: CurrencyOptions.Mwk;

              /**
               * Shipping rate defined in MXN.
               */
              mxn?: CurrencyOptions.Mxn;

              /**
               * Shipping rate defined in MYR.
               */
              myr?: CurrencyOptions.Myr;

              /**
               * Shipping rate defined in MZN.
               */
              mzn?: CurrencyOptions.Mzn;

              /**
               * Shipping rate defined in NAD.
               */
              nad?: CurrencyOptions.Nad;

              /**
               * Shipping rate defined in NGN.
               */
              ngn?: CurrencyOptions.Ngn;

              /**
               * Shipping rate defined in NIO.
               */
              nio?: CurrencyOptions.Nio;

              /**
               * Shipping rate defined in NOK.
               */
              nok?: CurrencyOptions.Nok;

              /**
               * Shipping rate defined in NPR.
               */
              npr?: CurrencyOptions.Npr;

              /**
               * Shipping rate defined in NZD.
               */
              nzd?: CurrencyOptions.Nzd;

              /**
               * Shipping rate defined in OMR.
               */
              omr?: CurrencyOptions.Omr;

              /**
               * Shipping rate defined in PAB.
               */
              pab?: CurrencyOptions.Pab;

              /**
               * Shipping rate defined in PEN.
               */
              pen?: CurrencyOptions.Pen;

              /**
               * Shipping rate defined in PGK.
               */
              pgk?: CurrencyOptions.Pgk;

              /**
               * Shipping rate defined in PHP.
               */
              php?: CurrencyOptions.Php;

              /**
               * Shipping rate defined in PKR.
               */
              pkr?: CurrencyOptions.Pkr;

              /**
               * Shipping rate defined in PLN.
               */
              pln?: CurrencyOptions.Pln;

              /**
               * Shipping rate defined in PYG.
               */
              pyg?: CurrencyOptions.Pyg;

              /**
               * Shipping rate defined in QAR.
               */
              qar?: CurrencyOptions.Qar;

              /**
               * Shipping rate defined in RON.
               */
              ron?: CurrencyOptions.Ron;

              /**
               * Shipping rate defined in RSD.
               */
              rsd?: CurrencyOptions.Rsd;

              /**
               * Shipping rate defined in RUB.
               */
              rub?: CurrencyOptions.Rub;

              /**
               * Shipping rate defined in RWF.
               */
              rwf?: CurrencyOptions.Rwf;

              /**
               * Shipping rate defined in SAR.
               */
              sar?: CurrencyOptions.Sar;

              /**
               * Shipping rate defined in SBD.
               */
              sbd?: CurrencyOptions.Sbd;

              /**
               * Shipping rate defined in SCR.
               */
              scr?: CurrencyOptions.Scr;

              /**
               * Shipping rate defined in SEK.
               */
              sek?: CurrencyOptions.Sek;

              /**
               * Shipping rate defined in SGD.
               */
              sgd?: CurrencyOptions.Sgd;

              /**
               * Shipping rate defined in SHP.
               */
              shp?: CurrencyOptions.Shp;

              /**
               * Shipping rate defined in SLL.
               */
              sll?: CurrencyOptions.Sll;

              /**
               * Shipping rate defined in SOS.
               */
              sos?: CurrencyOptions.Sos;

              /**
               * Shipping rate defined in SRD.
               */
              srd?: CurrencyOptions.Srd;

              /**
               * Shipping rate defined in STD.
               */
              std?: CurrencyOptions.Std;

              /**
               * Shipping rate defined in SZL.
               */
              szl?: CurrencyOptions.Szl;

              /**
               * Shipping rate defined in THB.
               */
              thb?: CurrencyOptions.Thb;

              /**
               * Shipping rate defined in TJS.
               */
              tjs?: CurrencyOptions.Tjs;

              /**
               * Shipping rate defined in TND.
               */
              tnd?: CurrencyOptions.Tnd;

              /**
               * Shipping rate defined in TOP.
               */
              top?: CurrencyOptions.Top;

              /**
               * Shipping rate defined in TRY.
               */
              try?: CurrencyOptions.Try;

              /**
               * Shipping rate defined in TTD.
               */
              ttd?: CurrencyOptions.Ttd;

              /**
               * Shipping rate defined in TWD.
               */
              twd?: CurrencyOptions.Twd;

              /**
               * Shipping rate defined in TZS.
               */
              tzs?: CurrencyOptions.Tzs;

              /**
               * Shipping rate defined in UAH.
               */
              uah?: CurrencyOptions.Uah;

              /**
               * Shipping rate defined in UGX.
               */
              ugx?: CurrencyOptions.Ugx;

              /**
               * Shipping rate defined in USD.
               */
              usd?: CurrencyOptions.Usd;

              /**
               * Shipping rate defined in USDC.
               */
              usdc?: CurrencyOptions.Usdc;

              /**
               * Shipping rate defined in UYU.
               */
              uyu?: CurrencyOptions.Uyu;

              /**
               * Shipping rate defined in UZS.
               */
              uzs?: CurrencyOptions.Uzs;

              /**
               * Shipping rate defined in VND.
               */
              vnd?: CurrencyOptions.Vnd;

              /**
               * Shipping rate defined in VUV.
               */
              vuv?: CurrencyOptions.Vuv;

              /**
               * Shipping rate defined in WST.
               */
              wst?: CurrencyOptions.Wst;

              /**
               * Shipping rate defined in XAF.
               */
              xaf?: CurrencyOptions.Xaf;

              /**
               * Shipping rate defined in XCD.
               */
              xcd?: CurrencyOptions.Xcd;

              /**
               * Shipping rate defined in XOF.
               */
              xof?: CurrencyOptions.Xof;

              /**
               * Shipping rate defined in XPF.
               */
              xpf?: CurrencyOptions.Xpf;

              /**
               * Shipping rate defined in YER.
               */
              yer?: CurrencyOptions.Yer;

              /**
               * Shipping rate defined in ZAR.
               */
              zar?: CurrencyOptions.Zar;

              /**
               * Shipping rate defined in ZMW.
               */
              zmw?: CurrencyOptions.Zmw;
            }

            namespace CurrencyOptions {
              interface Aed {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Aed.TaxBehavior;
              }

              namespace Aed {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Afn {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Afn.TaxBehavior;
              }

              namespace Afn {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface All {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: All.TaxBehavior;
              }

              namespace All {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Amd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Amd.TaxBehavior;
              }

              namespace Amd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Ang {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Ang.TaxBehavior;
              }

              namespace Ang {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Aoa {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Aoa.TaxBehavior;
              }

              namespace Aoa {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Ars {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Ars.TaxBehavior;
              }

              namespace Ars {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Aud {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Aud.TaxBehavior;
              }

              namespace Aud {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Awg {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Awg.TaxBehavior;
              }

              namespace Awg {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Azn {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Azn.TaxBehavior;
              }

              namespace Azn {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bam {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bam.TaxBehavior;
              }

              namespace Bam {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bbd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bbd.TaxBehavior;
              }

              namespace Bbd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bdt {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bdt.TaxBehavior;
              }

              namespace Bdt {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bgn {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bgn.TaxBehavior;
              }

              namespace Bgn {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bhd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bhd.TaxBehavior;
              }

              namespace Bhd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bif {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bif.TaxBehavior;
              }

              namespace Bif {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bmd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bmd.TaxBehavior;
              }

              namespace Bmd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bnd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bnd.TaxBehavior;
              }

              namespace Bnd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bob {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bob.TaxBehavior;
              }

              namespace Bob {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Brl {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Brl.TaxBehavior;
              }

              namespace Brl {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bsd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bsd.TaxBehavior;
              }

              namespace Bsd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Btn {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Btn.TaxBehavior;
              }

              namespace Btn {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bwp {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bwp.TaxBehavior;
              }

              namespace Bwp {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Byn {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Byn.TaxBehavior;
              }

              namespace Byn {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bzd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bzd.TaxBehavior;
              }

              namespace Bzd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Cad {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Cad.TaxBehavior;
              }

              namespace Cad {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Cdf {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Cdf.TaxBehavior;
              }

              namespace Cdf {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Chf {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Chf.TaxBehavior;
              }

              namespace Chf {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Clp {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Clp.TaxBehavior;
              }

              namespace Clp {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Cny {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Cny.TaxBehavior;
              }

              namespace Cny {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Cop {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Cop.TaxBehavior;
              }

              namespace Cop {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Crc {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Crc.TaxBehavior;
              }

              namespace Crc {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Cve {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Cve.TaxBehavior;
              }

              namespace Cve {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Czk {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Czk.TaxBehavior;
              }

              namespace Czk {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Djf {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Djf.TaxBehavior;
              }

              namespace Djf {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Dkk {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Dkk.TaxBehavior;
              }

              namespace Dkk {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Dop {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Dop.TaxBehavior;
              }

              namespace Dop {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Dzd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Dzd.TaxBehavior;
              }

              namespace Dzd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Egp {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Egp.TaxBehavior;
              }

              namespace Egp {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Etb {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Etb.TaxBehavior;
              }

              namespace Etb {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Eur {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Eur.TaxBehavior;
              }

              namespace Eur {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Fjd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Fjd.TaxBehavior;
              }

              namespace Fjd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Fkp {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Fkp.TaxBehavior;
              }

              namespace Fkp {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Gbp {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Gbp.TaxBehavior;
              }

              namespace Gbp {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Gel {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Gel.TaxBehavior;
              }

              namespace Gel {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Ghs {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Ghs.TaxBehavior;
              }

              namespace Ghs {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Gip {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Gip.TaxBehavior;
              }

              namespace Gip {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Gmd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Gmd.TaxBehavior;
              }

              namespace Gmd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Gnf {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Gnf.TaxBehavior;
              }

              namespace Gnf {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Gtq {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Gtq.TaxBehavior;
              }

              namespace Gtq {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Gyd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Gyd.TaxBehavior;
              }

              namespace Gyd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Hkd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Hkd.TaxBehavior;
              }

              namespace Hkd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Hnl {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Hnl.TaxBehavior;
              }

              namespace Hnl {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Hrk {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Hrk.TaxBehavior;
              }

              namespace Hrk {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Htg {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Htg.TaxBehavior;
              }

              namespace Htg {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Huf {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Huf.TaxBehavior;
              }

              namespace Huf {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Idr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Idr.TaxBehavior;
              }

              namespace Idr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Ils {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Ils.TaxBehavior;
              }

              namespace Ils {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Inr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Inr.TaxBehavior;
              }

              namespace Inr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Isk {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Isk.TaxBehavior;
              }

              namespace Isk {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Jmd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Jmd.TaxBehavior;
              }

              namespace Jmd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Jod {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Jod.TaxBehavior;
              }

              namespace Jod {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Jpy {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Jpy.TaxBehavior;
              }

              namespace Jpy {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Kes {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Kes.TaxBehavior;
              }

              namespace Kes {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Kgs {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Kgs.TaxBehavior;
              }

              namespace Kgs {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Khr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Khr.TaxBehavior;
              }

              namespace Khr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Kmf {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Kmf.TaxBehavior;
              }

              namespace Kmf {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Krw {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Krw.TaxBehavior;
              }

              namespace Krw {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Kwd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Kwd.TaxBehavior;
              }

              namespace Kwd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Kyd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Kyd.TaxBehavior;
              }

              namespace Kyd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Kzt {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Kzt.TaxBehavior;
              }

              namespace Kzt {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Lak {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Lak.TaxBehavior;
              }

              namespace Lak {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Lbp {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Lbp.TaxBehavior;
              }

              namespace Lbp {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Lkr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Lkr.TaxBehavior;
              }

              namespace Lkr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Lrd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Lrd.TaxBehavior;
              }

              namespace Lrd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Lsl {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Lsl.TaxBehavior;
              }

              namespace Lsl {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mad {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mad.TaxBehavior;
              }

              namespace Mad {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mdl {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mdl.TaxBehavior;
              }

              namespace Mdl {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mga {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mga.TaxBehavior;
              }

              namespace Mga {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mkd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mkd.TaxBehavior;
              }

              namespace Mkd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mmk {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mmk.TaxBehavior;
              }

              namespace Mmk {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mnt {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mnt.TaxBehavior;
              }

              namespace Mnt {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mop {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mop.TaxBehavior;
              }

              namespace Mop {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mro {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mro.TaxBehavior;
              }

              namespace Mro {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mur {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mur.TaxBehavior;
              }

              namespace Mur {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mvr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mvr.TaxBehavior;
              }

              namespace Mvr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mwk {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mwk.TaxBehavior;
              }

              namespace Mwk {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mxn {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mxn.TaxBehavior;
              }

              namespace Mxn {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Myr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Myr.TaxBehavior;
              }

              namespace Myr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mzn {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mzn.TaxBehavior;
              }

              namespace Mzn {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Nad {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Nad.TaxBehavior;
              }

              namespace Nad {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Ngn {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Ngn.TaxBehavior;
              }

              namespace Ngn {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Nio {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Nio.TaxBehavior;
              }

              namespace Nio {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Nok {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Nok.TaxBehavior;
              }

              namespace Nok {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Npr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Npr.TaxBehavior;
              }

              namespace Npr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Nzd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Nzd.TaxBehavior;
              }

              namespace Nzd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Omr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Omr.TaxBehavior;
              }

              namespace Omr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Pab {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Pab.TaxBehavior;
              }

              namespace Pab {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Pen {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Pen.TaxBehavior;
              }

              namespace Pen {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Pgk {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Pgk.TaxBehavior;
              }

              namespace Pgk {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Php {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Php.TaxBehavior;
              }

              namespace Php {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Pkr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Pkr.TaxBehavior;
              }

              namespace Pkr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Pln {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Pln.TaxBehavior;
              }

              namespace Pln {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Pyg {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Pyg.TaxBehavior;
              }

              namespace Pyg {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Qar {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Qar.TaxBehavior;
              }

              namespace Qar {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Ron {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Ron.TaxBehavior;
              }

              namespace Ron {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Rsd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Rsd.TaxBehavior;
              }

              namespace Rsd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Rub {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Rub.TaxBehavior;
              }

              namespace Rub {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Rwf {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Rwf.TaxBehavior;
              }

              namespace Rwf {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Sar {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Sar.TaxBehavior;
              }

              namespace Sar {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Sbd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Sbd.TaxBehavior;
              }

              namespace Sbd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Scr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Scr.TaxBehavior;
              }

              namespace Scr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Sek {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Sek.TaxBehavior;
              }

              namespace Sek {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Sgd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Sgd.TaxBehavior;
              }

              namespace Sgd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Shp {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Shp.TaxBehavior;
              }

              namespace Shp {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Sll {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Sll.TaxBehavior;
              }

              namespace Sll {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Sos {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Sos.TaxBehavior;
              }

              namespace Sos {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Srd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Srd.TaxBehavior;
              }

              namespace Srd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Std {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Std.TaxBehavior;
              }

              namespace Std {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Szl {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Szl.TaxBehavior;
              }

              namespace Szl {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Thb {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Thb.TaxBehavior;
              }

              namespace Thb {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Tjs {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Tjs.TaxBehavior;
              }

              namespace Tjs {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Tnd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Tnd.TaxBehavior;
              }

              namespace Tnd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Top {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Top.TaxBehavior;
              }

              namespace Top {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Try {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Try.TaxBehavior;
              }

              namespace Try {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Ttd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Ttd.TaxBehavior;
              }

              namespace Ttd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Twd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Twd.TaxBehavior;
              }

              namespace Twd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Tzs {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Tzs.TaxBehavior;
              }

              namespace Tzs {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Uah {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Uah.TaxBehavior;
              }

              namespace Uah {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Ugx {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Ugx.TaxBehavior;
              }

              namespace Ugx {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Usd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Usd.TaxBehavior;
              }

              namespace Usd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Usdc {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Usdc.TaxBehavior;
              }

              namespace Usdc {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Uyu {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Uyu.TaxBehavior;
              }

              namespace Uyu {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Uzs {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Uzs.TaxBehavior;
              }

              namespace Uzs {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Vnd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Vnd.TaxBehavior;
              }

              namespace Vnd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Vuv {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Vuv.TaxBehavior;
              }

              namespace Vuv {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Wst {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Wst.TaxBehavior;
              }

              namespace Wst {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Xaf {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Xaf.TaxBehavior;
              }

              namespace Xaf {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Xcd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Xcd.TaxBehavior;
              }

              namespace Xcd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Xof {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Xof.TaxBehavior;
              }

              namespace Xof {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Xpf {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Xpf.TaxBehavior;
              }

              namespace Xpf {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Yer {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Yer.TaxBehavior;
              }

              namespace Yer {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Zar {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Zar.TaxBehavior;
              }

              namespace Zar {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Zmw {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Zmw.TaxBehavior;
              }

              namespace Zmw {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }
            }
          }

          type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
      }

      interface ShippingDetails {
        /**
         * The shipping address for the order.
         */
        address: ShippingDetails.Address;

        /**
         * The name of the recipient of the order.
         */
        name: string;

        /**
         * The phone number (including extension) for the recipient of the order.
         */
        phone?: string;
      }

      namespace ShippingDetails {
        interface Address extends Omit<Stripe.AddressParam, 'line1'> {
          line1?: string;
        }
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
           * Type of the tax ID, one of `ae_trn`, `au_abn`, `au_arn`, `bg_uic`, `br_cnpj`, `br_cpf`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `ch_vat`, `cl_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `hk_br`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `kr_brn`, `li_uid`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `no_vat`, `nz_gst`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `th_vat`, `tw_vat`, `ua_vat`, `us_ein`, or `za_vat`
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
        address?: BillingDetails.Address;

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

      namespace BillingDetails {
        interface Address extends Omit<Stripe.AddressParam, 'line1'> {
          line1?: string;
        }
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
         * The ID of the price object. One of `product` (with default price) or `price` or `price_data` is required.
         */
        price?: string;

        /**
         * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `product` (with default price) or `price` or `price_data` is required.
         */
        price_data?: LineItem.PriceData;

        /**
         * The product of the line item. The product must have a default price specified. One of `product` (with default price) or `price` or `price_data` is required.
         */
        product?: string;

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
           * The ID of the product that this price will belong to.
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
                | 'de-DE'
                | 'en-AT'
                | 'en-AU'
                | 'en-BE'
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
                | 'en-SE'
                | 'en-US'
                | 'es-ES'
                | 'es-US'
                | 'fi-FI'
                | 'fr-BE'
                | 'fr-FR'
                | 'it-IT'
                | 'nb-NO'
                | 'nl-BE'
                | 'nl-NL'
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
            currency_options?: FixedAmount.CurrencyOptions;
          }

          namespace FixedAmount {
            interface CurrencyOptions {
              /**
               * Shipping rate defined in AED.
               */
              aed?: CurrencyOptions.Aed;

              /**
               * Shipping rate defined in AFN.
               */
              afn?: CurrencyOptions.Afn;

              /**
               * Shipping rate defined in ALL.
               */
              all?: CurrencyOptions.All;

              /**
               * Shipping rate defined in AMD.
               */
              amd?: CurrencyOptions.Amd;

              /**
               * Shipping rate defined in ANG.
               */
              ang?: CurrencyOptions.Ang;

              /**
               * Shipping rate defined in AOA.
               */
              aoa?: CurrencyOptions.Aoa;

              /**
               * Shipping rate defined in ARS.
               */
              ars?: CurrencyOptions.Ars;

              /**
               * Shipping rate defined in AUD.
               */
              aud?: CurrencyOptions.Aud;

              /**
               * Shipping rate defined in AWG.
               */
              awg?: CurrencyOptions.Awg;

              /**
               * Shipping rate defined in AZN.
               */
              azn?: CurrencyOptions.Azn;

              /**
               * Shipping rate defined in BAM.
               */
              bam?: CurrencyOptions.Bam;

              /**
               * Shipping rate defined in BBD.
               */
              bbd?: CurrencyOptions.Bbd;

              /**
               * Shipping rate defined in BDT.
               */
              bdt?: CurrencyOptions.Bdt;

              /**
               * Shipping rate defined in BGN.
               */
              bgn?: CurrencyOptions.Bgn;

              /**
               * Shipping rate defined in BHD.
               */
              bhd?: CurrencyOptions.Bhd;

              /**
               * Shipping rate defined in BIF.
               */
              bif?: CurrencyOptions.Bif;

              /**
               * Shipping rate defined in BMD.
               */
              bmd?: CurrencyOptions.Bmd;

              /**
               * Shipping rate defined in BND.
               */
              bnd?: CurrencyOptions.Bnd;

              /**
               * Shipping rate defined in BOB.
               */
              bob?: CurrencyOptions.Bob;

              /**
               * Shipping rate defined in BRL.
               */
              brl?: CurrencyOptions.Brl;

              /**
               * Shipping rate defined in BSD.
               */
              bsd?: CurrencyOptions.Bsd;

              /**
               * Shipping rate defined in BTN.
               */
              btn?: CurrencyOptions.Btn;

              /**
               * Shipping rate defined in BWP.
               */
              bwp?: CurrencyOptions.Bwp;

              /**
               * Shipping rate defined in BYN.
               */
              byn?: CurrencyOptions.Byn;

              /**
               * Shipping rate defined in BZD.
               */
              bzd?: CurrencyOptions.Bzd;

              /**
               * Shipping rate defined in CAD.
               */
              cad?: CurrencyOptions.Cad;

              /**
               * Shipping rate defined in CDF.
               */
              cdf?: CurrencyOptions.Cdf;

              /**
               * Shipping rate defined in CHF.
               */
              chf?: CurrencyOptions.Chf;

              /**
               * Shipping rate defined in CLP.
               */
              clp?: CurrencyOptions.Clp;

              /**
               * Shipping rate defined in CNY.
               */
              cny?: CurrencyOptions.Cny;

              /**
               * Shipping rate defined in COP.
               */
              cop?: CurrencyOptions.Cop;

              /**
               * Shipping rate defined in CRC.
               */
              crc?: CurrencyOptions.Crc;

              /**
               * Shipping rate defined in CVE.
               */
              cve?: CurrencyOptions.Cve;

              /**
               * Shipping rate defined in CZK.
               */
              czk?: CurrencyOptions.Czk;

              /**
               * Shipping rate defined in DJF.
               */
              djf?: CurrencyOptions.Djf;

              /**
               * Shipping rate defined in DKK.
               */
              dkk?: CurrencyOptions.Dkk;

              /**
               * Shipping rate defined in DOP.
               */
              dop?: CurrencyOptions.Dop;

              /**
               * Shipping rate defined in DZD.
               */
              dzd?: CurrencyOptions.Dzd;

              /**
               * Shipping rate defined in EGP.
               */
              egp?: CurrencyOptions.Egp;

              /**
               * Shipping rate defined in ETB.
               */
              etb?: CurrencyOptions.Etb;

              /**
               * Shipping rate defined in EUR.
               */
              eur?: CurrencyOptions.Eur;

              /**
               * Shipping rate defined in FJD.
               */
              fjd?: CurrencyOptions.Fjd;

              /**
               * Shipping rate defined in FKP.
               */
              fkp?: CurrencyOptions.Fkp;

              /**
               * Shipping rate defined in GBP.
               */
              gbp?: CurrencyOptions.Gbp;

              /**
               * Shipping rate defined in GEL.
               */
              gel?: CurrencyOptions.Gel;

              /**
               * Shipping rate defined in GHS.
               */
              ghs?: CurrencyOptions.Ghs;

              /**
               * Shipping rate defined in GIP.
               */
              gip?: CurrencyOptions.Gip;

              /**
               * Shipping rate defined in GMD.
               */
              gmd?: CurrencyOptions.Gmd;

              /**
               * Shipping rate defined in GNF.
               */
              gnf?: CurrencyOptions.Gnf;

              /**
               * Shipping rate defined in GTQ.
               */
              gtq?: CurrencyOptions.Gtq;

              /**
               * Shipping rate defined in GYD.
               */
              gyd?: CurrencyOptions.Gyd;

              /**
               * Shipping rate defined in HKD.
               */
              hkd?: CurrencyOptions.Hkd;

              /**
               * Shipping rate defined in HNL.
               */
              hnl?: CurrencyOptions.Hnl;

              /**
               * Shipping rate defined in HRK.
               */
              hrk?: CurrencyOptions.Hrk;

              /**
               * Shipping rate defined in HTG.
               */
              htg?: CurrencyOptions.Htg;

              /**
               * Shipping rate defined in HUF.
               */
              huf?: CurrencyOptions.Huf;

              /**
               * Shipping rate defined in IDR.
               */
              idr?: CurrencyOptions.Idr;

              /**
               * Shipping rate defined in ILS.
               */
              ils?: CurrencyOptions.Ils;

              /**
               * Shipping rate defined in INR.
               */
              inr?: CurrencyOptions.Inr;

              /**
               * Shipping rate defined in ISK.
               */
              isk?: CurrencyOptions.Isk;

              /**
               * Shipping rate defined in JMD.
               */
              jmd?: CurrencyOptions.Jmd;

              /**
               * Shipping rate defined in JOD.
               */
              jod?: CurrencyOptions.Jod;

              /**
               * Shipping rate defined in JPY.
               */
              jpy?: CurrencyOptions.Jpy;

              /**
               * Shipping rate defined in KES.
               */
              kes?: CurrencyOptions.Kes;

              /**
               * Shipping rate defined in KGS.
               */
              kgs?: CurrencyOptions.Kgs;

              /**
               * Shipping rate defined in KHR.
               */
              khr?: CurrencyOptions.Khr;

              /**
               * Shipping rate defined in KMF.
               */
              kmf?: CurrencyOptions.Kmf;

              /**
               * Shipping rate defined in KRW.
               */
              krw?: CurrencyOptions.Krw;

              /**
               * Shipping rate defined in KWD.
               */
              kwd?: CurrencyOptions.Kwd;

              /**
               * Shipping rate defined in KYD.
               */
              kyd?: CurrencyOptions.Kyd;

              /**
               * Shipping rate defined in KZT.
               */
              kzt?: CurrencyOptions.Kzt;

              /**
               * Shipping rate defined in LAK.
               */
              lak?: CurrencyOptions.Lak;

              /**
               * Shipping rate defined in LBP.
               */
              lbp?: CurrencyOptions.Lbp;

              /**
               * Shipping rate defined in LKR.
               */
              lkr?: CurrencyOptions.Lkr;

              /**
               * Shipping rate defined in LRD.
               */
              lrd?: CurrencyOptions.Lrd;

              /**
               * Shipping rate defined in LSL.
               */
              lsl?: CurrencyOptions.Lsl;

              /**
               * Shipping rate defined in MAD.
               */
              mad?: CurrencyOptions.Mad;

              /**
               * Shipping rate defined in MDL.
               */
              mdl?: CurrencyOptions.Mdl;

              /**
               * Shipping rate defined in MGA.
               */
              mga?: CurrencyOptions.Mga;

              /**
               * Shipping rate defined in MKD.
               */
              mkd?: CurrencyOptions.Mkd;

              /**
               * Shipping rate defined in MMK.
               */
              mmk?: CurrencyOptions.Mmk;

              /**
               * Shipping rate defined in MNT.
               */
              mnt?: CurrencyOptions.Mnt;

              /**
               * Shipping rate defined in MOP.
               */
              mop?: CurrencyOptions.Mop;

              /**
               * Shipping rate defined in MRO.
               */
              mro?: CurrencyOptions.Mro;

              /**
               * Shipping rate defined in MUR.
               */
              mur?: CurrencyOptions.Mur;

              /**
               * Shipping rate defined in MVR.
               */
              mvr?: CurrencyOptions.Mvr;

              /**
               * Shipping rate defined in MWK.
               */
              mwk?: CurrencyOptions.Mwk;

              /**
               * Shipping rate defined in MXN.
               */
              mxn?: CurrencyOptions.Mxn;

              /**
               * Shipping rate defined in MYR.
               */
              myr?: CurrencyOptions.Myr;

              /**
               * Shipping rate defined in MZN.
               */
              mzn?: CurrencyOptions.Mzn;

              /**
               * Shipping rate defined in NAD.
               */
              nad?: CurrencyOptions.Nad;

              /**
               * Shipping rate defined in NGN.
               */
              ngn?: CurrencyOptions.Ngn;

              /**
               * Shipping rate defined in NIO.
               */
              nio?: CurrencyOptions.Nio;

              /**
               * Shipping rate defined in NOK.
               */
              nok?: CurrencyOptions.Nok;

              /**
               * Shipping rate defined in NPR.
               */
              npr?: CurrencyOptions.Npr;

              /**
               * Shipping rate defined in NZD.
               */
              nzd?: CurrencyOptions.Nzd;

              /**
               * Shipping rate defined in OMR.
               */
              omr?: CurrencyOptions.Omr;

              /**
               * Shipping rate defined in PAB.
               */
              pab?: CurrencyOptions.Pab;

              /**
               * Shipping rate defined in PEN.
               */
              pen?: CurrencyOptions.Pen;

              /**
               * Shipping rate defined in PGK.
               */
              pgk?: CurrencyOptions.Pgk;

              /**
               * Shipping rate defined in PHP.
               */
              php?: CurrencyOptions.Php;

              /**
               * Shipping rate defined in PKR.
               */
              pkr?: CurrencyOptions.Pkr;

              /**
               * Shipping rate defined in PLN.
               */
              pln?: CurrencyOptions.Pln;

              /**
               * Shipping rate defined in PYG.
               */
              pyg?: CurrencyOptions.Pyg;

              /**
               * Shipping rate defined in QAR.
               */
              qar?: CurrencyOptions.Qar;

              /**
               * Shipping rate defined in RON.
               */
              ron?: CurrencyOptions.Ron;

              /**
               * Shipping rate defined in RSD.
               */
              rsd?: CurrencyOptions.Rsd;

              /**
               * Shipping rate defined in RUB.
               */
              rub?: CurrencyOptions.Rub;

              /**
               * Shipping rate defined in RWF.
               */
              rwf?: CurrencyOptions.Rwf;

              /**
               * Shipping rate defined in SAR.
               */
              sar?: CurrencyOptions.Sar;

              /**
               * Shipping rate defined in SBD.
               */
              sbd?: CurrencyOptions.Sbd;

              /**
               * Shipping rate defined in SCR.
               */
              scr?: CurrencyOptions.Scr;

              /**
               * Shipping rate defined in SEK.
               */
              sek?: CurrencyOptions.Sek;

              /**
               * Shipping rate defined in SGD.
               */
              sgd?: CurrencyOptions.Sgd;

              /**
               * Shipping rate defined in SHP.
               */
              shp?: CurrencyOptions.Shp;

              /**
               * Shipping rate defined in SLL.
               */
              sll?: CurrencyOptions.Sll;

              /**
               * Shipping rate defined in SOS.
               */
              sos?: CurrencyOptions.Sos;

              /**
               * Shipping rate defined in SRD.
               */
              srd?: CurrencyOptions.Srd;

              /**
               * Shipping rate defined in STD.
               */
              std?: CurrencyOptions.Std;

              /**
               * Shipping rate defined in SZL.
               */
              szl?: CurrencyOptions.Szl;

              /**
               * Shipping rate defined in THB.
               */
              thb?: CurrencyOptions.Thb;

              /**
               * Shipping rate defined in TJS.
               */
              tjs?: CurrencyOptions.Tjs;

              /**
               * Shipping rate defined in TND.
               */
              tnd?: CurrencyOptions.Tnd;

              /**
               * Shipping rate defined in TOP.
               */
              top?: CurrencyOptions.Top;

              /**
               * Shipping rate defined in TRY.
               */
              try?: CurrencyOptions.Try;

              /**
               * Shipping rate defined in TTD.
               */
              ttd?: CurrencyOptions.Ttd;

              /**
               * Shipping rate defined in TWD.
               */
              twd?: CurrencyOptions.Twd;

              /**
               * Shipping rate defined in TZS.
               */
              tzs?: CurrencyOptions.Tzs;

              /**
               * Shipping rate defined in UAH.
               */
              uah?: CurrencyOptions.Uah;

              /**
               * Shipping rate defined in UGX.
               */
              ugx?: CurrencyOptions.Ugx;

              /**
               * Shipping rate defined in USD.
               */
              usd?: CurrencyOptions.Usd;

              /**
               * Shipping rate defined in USDC.
               */
              usdc?: CurrencyOptions.Usdc;

              /**
               * Shipping rate defined in UYU.
               */
              uyu?: CurrencyOptions.Uyu;

              /**
               * Shipping rate defined in UZS.
               */
              uzs?: CurrencyOptions.Uzs;

              /**
               * Shipping rate defined in VND.
               */
              vnd?: CurrencyOptions.Vnd;

              /**
               * Shipping rate defined in VUV.
               */
              vuv?: CurrencyOptions.Vuv;

              /**
               * Shipping rate defined in WST.
               */
              wst?: CurrencyOptions.Wst;

              /**
               * Shipping rate defined in XAF.
               */
              xaf?: CurrencyOptions.Xaf;

              /**
               * Shipping rate defined in XCD.
               */
              xcd?: CurrencyOptions.Xcd;

              /**
               * Shipping rate defined in XOF.
               */
              xof?: CurrencyOptions.Xof;

              /**
               * Shipping rate defined in XPF.
               */
              xpf?: CurrencyOptions.Xpf;

              /**
               * Shipping rate defined in YER.
               */
              yer?: CurrencyOptions.Yer;

              /**
               * Shipping rate defined in ZAR.
               */
              zar?: CurrencyOptions.Zar;

              /**
               * Shipping rate defined in ZMW.
               */
              zmw?: CurrencyOptions.Zmw;
            }

            namespace CurrencyOptions {
              interface Aed {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Aed.TaxBehavior;
              }

              namespace Aed {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Afn {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Afn.TaxBehavior;
              }

              namespace Afn {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface All {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: All.TaxBehavior;
              }

              namespace All {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Amd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Amd.TaxBehavior;
              }

              namespace Amd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Ang {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Ang.TaxBehavior;
              }

              namespace Ang {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Aoa {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Aoa.TaxBehavior;
              }

              namespace Aoa {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Ars {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Ars.TaxBehavior;
              }

              namespace Ars {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Aud {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Aud.TaxBehavior;
              }

              namespace Aud {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Awg {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Awg.TaxBehavior;
              }

              namespace Awg {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Azn {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Azn.TaxBehavior;
              }

              namespace Azn {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bam {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bam.TaxBehavior;
              }

              namespace Bam {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bbd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bbd.TaxBehavior;
              }

              namespace Bbd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bdt {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bdt.TaxBehavior;
              }

              namespace Bdt {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bgn {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bgn.TaxBehavior;
              }

              namespace Bgn {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bhd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bhd.TaxBehavior;
              }

              namespace Bhd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bif {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bif.TaxBehavior;
              }

              namespace Bif {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bmd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bmd.TaxBehavior;
              }

              namespace Bmd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bnd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bnd.TaxBehavior;
              }

              namespace Bnd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bob {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bob.TaxBehavior;
              }

              namespace Bob {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Brl {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Brl.TaxBehavior;
              }

              namespace Brl {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bsd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bsd.TaxBehavior;
              }

              namespace Bsd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Btn {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Btn.TaxBehavior;
              }

              namespace Btn {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bwp {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bwp.TaxBehavior;
              }

              namespace Bwp {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Byn {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Byn.TaxBehavior;
              }

              namespace Byn {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Bzd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Bzd.TaxBehavior;
              }

              namespace Bzd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Cad {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Cad.TaxBehavior;
              }

              namespace Cad {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Cdf {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Cdf.TaxBehavior;
              }

              namespace Cdf {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Chf {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Chf.TaxBehavior;
              }

              namespace Chf {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Clp {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Clp.TaxBehavior;
              }

              namespace Clp {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Cny {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Cny.TaxBehavior;
              }

              namespace Cny {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Cop {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Cop.TaxBehavior;
              }

              namespace Cop {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Crc {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Crc.TaxBehavior;
              }

              namespace Crc {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Cve {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Cve.TaxBehavior;
              }

              namespace Cve {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Czk {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Czk.TaxBehavior;
              }

              namespace Czk {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Djf {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Djf.TaxBehavior;
              }

              namespace Djf {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Dkk {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Dkk.TaxBehavior;
              }

              namespace Dkk {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Dop {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Dop.TaxBehavior;
              }

              namespace Dop {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Dzd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Dzd.TaxBehavior;
              }

              namespace Dzd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Egp {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Egp.TaxBehavior;
              }

              namespace Egp {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Etb {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Etb.TaxBehavior;
              }

              namespace Etb {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Eur {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Eur.TaxBehavior;
              }

              namespace Eur {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Fjd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Fjd.TaxBehavior;
              }

              namespace Fjd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Fkp {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Fkp.TaxBehavior;
              }

              namespace Fkp {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Gbp {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Gbp.TaxBehavior;
              }

              namespace Gbp {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Gel {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Gel.TaxBehavior;
              }

              namespace Gel {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Ghs {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Ghs.TaxBehavior;
              }

              namespace Ghs {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Gip {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Gip.TaxBehavior;
              }

              namespace Gip {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Gmd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Gmd.TaxBehavior;
              }

              namespace Gmd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Gnf {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Gnf.TaxBehavior;
              }

              namespace Gnf {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Gtq {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Gtq.TaxBehavior;
              }

              namespace Gtq {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Gyd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Gyd.TaxBehavior;
              }

              namespace Gyd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Hkd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Hkd.TaxBehavior;
              }

              namespace Hkd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Hnl {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Hnl.TaxBehavior;
              }

              namespace Hnl {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Hrk {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Hrk.TaxBehavior;
              }

              namespace Hrk {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Htg {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Htg.TaxBehavior;
              }

              namespace Htg {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Huf {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Huf.TaxBehavior;
              }

              namespace Huf {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Idr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Idr.TaxBehavior;
              }

              namespace Idr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Ils {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Ils.TaxBehavior;
              }

              namespace Ils {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Inr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Inr.TaxBehavior;
              }

              namespace Inr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Isk {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Isk.TaxBehavior;
              }

              namespace Isk {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Jmd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Jmd.TaxBehavior;
              }

              namespace Jmd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Jod {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Jod.TaxBehavior;
              }

              namespace Jod {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Jpy {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Jpy.TaxBehavior;
              }

              namespace Jpy {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Kes {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Kes.TaxBehavior;
              }

              namespace Kes {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Kgs {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Kgs.TaxBehavior;
              }

              namespace Kgs {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Khr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Khr.TaxBehavior;
              }

              namespace Khr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Kmf {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Kmf.TaxBehavior;
              }

              namespace Kmf {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Krw {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Krw.TaxBehavior;
              }

              namespace Krw {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Kwd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Kwd.TaxBehavior;
              }

              namespace Kwd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Kyd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Kyd.TaxBehavior;
              }

              namespace Kyd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Kzt {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Kzt.TaxBehavior;
              }

              namespace Kzt {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Lak {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Lak.TaxBehavior;
              }

              namespace Lak {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Lbp {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Lbp.TaxBehavior;
              }

              namespace Lbp {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Lkr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Lkr.TaxBehavior;
              }

              namespace Lkr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Lrd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Lrd.TaxBehavior;
              }

              namespace Lrd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Lsl {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Lsl.TaxBehavior;
              }

              namespace Lsl {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mad {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mad.TaxBehavior;
              }

              namespace Mad {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mdl {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mdl.TaxBehavior;
              }

              namespace Mdl {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mga {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mga.TaxBehavior;
              }

              namespace Mga {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mkd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mkd.TaxBehavior;
              }

              namespace Mkd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mmk {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mmk.TaxBehavior;
              }

              namespace Mmk {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mnt {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mnt.TaxBehavior;
              }

              namespace Mnt {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mop {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mop.TaxBehavior;
              }

              namespace Mop {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mro {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mro.TaxBehavior;
              }

              namespace Mro {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mur {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mur.TaxBehavior;
              }

              namespace Mur {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mvr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mvr.TaxBehavior;
              }

              namespace Mvr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mwk {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mwk.TaxBehavior;
              }

              namespace Mwk {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mxn {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mxn.TaxBehavior;
              }

              namespace Mxn {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Myr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Myr.TaxBehavior;
              }

              namespace Myr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Mzn {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Mzn.TaxBehavior;
              }

              namespace Mzn {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Nad {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Nad.TaxBehavior;
              }

              namespace Nad {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Ngn {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Ngn.TaxBehavior;
              }

              namespace Ngn {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Nio {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Nio.TaxBehavior;
              }

              namespace Nio {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Nok {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Nok.TaxBehavior;
              }

              namespace Nok {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Npr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Npr.TaxBehavior;
              }

              namespace Npr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Nzd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Nzd.TaxBehavior;
              }

              namespace Nzd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Omr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Omr.TaxBehavior;
              }

              namespace Omr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Pab {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Pab.TaxBehavior;
              }

              namespace Pab {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Pen {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Pen.TaxBehavior;
              }

              namespace Pen {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Pgk {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Pgk.TaxBehavior;
              }

              namespace Pgk {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Php {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Php.TaxBehavior;
              }

              namespace Php {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Pkr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Pkr.TaxBehavior;
              }

              namespace Pkr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Pln {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Pln.TaxBehavior;
              }

              namespace Pln {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Pyg {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Pyg.TaxBehavior;
              }

              namespace Pyg {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Qar {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Qar.TaxBehavior;
              }

              namespace Qar {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Ron {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Ron.TaxBehavior;
              }

              namespace Ron {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Rsd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Rsd.TaxBehavior;
              }

              namespace Rsd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Rub {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Rub.TaxBehavior;
              }

              namespace Rub {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Rwf {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Rwf.TaxBehavior;
              }

              namespace Rwf {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Sar {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Sar.TaxBehavior;
              }

              namespace Sar {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Sbd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Sbd.TaxBehavior;
              }

              namespace Sbd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Scr {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Scr.TaxBehavior;
              }

              namespace Scr {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Sek {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Sek.TaxBehavior;
              }

              namespace Sek {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Sgd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Sgd.TaxBehavior;
              }

              namespace Sgd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Shp {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Shp.TaxBehavior;
              }

              namespace Shp {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Sll {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Sll.TaxBehavior;
              }

              namespace Sll {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Sos {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Sos.TaxBehavior;
              }

              namespace Sos {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Srd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Srd.TaxBehavior;
              }

              namespace Srd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Std {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Std.TaxBehavior;
              }

              namespace Std {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Szl {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Szl.TaxBehavior;
              }

              namespace Szl {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Thb {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Thb.TaxBehavior;
              }

              namespace Thb {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Tjs {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Tjs.TaxBehavior;
              }

              namespace Tjs {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Tnd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Tnd.TaxBehavior;
              }

              namespace Tnd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Top {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Top.TaxBehavior;
              }

              namespace Top {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Try {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Try.TaxBehavior;
              }

              namespace Try {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Ttd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Ttd.TaxBehavior;
              }

              namespace Ttd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Twd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Twd.TaxBehavior;
              }

              namespace Twd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Tzs {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Tzs.TaxBehavior;
              }

              namespace Tzs {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Uah {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Uah.TaxBehavior;
              }

              namespace Uah {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Ugx {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Ugx.TaxBehavior;
              }

              namespace Ugx {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Usd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Usd.TaxBehavior;
              }

              namespace Usd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Usdc {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Usdc.TaxBehavior;
              }

              namespace Usdc {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Uyu {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Uyu.TaxBehavior;
              }

              namespace Uyu {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Uzs {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Uzs.TaxBehavior;
              }

              namespace Uzs {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Vnd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Vnd.TaxBehavior;
              }

              namespace Vnd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Vuv {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Vuv.TaxBehavior;
              }

              namespace Vuv {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Wst {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Wst.TaxBehavior;
              }

              namespace Wst {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Xaf {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Xaf.TaxBehavior;
              }

              namespace Xaf {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Xcd {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Xcd.TaxBehavior;
              }

              namespace Xcd {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Xof {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Xof.TaxBehavior;
              }

              namespace Xof {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Xpf {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Xpf.TaxBehavior;
              }

              namespace Xpf {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Yer {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Yer.TaxBehavior;
              }

              namespace Yer {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Zar {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Zar.TaxBehavior;
              }

              namespace Zar {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }

              interface Zmw {
                /**
                 * A non-negative integer in cents representing how much to charge.
                 */
                amount: number;

                /**
                 * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                 */
                tax_behavior?: Zmw.TaxBehavior;
              }

              namespace Zmw {
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
              }
            }
          }

          type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
      }

      interface ShippingDetails {
        /**
         * The shipping address for the order.
         */
        address: ShippingDetails.Address;

        /**
         * The name of the recipient of the order.
         */
        name: string;

        /**
         * The phone number (including extension) for the recipient of the order.
         */
        phone?: string;
      }

      namespace ShippingDetails {
        interface Address extends Omit<Stripe.AddressParam, 'line1'> {
          line1?: string;
        }
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
           * Type of the tax ID, one of `ae_trn`, `au_abn`, `au_arn`, `bg_uic`, `br_cnpj`, `br_cpf`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `ch_vat`, `cl_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `hk_br`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `kr_brn`, `li_uid`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `no_vat`, `nz_gst`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `th_vat`, `tw_vat`, `ua_vat`, `us_ein`, or `za_vat`
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
