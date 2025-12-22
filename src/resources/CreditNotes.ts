// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {RequestOptions} from '../lib.js';
import {CreditNoteLineItem} from './CreditNoteLineItems.js';
import {Refund} from './Refunds.js';
import {Customer, DeletedCustomer} from './Customers.js';
import {CustomerBalanceTransaction} from './CustomerBalanceTransactions.js';
import {Invoice} from './Invoices.js';
import {Discount, DeletedDiscount} from './Discounts.js';
import {ShippingRate} from './ShippingRates.js';
import {TaxRate} from './TaxRates.js';
import * as Billing from './Billing/index.js';
import {
  MetadataParam,
  Emptyable,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../shared.js';
import {ApiListPromise, Response, ApiList} from '../lib.js';
const stripeMethod = StripeResource.method;
export class CreditNoteResource extends StripeResource {
  /**
   * Returns a list of credit notes.
   */
  list(
    params?: CreditNoteListParams,
    options?: RequestOptions
  ): ApiListPromise<CreditNote>;
  list(options?: RequestOptions): ApiListPromise<CreditNote>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/credit_notes',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Issue a credit note to adjust the amount of a finalized invoice. A credit note will first reduce the invoice's amount_remaining (and amount_due), but not below zero.
   * This amount is indicated by the credit note's pre_payment_amount. The excess amount is indicated by post_payment_amount, and it can result in any combination of the following:
   *
   *
   * Refunds: create a new refund (using refund_amount) or link existing refunds (using refunds).
   * Customer balance credit: credit the customer's balance (using credit_amount) which will be automatically applied to their next invoice when it's finalized.
   * Outside of Stripe credit: record the amount that is or will be credited outside of Stripe (using out_of_band_amount).
   *
   *
   * The sum of refunds, customer balance credits, and outside of Stripe credits must equal the post_payment_amount.
   *
   * You may issue multiple credit notes for an invoice. Each credit note may increment the invoice's pre_payment_credit_notes_amount,
   * post_payment_credit_notes_amount, or both, depending on the invoice's amount_remaining at the time of credit note creation.
   */
  create(
    params: CreditNoteCreateParams,
    options?: RequestOptions
  ): Promise<Response<CreditNote>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/credit_notes',
    }).call(this, ...args);
  }

  /**
   * Retrieves the credit note object with the given identifier.
   */
  retrieve(
    id: string,
    params?: CreditNoteRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<CreditNote>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<CreditNote>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/credit_notes/{id}',
    }).call(this, ...args);
  }

  /**
   * Updates an existing credit note.
   */
  update(
    id: string,
    params?: CreditNoteUpdateParams,
    options?: RequestOptions
  ): Promise<Response<CreditNote>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/credit_notes/{id}',
    }).call(this, ...args);
  }

  /**
   * Get a preview of a credit note without creating it.
   */
  preview(
    params: CreditNotePreviewParams,
    options?: RequestOptions
  ): Promise<Response<CreditNote>>;
  preview(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/credit_notes/preview',
    }).call(this, ...args);
  }

  /**
   * Marks a credit note as void. Learn more about [voiding credit notes](https://docs.stripe.com/docs/billing/invoices/credit-notes#voiding).
   */
  voidCreditNote(
    id: string,
    params?: CreditNoteVoidCreditNoteParams,
    options?: RequestOptions
  ): Promise<Response<CreditNote>>;
  voidCreditNote(
    id: string,
    options?: RequestOptions
  ): Promise<Response<CreditNote>>;
  voidCreditNote(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/credit_notes/{id}/void',
    }).call(this, ...args);
  }

  /**
   * When retrieving a credit note preview, you'll get a lines property containing the first handful of those items. This URL you can retrieve the full (paginated) list of line items.
   */
  listPreviewLineItems(
    params: CreditNoteListPreviewLineItemsParams,
    options?: RequestOptions
  ): ApiListPromise<CreditNoteLineItem>;
  listPreviewLineItems(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/credit_notes/preview/lines',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * When retrieving a credit note, you'll get a lines property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
   */
  listLineItems(
    id: string,
    params?: CreditNoteListLineItemsParams,
    options?: RequestOptions
  ): ApiListPromise<CreditNoteLineItem>;
  listLineItems(
    id: string,
    options?: RequestOptions
  ): ApiListPromise<CreditNoteLineItem>;
  listLineItems(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/credit_notes/{credit_note}/lines',
      methodType: 'list',
    }).call(this, ...args);
  }
}
export interface CreditNote {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'credit_note';

