// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The CreditNoteLineItem object.
     */
    interface CreditNoteLineItem {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'credit_note_line_item';

      /**
       * The integer amount in %s representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts.
       */
      amount: number;

      /**
       * Description of the item being credited.
       */
      description: string | null;

      /**
       * The integer amount in %s representing the discount being credited for this line item.
       */
      discount_amount: number;

      /**
       * The amount of discount calculated per discount for this line item
       */
      discount_amounts: Array<CreditNoteLineItem.DiscountAmount>;

      /**
       * ID of the invoice line item being credited
       */
      invoice_line_item?: string;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The number of units of product being credited.
       */
      quantity: number | null;

      /**
       * The amount of tax calculated per tax rate for this line item
       */
      tax_amounts: Array<CreditNoteLineItem.TaxAmount>;

      /**
       * The tax rates which apply to the line item.
       */
      tax_rates: Array<Stripe.TaxRate>;

      /**
       * The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. When the type is `invoice_line_item` there is an additional `invoice_line_item` property on the resource the value of which is the id of the credited line item on the invoice.
       */
      type: CreditNoteLineItem.Type;

      /**
       * The cost of each unit of product being credited.
       */
      unit_amount: number | null;

      /**
       * Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.
       */
      unit_amount_decimal: string | null;
    }

    namespace CreditNoteLineItem {
      interface DiscountAmount {
        /**
         * The amount, in %s, of the discount.
         */
        amount: number;

        /**
         * The discount that was applied to get this discount amount.
         */
        discount: string | Stripe.Discount | Stripe.DeletedDiscount;
      }

      interface TaxAmount {
        /**
         * The amount, in %s, of the tax.
         */
        amount: number;

        /**
         * Whether this tax amount is inclusive or exclusive.
         */
        inclusive: boolean;

        /**
         * The tax rate that was applied to get this tax amount.
         */
        tax_rate: string | Stripe.TaxRate;
      }

      type Type = 'custom_line_item' | 'invoice_line_item';
    }

    interface CreditNoteLineItemListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface CreditNoteLineItemListPreviewParams extends PaginationParams {
      /**
       * ID of the invoice.
       */
      invoice: string;

      /**
       * The integer amount in cents (or local equivalent) representing the total amount of the credit note.
       */
      amount?: number;

      /**
       * The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
       */
      credit_amount?: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Line items that make up the credit note.
       */
      lines?: Array<CreditNoteLineItemListPreviewParams.Line>;

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
      reason?: CreditNoteLineItemListPreviewParams.Reason;

      /**
       * ID of an existing refund to link this credit note to.
       */
      refund?: string;

      /**
       * The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
       */
      refund_amount?: number;
    }

    namespace CreditNoteLineItemListPreviewParams {
      interface Line {
        /**
         * The line item amount to credit. Only valid when `type` is `invoice_line_item`.
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
         * The tax rates which apply to the credit note line item. Only valid when the `type` is `custom_line_item`.
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

      namespace Line {
        type Type = 'custom_line_item' | 'invoice_line_item';
      }

      type Reason =
        | 'duplicate'
        | 'fraudulent'
        | 'order_change'
        | 'product_unsatisfactory';
    }
  }
}
