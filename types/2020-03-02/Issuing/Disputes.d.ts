declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      /**
       * The Dispute object.
       */
      interface Dispute {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'issuing.dispute';

        /**
         * List of balance transactions associated with this dispute.
         */
        balance_transactions: Array<Stripe.BalanceTransaction>;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;
      }

      interface DisputeCreateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;
      }

      interface DisputeRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface DisputeUpdateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;
      }

      interface DisputeListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class DisputesResource {
        /**
         * Creates an Issuing Dispute object.
         */
        create(
          params?: DisputeCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Issuing.Dispute>;
        create(options?: RequestOptions): Promise<Stripe.Issuing.Dispute>;

        /**
         * Retrieves an Issuing Dispute object.
         */
        retrieve(
          id: string,
          params?: DisputeRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Issuing.Dispute>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Issuing.Dispute>;

        /**
         * Updates the specified Issuing Dispute object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
         */
        update(
          id: string,
          params?: DisputeUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Issuing.Dispute>;

        /**
         * Returns a list of Issuing Dispute objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
         */
        list(
          params?: DisputeListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.Dispute>;
        list(options?: RequestOptions): ApiListPromise<Stripe.Issuing.Dispute>;
      }
    }
  }
}
