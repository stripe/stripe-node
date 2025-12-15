// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The credit note line item object
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
       * The integer amount in cents (or local equivalent) representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts.
       */
      amount: number;

      /**
       * Description of the item being credited.
       */
      description: string | null;

      /**
       * The integer amount in cents (or local equivalent) representing the discount being credited for this line item.
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
       * The pretax credit amounts (ex: discount, credit grants, etc) for this line item.
       */
      pretax_credit_amounts: Array<CreditNoteLineItem.PretaxCreditAmount>;

      /**
       * The number of units of product being credited.
       */
      quantity: number | null;

      /**
       * The tax rates which apply to the line item.
       */
      tax_rates: Array<Stripe.TaxRate>;

      /**
       * The tax information of the line item.
       */
      taxes: Array<CreditNoteLineItem.Tax> | null;

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

      interface Tax {
        /**
         * The amount of the tax, in cents (or local equivalent).
         */
        amount: number;

        /**
         * Whether this tax is inclusive or exclusive.
         */
        tax_behavior: Tax.TaxBehavior;

        /**
         * Additional details about the tax rate. Only present when `type` is `tax_rate_details`.
         */
        tax_rate_details: Tax.TaxRateDetails | null;

        /**
         * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
         */
        taxability_reason: Tax.TaxabilityReason;

        /**
         * The amount on which tax is calculated, in cents (or local equivalent).
         */
        taxable_amount: number | null;

        /**
         * The type of tax information.
         */
        type: 'tax_rate_details';
      }

      namespace Tax {
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

      type Type = 'custom_line_item' | 'invoice_line_item';
    }
  }
}