  /**
   * The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax.
   */
  amount: number;

  /**
   * This is the sum of all the shipping amounts.
   */
  amount_shipping: number;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * ID of the customer.
   */
  customer: string | Customer | DeletedCustomer;

  /**
   * Customer balance transaction related to this credit note.
   */
  customer_balance_transaction: string | CustomerBalanceTransaction | null;

  /**
   * The integer amount in cents (or local equivalent) representing the total amount of discount that was credited.
   */
  discount_amount: number;

  /**
   * The aggregate amounts calculated per discount for all line items.
   */
  discount_amounts: Array<CreditNote.DiscountAmount>;

  /**
   * The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.
   */
  effective_at: number | null;

  /**
   * ID of the invoice.
   */
  invoice: string | Invoice;

  /**
   * Line items that make up the credit note
   */
  lines: ApiList<CreditNoteLineItem>;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Customer-facing text that appears on the credit note PDF.
   */
  memo: string | null;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice.
   */
  number: string;

  /**
   * Amount that was credited outside of Stripe.
   */
  out_of_band_amount: number | null;

  /**
   * The link to download the PDF of the credit note.
   */
  pdf: string;

  /**
   * The amount of the credit note that was refunded to the customer, credited to the customer's balance, credited outside of Stripe, or any combination thereof.
   */
  post_payment_amount: number;

  /**
   * The amount of the credit note by which the invoice's `amount_remaining` and `amount_due` were reduced.
   */
  pre_payment_amount: number;

  /**
   * The pretax credit amounts (ex: discount, credit grants, etc) for all line items.
   */
  pretax_credit_amounts: Array<CreditNote.PretaxCreditAmount>;

  /**
   * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
   */
  reason: CreditNote.Reason | null;

  /**
   * Refunds related to this credit note.
   */
  refunds: Array<CreditNote.Refund>;

  /**
   * The details of the cost of shipping, including the ShippingRate applied to the invoice.
   */
  shipping_cost: CreditNote.ShippingCost | null;

  /**
   * Status of this credit note, one of `issued` or `void`. Learn more about [voiding credit notes](https://stripe.com/docs/billing/invoices/credit-notes#voiding).
   */
  status: CreditNote.Status;

  /**
   * The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding exclusive tax and invoice level discounts.
   */
  subtotal: number;

  /**
   * The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding all tax and invoice level discounts.
   */
  subtotal_excluding_tax: number | null;

  /**
   * The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax and all discount.
   */
  total: number;

  /**
   * The integer amount in cents (or local equivalent) representing the total amount of the credit note, excluding tax, but including discounts.
   */
  total_excluding_tax: number | null;

  /**
   * The aggregate tax information for all line items.
   */
  total_taxes: Array<CreditNote.TotalTax> | null;

  /**
   * Type of this credit note, one of `pre_payment` or `post_payment`. A `pre_payment` credit note means it was issued when the invoice was open. A `post_payment` credit note means it was issued when the invoice was paid.
   */
  type: CreditNote.Type;

  /**
   * The time that the credit note was voided.
   */
  voided_at: number | null;
}
export namespace CreditNote {
  export interface DiscountAmount {
    /**
     * The amount, in cents (or local equivalent), of the discount.
     */
    amount: number;

    /**
     * The discount that was applied to get this discount amount.
     */
    discount: string | Discount | DeletedDiscount;
  }

  export interface PretaxCreditAmount {
    /**
     * The amount, in cents (or local equivalent), of the pretax credit amount.
     */
    amount: number;

    /**
     * The credit balance transaction that was applied to get this pretax credit amount.
     */
    credit_balance_transaction?: string | Billing.CreditBalanceTransaction;

    /**
     * The discount that was applied to get this pretax credit amount.
     */
    discount?: string | Discount | DeletedDiscount;

