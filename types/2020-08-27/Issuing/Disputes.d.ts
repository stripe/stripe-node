// File generated from our OpenAPI spec
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
         * Disputed amount. Usually the amount of the `disputed_transaction`, but can differ (usually because of currency fluctuation).
         */
        amount?: number;

        /**
         * List of balance transactions associated with the dispute.
         */
        balance_transactions: Array<Stripe.BalanceTransaction> | null;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created?: number;

        /**
         * The currency the `disputed_transaction` was made in.
         */
        currency?: string;

        evidence?: Dispute.Evidence;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: Metadata;

        /**
         * Current status of the dispute.
         */
        status?: Dispute.Status;

        /**
         * The transaction being disputed.
         */
        transaction: string | Stripe.Issuing.Transaction;
      }

      namespace Dispute {
        interface Evidence {
          canceled?: Evidence.Canceled;

          duplicate?: Evidence.Duplicate;

          fraudulent?: Evidence.Fraudulent;

          merchandise_not_as_described?: Evidence.MerchandiseNotAsDescribed;

          not_received?: Evidence.NotReceived;

          other?: Evidence.Other;

          /**
           * The reason for filing the dispute. Its value will match the field containing the evidence.
           */
          reason: Evidence.Reason;

          service_not_as_described?: Evidence.ServiceNotAsDescribed;
        }

        namespace Evidence {
          interface Canceled {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation: string | Stripe.File | null;

            /**
             * Date when order was canceled.
             */
            canceled_at: number | null;

            /**
             * Whether the cardholder was provided with a cancellation policy.
             */
            cancellation_policy_provided: boolean | null;

            /**
             * Reason for canceling the order.
             */
            cancellation_reason: string | null;

            /**
             * Date when the cardholder expected to receive the product.
             */
            expected_at: number | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation: string | null;

            /**
             * Description of the merchandise or service that was purchased.
             */
            product_description: string | null;

            /**
             * Whether the product was a merchandise or service.
             */
            product_type: Canceled.ProductType | null;

            /**
             * Result of cardholder's attempt to return the product.
             */
            return_status: Canceled.ReturnStatus | null;

            /**
             * Date when the product was returned or attempted to be returned.
             */
            returned_at: number | null;
          }

          namespace Canceled {
            type ProductType = 'merchandise' | 'service';

            type ReturnStatus = 'merchant_rejected' | 'successful';
          }

          interface Duplicate {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation: string | Stripe.File | null;

            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the card statement showing that the product had already been paid for.
             */
            card_statement: string | Stripe.File | null;

            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the receipt showing that the product had been paid for in cash.
             */
            cash_receipt: string | Stripe.File | null;

            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
             */
            check_image: string | Stripe.File | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation: string | null;

            /**
             * Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one.
             */
            original_transaction: string | null;
          }

          interface Fraudulent {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation: string | Stripe.File | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation: string | null;
          }

          interface MerchandiseNotAsDescribed {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation: string | Stripe.File | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation: string | null;

            /**
             * Date when the product was received.
             */
            received_at: number | null;

            /**
             * Description of the cardholder's attempt to return the product.
             */
            return_description: string | null;

            /**
             * Result of cardholder's attempt to return the product.
             */
            return_status: MerchandiseNotAsDescribed.ReturnStatus | null;

            /**
             * Date when the product was returned or attempted to be returned.
             */
            returned_at: number | null;
          }

          namespace MerchandiseNotAsDescribed {
            type ReturnStatus = 'merchant_rejected' | 'successful';
          }

          interface NotReceived {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation: string | Stripe.File | null;

            /**
             * Date when the cardholder expected to receive the product.
             */
            expected_at: number | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation: string | null;

            /**
             * Description of the merchandise or service that was purchased.
             */
            product_description: string | null;

            /**
             * Whether the product was a merchandise or service.
             */
            product_type: NotReceived.ProductType | null;
          }

          namespace NotReceived {
            type ProductType = 'merchandise' | 'service';
          }

          interface Other {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation: string | Stripe.File | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation: string | null;

            /**
             * Description of the merchandise or service that was purchased.
             */
            product_description: string | null;

            /**
             * Whether the product was a merchandise or service.
             */
            product_type: Other.ProductType | null;
          }

          namespace Other {
            type ProductType = 'merchandise' | 'service';
          }

          type Reason =
            | 'canceled'
            | 'duplicate'
            | 'fraudulent'
            | 'merchandise_not_as_described'
            | 'not_received'
            | 'other'
            | 'service_not_as_described';

          interface ServiceNotAsDescribed {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation: string | Stripe.File | null;

            /**
             * Date when order was canceled.
             */
            canceled_at: number | null;

            /**
             * Reason for canceling the order.
             */
            cancellation_reason: string | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation: string | null;

            /**
             * Date when the product was received.
             */
            received_at: number | null;
          }
        }

        type Status = 'expired' | 'lost' | 'submitted' | 'unsubmitted' | 'won';
      }

      interface DisputeCreateParams {
        /**
         * The ID of the issuing transaction to create a dispute for.
         */
        transaction: string;

        /**
         * Evidence provided for the dispute.
         */
        evidence?: DisputeCreateParams.Evidence;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;
      }

      namespace DisputeCreateParams {
        interface Evidence {
          /**
           * Evidence provided when `reason` is 'canceled'.
           */
          canceled?: Evidence.Canceled | null;

          /**
           * Evidence provided when `reason` is 'duplicate'.
           */
          duplicate?: Evidence.Duplicate | null;

          /**
           * Evidence provided when `reason` is 'fraudulent'.
           */
          fraudulent?: Evidence.Fraudulent | null;

          /**
           * Evidence provided when `reason` is 'merchandise_not_as_described'.
           */
          merchandise_not_as_described?: Evidence.MerchandiseNotAsDescribed | null;

          /**
           * Evidence provided when `reason` is 'not_received'.
           */
          not_received?: Evidence.NotReceived | null;

          /**
           * Evidence provided when `reason` is 'other'.
           */
          other?: Evidence.Other | null;

          /**
           * The reason for filing the dispute. The evidence should be submitted in the field of the same name.
           */
          reason?: Evidence.Reason;

          /**
           * Evidence provided when `reason` is 'service_not_as_described'.
           */
          service_not_as_described?: Evidence.ServiceNotAsDescribed | null;
        }

        namespace Evidence {
          interface Canceled {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation?: string | null;

            /**
             * Date when order was canceled.
             */
            canceled_at?: number | null;

            /**
             * Whether the cardholder was provided with a cancellation policy.
             */
            cancellation_policy_provided?: boolean | null;

            /**
             * Reason for canceling the order.
             */
            cancellation_reason?: string;

            /**
             * Date when the cardholder expected to receive the product.
             */
            expected_at?: number | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation?: string;

            /**
             * Description of the merchandise or service that was purchased.
             */
            product_description?: string;

            /**
             * Whether the product was a merchandise or service.
             */
            product_type?: Canceled.ProductType | null;

            /**
             * Result of cardholder's attempt to return the product.
             */
            return_status?: Canceled.ReturnStatus | null;

            /**
             * Date when the product was returned or attempted to be returned.
             */
            returned_at?: number | null;
          }

          namespace Canceled {
            type ProductType = 'merchandise' | 'service';

            type ReturnStatus = 'merchant_rejected' | 'successful';
          }

          interface Duplicate {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation?: string | null;

            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the card statement showing that the product had already been paid for.
             */
            card_statement?: string | null;

            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the receipt showing that the product had been paid for in cash.
             */
            cash_receipt?: string | null;

            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
             */
            check_image?: string | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation?: string;

            /**
             * Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one.
             */
            original_transaction?: string;
          }

          interface Fraudulent {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation?: string | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation?: string;
          }

          interface MerchandiseNotAsDescribed {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation?: string | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation?: string;

            /**
             * Date when the product was received.
             */
            received_at?: number | null;

            /**
             * Description of the cardholder's attempt to return the product.
             */
            return_description?: string;

            /**
             * Result of cardholder's attempt to return the product.
             */
            return_status?: MerchandiseNotAsDescribed.ReturnStatus | null;

            /**
             * Date when the product was returned or attempted to be returned.
             */
            returned_at?: number | null;
          }

          namespace MerchandiseNotAsDescribed {
            type ReturnStatus = 'merchant_rejected' | 'successful';
          }

          interface NotReceived {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation?: string | null;

            /**
             * Date when the cardholder expected to receive the product.
             */
            expected_at?: number | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation?: string;

            /**
             * Description of the merchandise or service that was purchased.
             */
            product_description?: string;

            /**
             * Whether the product was a merchandise or service.
             */
            product_type?: NotReceived.ProductType | null;
          }

          namespace NotReceived {
            type ProductType = 'merchandise' | 'service';
          }

          interface Other {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation?: string | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation?: string;

            /**
             * Description of the merchandise or service that was purchased.
             */
            product_description?: string;

            /**
             * Whether the product was a merchandise or service.
             */
            product_type?: Other.ProductType | null;
          }

          namespace Other {
            type ProductType = 'merchandise' | 'service';
          }

          type Reason =
            | 'canceled'
            | 'duplicate'
            | 'fraudulent'
            | 'merchandise_not_as_described'
            | 'not_received'
            | 'other'
            | 'service_not_as_described';

          interface ServiceNotAsDescribed {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation?: string | null;

            /**
             * Date when order was canceled.
             */
            canceled_at?: number | null;

            /**
             * Reason for canceling the order.
             */
            cancellation_reason?: string;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation?: string;

            /**
             * Date when the product was received.
             */
            received_at?: number | null;
          }
        }
      }

      interface DisputeRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface DisputeUpdateParams {
        /**
         * Evidence provided for the dispute.
         */
        evidence?: DisputeUpdateParams.Evidence;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam | null;
      }

      namespace DisputeUpdateParams {
        interface Evidence {
          /**
           * Evidence provided when `reason` is 'canceled'.
           */
          canceled?: Evidence.Canceled | null;

          /**
           * Evidence provided when `reason` is 'duplicate'.
           */
          duplicate?: Evidence.Duplicate | null;

          /**
           * Evidence provided when `reason` is 'fraudulent'.
           */
          fraudulent?: Evidence.Fraudulent | null;

          /**
           * Evidence provided when `reason` is 'merchandise_not_as_described'.
           */
          merchandise_not_as_described?: Evidence.MerchandiseNotAsDescribed | null;

          /**
           * Evidence provided when `reason` is 'not_received'.
           */
          not_received?: Evidence.NotReceived | null;

          /**
           * Evidence provided when `reason` is 'other'.
           */
          other?: Evidence.Other | null;

          /**
           * The reason for filing the dispute. The evidence should be submitted in the field of the same name.
           */
          reason?: Evidence.Reason;

          /**
           * Evidence provided when `reason` is 'service_not_as_described'.
           */
          service_not_as_described?: Evidence.ServiceNotAsDescribed | null;
        }

        namespace Evidence {
          interface Canceled {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation?: string | null;

            /**
             * Date when order was canceled.
             */
            canceled_at?: number | null;

            /**
             * Whether the cardholder was provided with a cancellation policy.
             */
            cancellation_policy_provided?: boolean | null;

            /**
             * Reason for canceling the order.
             */
            cancellation_reason?: string;

            /**
             * Date when the cardholder expected to receive the product.
             */
            expected_at?: number | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation?: string;

            /**
             * Description of the merchandise or service that was purchased.
             */
            product_description?: string;

            /**
             * Whether the product was a merchandise or service.
             */
            product_type?: Canceled.ProductType | null;

            /**
             * Result of cardholder's attempt to return the product.
             */
            return_status?: Canceled.ReturnStatus | null;

            /**
             * Date when the product was returned or attempted to be returned.
             */
            returned_at?: number | null;
          }

          namespace Canceled {
            type ProductType = 'merchandise' | 'service';

            type ReturnStatus = 'merchant_rejected' | 'successful';
          }

          interface Duplicate {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation?: string | null;

            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the card statement showing that the product had already been paid for.
             */
            card_statement?: string | null;

            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the receipt showing that the product had been paid for in cash.
             */
            cash_receipt?: string | null;

            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
             */
            check_image?: string | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation?: string;

            /**
             * Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one.
             */
            original_transaction?: string;
          }

          interface Fraudulent {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation?: string | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation?: string;
          }

          interface MerchandiseNotAsDescribed {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation?: string | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation?: string;

            /**
             * Date when the product was received.
             */
            received_at?: number | null;

            /**
             * Description of the cardholder's attempt to return the product.
             */
            return_description?: string;

            /**
             * Result of cardholder's attempt to return the product.
             */
            return_status?: MerchandiseNotAsDescribed.ReturnStatus | null;

            /**
             * Date when the product was returned or attempted to be returned.
             */
            returned_at?: number | null;
          }

          namespace MerchandiseNotAsDescribed {
            type ReturnStatus = 'merchant_rejected' | 'successful';
          }

          interface NotReceived {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation?: string | null;

            /**
             * Date when the cardholder expected to receive the product.
             */
            expected_at?: number | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation?: string;

            /**
             * Description of the merchandise or service that was purchased.
             */
            product_description?: string;

            /**
             * Whether the product was a merchandise or service.
             */
            product_type?: NotReceived.ProductType | null;
          }

          namespace NotReceived {
            type ProductType = 'merchandise' | 'service';
          }

          interface Other {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation?: string | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation?: string;

            /**
             * Description of the merchandise or service that was purchased.
             */
            product_description?: string;

            /**
             * Whether the product was a merchandise or service.
             */
            product_type?: Other.ProductType | null;
          }

          namespace Other {
            type ProductType = 'merchandise' | 'service';
          }

          type Reason =
            | 'canceled'
            | 'duplicate'
            | 'fraudulent'
            | 'merchandise_not_as_described'
            | 'not_received'
            | 'other'
            | 'service_not_as_described';

          interface ServiceNotAsDescribed {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation?: string | null;

            /**
             * Date when order was canceled.
             */
            canceled_at?: number | null;

            /**
             * Reason for canceling the order.
             */
            cancellation_reason?: string;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation?: string;

            /**
             * Date when the product was received.
             */
            received_at?: number | null;
          }
        }
      }

      interface DisputeListParams extends PaginationParams {
        /**
         * Select Issuing disputes that were created during the given date interval.
         */
        created?: RangeQueryParam | number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Select Issuing disputes with the given status.
         */
        status?: DisputeListParams.Status;

        /**
         * Select the Issuing dispute for the given transaction.
         */
        transaction?: string;
      }

      namespace DisputeListParams {
        type Status = 'expired' | 'lost' | 'submitted' | 'unsubmitted' | 'won';
      }

      interface DisputeSubmitParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam | null;
      }

      class DisputesResource {
        /**
         * Creates an Issuing Dispute object. Individual pieces of evidence within the evidence object are optional at this point. Stripe only validates that required evidence is present during submission. Refer to [Dispute reasons and evidence](https://stripe.com/docs/issuing/purchases/disputes#dispute-reasons-and-evidence) for more details about evidence requirements.
         */
        create(
          params: DisputeCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Dispute>>;

        /**
         * Retrieves an Issuing Dispute object.
         */
        retrieve(
          id: string,
          params?: DisputeRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Dispute>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Dispute>>;

        /**
         * Updates the specified Issuing Dispute object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Properties on the evidence object can be unset by passing in an empty string.
         */
        update(
          id: string,
          params?: DisputeUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Dispute>>;

        /**
         * Returns a list of Issuing Dispute objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
         */
        list(
          params?: DisputeListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.Dispute>;
        list(options?: RequestOptions): ApiListPromise<Stripe.Issuing.Dispute>;

        /**
         * Submits an Issuing Dispute to the card network. Stripe validates that all evidence fields required for the dispute's reason are present. For more details, see [Dispute reasons and evidence](https://stripe.com/docs/issuing/purchases/disputes#dispute-reasons-and-evidence).
         */
        submit(
          id: string,
          params?: DisputeSubmitParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Dispute>>;
        submit(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Dispute>>;
      }
    }
  }
}
