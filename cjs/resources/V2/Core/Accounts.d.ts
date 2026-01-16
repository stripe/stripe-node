import { StripeResource } from '../../../StripeResource.js';
import { MetadataParam, AddressParam, JapanAddressParam, Metadata } from '../../../shared.js';
import { RequestOptions, ApiListPromise, Response } from '../../../lib.js';
export declare class AccountResource extends StripeResource {
    /**
     * Returns a list of Accounts.
     */
    list(params?: V2.Core.AccountListParams, options?: RequestOptions): ApiListPromise<Account>;
    list(options?: RequestOptions): ApiListPromise<Account>;
    /**
     * An Account is a representation of a company, individual or other entity that a user interacts with. Accounts contain identifying information about the entity, and configurations that store the features an account has access to. An account can be configured as any or all of the following configurations: Customer, Merchant and/or Recipient.
     */
    create(params?: V2.Core.AccountCreateParams, options?: RequestOptions): Promise<Response<Account>>;
    create(options?: RequestOptions): Promise<Response<Account>>;
    /**
     * Retrieves the details of an Account.
     */
    retrieve(id: string, params?: V2.Core.AccountRetrieveParams, options?: RequestOptions): Promise<Response<Account>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<Account>>;
    /**
     * Updates the details of an Account.
     */
    update(id: string, params?: V2.Core.AccountUpdateParams, options?: RequestOptions): Promise<Response<Account>>;
    /**
     * Removes access to the Account and its associated resources. Closed Accounts can no longer be operated on, but limited information can still be retrieved through the API in order to be able to track their history.
     */
    close(id: string, params?: V2.Core.AccountCloseParams, options?: RequestOptions): Promise<Response<Account>>;
    close(id: string, options?: RequestOptions): Promise<Response<Account>>;
}
export interface Account {
    /**
     * Unique identifier for the Account.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value of the object field.
     */
    object: 'v2.core.account';
    /**
     * The configurations that have been applied to this account.
     */
    applied_configurations: Array<V2.Core.Account.AppliedConfiguration>;
    /**
     * Indicates whether the account has been closed.
     */
    closed?: boolean;
    /**
     * An Account represents a company, individual, or other entity that a user interacts with. Accounts store identity information and one or more configurations that enable product-specific capabilities. You can assign configurations at creation or add them later.
     */
    configuration?: V2.Core.Account.Configuration;
    /**
     * The default contact email address for the Account. Required when configuring the account as a merchant or recipient.
     */
    contact_email?: string;
    /**
     * Time at which the object was created. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
     */
    created: string;
    /**
     * A value indicating the Stripe dashboard this Account has access to. This will depend on which configurations are enabled for this account.
     */
    dashboard?: V2.Core.Account.Dashboard;
    /**
     * Default values for settings shared across Account configurations.
     */
    defaults?: V2.Core.Account.Defaults;
    /**
     * A descriptive name for the Account. This name will be surfaced in the Stripe Dashboard and on any invoices sent to the Account.
     */
    display_name?: string;
    /**
     * Information about the future requirements for the Account that will eventually come into effect, including what information needs to be collected, and by when.
     */
    future_requirements?: V2.Core.Account.FutureRequirements;
    /**
     * Information about the company, individual, and business represented by the Account.
     */
    identity?: V2.Core.Account.Identity;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Metadata;
    /**
     * Information about the active requirements for the Account, including what information needs to be collected, and by when.
     */
    requirements?: V2.Core.Account.Requirements;
}
export declare namespace V2 {
    namespace Core {
        namespace Account {
            type AppliedConfiguration = 'customer' | 'merchant' | 'recipient';
            interface Configuration {
                /**
                 * The Customer Configuration allows the Account to be used in inbound payment flows.
                 */
                customer?: Configuration.Customer;
                /**
                 * Enables the Account to act as a connected account and collect payments facilitated by a Connect platform. You must onboard your platform to Connect before you can add this configuration to your connected accounts. Utilize this configuration when the Account will be the Merchant of Record, like with Direct charges or Destination Charges with on_behalf_of set.
                 */
                merchant?: Configuration.Merchant;
                /**
                 * The Recipient Configuration allows the Account to receive funds. Utilize this configuration if the Account will not be the Merchant of Record, like with Separate Charges & Transfers, or Destination Charges without on_behalf_of set.
                 */
                recipient?: Configuration.Recipient;
            }
            type Dashboard = 'express' | 'full' | 'none';
            interface Defaults {
                /**
                 * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
                 */
                currency?: string;
                /**
                 * The Account's preferred locales (languages), ordered by preference.
                 */
                locales?: Array<Defaults.Locale>;
                /**
                 * Account profile information.
                 */
                profile?: Defaults.Profile;
                /**
                 * Default responsibilities held by either Stripe or the platform.
                 */
                responsibilities: Defaults.Responsibilities;
            }
            interface FutureRequirements {
                /**
                 * A list of requirements for the Account.
                 */
                entries?: Array<FutureRequirements.Entry>;
                /**
                 * The time at which the future requirements become effective.
                 */
                minimum_transition_date?: string;
                /**
                 * An object containing an overview of requirements for the Account.
                 */
                summary?: FutureRequirements.Summary;
            }
            interface Identity {
                /**
                 * Attestations from the identity's key people, e.g. owners, executives, directors, representatives.
                 */
                attestations?: Identity.Attestations;
                /**
                 * Information about the company or business.
                 */
                business_details?: Identity.BusinessDetails;
                /**
                 * The country in which the account holder resides, or in which the business is legally established. This should be an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
                 */
                country?: string;
                /**
                 * The entity type.
                 */
                entity_type?: Identity.EntityType;
                /**
                 * Information about the individual represented by the Account. This property is `null` unless `entity_type` is set to `individual`.
                 */
                individual?: Identity.Individual;
            }
            interface Requirements {
                /**
                 * A list of requirements for the Account.
                 */
                entries?: Array<Requirements.Entry>;
                /**
                 * An object containing an overview of requirements for the Account.
                 */
                summary?: Requirements.Summary;
            }
            namespace Configuration {
                interface Customer {
                    /**
                     * Indicates whether the customer configuration is active. You can deactivate or reactivate the customer configuration by updating this property. Deactivating the configuration by setting this value to false will unrequest all capabilities within the configuration. It will not delete any of the configuration's other properties.
                     */
                    applied: boolean;
                    /**
                     * Settings for automatic indirect tax calculation on the customer's invoices, subscriptions, Checkout Sessions, and Payment Links. Available when automatic tax calculation is available for the customer account's location.
                     */
                    automatic_indirect_tax?: Customer.AutomaticIndirectTax;
                    /**
                     * Default Billing settings for the customer account, used in Invoices and Subscriptions.
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
                interface Merchant {
                    /**
                     * Indicates whether the merchant configuration is active. You can deactivate or reactivate the merchant configuration by updating this property. Deactivating the configuration by setting this value to false doesn't delete the configuration's properties.
                     */
                    applied: boolean;
                    /**
                     * Settings for Bacs Direct Debit payments.
                     */
                    bacs_debit_payments?: Merchant.BacsDebitPayments;
                    /**
                     * Settings used to apply the merchant's branding to email receipts, invoices, Checkout, and other products.
                     */
                    branding?: Merchant.Branding;
                    /**
                     * Capabilities that have been requested on the Merchant Configuration.
                     */
                    capabilities?: Merchant.Capabilities;
                    /**
                     * Card payments settings.
                     */
                    card_payments?: Merchant.CardPayments;
                    /**
                     * Settings specific to Konbini payments on the account.
                     */
                    konbini_payments?: Merchant.KonbiniPayments;
                    /**
                     * The Merchant Category Code (MCC) for the merchant. MCCs classify businesses based on the goods or services they provide.
                     */
                    mcc?: string;
                    /**
                     * Settings for the default text that appears on statements for language variations.
                     */
                    script_statement_descriptor?: Merchant.ScriptStatementDescriptor;
                    /**
                     * Settings for SEPA Direct Debit payments.
                     */
                    sepa_debit_payments?: Merchant.SepaDebitPayments;
                    /**
                     * Statement descriptor.
                     */
                    statement_descriptor?: Merchant.StatementDescriptor;
                    /**
                     * Publicly available contact information for sending support issues to.
                     */
                    support?: Merchant.Support;
                }
                interface Recipient {
                    /**
                     * Indicates whether the recipient configuration is active. You can deactivate or reactivate the recipient configuration by updating this property. Deactivating the configuration by setting this value to false  unrequest all capabilities within the configuration. It will not delete any of the configuration's other properties.
                     */
                    applied: boolean;
                    /**
                     * Capabilities that have been requested on the Recipient Configuration.
                     */
                    capabilities?: Recipient.Capabilities;
                }
                namespace Customer {
                    interface AutomaticIndirectTax {
                        /**
                         * The customer account's tax exemption status: `none`, `exempt`, or `reverse`. When `reverse`, invoice and receipt PDFs include "Reverse charge".
                         */
                        exempt?: AutomaticIndirectTax.Exempt;
                        /**
                         * A recent IP address of the customer used for tax reporting and tax location inference.
                         */
                        ip_address?: string;
                        /**
                         * The customer account's identified tax location, derived from `location_source`. Only rendered if the `automatic_indirect_tax` feature is requested and `active`.
                         */
                        location?: AutomaticIndirectTax.Location;
                        /**
                         * Data source used to identify the customer account's tax location. Defaults to `identity_address`. Used for automatic indirect tax calculation.
                         */
                        location_source?: AutomaticIndirectTax.LocationSource;
                    }
                    interface Billing {
                        /**
                         * ID of a PaymentMethod attached to the customer account to use as the default for invoices and subscriptions.
                         */
                        default_payment_method?: string;
                        /**
                         * Default invoice settings for the customer account.
                         */
                        invoice?: Billing.Invoice;
                    }
                    interface Capabilities {
                        /**
                         * Generates requirements for enabling automatic indirect tax calculation on this customer's invoices or subscriptions. Recommended to request this capability if planning to enable automatic tax calculation on this customer's invoices or subscriptions.
                         */
                        automatic_indirect_tax?: Capabilities.AutomaticIndirectTax;
                    }
                    interface Shipping {
                        /**
                         * Customer shipping address.
                         */
                        address?: Shipping.Address;
                        /**
                         * Customer name.
                         */
                        name?: string;
                        /**
                         * Customer phone (including extension).
                         */
                        phone?: string;
                    }
                    namespace AutomaticIndirectTax {
                        type Exempt = 'exempt' | 'none' | 'reverse';
                        interface Location {
                            /**
                             * The identified tax country of the customer.
                             */
                            country?: string;
                            /**
                             * The identified tax state, county, province, or region of the customer.
                             */
                            state?: string;
                        }
                        type LocationSource = 'identity_address' | 'ip_address' | 'payment_method' | 'shipping_address';
                    }
                    namespace Billing {
                        interface Invoice {
                            /**
                             * The list of up to 4 default custom fields to be displayed on invoices for this customer. When updating, pass an empty string to remove previously-defined fields.
                             */
                            custom_fields: Array<Invoice.CustomField>;
                            /**
                             * Default invoice footer.
                             */
                            footer?: string;
                            /**
                             * Sequence number to use on the customer account's next invoice. Defaults to 1.
                             */
                            next_sequence?: number;
                            /**
                             * Prefix used to generate unique invoice numbers. Must be 3-12 uppercase letters or numbers.
                             */
                            prefix?: string;
                            /**
                             * Default invoice PDF rendering options.
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
                                 * Indicates whether displayed line item prices and amounts on invoice PDFs include inclusive tax amounts. Must be either `include_inclusive_tax` or `exclude_tax`.
                                 */
                                amount_tax_display?: Rendering.AmountTaxDisplay;
                                /**
                                 * ID of the invoice rendering template to use for future invoices.
                                 */
                                template?: string;
                            }
                            namespace Rendering {
                                type AmountTaxDisplay = 'exclude_tax' | 'include_inclusive_tax';
                            }
                        }
                    }
                    namespace Capabilities {
                        interface AutomaticIndirectTax {
                            /**
                             * The status of the Capability.
                             */
                            status: AutomaticIndirectTax.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<AutomaticIndirectTax.StatusDetail>;
                        }
                        namespace AutomaticIndirectTax {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                    }
                    namespace Shipping {
                        interface Address {
                            /**
                             * City, district, suburb, town, or village.
                             */
                            city?: string;
                            /**
                             * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                             */
                            country?: string;
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
                        }
                    }
                }
                namespace Merchant {
                    interface BacsDebitPayments {
                        /**
                         * Display name for Bacs Direct Debit payments.
                         */
                        display_name?: string;
                        /**
                         * Service User Number (SUN) for Bacs Direct Debit payments.
                         */
                        service_user_number?: string;
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
                         * Capabilities that enable the merchant to manage their Stripe Balance (/v1/balance).
                         */
                        stripe_balance?: Capabilities.StripeBalance;
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
                    interface CardPayments {
                        /**
                         * Automatically declines certain charge types regardless of whether the card issuer accepted or declined the charge.
                         */
                        decline_on?: CardPayments.DeclineOn;
                    }
                    interface KonbiniPayments {
                        /**
                         * Support for Konbini payments.
                         */
                        support?: KonbiniPayments.Support;
                    }
                    interface ScriptStatementDescriptor {
                        /**
                         * The Kana variation of statement_descriptor used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
                         */
                        kana?: ScriptStatementDescriptor.Kana;
                        /**
                         * The Kanji variation of statement_descriptor used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
                         */
                        kanji?: ScriptStatementDescriptor.Kanji;
                    }
                    interface SepaDebitPayments {
                        /**
                         * Creditor ID for SEPA Direct Debit payments.
                         */
                        creditor_id?: string;
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
                    namespace Capabilities {
                        interface AchDebitPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: AchDebitPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<AchDebitPayments.StatusDetail>;
                        }
                        interface AcssDebitPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: AcssDebitPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<AcssDebitPayments.StatusDetail>;
                        }
                        interface AffirmPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: AffirmPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<AffirmPayments.StatusDetail>;
                        }
                        interface AfterpayClearpayPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: AfterpayClearpayPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<AfterpayClearpayPayments.StatusDetail>;
                        }
                        interface AlmaPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: AlmaPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<AlmaPayments.StatusDetail>;
                        }
                        interface AmazonPayPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: AmazonPayPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<AmazonPayPayments.StatusDetail>;
                        }
                        interface AuBecsDebitPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: AuBecsDebitPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<AuBecsDebitPayments.StatusDetail>;
                        }
                        interface BacsDebitPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: BacsDebitPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<BacsDebitPayments.StatusDetail>;
                        }
                        interface BancontactPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: BancontactPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<BancontactPayments.StatusDetail>;
                        }
                        interface BlikPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: BlikPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<BlikPayments.StatusDetail>;
                        }
                        interface BoletoPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: BoletoPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<BoletoPayments.StatusDetail>;
                        }
                        interface CardPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: CardPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<CardPayments.StatusDetail>;
                        }
                        interface CartesBancairesPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: CartesBancairesPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<CartesBancairesPayments.StatusDetail>;
                        }
                        interface CashappPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: CashappPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<CashappPayments.StatusDetail>;
                        }
                        interface EpsPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: EpsPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<EpsPayments.StatusDetail>;
                        }
                        interface FpxPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: FpxPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<FpxPayments.StatusDetail>;
                        }
                        interface GbBankTransferPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: GbBankTransferPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<GbBankTransferPayments.StatusDetail>;
                        }
                        interface GrabpayPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: GrabpayPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<GrabpayPayments.StatusDetail>;
                        }
                        interface IdealPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: IdealPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<IdealPayments.StatusDetail>;
                        }
                        interface JcbPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: JcbPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<JcbPayments.StatusDetail>;
                        }
                        interface JpBankTransferPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: JpBankTransferPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<JpBankTransferPayments.StatusDetail>;
                        }
                        interface KakaoPayPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: KakaoPayPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<KakaoPayPayments.StatusDetail>;
                        }
                        interface KlarnaPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: KlarnaPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<KlarnaPayments.StatusDetail>;
                        }
                        interface KonbiniPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: KonbiniPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<KonbiniPayments.StatusDetail>;
                        }
                        interface KrCardPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: KrCardPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<KrCardPayments.StatusDetail>;
                        }
                        interface LinkPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: LinkPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<LinkPayments.StatusDetail>;
                        }
                        interface MobilepayPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: MobilepayPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<MobilepayPayments.StatusDetail>;
                        }
                        interface MultibancoPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: MultibancoPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<MultibancoPayments.StatusDetail>;
                        }
                        interface MxBankTransferPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: MxBankTransferPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<MxBankTransferPayments.StatusDetail>;
                        }
                        interface NaverPayPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: NaverPayPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<NaverPayPayments.StatusDetail>;
                        }
                        interface OxxoPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: OxxoPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<OxxoPayments.StatusDetail>;
                        }
                        interface P24Payments {
                            /**
                             * The status of the Capability.
                             */
                            status: P24Payments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<P24Payments.StatusDetail>;
                        }
                        interface PayByBankPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: PayByBankPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<PayByBankPayments.StatusDetail>;
                        }
                        interface PaycoPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: PaycoPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<PaycoPayments.StatusDetail>;
                        }
                        interface PaynowPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: PaynowPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<PaynowPayments.StatusDetail>;
                        }
                        interface PromptpayPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: PromptpayPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<PromptpayPayments.StatusDetail>;
                        }
                        interface RevolutPayPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: RevolutPayPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<RevolutPayPayments.StatusDetail>;
                        }
                        interface SamsungPayPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: SamsungPayPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<SamsungPayPayments.StatusDetail>;
                        }
                        interface SepaBankTransferPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: SepaBankTransferPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<SepaBankTransferPayments.StatusDetail>;
                        }
                        interface SepaDebitPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: SepaDebitPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<SepaDebitPayments.StatusDetail>;
                        }
                        interface StripeBalance {
                            /**
                             * Enables this Account to complete payouts from their Stripe Balance (/v1/balance).
                             */
                            payouts?: StripeBalance.Payouts;
                        }
                        interface SwishPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: SwishPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<SwishPayments.StatusDetail>;
                        }
                        interface TwintPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: TwintPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<TwintPayments.StatusDetail>;
                        }
                        interface UsBankTransferPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: UsBankTransferPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<UsBankTransferPayments.StatusDetail>;
                        }
                        interface ZipPayments {
                            /**
                             * The status of the Capability.
                             */
                            status: ZipPayments.Status;
                            /**
                             * Additional details about the capability's status. This value is empty when `status` is `active`.
                             */
                            status_details: Array<ZipPayments.StatusDetail>;
                        }
                        namespace AchDebitPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace AcssDebitPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace AffirmPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace AfterpayClearpayPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace AlmaPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace AmazonPayPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace AuBecsDebitPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace BacsDebitPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace BancontactPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace BlikPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace BoletoPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace CardPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace CartesBancairesPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace CashappPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace EpsPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace FpxPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace GbBankTransferPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace GrabpayPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace IdealPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace JcbPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace JpBankTransferPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace KakaoPayPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace KlarnaPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace KonbiniPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace KrCardPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace LinkPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace MobilepayPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace MultibancoPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace MxBankTransferPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace NaverPayPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace OxxoPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace P24Payments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace PayByBankPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace PaycoPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace PaynowPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace PromptpayPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace RevolutPayPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace SamsungPayPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace SepaBankTransferPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace SepaDebitPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace StripeBalance {
                            interface Payouts {
                                /**
                                 * The status of the Capability.
                                 */
                                status: Payouts.Status;
                                /**
                                 * Additional details about the capability's status. This value is empty when `status` is `active`.
                                 */
                                status_details: Array<Payouts.StatusDetail>;
                            }
                            namespace Payouts {
                                type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                    type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                    type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                                }
                            }
                        }
                        namespace SwishPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace TwintPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace UsBankTransferPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
                        namespace ZipPayments {
                            type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                            }
                        }
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
                    namespace KonbiniPayments {
                        interface Support {
                            /**
                             * Support email address for Konbini payments.
                             */
                            email?: string;
                            /**
                             * Support hours for Konbini payments.
                             */
                            hours?: Support.Hours;
                            /**
                             * Support phone number for Konbini payments.
                             */
                            phone?: string;
                        }
                        namespace Support {
                            interface Hours {
                                /**
                                 * Support hours end time (JST time of day) for in `HH:MM` format.
                                 */
                                end_time?: string;
                                /**
                                 * Support hours start time (JST time of day) for in `HH:MM` format.
                                 */
                                start_time?: string;
                            }
                        }
                    }
                    namespace ScriptStatementDescriptor {
                        interface Kana {
                            /**
                             * The default text that appears on statements for non-card charges outside of Japan. For card charges, if you don't set a statement_descriptor_prefix, this text is also used as the statement descriptor prefix. In that case, if concatenating the statement descriptor suffix causes the combined statement descriptor to exceed 22 characters, we truncate the statement_descriptor text to limit the full descriptor to 22 characters. For more information about statement descriptors and their requirements, see the Merchant Configuration settings documentation.
                             */
                            descriptor?: string;
                            /**
                             * Default text that appears on statements for card charges outside of Japan, prefixing any dynamic statement_descriptor_suffix specified on the charge. To maximize space for the dynamic part of the descriptor, keep this text short. If you don't specify this value, statement_descriptor is used as the prefix. For more information about statement descriptors and their requirements, see the Merchant Configuration settings documentation.
                             */
                            prefix?: string;
                        }
                        interface Kanji {
                            /**
                             * The default text that appears on statements for non-card charges outside of Japan. For card charges, if you don't set a statement_descriptor_prefix, this text is also used as the statement descriptor prefix. In that case, if concatenating the statement descriptor suffix causes the combined statement descriptor to exceed 22 characters, we truncate the statement_descriptor text to limit the full descriptor to 22 characters. For more information about statement descriptors and their requirements, see the Merchant Configuration settings documentation.
                             */
                            descriptor?: string;
                            /**
                             * Default text that appears on statements for card charges outside of Japan, prefixing any dynamic statement_descriptor_suffix specified on the charge. To maximize space for the dynamic part of the descriptor, keep this text short. If you don't specify this value, statement_descriptor is used as the prefix. For more information about statement descriptors and their requirements, see the Merchant Configuration settings documentation.
                             */
                            prefix?: string;
                        }
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
                            country?: string;
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
                             * Town or district.
                             */
                            town?: string;
                        }
                    }
                }
                namespace Recipient {
                    interface Capabilities {
                        /**
                         * Capabilities that enable the recipient to manage their Stripe Balance (/v1/balance).
                         */
                        stripe_balance?: Capabilities.StripeBalance;
                    }
                    namespace Capabilities {
                        interface StripeBalance {
                            /**
                             * Enables this Account to complete payouts from their Stripe Balance (/v1/balance).
                             */
                            payouts?: StripeBalance.Payouts;
                            /**
                             * Enables this Account to receive /v1/transfers into their Stripe Balance (/v1/balance).
                             */
                            stripe_transfers?: StripeBalance.StripeTransfers;
                        }
                        namespace StripeBalance {
                            interface Payouts {
                                /**
                                 * The status of the Capability.
                                 */
                                status: Payouts.Status;
                                /**
                                 * Additional details about the capability's status. This value is empty when `status` is `active`.
                                 */
                                status_details: Array<Payouts.StatusDetail>;
                            }
                            interface StripeTransfers {
                                /**
                                 * The status of the Capability.
                                 */
                                status: StripeTransfers.Status;
                                /**
                                 * Additional details about the capability's status. This value is empty when `status` is `active`.
                                 */
                                status_details: Array<StripeTransfers.StatusDetail>;
                            }
                            namespace Payouts {
                                type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                    type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                    type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                                }
                            }
                            namespace StripeTransfers {
                                type Status = 'active' | 'pending' | 'restricted' | 'unsupported';
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
                                    type Code = 'determining_status' | 'requirements_past_due' | 'requirements_pending_verification' | 'restricted_other' | 'unsupported_business' | 'unsupported_country' | 'unsupported_entity_type';
                                    type Resolution = 'contact_stripe' | 'no_resolution' | 'provide_info';
                                }
                            }
                        }
                    }
                }
            }
            namespace Defaults {
                type Locale = 'ar-SA' | 'bg' | 'bg-BG' | 'cs' | 'cs-CZ' | 'da' | 'da-DK' | 'de' | 'de-DE' | 'el' | 'el-GR' | 'en' | 'en-AU' | 'en-CA' | 'en-GB' | 'en-IE' | 'en-IN' | 'en-NZ' | 'en-SG' | 'en-US' | 'es' | 'es-419' | 'es-ES' | 'et' | 'et-EE' | 'fi' | 'fil' | 'fil-PH' | 'fi-FI' | 'fr' | 'fr-CA' | 'fr-FR' | 'he-IL' | 'hr' | 'hr-HR' | 'hu' | 'hu-HU' | 'id' | 'id-ID' | 'it' | 'it-IT' | 'ja' | 'ja-JP' | 'ko' | 'ko-KR' | 'lt' | 'lt-LT' | 'lv' | 'lv-LV' | 'ms' | 'ms-MY' | 'mt' | 'mt-MT' | 'nb' | 'nb-NO' | 'nl' | 'nl-NL' | 'pl' | 'pl-PL' | 'pt' | 'pt-BR' | 'pt-PT' | 'ro' | 'ro-RO' | 'ru' | 'ru-RU' | 'sk' | 'sk-SK' | 'sl' | 'sl-SI' | 'sv' | 'sv-SE' | 'th' | 'th-TH' | 'tr' | 'tr-TR' | 'vi' | 'vi-VN' | 'zh' | 'zh-Hans' | 'zh-Hant-HK' | 'zh-Hant-TW' | 'zh-HK' | 'zh-TW';
                interface Profile {
                    /**
                     * The business's publicly-available website.
                     */
                    business_url?: string;
                    /**
                     * The customer-facing business name.
                     */
                    doing_business_as?: string;
                    /**
                     * Internal-only description of the product sold or service provided by the business. It's used by Stripe for risk and underwriting purposes.
                     */
                    product_description?: string;
                }
                interface Responsibilities {
                    /**
                     * Indicates whether the platform or connected account is responsible for paying Stripe fees for pricing-control-eligible products.
                     */
                    fees_collector?: Responsibilities.FeesCollector;
                    /**
                     * A value indicating responsibility for collecting requirements on this account.
                     */
                    losses_collector?: Responsibilities.LossesCollector;
                    /**
                     * A value indicating responsibility for collecting requirements on this account.
                     */
                    requirements_collector: Responsibilities.RequirementsCollector;
                }
                namespace Responsibilities {
                    type FeesCollector = 'application' | 'application_custom' | 'application_express' | 'stripe';
                    type LossesCollector = 'application' | 'stripe';
                    type RequirementsCollector = 'application' | 'stripe';
                }
            }
            namespace FutureRequirements {
                interface Entry {
                    /**
                     * Indicates whether the platform or Stripe is currently responsible for taking action on the requirement. Value can be `user` or `stripe`.
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
                    reference?: Entry.Reference;
                    /**
                     * A list of reasons why Stripe is collecting the requirement.
                     */
                    requested_reasons: Array<Entry.RequestedReason>;
                }
                interface Summary {
                    /**
                     * The soonest date and time a requirement on the Account will become `past due`. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2022-09-18T13:22:18.123Z`.
                     */
                    minimum_deadline?: Summary.MinimumDeadline;
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
                    interface Impact {
                        /**
                         * The Capabilities that will be restricted if the requirement is not collected and satisfactory to Stripe.
                         */
                        restricts_capabilities?: Array<Impact.RestrictsCapability>;
                    }
                    interface MinimumDeadline {
                        /**
                         * The current status of the requirement's impact.
                         */
                        status: MinimumDeadline.Status;
                    }
                    interface Reference {
                        /**
                         * If `inquiry` is the type, the inquiry token.
                         */
                        inquiry?: string;
                        /**
                         * If `resource` is the type, the resource token.
                         */
                        resource?: string;
                        /**
                         * The type of the reference. If the type is "inquiry", the inquiry token can be found in the "inquiry" field.
                         * Otherwise the type is an API resource, the token for which can be found in the "resource" field.
                         */
                        type: Reference.Type;
                    }
                    interface RequestedReason {
                        /**
                         * Machine-readable description of Stripe's reason for collecting the requirement.
                         */
                        code: RequestedReason.Code;
                    }
                    namespace Error {
                        type Code = 'invalid_address_city_state_postal_code' | 'invalid_address_highway_contract_box' | 'invalid_address_private_mailbox' | 'invalid_business_profile_name' | 'invalid_business_profile_name_denylisted' | 'invalid_company_name_denylisted' | 'invalid_dob_age_over_maximum' | 'invalid_dob_age_under_18' | 'invalid_dob_age_under_minimum' | 'invalid_product_description_length' | 'invalid_product_description_url_match' | 'invalid_representative_country' | 'invalid_statement_descriptor_business_mismatch' | 'invalid_statement_descriptor_denylisted' | 'invalid_statement_descriptor_length' | 'invalid_statement_descriptor_prefix_denylisted' | 'invalid_statement_descriptor_prefix_mismatch' | 'invalid_street_address' | 'invalid_tax_id' | 'invalid_tax_id_format' | 'invalid_tos_acceptance' | 'invalid_url_denylisted' | 'invalid_url_format' | 'invalid_url_website_business_information_mismatch' | 'invalid_url_website_empty' | 'invalid_url_website_inaccessible' | 'invalid_url_website_inaccessible_geoblocked' | 'invalid_url_website_inaccessible_password_protected' | 'invalid_url_website_incomplete' | 'invalid_url_website_incomplete_cancellation_policy' | 'invalid_url_website_incomplete_customer_service_details' | 'invalid_url_website_incomplete_legal_restrictions' | 'invalid_url_website_incomplete_refund_policy' | 'invalid_url_website_incomplete_return_policy' | 'invalid_url_website_incomplete_terms_and_conditions' | 'invalid_url_website_incomplete_under_construction' | 'invalid_url_website_other' | 'invalid_url_web_presence_detected' | 'invalid_value_other' | 'unresolvable_ip_address' | 'unresolvable_postal_code' | 'verification_directors_mismatch' | 'verification_document_address_mismatch' | 'verification_document_address_missing' | 'verification_document_corrupt' | 'verification_document_country_not_supported' | 'verification_document_directors_mismatch' | 'verification_document_dob_mismatch' | 'verification_document_duplicate_type' | 'verification_document_expired' | 'verification_document_failed_copy' | 'verification_document_failed_greyscale' | 'verification_document_failed_other' | 'verification_document_failed_test_mode' | 'verification_document_fraudulent' | 'verification_document_id_number_mismatch' | 'verification_document_id_number_missing' | 'verification_document_incomplete' | 'verification_document_invalid' | 'verification_document_issue_or_expiry_date_missing' | 'verification_document_manipulated' | 'verification_document_missing_back' | 'verification_document_missing_front' | 'verification_document_name_mismatch' | 'verification_document_name_missing' | 'verification_document_nationality_mismatch' | 'verification_document_not_readable' | 'verification_document_not_signed' | 'verification_document_not_uploaded' | 'verification_document_photo_mismatch' | 'verification_document_too_large' | 'verification_document_type_not_supported' | 'verification_extraneous_directors' | 'verification_failed_address_match' | 'verification_failed_business_iec_number' | 'verification_failed_document_match' | 'verification_failed_id_number_match' | 'verification_failed_keyed_identity' | 'verification_failed_keyed_match' | 'verification_failed_name_match' | 'verification_failed_other' | 'verification_failed_representative_authority' | 'verification_failed_residential_address' | 'verification_failed_tax_id_match' | 'verification_failed_tax_id_not_issued' | 'verification_missing_directors' | 'verification_missing_executives' | 'verification_missing_owners' | 'verification_requires_additional_memorandum_of_associations' | 'verification_requires_additional_proof_of_registration' | 'verification_selfie_document_missing_photo' | 'verification_selfie_face_mismatch' | 'verification_selfie_manipulated' | 'verification_selfie_unverified_other' | 'verification_supportability' | 'verification_token_stale';
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
                            type Capability = 'ach_debit_payments' | 'acss_debit_payments' | 'affirm_payments' | 'afterpay_clearpay_payments' | 'alma_payments' | 'amazon_pay_payments' | 'automatic_indirect_tax' | 'au_becs_debit_payments' | 'bacs_debit_payments' | 'bancontact_payments' | 'bank_accounts.local' | 'bank_accounts.wire' | 'blik_payments' | 'boleto_payments' | 'cards' | 'card_payments' | 'cartes_bancaires_payments' | 'cashapp_payments' | 'eps_payments' | 'fpx_payments' | 'gb_bank_transfer_payments' | 'grabpay_payments' | 'ideal_payments' | 'jcb_payments' | 'jp_bank_transfer_payments' | 'kakao_pay_payments' | 'klarna_payments' | 'konbini_payments' | 'kr_card_payments' | 'link_payments' | 'mobilepay_payments' | 'multibanco_payments' | 'mx_bank_transfer_payments' | 'naver_pay_payments' | 'oxxo_payments' | 'p24_payments' | 'payco_payments' | 'paynow_payments' | 'pay_by_bank_payments' | 'promptpay_payments' | 'revolut_pay_payments' | 'samsung_pay_payments' | 'sepa_bank_transfer_payments' | 'sepa_debit_payments' | 'stripe_balance.payouts' | 'stripe_balance.stripe_transfers' | 'swish_payments' | 'twint_payments' | 'us_bank_transfer_payments' | 'zip_payments';
                            type Configuration = 'customer' | 'merchant' | 'recipient';
                            interface Deadline {
                                /**
                                 * The current status of the requirement's impact.
                                 */
                                status: Deadline.Status;
                            }
                            namespace Deadline {
                                type Status = 'currently_due' | 'eventually_due' | 'past_due';
                            }
                        }
                    }
                    namespace MinimumDeadline {
                        type Status = 'currently_due' | 'eventually_due' | 'past_due';
                    }
                    namespace Reference {
                        type Type = 'inquiry' | 'payment_method' | 'person';
                    }
                    namespace RequestedReason {
                        type Code = 'routine_onboarding' | 'routine_verification';
                    }
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
                        time?: string;
                    }
                    namespace MinimumDeadline {
                        type Status = 'currently_due' | 'eventually_due' | 'past_due';
                    }
                }
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
                     * This hash is used to attest that the representative is authorized to act as the representative of their legal entity.
                     */
                    representative_declaration?: Attestations.RepresentativeDeclaration;
                    /**
                     * Attestations of accepted terms of service agreements.
                     */
                    terms_of_service?: Attestations.TermsOfService;
                }
                interface BusinessDetails {
                    /**
                     * The company's primary address.
                     */
                    address?: BusinessDetails.Address;
                    /**
                     * The business gross annual revenue for its preceding fiscal year.
                     */
                    annual_revenue?: BusinessDetails.AnnualRevenue;
                    /**
                     * Documents that may be submitted to satisfy various informational requests.
                     */
                    documents?: BusinessDetails.Documents;
                    /**
                     * Estimated maximum number of workers currently engaged by the business (including employees, contractors, and vendors).
                     */
                    estimated_worker_count?: number;
                    /**
                     * The provided ID numbers of a business entity.
                     */
                    id_numbers?: Array<BusinessDetails.IdNumber>;
                    /**
                     * An estimate of the monthly revenue of the business. Only accepted for accounts in Brazil and India.
                     */
                    monthly_estimated_revenue?: BusinessDetails.MonthlyEstimatedRevenue;
                    /**
                     * The company's phone number (used for verification).
                     */
                    phone?: string;
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
                }
                type EntityType = 'company' | 'government_entity' | 'individual' | 'non_profit';
                interface Individual {
                    /**
                     * The account ID which the individual belongs to.
                     */
                    account: string;
                    /**
                     * Additional addresses associated with the individual.
                     */
                    additional_addresses?: Array<Individual.AdditionalAddress>;
                    /**
                     * Additional names (e.g. aliases) associated with the individual.
                     */
                    additional_names?: Array<Individual.AdditionalName>;
                    /**
                     * Terms of service acceptances.
                     */
                    additional_terms_of_service?: Individual.AdditionalTermsOfService;
                    /**
                     * The individual's residential address.
                     */
                    address?: Individual.Address;
                    /**
                     * Time at which the object was created. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
                     */
                    created: string;
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
                     * Unique identifier for the object.
                     */
                    id: string;
                    /**
                     * The identification numbers (e.g., SSN) associated with the individual.
                     */
                    id_numbers?: Array<Individual.IdNumber>;
                    /**
                     * The individual's gender (International regulations require either "male” or "female").
                     */
                    legal_gender?: Individual.LegalGender;
                    /**
                     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                     */
                    metadata?: Metadata;
                    /**
                     * The countries where the individual is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                     */
                    nationalities?: Array<string>;
                    /**
                     * String representing the object's type. Objects of the same type share the same value.
                     */
                    object: string;
                    /**
                     * The individual's phone number.
                     */
                    phone?: string;
                    /**
                     * Indicates if the individual or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
                     */
                    political_exposure?: Individual.PoliticalExposure;
                    /**
                     * The relationship that this individual has with the Account's identity.
                     */
                    relationship?: Individual.Relationship;
                    /**
                     * The script addresses (e.g., non-Latin characters) associated with the individual.
                     */
                    script_addresses?: Individual.ScriptAddresses;
                    /**
                     * The script names (e.g. non-Latin characters) associated with the individual.
                     */
                    script_names?: Individual.ScriptNames;
                    /**
                     * The individual's last name.
                     */
                    surname?: string;
                    /**
                     * Time at which the object was last updated.
                     */
                    updated: string;
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
                    interface RepresentativeDeclaration {
                        /**
                         * The time marking when the representative attestation was made. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
                         */
                        date?: string;
                        /**
                         * The IP address from which the representative attestation was made.
                         */
                        ip?: string;
                        /**
                         * The user agent of the browser from which the representative attestation was made.
                         */
                        user_agent?: string;
                    }
                    interface TermsOfService {
                        /**
                         * Details on the Account's acceptance of the [Stripe Services Agreement](https://docs.stripe.com/connect/updating-accounts#tos-acceptance).
                         */
                        account?: TermsOfService.Account;
                    }
                    namespace PersonsProvided {
                        type OwnershipExemptionReason = 'qualified_entity_exceeds_ownership_threshold' | 'qualifies_as_financial_institution';
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
                namespace BusinessDetails {
                    interface Address {
                        /**
                         * City, district, suburb, town, or village.
                         */
                        city?: string;
                        /**
                         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                         */
                        country?: string;
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
                         * Town or district.
                         */
                        town?: string;
                    }
                    interface AnnualRevenue {
                        /**
                         * Annual revenue amount in minor currency units (for example, '123' for 1.23 USD).
                         */
                        amount?: AnnualRevenue.Amount;
                        /**
                         * The close-out date of the preceding fiscal year in ISO 8601 format. E.g. 2023-12-31 for the 31st of December, 2023.
                         */
                        fiscal_year_end?: string;
                    }
                    interface Documents {
                        /**
                         * One or more documents that support the Bank account ownership verification requirement. Must be a document associated with the account's primary active bank account that displays the last 4 digits of the account number, either a statement or a check.
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
                    interface IdNumber {
                        /**
                         * The registrar of the ID number (Only valid for DE ID number types).
                         */
                        registrar?: string;
                        /**
                         * Open Enum. The ID number type of a business entity.
                         */
                        type: IdNumber.Type;
                    }
                    interface MonthlyEstimatedRevenue {
                        /**
                         * Estimated monthly revenue amount in minor currency units (for example, '123' for 1.23 USD).
                         */
                        amount?: MonthlyEstimatedRevenue.Amount;
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
                    type Structure = 'cooperative' | 'free_zone_establishment' | 'free_zone_llc' | 'governmental_unit' | 'government_instrumentality' | 'incorporated_association' | 'incorporated_non_profit' | 'incorporated_partnership' | 'limited_liability_partnership' | 'llc' | 'multi_member_llc' | 'private_company' | 'private_corporation' | 'private_partnership' | 'public_company' | 'public_corporation' | 'public_listed_corporation' | 'public_partnership' | 'registered_charity' | 'single_member_llc' | 'sole_establishment' | 'sole_proprietorship' | 'tax_exempt_government_instrumentality' | 'trust' | 'unincorporated_association' | 'unincorporated_non_profit' | 'unincorporated_partnership';
                    namespace AnnualRevenue {
                        interface Amount {
                            /**
                             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
                             */
                            value?: number;
                            /**
                             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
                             */
                            currency?: string;
                        }
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
                    }
                    namespace IdNumber {
                        type Type = 'ae_crn' | 'ae_vat' | 'ao_nif' | 'ar_cuit' | 'at_fn' | 'at_stn' | 'at_vat' | 'au_abn' | 'au_acn' | 'au_in' | 'az_tin' | 'bd_etin' | 'be_cbe' | 'be_vat' | 'bg_uic' | 'bg_vat' | 'br_cnpj' | 'ca_cn' | 'ca_crarr' | 'ca_gst_hst' | 'ca_neq' | 'ca_rid' | 'ch_chid' | 'ch_uid' | 'cr_cpj' | 'cr_nite' | 'cy_he' | 'cy_tic' | 'cy_vat' | 'cz_ico' | 'cz_vat' | 'de_hrn' | 'de_stn' | 'de_vat' | 'dk_cvr' | 'dk_vat' | 'do_rcn' | 'ee_rk' | 'ee_vat' | 'es_cif' | 'es_vat' | 'fi_vat' | 'fi_yt' | 'fr_rna' | 'fr_siren' | 'fr_vat' | 'gb_crn' | 'gi_crn' | 'gr_afm' | 'gr_gemi' | 'gr_vat' | 'gt_nit' | 'hk_br' | 'hk_cr' | 'hr_mbs' | 'hr_oib' | 'hr_vat' | 'hu_cjs' | 'hu_tin' | 'hu_vat' | 'ie_crn' | 'ie_trn' | 'ie_vat' | 'it_rea' | 'it_vat' | 'jp_cn' | 'kz_bin' | 'li_uid' | 'lt_ccrn' | 'lt_vat' | 'lu_nif' | 'lu_rcs' | 'lu_vat' | 'lv_urn' | 'lv_vat' | 'mt_crn' | 'mt_tin' | 'mt_vat' | 'mx_rfc' | 'my_brn' | 'my_coid' | 'my_itn' | 'my_sst' | 'mz_nuit' | 'nl_kvk' | 'nl_rsin' | 'nl_vat' | 'no_orgnr' | 'nz_bn' | 'nz_ird' | 'pe_ruc' | 'pk_ntn' | 'pl_nip' | 'pl_regon' | 'pl_vat' | 'pt_vat' | 'ro_cui' | 'ro_orc' | 'ro_vat' | 'sa_crn' | 'sa_tin' | 'se_orgnr' | 'se_vat' | 'sg_uen' | 'si_msp' | 'si_tin' | 'si_vat' | 'sk_dic' | 'sk_ico' | 'sk_vat' | 'th_crn' | 'th_prn' | 'th_tin' | 'us_ein';
                    }
                    namespace MonthlyEstimatedRevenue {
                        interface Amount {
                            /**
                             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
                             */
                            value?: number;
                            /**
                             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
                             */
                            currency?: string;
                        }
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
                            country?: string;
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
                             * Town or district.
                             */
                            town?: string;
                        }
                        interface Kanji {
                            /**
                             * City, district, suburb, town, or village.
                             */
                            city?: string;
                            /**
                             * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                             */
                            country?: string;
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
                             * Town or district.
                             */
                            town?: string;
                        }
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
                        country?: string;
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
                         * Town or district.
                         */
                        town?: string;
                    }
                    interface AdditionalName {
                        /**
                         * The individual's full name.
                         */
                        full_name?: string;
                        /**
                         * The individual's first or given name.
                         */
                        given_name?: string;
                        /**
                         * The purpose or type of the additional name.
                         */
                        purpose: AdditionalName.Purpose;
                        /**
                         * The individual's last or family name.
                         */
                        surname?: string;
                    }
                    interface AdditionalTermsOfService {
                        /**
                         * Stripe terms of service agreement.
                         */
                        account?: AdditionalTermsOfService.Account;
                    }
                    interface Address {
                        /**
                         * City, district, suburb, town, or village.
                         */
                        city?: string;
                        /**
                         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                         */
                        country?: string;
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
                         * Town or district.
                         */
                        town?: string;
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
                    interface IdNumber {
                        /**
                         * The ID number type of an individual.
                         */
                        type: IdNumber.Type;
                    }
                    type LegalGender = 'female' | 'male';
                    type PoliticalExposure = 'existing' | 'none';
                    interface Relationship {
                        /**
                         * Whether the individual is an authorizer of the Account's identity.
                         */
                        authorizer?: boolean;
                        /**
                         * Whether the individual is a director of the Account's identity. Directors are typically members of the governing board of the company or are responsible for making sure that the company meets its regulatory obligations.
                         */
                        director?: boolean;
                        /**
                         * Whether the individual has significant responsibility to control, manage, or direct the organization.
                         */
                        executive?: boolean;
                        /**
                         * Whether the individual is the legal guardian of the Account's representative.
                         */
                        legal_guardian?: boolean;
                        /**
                         * Whether the individual is an owner of the Account's identity.
                         */
                        owner?: boolean;
                        /**
                         * The percentage of the Account's identity that the individual owns.
                         */
                        percent_ownership?: string;
                        /**
                         * Whether the individual is authorized as the primary representative of the Account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
                         */
                        representative?: boolean;
                        /**
                         * The individual's title (e.g., CEO, Support Engineer).
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
                    namespace AdditionalName {
                        type Purpose = 'alias' | 'maiden';
                    }
                    namespace AdditionalTermsOfService {
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
                    }
                    namespace IdNumber {
                        type Type = 'ae_eid' | 'ao_nif' | 'ar_cuil' | 'ar_dni' | 'at_stn' | 'az_tin' | 'bd_brc' | 'bd_etin' | 'bd_nid' | 'be_nrn' | 'bg_ucn' | 'bn_nric' | 'br_cpf' | 'ca_sin' | 'ch_oasi' | 'cl_rut' | 'cn_pp' | 'co_nuip' | 'cr_ci' | 'cr_cpf' | 'cr_dimex' | 'cr_nite' | 'cy_tic' | 'cz_rc' | 'de_stn' | 'dk_cpr' | 'do_cie' | 'do_rcn' | 'ec_ci' | 'ee_ik' | 'es_nif' | 'fi_hetu' | 'fr_nir' | 'gb_nino' | 'gr_afm' | 'gt_nit' | 'hk_id' | 'hr_oib' | 'hu_ad' | 'id_nik' | 'ie_ppsn' | 'is_kt' | 'it_cf' | 'jp_inc' | 'ke_pin' | 'kz_iin' | 'li_peid' | 'lt_ak' | 'lu_nif' | 'lv_pk' | 'mx_rfc' | 'my_nric' | 'mz_nuit' | 'ng_nin' | 'nl_bsn' | 'no_nin' | 'nz_ird' | 'pe_dni' | 'pk_cnic' | 'pk_snic' | 'pl_pesel' | 'pt_nif' | 'ro_cnp' | 'sa_tin' | 'se_pin' | 'sg_fin' | 'sg_nric' | 'sk_dic' | 'th_lc' | 'th_pin' | 'tr_tin' | 'us_itin' | 'us_itin_last_4' | 'us_ssn' | 'us_ssn_last_4' | 'uy_dni' | 'za_id';
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
                            country?: string;
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
                             * Town or district.
                             */
                            town?: string;
                        }
                        interface Kanji {
                            /**
                             * City, district, suburb, town, or village.
                             */
                            city?: string;
                            /**
                             * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                             */
                            country?: string;
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
                             * Town or district.
                             */
                            town?: string;
                        }
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
            namespace Requirements {
                interface Entry {
                    /**
                     * Indicates whether the platform or Stripe is currently responsible for taking action on the requirement. Value can be `user` or `stripe`.
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
                    reference?: Entry.Reference;
                    /**
                     * A list of reasons why Stripe is collecting the requirement.
                     */
                    requested_reasons: Array<Entry.RequestedReason>;
                }
                interface Summary {
                    /**
                     * The soonest date and time a requirement on the Account will become `past due`. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2022-09-18T13:22:18.123Z`.
                     */
                    minimum_deadline?: Summary.MinimumDeadline;
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
                    interface Impact {
                        /**
                         * The Capabilities that will be restricted if the requirement is not collected and satisfactory to Stripe.
                         */
                        restricts_capabilities?: Array<Impact.RestrictsCapability>;
                    }
                    interface MinimumDeadline {
                        /**
                         * The current status of the requirement's impact.
                         */
                        status: MinimumDeadline.Status;
                    }
                    interface Reference {
                        /**
                         * If `inquiry` is the type, the inquiry token.
                         */
                        inquiry?: string;
                        /**
                         * If `resource` is the type, the resource token.
                         */
                        resource?: string;
                        /**
                         * The type of the reference. If the type is "inquiry", the inquiry token can be found in the "inquiry" field.
                         * Otherwise the type is an API resource, the token for which can be found in the "resource" field.
                         */
                        type: Reference.Type;
                    }
                    interface RequestedReason {
                        /**
                         * Machine-readable description of Stripe's reason for collecting the requirement.
                         */
                        code: RequestedReason.Code;
                    }
                    namespace Error {
                        type Code = 'invalid_address_city_state_postal_code' | 'invalid_address_highway_contract_box' | 'invalid_address_private_mailbox' | 'invalid_business_profile_name' | 'invalid_business_profile_name_denylisted' | 'invalid_company_name_denylisted' | 'invalid_dob_age_over_maximum' | 'invalid_dob_age_under_18' | 'invalid_dob_age_under_minimum' | 'invalid_product_description_length' | 'invalid_product_description_url_match' | 'invalid_representative_country' | 'invalid_statement_descriptor_business_mismatch' | 'invalid_statement_descriptor_denylisted' | 'invalid_statement_descriptor_length' | 'invalid_statement_descriptor_prefix_denylisted' | 'invalid_statement_descriptor_prefix_mismatch' | 'invalid_street_address' | 'invalid_tax_id' | 'invalid_tax_id_format' | 'invalid_tos_acceptance' | 'invalid_url_denylisted' | 'invalid_url_format' | 'invalid_url_website_business_information_mismatch' | 'invalid_url_website_empty' | 'invalid_url_website_inaccessible' | 'invalid_url_website_inaccessible_geoblocked' | 'invalid_url_website_inaccessible_password_protected' | 'invalid_url_website_incomplete' | 'invalid_url_website_incomplete_cancellation_policy' | 'invalid_url_website_incomplete_customer_service_details' | 'invalid_url_website_incomplete_legal_restrictions' | 'invalid_url_website_incomplete_refund_policy' | 'invalid_url_website_incomplete_return_policy' | 'invalid_url_website_incomplete_terms_and_conditions' | 'invalid_url_website_incomplete_under_construction' | 'invalid_url_website_other' | 'invalid_url_web_presence_detected' | 'invalid_value_other' | 'unresolvable_ip_address' | 'unresolvable_postal_code' | 'verification_directors_mismatch' | 'verification_document_address_mismatch' | 'verification_document_address_missing' | 'verification_document_corrupt' | 'verification_document_country_not_supported' | 'verification_document_directors_mismatch' | 'verification_document_dob_mismatch' | 'verification_document_duplicate_type' | 'verification_document_expired' | 'verification_document_failed_copy' | 'verification_document_failed_greyscale' | 'verification_document_failed_other' | 'verification_document_failed_test_mode' | 'verification_document_fraudulent' | 'verification_document_id_number_mismatch' | 'verification_document_id_number_missing' | 'verification_document_incomplete' | 'verification_document_invalid' | 'verification_document_issue_or_expiry_date_missing' | 'verification_document_manipulated' | 'verification_document_missing_back' | 'verification_document_missing_front' | 'verification_document_name_mismatch' | 'verification_document_name_missing' | 'verification_document_nationality_mismatch' | 'verification_document_not_readable' | 'verification_document_not_signed' | 'verification_document_not_uploaded' | 'verification_document_photo_mismatch' | 'verification_document_too_large' | 'verification_document_type_not_supported' | 'verification_extraneous_directors' | 'verification_failed_address_match' | 'verification_failed_business_iec_number' | 'verification_failed_document_match' | 'verification_failed_id_number_match' | 'verification_failed_keyed_identity' | 'verification_failed_keyed_match' | 'verification_failed_name_match' | 'verification_failed_other' | 'verification_failed_representative_authority' | 'verification_failed_residential_address' | 'verification_failed_tax_id_match' | 'verification_failed_tax_id_not_issued' | 'verification_missing_directors' | 'verification_missing_executives' | 'verification_missing_owners' | 'verification_requires_additional_memorandum_of_associations' | 'verification_requires_additional_proof_of_registration' | 'verification_selfie_document_missing_photo' | 'verification_selfie_face_mismatch' | 'verification_selfie_manipulated' | 'verification_selfie_unverified_other' | 'verification_supportability' | 'verification_token_stale';
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
                            type Capability = 'ach_debit_payments' | 'acss_debit_payments' | 'affirm_payments' | 'afterpay_clearpay_payments' | 'alma_payments' | 'amazon_pay_payments' | 'automatic_indirect_tax' | 'au_becs_debit_payments' | 'bacs_debit_payments' | 'bancontact_payments' | 'bank_accounts.local' | 'bank_accounts.wire' | 'blik_payments' | 'boleto_payments' | 'cards' | 'card_payments' | 'cartes_bancaires_payments' | 'cashapp_payments' | 'eps_payments' | 'fpx_payments' | 'gb_bank_transfer_payments' | 'grabpay_payments' | 'ideal_payments' | 'jcb_payments' | 'jp_bank_transfer_payments' | 'kakao_pay_payments' | 'klarna_payments' | 'konbini_payments' | 'kr_card_payments' | 'link_payments' | 'mobilepay_payments' | 'multibanco_payments' | 'mx_bank_transfer_payments' | 'naver_pay_payments' | 'oxxo_payments' | 'p24_payments' | 'payco_payments' | 'paynow_payments' | 'pay_by_bank_payments' | 'promptpay_payments' | 'revolut_pay_payments' | 'samsung_pay_payments' | 'sepa_bank_transfer_payments' | 'sepa_debit_payments' | 'stripe_balance.payouts' | 'stripe_balance.stripe_transfers' | 'swish_payments' | 'twint_payments' | 'us_bank_transfer_payments' | 'zip_payments';
                            type Configuration = 'customer' | 'merchant' | 'recipient';
                            interface Deadline {
                                /**
                                 * The current status of the requirement's impact.
                                 */
                                status: Deadline.Status;
                            }
                            namespace Deadline {
                                type Status = 'currently_due' | 'eventually_due' | 'past_due';
                            }
                        }
                    }
                    namespace MinimumDeadline {
                        type Status = 'currently_due' | 'eventually_due' | 'past_due';
                    }
                    namespace Reference {
                        type Type = 'inquiry' | 'payment_method' | 'person';
                    }
                    namespace RequestedReason {
                        type Code = 'routine_onboarding' | 'routine_verification';
                    }
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
                        time?: string;
                    }
                    namespace MinimumDeadline {
                        type Status = 'currently_due' | 'eventually_due' | 'past_due';
                    }
                }
            }
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface AccountCreateParams {
            /**
             * The account token generated by the account token api.
             */
            account_token?: string;
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
            metadata?: MetadataParam;
        }
        namespace AccountCreateParams {
            interface Configuration {
                /**
                 * The Customer Configuration allows the Account to be used in inbound payment flows.
                 */
                customer?: Configuration.Customer;
                /**
                 * Enables the Account to act as a connected account and collect payments facilitated by a Connect platform. You must onboard your platform to Connect before you can add this configuration to your connected accounts. Utilize this configuration when the Account will be the Merchant of Record, like with Direct charges or Destination Charges with on_behalf_of set.
                 */
                merchant?: Configuration.Merchant;
                /**
                 * The Recipient Configuration allows the Account to receive funds. Utilize this configuration if the Account will not be the Merchant of Record, like with Separate Charges & Transfers, or Destination Charges without on_behalf_of set.
                 */
                recipient?: Configuration.Recipient;
            }
            type Dashboard = 'express' | 'full' | 'none';
            interface Defaults {
                /**
                 * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
                 */
                currency?: string;
                /**
                 * The Account's preferred locales (languages), ordered by preference.
                 */
                locales?: Array<Defaults.Locale>;
                /**
                 * Account profile information.
                 */
                profile?: Defaults.Profile;
                /**
                 * Default responsibilities held by either Stripe or the platform.
                 */
                responsibilities?: Defaults.Responsibilities;
            }
            interface Identity {
                /**
                 * Attestations from the identity's key people, e.g. owners, executives, directors, representatives.
                 */
                attestations?: Identity.Attestations;
                /**
                 * Information about the company or business.
                 */
                business_details?: Identity.BusinessDetails;
                /**
                 * The country in which the account holder resides, or in which the business is legally established. This should be an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
                 */
                country?: string;
                /**
                 * The entity type.
                 */
                entity_type?: Identity.EntityType;
                /**
                 * Information about the person represented by the account.
                 */
                individual?: Identity.Individual;
            }
            type Include = 'configuration.customer' | 'configuration.merchant' | 'configuration.recipient' | 'defaults' | 'future_requirements' | 'identity' | 'requirements';
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
                     * Settings specific to Konbini payments on the account.
                     */
                    konbini_payments?: Merchant.KonbiniPayments;
                    /**
                     * The Merchant Category Code (MCC) for the Merchant Configuration. MCCs classify businesses based on the goods or services they provide.
                     */
                    mcc?: string;
                    /**
                     * Settings for the default text that appears on statements for language variations.
                     */
                    script_statement_descriptor?: Merchant.ScriptStatementDescriptor;
                    /**
                     * Statement descriptor.
                     */
                    statement_descriptor?: Merchant.StatementDescriptor;
                    /**
                     * Publicly available contact information for sending support issues to.
                     */
                    support?: Merchant.Support;
                }
                interface Recipient {
                    /**
                     * Capabilities to be requested on the Recipient Configuration.
                     */
                    capabilities?: Recipient.Capabilities;
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
                    }
                    interface Billing {
                        /**
                         * Default invoice settings for the customer account.
                         */
                        invoice?: Billing.Invoice;
                    }
                    interface Capabilities {
                        /**
                         * Generates requirements for enabling automatic indirect tax calculation on this customer's invoices or subscriptions. Recommended to request this capability if planning to enable automatic tax calculation on this customer's invoices or subscriptions.
                         */
                        automatic_indirect_tax?: Capabilities.AutomaticIndirectTax;
                    }
                    interface Shipping {
                        /**
                         * Customer shipping address.
                         */
                        address?: AddressParam;
                        /**
                         * Customer name.
                         */
                        name?: string;
                        /**
                         * Customer phone (including extension).
                         */
                        phone?: string;
                    }
                    namespace AutomaticIndirectTax {
                        type Exempt = 'exempt' | 'none' | 'reverse';
                    }
                    namespace Billing {
                        interface Invoice {
                            /**
                             * The list of up to 4 default custom fields to be displayed on invoices for this customer.
                             */
                            custom_fields?: Array<Invoice.CustomField>;
                            /**
                             * Default invoice footer.
                             */
                            footer?: string;
                            /**
                             * Sequence number to use on the customer account's next invoice. Defaults to 1.
                             */
                            next_sequence?: number;
                            /**
                             * Prefix used to generate unique invoice numbers. Must be 3-12 uppercase letters or numbers.
                             */
                            prefix?: string;
                            /**
                             * Default invoice PDF rendering options.
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
                                 * Indicates whether displayed line item prices and amounts on invoice PDFs include inclusive tax amounts. Must be either `include_inclusive_tax` or `exclude_tax`.
                                 */
                                amount_tax_display?: Rendering.AmountTaxDisplay;
                                /**
                                 * ID of the invoice rendering template to use for future invoices.
                                 */
                                template?: string;
                            }
                            namespace Rendering {
                                type AmountTaxDisplay = 'exclude_tax' | 'include_inclusive_tax';
                            }
                        }
                    }
                    namespace Capabilities {
                        interface AutomaticIndirectTax {
                            /**
                             * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                             */
                            requested: boolean;
                        }
                    }
                }
                namespace Merchant {
                    interface BacsDebitPayments {
                        /**
                         * Display name for Bacs Direct Debit payments.
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
                    interface CardPayments {
                        /**
                         * Automatically declines certain charge types regardless of whether the card issuer accepted or declined the charge.
                         */
                        decline_on?: CardPayments.DeclineOn;
                    }
                    interface KonbiniPayments {
                        /**
                         * Support for Konbini payments.
                         */
                        support?: KonbiniPayments.Support;
                    }
                    interface ScriptStatementDescriptor {
                        /**
                         * The Kana variation of statement_descriptor used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
                         */
                        kana?: ScriptStatementDescriptor.Kana;
                        /**
                         * The Kanji variation of statement_descriptor used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
                         */
                        kanji?: ScriptStatementDescriptor.Kanji;
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
                    namespace KonbiniPayments {
                        interface Support {
                            /**
                             * Support email address for Konbini payments.
                             */
                            email?: string;
                            /**
                             * Support hours for Konbini payments.
                             */
                            hours?: Support.Hours;
                            /**
                             * Support phone number for Konbini payments.
                             */
                            phone?: string;
                        }
                        namespace Support {
                            interface Hours {
                                /**
                                 * Support hours end time (JST time of day) for in `HH:MM` format.
                                 */
                                end_time?: string;
                                /**
                                 * Support hours start time (JST time of day) for in `HH:MM` format.
                                 */
                                start_time?: string;
                            }
                        }
                    }
                    namespace ScriptStatementDescriptor {
                        interface Kana {
                            /**
                             * The default text that appears on statements for non-card charges outside of Japan. For card charges, if you don't set a statement_descriptor_prefix, this text is also used as the statement descriptor prefix. In that case, if concatenating the statement descriptor suffix causes the combined statement descriptor to exceed 22 characters, we truncate the statement_descriptor text to limit the full descriptor to 22 characters. For more information about statement descriptors and their requirements, see the Merchant Configuration settings documentation.
                             */
                            descriptor?: string;
                            /**
                             * Default text that appears on statements for card charges outside of Japan, prefixing any dynamic statement_descriptor_suffix specified on the charge. To maximize space for the dynamic part of the descriptor, keep this text short. If you don't specify this value, statement_descriptor is used as the prefix. For more information about statement descriptors and their requirements, see the Merchant Configuration settings documentation.
                             */
                            prefix?: string;
                        }
                        interface Kanji {
                            /**
                             * The default text that appears on statements for non-card charges outside of Japan. For card charges, if you don't set a statement_descriptor_prefix, this text is also used as the statement descriptor prefix. In that case, if concatenating the statement descriptor suffix causes the combined statement descriptor to exceed 22 characters, we truncate the statement_descriptor text to limit the full descriptor to 22 characters. For more information about statement descriptors and their requirements, see the Merchant Configuration settings documentation.
                             */
                            descriptor?: string;
                            /**
                             * Default text that appears on statements for card charges outside of Japan, prefixing any dynamic statement_descriptor_suffix specified on the charge. To maximize space for the dynamic part of the descriptor, keep this text short. If you don't specify this value, statement_descriptor is used as the prefix. For more information about statement descriptors and their requirements, see the Merchant Configuration settings documentation.
                             */
                            prefix?: string;
                        }
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
                            country: string;
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
                             * Town or district.
                             */
                            town?: string;
                        }
                    }
                }
                namespace Recipient {
                    interface Capabilities {
                        /**
                         * Capabilities that enable the recipient to manage their Stripe Balance (/v1/balance).
                         */
                        stripe_balance?: Capabilities.StripeBalance;
                    }
                    namespace Capabilities {
                        interface StripeBalance {
                            /**
                             * Enables this Account to receive /v1/transfers into their Stripe Balance (/v1/balance).
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
            }
            namespace Defaults {
                type Locale = 'ar-SA' | 'bg' | 'bg-BG' | 'cs' | 'cs-CZ' | 'da' | 'da-DK' | 'de' | 'de-DE' | 'el' | 'el-GR' | 'en' | 'en-AU' | 'en-CA' | 'en-GB' | 'en-IE' | 'en-IN' | 'en-NZ' | 'en-SG' | 'en-US' | 'es' | 'es-419' | 'es-ES' | 'et' | 'et-EE' | 'fi' | 'fil' | 'fil-PH' | 'fi-FI' | 'fr' | 'fr-CA' | 'fr-FR' | 'he-IL' | 'hr' | 'hr-HR' | 'hu' | 'hu-HU' | 'id' | 'id-ID' | 'it' | 'it-IT' | 'ja' | 'ja-JP' | 'ko' | 'ko-KR' | 'lt' | 'lt-LT' | 'lv' | 'lv-LV' | 'ms' | 'ms-MY' | 'mt' | 'mt-MT' | 'nb' | 'nb-NO' | 'nl' | 'nl-NL' | 'pl' | 'pl-PL' | 'pt' | 'pt-BR' | 'pt-PT' | 'ro' | 'ro-RO' | 'ru' | 'ru-RU' | 'sk' | 'sk-SK' | 'sl' | 'sl-SI' | 'sv' | 'sv-SE' | 'th' | 'th-TH' | 'tr' | 'tr-TR' | 'vi' | 'vi-VN' | 'zh' | 'zh-Hans' | 'zh-Hant-HK' | 'zh-Hant-TW' | 'zh-HK' | 'zh-TW';
                interface Profile {
                    /**
                     * The business's publicly-available website.
                     */
                    business_url?: string;
                    /**
                     * The name which is used by the business.
                     */
                    doing_business_as?: string;
                    /**
                     * Internal-only description of the product sold or service provided by the business. It's used by Stripe for risk and underwriting purposes.
                     */
                    product_description?: string;
                }
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
                    type FeesCollector = 'application' | 'application_custom' | 'application_express' | 'stripe';
                    type LossesCollector = 'application' | 'stripe';
                }
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
                     * This hash is used to attest that the representative is authorized to act as the representative of their legal entity.
                     */
                    representative_declaration?: Attestations.RepresentativeDeclaration;
                    /**
                     * Attestations of accepted terms of service agreements.
                     */
                    terms_of_service?: Attestations.TermsOfService;
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
                     * Estimated maximum number of workers currently engaged by the business (including employees, contractors, and vendors).
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
                }
                type EntityType = 'company' | 'government_entity' | 'individual' | 'non_profit';
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
                    metadata?: MetadataParam;
                    /**
                     * The countries where the individual is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                     */
                    nationalities?: Array<string>;
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
                    interface RepresentativeDeclaration {
                        /**
                         * The time marking when the representative attestation was made. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
                         */
                        date?: string;
                        /**
                         * The IP address from which the representative attestation was made.
                         */
                        ip?: string;
                        /**
                         * The user agent of the browser from which the representative attestation was made.
                         */
                        user_agent?: string;
                    }
                    interface TermsOfService {
                        /**
                         * Details on the Account's acceptance of the [Stripe Services Agreement](https://docs.stripe.com/connect/updating-accounts#tos-acceptance).
                         */
                        account?: TermsOfService.Account;
                    }
                    namespace PersonsProvided {
                        type OwnershipExemptionReason = 'qualified_entity_exceeds_ownership_threshold' | 'qualifies_as_financial_institution';
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
                namespace BusinessDetails {
                    interface Address {
                        /**
                         * City, district, suburb, town, or village.
                         */
                        city?: string;
                        /**
                         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                         */
                        country: string;
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
                         * Town or district.
                         */
                        town?: string;
                    }
                    interface AnnualRevenue {
                        /**
                         * A non-negative integer representing the amount in the smallest currency unit.
                         */
                        amount?: AnnualRevenue.Amount;
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
                    interface MonthlyEstimatedRevenue {
                        /**
                         * A non-negative integer representing the amount in the smallest currency unit.
                         */
                        amount?: MonthlyEstimatedRevenue.Amount;
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
                    type Structure = 'cooperative' | 'free_zone_establishment' | 'free_zone_llc' | 'governmental_unit' | 'government_instrumentality' | 'incorporated_association' | 'incorporated_non_profit' | 'incorporated_partnership' | 'limited_liability_partnership' | 'llc' | 'multi_member_llc' | 'private_company' | 'private_corporation' | 'private_partnership' | 'public_company' | 'public_corporation' | 'public_listed_corporation' | 'public_partnership' | 'registered_charity' | 'single_member_llc' | 'sole_establishment' | 'sole_proprietorship' | 'tax_exempt_government_instrumentality' | 'trust' | 'unincorporated_association' | 'unincorporated_non_profit' | 'unincorporated_partnership';
                    namespace AnnualRevenue {
                        interface Amount {
                            /**
                             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
                             */
                            value?: number;
                            /**
                             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
                             */
                            currency?: string;
                        }
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
                    }
                    namespace IdNumber {
                        type Type = 'ae_crn' | 'ae_vat' | 'ao_nif' | 'ar_cuit' | 'at_fn' | 'at_stn' | 'at_vat' | 'au_abn' | 'au_acn' | 'au_in' | 'az_tin' | 'bd_etin' | 'be_cbe' | 'be_vat' | 'bg_uic' | 'bg_vat' | 'br_cnpj' | 'ca_cn' | 'ca_crarr' | 'ca_gst_hst' | 'ca_neq' | 'ca_rid' | 'ch_chid' | 'ch_uid' | 'cr_cpj' | 'cr_nite' | 'cy_he' | 'cy_tic' | 'cy_vat' | 'cz_ico' | 'cz_vat' | 'de_hrn' | 'de_stn' | 'de_vat' | 'dk_cvr' | 'dk_vat' | 'do_rcn' | 'ee_rk' | 'ee_vat' | 'es_cif' | 'es_vat' | 'fi_vat' | 'fi_yt' | 'fr_rna' | 'fr_siren' | 'fr_vat' | 'gb_crn' | 'gi_crn' | 'gr_afm' | 'gr_gemi' | 'gr_vat' | 'gt_nit' | 'hk_br' | 'hk_cr' | 'hr_mbs' | 'hr_oib' | 'hr_vat' | 'hu_cjs' | 'hu_tin' | 'hu_vat' | 'ie_crn' | 'ie_trn' | 'ie_vat' | 'it_rea' | 'it_vat' | 'jp_cn' | 'kz_bin' | 'li_uid' | 'lt_ccrn' | 'lt_vat' | 'lu_nif' | 'lu_rcs' | 'lu_vat' | 'lv_urn' | 'lv_vat' | 'mt_crn' | 'mt_tin' | 'mt_vat' | 'mx_rfc' | 'my_brn' | 'my_coid' | 'my_itn' | 'my_sst' | 'mz_nuit' | 'nl_kvk' | 'nl_rsin' | 'nl_vat' | 'no_orgnr' | 'nz_bn' | 'nz_ird' | 'pe_ruc' | 'pk_ntn' | 'pl_nip' | 'pl_regon' | 'pl_vat' | 'pt_vat' | 'ro_cui' | 'ro_orc' | 'ro_vat' | 'sa_crn' | 'sa_tin' | 'se_orgnr' | 'se_vat' | 'sg_uen' | 'si_msp' | 'si_tin' | 'si_vat' | 'sk_dic' | 'sk_ico' | 'sk_vat' | 'th_crn' | 'th_prn' | 'th_tin' | 'us_ein';
                    }
                    namespace MonthlyEstimatedRevenue {
                        interface Amount {
                            /**
                             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
                             */
                            value?: number;
                            /**
                             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
                             */
                            currency?: string;
                        }
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
                            country: string;
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
                             * Town or district.
                             */
                            town?: string;
                        }
                        interface Kanji {
                            /**
                             * City, district, suburb, town, or village.
                             */
                            city?: string;
                            /**
                             * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                             */
                            country: string;
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
                             * Town or district.
                             */
                            town?: string;
                        }
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
                        country: string;
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
                         * Town or district.
                         */
                        town?: string;
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
                    interface Address {
                        /**
                         * City, district, suburb, town, or village.
                         */
                        city?: string;
                        /**
                         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                         */
                        country: string;
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
                         * Town or district.
                         */
                        town?: string;
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
                    type LegalGender = 'female' | 'male';
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
                    namespace AdditionalName {
                        type Purpose = 'alias' | 'maiden';
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
                    }
                    namespace IdNumber {
                        type Type = 'ae_eid' | 'ao_nif' | 'ar_cuil' | 'ar_dni' | 'at_stn' | 'az_tin' | 'bd_brc' | 'bd_etin' | 'bd_nid' | 'be_nrn' | 'bg_ucn' | 'bn_nric' | 'br_cpf' | 'ca_sin' | 'ch_oasi' | 'cl_rut' | 'cn_pp' | 'co_nuip' | 'cr_ci' | 'cr_cpf' | 'cr_dimex' | 'cr_nite' | 'cy_tic' | 'cz_rc' | 'de_stn' | 'dk_cpr' | 'do_cie' | 'do_rcn' | 'ec_ci' | 'ee_ik' | 'es_nif' | 'fi_hetu' | 'fr_nir' | 'gb_nino' | 'gr_afm' | 'gt_nit' | 'hk_id' | 'hr_oib' | 'hu_ad' | 'id_nik' | 'ie_ppsn' | 'is_kt' | 'it_cf' | 'jp_inc' | 'ke_pin' | 'kz_iin' | 'li_peid' | 'lt_ak' | 'lu_nif' | 'lv_pk' | 'mx_rfc' | 'my_nric' | 'mz_nuit' | 'ng_nin' | 'nl_bsn' | 'no_nin' | 'nz_ird' | 'pe_dni' | 'pk_cnic' | 'pk_snic' | 'pl_pesel' | 'pt_nif' | 'ro_cnp' | 'sa_tin' | 'se_pin' | 'sg_fin' | 'sg_nric' | 'sk_dic' | 'th_lc' | 'th_pin' | 'tr_tin' | 'us_itin' | 'us_itin_last_4' | 'us_ssn' | 'us_ssn_last_4' | 'uy_dni' | 'za_id';
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
                            country: string;
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
                             * Town or district.
                             */
                            town?: string;
                        }
                        interface Kanji {
                            /**
                             * City, district, suburb, town, or village.
                             */
                            city?: string;
                            /**
                             * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                             */
                            country: string;
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
                             * Town or district.
                             */
                            town?: string;
                        }
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
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface AccountRetrieveParams {
            /**
             * Additional fields to include in the response.
             */
            include?: Array<AccountRetrieveParams.Include>;
        }
        namespace AccountRetrieveParams {
            type Include = 'configuration.customer' | 'configuration.merchant' | 'configuration.recipient' | 'defaults' | 'future_requirements' | 'identity' | 'requirements';
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface AccountUpdateParams {
            /**
             * The account token generated by the account token api.
             */
            account_token?: string;
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
            metadata?: MetadataParam;
        }
        namespace AccountUpdateParams {
            interface Configuration {
                /**
                 * The Customer Configuration allows the Account to be charged.
                 */
                customer?: Configuration.Customer;
                /**
                 * Enables the Account to act as a connected account and collect payments facilitated by a Connect platform. You must onboard your platform to Connect before you can add this configuration to your connected accounts. Utilize this configuration when the Account will be the Merchant of Record, like with Direct charges or Destination Charges with on_behalf_of set.
                 */
                merchant?: Configuration.Merchant;
                /**
                 * The Recipient Configuration allows the Account to receive funds. Utilize this configuration if the Account will not be the Merchant of Record, like with Separate Charges & Transfers, or Destination Charges without on_behalf_of set.
                 */
                recipient?: Configuration.Recipient;
            }
            type Dashboard = 'express' | 'full' | 'none';
            interface Defaults {
                /**
                 * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
                 */
                currency?: string;
                /**
                 * The Account's preferred locales (languages), ordered by preference.
                 */
                locales?: Array<Defaults.Locale>;
                /**
                 * Account profile information.
                 */
                profile?: Defaults.Profile;
                /**
                 * Default responsibilities held by either Stripe or the platform.
                 */
                responsibilities?: Defaults.Responsibilities;
            }
            interface Identity {
                /**
                 * Attestations from the identity's key people, e.g. owners, executives, directors, representatives.
                 */
                attestations?: Identity.Attestations;
                /**
                 * Information about the company or business.
                 */
                business_details?: Identity.BusinessDetails;
                /**
                 * The country in which the account holder resides, or in which the business is legally established. This should be an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
                 */
                country?: string;
                /**
                 * The entity type.
                 */
                entity_type?: Identity.EntityType;
                /**
                 * Information about the individual represented by the Account. This property is `null` unless `entity_type` is set to `individual`.
                 */
                individual?: Identity.Individual;
            }
            type Include = 'configuration.customer' | 'configuration.merchant' | 'configuration.recipient' | 'defaults' | 'future_requirements' | 'identity' | 'requirements';
            namespace Configuration {
                interface Customer {
                    /**
                     * Represents the state of the configuration, and can be updated to deactivate or re-apply a configuration.
                     */
                    applied?: boolean;
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
                interface Merchant {
                    /**
                     * Represents the state of the configuration, and can be updated to deactivate or re-apply a configuration.
                     */
                    applied?: boolean;
                    /**
                     * Settings for Bacs Direct Debit payments.
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
                     * Settings specific to Konbini payments on the account.
                     */
                    konbini_payments?: Merchant.KonbiniPayments;
                    /**
                     * The Merchant Category Code (MCC) for the merchant. MCCs classify businesses based on the goods or services they provide.
                     */
                    mcc?: string;
                    /**
                     * Settings for the default text that appears on statements for language variations.
                     */
                    script_statement_descriptor?: Merchant.ScriptStatementDescriptor;
                    /**
                     * Settings for the default [statement descriptor](https://docs.stripe.com/connect/statement-descriptors) text.
                     */
                    statement_descriptor?: Merchant.StatementDescriptor;
                    /**
                     * Publicly available contact information for sending support issues to.
                     */
                    support?: Merchant.Support;
                }
                interface Recipient {
                    /**
                     * Represents the state of the configuration, and can be updated to deactivate or re-apply a configuration.
                     */
                    applied?: boolean;
                    /**
                     * Capabilities to request on the Recipient Configuration.
                     */
                    capabilities?: Recipient.Capabilities;
                }
                namespace Customer {
                    interface AutomaticIndirectTax {
                        /**
                         * The customer account's tax exemption status: `none`, `exempt`, or `reverse`. When `reverse`, invoice and receipt PDFs include "Reverse charge".
                         */
                        exempt?: AutomaticIndirectTax.Exempt;
                        /**
                         * A recent IP address of the customer used for tax reporting and tax location inference.
                         */
                        ip_address?: string;
                        /**
                         * A per-request flag that indicates when Stripe should validate the customer tax location - defaults to `auto`.
                         */
                        validate_location?: AutomaticIndirectTax.ValidateLocation;
                    }
                    interface Billing {
                        /**
                         * ID of a PaymentMethod attached to the customer account to use as the default for invoices and subscriptions.
                         */
                        default_payment_method?: string;
                        /**
                         * Default invoice settings for the customer account.
                         */
                        invoice?: Billing.Invoice;
                    }
                    interface Capabilities {
                        /**
                         * Generates requirements for enabling automatic indirect tax calculation on this customer's invoices or subscriptions. Recommended to request this capability if planning to enable automatic tax calculation on this customer's invoices or subscriptions.
                         */
                        automatic_indirect_tax?: Capabilities.AutomaticIndirectTax;
                    }
                    interface Shipping {
                        /**
                         * Customer shipping address.
                         */
                        address?: AddressParam;
                        /**
                         * Customer name.
                         */
                        name?: string;
                        /**
                         * Customer phone (including extension).
                         */
                        phone?: string;
                    }
                    namespace AutomaticIndirectTax {
                        type Exempt = 'exempt' | 'none' | 'reverse';
                        type ValidateLocation = 'auto' | 'deferred' | 'immediately';
                    }
                    namespace Billing {
                        interface Invoice {
                            /**
                             * The list of up to 4 default custom fields to be displayed on invoices for this customer.
                             */
                            custom_fields?: Array<Invoice.CustomField>;
                            /**
                             * Default invoice footer.
                             */
                            footer?: string;
                            /**
                             * Sequence number to use on the customer account's next invoice. Defaults to 1.
                             */
                            next_sequence?: number;
                            /**
                             * Prefix used to generate unique invoice numbers. Must be 3-12 uppercase letters or numbers.
                             */
                            prefix?: string;
                            /**
                             * Default invoice PDF rendering options.
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
                                 * Indicates whether displayed line item prices and amounts on invoice PDFs include inclusive tax amounts. Must be either `include_inclusive_tax` or `exclude_tax`.
                                 */
                                amount_tax_display?: Rendering.AmountTaxDisplay;
                                /**
                                 * ID of the invoice rendering template to use for future invoices.
                                 */
                                template?: string;
                            }
                            namespace Rendering {
                                type AmountTaxDisplay = 'exclude_tax' | 'include_inclusive_tax';
                            }
                        }
                    }
                    namespace Capabilities {
                        interface AutomaticIndirectTax {
                            /**
                             * To request a new Capability for an account, pass true. There can be a delay before the requested Capability becomes active.
                             */
                            requested?: boolean;
                        }
                    }
                }
                namespace Merchant {
                    interface BacsDebitPayments {
                        /**
                         * Display name for Bacs Direct Debit payments.
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
                    interface CardPayments {
                        /**
                         * Automatically declines certain charge types regardless of whether the card issuer accepted or declined the charge.
                         */
                        decline_on?: CardPayments.DeclineOn;
                    }
                    interface KonbiniPayments {
                        /**
                         * Support for Konbini payments.
                         */
                        support?: KonbiniPayments.Support;
                    }
                    interface ScriptStatementDescriptor {
                        /**
                         * The Kana variation of statement_descriptor used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
                         */
                        kana?: ScriptStatementDescriptor.Kana;
                        /**
                         * The Kanji variation of statement_descriptor used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
                         */
                        kanji?: ScriptStatementDescriptor.Kanji;
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
                        address?: JapanAddressParam;
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
                    namespace KonbiniPayments {
                        interface Support {
                            /**
                             * Support email address for Konbini payments.
                             */
                            email?: string;
                            /**
                             * Support hours for Konbini payments.
                             */
                            hours?: Support.Hours;
                            /**
                             * Support phone number for Konbini payments.
                             */
                            phone?: string;
                        }
                        namespace Support {
                            interface Hours {
                                /**
                                 * Support hours end time (JST time of day) for in `HH:MM` format.
                                 */
                                end_time?: string;
                                /**
                                 * Support hours start time (JST time of day) for in `HH:MM` format.
                                 */
                                start_time?: string;
                            }
                        }
                    }
                    namespace ScriptStatementDescriptor {
                        interface Kana {
                            /**
                             * The default text that appears on statements for non-card charges outside of Japan. For card charges, if you don't set a statement_descriptor_prefix, this text is also used as the statement descriptor prefix. In that case, if concatenating the statement descriptor suffix causes the combined statement descriptor to exceed 22 characters, we truncate the statement_descriptor text to limit the full descriptor to 22 characters. For more information about statement descriptors and their requirements, see the Merchant Configuration settings documentation.
                             */
                            descriptor?: string;
                            /**
                             * Default text that appears on statements for card charges outside of Japan, prefixing any dynamic statement_descriptor_suffix specified on the charge. To maximize space for the dynamic part of the descriptor, keep this text short. If you don't specify this value, statement_descriptor is used as the prefix. For more information about statement descriptors and their requirements, see the Merchant Configuration settings documentation.
                             */
                            prefix?: string;
                        }
                        interface Kanji {
                            /**
                             * The default text that appears on statements for non-card charges outside of Japan. For card charges, if you don't set a statement_descriptor_prefix, this text is also used as the statement descriptor prefix. In that case, if concatenating the statement descriptor suffix causes the combined statement descriptor to exceed 22 characters, we truncate the statement_descriptor text to limit the full descriptor to 22 characters. For more information about statement descriptors and their requirements, see the Merchant Configuration settings documentation.
                             */
                            descriptor?: string;
                            /**
                             * Default text that appears on statements for card charges outside of Japan, prefixing any dynamic statement_descriptor_suffix specified on the charge. To maximize space for the dynamic part of the descriptor, keep this text short. If you don't specify this value, statement_descriptor is used as the prefix. For more information about statement descriptors and their requirements, see the Merchant Configuration settings documentation.
                             */
                            prefix?: string;
                        }
                    }
                }
                namespace Recipient {
                    interface Capabilities {
                        /**
                         * Capabilities that enable the recipient to manage their Stripe Balance (/v1/balance).
                         */
                        stripe_balance?: Capabilities.StripeBalance;
                    }
                    namespace Capabilities {
                        interface StripeBalance {
                            /**
                             * Enables this Account to receive /v1/transfers into their Stripe Balance (/v1/balance).
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
            }
            namespace Defaults {
                type Locale = 'ar-SA' | 'bg' | 'bg-BG' | 'cs' | 'cs-CZ' | 'da' | 'da-DK' | 'de' | 'de-DE' | 'el' | 'el-GR' | 'en' | 'en-AU' | 'en-CA' | 'en-GB' | 'en-IE' | 'en-IN' | 'en-NZ' | 'en-SG' | 'en-US' | 'es' | 'es-419' | 'es-ES' | 'et' | 'et-EE' | 'fi' | 'fil' | 'fil-PH' | 'fi-FI' | 'fr' | 'fr-CA' | 'fr-FR' | 'he-IL' | 'hr' | 'hr-HR' | 'hu' | 'hu-HU' | 'id' | 'id-ID' | 'it' | 'it-IT' | 'ja' | 'ja-JP' | 'ko' | 'ko-KR' | 'lt' | 'lt-LT' | 'lv' | 'lv-LV' | 'ms' | 'ms-MY' | 'mt' | 'mt-MT' | 'nb' | 'nb-NO' | 'nl' | 'nl-NL' | 'pl' | 'pl-PL' | 'pt' | 'pt-BR' | 'pt-PT' | 'ro' | 'ro-RO' | 'ru' | 'ru-RU' | 'sk' | 'sk-SK' | 'sl' | 'sl-SI' | 'sv' | 'sv-SE' | 'th' | 'th-TH' | 'tr' | 'tr-TR' | 'vi' | 'vi-VN' | 'zh' | 'zh-Hans' | 'zh-Hant-HK' | 'zh-Hant-TW' | 'zh-HK' | 'zh-TW';
                interface Profile {
                    /**
                     * The business's publicly-available website.
                     */
                    business_url?: string;
                    /**
                     * The name which is used by the business.
                     */
                    doing_business_as?: string;
                    /**
                     * Internal-only description of the product sold or service provided by the business. It's used by Stripe for risk and underwriting purposes.
                     */
                    product_description?: string;
                }
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
                    type FeesCollector = 'application' | 'application_custom' | 'application_express' | 'stripe';
                    type LossesCollector = 'application' | 'stripe';
                }
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
                     * This hash is used to attest that the representative is authorized to act as the representative of their legal entity.
                     */
                    representative_declaration?: Attestations.RepresentativeDeclaration;
                    /**
                     * Attestations of accepted terms of service agreements.
                     */
                    terms_of_service?: Attestations.TermsOfService;
                }
                interface BusinessDetails {
                    /**
                     * The business registration address of the business entity.
                     */
                    address?: JapanAddressParam;
                    /**
                     * The business gross annual revenue for its preceding fiscal year.
                     */
                    annual_revenue?: BusinessDetails.AnnualRevenue;
                    /**
                     * A document verifying the business.
                     */
                    documents?: BusinessDetails.Documents;
                    /**
                     * Estimated maximum number of workers currently engaged by the business (including employees, contractors, and vendors).
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
                }
                type EntityType = 'company' | 'government_entity' | 'individual' | 'non_profit';
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
                    address?: JapanAddressParam;
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
                    metadata?: MetadataParam;
                    /**
                     * The countries where the individual is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                     */
                    nationalities?: Array<string>;
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
                    interface RepresentativeDeclaration {
                        /**
                         * The time marking when the representative attestation was made. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
                         */
                        date?: string;
                        /**
                         * The IP address from which the representative attestation was made.
                         */
                        ip?: string;
                        /**
                         * The user agent of the browser from which the representative attestation was made.
                         */
                        user_agent?: string;
                    }
                    interface TermsOfService {
                        /**
                         * Details on the Account's acceptance of the [Stripe Services Agreement](https://docs.stripe.com/connect/updating-accounts#tos-acceptance).
                         */
                        account?: TermsOfService.Account;
                        /**
                         * Details on the Account's acceptance of Crypto-storer-specific terms of service.
                         */
                        crypto_storer?: TermsOfService.CryptoStorer;
                        /**
                         * Details on the Account's acceptance of Treasury-specific terms of service.
                         */
                        storer?: TermsOfService.Storer;
                    }
                    namespace PersonsProvided {
                        type OwnershipExemptionReason = 'qualified_entity_exceeds_ownership_threshold' | 'qualifies_as_financial_institution';
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
                        interface CryptoStorer {
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
                        interface Storer {
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
                namespace BusinessDetails {
                    interface AnnualRevenue {
                        /**
                         * A non-negative integer representing the amount in the smallest currency unit.
                         */
                        amount?: AnnualRevenue.Amount;
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
                    interface MonthlyEstimatedRevenue {
                        /**
                         * A non-negative integer representing the amount in the smallest currency unit.
                         */
                        amount?: MonthlyEstimatedRevenue.Amount;
                    }
                    interface ScriptAddresses {
                        /**
                         * Kana Address.
                         */
                        kana?: JapanAddressParam;
                        /**
                         * Kanji Address.
                         */
                        kanji?: JapanAddressParam;
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
                    type Structure = 'cooperative' | 'free_zone_establishment' | 'free_zone_llc' | 'governmental_unit' | 'government_instrumentality' | 'incorporated_association' | 'incorporated_non_profit' | 'incorporated_partnership' | 'limited_liability_partnership' | 'llc' | 'multi_member_llc' | 'private_company' | 'private_corporation' | 'private_partnership' | 'public_company' | 'public_corporation' | 'public_listed_corporation' | 'public_partnership' | 'registered_charity' | 'single_member_llc' | 'sole_establishment' | 'sole_proprietorship' | 'tax_exempt_government_instrumentality' | 'trust' | 'unincorporated_association' | 'unincorporated_non_profit' | 'unincorporated_partnership';
                    namespace AnnualRevenue {
                        interface Amount {
                            /**
                             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
                             */
                            value?: number;
                            /**
                             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
                             */
                            currency?: string;
                        }
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
                        namespace PrimaryVerification {
                            interface FrontBack {
                                /**
                                 * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the back of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                                 */
                                back?: string;
                                /**
                                 * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                                 */
                                front?: string;
                            }
                        }
                    }
                    namespace IdNumber {
                        type Type = 'ae_crn' | 'ae_vat' | 'ao_nif' | 'ar_cuit' | 'at_fn' | 'at_stn' | 'at_vat' | 'au_abn' | 'au_acn' | 'au_in' | 'az_tin' | 'bd_etin' | 'be_cbe' | 'be_vat' | 'bg_uic' | 'bg_vat' | 'br_cnpj' | 'ca_cn' | 'ca_crarr' | 'ca_gst_hst' | 'ca_neq' | 'ca_rid' | 'ch_chid' | 'ch_uid' | 'cr_cpj' | 'cr_nite' | 'cy_he' | 'cy_tic' | 'cy_vat' | 'cz_ico' | 'cz_vat' | 'de_hrn' | 'de_stn' | 'de_vat' | 'dk_cvr' | 'dk_vat' | 'do_rcn' | 'ee_rk' | 'ee_vat' | 'es_cif' | 'es_vat' | 'fi_vat' | 'fi_yt' | 'fr_rna' | 'fr_siren' | 'fr_vat' | 'gb_crn' | 'gi_crn' | 'gr_afm' | 'gr_gemi' | 'gr_vat' | 'gt_nit' | 'hk_br' | 'hk_cr' | 'hr_mbs' | 'hr_oib' | 'hr_vat' | 'hu_cjs' | 'hu_tin' | 'hu_vat' | 'ie_crn' | 'ie_trn' | 'ie_vat' | 'it_rea' | 'it_vat' | 'jp_cn' | 'kz_bin' | 'li_uid' | 'lt_ccrn' | 'lt_vat' | 'lu_nif' | 'lu_rcs' | 'lu_vat' | 'lv_urn' | 'lv_vat' | 'mt_crn' | 'mt_tin' | 'mt_vat' | 'mx_rfc' | 'my_brn' | 'my_coid' | 'my_itn' | 'my_sst' | 'mz_nuit' | 'nl_kvk' | 'nl_rsin' | 'nl_vat' | 'no_orgnr' | 'nz_bn' | 'nz_ird' | 'pe_ruc' | 'pk_ntn' | 'pl_nip' | 'pl_regon' | 'pl_vat' | 'pt_vat' | 'ro_cui' | 'ro_orc' | 'ro_vat' | 'sa_crn' | 'sa_tin' | 'se_orgnr' | 'se_vat' | 'sg_uen' | 'si_msp' | 'si_tin' | 'si_vat' | 'sk_dic' | 'sk_ico' | 'sk_vat' | 'th_crn' | 'th_prn' | 'th_tin' | 'us_ein';
                    }
                    namespace MonthlyEstimatedRevenue {
                        interface Amount {
                            /**
                             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
                             */
                            value?: number;
                            /**
                             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
                             */
                            currency?: string;
                        }
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
                        country?: string;
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
                         * Town or district.
                         */
                        town?: string;
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
                    type LegalGender = 'female' | 'male';
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
                        kana?: JapanAddressParam;
                        /**
                         * Kanji Address.
                         */
                        kanji?: JapanAddressParam;
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
                    namespace AdditionalName {
                        type Purpose = 'alias' | 'maiden';
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
                        namespace PrimaryVerification {
                            interface FrontBack {
                                /**
                                 * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the back of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                                 */
                                back?: string;
                                /**
                                 * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                                 */
                                front?: string;
                            }
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
                                front?: string;
                            }
                        }
                    }
                    namespace IdNumber {
                        type Type = 'ae_eid' | 'ao_nif' | 'ar_cuil' | 'ar_dni' | 'at_stn' | 'az_tin' | 'bd_brc' | 'bd_etin' | 'bd_nid' | 'be_nrn' | 'bg_ucn' | 'bn_nric' | 'br_cpf' | 'ca_sin' | 'ch_oasi' | 'cl_rut' | 'cn_pp' | 'co_nuip' | 'cr_ci' | 'cr_cpf' | 'cr_dimex' | 'cr_nite' | 'cy_tic' | 'cz_rc' | 'de_stn' | 'dk_cpr' | 'do_cie' | 'do_rcn' | 'ec_ci' | 'ee_ik' | 'es_nif' | 'fi_hetu' | 'fr_nir' | 'gb_nino' | 'gr_afm' | 'gt_nit' | 'hk_id' | 'hr_oib' | 'hu_ad' | 'id_nik' | 'ie_ppsn' | 'is_kt' | 'it_cf' | 'jp_inc' | 'ke_pin' | 'kz_iin' | 'li_peid' | 'lt_ak' | 'lu_nif' | 'lv_pk' | 'mx_rfc' | 'my_nric' | 'mz_nuit' | 'ng_nin' | 'nl_bsn' | 'no_nin' | 'nz_ird' | 'pe_dni' | 'pk_cnic' | 'pk_snic' | 'pl_pesel' | 'pt_nif' | 'ro_cnp' | 'sa_tin' | 'se_pin' | 'sg_fin' | 'sg_nric' | 'sk_dic' | 'th_lc' | 'th_pin' | 'tr_tin' | 'us_itin' | 'us_itin_last_4' | 'us_ssn' | 'us_ssn_last_4' | 'uy_dni' | 'za_id';
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
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface AccountListParams {
            /**
             * Filter only accounts that have all of the configurations specified. If omitted, returns all accounts regardless of which configurations they have.
             */
            applied_configurations?: Array<AccountListParams.AppliedConfiguration>;
            /**
             * Filter by whether the account is closed. If omitted, returns only Accounts that are not closed.
             */
            closed?: boolean;
            /**
             * The upper limit on the number of accounts returned by the List Account request.
             */
            limit?: number;
        }
        namespace AccountListParams {
            type AppliedConfiguration = 'customer' | 'merchant' | 'recipient';
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface AccountCloseParams {
            /**
             * Configurations on the Account to be closed. All configurations on the Account must be passed in for this request to succeed.
             */
            applied_configurations?: Array<AccountCloseParams.AppliedConfiguration>;
        }
        namespace AccountCloseParams {
            type AppliedConfiguration = 'customer' | 'merchant' | 'recipient';
        }
    }
}