    /**
     * Type of the pretax credit amount referenced.
     */
    type: PretaxCreditAmount.Type;
  }

  export type Reason =
    | 'duplicate'
    | 'fraudulent'
    | 'order_change'
    | 'product_unsatisfactory';

  export interface Refund {
    /**
     * Amount of the refund that applies to this credit note, in cents (or local equivalent).
     */
    amount_refunded: number;

    /**
     * The PaymentRecord refund details associated with this credit note refund.
     */
    payment_record_refund: Refund.PaymentRecordRefund | null;

    /**
     * ID of the refund.
     */
    refund: string | Refund;

    /**
     * Type of the refund, one of `refund` or `payment_record_refund`.
     */
    type: Refund.Type | null;
  }

  export interface ShippingCost {
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

  export type Status = 'issued' | 'void';

  export interface TotalTax {
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

  export type Type = 'mixed' | 'post_payment' | 'pre_payment';

  export namespace PretaxCreditAmount {
    export type Type = 'credit_balance_transaction' | 'discount';
  }

  export namespace Refund {
    export interface PaymentRecordRefund {
      /**
       * ID of the payment record.
       */
      payment_record: string;

      /**
       * ID of the refund group.
       */
      refund_group: string;
    }

    export type Type = 'payment_record_refund' | 'refund';
  }

  export namespace ShippingCost {
    export interface Tax {
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

    export namespace Tax {
      export type TaxabilityReason =
        | 'customer_exempt'
        | 'not_collecting'
        | 'not_subject_to_tax'
        | 'not_supported'
        | 'portion_product_exempt'
        | 'portion_reduced_rated'
        | 'portion_standard_rated'
        | 'product_exempt'
        | 'product_exempt_holiday'
        | 'proportionally_rated'
        | 'reduced_rated'
        | 'reverse_charge'
        | 'standard_rated'
        | 'taxable_basis_reduced'
        | 'zero_rated';
    }
  }

  export namespace TotalTax {
    export type TaxBehavior = 'exclusive' | 'inclusive';

    export interface TaxRateDetails {
      tax_rate: string;
    }

    export type TaxabilityReason =
      | 'customer_exempt'
      | 'not_available'
      | 'not_collecting'
      | 'not_subject_to_tax'
      | 'not_supported'
      | 'portion_product_exempt'
      | 'portion_reduced_rated'
      | 'portion_standard_rated'
      | 'product_exempt'
      | 'product_exempt_holiday'
      | 'proportionally_rated'
      | 'reduced_rated'
      | 'reverse_charge'
      | 'standard_rated'
      | 'taxable_basis_reduced'
      | 'zero_rated';
  }
}
export interface CreditNoteCreateParams {
  /**
   * ID of the invoice.
   */
  invoice: string;

  /**
   * The integer amount in cents (or local equivalent) representing the total amount of the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
   */
  amount?: number;

  /**
   * The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
   */
  credit_amount?: number;

  /**
   * The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.
   */
  effective_at?: number;

  /**
   * Type of email to send to the customer, one of `credit_note` or `none` and the default is `credit_note`.
   */
  email_type?: CreditNoteCreateParams.EmailType;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Line items that make up the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
   */
  lines?: Array<CreditNoteCreateParams.Line>;

  /**
   * The credit note's memo appears on the credit note PDF.
   */
  memo?: string;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;

  /**
   * The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.
   */
  out_of_band_amount?: number;

  /**
   * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
   */
  reason?: CreditNoteCreateParams.Reason;

  /**
   * The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
   */
  refund_amount?: number;

  /**
   * Refunds to link to this credit note.
   */
  refunds?: Array<CreditNoteCreateParams.Refund>;

  /**
   * When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
   */
  shipping_cost?: CreditNoteCreateParams.ShippingCost;
}
export namespace CreditNoteCreateParams {
  export type EmailType = 'credit_note' | 'none';

  export interface Line {
    /**
     * The line item amount to credit. Only valid when `type` is `invoice_line_item`. If invoice is set up with `automatic_tax[enabled]=true`, this amount is tax exclusive
     */
    amount?: number;

    /**
     * The description of the credit note line item. Only valid when the `type` is `custom_line_item`.
     */
    description?: string;

