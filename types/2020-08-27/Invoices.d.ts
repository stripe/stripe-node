// File generated from our OpenAPI spec
declare module 'stripe' {
  namespace Stripe {
    /**
     * The Invoice object.
     */
    interface Invoice {
      /**
       * Unique identifier for the object.
       */
      id: string;

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
       * Controls whether Stripe will perform [automatic collection](https://stripe.com/docs/billing/invoices/workflow/#auto_advance) of the invoice. When `false`, the invoice's state will not automatically advance without an explicit action.
       */
      auto_advance?: boolean;

      /**
       * Indicates the reason why the invoice was created. `subscription_cycle` indicates an invoice created by a subscription advancing into a new period. `subscription_create` indicates an invoice created due to creating a subscription. `subscription_update` indicates an invoice created due to updating a subscription. `subscription` is set for all old invoices to indicate either a change to a subscription or a period advancement. `manual` is set for all invoices unrelated to a subscription (for example: created via the invoice editor). The `upcoming` value is reserved for simulated invoices per the upcoming invoice endpoint. `subscription_threshold` indicates an invoice created due to a billing threshold being reached.
       */
      billing_reason: Invoice.BillingReason | null;

      /**
       * ID of the latest charge generated for this invoice, if any.
       */
      charge: string | Stripe.Charge | null;

      /**
       * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions.
       */
      collection_method: Invoice.CollectionMethod | null;

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
      custom_fields: Array<Invoice.CustomField> | null;

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
      customer_shipping: Invoice.CustomerShipping | null;

      /**
       * The customer's tax exempt status. Until the invoice is finalized, this field will equal `customer.tax_exempt`. Once the invoice is finalized, this field will no longer be updated.
       */
      customer_tax_exempt: Invoice.CustomerTaxExempt | null;

      /**
       * The customer's tax IDs. Until the invoice is finalized, this field will contain the same tax IDs as `customer.tax_ids`. Once the invoice is finalized, this field will no longer be updated.
       */
      customer_tax_ids?: Array<Invoice.CustomerTaxId> | null;

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
       * Describes the current discount applied to this invoice, if there is one.
       */
      discount: Stripe.Discount | null;

      /**
       * The discounts applied to the invoice. Line item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
       */
      discounts?: Array<
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
       * The URL for the hosted invoice page, which allows customers to view and pay an invoice. If the invoice has not been finalized yet, this will be null.
       */
      hosted_invoice_url?: string | null;

      /**
       * The link to download the PDF for the invoice. If the invoice has not been finalized yet, this will be null.
       */
      invoice_pdf?: string | null;

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
      status: Invoice.Status | null;

      status_transitions: Invoice.StatusTransitions;

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

      threshold_reason?: Invoice.ThresholdReason;

      /**
       * Total after discounts and taxes.
       */
      total: number;

      /**
       * The aggregate amounts calculated per discount across all line items.
       */
      total_discount_amounts?: Array<Invoice.TotalDiscountAmount> | null;

      /**
       * The aggregate amounts calculated per tax rate for all line items.
       */
      total_tax_amounts: Array<Invoice.TotalTaxAmount> | null;

      /**
       * The account (if any) the payment will be attributed to for tax reporting, and where funds from the payment will be transferred to for the invoice.
       */
      transfer_data: Invoice.TransferData | null;

      /**
       * Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://stripe.com/docs/billing/webhooks#understand). This field tracks the time when webhooks for this invoice were successfully delivered. If the invoice had no webhooks to deliver, this will be set while the invoice is being created.
       */
      webhooks_delivered_at: number | null;
    }

