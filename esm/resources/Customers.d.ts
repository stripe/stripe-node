import { StripeResource } from '../StripeResource.js';
import { DeletedDiscount, Discount } from './Discounts.js';
import { CustomerBalanceTransaction } from './CustomerBalanceTransactions.js';
import { CashBalance } from './CashBalances.js';
import { CustomerCashBalanceTransaction } from './CustomerCashBalanceTransactions.js';
import { FundingInstructions } from './FundingInstructions.js';
import { PaymentMethod } from './PaymentMethods.js';
import { CustomerSource, DeletedCustomerSource } from './CustomerSources.js';
import { BankAccount } from './BankAccounts.js';
import { DeletedTaxId, TaxId } from './TaxIds.js';
import { Subscription } from './Subscriptions.js';
import * as TestHelpers from './TestHelpers/index.js';
import { Emptyable, AddressParam, MetadataParam, PaginationParams, RangeQueryParam, Address, Metadata } from '../shared.js';
import { RequestOptions, Response, ApiListPromise, ApiList, ApiSearchResultPromise } from '../lib.js';
export declare class CustomerResource extends StripeResource {
    /**
     * Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.
     */
    del(id: string, params?: CustomerDeleteParams, options?: RequestOptions): Promise<Response<DeletedCustomer>>;
    del(id: string, options?: RequestOptions): Promise<Response<DeletedCustomer>>;
    /**
     * Retrieves a Customer object.
     */
    retrieve(id: string, params?: CustomerRetrieveParams, options?: RequestOptions): Promise<Response<Customer | DeletedCustomer>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<Customer | DeletedCustomer>>;
    /**
     * Updates the specified customer by setting the values of the parameters passed. Any parameters not provided will be left unchanged. For example, if you pass the source parameter, that becomes the customer's active source (e.g., a card) to be used for all charges in the future. When you update a customer to a new valid card source by passing the source parameter: for each of the customer's current subscriptions, if the subscription bills automatically and is in the past_due state, then the latest open invoice for the subscription with automatic collection enabled will be retried. This retry will not count as an automatic retry, and will not affect the next regularly scheduled payment for the invoice. Changing the default_source for a customer will not trigger this behavior.
     *
     * This request accepts mostly the same arguments as the customer creation call.
     */
    update(id: string, params?: CustomerUpdateParams, options?: RequestOptions): Promise<Response<Customer>>;
    /**
     * Removes the currently applied discount on a customer.
     */
    deleteDiscount(id: string, params?: CustomerDeleteDiscountParams, options?: RequestOptions): Promise<Response<DeletedDiscount>>;
    deleteDiscount(id: string, options?: RequestOptions): Promise<Response<DeletedDiscount>>;
    /**
     * Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.
     */
    list(params?: CustomerListParams, options?: RequestOptions): ApiListPromise<Customer>;
    list(options?: RequestOptions): ApiListPromise<Customer>;
    /**
     * Creates a new customer object.
     */
    create(params?: CustomerCreateParams, options?: RequestOptions): Promise<Response<Customer>>;
    create(options?: RequestOptions): Promise<Response<Customer>>;
    /**
     * Search for customers you've previously created using Stripe's [Search Query Language](https://docs.stripe.com/docs/search#search-query-language).
     * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
     * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
     * to an hour behind during outages. Search functionality is not available to merchants in India.
     */
    search(params: CustomerSearchParams, options?: RequestOptions): ApiSearchResultPromise<Customer>;
    /**
     * Returns a list of transactions that updated the customer's [balances](https://docs.stripe.com/docs/billing/customer/balance).
     */
    listBalanceTransactions(id: string, params?: CustomerListBalanceTransactionsParams, options?: RequestOptions): ApiListPromise<CustomerBalanceTransaction>;
    listBalanceTransactions(id: string, options?: RequestOptions): ApiListPromise<CustomerBalanceTransaction>;
    /**
     * Creates an immutable transaction that updates the customer's credit [balance](https://docs.stripe.com/docs/billing/customer/balance).
     */
    createBalanceTransaction(id: string, params: CustomerCreateBalanceTransactionParams, options?: RequestOptions): Promise<Response<CustomerBalanceTransaction>>;
    /**
     * Retrieves a specific customer balance transaction that updated the customer's [balances](https://docs.stripe.com/docs/billing/customer/balance).
     */
    retrieveBalanceTransaction(customerId: string, id: string, params?: CustomerRetrieveBalanceTransactionParams, options?: RequestOptions): Promise<Response<CustomerBalanceTransaction>>;
    retrieveBalanceTransaction(customerId: string, id: string, options?: RequestOptions): Promise<Response<CustomerBalanceTransaction>>;
    /**
     * Most credit balance transaction fields are immutable, but you may update its description and metadata.
     */
    updateBalanceTransaction(customerId: string, id: string, params?: CustomerUpdateBalanceTransactionParams, options?: RequestOptions): Promise<Response<CustomerBalanceTransaction>>;
    updateBalanceTransaction(customerId: string, id: string, options?: RequestOptions): Promise<Response<CustomerBalanceTransaction>>;
    /**
     * Retrieves a customer's cash balance.
     */
    retrieveCashBalance(id: string, params?: CustomerRetrieveCashBalanceParams, options?: RequestOptions): Promise<Response<CashBalance>>;
    retrieveCashBalance(id: string, options?: RequestOptions): Promise<Response<CashBalance>>;
    /**
     * Changes the settings on a customer's cash balance.
     */
    updateCashBalance(id: string, params?: CustomerUpdateCashBalanceParams, options?: RequestOptions): Promise<Response<CashBalance>>;
    updateCashBalance(id: string, options?: RequestOptions): Promise<Response<CashBalance>>;
    /**
     * Returns a list of transactions that modified the customer's [cash balance](https://docs.stripe.com/docs/payments/customer-balance).
     */
    listCashBalanceTransactions(id: string, params?: CustomerListCashBalanceTransactionsParams, options?: RequestOptions): ApiListPromise<CustomerCashBalanceTransaction>;
    listCashBalanceTransactions(id: string, options?: RequestOptions): ApiListPromise<CustomerCashBalanceTransaction>;
    /**
     * Retrieves a specific cash balance transaction, which updated the customer's [cash balance](https://docs.stripe.com/docs/payments/customer-balance).
     */
    retrieveCashBalanceTransaction(customerId: string, id: string, params?: CustomerRetrieveCashBalanceTransactionParams, options?: RequestOptions): Promise<Response<CustomerCashBalanceTransaction>>;
    retrieveCashBalanceTransaction(customerId: string, id: string, options?: RequestOptions): Promise<Response<CustomerCashBalanceTransaction>>;
    /**
     * Retrieve funding instructions for a customer cash balance. If funding instructions do not yet exist for the customer, new
     * funding instructions will be created. If funding instructions have already been created for a given customer, the same
     * funding instructions will be retrieved. In other words, we will return the same funding instructions each time.
     */
    createFundingInstructions(id: string, params: CustomerCreateFundingInstructionsParams, options?: RequestOptions): Promise<Response<FundingInstructions>>;
    /**
     * Returns a list of PaymentMethods for a given Customer
     */
    listPaymentMethods(id: string, params?: CustomerListPaymentMethodsParams, options?: RequestOptions): ApiListPromise<PaymentMethod>;
    listPaymentMethods(id: string, options?: RequestOptions): ApiListPromise<PaymentMethod>;
    /**
     * Retrieves a PaymentMethod object for a given Customer.
     */
    retrievePaymentMethod(customerId: string, id: string, params?: CustomerRetrievePaymentMethodParams, options?: RequestOptions): Promise<Response<PaymentMethod>>;
    retrievePaymentMethod(customerId: string, id: string, options?: RequestOptions): Promise<Response<PaymentMethod>>;
    /**
     * List sources for a specified customer.
     */
    listSources(id: string, params?: CustomerListSourcesParams, options?: RequestOptions): ApiListPromise<CustomerSource>;
    listSources(id: string, options?: RequestOptions): ApiListPromise<CustomerSource>;
    /**
     * When you create a new credit card, you must specify a customer or recipient on which to create it.
     *
     * If the card's owner has no default card, then the new card will become the default.
     * However, if the owner already has a default, then it will not change.
     * To change the default, you should [update the customer](https://docs.stripe.com/docs/api#update_customer) to have a new default_source.
     */
    createSource(id: string, params: CustomerCreateSourceParams, options?: RequestOptions): Promise<Response<CustomerSource>>;
    /**
     * Retrieve a specified source for a given customer.
     */
    retrieveSource(customerId: string, id: string, params?: CustomerRetrieveSourceParams, options?: RequestOptions): Promise<Response<CustomerSource>>;
    retrieveSource(customerId: string, id: string, options?: RequestOptions): Promise<Response<CustomerSource>>;
    /**
     * Update a specified source for a given customer.
     */
    updateSource(customerId: string, id: string, params?: CustomerUpdateSourceParams, options?: RequestOptions): Promise<Response<CustomerSource>>;
    updateSource(customerId: string, id: string, options?: RequestOptions): Promise<Response<CustomerSource>>;
    /**
     * Delete a specified source for a given customer.
     */
    deleteSource(customerId: string, id: string, params?: CustomerDeleteSourceParams, options?: RequestOptions): Promise<Response<CustomerSource | DeletedCustomerSource>>;
    deleteSource(customerId: string, id: string, options?: RequestOptions): Promise<Response<CustomerSource | DeletedCustomerSource>>;
    /**
     * Verify a specified bank account for a given customer.
     */
    verifySource(customerId: string, id: string, params?: CustomerVerifySourceParams, options?: RequestOptions): Promise<Response<BankAccount>>;
    verifySource(customerId: string, id: string, options?: RequestOptions): Promise<Response<BankAccount>>;
    /**
     * Deletes an existing tax_id object.
     */
    deleteTaxId(customerId: string, id: string, params?: CustomerDeleteTaxIdParams, options?: RequestOptions): Promise<Response<DeletedTaxId>>;
    deleteTaxId(customerId: string, id: string, options?: RequestOptions): Promise<Response<DeletedTaxId>>;
    /**
     * Retrieves the tax_id object with the given identifier.
     */
    retrieveTaxId(customerId: string, id: string, params?: CustomerRetrieveTaxIdParams, options?: RequestOptions): Promise<Response<TaxId>>;
    retrieveTaxId(customerId: string, id: string, options?: RequestOptions): Promise<Response<TaxId>>;
    /**
     * Returns a list of tax IDs for a customer.
     */
    listTaxIds(id: string, params?: CustomerListTaxIdsParams, options?: RequestOptions): ApiListPromise<TaxId>;
    listTaxIds(id: string, options?: RequestOptions): ApiListPromise<TaxId>;
    /**
     * Creates a new tax_id object for a customer.
     */
    createTaxId(id: string, params: CustomerCreateTaxIdParams, options?: RequestOptions): Promise<Response<TaxId>>;
}
export interface Customer {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'customer';
    /**
     * The customer's address.
     */
    address?: Address | null;
    /**
     * The current balance, if any, that's stored on the customer in their default currency. If negative, the customer has credit to apply to their next invoice. If positive, the customer has an amount owed that's added to their next invoice. The balance only considers amounts that Stripe hasn't successfully applied to any invoice. It doesn't reflect unpaid invoices. This balance is only taken into account after invoices finalize. For multi-currency balances, see [invoice_credit_balance](https://docs.stripe.com/api/customers/object#customer_object-invoice_credit_balance).
     */
    balance: number;
    /**
     * The customer's business name.
     */
    business_name?: string;
    /**
     * The current funds being held by Stripe on behalf of the customer. You can apply these funds towards payment intents when the source is "cash_balance". The `settings[reconciliation_mode]` field describes if these funds apply to these payment intents manually or automatically.
     */
    cash_balance?: CashBalance | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes.
     */
    currency?: string | null;
    /**
     * The ID of an Account representing a customer. You can use this ID with any v1 API that accepts a customer_account parameter.
     */
    customer_account?: string | null;
    /**
     * ID of the default payment source for the customer.
     *
     * If you use payment methods created through the PaymentMethods API, see the [invoice_settings.default_payment_method](https://docs.stripe.com/api/customers/object#customer_object-invoice_settings-default_payment_method) field instead.
     */
    default_source: string | CustomerSource | null;
    /**
     * Always true for a deleted object
     */
    deleted?: void;
    /**
     * Tracks the most recent state change on any invoice belonging to the customer. Paying an invoice or marking it uncollectible via the API will set this field to false. An automatic payment failure or passing the `invoice.due_date` will set this field to `true`.
     *
     * If an invoice becomes uncollectible by [dunning](https://docs.stripe.com/billing/automatic-collection), `delinquent` doesn't reset to `false`.
     *
     * If you care whether the customer has paid their most recent subscription invoice, use `subscription.status` instead. Paying or marking uncollectible any customer invoice regardless of whether it is the latest invoice for a subscription will always set this field to `false`.
     */
    delinquent?: boolean | null;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description: string | null;
    /**
     * Describes the current discount active on the customer, if there is one.
     */
    discount?: Discount | null;
    /**
     * The customer's email address.
     */
    email: string | null;
    /**
     * The customer's individual name.
     */
    individual_name?: string;
    /**
     * The current multi-currency balances, if any, that's stored on the customer. If positive in a currency, the customer has a credit to apply to their next invoice denominated in that currency. If negative, the customer has an amount owed that's added to their next invoice denominated in that currency. These balances don't apply to unpaid invoices. They solely track amounts that Stripe hasn't successfully applied to any invoice. Stripe only applies a balance in a specific currency to an invoice after that invoice (which is in the same currency) finalizes.
     */
    invoice_credit_balance?: {
        [key: string]: number;
    };
    /**
     * The prefix for the customer used to generate unique invoice numbers.
     */
    invoice_prefix?: string | null;
    invoice_settings: Customer.InvoiceSettings;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Metadata;
    /**
     * The customer's full name or business name.
     */
    name?: string | null;
    /**
     * The suffix of the customer's next invoice number (for example, 0001). When the account uses account level sequencing, this parameter is ignored in API requests and the field omitted in API responses.
     */
    next_invoice_sequence?: number;
    /**
     * The customer's phone number.
     */
    phone?: string | null;
    /**
     * The customer's preferred locales (languages), ordered by preference.
     */
    preferred_locales?: Array<string> | null;
    /**
     * Mailing and shipping address for the customer. Appears on invoices emailed to this customer.
     */
    shipping: Customer.Shipping | null;
    /**
     * The customer's payment sources, if any.
     */
    sources?: ApiList<CustomerSource>;
    /**
     * The customer's current subscriptions, if any.
     */
    subscriptions?: ApiList<Subscription>;
    tax?: Customer.Tax;
    /**
     * Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. When set to `reverse`, invoice and receipt PDFs include the following text: **"Reverse charge"**.
     */
    tax_exempt?: Customer.TaxExempt | null;
    /**
     * The customer's tax IDs.
     */
    tax_ids?: ApiList<TaxId>;
    /**
     * ID of the test clock that this customer belongs to.
     */
    test_clock?: string | TestHelpers.TestClock | null;
}
export interface DeletedCustomer {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'customer';
    /**
     * Always true for a deleted object
     */
    deleted: true;
}
export declare namespace Customer {
    interface InvoiceSettings {
        /**
         * Default custom fields to be displayed on invoices for this customer.
         */
        custom_fields: Array<InvoiceSettings.CustomField> | null;
        /**
         * ID of a payment method that's attached to the customer, to be used as the customer's default payment method for subscriptions and invoices.
         */
        default_payment_method: string | PaymentMethod | null;
        /**
         * Default footer to be displayed on invoices for this customer.
         */
        footer: string | null;
        /**
         * Default options for invoice PDF rendering for this customer.
         */
        rendering_options: InvoiceSettings.RenderingOptions | null;
    }
    interface Shipping {
        address?: Address;
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
    interface Tax {
        /**
         * Surfaces if automatic tax computation is possible given the current customer location information.
         */
        automatic_tax: Tax.AutomaticTax;
        /**
         * A recent IP address of the customer used for tax reporting and tax location inference.
         */
        ip_address: string | null;
        /**
         * The identified tax location of the customer.
         */
        location: Tax.Location | null;
        /**
         * The tax calculation provider used for location resolution. Defaults to `stripe` when not using a [third-party provider](https://docs.stripe.com/tax/third-party-apps).
         */
        provider: Tax.Provider;
    }
    type TaxExempt = 'exempt' | 'none' | 'reverse';
    namespace InvoiceSettings {
        interface CustomField {
            /**
             * The name of the custom field.
             */
            name: string;
            /**
             * The value of the custom field.
             */
            value: string;
        }
        interface RenderingOptions {
            /**
             * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs.
             */
            amount_tax_display: string | null;
            /**
             * ID of the invoice rendering template to be used for this customer's invoices. If set, the template will be used on all invoices for this customer unless a template is set directly on the invoice.
             */
            template: string | null;
        }
    }
    namespace Tax {
        type AutomaticTax = 'failed' | 'not_collecting' | 'supported' | 'unrecognized_location';
        interface Location {
            /**
             * The identified tax country of the customer.
             */
            country: string;
            /**
             * The data source used to infer the customer's location.
             */
            source: Location.Source;
            /**
             * The identified tax state, county, province, or region of the customer.
             */
            state: string | null;
        }
        type Provider = 'anrok' | 'avalara' | 'sphere' | 'stripe';
        namespace Location {
            type Source = 'billing_address' | 'ip_address' | 'payment_method' | 'shipping_destination';
        }
    }
}
export interface CustomerCreateParams {
    /**
     * The customer's address. Learn about [country-specific requirements for calculating tax](https://docs.stripe.com/invoicing/taxes?dashboard-or-api=dashboard#set-up-customer).
     */
    address?: Emptyable<AddressParam>;
    /**
     * An integer amount in cents (or local equivalent) that represents the customer's current balance, which affect the customer's future invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.
     */
    balance?: number;
    /**
     * The customer's business name. This may be up to *150 characters*.
     */
    business_name?: Emptyable<string>;
    /**
     * Balance information and default balance settings for this customer.
     */
    cash_balance?: CustomerCreateParams.CashBalance;
    /**
     * An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.
     */
    description?: string;
    /**
     * Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to *512 characters*.
     */
    email?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * The customer's full name. This may be up to *150 characters*.
     */
    individual_name?: Emptyable<string>;
    /**
     * The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
     */
    invoice_prefix?: string;
    /**
     * Default invoice settings for this customer.
     */
    invoice_settings?: CustomerCreateParams.InvoiceSettings;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
    /**
     * The customer's full name or business name.
     */
    name?: string;
    /**
     * The sequence to be used on the customer's next invoice. Defaults to 1.
     */
    next_invoice_sequence?: number;
    payment_method?: string;
    /**
     * The customer's phone number.
     */
    phone?: string;
    /**
     * Customer's preferred languages, ordered by preference.
     */
    preferred_locales?: Array<string>;
    /**
     * The customer's shipping information. Appears on invoices emailed to this customer.
     */
    shipping?: Emptyable<CustomerCreateParams.Shipping>;
    source?: string;
    /**
     * Tax details about the customer.
     */
    tax?: CustomerCreateParams.Tax;
    /**
     * The customer's tax exemption. One of `none`, `exempt`, or `reverse`.
     */
    tax_exempt?: Emptyable<CustomerCreateParams.TaxExempt>;
    /**
     * The customer's tax IDs.
     */
    tax_id_data?: Array<CustomerCreateParams.TaxIdDatum>;
    /**
     * ID of the test clock to attach to the customer.
     */
    test_clock?: string;
    validate?: boolean;
}
export declare namespace CustomerCreateParams {
    interface CashBalance {
        /**
         * Settings controlling the behavior of the customer's cash balance,
         * such as reconciliation of funds received.
         */
        settings?: CashBalance.Settings;
    }
    interface InvoiceSettings {
        /**
         * The list of up to 4 default custom fields to be displayed on invoices for this customer. When updating, pass an empty string to remove previously-defined fields.
         */
        custom_fields?: Emptyable<Array<InvoiceSettings.CustomField>>;
        /**
         * ID of a payment method that's attached to the customer, to be used as the customer's default payment method for subscriptions and invoices.
         */
        default_payment_method?: string;
        /**
         * Default footer to be displayed on invoices for this customer.
         */
        footer?: string;
        /**
         * Default options for invoice PDF rendering for this customer.
         */
        rendering_options?: Emptyable<InvoiceSettings.RenderingOptions>;
    }
    interface Shipping {
        /**
         * Customer shipping address.
         */
        address: AddressParam;
        /**
         * Customer name.
         */
        name: string;
        /**
         * Customer phone (including extension).
         */
        phone?: string;
    }
    interface Tax {
        /**
         * A recent IP address of the customer used for tax reporting and tax location inference. Stripe recommends updating the IP address when a new PaymentMethod is attached or the address field on the customer is updated. We recommend against updating this field more frequently since it could result in unexpected tax location/reporting outcomes.
         */
        ip_address?: Emptyable<string>;
        /**
         * A flag that indicates when Stripe should validate the customer tax location. Defaults to `deferred`.
         */
        validate_location?: Tax.ValidateLocation;
    }
    type TaxExempt = 'exempt' | 'none' | 'reverse';
    interface TaxIdDatum {
        /**
         * Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `cd_nif`, `ch_uid`, `ch_vat`, `cl_tin`, `cm_niu`, `cn_tin`, `co_nit`, `cr_tin`, `cv_nif`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `et_tin`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `gn_nif`, `hk_br`, `hr_oib`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kg_tin`, `kh_tin`, `kr_brn`, `kz_bin`, `la_tin`, `li_uid`, `li_vat`, `ma_vat`, `md_vat`, `me_pib`, `mk_vat`, `mr_nif`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `np_pan`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sn_ninea`, `sr_fin`, `sv_nit`, `th_vat`, `tj_tin`, `tr_tin`, `tw_vat`, `tz_vat`, `ua_vat`, `ug_tin`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, `za_vat`, `zm_tin`, or `zw_tin`
         */
        type: TaxIdDatum.Type;
        /**
         * Value of the tax ID.
         */
        value: string;
    }
    namespace CashBalance {
        interface Settings {
            /**
             * Controls how funds transferred by the customer are applied to payment intents and invoices. Valid options are `automatic`, `manual`, or `merchant_default`. For more information about these reconciliation modes, see [Reconciliation](https://docs.stripe.com/payments/customer-balance/reconciliation).
             */
            reconciliation_mode?: Settings.ReconciliationMode;
        }
        namespace Settings {
            type ReconciliationMode = 'automatic' | 'manual' | 'merchant_default';
        }
    }
    namespace InvoiceSettings {
        interface CustomField {
            /**
             * The name of the custom field. This may be up to 40 characters.
             */
            name: string;
            /**
             * The value of the custom field. This may be up to 140 characters.
             */
            value: string;
        }
        interface RenderingOptions {
            /**
             * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs. One of `exclude_tax` or `include_inclusive_tax`. `include_inclusive_tax` will include inclusive tax (and exclude exclusive tax) in invoice PDF amounts. `exclude_tax` will exclude all tax (inclusive and exclusive alike) from invoice PDF amounts.
             */
            amount_tax_display?: Emptyable<RenderingOptions.AmountTaxDisplay>;
            /**
             * ID of the invoice rendering template to use for future invoices.
             */
            template?: string;
        }
        namespace RenderingOptions {
            type AmountTaxDisplay = 'exclude_tax' | 'include_inclusive_tax';
        }
    }
    namespace Tax {
        type ValidateLocation = 'deferred' | 'immediately';
    }
    namespace TaxIdDatum {
        type Type = 'ad_nrt' | 'ae_trn' | 'al_tin' | 'am_tin' | 'ao_tin' | 'ar_cuit' | 'au_abn' | 'au_arn' | 'aw_tin' | 'az_tin' | 'ba_tin' | 'bb_tin' | 'bd_bin' | 'bf_ifu' | 'bg_uic' | 'bh_vat' | 'bj_ifu' | 'bo_tin' | 'br_cnpj' | 'br_cpf' | 'bs_tin' | 'by_tin' | 'ca_bn' | 'ca_gst_hst' | 'ca_pst_bc' | 'ca_pst_mb' | 'ca_pst_sk' | 'ca_qst' | 'cd_nif' | 'ch_uid' | 'ch_vat' | 'cl_tin' | 'cm_niu' | 'cn_tin' | 'co_nit' | 'cr_tin' | 'cv_nif' | 'de_stn' | 'do_rcn' | 'ec_ruc' | 'eg_tin' | 'es_cif' | 'et_tin' | 'eu_oss_vat' | 'eu_vat' | 'gb_vat' | 'ge_vat' | 'gn_nif' | 'hk_br' | 'hr_oib' | 'hu_tin' | 'id_npwp' | 'il_vat' | 'in_gst' | 'is_vat' | 'jp_cn' | 'jp_rn' | 'jp_trn' | 'ke_pin' | 'kg_tin' | 'kh_tin' | 'kr_brn' | 'kz_bin' | 'la_tin' | 'li_uid' | 'li_vat' | 'ma_vat' | 'md_vat' | 'me_pib' | 'mk_vat' | 'mr_nif' | 'mx_rfc' | 'my_frp' | 'my_itn' | 'my_sst' | 'ng_tin' | 'no_vat' | 'no_voec' | 'np_pan' | 'nz_gst' | 'om_vat' | 'pe_ruc' | 'ph_tin' | 'ro_tin' | 'rs_pib' | 'ru_inn' | 'ru_kpp' | 'sa_vat' | 'sg_gst' | 'sg_uen' | 'si_tin' | 'sn_ninea' | 'sr_fin' | 'sv_nit' | 'th_vat' | 'tj_tin' | 'tr_tin' | 'tw_vat' | 'tz_vat' | 'ua_vat' | 'ug_tin' | 'us_ein' | 'uy_ruc' | 'uz_tin' | 'uz_vat' | 've_rif' | 'vn_tin' | 'za_vat' | 'zm_tin' | 'zw_tin';
    }
}
export interface CustomerRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface CustomerUpdateParams {
    /**
     * The customer's address. Learn about [country-specific requirements for calculating tax](https://docs.stripe.com/invoicing/taxes?dashboard-or-api=dashboard#set-up-customer).
     */
    address?: Emptyable<AddressParam>;
    /**
     * An integer amount in cents (or local equivalent) that represents the customer's current balance, which affect the customer's future invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.
     */
    balance?: number;
    /**
     * The customer's business name. This may be up to *150 characters*.
     */
    business_name?: Emptyable<string>;
    /**
     * Balance information and default balance settings for this customer.
     */
    cash_balance?: CustomerUpdateParams.CashBalance;
    /**
     * If you are using payment methods created via the PaymentMethods API, see the [invoice_settings.default_payment_method](https://docs.stripe.com/api/customers/update#update_customer-invoice_settings-default_payment_method) parameter.
     *
     * Provide the ID of a payment source already attached to this customer to make it this customer's default payment source.
     *
     * If you want to add a new payment source and make it the default, see the [source](https://docs.stripe.com/api/customers/update#update_customer-source) property.
     */
    default_source?: string;
    /**
     * An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.
     */
    description?: string;
    /**
     * Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to *512 characters*.
     */
    email?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * The customer's full name. This may be up to *150 characters*.
     */
    individual_name?: Emptyable<string>;
    /**
     * The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
     */
    invoice_prefix?: string;
    /**
     * Default invoice settings for this customer.
     */
    invoice_settings?: CustomerUpdateParams.InvoiceSettings;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
    /**
     * The customer's full name or business name.
     */
    name?: string;
    /**
     * The sequence to be used on the customer's next invoice. Defaults to 1.
     */
    next_invoice_sequence?: number;
    /**
     * The customer's phone number.
     */
    phone?: string;
    /**
     * Customer's preferred languages, ordered by preference.
     */
    preferred_locales?: Array<string>;
    /**
     * The customer's shipping information. Appears on invoices emailed to this customer.
     */
    shipping?: Emptyable<CustomerUpdateParams.Shipping>;
    source?: string;
    /**
     * Tax details about the customer.
     */
    tax?: CustomerUpdateParams.Tax;
    /**
     * The customer's tax exemption. One of `none`, `exempt`, or `reverse`.
     */
    tax_exempt?: Emptyable<CustomerUpdateParams.TaxExempt>;
    validate?: boolean;
}
export declare namespace CustomerUpdateParams {
    interface CashBalance {
        /**
         * Settings controlling the behavior of the customer's cash balance,
         * such as reconciliation of funds received.
         */
        settings?: CashBalance.Settings;
    }
    interface InvoiceSettings {
        /**
         * The list of up to 4 default custom fields to be displayed on invoices for this customer. When updating, pass an empty string to remove previously-defined fields.
         */
        custom_fields?: Emptyable<Array<InvoiceSettings.CustomField>>;
        /**
         * ID of a payment method that's attached to the customer, to be used as the customer's default payment method for subscriptions and invoices.
         */
        default_payment_method?: string;
        /**
         * Default footer to be displayed on invoices for this customer.
         */
        footer?: string;
        /**
         * Default options for invoice PDF rendering for this customer.
         */
        rendering_options?: Emptyable<InvoiceSettings.RenderingOptions>;
    }
    interface Shipping {
        /**
         * Customer shipping address.
         */
        address: AddressParam;
        /**
         * Customer name.
         */
        name: string;
        /**
         * Customer phone (including extension).
         */
        phone?: string;
    }
    interface Tax {
        /**
         * A recent IP address of the customer used for tax reporting and tax location inference. Stripe recommends updating the IP address when a new PaymentMethod is attached or the address field on the customer is updated. We recommend against updating this field more frequently since it could result in unexpected tax location/reporting outcomes.
         */
        ip_address?: Emptyable<string>;
        /**
         * A flag that indicates when Stripe should validate the customer tax location. Defaults to `auto`.
         */
        validate_location?: Tax.ValidateLocation;
    }
    type TaxExempt = 'exempt' | 'none' | 'reverse';
    namespace CashBalance {
        interface Settings {
            /**
             * Controls how funds transferred by the customer are applied to payment intents and invoices. Valid options are `automatic`, `manual`, or `merchant_default`. For more information about these reconciliation modes, see [Reconciliation](https://docs.stripe.com/payments/customer-balance/reconciliation).
             */
            reconciliation_mode?: Settings.ReconciliationMode;
        }
        namespace Settings {
            type ReconciliationMode = 'automatic' | 'manual' | 'merchant_default';
        }
    }
    namespace InvoiceSettings {
        interface CustomField {
            /**
             * The name of the custom field. This may be up to 40 characters.
             */
            name: string;
            /**
             * The value of the custom field. This may be up to 140 characters.
             */
            value: string;
        }
        interface RenderingOptions {
            /**
             * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs. One of `exclude_tax` or `include_inclusive_tax`. `include_inclusive_tax` will include inclusive tax (and exclude exclusive tax) in invoice PDF amounts. `exclude_tax` will exclude all tax (inclusive and exclusive alike) from invoice PDF amounts.
             */
            amount_tax_display?: Emptyable<RenderingOptions.AmountTaxDisplay>;
            /**
             * ID of the invoice rendering template to use for future invoices.
             */
            template?: string;
        }
        namespace RenderingOptions {
            type AmountTaxDisplay = 'exclude_tax' | 'include_inclusive_tax';
        }
    }
    namespace Tax {
        type ValidateLocation = 'auto' | 'deferred' | 'immediately';
    }
}
export interface CustomerListParams extends PaginationParams {
    /**
     * Only return customers that were created during the given date interval.
     */
    created?: RangeQueryParam | number;
    /**
     * A case-sensitive filter on the list based on the customer's `email` field. The value must be a string.
     */
    email?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Provides a list of customers that are associated with the specified test clock. The response will not include customers with test clocks if this parameter is not set.
     */
    test_clock?: string;
}
export interface CustomerDeleteParams {
}
export interface CustomerCreateBalanceTransactionParams {
    /**
     * The integer amount in **cents (or local equivalent)** to apply to the customer's credit balance.
     */
    amount: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). Specifies the [`invoice_credit_balance`](https://docs.stripe.com/api/customers/object#customer_object-invoice_credit_balance) that this transaction will apply to. If the customer's `currency` is not set, it will be updated to this value.
     */
    currency: string;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
}
export interface CustomerCreateFundingInstructionsParams {
    /**
     * Additional parameters for `bank_transfer` funding types
     */
    bank_transfer: CustomerCreateFundingInstructionsParams.BankTransfer;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * The `funding_type` to get the instructions for.
     */
    funding_type: 'bank_transfer';
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export declare namespace CustomerCreateFundingInstructionsParams {
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
        requested_address_types?: Array<BankTransfer.RequestedAddressType>;
        /**
         * The type of the `bank_transfer`
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
        type RequestedAddressType = 'iban' | 'sort_code' | 'spei' | 'zengin';
        type Type = 'eu_bank_transfer' | 'gb_bank_transfer' | 'jp_bank_transfer' | 'mx_bank_transfer' | 'us_bank_transfer';
    }
}
export interface CustomerCreateSourceParams {
    /**
     * Please refer to full [documentation](https://api.stripe.com) instead.
     */
    source: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;
    validate?: boolean;
}
export interface CustomerCreateTaxIdParams {
    /**
     * Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `cd_nif`, `ch_uid`, `ch_vat`, `cl_tin`, `cm_niu`, `cn_tin`, `co_nit`, `cr_tin`, `cv_nif`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `et_tin`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `gn_nif`, `hk_br`, `hr_oib`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kg_tin`, `kh_tin`, `kr_brn`, `kz_bin`, `la_tin`, `li_uid`, `li_vat`, `ma_vat`, `md_vat`, `me_pib`, `mk_vat`, `mr_nif`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `np_pan`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sn_ninea`, `sr_fin`, `sv_nit`, `th_vat`, `tj_tin`, `tr_tin`, `tw_vat`, `tz_vat`, `ua_vat`, `ug_tin`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, `za_vat`, `zm_tin`, or `zw_tin`
     */
    type: CustomerCreateTaxIdParams.Type;
    /**
     * Value of the tax ID.
     */
    value: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export declare namespace CustomerCreateTaxIdParams {
    type Type = 'ad_nrt' | 'ae_trn' | 'al_tin' | 'am_tin' | 'ao_tin' | 'ar_cuit' | 'au_abn' | 'au_arn' | 'aw_tin' | 'az_tin' | 'ba_tin' | 'bb_tin' | 'bd_bin' | 'bf_ifu' | 'bg_uic' | 'bh_vat' | 'bj_ifu' | 'bo_tin' | 'br_cnpj' | 'br_cpf' | 'bs_tin' | 'by_tin' | 'ca_bn' | 'ca_gst_hst' | 'ca_pst_bc' | 'ca_pst_mb' | 'ca_pst_sk' | 'ca_qst' | 'cd_nif' | 'ch_uid' | 'ch_vat' | 'cl_tin' | 'cm_niu' | 'cn_tin' | 'co_nit' | 'cr_tin' | 'cv_nif' | 'de_stn' | 'do_rcn' | 'ec_ruc' | 'eg_tin' | 'es_cif' | 'et_tin' | 'eu_oss_vat' | 'eu_vat' | 'gb_vat' | 'ge_vat' | 'gn_nif' | 'hk_br' | 'hr_oib' | 'hu_tin' | 'id_npwp' | 'il_vat' | 'in_gst' | 'is_vat' | 'jp_cn' | 'jp_rn' | 'jp_trn' | 'ke_pin' | 'kg_tin' | 'kh_tin' | 'kr_brn' | 'kz_bin' | 'la_tin' | 'li_uid' | 'li_vat' | 'ma_vat' | 'md_vat' | 'me_pib' | 'mk_vat' | 'mr_nif' | 'mx_rfc' | 'my_frp' | 'my_itn' | 'my_sst' | 'ng_tin' | 'no_vat' | 'no_voec' | 'np_pan' | 'nz_gst' | 'om_vat' | 'pe_ruc' | 'ph_tin' | 'ro_tin' | 'rs_pib' | 'ru_inn' | 'ru_kpp' | 'sa_vat' | 'sg_gst' | 'sg_uen' | 'si_tin' | 'sn_ninea' | 'sr_fin' | 'sv_nit' | 'th_vat' | 'tj_tin' | 'tr_tin' | 'tw_vat' | 'tz_vat' | 'ua_vat' | 'ug_tin' | 'us_ein' | 'uy_ruc' | 'uz_tin' | 'uz_vat' | 've_rif' | 'vn_tin' | 'za_vat' | 'zm_tin' | 'zw_tin';
}
export interface CustomerDeleteDiscountParams {
}
export interface CustomerDeleteSourceParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface CustomerDeleteTaxIdParams {
}
export interface CustomerListBalanceTransactionsParams extends PaginationParams {
    /**
     * Only return customer balance transactions that were created during the given date interval.
     */
    created?: RangeQueryParam | number;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Only return transactions that are related to the specified invoice.
     */
    invoice?: string;
}
export interface CustomerListCashBalanceTransactionsParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface CustomerListPaymentMethodsParams extends PaginationParams {
    /**
     * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow.
     */
    allow_redisplay?: CustomerListPaymentMethodsParams.AllowRedisplay;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * An optional filter on the list, based on the object `type` field. Without the filter, the list includes all current and future payment method types. If your integration expects only one type of payment method in the response, make sure to provide a type value in the request.
     */
    type?: CustomerListPaymentMethodsParams.Type;
}
export declare namespace CustomerListPaymentMethodsParams {
    type AllowRedisplay = 'always' | 'limited' | 'unspecified';
    type Type = 'acss_debit' | 'affirm' | 'afterpay_clearpay' | 'alipay' | 'alma' | 'amazon_pay' | 'au_becs_debit' | 'bacs_debit' | 'bancontact' | 'billie' | 'blik' | 'boleto' | 'card' | 'cashapp' | 'crypto' | 'custom' | 'customer_balance' | 'eps' | 'fpx' | 'giropay' | 'grabpay' | 'ideal' | 'kakao_pay' | 'klarna' | 'konbini' | 'kr_card' | 'link' | 'mb_way' | 'mobilepay' | 'multibanco' | 'naver_pay' | 'nz_bank_account' | 'oxxo' | 'p24' | 'pay_by_bank' | 'payco' | 'paynow' | 'paypal' | 'payto' | 'pix' | 'promptpay' | 'revolut_pay' | 'samsung_pay' | 'satispay' | 'sepa_debit' | 'sofort' | 'swish' | 'twint' | 'us_bank_account' | 'wechat_pay' | 'zip';
}
export interface CustomerListSourcesParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Filter sources according to a particular object type.
     */
    object?: string;
}
export interface CustomerListTaxIdsParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface CustomerRetrieveBalanceTransactionParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface CustomerRetrieveCashBalanceParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface CustomerRetrieveCashBalanceTransactionParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface CustomerRetrievePaymentMethodParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface CustomerRetrieveSourceParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface CustomerRetrieveTaxIdParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface CustomerSearchParams {
    /**
     * The search query string. See [search query language](https://docs.stripe.com/search#search-query-language) and the list of supported [query fields for customers](https://docs.stripe.com/search#query-fields-for-customers).
     */
    query: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;
    /**
     * A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
     */
    page?: string;
}
export interface CustomerUpdateBalanceTransactionParams {
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
}
export interface CustomerUpdateCashBalanceParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * A hash of settings for this cash balance.
     */
    settings?: CustomerUpdateCashBalanceParams.Settings;
}
export declare namespace CustomerUpdateCashBalanceParams {
    interface Settings {
        /**
         * Controls how funds transferred by the customer are applied to payment intents and invoices. Valid options are `automatic`, `manual`, or `merchant_default`. For more information about these reconciliation modes, see [Reconciliation](https://docs.stripe.com/payments/customer-balance/reconciliation).
         */
        reconciliation_mode?: Settings.ReconciliationMode;
    }
    namespace Settings {
        type ReconciliationMode = 'automatic' | 'manual' | 'merchant_default';
    }
}
export interface CustomerUpdateSourceParams {
    /**
     * The name of the person or business that owns the bank account.
     */
    account_holder_name?: string;
    /**
     * The type of entity that holds the account. This can be either `individual` or `company`.
     */
    account_holder_type?: CustomerUpdateSourceParams.AccountHolderType;
    /**
     * City/District/Suburb/Town/Village.
     */
    address_city?: string;
    /**
     * Billing address country, if provided when creating card.
     */
    address_country?: string;
    /**
     * Address line 1 (Street address/PO Box/Company name).
     */
    address_line1?: string;
    /**
     * Address line 2 (Apartment/Suite/Unit/Building).
     */
    address_line2?: string;
    /**
     * State/County/Province/Region.
     */
    address_state?: string;
    /**
     * ZIP or postal code.
     */
    address_zip?: string;
    /**
     * Two digit number representing the card's expiration month.
     */
    exp_month?: string;
    /**
     * Four digit number representing the card's expiration year.
     */
    exp_year?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
    /**
     * Cardholder name.
     */
    name?: string;
    owner?: CustomerUpdateSourceParams.Owner;
}
export declare namespace CustomerUpdateSourceParams {
    type AccountHolderType = 'company' | 'individual';
    interface Owner {
        /**
         * Owner's address.
         */
        address?: AddressParam;
        /**
         * Owner's email address.
         */
        email?: string;
        /**
         * Owner's full name.
         */
        name?: string;
        /**
         * Owner's phone number.
         */
        phone?: string;
    }
}
export interface CustomerVerifySourceParams {
    /**
     * Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.
     */
    amounts?: Array<number>;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
