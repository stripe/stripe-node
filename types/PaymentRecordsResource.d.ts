// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface PaymentRecordRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PaymentRecordReportPaymentParams {
      /**
       * The amount you initially requested for this payment.
       */
      amount_requested: PaymentRecordReportPaymentParams.AmountRequested;

      /**
       * When the reported payment was initiated. Measured in seconds since the Unix epoch.
       */
      initiated_at: number;

      /**
       * Information about the Payment Method debited for this payment.
       */
      payment_method_details: PaymentRecordReportPaymentParams.PaymentMethodDetails;

      /**
       * Customer information for this payment.
       */
      customer_details?: PaymentRecordReportPaymentParams.CustomerDetails;

      /**
       * Indicates whether the customer was present in your checkout flow during this payment.
       */
      customer_presence?: PaymentRecordReportPaymentParams.CustomerPresence;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Information about the payment attempt failure.
       */
      failed?: PaymentRecordReportPaymentParams.Failed;

      /**
       * Information about the payment attempt guarantee.
       */
      guaranteed?: PaymentRecordReportPaymentParams.Guaranteed;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * The outcome of the reported payment.
       */
      outcome?: PaymentRecordReportPaymentParams.Outcome;

      /**
       * Processor information for this payment.
       */
      processor_details?: PaymentRecordReportPaymentParams.ProcessorDetails;

      /**
       * Shipping information for this payment.
       */
      shipping_details?: PaymentRecordReportPaymentParams.ShippingDetails;
    }

    namespace PaymentRecordReportPaymentParams {
      interface AmountRequested {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A positive integer representing the amount in the currency's [minor unit](https://docs.stripe.com/currencies#zero-decimal). For example, `100` can represent 1 USD or 100 JPY.
         */
        value: number;
      }

      interface CustomerDetails {
        /**
         * The customer who made the payment.
         */
        customer?: string;

        /**
         * The customer's phone number.
         */
        email?: string;

        /**
         * The customer's name.
         */
        name?: string;

        /**
         * The customer's phone number.
         */
        phone?: string;
      }

      type CustomerPresence = 'off_session' | 'on_session';

      interface Failed {
        /**
         * When the reported payment failed. Measured in seconds since the Unix epoch.
         */
        failed_at: number;
      }

      interface Guaranteed {
        /**
         * When the reported payment was guaranteed. Measured in seconds since the Unix epoch.
         */
        guaranteed_at: number;
      }

      type Outcome = 'failed' | 'guaranteed';

      interface PaymentMethodDetails {
        /**
         * The billing details associated with the method of payment.
         */
        billing_details?: PaymentMethodDetails.BillingDetails;

        /**
         * Information about the custom (user-defined) payment method used to make this payment.
         */
        custom?: PaymentMethodDetails.Custom;

        /**
         * ID of the Stripe Payment Method used to make this payment.
         */
        payment_method?: string;

        /**
         * The type of the payment method details. An additional hash is included on the payment_method_details with a name matching this value. It contains additional information specific to the type.
         */
        type?: 'custom';
      }

      namespace PaymentMethodDetails {
        interface BillingDetails {
          /**
           * The billing address associated with the method of payment.
           */
          address?: Stripe.AddressParam;

          /**
           * The billing email associated with the method of payment.
           */
          email?: string;

          /**
           * The billing name associated with the method of payment.
           */
          name?: string;

          /**
           * The billing phone number associated with the method of payment.
           */
          phone?: string;
        }

        interface Custom {
          /**
           * Display name for the custom (user-defined) payment method type used to make this payment.
           */
          display_name?: string;

          /**
           * The custom payment method type associated with this payment.
           */
          type?: string;
        }
      }

      interface ProcessorDetails {
        /**
         * Information about the custom processor used to make this payment.
         */
        custom?: ProcessorDetails.Custom;

        /**
         * The type of the processor details. An additional hash is included on processor_details with a name matching this value. It contains additional information specific to the processor.
         */
        type: 'custom';
      }

      namespace ProcessorDetails {
        interface Custom {
          /**
           * An opaque string for manual reconciliation of this payment, for example a check number or a payment processor ID.
           */
          payment_reference: string;
        }
      }

      interface ShippingDetails {
        /**
         * The physical shipping address.
         */
        address?: Stripe.AddressParam;

        /**
         * The shipping recipient's name.
         */
        name?: string;

        /**
         * The shipping recipient's phone number.
         */
        phone?: string;
      }
    }

    interface PaymentRecordReportPaymentAttemptParams {
      /**
       * When the reported payment was initiated. Measured in seconds since the Unix epoch.
       */
      initiated_at: number;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Information about the payment attempt failure.
       */
      failed?: PaymentRecordReportPaymentAttemptParams.Failed;

      /**
       * Information about the payment attempt guarantee.
       */
      guaranteed?: PaymentRecordReportPaymentAttemptParams.Guaranteed;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * The outcome of the reported payment.
       */
      outcome?: PaymentRecordReportPaymentAttemptParams.Outcome;

      /**
       * Information about the Payment Method debited for this payment.
       */
      payment_method_details?: PaymentRecordReportPaymentAttemptParams.PaymentMethodDetails;

      /**
       * Shipping information for this payment.
       */
      shipping_details?: PaymentRecordReportPaymentAttemptParams.ShippingDetails;
    }

    namespace PaymentRecordReportPaymentAttemptParams {
      interface Failed {
        /**
         * When the reported payment failed. Measured in seconds since the Unix epoch.
         */
        failed_at: number;
      }

      interface Guaranteed {
        /**
         * When the reported payment was guaranteed. Measured in seconds since the Unix epoch.
         */
        guaranteed_at: number;
      }

      type Outcome = 'failed' | 'guaranteed';

      interface PaymentMethodDetails {
        /**
         * The billing details associated with the method of payment.
         */
        billing_details?: PaymentMethodDetails.BillingDetails;

        /**
         * Information about the custom (user-defined) payment method used to make this payment.
         */
        custom?: PaymentMethodDetails.Custom;

        /**
         * ID of the Stripe Payment Method used to make this payment.
         */
        payment_method?: string;

        /**
         * The type of the payment method details. An additional hash is included on the payment_method_details with a name matching this value. It contains additional information specific to the type.
         */
        type?: 'custom';
      }

      namespace PaymentMethodDetails {
        interface BillingDetails {
          /**
           * The billing address associated with the method of payment.
           */
          address?: Stripe.AddressParam;

          /**
           * The billing email associated with the method of payment.
           */
          email?: string;

          /**
           * The billing name associated with the method of payment.
           */
          name?: string;

          /**
           * The billing phone number associated with the method of payment.
           */
          phone?: string;
        }

        interface Custom {
          /**
           * Display name for the custom (user-defined) payment method type used to make this payment.
           */
          display_name?: string;

          /**
           * The custom payment method type associated with this payment.
           */
          type?: string;
        }
      }

      interface ShippingDetails {
        /**
         * The physical shipping address.
         */
        address?: Stripe.AddressParam;

        /**
         * The shipping recipient's name.
         */
        name?: string;

        /**
         * The shipping recipient's phone number.
         */
        phone?: string;
      }
    }

    interface PaymentRecordReportPaymentAttemptCanceledParams {
      /**
       * When the reported payment was canceled. Measured in seconds since the Unix epoch.
       */
      canceled_at: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    interface PaymentRecordReportPaymentAttemptFailedParams {
      /**
       * When the reported payment failed. Measured in seconds since the Unix epoch.
       */
      failed_at: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    interface PaymentRecordReportPaymentAttemptGuaranteedParams {
      /**
       * When the reported payment was guaranteed. Measured in seconds since the Unix epoch.
       */
      guaranteed_at: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    interface PaymentRecordReportPaymentAttemptInformationalParams {
      /**
       * Customer information for this payment.
       */
      customer_details?: PaymentRecordReportPaymentAttemptInformationalParams.CustomerDetails;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description?: Stripe.Emptyable<string>;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Shipping information for this payment.
       */
      shipping_details?: Stripe.Emptyable<
        PaymentRecordReportPaymentAttemptInformationalParams.ShippingDetails
      >;
    }

    namespace PaymentRecordReportPaymentAttemptInformationalParams {
      interface CustomerDetails {
        /**
         * The customer who made the payment.
         */
        customer?: string;

        /**
         * The customer's phone number.
         */
        email?: string;

        /**
         * The customer's name.
         */
        name?: string;

        /**
         * The customer's phone number.
         */
        phone?: string;
      }

      interface ShippingDetails {
        /**
         * The physical shipping address.
         */
        address?: Stripe.AddressParam;

        /**
         * The shipping recipient's name.
         */
        name?: string;

        /**
         * The shipping recipient's phone number.
         */
        phone?: string;
      }
    }

    interface PaymentRecordReportRefundParams {
      /**
       * The outcome of the reported refund.
       */
      outcome: 'refunded';

      /**
       * Processor information for this refund.
       */
      processor_details: PaymentRecordReportRefundParams.ProcessorDetails;

      /**
       * Information about the payment attempt refund.
       */
      refunded: PaymentRecordReportRefundParams.Refunded;

      /**
       * A positive integer in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal) representing how much of this payment to refund. Can refund only up to the remaining, unrefunded amount of the payment.
       */
      amount?: PaymentRecordReportRefundParams.Amount;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * When the reported refund was initiated. Measured in seconds since the Unix epoch.
       */
      initiated_at?: number;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    namespace PaymentRecordReportRefundParams {
      interface Amount {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A positive integer representing the amount in the currency's [minor unit](https://docs.stripe.com/currencies#zero-decimal). For example, `100` can represent 1 USD or 100 JPY.
         */
        value: number;
      }

      interface ProcessorDetails {
        /**
         * Information about the custom processor used to make this refund.
         */
        custom?: ProcessorDetails.Custom;

        /**
         * The type of the processor details. An additional hash is included on processor_details with a name matching this value. It contains additional information specific to the processor.
         */
        type: 'custom';
      }

      namespace ProcessorDetails {
        interface Custom {
          /**
           * A reference to the external refund. This field must be unique across all refunds.
           */
          refund_reference: string;
        }
      }

      interface Refunded {
        /**
         * When the reported refund completed. Measured in seconds since the Unix epoch.
         */
        refunded_at: number;
      }
    }

    class PaymentRecordsResource {
      /**
       * Retrieves a Payment Record with the given ID
       */
      retrieve(
        id: string,
        params?: PaymentRecordRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentRecord>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentRecord>>;

      /**
       * Report a new Payment Record. You may report a Payment Record as it is
       *  initialized and later report updates through the other report_* methods, or report Payment
       *  Records in a terminal state directly, through this method.
       */
      reportPayment(
        params: PaymentRecordReportPaymentParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentRecord>>;

      /**
       * Report a new payment attempt on the specified Payment Record. A new payment
       *  attempt can only be specified if all other payment attempts are canceled or failed.
       */
      reportPaymentAttempt(
        id: string,
        params: PaymentRecordReportPaymentAttemptParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentRecord>>;

      /**
       * Report that the most recent payment attempt on the specified Payment Record
       *  was canceled.
       */
      reportPaymentAttemptCanceled(
        id: string,
        params: PaymentRecordReportPaymentAttemptCanceledParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentRecord>>;

      /**
       * Report that the most recent payment attempt on the specified Payment Record
       *  failed or errored.
       */
      reportPaymentAttemptFailed(
        id: string,
        params: PaymentRecordReportPaymentAttemptFailedParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentRecord>>;

      /**
       * Report that the most recent payment attempt on the specified Payment Record
       *  was guaranteed.
       */
      reportPaymentAttemptGuaranteed(
        id: string,
        params: PaymentRecordReportPaymentAttemptGuaranteedParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentRecord>>;

      /**
       * Report informational updates on the specified Payment Record.
       */
      reportPaymentAttemptInformational(
        id: string,
        params?: PaymentRecordReportPaymentAttemptInformationalParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentRecord>>;
      reportPaymentAttemptInformational(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentRecord>>;

      /**
       * Report that the most recent payment attempt on the specified Payment Record
       *  was refunded.
       */
      reportRefund(
        id: string,
        params: PaymentRecordReportRefundParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentRecord>>;
    }
  }
}
