// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        /**
         * A V2 Account is a representation of a company or individual that a Stripe user does business with. Accounts contain the contact details, Legal Entity information, and configuration required to enable the Account for use across Stripe products.
         */
        interface Account {
          /**
           * Unique identifier for the Account.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.core.account';

          /**
           * Filter only accounts that have all of the configurations specified. If omitted, returns all accounts regardless of which configurations they have.
           */
          applied_configurations: Array<Account.AppliedConfiguration>;

          /**
           * An Account Configuration which allows the Account to take on a key persona across Stripe products.
           */
          configuration: Account.Configuration | null;

          /**
           * The default contact email address for the Account. Required when configuring the account as a merchant or recipient.
           */
          contact_email: string | null;

          /**
           * Time at which the object was created. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
           */
          created: string;

          /**
           * A value indicating the Stripe dashboard this Account has access to. This will depend on which configurations are enabled for this account.
           */
          dashboard: Account.Dashboard | null;

          /**
           * Default values to be used on Account Configurations.
           */
          defaults: Account.Defaults | null;

          /**
           * A descriptive name for the Account. This name will be surfaced in the Stripe Dashboard and on any invoices sent to the Account.
           */
          display_name: string | null;

          /**
           * Information about the company, individual, and business represented by the Account.
           */
          identity: Account.Identity | null;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata: Stripe.Metadata | null;

          /**
           * Information about the requirements for the Account, including what information needs to be collected, and by when.
           */
          requirements: Account.Requirements | null;
        }

        namespace Account {
          type AppliedConfiguration = 'customer' | 'merchant' | 'recipient';

          interface Configuration {
            /**
             * The Customer Configuration allows the Account to be used in inbound payment flows.
             */
            customer: Configuration.Customer | null;

            /**
             * The Merchant configuration allows the Account to act as a connected account and collect payments facilitated by a Connect platform. You can add this configuration to your connected accounts only if you've completed onboarding as a Connect platform.
             */
            merchant: Configuration.Merchant | null;

            /**
             * The Recipient Configuration allows the Account to receive funds.
             */
            recipient: Configuration.Recipient | null;
          }

          namespace Configuration {
            interface Customer {
              /**
               * Automatic indirect tax settings to be used when automatic tax calculation is enabled on the customer's invoices, subscriptions, checkout sessions, or payment links. Surfaces if automatic tax calculation is possible given the current customer location information.
               */
              automatic_indirect_tax: Customer.AutomaticIndirectTax | null;

              /**
               * Billing settings - default settings used for this customer in Billing flows such as Invoices and Subscriptions.
               */
              billing: Customer.Billing | null;

              /**
               * Capabilities that have been requested on the Customer Configuration.
               */
              capabilities: Customer.Capabilities | null;

              /**
               * The customer's shipping information. Appears on invoices emailed to this customer.
               */
              shipping: Customer.Shipping | null;

              /**
               * ID of the test clock to attach to the customer. Can only be set on testmode Accounts, and when the Customer Configuration is first set on an Account.
               */
              test_clock: string | null;
            }

            namespace Customer {
              interface AutomaticIndirectTax {
                /**
                 * Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. When set to reverse, invoice and receipt PDFs include the following text: “Reverse charge”.
                 */
                exempt: AutomaticIndirectTax.Exempt | null;

                /**
                 * A recent IP address of the customer used for tax reporting and tax location inference.
                 */
                ip_address: string | null;

                /**
                 * The customer's location as identified by Stripe Tax - uses `location_source`. Will only be rendered if the `automatic_indirect_tax` feature is requested and `active`.
                 */
                location: AutomaticIndirectTax.Location | null;

                /**
                 * The data source used by Stripe Tax to identify the customer's location - defaults to 'identity_address'. Will only be used for automatic tax calculation on the customer's Invoices and Subscriptions.
                 */
                location_source: AutomaticIndirectTax.LocationSource | null;
              }

              namespace AutomaticIndirectTax {
                type Exempt = 'exempt' | 'none' | 'reverse';

                interface Location {
                  /**
                   * The customer's country as identified by Stripe Tax.
                   */
                  country: Location.Country | null;

                  /**
                   * The customer's state, county, province, or region as identified by Stripe Tax.
                   */
                  state: string | null;
                }

                namespace Location {
                  type Country =
                    | 'ad'
                    | 'ae'
                    | 'af'
                    | 'ag'
                    | 'ai'
                    | 'al'
                    | 'am'
                    | 'ao'
                    | 'aq'
                    | 'ar'
                    | 'as'
                    | 'at'
                    | 'au'
                    | 'aw'
                    | 'ax'
                    | 'az'
                    | 'ba'
                    | 'bb'
                    | 'bd'
                    | 'be'
                    | 'bf'
                    | 'bg'
                    | 'bh'
                    | 'bi'
                    | 'bj'
                    | 'bl'
                    | 'bm'
                    | 'bn'
                    | 'bo'
                    | 'bq'
                    | 'br'
                    | 'bs'
                    | 'bt'
                    | 'bv'
                    | 'bw'
                    | 'by'
                    | 'bz'
                    | 'ca'
                    | 'cc'
                    | 'cd'
                    | 'cf'
                    | 'cg'
                    | 'ch'
                    | 'ci'
                    | 'ck'
                    | 'cl'
                    | 'cm'
                    | 'cn'
                    | 'co'
                    | 'cr'
                    | 'cu'
                    | 'cv'
                    | 'cw'
                    | 'cx'
                    | 'cy'
                    | 'cz'
                    | 'de'
                    | 'dj'
                    | 'dk'
                    | 'dm'
                    | 'do'
                    | 'dz'
                    | 'ec'
                    | 'ee'
                    | 'eg'
                    | 'eh'
                    | 'er'
                    | 'es'
                    | 'et'
                    | 'fi'
                    | 'fj'
                    | 'fk'
                    | 'fm'
                    | 'fo'
                    | 'fr'
                    | 'ga'
                    | 'gb'
                    | 'gd'
                    | 'ge'
                    | 'gf'
                    | 'gg'
                    | 'gh'
                    | 'gi'
                    | 'gl'
                    | 'gm'
                    | 'gn'
                    | 'gp'
                    | 'gq'
                    | 'gr'
                    | 'gs'
                    | 'gt'
                    | 'gu'
                    | 'gw'
                    | 'gy'
                    | 'hk'
                    | 'hm'
                    | 'hn'
                    | 'hr'
                    | 'ht'
                    | 'hu'
                    | 'id'
                    | 'ie'
                    | 'il'
                    | 'im'
                    | 'in'
                    | 'io'
                    | 'iq'
                    | 'ir'
                    | 'is'
                    | 'it'
                    | 'je'
                    | 'jm'
                    | 'jo'
                    | 'jp'
                    | 'ke'
                    | 'kg'
                    | 'kh'
                    | 'ki'
                    | 'km'
                    | 'kn'
                    | 'kp'
                    | 'kr'
                    | 'kw'
                    | 'ky'
                    | 'kz'
                    | 'la'
                    | 'lb'
                    | 'lc'
                    | 'li'
                    | 'lk'
                    | 'lr'
                    | 'ls'
                    | 'lt'
                    | 'lu'
                    | 'lv'
                    | 'ly'
                    | 'ma'
                    | 'mc'
                    | 'md'
                    | 'me'
                    | 'mf'
                    | 'mg'
                    | 'mh'
                    | 'mk'
                    | 'ml'
                    | 'mm'
                    | 'mn'
                    | 'mo'
                    | 'mp'
                    | 'mq'
                    | 'mr'
                    | 'ms'
                    | 'mt'
                    | 'mu'
                    | 'mv'
                    | 'mw'
                    | 'mx'
                    | 'my'
                    | 'mz'
                    | 'na'
                    | 'nc'
                    | 'ne'
                    | 'nf'
                    | 'ng'
                    | 'ni'
                    | 'nl'
                    | 'no'
                    | 'np'
                    | 'nr'
                    | 'nu'
                    | 'nz'
                    | 'om'
                    | 'pa'
                    | 'pe'
                    | 'pf'
                    | 'pg'
                    | 'ph'
                    | 'pk'
                    | 'pl'
                    | 'pm'
                    | 'pn'
                    | 'pr'
                    | 'ps'
                    | 'pt'
                    | 'pw'
                    | 'py'
                    | 'qa'
                    | 'qz'
                    | 're'
                    | 'ro'
                    | 'rs'
                    | 'ru'
                    | 'rw'
                    | 'sa'
                    | 'sb'
                    | 'sc'
                    | 'sd'
                    | 'se'
                    | 'sg'
                    | 'sh'
                    | 'si'
                    | 'sj'
                    | 'sk'
                    | 'sl'
                    | 'sm'
                    | 'sn'
                    | 'so'
                    | 'sr'
                    | 'ss'
                    | 'st'
                    | 'sv'
                    | 'sx'
                    | 'sy'
                    | 'sz'
                    | 'tc'
                    | 'td'
                    | 'tf'
                    | 'tg'
                    | 'th'
                    | 'tj'
                    | 'tk'
                    | 'tl'
                    | 'tm'
                    | 'tn'
                    | 'to'
                    | 'tr'
                    | 'tt'
                    | 'tv'
                    | 'tw'
                    | 'tz'
                    | 'ua'
                    | 'ug'
                    | 'um'
                    | 'us'
                    | 'uy'
                    | 'uz'
                    | 'va'
                    | 'vc'
                    | 've'
                    | 'vg'
                    | 'vi'
                    | 'vn'
                    | 'vu'
                    | 'wf'
                    | 'ws'
                    | 'ye'
                    | 'yt'
                    | 'za'
                    | 'zm'
                    | 'zw';
                }

                type LocationSource =
                  | 'identity_address'
                  | 'ip_address'
                  | 'shipping_address';
              }

              interface Billing {
                /**
                 * ID of a payment method that's attached to the customer, to be used as the customer's default payment method for invoices and subscriptions.
                 */
                default_payment_method: string | null;

                /**
                 * Default settings used on invoices for this customer.
                 */
                invoice: Billing.Invoice | null;
              }

              namespace Billing {
                interface Invoice {
                  /**
                   * The list of up to 4 default custom fields to be displayed on invoices for this customer. When updating, pass an empty string to remove previously-defined fields.
                   */
                  custom_fields: Array<Invoice.CustomField>;

                  /**
                   * Default footer to be displayed on invoices for this customer.
                   */
                  footer: string | null;

                  /**
                   * The sequence to be used on the customer's next invoice. Defaults to 1.
                   */
                  next_sequence: number | null;

                  /**
                   * The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
                   */
                  prefix: string | null;

                  /**
                   * Default options for invoice PDF rendering for this customer.
                   */
                  rendering: Invoice.Rendering | null;
                }

                namespace Invoice {
                  interface CustomField {
                    /**
                     * The name of the custom field. This may be up to 40 characters.
                     */
                    name: string;

                    /**
                     * The value of the custom field. This may be up to 140 characters. When updating, pass an empty string to remove previously-defined values.
                     */
                    value: string;
                  }

                  interface Rendering {
                    /**
                     * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs. One of exclude_tax or include_inclusive_tax. include_inclusive_tax will include inclusive tax (and exclude exclusive tax) in invoice PDF amounts. exclude_tax will exclude all tax (inclusive and exclusive alike) from invoice PDF amounts.
                     */
                    amount_tax_display: Rendering.AmountTaxDisplay | null;

                    /**
                     * ID of the invoice rendering template to use for future invoices.
                     */
                    template: string | null;
                  }

                  namespace Rendering {
                    type AmountTaxDisplay =
                      | 'exclude_tax'
                      | 'include_inclusive_tax';
                  }
                }
              }

              interface Capabilities {
                /**
                 * Generates requirements for enabling automatic indirect tax calculation on this customer's invoices or subscriptions. Recommended to request this capability if planning to enable automatic tax calculation on this customer's invoices or subscriptions. Uses the `location_source` field.
                 */
                automatic_indirect_tax: Capabilities.AutomaticIndirectTax | null;
              }

              namespace Capabilities {
                interface AutomaticIndirectTax {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: AutomaticIndirectTax.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<AutomaticIndirectTax.StatusDetail>;
                }

                namespace AutomaticIndirectTax {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }
              }

              interface Shipping {
                /**
                 * Customer shipping address.
                 */
                address: Stripe.Address | null;

                /**
                 * Customer name.
                 */
                name: string | null;

                /**
                 * Customer phone (including extension).
                 */
                phone: string | null;
              }
            }

            interface Merchant {
              /**
               * Settings used for Bacs debit payments.
               */
              bacs_debit_payments: Merchant.BacsDebitPayments | null;

              /**
               * Settings used to apply the merchant's branding to email receipts, invoices, Checkout, and other products.
               */
              branding: Merchant.Branding | null;

              /**
               * Capabilities that have been requested on the Merchant Configuration.
               */
              capabilities: Merchant.Capabilities | null;

              /**
               * Card payments settings.
               */
              card_payments: Merchant.CardPayments | null;

              /**
               * The merchant category code for the merchant. MCCs are used to classify businesses based on the goods or services they provide.
               */
              mcc: string | null;

              /**
               * Settings used for SEPA debit payments.
               */
              sepa_debit_payments: Merchant.SepaDebitPayments | null;

              /**
               * Statement descriptor.
               */
              statement_descriptor: Merchant.StatementDescriptor | null;

              /**
               * Publicly available contact information for sending support issues to.
               */
              support: Merchant.Support | null;
            }

            namespace Merchant {
              interface BacsDebitPayments {
                /**
                 * Display name for Bacs debit payments.
                 */
                display_name: string | null;

                /**
                 * Service user number for Bacs debit payments.
                 */
                service_user_number: string | null;
              }

              interface Branding {
                /**
                 * ID of a [file upload](https://docs.stripe.com/api/persons/update#create_file): An icon for the merchant. Must be square and at least 128px x 128px.
                 */
                icon: string | null;

                /**
                 * ID of a [file upload](https://docs.stripe.com/api/persons/update#create_file): A logo for the merchant that will be used in Checkout instead of the icon and without the merchant's name next to it if provided. Must be at least 128px x 128px.
                 */
                logo: string | null;

                /**
                 * A CSS hex color value representing the primary branding color for the merchant.
                 */
                primary_color: string | null;

                /**
                 * A CSS hex color value representing the secondary branding color for the merchant.
                 */
                secondary_color: string | null;
              }

              interface Capabilities {
                /**
                 * Allow the merchant to process ACH debit payments.
                 */
                ach_debit_payments: Capabilities.AchDebitPayments | null;

                /**
                 * Allow the merchant to process ACSS debit payments.
                 */
                acss_debit_payments: Capabilities.AcssDebitPayments | null;

                /**
                 * Allow the merchant to process Affirm payments.
                 */
                affirm_payments: Capabilities.AffirmPayments | null;

                /**
                 * Allow the merchant to process Afterpay/Clearpay payments.
                 */
                afterpay_clearpay_payments: Capabilities.AfterpayClearpayPayments | null;

                /**
                 * Allow the merchant to process Alma payments.
                 */
                alma_payments: Capabilities.AlmaPayments | null;

                /**
                 * Allow the merchant to process Amazon Pay payments.
                 */
                amazon_pay_payments: Capabilities.AmazonPayPayments | null;

                /**
                 * Allow the merchant to process Australian BECS Direct Debit payments.
                 */
                au_becs_debit_payments: Capabilities.AuBecsDebitPayments | null;

                /**
                 * Allow the merchant to process BACS Direct Debit payments.
                 */
                bacs_debit_payments: Capabilities.BacsDebitPayments | null;

                /**
                 * Allow the merchant to process Bancontact payments.
                 */
                bancontact_payments: Capabilities.BancontactPayments | null;

                /**
                 * Allow the merchant to process BLIK payments.
                 */
                blik_payments: Capabilities.BlikPayments | null;

                /**
                 * Allow the merchant to process Boleto payments.
                 */
                boleto_payments: Capabilities.BoletoPayments | null;

                /**
                 * Allow the merchant to collect card payments.
                 */
                card_payments: Capabilities.CardPayments | null;

                /**
                 * Allow the merchant to process Cartes Bancaires payments.
                 */
                cartes_bancaires_payments: Capabilities.CartesBancairesPayments | null;

                /**
                 * Allow the merchant to process Cash App payments.
                 */
                cashapp_payments: Capabilities.CashappPayments | null;

                /**
                 * Allow the merchant to process EPS payments.
                 */
                eps_payments: Capabilities.EpsPayments | null;

                /**
                 * Allow the merchant to process FPX payments.
                 */
                fpx_payments: Capabilities.FpxPayments | null;

                /**
                 * Allow the merchant to process UK bank transfer payments.
                 */
                gb_bank_transfer_payments: Capabilities.GbBankTransferPayments | null;

                /**
                 * Allow the merchant to process GrabPay payments.
                 */
                grabpay_payments: Capabilities.GrabpayPayments | null;

                /**
                 * Allow the merchant to process iDEAL payments.
                 */
                ideal_payments: Capabilities.IdealPayments | null;

                /**
                 * Allow the merchant to process JCB card payments.
                 */
                jcb_payments: Capabilities.JcbPayments | null;

                /**
                 * Allow the merchant to process Japanese bank transfer payments.
                 */
                jp_bank_transfer_payments: Capabilities.JpBankTransferPayments | null;

                /**
                 * Allow the merchant to process Kakao Pay payments.
                 */
                kakao_pay_payments: Capabilities.KakaoPayPayments | null;

                /**
                 * Allow the merchant to process Klarna payments.
                 */
                klarna_payments: Capabilities.KlarnaPayments | null;

                /**
                 * Allow the merchant to process Konbini convenience store payments.
                 */
                konbini_payments: Capabilities.KonbiniPayments | null;

                /**
                 * Allow the merchant to process Korean card payments.
                 */
                kr_card_payments: Capabilities.KrCardPayments | null;

                /**
                 * Allow the merchant to process Link payments.
                 */
                link_payments: Capabilities.LinkPayments | null;

                /**
                 * Allow the merchant to process MobilePay payments.
                 */
                mobilepay_payments: Capabilities.MobilepayPayments | null;

                /**
                 * Allow the merchant to process Multibanco payments.
                 */
                multibanco_payments: Capabilities.MultibancoPayments | null;

                /**
                 * Allow the merchant to process Mexican bank transfer payments.
                 */
                mx_bank_transfer_payments: Capabilities.MxBankTransferPayments | null;

                /**
                 * Allow the merchant to process Naver Pay payments.
                 */
                naver_pay_payments: Capabilities.NaverPayPayments | null;

                /**
                 * Allow the merchant to process OXXO payments.
                 */
                oxxo_payments: Capabilities.OxxoPayments | null;

                /**
                 * Allow the merchant to process Przelewy24 (P24) payments.
                 */
                p24_payments: Capabilities.P24Payments | null;

                /**
                 * Allow the merchant to process Pay by Bank payments.
                 */
                pay_by_bank_payments: Capabilities.PayByBankPayments | null;

                /**
                 * Allow the merchant to process PAYCO payments.
                 */
                payco_payments: Capabilities.PaycoPayments | null;

                /**
                 * Allow the merchant to process PayNow payments.
                 */
                paynow_payments: Capabilities.PaynowPayments | null;

                /**
                 * Allow the merchant to process PromptPay payments.
                 */
                promptpay_payments: Capabilities.PromptpayPayments | null;

                /**
                 * Allow the merchant to process Revolut Pay payments.
                 */
                revolut_pay_payments: Capabilities.RevolutPayPayments | null;

                /**
                 * Allow the merchant to process Samsung Pay payments.
                 */
                samsung_pay_payments: Capabilities.SamsungPayPayments | null;

                /**
                 * Allow the merchant to process SEPA bank transfer payments.
                 */
                sepa_bank_transfer_payments: Capabilities.SepaBankTransferPayments | null;

                /**
                 * Allow the merchant to process SEPA Direct Debit payments.
                 */
                sepa_debit_payments: Capabilities.SepaDebitPayments | null;

                /**
                 * Allow the merchant to process Swish payments.
                 */
                swish_payments: Capabilities.SwishPayments | null;

                /**
                 * Allow the merchant to process TWINT payments.
                 */
                twint_payments: Capabilities.TwintPayments | null;

                /**
                 * Allow the merchant to process US bank transfer payments.
                 */
                us_bank_transfer_payments: Capabilities.UsBankTransferPayments | null;

                /**
                 * Allow the merchant to process Zip payments.
                 */
                zip_payments: Capabilities.ZipPayments | null;
              }

              namespace Capabilities {
                interface AchDebitPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: AchDebitPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<AchDebitPayments.StatusDetail>;
                }

                namespace AchDebitPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface AcssDebitPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: AcssDebitPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<AcssDebitPayments.StatusDetail>;
                }

                namespace AcssDebitPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface AffirmPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: AffirmPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<AffirmPayments.StatusDetail>;
                }

                namespace AffirmPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface AfterpayClearpayPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: AfterpayClearpayPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<AfterpayClearpayPayments.StatusDetail>;
                }

                namespace AfterpayClearpayPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface AlmaPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: AlmaPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<AlmaPayments.StatusDetail>;
                }

                namespace AlmaPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface AmazonPayPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: AmazonPayPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<AmazonPayPayments.StatusDetail>;
                }

                namespace AmazonPayPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface AuBecsDebitPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: AuBecsDebitPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<AuBecsDebitPayments.StatusDetail>;
                }

                namespace AuBecsDebitPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface BacsDebitPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: BacsDebitPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<BacsDebitPayments.StatusDetail>;
                }

                namespace BacsDebitPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface BancontactPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: BancontactPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<BancontactPayments.StatusDetail>;
                }

                namespace BancontactPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface BlikPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: BlikPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<BlikPayments.StatusDetail>;
                }

                namespace BlikPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface BoletoPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: BoletoPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<BoletoPayments.StatusDetail>;
                }

                namespace BoletoPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface CardPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: CardPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<CardPayments.StatusDetail>;
                }

                namespace CardPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface CartesBancairesPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: CartesBancairesPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<CartesBancairesPayments.StatusDetail>;
                }

                namespace CartesBancairesPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface CashappPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: CashappPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<CashappPayments.StatusDetail>;
                }

                namespace CashappPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface EpsPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: EpsPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<EpsPayments.StatusDetail>;
                }

                namespace EpsPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface FpxPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: FpxPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<FpxPayments.StatusDetail>;
                }

                namespace FpxPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface GbBankTransferPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: GbBankTransferPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<GbBankTransferPayments.StatusDetail>;
                }

                namespace GbBankTransferPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface GrabpayPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: GrabpayPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<GrabpayPayments.StatusDetail>;
                }

                namespace GrabpayPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface IdealPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: IdealPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<IdealPayments.StatusDetail>;
                }

                namespace IdealPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface JcbPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: JcbPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<JcbPayments.StatusDetail>;
                }

                namespace JcbPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface JpBankTransferPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: JpBankTransferPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<JpBankTransferPayments.StatusDetail>;
                }

                namespace JpBankTransferPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface KakaoPayPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: KakaoPayPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<KakaoPayPayments.StatusDetail>;
                }

                namespace KakaoPayPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface KlarnaPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: KlarnaPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<KlarnaPayments.StatusDetail>;
                }

                namespace KlarnaPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface KonbiniPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: KonbiniPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<KonbiniPayments.StatusDetail>;
                }

                namespace KonbiniPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface KrCardPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: KrCardPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<KrCardPayments.StatusDetail>;
                }

                namespace KrCardPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface LinkPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: LinkPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<LinkPayments.StatusDetail>;
                }

                namespace LinkPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface MobilepayPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: MobilepayPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<MobilepayPayments.StatusDetail>;
                }

                namespace MobilepayPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface MultibancoPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: MultibancoPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<MultibancoPayments.StatusDetail>;
                }

                namespace MultibancoPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface MxBankTransferPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: MxBankTransferPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<MxBankTransferPayments.StatusDetail>;
                }

                namespace MxBankTransferPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface NaverPayPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: NaverPayPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<NaverPayPayments.StatusDetail>;
                }

                namespace NaverPayPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface OxxoPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: OxxoPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<OxxoPayments.StatusDetail>;
                }

                namespace OxxoPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface P24Payments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: P24Payments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<P24Payments.StatusDetail>;
                }

                namespace P24Payments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface PayByBankPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: PayByBankPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<PayByBankPayments.StatusDetail>;
                }

                namespace PayByBankPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface PaycoPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: PaycoPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<PaycoPayments.StatusDetail>;
                }

                namespace PaycoPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface PaynowPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: PaynowPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<PaynowPayments.StatusDetail>;
                }

                namespace PaynowPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface PromptpayPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: PromptpayPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<PromptpayPayments.StatusDetail>;
                }

                namespace PromptpayPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface RevolutPayPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: RevolutPayPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<RevolutPayPayments.StatusDetail>;
                }

                namespace RevolutPayPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface SamsungPayPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: SamsungPayPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<SamsungPayPayments.StatusDetail>;
                }

                namespace SamsungPayPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface SepaBankTransferPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: SepaBankTransferPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<SepaBankTransferPayments.StatusDetail>;
                }

                namespace SepaBankTransferPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface SepaDebitPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: SepaDebitPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<SepaDebitPayments.StatusDetail>;
                }

                namespace SepaDebitPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface SwishPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: SwishPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<SwishPayments.StatusDetail>;
                }

                namespace SwishPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface TwintPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: TwintPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<TwintPayments.StatusDetail>;
                }

                namespace TwintPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface UsBankTransferPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: UsBankTransferPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<UsBankTransferPayments.StatusDetail>;
                }

                namespace UsBankTransferPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface ZipPayments {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: ZipPayments.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<ZipPayments.StatusDetail>;
                }

                namespace ZipPayments {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }
              }

              interface CardPayments {
                /**
                 * Automatically declines certain charge types regardless of whether the card issuer accepted or declined the charge.
                 */
                decline_on: CardPayments.DeclineOn | null;
              }

              namespace CardPayments {
                interface DeclineOn {
                  /**
                   * Whether Stripe automatically declines charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and they fail bank verification.
                   */
                  avs_failure: boolean | null;

                  /**
                   * Whether Stripe automatically declines charges with an incorrect CVC. This setting only applies when a CVC is provided and it fails bank verification.
                   */
                  cvc_failure: boolean | null;
                }
              }

              interface SepaDebitPayments {
                /**
                 * Creditor ID for SEPA debit payments.
                 */
                creditor_id: string | null;
              }

              interface StatementDescriptor {
                /**
                 * The default text that appears on statements for non-card charges outside of Japan. For card charges, if you don't set a statement_descriptor_prefix, this text is also used as the statement descriptor prefix. In that case, if concatenating the statement descriptor suffix causes the combined statement descriptor to exceed 22 characters, we truncate the statement_descriptor text to limit the full descriptor to 22 characters. For more information about statement descriptors and their requirements, see the Merchant Configuration settings documentation.
                 */
                descriptor: string | null;

                /**
                 * Default text that appears on statements for card charges outside of Japan, prefixing any dynamic statement_descriptor_suffix specified on the charge. To maximize space for the dynamic part of the descriptor, keep this text short. If you don't specify this value, statement_descriptor is used as the prefix. For more information about statement descriptors and their requirements, see the Merchant Configuration settings documentation.
                 */
                prefix: string | null;
              }

              interface Support {
                /**
                 * A publicly available mailing address for sending support issues to.
                 */
                address: Support.Address | null;

                /**
                 * A publicly available email address for sending support issues to.
                 */
                email: string | null;

                /**
                 * A publicly available phone number to call with support issues.
                 */
                phone: string | null;

                /**
                 * A publicly available website for handling support issues.
                 */
                url: string | null;
              }

              namespace Support {
                interface Address {
                  /**
                   * City, district, suburb, town, or village.
                   */
                  city: string | null;

                  /**
                   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                   */
                  country: Address.Country | null;

                  /**
                   * Address line 1 (e.g., street, PO Box, or company name).
                   */
                  line1: string | null;

                  /**
                   * Address line 2 (e.g., apartment, suite, unit, or building).
                   */
                  line2: string | null;

                  /**
                   * ZIP or postal code.
                   */
                  postal_code: string | null;

                  /**
                   * State, county, province, or region.
                   */
                  state: string | null;

                  /**
                   * Town or cho-me.
                   */
                  town: string | null;
                }

                namespace Address {
                  type Country =
                    | 'ad'
                    | 'ae'
                    | 'af'
                    | 'ag'
                    | 'ai'
                    | 'al'
                    | 'am'
                    | 'ao'
                    | 'aq'
                    | 'ar'
                    | 'as'
                    | 'at'
                    | 'au'
                    | 'aw'
                    | 'ax'
                    | 'az'
                    | 'ba'
                    | 'bb'
                    | 'bd'
                    | 'be'
                    | 'bf'
                    | 'bg'
                    | 'bh'
                    | 'bi'
                    | 'bj'
                    | 'bl'
                    | 'bm'
                    | 'bn'
                    | 'bo'
                    | 'bq'
                    | 'br'
                    | 'bs'
                    | 'bt'
                    | 'bv'
                    | 'bw'
                    | 'by'
                    | 'bz'
                    | 'ca'
                    | 'cc'
                    | 'cd'
                    | 'cf'
                    | 'cg'
                    | 'ch'
                    | 'ci'
                    | 'ck'
                    | 'cl'
                    | 'cm'
                    | 'cn'
                    | 'co'
                    | 'cr'
                    | 'cu'
                    | 'cv'
                    | 'cw'
                    | 'cx'
                    | 'cy'
                    | 'cz'
                    | 'de'
                    | 'dj'
                    | 'dk'
                    | 'dm'
                    | 'do'
                    | 'dz'
                    | 'ec'
                    | 'ee'
                    | 'eg'
                    | 'eh'
                    | 'er'
                    | 'es'
                    | 'et'
                    | 'fi'
                    | 'fj'
                    | 'fk'
                    | 'fm'
                    | 'fo'
                    | 'fr'
                    | 'ga'
                    | 'gb'
                    | 'gd'
                    | 'ge'
                    | 'gf'
                    | 'gg'
                    | 'gh'
                    | 'gi'
                    | 'gl'
                    | 'gm'
                    | 'gn'
                    | 'gp'
                    | 'gq'
                    | 'gr'
                    | 'gs'
                    | 'gt'
                    | 'gu'
                    | 'gw'
                    | 'gy'
                    | 'hk'
                    | 'hm'
                    | 'hn'
                    | 'hr'
                    | 'ht'
                    | 'hu'
                    | 'id'
                    | 'ie'
                    | 'il'
                    | 'im'
                    | 'in'
                    | 'io'
                    | 'iq'
                    | 'ir'
                    | 'is'
                    | 'it'
                    | 'je'
                    | 'jm'
                    | 'jo'
                    | 'jp'
                    | 'ke'
                    | 'kg'
                    | 'kh'
                    | 'ki'
                    | 'km'
                    | 'kn'
                    | 'kp'
                    | 'kr'
                    | 'kw'
                    | 'ky'
                    | 'kz'
                    | 'la'
                    | 'lb'
                    | 'lc'
                    | 'li'
                    | 'lk'
                    | 'lr'
                    | 'ls'
                    | 'lt'
                    | 'lu'
                    | 'lv'
                    | 'ly'
                    | 'ma'
                    | 'mc'
                    | 'md'
                    | 'me'
                    | 'mf'
                    | 'mg'
                    | 'mh'
                    | 'mk'
                    | 'ml'
                    | 'mm'
                    | 'mn'
                    | 'mo'
                    | 'mp'
                    | 'mq'
                    | 'mr'
                    | 'ms'
                    | 'mt'
                    | 'mu'
                    | 'mv'
                    | 'mw'
                    | 'mx'
                    | 'my'
                    | 'mz'
                    | 'na'
                    | 'nc'
                    | 'ne'
                    | 'nf'
                    | 'ng'
                    | 'ni'
                    | 'nl'
                    | 'no'
                    | 'np'
                    | 'nr'
                    | 'nu'
                    | 'nz'
                    | 'om'
                    | 'pa'
                    | 'pe'
                    | 'pf'
                    | 'pg'
                    | 'ph'
                    | 'pk'
                    | 'pl'
                    | 'pm'
                    | 'pn'
                    | 'pr'
                    | 'ps'
                    | 'pt'
                    | 'pw'
                    | 'py'
                    | 'qa'
                    | 'qz'
                    | 're'
                    | 'ro'
                    | 'rs'
                    | 'ru'
                    | 'rw'
                    | 'sa'
                    | 'sb'
                    | 'sc'
                    | 'sd'
                    | 'se'
                    | 'sg'
                    | 'sh'
                    | 'si'
                    | 'sj'
                    | 'sk'
                    | 'sl'
                    | 'sm'
                    | 'sn'
                    | 'so'
                    | 'sr'
                    | 'ss'
                    | 'st'
                    | 'sv'
                    | 'sx'
                    | 'sy'
                    | 'sz'
                    | 'tc'
                    | 'td'
                    | 'tf'
                    | 'tg'
                    | 'th'
                    | 'tj'
                    | 'tk'
                    | 'tl'
                    | 'tm'
                    | 'tn'
                    | 'to'
                    | 'tr'
                    | 'tt'
                    | 'tv'
                    | 'tw'
                    | 'tz'
                    | 'ua'
                    | 'ug'
                    | 'um'
                    | 'us'
                    | 'uy'
                    | 'uz'
                    | 'va'
                    | 'vc'
                    | 've'
                    | 'vg'
                    | 'vi'
                    | 'vn'
                    | 'vu'
                    | 'wf'
                    | 'ws'
                    | 'ye'
                    | 'yt'
                    | 'za'
                    | 'zm'
                    | 'zw';
                }
              }
            }

            interface Recipient {
              /**
               * Capabilities that have been requested on the Recipient Configuration.
               */
              capabilities: Recipient.Capabilities | null;

              /**
               * The payout method to be used as a default outbound destination. This will allow the PayoutMethod to be omitted on OutboundPayments made through the dashboard.
               */
              default_outbound_destination: Recipient.DefaultOutboundDestination | null;
            }

            namespace Recipient {
              interface Capabilities {
                /**
                 * Capabilities that enable OutboundPayments to a bank account linked to this Account.
                 */
                bank_accounts: Capabilities.BankAccounts | null;

                /**
                 * Capability that enable OutboundPayments to a debit card linked to this Account.
                 */
                cards: Capabilities.Cards | null;

                /**
                 * Capabilities that enable the recipient to receive money into their Stripe Balance (/v1/balance).
                 */
                stripe_balance: Capabilities.StripeBalance | null;
              }

              namespace Capabilities {
                interface BankAccounts {
                  /**
                   * Enables this Account to receive OutboundPayments to linked bank accounts over local networks.
                   */
                  local: BankAccounts.Local | null;

                  /**
                   * Enables this Account to receive OutboundPayments to linked bank accounts over wire.
                   */
                  wire: BankAccounts.Wire | null;
                }

                namespace BankAccounts {
                  interface Local {
                    /**
                     * Whether the Capability has been requested.
                     */
                    requested: boolean;

                    /**
                     * The status of the Capability.
                     */
                    status: Local.Status;

                    /**
                     * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                     */
                    status_details: Array<Local.StatusDetail>;
                  }

                  namespace Local {
                    type Status =
                      | 'active'
                      | 'pending'
                      | 'restricted'
                      | 'unsupported';

                    interface StatusDetail {
                      /**
                       * Machine-readable code explaining the reason for the Capability to be in its current status.
                       */
                      code: StatusDetail.Code;

                      /**
                       * Machine-readable code explaining how to make the Capability active.
                       */
                      resolution: StatusDetail.Resolution;
                    }

                    namespace StatusDetail {
                      type Code =
                        | 'determining_status'
                        | 'requirements_past_due'
                        | 'requirements_pending_verification'
                        | 'restricted_other'
                        | 'unsupported_business'
                        | 'unsupported_country';

                      type Resolution =
                        | 'contact_stripe'
                        | 'no_resolution'
                        | 'provide_info';
                    }
                  }

                  interface Wire {
                    /**
                     * Whether the Capability has been requested.
                     */
                    requested: boolean;

                    /**
                     * The status of the Capability.
                     */
                    status: Wire.Status;

                    /**
                     * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                     */
                    status_details: Array<Wire.StatusDetail>;
                  }

                  namespace Wire {
                    type Status =
                      | 'active'
                      | 'pending'
                      | 'restricted'
                      | 'unsupported';

                    interface StatusDetail {
                      /**
                       * Machine-readable code explaining the reason for the Capability to be in its current status.
                       */
                      code: StatusDetail.Code;

                      /**
                       * Machine-readable code explaining how to make the Capability active.
                       */
                      resolution: StatusDetail.Resolution;
                    }

                    namespace StatusDetail {
                      type Code =
                        | 'determining_status'
                        | 'requirements_past_due'
                        | 'requirements_pending_verification'
                        | 'restricted_other'
                        | 'unsupported_business'
                        | 'unsupported_country';

                      type Resolution =
                        | 'contact_stripe'
                        | 'no_resolution'
                        | 'provide_info';
                    }
                  }
                }

                interface Cards {
                  /**
                   * Whether the Capability has been requested.
                   */
                  requested: boolean;

                  /**
                   * The status of the Capability.
                   */
                  status: Cards.Status;

                  /**
                   * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                   */
                  status_details: Array<Cards.StatusDetail>;
                }

                namespace Cards {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Machine-readable code explaining the reason for the Capability to be in its current status.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Machine-readable code explaining how to make the Capability active.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_business'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface StripeBalance {
                  /**
                   * Allows the recipient to receive /v1/transfers into their Stripe Balance (/v1/balance).
                   */
                  stripe_transfers: StripeBalance.StripeTransfers | null;
                }

                namespace StripeBalance {
                  interface StripeTransfers {
                    /**
                     * Whether the Capability has been requested.
                     */
                    requested: boolean;

                    /**
                     * The status of the Capability.
                     */
                    status: StripeTransfers.Status;

                    /**
                     * Additional details regarding the status of the Capability. `status_details` will be empty if the Capability's status is `active`.
                     */
                    status_details: Array<StripeTransfers.StatusDetail>;
                  }

                  namespace StripeTransfers {
                    type Status =
                      | 'active'
                      | 'pending'
                      | 'restricted'
                      | 'unsupported';

                    interface StatusDetail {
                      /**
                       * Machine-readable code explaining the reason for the Capability to be in its current status.
                       */
                      code: StatusDetail.Code;

                      /**
                       * Machine-readable code explaining how to make the Capability active.
                       */
                      resolution: StatusDetail.Resolution;
                    }

                    namespace StatusDetail {
                      type Code =
                        | 'determining_status'
                        | 'requirements_past_due'
                        | 'requirements_pending_verification'
                        | 'restricted_other'
                        | 'unsupported_business'
                        | 'unsupported_country';

                      type Resolution =
                        | 'contact_stripe'
                        | 'no_resolution'
                        | 'provide_info';
                    }
                  }
                }
              }

              interface DefaultOutboundDestination {
                /**
                 * The payout method ID of the default outbound destination.
                 */
                id: string;

                /**
                 * Closed Enum. The payout method type of the default outbound destination.
                 */
                type: DefaultOutboundDestination.Type;
              }

              namespace DefaultOutboundDestination {
                type Type =
                  | 'at_bank_account'
                  | 'au_bank_account'
                  | 'ba_bank_account'
                  | 'be_bank_account'
                  | 'bg_bank_account'
                  | 'bj_bank_account'
                  | 'bs_bank_account'
                  | 'card'
                  | 'ca_bank_account'
                  | 'ch_bank_account'
                  | 'ci_bank_account'
                  | 'cy_bank_account'
                  | 'cz_bank_account'
                  | 'de_bank_account'
                  | 'dk_bank_account'
                  | 'ec_bank_account'
                  | 'ee_bank_account'
                  | 'es_bank_account'
                  | 'et_bank_account'
                  | 'fi_bank_account'
                  | 'fr_bank_account'
                  | 'gb_bank_account'
                  | 'gr_bank_account'
                  | 'hr_bank_account'
                  | 'hu_bank_account'
                  | 'id_bank_account'
                  | 'ie_bank_account'
                  | 'il_bank_account'
                  | 'in_bank_account'
                  | 'is_bank_account'
                  | 'it_bank_account'
                  | 'ke_bank_account'
                  | 'li_bank_account'
                  | 'lt_bank_account'
                  | 'lu_bank_account'
                  | 'lv_bank_account'
                  | 'mn_bank_account'
                  | 'mt_bank_account'
                  | 'mu_bank_account'
                  | 'mx_bank_account'
                  | 'na_bank_account'
                  | 'nl_bank_account'
                  | 'no_bank_account'
                  | 'nz_bank_account'
                  | 'pa_bank_account'
                  | 'ph_bank_account'
                  | 'pl_bank_account'
                  | 'pt_bank_account'
                  | 'ro_bank_account'
                  | 'rs_bank_account'
                  | 'se_bank_account'
                  | 'sg_bank_account'
                  | 'si_bank_account'
                  | 'sk_bank_account'
                  | 'sn_bank_account'
                  | 'sv_bank_account'
                  | 'tn_bank_account'
                  | 'tr_bank_account'
                  | 'us_bank_account'
                  | 'za_bank_account';
              }
            }
          }

          type Dashboard = 'express' | 'full' | 'none';

          interface Defaults {
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: Defaults.Currency | null;

            /**
             * The Account's preferred locales (languages), ordered by preference.
             */
            locales: Array<Defaults.Locale> | null;

            /**
             * Default responsibilities held by either Stripe or the platform.
             */
            responsibilities: Defaults.Responsibilities | null;
          }

          namespace Defaults {
            type Currency =
              | 'aed'
              | 'afn'
              | 'all'
              | 'amd'
              | 'ang'
              | 'aoa'
              | 'ars'
              | 'aud'
              | 'awg'
              | 'azn'
              | 'bam'
              | 'bbd'
              | 'bdt'
              | 'bgn'
              | 'bhd'
              | 'bif'
              | 'bmd'
              | 'bnd'
              | 'bob'
              | 'bov'
              | 'brl'
              | 'bsd'
              | 'btn'
              | 'bwp'
              | 'byn'
              | 'byr'
              | 'bzd'
              | 'cad'
              | 'cdf'
              | 'che'
              | 'chf'
              | 'chw'
              | 'clf'
              | 'clp'
              | 'cny'
              | 'cop'
              | 'cou'
              | 'crc'
              | 'cuc'
              | 'cup'
              | 'cve'
              | 'czk'
              | 'djf'
              | 'dkk'
              | 'dop'
              | 'dzd'
              | 'eek'
              | 'egp'
              | 'ern'
              | 'etb'
              | 'eur'
              | 'fjd'
              | 'fkp'
              | 'gbp'
              | 'gel'
              | 'ghc'
              | 'ghs'
              | 'gip'
              | 'gmd'
              | 'gnf'
              | 'gtq'
              | 'gyd'
              | 'hkd'
              | 'hnl'
              | 'hrk'
              | 'htg'
              | 'huf'
              | 'idr'
              | 'ils'
              | 'inr'
              | 'iqd'
              | 'irr'
              | 'isk'
              | 'jmd'
              | 'jod'
              | 'jpy'
              | 'kes'
              | 'kgs'
              | 'khr'
              | 'kmf'
              | 'kpw'
              | 'krw'
              | 'kwd'
              | 'kyd'
              | 'kzt'
              | 'lak'
              | 'lbp'
              | 'lkr'
              | 'lrd'
              | 'lsl'
              | 'ltl'
              | 'lvl'
              | 'lyd'
              | 'mad'
              | 'mdl'
              | 'mga'
              | 'mkd'
              | 'mmk'
              | 'mnt'
              | 'mop'
              | 'mro'
              | 'mru'
              | 'mur'
              | 'mvr'
              | 'mwk'
              | 'mxn'
              | 'mxv'
              | 'myr'
              | 'mzn'
              | 'nad'
              | 'ngn'
              | 'nio'
              | 'nok'
              | 'npr'
              | 'nzd'
              | 'omr'
              | 'pab'
              | 'pen'
              | 'pgk'
              | 'php'
              | 'pkr'
              | 'pln'
              | 'pyg'
              | 'qar'
              | 'ron'
              | 'rsd'
              | 'rub'
              | 'rwf'
              | 'sar'
              | 'sbd'
              | 'scr'
              | 'sdg'
              | 'sek'
              | 'sgd'
              | 'shp'
              | 'sle'
              | 'sll'
              | 'sos'
              | 'srd'
              | 'ssp'
              | 'std'
              | 'stn'
              | 'svc'
              | 'syp'
              | 'szl'
              | 'thb'
              | 'tjs'
              | 'tmt'
              | 'tnd'
              | 'top'
              | 'try'
              | 'ttd'
              | 'twd'
              | 'tzs'
              | 'uah'
              | 'ugx'
              | 'usd'
              | 'usdc'
              | 'usn'
              | 'uyi'
              | 'uyu'
              | 'uzs'
              | 'vef'
              | 'ves'
              | 'vnd'
              | 'vuv'
              | 'wst'
              | 'xaf'
              | 'xcd'
              | 'xcg'
              | 'xof'
              | 'xpf'
              | 'yer'
              | 'zar'
              | 'zmk'
              | 'zmw'
              | 'zwd'
              | 'zwg'
              | 'zwl';

            type Locale =
              | 'ar-SA'
              | 'bg'
              | 'bg-BG'
              | 'cs'
              | 'cs-CZ'
              | 'da'
              | 'da-DK'
              | 'de'
              | 'de-DE'
              | 'el'
              | 'el-GR'
              | 'en'
              | 'en-AU'
              | 'en-CA'
              | 'en-GB'
              | 'en-IE'
              | 'en-IN'
              | 'en-NZ'
              | 'en-SG'
              | 'en-US'
              | 'es'
              | 'es-419'
              | 'es-ES'
              | 'et'
              | 'et-EE'
              | 'fi'
              | 'fil'
              | 'fil-PH'
              | 'fi-FI'
              | 'fr'
              | 'fr-CA'
              | 'fr-FR'
              | 'he-IL'
              | 'hr'
              | 'hr-HR'
              | 'hu'
              | 'hu-HU'
              | 'id'
              | 'id-ID'
              | 'it'
              | 'it-IT'
              | 'ja'
              | 'ja-JP'
              | 'ko'
              | 'ko-KR'
              | 'lt'
              | 'lt-LT'
              | 'lv'
              | 'lv-LV'
              | 'ms'
              | 'ms-MY'
              | 'mt'
              | 'mt-MT'
              | 'nb'
              | 'nb-NO'
              | 'nl'
              | 'nl-NL'
              | 'pl'
              | 'pl-PL'
              | 'pt'
              | 'pt-BR'
              | 'pt-PT'
              | 'ro'
              | 'ro-RO'
              | 'ru'
              | 'ru-RU'
              | 'sk'
              | 'sk-SK'
              | 'sl'
              | 'sl-SI'
              | 'sv'
              | 'sv-SE'
              | 'th'
              | 'th-TH'
              | 'tr'
              | 'tr-TR'
              | 'vi'
              | 'vi-VN'
              | 'zh'
              | 'zh-Hans'
              | 'zh-Hant-HK'
              | 'zh-Hant-TW'
              | 'zh-HK'
              | 'zh-TW';

            interface Responsibilities {
              /**
               * A value indicating the responsible payer of a bundle of Stripe fees for pricing-control eligible products on this Account.
               */
              fees_collector: Responsibilities.FeesCollector;

              /**
               * A value indicating who is responsible for losses when this Account can't pay back negative balances from payments.
               */
              losses_collector: Responsibilities.LossesCollector;
            }

            namespace Responsibilities {
              type FeesCollector = 'application' | 'stripe';

              type LossesCollector = 'application' | 'stripe';
            }
          }

          interface Identity {
            /**
             * Attestations from the identity's key people, e.g. owners, executives, directors.
             */
            attestations: Identity.Attestations | null;

            /**
             * Information about the company or business.
             */
            business_details: Identity.BusinessDetails | null;

            /**
             * The country in which the account holder resides, or in which the business is legally established. This should be an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
             */
            country: Identity.Country | null;

            /**
             * The entity type.
             */
            entity_type: Identity.EntityType | null;

            /**
             * Information about the individual represented by the Account. This property is `null` unless `entity_type` is set to `individual`.
             */
            individual: Identity.Individual | null;
          }

          namespace Identity {
            interface Attestations {
              /**
               * This hash is used to attest that the directors information provided to Stripe is both current and correct.
               */
              directorship_declaration: Attestations.DirectorshipDeclaration | null;

              /**
               * This hash is used to attest that the beneficial owner information provided to Stripe is both current and correct.
               */
              ownership_declaration: Attestations.OwnershipDeclaration | null;

              /**
               * Attestation that all Persons with a specific Relationship value have been provided.
               */
              persons_provided: Attestations.PersonsProvided | null;

              /**
               * Attestations of accepted terms of service agreements.
               */
              terms_of_service: Attestations.TermsOfService | null;
            }

            namespace Attestations {
              interface DirectorshipDeclaration {
                /**
                 * The time marking when the director attestation was made. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
                 */
                date: string | null;

                /**
                 * The IP address from which the director attestation was made.
                 */
                ip: string | null;

                /**
                 * The user agent of the browser from which the director attestation was made.
                 */
                user_agent: string | null;
              }

              interface OwnershipDeclaration {
                /**
                 * The time marking when the beneficial owner attestation was made. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
                 */
                date: string | null;

                /**
                 * The IP address from which the beneficial owner attestation was made.
                 */
                ip: string | null;

                /**
                 * The user agent of the browser from which the beneficial owner attestation was made.
                 */
                user_agent: string | null;
              }

              interface PersonsProvided {
                /**
                 * Whether the company's directors have been provided. Set this Boolean to true after creating all the company's directors with the [Persons API](https://docs.stripe.com/api/v2/core/accounts/createperson).
                 */
                directors: boolean | null;

                /**
                 * Whether the company's executives have been provided. Set this Boolean to true after creating all the company's executives with the [Persons API](https://docs.stripe.com/api/v2/core/accounts/createperson).
                 */
                executives: boolean | null;

                /**
                 * Whether the company's owners have been provided. Set this Boolean to true after creating all the company's owners with the [Persons API](https://docs.stripe.com/api/v2/core/accounts/createperson).
                 */
                owners: boolean | null;

                /**
                 * Reason for why the company is exempt from providing ownership information.
                 */
                ownership_exemption_reason: PersonsProvided.OwnershipExemptionReason | null;
              }

              namespace PersonsProvided {
                type OwnershipExemptionReason =
                  | 'qualified_entity_exceeds_ownership_threshold'
                  | 'qualifies_as_financial_institution';
              }

              interface TermsOfService {
                /**
                 * Details on the Account's acceptance of the [Stripe Services Agreement](https://docs.stripe.com/connect/updating-accounts#tos-acceptance).
                 */
                account: TermsOfService.Account | null;
              }

              namespace TermsOfService {
                interface Account {
                  /**
                   * The time when the Account's representative accepted the terms of service. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
                   */
                  date: string | null;

                  /**
                   * The IP address from which the Account's representative accepted the terms of service.
                   */
                  ip: string | null;

                  /**
                   * The user agent of the browser from which the Account's representative accepted the terms of service.
                   */
                  user_agent: string | null;
                }
              }
            }

            interface BusinessDetails {
              /**
               * The company's primary address.
               */
              address: BusinessDetails.Address | null;

              /**
               * The business gross annual revenue for its preceding fiscal year.
               */
              annual_revenue: BusinessDetails.AnnualRevenue | null;

              /**
               * Documents that may be submitted to satisfy various informational requests.
               */
              documents: BusinessDetails.Documents | null;

              /**
               * The company's legal name.
               */
              doing_business_as: string | null;

              /**
               * An estimated upper bound of employees, contractors, vendors, etc. currently working for the business.
               */
              estimated_worker_count: number | null;

              /**
               * The provided ID numbers of a business entity.
               */
              id_numbers: Array<BusinessDetails.IdNumber> | null;

              /**
               * An estimate of the monthly revenue of the business.
               */
              monthly_estimated_revenue: BusinessDetails.MonthlyEstimatedRevenue | null;

              /**
               * The company's phone number (used for verification).
               */
              phone: string | null;

              /**
               * Internal-only description of the product sold or service provided by the business. It's used by Stripe for risk and underwriting purposes.
               */
              product_description: string | null;

              /**
               * The business legal name.
               */
              registered_name: string | null;

              /**
               * The business registration address of the business entity in non latin script.
               */
              script_addresses: BusinessDetails.ScriptAddresses | null;

              /**
               * The business legal name in non latin script.
               */
              script_names: BusinessDetails.ScriptNames | null;

              /**
               * The category identifying the legal structure of the business.
               */
              structure: BusinessDetails.Structure | null;

              /**
               * The business's publicly available website.
               */
              url: string | null;
            }

            namespace BusinessDetails {
              interface Address {
                /**
                 * City, district, suburb, town, or village.
                 */
                city: string | null;

                /**
                 * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                 */
                country: Address.Country | null;

                /**
                 * Address line 1 (e.g., street, PO Box, or company name).
                 */
                line1: string | null;

                /**
                 * Address line 2 (e.g., apartment, suite, unit, or building).
                 */
                line2: string | null;

                /**
                 * ZIP or postal code.
                 */
                postal_code: string | null;

                /**
                 * State, county, province, or region.
                 */
                state: string | null;

                /**
                 * Town or cho-me.
                 */
                town: string | null;
              }

              namespace Address {
                type Country =
                  | 'ad'
                  | 'ae'
                  | 'af'
                  | 'ag'
                  | 'ai'
                  | 'al'
                  | 'am'
                  | 'ao'
                  | 'aq'
                  | 'ar'
                  | 'as'
                  | 'at'
                  | 'au'
                  | 'aw'
                  | 'ax'
                  | 'az'
                  | 'ba'
                  | 'bb'
                  | 'bd'
                  | 'be'
                  | 'bf'
                  | 'bg'
                  | 'bh'
                  | 'bi'
                  | 'bj'
                  | 'bl'
                  | 'bm'
                  | 'bn'
                  | 'bo'
                  | 'bq'
                  | 'br'
                  | 'bs'
                  | 'bt'
                  | 'bv'
                  | 'bw'
                  | 'by'
                  | 'bz'
                  | 'ca'
                  | 'cc'
                  | 'cd'
                  | 'cf'
                  | 'cg'
                  | 'ch'
                  | 'ci'
                  | 'ck'
                  | 'cl'
                  | 'cm'
                  | 'cn'
                  | 'co'
                  | 'cr'
                  | 'cu'
                  | 'cv'
                  | 'cw'
                  | 'cx'
                  | 'cy'
                  | 'cz'
                  | 'de'
                  | 'dj'
                  | 'dk'
                  | 'dm'
                  | 'do'
                  | 'dz'
                  | 'ec'
                  | 'ee'
                  | 'eg'
                  | 'eh'
                  | 'er'
                  | 'es'
                  | 'et'
                  | 'fi'
                  | 'fj'
                  | 'fk'
                  | 'fm'
                  | 'fo'
                  | 'fr'
                  | 'ga'
                  | 'gb'
                  | 'gd'
                  | 'ge'
                  | 'gf'
                  | 'gg'
                  | 'gh'
                  | 'gi'
                  | 'gl'
                  | 'gm'
                  | 'gn'
                  | 'gp'
                  | 'gq'
                  | 'gr'
                  | 'gs'
                  | 'gt'
                  | 'gu'
                  | 'gw'
                  | 'gy'
                  | 'hk'
                  | 'hm'
                  | 'hn'
                  | 'hr'
                  | 'ht'
                  | 'hu'
                  | 'id'
                  | 'ie'
                  | 'il'
                  | 'im'
                  | 'in'
                  | 'io'
                  | 'iq'
                  | 'ir'
                  | 'is'
                  | 'it'
                  | 'je'
                  | 'jm'
                  | 'jo'
                  | 'jp'
                  | 'ke'
                  | 'kg'
                  | 'kh'
                  | 'ki'
                  | 'km'
                  | 'kn'
                  | 'kp'
                  | 'kr'
                  | 'kw'
                  | 'ky'
                  | 'kz'
                  | 'la'
                  | 'lb'
                  | 'lc'
                  | 'li'
                  | 'lk'
                  | 'lr'
                  | 'ls'
                  | 'lt'
                  | 'lu'
                  | 'lv'
                  | 'ly'
                  | 'ma'
                  | 'mc'
                  | 'md'
                  | 'me'
                  | 'mf'
                  | 'mg'
                  | 'mh'
                  | 'mk'
                  | 'ml'
                  | 'mm'
                  | 'mn'
                  | 'mo'
                  | 'mp'
                  | 'mq'
                  | 'mr'
                  | 'ms'
                  | 'mt'
                  | 'mu'
                  | 'mv'
                  | 'mw'
                  | 'mx'
                  | 'my'
                  | 'mz'
                  | 'na'
                  | 'nc'
                  | 'ne'
                  | 'nf'
                  | 'ng'
                  | 'ni'
                  | 'nl'
                  | 'no'
                  | 'np'
                  | 'nr'
                  | 'nu'
                  | 'nz'
                  | 'om'
                  | 'pa'
                  | 'pe'
                  | 'pf'
                  | 'pg'
                  | 'ph'
                  | 'pk'
                  | 'pl'
                  | 'pm'
                  | 'pn'
                  | 'pr'
                  | 'ps'
                  | 'pt'
                  | 'pw'
                  | 'py'
                  | 'qa'
                  | 'qz'
                  | 're'
                  | 'ro'
                  | 'rs'
                  | 'ru'
                  | 'rw'
                  | 'sa'
                  | 'sb'
                  | 'sc'
                  | 'sd'
                  | 'se'
                  | 'sg'
                  | 'sh'
                  | 'si'
                  | 'sj'
                  | 'sk'
                  | 'sl'
                  | 'sm'
                  | 'sn'
                  | 'so'
                  | 'sr'
                  | 'ss'
                  | 'st'
                  | 'sv'
                  | 'sx'
                  | 'sy'
                  | 'sz'
                  | 'tc'
                  | 'td'
                  | 'tf'
                  | 'tg'
                  | 'th'
                  | 'tj'
                  | 'tk'
                  | 'tl'
                  | 'tm'
                  | 'tn'
                  | 'to'
                  | 'tr'
                  | 'tt'
                  | 'tv'
                  | 'tw'
                  | 'tz'
                  | 'ua'
                  | 'ug'
                  | 'um'
                  | 'us'
                  | 'uy'
                  | 'uz'
                  | 'va'
                  | 'vc'
                  | 've'
                  | 'vg'
                  | 'vi'
                  | 'vn'
                  | 'vu'
                  | 'wf'
                  | 'ws'
                  | 'ye'
                  | 'yt'
                  | 'za'
                  | 'zm'
                  | 'zw';
              }

              interface AnnualRevenue {
                /**
                 * A non-negative integer representing the amount in the smallest currency unit.
                 */
                amount: Amount | null;

                /**
                 * The close-out date of the preceding fiscal year in ISO 8601 format. E.g. 2023-12-31 for the 31st of December, 2023.
                 */
                fiscal_year_end: string | null;
              }

              interface Documents {
                /**
                 * One or more documents that support the Bank account ownership verification requirement. Must be a document associated with the account's primary active bank account that displays the last 4 digits of the account number, either a statement or a check.
                 */
                bank_account_ownership_verification: Documents.BankAccountOwnershipVerification | null;

                /**
                 * One or more documents that demonstrate proof of a company's license to operate.
                 */
                company_license: Documents.CompanyLicense | null;

                /**
                 * One or more documents showing the company's Memorandum of Association.
                 */
                company_memorandum_of_association: Documents.CompanyMemorandumOfAssociation | null;

                /**
                 * Certain countries only: One or more documents showing the ministerial decree legalizing the company's establishment.
                 */
                company_ministerial_decree: Documents.CompanyMinisterialDecree | null;

                /**
                 * One or more documents that demonstrate proof of a company's registration with the appropriate local authorities.
                 */
                company_registration_verification: Documents.CompanyRegistrationVerification | null;

                /**
                 * One or more documents that demonstrate proof of a company's tax ID.
                 */
                company_tax_id_verification: Documents.CompanyTaxIdVerification | null;

                /**
                 * A document verifying the business.
                 */
                primary_verification: Documents.PrimaryVerification | null;

                /**
                 * One or more documents showing the company's proof of registration with the national business registry.
                 */
                proof_of_registration: Documents.ProofOfRegistration | null;

                /**
                 * One or more documents that demonstrate proof of ultimate beneficial ownership.
                 */
                proof_of_ultimate_beneficial_ownership: Documents.ProofOfUltimateBeneficialOwnership | null;
              }

              namespace Documents {
                interface BankAccountOwnershipVerification {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
                }

                interface CompanyLicense {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
                }

                interface CompanyMemorandumOfAssociation {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
                }

                interface CompanyMinisterialDecree {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
                }

                interface CompanyRegistrationVerification {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
                }

                interface CompanyTaxIdVerification {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
                }

                interface PrimaryVerification {
                  /**
                   * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens for the front and back of the verification document.
                   */
                  front_back: PrimaryVerification.FrontBack;

                  /**
                   * The format of the verification document. Currently supports `front_back` only.
                   */
                  type: 'front_back';
                }

                namespace PrimaryVerification {
                  interface FrontBack {
                    /**
                     * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the back of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                     */
                    back: string | null;

                    /**
                     * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                     */
                    front: string;
                  }
                }

                interface ProofOfRegistration {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
                }

                interface ProofOfUltimateBeneficialOwnership {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
                }
              }

              interface IdNumber {
                /**
                 * The registrar of the ID number (Only valid for DE ID number types).
                 */
                registrar: string | null;

                /**
                 * Open Enum. The ID number type of a business entity.
                 */
                type: IdNumber.Type;
              }

              namespace IdNumber {
                type Type =
                  | 'ae_crn'
                  | 'ae_vat'
                  | 'at_fn'
                  | 'au_abn'
                  | 'au_acn'
                  | 'au_in'
                  | 'be_cbe'
                  | 'bg_uic'
                  | 'br_cnpj'
                  | 'ca_cn'
                  | 'ca_crarr'
                  | 'ca_neq'
                  | 'ca_rid'
                  | 'ch_chid'
                  | 'ch_uid'
                  | 'cy_tic'
                  | 'cz_ico'
                  | 'de_hrn'
                  | 'de_vat'
                  | 'dk_cvr'
                  | 'ee_rk'
                  | 'es_cif'
                  | 'fi_yt'
                  | 'fr_siren'
                  | 'fr_vat'
                  | 'gb_crn'
                  | 'gi_crn'
                  | 'gr_gemi'
                  | 'hk_br'
                  | 'hk_cr'
                  | 'hk_mbs'
                  | 'hu_cjs'
                  | 'ie_crn'
                  | 'it_rea'
                  | 'it_vat'
                  | 'jp_cn'
                  | 'li_uid'
                  | 'lt_ccrn'
                  | 'lu_rcs'
                  | 'lv_urn'
                  | 'mt_crn'
                  | 'mx_rfc'
                  | 'my_brn'
                  | 'my_coid'
                  | 'my_sst'
                  | 'nl_kvk'
                  | 'no_orgnr'
                  | 'nz_bn'
                  | 'pl_regon'
                  | 'pt_vat'
                  | 'ro_cui'
                  | 'se_orgnr'
                  | 'sg_uen'
                  | 'si_msp'
                  | 'sk_ico'
                  | 'th_crn'
                  | 'th_prn'
                  | 'th_tin'
                  | 'us_ein';
              }

              interface MonthlyEstimatedRevenue {
                /**
                 * A non-negative integer representing the amount in the smallest currency unit.
                 */
                amount: Amount | null;
              }

              interface ScriptAddresses {
                /**
                 * Kana Address.
                 */
                kana: ScriptAddresses.Kana | null;

                /**
                 * Kanji Address.
                 */
                kanji: ScriptAddresses.Kanji | null;
              }

              namespace ScriptAddresses {
                interface Kana {
                  /**
                   * City, district, suburb, town, or village.
                   */
                  city: string | null;

                  /**
                   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                   */
                  country: Kana.Country | null;

                  /**
                   * Address line 1 (e.g., street, PO Box, or company name).
                   */
                  line1: string | null;

                  /**
                   * Address line 2 (e.g., apartment, suite, unit, or building).
                   */
                  line2: string | null;

                  /**
                   * ZIP or postal code.
                   */
                  postal_code: string | null;

                  /**
                   * State, county, province, or region.
                   */
                  state: string | null;

                  /**
                   * Town or cho-me.
                   */
                  town: string | null;
                }

                namespace Kana {
                  type Country =
                    | 'ad'
                    | 'ae'
                    | 'af'
                    | 'ag'
                    | 'ai'
                    | 'al'
                    | 'am'
                    | 'ao'
                    | 'aq'
                    | 'ar'
                    | 'as'
                    | 'at'
                    | 'au'
                    | 'aw'
                    | 'ax'
                    | 'az'
                    | 'ba'
                    | 'bb'
                    | 'bd'
                    | 'be'
                    | 'bf'
                    | 'bg'
                    | 'bh'
                    | 'bi'
                    | 'bj'
                    | 'bl'
                    | 'bm'
                    | 'bn'
                    | 'bo'
                    | 'bq'
                    | 'br'
                    | 'bs'
                    | 'bt'
                    | 'bv'
                    | 'bw'
                    | 'by'
                    | 'bz'
                    | 'ca'
                    | 'cc'
                    | 'cd'
                    | 'cf'
                    | 'cg'
                    | 'ch'
                    | 'ci'
                    | 'ck'
                    | 'cl'
                    | 'cm'
                    | 'cn'
                    | 'co'
                    | 'cr'
                    | 'cu'
                    | 'cv'
                    | 'cw'
                    | 'cx'
                    | 'cy'
                    | 'cz'
                    | 'de'
                    | 'dj'
                    | 'dk'
                    | 'dm'
                    | 'do'
                    | 'dz'
                    | 'ec'
                    | 'ee'
                    | 'eg'
                    | 'eh'
                    | 'er'
                    | 'es'
                    | 'et'
                    | 'fi'
                    | 'fj'
                    | 'fk'
                    | 'fm'
                    | 'fo'
                    | 'fr'
                    | 'ga'
                    | 'gb'
                    | 'gd'
                    | 'ge'
                    | 'gf'
                    | 'gg'
                    | 'gh'
                    | 'gi'
                    | 'gl'
                    | 'gm'
                    | 'gn'
                    | 'gp'
                    | 'gq'
                    | 'gr'
                    | 'gs'
                    | 'gt'
                    | 'gu'
                    | 'gw'
                    | 'gy'
                    | 'hk'
                    | 'hm'
                    | 'hn'
                    | 'hr'
                    | 'ht'
                    | 'hu'
                    | 'id'
                    | 'ie'
                    | 'il'
                    | 'im'
                    | 'in'
                    | 'io'
                    | 'iq'
                    | 'ir'
                    | 'is'
                    | 'it'
                    | 'je'
                    | 'jm'
                    | 'jo'
                    | 'jp'
                    | 'ke'
                    | 'kg'
                    | 'kh'
                    | 'ki'
                    | 'km'
                    | 'kn'
                    | 'kp'
                    | 'kr'
                    | 'kw'
                    | 'ky'
                    | 'kz'
                    | 'la'
                    | 'lb'
                    | 'lc'
                    | 'li'
                    | 'lk'
                    | 'lr'
                    | 'ls'
                    | 'lt'
                    | 'lu'
                    | 'lv'
                    | 'ly'
                    | 'ma'
                    | 'mc'
                    | 'md'
                    | 'me'
                    | 'mf'
                    | 'mg'
                    | 'mh'
                    | 'mk'
                    | 'ml'
                    | 'mm'
                    | 'mn'
                    | 'mo'
                    | 'mp'
                    | 'mq'
                    | 'mr'
                    | 'ms'
                    | 'mt'
                    | 'mu'
                    | 'mv'
                    | 'mw'
                    | 'mx'
                    | 'my'
                    | 'mz'
                    | 'na'
                    | 'nc'
                    | 'ne'
                    | 'nf'
                    | 'ng'
                    | 'ni'
                    | 'nl'
                    | 'no'
                    | 'np'
                    | 'nr'
                    | 'nu'
                    | 'nz'
                    | 'om'
                    | 'pa'
                    | 'pe'
                    | 'pf'
                    | 'pg'
                    | 'ph'
                    | 'pk'
                    | 'pl'
                    | 'pm'
                    | 'pn'
                    | 'pr'
                    | 'ps'
                    | 'pt'
                    | 'pw'
                    | 'py'
                    | 'qa'
                    | 'qz'
                    | 're'
                    | 'ro'
                    | 'rs'
                    | 'ru'
                    | 'rw'
                    | 'sa'
                    | 'sb'
                    | 'sc'
                    | 'sd'
                    | 'se'
                    | 'sg'
                    | 'sh'
                    | 'si'
                    | 'sj'
                    | 'sk'
                    | 'sl'
                    | 'sm'
                    | 'sn'
                    | 'so'
                    | 'sr'
                    | 'ss'
                    | 'st'
                    | 'sv'
                    | 'sx'
                    | 'sy'
                    | 'sz'
                    | 'tc'
                    | 'td'
                    | 'tf'
                    | 'tg'
                    | 'th'
                    | 'tj'
                    | 'tk'
                    | 'tl'
                    | 'tm'
                    | 'tn'
                    | 'to'
                    | 'tr'
                    | 'tt'
                    | 'tv'
                    | 'tw'
                    | 'tz'
                    | 'ua'
                    | 'ug'
                    | 'um'
                    | 'us'
                    | 'uy'
                    | 'uz'
                    | 'va'
                    | 'vc'
                    | 've'
                    | 'vg'
                    | 'vi'
                    | 'vn'
                    | 'vu'
                    | 'wf'
                    | 'ws'
                    | 'ye'
                    | 'yt'
                    | 'za'
                    | 'zm'
                    | 'zw';
                }

                interface Kanji {
                  /**
                   * City, district, suburb, town, or village.
                   */
                  city: string | null;

                  /**
                   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                   */
                  country: Kanji.Country | null;

                  /**
                   * Address line 1 (e.g., street, PO Box, or company name).
                   */
                  line1: string | null;

                  /**
                   * Address line 2 (e.g., apartment, suite, unit, or building).
                   */
                  line2: string | null;

                  /**
                   * ZIP or postal code.
                   */
                  postal_code: string | null;

                  /**
                   * State, county, province, or region.
                   */
                  state: string | null;

                  /**
                   * Town or cho-me.
                   */
                  town: string | null;
                }

                namespace Kanji {
                  type Country =
                    | 'ad'
                    | 'ae'
                    | 'af'
                    | 'ag'
                    | 'ai'
                    | 'al'
                    | 'am'
                    | 'ao'
                    | 'aq'
                    | 'ar'
                    | 'as'
                    | 'at'
                    | 'au'
                    | 'aw'
                    | 'ax'
                    | 'az'
                    | 'ba'
                    | 'bb'
                    | 'bd'
                    | 'be'
                    | 'bf'
                    | 'bg'
                    | 'bh'
                    | 'bi'
                    | 'bj'
                    | 'bl'
                    | 'bm'
                    | 'bn'
                    | 'bo'
                    | 'bq'
                    | 'br'
                    | 'bs'
                    | 'bt'
                    | 'bv'
                    | 'bw'
                    | 'by'
                    | 'bz'
                    | 'ca'
                    | 'cc'
                    | 'cd'
                    | 'cf'
                    | 'cg'
                    | 'ch'
                    | 'ci'
                    | 'ck'
                    | 'cl'
                    | 'cm'
                    | 'cn'
                    | 'co'
                    | 'cr'
                    | 'cu'
                    | 'cv'
                    | 'cw'
                    | 'cx'
                    | 'cy'
                    | 'cz'
                    | 'de'
                    | 'dj'
                    | 'dk'
                    | 'dm'
                    | 'do'
                    | 'dz'
                    | 'ec'
                    | 'ee'
                    | 'eg'
                    | 'eh'
                    | 'er'
                    | 'es'
                    | 'et'
                    | 'fi'
                    | 'fj'
                    | 'fk'
                    | 'fm'
                    | 'fo'
                    | 'fr'
                    | 'ga'
                    | 'gb'
                    | 'gd'
                    | 'ge'
                    | 'gf'
                    | 'gg'
                    | 'gh'
                    | 'gi'
                    | 'gl'
                    | 'gm'
                    | 'gn'
                    | 'gp'
                    | 'gq'
                    | 'gr'
                    | 'gs'
                    | 'gt'
                    | 'gu'
                    | 'gw'
                    | 'gy'
                    | 'hk'
                    | 'hm'
                    | 'hn'
                    | 'hr'
                    | 'ht'
                    | 'hu'
                    | 'id'
                    | 'ie'
                    | 'il'
                    | 'im'
                    | 'in'
                    | 'io'
                    | 'iq'
                    | 'ir'
                    | 'is'
                    | 'it'
                    | 'je'
                    | 'jm'
                    | 'jo'
                    | 'jp'
                    | 'ke'
                    | 'kg'
                    | 'kh'
                    | 'ki'
                    | 'km'
                    | 'kn'
                    | 'kp'
                    | 'kr'
                    | 'kw'
                    | 'ky'
                    | 'kz'
                    | 'la'
                    | 'lb'
                    | 'lc'
                    | 'li'
                    | 'lk'
                    | 'lr'
                    | 'ls'
                    | 'lt'
                    | 'lu'
                    | 'lv'
                    | 'ly'
                    | 'ma'
                    | 'mc'
                    | 'md'
                    | 'me'
                    | 'mf'
                    | 'mg'
                    | 'mh'
                    | 'mk'
                    | 'ml'
                    | 'mm'
                    | 'mn'
                    | 'mo'
                    | 'mp'
                    | 'mq'
                    | 'mr'
                    | 'ms'
                    | 'mt'
                    | 'mu'
                    | 'mv'
                    | 'mw'
                    | 'mx'
                    | 'my'
                    | 'mz'
                    | 'na'
                    | 'nc'
                    | 'ne'
                    | 'nf'
                    | 'ng'
                    | 'ni'
                    | 'nl'
                    | 'no'
                    | 'np'
                    | 'nr'
                    | 'nu'
                    | 'nz'
                    | 'om'
                    | 'pa'
                    | 'pe'
                    | 'pf'
                    | 'pg'
                    | 'ph'
                    | 'pk'
                    | 'pl'
                    | 'pm'
                    | 'pn'
                    | 'pr'
                    | 'ps'
                    | 'pt'
                    | 'pw'
                    | 'py'
                    | 'qa'
                    | 'qz'
                    | 're'
                    | 'ro'
                    | 'rs'
                    | 'ru'
                    | 'rw'
                    | 'sa'
                    | 'sb'
                    | 'sc'
                    | 'sd'
                    | 'se'
                    | 'sg'
                    | 'sh'
                    | 'si'
                    | 'sj'
                    | 'sk'
                    | 'sl'
                    | 'sm'
                    | 'sn'
                    | 'so'
                    | 'sr'
                    | 'ss'
                    | 'st'
                    | 'sv'
                    | 'sx'
                    | 'sy'
                    | 'sz'
                    | 'tc'
                    | 'td'
                    | 'tf'
                    | 'tg'
                    | 'th'
                    | 'tj'
                    | 'tk'
                    | 'tl'
                    | 'tm'
                    | 'tn'
                    | 'to'
                    | 'tr'
                    | 'tt'
                    | 'tv'
                    | 'tw'
                    | 'tz'
                    | 'ua'
                    | 'ug'
                    | 'um'
                    | 'us'
                    | 'uy'
                    | 'uz'
                    | 'va'
                    | 'vc'
                    | 've'
                    | 'vg'
                    | 'vi'
                    | 'vn'
                    | 'vu'
                    | 'wf'
                    | 'ws'
                    | 'ye'
                    | 'yt'
                    | 'za'
                    | 'zm'
                    | 'zw';
                }
              }

              interface ScriptNames {
                /**
                 * Kana name.
                 */
                kana: ScriptNames.Kana | null;

                /**
                 * Kanji name.
                 */
                kanji: ScriptNames.Kanji | null;
              }

              namespace ScriptNames {
                interface Kana {
                  /**
                   * Registered name of the business.
                   */
                  registered_name: string | null;
                }

                interface Kanji {
                  /**
                   * Registered name of the business.
                   */
                  registered_name: string | null;
                }
              }

              type Structure =
                | 'free_zone_establishment'
                | 'free_zone_llc'
                | 'governmental_unit'
                | 'government_instrumentality'
                | 'incorporated_non_profit'
                | 'incorporated_partnership'
                | 'llc'
                | 'multi_member_llc'
                | 'private_company'
                | 'private_corporation'
                | 'private_partnership'
                | 'public_company'
                | 'public_corporation'
                | 'public_partnership'
                | 'registered_charity'
                | 'single_member_llc'
                | 'sole_establishment'
                | 'sole_proprietorship'
                | 'tax_exempt_government_instrumentality'
                | 'unincorporated_association'
                | 'unincorporated_non_profit'
                | 'unincorporated_partnership';
            }

            type Country =
              | 'ad'
              | 'ae'
              | 'af'
              | 'ag'
              | 'ai'
              | 'al'
              | 'am'
              | 'ao'
              | 'aq'
              | 'ar'
              | 'as'
              | 'at'
              | 'au'
              | 'aw'
              | 'ax'
              | 'az'
              | 'ba'
              | 'bb'
              | 'bd'
              | 'be'
              | 'bf'
              | 'bg'
              | 'bh'
              | 'bi'
              | 'bj'
              | 'bl'
              | 'bm'
              | 'bn'
              | 'bo'
              | 'bq'
              | 'br'
              | 'bs'
              | 'bt'
              | 'bv'
              | 'bw'
              | 'by'
              | 'bz'
              | 'ca'
              | 'cc'
              | 'cd'
              | 'cf'
              | 'cg'
              | 'ch'
              | 'ci'
              | 'ck'
              | 'cl'
              | 'cm'
              | 'cn'
              | 'co'
              | 'cr'
              | 'cu'
              | 'cv'
              | 'cw'
              | 'cx'
              | 'cy'
              | 'cz'
              | 'de'
              | 'dj'
              | 'dk'
              | 'dm'
              | 'do'
              | 'dz'
              | 'ec'
              | 'ee'
              | 'eg'
              | 'eh'
              | 'er'
              | 'es'
              | 'et'
              | 'fi'
              | 'fj'
              | 'fk'
              | 'fm'
              | 'fo'
              | 'fr'
              | 'ga'
              | 'gb'
              | 'gd'
              | 'ge'
              | 'gf'
              | 'gg'
              | 'gh'
              | 'gi'
              | 'gl'
              | 'gm'
              | 'gn'
              | 'gp'
              | 'gq'
              | 'gr'
              | 'gs'
              | 'gt'
              | 'gu'
              | 'gw'
              | 'gy'
              | 'hk'
              | 'hm'
              | 'hn'
              | 'hr'
              | 'ht'
              | 'hu'
              | 'id'
              | 'ie'
              | 'il'
              | 'im'
              | 'in'
              | 'io'
              | 'iq'
              | 'ir'
              | 'is'
              | 'it'
              | 'je'
              | 'jm'
              | 'jo'
              | 'jp'
              | 'ke'
              | 'kg'
              | 'kh'
              | 'ki'
              | 'km'
              | 'kn'
              | 'kp'
              | 'kr'
              | 'kw'
              | 'ky'
              | 'kz'
              | 'la'
              | 'lb'
              | 'lc'
              | 'li'
              | 'lk'
              | 'lr'
              | 'ls'
              | 'lt'
              | 'lu'
              | 'lv'
              | 'ly'
              | 'ma'
              | 'mc'
              | 'md'
              | 'me'
              | 'mf'
              | 'mg'
              | 'mh'
              | 'mk'
              | 'ml'
              | 'mm'
              | 'mn'
              | 'mo'
              | 'mp'
              | 'mq'
              | 'mr'
              | 'ms'
              | 'mt'
              | 'mu'
              | 'mv'
              | 'mw'
              | 'mx'
              | 'my'
              | 'mz'
              | 'na'
              | 'nc'
              | 'ne'
              | 'nf'
              | 'ng'
              | 'ni'
              | 'nl'
              | 'no'
              | 'np'
              | 'nr'
              | 'nu'
              | 'nz'
              | 'om'
              | 'pa'
              | 'pe'
              | 'pf'
              | 'pg'
              | 'ph'
              | 'pk'
              | 'pl'
              | 'pm'
              | 'pn'
              | 'pr'
              | 'ps'
              | 'pt'
              | 'pw'
              | 'py'
              | 'qa'
              | 'qz'
              | 're'
              | 'ro'
              | 'rs'
              | 'ru'
              | 'rw'
              | 'sa'
              | 'sb'
              | 'sc'
              | 'sd'
              | 'se'
              | 'sg'
              | 'sh'
              | 'si'
              | 'sj'
              | 'sk'
              | 'sl'
              | 'sm'
              | 'sn'
              | 'so'
              | 'sr'
              | 'ss'
              | 'st'
              | 'sv'
              | 'sx'
              | 'sy'
              | 'sz'
              | 'tc'
              | 'td'
              | 'tf'
              | 'tg'
              | 'th'
              | 'tj'
              | 'tk'
              | 'tl'
              | 'tm'
              | 'tn'
              | 'to'
              | 'tr'
              | 'tt'
              | 'tv'
              | 'tw'
              | 'tz'
              | 'ua'
              | 'ug'
              | 'um'
              | 'us'
              | 'uy'
              | 'uz'
              | 'va'
              | 'vc'
              | 've'
              | 'vg'
              | 'vi'
              | 'vn'
              | 'vu'
              | 'wf'
              | 'ws'
              | 'ye'
              | 'yt'
              | 'za'
              | 'zm'
              | 'zw';

            type EntityType =
              | 'company'
              | 'government_entity'
              | 'individual'
              | 'non_profit';

            interface Individual {
              /**
               * The account ID which the individual belongs to.
               */
              account: string;

              /**
               * Additional addresses associated with the individual.
               */
              additional_addresses: Array<Individual.AdditionalAddress> | null;

              /**
               * Additional names (e.g. aliases) associated with the individual.
               */
              additional_names: Array<Individual.AdditionalName> | null;

              /**
               * Terms of service acceptances.
               */
              additional_terms_of_service: Individual.AdditionalTermsOfService | null;

              /**
               * The individual's residential address.
               */
              address: Individual.Address | null;

              /**
               * Time at which the object was created. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
               */
              created: string;

              /**
               * The individual's date of birth.
               */
              date_of_birth: Individual.DateOfBirth | null;

              /**
               * Documents that may be submitted to satisfy various informational requests.
               */
              documents: Individual.Documents | null;

              /**
               * The individual's email address.
               */
              email: string | null;

              /**
               * The individual's first name.
               */
              given_name: string | null;

              /**
               * Unique identifier for the object.
               */
              id: string;

              /**
               * The identification numbers (e.g., SSN) associated with the individual.
               */
              id_numbers: Array<Individual.IdNumber> | null;

              /**
               * The individual's gender (International regulations require either "male” or "female").
               */
              legal_gender: Individual.LegalGender | null;

              /**
               * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
               */
              metadata: Stripe.Metadata | null;

              /**
               * The countries where the individual is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
               */
              nationalities: Array<Individual.Nationality> | null;

              /**
               * String representing the object's type. Objects of the same type share the same value.
               */
              object: string;

              /**
               * The individual's phone number.
               */
              phone: string | null;

              /**
               * Indicates if the individual or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
               */
              political_exposure: Individual.PoliticalExposure | null;

              /**
               * The relationship that this individual has with the Account's identity.
               */
              relationship: Individual.Relationship | null;

              /**
               * The script addresses (e.g., non-Latin characters) associated with the individual.
               */
              script_addresses: Individual.ScriptAddresses | null;

              /**
               * The script names (e.g. non-Latin characters) associated with the individual.
               */
              script_names: Individual.ScriptNames | null;

              /**
               * The individual's last name.
               */
              surname: string | null;

              /**
               * Time at which the object was last updated.
               */
              updated: string;
            }

            namespace Individual {
              interface AdditionalAddress {
                /**
                 * City, district, suburb, town, or village.
                 */
                city: string | null;

                /**
                 * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                 */
                country: AdditionalAddress.Country | null;

                /**
                 * Address line 1 (e.g., street, PO Box, or company name).
                 */
                line1: string | null;

                /**
                 * Address line 2 (e.g., apartment, suite, unit, or building).
                 */
                line2: string | null;

                /**
                 * ZIP or postal code.
                 */
                postal_code: string | null;

                /**
                 * Purpose of additional address.
                 */
                purpose: 'registered';

                /**
                 * State, county, province, or region.
                 */
                state: string | null;

                /**
                 * Town or cho-me.
                 */
                town: string | null;
              }

              namespace AdditionalAddress {
                type Country =
                  | 'ad'
                  | 'ae'
                  | 'af'
                  | 'ag'
                  | 'ai'
                  | 'al'
                  | 'am'
                  | 'ao'
                  | 'aq'
                  | 'ar'
                  | 'as'
                  | 'at'
                  | 'au'
                  | 'aw'
                  | 'ax'
                  | 'az'
                  | 'ba'
                  | 'bb'
                  | 'bd'
                  | 'be'
                  | 'bf'
                  | 'bg'
                  | 'bh'
                  | 'bi'
                  | 'bj'
                  | 'bl'
                  | 'bm'
                  | 'bn'
                  | 'bo'
                  | 'bq'
                  | 'br'
                  | 'bs'
                  | 'bt'
                  | 'bv'
                  | 'bw'
                  | 'by'
                  | 'bz'
                  | 'ca'
                  | 'cc'
                  | 'cd'
                  | 'cf'
                  | 'cg'
                  | 'ch'
                  | 'ci'
                  | 'ck'
                  | 'cl'
                  | 'cm'
                  | 'cn'
                  | 'co'
                  | 'cr'
                  | 'cu'
                  | 'cv'
                  | 'cw'
                  | 'cx'
                  | 'cy'
                  | 'cz'
                  | 'de'
                  | 'dj'
                  | 'dk'
                  | 'dm'
                  | 'do'
                  | 'dz'
                  | 'ec'
                  | 'ee'
                  | 'eg'
                  | 'eh'
                  | 'er'
                  | 'es'
                  | 'et'
                  | 'fi'
                  | 'fj'
                  | 'fk'
                  | 'fm'
                  | 'fo'
                  | 'fr'
                  | 'ga'
                  | 'gb'
                  | 'gd'
                  | 'ge'
                  | 'gf'
                  | 'gg'
                  | 'gh'
                  | 'gi'
                  | 'gl'
                  | 'gm'
                  | 'gn'
                  | 'gp'
                  | 'gq'
                  | 'gr'
                  | 'gs'
                  | 'gt'
                  | 'gu'
                  | 'gw'
                  | 'gy'
                  | 'hk'
                  | 'hm'
                  | 'hn'
                  | 'hr'
                  | 'ht'
                  | 'hu'
                  | 'id'
                  | 'ie'
                  | 'il'
                  | 'im'
                  | 'in'
                  | 'io'
                  | 'iq'
                  | 'ir'
                  | 'is'
                  | 'it'
                  | 'je'
                  | 'jm'
                  | 'jo'
                  | 'jp'
                  | 'ke'
                  | 'kg'
                  | 'kh'
                  | 'ki'
                  | 'km'
                  | 'kn'
                  | 'kp'
                  | 'kr'
                  | 'kw'
                  | 'ky'
                  | 'kz'
                  | 'la'
                  | 'lb'
                  | 'lc'
                  | 'li'
                  | 'lk'
                  | 'lr'
                  | 'ls'
                  | 'lt'
                  | 'lu'
                  | 'lv'
                  | 'ly'
                  | 'ma'
                  | 'mc'
                  | 'md'
                  | 'me'
                  | 'mf'
                  | 'mg'
                  | 'mh'
                  | 'mk'
                  | 'ml'
                  | 'mm'
                  | 'mn'
                  | 'mo'
                  | 'mp'
                  | 'mq'
                  | 'mr'
                  | 'ms'
                  | 'mt'
                  | 'mu'
                  | 'mv'
                  | 'mw'
                  | 'mx'
                  | 'my'
                  | 'mz'
                  | 'na'
                  | 'nc'
                  | 'ne'
                  | 'nf'
                  | 'ng'
                  | 'ni'
                  | 'nl'
                  | 'no'
                  | 'np'
                  | 'nr'
                  | 'nu'
                  | 'nz'
                  | 'om'
                  | 'pa'
                  | 'pe'
                  | 'pf'
                  | 'pg'
                  | 'ph'
                  | 'pk'
                  | 'pl'
                  | 'pm'
                  | 'pn'
                  | 'pr'
                  | 'ps'
                  | 'pt'
                  | 'pw'
                  | 'py'
                  | 'qa'
                  | 'qz'
                  | 're'
                  | 'ro'
                  | 'rs'
                  | 'ru'
                  | 'rw'
                  | 'sa'
                  | 'sb'
                  | 'sc'
                  | 'sd'
                  | 'se'
                  | 'sg'
                  | 'sh'
                  | 'si'
                  | 'sj'
                  | 'sk'
                  | 'sl'
                  | 'sm'
                  | 'sn'
                  | 'so'
                  | 'sr'
                  | 'ss'
                  | 'st'
                  | 'sv'
                  | 'sx'
                  | 'sy'
                  | 'sz'
                  | 'tc'
                  | 'td'
                  | 'tf'
                  | 'tg'
                  | 'th'
                  | 'tj'
                  | 'tk'
                  | 'tl'
                  | 'tm'
                  | 'tn'
                  | 'to'
                  | 'tr'
                  | 'tt'
                  | 'tv'
                  | 'tw'
                  | 'tz'
                  | 'ua'
                  | 'ug'
                  | 'um'
                  | 'us'
                  | 'uy'
                  | 'uz'
                  | 'va'
                  | 'vc'
                  | 've'
                  | 'vg'
                  | 'vi'
                  | 'vn'
                  | 'vu'
                  | 'wf'
                  | 'ws'
                  | 'ye'
                  | 'yt'
                  | 'za'
                  | 'zm'
                  | 'zw';
              }

              interface AdditionalName {
                /**
                 * The individual's full name.
                 */
                full_name: string | null;

                /**
                 * The individual's first or given name.
                 */
                given_name: string | null;

                /**
                 * The purpose or type of the additional name.
                 */
                purpose: AdditionalName.Purpose;

                /**
                 * The individual's last or family name.
                 */
                surname: string | null;
              }

              namespace AdditionalName {
                type Purpose = 'alias' | 'maiden';
              }

              interface AdditionalTermsOfService {
                /**
                 * Stripe terms of service agreement.
                 */
                account: AdditionalTermsOfService.Account | null;
              }

              namespace AdditionalTermsOfService {
                interface Account {
                  /**
                   * The time when the Account's representative accepted the terms of service. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
                   */
                  date: string | null;

                  /**
                   * The IP address from which the Account's representative accepted the terms of service.
                   */
                  ip: string | null;

                  /**
                   * The user agent of the browser from which the Account's representative accepted the terms of service.
                   */
                  user_agent: string | null;
                }
              }

              interface Address {
                /**
                 * City, district, suburb, town, or village.
                 */
                city: string | null;

                /**
                 * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                 */
                country: Address.Country | null;

                /**
                 * Address line 1 (e.g., street, PO Box, or company name).
                 */
                line1: string | null;

                /**
                 * Address line 2 (e.g., apartment, suite, unit, or building).
                 */
                line2: string | null;

                /**
                 * ZIP or postal code.
                 */
                postal_code: string | null;

                /**
                 * State, county, province, or region.
                 */
                state: string | null;

                /**
                 * Town or cho-me.
                 */
                town: string | null;
              }

              namespace Address {
                type Country =
                  | 'ad'
                  | 'ae'
                  | 'af'
                  | 'ag'
                  | 'ai'
                  | 'al'
                  | 'am'
                  | 'ao'
                  | 'aq'
                  | 'ar'
                  | 'as'
                  | 'at'
                  | 'au'
                  | 'aw'
                  | 'ax'
                  | 'az'
                  | 'ba'
                  | 'bb'
                  | 'bd'
                  | 'be'
                  | 'bf'
                  | 'bg'
                  | 'bh'
                  | 'bi'
                  | 'bj'
                  | 'bl'
                  | 'bm'
                  | 'bn'
                  | 'bo'
                  | 'bq'
                  | 'br'
                  | 'bs'
                  | 'bt'
                  | 'bv'
                  | 'bw'
                  | 'by'
                  | 'bz'
                  | 'ca'
                  | 'cc'
                  | 'cd'
                  | 'cf'
                  | 'cg'
                  | 'ch'
                  | 'ci'
                  | 'ck'
                  | 'cl'
                  | 'cm'
                  | 'cn'
                  | 'co'
                  | 'cr'
                  | 'cu'
                  | 'cv'
                  | 'cw'
                  | 'cx'
                  | 'cy'
                  | 'cz'
                  | 'de'
                  | 'dj'
                  | 'dk'
                  | 'dm'
                  | 'do'
                  | 'dz'
                  | 'ec'
                  | 'ee'
                  | 'eg'
                  | 'eh'
                  | 'er'
                  | 'es'
                  | 'et'
                  | 'fi'
                  | 'fj'
                  | 'fk'
                  | 'fm'
                  | 'fo'
                  | 'fr'
                  | 'ga'
                  | 'gb'
                  | 'gd'
                  | 'ge'
                  | 'gf'
                  | 'gg'
                  | 'gh'
                  | 'gi'
                  | 'gl'
                  | 'gm'
                  | 'gn'
                  | 'gp'
                  | 'gq'
                  | 'gr'
                  | 'gs'
                  | 'gt'
                  | 'gu'
                  | 'gw'
                  | 'gy'
                  | 'hk'
                  | 'hm'
                  | 'hn'
                  | 'hr'
                  | 'ht'
                  | 'hu'
                  | 'id'
                  | 'ie'
                  | 'il'
                  | 'im'
                  | 'in'
                  | 'io'
                  | 'iq'
                  | 'ir'
                  | 'is'
                  | 'it'
                  | 'je'
                  | 'jm'
                  | 'jo'
                  | 'jp'
                  | 'ke'
                  | 'kg'
                  | 'kh'
                  | 'ki'
                  | 'km'
                  | 'kn'
                  | 'kp'
                  | 'kr'
                  | 'kw'
                  | 'ky'
                  | 'kz'
                  | 'la'
                  | 'lb'
                  | 'lc'
                  | 'li'
                  | 'lk'
                  | 'lr'
                  | 'ls'
                  | 'lt'
                  | 'lu'
                  | 'lv'
                  | 'ly'
                  | 'ma'
                  | 'mc'
                  | 'md'
                  | 'me'
                  | 'mf'
                  | 'mg'
                  | 'mh'
                  | 'mk'
                  | 'ml'
                  | 'mm'
                  | 'mn'
                  | 'mo'
                  | 'mp'
                  | 'mq'
                  | 'mr'
                  | 'ms'
                  | 'mt'
                  | 'mu'
                  | 'mv'
                  | 'mw'
                  | 'mx'
                  | 'my'
                  | 'mz'
                  | 'na'
                  | 'nc'
                  | 'ne'
                  | 'nf'
                  | 'ng'
                  | 'ni'
                  | 'nl'
                  | 'no'
                  | 'np'
                  | 'nr'
                  | 'nu'
                  | 'nz'
                  | 'om'
                  | 'pa'
                  | 'pe'
                  | 'pf'
                  | 'pg'
                  | 'ph'
                  | 'pk'
                  | 'pl'
                  | 'pm'
                  | 'pn'
                  | 'pr'
                  | 'ps'
                  | 'pt'
                  | 'pw'
                  | 'py'
                  | 'qa'
                  | 'qz'
                  | 're'
                  | 'ro'
                  | 'rs'
                  | 'ru'
                  | 'rw'
                  | 'sa'
                  | 'sb'
                  | 'sc'
                  | 'sd'
                  | 'se'
                  | 'sg'
                  | 'sh'
                  | 'si'
                  | 'sj'
                  | 'sk'
                  | 'sl'
                  | 'sm'
                  | 'sn'
                  | 'so'
                  | 'sr'
                  | 'ss'
                  | 'st'
                  | 'sv'
                  | 'sx'
                  | 'sy'
                  | 'sz'
                  | 'tc'
                  | 'td'
                  | 'tf'
                  | 'tg'
                  | 'th'
                  | 'tj'
                  | 'tk'
                  | 'tl'
                  | 'tm'
                  | 'tn'
                  | 'to'
                  | 'tr'
                  | 'tt'
                  | 'tv'
                  | 'tw'
                  | 'tz'
                  | 'ua'
                  | 'ug'
                  | 'um'
                  | 'us'
                  | 'uy'
                  | 'uz'
                  | 'va'
                  | 'vc'
                  | 've'
                  | 'vg'
                  | 'vi'
                  | 'vn'
                  | 'vu'
                  | 'wf'
                  | 'ws'
                  | 'ye'
                  | 'yt'
                  | 'za'
                  | 'zm'
                  | 'zw';
              }

              interface DateOfBirth {
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

              interface Documents {
                /**
                 * One or more documents that demonstrate proof that this person is authorized to represent the company.
                 */
                company_authorization: Documents.CompanyAuthorization | null;

                /**
                 * One or more documents showing the person's passport page with photo and personal data.
                 */
                passport: Documents.Passport | null;

                /**
                 * An identifying document showing the person's name, either a passport or local ID card.
                 */
                primary_verification: Documents.PrimaryVerification | null;

                /**
                 * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
                 */
                secondary_verification: Documents.SecondaryVerification | null;

                /**
                 * One or more documents showing the person's visa required for living in the country where they are residing.
                 */
                visa: Documents.Visa | null;
              }

              namespace Documents {
                interface CompanyAuthorization {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
                }

                interface Passport {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
                }

                interface PrimaryVerification {
                  /**
                   * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens for the front and back of the verification document.
                   */
                  front_back: PrimaryVerification.FrontBack;

                  /**
                   * The format of the verification document. Currently supports `front_back` only.
                   */
                  type: 'front_back';
                }

                namespace PrimaryVerification {
                  interface FrontBack {
                    /**
                     * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the back of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                     */
                    back: string | null;

                    /**
                     * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                     */
                    front: string;
                  }
                }

                interface SecondaryVerification {
                  /**
                   * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens for the front and back of the verification document.
                   */
                  front_back: SecondaryVerification.FrontBack;

                  /**
                   * The format of the verification document. Currently supports `front_back` only.
                   */
                  type: 'front_back';
                }

                namespace SecondaryVerification {
                  interface FrontBack {
                    /**
                     * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the back of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                     */
                    back: string | null;

                    /**
                     * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                     */
                    front: string;
                  }
                }

                interface Visa {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
                }
              }

              interface IdNumber {
                /**
                 * The ID number type of an individual.
                 */
                type: IdNumber.Type;
              }

              namespace IdNumber {
                type Type =
                  | 'ae_eid'
                  | 'br_cpf'
                  | 'de_stn'
                  | 'hk_id'
                  | 'mx_rfc'
                  | 'my_nric'
                  | 'nl_bsn'
                  | 'sg_fin'
                  | 'sg_nric'
                  | 'th_lc'
                  | 'th_pin'
                  | 'us_itin'
                  | 'us_itin_last_4'
                  | 'us_ssn'
                  | 'us_ssn_last_4';
              }

              type LegalGender = 'female' | 'male';

              type Nationality =
                | 'ad'
                | 'ae'
                | 'af'
                | 'ag'
                | 'ai'
                | 'al'
                | 'am'
                | 'ao'
                | 'aq'
                | 'ar'
                | 'as'
                | 'at'
                | 'au'
                | 'aw'
                | 'ax'
                | 'az'
                | 'ba'
                | 'bb'
                | 'bd'
                | 'be'
                | 'bf'
                | 'bg'
                | 'bh'
                | 'bi'
                | 'bj'
                | 'bl'
                | 'bm'
                | 'bn'
                | 'bo'
                | 'bq'
                | 'br'
                | 'bs'
                | 'bt'
                | 'bv'
                | 'bw'
                | 'by'
                | 'bz'
                | 'ca'
                | 'cc'
                | 'cd'
                | 'cf'
                | 'cg'
                | 'ch'
                | 'ci'
                | 'ck'
                | 'cl'
                | 'cm'
                | 'cn'
                | 'co'
                | 'cr'
                | 'cu'
                | 'cv'
                | 'cw'
                | 'cx'
                | 'cy'
                | 'cz'
                | 'de'
                | 'dj'
                | 'dk'
                | 'dm'
                | 'do'
                | 'dz'
                | 'ec'
                | 'ee'
                | 'eg'
                | 'eh'
                | 'er'
                | 'es'
                | 'et'
                | 'fi'
                | 'fj'
                | 'fk'
                | 'fm'
                | 'fo'
                | 'fr'
                | 'ga'
                | 'gb'
                | 'gd'
                | 'ge'
                | 'gf'
                | 'gg'
                | 'gh'
                | 'gi'
                | 'gl'
                | 'gm'
                | 'gn'
                | 'gp'
                | 'gq'
                | 'gr'
                | 'gs'
                | 'gt'
                | 'gu'
                | 'gw'
                | 'gy'
                | 'hk'
                | 'hm'
                | 'hn'
                | 'hr'
                | 'ht'
                | 'hu'
                | 'id'
                | 'ie'
                | 'il'
                | 'im'
                | 'in'
                | 'io'
                | 'iq'
                | 'ir'
                | 'is'
                | 'it'
                | 'je'
                | 'jm'
                | 'jo'
                | 'jp'
                | 'ke'
                | 'kg'
                | 'kh'
                | 'ki'
                | 'km'
                | 'kn'
                | 'kp'
                | 'kr'
                | 'kw'
                | 'ky'
                | 'kz'
                | 'la'
                | 'lb'
                | 'lc'
                | 'li'
                | 'lk'
                | 'lr'
                | 'ls'
                | 'lt'
                | 'lu'
                | 'lv'
                | 'ly'
                | 'ma'
                | 'mc'
                | 'md'
                | 'me'
                | 'mf'
                | 'mg'
                | 'mh'
                | 'mk'
                | 'ml'
                | 'mm'
                | 'mn'
                | 'mo'
                | 'mp'
                | 'mq'
                | 'mr'
                | 'ms'
                | 'mt'
                | 'mu'
                | 'mv'
                | 'mw'
                | 'mx'
                | 'my'
                | 'mz'
                | 'na'
                | 'nc'
                | 'ne'
                | 'nf'
                | 'ng'
                | 'ni'
                | 'nl'
                | 'no'
                | 'np'
                | 'nr'
                | 'nu'
                | 'nz'
                | 'om'
                | 'pa'
                | 'pe'
                | 'pf'
                | 'pg'
                | 'ph'
                | 'pk'
                | 'pl'
                | 'pm'
                | 'pn'
                | 'pr'
                | 'ps'
                | 'pt'
                | 'pw'
                | 'py'
                | 'qa'
                | 'qz'
                | 're'
                | 'ro'
                | 'rs'
                | 'ru'
                | 'rw'
                | 'sa'
                | 'sb'
                | 'sc'
                | 'sd'
                | 'se'
                | 'sg'
                | 'sh'
                | 'si'
                | 'sj'
                | 'sk'
                | 'sl'
                | 'sm'
                | 'sn'
                | 'so'
                | 'sr'
                | 'ss'
                | 'st'
                | 'sv'
                | 'sx'
                | 'sy'
                | 'sz'
                | 'tc'
                | 'td'
                | 'tf'
                | 'tg'
                | 'th'
                | 'tj'
                | 'tk'
                | 'tl'
                | 'tm'
                | 'tn'
                | 'to'
                | 'tr'
                | 'tt'
                | 'tv'
                | 'tw'
                | 'tz'
                | 'ua'
                | 'ug'
                | 'um'
                | 'us'
                | 'uy'
                | 'uz'
                | 'va'
                | 'vc'
                | 've'
                | 'vg'
                | 'vi'
                | 'vn'
                | 'vu'
                | 'wf'
                | 'ws'
                | 'ye'
                | 'yt'
                | 'za'
                | 'zm'
                | 'zw';

              type PoliticalExposure = 'existing' | 'none';

              interface Relationship {
                /**
                 * Whether the individual is a director of the Account's legal entity. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
                 */
                director: boolean | null;

                /**
                 * Whether the individual has significant responsibility to control, manage, or direct the organization.
                 */
                executive: boolean | null;

                /**
                 * Whether the individual is the legal guardian of the Account's representative.
                 */
                legal_guardian: boolean | null;

                /**
                 * Whether the individual is an owner of the Account's legal entity.
                 */
                owner: boolean | null;

                /**
                 * The percent owned by the individual of the Account's legal entity.
                 */
                percent_ownership: string | null;

                /**
                 * Whether the individual is authorized as the primary representative of the Account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
                 */
                representative: boolean | null;

                /**
                 * The individual's title (e.g., CEO, Support Engineer).
                 */
                title: string | null;
              }

              interface ScriptAddresses {
                /**
                 * Kana Address.
                 */
                kana: ScriptAddresses.Kana | null;

                /**
                 * Kanji Address.
                 */
                kanji: ScriptAddresses.Kanji | null;
              }

              namespace ScriptAddresses {
                interface Kana {
                  /**
                   * City, district, suburb, town, or village.
                   */
                  city: string | null;

                  /**
                   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                   */
                  country: Kana.Country | null;

                  /**
                   * Address line 1 (e.g., street, PO Box, or company name).
                   */
                  line1: string | null;

                  /**
                   * Address line 2 (e.g., apartment, suite, unit, or building).
                   */
                  line2: string | null;

                  /**
                   * ZIP or postal code.
                   */
                  postal_code: string | null;

                  /**
                   * State, county, province, or region.
                   */
                  state: string | null;

                  /**
                   * Town or cho-me.
                   */
                  town: string | null;
                }

                namespace Kana {
                  type Country =
                    | 'ad'
                    | 'ae'
                    | 'af'
                    | 'ag'
                    | 'ai'
                    | 'al'
                    | 'am'
                    | 'ao'
                    | 'aq'
                    | 'ar'
                    | 'as'
                    | 'at'
                    | 'au'
                    | 'aw'
                    | 'ax'
                    | 'az'
                    | 'ba'
                    | 'bb'
                    | 'bd'
                    | 'be'
                    | 'bf'
                    | 'bg'
                    | 'bh'
                    | 'bi'
                    | 'bj'
                    | 'bl'
                    | 'bm'
                    | 'bn'
                    | 'bo'
                    | 'bq'
                    | 'br'
                    | 'bs'
                    | 'bt'
                    | 'bv'
                    | 'bw'
                    | 'by'
                    | 'bz'
                    | 'ca'
                    | 'cc'
                    | 'cd'
                    | 'cf'
                    | 'cg'
                    | 'ch'
                    | 'ci'
                    | 'ck'
                    | 'cl'
                    | 'cm'
                    | 'cn'
                    | 'co'
                    | 'cr'
                    | 'cu'
                    | 'cv'
                    | 'cw'
                    | 'cx'
                    | 'cy'
                    | 'cz'
                    | 'de'
                    | 'dj'
                    | 'dk'
                    | 'dm'
                    | 'do'
                    | 'dz'
                    | 'ec'
                    | 'ee'
                    | 'eg'
                    | 'eh'
                    | 'er'
                    | 'es'
                    | 'et'
                    | 'fi'
                    | 'fj'
                    | 'fk'
                    | 'fm'
                    | 'fo'
                    | 'fr'
                    | 'ga'
                    | 'gb'
                    | 'gd'
                    | 'ge'
                    | 'gf'
                    | 'gg'
                    | 'gh'
                    | 'gi'
                    | 'gl'
                    | 'gm'
                    | 'gn'
                    | 'gp'
                    | 'gq'
                    | 'gr'
                    | 'gs'
                    | 'gt'
                    | 'gu'
                    | 'gw'
                    | 'gy'
                    | 'hk'
                    | 'hm'
                    | 'hn'
                    | 'hr'
                    | 'ht'
                    | 'hu'
                    | 'id'
                    | 'ie'
                    | 'il'
                    | 'im'
                    | 'in'
                    | 'io'
                    | 'iq'
                    | 'ir'
                    | 'is'
                    | 'it'
                    | 'je'
                    | 'jm'
                    | 'jo'
                    | 'jp'
                    | 'ke'
                    | 'kg'
                    | 'kh'
                    | 'ki'
                    | 'km'
                    | 'kn'
                    | 'kp'
                    | 'kr'
                    | 'kw'
                    | 'ky'
                    | 'kz'
                    | 'la'
                    | 'lb'
                    | 'lc'
                    | 'li'
                    | 'lk'
                    | 'lr'
                    | 'ls'
                    | 'lt'
                    | 'lu'
                    | 'lv'
                    | 'ly'
                    | 'ma'
                    | 'mc'
                    | 'md'
                    | 'me'
                    | 'mf'
                    | 'mg'
                    | 'mh'
                    | 'mk'
                    | 'ml'
                    | 'mm'
                    | 'mn'
                    | 'mo'
                    | 'mp'
                    | 'mq'
                    | 'mr'
                    | 'ms'
                    | 'mt'
                    | 'mu'
                    | 'mv'
                    | 'mw'
                    | 'mx'
                    | 'my'
                    | 'mz'
                    | 'na'
                    | 'nc'
                    | 'ne'
                    | 'nf'
                    | 'ng'
                    | 'ni'
                    | 'nl'
                    | 'no'
                    | 'np'
                    | 'nr'
                    | 'nu'
                    | 'nz'
                    | 'om'
                    | 'pa'
                    | 'pe'
                    | 'pf'
                    | 'pg'
                    | 'ph'
                    | 'pk'
                    | 'pl'
                    | 'pm'
                    | 'pn'
                    | 'pr'
                    | 'ps'
                    | 'pt'
                    | 'pw'
                    | 'py'
                    | 'qa'
                    | 'qz'
                    | 're'
                    | 'ro'
                    | 'rs'
                    | 'ru'
                    | 'rw'
                    | 'sa'
                    | 'sb'
                    | 'sc'
                    | 'sd'
                    | 'se'
                    | 'sg'
                    | 'sh'
                    | 'si'
                    | 'sj'
                    | 'sk'
                    | 'sl'
                    | 'sm'
                    | 'sn'
                    | 'so'
                    | 'sr'
                    | 'ss'
                    | 'st'
                    | 'sv'
                    | 'sx'
                    | 'sy'
                    | 'sz'
                    | 'tc'
                    | 'td'
                    | 'tf'
                    | 'tg'
                    | 'th'
                    | 'tj'
                    | 'tk'
                    | 'tl'
                    | 'tm'
                    | 'tn'
                    | 'to'
                    | 'tr'
                    | 'tt'
                    | 'tv'
                    | 'tw'
                    | 'tz'
                    | 'ua'
                    | 'ug'
                    | 'um'
                    | 'us'
                    | 'uy'
                    | 'uz'
                    | 'va'
                    | 'vc'
                    | 've'
                    | 'vg'
                    | 'vi'
                    | 'vn'
                    | 'vu'
                    | 'wf'
                    | 'ws'
                    | 'ye'
                    | 'yt'
                    | 'za'
                    | 'zm'
                    | 'zw';
                }

                interface Kanji {
                  /**
                   * City, district, suburb, town, or village.
                   */
                  city: string | null;

                  /**
                   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                   */
                  country: Kanji.Country | null;

                  /**
                   * Address line 1 (e.g., street, PO Box, or company name).
                   */
                  line1: string | null;

                  /**
                   * Address line 2 (e.g., apartment, suite, unit, or building).
                   */
                  line2: string | null;

                  /**
                   * ZIP or postal code.
                   */
                  postal_code: string | null;

                  /**
                   * State, county, province, or region.
                   */
                  state: string | null;

                  /**
                   * Town or cho-me.
                   */
                  town: string | null;
                }

                namespace Kanji {
                  type Country =
                    | 'ad'
                    | 'ae'
                    | 'af'
                    | 'ag'
                    | 'ai'
                    | 'al'
                    | 'am'
                    | 'ao'
                    | 'aq'
                    | 'ar'
                    | 'as'
                    | 'at'
                    | 'au'
                    | 'aw'
                    | 'ax'
                    | 'az'
                    | 'ba'
                    | 'bb'
                    | 'bd'
                    | 'be'
                    | 'bf'
                    | 'bg'
                    | 'bh'
                    | 'bi'
                    | 'bj'
                    | 'bl'
                    | 'bm'
                    | 'bn'
                    | 'bo'
                    | 'bq'
                    | 'br'
                    | 'bs'
                    | 'bt'
                    | 'bv'
                    | 'bw'
                    | 'by'
                    | 'bz'
                    | 'ca'
                    | 'cc'
                    | 'cd'
                    | 'cf'
                    | 'cg'
                    | 'ch'
                    | 'ci'
                    | 'ck'
                    | 'cl'
                    | 'cm'
                    | 'cn'
                    | 'co'
                    | 'cr'
                    | 'cu'
                    | 'cv'
                    | 'cw'
                    | 'cx'
                    | 'cy'
                    | 'cz'
                    | 'de'
                    | 'dj'
                    | 'dk'
                    | 'dm'
                    | 'do'
                    | 'dz'
                    | 'ec'
                    | 'ee'
                    | 'eg'
                    | 'eh'
                    | 'er'
                    | 'es'
                    | 'et'
                    | 'fi'
                    | 'fj'
                    | 'fk'
                    | 'fm'
                    | 'fo'
                    | 'fr'
                    | 'ga'
                    | 'gb'
                    | 'gd'
                    | 'ge'
                    | 'gf'
                    | 'gg'
                    | 'gh'
                    | 'gi'
                    | 'gl'
                    | 'gm'
                    | 'gn'
                    | 'gp'
                    | 'gq'
                    | 'gr'
                    | 'gs'
                    | 'gt'
                    | 'gu'
                    | 'gw'
                    | 'gy'
                    | 'hk'
                    | 'hm'
                    | 'hn'
                    | 'hr'
                    | 'ht'
                    | 'hu'
                    | 'id'
                    | 'ie'
                    | 'il'
                    | 'im'
                    | 'in'
                    | 'io'
                    | 'iq'
                    | 'ir'
                    | 'is'
                    | 'it'
                    | 'je'
                    | 'jm'
                    | 'jo'
                    | 'jp'
                    | 'ke'
                    | 'kg'
                    | 'kh'
                    | 'ki'
                    | 'km'
                    | 'kn'
                    | 'kp'
                    | 'kr'
                    | 'kw'
                    | 'ky'
                    | 'kz'
                    | 'la'
                    | 'lb'
                    | 'lc'
                    | 'li'
                    | 'lk'
                    | 'lr'
                    | 'ls'
                    | 'lt'
                    | 'lu'
                    | 'lv'
                    | 'ly'
                    | 'ma'
                    | 'mc'
                    | 'md'
                    | 'me'
                    | 'mf'
                    | 'mg'
                    | 'mh'
                    | 'mk'
                    | 'ml'
                    | 'mm'
                    | 'mn'
                    | 'mo'
                    | 'mp'
                    | 'mq'
                    | 'mr'
                    | 'ms'
                    | 'mt'
                    | 'mu'
                    | 'mv'
                    | 'mw'
                    | 'mx'
                    | 'my'
                    | 'mz'
                    | 'na'
                    | 'nc'
                    | 'ne'
                    | 'nf'
                    | 'ng'
                    | 'ni'
                    | 'nl'
                    | 'no'
                    | 'np'
                    | 'nr'
                    | 'nu'
                    | 'nz'
                    | 'om'
                    | 'pa'
                    | 'pe'
                    | 'pf'
                    | 'pg'
                    | 'ph'
                    | 'pk'
                    | 'pl'
                    | 'pm'
                    | 'pn'
                    | 'pr'
                    | 'ps'
                    | 'pt'
                    | 'pw'
                    | 'py'
                    | 'qa'
                    | 'qz'
                    | 're'
                    | 'ro'
                    | 'rs'
                    | 'ru'
                    | 'rw'
                    | 'sa'
                    | 'sb'
                    | 'sc'
                    | 'sd'
                    | 'se'
                    | 'sg'
                    | 'sh'
                    | 'si'
                    | 'sj'
                    | 'sk'
                    | 'sl'
                    | 'sm'
                    | 'sn'
                    | 'so'
                    | 'sr'
                    | 'ss'
                    | 'st'
                    | 'sv'
                    | 'sx'
                    | 'sy'
                    | 'sz'
                    | 'tc'
                    | 'td'
                    | 'tf'
                    | 'tg'
                    | 'th'
                    | 'tj'
                    | 'tk'
                    | 'tl'
                    | 'tm'
                    | 'tn'
                    | 'to'
                    | 'tr'
                    | 'tt'
                    | 'tv'
                    | 'tw'
                    | 'tz'
                    | 'ua'
                    | 'ug'
                    | 'um'
                    | 'us'
                    | 'uy'
                    | 'uz'
                    | 'va'
                    | 'vc'
                    | 've'
                    | 'vg'
                    | 'vi'
                    | 'vn'
                    | 'vu'
                    | 'wf'
                    | 'ws'
                    | 'ye'
                    | 'yt'
                    | 'za'
                    | 'zm'
                    | 'zw';
                }
              }

              interface ScriptNames {
                /**
                 * Persons name in kana script.
                 */
                kana: ScriptNames.Kana | null;

                /**
                 * Persons name in kanji script.
                 */
                kanji: ScriptNames.Kanji | null;
              }

              namespace ScriptNames {
                interface Kana {
                  /**
                   * The person's first or given name.
                   */
                  given_name: string | null;

                  /**
                   * The person's last or family name.
                   */
                  surname: string | null;
                }

                interface Kanji {
                  /**
                   * The person's first or given name.
                   */
                  given_name: string | null;

                  /**
                   * The person's last or family name.
                   */
                  surname: string | null;
                }
              }
            }
          }

          interface Requirements {
            /**
             * A value indicating responsibility for collecting requirements on this account.
             */
            collector: Requirements.Collector;

            /**
             * A list of requirements for the Account.
             */
            entries: Array<Requirements.Entry> | null;

            /**
             * An object containing an overview of requirements for the Account.
             */
            summary: Requirements.Summary | null;
          }

          namespace Requirements {
            type Collector = 'application' | 'stripe';

            interface Entry {
              /**
               * Whether the responsibility is with the integrator or with Stripe (to review info, to wait for some condition, etc.) to action the requirement.
               */
              awaiting_action_from: Entry.AwaitingActionFrom;

              /**
               * Machine-readable string describing the requirement.
               */
              description: string;

              /**
               * Descriptions of why the requirement must be collected, or why the collected information isn't satisfactory to Stripe.
               */
              errors: Array<Entry.Error>;

              /**
               * A hash describing the impact of not collecting the requirement, or Stripe not being able to verify the collected information.
               */
              impact: Entry.Impact;

              /**
               * The soonest point when the account will be impacted by not providing the requirement.
               */
              minimum_deadline: Entry.MinimumDeadline;

              /**
               * A reference to the location of the requirement.
               */
              reference: Entry.Reference | null;

              /**
               * A list of reasons why Stripe is collecting the requirement.
               */
              requested_reasons: Array<Entry.RequestedReason>;
            }

            namespace Entry {
              type AwaitingActionFrom = 'stripe' | 'user';

              interface Error {
                /**
                 * Machine-readable code describing the error.
                 */
                code: Error.Code;

                /**
                 * Human-readable description of the error.
                 */
                description: string;
              }

              namespace Error {
                type Code =
                  | 'invalid_address_city_state_postal_code'
                  | 'invalid_address_highway_contract_box'
                  | 'invalid_address_private_mailbox'
                  | 'invalid_business_profile_name'
                  | 'invalid_business_profile_name_denylisted'
                  | 'invalid_company_name_denylisted'
                  | 'invalid_dob_age_over_maximum'
                  | 'invalid_dob_age_under_18'
                  | 'invalid_dob_age_under_minimum'
                  | 'invalid_product_description_length'
                  | 'invalid_product_description_url_match'
                  | 'invalid_representative_country'
                  | 'invalid_statement_descriptor_business_mismatch'
                  | 'invalid_statement_descriptor_denylisted'
                  | 'invalid_statement_descriptor_length'
                  | 'invalid_statement_descriptor_prefix_denylisted'
                  | 'invalid_statement_descriptor_prefix_mismatch'
                  | 'invalid_street_address'
                  | 'invalid_tax_id'
                  | 'invalid_tax_id_format'
                  | 'invalid_tos_acceptance'
                  | 'invalid_url_denylisted'
                  | 'invalid_url_format'
                  | 'invalid_url_website_business_information_mismatch'
                  | 'invalid_url_website_empty'
                  | 'invalid_url_website_inaccessible'
                  | 'invalid_url_website_inaccessible_geoblocked'
                  | 'invalid_url_website_inaccessible_password_protected'
                  | 'invalid_url_website_incomplete'
                  | 'invalid_url_website_incomplete_cancellation_policy'
                  | 'invalid_url_website_incomplete_customer_service_details'
                  | 'invalid_url_website_incomplete_legal_restrictions'
                  | 'invalid_url_website_incomplete_refund_policy'
                  | 'invalid_url_website_incomplete_return_policy'
                  | 'invalid_url_website_incomplete_terms_and_conditions'
                  | 'invalid_url_website_incomplete_under_construction'
                  | 'invalid_url_website_other'
                  | 'invalid_url_web_presence_detected'
                  | 'invalid_value_other'
                  | 'unresolvable_ip_address'
                  | 'unresolvable_postal_code'
                  | 'verification_directors_mismatch'
                  | 'verification_document_address_mismatch'
                  | 'verification_document_address_missing'
                  | 'verification_document_corrupt'
                  | 'verification_document_country_not_supported'
                  | 'verification_document_directors_mismatch'
                  | 'verification_document_dob_mismatch'
                  | 'verification_document_duplicate_type'
                  | 'verification_document_expired'
                  | 'verification_document_failed_copy'
                  | 'verification_document_failed_greyscale'
                  | 'verification_document_failed_other'
                  | 'verification_document_failed_test_mode'
                  | 'verification_document_fraudulent'
                  | 'verification_document_id_number_mismatch'
                  | 'verification_document_id_number_missing'
                  | 'verification_document_incomplete'
                  | 'verification_document_invalid'
                  | 'verification_document_issue_or_expiry_date_missing'
                  | 'verification_document_manipulated'
                  | 'verification_document_missing_back'
                  | 'verification_document_missing_front'
                  | 'verification_document_name_mismatch'
                  | 'verification_document_name_missing'
                  | 'verification_document_nationality_mismatch'
                  | 'verification_document_not_readable'
                  | 'verification_document_not_signed'
                  | 'verification_document_not_uploaded'
                  | 'verification_document_photo_mismatch'
                  | 'verification_document_too_large'
                  | 'verification_document_type_not_supported'
                  | 'verification_extraneous_directors'
                  | 'verification_failed_address_match'
                  | 'verification_failed_business_iec_number'
                  | 'verification_failed_document_match'
                  | 'verification_failed_id_number_match'
                  | 'verification_failed_keyed_identity'
                  | 'verification_failed_keyed_match'
                  | 'verification_failed_name_match'
                  | 'verification_failed_other'
                  | 'verification_failed_representative_authority'
                  | 'verification_failed_residential_address'
                  | 'verification_failed_tax_id_match'
                  | 'verification_failed_tax_id_not_issued'
                  | 'verification_missing_directors'
                  | 'verification_missing_executives'
                  | 'verification_missing_owners'
                  | 'verification_requires_additional_memorandum_of_associations'
                  | 'verification_requires_additional_proof_of_registration'
                  | 'verification_selfie_document_missing_photo'
                  | 'verification_selfie_face_mismatch'
                  | 'verification_selfie_manipulated'
                  | 'verification_selfie_unverified_other'
                  | 'verification_supportability'
                  | 'verification_token_stale';
              }

              interface Impact {
                /**
                 * The Capabilities that will be restricted if the requirement is not collected and satisfactory to Stripe.
                 */
                restricts_capabilities: Array<
                  Impact.RestrictsCapability
                > | null;

                /**
                 * Details about payouts restrictions that will be enforced if the requirement is not collected and satisfactory to Stripe.
                 */
                restricts_payouts: Impact.RestrictsPayouts | null;
              }

              namespace Impact {
                interface RestrictsCapability {
                  /**
                   * The name of the Capability which will be restricted.
                   */
                  capability: RestrictsCapability.Capability;

                  /**
                   * The configuration which specifies the Capability which will be restricted.
                   */
                  configuration: RestrictsCapability.Configuration;

                  /**
                   * Details about when in the account lifecycle the requirement must be collected by the avoid the Capability restriction.
                   */
                  deadline: RestrictsCapability.Deadline;
                }

                namespace RestrictsCapability {
                  type Capability =
                    | 'ach_debit_payments'
                    | 'acss_debit_payments'
                    | 'affirm_payments'
                    | 'afterpay_clearpay_payments'
                    | 'alma_payments'
                    | 'amazon_pay_payments'
                    | 'automatic_indirect_tax'
                    | 'au_becs_debit_payments'
                    | 'bacs_debit_payments'
                    | 'bancontact_payments'
                    | 'bank_accounts.local'
                    | 'bank_accounts.wire'
                    | 'blik_payments'
                    | 'boleto_payments'
                    | 'cards'
                    | 'card_payments'
                    | 'cartes_bancaires_payments'
                    | 'cashapp_payments'
                    | 'eps_payments'
                    | 'fpx_payments'
                    | 'gb_bank_transfer_payments'
                    | 'grabpay_payments'
                    | 'ideal_payments'
                    | 'jcb_payments'
                    | 'jp_bank_transfer_payments'
                    | 'kakao_pay_payments'
                    | 'klarna_payments'
                    | 'konbini_payments'
                    | 'kr_card_payments'
                    | 'link_payments'
                    | 'mobilepay_payments'
                    | 'multibanco_payments'
                    | 'mx_bank_transfer_payments'
                    | 'naver_pay_payments'
                    | 'oxxo_payments'
                    | 'p24_payments'
                    | 'payco_payments'
                    | 'paynow_payments'
                    | 'pay_by_bank_payments'
                    | 'promptpay_payments'
                    | 'revolut_pay_payments'
                    | 'samsung_pay_payments'
                    | 'sepa_bank_transfer_payments'
                    | 'sepa_debit_payments'
                    | 'stripe_balance.stripe_transfers'
                    | 'swish_payments'
                    | 'twint_payments'
                    | 'us_bank_transfer_payments'
                    | 'zip_payments';

                  type Configuration = 'customer' | 'merchant' | 'recipient';

                  interface Deadline {
                    /**
                     * The current status of the requirement's impact.
                     */
                    status: Deadline.Status;
                  }

                  namespace Deadline {
                    type Status =
                      | 'currently_due'
                      | 'eventually_due'
                      | 'past_due';
                  }
                }

                interface RestrictsPayouts {
                  /**
                   * Details about when in the Account's lifecycle the requirement must be collected by the avoid the earliest specified impact.
                   */
                  deadline: RestrictsPayouts.Deadline;
                }

                namespace RestrictsPayouts {
                  interface Deadline {
                    /**
                     * The current status of the requirement's impact.
                     */
                    status: Deadline.Status;
                  }

                  namespace Deadline {
                    type Status =
                      | 'currently_due'
                      | 'eventually_due'
                      | 'past_due';
                  }
                }
              }

              interface MinimumDeadline {
                /**
                 * The current status of the requirement's impact.
                 */
                status: MinimumDeadline.Status;
              }

              namespace MinimumDeadline {
                type Status = 'currently_due' | 'eventually_due' | 'past_due';
              }

              interface Reference {
                /**
                 * If `inquiry` is the type, the inquiry token.
                 */
                inquiry: string | null;

                /**
                 * If `resource` is the type, the resource token.
                 */
                resource: string | null;

                /**
                 * The type of the reference. An additional hash is included with a name matching the type. It contains additional information specific to the type.
                 */
                type: Reference.Type;
              }

              namespace Reference {
                type Type = 'inquiry' | 'resource';
              }

              interface RequestedReason {
                /**
                 * Machine-readable description of Stripe's reason for collecting the requirement.
                 */
                code: RequestedReason.Code;
              }

              namespace RequestedReason {
                type Code =
                  | 'future_requirements'
                  | 'routine_onboarding'
                  | 'routine_verification';
              }
            }

            interface Summary {
              /**
               * The soonest date and time a requirement on the Account will become `past due`. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2022-09-18T13:22:18.123Z`.
               */
              minimum_deadline: Summary.MinimumDeadline | null;
            }

            namespace Summary {
              interface MinimumDeadline {
                /**
                 * The current strictest status of all requirements on the Account.
                 */
                status: MinimumDeadline.Status;

                /**
                 * The soonest RFC3339 date & time UTC value a requirement can impact the Account.
                 */
                time: string | null;
              }

              namespace MinimumDeadline {
                type Status = 'currently_due' | 'eventually_due' | 'past_due';
              }
            }
          }
        }
      }
    }
  }
}
