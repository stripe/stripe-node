// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface InvoiceCreateParams {
      /**
       * The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
       */
      account_tax_ids?: Stripe.Emptyable<Array<string>>;

      /**
       * A fee in cents (or local equivalent) that will be applied to the invoice and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/billing/invoices/connect#collecting-fees).
       */
      application_fee_amount?: number;

      /**
       * Controls whether Stripe will perform [automatic collection](https://stripe.com/docs/billing/invoices/workflow/#auto_advance) of the invoice. When `false`, the invoice's state will not automatically advance without an explicit action.
       */
      auto_advance?: boolean;

      /**
       * Settings for automatic tax lookup for this invoice.
       */
      automatic_tax?: InvoiceCreateParams.AutomaticTax;

      /**
       * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions. Defaults to `charge_automatically`.
       */
      collection_method?: InvoiceCreateParams.CollectionMethod;

      /**
       * The currency to create this invoice in. Defaults to that of `customer` if not specified.
       */
      currency?: string;

      /**
       * A list of up to 4 custom fields to be displayed on the invoice.
       */
      custom_fields?: Stripe.Emptyable<Array<InvoiceCreateParams.CustomField>>;

      /**
       * The ID of the customer who will be billed.
       */
      customer?: string;

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
      discounts?: Stripe.Emptyable<Array<InvoiceCreateParams.Discount>>;

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
       * Revise an existing invoice. The new invoice will be created in `status=draft`. See the [revision documentation](https://stripe.com/docs/invoicing/invoice-revisions) for more details.
       */
      from_invoice?: InvoiceCreateParams.FromInvoice;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://stripe.com/docs/billing/invoices/connect) documentation for details.
       */
      on_behalf_of?: string;

      /**
       * Configuration settings for the PaymentIntent that is generated when the invoice is finalized.
       */
      payment_settings?: InvoiceCreateParams.PaymentSettings;

      /**
       * How to handle pending invoice items on invoice creation. One of `include` or `exclude`. `include` will include any pending invoice items, and will create an empty draft invoice if no pending invoice items exist. `exclude` will always create an empty invoice draft regardless if there are pending invoice items or not. Defaults to `exclude` if the parameter is omitted.
       */
      pending_invoice_items_behavior?: InvoiceCreateParams.PendingInvoiceItemsBehavior;

      /**
       * Options for invoice PDF rendering.
       */
      rendering_options?: Stripe.Emptyable<
        InvoiceCreateParams.RenderingOptions
      >;

      /**
       * Settings for the cost of shipping for this invoice.
       */
      shipping_cost?: InvoiceCreateParams.ShippingCost;

      /**
       * Shipping details for the invoice. The Invoice PDF will use the `shipping_details` value if it is set, otherwise the PDF will render the shipping address from the customer.
       */
      shipping_details?: InvoiceCreateParams.ShippingDetails;

      /**
       * Extra information about a charge for the customer's credit card statement. It must contain at least one letter. If not specified and this invoice is part of a subscription, the default `statement_descriptor` will be set to the first subscription item's product's `statement_descriptor`.
       */
      statement_descriptor?: string;

      /**
       * The ID of the subscription to invoice, if any. If set, the created invoice will only include pending invoice items for that subscription. The subscription's billing cycle and regular subscription events won't be affected.
       */
      subscription?: string;

      /**
       * If specified, the funds from the invoice will be transferred to the destination and the ID of the resulting transfer will be found on the invoice's charge.
       */
      transfer_data?: InvoiceCreateParams.TransferData;
    }

    namespace InvoiceCreateParams {
      interface AutomaticTax {
        /**
         * Whether Stripe automatically computes tax on this invoice. Note that incompatible invoice items (invoice items with manually specified [tax rates](https://stripe.com/docs/api/tax_rates), negative amounts, or `tax_behavior=unspecified`) cannot be added to automatic tax invoices.
         */
        enabled: boolean;
      }

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

      interface FromInvoice {
        /**
         * The relation between the new invoice and the original invoice. Currently, only 'revision' is permitted
         */
        action: 'revision';

        /**
         * The `id` of the invoice that will be cloned.
         */
        invoice: string;
      }

      interface PaymentSettings {
        /**
         * ID of the mandate to be used for this invoice. It must correspond to the payment method used to pay the invoice, including the invoice's default_payment_method or default_source, if set.
         */
        default_mandate?: string;

        /**
         * Payment-method-specific configuration to provide to the invoice's PaymentIntent.
         */
        payment_method_options?: PaymentSettings.PaymentMethodOptions;

        /**
         * The list of payment method types (e.g. card) to provide to the invoice's PaymentIntent. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice's default payment method, the subscription's default payment method, the customer's default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice).
         */
        payment_method_types?: Stripe.Emptyable<
          Array<PaymentSettings.PaymentMethodType>
        >;
      }

      namespace PaymentSettings {
        interface PaymentMethodOptions {
          /**
           * If paying by `acss_debit`, this sub-hash contains details about the Canadian pre-authorized debit payment method options to pass to the invoice's PaymentIntent.
           */
          acss_debit?: Stripe.Emptyable<PaymentMethodOptions.AcssDebit>;

          /**
           * If paying by `bancontact`, this sub-hash contains details about the Bancontact payment method options to pass to the invoice's PaymentIntent.
           */
          bancontact?: Stripe.Emptyable<PaymentMethodOptions.Bancontact>;

          /**
           * If paying by `card`, this sub-hash contains details about the Card payment method options to pass to the invoice's PaymentIntent.
           */
          card?: Stripe.Emptyable<PaymentMethodOptions.Card>;

          /**
           * If paying by `customer_balance`, this sub-hash contains details about the Bank transfer payment method options to pass to the invoice's PaymentIntent.
           */
          customer_balance?: Stripe.Emptyable<
            PaymentMethodOptions.CustomerBalance
          >;

          /**
           * If paying by `konbini`, this sub-hash contains details about the Konbini payment method options to pass to the invoice's PaymentIntent.
           */
          konbini?: Stripe.Emptyable<PaymentMethodOptions.Konbini>;

          /**
           * If paying by `us_bank_account`, this sub-hash contains details about the ACH direct debit payment method options to pass to the invoice's PaymentIntent.
           */
          us_bank_account?: Stripe.Emptyable<
            PaymentMethodOptions.UsBankAccount
          >;
        }

        namespace PaymentMethodOptions {
          interface AcssDebit {
            /**
             * Additional fields for Mandate creation
             */
            mandate_options?: AcssDebit.MandateOptions;

            /**
             * Verification method for the intent
             */
            verification_method?: AcssDebit.VerificationMethod;
          }

          namespace AcssDebit {
            interface MandateOptions {
              /**
               * Transaction type of the mandate.
               */
              transaction_type?: MandateOptions.TransactionType;
            }

            namespace MandateOptions {
              type TransactionType = 'business' | 'personal';
            }

            type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
          }

          interface Bancontact {
            /**
             * Preferred language of the Bancontact authorization page that the customer is redirected to.
             */
            preferred_language?: Bancontact.PreferredLanguage;
          }

          namespace Bancontact {
            type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
          }

          interface Card {
            /**
             * Installment configuration for payments attempted on this invoice (Mexico Only).
             *
             * For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
             */
            installments?: Card.Installments;

            /**
             * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
             */
            request_three_d_secure?: Card.RequestThreeDSecure;
          }

          namespace Card {
            interface Installments {
              /**
               * Setting to true enables installments for this invoice.
               * Setting to false will prevent any selected plan from applying to a payment.
               */
              enabled?: boolean;

              /**
               * The selected installment plan to use for this invoice.
               */
              plan?: Stripe.Emptyable<Installments.Plan>;
            }

            namespace Installments {
              interface Plan {
                /**
                 * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
                 */
                count: number;

                /**
                 * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
                 * One of `month`.
                 */
                interval: 'month';

                /**
                 * Type of installment plan, one of `fixed_count`.
                 */
                type: 'fixed_count';
              }
            }

            type RequestThreeDSecure = 'any' | 'automatic';
          }

          interface CustomerBalance {
            /**
             * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
             */
            bank_transfer?: CustomerBalance.BankTransfer;

            /**
             * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
             */
            funding_type?: string;
          }

          namespace CustomerBalance {
            interface BankTransfer {
              /**
               * Configuration for eu_bank_transfer funding type.
               */
              eu_bank_transfer?: BankTransfer.EuBankTransfer;

              /**
               * The bank transfer type that can be used for funding. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, or `mx_bank_transfer`.
               */
              type?: string;
            }

            namespace BankTransfer {
              interface EuBankTransfer {
                /**
                 * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
                 */
                country: string;
              }
            }
          }

          interface Konbini {}

          interface UsBankAccount {
            /**
             * Additional fields for Financial Connections Session creation
             */
            financial_connections?: UsBankAccount.FinancialConnections;

            /**
             * Verification method for the intent
             */
            verification_method?: UsBankAccount.VerificationMethod;
          }

          namespace UsBankAccount {
            interface FinancialConnections {
              /**
               * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
               */
              permissions?: Array<FinancialConnections.Permission>;
            }

            namespace FinancialConnections {
              type Permission =
                | 'balances'
                | 'ownership'
                | 'payment_method'
                | 'transactions';
            }

            type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
          }
        }

        type PaymentMethodType =
          | 'ach_credit_transfer'
          | 'ach_debit'
          | 'acss_debit'
          | 'au_becs_debit'
          | 'bacs_debit'
          | 'bancontact'
          | 'boleto'
          | 'card'
          | 'cashapp'
          | 'customer_balance'
          | 'fpx'
          | 'giropay'
          | 'grabpay'
          | 'ideal'
          | 'konbini'
          | 'link'
          | 'paynow'
          | 'promptpay'
          | 'sepa_credit_transfer'
          | 'sepa_debit'
          | 'sofort'
          | 'us_bank_account'
          | 'wechat_pay';
      }

      type PendingInvoiceItemsBehavior =
        | 'exclude'
        | 'include'
        | 'include_and_require';

      interface RenderingOptions {
        /**
         * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs. One of `exclude_tax` or `include_inclusive_tax`. `include_inclusive_tax` will include inclusive tax (and exclude exclusive tax) in invoice PDF amounts. `exclude_tax` will exclude all tax (inclusive and exclusive alike) from invoice PDF amounts.
         */
        amount_tax_display?: Stripe.Emptyable<
          RenderingOptions.AmountTaxDisplay
        >;
      }

      namespace RenderingOptions {
        type AmountTaxDisplay = 'exclude_tax' | 'include_inclusive_tax';
      }

      interface ShippingCost {
        /**
         * The ID of the shipping rate to use for this order.
         */
        shipping_rate?: string;

        /**
         * Parameters to create a new ad-hoc shipping rate for this order.
         */
        shipping_rate_data?: ShippingCost.ShippingRateData;
      }

      namespace ShippingCost {
        interface ShippingRateData {
          /**
           * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
           */
          delivery_estimate?: ShippingRateData.DeliveryEstimate;

          /**
           * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
           */
          display_name: string;

          /**
           * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
           */
          fixed_amount?: ShippingRateData.FixedAmount;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
           */
          tax_behavior?: ShippingRateData.TaxBehavior;

          /**
           * A [tax code](https://stripe.com/docs/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
           */
          tax_code?: string;

          /**
           * The type of calculation to use on the shipping rate. Can only be `fixed_amount` for now.
           */
          type?: 'fixed_amount';
        }

        namespace ShippingRateData {
          interface DeliveryEstimate {
            /**
             * The upper bound of the estimated range. If empty, represents no upper bound i.e., infinite.
             */
            maximum?: DeliveryEstimate.Maximum;

            /**
             * The lower bound of the estimated range. If empty, represents no lower bound.
             */
            minimum?: DeliveryEstimate.Minimum;
          }

          namespace DeliveryEstimate {
            interface Maximum {
              /**
               * A unit of time.
               */
              unit: Maximum.Unit;

              /**
               * Must be greater than 0.
               */
              value: number;
            }

            namespace Maximum {
              type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
            }

            interface Minimum {
              /**
               * A unit of time.
               */
              unit: Minimum.Unit;

              /**
               * Must be greater than 0.
               */
              value: number;
            }

            namespace Minimum {
              type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
            }
          }

          interface FixedAmount {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;

            /**
             * Shipping rates defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
             */
            currency_options?: {
              [key: string]: FixedAmount.CurrencyOptions;
            };
          }

          namespace FixedAmount {
            interface CurrencyOptions {
              /**
               * A non-negative integer in cents representing how much to charge.
               */
              amount: number;

              /**
               * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
               */
              tax_behavior?: CurrencyOptions.TaxBehavior;
            }

            namespace CurrencyOptions {
              type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
            }
          }

          type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
      }

      interface ShippingDetails {
        /**
         * Shipping address
         */
        address: Stripe.AddressParam;

        /**
         * Recipient name.
         */
        name: string;

        /**
         * Recipient phone (including extension)
         */
        phone?: string;
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
       * The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
       */
      account_tax_ids?: Stripe.Emptyable<Array<string>>;

      /**
       * A fee in cents (or local equivalent) that will be applied to the invoice and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/billing/invoices/connect#collecting-fees).
       */
      application_fee_amount?: number;

      /**
       * Controls whether Stripe will perform [automatic collection](https://stripe.com/docs/billing/invoices/workflow/#auto_advance) of the invoice.
       */
      auto_advance?: boolean;

      /**
       * Settings for automatic tax lookup for this invoice.
       */
      automatic_tax?: InvoiceUpdateParams.AutomaticTax;

      /**
       * Either `charge_automatically` or `send_invoice`. This field can be updated only on `draft` invoices.
       */
      collection_method?: InvoiceUpdateParams.CollectionMethod;

      /**
       * A list of up to 4 custom fields to be displayed on the invoice. If a value for `custom_fields` is specified, the list specified will replace the existing custom field list on this invoice. Pass an empty string to remove previously-defined fields.
       */
      custom_fields?: Stripe.Emptyable<Array<InvoiceUpdateParams.CustomField>>;

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
      default_tax_rates?: Stripe.Emptyable<Array<string>>;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
       */
      description?: string;

      /**
       * The discounts that will apply to the invoice. Pass an empty string to remove previously-defined discounts.
       */
      discounts?: Stripe.Emptyable<Array<InvoiceUpdateParams.Discount>>;

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
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://stripe.com/docs/billing/invoices/connect) documentation for details.
       */
      on_behalf_of?: Stripe.Emptyable<string>;

      /**
       * Configuration settings for the PaymentIntent that is generated when the invoice is finalized.
       */
      payment_settings?: InvoiceUpdateParams.PaymentSettings;

      /**
       * Options for invoice PDF rendering.
       */
      rendering_options?: Stripe.Emptyable<
        InvoiceUpdateParams.RenderingOptions
      >;

      /**
       * Settings for the cost of shipping for this invoice.
       */
      shipping_cost?: Stripe.Emptyable<InvoiceUpdateParams.ShippingCost>;

      /**
       * Shipping details for the invoice. The Invoice PDF will use the `shipping_details` value if it is set, otherwise the PDF will render the shipping address from the customer.
       */
      shipping_details?: Stripe.Emptyable<InvoiceUpdateParams.ShippingDetails>;

      /**
       * Extra information about a charge for the customer's credit card statement. It must contain at least one letter. If not specified and this invoice is part of a subscription, the default `statement_descriptor` will be set to the first subscription item's product's `statement_descriptor`.
       */
      statement_descriptor?: string;

      /**
       * If specified, the funds from the invoice will be transferred to the destination and the ID of the resulting transfer will be found on the invoice's charge. This will be unset if you POST an empty value.
       */
      transfer_data?: Stripe.Emptyable<InvoiceUpdateParams.TransferData>;
    }

    namespace InvoiceUpdateParams {
      interface AutomaticTax {
        /**
         * Whether Stripe automatically computes tax on this invoice. Note that incompatible invoice items (invoice items with manually specified [tax rates](https://stripe.com/docs/api/tax_rates), negative amounts, or `tax_behavior=unspecified`) cannot be added to automatic tax invoices.
         */
        enabled: boolean;
      }

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

      interface PaymentSettings {
        /**
         * ID of the mandate to be used for this invoice. It must correspond to the payment method used to pay the invoice, including the invoice's default_payment_method or default_source, if set.
         */
        default_mandate?: string;

        /**
         * Payment-method-specific configuration to provide to the invoice's PaymentIntent.
         */
        payment_method_options?: PaymentSettings.PaymentMethodOptions;

        /**
         * The list of payment method types (e.g. card) to provide to the invoice's PaymentIntent. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice's default payment method, the subscription's default payment method, the customer's default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice).
         */
        payment_method_types?: Stripe.Emptyable<
          Array<PaymentSettings.PaymentMethodType>
        >;
      }

      namespace PaymentSettings {
        interface PaymentMethodOptions {
          /**
           * If paying by `acss_debit`, this sub-hash contains details about the Canadian pre-authorized debit payment method options to pass to the invoice's PaymentIntent.
           */
          acss_debit?: Stripe.Emptyable<PaymentMethodOptions.AcssDebit>;

          /**
           * If paying by `bancontact`, this sub-hash contains details about the Bancontact payment method options to pass to the invoice's PaymentIntent.
           */
          bancontact?: Stripe.Emptyable<PaymentMethodOptions.Bancontact>;

          /**
           * If paying by `card`, this sub-hash contains details about the Card payment method options to pass to the invoice's PaymentIntent.
           */
          card?: Stripe.Emptyable<PaymentMethodOptions.Card>;

          /**
           * If paying by `customer_balance`, this sub-hash contains details about the Bank transfer payment method options to pass to the invoice's PaymentIntent.
           */
          customer_balance?: Stripe.Emptyable<
            PaymentMethodOptions.CustomerBalance
          >;

          /**
           * If paying by `konbini`, this sub-hash contains details about the Konbini payment method options to pass to the invoice's PaymentIntent.
           */
          konbini?: Stripe.Emptyable<PaymentMethodOptions.Konbini>;

          /**
           * If paying by `us_bank_account`, this sub-hash contains details about the ACH direct debit payment method options to pass to the invoice's PaymentIntent.
           */
          us_bank_account?: Stripe.Emptyable<
            PaymentMethodOptions.UsBankAccount
          >;
        }

        namespace PaymentMethodOptions {
          interface AcssDebit {
            /**
             * Additional fields for Mandate creation
             */
            mandate_options?: AcssDebit.MandateOptions;

            /**
             * Verification method for the intent
             */
            verification_method?: AcssDebit.VerificationMethod;
          }

          namespace AcssDebit {
            interface MandateOptions {
              /**
               * Transaction type of the mandate.
               */
              transaction_type?: MandateOptions.TransactionType;
            }

            namespace MandateOptions {
              type TransactionType = 'business' | 'personal';
            }

            type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
          }

          interface Bancontact {
            /**
             * Preferred language of the Bancontact authorization page that the customer is redirected to.
             */
            preferred_language?: Bancontact.PreferredLanguage;
          }

          namespace Bancontact {
            type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
          }

          interface Card {
            /**
             * Installment configuration for payments attempted on this invoice (Mexico Only).
             *
             * For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
             */
            installments?: Card.Installments;

            /**
             * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
             */
            request_three_d_secure?: Card.RequestThreeDSecure;
          }

          namespace Card {
            interface Installments {
              /**
               * Setting to true enables installments for this invoice.
               * Setting to false will prevent any selected plan from applying to a payment.
               */
              enabled?: boolean;

              /**
               * The selected installment plan to use for this invoice.
               */
              plan?: Stripe.Emptyable<Installments.Plan>;
            }

            namespace Installments {
              interface Plan {
                /**
                 * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
                 */
                count: number;

                /**
                 * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
                 * One of `month`.
                 */
                interval: 'month';

                /**
                 * Type of installment plan, one of `fixed_count`.
                 */
                type: 'fixed_count';
              }
            }

            type RequestThreeDSecure = 'any' | 'automatic';
          }

          interface CustomerBalance {
            /**
             * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
             */
            bank_transfer?: CustomerBalance.BankTransfer;

            /**
             * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
             */
            funding_type?: string;
          }

          namespace CustomerBalance {
            interface BankTransfer {
              /**
               * Configuration for eu_bank_transfer funding type.
               */
              eu_bank_transfer?: BankTransfer.EuBankTransfer;

              /**
               * The bank transfer type that can be used for funding. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, or `mx_bank_transfer`.
               */
              type?: string;
            }

            namespace BankTransfer {
              interface EuBankTransfer {
                /**
                 * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
                 */
                country: string;
              }
            }
          }

          interface Konbini {}

          interface UsBankAccount {
            /**
             * Additional fields for Financial Connections Session creation
             */
            financial_connections?: UsBankAccount.FinancialConnections;

            /**
             * Verification method for the intent
             */
            verification_method?: UsBankAccount.VerificationMethod;
          }

          namespace UsBankAccount {
            interface FinancialConnections {
              /**
               * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
               */
              permissions?: Array<FinancialConnections.Permission>;
            }

            namespace FinancialConnections {
              type Permission =
                | 'balances'
                | 'ownership'
                | 'payment_method'
                | 'transactions';
            }

            type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
          }
        }

        type PaymentMethodType =
          | 'ach_credit_transfer'
          | 'ach_debit'
          | 'acss_debit'
          | 'au_becs_debit'
          | 'bacs_debit'
          | 'bancontact'
          | 'boleto'
          | 'card'
          | 'cashapp'
          | 'customer_balance'
          | 'fpx'
          | 'giropay'
          | 'grabpay'
          | 'ideal'
          | 'konbini'
          | 'link'
          | 'paynow'
          | 'promptpay'
          | 'sepa_credit_transfer'
          | 'sepa_debit'
          | 'sofort'
          | 'us_bank_account'
          | 'wechat_pay';
      }

      interface RenderingOptions {
        /**
         * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs. One of `exclude_tax` or `include_inclusive_tax`. `include_inclusive_tax` will include inclusive tax (and exclude exclusive tax) in invoice PDF amounts. `exclude_tax` will exclude all tax (inclusive and exclusive alike) from invoice PDF amounts.
         */
        amount_tax_display?: Stripe.Emptyable<
          RenderingOptions.AmountTaxDisplay
        >;
      }

      namespace RenderingOptions {
        type AmountTaxDisplay = 'exclude_tax' | 'include_inclusive_tax';
      }

      interface ShippingCost {
        /**
         * The ID of the shipping rate to use for this order.
         */
        shipping_rate?: string;

        /**
         * Parameters to create a new ad-hoc shipping rate for this order.
         */
        shipping_rate_data?: ShippingCost.ShippingRateData;
      }

      namespace ShippingCost {
        interface ShippingRateData {
          /**
           * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
           */
          delivery_estimate?: ShippingRateData.DeliveryEstimate;

          /**
           * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
           */
          display_name: string;

          /**
           * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
           */
          fixed_amount?: ShippingRateData.FixedAmount;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
           */
          tax_behavior?: ShippingRateData.TaxBehavior;

          /**
           * A [tax code](https://stripe.com/docs/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
           */
          tax_code?: string;

          /**
           * The type of calculation to use on the shipping rate. Can only be `fixed_amount` for now.
           */
          type?: 'fixed_amount';
        }

        namespace ShippingRateData {
          interface DeliveryEstimate {
            /**
             * The upper bound of the estimated range. If empty, represents no upper bound i.e., infinite.
             */
            maximum?: DeliveryEstimate.Maximum;

            /**
             * The lower bound of the estimated range. If empty, represents no lower bound.
             */
            minimum?: DeliveryEstimate.Minimum;
          }

          namespace DeliveryEstimate {
            interface Maximum {
              /**
               * A unit of time.
               */
              unit: Maximum.Unit;

              /**
               * Must be greater than 0.
               */
              value: number;
            }

            namespace Maximum {
              type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
            }

            interface Minimum {
              /**
               * A unit of time.
               */
              unit: Minimum.Unit;

              /**
               * Must be greater than 0.
               */
              value: number;
            }

            namespace Minimum {
              type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
            }
          }

          interface FixedAmount {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;

            /**
             * Shipping rates defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
             */
            currency_options?: {
              [key: string]: FixedAmount.CurrencyOptions;
            };
          }

          namespace FixedAmount {
            interface CurrencyOptions {
              /**
               * A non-negative integer in cents representing how much to charge.
               */
              amount: number;

              /**
               * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
               */
              tax_behavior?: CurrencyOptions.TaxBehavior;
            }

            namespace CurrencyOptions {
              type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
            }
          }

          type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
      }

      interface ShippingDetails {
        /**
         * Shipping address
         */
        address: Stripe.AddressParam;

        /**
         * Recipient name.
         */
        name: string;

        /**
         * Recipient phone (including extension)
         */
        phone?: string;
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

      created?: Stripe.RangeQueryParam | number;

      /**
       * Only return invoices for the customer specified by this customer ID.
       */
      customer?: string;

      due_date?: Stripe.RangeQueryParam | number;

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
       * Controls whether Stripe will perform [automatic collection](https://stripe.com/docs/invoicing/automatic-charging) of the invoice. When `false`, the invoice's state will not automatically advance without an explicit action.
       */
      auto_advance?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface InvoiceLineItemListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface InvoiceListUpcomingLinesParams extends PaginationParams {
      /**
       * Settings for automatic tax lookup for this invoice preview.
       */
      automatic_tax?: InvoiceListUpcomingLinesParams.AutomaticTax;

      /**
       * The code of the coupon to apply. If `subscription` or `subscription_items` is provided, the invoice returned will preview updating or creating a subscription with that coupon. Otherwise, it will preview applying that coupon to the customer for the next upcoming invoice from among the customer's subscriptions. The invoice can be previewed without a coupon by passing this value as an empty string.
       */
      coupon?: string;

      /**
       * The currency to preview this invoice in. Defaults to that of `customer` if not specified.
       */
      currency?: string;

      /**
       * The identifier of the customer whose upcoming invoice you'd like to retrieve.
       */
      customer?: string;

      /**
       * Details about the customer you want to invoice or overrides for an existing customer.
       */
      customer_details?: InvoiceListUpcomingLinesParams.CustomerDetails;

      /**
       * The coupons to redeem into discounts for the invoice preview. If not specified, inherits the discount from the customer or subscription. This only works for coupons directly applied to the invoice. To apply a coupon to a subscription, you must use the `coupon` parameter instead. Pass an empty string to avoid inheriting any discounts. To preview the upcoming invoice for a subscription that hasn't been created, use `coupon` instead.
       */
      discounts?: Stripe.Emptyable<
        Array<InvoiceListUpcomingLinesParams.Discount>
      >;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * List of invoice items to add or update in the upcoming invoice preview.
       */
      invoice_items?: Array<InvoiceListUpcomingLinesParams.InvoiceItem>;

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
        | InvoiceListUpcomingLinesParams.SubscriptionBillingCycleAnchor
        | number;

      /**
       * Timestamp indicating when the subscription should be scheduled to cancel. Will prorate if within the current period and prorations have been enabled using `proration_behavior`.
       */
      subscription_cancel_at?: Stripe.Emptyable<number>;

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
      subscription_default_tax_rates?: Stripe.Emptyable<Array<string>>;

      /**
       * A list of up to 20 subscription items, each with an attached price.
       */
      subscription_items?: Array<
        InvoiceListUpcomingLinesParams.SubscriptionItem
      >;

      /**
       * Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. The default value is `create_prorations`.
       */
      subscription_proration_behavior?: InvoiceListUpcomingLinesParams.SubscriptionProrationBehavior;

      /**
       * If previewing an update to a subscription, and doing proration, `subscription_proration_date` forces the proration to be calculated as though the update was done at the specified time. The time given must be within the current subscription period and within the current phase of the schedule backing this subscription, if the schedule exists. If set, `subscription`, and one of `subscription_items`, or `subscription_trial_end` are required. Also, `subscription_proration_behavior` cannot be set to 'none'.
       */
      subscription_proration_date?: number;

      /**
       * For paused subscriptions, setting `subscription_resume_at` to `now` will preview the invoice that will be generated if the subscription is resumed.
       */
      subscription_resume_at?: 'now';

      /**
       * Date a subscription is intended to start (can be future or past)
       */
      subscription_start_date?: number;

      /**
       * If provided, the invoice returned will preview updating or creating a subscription with that trial end. If set, one of `subscription_items` or `subscription` is required.
       */
      subscription_trial_end?: 'now' | number;

      /**
       * Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `subscription_trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `subscription_trial_end` is not allowed. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
       */
      subscription_trial_from_plan?: boolean;
    }

    namespace InvoiceListUpcomingLinesParams {
      interface AutomaticTax {
        /**
         * Whether Stripe automatically computes tax on this invoice. Note that incompatible invoice items (invoice items with manually specified [tax rates](https://stripe.com/docs/api/tax_rates), negative amounts, or `tax_behavior=unspecified`) cannot be added to automatic tax invoices.
         */
        enabled: boolean;
      }

      interface CustomerDetails {
        /**
         * The customer's address.
         */
        address?: Stripe.Emptyable<Stripe.AddressParam>;

        /**
         * The customer's shipping information. Appears on invoices emailed to this customer.
         */
        shipping?: Stripe.Emptyable<CustomerDetails.Shipping>;

        /**
         * Tax details about the customer.
         */
        tax?: CustomerDetails.Tax;

        /**
         * The customer's tax exemption. One of `none`, `exempt`, or `reverse`.
         */
        tax_exempt?: Stripe.Emptyable<CustomerDetails.TaxExempt>;

        /**
         * The customer's tax IDs.
         */
        tax_ids?: Array<CustomerDetails.TaxId>;
      }

      namespace CustomerDetails {
        interface Shipping {
          /**
           * Customer shipping address.
           */
          address: Stripe.AddressParam;

          /**
           * Customer name.
           */
          name: string;

          /**
           * Customer phone (including extension).
           */
          phone?: string;
        }

        interface Tax {
          /**
           * A recent IP address of the customer used for tax reporting and tax location inference. Stripe recommends updating the IP address when a new PaymentMethod is attached or the address field on the customer is updated. We recommend against updating this field more frequently since it could result in unexpected tax location/reporting outcomes.
           */
          ip_address?: Stripe.Emptyable<string>;
        }

        type TaxExempt = 'exempt' | 'none' | 'reverse';

        interface TaxId {
          /**
           * Type of the tax ID, one of `ae_trn`, `au_abn`, `au_arn`, `bg_uic`, `br_cnpj`, `br_cpf`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `ch_vat`, `cl_tin`, `eg_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `hk_br`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kr_brn`, `li_uid`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `no_vat`, `nz_gst`, `ph_tin`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `th_vat`, `tr_tin`, `tw_vat`, `ua_vat`, `us_ein`, or `za_vat`
           */
          type: TaxId.Type;

          /**
           * Value of the tax ID.
           */
          value: string;
        }

        namespace TaxId {
          type Type =
            | 'ae_trn'
            | 'au_abn'
            | 'au_arn'
            | 'bg_uic'
            | 'br_cnpj'
            | 'br_cpf'
            | 'ca_bn'
            | 'ca_gst_hst'
            | 'ca_pst_bc'
            | 'ca_pst_mb'
            | 'ca_pst_sk'
            | 'ca_qst'
            | 'ch_vat'
            | 'cl_tin'
            | 'eg_tin'
            | 'es_cif'
            | 'eu_oss_vat'
            | 'eu_vat'
            | 'gb_vat'
            | 'ge_vat'
            | 'hk_br'
            | 'hu_tin'
            | 'id_npwp'
            | 'il_vat'
            | 'in_gst'
            | 'is_vat'
            | 'jp_cn'
            | 'jp_rn'
            | 'jp_trn'
            | 'ke_pin'
            | 'kr_brn'
            | 'li_uid'
            | 'mx_rfc'
            | 'my_frp'
            | 'my_itn'
            | 'my_sst'
            | 'no_vat'
            | 'nz_gst'
            | 'ph_tin'
            | 'ru_inn'
            | 'ru_kpp'
            | 'sa_vat'
            | 'sg_gst'
            | 'sg_uen'
            | 'si_tin'
            | 'th_vat'
            | 'tr_tin'
            | 'tw_vat'
            | 'ua_vat'
            | 'us_ein'
            | 'za_vat';
        }
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

      interface InvoiceItem {
        /**
         * The integer amount in cents (or local equivalent) of previewed invoice item.
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
        discounts?: Stripe.Emptyable<Array<InvoiceItem.Discount>>;

        /**
         * The ID of the invoice item to update in preview. If not specified, a new invoice item will be added to the preview of the upcoming invoice.
         */
        invoiceitem?: string;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

        /**
         * The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://stripe.com/docs/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
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

        /**
         * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
         */
        tax_behavior?: InvoiceItem.TaxBehavior;

        /**
         * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
         */
        tax_code?: Stripe.Emptyable<string>;

        /**
         * The tax rates that apply to the item. When set, any `default_tax_rates` do not apply to this item.
         */
        tax_rates?: Stripe.Emptyable<Array<string>>;

        /**
         * The integer unit amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. This unit_amount will be multiplied by the quantity to get the full amount. If you want to apply a credit to the customer's account, pass a negative unit_amount.
         */
        unit_amount?: number;

        /**
         * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
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
           * The end of the period, which must be greater than or equal to the start. This value is inclusive.
           */
          end: number;

          /**
           * The start of the period. This value is inclusive.
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
           * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
           */
          tax_behavior?: PriceData.TaxBehavior;

          /**
           * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
           */
          unit_amount?: number;

          /**
           * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
           */
          unit_amount_decimal?: string;
        }

        namespace PriceData {
          type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }

        type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
      }

      type SubscriptionBillingCycleAnchor = 'now' | 'unchanged';

      interface SubscriptionItem {
        /**
         * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
         */
        billing_thresholds?: Stripe.Emptyable<
          SubscriptionItem.BillingThresholds
        >;

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
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

        /**
         * Plan ID for this item, as a string.
         */
        plan?: string;

        /**
         * The ID of the price object. When changing a subscription item's price, `quantity` is set to 1 unless a `quantity` parameter is provided.
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
        tax_rates?: Stripe.Emptyable<Array<string>>;
      }

      namespace SubscriptionItem {
        interface BillingThresholds {
          /**
           * Number of units that meets the billing threshold to advance the subscription to a new billing period (e.g., it takes 10 $5 units to meet a $50 [monetary threshold](https://stripe.com/docs/api/subscriptions/update#update_subscription-billing_thresholds-amount_gte))
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
           * The recurring components of a price such as `interval` and `interval_count`.
           */
          recurring: PriceData.Recurring;

          /**
           * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
           */
          tax_behavior?: PriceData.TaxBehavior;

          /**
           * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
           */
          unit_amount?: number;

          /**
           * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
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

          type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
      }

      type SubscriptionProrationBehavior =
        | 'always_invoice'
        | 'create_prorations'
        | 'none';
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
       * ID of the mandate to be used for this invoice. It must correspond to the payment method used to pay the invoice, including the payment_method param or the invoice's default_payment_method or default_source, if set.
       */
      mandate?: string;

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
       * Settings for automatic tax lookup for this invoice preview.
       */
      automatic_tax?: InvoiceRetrieveUpcomingParams.AutomaticTax;

      /**
       * The code of the coupon to apply. If `subscription` or `subscription_items` is provided, the invoice returned will preview updating or creating a subscription with that coupon. Otherwise, it will preview applying that coupon to the customer for the next upcoming invoice from among the customer's subscriptions. The invoice can be previewed without a coupon by passing this value as an empty string.
       */
      coupon?: string;

      /**
       * The currency to preview this invoice in. Defaults to that of `customer` if not specified.
       */
      currency?: string;

      /**
       * The identifier of the customer whose upcoming invoice you'd like to retrieve.
       */
      customer?: string;

      /**
       * Details about the customer you want to invoice or overrides for an existing customer.
       */
      customer_details?: InvoiceRetrieveUpcomingParams.CustomerDetails;

      /**
       * The coupons to redeem into discounts for the invoice preview. If not specified, inherits the discount from the customer or subscription. This only works for coupons directly applied to the invoice. To apply a coupon to a subscription, you must use the `coupon` parameter instead. Pass an empty string to avoid inheriting any discounts. To preview the upcoming invoice for a subscription that hasn't been created, use `coupon` instead.
       */
      discounts?: Stripe.Emptyable<
        Array<InvoiceRetrieveUpcomingParams.Discount>
      >;

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
      subscription_cancel_at?: Stripe.Emptyable<number>;

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
      subscription_default_tax_rates?: Stripe.Emptyable<Array<string>>;

      /**
       * A list of up to 20 subscription items, each with an attached price.
       */
      subscription_items?: Array<
        InvoiceRetrieveUpcomingParams.SubscriptionItem
      >;

      /**
       * Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. The default value is `create_prorations`.
       */
      subscription_proration_behavior?: InvoiceRetrieveUpcomingParams.SubscriptionProrationBehavior;

      /**
       * If previewing an update to a subscription, and doing proration, `subscription_proration_date` forces the proration to be calculated as though the update was done at the specified time. The time given must be within the current subscription period and within the current phase of the schedule backing this subscription, if the schedule exists. If set, `subscription`, and one of `subscription_items`, or `subscription_trial_end` are required. Also, `subscription_proration_behavior` cannot be set to 'none'.
       */
      subscription_proration_date?: number;

      /**
       * For paused subscriptions, setting `subscription_resume_at` to `now` will preview the invoice that will be generated if the subscription is resumed.
       */
      subscription_resume_at?: 'now';

      /**
       * Date a subscription is intended to start (can be future or past)
       */
      subscription_start_date?: number;

      /**
       * If provided, the invoice returned will preview updating or creating a subscription with that trial end. If set, one of `subscription_items` or `subscription` is required.
       */
      subscription_trial_end?: 'now' | number;

      /**
       * Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `subscription_trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `subscription_trial_end` is not allowed. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
       */
      subscription_trial_from_plan?: boolean;
    }

    namespace InvoiceRetrieveUpcomingParams {
      interface AutomaticTax {
        /**
         * Whether Stripe automatically computes tax on this invoice. Note that incompatible invoice items (invoice items with manually specified [tax rates](https://stripe.com/docs/api/tax_rates), negative amounts, or `tax_behavior=unspecified`) cannot be added to automatic tax invoices.
         */
        enabled: boolean;
      }

      interface CustomerDetails {
        /**
         * The customer's address.
         */
        address?: Stripe.Emptyable<Stripe.AddressParam>;

        /**
         * The customer's shipping information. Appears on invoices emailed to this customer.
         */
        shipping?: Stripe.Emptyable<CustomerDetails.Shipping>;

        /**
         * Tax details about the customer.
         */
        tax?: CustomerDetails.Tax;

        /**
         * The customer's tax exemption. One of `none`, `exempt`, or `reverse`.
         */
        tax_exempt?: Stripe.Emptyable<CustomerDetails.TaxExempt>;

        /**
         * The customer's tax IDs.
         */
        tax_ids?: Array<CustomerDetails.TaxId>;
      }

      namespace CustomerDetails {
        interface Shipping {
          /**
           * Customer shipping address.
           */
          address: Stripe.AddressParam;

          /**
           * Customer name.
           */
          name: string;

          /**
           * Customer phone (including extension).
           */
          phone?: string;
        }

        interface Tax {
          /**
           * A recent IP address of the customer used for tax reporting and tax location inference. Stripe recommends updating the IP address when a new PaymentMethod is attached or the address field on the customer is updated. We recommend against updating this field more frequently since it could result in unexpected tax location/reporting outcomes.
           */
          ip_address?: Stripe.Emptyable<string>;
        }

        type TaxExempt = 'exempt' | 'none' | 'reverse';

        interface TaxId {
          /**
           * Type of the tax ID, one of `ae_trn`, `au_abn`, `au_arn`, `bg_uic`, `br_cnpj`, `br_cpf`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `ch_vat`, `cl_tin`, `eg_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `hk_br`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kr_brn`, `li_uid`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `no_vat`, `nz_gst`, `ph_tin`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `th_vat`, `tr_tin`, `tw_vat`, `ua_vat`, `us_ein`, or `za_vat`
           */
          type: TaxId.Type;

          /**
           * Value of the tax ID.
           */
          value: string;
        }

        namespace TaxId {
          type Type =
            | 'ae_trn'
            | 'au_abn'
            | 'au_arn'
            | 'bg_uic'
            | 'br_cnpj'
            | 'br_cpf'
            | 'ca_bn'
            | 'ca_gst_hst'
            | 'ca_pst_bc'
            | 'ca_pst_mb'
            | 'ca_pst_sk'
            | 'ca_qst'
            | 'ch_vat'
            | 'cl_tin'
            | 'eg_tin'
            | 'es_cif'
            | 'eu_oss_vat'
            | 'eu_vat'
            | 'gb_vat'
            | 'ge_vat'
            | 'hk_br'
            | 'hu_tin'
            | 'id_npwp'
            | 'il_vat'
            | 'in_gst'
            | 'is_vat'
            | 'jp_cn'
            | 'jp_rn'
            | 'jp_trn'
            | 'ke_pin'
            | 'kr_brn'
            | 'li_uid'
            | 'mx_rfc'
            | 'my_frp'
            | 'my_itn'
            | 'my_sst'
            | 'no_vat'
            | 'nz_gst'
            | 'ph_tin'
            | 'ru_inn'
            | 'ru_kpp'
            | 'sa_vat'
            | 'sg_gst'
            | 'sg_uen'
            | 'si_tin'
            | 'th_vat'
            | 'tr_tin'
            | 'tw_vat'
            | 'ua_vat'
            | 'us_ein'
            | 'za_vat';
        }
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

      interface InvoiceItem {
        /**
         * The integer amount in cents (or local equivalent) of previewed invoice item.
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
        discounts?: Stripe.Emptyable<Array<InvoiceItem.Discount>>;

        /**
         * The ID of the invoice item to update in preview. If not specified, a new invoice item will be added to the preview of the upcoming invoice.
         */
        invoiceitem?: string;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

        /**
         * The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://stripe.com/docs/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
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

        /**
         * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
         */
        tax_behavior?: InvoiceItem.TaxBehavior;

        /**
         * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
         */
        tax_code?: Stripe.Emptyable<string>;

        /**
         * The tax rates that apply to the item. When set, any `default_tax_rates` do not apply to this item.
         */
        tax_rates?: Stripe.Emptyable<Array<string>>;

        /**
         * The integer unit amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. This unit_amount will be multiplied by the quantity to get the full amount. If you want to apply a credit to the customer's account, pass a negative unit_amount.
         */
        unit_amount?: number;

        /**
         * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
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
           * The end of the period, which must be greater than or equal to the start. This value is inclusive.
           */
          end: number;

          /**
           * The start of the period. This value is inclusive.
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
           * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
           */
          tax_behavior?: PriceData.TaxBehavior;

          /**
           * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
           */
          unit_amount?: number;

          /**
           * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
           */
          unit_amount_decimal?: string;
        }

        namespace PriceData {
          type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }

        type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
      }

      type SubscriptionBillingCycleAnchor = 'now' | 'unchanged';

      interface SubscriptionItem {
        /**
         * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
         */
        billing_thresholds?: Stripe.Emptyable<
          SubscriptionItem.BillingThresholds
        >;

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
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

        /**
         * Plan ID for this item, as a string.
         */
        plan?: string;

        /**
         * The ID of the price object. When changing a subscription item's price, `quantity` is set to 1 unless a `quantity` parameter is provided.
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
        tax_rates?: Stripe.Emptyable<Array<string>>;
      }

      namespace SubscriptionItem {
        interface BillingThresholds {
          /**
           * Number of units that meets the billing threshold to advance the subscription to a new billing period (e.g., it takes 10 $5 units to meet a $50 [monetary threshold](https://stripe.com/docs/api/subscriptions/update#update_subscription-billing_thresholds-amount_gte))
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
           * The recurring components of a price such as `interval` and `interval_count`.
           */
          recurring: PriceData.Recurring;

          /**
           * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
           */
          tax_behavior?: PriceData.TaxBehavior;

          /**
           * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
           */
          unit_amount?: number;

          /**
           * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
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

          type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
      }

      type SubscriptionProrationBehavior =
        | 'always_invoice'
        | 'create_prorations'
        | 'none';
    }

    interface InvoiceSearchParams {
      /**
       * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for invoices](https://stripe.com/docs/search#query-fields-for-invoices).
       */
      query: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
       */
      limit?: number;

      /**
       * A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
       */
      page?: string;
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
       * This endpoint creates a draft invoice for a given customer. The invoice remains a draft until you [finalize the invoice, which allows you to [pay](#pay_invoice) or <a href="#send_invoice">send](https://stripe.com/docs/api#finalize_invoice) the invoice to your customers.
       */
      create(
        params?: InvoiceCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Invoice>>;
      create(
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
      listUpcomingLines(
        params?: InvoiceListUpcomingLinesParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.InvoiceLineItem>;
      listUpcomingLines(
        options?: RequestOptions
      ): ApiListPromise<Stripe.InvoiceLineItem>;

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
       * At any time, you can preview the upcoming invoice for a customer. This will show you all the charges that are pending, including subscription renewal charges, invoice item charges, etc. It will also show you any discounts that are applicable to the invoice.
       *
       * Note that when you are viewing an upcoming invoice, you are simply viewing a preview – the invoice has not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or update pending invoice items, or update the customer's discount.
       *
       * You can preview the effects of updating a subscription, including a preview of what proration will take place. To ensure that the actual proration is calculated exactly the same as the previewed proration, you should pass a proration_date parameter when doing the actual subscription update. The value passed in should be the same as the subscription_proration_date returned on the upcoming invoice resource. The recommended way to get only the prorations being previewed is to consider only proration line items where period[start] is equal to the subscription_proration_date on the upcoming invoice resource.
       */
      retrieveUpcoming(
        params?: InvoiceRetrieveUpcomingParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.UpcomingInvoice>>;
      retrieveUpcoming(
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.UpcomingInvoice>>;

      /**
       * Search for invoices you've previously created using Stripe's [Search Query Language](https://stripe.com/docs/search#search-query-language).
       * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
       * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
       * to an hour behind during outages. Search functionality is not available to merchants in India.
       */
      search(
        params: InvoiceSearchParams,
        options?: RequestOptions
      ): ApiSearchResultPromise<Stripe.Invoice>;

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
    }
  }
}
