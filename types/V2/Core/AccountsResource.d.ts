// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        interface AccountCreateParams {
          /**
           * An Account Configuration which allows the Account to take on a key persona across Stripe products.
           */
          configuration?: AccountCreateParams.Configuration;

          /**
           * The default contact email address for the Account. Required when configuring the account as a merchant or recipient.
           */
          contact_email?: string;

          /**
           * A value indicating the Stripe dashboard this Account has access to. This will depend on which configurations are enabled for this account.
           */
          dashboard?: AccountCreateParams.Dashboard;

          /**
           * Default values to be used on Account Configurations.
           */
          defaults?: AccountCreateParams.Defaults;

          /**
           * A descriptive name for the Account. This name will be surfaced in the Stripe Dashboard and on any invoices sent to the Account.
           */
          display_name?: string;

          /**
           * Information about the company, individual, and business represented by the Account.
           */
          identity?: AccountCreateParams.Identity;

          /**
           * Additional fields to include in the response.
           */
          include?: Array<AccountCreateParams.Include>;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;
        }

        namespace AccountCreateParams {
          interface Configuration {
            /**
             * The Customer Configuration allows the Account to be used in inbound payment flows.
             */
            customer?: Configuration.Customer;

            /**
             * The Merchant configuration allows the Account to act as a connected account and collect payments facilitated by a Connect platform. You can add this configuration to your connected accounts only if you've completed onboarding as a Connect platform.
             */
            merchant?: Configuration.Merchant;

            /**
             * The Recipient Configuration allows the Account to receive funds.
             */
            recipient?: Configuration.Recipient;

            /**
             * The Storer Configuration allows the Account to store and move funds using stored-value FinancialAccounts.
             */
            storer?: Configuration.Storer;
          }

          namespace Configuration {
            interface Customer {
              /**
               * Automatic indirect tax settings to be used when automatic tax calculation is enabled on the customer's invoices, subscriptions, checkout sessions, or payment links. Surfaces if automatic tax calculation is possible given the current customer location information.
               */
              automatic_indirect_tax?: Customer.AutomaticIndirectTax;

              /**
               * Billing settings - default settings used for this customer in Billing flows such as Invoices and Subscriptions.
               */
              billing?: Customer.Billing;

              /**
               * Capabilities that have been requested on the Customer Configuration.
               */
              capabilities?: Customer.Capabilities;

              /**
               * The customer's shipping information. Appears on invoices emailed to this customer.
               */
              shipping?: Customer.Shipping;

              /**
               * ID of the test clock to attach to the customer. Can only be set on testmode Accounts, and when the Customer Configuration is first set on an Account.
               */
              test_clock?: string;
            }

            namespace Customer {
              interface AutomaticIndirectTax {
                /**
                 * Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. When set to reverse, invoice and receipt PDFs include the following text: “Reverse charge”.
                 */
                exempt?: AutomaticIndirectTax.Exempt;

                /**
                 * A recent IP address of the customer used for tax reporting and tax location inference.
                 */
                ip_address?: string;

                /**
                 * The data source used to identify the customer's tax location - defaults to 'identity_address'. Will only be used for automatic tax calculation on the customer's Invoices and Subscriptions.
                 */
                location_source?: AutomaticIndirectTax.LocationSource;
              }

              namespace AutomaticIndirectTax {
                type Exempt = 'exempt' | 'none' | 'reverse';

                type LocationSource =
                  | 'identity_address'
                  | 'ip_address'
                  | 'shipping_address';
              }

              interface Billing {
                /**
                 * Default settings used on invoices for this customer.
                 */
                invoice?: Billing.Invoice;
              }

              namespace Billing {
                interface Invoice {
                  /**
                   * The list of up to 4 default custom fields to be displayed on invoices for this customer.
                   */
                  custom_fields?: Array<Invoice.CustomField>;

                  /**
                   * Default footer to be displayed on invoices for this customer.
                   */
                  footer?: string;

                  /**
                   * The sequence to be used on the customer's next invoice. Defaults to 1.
                   */
                  next_sequence?: number;

                  /**
                   * The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
                   */
                  prefix?: string;

                  /**
                   * Default options for invoice PDF rendering for this customer.
                   */
                  rendering?: Invoice.Rendering;
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
                    amount_tax_display?: Rendering.AmountTaxDisplay;

                    /**
                     * ID of the invoice rendering template to use for future invoices.
                     */
                    template?: string;
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
                automatic_indirect_tax?: Capabilities.AutomaticIndirectTax;
              }

              namespace Capabilities {
                interface AutomaticIndirectTax {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }
              }

              interface Shipping {
                /**
                 * Customer shipping address.
                 */
                address?: Stripe.AddressParam;

                /**
                 * Customer name.
                 */
                name?: string;

                /**
                 * Customer phone (including extension).
                 */
                phone?: string;
              }
            }

            interface Merchant {
              /**
               * Settings used for Bacs debit payments.
               */
              bacs_debit_payments?: Merchant.BacsDebitPayments;

              /**
               * Settings used to apply the merchant's branding to email receipts, invoices, Checkout, and other products.
               */
              branding?: Merchant.Branding;

              /**
               * Capabilities to request on the Merchant Configuration.
               */
              capabilities?: Merchant.Capabilities;

              /**
               * Card payments settings.
               */
              card_payments?: Merchant.CardPayments;

              /**
               * The merchant category code for the Merchant Configuration. MCCs are used to classify businesses based on the goods or services they provide.
               */
              mcc?: string;

              /**
               * Statement descriptor.
               */
              statement_descriptor?: Merchant.StatementDescriptor;

              /**
               * Publicly available contact information for sending support issues to.
               */
              support?: Merchant.Support;
            }

            namespace Merchant {
              interface BacsDebitPayments {
                /**
                 * Display name for Bacs debit payments.
                 */
                display_name?: string;
              }

              interface Branding {
                /**
                 * ID of a [file upload](https://docs.stripe.com/api/persons/update#create_file): An icon for the merchant. Must be square and at least 128px x 128px.
                 */
                icon?: string;

                /**
                 * ID of a [file upload](https://docs.stripe.com/api/persons/update#create_file): A logo for the merchant that will be used in Checkout instead of the icon and without the merchant's name next to it if provided. Must be at least 128px x 128px.
                 */
                logo?: string;

                /**
                 * A CSS hex color value representing the primary branding color for the merchant.
                 */
                primary_color?: string;

                /**
                 * A CSS hex color value representing the secondary branding color for the merchant.
                 */
                secondary_color?: string;
              }

              interface Capabilities {
                /**
                 * Allow the merchant to process ACH debit payments.
                 */
                ach_debit_payments?: Capabilities.AchDebitPayments;

                /**
                 * Allow the merchant to process ACSS debit payments.
                 */
                acss_debit_payments?: Capabilities.AcssDebitPayments;

                /**
                 * Allow the merchant to process Affirm payments.
                 */
                affirm_payments?: Capabilities.AffirmPayments;

                /**
                 * Allow the merchant to process Afterpay/Clearpay payments.
                 */
                afterpay_clearpay_payments?: Capabilities.AfterpayClearpayPayments;

                /**
                 * Allow the merchant to process Alma payments.
                 */
                alma_payments?: Capabilities.AlmaPayments;

                /**
                 * Allow the merchant to process Amazon Pay payments.
                 */
                amazon_pay_payments?: Capabilities.AmazonPayPayments;

                /**
                 * Allow the merchant to process Australian BECS Direct Debit payments.
                 */
                au_becs_debit_payments?: Capabilities.AuBecsDebitPayments;

                /**
                 * Allow the merchant to process BACS Direct Debit payments.
                 */
                bacs_debit_payments?: Capabilities.BacsDebitPayments;

                /**
                 * Allow the merchant to process Bancontact payments.
                 */
                bancontact_payments?: Capabilities.BancontactPayments;

                /**
                 * Allow the merchant to process BLIK payments.
                 */
                blik_payments?: Capabilities.BlikPayments;

                /**
                 * Allow the merchant to process Boleto payments.
                 */
                boleto_payments?: Capabilities.BoletoPayments;

                /**
                 * Allow the merchant to collect card payments.
                 */
                card_payments?: Capabilities.CardPayments;

                /**
                 * Allow the merchant to process Cartes Bancaires payments.
                 */
                cartes_bancaires_payments?: Capabilities.CartesBancairesPayments;

                /**
                 * Allow the merchant to process Cash App payments.
                 */
                cashapp_payments?: Capabilities.CashappPayments;

                /**
                 * Allow the merchant to process EPS payments.
                 */
                eps_payments?: Capabilities.EpsPayments;

                /**
                 * Allow the merchant to process FPX payments.
                 */
                fpx_payments?: Capabilities.FpxPayments;

                /**
                 * Allow the merchant to process UK bank transfer payments.
                 */
                gb_bank_transfer_payments?: Capabilities.GbBankTransferPayments;

                /**
                 * Allow the merchant to process GrabPay payments.
                 */
                grabpay_payments?: Capabilities.GrabpayPayments;

                /**
                 * Allow the merchant to process iDEAL payments.
                 */
                ideal_payments?: Capabilities.IdealPayments;

                /**
                 * Allow the merchant to process JCB card payments.
                 */
                jcb_payments?: Capabilities.JcbPayments;

                /**
                 * Allow the merchant to process Japanese bank transfer payments.
                 */
                jp_bank_transfer_payments?: Capabilities.JpBankTransferPayments;

                /**
                 * Allow the merchant to process Kakao Pay payments.
                 */
                kakao_pay_payments?: Capabilities.KakaoPayPayments;

                /**
                 * Allow the merchant to process Klarna payments.
                 */
                klarna_payments?: Capabilities.KlarnaPayments;

                /**
                 * Allow the merchant to process Konbini convenience store payments.
                 */
                konbini_payments?: Capabilities.KonbiniPayments;

                /**
                 * Allow the merchant to process Korean card payments.
                 */
                kr_card_payments?: Capabilities.KrCardPayments;

                /**
                 * Allow the merchant to process Link payments.
                 */
                link_payments?: Capabilities.LinkPayments;

                /**
                 * Allow the merchant to process MobilePay payments.
                 */
                mobilepay_payments?: Capabilities.MobilepayPayments;

                /**
                 * Allow the merchant to process Multibanco payments.
                 */
                multibanco_payments?: Capabilities.MultibancoPayments;

                /**
                 * Allow the merchant to process Mexican bank transfer payments.
                 */
                mx_bank_transfer_payments?: Capabilities.MxBankTransferPayments;

                /**
                 * Allow the merchant to process Naver Pay payments.
                 */
                naver_pay_payments?: Capabilities.NaverPayPayments;

                /**
                 * Allow the merchant to process OXXO payments.
                 */
                oxxo_payments?: Capabilities.OxxoPayments;

                /**
                 * Allow the merchant to process Przelewy24 (P24) payments.
                 */
                p24_payments?: Capabilities.P24Payments;

                /**
                 * Allow the merchant to process Pay by Bank payments.
                 */
                pay_by_bank_payments?: Capabilities.PayByBankPayments;

                /**
                 * Allow the merchant to process PAYCO payments.
                 */
                payco_payments?: Capabilities.PaycoPayments;

                /**
                 * Allow the merchant to process PayNow payments.
                 */
                paynow_payments?: Capabilities.PaynowPayments;

                /**
                 * Allow the merchant to process PromptPay payments.
                 */
                promptpay_payments?: Capabilities.PromptpayPayments;

                /**
                 * Allow the merchant to process Revolut Pay payments.
                 */
                revolut_pay_payments?: Capabilities.RevolutPayPayments;

                /**
                 * Allow the merchant to process Samsung Pay payments.
                 */
                samsung_pay_payments?: Capabilities.SamsungPayPayments;

                /**
                 * Allow the merchant to process SEPA bank transfer payments.
                 */
                sepa_bank_transfer_payments?: Capabilities.SepaBankTransferPayments;

                /**
                 * Allow the merchant to process SEPA Direct Debit payments.
                 */
                sepa_debit_payments?: Capabilities.SepaDebitPayments;

                /**
                 * Allow the merchant to process Swish payments.
                 */
                swish_payments?: Capabilities.SwishPayments;

                /**
                 * Allow the merchant to process TWINT payments.
                 */
                twint_payments?: Capabilities.TwintPayments;

                /**
                 * Allow the merchant to process US bank transfer payments.
                 */
                us_bank_transfer_payments?: Capabilities.UsBankTransferPayments;

                /**
                 * Allow the merchant to process Zip payments.
                 */
                zip_payments?: Capabilities.ZipPayments;
              }

              namespace Capabilities {
                interface AchDebitPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface AcssDebitPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface AffirmPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface AfterpayClearpayPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface AlmaPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface AmazonPayPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface AuBecsDebitPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface BacsDebitPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface BancontactPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface BlikPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface BoletoPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface CardPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface CartesBancairesPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface CashappPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface EpsPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface FpxPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface GbBankTransferPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface GrabpayPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface IdealPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface JcbPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface JpBankTransferPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface KakaoPayPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface KlarnaPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface KonbiniPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface KrCardPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface LinkPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface MobilepayPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface MultibancoPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface MxBankTransferPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface NaverPayPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface OxxoPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface P24Payments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface PayByBankPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface PaycoPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface PaynowPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface PromptpayPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface RevolutPayPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface SamsungPayPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface SepaBankTransferPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface SepaDebitPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface SwishPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface TwintPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface UsBankTransferPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface ZipPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }
              }

              interface CardPayments {
                /**
                 * Automatically declines certain charge types regardless of whether the card issuer accepted or declined the charge.
                 */
                decline_on?: CardPayments.DeclineOn;
              }

              namespace CardPayments {
                interface DeclineOn {
                  /**
                   * Whether Stripe automatically declines charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and they fail bank verification.
                   */
                  avs_failure?: boolean;

                  /**
                   * Whether Stripe automatically declines charges with an incorrect CVC. This setting only applies when a CVC is provided and it fails bank verification.
                   */
                  cvc_failure?: boolean;
                }
              }

              interface StatementDescriptor {
                /**
                 * The default text that appears on statements for non-card charges outside of Japan. For card charges, if you don't set a statement_descriptor_prefix, this text is also used as the statement descriptor prefix. In that case, if concatenating the statement descriptor suffix causes the combined statement descriptor to exceed 22 characters, we truncate the statement_descriptor text to limit the full descriptor to 22 characters. For more information about statement descriptors and their requirements, see the Merchant Configuration settings documentation.
                 */
                descriptor?: string;

                /**
                 * Default text that appears on statements for card charges outside of Japan, prefixing any dynamic statement_descriptor_suffix specified on the charge. To maximize space for the dynamic part of the descriptor, keep this text short. If you don't specify this value, statement_descriptor is used as the prefix. For more information about statement descriptors and their requirements, see the Merchant Configuration settings documentation.
                 */
                prefix?: string;
              }

              interface Support {
                /**
                 * A publicly available mailing address for sending support issues to.
                 */
                address?: Support.Address;

                /**
                 * A publicly available email address for sending support issues to.
                 */
                email?: string;

                /**
                 * A publicly available phone number to call with support issues.
                 */
                phone?: string;

                /**
                 * A publicly available website for handling support issues.
                 */
                url?: string;
              }

              namespace Support {
                interface Address {
                  /**
                   * City, district, suburb, town, or village.
                   */
                  city?: string;

                  /**
                   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                   */
                  country: Address.Country;

                  /**
                   * Address line 1 (e.g., street, PO Box, or company name).
                   */
                  line1?: string;

                  /**
                   * Address line 2 (e.g., apartment, suite, unit, or building).
                   */
                  line2?: string;

                  /**
                   * ZIP or postal code.
                   */
                  postal_code?: string;

                  /**
                   * State, county, province, or region.
                   */
                  state?: string;

                  /**
                   * Town or cho-me.
                   */
                  town?: string;
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
                    | 'xx'
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
               * Capabilities to be requested on the Recipient Configuration.
               */
              capabilities?: Recipient.Capabilities;
            }

            namespace Recipient {
              interface Capabilities {
                /**
                 * Capabilities that enable OutboundPayments to a bank account linked to this Account.
                 */
                bank_accounts?: Capabilities.BankAccounts;

                /**
                 * Capabilities that enable OutboundPayments to a card linked to this Account.
                 */
                cards?: Capabilities.Cards;

                /**
                 * Capabilities that enable the recipient to manage their Stripe Balance (/v1/balance).
                 */
                stripe_balance?: Capabilities.StripeBalance;
              }

              namespace Capabilities {
                interface BankAccounts {
                  /**
                   * Enables this Account to receive OutboundPayments to linked bank accounts over local networks.
                   */
                  local?: BankAccounts.Local;

                  /**
                   * Enables this Account to receive OutboundPayments to linked bank accounts over wire.
                   */
                  wire?: BankAccounts.Wire;
                }

                namespace BankAccounts {
                  interface Local {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested: boolean;
                  }

                  interface Wire {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested: boolean;
                  }
                }

                interface Cards {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested: boolean;
                }

                interface StripeBalance {
                  /**
                   * Allows the account to receive /v1/transfers into their Stripe Balance (/v1/balance).
                   */
                  stripe_transfers?: StripeBalance.StripeTransfers;
                }

                namespace StripeBalance {
                  interface StripeTransfers {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested: boolean;
                  }
                }
              }
            }

            interface Storer {
              /**
               * Capabilities to request on the Storer Configuration.
               */
              capabilities?: Storer.Capabilities;
            }

            namespace Storer {
              interface Capabilities {
                /**
                 * Can provision a financial address to credit/debit a FinancialAccount.
                 */
                financial_addresses?: Capabilities.FinancialAddresses;

                /**
                 * Can hold storage-type funds on Stripe.
                 */
                holds_currencies?: Capabilities.HoldsCurrencies;

                /**
                 * Can pull funds from an external source, owned by yourself, to a FinancialAccount.
                 */
                inbound_transfers?: Capabilities.InboundTransfers;

                /**
                 * Can send funds from a FinancialAccount to a destination owned by someone else.
                 */
                outbound_payments?: Capabilities.OutboundPayments;

                /**
                 * Can send funds from a FinancialAccount to a destination owned by yourself.
                 */
                outbound_transfers?: Capabilities.OutboundTransfers;
              }

              namespace Capabilities {
                interface FinancialAddresses {
                  /**
                   * Can provision a bank-account-like financial address (VBAN) to credit/debit a FinancialAccount.
                   */
                  bank_accounts?: FinancialAddresses.BankAccounts;
                }

                namespace FinancialAddresses {
                  interface BankAccounts {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested: boolean;
                  }
                }

                interface HoldsCurrencies {
                  /**
                   * Can hold storage-type funds on Stripe in GBP.
                   */
                  gbp?: HoldsCurrencies.Gbp;
                }

                namespace HoldsCurrencies {
                  interface Gbp {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested: boolean;
                  }
                }

                interface InboundTransfers {
                  /**
                   * Can pull funds from an external bank account owned by yourself to a FinancialAccount.
                   */
                  bank_accounts?: InboundTransfers.BankAccounts;
                }

                namespace InboundTransfers {
                  interface BankAccounts {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested: boolean;
                  }
                }

                interface OutboundPayments {
                  /**
                   * Can send funds from a FinancialAccount to a bank account owned by someone else.
                   */
                  bank_accounts?: OutboundPayments.BankAccounts;

                  /**
                   * Can send funds from a FinancialAccount to a debit card owned by someone else.
                   */
                  cards?: OutboundPayments.Cards;

                  /**
                   * Can send funds from a FinancialAccount to another FinancialAccount owned by someone else.
                   */
                  financial_accounts?: OutboundPayments.FinancialAccounts;
                }

                namespace OutboundPayments {
                  interface BankAccounts {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested: boolean;
                  }

                  interface Cards {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested: boolean;
                  }

                  interface FinancialAccounts {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested: boolean;
                  }
                }

                interface OutboundTransfers {
                  /**
                   * Can send funds from a FinancialAccount to a bank account owned by yourself.
                   */
                  bank_accounts?: OutboundTransfers.BankAccounts;

                  /**
                   * Can send funds from a FinancialAccount to another FinancialAccount owned by yourself.
                   */
                  financial_accounts?: OutboundTransfers.FinancialAccounts;
                }

                namespace OutboundTransfers {
                  interface BankAccounts {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested: boolean;
                  }

                  interface FinancialAccounts {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested: boolean;
                  }
                }
              }
            }
          }

          type Dashboard = 'express' | 'full' | 'none';

          interface Defaults {
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency?: Defaults.Currency;

            /**
             * The Account's preferred locales (languages), ordered by preference.
             */
            locales?: Array<Defaults.Locale>;

            /**
             * Default responsibilities held by either Stripe or the platform.
             */
            responsibilities?: Defaults.Responsibilities;
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
              | 'usdb'
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
               * A value indicating the party responsible for collecting fees from this account.
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
            attestations?: Identity.Attestations;

            /**
             * Information about the company or business.
             */
            business_details?: Identity.BusinessDetails;

            /**
             * The country in which the account holder resides, or in which the business is legally established. This should be an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
             */
            country?: Identity.Country;

            /**
             * The entity type.
             */
            entity_type?: Identity.EntityType;

            /**
             * Information about the person represented by the account.
             */
            individual?: Identity.Individual;
          }

          namespace Identity {
            interface Attestations {
              /**
               * This hash is used to attest that the directors information provided to Stripe is both current and correct.
               */
              directorship_declaration?: Attestations.DirectorshipDeclaration;

              /**
               * This hash is used to attest that the beneficial owner information provided to Stripe is both current and correct.
               */
              ownership_declaration?: Attestations.OwnershipDeclaration;

              /**
               * Attestation that all Persons with a specific Relationship value have been provided.
               */
              persons_provided?: Attestations.PersonsProvided;

              /**
               * Attestations of accepted terms of service agreements.
               */
              terms_of_service?: Attestations.TermsOfService;
            }

            namespace Attestations {
              interface DirectorshipDeclaration {
                /**
                 * The time marking when the director attestation was made. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
                 */
                date?: string;

                /**
                 * The IP address from which the director attestation was made.
                 */
                ip?: string;

                /**
                 * The user agent of the browser from which the director attestation was made.
                 */
                user_agent?: string;
              }

              interface OwnershipDeclaration {
                /**
                 * The time marking when the beneficial owner attestation was made. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
                 */
                date?: string;

                /**
                 * The IP address from which the beneficial owner attestation was made.
                 */
                ip?: string;

                /**
                 * The user agent of the browser from which the beneficial owner attestation was made.
                 */
                user_agent?: string;
              }

              interface PersonsProvided {
                /**
                 * Whether the company's directors have been provided. Set this Boolean to true after creating all the company's directors with the [Persons API](https://docs.stripe.com/api/v2/core/accounts/createperson).
                 */
                directors?: boolean;

                /**
                 * Whether the company's executives have been provided. Set this Boolean to true after creating all the company's executives with the [Persons API](https://docs.stripe.com/api/v2/core/accounts/createperson).
                 */
                executives?: boolean;

                /**
                 * Whether the company's owners have been provided. Set this Boolean to true after creating all the company's owners with the [Persons API](https://docs.stripe.com/api/v2/core/accounts/createperson).
                 */
                owners?: boolean;

                /**
                 * Reason for why the company is exempt from providing ownership information.
                 */
                ownership_exemption_reason?: PersonsProvided.OwnershipExemptionReason;
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
                account?: TermsOfService.Account;
              }

              namespace TermsOfService {
                interface Account {
                  /**
                   * The time when the Account's representative accepted the terms of service. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
                   */
                  date: string;

                  /**
                   * The IP address from which the Account's representative accepted the terms of service.
                   */
                  ip: string;

                  /**
                   * The user agent of the browser from which the Account's representative accepted the terms of service.
                   */
                  user_agent?: string;
                }
              }
            }

            interface BusinessDetails {
              /**
               * The business registration address of the business entity.
               */
              address?: BusinessDetails.Address;

              /**
               * The business gross annual revenue for its preceding fiscal year.
               */
              annual_revenue?: BusinessDetails.AnnualRevenue;

              /**
               * A document verifying the business.
               */
              documents?: BusinessDetails.Documents;

              /**
               * The name which is used by the business.
               */
              doing_business_as?: string;

              /**
               * An estimated upper bound of employees, contractors, vendors, etc. currently working for the business.
               */
              estimated_worker_count?: number;

              /**
               * The ID numbers of a business entity.
               */
              id_numbers?: Array<BusinessDetails.IdNumber>;

              /**
               * An estimate of the monthly revenue of the business.
               */
              monthly_estimated_revenue?: BusinessDetails.MonthlyEstimatedRevenue;

              /**
               * The phone number of the Business Entity.
               */
              phone?: string;

              /**
               * Internal-only description of the product sold or service provided by the business. It's used by Stripe for risk and underwriting purposes.
               */
              product_description?: string;

              /**
               * The business legal name.
               */
              registered_name?: string;

              /**
               * The business registration address of the business entity in non latin script.
               */
              script_addresses?: BusinessDetails.ScriptAddresses;

              /**
               * The business legal name in non latin script.
               */
              script_names?: BusinessDetails.ScriptNames;

              /**
               * The category identifying the legal structure of the business.
               */
              structure?: BusinessDetails.Structure;

              /**
               * The business's publicly available website.
               */
              url?: string;
            }

            namespace BusinessDetails {
              interface Address {
                /**
                 * City, district, suburb, town, or village.
                 */
                city?: string;

                /**
                 * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                 */
                country: Address.Country;

                /**
                 * Address line 1 (e.g., street, PO Box, or company name).
                 */
                line1?: string;

                /**
                 * Address line 2 (e.g., apartment, suite, unit, or building).
                 */
                line2?: string;

                /**
                 * ZIP or postal code.
                 */
                postal_code?: string;

                /**
                 * State, county, province, or region.
                 */
                state?: string;

                /**
                 * Town or cho-me.
                 */
                town?: string;
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
                  | 'xx'
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
                amount?: Amount;

                /**
                 * The close-out date of the preceding fiscal year in ISO 8601 format. E.g. 2023-12-31 for the 31st of December, 2023.
                 */
                fiscal_year_end?: string;
              }

              interface Documents {
                /**
                 * One or more documents that support the bank account ownership verification requirement. Must be a document associated with the account's primary active bank account that displays the last 4 digits of the account number, either a statement or a check.
                 */
                bank_account_ownership_verification?: Documents.BankAccountOwnershipVerification;

                /**
                 * One or more documents that demonstrate proof of a company's license to operate.
                 */
                company_license?: Documents.CompanyLicense;

                /**
                 * One or more documents showing the company's Memorandum of Association.
                 */
                company_memorandum_of_association?: Documents.CompanyMemorandumOfAssociation;

                /**
                 * Certain countries only: One or more documents showing the ministerial decree legalizing the company's establishment.
                 */
                company_ministerial_decree?: Documents.CompanyMinisterialDecree;

                /**
                 * One or more documents that demonstrate proof of a company's registration with the appropriate local authorities.
                 */
                company_registration_verification?: Documents.CompanyRegistrationVerification;

                /**
                 * One or more documents that demonstrate proof of a company's tax ID.
                 */
                company_tax_id_verification?: Documents.CompanyTaxIdVerification;

                /**
                 * A document verifying the business.
                 */
                primary_verification?: Documents.PrimaryVerification;

                /**
                 * One or more documents that demonstrate proof of address.
                 */
                proof_of_address?: Documents.ProofOfAddress;

                /**
                 * One or more documents showing the company's proof of registration with the national business registry.
                 */
                proof_of_registration?: Documents.ProofOfRegistration;

                /**
                 * One or more documents that demonstrate proof of ultimate beneficial ownership.
                 */
                proof_of_ultimate_beneficial_ownership?: Documents.ProofOfUltimateBeneficialOwnership;
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
                   * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens referring to each side of the document.
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
                    back?: string;

                    /**
                     * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                     */
                    front: string;
                  }
                }

                interface ProofOfAddress {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
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
                registrar?: string;

                /**
                 * Open Enum. The ID number type of a business entity.
                 */
                type: IdNumber.Type;

                /**
                 * The value of the ID number.
                 */
                value: string;
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
                amount?: Amount;
              }

              interface ScriptAddresses {
                /**
                 * Kana Address.
                 */
                kana?: ScriptAddresses.Kana;

                /**
                 * Kanji Address.
                 */
                kanji?: ScriptAddresses.Kanji;
              }

              namespace ScriptAddresses {
                interface Kana {
                  /**
                   * City, district, suburb, town, or village.
                   */
                  city?: string;

                  /**
                   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                   */
                  country: Kana.Country;

                  /**
                   * Address line 1 (e.g., street, PO Box, or company name).
                   */
                  line1?: string;

                  /**
                   * Address line 2 (e.g., apartment, suite, unit, or building).
                   */
                  line2?: string;

                  /**
                   * ZIP or postal code.
                   */
                  postal_code?: string;

                  /**
                   * State, county, province, or region.
                   */
                  state?: string;

                  /**
                   * Town or cho-me.
                   */
                  town?: string;
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
                    | 'xx'
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
                  city?: string;

                  /**
                   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                   */
                  country: Kanji.Country;

                  /**
                   * Address line 1 (e.g., street, PO Box, or company name).
                   */
                  line1?: string;

                  /**
                   * Address line 2 (e.g., apartment, suite, unit, or building).
                   */
                  line2?: string;

                  /**
                   * ZIP or postal code.
                   */
                  postal_code?: string;

                  /**
                   * State, county, province, or region.
                   */
                  state?: string;

                  /**
                   * Town or cho-me.
                   */
                  town?: string;
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
                    | 'xx'
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
                kana?: ScriptNames.Kana;

                /**
                 * Kanji name.
                 */
                kanji?: ScriptNames.Kanji;
              }

              namespace ScriptNames {
                interface Kana {
                  /**
                   * Registered name of the business.
                   */
                  registered_name?: string;
                }

                interface Kanji {
                  /**
                   * Registered name of the business.
                   */
                  registered_name?: string;
                }
              }

              type Structure =
                | 'cooperative'
                | 'free_zone_establishment'
                | 'free_zone_llc'
                | 'governmental_unit'
                | 'government_instrumentality'
                | 'incorporated_association'
                | 'incorporated_non_profit'
                | 'incorporated_partnership'
                | 'limited_liability_partnership'
                | 'llc'
                | 'multi_member_llc'
                | 'private_company'
                | 'private_corporation'
                | 'private_partnership'
                | 'public_company'
                | 'public_corporation'
                | 'public_listed_corporation'
                | 'public_partnership'
                | 'registered_charity'
                | 'single_member_llc'
                | 'sole_establishment'
                | 'sole_proprietorship'
                | 'tax_exempt_government_instrumentality'
                | 'trust'
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
              | 'xx'
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
               * Additional addresses associated with the individual.
               */
              additional_addresses?: Array<Individual.AdditionalAddress>;

              /**
               * Additional names (e.g. aliases) associated with the individual.
               */
              additional_names?: Array<Individual.AdditionalName>;

              /**
               * The individual's residential address.
               */
              address?: Individual.Address;

              /**
               * The individual's date of birth.
               */
              date_of_birth?: Individual.DateOfBirth;

              /**
               * Documents that may be submitted to satisfy various informational requests.
               */
              documents?: Individual.Documents;

              /**
               * The individual's email address.
               */
              email?: string;

              /**
               * The individual's first name.
               */
              given_name?: string;

              /**
               * The identification numbers (e.g., SSN) associated with the individual.
               */
              id_numbers?: Array<Individual.IdNumber>;

              /**
               * The individual's gender (International regulations require either "male" or "female").
               */
              legal_gender?: Individual.LegalGender;

              /**
               * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
               */
              metadata?: Stripe.MetadataParam;

              /**
               * The countries where the individual is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
               */
              nationalities?: Array<Individual.Nationality>;

              /**
               * The individual's phone number.
               */
              phone?: string;

              /**
               * The individual's political exposure.
               */
              political_exposure?: Individual.PoliticalExposure;

              /**
               * The relationship that this individual has with the account's identity.
               */
              relationship?: Individual.Relationship;

              /**
               * The script addresses (e.g., non-Latin characters) associated with the individual.
               */
              script_addresses?: Individual.ScriptAddresses;

              /**
               * The individuals primary name in non latin script.
               */
              script_names?: Individual.ScriptNames;

              /**
               * The individual's last name.
               */
              surname?: string;
            }

            namespace Individual {
              interface AdditionalAddress {
                /**
                 * City, district, suburb, town, or village.
                 */
                city?: string;

                /**
                 * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                 */
                country: AdditionalAddress.Country;

                /**
                 * Address line 1 (e.g., street, PO Box, or company name).
                 */
                line1?: string;

                /**
                 * Address line 2 (e.g., apartment, suite, unit, or building).
                 */
                line2?: string;

                /**
                 * ZIP or postal code.
                 */
                postal_code?: string;

                /**
                 * Purpose of additional address.
                 */
                purpose: 'registered';

                /**
                 * State, county, province, or region.
                 */
                state?: string;

                /**
                 * Town or cho-me.
                 */
                town?: string;
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
                  | 'xx'
                  | 'ye'
                  | 'yt'
                  | 'za'
                  | 'zm'
                  | 'zw';
              }

              interface AdditionalName {
                /**
                 * The person's full name.
                 */
                full_name?: string;

                /**
                 * The person's first or given name.
                 */
                given_name?: string;

                /**
                 * The purpose or type of the additional name.
                 */
                purpose: AdditionalName.Purpose;

                /**
                 * The person's last or family name.
                 */
                surname?: string;
              }

              namespace AdditionalName {
                type Purpose = 'alias' | 'maiden';
              }

              interface Address {
                /**
                 * City, district, suburb, town, or village.
                 */
                city?: string;

                /**
                 * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                 */
                country: Address.Country;

                /**
                 * Address line 1 (e.g., street, PO Box, or company name).
                 */
                line1?: string;

                /**
                 * Address line 2 (e.g., apartment, suite, unit, or building).
                 */
                line2?: string;

                /**
                 * ZIP or postal code.
                 */
                postal_code?: string;

                /**
                 * State, county, province, or region.
                 */
                state?: string;

                /**
                 * Town or cho-me.
                 */
                town?: string;
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
                  | 'xx'
                  | 'ye'
                  | 'yt'
                  | 'za'
                  | 'zm'
                  | 'zw';
              }

              interface DateOfBirth {
                /**
                 * The day of birth.
                 */
                day: number;

                /**
                 * The month of birth.
                 */
                month: number;

                /**
                 * The year of birth.
                 */
                year: number;
              }

              interface Documents {
                /**
                 * One or more documents that demonstrate proof that this person is authorized to represent the company.
                 */
                company_authorization?: Documents.CompanyAuthorization;

                /**
                 * One or more documents showing the person's passport page with photo and personal data.
                 */
                passport?: Documents.Passport;

                /**
                 * An identifying document showing the person's name, either a passport or local ID card.
                 */
                primary_verification?: Documents.PrimaryVerification;

                /**
                 * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
                 */
                secondary_verification?: Documents.SecondaryVerification;

                /**
                 * One or more documents showing the person's visa required for living in the country where they are residing.
                 */
                visa?: Documents.Visa;
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
                   * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens referring to each side of the document.
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
                    back?: string;

                    /**
                     * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                     */
                    front: string;
                  }
                }

                interface SecondaryVerification {
                  /**
                   * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens referring to each side of the document.
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
                    back?: string;

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

                /**
                 * The value of the ID number.
                 */
                value: string;
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
                | 'xx'
                | 'ye'
                | 'yt'
                | 'za'
                | 'zm'
                | 'zw';

              type PoliticalExposure = 'existing' | 'none';

              interface Relationship {
                /**
                 * Whether the person is a director of the account's identity. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
                 */
                director?: boolean;

                /**
                 * Whether the person has significant responsibility to control, manage, or direct the organization.
                 */
                executive?: boolean;

                /**
                 * Whether the person is an owner of the account's identity.
                 */
                owner?: boolean;

                /**
                 * The percent owned by the person of the account's legal entity.
                 */
                percent_ownership?: string;

                /**
                 * The person's title (e.g., CEO, Support Engineer).
                 */
                title?: string;
              }

              interface ScriptAddresses {
                /**
                 * Kana Address.
                 */
                kana?: ScriptAddresses.Kana;

                /**
                 * Kanji Address.
                 */
                kanji?: ScriptAddresses.Kanji;
              }

              namespace ScriptAddresses {
                interface Kana {
                  /**
                   * City, district, suburb, town, or village.
                   */
                  city?: string;

                  /**
                   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                   */
                  country: Kana.Country;

                  /**
                   * Address line 1 (e.g., street, PO Box, or company name).
                   */
                  line1?: string;

                  /**
                   * Address line 2 (e.g., apartment, suite, unit, or building).
                   */
                  line2?: string;

                  /**
                   * ZIP or postal code.
                   */
                  postal_code?: string;

                  /**
                   * State, county, province, or region.
                   */
                  state?: string;

                  /**
                   * Town or cho-me.
                   */
                  town?: string;
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
                    | 'xx'
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
                  city?: string;

                  /**
                   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                   */
                  country: Kanji.Country;

                  /**
                   * Address line 1 (e.g., street, PO Box, or company name).
                   */
                  line1?: string;

                  /**
                   * Address line 2 (e.g., apartment, suite, unit, or building).
                   */
                  line2?: string;

                  /**
                   * ZIP or postal code.
                   */
                  postal_code?: string;

                  /**
                   * State, county, province, or region.
                   */
                  state?: string;

                  /**
                   * Town or cho-me.
                   */
                  town?: string;
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
                    | 'xx'
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
                kana?: ScriptNames.Kana;

                /**
                 * Persons name in kanji script.
                 */
                kanji?: ScriptNames.Kanji;
              }

              namespace ScriptNames {
                interface Kana {
                  /**
                   * The person's first or given name.
                   */
                  given_name?: string;

                  /**
                   * The person's last or family name.
                   */
                  surname?: string;
                }

                interface Kanji {
                  /**
                   * The person's first or given name.
                   */
                  given_name?: string;

                  /**
                   * The person's last or family name.
                   */
                  surname?: string;
                }
              }
            }
          }

          type Include =
            | 'configuration.customer'
            | 'configuration.merchant'
            | 'configuration.recipient'
            | 'configuration.storer'
            | 'defaults'
            | 'identity'
            | 'requirements';
        }
      }

      namespace Core {
        interface AccountRetrieveParams {
          /**
           * Additional fields to include in the response.
           */
          include?: Array<AccountRetrieveParams.Include>;
        }

        namespace AccountRetrieveParams {
          type Include =
            | 'configuration.customer'
            | 'configuration.merchant'
            | 'configuration.recipient'
            | 'configuration.storer'
            | 'defaults'
            | 'identity'
            | 'requirements';
        }
      }

      namespace Core {
        interface AccountUpdateParams {
          /**
           * An Account Configuration which allows the Account to take on a key persona across Stripe products.
           */
          configuration?: AccountUpdateParams.Configuration;

          /**
           * The default contact email address for the Account. Required when configuring the account as a merchant or recipient.
           */
          contact_email?: string;

          /**
           * A value indicating the Stripe dashboard this Account has access to. This will depend on which configurations are enabled for this account.
           */
          dashboard?: AccountUpdateParams.Dashboard;

          /**
           * Default values to be used on Account Configurations.
           */
          defaults?: AccountUpdateParams.Defaults;

          /**
           * A descriptive name for the Account. This name will be surfaced in the Stripe Dashboard and on any invoices sent to the Account.
           */
          display_name?: string;

          /**
           * Information about the company, individual, and business represented by the Account.
           */
          identity?: AccountUpdateParams.Identity;

          /**
           * Additional fields to include in the response.
           */
          include?: Array<AccountUpdateParams.Include>;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;
        }

        namespace AccountUpdateParams {
          interface Configuration {
            /**
             * The Customer Configuration allows the Account to be charged.
             */
            customer?: Configuration.Customer;

            /**
             * The Merchant configuration allows the Account to act as a connected account and collect payments facilitated by a Connect platform. You can add this configuration to your connected accounts only if you've completed onboarding as a Connect platform.
             */
            merchant?: Configuration.Merchant;

            /**
             * The Recipient Configuration allows the Account to receive funds.
             */
            recipient?: Configuration.Recipient;

            /**
             * The Storer Configuration allows the Account to store and move funds using stored-value FinancialAccounts.
             */
            storer?: Configuration.Storer;
          }

          namespace Configuration {
            interface Customer {
              /**
               * Automatic indirect tax settings to be used when automatic tax calculation is enabled on the customer's invoices, subscriptions, checkout sessions, or payment links. Surfaces if automatic tax calculation is possible given the current customer location information.
               */
              automatic_indirect_tax?: Customer.AutomaticIndirectTax;

              /**
               * Billing settings - default settings used for this customer in Billing flows such as Invoices and Subscriptions.
               */
              billing?: Customer.Billing;

              /**
               * Capabilities that have been requested on the Customer Configuration.
               */
              capabilities?: Customer.Capabilities;

              /**
               * The customer's shipping information. Appears on invoices emailed to this customer.
               */
              shipping?: Customer.Shipping;

              /**
               * ID of the test clock to attach to the customer. Can only be set on testmode Accounts, and when the Customer Configuration is first set on an Account.
               */
              test_clock?: string;
            }

            namespace Customer {
              interface AutomaticIndirectTax {
                /**
                 * Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. When set to reverse, invoice and receipt PDFs include the following text: “Reverse charge”.
                 */
                exempt?: AutomaticIndirectTax.Exempt;

                /**
                 * A recent IP address of the customer used for tax reporting and tax location inference.
                 */
                ip_address?: string;

                /**
                 * The data source used to identify the customer's tax location - defaults to 'identity_address'. Will only be used for automatic tax calculation on the customer's Invoices and Subscriptions.
                 */
                location_source?: AutomaticIndirectTax.LocationSource;

                /**
                 * A per-request flag that indicates when Stripe should validate the customer tax location - defaults to 'auto'.
                 */
                validate_location?: AutomaticIndirectTax.ValidateLocation;
              }

              namespace AutomaticIndirectTax {
                type Exempt = 'exempt' | 'none' | 'reverse';

                type LocationSource =
                  | 'identity_address'
                  | 'ip_address'
                  | 'shipping_address';

                type ValidateLocation = 'auto' | 'deferred' | 'immediately';
              }

              interface Billing {
                /**
                 * ID of a payment method that's attached to the customer, to be used as the customer's default payment method for invoices and subscriptions.
                 */
                default_payment_method?: string;

                /**
                 * Default settings used on invoices for this customer.
                 */
                invoice?: Billing.Invoice;
              }

              namespace Billing {
                interface Invoice {
                  /**
                   * The list of up to 4 default custom fields to be displayed on invoices for this customer.
                   */
                  custom_fields?: Array<Invoice.CustomField>;

                  /**
                   * Default footer to be displayed on invoices for this customer.
                   */
                  footer?: string;

                  /**
                   * The sequence to be used on the customer's next invoice. Defaults to 1.
                   */
                  next_sequence?: number;

                  /**
                   * The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
                   */
                  prefix?: string;

                  /**
                   * Default options for invoice PDF rendering for this customer.
                   */
                  rendering?: Invoice.Rendering;
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
                    amount_tax_display?: Rendering.AmountTaxDisplay;

                    /**
                     * ID of the invoice rendering template to use for future invoices.
                     */
                    template?: string;
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
                automatic_indirect_tax?: Capabilities.AutomaticIndirectTax;
              }

              namespace Capabilities {
                interface AutomaticIndirectTax {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }
              }

              interface Shipping {
                /**
                 * Customer shipping address.
                 */
                address?: Stripe.AddressParam;

                /**
                 * Customer name.
                 */
                name?: string;

                /**
                 * Customer phone (including extension).
                 */
                phone?: string;
              }
            }

            interface Merchant {
              /**
               * Settings used for Bacs debit payments.
               */
              bacs_debit_payments?: Merchant.BacsDebitPayments;

              /**
               * Settings used to apply the merchant's branding to email receipts, invoices, Checkout, and other products.
               */
              branding?: Merchant.Branding;

              /**
               * Capabilities to request on the Merchant Configuration.
               */
              capabilities?: Merchant.Capabilities;

              /**
               * Card payments settings.
               */
              card_payments?: Merchant.CardPayments;

              /**
               * The merchant category code for the merchant. MCCs are used to classify businesses based on the goods or services they provide.
               */
              mcc?: string;

              /**
               * Statement descriptor.
               */
              statement_descriptor?: Merchant.StatementDescriptor;

              /**
               * Publicly available contact information for sending support issues to.
               */
              support?: Merchant.Support;
            }

            namespace Merchant {
              interface BacsDebitPayments {
                /**
                 * Display name for Bacs debit payments.
                 */
                display_name?: string;
              }

              interface Branding {
                /**
                 * ID of a [file upload](https://docs.stripe.com/api/persons/update#create_file): An icon for the merchant. Must be square and at least 128px x 128px.
                 */
                icon?: string;

                /**
                 * ID of a [file upload](https://docs.stripe.com/api/persons/update#create_file): A logo for the merchant that will be used in Checkout instead of the icon and without the merchant's name next to it if provided. Must be at least 128px x 128px.
                 */
                logo?: string;

                /**
                 * A CSS hex color value representing the primary branding color for the merchant.
                 */
                primary_color?: string;

                /**
                 * A CSS hex color value representing the secondary branding color for the merchant.
                 */
                secondary_color?: string;
              }

              interface Capabilities {
                /**
                 * Allow the merchant to process ACH debit payments.
                 */
                ach_debit_payments?: Capabilities.AchDebitPayments;

                /**
                 * Allow the merchant to process ACSS debit payments.
                 */
                acss_debit_payments?: Capabilities.AcssDebitPayments;

                /**
                 * Allow the merchant to process Affirm payments.
                 */
                affirm_payments?: Capabilities.AffirmPayments;

                /**
                 * Allow the merchant to process Afterpay/Clearpay payments.
                 */
                afterpay_clearpay_payments?: Capabilities.AfterpayClearpayPayments;

                /**
                 * Allow the merchant to process Alma payments.
                 */
                alma_payments?: Capabilities.AlmaPayments;

                /**
                 * Allow the merchant to process Amazon Pay payments.
                 */
                amazon_pay_payments?: Capabilities.AmazonPayPayments;

                /**
                 * Allow the merchant to process Australian BECS Direct Debit payments.
                 */
                au_becs_debit_payments?: Capabilities.AuBecsDebitPayments;

                /**
                 * Allow the merchant to process BACS Direct Debit payments.
                 */
                bacs_debit_payments?: Capabilities.BacsDebitPayments;

                /**
                 * Allow the merchant to process Bancontact payments.
                 */
                bancontact_payments?: Capabilities.BancontactPayments;

                /**
                 * Allow the merchant to process BLIK payments.
                 */
                blik_payments?: Capabilities.BlikPayments;

                /**
                 * Allow the merchant to process Boleto payments.
                 */
                boleto_payments?: Capabilities.BoletoPayments;

                /**
                 * Allow the merchant to collect card payments.
                 */
                card_payments?: Capabilities.CardPayments;

                /**
                 * Allow the merchant to process Cartes Bancaires payments.
                 */
                cartes_bancaires_payments?: Capabilities.CartesBancairesPayments;

                /**
                 * Allow the merchant to process Cash App payments.
                 */
                cashapp_payments?: Capabilities.CashappPayments;

                /**
                 * Allow the merchant to process EPS payments.
                 */
                eps_payments?: Capabilities.EpsPayments;

                /**
                 * Allow the merchant to process FPX payments.
                 */
                fpx_payments?: Capabilities.FpxPayments;

                /**
                 * Allow the merchant to process UK bank transfer payments.
                 */
                gb_bank_transfer_payments?: Capabilities.GbBankTransferPayments;

                /**
                 * Allow the merchant to process GrabPay payments.
                 */
                grabpay_payments?: Capabilities.GrabpayPayments;

                /**
                 * Allow the merchant to process iDEAL payments.
                 */
                ideal_payments?: Capabilities.IdealPayments;

                /**
                 * Allow the merchant to process JCB card payments.
                 */
                jcb_payments?: Capabilities.JcbPayments;

                /**
                 * Allow the merchant to process Japanese bank transfer payments.
                 */
                jp_bank_transfer_payments?: Capabilities.JpBankTransferPayments;

                /**
                 * Allow the merchant to process Kakao Pay payments.
                 */
                kakao_pay_payments?: Capabilities.KakaoPayPayments;

                /**
                 * Allow the merchant to process Klarna payments.
                 */
                klarna_payments?: Capabilities.KlarnaPayments;

                /**
                 * Allow the merchant to process Konbini convenience store payments.
                 */
                konbini_payments?: Capabilities.KonbiniPayments;

                /**
                 * Allow the merchant to process Korean card payments.
                 */
                kr_card_payments?: Capabilities.KrCardPayments;

                /**
                 * Allow the merchant to process Link payments.
                 */
                link_payments?: Capabilities.LinkPayments;

                /**
                 * Allow the merchant to process MobilePay payments.
                 */
                mobilepay_payments?: Capabilities.MobilepayPayments;

                /**
                 * Allow the merchant to process Multibanco payments.
                 */
                multibanco_payments?: Capabilities.MultibancoPayments;

                /**
                 * Allow the merchant to process Mexican bank transfer payments.
                 */
                mx_bank_transfer_payments?: Capabilities.MxBankTransferPayments;

                /**
                 * Allow the merchant to process Naver Pay payments.
                 */
                naver_pay_payments?: Capabilities.NaverPayPayments;

                /**
                 * Allow the merchant to process OXXO payments.
                 */
                oxxo_payments?: Capabilities.OxxoPayments;

                /**
                 * Allow the merchant to process Przelewy24 (P24) payments.
                 */
                p24_payments?: Capabilities.P24Payments;

                /**
                 * Allow the merchant to process Pay by Bank payments.
                 */
                pay_by_bank_payments?: Capabilities.PayByBankPayments;

                /**
                 * Allow the merchant to process PAYCO payments.
                 */
                payco_payments?: Capabilities.PaycoPayments;

                /**
                 * Allow the merchant to process PayNow payments.
                 */
                paynow_payments?: Capabilities.PaynowPayments;

                /**
                 * Allow the merchant to process PromptPay payments.
                 */
                promptpay_payments?: Capabilities.PromptpayPayments;

                /**
                 * Allow the merchant to process Revolut Pay payments.
                 */
                revolut_pay_payments?: Capabilities.RevolutPayPayments;

                /**
                 * Allow the merchant to process Samsung Pay payments.
                 */
                samsung_pay_payments?: Capabilities.SamsungPayPayments;

                /**
                 * Allow the merchant to process SEPA bank transfer payments.
                 */
                sepa_bank_transfer_payments?: Capabilities.SepaBankTransferPayments;

                /**
                 * Allow the merchant to process SEPA Direct Debit payments.
                 */
                sepa_debit_payments?: Capabilities.SepaDebitPayments;

                /**
                 * Allow the merchant to process Swish payments.
                 */
                swish_payments?: Capabilities.SwishPayments;

                /**
                 * Allow the merchant to process TWINT payments.
                 */
                twint_payments?: Capabilities.TwintPayments;

                /**
                 * Allow the merchant to process US bank transfer payments.
                 */
                us_bank_transfer_payments?: Capabilities.UsBankTransferPayments;

                /**
                 * Allow the merchant to process Zip payments.
                 */
                zip_payments?: Capabilities.ZipPayments;
              }

              namespace Capabilities {
                interface AchDebitPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface AcssDebitPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface AffirmPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface AfterpayClearpayPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface AlmaPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface AmazonPayPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface AuBecsDebitPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface BacsDebitPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface BancontactPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface BlikPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface BoletoPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface CardPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface CartesBancairesPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface CashappPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface EpsPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface FpxPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface GbBankTransferPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface GrabpayPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface IdealPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface JcbPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface JpBankTransferPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface KakaoPayPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface KlarnaPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface KonbiniPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface KrCardPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface LinkPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface MobilepayPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface MultibancoPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface MxBankTransferPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface NaverPayPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface OxxoPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface P24Payments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface PayByBankPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface PaycoPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface PaynowPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface PromptpayPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface RevolutPayPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface SamsungPayPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface SepaBankTransferPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface SepaDebitPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface SwishPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface TwintPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface UsBankTransferPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface ZipPayments {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }
              }

              interface CardPayments {
                /**
                 * Automatically declines certain charge types regardless of whether the card issuer accepted or declined the charge.
                 */
                decline_on?: CardPayments.DeclineOn;
              }

              namespace CardPayments {
                interface DeclineOn {
                  /**
                   * Whether Stripe automatically declines charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and they fail bank verification.
                   */
                  avs_failure?: boolean;

                  /**
                   * Whether Stripe automatically declines charges with an incorrect CVC. This setting only applies when a CVC is provided and it fails bank verification.
                   */
                  cvc_failure?: boolean;
                }
              }

              interface StatementDescriptor {
                /**
                 * The default text that appears on statements for non-card charges outside of Japan. For card charges, if you don't set a statement_descriptor_prefix, this text is also used as the statement descriptor prefix. In that case, if concatenating the statement descriptor suffix causes the combined statement descriptor to exceed 22 characters, we truncate the statement_descriptor text to limit the full descriptor to 22 characters. For more information about statement descriptors and their requirements, see the Merchant Configuration settings documentation.
                 */
                descriptor?: string;

                /**
                 * Default text that appears on statements for card charges outside of Japan, prefixing any dynamic statement_descriptor_suffix specified on the charge. To maximize space for the dynamic part of the descriptor, keep this text short. If you don't specify this value, statement_descriptor is used as the prefix. For more information about statement descriptors and their requirements, see the Merchant Configuration settings documentation.
                 */
                prefix?: string;
              }

              interface Support {
                /**
                 * A publicly available mailing address for sending support issues to.
                 */
                address?: Support.Address;

                /**
                 * A publicly available email address for sending support issues to.
                 */
                email?: string;

                /**
                 * A publicly available phone number to call with support issues.
                 */
                phone?: string;

                /**
                 * A publicly available website for handling support issues.
                 */
                url?: string;
              }

              namespace Support {
                interface Address {
                  /**
                   * City, district, suburb, town, or village.
                   */
                  city?: string | null;

                  /**
                   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                   */
                  country?: Address.Country | null;

                  /**
                   * Address line 1 (e.g., street, PO Box, or company name).
                   */
                  line1?: string | null;

                  /**
                   * Address line 2 (e.g., apartment, suite, unit, or building).
                   */
                  line2?: string | null;

                  /**
                   * ZIP or postal code.
                   */
                  postal_code?: string | null;

                  /**
                   * State, county, province, or region.
                   */
                  state?: string | null;

                  /**
                   * Town or cho-me.
                   */
                  town?: string | null;
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
                    | 'xx'
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
               * Capabilities to request on the Recipient Configuration.
               */
              capabilities?: Recipient.Capabilities;

              /**
               * The payout method id to be used as a default outbound destination. This will allow the PayoutMethod to be omitted on OutboundPayments made through API or sending payouts via dashboard. Can also be explicitly set to `null` to clear the existing default outbound destination.
               */
              default_outbound_destination?: string;
            }

            namespace Recipient {
              interface Capabilities {
                /**
                 * Capabilities that enable OutboundPayments to a bank account linked to this Account.
                 */
                bank_accounts?: Capabilities.BankAccounts;

                /**
                 * Capability that enable OutboundPayments to a debit card linked to this Account.
                 */
                cards?: Capabilities.Cards;

                /**
                 * Capabilities that enable the recipient to manage their Stripe Balance (/v1/balance).
                 */
                stripe_balance?: Capabilities.StripeBalance;
              }

              namespace Capabilities {
                interface BankAccounts {
                  /**
                   * Enables this Account to receive OutboundPayments to linked bank accounts over local networks.
                   */
                  local?: BankAccounts.Local;

                  /**
                   * Enables this Account to receive OutboundPayments to linked bank accounts over wire.
                   */
                  wire?: BankAccounts.Wire;
                }

                namespace BankAccounts {
                  interface Local {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested?: boolean;
                  }

                  interface Wire {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested?: boolean;
                  }
                }

                interface Cards {
                  /**
                   * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                   */
                  requested?: boolean;
                }

                interface StripeBalance {
                  /**
                   * Allows the account to receive /v1/transfers into their Stripe Balance (/v1/balance).
                   */
                  stripe_transfers?: StripeBalance.StripeTransfers;
                }

                namespace StripeBalance {
                  interface StripeTransfers {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested?: boolean;
                  }
                }
              }
            }

            interface Storer {
              /**
               * Capabilities to request on the Storer Configuration.
               */
              capabilities?: Storer.Capabilities;
            }

            namespace Storer {
              interface Capabilities {
                /**
                 * Can provision a financial address to credit/debit a FinancialAccount.
                 */
                financial_addresses?: Capabilities.FinancialAddresses;

                /**
                 * Can hold storage-type funds on Stripe.
                 */
                holds_currencies?: Capabilities.HoldsCurrencies;

                /**
                 * Can pull funds from an external source, owned by yourself, to a FinancialAccount.
                 */
                inbound_transfers?: Capabilities.InboundTransfers;

                /**
                 * Can send funds from a FinancialAccount to a destination owned by someone else.
                 */
                outbound_payments?: Capabilities.OutboundPayments;

                /**
                 * Can send funds from a FinancialAccount to a destination owned by yourself.
                 */
                outbound_transfers?: Capabilities.OutboundTransfers;
              }

              namespace Capabilities {
                interface FinancialAddresses {
                  /**
                   * Can provision a bank-account-like financial address (VBAN) to credit/debit a FinancialAccount.
                   */
                  bank_accounts?: FinancialAddresses.BankAccounts;
                }

                namespace FinancialAddresses {
                  interface BankAccounts {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested?: boolean;
                  }
                }

                interface HoldsCurrencies {
                  /**
                   * Can hold storage-type funds on Stripe in GBP.
                   */
                  gbp?: HoldsCurrencies.Gbp;
                }

                namespace HoldsCurrencies {
                  interface Gbp {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested?: boolean;
                  }
                }

                interface InboundTransfers {
                  /**
                   * Can pull funds from an external bank account owned by yourself to a FinancialAccount.
                   */
                  bank_accounts?: InboundTransfers.BankAccounts;
                }

                namespace InboundTransfers {
                  interface BankAccounts {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested?: boolean;
                  }
                }

                interface OutboundPayments {
                  /**
                   * Can send funds from a FinancialAccount to a bank account owned by someone else.
                   */
                  bank_accounts?: OutboundPayments.BankAccounts;

                  /**
                   * Can send funds from a FinancialAccount to a debit card owned by someone else.
                   */
                  cards?: OutboundPayments.Cards;

                  /**
                   * Can send funds from a FinancialAccount to another FinancialAccount owned by someone else.
                   */
                  financial_accounts?: OutboundPayments.FinancialAccounts;
                }

                namespace OutboundPayments {
                  interface BankAccounts {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested?: boolean;
                  }

                  interface Cards {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested?: boolean;
                  }

                  interface FinancialAccounts {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested?: boolean;
                  }
                }

                interface OutboundTransfers {
                  /**
                   * Can send funds from a FinancialAccount to a bank account owned by yourself.
                   */
                  bank_accounts?: OutboundTransfers.BankAccounts;

                  /**
                   * Can send funds from a FinancialAccount to another FinancialAccount owned by yourself.
                   */
                  financial_accounts?: OutboundTransfers.FinancialAccounts;
                }

                namespace OutboundTransfers {
                  interface BankAccounts {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested?: boolean;
                  }

                  interface FinancialAccounts {
                    /**
                     * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                     */
                    requested?: boolean;
                  }
                }
              }
            }
          }

          type Dashboard = 'express' | 'full' | 'none';

          interface Defaults {
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency?: Defaults.Currency;

            /**
             * The Account's preferred locales (languages), ordered by preference.
             */
            locales?: Array<Defaults.Locale>;

            /**
             * Default responsibilities held by either Stripe or the platform.
             */
            responsibilities?: Defaults.Responsibilities;
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
              | 'usdb'
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
               * A value indicating the party responsible for collecting fees from this account.
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
            attestations?: Identity.Attestations;

            /**
             * Information about the company or business.
             */
            business_details?: Identity.BusinessDetails;

            /**
             * The country in which the account holder resides, or in which the business is legally established. This should be an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
             */
            country?: Identity.Country;

            /**
             * The entity type.
             */
            entity_type?: Identity.EntityType;

            /**
             * Information about the individual represented by the Account. This property is `null` unless `entity_type` is set to `individual`.
             */
            individual?: Identity.Individual;
          }

          namespace Identity {
            interface Attestations {
              /**
               * This hash is used to attest that the directors information provided to Stripe is both current and correct.
               */
              directorship_declaration?: Attestations.DirectorshipDeclaration;

              /**
               * This hash is used to attest that the beneficial owner information provided to Stripe is both current and correct.
               */
              ownership_declaration?: Attestations.OwnershipDeclaration;

              /**
               * Attestation that all Persons with a specific Relationship value have been provided.
               */
              persons_provided?: Attestations.PersonsProvided;

              /**
               * Attestations of accepted terms of service agreements.
               */
              terms_of_service?: Attestations.TermsOfService;
            }

            namespace Attestations {
              interface DirectorshipDeclaration {
                /**
                 * The time marking when the director attestation was made. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
                 */
                date?: string;

                /**
                 * The IP address from which the director attestation was made.
                 */
                ip?: string;

                /**
                 * The user agent of the browser from which the director attestation was made.
                 */
                user_agent?: string;
              }

              interface OwnershipDeclaration {
                /**
                 * The time marking when the beneficial owner attestation was made. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
                 */
                date?: string;

                /**
                 * The IP address from which the beneficial owner attestation was made.
                 */
                ip?: string;

                /**
                 * The user agent of the browser from which the beneficial owner attestation was made.
                 */
                user_agent?: string;
              }

              interface PersonsProvided {
                /**
                 * Whether the company's directors have been provided. Set this Boolean to true after creating all the company's directors with the [Persons API](https://docs.stripe.com/api/v2/core/accounts/createperson).
                 */
                directors?: boolean;

                /**
                 * Whether the company's executives have been provided. Set this Boolean to true after creating all the company's executives with the [Persons API](https://docs.stripe.com/api/v2/core/accounts/createperson).
                 */
                executives?: boolean;

                /**
                 * Whether the company's owners have been provided. Set this Boolean to true after creating all the company's owners with the [Persons API](https://docs.stripe.com/api/v2/core/accounts/createperson).
                 */
                owners?: boolean;

                /**
                 * Reason for why the company is exempt from providing ownership information.
                 */
                ownership_exemption_reason?: PersonsProvided.OwnershipExemptionReason;
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
                account?: TermsOfService.Account;
              }

              namespace TermsOfService {
                interface Account {
                  /**
                   * The time when the Account's representative accepted the terms of service. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
                   */
                  date?: string;

                  /**
                   * The IP address from which the Account's representative accepted the terms of service.
                   */
                  ip?: string;

                  /**
                   * The user agent of the browser from which the Account's representative accepted the terms of service.
                   */
                  user_agent?: string;
                }
              }
            }

            interface BusinessDetails {
              /**
               * The business registration address of the business entity.
               */
              address?: BusinessDetails.Address | null;

              /**
               * The business gross annual revenue for its preceding fiscal year.
               */
              annual_revenue?: BusinessDetails.AnnualRevenue | null;

              /**
               * A document verifying the business.
               */
              documents?: BusinessDetails.Documents | null;

              /**
               * The name which is used by the business.
               */
              doing_business_as?: string | null;

              /**
               * An estimated upper bound of employees, contractors, vendors, etc. currently working for the business.
               */
              estimated_worker_count?: number | null;

              /**
               * The ID numbers of a business entity.
               */
              id_numbers?: Array<BusinessDetails.IdNumber> | null;

              /**
               * An estimate of the monthly revenue of the business.
               */
              monthly_estimated_revenue?: BusinessDetails.MonthlyEstimatedRevenue | null;

              /**
               * The phone number of the Business Entity.
               */
              phone?: string | null;

              /**
               * Internal-only description of the product sold or service provided by the business. It's used by Stripe for risk and underwriting purposes.
               */
              product_description?: string | null;

              /**
               * The business legal name.
               */
              registered_name?: string | null;

              /**
               * The business registration address of the business entity in non latin script.
               */
              script_addresses?: BusinessDetails.ScriptAddresses | null;

              /**
               * The business legal name in non latin script.
               */
              script_names?: BusinessDetails.ScriptNames | null;

              /**
               * The category identifying the legal structure of the business.
               */
              structure?: BusinessDetails.Structure | null;

              /**
               * The business's publicly available website.
               */
              url?: string | null;
            }

            namespace BusinessDetails {
              interface Address {
                /**
                 * City, district, suburb, town, or village.
                 */
                city?: string | null;

                /**
                 * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                 */
                country?: Address.Country | null;

                /**
                 * Address line 1 (e.g., street, PO Box, or company name).
                 */
                line1?: string | null;

                /**
                 * Address line 2 (e.g., apartment, suite, unit, or building).
                 */
                line2?: string | null;

                /**
                 * ZIP or postal code.
                 */
                postal_code?: string | null;

                /**
                 * State, county, province, or region.
                 */
                state?: string | null;

                /**
                 * Town or cho-me.
                 */
                town?: string | null;
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
                  | 'xx'
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
                amount?: Amount;

                /**
                 * The close-out date of the preceding fiscal year in ISO 8601 format. E.g. 2023-12-31 for the 31st of December, 2023.
                 */
                fiscal_year_end?: string | null;
              }

              interface Documents {
                /**
                 * One or more documents that support the bank account ownership verification requirement. Must be a document associated with the account's primary active bank account that displays the last 4 digits of the account number, either a statement or a check.
                 */
                bank_account_ownership_verification?: Documents.BankAccountOwnershipVerification | null;

                /**
                 * One or more documents that demonstrate proof of a company's license to operate.
                 */
                company_license?: Documents.CompanyLicense | null;

                /**
                 * One or more documents showing the company's Memorandum of Association.
                 */
                company_memorandum_of_association?: Documents.CompanyMemorandumOfAssociation | null;

                /**
                 * Certain countries only: One or more documents showing the ministerial decree legalizing the company's establishment.
                 */
                company_ministerial_decree?: Documents.CompanyMinisterialDecree | null;

                /**
                 * One or more documents that demonstrate proof of a company's registration with the appropriate local authorities.
                 */
                company_registration_verification?: Documents.CompanyRegistrationVerification | null;

                /**
                 * One or more documents that demonstrate proof of a company's tax ID.
                 */
                company_tax_id_verification?: Documents.CompanyTaxIdVerification | null;

                /**
                 * A document verifying the business.
                 */
                primary_verification?: Documents.PrimaryVerification | null;

                /**
                 * One or more documents that demonstrate proof of address.
                 */
                proof_of_address?: Documents.ProofOfAddress;

                /**
                 * One or more documents showing the company's proof of registration with the national business registry.
                 */
                proof_of_registration?: Documents.ProofOfRegistration | null;

                /**
                 * One or more documents that demonstrate proof of ultimate beneficial ownership.
                 */
                proof_of_ultimate_beneficial_ownership?: Documents.ProofOfUltimateBeneficialOwnership;
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
                   * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens referring to each side of the document.
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
                    back?: string | null;

                    /**
                     * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                     */
                    front?: string;
                  }
                }

                interface ProofOfAddress {
                  /**
                   * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                   */
                  files: Array<string>;

                  /**
                   * The format of the document. Currently supports `files` only.
                   */
                  type: 'files';
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
                registrar?: string;

                /**
                 * Open Enum. The ID number type of a business entity.
                 */
                type: IdNumber.Type;

                /**
                 * The value of the ID number.
                 */
                value: string;
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
                amount?: Amount;
              }

              interface ScriptAddresses {
                /**
                 * Kana Address.
                 */
                kana?: ScriptAddresses.Kana | null;

                /**
                 * Kanji Address.
                 */
                kanji?: ScriptAddresses.Kanji | null;
              }

              namespace ScriptAddresses {
                interface Kana {
                  /**
                   * City, district, suburb, town, or village.
                   */
                  city?: string | null;

                  /**
                   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                   */
                  country?: Kana.Country | null;

                  /**
                   * Address line 1 (e.g., street, PO Box, or company name).
                   */
                  line1?: string | null;

                  /**
                   * Address line 2 (e.g., apartment, suite, unit, or building).
                   */
                  line2?: string | null;

                  /**
                   * ZIP or postal code.
                   */
                  postal_code?: string | null;

                  /**
                   * State, county, province, or region.
                   */
                  state?: string | null;

                  /**
                   * Town or cho-me.
                   */
                  town?: string | null;
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
                    | 'xx'
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
                  city?: string | null;

                  /**
                   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                   */
                  country?: Kanji.Country | null;

                  /**
                   * Address line 1 (e.g., street, PO Box, or company name).
                   */
                  line1?: string | null;

                  /**
                   * Address line 2 (e.g., apartment, suite, unit, or building).
                   */
                  line2?: string | null;

                  /**
                   * ZIP or postal code.
                   */
                  postal_code?: string | null;

                  /**
                   * State, county, province, or region.
                   */
                  state?: string | null;

                  /**
                   * Town or cho-me.
                   */
                  town?: string | null;
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
                    | 'xx'
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
                kana?: ScriptNames.Kana | null;

                /**
                 * Kanji name.
                 */
                kanji?: ScriptNames.Kanji | null;
              }

              namespace ScriptNames {
                interface Kana {
                  /**
                   * Registered name of the business.
                   */
                  registered_name?: string | null;
                }

                interface Kanji {
                  /**
                   * Registered name of the business.
                   */
                  registered_name?: string | null;
                }
              }

              type Structure =
                | 'cooperative'
                | 'free_zone_establishment'
                | 'free_zone_llc'
                | 'governmental_unit'
                | 'government_instrumentality'
                | 'incorporated_association'
                | 'incorporated_non_profit'
                | 'incorporated_partnership'
                | 'limited_liability_partnership'
                | 'llc'
                | 'multi_member_llc'
                | 'private_company'
                | 'private_corporation'
                | 'private_partnership'
                | 'public_company'
                | 'public_corporation'
                | 'public_listed_corporation'
                | 'public_partnership'
                | 'registered_charity'
                | 'single_member_llc'
                | 'sole_establishment'
                | 'sole_proprietorship'
                | 'tax_exempt_government_instrumentality'
                | 'trust'
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
              | 'xx'
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
               * Additional addresses associated with the individual.
               */
              additional_addresses?: Array<Individual.AdditionalAddress> | null;

              /**
               * Additional names (e.g. aliases) associated with the individual.
               */
              additional_names?: Array<Individual.AdditionalName> | null;

              /**
               * The individual's residential address.
               */
              address?: Individual.Address | null;

              /**
               * The individual's date of birth.
               */
              date_of_birth?: Individual.DateOfBirth | null;

              /**
               * Documents that may be submitted to satisfy various informational requests.
               */
              documents?: Individual.Documents | null;

              /**
               * The individual's email address.
               */
              email?: string | null;

              /**
               * The individual's first name.
               */
              given_name?: string | null;

              /**
               * The identification numbers (e.g., SSN) associated with the individual.
               */
              id_numbers?: Array<Individual.IdNumber> | null;

              /**
               * The individual's gender (International regulations require either "male" or "female").
               */
              legal_gender?: Individual.LegalGender | null;

              /**
               * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
               */
              metadata?: Stripe.MetadataParam;

              /**
               * The countries where the individual is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
               */
              nationalities?: Array<Individual.Nationality>;

              /**
               * The individual's phone number.
               */
              phone?: string | null;

              /**
               * The individual's political exposure.
               */
              political_exposure?: Individual.PoliticalExposure | null;

              /**
               * The relationship that this individual has with the account's identity.
               */
              relationship?: Individual.Relationship | null;

              /**
               * The script addresses (e.g., non-Latin characters) associated with the individual.
               */
              script_addresses?: Individual.ScriptAddresses | null;

              /**
               * The individuals primary name in non latin script.
               */
              script_names?: Individual.ScriptNames | null;

              /**
               * The individual's last name.
               */
              surname?: string | null;
            }

            namespace Individual {
              interface AdditionalAddress {
                /**
                 * City, district, suburb, town, or village.
                 */
                city?: string | null;

                /**
                 * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                 */
                country?: AdditionalAddress.Country | null;

                /**
                 * Address line 1 (e.g., street, PO Box, or company name).
                 */
                line1?: string | null;

                /**
                 * Address line 2 (e.g., apartment, suite, unit, or building).
                 */
                line2?: string | null;

                /**
                 * ZIP or postal code.
                 */
                postal_code?: string | null;

                /**
                 * Purpose of additional address.
                 */
                purpose: 'registered';

                /**
                 * State, county, province, or region.
                 */
                state?: string | null;

                /**
                 * Town or cho-me.
                 */
                town?: string | null;
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
                  | 'xx'
                  | 'ye'
                  | 'yt'
                  | 'za'
                  | 'zm'
                  | 'zw';
              }

              interface AdditionalName {
                /**
                 * The person's full name.
                 */
                full_name?: string;

                /**
                 * The person's first or given name.
                 */
                given_name?: string;

                /**
                 * The purpose or type of the additional name.
                 */
                purpose: AdditionalName.Purpose;

                /**
                 * The person's last or family name.
                 */
                surname?: string;
              }

              namespace AdditionalName {
                type Purpose = 'alias' | 'maiden';
              }

              interface Address {
                /**
                 * City, district, suburb, town, or village.
                 */
                city?: string | null;

                /**
                 * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                 */
                country?: Address.Country | null;

                /**
                 * Address line 1 (e.g., street, PO Box, or company name).
                 */
                line1?: string | null;

                /**
                 * Address line 2 (e.g., apartment, suite, unit, or building).
                 */
                line2?: string | null;

                /**
                 * ZIP or postal code.
                 */
                postal_code?: string | null;

                /**
                 * State, county, province, or region.
                 */
                state?: string | null;

                /**
                 * Town or cho-me.
                 */
                town?: string | null;
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
                  | 'xx'
                  | 'ye'
                  | 'yt'
                  | 'za'
                  | 'zm'
                  | 'zw';
              }

              interface DateOfBirth {
                /**
                 * The day of the birth.
                 */
                day: number;

                /**
                 * The month of birth.
                 */
                month: number;

                /**
                 * The year of birth.
                 */
                year: number;
              }

              interface Documents {
                /**
                 * One or more documents that demonstrate proof that this person is authorized to represent the company.
                 */
                company_authorization?: Documents.CompanyAuthorization;

                /**
                 * One or more documents showing the person's passport page with photo and personal data.
                 */
                passport?: Documents.Passport;

                /**
                 * An identifying document showing the person's name, either a passport or local ID card.
                 */
                primary_verification?: Documents.PrimaryVerification | null;

                /**
                 * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
                 */
                secondary_verification?: Documents.SecondaryVerification | null;

                /**
                 * One or more documents showing the person's visa required for living in the country where they are residing.
                 */
                visa?: Documents.Visa;
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
                   * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens referring to each side of the document.
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
                    back?: string | null;

                    /**
                     * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                     */
                    front?: string;
                  }
                }

                interface SecondaryVerification {
                  /**
                   * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens referring to each side of the document.
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
                    back?: string | null;

                    /**
                     * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                     */
                    front?: string;
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

                /**
                 * The value of the ID number.
                 */
                value: string;
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
                | 'xx'
                | 'ye'
                | 'yt'
                | 'za'
                | 'zm'
                | 'zw';

              type PoliticalExposure = 'existing' | 'none';

              interface Relationship {
                /**
                 * Whether the person is a director of the account's identity. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
                 */
                director?: boolean | null;

                /**
                 * Whether the person has significant responsibility to control, manage, or direct the organization.
                 */
                executive?: boolean | null;

                /**
                 * Whether the person is an owner of the account's identity.
                 */
                owner?: boolean | null;

                /**
                 * The percent owned by the person of the account's legal entity.
                 */
                percent_ownership?: string | null;

                /**
                 * The person's title (e.g., CEO, Support Engineer).
                 */
                title?: string | null;
              }

              interface ScriptAddresses {
                /**
                 * Kana Address.
                 */
                kana?: ScriptAddresses.Kana | null;

                /**
                 * Kanji Address.
                 */
                kanji?: ScriptAddresses.Kanji | null;
              }

              namespace ScriptAddresses {
                interface Kana {
                  /**
                   * City, district, suburb, town, or village.
                   */
                  city?: string | null;

                  /**
                   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                   */
                  country?: Kana.Country | null;

                  /**
                   * Address line 1 (e.g., street, PO Box, or company name).
                   */
                  line1?: string | null;

                  /**
                   * Address line 2 (e.g., apartment, suite, unit, or building).
                   */
                  line2?: string | null;

                  /**
                   * ZIP or postal code.
                   */
                  postal_code?: string | null;

                  /**
                   * State, county, province, or region.
                   */
                  state?: string | null;

                  /**
                   * Town or cho-me.
                   */
                  town?: string | null;
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
                    | 'xx'
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
                  city?: string | null;

                  /**
                   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                   */
                  country?: Kanji.Country | null;

                  /**
                   * Address line 1 (e.g., street, PO Box, or company name).
                   */
                  line1?: string | null;

                  /**
                   * Address line 2 (e.g., apartment, suite, unit, or building).
                   */
                  line2?: string | null;

                  /**
                   * ZIP or postal code.
                   */
                  postal_code?: string | null;

                  /**
                   * State, county, province, or region.
                   */
                  state?: string | null;

                  /**
                   * Town or cho-me.
                   */
                  town?: string | null;
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
                    | 'xx'
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
                kana?: ScriptNames.Kana | null;

                /**
                 * Persons name in kanji script.
                 */
                kanji?: ScriptNames.Kanji | null;
              }

              namespace ScriptNames {
                interface Kana {
                  /**
                   * The person's first or given name.
                   */
                  given_name?: string | null;

                  /**
                   * The person's last or family name.
                   */
                  surname?: string | null;
                }

                interface Kanji {
                  /**
                   * The person's first or given name.
                   */
                  given_name?: string | null;

                  /**
                   * The person's last or family name.
                   */
                  surname?: string | null;
                }
              }
            }
          }

          type Include =
            | 'configuration.customer'
            | 'configuration.merchant'
            | 'configuration.recipient'
            | 'configuration.storer'
            | 'defaults'
            | 'identity'
            | 'requirements';
        }
      }

      namespace Core {
        interface AccountListParams {
          /**
           * Filter only accounts that have all of the configurations specified. If omitted, returns all accounts regardless of which configurations they have.
           */
          applied_configurations?: Array<string>;

          /**
           * The upper limit on the number of accounts returned by the List Account request.
           */
          limit?: number;
        }
      }

      namespace Core {
        interface AccountCloseParams {
          /**
           * Configurations on the Account to be closed. All configurations on the Account must be passed in for this request to succeed.
           */
          applied_configurations?: Array<
            AccountCloseParams.AppliedConfiguration
          >;
        }

        namespace AccountCloseParams {
          type AppliedConfiguration =
            | 'customer'
            | 'merchant'
            | 'recipient'
            | 'storer';
        }
      }

      namespace Core {
        class AccountsResource {
          persons: Stripe.V2.Core.Accounts.PersonsResource;

          /**
           * An Account is a representation of a company, individual or other entity that a user interacts with. Accounts contain identifying information about the entity, and configurations that store the features an account has access to. An account can be configured as any or all of the following configurations: Customer, Merchant and/or Recipient.
           */
          create(
            params?: AccountCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.Account>>;
          create(
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.Account>>;

          /**
           * Retrieves the details of an Account.
           */
          retrieve(
            id: string,
            params?: AccountRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.Account>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.Account>>;

          /**
           * Updates the details of an Account.
           */
          update(
            id: string,
            params?: AccountUpdateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.Account>>;

          /**
           * Returns a list of Accounts.
           */
          list(
            params?: AccountListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Core.Account>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Core.Account>;

          /**
           * Removes access to the Account and its associated resources.
           */
          close(
            id: string,
            params?: AccountCloseParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.Account>>;
          close(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.Account>>;
        }
      }
    }
  }
}
