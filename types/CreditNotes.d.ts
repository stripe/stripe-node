// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Issue a credit note to adjust an invoice's amount after the invoice is finalized.
     *
     * Related guide: [Credit Notes](https://stripe.com/docs/billing/invoices/credit-notes).
     */
    interface CreditNote {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'credit_note';

      /**
       * The integer amount in %s representing the total amount of the credit note, including tax.
       */
      amount: number;

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
      customer: string | Stripe.Customer | Stripe.DeletedCustomer;

      /**
       * Customer balance transaction related to this credit note.
       */
      customer_balance_transaction:
        | string
        | Stripe.CustomerBalanceTransaction
        | null;

      /**
       * The integer amount in %s representing the total amount of discount that was credited.
       */
      discount_amount: number;

      /**
       * The aggregate amounts calculated per discount for all line items.
       */
      discount_amounts: Array<CreditNote.DiscountAmount>;

      /**
       * ID of the invoice.
       */
      invoice: string | Stripe.Invoice;

      /**
       * Line items that make up the credit note
       */
      lines: ApiList<Stripe.CreditNoteLineItem>;

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
      metadata: Stripe.Metadata | null;

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
       * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
       */
      reason: CreditNote.Reason | null;

      /**
       * Refund related to this credit note.
       */
      refund: string | Stripe.Refund | null;

      /**
       * Status of this credit note, one of `issued` or `void`. Learn more about [voiding credit notes](https://stripe.com/docs/billing/invoices/credit-notes#voiding).
       */
      status: CreditNote.Status;

      /**
       * The integer amount in %s representing the amount of the credit note, excluding exclusive tax and invoice level discounts.
       */
      subtotal: number;

      /**
       * The integer amount in %s representing the amount of the credit note, excluding all tax and invoice level discounts.
       */
      subtotal_excluding_tax: number | null;

      /**
       * The aggregate amounts calculated per tax rate for all line items.
       */
      tax_amounts: Array<CreditNote.TaxAmount>;

      /**
       * The integer amount in %s representing the total amount of the credit note, including tax and all discount.
       */
      total: number;

      /**
       * The integer amount in %s representing the total amount of the credit note, excluding tax, but including discounts.
       */
      total_excluding_tax: number | null;

      /**
       * Type of this credit note, one of `pre_payment` or `post_payment`. A `pre_payment` credit note means it was issued when the invoice was open. A `post_payment` credit note means it was issued when the invoice was paid.
       */
      type: CreditNote.Type;

      /**
       * The time that the credit note was voided.
       */
      voided_at: number | null;
    }

    namespace CreditNote {
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

      type Reason =
        | 'duplicate'
        | 'fraudulent'
        | 'order_change'
        | 'product_unsatisfactory';

      type Status = 'issued' | 'void';

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

      type Type = 'post_payment' | 'pre_payment';
    }
  }
}
