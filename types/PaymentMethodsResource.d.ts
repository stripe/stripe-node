// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface PaymentMethodCreateParams {
      /**
       * If this is an `acss_debit` PaymentMethod, this hash contains details about the ACSS Debit payment method.
       */
      acss_debit?: PaymentMethodCreateParams.AcssDebit;

      /**
       * If this is an `affirm` PaymentMethod, this hash contains details about the Affirm payment method.
       */
      affirm?: PaymentMethodCreateParams.Affirm;

      /**
       * If this is an `AfterpayClearpay` PaymentMethod, this hash contains details about the AfterpayClearpay payment method.
       */
      afterpay_clearpay?: PaymentMethodCreateParams.AfterpayClearpay;

      /**
       * If this is an `Alipay` PaymentMethod, this hash contains details about the Alipay payment method.
       */
      alipay?: PaymentMethodCreateParams.Alipay;

      /**
       * If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
       */
      au_becs_debit?: PaymentMethodCreateParams.AuBecsDebit;

      /**
       * If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
       */
      bacs_debit?: PaymentMethodCreateParams.BacsDebit;

      /**
       * If this is a `bancontact` PaymentMethod, this hash contains details about the Bancontact payment method.
       */
      bancontact?: PaymentMethodCreateParams.Bancontact;

      /**
       * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
       */
      billing_details?: PaymentMethodCreateParams.BillingDetails;

      /**
       * If this is a `blik` PaymentMethod, this hash contains details about the BLIK payment method.
       */
      blik?: PaymentMethodCreateParams.Blik;

      /**
       * If this is a `boleto` PaymentMethod, this hash contains details about the Boleto payment method.
       */
      boleto?: PaymentMethodCreateParams.Boleto;

      /**
       * If this is a `card` PaymentMethod, this hash contains the user's card details. For backwards compatibility, you can alternatively provide a Stripe token (e.g., for Apple Pay, Amex Express Checkout, or legacy Checkout) into the card hash with format `card: {token: "tok_visa"}`. When providing a card number, you must meet the requirements for [PCI compliance](https://stripe.com/docs/security#validating-pci-compliance). We strongly recommend using Stripe.js instead of interacting with this API directly.
       */
      card?: PaymentMethodCreateParams.Card1 | PaymentMethodCreateParams.Card2;

      /**
       * If this is a `cashapp` PaymentMethod, this hash contains details about the Cash App Pay payment method.
       */
      cashapp?: PaymentMethodCreateParams.Cashapp;

      /**
       * The `Customer` to whom the original PaymentMethod is attached.
       */
      customer?: string;

      /**
       * If this is a `customer_balance` PaymentMethod, this hash contains details about the CustomerBalance payment method.
       */
      customer_balance?: PaymentMethodCreateParams.CustomerBalance;

      /**
       * If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
       */
      eps?: PaymentMethodCreateParams.Eps;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
       */
      fpx?: PaymentMethodCreateParams.Fpx;

      /**
       * If this is a `giropay` PaymentMethod, this hash contains details about the Giropay payment method.
       */
      giropay?: PaymentMethodCreateParams.Giropay;

      /**
       * If this is a `grabpay` PaymentMethod, this hash contains details about the GrabPay payment method.
       */
      grabpay?: PaymentMethodCreateParams.Grabpay;

      /**
       * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
       */
      ideal?: PaymentMethodCreateParams.Ideal;

      /**
       * If this is an `interac_present` PaymentMethod, this hash contains details about the Interac Present payment method.
       */
      interac_present?: PaymentMethodCreateParams.InteracPresent;

      /**
       * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method.
       */
      klarna?: PaymentMethodCreateParams.Klarna;

      /**
       * If this is a `konbini` PaymentMethod, this hash contains details about the Konbini payment method.
       */
      konbini?: PaymentMethodCreateParams.Konbini;

      /**
       * If this is an `Link` PaymentMethod, this hash contains details about the Link payment method.
       */
      link?: PaymentMethodCreateParams.Link;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * If this is an `oxxo` PaymentMethod, this hash contains details about the OXXO payment method.
       */
      oxxo?: PaymentMethodCreateParams.Oxxo;

      /**
       * If this is a `p24` PaymentMethod, this hash contains details about the P24 payment method.
       */
      p24?: PaymentMethodCreateParams.P24;

      /**
       * The PaymentMethod to share.
       */
      payment_method?: string;

      /**
       * If this is a `paynow` PaymentMethod, this hash contains details about the PayNow payment method.
       */
      paynow?: PaymentMethodCreateParams.Paynow;

      /**
       * If this is a `paypal` PaymentMethod, this hash contains details about the PayPal payment method.
       */
      paypal?: PaymentMethodCreateParams.Paypal;

      /**
       * If this is a `pix` PaymentMethod, this hash contains details about the Pix payment method.
       */
      pix?: PaymentMethodCreateParams.Pix;

      /**
       * If this is a `promptpay` PaymentMethod, this hash contains details about the PromptPay payment method.
       */
      promptpay?: PaymentMethodCreateParams.Promptpay;

      /**
       * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
       */
      radar_options?: PaymentMethodCreateParams.RadarOptions;

      /**
       * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
       */
      sepa_debit?: PaymentMethodCreateParams.SepaDebit;

      /**
       * If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
       */
      sofort?: PaymentMethodCreateParams.Sofort;

      /**
       * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
       */
      type?: PaymentMethodCreateParams.Type;

      /**
       * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
       */
      us_bank_account?: PaymentMethodCreateParams.UsBankAccount;

      /**
       * If this is an `wechat_pay` PaymentMethod, this hash contains details about the wechat_pay payment method.
       */
      wechat_pay?: PaymentMethodCreateParams.WechatPay;

      /**
       * If this is a `zip` PaymentMethod, this hash contains details about the Zip payment method.
       */
      zip?: PaymentMethodCreateParams.Zip;
    }

    namespace PaymentMethodCreateParams {
      interface AcssDebit {
        /**
         * Customer's bank account number.
         */
        account_number: string;

        /**
         * Institution number of the customer's bank.
         */
        institution_number: string;

        /**
         * Transit number of the customer's bank.
         */
        transit_number: string;
      }

      interface Affirm {}

      interface AfterpayClearpay {}

      interface Alipay {}

      interface AuBecsDebit {
        /**
         * The account number for the bank account.
         */
        account_number: string;

        /**
         * Bank-State-Branch number of the bank account.
         */
        bsb_number: string;
      }

      interface BacsDebit {
        /**
         * Account number of the bank account that the funds will be debited from.
         */
        account_number?: string;

        /**
         * Sort code of the bank account. (e.g., `10-20-30`)
         */
        sort_code?: string;
      }

      interface Bancontact {}

      interface BillingDetails {
        /**
         * Billing address.
         */
        address?: Stripe.Emptyable<Stripe.AddressParam>;

        /**
         * Email address.
         */
        email?: Stripe.Emptyable<string>;

        /**
         * Full name.
         */
        name?: string;

        /**
         * Billing phone number (including extension).
         */
        phone?: string;
      }

      interface Blik {}

      interface Boleto {
        /**
         * The tax ID of the customer (CPF for individual consumers or CNPJ for businesses consumers)
         */
        tax_id: string;
      }

      interface Card1 {
        /**
         * The card's CVC. It is highly recommended to always include this value.
         */
        cvc?: string;

        /**
         * Two-digit number representing the card's expiration month.
         */
        exp_month: number;

        /**
         * Four-digit number representing the card's expiration year.
         */
        exp_year: number;

        /**
         * The card number, as a string without any separators.
         */
        number: string;
      }

      interface Card2 {
        token: string;
      }

      interface Cashapp {}

      interface CustomerBalance {}

      interface Eps {
        /**
         * The customer's bank.
         */
        bank?: Eps.Bank;
      }

      namespace Eps {
        type Bank =
          | 'arzte_und_apotheker_bank'
          | 'austrian_anadi_bank_ag'
          | 'bank_austria'
          | 'bankhaus_carl_spangler'
          | 'bankhaus_schelhammer_und_schattera_ag'
          | 'bawag_psk_ag'
          | 'bks_bank_ag'
          | 'brull_kallmus_bank_ag'
          | 'btv_vier_lander_bank'
          | 'capital_bank_grawe_gruppe_ag'
          | 'deutsche_bank_ag'
          | 'dolomitenbank'
          | 'easybank_ag'
          | 'erste_bank_und_sparkassen'
          | 'hypo_alpeadriabank_international_ag'
          | 'hypo_bank_burgenland_aktiengesellschaft'
          | 'hypo_noe_lb_fur_niederosterreich_u_wien'
          | 'hypo_oberosterreich_salzburg_steiermark'
          | 'hypo_tirol_bank_ag'
          | 'hypo_vorarlberg_bank_ag'
          | 'marchfelder_bank'
          | 'oberbank_ag'
          | 'raiffeisen_bankengruppe_osterreich'
          | 'schoellerbank_ag'
          | 'sparda_bank_wien'
          | 'volksbank_gruppe'
          | 'volkskreditbank_ag'
          | 'vr_bank_braunau';
      }

      interface Fpx {
        /**
         * Account holder type for FPX transaction
         */
        account_holder_type?: Fpx.AccountHolderType;

        /**
         * The customer's bank.
         */
        bank: Fpx.Bank;
      }

      namespace Fpx {
        type AccountHolderType = 'company' | 'individual';

        type Bank =
          | 'affin_bank'
          | 'agrobank'
          | 'alliance_bank'
          | 'ambank'
          | 'bank_islam'
          | 'bank_muamalat'
          | 'bank_of_china'
          | 'bank_rakyat'
          | 'bsn'
          | 'cimb'
          | 'deutsche_bank'
          | 'hong_leong_bank'
          | 'hsbc'
          | 'kfh'
          | 'maybank2e'
          | 'maybank2u'
          | 'ocbc'
          | 'pb_enterprise'
          | 'public_bank'
          | 'rhb'
          | 'standard_chartered'
          | 'uob';
      }

      interface Giropay {}

      interface Grabpay {}

      interface Ideal {
        /**
         * The customer's bank.
         */
        bank?: Ideal.Bank;
      }

      namespace Ideal {
        type Bank =
          | 'abn_amro'
          | 'asn_bank'
          | 'bunq'
          | 'handelsbanken'
          | 'ing'
          | 'knab'
          | 'moneyou'
          | 'rabobank'
          | 'regiobank'
          | 'revolut'
          | 'sns_bank'
          | 'triodos_bank'
          | 'van_lanschot'
          | 'yoursafe';
      }

      interface InteracPresent {}

      interface Klarna {
        /**
         * Customer's date of birth
         */
        dob?: Klarna.Dob;
      }

      namespace Klarna {
        interface Dob {
          /**
           * The day of birth, between 1 and 31.
           */
          day: number;

          /**
           * The month of birth, between 1 and 12.
           */
          month: number;

          /**
           * The four-digit year of birth.
           */
          year: number;
        }
      }

      interface Konbini {}

      interface Link {}

      interface Oxxo {}

      interface P24 {
        /**
         * The customer's bank.
         */
        bank?: P24.Bank;
      }

      namespace P24 {
        type Bank =
          | 'alior_bank'
          | 'bank_millennium'
          | 'bank_nowy_bfg_sa'
          | 'bank_pekao_sa'
          | 'banki_spbdzielcze'
          | 'blik'
          | 'bnp_paribas'
          | 'boz'
          | 'citi_handlowy'
          | 'credit_agricole'
          | 'envelobank'
          | 'etransfer_pocztowy24'
          | 'getin_bank'
          | 'ideabank'
          | 'ing'
          | 'inteligo'
          | 'mbank_mtransfer'
          | 'nest_przelew'
          | 'noble_pay'
          | 'pbac_z_ipko'
          | 'plus_bank'
          | 'santander_przelew24'
          | 'tmobile_usbugi_bankowe'
          | 'toyota_bank'
          | 'volkswagen_bank';
      }

      interface Paynow {}

      interface Paypal {}

      interface Pix {}

      interface Promptpay {}

      interface RadarOptions {
        /**
         * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
         */
        session?: string;
      }

      interface SepaDebit {
        /**
         * IBAN of the bank account.
         */
        iban: string;
      }

      interface Sofort {
        /**
         * Two-letter ISO code representing the country the bank account is located in.
         */
        country: Sofort.Country;
      }

      namespace Sofort {
        type Country = 'AT' | 'BE' | 'DE' | 'ES' | 'IT' | 'NL';
      }

      type Type =
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
        | 'paypal'
        | 'pix'
        | 'promptpay'
        | 'sepa_debit'
        | 'sofort'
        | 'us_bank_account'
        | 'wechat_pay'
        | 'zip';

      interface UsBankAccount {
        /**
         * Account holder type: individual or company.
         */
        account_holder_type?: UsBankAccount.AccountHolderType;

        /**
         * Account number of the bank account.
         */
        account_number?: string;

        /**
         * Account type: checkings or savings. Defaults to checking if omitted.
         */
        account_type?: UsBankAccount.AccountType;

        /**
         * The ID of a Financial Connections Account to use as a payment method.
         */
        financial_connections_account?: string;

        /**
         * Routing number of the bank account.
         */
        routing_number?: string;
      }

      namespace UsBankAccount {
        type AccountHolderType = 'company' | 'individual';

        type AccountType = 'checking' | 'savings';
      }

      interface WechatPay {}

      interface Zip {}
    }

    interface PaymentMethodRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PaymentMethodUpdateParams {
      /**
       * This is a legacy parameter that will be removed in the future. It is a hash that does not accept any keys.
       */
      acss_debit?: PaymentMethodUpdateParams.AcssDebit;

      /**
       * This is a legacy parameter that will be removed in the future. It is a hash that does not accept any keys.
       */
      affirm?: PaymentMethodUpdateParams.Affirm;

      /**
       * This is a legacy parameter that will be removed in the future. It is a hash that does not accept any keys.
       */
      au_becs_debit?: PaymentMethodUpdateParams.AuBecsDebit;

      /**
       * This is a legacy parameter that will be removed in the future. It is a hash that does not accept any keys.
       */
      bacs_debit?: PaymentMethodUpdateParams.BacsDebit;

      /**
       * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
       */
      billing_details?: PaymentMethodUpdateParams.BillingDetails;

      /**
       * This is a legacy parameter that will be removed in the future. It is a hash that does not accept any keys.
       */
      blik?: PaymentMethodUpdateParams.Blik;

      /**
       * If this is a `card` PaymentMethod, this hash contains the user's card details.
       */
      card?: PaymentMethodUpdateParams.Card;

      /**
       * This is a legacy parameter that will be removed in the future. It is a hash that does not accept any keys.
       */
      cashapp?: PaymentMethodUpdateParams.Cashapp;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * If this is an `Link` PaymentMethod, this hash contains details about the Link payment method.
       */
      link?: PaymentMethodUpdateParams.Link;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * This is a legacy parameter that will be removed in the future. It is a hash that does not accept any keys.
       */
      sepa_debit?: PaymentMethodUpdateParams.SepaDebit;

      /**
       * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
       */
      us_bank_account?: PaymentMethodUpdateParams.UsBankAccount;

      /**
       * This is a legacy parameter that will be removed in the future. It is a hash that does not accept any keys.
       */
      zip?: PaymentMethodUpdateParams.Zip;
    }

    namespace PaymentMethodUpdateParams {
      interface AcssDebit {}

      interface Affirm {}

      interface AuBecsDebit {}

      interface BacsDebit {}

      interface BillingDetails {
        /**
         * Billing address.
         */
        address?: Stripe.Emptyable<Stripe.AddressParam>;

        /**
         * Email address.
         */
        email?: Stripe.Emptyable<string>;

        /**
         * Full name.
         */
        name?: string;

        /**
         * Billing phone number (including extension).
         */
        phone?: string;
      }

      interface Blik {}

      interface Card {
        /**
         * Two-digit number representing the card's expiration month.
         */
        exp_month?: number;

        /**
         * Four-digit number representing the card's expiration year.
         */
        exp_year?: number;
      }

      interface Cashapp {}

      interface Link {}

      interface SepaDebit {}

      interface UsBankAccount {
        /**
         * Bank account type.
         */
        account_holder_type?: UsBankAccount.AccountHolderType;
      }

      namespace UsBankAccount {
        type AccountHolderType = 'company' | 'individual';
      }

      interface Zip {}
    }

    interface PaymentMethodListParams extends PaginationParams {
      /**
       * The ID of the customer whose PaymentMethods will be retrieved.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * An optional filter on the list, based on the object `type` field. Without the filter, the list includes all current and future payment method types. If your integration expects only one type of payment method in the response, make sure to provide a type value in the request.
       */
      type?: PaymentMethodListParams.Type;
    }

    namespace PaymentMethodListParams {
      type Type =
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
        | 'card_present'
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
        | 'paypal'
        | 'pix'
        | 'promptpay'
        | 'sepa_debit'
        | 'sofort'
        | 'us_bank_account'
        | 'wechat_pay'
        | 'zip';
    }

    interface PaymentMethodAttachParams {
      /**
       * The ID of the customer to which to attach the PaymentMethod.
       */
      customer: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PaymentMethodDetachParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class PaymentMethodsResource {
      /**
       * Creates a PaymentMethod object. Read the [Stripe.js reference](https://stripe.com/docs/stripe-js/reference#stripe-create-payment-method) to learn how to create PaymentMethods via Stripe.js.
       *
       * Instead of creating a PaymentMethod directly, we recommend using the [PaymentIntents API to accept a payment immediately or the <a href="/docs/payments/save-and-reuse">SetupIntent](https://stripe.com/docs/payments/accept-a-payment) API to collect payment method details ahead of a future payment.
       */
      create(
        params?: PaymentMethodCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentMethod>>;
      create(
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentMethod>>;

      /**
       * Retrieves a PaymentMethod object attached to the StripeAccount. To retrieve a payment method attached to a Customer, you should use [Retrieve a Customer's PaymentMethods](https://stripe.com/docs/api/payment_methods/customer)
       */
      retrieve(
        id: string,
        params?: PaymentMethodRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentMethod>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentMethod>>;

      /**
       * Updates a PaymentMethod object. A PaymentMethod must be attached a customer to be updated.
       */
      update(
        id: string,
        params?: PaymentMethodUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentMethod>>;

      /**
       * Returns a list of PaymentMethods for Treasury flows. If you want to list the PaymentMethods attached to a Customer for payments, you should use the [List a Customer's PaymentMethods](https://stripe.com/docs/api/payment_methods/customer_list) API instead.
       */
      list(
        params?: PaymentMethodListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.PaymentMethod>;
      list(options?: RequestOptions): ApiListPromise<Stripe.PaymentMethod>;

      /**
       * Attaches a PaymentMethod object to a Customer.
       *
       * To attach a new PaymentMethod to a customer for future payments, we recommend you use a [SetupIntent](https://stripe.com/docs/api/setup_intents)
       * or a PaymentIntent with [setup_future_usage](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-setup_future_usage).
       * These approaches will perform any necessary steps to set up the PaymentMethod for future payments. Using the /v1/payment_methods/:id/attach
       * endpoint without first using a SetupIntent or PaymentIntent with setup_future_usage does not optimize the PaymentMethod for
       * future use, which makes later declines and payment friction more likely.
       * See [Optimizing cards for future payments](https://stripe.com/docs/payments/payment-intents#future-usage) for more information about setting up
       * future payments.
       *
       * To use this PaymentMethod as the default for invoice or subscription payments,
       * set [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method),
       * on the Customer to the PaymentMethod's ID.
       */
      attach(
        id: string,
        params: PaymentMethodAttachParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentMethod>>;

      /**
       * Detaches a PaymentMethod object from a Customer. After a PaymentMethod is detached, it can no longer be used for a payment or re-attached to a Customer.
       */
      detach(
        id: string,
        params?: PaymentMethodDetachParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentMethod>>;
      detach(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentMethod>>;
    }
  }
}
