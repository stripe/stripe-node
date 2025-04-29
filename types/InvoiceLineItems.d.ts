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
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Note that for line items with `type=subscription`, `metadata` reflects the current metadata from the subscription associated with the line item, unless the invoice line was directly updated with different metadata after creation.
       */
      metadata: Stripe.Metadata;

      /**
       * The parent that generated this invoice
       */
      parent: InvoiceLineItem.Parent | null;

      period: InvoiceLineItem.Period;

      /**
       * Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this line item.
       */
      pretax_credit_amounts: Array<InvoiceLineItem.PretaxCreditAmount> | null;

      /**
       * The pricing information of the line item.
       */
      pricing: InvoiceLineItem.Pricing | null;

      /**
       * The quantity of the subscription, if the line item is a subscription or a proration.
       */
      quantity: number | null;

      subscription: string | Stripe.Subscription | null;

      /**
       * The tax information of the line item.
       */
      taxes: Array<InvoiceLineItem.Tax> | null;
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

      interface Parent {
        /**
         * Details about the invoice item that generated this line item
         */
        invoice_item_details: Parent.InvoiceItemDetails | null;

        /**
         * Details about the subscription item that generated this line item
         */
        subscription_item_details: Parent.SubscriptionItemDetails | null;

        /**
         * The type of parent that generated this line item
         */
        type: Parent.Type;
      }

      namespace Parent {
        interface InvoiceItemDetails {
          /**
           * The invoice item that generated this line item
           */
          invoice_item: string;

          /**
           * Whether this is a proration
           */
          proration: boolean;

          /**
           * Additional details for proration line items
           */
          proration_details: InvoiceItemDetails.ProrationDetails | null;

          /**
           * The subscription that the invoice item belongs to
           */
          subscription: string | null;
        }

        namespace InvoiceItemDetails {
          interface ProrationDetails {
            /**
             * For a credit proration `line_item`, the original debit line_items to which the credit proration applies.
             */
            credited_items: ProrationDetails.CreditedItems | null;
          }

          namespace ProrationDetails {
            interface CreditedItems {
              /**
               * Invoice containing the credited invoice line items
               */
              invoice: string;

              /**
               * Credited invoice line items
               */
              invoice_line_items: Array<string>;
            }
          }
        }

        interface SubscriptionItemDetails {
          /**
           * The invoice item that generated this line item
           */
          invoice_item: string | null;

          /**
           * Whether this is a proration
           */
          proration: boolean;

          /**
           * Additional details for proration line items
           */
          proration_details: SubscriptionItemDetails.ProrationDetails | null;

          /**
           * The subscription that the subscription item belongs to
           */
          subscription: string | null;

          /**
           * The subscription item that generated this line item
           */
          subscription_item: string;
        }

        namespace SubscriptionItemDetails {
          interface ProrationDetails {
            /**
             * For a credit proration `line_item`, the original debit line_items to which the credit proration applies.
             */
            credited_items: ProrationDetails.CreditedItems | null;
          }

          namespace ProrationDetails {
            interface CreditedItems {
              /**
               * Invoice containing the credited invoice line items
               */
              invoice: string;

              /**
               * Credited invoice line items
               */
              invoice_line_items: Array<string>;
            }
          }
        }

        type Type = 'invoice_item_details' | 'subscription_item_details';
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
         * Type of the pretax credit amount referenced.
         */
        type: PretaxCreditAmount.Type;
      }

      namespace PretaxCreditAmount {
        type Type = 'credit_balance_transaction' | 'discount';
      }

      interface Pricing {
        price_details?: Pricing.PriceDetails;

        /**
         * The type of the pricing details.
         */
        type: 'price_details';

        /**
         * The unit amount (in the `currency` specified) of the item which contains a decimal value with at most 12 decimal places.
         */
        unit_amount_decimal: string | null;
      }

      namespace Pricing {
        interface PriceDetails {
          /**
           * The ID of the price this item is associated with.
           */
          price: string;

          /**
           * The ID of the product this item is associated with.
           */
          product: string;
        }
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
          tax_rate: string;
        }
      }
    }
  }
}
