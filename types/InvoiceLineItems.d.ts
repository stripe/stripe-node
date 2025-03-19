// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Invoice Line Items represent the individual lines within an [invoice](https://stripe.com/docs/api/invoices) and only exist within the context of an invoice.
     *
     * Each line item is backed by either an [invoice item](https://stripe.com/docs/api/invoiceitems) or a [subscription item](https://stripe.com/docs/api/subscription_items).
     */
    interface InvoiceLineItem {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'line_item';

      /**
       * The amount, in cents (or local equivalent).
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description: string | null;

      /**
       * The amount of discount calculated per discount for this line item.
       */
      discount_amounts: Array<InvoiceLineItem.DiscountAmount> | null;

      /**
       * If true, discounts will apply to this line item. Always false for prorations.
       */
      discountable: boolean;

      /**
       * The discounts applied to the invoice line item. Line item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
       */
      discounts: Array<string | Stripe.Discount>;

      /**
       * The ID of the invoice that contains this line item.
       */
      invoice: string | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The amount of margin calculated per margin for this line item.
       */
      margin_amounts?: Array<InvoiceLineItem.MarginAmount> | null;

      /**
       * The margins applied to the line item. When set, the `default_margins` on the invoice do not apply to the line item. Use `expand[]=margins` to expand each margin.
       */
      margins?: Array<string | Stripe.Margin> | null;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Note that for line items with `type=subscription`, `metadata` reflects the current metadata from the subscription associated with the line item, unless the invoice line was directly updated with different metadata after creation.
       */
      metadata: Stripe.Metadata;

      period: InvoiceLineItem.Period;

      /**
       * Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this line item.
       */
      pretax_credit_amounts: Array<InvoiceLineItem.PretaxCreditAmount> | null;

      /**
       * The quantity of the subscription, if the line item is a subscription or a proration.
       */
      quantity: number | null;

      subscription: string | Stripe.Subscription | null;
    }

    namespace InvoiceLineItem {
      interface DiscountAmount {
        /**
         * The amount, in cents (or local equivalent), of the discount.
         */
        amount: number;

        /**
         * The discount that was applied to get this discount amount.
         */
        discount: string | Stripe.Discount | Stripe.DeletedDiscount;
      }

      interface MarginAmount {
        /**
         * The amount, in cents (or local equivalent), of the reduction in line item amount.
         */
        amount: number;

        /**
         * The margin that was applied to get this margin amount.
         */
        margin: string | Stripe.Margin;
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

      interface PretaxCreditAmount {
        /**
         * The amount, in cents (or local equivalent), of the pretax credit amount.
         */
        amount: number;

        /**
         * The credit balance transaction that was applied to get this pretax credit amount.
         */
        credit_balance_transaction?:
          | string
          | Stripe.Billing.CreditBalanceTransaction
          | null;

        /**
         * The discount that was applied to get this pretax credit amount.
         */
        discount?: string | Stripe.Discount | Stripe.DeletedDiscount;

        /**
         * The margin that was applied to get this pretax credit amount.
         */
        margin?: string | Stripe.Margin;

        /**
         * Type of the pretax credit amount referenced.
         */
        type: PretaxCreditAmount.Type;
      }

      namespace PretaxCreditAmount {
        type Type = 'credit_balance_transaction' | 'discount' | 'margin';
      }
    }
  }
}
