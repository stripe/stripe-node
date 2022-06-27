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
         * Results of `consent_collection` for this session.
         */
        consent: Session.Consent | null;

        /**
         * When set, provides configuration for the Checkout Session to gather active consent from customers.
         */
        consent_collection: Session.ConsentCollection | null;

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
         * Configure whether a Checkout Session creates a Customer when the Checkout Session completes.
         */
        customer_creation: Session.CustomerCreation | null;

        /**
         * The customer details including the customer's tax exempt status and the customer's tax IDs. Only the customer's email is present on Sessions in `setup` mode.
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
         * The timestamp at which the Checkout Session will expire.
         */
        expires_at: number;

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
         * The ID of the Payment Link that created this Session.
         */
        payment_link: string | Stripe.PaymentLink | null;

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

        phone_number_collection?: Session.PhoneNumberCollection;

        /**
         * The ID of the original expired Checkout Session that triggered the recovery flow.
         */
        recovered_from: string | null;

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
         * The shipping rate options applied to this Session.
         */
        shipping_options: Array<Session.ShippingOption>;

        /**
         * The ID of the ShippingRate for Checkout Sessions in `payment` mode.
         */
        shipping_rate: string | Stripe.ShippingRate | null;

        /**
         * The status of the Checkout Session, one of `open`, `complete`, or `expired`.
         */
        status: Session.Status | null;

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

        tax_id_collection?: Session.TaxIdCollection;

        /**
         * Tax and discount details for the computed total amount.
         */
        total_details: Session.TotalDetails | null;

        /**
         * The URL to the Checkout Session. Redirect customers to this URL to take them to Checkout. If you're using [Custom Domains](https://stripe.com/docs/payments/checkout/custom-domains), the URL will use your subdomain. Otherwise, it'll use `checkout.stripe.com.`
         */
        url: string | null;
      }

      namespace Session {
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
           * The status of the most recent automated tax calculation for this session.
           */
          status: AutomaticTax.Status | null;
        }

        namespace AutomaticTax {
          type Status = 'complete' | 'failed' | 'requires_location_inputs';
        }

        type BillingAddressCollection = 'auto' | 'required';

        interface Consent {
          /**
           * If `opt_in`, the customer consents to receiving promotional communications
           * from the merchant about this Checkout Session.
           */
          promotions: Consent.Promotions | null;
        }

        namespace Consent {
          type Promotions = 'opt_in' | 'opt_out';
        }

        interface ConsentCollection {
          /**
           * If set to `auto`, enables the collection of customer consent for promotional communications. The Checkout
           * Session will determine whether to display an option to opt into promotional communication
           * from the merchant depending on the customer's locale. Only available to US merchants.
           */
          promotions: 'auto' | null;
        }

        type CustomerCreation = 'always' | 'if_required';

        interface CustomerDetails {
          /**
           * The customer's address at the time of checkout. Note: This property is populated only for sessions on or after March 30, 2022.
           */
          address: Stripe.Address | null;

          /**
           * The email associated with the Customer, if one exists, on the Checkout Session at the time of checkout or at time of session expiry.
           * Otherwise, if the customer has consented to promotional content, this value is the most recent valid email provided by the customer on the Checkout form.
           */
          email: string | null;

          /**
           * The customer's name at the time of checkout. Note: This property is populated only for sessions on or after March 30, 2022.
           */
          name: string | null;

          /**
           * The customer's phone number at the time of checkout
           */
          phone: string | null;

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

        interface PaymentMethodOptions {
          acss_debit?: PaymentMethodOptions.AcssDebit;

          affirm?: PaymentMethodOptions.Affirm;

          afterpay_clearpay?: PaymentMethodOptions.AfterpayClearpay;

          alipay?: PaymentMethodOptions.Alipay;

          au_becs_debit?: PaymentMethodOptions.AuBecsDebit;

          bacs_debit?: PaymentMethodOptions.BacsDebit;

          bancontact?: PaymentMethodOptions.Bancontact;

          boleto?: PaymentMethodOptions.Boleto;

          card?: PaymentMethodOptions.Card;

          eps?: PaymentMethodOptions.Eps;

          fpx?: PaymentMethodOptions.Fpx;

          giropay?: PaymentMethodOptions.Giropay;

          grabpay?: PaymentMethodOptions.Grabpay;

          ideal?: PaymentMethodOptions.Ideal;

          klarna?: PaymentMethodOptions.Klarna;

          konbini?: PaymentMethodOptions.Konbini;

          oxxo?: PaymentMethodOptions.Oxxo;

          p24?: PaymentMethodOptions.P24;

          paynow?: PaymentMethodOptions.Paynow;

          sepa_debit?: PaymentMethodOptions.SepaDebit;

          sofort?: PaymentMethodOptions.Sofort;

          us_bank_account?: PaymentMethodOptions.UsBankAccount;
        }

        namespace PaymentMethodOptions {
          interface AcssDebit {
            currency?: string;

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
             * The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto voucher will expire on Wednesday at 23:59 America/Sao_Paulo time.
             */
            expires_after_days: number;

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
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
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
             * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
             *
             * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
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
             * Bank account verification method.
             */
            verification_method?: UsBankAccount.VerificationMethod;
          }

          namespace UsBankAccount {
            interface FinancialConnections {
              /**
               * The list of permissions to request. The `payment_method` permission must be included.
               */
              permissions?: Array<FinancialConnections.Permission>;

              /**
               * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
               */
              return_url?: string;
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
        }

        type PaymentStatus = 'no_payment_required' | 'paid' | 'unpaid';

        interface PhoneNumberCollection {
          /**
           * Indicates whether phone number collection is enabled for the session
           */
          enabled: boolean;
        }

        interface Shipping {
          address?: Stripe.Address;

          /**
           * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
           */
          carrier?: string | null;

          /**
           * Recipient name.
           */
          name?: string;

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

        type SubmitType = 'auto' | 'book' | 'donate' | 'pay';

        interface TaxIdCollection {
          /**
           * Indicates whether tax ID collection is enabled for the session
           */
          enabled: boolean;
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

      interface SessionCreateParams {
        /**
         * The URL the customer will be directed to if they decide to cancel payment and return to your website.
         */
        cancel_url: string;

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
         * Sessions that don't create Customers instead create [Guest Customers](https://support.stripe.com/questions/guest-customer-faq)
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
         * The Epoch time in seconds at which the Checkout Session will expire. It can be anywhere from 1 to 24 hours after Checkout Session creation. By default, this value is 24 hours from creation.
         */
        expires_at?: number;

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
         * A list of the types of payment methods (e.g., `card`) this Checkout Session can accept.
         *
         * Do not include this attribute if you prefer to manage your payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
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
          promotions?: 'auto';
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
           * [Deprecated] The amount to be collected per unit of the line item. If specified, must also pass `currency` and `name`.
           */
          amount?: number;

          /**
           * [Deprecated] Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). Required if `amount` is passed.
           */
          currency?: string;

          /**
           * [Deprecated] The description for the line item, to be displayed on the Checkout page.
           */
          description?: string;

          /**
           * The [tax rates](https://stripe.com/docs/api/tax_rates) that will be applied to this line item depending on the customer's billing/shipping address. We currently support the following countries: US, GB, AU, and all countries in the EU.
           */
          dynamic_tax_rates?: Array<string>;

          /**
           * [Deprecated] A list of image URLs representing this line item. Each image can be up to 5 MB in size. If passing `price` or `price_data`, specify images on the associated product instead.
           */
          images?: Array<string>;

          /**
           * [Deprecated] The name for the item to be displayed on the Checkout page. Required if `amount` is passed.
           */
          name?: string;

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
             * The maximum quantity the customer can purchase for the Checkout Session. By default this value is 99. You can specify a value up to 999.
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
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
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
           * contains details about the EPS payment method options.
           */
          eps?: PaymentMethodOptions.Eps;

          /**
           * contains details about the EPS payment method options.
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
            type SetupFutureUsage = 'off_session' | 'on_session';
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

            /**
             * Confirm that the payer has accepted the P24 terms and conditions.
             */
            tos_shown_and_accepted?: boolean;
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
          | 'boleto'
          | 'card'
          | 'eps'
          | 'fpx'
          | 'giropay'
          | 'grabpay'
          | 'ideal'
          | 'klarna'
          | 'konbini'
          | 'oxxo'
          | 'p24'
          | 'paynow'
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
           * The subscription's description, meant to be displayable to the customer.
           * Use this field to optionally store an explanation of the subscription
           * for rendering in Stripe hosted surfaces.
           */
          description?: string;

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

      interface SessionExpireParams {
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
