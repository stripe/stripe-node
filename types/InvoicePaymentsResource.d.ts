// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface InvoicePaymentRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface InvoicePaymentListParams extends PaginationParams {
      /**
       * Only return invoice payments that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The identifier of the invoice whose payments to return.
       */
      invoice?: string;

      /**
       * The payment details of the invoice payments to return.
       */
      payment?: InvoicePaymentListParams.Payment;

      /**
       * The status of the invoice payments to return.
       */
      status?: InvoicePaymentListParams.Status;
    }

    namespace InvoicePaymentListParams {
      interface Payment {
        /**
         * Only return invoice payments associated by this payment intent ID.
         */
        payment_intent?: string;

        /**
         * Only return invoice payments associated by this payment record ID.
         */
        payment_record?: string;

        /**
         * Only return invoice payments associated by this payment type.
         */
        type: Payment.Type;
      }

      namespace Payment {
        type Type = 'payment_intent' | 'payment_record';
      }

      type Status = 'canceled' | 'open' | 'paid';
    }

    class InvoicePaymentsResource {
      /**
       * Retrieves the invoice payment with the given ID.
       */
      retrieve(
        id: string,
        params?: InvoicePaymentRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.InvoicePayment>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.InvoicePayment>>;

      /**
       * When retrieving an invoice, there is an includable payments property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of payments.
       */
      list(
        params?: InvoicePaymentListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.InvoicePayment>;
      list(options?: RequestOptions): ApiListPromise<Stripe.InvoicePayment>;
    }
  }
}
