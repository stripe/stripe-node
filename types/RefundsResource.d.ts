// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface RefundCreateParams {
      /**
       * A positive integer representing how much to refund.
       */
      amount?: number;

      charge?: string;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: string;

      /**
       * Customer whose customer balance to refund from.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * For payment methods without native refund support (e.g., Konbini, PromptPay), use this email from the customer to receive refund instructions.
       */
      instructions_email?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Origin of the refund
       */
      origin?: 'customer_balance';

      payment_intent?: string;

      reason?: RefundCreateParams.Reason;

      refund_application_fee?: boolean;

      reverse_transfer?: boolean;
    }

    namespace RefundCreateParams {
      type Reason = 'duplicate' | 'fraudulent' | 'requested_by_customer';
    }

    interface RefundRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface RefundUpdateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    interface RefundListParams extends PaginationParams {
      /**
       * Only return refunds for the charge specified by this charge ID.
       */
      charge?: string;

      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return refunds for the PaymentIntent specified by this ID.
       */
      payment_intent?: string;
    }

    interface RefundCancelParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class RefundsResource {
      /**
       * Create a refund.
       */
      create(
        params?: RefundCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Refund>>;
      create(options?: RequestOptions): Promise<Stripe.Response<Stripe.Refund>>;

      /**
       * Retrieves the details of an existing refund.
       */
      retrieve(
        id: string,
        params?: RefundRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Refund>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Refund>>;

      /**
       * Updates the specified refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       *
       * This request only accepts metadata as an argument.
       */
      update(
        id: string,
        params?: RefundUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Refund>>;

      /**
       * Returns a list of all refunds you've previously created. The refunds are returned in sorted order, with the most recent refunds appearing first. For convenience, the 10 most recent refunds are always available by default on the charge object.
       */
      list(
        params?: RefundListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Refund>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Refund>;

      /**
       * Cancels a refund with a status of requires_action.
       *
       * Refunds in other states cannot be canceled, and only refunds for payment methods that require customer action will enter the requires_action state.
       */
      cancel(
        id: string,
        params?: RefundCancelParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Refund>>;
      cancel(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Refund>>;
    }
  }
}