    namespace Invoice {
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
         * The type of the tax ID, one of `eu_vat`, `br_cnpj`, `br_cpf`, `nz_gst`, `au_abn`, `in_gst`, `no_vat`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ca_bn`, `hk_br`, `es_cif`, `tw_vat`, `th_vat`, `jp_cn`, `li_uid`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, or `unknown`
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
          | 'kr_brn'
          | 'li_uid'
          | 'mx_rfc'
          | 'my_frp'
          | 'my_itn'
          | 'my_sst'
          | 'no_vat'
          | 'nz_gst'
          | 'ru_inn'
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

    interface InvoiceCreateParams {
      /**
       * The ID of the customer who will be billed.
       */
      customer: string;

      /**
       * A fee in %s that will be applied to the invoice and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#invoices).
       */
      application_fee_amount?: number;

      /**
       * Controls whether Stripe will perform [automatic collection](https://stripe.com/docs/billing/invoices/workflow/#auto_advance) of the invoice. When `false`, the invoice's state will not automatically advance without an explicit action.
       */
      auto_advance?: boolean;

      /**
       * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions. Defaults to `charge_automatically`.
       */
      collection_method?: InvoiceCreateParams.CollectionMethod;

      /**
       * A list of up to 4 custom fields to be displayed on the invoice.
       */
      custom_fields?: Array<InvoiceCreateParams.CustomField> | null;

      /**
       * The number of days from when the invoice is created until it is due. Valid only for invoices where `collection_method=send_invoice`.
       */
      days_until_due?: number;

      /**
       * ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings.
       */
      default_payment_method?: string;

      /**
       * ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source.
       */
      default_source?: string;

      /**
       * The tax rates that will apply to any line item that does not have `tax_rates` set.
       */
      default_tax_rates?: Array<string>;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
       */
      description?: string;

      /**
       * The coupons to redeem into discounts for the invoice. If not specified, inherits the discount from the invoice's customer. Pass an empty string to avoid inheriting any discounts.
       */
      discounts?: Array<InvoiceCreateParams.Discount> | null;

      /**
       * The date on which payment for this invoice is due. Valid only for invoices where `collection_method=send_invoice`.
       */
      due_date?: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Footer to be displayed on the invoice.
       */
      footer?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam | null;

      /**
       * Extra information about a charge for the customer's credit card statement. It must contain at least one letter. If not specified and this invoice is part of a subscription, the default `statement_descriptor` will be set to the first subscription item's product's `statement_descriptor`.
       */
      statement_descriptor?: string;

      /**
       * The ID of the subscription to invoice, if any. If not set, the created invoice will include all pending invoice items for the customer. If set, the created invoice will only include pending invoice items for that subscription and pending invoice items not associated with any subscription. The subscription's billing cycle and regular subscription events won't be affected.
       */
      subscription?: string;

      /**
       * If specified, the funds from the invoice will be transferred to the destination and the ID of the resulting transfer will be found on the invoice's charge.
       */
      transfer_data?: InvoiceCreateParams.TransferData;
    }

    namespace InvoiceCreateParams {
      type CollectionMethod = 'charge_automatically' | 'send_invoice';

      interface CustomField {
        /**
         * The name of the custom field. This may be up to 30 characters.
         */
        name: string;

        /**
         * The value of the custom field. This may be up to 30 characters.
         */
        value: string;
      }

      interface Discount {
        /**
         * ID of the coupon to create a new discount for.
         */
        coupon?: string;

        /**
         * ID of an existing discount on the object (or one of its ancestors) to reuse.
         */
        discount?: string;
      }

      interface TransferData {
        /**
         * The amount that will be transferred automatically when the invoice is paid. If no amount is set, the full amount is transferred.
         */
        amount?: number;

        /**
         * ID of an existing, connected Stripe account.
         */
        destination: string;
      }
    }

    interface InvoiceRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface InvoiceUpdateParams {
      /**
       * A fee in %s that will be applied to the invoice and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#invoices).
       */
      application_fee_amount?: number;

      /**
       * Controls whether Stripe will perform [automatic collection](https://stripe.com/docs/billing/invoices/workflow/#auto_advance) of the invoice.
       */
      auto_advance?: boolean;

      /**
       * Either `charge_automatically` or `send_invoice`. This field can be updated only on `draft` invoices.
       */
      collection_method?: InvoiceUpdateParams.CollectionMethod;

      /**
       * A list of up to 4 custom fields to be displayed on the invoice. If a value for `custom_fields` is specified, the list specified will replace the existing custom field list on this invoice. Pass an empty string to remove previously-defined fields.
       */
      custom_fields?: Array<InvoiceUpdateParams.CustomField> | null;

      /**
       * The number of days from which the invoice is created until it is due. Only valid for invoices where `collection_method=send_invoice`. This field can only be updated on `draft` invoices.
       */
      days_until_due?: number;

      /**
       * ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings.
       */
      default_payment_method?: string;

      /**
       * ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source.
       */
      default_source?: string;

      /**
       * The tax rates that will apply to any line item that does not have `tax_rates` set. Pass an empty string to remove previously-defined tax rates.
       */
      default_tax_rates?: Array<string> | null;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
       */
      description?: string;

      /**
       * The discounts that will apply to the invoice. Pass an empty string to remove previously-defined discounts.
       */
      discounts?: Array<InvoiceUpdateParams.Discount> | null;

      /**
       * The date on which payment for this invoice is due. Only valid for invoices where `collection_method=send_invoice`. This field can only be updated on `draft` invoices.
       */
      due_date?: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Footer to be displayed on the invoice.
       */
      footer?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam | null;

      /**
       * Extra information about a charge for the customer's credit card statement. It must contain at least one letter. If not specified and this invoice is part of a subscription, the default `statement_descriptor` will be set to the first subscription item's product's `statement_descriptor`.
       */
      statement_descriptor?: string;

      /**
       * If specified, the funds from the invoice will be transferred to the destination and the ID of the resulting transfer will be found on the invoice's charge. This will be unset if you POST an empty value.
       */
      transfer_data?: InvoiceUpdateParams.TransferData | null;
    }

    namespace InvoiceUpdateParams {
      type CollectionMethod = 'charge_automatically' | 'send_invoice';

      interface CustomField {
        /**
         * The name of the custom field. This may be up to 30 characters.
         */
        name: string;

        /**
         * The value of the custom field. This may be up to 30 characters.
         */
        value: string;
      }

      interface Discount {
        /**
         * ID of the coupon to create a new discount for.
         */
        coupon?: string;

        /**
         * ID of an existing discount on the object (or one of its ancestors) to reuse.
         */
        discount?: string;
      }

      interface TransferData {
        /**
         * The amount that will be transferred automatically when the invoice is paid. If no amount is set, the full amount is transferred.
         */
        amount?: number;

        /**
         * ID of an existing, connected Stripe account.
         */
        destination: string;
      }
    }

    interface InvoiceListParams extends PaginationParams {
      /**
       * The collection method of the invoice to retrieve. Either `charge_automatically` or `send_invoice`.
       */
      collection_method?: InvoiceListParams.CollectionMethod;

      created?: RangeQueryParam | number;

      /**
       * Only return invoices for the customer specified by this customer ID.
       */
      customer?: string;

      due_date?: RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview)
       */
      status?: InvoiceListParams.Status;

      /**
       * Only return invoices for the subscription specified by this subscription ID.
       */
      subscription?: string;
    }

    namespace InvoiceListParams {
      type CollectionMethod = 'charge_automatically' | 'send_invoice';

      type Status = 'draft' | 'open' | 'paid' | 'uncollectible' | 'void';
    }

    interface InvoiceDeleteParams {}

    interface InvoiceFinalizeInvoiceParams {
      /**
       * Controls whether Stripe will perform [automatic collection](https://stripe.com/docs/billing/invoices/workflow/#auto_advance) of the invoice. When `false`, the invoice's state will not automatically advance without an explicit action.
       */
      auto_advance?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface InvoiceMarkUncollectibleParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface InvoicePayParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * In cases where the source used to pay the invoice has insufficient funds, passing `forgive=true` controls whether a charge should be attempted for the full amount available on the source, up to the amount to fully pay the invoice. This effectively forgives the difference between the amount available on the source and the amount due.
       *
       * Passing `forgive=false` will fail the charge if the source hasn't been pre-funded with the right amount. An example for this case is with ACH Credit Transfers and wires: if the amount wired is less than the amount due by a small amount, you might want to forgive the difference. Defaults to `false`.
       */
      forgive?: boolean;

      /**
       * Indicates if a customer is on or off-session while an invoice payment is attempted. Defaults to `true` (off-session).
       */
      off_session?: boolean;

      /**
       * Boolean representing whether an invoice is paid outside of Stripe. This will result in no charge being made. Defaults to `false`.
       */
      paid_out_of_band?: boolean;

      /**
       * A PaymentMethod to be charged. The PaymentMethod must be the ID of a PaymentMethod belonging to the customer associated with the invoice being paid.
       */
      payment_method?: string;

      /**
       * A payment source to be charged. The source must be the ID of a source belonging to the customer associated with the invoice being paid.
       */
      source?: string;
    }

    interface InvoiceRetrieveUpcomingParams {
      /**
       * The code of the coupon to apply. If `subscription` or `subscription_items` is provided, the invoice returned will preview updating or creating a subscription with that coupon. Otherwise, it will preview applying that coupon to the customer for the next upcoming invoice from among the customer's subscriptions. The invoice can be previewed without a coupon by passing this value as an empty string.
       */
      coupon?: string;

      /**
       * The identifier of the customer whose upcoming invoice you'd like to retrieve.
       */
      customer?: string;

      discounts?: Array<InvoiceRetrieveUpcomingParams.Discount> | null;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * List of invoice items to add or update in the upcoming invoice preview.
       */
      invoice_items?: Array<InvoiceRetrieveUpcomingParams.InvoiceItem>;

      /**
       * The identifier of the unstarted schedule whose upcoming invoice you'd like to retrieve. Cannot be used with subscription or subscription fields.
       */
      schedule?: string;

      /**
       * The identifier of the subscription for which you'd like to retrieve the upcoming invoice. If not provided, but a `subscription_items` is provided, you will preview creating a subscription with those items. If neither `subscription` nor `subscription_items` is provided, you will retrieve the next upcoming invoice from among the customer's subscriptions.
       */
      subscription?: string;

      /**
       * For new subscriptions, a future timestamp to anchor the subscription's [billing cycle](https://stripe.com/docs/subscriptions/billing-cycle). This is used to determine the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. For existing subscriptions, the value can only be set to `now` or `unchanged`.
       */
      subscription_billing_cycle_anchor?:
        | InvoiceRetrieveUpcomingParams.SubscriptionBillingCycleAnchor
        | number;

      /**
       * Timestamp indicating when the subscription should be scheduled to cancel. Will prorate if within the current period and prorations have been enabled using `proration_behavior`.
       */
      subscription_cancel_at?: number | null;

      /**
       * Boolean indicating whether this subscription should cancel at the end of the current period.
       */
      subscription_cancel_at_period_end?: boolean;

      /**
       * This simulates the subscription being canceled or expired immediately.
       */
      subscription_cancel_now?: boolean;

      /**
       * If provided, the invoice returned will preview updating or creating a subscription with these default tax rates. The default tax rates will apply to any line item that does not have `tax_rates` set.
       */
      subscription_default_tax_rates?: Array<string> | null;

      /**
       * A list of up to 20 subscription items, each with an attached price.
       */
      subscription_items?: Array<
        InvoiceRetrieveUpcomingParams.SubscriptionItem
      >;

      /**
       * Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. Valid values are `create_prorations`, `none`, or `always_invoice`.
       *
       * Passing `create_prorations` will cause proration invoice items to be created when applicable. These proration items will only be invoiced immediately under [certain conditions](https://stripe.com/docs/subscriptions/upgrading-downgrading#immediate-payment). In order to always invoice immediately for prorations, pass `always_invoice`.
       *
       * Prorations can be disabled by passing `none`.
       */
      subscription_proration_behavior?: InvoiceRetrieveUpcomingParams.SubscriptionProrationBehavior;

      /**
       * If previewing an update to a subscription, and doing proration, `subscription_proration_date` forces the proration to be calculated as though the update was done at the specified time. The time given must be within the current subscription period, and cannot be before the subscription was on its current plan. If set, `subscription`, and one of `subscription_items`, or `subscription_trial_end` are required. Also, `subscription_proration_behavior` cannot be set to 'none'.
       */
      subscription_proration_date?: number;

      /**
       * Date a subscription is intended to start (can be future or past)
       */
      subscription_start_date?: number;

      /**
       * If provided, the invoice returned will preview updating or creating a subscription with that trial end. If set, one of `subscription_items` or `subscription` is required.
       */
      subscription_trial_end?: 'now' | number;

      /**
       * Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `subscription_trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `subscription_trial_end` is not allowed.
       */
      subscription_trial_from_plan?: boolean;
    }

