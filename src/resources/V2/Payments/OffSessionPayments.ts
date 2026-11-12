// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {
  MetadataParam,
  OtherString,
  Address,
  Metadata,
} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class OffSessionPaymentResource extends StripeResource {
  /**
   * Returns a list of OffSessionPayments matching a filter.
   */
  list(
    params?: V2.Payments.OffSessionPaymentListParams,
    options?: RequestOptions
  ): V2ListPromise<OffSessionPayment> {
    return this._makeRequest(
      'GET',
      '/v2/payments/off_session_payments',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Creates an OffSessionPayment object.
   */
  create(
    params: V2.Payments.OffSessionPaymentCreateParams,
    options?: RequestOptions
  ): Promise<Response<OffSessionPayment>> {
    return this._makeRequest(
      'POST',
      '/v2/payments/off_session_payments',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves the details of an OffSessionPayment that has previously been created.
   */
  retrieve(
    id: string,
    params?: V2.Payments.OffSessionPaymentRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<OffSessionPayment>> {
    return this._makeRequest(
      'GET',
      `/v2/payments/off_session_payments/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates the metadata and description of an OffSessionPayment in any status.
   */
  update(
    id: string,
    params?: V2.Payments.OffSessionPaymentUpdateParams,
    options?: RequestOptions
  ): Promise<Response<OffSessionPayment>> {
    return this._makeRequest(
      'POST',
      `/v2/payments/off_session_payments/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Cancel an OffSessionPayment that has previously been created.
   */
  cancel(
    id: string,
    params?: V2.Payments.OffSessionPaymentCancelParams,
    options?: RequestOptions
  ): Promise<Response<OffSessionPayment>> {
    return this._makeRequest(
      'POST',
      `/v2/payments/off_session_payments/${encodeURIComponent(id)}/cancel`,
      params,
      options
    ) as any;
  }
  /**
   * Pauses an OffSessionPayment that has previously been created.
   */
  pause(
    id: string,
    params?: V2.Payments.OffSessionPaymentPauseParams,
    options?: RequestOptions
  ): Promise<Response<OffSessionPayment>> {
    return this._makeRequest(
      'POST',
      `/v2/payments/off_session_payments/${encodeURIComponent(id)}/pause`,
      params,
      options
    ) as any;
  }
  /**
   * Resumes an OffSessionPayment that has previously been paused.
   */
  resume(
    id: string,
    params?: V2.Payments.OffSessionPaymentResumeParams,
    options?: RequestOptions
  ): Promise<Response<OffSessionPayment>> {
    return this._makeRequest(
      'POST',
      `/v2/payments/off_session_payments/${encodeURIComponent(id)}/resume`,
      params,
      options
    ) as any;
  }
}
export interface OffSessionPayment {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.payments.off_session_payment';

  /**
   * Amount intended to be collected by this payment.
   */
  amount_requested: V2Amount;

  /**
   * The total amount to collect, including tax when applicable.
   */
  amount_total: V2Amount;

  /**
   * The application associated with this OffSessionPayment.
   */
  application?: string;

  /**
   * The amount of the application fee requested to be applied to the payment.
   */
  application_fee_amount_requested?: V2Amount;

  /**
   * Details about automatic tax calculation.
   */
  automatic_tax?: OffSessionPayment.AutomaticTax;

  /**
   * Creation time of the OffSessionPayment. Represented as a RFC 3339 date & time UTC
   * value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
   */
  created: string;

  /**
   * Three-letter ISO currency code, in lowercase.
   */
  currency: string;

  /**
   * ID of the Customer to which this OffSessionPayment belongs, if one exists.
   */
  customer?: string;

  /**
   * ID of the Account representing the customer to which this OffSessionPayment belongs, if one exists.
   */
  customer_account?: string;

  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;

  /**
   * The reason why the OffSessionPayment failed.
   */
  failure_reason?: OffSessionPayment.FailureReason;

  /**
   * The persisted item groups for this OffSessionPayment, in their original order. Null for raw-amount payments.
   */
  items?: Array<OffSessionPayment.Item>;

  /**
   * The payment error encountered in the previous attempt to authorize the payment.
   */
  last_authorization_attempt_error?: string;

  /**
   * Payment attempt record for the latest attempt, if one exists.
   */
  latest_payment_attempt_record?: string;

  /**
   * Has the value true if the object exists in live mode or the value false if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can
   * attach to an object. This can be useful for storing additional information about
   * the object in a structured format. Learn more about
   * [storing information in metadata](https://docs.stripe.com/payments/payment-intents#storing-information-in-metadata).
   */
  metadata: Metadata;

  /**
   * The account (if any) for which the funds of the OffSessionPayment are intended.
   */
  on_behalf_of?: string;

  /**
   * ID of the payment method used in this OffSessionPayment.
   */
  payment_method: string;

  /**
   * Payment record associated with the OffSessionPayment.
   */
  payment_record?: string;

  /**
   * Details about the payments orchestration configuration.
   */
  payments_orchestration: OffSessionPayment.PaymentsOrchestration;

  /**
   * Retry configuration and attempts for this OffSessionPayment.
   */
  retries: OffSessionPayment.Retries;

  /**
   * Text that appears on the customer's statement as the statement descriptor for a
   * non-card charge. This value overrides the account's default statement descriptor.
   * For information about requirements, including the 22-character limit, see the
   * [Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
   */
  statement_descriptor?: string;

  /**
   * Provides information about a card charge. Concatenated to the account's
   * [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static)
   * to form the complete statement descriptor that appears on the customer's statement.
   */
  statement_descriptor_suffix?: string;

  /**
   * Status of this OffSessionPayment, one of `pending`, `pending_retry`, `processing`,
   * `failed`, `canceled`, or `succeeded`.
   */
  status: OffSessionPayment.Status;

  /**
   * Provides a way to schedule deferred payments for cards and debits, in YYYY-MM-DD format.
   */
  target_date?: string;

  /**
   * Test clock that can be used to advance the retry attempts in a sandbox.
   */
  test_clock?: string;

  /**
   * Subtotal and tax for an itemized OffSessionPayment. Null for raw-amount payments.
   */
  total_details?: OffSessionPayment.TotalDetails;

  /**
   * The data that automatically creates a Transfer after the payment finalizes. Learn more about the use case for [connected accounts](https://docs.stripe.com/payments/connected-accounts).
   */
  transfer_data?: OffSessionPayment.TransferData;
}
export namespace OffSessionPayment {
  export interface AutomaticTax {
    /**
     * Whether automatic tax calculation is enabled for this OffSessionPayment.
     */
    enabled: boolean;

    /**
     * The account liable for tax. Null when automatic tax is disabled; otherwise,
     * an object with type set to `self`, indicating the account making the API request.
     */
    liability?: AutomaticTax.Liability;
  }

  export type FailureReason =
    | 'authorization_expired'
    | 'exceeded_retry_window'
    | 'no_valid_payment_method'
    | 'rejected_by_partner'
    | 'retries_exhausted'
    | OtherString;

  export interface Item {
    /**
     * The persisted one-time prices in this item group.
     */
    one_time_price: Item.OneTimePrice;

    /**
     * The type of item. Currently, only `one_time_price` is supported.
     */
    type: Item.Type;
  }

  export interface PaymentsOrchestration {
    /**
     * True when you want to enable payments orchestration for this off-session payment. False otherwise.
     */
    enabled: boolean;
  }

  export interface Retries {
    /**
     * Number of authorization attempts so far.
     */
    attempts: number;

    /**
     * Whether retries are enabled for this OffSessionPayment.
     */
    enabled: boolean;
  }

  export type Status =
    | 'canceled'
    | 'failed'
    | 'paused'
    | 'pending'
    | 'pending_retry'
    | 'processing'
    | 'succeeded'
    | OtherString;

  export interface TotalDetails {
    /**
     * The subtotal of the items, including any inclusive tax and excluding exclusive tax.
     */
    amount_subtotal: V2Amount;

    /**
     * The calculated tax amount, including zero. Null when automatic tax was disabled.
     */
    amount_tax?: V2Amount;
  }

  export interface TransferData {
    /**
     * The amount transferred to the destination account. This transfer will occur
     * automatically after the payment succeeds. If no amount is specified, by default
     * the entire payment amount is transferred to the destination account. The amount
     * must be less than or equal to the
     * [amount_requested](https://docs.stripe.com/api/v2/off-session-payments/object?api-version=2025-05-28.preview#v2_off_session_payment_object-amount_requested),
     * and must be a positive integer representing how much to transfer in the smallest
     * currency unit (e.g., 100 cents to charge $1.00).
     */
    amount?: number;

    /**
     * The account (if any) that the payment is attributed to for tax reporting, and
     * where funds from the payment are transferred to after payment success.
     */
    destination: string;
  }

  export namespace AutomaticTax {
    export interface Liability {
      /**
       * The type of account liable for tax.
       */
      type: Liability.Type;
    }

    export namespace Liability {
      export type Type = 'self' | OtherString;
    }
  }

  export namespace Item {
    export interface OneTimePrice {
      /**
       * A description of this item group. Currently always null.
       */
      description?: string;

      /**
       * The resolved price IDs and quantities in their original order.
       */
      items: Array<OneTimePrice.Item>;

      /**
       * Additional information about this item group. Currently always null.
       */
      metadata?: Metadata;
    }

    export type Type = 'one_time_price' | OtherString;

    export namespace OneTimePrice {
      export interface Item {
        /**
         * The ID of the resolved one-time Price.
         */
        price: string;

        /**
         * Quantity of this price in the item group.
         */
        quantity: number;
      }
    }
  }
}
export namespace V2 {
  export namespace Payments {
    export interface OffSessionPaymentCreateParams {
      /**
       * Retry configuration for this OffSessionPayment.
       */
      retries: OffSessionPaymentCreateParams.Retries;

      /**
       * The amount of the application fee (if any) that will be requested to be applied to the
       * payment and transferred to the application owner's Stripe account.
       */
      application_fee_amount?: V2Amount;

      /**
       * Settings for automatic tax calculation.
       */
      automatic_tax?: OffSessionPaymentCreateParams.AutomaticTax;

      /**
       * Three-letter ISO currency code, in lowercase.
       */
      currency?: string;

      /**
       * ID of the Customer to which this OffSessionPayment belongs.
       * Provide exactly one of customer or customer_account.
       */
      customer?: string;

      /**
       * ID of the Account representing the customer to which this OffSessionPayment belongs.
       * Provide exactly one of customer or customer_account.
       * Payment methods attached to other Accounts cannot be used with this OffSessionPayment.
       */
      customer_account?: string;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description?: string;

      /**
       * A list of items the customer will purchase.
       */
      items?: Array<OffSessionPaymentCreateParams.Item>;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can
       * attach to an object. This can be useful for storing additional information about
       * the object in a structured format. Learn more about
       * [storing information in metadata](https://docs.stripe.com/payments/payment-intents#storing-information-in-metadata).
       */
      metadata?: MetadataParam;

      /**
       * The account (if any) for which the funds of the OffSessionPayment are intended.
       */
      on_behalf_of?: string;

      /**
       * ID of the payment method used in this OffSessionPayment.
       */
      payment_method?: string;

      /**
       * If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear in the payment_method property on the OffSessionPayment.
       */
      payment_method_data?: OffSessionPaymentCreateParams.PaymentMethodData;

      /**
       * Payment method options for the off-session payment.
       */
      payment_method_options?: OffSessionPaymentCreateParams.PaymentMethodOptions;

      /**
       * The amount to collect without itemization.
       */
      raw_amount?: OffSessionPaymentCreateParams.RawAmount;

      /**
       * Text that appears on the customer's statement as the statement descriptor for a
       * non-card charge. This value overrides the account's default statement descriptor.
       * For information about requirements, including the 22-character limit, see the
       * [Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
       */
      statement_descriptor?: string;

      /**
       * Provides information about a card charge. Concatenated to the account's
       * [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static)
       * to form the complete statement descriptor that appears on the customer's statement.
       */
      statement_descriptor_suffix?: string;

      /**
       * Provides a way to schedule deferred payments for cards and debits, in YYYY-MM-DD format.
       */
      target_date?: string;

      /**
       * Test clock that can be used to advance the retry attempts in a sandbox.
       */
      test_clock?: string;

      /**
       * The data that automatically creates a Transfer after the payment finalizes. Learn more about the use case for [connected accounts](https://docs.stripe.com/payments/connected-accounts).
       */
      transfer_data?: OffSessionPaymentCreateParams.TransferData;
    }

    export namespace OffSessionPaymentCreateParams {
      export interface Retries {
        /**
         * Whether Stripe should retry failed payment attempts.
         */
        enabled: boolean;
      }

      export interface AutomaticTax {
        /**
         * Whether to automatically calculate taxes for this OffSessionPayment.
         */
        enabled: boolean;
      }

      export interface Item {
        /**
         * Configuration for the one-time price item.
         */
        one_time_price: Item.OneTimePrice;

        /**
         * The type of item. Currently, only `one_time_price` is supported.
         */
        type: Item.Type;
      }

      export interface PaymentMethodData {
        /**
         * Billing information associated with the payment method.
         */
        billing_details?: PaymentMethodData.BillingDetails;

        /**
         * Contains card details that can be used to create a card PaymentMethod for PCI compliant users.
         */
        card?: PaymentMethodData.Card;

        /**
         * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
         */
        type: PaymentMethodData.Type;
      }

      export interface PaymentMethodOptions {
        /**
         * Payment method options for the card payment type.
         */
        card?: PaymentMethodOptions.Card;
      }

      export interface RawAmount {
        /**
         * The amount to collect and its currency.
         */
        amount: V2Amount;
      }

      export interface TransferData {
        /**
         * The amount transferred to the destination account. This transfer will occur
         * automatically after the payment succeeds. If no amount is specified, by default
         * the entire payment amount is transferred to the destination account. The amount
         * must be less than or equal to the
         * [amount_requested](https://docs.stripe.com/api/v2/off-session-payments/object?api-version=2025-05-28.preview#v2_off_session_payment_object-amount_requested),
         * and must be a positive integer representing how much to transfer in the smallest
         * currency unit (e.g., 100 cents to charge $1.00).
         */
        amount?: number;

        /**
         * The account (if any) that the payment is attributed to for tax reporting, and
         * where funds from the payment are transferred to after payment success.
         */
        destination: string;
      }

      export namespace Item {
        export interface OneTimePrice {
          /**
           * The list of one-time prices and quantities the customer will purchase. Contains 1 to 10 items.
           */
          items: Array<OneTimePrice.Item>;
        }

        export type Type = 'one_time_price' | OtherString;

        export namespace OneTimePrice {
          export interface Item {
            /**
             * The ID of an existing one-time [Price](https://docs.stripe.com/api/prices).
             * Provide exactly one of `price` or `price_data`.
             */
            price?: string;

            /**
             * Data used to generate a new one-time [Price](https://docs.stripe.com/api/prices) object inline.
             * Provide exactly one of `price` or `price_data`.
             */
            price_data?: Item.PriceData;

            /**
             * Quantity for this item.
             */
            quantity: number;
          }

          export namespace Item {
            export interface PriceData {
              /**
               * The ID of the [Product](https://docs.stripe.com/api/products) that this
               * [Price](https://docs.stripe.com/api/prices) will belong to.
               * Provide exactly one of `product` or `product_data`.
               */
              product?: string;

              /**
               * Data used to generate a new [Product](https://docs.stripe.com/api/products) object inline.
               * Provide exactly one of `product` or `product_data`.
               */
              product_data?: PriceData.ProductData;

              /**
               * Specifies whether the price is considered inclusive of taxes or exclusive of taxes.
               * One of `inclusive`, `exclusive`, or `unspecified`.
               */
              tax_behavior?: PriceData.TaxBehavior;

              /**
               * The amount to charge per unit and its currency. Specify `value` as a non-negative integer in
               * the currency's minor unit (for example, `100` for USD 1.00).
               */
              unit_amount: V2Amount;
            }

            export namespace PriceData {
              export interface ProductData {
                /**
                 * The product's description, meant to be displayable to the customer.
                 * Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
                 */
                description?: string;

                /**
                 * A list of URLs of images for this product, meant to be displayable to the customer.
                 */
                images?: Array<string>;

                /**
                 * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to the product.
                 * This can be useful for storing additional information about the product in a structured format.
                 */
                metadata?: MetadataParam;

                /**
                 * The product's name, meant to be displayable to the customer.
                 */
                name: string;

                /**
                 * Tax details for this product, including the [tax code](https://docs.stripe.com/tax/tax-codes)
                 * and an optional performance location.
                 */
                tax_details?: ProductData.TaxDetails;

                /**
                 * A label that represents units of this product, such as seats or licenses.
                 */
                unit_label?: string;
              }

              export type TaxBehavior =
                | 'exclusive'
                | 'inclusive'
                | 'unspecified'
                | OtherString;

              export namespace ProductData {
                export interface TaxDetails {
                  /**
                   * A tax location ID. Depending on the [tax code](https://docs.stripe.com/tax/tax-for-tickets/reference/tax-location-performance),
                   * this is required, optional, or not supported.
                   */
                  performance_location?: string;

                  /**
                   * A [tax code](https://docs.stripe.com/tax/tax-categories) ID.
                   */
                  tax_code?: string;
                }
              }
            }
          }
        }
      }

      export namespace PaymentMethodData {
        export interface BillingDetails {
          /**
           * Billing address.
           */
          address?: BillingDetails.Address;

          /**
           * Email address.
           */
          email?: string;

          /**
           * Full name.
           */
          name?: string;

          /**
           * Billing phone number (including extension).
           */
          phone?: string;
        }

        export interface Card {
          /**
           * The card expiration month.
           */
          exp_month: string;

          /**
           * The card expiration year.
           */
          exp_year: string;

          /**
           * The last four digits of the underlying card number.
           */
          last4?: string;

          /**
           * The network token credential to use with the card.
           */
          network_token?: Card.NetworkToken;

          /**
           * The card number.
           */
          number?: string;
        }

        export type Type = 'card' | OtherString;

        export namespace BillingDetails {
          export interface Address {
            /**
             * City, district, suburb, town, or village.
             */
            city?: string;

            /**
             * Two-letter country code (ISO 3166-1 alpha-2).
             */
            country?: string;

            /**
             * Address line 1, such as the street, PO Box, or company name.
             */
            line1?: string;

            /**
             * Address line 2, such as the apartment, suite, unit, or building.
             */
            line2?: string;

            /**
             * ZIP or postal code.
             */
            postal_code?: string;

            /**
             * State, county, province, or region (ISO 3166-2).
             */
            state?: string;
          }
        }

        export namespace Card {
          export interface NetworkToken {
            /**
             * Two-digit number representing the network token's expiration month.
             */
            exp_month: string;

            /**
             * Four-digit number representing the network token's expiration year.
             */
            exp_year: string;

            /**
             * The full network token number.
             */
            number: string;

            /**
             * The tokenization method used to generate the network token.
             */
            tokenization_method: NetworkToken.TokenizationMethod;
          }

          export namespace NetworkToken {
            export type TokenizationMethod =
              | 'apple_pay'
              | 'google_pay_dpan'
              | 'google_pay_ecommerce_token';
          }
        }
      }

      export namespace PaymentMethodOptions {
        export interface Card {
          /**
           * Indicates whether the saved card is used for a recurring or unscheduled payment.
           */
          stored_credential_usage: Card.StoredCredentialUsage;
        }

        export namespace Card {
          export type StoredCredentialUsage =
            | 'recurring'
            | 'unscheduled'
            | OtherString;
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Payments {
    export interface OffSessionPaymentRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Payments {
    export interface OffSessionPaymentUpdateParams {
      /**
       * An arbitrary string attached to the payment. Set to null to clear the description.
       */
      description?: string;

      /**
       * Set of key-value pairs attached to the payment. Existing keys are preserved unless
       * explicitly changed. Set an individual key to null to remove it.
       */
      metadata?: MetadataParam;
    }
  }
}
export namespace V2 {
  export namespace Payments {
    export interface OffSessionPaymentListParams {
      /**
       * The page size limit. If not provided, the default is 20.
       */
      limit?: number;
    }
  }
}
export namespace V2 {
  export namespace Payments {
    export interface OffSessionPaymentCancelParams {}
  }
}
export namespace V2 {
  export namespace Payments {
    export interface OffSessionPaymentPauseParams {}
  }
}
export namespace V2 {
  export namespace Payments {
    export interface OffSessionPaymentResumeParams {}
  }
}
