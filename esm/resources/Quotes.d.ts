import { StripeResource } from '../StripeResource.js';
import { LineItem } from './LineItems.js';
import { Discount } from './Discounts.js';
import { Application, DeletedApplication } from './Applications.js';
import { Customer, DeletedCustomer } from './Customers.js';
import { TaxRate } from './TaxRates.js';
import { Invoice, DeletedInvoice } from './Invoices.js';
import { Account } from './Accounts.js';
import { Subscription } from './Subscriptions.js';
import { SubscriptionSchedule } from './SubscriptionSchedules.js';
import * as TestHelpers from './TestHelpers/index.js';
import { Emptyable, MetadataParam, PaginationParams, Metadata } from '../shared.js';
import { RequestOptions, ApiListPromise, Response, ApiList, StripeStreamResponse } from '../lib.js';
export declare class QuoteResource extends StripeResource {
    /**
     * Returns a list of your quotes.
     */
    list(params?: QuoteListParams, options?: RequestOptions): ApiListPromise<Quote>;
    list(options?: RequestOptions): ApiListPromise<Quote>;
    /**
     * A quote models prices and services for a customer. Default options for header, description, footer, and expires_at can be set in the dashboard via the [quote template](https://dashboard.stripe.com/settings/billing/quote).
     */
    create(params?: QuoteCreateParams, options?: RequestOptions): Promise<Response<Quote>>;
    create(options?: RequestOptions): Promise<Response<Quote>>;
    /**
     * Retrieves the quote with the given ID.
     */
    retrieve(id: string, params?: QuoteRetrieveParams, options?: RequestOptions): Promise<Response<Quote>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<Quote>>;
    /**
     * A quote models prices and services for a customer.
     */
    update(id: string, params?: QuoteUpdateParams, options?: RequestOptions): Promise<Response<Quote>>;
    /**
     * Accepts the specified quote.
     */
    accept(id: string, params?: QuoteAcceptParams, options?: RequestOptions): Promise<Response<Quote>>;
    accept(id: string, options?: RequestOptions): Promise<Response<Quote>>;
    /**
     * Cancels the quote.
     */
    cancel(id: string, params?: QuoteCancelParams, options?: RequestOptions): Promise<Response<Quote>>;
    cancel(id: string, options?: RequestOptions): Promise<Response<Quote>>;
    /**
     * Finalizes the quote.
     */
    finalizeQuote(id: string, params?: QuoteFinalizeQuoteParams, options?: RequestOptions): Promise<Response<Quote>>;
    finalizeQuote(id: string, options?: RequestOptions): Promise<Response<Quote>>;
    /**
     * Download the PDF for a finalized quote. Explanation for special handling can be found [here](https://docs.stripe.com/quotes/overview#quote_pdf)
     */
    pdf(id: string, params?: QuotePdfParams, options?: RequestOptions): Promise<StripeStreamResponse>;
    pdf(id: string, options?: RequestOptions): Promise<StripeStreamResponse>;
    /**
     * When retrieving a quote, there is an includable [computed.upfront.line_items](https://stripe.com/docs/api/quotes/object#quote_object-computed-upfront-line_items) property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of upfront line items.
     */
    listComputedUpfrontLineItems(id: string, params?: QuoteListComputedUpfrontLineItemsParams, options?: RequestOptions): ApiListPromise<LineItem>;
    listComputedUpfrontLineItems(id: string, options?: RequestOptions): ApiListPromise<LineItem>;
    /**
     * When retrieving a quote, there is an includable line_items property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
     */
    listLineItems(id: string, params?: QuoteListLineItemsParams, options?: RequestOptions): ApiListPromise<LineItem>;
    listLineItems(id: string, options?: RequestOptions): ApiListPromise<LineItem>;
}
export interface Quote {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'quote';
    /**
     * Total before any discounts or taxes are applied.
     */
    amount_subtotal: number;
    /**
     * Total after discounts and taxes are applied.
     */
    amount_total: number;
    /**
     * ID of the Connect Application that created the quote.
     */
    application: string | Application | DeletedApplication | null;
    /**
     * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. Only applicable if there are no line items with recurring prices on the quote.
     */
    application_fee_amount: number | null;
    /**
     * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. Only applicable if there are line items with recurring prices on the quote.
     */
    application_fee_percent: number | null;
    automatic_tax: Quote.AutomaticTax;
    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or on finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
     */
    collection_method: Quote.CollectionMethod;
    computed: Quote.Computed;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string | null;
    /**
     * The customer who received this quote. A customer is required to finalize the quote. Once specified, you can't change it.
     */
    customer: string | Customer | DeletedCustomer | null;
    /**
     * The account representing the customer who received this quote. A customer or account is required to finalize the quote. Once specified, you can't change it.
     */
    customer_account: string | null;
    /**
     * The tax rates applied to this quote.
     */
    default_tax_rates?: Array<string | TaxRate>;
    /**
     * A description that will be displayed on the quote PDF.
     */
    description: string | null;
    /**
     * The discounts applied to this quote.
     */
    discounts: Array<string | Discount>;
    /**
     * The date on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
     */
    expires_at: number;
    /**
     * A footer that will be displayed on the quote PDF.
     */
    footer: string | null;
    /**
     * Details of the quote that was cloned. See the [cloning documentation](https://docs.stripe.com/quotes/clone) for more details.
     */
    from_quote: Quote.FromQuote | null;
    /**
     * A header that will be displayed on the quote PDF.
     */
    header: string | null;
    /**
     * The invoice that was created from this quote.
     */
    invoice: string | Invoice | DeletedInvoice | null;
    invoice_settings: Quote.InvoiceSettings;
    /**
     * A list of items the customer is being quoted for.
     */
    line_items?: ApiList<LineItem>;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Metadata;
    /**
     * A unique number that identifies this particular quote. This number is assigned once the quote is [finalized](https://docs.stripe.com/quotes/overview#finalize).
     */
    number: string | null;
    /**
     * The account on behalf of which to charge. See the [Connect documentation](https://support.stripe.com/questions/sending-invoices-on-behalf-of-connected-accounts) for details.
     */
    on_behalf_of: string | Account | null;
    /**
     * The status of the quote.
     */
    status: Quote.Status;
    status_transitions: Quote.StatusTransitions;
    /**
     * The subscription that was created or updated from this quote.
     */
    subscription: string | Subscription | null;
    subscription_data: Quote.SubscriptionData;
    /**
     * The subscription schedule that was created or updated from this quote.
     */
    subscription_schedule: string | SubscriptionSchedule | null;
    /**
     * ID of the test clock this quote belongs to.
     */
    test_clock: string | TestHelpers.TestClock | null;
    total_details: Quote.TotalDetails;
    /**
     * The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the invoices.
     */
    transfer_data: Quote.TransferData | null;
}
export declare namespace Quote {
    interface AutomaticTax {
        /**
         * Automatically calculate taxes
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
         * The status of the most recent automated tax calculation for this quote.
         */
        status: AutomaticTax.Status | null;
    }
    type CollectionMethod = 'charge_automatically' | 'send_invoice';
    interface Computed {
        /**
         * The definitive totals and line items the customer will be charged on a recurring basis. Takes into account the line items with recurring prices and discounts with `duration=forever` coupons only. Defaults to `null` if no inputted line items with recurring prices.
         */
        recurring: Computed.Recurring | null;
        upfront: Computed.Upfront;
    }
    interface FromQuote {
        /**
         * Whether this quote is a revision of a different quote.
         */
        is_revision: boolean;
        /**
         * The quote that was cloned.
         */
        quote: string | Quote;
    }
    interface InvoiceSettings {
        /**
         * Number of days within which a customer must pay invoices generated by this quote. This value will be `null` for quotes where `collection_method=charge_automatically`.
         */
        days_until_due: number | null;
        issuer: InvoiceSettings.Issuer;
    }
    type Status = 'accepted' | 'canceled' | 'draft' | 'open';
    interface StatusTransitions {
        /**
         * The time that the quote was accepted. Measured in seconds since Unix epoch.
         */
        accepted_at: number | null;
        /**
         * The time that the quote was canceled. Measured in seconds since Unix epoch.
         */
        canceled_at: number | null;
        /**
         * The time that the quote was finalized. Measured in seconds since Unix epoch.
         */
        finalized_at: number | null;
    }
    interface SubscriptionData {
        /**
         * The billing mode of the quote.
         */
        billing_mode: SubscriptionData.BillingMode;
        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description: string | null;
        /**
         * When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. This date is ignored if it is in the past when the quote is accepted. Measured in seconds since the Unix epoch.
         */
        effective_date: number | null;
        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that will set metadata on the subscription or subscription schedule when the quote is accepted. If a recurring price is included in `line_items`, this field will be passed to the resulting subscription's `metadata` field. If `subscription_data.effective_date` is used, this field will be passed to the resulting subscription schedule's `phases.metadata` field. Unlike object-level metadata, this field is declarative. Updates will clear prior values.
         */
        metadata: Metadata | null;
        /**
         * Integer representing the number of trial period days before the customer is charged for the first time.
         */
        trial_period_days: number | null;
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
    interface TransferData {
        /**
         * The amount in cents (or local equivalent) that will be transferred to the destination account when the invoice is paid. By default, the entire amount is transferred to the destination.
         */
        amount: number | null;
        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount will be transferred to the destination.
         */
        amount_percent: number | null;
        /**
         * The account where funds from the payment will be transferred to upon payment success.
         */
        destination: string | Account;
    }
    namespace AutomaticTax {
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
    namespace Computed {
        interface Recurring {
            /**
             * Total before any discounts or taxes are applied.
             */
            amount_subtotal: number;
            /**
             * Total after discounts and taxes are applied.
             */
            amount_total: number;
            /**
             * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
             */
            interval: Recurring.Interval;
            /**
             * The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
             */
            interval_count: number;
            total_details: Recurring.TotalDetails;
        }
        interface Upfront {
            /**
             * Total before any discounts or taxes are applied.
             */
            amount_subtotal: number;
            /**
             * Total after discounts and taxes are applied.
             */
            amount_total: number;
            /**
             * The line items that will appear on the next invoice after this quote is accepted. This does not include pending invoice items that exist on the customer but may still be included in the next invoice.
             */
            line_items?: ApiList<LineItem>;
            total_details: Upfront.TotalDetails;
        }
        namespace Recurring {
            type Interval = 'day' | 'month' | 'week' | 'year';
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
                         * A discount represents the actual application of a [coupon](https://api.stripe.com#coupons) or [promotion code](https://api.stripe.com#promotion_codes).
                         * It contains information about when the discount began, when it will end, and what it is applied to.
                         *
                         * Related guide: [Applying discounts to subscriptions](https://docs.stripe.com/billing/subscriptions/discounts)
                         */
                        discount: Discount;
                    }
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
            }
        }
        namespace Upfront {
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
                         * A discount represents the actual application of a [coupon](https://api.stripe.com#coupons) or [promotion code](https://api.stripe.com#promotion_codes).
                         * It contains information about when the discount began, when it will end, and what it is applied to.
                         *
                         * Related guide: [Applying discounts to subscriptions](https://docs.stripe.com/billing/subscriptions/discounts)
                         */
                        discount: Discount;
                    }
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
            }
        }
    }
    namespace InvoiceSettings {
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
        namespace Issuer {
            type Type = 'account' | 'self';
        }
    }
    namespace SubscriptionData {
        interface BillingMode {
            flexible?: BillingMode.Flexible;
            /**
             * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
             */
            type: BillingMode.Type;
        }
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
                 * A discount represents the actual application of a [coupon](https://api.stripe.com#coupons) or [promotion code](https://api.stripe.com#promotion_codes).
                 * It contains information about when the discount began, when it will end, and what it is applied to.
                 *
                 * Related guide: [Applying discounts to subscriptions](https://docs.stripe.com/billing/subscriptions/discounts)
                 */
                discount: Discount;
            }
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
    }
}
export interface QuoteCreateParams {
    /**
     * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. There cannot be any line items with recurring prices when using this field.
     */
    application_fee_amount?: Emptyable<number>;
    /**
     * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
     */
    application_fee_percent?: Emptyable<number>;
    /**
     * Settings for automatic tax lookup for this quote and resulting invoices and subscriptions.
     */
    automatic_tax?: QuoteCreateParams.AutomaticTax;
    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or at invoice finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
     */
    collection_method?: QuoteCreateParams.CollectionMethod;
    /**
     * The customer for which this quote belongs to. A customer is required before finalizing the quote. Once specified, it cannot be changed.
     */
    customer?: string;
    /**
     * The account for which this quote belongs to. A customer or account is required before finalizing the quote. Once specified, it cannot be changed.
     */
    customer_account?: string;
    /**
     * The tax rates that will apply to any line item that does not have `tax_rates` set.
     */
    default_tax_rates?: Emptyable<Array<string>>;
    /**
     * A description that will be displayed on the quote PDF. If no value is passed, the default description configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
     */
    description?: Emptyable<string>;
    /**
     * The discounts applied to the quote.
     */
    discounts?: Emptyable<Array<QuoteCreateParams.Discount>>;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch. If no value is passed, the default expiration date configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
     */
    expires_at?: number;
    /**
     * A footer that will be displayed on the quote PDF. If no value is passed, the default footer configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
     */
    footer?: Emptyable<string>;
    /**
     * Clone an existing quote. The new quote will be created in `status=draft`. When using this parameter, you cannot specify any other parameters except for `expires_at`.
     */
    from_quote?: QuoteCreateParams.FromQuote;
    /**
     * A header that will be displayed on the quote PDF. If no value is passed, the default header configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
     */
    header?: Emptyable<string>;
    /**
     * All invoices will be billed using the specified settings.
     */
    invoice_settings?: QuoteCreateParams.InvoiceSettings;
    /**
     * A list of line items the customer is being quoted for. Each line item includes information about the product, the quantity, and the resulting cost.
     */
    line_items?: Array<QuoteCreateParams.LineItem>;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;
    /**
     * The account on behalf of which to charge.
     */
    on_behalf_of?: Emptyable<string>;
    /**
     * When creating a subscription or subscription schedule, the specified configuration data will be used. There must be at least one line item with a recurring price for a subscription or subscription schedule to be created. A subscription schedule is created if `subscription_data[effective_date]` is present and in the future, otherwise a subscription is created.
     */
    subscription_data?: QuoteCreateParams.SubscriptionData;
    /**
     * ID of the test clock to attach to the quote.
     */
    test_clock?: string;
    /**
     * The data with which to automatically create a Transfer for each of the invoices.
     */
    transfer_data?: Emptyable<QuoteCreateParams.TransferData>;
}
export declare namespace QuoteCreateParams {
    interface AutomaticTax {
        /**
         * Controls whether Stripe will automatically compute tax on the resulting invoices or subscriptions as well as the quote itself.
         */
        enabled: boolean;
        /**
         * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
         */
        liability?: AutomaticTax.Liability;
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
    interface FromQuote {
        /**
         * Whether this quote is a revision of the previous quote.
         */
        is_revision?: boolean;
        /**
         * The `id` of the quote that will be cloned.
         */
        quote: string;
    }
    interface InvoiceSettings {
        /**
         * Number of days within which a customer must pay the invoice generated by this quote. This value will be `null` for quotes where `collection_method=charge_automatically`.
         */
        days_until_due?: number;
        /**
         * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
         */
        issuer?: InvoiceSettings.Issuer;
    }
    interface LineItem {
        /**
         * The discounts applied to this line item.
         */
        discounts?: Emptyable<Array<LineItem.Discount>>;
        /**
         * The ID of the price object. One of `price` or `price_data` is required.
         */
        price?: string;
        /**
         * Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline. One of `price` or `price_data` is required.
         */
        price_data?: LineItem.PriceData;
        /**
         * The quantity of the line item.
         */
        quantity?: number;
        /**
         * The tax rates which apply to the line item. When set, the `default_tax_rates` on the quote do not apply to this line item.
         */
        tax_rates?: Emptyable<Array<string>>;
    }
    interface SubscriptionData {
        /**
         * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
         */
        billing_mode?: SubscriptionData.BillingMode;
        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description?: string;
        /**
         * When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. The `effective_date` is ignored if it is in the past when the quote is accepted.
         */
        effective_date?: Emptyable<'current_period_end' | number>;
        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that will set metadata on the subscription or subscription schedule when the quote is accepted. If a recurring price is included in `line_items`, this field will be passed to the resulting subscription's `metadata` field. If `subscription_data.effective_date` is used, this field will be passed to the resulting subscription schedule's `phases.metadata` field. Unlike object-level metadata, this field is declarative. Updates will clear prior values.
         */
        metadata?: MetadataParam;
        /**
         * Integer representing the number of trial period days before the customer is charged for the first time.
         */
        trial_period_days?: Emptyable<number>;
    }
    interface TransferData {
        /**
         * The amount that will be transferred automatically when the invoice is paid. If no amount is set, the full amount is transferred. There cannot be any line items with recurring prices when using this field.
         */
        amount?: number;
        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination. There must be at least 1 line item with a recurring price to use this field.
         */
        amount_percent?: number;
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
            recurring?: PriceData.Recurring;
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
    namespace SubscriptionData {
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
    }
}
export interface QuoteRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface QuoteUpdateParams {
    /**
     * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. There cannot be any line items with recurring prices when using this field.
     */
    application_fee_amount?: Emptyable<number>;
    /**
     * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
     */
    application_fee_percent?: Emptyable<number>;
    /**
     * Settings for automatic tax lookup for this quote and resulting invoices and subscriptions.
     */
    automatic_tax?: QuoteUpdateParams.AutomaticTax;
    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or at invoice finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
     */
    collection_method?: QuoteUpdateParams.CollectionMethod;
    /**
     * The customer for which this quote belongs to. A customer is required before finalizing the quote. Once specified, it cannot be changed.
     */
    customer?: string;
    /**
     * The account for which this quote belongs to. A customer or account is required before finalizing the quote. Once specified, it cannot be changed.
     */
    customer_account?: string;
    /**
     * The tax rates that will apply to any line item that does not have `tax_rates` set.
     */
    default_tax_rates?: Emptyable<Array<string>>;
    /**
     * A description that will be displayed on the quote PDF.
     */
    description?: Emptyable<string>;
    /**
     * The discounts applied to the quote.
     */
    discounts?: Emptyable<Array<QuoteUpdateParams.Discount>>;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
     */
    expires_at?: number;
    /**
     * A footer that will be displayed on the quote PDF.
     */
    footer?: Emptyable<string>;
    /**
     * A header that will be displayed on the quote PDF.
     */
    header?: Emptyable<string>;
    /**
     * All invoices will be billed using the specified settings.
     */
    invoice_settings?: QuoteUpdateParams.InvoiceSettings;
    /**
     * A list of line items the customer is being quoted for. Each line item includes information about the product, the quantity, and the resulting cost.
     */
    line_items?: Array<QuoteUpdateParams.LineItem>;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;
    /**
     * The account on behalf of which to charge.
     */
    on_behalf_of?: Emptyable<string>;
    /**
     * When creating a subscription or subscription schedule, the specified configuration data will be used. There must be at least one line item with a recurring price for a subscription or subscription schedule to be created. A subscription schedule is created if `subscription_data[effective_date]` is present and in the future, otherwise a subscription is created.
     */
    subscription_data?: QuoteUpdateParams.SubscriptionData;
    /**
     * The data with which to automatically create a Transfer for each of the invoices.
     */
    transfer_data?: Emptyable<QuoteUpdateParams.TransferData>;
}
export declare namespace QuoteUpdateParams {
    interface AutomaticTax {
        /**
         * Controls whether Stripe will automatically compute tax on the resulting invoices or subscriptions as well as the quote itself.
         */
        enabled: boolean;
        /**
         * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
         */
        liability?: AutomaticTax.Liability;
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
    interface InvoiceSettings {
        /**
         * Number of days within which a customer must pay the invoice generated by this quote. This value will be `null` for quotes where `collection_method=charge_automatically`.
         */
        days_until_due?: number;
        /**
         * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
         */
        issuer?: InvoiceSettings.Issuer;
    }
    interface LineItem {
        /**
         * The discounts applied to this line item.
         */
        discounts?: Emptyable<Array<LineItem.Discount>>;
        /**
         * The ID of an existing line item on the quote.
         */
        id?: string;
        /**
         * The ID of the price object. One of `price` or `price_data` is required.
         */
        price?: string;
        /**
         * Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline. One of `price` or `price_data` is required.
         */
        price_data?: LineItem.PriceData;
        /**
         * The quantity of the line item.
         */
        quantity?: number;
        /**
         * The tax rates which apply to the line item. When set, the `default_tax_rates` on the quote do not apply to this line item.
         */
        tax_rates?: Emptyable<Array<string>>;
    }
    interface SubscriptionData {
        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description?: Emptyable<string>;
        /**
         * When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. The `effective_date` is ignored if it is in the past when the quote is accepted.
         */
        effective_date?: Emptyable<'current_period_end' | number>;
        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that will set metadata on the subscription or subscription schedule when the quote is accepted. If a recurring price is included in `line_items`, this field will be passed to the resulting subscription's `metadata` field. If `subscription_data.effective_date` is used, this field will be passed to the resulting subscription schedule's `phases.metadata` field. Unlike object-level metadata, this field is declarative. Updates will clear prior values.
         */
        metadata?: MetadataParam;
        /**
         * Integer representing the number of trial period days before the customer is charged for the first time.
         */
        trial_period_days?: Emptyable<number>;
    }
    interface TransferData {
        /**
         * The amount that will be transferred automatically when the invoice is paid. If no amount is set, the full amount is transferred. There cannot be any line items with recurring prices when using this field.
         */
        amount?: number;
        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination. There must be at least 1 line item with a recurring price to use this field.
         */
        amount_percent?: number;
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
            recurring?: PriceData.Recurring;
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
export interface QuoteListParams extends PaginationParams {
    /**
     * The ID of the customer whose quotes you're retrieving.
     */
    customer?: string;
    /**
     * The ID of the account representing the customer whose quotes you're retrieving.
     */
    customer_account?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * The status of the quote.
     */
    status?: QuoteListParams.Status;
    /**
     * Provides a list of quotes that are associated with the specified test clock. The response will not include quotes with test clocks if this and the customer parameter is not set.
     */
    test_clock?: string;
}
export declare namespace QuoteListParams {
    type Status = 'accepted' | 'canceled' | 'draft' | 'open';
}
export interface QuoteAcceptParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface QuoteCancelParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface QuoteFinalizeQuoteParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
     */
    expires_at?: number;
}
export interface QuoteListComputedUpfrontLineItemsParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface QuoteListLineItemsParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface QuotePdfParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