    namespace InvoiceRetrieveUpcomingParams {
      interface Discount {
        /**
         * ID of the coupon to create a new discount for.
         */
        coupon?: string;

        /**
         * ID of an existing discount on the object (or one of its ancestors) to reuse.
         */
        discount?: string;
      }

      interface InvoiceItem {
        /**
         * The integer amount in **%s** of previewed invoice item.
         */
        amount?: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). Only applicable to new invoice items.
         */
        currency?: string;

        /**
         * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
         */
        description?: string;

        /**
         * Explicitly controls whether discounts apply to this invoice item. Defaults to true, except for negative invoice items.
         */
        discountable?: boolean;

        /**
         * The coupons to redeem into discounts for the invoice item in the preview.
         */
        discounts?: Array<InvoiceItem.Discount> | null;

        /**
         * The ID of the invoice item to update in preview. If not specified, a new invoice item will be added to the preview of the upcoming invoice.
         */
        invoiceitem?: string;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam | null;

        /**
         * The period associated with this invoice item.
         */
        period?: InvoiceItem.Period;

        /**
         * The ID of the price object.
         */
        price?: string;

        /**
         * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
         */
        price_data?: InvoiceItem.PriceData;

        /**
         * Non-negative integer. The quantity of units for the invoice item.
         */
        quantity?: number;

