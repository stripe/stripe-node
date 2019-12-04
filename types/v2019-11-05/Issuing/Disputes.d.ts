declare namespace Stripe {
  namespace Issuing {
    /**
     * The Dispute object.
     */
    interface Dispute {
      /**
       * Unique identifier for the object.
       */
      id?: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object?: 'issuing.dispute';

      /**
       * Disputed amount. Usually the amount of the `disputed_transaction`, but can differ (usually because of currency fluctuation or because only part of the order is disputed).
       */
      amount?: number;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created?: number;

      /**
       * The currency the `disputed_transaction` was made in.
       */
      currency?: string;

      /**
       * The transaction being disputed.
       */
      disputed_transaction?: string | Issuing.Transaction;

      evidence?: Dispute.Evidence;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode?: boolean;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: {
        [key: string]: string;
      };

      /**
       * Reason for this dispute. One of `other` or `fraudulent`.
       */
      reason?: string;

      /**
       * Current status of dispute. One of `lost`, `under_review`, `unsubmitted`, or `won`.
       */
      status?: Dispute.Status;
    }

    namespace Dispute {
      interface Evidence {
        /**
         * Evidence to support a fraudulent dispute. This will only be present if your dispute's `reason` is `fraudulent`.
         */
        fraudulent?: Evidence.Fraudulent | null;

        /**
         * Evidence to support an uncategorized dispute. This will only be present if your dispute's `reason` is `other`.
         */
        other?: Evidence.Other | null;
      }

      namespace Evidence {
        interface Fraudulent {
          /**
           * Brief freeform text explaining why you are disputing this transaction.
           */
          dispute_explanation?: string | null;

          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional file evidence supporting your dispute.
           */
          uncategorized_file?: string | File | null;
        }

        interface Other {
          /**
           * Brief freeform text explaining why you are disputing this transaction.
           */
          dispute_explanation: string;

          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional file evidence supporting your dispute.
           */
          uncategorized_file?: string | File | null;
        }
      }

      type Status = 'lost' | 'under_review' | 'unsubmitted' | 'won'
    }

    /**
     * Creates an Issuing Dispute object.
     */
    interface DisputeCreateParams {
      /**
       * Amount to dispute, defaults to full value, given in the currency the transaction was made in.
       */
      amount?: number;

      /**
       * The ID of the issuing transaction to create a dispute for.
       */
      disputed_transaction: string;

      /**
       * A hash containing all the evidence related to the dispute. This should have a single key, equal to the provided `reason`, mapping to an appropriate evidence object.
       */
      evidence?: DisputeCreateParams.Evidence;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: {
        [key: string]: string;
      };

      /**
       * The reason for the dispute. One of `other` or `fraudulent`.
       */
      reason: DisputeCreateParams.Reason;
    }

    namespace DisputeCreateParams {
      interface Evidence {
        /**
         * Evidence to support a fraudulent dispute. Only provide this if your dispute's `reason` is `fraudulent`.
         */
        fraudulent?: Evidence.Fraudulent;

        /**
         * Evidence to support an uncategorized dispute. Only provide this if your dispute's `reason` is `other`.
         */
        other?: Evidence.Other;
      }

      namespace Evidence {
        interface Fraudulent {
          /**
           * Brief freeform text explaining why you are disputing this transaction.
           */
          dispute_explanation: string;

          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional file evidence supporting your dispute.
           */
          uncategorized_file?: string;
        }

        interface Other {
          /**
           * Brief freeform text explaining why you are disputing this transaction.
           */
          dispute_explanation: string;

          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional file evidence supporting your dispute.
           */
          uncategorized_file?: string;
        }
      }

      type Reason = 'fraudulent' | 'other'
    }

    /**
     * Retrieves an Issuing Dispute object.
     */
    interface DisputeRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    /**
     * Updates the specified Issuing Dispute object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     */
    interface DisputeUpdateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: {
        [key: string]: string;
      };
    }

    /**
     * Returns a list of Issuing Dispute objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    interface DisputeListParams {
      /**
       * Only return issuing disputes that were created during the given date interval.
       */
      created?: number | DisputeListParams.Created;

      /**
       * Only return issuing disputes for the given transaction.
       */
      disputed_transaction?: string;

      /**
       * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
       */
      ending_before?: string;

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

    namespace DisputeListParams {
      interface Created {
        /**
         * Minimum value to filter by (exclusive)
         */
        gt?: number;

        /**
         * Minimum value to filter by (inclusive)
         */
        gte?: number;

        /**
         * Maximum value to filter by (exclusive)
         */
        lt?: number;

        /**
         * Maximum value to filter by (inclusive)
         */
        lte?: number;
      }
    }

    class DisputesResource {
      /**
       * Creates an Issuing Dispute object.
       */
      create(
        params: DisputeCreateParams,
        options?: RequestOptions
      ): Promise<Issuing.Dispute>;

      /**
       * Retrieves an Issuing Dispute object.
       */
      retrieve(
        id: string,
        params?: DisputeRetrieveParams,
        options?: RequestOptions
      ): Promise<Issuing.Dispute>;
      retrieve(id: string, options?: RequestOptions): Promise<Issuing.Dispute>;

      /**
       * Updates the specified Issuing Dispute object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       */
      update(
        id: string,
        params?: DisputeUpdateParams,
        options?: RequestOptions
      ): Promise<Issuing.Dispute>;

      /**
       * Returns a list of Issuing Dispute objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
       */
      list(
        params?: DisputeListParams,
        options?: RequestOptions
      ): ApiListPromise<Issuing.Dispute>;
      list(options?: RequestOptions): ApiListPromise<Issuing.Dispute>;
    }
  }
}