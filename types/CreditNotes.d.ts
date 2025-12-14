// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Issue a credit note to adjust an invoice's amount after the invoice is finalized.
     *
     * Related guide: [Credit notes](https://docs.stripe.com/billing/invoices/credit-notes)
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
      customer: string | Stripe.Customer | Stripe.DeletedCustomer;

      /**
       * ID of the account representing the customer.
       */
      customer_account: string | null;

      /**
       * Customer balance transaction related to this credit note.
       */
      customer_balance_transaction:
        | string
        | Stripe.CustomerBalanceTransaction
        | null;

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
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
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
       * Status of this credit note, one of `issued` or `void`. Learn more about [voiding credit notes](https://docs.stripe.com/billing/invoices/credit-notes#voiding).
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

    namespace CreditNote {
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
          | Stripe.Billing.CreditBalanceTransaction;

        /**
         * The discount that was applied to get this pretax credit amount.
         */
        discount?: string | Stripe.Discount | Stripe.DeletedDiscount;

        /**
         * Type of the pretax credit amount referenced.
         */
        type: PretaxCreditAmount.Type;
      }

      namespace PretaxCreditAmount {
        type Type = 'credit_balance_transaction' | 'discount';
      }

      type Reason =
        | 'duplicate'
        | 'fraudulent'
        | 'order_change'
        | 'product_unsatisfactory';

      interface Refund {
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
        refund: string | Stripe.Refund;

        /**
         * Type of the refund, one of `refund` or `payment_record_refund`.
         */
        type: Refund.Type | null;
      }

      namespace Refund {
        interface PaymentRecordRefund {
          /**
           * ID of the payment record.
           */
          payment_record: string;

          /**
           * ID of the refund group.
           */
          refund_group: string;
        }

        type Type = 'payment_record_refund' | 'refund';
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
        shipping_rate: string | Stripe.ShippingRate | null;

        /**
         * The taxes applied to the shipping rate.
         */
        taxes?: Array<ShippingCost.Tax>;
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
          rate: Stripe.TaxRate;

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
          type TaxabilityReason =
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

      type Status = 'issued' | 'void';

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

      namespace TotalTax {
        type TaxabilityReason =
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

        type TaxBehavior = 'exclusive' | 'inclusive';

        interface TaxRateDetails {
          /**
           * ID of the tax rate
           */
          tax_rate: string;
        }
      }

      type Type = 'mixed' | 'post_payment' | 'pre_payment';
    }
  }
}
