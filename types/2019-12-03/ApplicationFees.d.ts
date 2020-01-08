declare module 'stripe' {
  namespace Stripe {
    /**
     * The ApplicationFee object.
     */
    interface ApplicationFee {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'application_fee';

      /**
       * ID of the Stripe account this fee was taken from.
       */
      account: string | Stripe.Account;

      /**
       * Amount earned, in %s.
       */
      amount: number;

      /**
       * Amount in %s refunded (can be less than the amount attribute on the fee if a partial refund was issued)
       */
      amount_refunded: number;

      /**
       * ID of the Connect application that earned the fee.
       */
      application: string | Stripe.Application;

      /**
       * Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds).
       */
      balance_transaction: string | Stripe.BalanceTransaction | null;

      /**
       * ID of the charge that the application fee was taken from.
       */
      charge: string | Stripe.Charge;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter.
       */
      originating_transaction: string | Stripe.Charge | null;

      /**
       * Whether the fee has been fully refunded. If the fee is only partially refunded, this attribute will still be false.
       */
      refunded: boolean;

      /**
       * A list of refunds that have been applied to the fee.
       */
      refunds: ApiList<Stripe.FeeRefund>;
    }

    interface ApplicationFeeRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ApplicationFeeListParams extends PaginationParams {
      /**
       * Only return application fees for the charge specified by this charge ID.
       */
      charge?: string;

      created?: RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class ApplicationFeesResource {
      /**
       * Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.
       */
      retrieve(
        id: string,
        params?: ApplicationFeeRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.ApplicationFee>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.ApplicationFee>;

      /**
       * Returns a list of application fees you've previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.
       */
      list(
        params?: ApplicationFeeListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.ApplicationFee>;
      list(options?: RequestOptions): ApiListPromise<Stripe.ApplicationFee>;

      /**
       * Refunds an application fee that has previously been collected but not yet refunded.
       * Funds will be refunded to the Stripe account from which the fee was originally collected.
       *
       * You can optionally refund only part of an application fee.
       * You can do so multiple times, until the entire fee has been refunded.
       *
       * Once entirely refunded, an application fee can't be refunded again.
       * This method will raise an error when called on an already-refunded application fee,
       * or when trying to refund more money than is left on an application fee.
       */
      createRefund(
        id: string,
        params?: FeeRefundCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.FeeRefund>;
      createRefund(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.FeeRefund>;

      /**
       * By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.
       */
      retrieveRefund(
        feeId: string,
        id: string,
        params?: FeeRefundRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.FeeRefund>;
      retrieveRefund(
        feeId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.FeeRefund>;

      /**
       * Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       *
       * This request only accepts metadata as an argument.
       */
      updateRefund(
        feeId: string,
        id: string,
        params?: FeeRefundUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.FeeRefund>;

      /**
       * You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional refunds.
       */
      listRefunds(
        id: string,
        params?: FeeRefundListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.FeeRefund>;
      listRefunds(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.FeeRefund>;
    }
  }
}