    /**
     * The invoice line item to credit. Only valid when the `type` is `invoice_line_item`.
     */
    invoice_line_item?: string;

    /**
     * The line item quantity to credit.
     */
    quantity?: number;

    /**
     * A list of up to 10 tax amounts for the credit note line item. Cannot be mixed with `tax_rates`.
     */
    tax_amounts?: Emptyable<Array<Line.TaxAmount>>;

    /**
     * The tax rates which apply to the credit note line item. Only valid when the `type` is `custom_line_item` and cannot be mixed with `tax_amounts`.
     */
    tax_rates?: Emptyable<Array<string>>;

    /**
     * Type of the credit note line item, one of `invoice_line_item` or `custom_line_item`
     */
    type: Line.Type;

    /**
     * The integer unit amount in cents (or local equivalent) of the credit note line item. This `unit_amount` will be multiplied by the quantity to get the full amount to credit for this line item. Only valid when `type` is `custom_line_item`.
     */
    unit_amount?: number;

    /**
     * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
     */
    unit_amount_decimal?: string;
  }

  export type Reason =
    | 'duplicate'
    | 'fraudulent'
    | 'order_change'
    | 'product_unsatisfactory';

  export interface Refund {
    /**
     * Amount of the refund that applies to this credit note, in cents (or local equivalent). Defaults to the entire refund amount.
     */
    amount_refunded?: number;

    /**
     * The PaymentRecord refund details to link to this credit note. Required when `type` is `payment_record_refund`.
     */
    payment_record_refund?: Refund.PaymentRecordRefund;

    /**
     * ID of an existing refund to link this credit note to. Required when `type` is `refund`.
     */
    refund?: string;

    /**
     * Type of the refund, one of `refund` or `payment_record_refund`. Defaults to `refund`.
     */
    type?: Refund.Type;
  }

  export interface ShippingCost {
    /**
     * The ID of the shipping rate to use for this order.
     */
    shipping_rate?: string;
  }

  export namespace Line {
    export interface TaxAmount {
      /**
       * The amount, in cents (or local equivalent), of the tax.
       */
      amount: number;

      /**
       * The id of the tax rate for this tax amount. The tax rate must have been automatically created by Stripe.
       */
      tax_rate: string;

      /**
       * The amount on which tax is calculated, in cents (or local equivalent).
       */
      taxable_amount: number;
    }

    export type Type = 'custom_line_item' | 'invoice_line_item';
  }

  export namespace Refund {
    export interface PaymentRecordRefund {
      /**
       * The ID of the PaymentRecord with the refund to link to this credit note.
       */
      payment_record: string;

      /**
       * The PaymentRecord refund group to link to this credit note. For refunds processed off-Stripe, this will correspond to the `processor_details.custom.refund_reference` field provided when reporting the refund on the PaymentRecord.
       */
      refund_group: string;
    }

    export type Type = 'payment_record_refund' | 'refund';
  }
}
export interface CreditNoteRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface CreditNoteUpdateParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Credit note memo.
   */
  memo?: string;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;
}
export interface CreditNoteListParams extends PaginationParams {
  /**
   * Only return credit notes that were created during the given date interval.
   */
  created?: RangeQueryParam | number;

  /**
   * Only return credit notes for the customer specified by this customer ID.
   */
  customer?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Only return credit notes for the invoice specified by this invoice ID.
   */
  invoice?: string;
}
export interface CreditNoteListLineItemsParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface CreditNoteListPreviewLineItemsParams extends PaginationParams {
  /**
   * ID of the invoice.
   */
  invoice: string;

  /**
   * The integer amount in cents (or local equivalent) representing the total amount of the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
   */
  amount?: number;

  /**
   * The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
   */
  credit_amount?: number;

  /**
   * The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.
   */
  effective_at?: number;

  /**
   * Type of email to send to the customer, one of `credit_note` or `none` and the default is `credit_note`.
   */
  email_type?: CreditNoteListPreviewLineItemsParams.EmailType;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Line items that make up the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
   */
  lines?: Array<CreditNoteListPreviewLineItemsParams.Line>;

  /**
   * The credit note's memo appears on the credit note PDF.
   */
  memo?: string;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;

