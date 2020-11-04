// File generated from our OpenAPI spec
declare module 'stripe' {
  namespace Stripe {
    /**
     * The UpcomingInvoice object.
     */
    interface UpcomingInvoice {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'invoice';

      /**
       * The country of the business associated with this invoice, most often the business creating the invoice.
       */
      account_country: string | null;

      /**
       * The public name of the business associated with this invoice, most often the business creating the invoice.
       */
      account_name: string | null;

      /**
       * Final amount due at this time for this invoice. If the invoice's total is smaller than the minimum charge amount, for example, or if there is account credit that can be applied to the invoice, the `amount_due` may be 0. If there is a positive `starting_balance` for the invoice (the customer owes money), the `amount_due` will also take that into account. The charge that gets generated for the invoice will be for the amount specified in `amount_due`.
       */
      amount_due: number;

      /**
       * The amount, in %s, that was paid.
       */
      amount_paid: number;

      /**
       * The amount remaining, in %s, that is due.
       */
      amount_remaining: number;

      /**
       * The fee in %s that will be applied to the invoice and transferred to the application owner's Stripe account when the invoice is paid.
       */
      application_fee_amount: number | null;

      /**
       * Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. Any payment attempt counts as the first attempt, and subsequently only automatic retries increment the attempt count. In other words, manual payment attempts after the first attempt do not affect the retry schedule.
       */
      attempt_count: number;

      /**
       * Whether an attempt has been made to pay the invoice. An invoice is not attempted until 1 hour after the `invoice.created` webhook, for example, so you might not want to display that invoice as unpaid to your users.
       */
      attempted: boolean;

      /**
       * Indicates the reason why the invoice was created. `subscription_cycle` indicates an invoice created by a subscription advancing into a new period. `subscription_create` indicates an invoice created due to creating a subscription. `subscription_update` indicates an invoice created due to updating a subscription. `subscription` is set for all old invoices to indicate either a change to a subscription or a period advancement. `manual` is set for all invoices unrelated to a subscription (for example: created via the invoice editor). The `upcoming` value is reserved for simulated invoices per the upcoming invoice endpoint. `subscription_threshold` indicates an invoice created due to a billing threshold being reached.
       */
      billing_reason: UpcomingInvoice.BillingReason | null;

      /**
       * ID of the latest charge generated for this invoice, if any.
       */
      charge: string | Stripe.Charge | null;

      /**
       * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions.
       */
      collection_method: UpcomingInvoice.CollectionMethod | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * Custom fields displayed on the invoice.
       */
      custom_fields: Array<UpcomingInvoice.CustomField> | null;

      /**
       * The ID of the customer who will be billed.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer;

      /**
       * The customer's address. Until the invoice is finalized, this field will equal `customer.address`. Once the invoice is finalized, this field will no longer be updated.
       */
      customer_address: Address | null;

      /**
       * The customer's email. Until the invoice is finalized, this field will equal `customer.email`. Once the invoice is finalized, this field will no longer be updated.
       */
      customer_email: string | null;

      /**
       * The customer's name. Until the invoice is finalized, this field will equal `customer.name`. Once the invoice is finalized, this field will no longer be updated.
       */
      customer_name: string | null;

      /**
       * The customer's phone number. Until the invoice is finalized, this field will equal `customer.phone`. Once the invoice is finalized, this field will no longer be updated.
       */
      customer_phone: string | null;

      /**
       * The customer's shipping information. Until the invoice is finalized, this field will equal `customer.shipping`. Once the invoice is finalized, this field will no longer be updated.
       */
      customer_shipping: UpcomingInvoice.CustomerShipping | null;

      /**
       * The customer's tax exempt status. Until the invoice is finalized, this field will equal `customer.tax_exempt`. Once the invoice is finalized, this field will no longer be updated.
       */
      customer_tax_exempt: UpcomingInvoice.CustomerTaxExempt | null;

      /**
       * The customer's tax IDs. Until the invoice is finalized, this field will contain the same tax IDs as `customer.tax_ids`. Once the invoice is finalized, this field will no longer be updated.
       */
      customer_tax_ids?: Array<UpcomingInvoice.CustomerTaxId> | null;

      /**
       * ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings.
       */
      default_payment_method: string | Stripe.PaymentMethod | null;

