// File generated from our OpenAPI spec

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
  metadata?: Stripe.MetadataParam;

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
namespace CreditNoteCreateParams {
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
    tax_amounts?: Stripe.Emptyable<Array<Line.TaxAmount>>;

    /**
     * The tax rates which apply to the credit note line item. Only valid when the `type` is `custom_line_item` and cannot be mixed with `tax_amounts`.
     */
    tax_rates?: Stripe.Emptyable<Array<string>>;

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

  namespace Line {
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

  namespace Refund {
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
  metadata?: Stripe.MetadataParam;
}
export interface CreditNoteListParams extends PaginationParams {
  /**
   * Only return credit notes that were created during the given date interval.
   */
  created?: Stripe.RangeQueryParam | number;

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
  metadata?: Stripe.MetadataParam;

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
namespace CreditNoteListPreviewLineItemsParams {
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
    tax_amounts?: Stripe.Emptyable<Array<Line.TaxAmount>>;

    /**
     * The tax rates which apply to the credit note line item. Only valid when the `type` is `custom_line_item` and cannot be mixed with `tax_amounts`.
     */
    tax_rates?: Stripe.Emptyable<Array<string>>;

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

  namespace Line {
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

  namespace Refund {
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
  metadata?: Stripe.MetadataParam;

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
namespace CreditNotePreviewParams {
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
    tax_amounts?: Stripe.Emptyable<Array<Line.TaxAmount>>;

    /**
     * The tax rates which apply to the credit note line item. Only valid when the `type` is `custom_line_item` and cannot be mixed with `tax_amounts`.
     */
    tax_rates?: Stripe.Emptyable<Array<string>>;

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

  namespace Line {
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

  namespace Refund {
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
