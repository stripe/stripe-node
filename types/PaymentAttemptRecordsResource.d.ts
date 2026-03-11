// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface PaymentAttemptRecordRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PaymentAttemptRecordListParams {
      /**
       * The ID of the Payment Record.
       */
      payment_record: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
       */
      limit?: number;

      /**
       * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
       */
      starting_after?: string;
    }

    interface PaymentAttemptRecordReportAuthenticatedParams {
      /**
       * When the reported payment was authenticated. Measured in seconds since the Unix epoch.
       */
      authenticated_at?: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    interface PaymentAttemptRecordReportCanceledParams {
      /**
       * When the reported payment was canceled. Measured in seconds since the Unix epoch.
       */
      canceled_at?: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    interface PaymentAttemptRecordReportFailedParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * When the reported payment failed. Measured in seconds since the Unix epoch.
       */
      failed_at?: number;

      /**
       * The failure code for this payment attempt. Must be one of `payment_method_customer_decline` or `payment_method_provider_unknown_outcome`.
       */
      failure_code?: PaymentAttemptRecordReportFailedParams.FailureCode;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    namespace PaymentAttemptRecordReportFailedParams {
      type FailureCode =
        | 'payment_method_customer_decline'
        | 'payment_method_provider_unknown_outcome';
    }

    interface PaymentAttemptRecordReportGuaranteedParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * When the reported payment was guaranteed. Measured in seconds since the Unix epoch.
       */
      guaranteed_at?: number;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    interface PaymentAttemptRecordReportInformationalParams {
      /**
       * Customer information for this payment.
       */
      customer_details?: PaymentAttemptRecordReportInformationalParams.CustomerDetails;

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
        PaymentAttemptRecordReportInformationalParams.ShippingDetails
      >;
    }

    namespace PaymentAttemptRecordReportInformationalParams {
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

    interface PaymentAttemptRecordReportRefundParams {
      /**
       * The outcome of the reported refund.
       */
      outcome: 'refunded';

      /**
       * Processor information for this refund.
       */
      processor_details: PaymentAttemptRecordReportRefundParams.ProcessorDetails;

      /**
       * A positive integer in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal) representing how much of this payment to refund. Can refund only up to the remaining, unrefunded amount of the payment.
       */
      amount?: PaymentAttemptRecordReportRefundParams.Amount;

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

      /**
       * Information about the payment attempt refund.
       */
      refunded?: PaymentAttemptRecordReportRefundParams.Refunded;
    }

    namespace PaymentAttemptRecordReportRefundParams {
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

    class PaymentAttemptRecordsResource {
      /**
       * Retrieves a Payment Attempt Record with the given ID
       */
      retrieve(
        id: string,
        params?: PaymentAttemptRecordRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentAttemptRecord>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentAttemptRecord>>;

      /**
       * List all the Payment Attempt Records attached to the specified Payment Record.
       */
      list(
        params: PaymentAttemptRecordListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.PaymentAttemptRecord>;

      /**
       * Report that the specified Payment Attempt Record was authenticated.
       */
      reportAuthenticated(
        id: string,
        params?: PaymentAttemptRecordReportAuthenticatedParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentAttemptRecord>>;
      reportAuthenticated(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentAttemptRecord>>;

      /**
       * Report that the specified Payment Attempt Record was canceled.
       */
      reportCanceled(
        id: string,
        params?: PaymentAttemptRecordReportCanceledParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentAttemptRecord>>;
      reportCanceled(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentAttemptRecord>>;

      /**
       * Report that the specified Payment Attempt Record failed.
       */
      reportFailed(
        id: string,
        params?: PaymentAttemptRecordReportFailedParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentAttemptRecord>>;
      reportFailed(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentAttemptRecord>>;

      /**
       * Report that the specified Payment Attempt Record was guaranteed.
       */
      reportGuaranteed(
        id: string,
        params?: PaymentAttemptRecordReportGuaranteedParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentAttemptRecord>>;
      reportGuaranteed(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentAttemptRecord>>;

      /**
       * Report informational updates on the specified Payment Attempt Record.
       */
      reportInformational(
        id: string,
        params?: PaymentAttemptRecordReportInformationalParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentAttemptRecord>>;
      reportInformational(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentAttemptRecord>>;

      /**
       * Report that the specified Payment Attempt Record was refunded.
       */
      reportRefund(
        id: string,
        params: PaymentAttemptRecordReportRefundParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentAttemptRecord>>;
    }
  }
}