      /**
       * ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source.
       */
      default_source: string | CustomerSource | null;

      /**
       * The tax rates applied to this invoice, if any.
       */
      default_tax_rates: Array<Stripe.TaxRate> | null;

      deleted?: void;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
       */
      description: string | null;

      /**
       * Describes the current discount applied to this invoice, if there is one. Not populated if there are multiple discounts.
       */
      discount: Stripe.Discount | null;

      /**
       * The discounts applied to the invoice. Line item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
       */
      discounts: Array<
        string | Stripe.Discount | Stripe.DeletedDiscount
      > | null;

      /**
       * The date on which payment for this invoice is due. This value will be `null` for invoices where `collection_method=charge_automatically`.
       */
      due_date: number | null;

      /**
       * Ending customer balance after the invoice is finalized. Invoices are finalized approximately an hour after successful webhook delivery or when payment collection is attempted for the invoice. If the invoice has not been finalized yet, this will be null.
       */
      ending_balance: number | null;

      /**
       * Footer displayed on the invoice.
       */
      footer: string | null;

      /**
       * The individual line items that make up the invoice. `lines` is sorted as follows: invoice items in reverse chronological order, followed by the subscription, if any.
       */
      lines: ApiList<Stripe.InvoiceLineItem>;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Metadata | null;

      /**
       * The time at which payment will next be attempted. This value will be `null` for invoices where `collection_method=send_invoice`.
       */
      next_payment_attempt: number | null;

      /**
       * A unique, identifying string that appears on emails sent to the customer for this invoice. This starts with the customer's unique invoice_prefix if it is specified.
       */
      number: string | null;

      /**
       * Whether payment was successfully collected for this invoice. An invoice can be paid (most commonly) with a charge or with credit from the customer's account balance.
       */
      paid: boolean;

      /**
       * The PaymentIntent associated with this invoice. The PaymentIntent is generated when the invoice is finalized, and can then be used to pay the invoice. Note that voiding an invoice will cancel the PaymentIntent.
       */
      payment_intent: string | Stripe.PaymentIntent | null;

      /**
       * End of the usage period during which invoice items were added to this invoice.
       */
      period_end: number;

      /**
       * Start of the usage period during which invoice items were added to this invoice.
       */
      period_start: number;

      /**
       * Total amount of all post-payment credit notes issued for this invoice.
       */
      post_payment_credit_notes_amount: number;

      /**
       * Total amount of all pre-payment credit notes issued for this invoice.
       */
      pre_payment_credit_notes_amount: number;

      /**
       * This is the transaction number that appears on email receipts sent for this invoice.
       */
      receipt_number: string | null;

      /**
       * Starting customer balance before the invoice is finalized. If the invoice has not been finalized yet, this will be the current customer balance.
       */
      starting_balance: number;

      /**
       * Extra information about an invoice for the customer's credit card statement.
       */
      statement_descriptor: string | null;

      /**
       * The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview)
       */
      status: UpcomingInvoice.Status | null;

      status_transitions: UpcomingInvoice.StatusTransitions;

      /**
       * The subscription that this invoice was prepared for, if any.
       */
      subscription: string | Stripe.Subscription | null;

      /**
       * Only set for upcoming invoices that preview prorations. The time used to calculate prorations.
       */
      subscription_proration_date?: number;

      /**
       * Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or tax is applied. Item discounts are already incorporated
       */
      subtotal: number;

      /**
       * The amount of tax on this invoice. This is the sum of all the tax amounts on this invoice.
       */
      tax: number | null;

      threshold_reason?: UpcomingInvoice.ThresholdReason;

      /**
       * Total after discounts and taxes.
       */
      total: number;

      /**
       * The aggregate amounts calculated per discount across all line items.
       */
      total_discount_amounts: Array<UpcomingInvoice.TotalDiscountAmount> | null;

      /**
       * The aggregate amounts calculated per tax rate for all line items.
       */
      total_tax_amounts: Array<UpcomingInvoice.TotalTaxAmount> | null;

      /**
       * The account (if any) the payment will be attributed to for tax reporting, and where funds from the payment will be transferred to for the invoice.
       */
      transfer_data: UpcomingInvoice.TransferData | null;