        tax_rates?: Array<string> | null;

        /**
         * The integer unit amount in **%s** of the charge to be applied to the upcoming invoice. This unit_amount will be multiplied by the quantity to get the full amount. If you want to apply a credit to the customer's account, pass a negative unit_amount.
         */
        unit_amount?: number;

        /**
         * Same as `unit_amount`, but accepts a decimal string with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
         */
        unit_amount_decimal?: string;
      }

      namespace InvoiceItem {
        interface Discount {
          /**
           * ID of the coupon to create a new discount for.
           */
          coupon?: string;

          /**
           * ID of an existing discount on the object (or one of its ancestors) to reuse.
           */
          discount?: string;
        }

        interface Period {
          /**
           * The end of the period, which must be greater than or equal to the start.
           */
          end: number;

          /**
           * The start of the period.
           */
          start: number;
        }

        interface PriceData {
          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * The ID of the product that this price will belong to.
           */
          product: string;

          /**
           * A positive integer in %s (or 0 for a free price) representing how much to charge.
           */
          unit_amount?: number;

          /**
           * Same as `unit_amount`, but accepts a decimal value with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set, but at least one is required.
           */
          unit_amount_decimal?: string;
        }
      }

      type SubscriptionBillingCycleAnchor = 'now' | 'unchanged';

