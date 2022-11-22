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
       * The integer amount in %s representing the amount being credited for this line item, excluding all tax and discounts.
       */
      amount_excluding_tax: number | null;

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

      /**
       * The amount in %s representing the unit amount being credited for this line item, excluding all tax and discounts.
       */
      unit_amount_excluding_tax: string | null;
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
  }
}
