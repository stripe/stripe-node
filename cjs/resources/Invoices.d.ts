import { StripeResource } from '../StripeResource.js';
import { InvoiceLineItem } from './InvoiceLineItems.js';
import { Discount, DeletedDiscount } from './Discounts.js';
import { TaxId, DeletedTaxId } from './TaxIds.js';
import { Application, DeletedApplication } from './Applications.js';
import { Customer, DeletedCustomer } from './Customers.js';
import { PaymentMethod } from './PaymentMethods.js';
import { CustomerSource } from './CustomerSources.js';
import { TaxRate } from './TaxRates.js';
import { Account } from './Accounts.js';
import { InvoicePayment } from './InvoicePayments.js';
import { PaymentIntent } from './PaymentIntents.js';
import { SetupIntent } from './SetupIntents.js';
import { Subscription } from './Subscriptions.js';
import { ShippingRate } from './ShippingRates.js';
import * as TestHelpers from './TestHelpers/index.js';
import * as Billing from './Billing/index.js';
import { Emptyable, MetadataParam, AddressParam, PaginationParams, RangeQueryParam, Address, Metadata } from '../shared.js';
import { RequestOptions, Response, ApiListPromise, ApiList, ApiSearchResultPromise } from '../lib.js';
export declare class InvoiceResource extends StripeResource {
    /**
     * Permanently deletes a one-off invoice draft. This cannot be undone. Attempts to delete invoices that are no longer in a draft state will fail; once an invoice has been finalized or if an invoice is for a subscription, it must be [voided](https://docs.stripe.com/api#void_invoice).
     */
    del(id: string, params?: InvoiceDeleteParams, options?: RequestOptions): Promise<Response<DeletedInvoice>>;
    del(id: string, options?: RequestOptions): Promise<Response<DeletedInvoice>>;
    /**
     * Retrieves the invoice with the given ID.
     */
    retrieve(id: string, params?: InvoiceRetrieveParams, options?: RequestOptions): Promise<Response<Invoice>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<Invoice>>;
    /**
     * Draft invoices are fully editable. Once an invoice is [finalized](https://docs.stripe.com/docs/billing/invoices/workflow#finalized),
     * monetary values, as well as collection_method, become uneditable.
     *
     * If you would like to stop the Stripe Billing engine from automatically finalizing, reattempting payments on,
     * sending reminders for, or [automatically reconciling](https://docs.stripe.com/docs/billing/invoices/reconciliation) invoices, pass
     * auto_advance=false.
     */
    update(id: string, params?: InvoiceUpdateParams, options?: RequestOptions): Promise<Response<Invoice>>;
    /**
     * You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.
     */
    list(params?: InvoiceListParams, options?: RequestOptions): ApiListPromise<Invoice>;
    list(options?: RequestOptions): ApiListPromise<Invoice>;
    /**
     * This endpoint creates a draft invoice for a given customer. The invoice remains a draft until you [finalize the invoice, which allows you to [pay](#pay_invoice) or <a href="#send_invoice">send](https://docs.stripe.com/api#finalize_invoice) the invoice to your customers.
     */
    create(params?: InvoiceCreateParams, options?: RequestOptions): Promise<Response<Invoice>>;
    create(options?: RequestOptions): Promise<Response<Invoice>>;
    /**
     * Search for invoices you've previously created using Stripe's [Search Query Language](https://docs.stripe.com/docs/search#search-query-language).
     * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
     * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
     * to an hour behind during outages. Search functionality is not available to merchants in India.
     */
    search(params: InvoiceSearchParams, options?: RequestOptions): ApiSearchResultPromise<Invoice>;
    /**
     * Adds multiple line items to an invoice. This is only possible when an invoice is still a draft.
     */
    addLines(id: string, params: InvoiceAddLinesParams, options?: RequestOptions): Promise<Response<Invoice>>;
    /**
     * Attaches a PaymentIntent or an Out of Band Payment to the invoice, adding it to the list of payments.
     *
     * For the PaymentIntent, when the PaymentIntent's status changes to succeeded, the payment is credited
     * to the invoice, increasing its amount_paid. When the invoice is fully paid, the
     * invoice's status becomes paid.
     *
     * If the PaymentIntent's status is already succeeded when it's attached, it's
     * credited to the invoice immediately.
     *
     * See: [Partial payments](https://docs.stripe.com/docs/invoicing/partial-payments) to learn more.
     */
    attachPayment(id: string, params?: InvoiceAttachPaymentParams, options?: RequestOptions): Promise<Response<Invoice>>;
    attachPayment(id: string, options?: RequestOptions): Promise<Response<Invoice>>;
    /**
     * Stripe automatically finalizes drafts before sending and attempting payment on invoices. However, if you'd like to finalize a draft invoice manually, you can do so using this method.
     */
    finalizeInvoice(id: string, params?: InvoiceFinalizeInvoiceParams, options?: RequestOptions): Promise<Response<Invoice>>;
    finalizeInvoice(id: string, options?: RequestOptions): Promise<Response<Invoice>>;
    /**
     * Marking an invoice as uncollectible is useful for keeping track of bad debts that can be written off for accounting purposes.
     */
    markUncollectible(id: string, params?: InvoiceMarkUncollectibleParams, options?: RequestOptions): Promise<Response<Invoice>>;
    markUncollectible(id: string, options?: RequestOptions): Promise<Response<Invoice>>;
    /**
     * Stripe automatically creates and then attempts to collect payment on invoices for customers on subscriptions according to your [subscriptions settings](https://dashboard.stripe.com/account/billing/automatic). However, if you'd like to attempt payment on an invoice out of the normal collection schedule or for some other reason, you can do so.
     */
    pay(id: string, params?: InvoicePayParams, options?: RequestOptions): Promise<Response<Invoice>>;
    pay(id: string, options?: RequestOptions): Promise<Response<Invoice>>;
    /**
     * Removes multiple line items from an invoice. This is only possible when an invoice is still a draft.
     */
    removeLines(id: string, params: InvoiceRemoveLinesParams, options?: RequestOptions): Promise<Response<Invoice>>;
    /**
     * Stripe will automatically send invoices to customers according to your [subscriptions settings](https://dashboard.stripe.com/account/billing/automatic). However, if you'd like to manually send an invoice to your customer out of the normal schedule, you can do so. When sending invoices that have already been paid, there will be no reference to the payment in the email.
     *
     * Requests made in test-mode result in no emails being sent, despite sending an invoice.sent event.
     */
    sendInvoice(id: string, params?: InvoiceSendInvoiceParams, options?: RequestOptions): Promise<Response<Invoice>>;
    sendInvoice(id: string, options?: RequestOptions): Promise<Response<Invoice>>;
    /**
     * Updates multiple line items on an invoice. This is only possible when an invoice is still a draft.
     */
    updateLines(id: string, params: InvoiceUpdateLinesParams, options?: RequestOptions): Promise<Response<Invoice>>;
    /**
     * Mark a finalized invoice as void. This cannot be undone. Voiding an invoice is similar to [deletion](https://docs.stripe.com/api#delete_invoice), however it only applies to finalized invoices and maintains a papertrail where the invoice can still be found.
     *
     * Consult with local regulations to determine whether and how an invoice might be amended, canceled, or voided in the jurisdiction you're doing business in. You might need to [issue another invoice or <a href="#create_credit_note">credit note](https://docs.stripe.com/api#create_invoice) instead. Stripe recommends that you consult with your legal counsel for advice specific to your business.
     */
    voidInvoice(id: string, params?: InvoiceVoidInvoiceParams, options?: RequestOptions): Promise<Response<Invoice>>;
    voidInvoice(id: string, options?: RequestOptions): Promise<Response<Invoice>>;
    /**
     * At any time, you can preview the upcoming invoice for a subscription or subscription schedule. This will show you all the charges that are pending, including subscription renewal charges, invoice item charges, etc. It will also show you any discounts that are applicable to the invoice.
     *
     * You can also preview the effects of creating or updating a subscription or subscription schedule, including a preview of any prorations that will take place. To ensure that the actual proration is calculated exactly the same as the previewed proration, you should pass the subscription_details.proration_date parameter when doing the actual subscription update.
     *
     * The recommended way to get only the prorations being previewed on the invoice is to consider line items where parent.subscription_item_details.proration is true.
     *
     * Note that when you are viewing an upcoming invoice, you are simply viewing a preview – the invoice has not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or update pending invoice items, or update the customer's discount.
     *
     * Note: Currency conversion calculations use the latest exchange rates. Exchange rates may vary between the time of the preview and the time of the actual invoice creation. [Learn more](https://docs.stripe.com/currencies/conversions)
     */
    createPreview(params?: InvoiceCreatePreviewParams, options?: RequestOptions): Promise<Response<Invoice>>;
    createPreview(options?: RequestOptions): Promise<Response<Invoice>>;
    /**
     * When retrieving an invoice, you'll get a lines property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
     */
    listLineItems(id: string, params?: InvoiceListLineItemsParams, options?: RequestOptions): ApiListPromise<InvoiceLineItem>;
    listLineItems(id: string, options?: RequestOptions): ApiListPromise<InvoiceLineItem>;
    /**
     * Updates an invoice's line item. Some fields, such as tax_amounts, only live on the invoice line item,
     * so they can only be updated through this endpoint. Other fields, such as amount, live on both the invoice
     * item and the invoice line item, so updates on this endpoint will propagate to the invoice item as well.
     * Updating an invoice's line item is only possible before the invoice is finalized.
     */
    updateLineItem(invoiceId: string, id: string, params?: InvoiceUpdateLineItemParams, options?: RequestOptions): Promise<Response<InvoiceLineItem>>;
    updateLineItem(invoiceId: string, id: string, options?: RequestOptions): Promise<Response<InvoiceLineItem>>;
}
export interface Invoice {
    /**
     * Unique identifier for the object. For preview invoices created using the [create preview](https://stripe.com/docs/api/invoices/create_preview) endpoint, this id will be prefixed with `upcoming_in`.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'invoice';
    /**
     * The country of the business associated with this invoice, most often the business creating the invoice.
     */
    account_country: string | null;
    /**
     * The public name of the business associated with this invoice, most often the business creating the invoice.
     */
    account_name: string | null;
    /**
     * The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
     */
    account_tax_ids: Array<string | TaxId | DeletedTaxId> | null;
    /**
     * Final amount due at this time for this invoice. If the invoice's total is smaller than the minimum charge amount, for example, or if there is account credit that can be applied to the invoice, the `amount_due` may be 0. If there is a positive `starting_balance` for the invoice (the customer owes money), the `amount_due` will also take that into account. The charge that gets generated for the invoice will be for the amount specified in `amount_due`.
     */
    amount_due: number;
    /**
     * Amount that was overpaid on the invoice. The amount overpaid is credited to the customer's credit balance.
     */
    amount_overpaid: number;
    /**
     * The amount, in cents (or local equivalent), that was paid.
     */
    amount_paid: number;
    /**
     * The difference between amount_due and amount_paid, in cents (or local equivalent).
     */
    amount_remaining: number;
    /**
     * This is the sum of all the shipping amounts.
     */
    amount_shipping: number;
    /**
     * ID of the Connect Application that created the invoice.
     */
    application: string | Application | DeletedApplication | null;
    /**
     * Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. Any payment attempt counts as the first attempt, and subsequently only automatic retries increment the attempt count. In other words, manual payment attempts after the first attempt do not affect the retry schedule. If a failure is returned with a non-retryable return code, the invoice can no longer be retried unless a new payment method is obtained. Retries will continue to be scheduled, and attempt_count will continue to increment, but retries will only be executed if a new payment method is obtained.
     */
    attempt_count: number;
    /**
     * Whether an attempt has been made to pay the invoice. An invoice is not attempted until 1 hour after the `invoice.created` webhook, for example, so you might not want to display that invoice as unpaid to your users.
     */
    attempted: boolean;
    /**
     * Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. If `false`, the invoice's state doesn't automatically advance without an explicit action.
     */
    auto_advance?: boolean;
    automatic_tax: Invoice.AutomaticTax;
    /**
     * The time when this invoice is currently scheduled to be automatically finalized. The field will be `null` if the invoice is not scheduled to finalize in the future. If the invoice is not in the draft state, this field will always be `null` - see `finalized_at` for the time when an already-finalized invoice was finalized.
     */
    automatically_finalizes_at: number | null;
    /**
     * Indicates the reason why the invoice was created.
     *
     * * `manual`: Unrelated to a subscription, for example, created via the invoice editor.
     * * `subscription`: No longer in use. Applies to subscriptions from before May 2018 where no distinction was made between updates, cycles, and thresholds.
     * * `subscription_create`: A new subscription was created.
     * * `subscription_cycle`: A subscription advanced into a new period.
     * * `subscription_threshold`: A subscription reached a billing threshold.
     * * `subscription_update`: A subscription was updated.
     * * `upcoming`: Reserved for upcoming invoices created through the Create Preview Invoice API or when an `invoice.upcoming` event is generated for an upcoming invoice on a subscription.
     */
    billing_reason: Invoice.BillingReason | null;
    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions.
     */
    collection_method: Invoice.CollectionMethod;
    /**
     * The confirmation secret associated with this invoice. Currently, this contains the client_secret of the PaymentIntent that Stripe creates during invoice finalization.
     */
    confirmation_secret?: Invoice.ConfirmationSecret | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * Custom fields displayed on the invoice.
     */
    custom_fields: Array<Invoice.CustomField> | null;
    /**
     * The ID of the customer to bill.
     */
    customer: string | Customer | DeletedCustomer | null;
    /**
     * The ID of the account representing the customer to bill.
     */
    customer_account: string | null;
    /**
     * The customer's address. Until the invoice is finalized, this field will equal `customer.address`. Once the invoice is finalized, this field will no longer be updated.
     */
    customer_address: Address | null;
    /**
     * The customer's email. Until the invoice is finalized, this field will equal `customer.email`. Once the invoice is finalized, this field will no longer be updated.
     */
    customer_email: string | null;
    /**
     * The customer's name. Until the invoice is finalized, this field will equal `customer.name`. Once the invoice is finalized, this field will no longer be updated.
     */
    customer_name: string | null;
    /**
     * The customer's phone number. Until the invoice is finalized, this field will equal `customer.phone`. Once the invoice is finalized, this field will no longer be updated.
     */
    customer_phone: string | null;
    /**
     * The customer's shipping information. Until the invoice is finalized, this field will equal `customer.shipping`. Once the invoice is finalized, this field will no longer be updated.
     */
    customer_shipping: Invoice.CustomerShipping | null;
    /**
     * The customer's tax exempt status. Until the invoice is finalized, this field will equal `customer.tax_exempt`. Once the invoice is finalized, this field will no longer be updated.
     */
    customer_tax_exempt: Invoice.CustomerTaxExempt | null;
    /**
     * The customer's tax IDs. Until the invoice is finalized, this field will contain the same tax IDs as `customer.tax_ids`. Once the invoice is finalized, this field will no longer be updated.
     */
    customer_tax_ids?: Array<Invoice.CustomerTaxId> | null;
    /**
     * ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings.
     */
    default_payment_method: string | PaymentMethod | null;
    /**
     * ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source.
     */
    default_source: string | CustomerSource | null;
    /**
     * The tax rates applied to this invoice, if any.
     */
    default_tax_rates: Array<TaxRate>;
    /**
     * Always true for a deleted object
     */
    deleted?: void;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
     */
    description: string | null;
    /**
     * The discounts applied to the invoice. Line item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
     */
    discounts: Array<string | Discount | DeletedDiscount>;
    /**
     * The date on which payment for this invoice is due. This value will be `null` for invoices where `collection_method=charge_automatically`.
     */
    due_date: number | null;
    /**
     * The date when this invoice is in effect. Same as `finalized_at` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the invoice PDF and receipt.
     */
    effective_at: number | null;
    /**
     * Ending customer balance after the invoice is finalized. Invoices are finalized approximately an hour after successful webhook delivery or when payment collection is attempted for the invoice. If the invoice has not been finalized yet, this will be null.
     */
    ending_balance: number | null;
    /**
     * Footer displayed on the invoice.
     */
    footer: string | null;
    /**
     * Details of the invoice that was cloned. See the [revision documentation](https://docs.stripe.com/invoicing/invoice-revisions) for more details.
     */
    from_invoice: Invoice.FromInvoice | null;
    /**
     * The URL for the hosted invoice page, which allows customers to view and pay an invoice. If the invoice has not been finalized yet, this will be null.
     */
    hosted_invoice_url?: string | null;
    /**
     * The link to download the PDF for the invoice. If the invoice has not been finalized yet, this will be null.
     */
    invoice_pdf?: string | null;
    issuer: Invoice.Issuer;
    /**
     * The error encountered during the previous attempt to finalize the invoice. This field is cleared when the invoice is successfully finalized.
     */
    last_finalization_error: Invoice.LastFinalizationError | null;
    /**
     * The ID of the most recent non-draft revision of this invoice
     */
    latest_revision: string | Invoice | null;
    /**
     * The individual line items that make up the invoice. `lines` is sorted as follows: (1) pending invoice items (including prorations) in reverse chronological order, (2) subscription items in reverse chronological order, and (3) invoice items added after invoice creation in chronological order.
     */
    lines: ApiList<InvoiceLineItem>;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Metadata | null;
    /**
     * The time at which payment will next be attempted. This value will be `null` for invoices where `collection_method=send_invoice`.
     */
    next_payment_attempt: number | null;
    /**
     * A unique, identifying string that appears on emails sent to the customer for this invoice. This starts with the customer's unique invoice_prefix if it is specified.
     */
    number: string | null;
    /**
     * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://docs.stripe.com/billing/invoices/connect) documentation for details.
     */
    on_behalf_of: string | Account | null;
    /**
     * The parent that generated this invoice
     */
    parent: Invoice.Parent | null;
    payment_settings: Invoice.PaymentSettings;
    /**
     * Payments for this invoice
     */
    payments?: ApiList<InvoicePayment>;
    /**
     * End of the usage period during which invoice items were added to this invoice. This looks back one period for a subscription invoice. Use the [line item period](https://docs.stripe.com/api/invoices/line_item#invoice_line_item_object-period) to get the service period for each price.
     */
    period_end: number;
    /**
     * Start of the usage period during which invoice items were added to this invoice. This looks back one period for a subscription invoice. Use the [line item period](https://docs.stripe.com/api/invoices/line_item#invoice_line_item_object-period) to get the service period for each price.
     */
    period_start: number;
    /**
     * Total amount of all post-payment credit notes issued for this invoice.
     */
    post_payment_credit_notes_amount: number;
    /**
     * Total amount of all pre-payment credit notes issued for this invoice.
     */
    pre_payment_credit_notes_amount: number;
    /**
     * This is the transaction number that appears on email receipts sent for this invoice.
     */
    receipt_number: string | null;
    /**
     * The rendering-related settings that control how the invoice is displayed on customer-facing surfaces such as PDF and Hosted Invoice Page.
     */
    rendering: Invoice.Rendering | null;
    /**
     * The details of the cost of shipping, including the ShippingRate applied on the invoice.
     */
    shipping_cost: Invoice.ShippingCost | null;
    /**
     * Shipping details for the invoice. The Invoice PDF will use the `shipping_details` value if it is set, otherwise the PDF will render the shipping address from the customer.
     */
    shipping_details: Invoice.ShippingDetails | null;
    /**
     * Starting customer balance before the invoice is finalized. If the invoice has not been finalized yet, this will be the current customer balance. For revision invoices, this also includes any customer balance that was applied to the original invoice.
     */
    starting_balance: number;
    /**
     * Extra information about an invoice for the customer's credit card statement.
     */
    statement_descriptor: string | null;
    /**
     * The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://docs.stripe.com/billing/invoices/workflow#workflow-overview)
     */
    status: Invoice.Status | null;
    status_transitions: Invoice.StatusTransitions;
    /**
     * Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. Item discounts are already incorporated
     */
    subtotal: number;
    /**
     * The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. Item discounts are already incorporated
     */
    subtotal_excluding_tax: number | null;
    /**
     * ID of the test clock this invoice belongs to.
     */
    test_clock: string | TestHelpers.TestClock | null;
    threshold_reason?: Invoice.ThresholdReason;
    /**
     * Total after discounts and taxes.
     */
    total: number;
    /**
     * The aggregate amounts calculated per discount across all line items.
     */
    total_discount_amounts: Array<Invoice.TotalDiscountAmount> | null;
    /**
     * The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax.
     */
    total_excluding_tax: number | null;
    /**
     * Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. This is a combined list of total_pretax_credit_amounts across all invoice line items.
     */
    total_pretax_credit_amounts: Array<Invoice.TotalPretaxCreditAmount> | null;
    /**
     * The aggregate tax information of all line items.
     */
    total_taxes: Array<Invoice.TotalTax> | null;
    /**
     * Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://docs.stripe.com/billing/webhooks#understand). This field tracks the time when webhooks for this invoice were successfully delivered. If the invoice had no webhooks to deliver, this will be set while the invoice is being created.
     */
    webhooks_delivered_at: number | null;
}
export interface DeletedInvoice {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'invoice';
    /**
     * Always true for a deleted object
     */
    deleted: true;
}
export declare namespace Invoice {
    interface AutomaticTax {
        /**
         * If Stripe disabled automatic tax, this enum describes why.
         */
        disabled_reason: AutomaticTax.DisabledReason | null;
        /**
         * Whether Stripe automatically computes tax on this invoice. Note that incompatible invoice items (invoice items with manually specified [tax rates](https://docs.stripe.com/api/tax_rates), negative amounts, or `tax_behavior=unspecified`) cannot be added to automatic tax invoices.
         */
        enabled: boolean;
        /**
         * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
         */
        liability: AutomaticTax.Liability | null;
        /**
         * The tax provider powering automatic tax.
         */
        provider: string | null;
        /**
         * The status of the most recent automated tax calculation for this invoice.
         */
        status: AutomaticTax.Status | null;
    }
    type BillingReason = 'automatic_pending_invoice_item_invoice' | 'manual' | 'quote_accept' | 'subscription' | 'subscription_create' | 'subscription_cycle' | 'subscription_threshold' | 'subscription_update' | 'upcoming';
    type CollectionMethod = 'charge_automatically' | 'send_invoice';
    interface ConfirmationSecret {
        /**
         * The client_secret of the payment that Stripe creates for the invoice after finalization.
         */
        client_secret: string;
        /**
         * The type of client_secret. Currently this is always payment_intent, referencing the default payment_intent that Stripe creates during invoice finalization
         */
        type: string;
    }
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
    interface CustomerShipping {
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
    type CustomerTaxExempt = 'exempt' | 'none' | 'reverse';
    interface CustomerTaxId {
        /**
         * The type of the tax ID, one of `ad_nrt`, `ar_cuit`, `eu_vat`, `bo_tin`, `br_cnpj`, `br_cpf`, `cn_tin`, `co_nit`, `cr_tin`, `do_rcn`, `ec_ruc`, `eu_oss_vat`, `hr_oib`, `pe_ruc`, `ro_tin`, `rs_pib`, `sv_nit`, `uy_ruc`, `ve_rif`, `vn_tin`, `gb_vat`, `nz_gst`, `au_abn`, `au_arn`, `in_gst`, `no_vat`, `no_voec`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `li_uid`, `li_vat`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, `il_vat`, `ge_vat`, `ua_vat`, `is_vat`, `bg_uic`, `hu_tin`, `si_tin`, `ke_pin`, `tr_tin`, `eg_tin`, `ph_tin`, `al_tin`, `bh_vat`, `kz_bin`, `ng_tin`, `om_vat`, `de_stn`, `ch_uid`, `tz_vat`, `uz_vat`, `uz_tin`, `md_vat`, `ma_vat`, `by_tin`, `ao_tin`, `bs_tin`, `bb_tin`, `cd_nif`, `mr_nif`, `me_pib`, `zw_tin`, `ba_tin`, `gn_nif`, `mk_vat`, `sr_fin`, `sn_ninea`, `am_tin`, `np_pan`, `tj_tin`, `ug_tin`, `zm_tin`, `kh_tin`, `aw_tin`, `az_tin`, `bd_bin`, `bj_ifu`, `et_tin`, `kg_tin`, `la_tin`, `cm_niu`, `cv_nif`, `bf_ifu`, or `unknown`
         */
        type: CustomerTaxId.Type;
        /**
         * The value of the tax ID.
         */
        value: string | null;
    }
    interface FromInvoice {
        /**
         * The relation between this invoice and the cloned invoice
         */
        action: string;
        /**
         * The invoice that was cloned.
         */
        invoice: string | Invoice;
    }
    interface Issuer {
        /**
         * The connected account being referenced when `type` is `account`.
         */
        account?: string | Account;
        /**
         * Type of the account referenced.
         */
        type: Issuer.Type;
    }
    interface LastFinalizationError {
        /**
         * For card errors resulting from a card issuer decline, a short string indicating [how to proceed with an error](https://docs.stripe.com/declines#retrying-issuer-declines) if they provide one.
         */
        advice_code?: string;
        /**
         * For card errors, the ID of the failed charge.
         */
        charge?: string;
        /**
         * For some errors that could be handled programmatically, a short string indicating the [error code](https://docs.stripe.com/error-codes) reported.
         */
        code?: LastFinalizationError.Code;
        /**
         * For card errors resulting from a card issuer decline, a short string indicating the [card issuer's reason for the decline](https://docs.stripe.com/declines#issuer-declines) if they provide one.
         */
        decline_code?: string;
        /**
         * A URL to more information about the [error code](https://docs.stripe.com/error-codes) reported.
         */
        doc_url?: string;
        /**
         * A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.
         */
        message?: string;
        /**
         * For card errors resulting from a card issuer decline, a 2 digit code which indicates the advice given to merchant by the card network on how to proceed with an error.
         */
        network_advice_code?: string;
        /**
         * For payments declined by the network, an alphanumeric code which indicates the reason the payment failed.
         */
        network_decline_code?: string;
        /**
         * If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.
         */
        param?: string;
        /**
         * A PaymentIntent guides you through the process of collecting a payment from your customer.
         * We recommend that you create exactly one PaymentIntent for each order or
         * customer session in your system. You can reference the PaymentIntent later to
         * see the history of payment attempts for a particular session.
         *
         * A PaymentIntent transitions through
         * [multiple statuses](https://docs.stripe.com/payments/paymentintents/lifecycle)
         * throughout its lifetime as it interfaces with Stripe.js to perform
         * authentication flows and ultimately creates at most one successful charge.
         *
         * Related guide: [Payment Intents API](https://docs.stripe.com/payments/payment-intents)
         */
        payment_intent?: PaymentIntent;
        /**
         * PaymentMethod objects represent your customer's payment instruments.
         * You can use them with [PaymentIntents](https://docs.stripe.com/payments/payment-intents) to collect payments or save them to
         * Customer objects to store instrument details for future payments.
         *
         * Related guides: [Payment Methods](https://docs.stripe.com/payments/payment-methods) and [More Payment Scenarios](https://docs.stripe.com/payments/more-payment-scenarios).
         */
        payment_method?: PaymentMethod;
        /**
         * If the error is specific to the type of payment method, the payment method type that had a problem. This field is only populated for invoice-related errors.
         */
        payment_method_type?: string;
        /**
         * A URL to the request log entry in your dashboard.
         */
        request_log_url?: string;
        /**
         * A SetupIntent guides you through the process of setting up and saving a customer's payment credentials for future payments.
         * For example, you can use a SetupIntent to set up and save your customer's card without immediately collecting a payment.
         * Later, you can use [PaymentIntents](https://api.stripe.com#payment_intents) to drive the payment flow.
         *
         * Create a SetupIntent when you're ready to collect your customer's payment credentials.
         * Don't maintain long-lived, unconfirmed SetupIntents because they might not be valid.
         * The SetupIntent transitions through multiple [statuses](https://docs.stripe.com/payments/intents#intent-statuses) as it guides
         * you through the setup process.
         *
         * Successful SetupIntents result in payment credentials that are optimized for future payments.
         * For example, cardholders in [certain regions](https://stripe.com/guides/strong-customer-authentication) might need to be run through
         * [Strong Customer Authentication](https://docs.stripe.com/strong-customer-authentication) during payment method collection
         * to streamline later [off-session payments](https://docs.stripe.com/payments/setup-intents).
         * If you use the SetupIntent with a [Customer](https://api.stripe.com#setup_intent_object-customer),
         * it automatically attaches the resulting payment method to that Customer after successful setup.
         * We recommend using SetupIntents or [setup_future_usage](https://api.stripe.com#payment_intent_object-setup_future_usage) on
         * PaymentIntents to save payment methods to prevent saving invalid or unoptimized payment methods.
         *
         * By using SetupIntents, you can reduce friction for your customers, even as regulations change over time.
         *
         * Related guide: [Setup Intents API](https://docs.stripe.com/payments/setup-intents)
         */
        setup_intent?: SetupIntent;
        source?: CustomerSource;
        /**
         * The type of error returned. One of `api_error`, `card_error`, `idempotency_error`, or `invalid_request_error`
         */
        type: LastFinalizationError.Type;
    }
    interface Parent {
        /**
         * Details about the quote that generated this invoice
         */
        quote_details: Parent.QuoteDetails | null;
        /**
         * Details about the subscription that generated this invoice
         */
        subscription_details: Parent.SubscriptionDetails | null;
        /**
         * The type of parent that generated this invoice
         */
        type: Parent.Type;
    }
    interface PaymentSettings {
        /**
         * ID of the mandate to be used for this invoice. It must correspond to the payment method used to pay the invoice, including the invoice's default_payment_method or default_source, if set.
         */
        default_mandate: string | null;
        /**
         * Payment-method-specific configuration to provide to the invoice's PaymentIntent.
         */
        payment_method_options: PaymentSettings.PaymentMethodOptions | null;
        /**
         * The list of payment method types (e.g. card) to provide to the invoice's PaymentIntent. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice's default payment method, the subscription's default payment method, the customer's default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice).
         */
        payment_method_types: Array<PaymentSettings.PaymentMethodType> | null;
    }
    interface Rendering {
        /**
         * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs.
         */
        amount_tax_display: string | null;
        /**
         * Invoice pdf rendering options
         */
        pdf: Rendering.Pdf | null;
        /**
         * ID of the rendering template that the invoice is formatted by.
         */
        template: string | null;
        /**
         * Version of the rendering template that the invoice is using.
         */
        template_version: number | null;
    }
    interface ShippingCost {
        /**
         * Total shipping cost before any taxes are applied.
         */
        amount_subtotal: number;
        /**
         * Total tax amount applied due to shipping costs. If no tax was applied, defaults to 0.
         */
        amount_tax: number;
        /**
         * Total shipping cost after taxes are applied.
         */
        amount_total: number;
        /**
         * The ID of the ShippingRate for this invoice.
         */
        shipping_rate: string | ShippingRate | null;
        /**
         * The taxes applied to the shipping rate.
         */
        taxes?: Array<ShippingCost.Tax>;
    }
    interface ShippingDetails {
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
    type Status = 'draft' | 'open' | 'paid' | 'uncollectible' | 'void';
    interface StatusTransitions {
        /**
         * The time that the invoice draft was finalized.
         */
        finalized_at: number | null;
        /**
         * The time that the invoice was marked uncollectible.
         */
        marked_uncollectible_at: number | null;
        /**
         * The time that the invoice was paid.
         */
        paid_at: number | null;
        /**
         * The time that the invoice was voided.
         */
        voided_at: number | null;
    }
    interface ThresholdReason {
        /**
         * The total invoice amount threshold boundary if it triggered the threshold invoice.
         */
        amount_gte: number | null;
        /**
         * Indicates which line items triggered a threshold invoice.
         */
        item_reasons: Array<ThresholdReason.ItemReason>;
    }
    interface TotalDiscountAmount {
        /**
         * The amount, in cents (or local equivalent), of the discount.
         */
        amount: number;
        /**
         * The discount that was applied to get this discount amount.
         */
        discount: string | Discount | DeletedDiscount;
    }
    interface TotalPretaxCreditAmount {
        /**
         * The amount, in cents (or local equivalent), of the pretax credit amount.
         */
        amount: number;
        /**
         * The credit balance transaction that was applied to get this pretax credit amount.
         */
        credit_balance_transaction?: string | Billing.CreditBalanceTransaction | null;
        /**
         * The discount that was applied to get this pretax credit amount.
         */
        discount?: string | Discount | DeletedDiscount;
        /**
         * Type of the pretax credit amount referenced.
         */
        type: TotalPretaxCreditAmount.Type;
    }
    interface TotalTax {
        /**
         * The amount of the tax, in cents (or local equivalent).
         */
        amount: number;
        /**
         * Whether this tax is inclusive or exclusive.
         */
        tax_behavior: TotalTax.TaxBehavior;
        /**
         * Additional details about the tax rate. Only present when `type` is `tax_rate_details`.
         */
        tax_rate_details: TotalTax.TaxRateDetails | null;
        /**
         * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
         */
        taxability_reason: TotalTax.TaxabilityReason;
        /**
         * The amount on which tax is calculated, in cents (or local equivalent).
         */
        taxable_amount: number | null;
        /**
         * The type of tax information.
         */
        type: 'tax_rate_details';
    }
    namespace AutomaticTax {
        type DisabledReason = 'finalization_requires_location_inputs' | 'finalization_system_error';
        interface Liability {
            /**
             * The connected account being referenced when `type` is `account`.
             */
            account?: string | Account;
            /**
             * Type of the account referenced.
             */
            type: Liability.Type;
        }
        type Status = 'complete' | 'failed' | 'requires_location_inputs';
        namespace Liability {
            type Type = 'account' | 'self';
        }
    }
    namespace CustomerTaxId {
        type Type = 'ad_nrt' | 'ae_trn' | 'al_tin' | 'am_tin' | 'ao_tin' | 'ar_cuit' | 'au_abn' | 'au_arn' | 'aw_tin' | 'az_tin' | 'ba_tin' | 'bb_tin' | 'bd_bin' | 'bf_ifu' | 'bg_uic' | 'bh_vat' | 'bj_ifu' | 'bo_tin' | 'br_cnpj' | 'br_cpf' | 'bs_tin' | 'by_tin' | 'ca_bn' | 'ca_gst_hst' | 'ca_pst_bc' | 'ca_pst_mb' | 'ca_pst_sk' | 'ca_qst' | 'cd_nif' | 'ch_uid' | 'ch_vat' | 'cl_tin' | 'cm_niu' | 'cn_tin' | 'co_nit' | 'cr_tin' | 'cv_nif' | 'de_stn' | 'do_rcn' | 'ec_ruc' | 'eg_tin' | 'es_cif' | 'et_tin' | 'eu_oss_vat' | 'eu_vat' | 'gb_vat' | 'ge_vat' | 'gn_nif' | 'hk_br' | 'hr_oib' | 'hu_tin' | 'id_npwp' | 'il_vat' | 'in_gst' | 'is_vat' | 'jp_cn' | 'jp_rn' | 'jp_trn' | 'ke_pin' | 'kg_tin' | 'kh_tin' | 'kr_brn' | 'kz_bin' | 'la_tin' | 'li_uid' | 'li_vat' | 'ma_vat' | 'md_vat' | 'me_pib' | 'mk_vat' | 'mr_nif' | 'mx_rfc' | 'my_frp' | 'my_itn' | 'my_sst' | 'ng_tin' | 'no_vat' | 'no_voec' | 'np_pan' | 'nz_gst' | 'om_vat' | 'pe_ruc' | 'ph_tin' | 'ro_tin' | 'rs_pib' | 'ru_inn' | 'ru_kpp' | 'sa_vat' | 'sg_gst' | 'sg_uen' | 'si_tin' | 'sn_ninea' | 'sr_fin' | 'sv_nit' | 'th_vat' | 'tj_tin' | 'tr_tin' | 'tw_vat' | 'tz_vat' | 'ua_vat' | 'ug_tin' | 'unknown' | 'us_ein' | 'uy_ruc' | 'uz_tin' | 'uz_vat' | 've_rif' | 'vn_tin' | 'za_vat' | 'zm_tin' | 'zw_tin';
    }
    namespace Issuer {
        type Type = 'account' | 'self';
    }
    namespace LastFinalizationError {
        type Code = 'account_closed' | 'account_country_invalid_address' | 'account_error_country_change_requires_additional_steps' | 'account_information_mismatch' | 'account_invalid' | 'account_number_invalid' | 'account_token_required_for_v2_account' | 'acss_debit_session_incomplete' | 'alipay_upgrade_required' | 'amount_too_large' | 'amount_too_small' | 'api_key_expired' | 'application_fees_not_allowed' | 'authentication_required' | 'balance_insufficient' | 'balance_invalid_parameter' | 'bank_account_bad_routing_numbers' | 'bank_account_declined' | 'bank_account_exists' | 'bank_account_restricted' | 'bank_account_unusable' | 'bank_account_unverified' | 'bank_account_verification_failed' | 'billing_invalid_mandate' | 'bitcoin_upgrade_required' | 'capture_charge_authorization_expired' | 'capture_unauthorized_payment' | 'card_decline_rate_limit_exceeded' | 'card_declined' | 'cardholder_phone_number_required' | 'charge_already_captured' | 'charge_already_refunded' | 'charge_disputed' | 'charge_exceeds_source_limit' | 'charge_exceeds_transaction_limit' | 'charge_expired_for_capture' | 'charge_invalid_parameter' | 'charge_not_refundable' | 'clearing_code_unsupported' | 'country_code_invalid' | 'country_unsupported' | 'coupon_expired' | 'customer_max_payment_methods' | 'customer_max_subscriptions' | 'customer_session_expired' | 'customer_tax_location_invalid' | 'debit_not_authorized' | 'email_invalid' | 'expired_card' | 'financial_connections_account_inactive' | 'financial_connections_account_pending_account_numbers' | 'financial_connections_account_unavailable_account_numbers' | 'financial_connections_no_successful_transaction_refresh' | 'forwarding_api_inactive' | 'forwarding_api_invalid_parameter' | 'forwarding_api_retryable_upstream_error' | 'forwarding_api_upstream_connection_error' | 'forwarding_api_upstream_connection_timeout' | 'forwarding_api_upstream_error' | 'idempotency_key_in_use' | 'incorrect_address' | 'incorrect_cvc' | 'incorrect_number' | 'incorrect_zip' | 'india_recurring_payment_mandate_canceled' | 'instant_payouts_config_disabled' | 'instant_payouts_currency_disabled' | 'instant_payouts_limit_exceeded' | 'instant_payouts_unsupported' | 'insufficient_funds' | 'intent_invalid_state' | 'intent_verification_method_missing' | 'invalid_card_type' | 'invalid_characters' | 'invalid_charge_amount' | 'invalid_cvc' | 'invalid_expiry_month' | 'invalid_expiry_year' | 'invalid_mandate_reference_prefix_format' | 'invalid_number' | 'invalid_source_usage' | 'invalid_tax_location' | 'invoice_no_customer_line_items' | 'invoice_no_payment_method_types' | 'invoice_no_subscription_line_items' | 'invoice_not_editable' | 'invoice_on_behalf_of_not_editable' | 'invoice_payment_intent_requires_action' | 'invoice_upcoming_none' | 'livemode_mismatch' | 'lock_timeout' | 'missing' | 'no_account' | 'not_allowed_on_standard_account' | 'out_of_inventory' | 'ownership_declaration_not_allowed' | 'parameter_invalid_empty' | 'parameter_invalid_integer' | 'parameter_invalid_string_blank' | 'parameter_invalid_string_empty' | 'parameter_missing' | 'parameter_unknown' | 'parameters_exclusive' | 'payment_intent_action_required' | 'payment_intent_authentication_failure' | 'payment_intent_incompatible_payment_method' | 'payment_intent_invalid_parameter' | 'payment_intent_konbini_rejected_confirmation_number' | 'payment_intent_mandate_invalid' | 'payment_intent_payment_attempt_expired' | 'payment_intent_payment_attempt_failed' | 'payment_intent_rate_limit_exceeded' | 'payment_intent_unexpected_state' | 'payment_method_bank_account_already_verified' | 'payment_method_bank_account_blocked' | 'payment_method_billing_details_address_missing' | 'payment_method_configuration_failures' | 'payment_method_currency_mismatch' | 'payment_method_customer_decline' | 'payment_method_invalid_parameter' | 'payment_method_invalid_parameter_testmode' | 'payment_method_microdeposit_failed' | 'payment_method_microdeposit_verification_amounts_invalid' | 'payment_method_microdeposit_verification_amounts_mismatch' | 'payment_method_microdeposit_verification_attempts_exceeded' | 'payment_method_microdeposit_verification_descriptor_code_mismatch' | 'payment_method_microdeposit_verification_timeout' | 'payment_method_not_available' | 'payment_method_provider_decline' | 'payment_method_provider_timeout' | 'payment_method_unactivated' | 'payment_method_unexpected_state' | 'payment_method_unsupported_type' | 'payout_reconciliation_not_ready' | 'payouts_limit_exceeded' | 'payouts_not_allowed' | 'platform_account_required' | 'platform_api_key_expired' | 'postal_code_invalid' | 'processing_error' | 'product_inactive' | 'progressive_onboarding_limit_exceeded' | 'rate_limit' | 'refer_to_customer' | 'refund_disputed_payment' | 'resource_already_exists' | 'resource_missing' | 'return_intent_already_processed' | 'routing_number_invalid' | 'secret_key_required' | 'sepa_unsupported_account' | 'setup_attempt_failed' | 'setup_intent_authentication_failure' | 'setup_intent_invalid_parameter' | 'setup_intent_mandate_invalid' | 'setup_intent_mobile_wallet_unsupported' | 'setup_intent_setup_attempt_expired' | 'setup_intent_unexpected_state' | 'shipping_address_invalid' | 'shipping_calculation_failed' | 'sku_inactive' | 'state_unsupported' | 'status_transition_invalid' | 'stripe_tax_inactive' | 'tax_id_invalid' | 'tax_id_prohibited' | 'taxes_calculation_failed' | 'terminal_location_country_unsupported' | 'terminal_reader_busy' | 'terminal_reader_hardware_fault' | 'terminal_reader_invalid_location_for_activation' | 'terminal_reader_invalid_location_for_payment' | 'terminal_reader_offline' | 'terminal_reader_timeout' | 'testmode_charges_only' | 'tls_version_unsupported' | 'token_already_used' | 'token_card_network_invalid' | 'token_in_use' | 'transfer_source_balance_parameters_mismatch' | 'transfers_not_allowed' | 'url_invalid';
        type Type = 'api_error' | 'card_error' | 'idempotency_error' | 'invalid_request_error';
    }
    namespace Parent {
        interface QuoteDetails {
            /**
             * The quote that generated this invoice
             */
            quote: string;
        }
        interface SubscriptionDetails {
            /**
             * Set of [key-value pairs](https://docs.stripe.com/api/metadata) defined as subscription metadata when an invoice is created. Becomes an immutable snapshot of the subscription metadata at the time of invoice finalization.
             *  *Note: This attribute is populated only for invoices created on or after June 29, 2023.*
             */
            metadata: Metadata | null;
            /**
             * The subscription that generated this invoice
             */
            subscription: string | Subscription;
            /**
             * Only set for upcoming invoices that preview prorations. The time used to calculate prorations.
             */
            subscription_proration_date?: number;
        }
        type Type = 'quote_details' | 'subscription_details';
    }
    namespace PaymentSettings {
        interface PaymentMethodOptions {
            /**
             * If paying by `acss_debit`, this sub-hash contains details about the Canadian pre-authorized debit payment method options to pass to the invoice's PaymentIntent.
             */
            acss_debit: PaymentMethodOptions.AcssDebit | null;
            /**
             * If paying by `bancontact`, this sub-hash contains details about the Bancontact payment method options to pass to the invoice's PaymentIntent.
             */
            bancontact: PaymentMethodOptions.Bancontact | null;
            /**
             * If paying by `card`, this sub-hash contains details about the Card payment method options to pass to the invoice's PaymentIntent.
             */
            card: PaymentMethodOptions.Card | null;
            /**
             * If paying by `customer_balance`, this sub-hash contains details about the Bank transfer payment method options to pass to the invoice's PaymentIntent.
             */
            customer_balance: PaymentMethodOptions.CustomerBalance | null;
            /**
             * If paying by `konbini`, this sub-hash contains details about the Konbini payment method options to pass to the invoice's PaymentIntent.
             */
            konbini: PaymentMethodOptions.Konbini | null;
            /**
             * If paying by `payto`, this sub-hash contains details about the PayTo payment method options to pass to the invoice's PaymentIntent.
             */
            payto?: PaymentMethodOptions.Payto | null;
            /**
             * If paying by `sepa_debit`, this sub-hash contains details about the SEPA Direct Debit payment method options to pass to the invoice's PaymentIntent.
             */
            sepa_debit: PaymentMethodOptions.SepaDebit | null;
            /**
             * If paying by `us_bank_account`, this sub-hash contains details about the ACH direct debit payment method options to pass to the invoice's PaymentIntent.
             */
            us_bank_account: PaymentMethodOptions.UsBankAccount | null;
        }
        type PaymentMethodType = 'ach_credit_transfer' | 'ach_debit' | 'acss_debit' | 'affirm' | 'amazon_pay' | 'au_becs_debit' | 'bacs_debit' | 'bancontact' | 'boleto' | 'card' | 'cashapp' | 'crypto' | 'custom' | 'customer_balance' | 'eps' | 'fpx' | 'giropay' | 'grabpay' | 'ideal' | 'jp_credit_transfer' | 'kakao_pay' | 'klarna' | 'konbini' | 'kr_card' | 'link' | 'multibanco' | 'naver_pay' | 'nz_bank_account' | 'p24' | 'payco' | 'paynow' | 'paypal' | 'payto' | 'promptpay' | 'revolut_pay' | 'sepa_credit_transfer' | 'sepa_debit' | 'sofort' | 'swish' | 'us_bank_account' | 'wechat_pay';
        namespace PaymentMethodOptions {
            interface AcssDebit {
                mandate_options?: AcssDebit.MandateOptions;
                /**
                 * Bank account verification method.
                 */
                verification_method?: AcssDebit.VerificationMethod;
            }
            interface Bancontact {
                /**
                 * Preferred language of the Bancontact authorization page that the customer is redirected to.
                 */
                preferred_language: Bancontact.PreferredLanguage;
            }
            interface Card {
                installments?: Card.Installments;
                /**
                 * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://docs.stripe.com/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Read our guide on [manually requesting 3D Secure](https://docs.stripe.com/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
                 */
                request_three_d_secure: Card.RequestThreeDSecure | null;
            }
            interface CustomerBalance {
                bank_transfer?: CustomerBalance.BankTransfer;
                /**
                 * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
                 */
                funding_type: 'bank_transfer' | null;
            }
            interface Konbini {
            }
            interface Payto {
                mandate_options?: Payto.MandateOptions;
            }
            interface SepaDebit {
            }
            interface UsBankAccount {
                financial_connections?: UsBankAccount.FinancialConnections;
                /**
                 * Bank account verification method.
                 */
                verification_method?: UsBankAccount.VerificationMethod;
            }
            namespace AcssDebit {
                interface MandateOptions {
                    /**
                     * Transaction type of the mandate.
                     */
                    transaction_type: MandateOptions.TransactionType | null;
                }
                type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
                namespace MandateOptions {
                    type TransactionType = 'business' | 'personal';
                }
            }
            namespace Bancontact {
                type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
            }
            namespace Card {
                interface Installments {
                    /**
                     * Whether Installments are enabled for this Invoice.
                     */
                    enabled: boolean | null;
                }
                type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';
            }
            namespace CustomerBalance {
                interface BankTransfer {
                    eu_bank_transfer?: BankTransfer.EuBankTransfer;
                    /**
                     * The bank transfer type that can be used for funding. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
                     */
                    type: string | null;
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
                }
            }
            namespace Payto {
                interface MandateOptions {
                    /**
                     * The maximum amount that can be collected in a single invoice. If you don't specify a maximum, then there is no limit.
                     */
                    amount: number | null;
                    /**
                     * Only `maximum` is supported.
                     */
                    amount_type: MandateOptions.AmountType | null;
                    /**
                     * The purpose for which payments are made. Has a default value based on your merchant category code.
                     */
                    purpose: MandateOptions.Purpose | null;
                }
                namespace MandateOptions {
                    type AmountType = 'fixed' | 'maximum';
                    type Purpose = 'dependant_support' | 'government' | 'loan' | 'mortgage' | 'other' | 'pension' | 'personal' | 'retail' | 'salary' | 'tax' | 'utility';
                }
            }
            namespace UsBankAccount {
                interface FinancialConnections {
                    filters?: FinancialConnections.Filters;
                    /**
                     * The list of permissions to request. The `payment_method` permission must be included.
                     */
                    permissions?: Array<FinancialConnections.Permission>;
                    /**
                     * Data features requested to be retrieved upon account creation.
                     */
                    prefetch: Array<FinancialConnections.Prefetch> | null;
                }
                type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
                namespace FinancialConnections {
                    interface Filters {
                        /**
                         * The account subcategories to use to filter for possible accounts to link. Valid subcategories are `checking` and `savings`.
                         */
                        account_subcategories?: Array<Filters.AccountSubcategory>;
                    }
                    type Permission = 'balances' | 'ownership' | 'payment_method' | 'transactions';
                    type Prefetch = 'balances' | 'ownership' | 'transactions';
                    namespace Filters {
                        type AccountSubcategory = 'checking' | 'savings';
                    }
                }
            }
        }
    }
    namespace Rendering {
        interface Pdf {
            /**
             * Page size of invoice pdf. Options include a4, letter, and auto. If set to auto, page size will be switched to a4 or letter based on customer locale.
             */
            page_size: Pdf.PageSize | null;
        }
        namespace Pdf {
            type PageSize = 'a4' | 'auto' | 'letter';
        }
    }
    namespace ShippingCost {
        interface Tax {
            /**
             * Amount of tax applied for this rate.
             */
            amount: number;
            /**
             * Tax rates can be applied to [invoices](https://docs.stripe.com/invoicing/taxes/tax-rates), [subscriptions](https://docs.stripe.com/billing/taxes/tax-rates) and [Checkout Sessions](https://docs.stripe.com/payments/checkout/use-manual-tax-rates) to collect tax.
             *
             * Related guide: [Tax rates](https://docs.stripe.com/billing/taxes/tax-rates)
             */
            rate: TaxRate;
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
            type TaxabilityReason = 'customer_exempt' | 'not_collecting' | 'not_subject_to_tax' | 'not_supported' | 'portion_product_exempt' | 'portion_reduced_rated' | 'portion_standard_rated' | 'product_exempt' | 'product_exempt_holiday' | 'proportionally_rated' | 'reduced_rated' | 'reverse_charge' | 'standard_rated' | 'taxable_basis_reduced' | 'zero_rated';
        }
    }
    namespace ThresholdReason {
        interface ItemReason {
            /**
             * The IDs of the line items that triggered the threshold invoice.
             */
            line_item_ids: Array<string>;
            /**
             * The quantity threshold boundary that applied to the given line item.
             */
            usage_gte: number;
        }
    }
    namespace TotalPretaxCreditAmount {
        type Type = 'credit_balance_transaction' | 'discount';
    }
    namespace TotalTax {
        type TaxBehavior = 'exclusive' | 'inclusive';
        interface TaxRateDetails {
            /**
             * ID of the tax rate
             */
            tax_rate: string;
        }
        type TaxabilityReason = 'customer_exempt' | 'not_available' | 'not_collecting' | 'not_subject_to_tax' | 'not_supported' | 'portion_product_exempt' | 'portion_reduced_rated' | 'portion_standard_rated' | 'product_exempt' | 'product_exempt_holiday' | 'proportionally_rated' | 'reduced_rated' | 'reverse_charge' | 'standard_rated' | 'taxable_basis_reduced' | 'zero_rated';
    }
}
export interface InvoiceCreateParams {
    /**
     * The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
     */
    account_tax_ids?: Emptyable<Array<string>>;
    /**
     * A fee in cents (or local equivalent) that will be applied to the invoice and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees [documentation](https://docs.stripe.com/billing/invoices/connect#collecting-fees).
     */
    application_fee_amount?: number;
    /**
     * Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. If `false`, the invoice's state doesn't automatically advance without an explicit action. Defaults to false.
     */
    auto_advance?: boolean;
    /**
     * Settings for automatic tax lookup for this invoice.
     */
    automatic_tax?: InvoiceCreateParams.AutomaticTax;
    /**
     * The time when this invoice should be scheduled to finalize (up to 5 years in the future). The invoice is finalized at this time if it's still in draft state.
     */
    automatically_finalizes_at?: number;
    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions. Defaults to `charge_automatically`.
     */
    collection_method?: InvoiceCreateParams.CollectionMethod;
    /**
     * The currency to create this invoice in. Defaults to that of `customer` if not specified.
     */
    currency?: string;
    /**
     * A list of up to 4 custom fields to be displayed on the invoice.
     */
    custom_fields?: Emptyable<Array<InvoiceCreateParams.CustomField>>;
    /**
     * The ID of the customer to bill.
     */
    customer?: string;
    /**
     * The ID of the account to bill.
     */
    customer_account?: string;
    /**
     * The number of days from when the invoice is created until it is due. Valid only for invoices where `collection_method=send_invoice`.
     */
    days_until_due?: number;
    /**
     * ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings.
     */
    default_payment_method?: string;
    /**
     * ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source.
     */
    default_source?: string;
    /**
     * The tax rates that will apply to any line item that does not have `tax_rates` set.
     */
    default_tax_rates?: Array<string>;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
     */
    description?: string;
    /**
     * The coupons and promotion codes to redeem into discounts for the invoice. If not specified, inherits the discount from the invoice's customer. Pass an empty string to avoid inheriting any discounts.
     */
    discounts?: Emptyable<Array<InvoiceCreateParams.Discount>>;
    /**
     * The date on which payment for this invoice is due. Valid only for invoices where `collection_method=send_invoice`.
     */
    due_date?: number;
    /**
     * The date when this invoice is in effect. Same as `finalized_at` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the invoice PDF and receipt.
     */
    effective_at?: number;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Footer to be displayed on the invoice.
     */
    footer?: string;
    /**
     * Revise an existing invoice. The new invoice will be created in `status=draft`. See the [revision documentation](https://docs.stripe.com/invoicing/invoice-revisions) for more details.
     */
    from_invoice?: InvoiceCreateParams.FromInvoice;
    /**
     * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
     */
    issuer?: InvoiceCreateParams.Issuer;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
    /**
     * Set the number for this invoice. If no number is present then a number will be assigned automatically when the invoice is finalized. In many markets, regulations require invoices to be unique, sequential and / or gapless. You are responsible for ensuring this is true across all your different invoicing systems in the event that you edit the invoice number using our API. If you use only Stripe for your invoices and do not change invoice numbers, Stripe handles this aspect of compliance for you automatically.
     */
    number?: string;
    /**
     * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://docs.stripe.com/billing/invoices/connect) documentation for details.
     */
    on_behalf_of?: string;
    /**
     * Configuration settings for the PaymentIntent that is generated when the invoice is finalized.
     */
    payment_settings?: InvoiceCreateParams.PaymentSettings;
    /**
     * How to handle pending invoice items on invoice creation. Defaults to `exclude` if the parameter is omitted.
     */
    pending_invoice_items_behavior?: InvoiceCreateParams.PendingInvoiceItemsBehavior;
    /**
     * The rendering-related settings that control how the invoice is displayed on customer-facing surfaces such as PDF and Hosted Invoice Page.
     */
    rendering?: InvoiceCreateParams.Rendering;
    /**
     * Settings for the cost of shipping for this invoice.
     */
    shipping_cost?: InvoiceCreateParams.ShippingCost;
    /**
     * Shipping details for the invoice. The Invoice PDF will use the `shipping_details` value if it is set, otherwise the PDF will render the shipping address from the customer.
     */
    shipping_details?: InvoiceCreateParams.ShippingDetails;
    /**
     * Extra information about a charge for the customer's credit card statement. It must contain at least one letter. If not specified and this invoice is part of a subscription, the default `statement_descriptor` will be set to the first subscription item's product's `statement_descriptor`.
     */
    statement_descriptor?: string;
    /**
     * The ID of the subscription to invoice, if any. If set, the created invoice will only include pending invoice items for that subscription. The subscription's billing cycle and regular subscription events won't be affected.
     */
    subscription?: string;
    /**
     * If specified, the funds from the invoice will be transferred to the destination and the ID of the resulting transfer will be found on the invoice's charge.
     */
    transfer_data?: InvoiceCreateParams.TransferData;
}
export declare namespace InvoiceCreateParams {
    interface AutomaticTax {
        /**
         * Whether Stripe automatically computes tax on this invoice. Note that incompatible invoice items (invoice items with manually specified [tax rates](https://docs.stripe.com/api/tax_rates), negative amounts, or `tax_behavior=unspecified`) cannot be added to automatic tax invoices.
         */
        enabled: boolean;
        /**
         * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
         */
        liability?: AutomaticTax.Liability;
    }
    type CollectionMethod = 'charge_automatically' | 'send_invoice';
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
    interface FromInvoice {
        /**
         * The relation between the new invoice and the original invoice. Currently, only 'revision' is permitted
         */
        action: 'revision';
        /**
         * The `id` of the invoice that will be cloned.
         */
        invoice: string;
    }
    interface Issuer {
        /**
         * The connected account being referenced when `type` is `account`.
         */
        account?: string;
        /**
         * Type of the account referenced in the request.
         */
        type: Issuer.Type;
    }
    interface PaymentSettings {
        /**
         * ID of the mandate to be used for this invoice. It must correspond to the payment method used to pay the invoice, including the invoice's default_payment_method or default_source, if set.
         */
        default_mandate?: Emptyable<string>;
        /**
         * Payment-method-specific configuration to provide to the invoice's PaymentIntent.
         */
        payment_method_options?: PaymentSettings.PaymentMethodOptions;
        /**
         * The list of payment method types (e.g. card) to provide to the invoice's PaymentIntent. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice's default payment method, the subscription's default payment method, the customer's default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice).
         */
        payment_method_types?: Emptyable<Array<PaymentSettings.PaymentMethodType>>;
    }
    type PendingInvoiceItemsBehavior = 'exclude' | 'include';
    interface Rendering {
        /**
         * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs. One of `exclude_tax` or `include_inclusive_tax`. `include_inclusive_tax` will include inclusive tax (and exclude exclusive tax) in invoice PDF amounts. `exclude_tax` will exclude all tax (inclusive and exclusive alike) from invoice PDF amounts.
         */
        amount_tax_display?: Emptyable<Rendering.AmountTaxDisplay>;
        /**
         * Invoice pdf rendering options
         */
        pdf?: Rendering.Pdf;
        /**
         * ID of the invoice rendering template to use for this invoice.
         */
        template?: string;
        /**
         * The specific version of invoice rendering template to use for this invoice.
         */
        template_version?: Emptyable<number>;
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
    interface ShippingDetails {
        /**
         * Shipping address
         */
        address: AddressParam;
        /**
         * Recipient name.
         */
        name: string;
        /**
         * Recipient phone (including extension)
         */
        phone?: Emptyable<string>;
    }
    interface TransferData {
        /**
         * The amount that will be transferred automatically when the invoice is paid. If no amount is set, the full amount is transferred.
         */
        amount?: number;
        /**
         * ID of an existing, connected Stripe account.
         */
        destination: string;
    }
    namespace AutomaticTax {
        interface Liability {
            /**
             * The connected account being referenced when `type` is `account`.
             */
            account?: string;
            /**
             * Type of the account referenced in the request.
             */
            type: Liability.Type;
        }
        namespace Liability {
            type Type = 'account' | 'self';
        }
    }
    namespace Issuer {
        type Type = 'account' | 'self';
    }
    namespace PaymentSettings {
        interface PaymentMethodOptions {
            /**
             * If paying by `acss_debit`, this sub-hash contains details about the Canadian pre-authorized debit payment method options to pass to the invoice's PaymentIntent.
             */
            acss_debit?: Emptyable<PaymentMethodOptions.AcssDebit>;
            /**
             * If paying by `bancontact`, this sub-hash contains details about the Bancontact payment method options to pass to the invoice's PaymentIntent.
             */
            bancontact?: Emptyable<PaymentMethodOptions.Bancontact>;
            /**
             * If paying by `card`, this sub-hash contains details about the Card payment method options to pass to the invoice's PaymentIntent.
             */
            card?: Emptyable<PaymentMethodOptions.Card>;
            /**
             * If paying by `customer_balance`, this sub-hash contains details about the Bank transfer payment method options to pass to the invoice's PaymentIntent.
             */
            customer_balance?: Emptyable<PaymentMethodOptions.CustomerBalance>;
            /**
             * If paying by `konbini`, this sub-hash contains details about the Konbini payment method options to pass to the invoice's PaymentIntent.
             */
            konbini?: Emptyable<PaymentMethodOptions.Konbini>;
            /**
             * If paying by `payto`, this sub-hash contains details about the PayTo payment method options to pass to the invoice's PaymentIntent.
             */
            payto?: Emptyable<PaymentMethodOptions.Payto>;
            /**
             * If paying by `sepa_debit`, this sub-hash contains details about the SEPA Direct Debit payment method options to pass to the invoice's PaymentIntent.
             */
            sepa_debit?: Emptyable<PaymentMethodOptions.SepaDebit>;
            /**
             * If paying by `us_bank_account`, this sub-hash contains details about the ACH direct debit payment method options to pass to the invoice's PaymentIntent.
             */
            us_bank_account?: Emptyable<PaymentMethodOptions.UsBankAccount>;
        }
        type PaymentMethodType = 'ach_credit_transfer' | 'ach_debit' | 'acss_debit' | 'affirm' | 'amazon_pay' | 'au_becs_debit' | 'bacs_debit' | 'bancontact' | 'boleto' | 'card' | 'cashapp' | 'crypto' | 'custom' | 'customer_balance' | 'eps' | 'fpx' | 'giropay' | 'grabpay' | 'ideal' | 'jp_credit_transfer' | 'kakao_pay' | 'klarna' | 'konbini' | 'kr_card' | 'link' | 'multibanco' | 'naver_pay' | 'nz_bank_account' | 'p24' | 'payco' | 'paynow' | 'paypal' | 'payto' | 'promptpay' | 'revolut_pay' | 'sepa_credit_transfer' | 'sepa_debit' | 'sofort' | 'swish' | 'us_bank_account' | 'wechat_pay';
        namespace PaymentMethodOptions {
            interface AcssDebit {
                /**
                 * Additional fields for Mandate creation
                 */
                mandate_options?: AcssDebit.MandateOptions;
                /**
                 * Verification method for the intent
                 */
                verification_method?: AcssDebit.VerificationMethod;
            }
            interface Bancontact {
                /**
                 * Preferred language of the Bancontact authorization page that the customer is redirected to.
                 */
                preferred_language?: Bancontact.PreferredLanguage;
            }
            interface Card {
                /**
                 * Installment configuration for payments attempted on this invoice.
                 *
                 * For more information, see the [installments integration guide](https://docs.stripe.com/payments/installments).
                 */
                installments?: Card.Installments;
                /**
                 * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://docs.stripe.com/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Read our guide on [manually requesting 3D Secure](https://docs.stripe.com/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
                 */
                request_three_d_secure?: Card.RequestThreeDSecure;
            }
            interface CustomerBalance {
                /**
                 * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
                 */
                bank_transfer?: CustomerBalance.BankTransfer;
                /**
                 * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
                 */
                funding_type?: string;
            }
            interface Konbini {
            }
            interface Payto {
                /**
                 * Additional fields for Mandate creation.
                 */
                mandate_options?: Payto.MandateOptions;
            }
            interface SepaDebit {
            }
            interface UsBankAccount {
                /**
                 * Additional fields for Financial Connections Session creation
                 */
                financial_connections?: UsBankAccount.FinancialConnections;
                /**
                 * Verification method for the intent
                 */
                verification_method?: UsBankAccount.VerificationMethod;
            }
            namespace AcssDebit {
                interface MandateOptions {
                    /**
                     * Transaction type of the mandate.
                     */
                    transaction_type?: MandateOptions.TransactionType;
                }
                type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
                namespace MandateOptions {
                    type TransactionType = 'business' | 'personal';
                }
            }
            namespace Bancontact {
                type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
            }
            namespace Card {
                interface Installments {
                    /**
                     * Setting to true enables installments for this invoice.
                     * Setting to false will prevent any selected plan from applying to a payment.
                     */
                    enabled?: boolean;
                    /**
                     * The selected installment plan to use for this invoice.
                     */
                    plan?: Emptyable<Installments.Plan>;
                }
                type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';
                namespace Installments {
                    interface Plan {
                        /**
                         * For `fixed_count` installment plans, this is required. It represents the number of installment payments your customer will make to their credit card.
                         */
                        count?: number;
                        /**
                         * For `fixed_count` installment plans, this is required. It represents the interval between installment payments your customer will make to their credit card.
                         * One of `month`.
                         */
                        interval?: 'month';
                        /**
                         * Type of installment plan, one of `fixed_count`, `bonus`, or `revolving`.
                         */
                        type: Plan.Type;
                    }
                    namespace Plan {
                        type Type = 'bonus' | 'fixed_count' | 'revolving';
                    }
                }
            }
            namespace CustomerBalance {
                interface BankTransfer {
                    /**
                     * Configuration for eu_bank_transfer funding type.
                     */
                    eu_bank_transfer?: BankTransfer.EuBankTransfer;
                    /**
                     * The bank transfer type that can be used for funding. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
                     */
                    type?: string;
                }
                namespace BankTransfer {
                    interface EuBankTransfer {
                        /**
                         * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
                         */
                        country: string;
                    }
                }
            }
            namespace Payto {
                interface MandateOptions {
                    /**
                     * The maximum amount that can be collected in a single invoice. If you don't specify a maximum, then there is no limit.
                     */
                    amount?: number;
                    /**
                     * The purpose for which payments are made. Has a default value based on your merchant category code.
                     */
                    purpose?: MandateOptions.Purpose;
                }
                namespace MandateOptions {
                    type Purpose = 'dependant_support' | 'government' | 'loan' | 'mortgage' | 'other' | 'pension' | 'personal' | 'retail' | 'salary' | 'tax' | 'utility';
                }
            }
            namespace UsBankAccount {
                interface FinancialConnections {
                    /**
                     * Provide filters for the linked accounts that the customer can select for the payment method.
                     */
                    filters?: FinancialConnections.Filters;
                    /**
                     * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
                     */
                    permissions?: Array<FinancialConnections.Permission>;
                    /**
                     * List of data features that you would like to retrieve upon account creation.
                     */
                    prefetch?: Array<FinancialConnections.Prefetch>;
                }
                type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
                namespace FinancialConnections {
                    interface Filters {
                        /**
                         * The account subcategories to use to filter for selectable accounts. Valid subcategories are `checking` and `savings`.
                         */
                        account_subcategories?: Array<Filters.AccountSubcategory>;
                    }
                    type Permission = 'balances' | 'ownership' | 'payment_method' | 'transactions';
                    type Prefetch = 'balances' | 'ownership' | 'transactions';
                    namespace Filters {
                        type AccountSubcategory = 'checking' | 'savings';
                    }
                }
            }
        }
    }
    namespace Rendering {
        type AmountTaxDisplay = 'exclude_tax' | 'include_inclusive_tax';
        interface Pdf {
            /**
             * Page size for invoice PDF. Can be set to `a4`, `letter`, or `auto`.
             *  If set to `auto`, invoice PDF page size defaults to `a4` for customers with
             *  Japanese locale and `letter` for customers with other locales.
             */
            page_size?: Pdf.PageSize;
        }
        namespace Pdf {
            type PageSize = 'a4' | 'auto' | 'letter';
        }
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
             * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: MetadataParam;
            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: ShippingRateData.TaxBehavior;
            /**
             * A [tax code](https://docs.stripe.com/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
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
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
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
                namespace Maximum {
                    type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
                }
                namespace Minimum {
                    type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
                }
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
        }
    }
}
export interface InvoiceRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface InvoiceUpdateParams {
    /**
     * The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
     */
    account_tax_ids?: Emptyable<Array<string>>;
    /**
     * A fee in cents (or local equivalent) that will be applied to the invoice and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees [documentation](https://docs.stripe.com/billing/invoices/connect#collecting-fees).
     */
    application_fee_amount?: number;
    /**
     * Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice.
     */
    auto_advance?: boolean;
    /**
     * Settings for automatic tax lookup for this invoice.
     */
    automatic_tax?: InvoiceUpdateParams.AutomaticTax;
    /**
     * The time when this invoice should be scheduled to finalize (up to 5 years in the future). The invoice is finalized at this time if it's still in draft state. To turn off automatic finalization, set `auto_advance` to false.
     */
    automatically_finalizes_at?: number;
    /**
     * Either `charge_automatically` or `send_invoice`. This field can be updated only on `draft` invoices.
     */
    collection_method?: InvoiceUpdateParams.CollectionMethod;
    /**
     * A list of up to 4 custom fields to be displayed on the invoice. If a value for `custom_fields` is specified, the list specified will replace the existing custom field list on this invoice. Pass an empty string to remove previously-defined fields.
     */
    custom_fields?: Emptyable<Array<InvoiceUpdateParams.CustomField>>;
    /**
     * The number of days from which the invoice is created until it is due. Only valid for invoices where `collection_method=send_invoice`. This field can only be updated on `draft` invoices.
     */
    days_until_due?: number;
    /**
     * ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings.
     */
    default_payment_method?: string;
    /**
     * ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source.
     */
    default_source?: Emptyable<string>;
    /**
     * The tax rates that will apply to any line item that does not have `tax_rates` set. Pass an empty string to remove previously-defined tax rates.
     */
    default_tax_rates?: Emptyable<Array<string>>;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
     */
    description?: string;
    /**
     * The discounts that will apply to the invoice. Pass an empty string to remove previously-defined discounts.
     */
    discounts?: Emptyable<Array<InvoiceUpdateParams.Discount>>;
    /**
     * The date on which payment for this invoice is due. Only valid for invoices where `collection_method=send_invoice`. This field can only be updated on `draft` invoices.
     */
    due_date?: number;
    /**
     * The date when this invoice is in effect. Same as `finalized_at` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the invoice PDF and receipt.
     */
    effective_at?: Emptyable<number>;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Footer to be displayed on the invoice.
     */
    footer?: string;
    /**
     * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
     */
    issuer?: InvoiceUpdateParams.Issuer;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
    /**
     * Set the number for this invoice. If no number is present then a number will be assigned automatically when the invoice is finalized. In many markets, regulations require invoices to be unique, sequential and / or gapless. You are responsible for ensuring this is true across all your different invoicing systems in the event that you edit the invoice number using our API. If you use only Stripe for your invoices and do not change invoice numbers, Stripe handles this aspect of compliance for you automatically.
     */
    number?: Emptyable<string>;
    /**
     * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://docs.stripe.com/billing/invoices/connect) documentation for details.
     */
    on_behalf_of?: Emptyable<string>;
    /**
     * Configuration settings for the PaymentIntent that is generated when the invoice is finalized.
     */
    payment_settings?: InvoiceUpdateParams.PaymentSettings;
    /**
     * The rendering-related settings that control how the invoice is displayed on customer-facing surfaces such as PDF and Hosted Invoice Page.
     */
    rendering?: InvoiceUpdateParams.Rendering;
    /**
     * Settings for the cost of shipping for this invoice.
     */
    shipping_cost?: Emptyable<InvoiceUpdateParams.ShippingCost>;
    /**
     * Shipping details for the invoice. The Invoice PDF will use the `shipping_details` value if it is set, otherwise the PDF will render the shipping address from the customer.
     */
    shipping_details?: Emptyable<InvoiceUpdateParams.ShippingDetails>;
    /**
     * Extra information about a charge for the customer's credit card statement. It must contain at least one letter. If not specified and this invoice is part of a subscription, the default `statement_descriptor` will be set to the first subscription item's product's `statement_descriptor`.
     */
    statement_descriptor?: string;
    /**
     * If specified, the funds from the invoice will be transferred to the destination and the ID of the resulting transfer will be found on the invoice's charge. This will be unset if you POST an empty value.
     */
    transfer_data?: Emptyable<InvoiceUpdateParams.TransferData>;
}
export declare namespace InvoiceUpdateParams {
    interface AutomaticTax {
        /**
         * Whether Stripe automatically computes tax on this invoice. Note that incompatible invoice items (invoice items with manually specified [tax rates](https://docs.stripe.com/api/tax_rates), negative amounts, or `tax_behavior=unspecified`) cannot be added to automatic tax invoices.
         */
        enabled: boolean;
        /**
         * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
         */
        liability?: AutomaticTax.Liability;
    }
    type CollectionMethod = 'charge_automatically' | 'send_invoice';
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
    interface Issuer {
        /**
         * The connected account being referenced when `type` is `account`.
         */
        account?: string;
        /**
         * Type of the account referenced in the request.
         */
        type: Issuer.Type;
    }
    interface PaymentSettings {
        /**
         * ID of the mandate to be used for this invoice. It must correspond to the payment method used to pay the invoice, including the invoice's default_payment_method or default_source, if set.
         */
        default_mandate?: Emptyable<string>;
        /**
         * Payment-method-specific configuration to provide to the invoice's PaymentIntent.
         */
        payment_method_options?: PaymentSettings.PaymentMethodOptions;
        /**
         * The list of payment method types (e.g. card) to provide to the invoice's PaymentIntent. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice's default payment method, the subscription's default payment method, the customer's default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice).
         */
        payment_method_types?: Emptyable<Array<PaymentSettings.PaymentMethodType>>;
    }
    interface Rendering {
        /**
         * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs. One of `exclude_tax` or `include_inclusive_tax`. `include_inclusive_tax` will include inclusive tax (and exclude exclusive tax) in invoice PDF amounts. `exclude_tax` will exclude all tax (inclusive and exclusive alike) from invoice PDF amounts.
         */
        amount_tax_display?: Emptyable<Rendering.AmountTaxDisplay>;
        /**
         * Invoice pdf rendering options
         */
        pdf?: Rendering.Pdf;
        /**
         * ID of the invoice rendering template to use for this invoice.
         */
        template?: string;
        /**
         * The specific version of invoice rendering template to use for this invoice.
         */
        template_version?: Emptyable<number>;
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
    interface ShippingDetails {
        /**
         * Shipping address
         */
        address: AddressParam;
        /**
         * Recipient name.
         */
        name: string;
        /**
         * Recipient phone (including extension)
         */
        phone?: Emptyable<string>;
    }
    interface TransferData {
        /**
         * The amount that will be transferred automatically when the invoice is paid. If no amount is set, the full amount is transferred.
         */
        amount?: number;
        /**
         * ID of an existing, connected Stripe account.
         */
        destination: string;
    }
    namespace AutomaticTax {
        interface Liability {
            /**
             * The connected account being referenced when `type` is `account`.
             */
            account?: string;
            /**
             * Type of the account referenced in the request.
             */
            type: Liability.Type;
        }
        namespace Liability {
            type Type = 'account' | 'self';
        }
    }
    namespace Issuer {
        type Type = 'account' | 'self';
    }
    namespace PaymentSettings {
        interface PaymentMethodOptions {
            /**
             * If paying by `acss_debit`, this sub-hash contains details about the Canadian pre-authorized debit payment method options to pass to the invoice's PaymentIntent.
             */
            acss_debit?: Emptyable<PaymentMethodOptions.AcssDebit>;
            /**
             * If paying by `bancontact`, this sub-hash contains details about the Bancontact payment method options to pass to the invoice's PaymentIntent.
             */
            bancontact?: Emptyable<PaymentMethodOptions.Bancontact>;
            /**
             * If paying by `card`, this sub-hash contains details about the Card payment method options to pass to the invoice's PaymentIntent.
             */
            card?: Emptyable<PaymentMethodOptions.Card>;
            /**
             * If paying by `customer_balance`, this sub-hash contains details about the Bank transfer payment method options to pass to the invoice's PaymentIntent.
             */
            customer_balance?: Emptyable<PaymentMethodOptions.CustomerBalance>;
            /**
             * If paying by `konbini`, this sub-hash contains details about the Konbini payment method options to pass to the invoice's PaymentIntent.
             */
            konbini?: Emptyable<PaymentMethodOptions.Konbini>;
            /**
             * If paying by `payto`, this sub-hash contains details about the PayTo payment method options to pass to the invoice's PaymentIntent.
             */
            payto?: Emptyable<PaymentMethodOptions.Payto>;
            /**
             * If paying by `sepa_debit`, this sub-hash contains details about the SEPA Direct Debit payment method options to pass to the invoice's PaymentIntent.
             */
            sepa_debit?: Emptyable<PaymentMethodOptions.SepaDebit>;
            /**
             * If paying by `us_bank_account`, this sub-hash contains details about the ACH direct debit payment method options to pass to the invoice's PaymentIntent.
             */
            us_bank_account?: Emptyable<PaymentMethodOptions.UsBankAccount>;
        }
        type PaymentMethodType = 'ach_credit_transfer' | 'ach_debit' | 'acss_debit' | 'affirm' | 'amazon_pay' | 'au_becs_debit' | 'bacs_debit' | 'bancontact' | 'boleto' | 'card' | 'cashapp' | 'crypto' | 'custom' | 'customer_balance' | 'eps' | 'fpx' | 'giropay' | 'grabpay' | 'ideal' | 'jp_credit_transfer' | 'kakao_pay' | 'klarna' | 'konbini' | 'kr_card' | 'link' | 'multibanco' | 'naver_pay' | 'nz_bank_account' | 'p24' | 'payco' | 'paynow' | 'paypal' | 'payto' | 'promptpay' | 'revolut_pay' | 'sepa_credit_transfer' | 'sepa_debit' | 'sofort' | 'swish' | 'us_bank_account' | 'wechat_pay';
        namespace PaymentMethodOptions {
            interface AcssDebit {
                /**
                 * Additional fields for Mandate creation
                 */
                mandate_options?: AcssDebit.MandateOptions;
                /**
                 * Verification method for the intent
                 */
                verification_method?: AcssDebit.VerificationMethod;
            }
            interface Bancontact {
                /**
                 * Preferred language of the Bancontact authorization page that the customer is redirected to.
                 */
                preferred_language?: Bancontact.PreferredLanguage;
            }
            interface Card {
                /**
                 * Installment configuration for payments attempted on this invoice.
                 *
                 * For more information, see the [installments integration guide](https://docs.stripe.com/payments/installments).
                 */
                installments?: Card.Installments;
                /**
                 * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://docs.stripe.com/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Read our guide on [manually requesting 3D Secure](https://docs.stripe.com/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
                 */
                request_three_d_secure?: Card.RequestThreeDSecure;
            }
            interface CustomerBalance {
                /**
                 * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
                 */
                bank_transfer?: CustomerBalance.BankTransfer;
                /**
                 * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
                 */
                funding_type?: string;
            }
            interface Konbini {
            }
            interface Payto {
                /**
                 * Additional fields for Mandate creation.
                 */
                mandate_options?: Payto.MandateOptions;
            }
            interface SepaDebit {
            }
            interface UsBankAccount {
                /**
                 * Additional fields for Financial Connections Session creation
                 */
                financial_connections?: UsBankAccount.FinancialConnections;
                /**
                 * Verification method for the intent
                 */
                verification_method?: UsBankAccount.VerificationMethod;
            }
            namespace AcssDebit {
                interface MandateOptions {
                    /**
                     * Transaction type of the mandate.
                     */
                    transaction_type?: MandateOptions.TransactionType;
                }
                type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
                namespace MandateOptions {
                    type TransactionType = 'business' | 'personal';
                }
            }
            namespace Bancontact {
                type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
            }
            namespace Card {
                interface Installments {
                    /**
                     * Setting to true enables installments for this invoice.
                     * Setting to false will prevent any selected plan from applying to a payment.
                     */
                    enabled?: boolean;
                    /**
                     * The selected installment plan to use for this invoice.
                     */
                    plan?: Emptyable<Installments.Plan>;
                }
                type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';
                namespace Installments {
                    interface Plan {
                        /**
                         * For `fixed_count` installment plans, this is required. It represents the number of installment payments your customer will make to their credit card.
                         */
                        count?: number;
                        /**
                         * For `fixed_count` installment plans, this is required. It represents the interval between installment payments your customer will make to their credit card.
                         * One of `month`.
                         */
                        interval?: 'month';
                        /**
                         * Type of installment plan, one of `fixed_count`, `bonus`, or `revolving`.
                         */
                        type: Plan.Type;
                    }
                    namespace Plan {
                        type Type = 'bonus' | 'fixed_count' | 'revolving';
                    }
                }
            }
            namespace CustomerBalance {
                interface BankTransfer {
                    /**
                     * Configuration for eu_bank_transfer funding type.
                     */
                    eu_bank_transfer?: BankTransfer.EuBankTransfer;
                    /**
                     * The bank transfer type that can be used for funding. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
                     */
                    type?: string;
                }
                namespace BankTransfer {
                    interface EuBankTransfer {
                        /**
                         * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
                         */
                        country: string;
                    }
                }
            }
            namespace Payto {
                interface MandateOptions {
                    /**
                     * The maximum amount that can be collected in a single invoice. If you don't specify a maximum, then there is no limit.
                     */
                    amount?: number;
                    /**
                     * The purpose for which payments are made. Has a default value based on your merchant category code.
                     */
                    purpose?: MandateOptions.Purpose;
                }
                namespace MandateOptions {
                    type Purpose = 'dependant_support' | 'government' | 'loan' | 'mortgage' | 'other' | 'pension' | 'personal' | 'retail' | 'salary' | 'tax' | 'utility';
                }
            }
            namespace UsBankAccount {
                interface FinancialConnections {
                    /**
                     * Provide filters for the linked accounts that the customer can select for the payment method.
                     */
                    filters?: FinancialConnections.Filters;
                    /**
                     * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
                     */
                    permissions?: Array<FinancialConnections.Permission>;
                    /**
                     * List of data features that you would like to retrieve upon account creation.
                     */
                    prefetch?: Array<FinancialConnections.Prefetch>;
                }
                type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
                namespace FinancialConnections {
                    interface Filters {
                        /**
                         * The account subcategories to use to filter for selectable accounts. Valid subcategories are `checking` and `savings`.
                         */
                        account_subcategories?: Array<Filters.AccountSubcategory>;
                    }
                    type Permission = 'balances' | 'ownership' | 'payment_method' | 'transactions';
                    type Prefetch = 'balances' | 'ownership' | 'transactions';
                    namespace Filters {
                        type AccountSubcategory = 'checking' | 'savings';
                    }
                }
            }
        }
    }
    namespace Rendering {
        type AmountTaxDisplay = 'exclude_tax' | 'include_inclusive_tax';
        interface Pdf {
            /**
             * Page size for invoice PDF. Can be set to `a4`, `letter`, or `auto`.
             *  If set to `auto`, invoice PDF page size defaults to `a4` for customers with
             *  Japanese locale and `letter` for customers with other locales.
             */
            page_size?: Pdf.PageSize;
        }
        namespace Pdf {
            type PageSize = 'a4' | 'auto' | 'letter';
        }
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
             * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: MetadataParam;
            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: ShippingRateData.TaxBehavior;
            /**
             * A [tax code](https://docs.stripe.com/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
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
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
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
                namespace Maximum {
                    type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
                }
                namespace Minimum {
                    type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
                }
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
        }
    }
}
export interface InvoiceListParams extends PaginationParams {
    /**
     * The collection method of the invoice to retrieve. Either `charge_automatically` or `send_invoice`.
     */
    collection_method?: InvoiceListParams.CollectionMethod;
    /**
     * Only return invoices that were created during the given date interval.
     */
    created?: RangeQueryParam | number;
    /**
     * Only return invoices for the customer specified by this customer ID.
     */
    customer?: string;
    /**
     * Only return invoices for the account representing the customer specified by this account ID.
     */
    customer_account?: string;
    due_date?: RangeQueryParam | number;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://docs.stripe.com/billing/invoices/workflow#workflow-overview)
     */
    status?: InvoiceListParams.Status;
    /**
     * Only return invoices for the subscription specified by this subscription ID.
     */
    subscription?: string;
}
export declare namespace InvoiceListParams {
    type CollectionMethod = 'charge_automatically' | 'send_invoice';
    type Status = 'draft' | 'open' | 'paid' | 'uncollectible' | 'void';
}
export interface InvoiceDeleteParams {
}
export interface InvoiceAddLinesParams {
    /**
     * The line items to add.
     */
    lines: Array<InvoiceAddLinesParams.Line>;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    invoice_metadata?: Emptyable<{
        [key: string]: string;
    }>;
}
export declare namespace InvoiceAddLinesParams {
    interface Line {
        /**
         * The integer amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's account, pass a negative amount.
         */
        amount?: number;
        /**
         * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
         */
        description?: string;
        /**
         * Controls whether discounts apply to this line item. Defaults to false for prorations or negative line items, and true for all other line items. Cannot be set to true for prorations.
         */
        discountable?: boolean;
        /**
         * The coupons, promotion codes & existing discounts which apply to the line item. Item discounts are applied before invoice discounts. Pass an empty string to remove previously-defined discounts.
         */
        discounts?: Emptyable<Array<Line.Discount>>;
        /**
         * ID of an unassigned invoice item to assign to this invoice. If not provided, a new item will be created.
         */
        invoice_item?: string;
        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Emptyable<MetadataParam>;
        /**
         * The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://docs.stripe.com/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://docs.stripe.com/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
         */
        period?: Line.Period;
        /**
         * Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline.
         */
        price_data?: Line.PriceData;
        /**
         * The pricing information for the invoice item.
         */
        pricing?: Line.Pricing;
        /**
         * Non-negative integer. The quantity of units for the line item.
         */
        quantity?: number;
        /**
         * A list of up to 10 tax amounts for this line item. This can be useful if you calculate taxes on your own or use a third-party to calculate them. You cannot set tax amounts if any line item has [tax_rates](https://docs.stripe.com/api/invoices/line_item#invoice_line_item_object-tax_rates) or if the invoice has [default_tax_rates](https://docs.stripe.com/api/invoices/object#invoice_object-default_tax_rates) or uses [automatic tax](https://docs.stripe.com/tax/invoicing). Pass an empty string to remove previously defined tax amounts.
         */
        tax_amounts?: Emptyable<Array<Line.TaxAmount>>;
        /**
         * The tax rates which apply to the line item. When set, the `default_tax_rates` on the invoice do not apply to this line item. Pass an empty string to remove previously-defined tax rates.
         */
        tax_rates?: Emptyable<Array<string>>;
    }
    namespace Line {
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
        interface Period {
            /**
             * The end of the period, which must be greater than or equal to the start. This value is inclusive.
             */
            end: number;
            /**
             * The start of the period. This value is inclusive.
             */
            start: number;
        }
        interface PriceData {
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;
            /**
             * The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to. One of `product` or `product_data` is required.
             */
            product?: string;
            /**
             * Data used to generate a new [Product](https://docs.stripe.com/api/products) object inline. One of `product` or `product_data` is required.
             */
            product_data?: PriceData.ProductData;
            /**
             * Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
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
        interface Pricing {
            /**
             * The ID of the price object.
             */
            price?: string;
        }
        interface TaxAmount {
            /**
             * The amount, in cents (or local equivalent), of the tax.
             */
            amount: number;
            /**
             * Data to find or create a TaxRate object.
             *
             * Stripe automatically creates or reuses a TaxRate object for each tax amount. If the `tax_rate_data` exactly matches a previous value, Stripe will reuse the TaxRate object. TaxRate objects created automatically by Stripe are immediately archived, do not appear in the line item's `tax_rates`, and cannot be directly added to invoices, payments, or line items.
             */
            tax_rate_data: TaxAmount.TaxRateData;
            /**
             * The reasoning behind this tax, for example, if the product is tax exempt.
             */
            taxability_reason?: TaxAmount.TaxabilityReason;
            /**
             * The amount on which tax is calculated, in cents (or local equivalent).
             */
            taxable_amount: number;
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
                 * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
                 */
                metadata?: MetadataParam;
                /**
                 * The product's name, meant to be displayable to the customer.
                 */
                name: string;
                /**
                 * A [tax code](https://docs.stripe.com/tax/tax-categories) ID.
                 */
                tax_code?: string;
                /**
                 * A label that represents units of this product. When set, this will be included in customers' receipts, invoices, Checkout, and the customer portal.
                 */
                unit_label?: string;
            }
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
        namespace TaxAmount {
            interface TaxRateData {
                /**
                 * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                 */
                country?: string;
                /**
                 * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
                 */
                description?: string;
                /**
                 * The display name of the tax rate, which will be shown to users.
                 */
                display_name: string;
                /**
                 * This specifies if the tax rate is inclusive or exclusive.
                 */
                inclusive: boolean;
                /**
                 * The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer's invoice.
                 */
                jurisdiction?: string;
                /**
                 * The level of the jurisdiction that imposes this tax rate.
                 */
                jurisdiction_level?: TaxRateData.JurisdictionLevel;
                /**
                 * The statutory tax rate percent. This field accepts decimal values between 0 and 100 inclusive with at most 4 decimal places. To accommodate fixed-amount taxes, set the percentage to zero. Stripe will not display zero percentages on the invoice unless the `amount` of the tax is also zero.
                 */
                percentage: number;
                /**
                 * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country prefix. For example, "NY" for New York, United States.
                 */
                state?: string;
                /**
                 * The high-level tax type, such as `vat` or `sales_tax`.
                 */
                tax_type?: TaxRateData.TaxType;
            }
            type TaxabilityReason = 'customer_exempt' | 'not_collecting' | 'not_subject_to_tax' | 'not_supported' | 'portion_product_exempt' | 'portion_reduced_rated' | 'portion_standard_rated' | 'product_exempt' | 'product_exempt_holiday' | 'proportionally_rated' | 'reduced_rated' | 'reverse_charge' | 'standard_rated' | 'taxable_basis_reduced' | 'zero_rated';
            namespace TaxRateData {
                type JurisdictionLevel = 'city' | 'country' | 'county' | 'district' | 'multiple' | 'state';
                type TaxType = 'amusement_tax' | 'communications_tax' | 'gst' | 'hst' | 'igst' | 'jct' | 'lease_tax' | 'pst' | 'qst' | 'retail_delivery_fee' | 'rst' | 'sales_tax' | 'service_tax' | 'vat';
            }
        }
    }
}
export interface InvoiceAttachPaymentParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * The ID of the PaymentIntent to attach to the invoice.
     */
    payment_intent?: string;
    /**
     * The ID of the PaymentRecord to attach to the invoice.
     */
    payment_record?: string;
}
export interface InvoiceCreatePreviewParams {
    /**
     * Settings for automatic tax lookup for this invoice preview.
     */
    automatic_tax?: InvoiceCreatePreviewParams.AutomaticTax;
    /**
     * The currency to preview this invoice in. Defaults to that of `customer` if not specified.
     */
    currency?: string;
    /**
     * The identifier of the customer whose upcoming invoice you're retrieving. If `automatic_tax` is enabled then one of `customer`, `customer_details`, `subscription`, or `schedule` must be set.
     */
    customer?: string;
    /**
     * The identifier of the account representing the customer whose upcoming invoice you're retrieving. If `automatic_tax` is enabled then one of `customer`, `customer_account`, `customer_details`, `subscription`, or `schedule` must be set.
     */
    customer_account?: string;
    /**
     * Details about the customer you want to invoice or overrides for an existing customer. If `automatic_tax` is enabled then one of `customer`, `customer_details`, `subscription`, or `schedule` must be set.
     */
    customer_details?: InvoiceCreatePreviewParams.CustomerDetails;
    /**
     * The coupons to redeem into discounts for the invoice preview. If not specified, inherits the discount from the subscription or customer. This works for both coupons directly applied to an invoice and coupons applied to a subscription. Pass an empty string to avoid inheriting any discounts.
     */
    discounts?: Emptyable<Array<InvoiceCreatePreviewParams.Discount>>;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * List of invoice items to add or update in the upcoming invoice preview (up to 250).
     */
    invoice_items?: Array<InvoiceCreatePreviewParams.InvoiceItem>;
    /**
     * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
     */
    issuer?: InvoiceCreatePreviewParams.Issuer;
    /**
     * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://docs.stripe.com/billing/invoices/connect) documentation for details.
     */
    on_behalf_of?: Emptyable<string>;
    /**
     * Customizes the types of values to include when calculating the invoice. Defaults to `next` if unspecified.
     */
    preview_mode?: InvoiceCreatePreviewParams.PreviewMode;
    /**
     * The identifier of the schedule whose upcoming invoice you'd like to retrieve. Cannot be used with subscription or subscription fields.
     */
    schedule?: string;
    /**
     * The schedule creation or modification params to apply as a preview. Cannot be used with `subscription` or `subscription_` prefixed fields.
     */
    schedule_details?: InvoiceCreatePreviewParams.ScheduleDetails;
    /**
     * The identifier of the subscription for which you'd like to retrieve the upcoming invoice. If not provided, but a `subscription_details.items` is provided, you will preview creating a subscription with those items. If neither `subscription` nor `subscription_details.items` is provided, you will retrieve the next upcoming invoice from among the customer's subscriptions.
     */
    subscription?: string;
    /**
     * The subscription creation or modification params to apply as a preview. Cannot be used with `schedule` or `schedule_details` fields.
     */
    subscription_details?: InvoiceCreatePreviewParams.SubscriptionDetails;
}
export declare namespace InvoiceCreatePreviewParams {
    interface AutomaticTax {
        /**
         * Whether Stripe automatically computes tax on this invoice. Note that incompatible invoice items (invoice items with manually specified [tax rates](https://docs.stripe.com/api/tax_rates), negative amounts, or `tax_behavior=unspecified`) cannot be added to automatic tax invoices.
         */
        enabled: boolean;
        /**
         * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
         */
        liability?: AutomaticTax.Liability;
    }
    interface CustomerDetails {
        /**
         * The customer's address. Learn about [country-specific requirements for calculating tax](https://docs.stripe.com/invoicing/taxes?dashboard-or-api=dashboard#set-up-customer).
         */
        address?: Emptyable<AddressParam>;
        /**
         * The customer's shipping information. Appears on invoices emailed to this customer.
         */
        shipping?: Emptyable<CustomerDetails.Shipping>;
        /**
         * Tax details about the customer.
         */
        tax?: CustomerDetails.Tax;
        /**
         * The customer's tax exemption. One of `none`, `exempt`, or `reverse`.
         */
        tax_exempt?: Emptyable<CustomerDetails.TaxExempt>;
        /**
         * The customer's tax IDs.
         */
        tax_ids?: Array<CustomerDetails.TaxId>;
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
    interface InvoiceItem {
        /**
         * The integer amount in cents (or local equivalent) of previewed invoice item.
         */
        amount?: number;
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). Only applicable to new invoice items.
         */
        currency?: string;
        /**
         * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
         */
        description?: string;
        /**
         * Explicitly controls whether discounts apply to this invoice item. Defaults to true, except for negative invoice items.
         */
        discountable?: boolean;
        /**
         * The coupons to redeem into discounts for the invoice item in the preview.
         */
        discounts?: Emptyable<Array<InvoiceItem.Discount>>;
        /**
         * The ID of the invoice item to update in preview. If not specified, a new invoice item will be added to the preview of the upcoming invoice.
         */
        invoiceitem?: string;
        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Emptyable<MetadataParam>;
        /**
         * The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://docs.stripe.com/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://docs.stripe.com/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
         */
        period?: InvoiceItem.Period;
        /**
         * The ID of the price object. One of `price` or `price_data` is required.
         */
        price?: string;
        /**
         * Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline. One of `price` or `price_data` is required.
         */
        price_data?: InvoiceItem.PriceData;
        /**
         * Non-negative integer. The quantity of units for the invoice item.
         */
        quantity?: number;
        /**
         * Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
         */
        tax_behavior?: InvoiceItem.TaxBehavior;
        /**
         * A [tax code](https://docs.stripe.com/tax/tax-categories) ID.
         */
        tax_code?: Emptyable<string>;
        /**
         * The tax rates that apply to the item. When set, any `default_tax_rates` do not apply to this item.
         */
        tax_rates?: Emptyable<Array<string>>;
        /**
         * The integer unit amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. This unit_amount will be multiplied by the quantity to get the full amount. If you want to apply a credit to the customer's account, pass a negative unit_amount.
         */
        unit_amount?: number;
        /**
         * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
         */
        unit_amount_decimal?: string;
    }
    interface Issuer {
        /**
         * The connected account being referenced when `type` is `account`.
         */
        account?: string;
        /**
         * Type of the account referenced in the request.
         */
        type: Issuer.Type;
    }
    type PreviewMode = 'next' | 'recurring';
    interface ScheduleDetails {
        /**
         * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
         */
        billing_mode?: ScheduleDetails.BillingMode;
        /**
         * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running. `cancel` will end the subscription schedule and cancel the underlying subscription.
         */
        end_behavior?: ScheduleDetails.EndBehavior;
        /**
         * List representing phases of the subscription schedule. Each phase can be customized to have different durations, plans, and coupons. If there are multiple phases, the `end_date` of one phase will always equal the `start_date` of the next phase.
         */
        phases?: Array<ScheduleDetails.Phase>;
        /**
         * In cases where the `schedule_details` params update the currently active phase, specifies if and how to prorate at the time of the request.
         */
        proration_behavior?: ScheduleDetails.ProrationBehavior;
    }
    interface SubscriptionDetails {
        /**
         * For new subscriptions, a future timestamp to anchor the subscription's [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle). This is used to determine the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. For existing subscriptions, the value can only be set to `now` or `unchanged`.
         */
        billing_cycle_anchor?: SubscriptionDetails.BillingCycleAnchor | number;
        /**
         * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
         */
        billing_mode?: SubscriptionDetails.BillingMode;
        /**
         * A timestamp at which the subscription should cancel. If set to a date before the current period ends, this will cause a proration if prorations have been enabled using `proration_behavior`. If set during a future period, this will always cause a proration for that period.
         */
        cancel_at?: Emptyable<number | SubscriptionDetails.CancelAt>;
        /**
         * Indicate whether this subscription should cancel at the end of the current period (`current_period_end`). Defaults to `false`.
         */
        cancel_at_period_end?: boolean;
        /**
         * This simulates the subscription being canceled or expired immediately.
         */
        cancel_now?: boolean;
        /**
         * If provided, the invoice returned will preview updating or creating a subscription with these default tax rates. The default tax rates will apply to any line item that does not have `tax_rates` set.
         */
        default_tax_rates?: Emptyable<Array<string>>;
        /**
         * A list of up to 20 subscription items, each with an attached price.
         */
        items?: Array<SubscriptionDetails.Item>;
        /**
         * Determines how to handle [prorations](https://docs.stripe.com/billing/subscriptions/prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. The default value is `create_prorations`.
         */
        proration_behavior?: SubscriptionDetails.ProrationBehavior;
        /**
         * If previewing an update to a subscription, and doing proration, `subscription_details.proration_date` forces the proration to be calculated as though the update was done at the specified time. The time given must be within the current subscription period and within the current phase of the schedule backing this subscription, if the schedule exists. If set, `subscription`, and one of `subscription_details.items`, or `subscription_details.trial_end` are required. Also, `subscription_details.proration_behavior` cannot be set to 'none'.
         */
        proration_date?: number;
        /**
         * For paused subscriptions, setting `subscription_details.resume_at` to `now` will preview the invoice that will be generated if the subscription is resumed.
         */
        resume_at?: 'now';
        /**
         * Date a subscription is intended to start (can be future or past).
         */
        start_date?: number;
        /**
         * If provided, the invoice returned will preview updating or creating a subscription with that trial end. If set, one of `subscription_details.items` or `subscription` is required.
         */
        trial_end?: 'now' | number;
    }
    namespace AutomaticTax {
        interface Liability {
            /**
             * The connected account being referenced when `type` is `account`.
             */
            account?: string;
            /**
             * Type of the account referenced in the request.
             */
            type: Liability.Type;
        }
        namespace Liability {
            type Type = 'account' | 'self';
        }
    }
    namespace CustomerDetails {
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
        }
        type TaxExempt = 'exempt' | 'none' | 'reverse';
        interface TaxId {
            /**
             * Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `cd_nif`, `ch_uid`, `ch_vat`, `cl_tin`, `cm_niu`, `cn_tin`, `co_nit`, `cr_tin`, `cv_nif`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `et_tin`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `gn_nif`, `hk_br`, `hr_oib`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kg_tin`, `kh_tin`, `kr_brn`, `kz_bin`, `la_tin`, `li_uid`, `li_vat`, `ma_vat`, `md_vat`, `me_pib`, `mk_vat`, `mr_nif`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `np_pan`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sn_ninea`, `sr_fin`, `sv_nit`, `th_vat`, `tj_tin`, `tr_tin`, `tw_vat`, `tz_vat`, `ua_vat`, `ug_tin`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, `za_vat`, `zm_tin`, or `zw_tin`
             */
            type: TaxId.Type;
            /**
             * Value of the tax ID.
             */
            value: string;
        }
        namespace TaxId {
            type Type = 'ad_nrt' | 'ae_trn' | 'al_tin' | 'am_tin' | 'ao_tin' | 'ar_cuit' | 'au_abn' | 'au_arn' | 'aw_tin' | 'az_tin' | 'ba_tin' | 'bb_tin' | 'bd_bin' | 'bf_ifu' | 'bg_uic' | 'bh_vat' | 'bj_ifu' | 'bo_tin' | 'br_cnpj' | 'br_cpf' | 'bs_tin' | 'by_tin' | 'ca_bn' | 'ca_gst_hst' | 'ca_pst_bc' | 'ca_pst_mb' | 'ca_pst_sk' | 'ca_qst' | 'cd_nif' | 'ch_uid' | 'ch_vat' | 'cl_tin' | 'cm_niu' | 'cn_tin' | 'co_nit' | 'cr_tin' | 'cv_nif' | 'de_stn' | 'do_rcn' | 'ec_ruc' | 'eg_tin' | 'es_cif' | 'et_tin' | 'eu_oss_vat' | 'eu_vat' | 'gb_vat' | 'ge_vat' | 'gn_nif' | 'hk_br' | 'hr_oib' | 'hu_tin' | 'id_npwp' | 'il_vat' | 'in_gst' | 'is_vat' | 'jp_cn' | 'jp_rn' | 'jp_trn' | 'ke_pin' | 'kg_tin' | 'kh_tin' | 'kr_brn' | 'kz_bin' | 'la_tin' | 'li_uid' | 'li_vat' | 'ma_vat' | 'md_vat' | 'me_pib' | 'mk_vat' | 'mr_nif' | 'mx_rfc' | 'my_frp' | 'my_itn' | 'my_sst' | 'ng_tin' | 'no_vat' | 'no_voec' | 'np_pan' | 'nz_gst' | 'om_vat' | 'pe_ruc' | 'ph_tin' | 'ro_tin' | 'rs_pib' | 'ru_inn' | 'ru_kpp' | 'sa_vat' | 'sg_gst' | 'sg_uen' | 'si_tin' | 'sn_ninea' | 'sr_fin' | 'sv_nit' | 'th_vat' | 'tj_tin' | 'tr_tin' | 'tw_vat' | 'tz_vat' | 'ua_vat' | 'ug_tin' | 'us_ein' | 'uy_ruc' | 'uz_tin' | 'uz_vat' | 've_rif' | 'vn_tin' | 'za_vat' | 'zm_tin' | 'zw_tin';
        }
    }
    namespace InvoiceItem {
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
        interface Period {
            /**
             * The end of the period, which must be greater than or equal to the start. This value is inclusive.
             */
            end: number;
            /**
             * The start of the period. This value is inclusive.
             */
            start: number;
        }
        interface PriceData {
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;
            /**
             * The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to.
             */
            product: string;
            /**
             * Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
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
        type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        namespace PriceData {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
    }
    namespace Issuer {
        type Type = 'account' | 'self';
    }
    namespace ScheduleDetails {
        interface BillingMode {
            /**
             * Configure behavior for flexible billing mode.
             */
            flexible?: BillingMode.Flexible;
            /**
             * Controls the calculation and orchestration of prorations and invoices for subscriptions. If no value is passed, the default is `flexible`.
             */
            type: BillingMode.Type;
        }
        type EndBehavior = 'cancel' | 'release';
        interface Phase {
            /**
             * A list of prices and quantities that will generate invoice items appended to the next invoice for this phase. You may pass up to 20 items.
             */
            add_invoice_items?: Array<Phase.AddInvoiceItem>;
            /**
             * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
             */
            application_fee_percent?: number;
            /**
             * Automatic tax settings for this phase.
             */
            automatic_tax?: Phase.AutomaticTax;
            /**
             * Can be set to `phase_start` to set the anchor to the start of the phase or `automatic` to automatically change it if needed. Cannot be set to `phase_start` if this phase specifies a trial. For more information, see the billing cycle [documentation](https://docs.stripe.com/billing/subscriptions/billing-cycle).
             */
            billing_cycle_anchor?: Phase.BillingCycleAnchor;
            /**
             * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
             */
            billing_thresholds?: Emptyable<Phase.BillingThresholds>;
            /**
             * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically` on creation.
             */
            collection_method?: Phase.CollectionMethod;
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency?: string;
            /**
             * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
             */
            default_payment_method?: string;
            /**
             * A list of [Tax Rate](https://docs.stripe.com/api/tax_rates) ids. These Tax Rates will set the Subscription's [`default_tax_rates`](https://docs.stripe.com/api/subscriptions/create#create_subscription-default_tax_rates), which means they will be the Invoice's [`default_tax_rates`](https://docs.stripe.com/api/invoices/create#create_invoice-default_tax_rates) for any Invoices issued by the Subscription during this Phase.
             */
            default_tax_rates?: Emptyable<Array<string>>;
            /**
             * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
             */
            description?: Emptyable<string>;
            /**
             * The coupons to redeem into discounts for the schedule phase. If not specified, inherits the discount from the subscription's customer. Pass an empty string to avoid inheriting any discounts.
             */
            discounts?: Emptyable<Array<Phase.Discount>>;
            /**
             * The number of intervals the phase should last. If set, `end_date` must not be set.
             */
            duration?: Phase.Duration;
            /**
             * The date at which this phase of the subscription schedule ends. If set, `duration` must not be set.
             */
            end_date?: number | 'now';
            /**
             * All invoices will be billed using the specified settings.
             */
            invoice_settings?: Phase.InvoiceSettings;
            /**
             * List of configuration items, each with an attached price, to apply during this phase of the subscription schedule.
             */
            items: Array<Phase.Item>;
            /**
             * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to a phase. Metadata on a schedule's phase will update the underlying subscription's `metadata` when the phase is entered, adding new keys and replacing existing keys in the subscription's `metadata`. Individual keys in the subscription's `metadata` can be unset by posting an empty value to them in the phase's `metadata`. To unset all keys in the subscription's `metadata`, update the subscription directly or unset every key individually from the phase's `metadata`.
             */
            metadata?: MetadataParam;
            /**
             * The account on behalf of which to charge, for each of the associated subscription's invoices.
             */
            on_behalf_of?: string;
            /**
             * Controls whether the subscription schedule should create [prorations](https://docs.stripe.com/billing/subscriptions/prorations) when transitioning to this phase if there is a difference in billing configuration. It's different from the request-level [proration_behavior](https://docs.stripe.com/api/subscription_schedules/update#update_subscription_schedule-proration_behavior) parameter which controls what happens if the update request affects the billing configuration (item price, quantity, etc.) of the current phase.
             */
            proration_behavior?: Phase.ProrationBehavior;
            /**
             * The date at which this phase of the subscription schedule starts or `now`. Must be set on the first phase.
             */
            start_date?: number | 'now';
            /**
             * The data with which to automatically create a Transfer for each of the associated subscription's invoices.
             */
            transfer_data?: Phase.TransferData;
            /**
             * If set to true the entire phase is counted as a trial and the customer will not be charged for any fees.
             */
            trial?: boolean;
            /**
             * Sets the phase to trialing from the start date to this date. Must be before the phase end date, can not be combined with `trial`
             */
            trial_end?: number | 'now';
        }
        type ProrationBehavior = 'always_invoice' | 'create_prorations' | 'none';
        namespace BillingMode {
            interface Flexible {
                /**
                 * Controls how invoices and invoice items display proration amounts and discount amounts.
                 */
                proration_discounts?: Flexible.ProrationDiscounts;
            }
            type Type = 'classic' | 'flexible';
            namespace Flexible {
                type ProrationDiscounts = 'included' | 'itemized';
            }
        }
        namespace Phase {
            interface AddInvoiceItem {
                /**
                 * The coupons to redeem into discounts for the item.
                 */
                discounts?: Array<AddInvoiceItem.Discount>;
                /**
                 * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
                 */
                metadata?: MetadataParam;
                /**
                 * The period associated with this invoice item. If not set, `period.start.type` defaults to `max_item_period_start` and `period.end.type` defaults to `min_item_period_end`.
                 */
                period?: AddInvoiceItem.Period;
                /**
                 * The ID of the price object. One of `price` or `price_data` is required.
                 */
                price?: string;
                /**
                 * Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline. One of `price` or `price_data` is required.
                 */
                price_data?: AddInvoiceItem.PriceData;
                /**
                 * Quantity for this item. Defaults to 1.
                 */
                quantity?: number;
                /**
                 * The tax rates which apply to the item. When set, the `default_tax_rates` do not apply to this item.
                 */
                tax_rates?: Emptyable<Array<string>>;
            }
            interface AutomaticTax {
                /**
                 * Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription.
                 */
                enabled: boolean;
                /**
                 * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
                 */
                liability?: AutomaticTax.Liability;
            }
            type BillingCycleAnchor = 'automatic' | 'phase_start';
            interface BillingThresholds {
                /**
                 * Monetary threshold that triggers the subscription to advance to a new billing period
                 */
                amount_gte?: number;
                /**
                 * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged.
                 */
                reset_billing_cycle_anchor?: boolean;
            }
            type CollectionMethod = 'charge_automatically' | 'send_invoice';
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
            interface Duration {
                /**
                 * Specifies phase duration. Either `day`, `week`, `month` or `year`.
                 */
                interval: Duration.Interval;
                /**
                 * The multiplier applied to the interval.
                 */
                interval_count?: number;
            }
            interface InvoiceSettings {
                /**
                 * The account tax IDs associated with this phase of the subscription schedule. Will be set on invoices generated by this phase of the subscription schedule.
                 */
                account_tax_ids?: Emptyable<Array<string>>;
                /**
                 * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
                 */
                days_until_due?: number;
                /**
                 * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
                 */
                issuer?: InvoiceSettings.Issuer;
            }
            interface Item {
                /**
                 * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
                 */
                billing_thresholds?: Emptyable<Item.BillingThresholds>;
                /**
                 * The coupons to redeem into discounts for the subscription item.
                 */
                discounts?: Emptyable<Array<Item.Discount>>;
                /**
                 * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to a configuration item. Metadata on a configuration item will update the underlying subscription item's `metadata` when the phase is entered, adding new keys and replacing existing keys. Individual keys in the subscription item's `metadata` can be unset by posting an empty value to them in the configuration item's `metadata`. To unset all keys in the subscription item's `metadata`, update the subscription item directly or unset every key individually from the configuration item's `metadata`.
                 */
                metadata?: MetadataParam;
                /**
                 * The plan ID to subscribe to. You may specify the same ID in `plan` and `price`.
                 */
                plan?: string;
                /**
                 * The ID of the price object.
                 */
                price?: string;
                /**
                 * Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline.
                 */
                price_data?: Item.PriceData;
                /**
                 * Quantity for the given price. Can be set only if the price's `usage_type` is `licensed` and not `metered`.
                 */
                quantity?: number;
                /**
                 * A list of [Tax Rate](https://docs.stripe.com/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://docs.stripe.com/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
                 */
                tax_rates?: Emptyable<Array<string>>;
            }
            type ProrationBehavior = 'always_invoice' | 'create_prorations' | 'none';
            interface TransferData {
                /**
                 * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
                 */
                amount_percent?: number;
                /**
                 * ID of an existing, connected Stripe account.
                 */
                destination: string;
            }
            namespace AddInvoiceItem {
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
                interface Period {
                    /**
                     * End of the invoice item period.
                     */
                    end: Period.End;
                    /**
                     * Start of the invoice item period.
                     */
                    start: Period.Start;
                }
                interface PriceData {
                    /**
                     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
                     */
                    currency: string;
                    /**
                     * The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to.
                     */
                    product: string;
                    /**
                     * Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
                     */
                    tax_behavior?: PriceData.TaxBehavior;
                    /**
                     * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge or a negative integer representing the amount to credit to the customer.
                     */
                    unit_amount?: number;
                    /**
                     * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
                     */
                    unit_amount_decimal?: string;
                }
                namespace Period {
                    interface End {
                        /**
                         * A precise Unix timestamp for the end of the invoice item period. Must be greater than or equal to `period.start`.
                         */
                        timestamp?: number;
                        /**
                         * Select how to calculate the end of the invoice item period.
                         */
                        type: End.Type;
                    }
                    interface Start {
                        /**
                         * A precise Unix timestamp for the start of the invoice item period. Must be less than or equal to `period.end`.
                         */
                        timestamp?: number;
                        /**
                         * Select how to calculate the start of the invoice item period.
                         */
                        type: Start.Type;
                    }
                    namespace End {
                        type Type = 'min_item_period_end' | 'phase_end' | 'timestamp';
                    }
                    namespace Start {
                        type Type = 'max_item_period_start' | 'phase_start' | 'timestamp';
                    }
                }
                namespace PriceData {
                    type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
                }
            }
            namespace AutomaticTax {
                interface Liability {
                    /**
                     * The connected account being referenced when `type` is `account`.
                     */
                    account?: string;
                    /**
                     * Type of the account referenced in the request.
                     */
                    type: Liability.Type;
                }
                namespace Liability {
                    type Type = 'account' | 'self';
                }
            }
            namespace Duration {
                type Interval = 'day' | 'month' | 'week' | 'year';
            }
            namespace InvoiceSettings {
                interface Issuer {
                    /**
                     * The connected account being referenced when `type` is `account`.
                     */
                    account?: string;
                    /**
                     * Type of the account referenced in the request.
                     */
                    type: Issuer.Type;
                }
                namespace Issuer {
                    type Type = 'account' | 'self';
                }
            }
            namespace Item {
                interface BillingThresholds {
                    /**
                     * Number of units that meets the billing threshold to advance the subscription to a new billing period (e.g., it takes 10 $5 units to meet a $50 [monetary threshold](https://docs.stripe.com/api/subscriptions/update#update_subscription-billing_thresholds-amount_gte))
                     */
                    usage_gte: number;
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
                interface PriceData {
                    /**
                     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
                     */
                    currency: string;
                    /**
                     * The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to.
                     */
                    product: string;
                    /**
                     * The recurring components of a price such as `interval` and `interval_count`.
                     */
                    recurring: PriceData.Recurring;
                    /**
                     * Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
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
                    interface Recurring {
                        /**
                         * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
                         */
                        interval: Recurring.Interval;
                        /**
                         * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).
                         */
                        interval_count?: number;
                    }
                    type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
                    namespace Recurring {
                        type Interval = 'day' | 'month' | 'week' | 'year';
                    }
                }
            }
        }
    }
    namespace SubscriptionDetails {
        type BillingCycleAnchor = 'now' | 'unchanged';
        interface BillingMode {
            /**
             * Configure behavior for flexible billing mode.
             */
            flexible?: BillingMode.Flexible;
            /**
             * Controls the calculation and orchestration of prorations and invoices for subscriptions. If no value is passed, the default is `flexible`.
             */
            type: BillingMode.Type;
        }
        type CancelAt = 'max_period_end' | 'min_period_end';
        interface Item {
            /**
             * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
             */
            billing_thresholds?: Emptyable<Item.BillingThresholds>;
            /**
             * Delete all usage for a given subscription item. You must pass this when deleting a usage records subscription item. `clear_usage` has no effect if the plan has a billing meter attached.
             */
            clear_usage?: boolean;
            /**
             * A flag that, if set to `true`, will delete the specified item.
             */
            deleted?: boolean;
            /**
             * The coupons to redeem into discounts for the subscription item.
             */
            discounts?: Emptyable<Array<Item.Discount>>;
            /**
             * Subscription item to update.
             */
            id?: string;
            /**
             * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: Emptyable<MetadataParam>;
            /**
             * Plan ID for this item, as a string.
             */
            plan?: string;
            /**
             * The ID of the price object. One of `price` or `price_data` is required. When changing a subscription item's price, `quantity` is set to 1 unless a `quantity` parameter is provided.
             */
            price?: string;
            /**
             * Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline. One of `price` or `price_data` is required.
             */
            price_data?: Item.PriceData;
            /**
             * Quantity for this item.
             */
            quantity?: number;
            /**
             * A list of [Tax Rate](https://docs.stripe.com/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://docs.stripe.com/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
             */
            tax_rates?: Emptyable<Array<string>>;
        }
        type ProrationBehavior = 'always_invoice' | 'create_prorations' | 'none';
        namespace BillingMode {
            interface Flexible {
                /**
                 * Controls how invoices and invoice items display proration amounts and discount amounts.
                 */
                proration_discounts?: Flexible.ProrationDiscounts;
            }
            type Type = 'classic' | 'flexible';
            namespace Flexible {
                type ProrationDiscounts = 'included' | 'itemized';
            }
        }
        namespace Item {
            interface BillingThresholds {
                /**
                 * Number of units that meets the billing threshold to advance the subscription to a new billing period (e.g., it takes 10 $5 units to meet a $50 [monetary threshold](https://docs.stripe.com/api/subscriptions/update#update_subscription-billing_thresholds-amount_gte))
                 */
                usage_gte: number;
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
            interface PriceData {
                /**
                 * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
                 */
                currency: string;
                /**
                 * The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to.
                 */
                product: string;
                /**
                 * The recurring components of a price such as `interval` and `interval_count`.
                 */
                recurring: PriceData.Recurring;
                /**
                 * Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
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
                interface Recurring {
                    /**
                     * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
                     */
                    interval: Recurring.Interval;
                    /**
                     * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).
                     */
                    interval_count?: number;
                }
                type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
                namespace Recurring {
                    type Interval = 'day' | 'month' | 'week' | 'year';
                }
            }
        }
    }
}
export interface InvoiceFinalizeInvoiceParams {
    /**
     * Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. If `false`, the invoice's state doesn't automatically advance without an explicit action.
     */
    auto_advance?: boolean;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface InvoiceListLineItemsParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface InvoiceMarkUncollectibleParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface InvoicePayParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * In cases where the source used to pay the invoice has insufficient funds, passing `forgive=true` controls whether a charge should be attempted for the full amount available on the source, up to the amount to fully pay the invoice. This effectively forgives the difference between the amount available on the source and the amount due.
     *
     * Passing `forgive=false` will fail the charge if the source hasn't been pre-funded with the right amount. An example for this case is with ACH Credit Transfers and wires: if the amount wired is less than the amount due by a small amount, you might want to forgive the difference. Defaults to `false`.
     */
    forgive?: boolean;
    /**
     * ID of the mandate to be used for this invoice. It must correspond to the payment method used to pay the invoice, including the payment_method param or the invoice's default_payment_method or default_source, if set.
     */
    mandate?: Emptyable<string>;
    /**
     * Indicates if a customer is on or off-session while an invoice payment is attempted. Defaults to `true` (off-session).
     */
    off_session?: boolean;
    /**
     * Boolean representing whether an invoice is paid outside of Stripe. This will result in no charge being made. Defaults to `false`.
     */
    paid_out_of_band?: boolean;
    /**
     * A PaymentMethod to be charged. The PaymentMethod must be the ID of a PaymentMethod belonging to the customer associated with the invoice being paid.
     */
    payment_method?: string;
    /**
     * A payment source to be charged. The source must be the ID of a source belonging to the customer associated with the invoice being paid.
     */
    source?: string;
}
export interface InvoiceRemoveLinesParams {
    /**
     * The line items to remove.
     */
    lines: Array<InvoiceRemoveLinesParams.Line>;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    invoice_metadata?: Emptyable<{
        [key: string]: string;
    }>;
}
export declare namespace InvoiceRemoveLinesParams {
    interface Line {
        /**
         * Either `delete` or `unassign`. Deleted line items are permanently deleted. Unassigned line items can be reassigned to an invoice.
         */
        behavior: Line.Behavior;
        /**
         * ID of an existing line item to remove from this invoice.
         */
        id: string;
    }
    namespace Line {
        type Behavior = 'delete' | 'unassign';
    }
}
export interface InvoiceSearchParams {
    /**
     * The search query string. See [search query language](https://docs.stripe.com/search#search-query-language) and the list of supported [query fields for invoices](https://docs.stripe.com/search#query-fields-for-invoices).
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
export interface InvoiceSendInvoiceParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface InvoiceUpdateLinesParams {
    /**
     * The line items to update.
     */
    lines: Array<InvoiceUpdateLinesParams.Line>;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. For [type=subscription](https://docs.stripe.com/api/invoices/line_item#invoice_line_item_object-type) line items, the incoming metadata specified on the request is directly used to set this value, in contrast to [type=invoiceitem](api/invoices/line_item#invoice_line_item_object-type) line items, where any existing metadata on the invoice line is merged with the incoming data.
     */
    invoice_metadata?: Emptyable<{
        [key: string]: string;
    }>;
}
export declare namespace InvoiceUpdateLinesParams {
    interface Line {
        /**
         * The integer amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's account, pass a negative amount.
         */
        amount?: number;
        /**
         * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
         */
        description?: string;
        /**
         * Controls whether discounts apply to this line item. Defaults to false for prorations or negative line items, and true for all other line items. Cannot be set to true for prorations.
         */
        discountable?: boolean;
        /**
         * The coupons, promotion codes & existing discounts which apply to the line item. Item discounts are applied before invoice discounts. Pass an empty string to remove previously-defined discounts.
         */
        discounts?: Emptyable<Array<Line.Discount>>;
        /**
         * ID of an existing line item on the invoice.
         */
        id: string;
        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. For [type=subscription](https://docs.stripe.com/api/invoices/line_item#invoice_line_item_object-type) line items, the incoming metadata specified on the request is directly used to set this value, in contrast to [type=invoiceitem](api/invoices/line_item#invoice_line_item_object-type) line items, where any existing metadata on the invoice line is merged with the incoming data.
         */
        metadata?: Emptyable<MetadataParam>;
        /**
         * The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://docs.stripe.com/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://docs.stripe.com/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
         */
        period?: Line.Period;
        /**
         * Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline.
         */
        price_data?: Line.PriceData;
        /**
         * The pricing information for the invoice item.
         */
        pricing?: Line.Pricing;
        /**
         * Non-negative integer. The quantity of units for the line item.
         */
        quantity?: number;
        /**
         * A list of up to 10 tax amounts for this line item. This can be useful if you calculate taxes on your own or use a third-party to calculate them. You cannot set tax amounts if any line item has [tax_rates](https://docs.stripe.com/api/invoices/line_item#invoice_line_item_object-tax_rates) or if the invoice has [default_tax_rates](https://docs.stripe.com/api/invoices/object#invoice_object-default_tax_rates) or uses [automatic tax](https://docs.stripe.com/tax/invoicing). Pass an empty string to remove previously defined tax amounts.
         */
        tax_amounts?: Emptyable<Array<Line.TaxAmount>>;
        /**
         * The tax rates which apply to the line item. When set, the `default_tax_rates` on the invoice do not apply to this line item. Pass an empty string to remove previously-defined tax rates.
         */
        tax_rates?: Emptyable<Array<string>>;
    }
    namespace Line {
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
        interface Period {
            /**
             * The end of the period, which must be greater than or equal to the start. This value is inclusive.
             */
            end: number;
            /**
             * The start of the period. This value is inclusive.
             */
            start: number;
        }
        interface PriceData {
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;
            /**
             * The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to. One of `product` or `product_data` is required.
             */
            product?: string;
            /**
             * Data used to generate a new [Product](https://docs.stripe.com/api/products) object inline. One of `product` or `product_data` is required.
             */
            product_data?: PriceData.ProductData;
            /**
             * Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
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
        interface Pricing {
            /**
             * The ID of the price object.
             */
            price?: string;
        }
        interface TaxAmount {
            /**
             * The amount, in cents (or local equivalent), of the tax.
             */
            amount: number;
            /**
             * Data to find or create a TaxRate object.
             *
             * Stripe automatically creates or reuses a TaxRate object for each tax amount. If the `tax_rate_data` exactly matches a previous value, Stripe will reuse the TaxRate object. TaxRate objects created automatically by Stripe are immediately archived, do not appear in the line item's `tax_rates`, and cannot be directly added to invoices, payments, or line items.
             */
            tax_rate_data: TaxAmount.TaxRateData;
            /**
             * The reasoning behind this tax, for example, if the product is tax exempt.
             */
            taxability_reason?: TaxAmount.TaxabilityReason;
            /**
             * The amount on which tax is calculated, in cents (or local equivalent).
             */
            taxable_amount: number;
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
                 * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
                 */
                metadata?: MetadataParam;
                /**
                 * The product's name, meant to be displayable to the customer.
                 */
                name: string;
                /**
                 * A [tax code](https://docs.stripe.com/tax/tax-categories) ID.
                 */
                tax_code?: string;
                /**
                 * A label that represents units of this product. When set, this will be included in customers' receipts, invoices, Checkout, and the customer portal.
                 */
                unit_label?: string;
            }
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
        namespace TaxAmount {
            interface TaxRateData {
                /**
                 * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                 */
                country?: string;
                /**
                 * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
                 */
                description?: string;
                /**
                 * The display name of the tax rate, which will be shown to users.
                 */
                display_name: string;
                /**
                 * This specifies if the tax rate is inclusive or exclusive.
                 */
                inclusive: boolean;
                /**
                 * The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer's invoice.
                 */
                jurisdiction?: string;
                /**
                 * The level of the jurisdiction that imposes this tax rate.
                 */
                jurisdiction_level?: TaxRateData.JurisdictionLevel;
                /**
                 * The statutory tax rate percent. This field accepts decimal values between 0 and 100 inclusive with at most 4 decimal places. To accommodate fixed-amount taxes, set the percentage to zero. Stripe will not display zero percentages on the invoice unless the `amount` of the tax is also zero.
                 */
                percentage: number;
                /**
                 * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country prefix. For example, "NY" for New York, United States.
                 */
                state?: string;
                /**
                 * The high-level tax type, such as `vat` or `sales_tax`.
                 */
                tax_type?: TaxRateData.TaxType;
            }
            type TaxabilityReason = 'customer_exempt' | 'not_collecting' | 'not_subject_to_tax' | 'not_supported' | 'portion_product_exempt' | 'portion_reduced_rated' | 'portion_standard_rated' | 'product_exempt' | 'product_exempt_holiday' | 'proportionally_rated' | 'reduced_rated' | 'reverse_charge' | 'standard_rated' | 'taxable_basis_reduced' | 'zero_rated';
            namespace TaxRateData {
                type JurisdictionLevel = 'city' | 'country' | 'county' | 'district' | 'multiple' | 'state';
                type TaxType = 'amusement_tax' | 'communications_tax' | 'gst' | 'hst' | 'igst' | 'jct' | 'lease_tax' | 'pst' | 'qst' | 'retail_delivery_fee' | 'rst' | 'sales_tax' | 'service_tax' | 'vat';
            }
        }
    }
}
export interface InvoiceUpdateLineItemParams {
    /**
     * The integer amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's account, pass a negative amount.
     */
    amount?: number;
    /**
     * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
     */
    description?: string;
    /**
     * Controls whether discounts apply to this line item. Defaults to false for prorations or negative line items, and true for all other line items. Cannot be set to true for prorations.
     */
    discountable?: boolean;
    /**
     * The coupons, promotion codes & existing discounts which apply to the line item. Item discounts are applied before invoice discounts. Pass an empty string to remove previously-defined discounts.
     */
    discounts?: Emptyable<Array<InvoiceUpdateLineItemParams.Discount>>;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. For [type=subscription](https://docs.stripe.com/api/invoices/line_item#invoice_line_item_object-type) line items, the incoming metadata specified on the request is directly used to set this value, in contrast to [type=invoiceitem](api/invoices/line_item#invoice_line_item_object-type) line items, where any existing metadata on the invoice line is merged with the incoming data.
     */
    metadata?: Emptyable<MetadataParam>;
    /**
     * The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://docs.stripe.com/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://docs.stripe.com/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
     */
    period?: InvoiceUpdateLineItemParams.Period;
    /**
     * Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline.
     */
    price_data?: InvoiceUpdateLineItemParams.PriceData;
    /**
     * The pricing information for the invoice item.
     */
    pricing?: InvoiceUpdateLineItemParams.Pricing;
    /**
     * Non-negative integer. The quantity of units for the line item.
     */
    quantity?: number;
    /**
     * A list of up to 10 tax amounts for this line item. This can be useful if you calculate taxes on your own or use a third-party to calculate them. You cannot set tax amounts if any line item has [tax_rates](https://docs.stripe.com/api/invoices/line_item#invoice_line_item_object-tax_rates) or if the invoice has [default_tax_rates](https://docs.stripe.com/api/invoices/object#invoice_object-default_tax_rates) or uses [automatic tax](https://docs.stripe.com/tax/invoicing). Pass an empty string to remove previously defined tax amounts.
     */
    tax_amounts?: Emptyable<Array<InvoiceUpdateLineItemParams.TaxAmount>>;
    /**
     * The tax rates which apply to the line item. When set, the `default_tax_rates` on the invoice do not apply to this line item. Pass an empty string to remove previously-defined tax rates.
     */
    tax_rates?: Emptyable<Array<string>>;
}
export declare namespace InvoiceUpdateLineItemParams {
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
    interface Period {
        /**
         * The end of the period, which must be greater than or equal to the start. This value is inclusive.
         */
        end: number;
        /**
         * The start of the period. This value is inclusive.
         */
        start: number;
    }
    interface PriceData {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;
        /**
         * The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to. One of `product` or `product_data` is required.
         */
        product?: string;
        /**
         * Data used to generate a new [Product](https://docs.stripe.com/api/products) object inline. One of `product` or `product_data` is required.
         */
        product_data?: PriceData.ProductData;
        /**
         * Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
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
    interface Pricing {
        /**
         * The ID of the price object.
         */
        price?: string;
    }
    interface TaxAmount {
        /**
         * The amount, in cents (or local equivalent), of the tax.
         */
        amount: number;
        /**
         * Data to find or create a TaxRate object.
         *
         * Stripe automatically creates or reuses a TaxRate object for each tax amount. If the `tax_rate_data` exactly matches a previous value, Stripe will reuse the TaxRate object. TaxRate objects created automatically by Stripe are immediately archived, do not appear in the line item's `tax_rates`, and cannot be directly added to invoices, payments, or line items.
         */
        tax_rate_data: TaxAmount.TaxRateData;
        /**
         * The reasoning behind this tax, for example, if the product is tax exempt.
         */
        taxability_reason?: TaxAmount.TaxabilityReason;
        /**
         * The amount on which tax is calculated, in cents (or local equivalent).
         */
        taxable_amount: number;
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
             * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: MetadataParam;
            /**
             * The product's name, meant to be displayable to the customer.
             */
            name: string;
            /**
             * A [tax code](https://docs.stripe.com/tax/tax-categories) ID.
             */
            tax_code?: string;
            /**
             * A label that represents units of this product. When set, this will be included in customers' receipts, invoices, Checkout, and the customer portal.
             */
            unit_label?: string;
        }
        type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
    }
    namespace TaxAmount {
        interface TaxRateData {
            /**
             * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
             */
            country?: string;
            /**
             * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
             */
            description?: string;
            /**
             * The display name of the tax rate, which will be shown to users.
             */
            display_name: string;
            /**
             * This specifies if the tax rate is inclusive or exclusive.
             */
            inclusive: boolean;
            /**
             * The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer's invoice.
             */
            jurisdiction?: string;
            /**
             * The level of the jurisdiction that imposes this tax rate.
             */
            jurisdiction_level?: TaxRateData.JurisdictionLevel;
            /**
             * The statutory tax rate percent. This field accepts decimal values between 0 and 100 inclusive with at most 4 decimal places. To accommodate fixed-amount taxes, set the percentage to zero. Stripe will not display zero percentages on the invoice unless the `amount` of the tax is also zero.
             */
            percentage: number;
            /**
             * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country prefix. For example, "NY" for New York, United States.
             */
            state?: string;
            /**
             * The high-level tax type, such as `vat` or `sales_tax`.
             */
            tax_type?: TaxRateData.TaxType;
        }
        type TaxabilityReason = 'customer_exempt' | 'not_collecting' | 'not_subject_to_tax' | 'not_supported' | 'portion_product_exempt' | 'portion_reduced_rated' | 'portion_standard_rated' | 'product_exempt' | 'product_exempt_holiday' | 'proportionally_rated' | 'reduced_rated' | 'reverse_charge' | 'standard_rated' | 'taxable_basis_reduced' | 'zero_rated';
        namespace TaxRateData {
            type JurisdictionLevel = 'city' | 'country' | 'county' | 'district' | 'multiple' | 'state';
            type TaxType = 'amusement_tax' | 'communications_tax' | 'gst' | 'hst' | 'igst' | 'jct' | 'lease_tax' | 'pst' | 'qst' | 'retail_delivery_fee' | 'rst' | 'sales_tax' | 'service_tax' | 'vat';
        }
    }
}
export interface InvoiceVoidInvoiceParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