      interface SubscriptionItem {
        /**
         * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
         */
        billing_thresholds?: SubscriptionItem.BillingThresholds | null;

        /**
         * Delete all usage for a given subscription item. Allowed only when `deleted` is set to `true` and the current plan's `usage_type` is `metered`.
         */
        clear_usage?: boolean;

        /**
         * A flag that, if set to `true`, will delete the specified item.
         */
        deleted?: boolean;

        /**
         * Subscription item to update.
         */
        id?: string;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam | null;

        /**
         * Plan ID for this item, as a string.
         */
        plan?: string;

        /**
         * The ID of the price object.
         */
        price?: string;

        /**
         * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
         */
        price_data?: SubscriptionItem.PriceData;

        /**
         * Quantity for this item.
         */
        quantity?: number;

        /**
         * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
         */
        tax_rates?: Array<string> | null;
      }

      namespace SubscriptionItem {
        interface BillingThresholds {
          /**
           * Usage threshold that triggers the subscription to advance to a new billing period
           */
          usage_gte: number;
        }

        interface PriceData {
          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * The ID of the product that this price will belong to.
           */
          product: string;

          /**
           * The recurring components of a price such as `interval` and `usage_type`.
           */
          recurring: PriceData.Recurring;

          /**
           * A positive integer in %s (or 0 for a free price) representing how much to charge.
           */
          unit_amount?: number;

          /**
           * Same as `unit_amount`, but accepts a decimal value with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set, but at least one is required.
           */
          unit_amount_decimal?: string;
        }

        namespace PriceData {
          interface Recurring {
            /**
             * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
             */
            interval: Recurring.Interval;

            /**
             * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
             */
            interval_count?: number;
          }

          namespace Recurring {
            type Interval = 'day' | 'month' | 'week' | 'year';
          }
        }
      }

      type SubscriptionProrationBehavior =
        | 'always_invoice'
        | 'create_prorations'
        | 'none';
    }

    interface InvoiceSendInvoiceParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface InvoiceVoidInvoiceParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class InvoicesResource {
      /**
       * This endpoint creates a draft invoice for a given customer. The draft invoice created pulls in all pending invoice items on that customer, including prorations.
       */
      create(
        params: InvoiceCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Invoice>>;

      /**
       * Retrieves the invoice with the given ID.
       */
      retrieve(
        id: string,
        params?: InvoiceRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Invoice>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Invoice>>;

      /**
       * Draft invoices are fully editable. Once an invoice is [finalized](https://stripe.com/docs/billing/invoices/workflow#finalized),
       * monetary values, as well as collection_method, become uneditable.
       *
       * If you would like to stop the Stripe Billing engine from automatically finalizing, reattempting payments on,
       * sending reminders for, or [automatically reconciling](https://stripe.com/docs/billing/invoices/reconciliation) invoices, pass
       * auto_advance=false.
       */
      update(
        id: string,
        params?: InvoiceUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Invoice>>;

      /**
       * You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.
       */
      list(
        params?: InvoiceListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Invoice>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Invoice>;

      /**
       * Permanently deletes a one-off invoice draft. This cannot be undone. Attempts to delete invoices that are no longer in a draft state will fail; once an invoice has been finalized or if an invoice is for a subscription, it must be [voided](https://stripe.com/docs/api#void_invoice).
       */
      del(
        id: string,
        params?: InvoiceDeleteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedInvoice>>;
      del(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedInvoice>>;

      /**
       * Stripe automatically finalizes drafts before sending and attempting payment on invoices. However, if you'd like to finalize a draft invoice manually, you can do so using this method.
       */
      finalizeInvoice(
        id: string,
        params?: InvoiceFinalizeInvoiceParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Invoice>>;
      finalizeInvoice(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Invoice>>;

      /**
       * Marking an invoice as uncollectible is useful for keeping track of bad debts that can be written off for accounting purposes.
       */
      markUncollectible(
        id: string,
        params?: InvoiceMarkUncollectibleParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Invoice>>;
      markUncollectible(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Invoice>>;

      /**
       * Stripe automatically creates and then attempts to collect payment on invoices for customers on subscriptions according to your [subscriptions settings](https://dashboard.stripe.com/account/billing/automatic). However, if you'd like to attempt payment on an invoice out of the normal collection schedule or for some other reason, you can do so.
       */
      pay(
        id: string,
        params?: InvoicePayParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Invoice>>;
      pay(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Invoice>>;

      /**
       * At any time, you can preview the upcoming invoice for a customer. This will show you all the charges that are pending, including subscription renewal charges, invoice item charges, etc. It will also show you any discount that is applicable to the customer.
       *
       * Note that when you are viewing an upcoming invoice, you are simply viewing a preview – the invoice has not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or update pending invoice items, or update the customer's discount.
       *
       * You can preview the effects of updating a subscription, including a preview of what proration will take place. To ensure that the actual proration is calculated exactly the same as the previewed proration, you should pass a proration_date parameter when doing the actual subscription update. The value passed in should be the same as the subscription_proration_date returned on the upcoming invoice resource. The recommended way to get only the prorations being previewed is to consider only proration line items where period[start] is equal to the subscription_proration_date on the upcoming invoice resource.
       */
      retrieveUpcoming(
        params?: InvoiceRetrieveUpcomingParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Invoice>>;
      retrieveUpcoming(
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Invoice>>;

      /**
       * Stripe will automatically send invoices to customers according to your [subscriptions settings](https://dashboard.stripe.com/account/billing/automatic). However, if you'd like to manually send an invoice to your customer out of the normal schedule, you can do so. When sending invoices that have already been paid, there will be no reference to the payment in the email.
       *
       * Requests made in test-mode result in no emails being sent, despite sending an invoice.sent event.
       */
      sendInvoice(
        id: string,
        params?: InvoiceSendInvoiceParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Invoice>>;
      sendInvoice(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Invoice>>;

      /**
       * Mark a finalized invoice as void. This cannot be undone. Voiding an invoice is similar to [deletion](https://stripe.com/docs/api#delete_invoice), however it only applies to finalized invoices and maintains a papertrail where the invoice can still be found.
       */
      voidInvoice(
        id: string,
        params?: InvoiceVoidInvoiceParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Invoice>>;
      voidInvoice(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Invoice>>;

      /**
       * When retrieving an invoice, you'll get a lines property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
       */
      listLineItems(
        id: string,
        params?: InvoiceLineItemListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.InvoiceLineItem>;
      listLineItems(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.InvoiceLineItem>;

      /**
       * When retrieving an upcoming invoice, you'll get a lines property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
       */
      listUpcomingLineItems(
        params?: InvoiceLineItemListUpcomingParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.InvoiceLineItem>;
      listUpcomingLineItems(
        options?: RequestOptions
      ): ApiListPromise<Stripe.InvoiceLineItem>;
    }
  }
}