  /**
   * The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.
   */
  out_of_band_amount?: number;

  /**
   * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
   */
  reason?: CreditNoteListPreviewLineItemsParams.Reason;

  /**
   * The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
   */
  refund_amount?: number;

  /**
   * Refunds to link to this credit note.
   */
  refunds?: Array<CreditNoteListPreviewLineItemsParams.Refund>;

  /**
   * When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
   */
  shipping_cost?: CreditNoteListPreviewLineItemsParams.ShippingCost;
}
export namespace CreditNoteListPreviewLineItemsParams {
  export type EmailType = 'credit_note' | 'none';

  export interface Line {
    /**
     * The line item amount to credit. Only valid when `type` is `invoice_line_item`. If invoice is set up with `automatic_tax[enabled]=true`, this amount is tax exclusive
     */
    amount?: number;

    /**
     * The description of the credit note line item. Only valid when the `type` is `custom_line_item`.
     */
    description?: string;

    /**
     * The invoice line item to credit. Only valid when the `type` is `invoice_line_item`.
     */
    invoice_line_item?: string;

    /**
     * The line item quantity to credit.
     */
    quantity?: number;

    /**
     * A list of up to 10 tax amounts for the credit note line item. Cannot be mixed with `tax_rates`.
     */
    tax_amounts?: Emptyable<Array<Line.TaxAmount>>;

    /**
     * The tax rates which apply to the credit note line item. Only valid when the `type` is `custom_line_item` and cannot be mixed with `tax_amounts`.
     */
    tax_rates?: Emptyable<Array<string>>;

    /**
     * Type of the credit note line item, one of `invoice_line_item` or `custom_line_item`
     */
    type: Line.Type;

    /**
     * The integer unit amount in cents (or local equivalent) of the credit note line item. This `unit_amount` will be multiplied by the quantity to get the full amount to credit for this line item. Only valid when `type` is `custom_line_item`.
     */
    unit_amount?: number;

    /**
     * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
     */
    unit_amount_decimal?: string;
  }

  export type Reason =
    | 'duplicate'
    | 'fraudulent'
    | 'order_change'
    | 'product_unsatisfactory';

  export interface Refund {
    /**
     * Amount of the refund that applies to this credit note, in cents (or local equivalent). Defaults to the entire refund amount.
     */
    amount_refunded?: number;

    /**
     * The PaymentRecord refund details to link to this credit note. Required when `type` is `payment_record_refund`.
     */
    payment_record_refund?: Refund.PaymentRecordRefund;

    /**
     * ID of an existing refund to link this credit note to. Required when `type` is `refund`.
     */
    refund?: string;

    /**
     * Type of the refund, one of `refund` or `payment_record_refund`. Defaults to `refund`.
     */
    type?: Refund.Type;
  }

  export interface ShippingCost {
    /**
     * The ID of the shipping rate to use for this order.
     */
    shipping_rate?: string;
  }

  export namespace Line {
    export interface TaxAmount {
      /**
       * The amount, in cents (or local equivalent), of the tax.
       */
      amount: number;

      /**
       * The id of the tax rate for this tax amount. The tax rate must have been automatically created by Stripe.
       */
      tax_rate: string;

      /**
       * The amount on which tax is calculated, in cents (or local equivalent).
       */
      taxable_amount: number;
    }

    export type Type = 'custom_line_item' | 'invoice_line_item';
  }

  export namespace Refund {
    export interface PaymentRecordRefund {
      /**
       * The ID of the PaymentRecord with the refund to link to this credit note.
       */
      payment_record: string;

      /**
       * The PaymentRecord refund group to link to this credit note. For refunds processed off-Stripe, this will correspond to the `processor_details.custom.refund_reference` field provided when reporting the refund on the PaymentRecord.
       */
      refund_group: string;
    }

    export type Type = 'payment_record_refund' | 'refund';
  }
}
export interface CreditNotePreviewParams {
  /**
   * ID of the invoice.
   */
  invoice: string;

  /**
   * The integer amount in cents (or local equivalent) representing the total amount of the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
   */
  amount?: number;

  /**
   * The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
   */
  credit_amount?: number;

  /**
   * The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.
   */
  effective_at?: number;

