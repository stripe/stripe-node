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
    }
  }
}