      /**
       * Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://stripe.com/docs/billing/webhooks#understand). This field tracks the time when webhooks for this invoice were successfully delivered. If the invoice had no webhooks to deliver, this will be set while the invoice is being created.
       */
      webhooks_delivered_at: number | null;
    }

    namespace UpcomingInvoice {
      type BillingReason =
        | 'automatic_pending_invoice_item_invoice'
        | 'manual'
        | 'subscription'
        | 'subscription_create'
        | 'subscription_cycle'
        | 'subscription_threshold'
        | 'subscription_update'
        | 'upcoming';

      type CollectionMethod = 'charge_automatically' | 'send_invoice';

      interface CustomerShipping {
        address?: Address;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string | null;

        /**
         * Recipient name.
         */
        name?: string | null;

        /**
         * Recipient phone (including extension).
         */
        phone?: string | null;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string | null;
      }

      type CustomerTaxExempt = 'exempt' | 'none' | 'reverse';

      interface CustomerTaxId {
        /**
         * The type of the tax ID, one of `eu_vat`, `br_cnpj`, `br_cpf`, `nz_gst`, `au_abn`, `in_gst`, `no_vat`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `li_uid`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, or `unknown`
         */
        type: CustomerTaxId.Type;

        /**
         * The value of the tax ID.
         */
        value: string | null;
      }

      namespace CustomerTaxId {
        type Type =
          | 'ae_trn'
          | 'au_abn'
          | 'br_cnpj'
          | 'br_cpf'
          | 'ca_bn'
          | 'ca_qst'
          | 'ch_vat'
          | 'cl_tin'
          | 'es_cif'
          | 'eu_vat'
          | 'hk_br'
          | 'id_npwp'
          | 'in_gst'
          | 'jp_cn'
          | 'jp_rn'
          | 'kr_brn'
          | 'li_uid'
          | 'mx_rfc'
          | 'my_frp'
          | 'my_itn'
          | 'my_sst'
          | 'no_vat'
          | 'nz_gst'
          | 'ru_inn'
          | 'ru_kpp'
          | 'sa_vat'
          | 'sg_gst'
          | 'sg_uen'
          | 'th_vat'
          | 'tw_vat'
          | 'unknown'
          | 'us_ein'
          | 'za_vat';
      }

      interface CustomField {
        /**
         * The name of the custom field.
         */
        name: string;

        /**
         * The value of the custom field.
         */
        value: string;
      }

      type Status =
        | 'deleted'
        | 'draft'
        | 'open'
        | 'paid'
        | 'uncollectible'
        | 'void';

      interface StatusTransitions {
        /**
         * The time that the invoice draft was finalized.
         */
        finalized_at: number | null;

        /**
         * The time that the invoice was marked uncollectible.
         */
        marked_uncollectible_at: number | null;

        /**
         * The time that the invoice was paid.
         */
        paid_at: number | null;

        /**
         * The time that the invoice was voided.
         */
        voided_at: number | null;
      }

      interface ThresholdReason {
        /**
         * The total invoice amount threshold boundary if it triggered the threshold invoice.
         */
        amount_gte: number | null;

        /**
         * Indicates which line items triggered a threshold invoice.
         */
        item_reasons: Array<ThresholdReason.ItemReason>;
      }

      namespace ThresholdReason {
        interface ItemReason {
          /**
           * The IDs of the line items that triggered the threshold invoice.
           */
          line_item_ids: Array<string>;

          /**
           * The quantity threshold boundary that applied to the given line item.
           */
          usage_gte: number;
        }
      }

      interface TotalDiscountAmount {
        /**
         * The amount, in %s, of the discount.
         */
        amount: number;

        /**
         * The discount that was applied to get this discount amount.
         */
        discount: string | Stripe.Discount | Stripe.DeletedDiscount;
      }

      interface TotalTaxAmount {
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

      interface TransferData {
        /**
         * The amount in %s that will be transferred to the destination account when the invoice is paid. By default, the entire amount is transferred to the destination.
         */
        amount: number | null;

        /**
         * The account where funds from the payment will be transferred to upon payment success.
         */
        destination: string | Stripe.Account;
      }
    }

    /**
     * The DeletedInvoice object.
     */
    interface DeletedInvoice {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'invoice';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }
  }
}