  /**
   * Type of email to send to the customer, one of `credit_note` or `none` and the default is `credit_note`.
   */
  email_type?: CreditNotePreviewParams.EmailType;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Line items that make up the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
   */
  lines?: Array<CreditNotePreviewParams.Line>;

  /**
   * The credit note's memo appears on the credit note PDF.
   */
  memo?: string;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;

  /**
   * The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.
   */
  out_of_band_amount?: number;

  /**
   * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
   */
  reason?: CreditNotePreviewParams.Reason;

  /**
   * The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
   */
  refund_amount?: number;

  /**
   * Refunds to link to this credit note.
   */
  refunds?: Array<CreditNotePreviewParams.Refund>;

  /**
   * When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
   */
  shipping_cost?: CreditNotePreviewParams.ShippingCost;
}
export namespace CreditNotePreviewParams {
  export type EmailType = 'credit_note' | 'none';

  export interface Line {
    /**
     * The line item amount to credit. Only valid when `type` is `invoice_line_item`. If invoice is set up with `automatic_tax[enabled]=true`, this amount is tax exclusive
     */
    amount?: number;

    /**
     * The description of the credit note line item. Only valid when the `type` is `custom_line_item`.
     */
    description?: string;

    /**
     * The invoice line item to credit. Only valid when the `type` is `invoice_line_item`.
     */
    invoice_line_item?: string;

    /**
     * The line item quantity to credit.
     */
    quantity?: number;

    /**
     * A list of up to 10 tax amounts for the credit note line item. Cannot be mixed with `tax_rates`.
     */
    tax_amounts?: Emptyable<Array<Line.TaxAmount>>;

    /**
     * The tax rates which apply to the credit note line item. Only valid when the `type` is `custom_line_item` and cannot be mixed with `tax_amounts`.
     */
    tax_rates?: Emptyable<Array<string>>;

    /**
     * Type of the credit note line item, one of `invoice_line_item` or `custom_line_item`
     */
    type: Line.Type;

    /**
     * The integer unit amount in cents (or local equivalent) of the credit note line item. This `unit_amount` will be multiplied by the quantity to get the full amount to credit for this line item. Only valid when `type` is `custom_line_item`.
     */
    unit_amount?: number;

    /**
     * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
     */
    unit_amount_decimal?: string;
  }

  export type Reason =
    | 'duplicate'
    | 'fraudulent'
    | 'order_change'
    | 'product_unsatisfactory';

  export interface Refund {
    /**
     * Amount of the refund that applies to this credit note, in cents (or local equivalent). Defaults to the entire refund amount.
     */
    amount_refunded?: number;

    /**
     * The PaymentRecord refund details to link to this credit note. Required when `type` is `payment_record_refund`.
     */
    payment_record_refund?: Refund.PaymentRecordRefund;

    /**
     * ID of an existing refund to link this credit note to. Required when `type` is `refund`.
     */
    refund?: string;

    /**
     * Type of the refund, one of `refund` or `payment_record_refund`. Defaults to `refund`.
     */
    type?: Refund.Type;
  }

  export interface ShippingCost {
    /**
     * The ID of the shipping rate to use for this order.
     */
    shipping_rate?: string;
  }

  export namespace Line {
    export interface TaxAmount {
      /**
       * The amount, in cents (or local equivalent), of the tax.
       */
      amount: number;

      /**
       * The id of the tax rate for this tax amount. The tax rate must have been automatically created by Stripe.
       */
      tax_rate: string;

      /**
       * The amount on which tax is calculated, in cents (or local equivalent).
       */
      taxable_amount: number;
    }

    export type Type = 'custom_line_item' | 'invoice_line_item';
  }

  export namespace Refund {
    export interface PaymentRecordRefund {
      /**
       * The ID of the PaymentRecord with the refund to link to this credit note.
       */
      payment_record: string;

      /**
       * The PaymentRecord refund group to link to this credit note. For refunds processed off-Stripe, this will correspond to the `processor_details.custom.refund_reference` field provided when reporting the refund on the PaymentRecord.
       */
      refund_group: string;
    }

    export type Type = 'payment_record_refund' | 'refund';
  }
}
export interface CreditNoteVoidCreditNoteParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
