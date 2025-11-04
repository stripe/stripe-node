// File generated from our OpenAPI spec

namespace Issuing {
  export interface DisputeCreateParams {
    /**
     * The dispute amount in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). If not set, defaults to the full transaction amount.
     */
    amount?: number;

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
    metadata?: Stripe.MetadataParam;

    /**
     * The ID of the issuing transaction to create a dispute for. For transaction on Treasury FinancialAccounts, use `treasury.received_debit`.
     */
    transaction?: string;

    /**
     * Params for disputes related to Treasury FinancialAccounts
     */
    treasury?: DisputeCreateParams.Treasury;
  }

  namespace DisputeCreateParams {
    export interface Evidence {
      /**
       * Evidence provided when `reason` is 'canceled'.
       */
      canceled?: Stripe.Emptyable<Evidence.Canceled>;

      /**
       * Evidence provided when `reason` is 'duplicate'.
       */
      duplicate?: Stripe.Emptyable<Evidence.Duplicate>;

      /**
       * Evidence provided when `reason` is 'fraudulent'.
       */
      fraudulent?: Stripe.Emptyable<Evidence.Fraudulent>;

      /**
       * Evidence provided when `reason` is 'merchandise_not_as_described'.
       */
      merchandise_not_as_described?: Stripe.Emptyable<
        Evidence.MerchandiseNotAsDescribed
      >;

      /**
       * Evidence provided when `reason` is 'no_valid_authorization'.
       */
      no_valid_authorization?: Stripe.Emptyable<Evidence.NoValidAuthorization>;

      /**
       * Evidence provided when `reason` is 'not_received'.
       */
      not_received?: Stripe.Emptyable<Evidence.NotReceived>;

      /**
       * Evidence provided when `reason` is 'other'.
       */
      other?: Stripe.Emptyable<Evidence.Other>;

      /**
       * The reason for filing the dispute. The evidence should be submitted in the field of the same name.
       */
      reason?: Evidence.Reason;

      /**
       * Evidence provided when `reason` is 'service_not_as_described'.
       */
      service_not_as_described?: Stripe.Emptyable<
        Evidence.ServiceNotAsDescribed
      >;
    }

    export interface Treasury {
      /**
       * The ID of the ReceivedDebit to initiate an Issuings dispute for.
       */
      received_debit: string;
    }

    namespace Evidence {
      export interface Canceled {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
         */
        additional_documentation?: Stripe.Emptyable<string>;

        /**
         * Date when order was canceled.
         */
        canceled_at?: Stripe.Emptyable<number>;

        /**
         * Whether the cardholder was provided with a cancellation policy.
         */
        cancellation_policy_provided?: Stripe.Emptyable<boolean>;

        /**
         * Reason for canceling the order.
         */
        cancellation_reason?: Stripe.Emptyable<string>;

        /**
         * Date when the cardholder expected to receive the product.
         */
        expected_at?: Stripe.Emptyable<number>;

        /**
         * Explanation of why the cardholder is disputing this transaction.
         */
        explanation?: Stripe.Emptyable<string>;

        /**
         * Description of the merchandise or service that was purchased.
         */
        product_description?: Stripe.Emptyable<string>;

        /**
         * Whether the product was a merchandise or service.
         */
        product_type?: Stripe.Emptyable<Canceled.ProductType>;

        /**
         * Result of cardholder's attempt to return the product.
         */
        return_status?: Stripe.Emptyable<Canceled.ReturnStatus>;

        /**
         * Date when the product was returned or attempted to be returned.
         */
        returned_at?: Stripe.Emptyable<number>;
      }

      export interface Duplicate {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
         */
        additional_documentation?: Stripe.Emptyable<string>;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the card statement showing that the product had already been paid for.
         */
        card_statement?: Stripe.Emptyable<string>;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the receipt showing that the product had been paid for in cash.
         */
        cash_receipt?: Stripe.Emptyable<string>;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
         */
        check_image?: Stripe.Emptyable<string>;

        /**
         * Explanation of why the cardholder is disputing this transaction.
         */
        explanation?: Stripe.Emptyable<string>;

        /**
         * Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one.
         */
        original_transaction?: string;
      }

      export interface Fraudulent {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
         */
        additional_documentation?: Stripe.Emptyable<string>;

        /**
         * Explanation of why the cardholder is disputing this transaction.
         */
        explanation?: Stripe.Emptyable<string>;
      }

      export interface MerchandiseNotAsDescribed {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
         */
        additional_documentation?: Stripe.Emptyable<string>;

        /**
         * Explanation of why the cardholder is disputing this transaction.
         */
        explanation?: Stripe.Emptyable<string>;

        /**
         * Date when the product was received.
         */
        received_at?: Stripe.Emptyable<number>;

        /**
         * Description of the cardholder's attempt to return the product.
         */
        return_description?: Stripe.Emptyable<string>;

        /**
         * Result of cardholder's attempt to return the product.
         */
        return_status?: Stripe.Emptyable<
          MerchandiseNotAsDescribed.ReturnStatus
        >;

        /**
         * Date when the product was returned or attempted to be returned.
         */
        returned_at?: Stripe.Emptyable<number>;
      }

      export interface NoValidAuthorization {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
         */
        additional_documentation?: Stripe.Emptyable<string>;

        /**
         * Explanation of why the cardholder is disputing this transaction.
         */
        explanation?: Stripe.Emptyable<string>;
      }

      export interface NotReceived {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
         */
        additional_documentation?: Stripe.Emptyable<string>;

        /**
         * Date when the cardholder expected to receive the product.
         */
        expected_at?: Stripe.Emptyable<number>;

        /**
         * Explanation of why the cardholder is disputing this transaction.
         */
        explanation?: Stripe.Emptyable<string>;

        /**
         * Description of the merchandise or service that was purchased.
         */
        product_description?: Stripe.Emptyable<string>;

        /**
         * Whether the product was a merchandise or service.
         */
        product_type?: Stripe.Emptyable<NotReceived.ProductType>;
      }

      export interface Other {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
         */
        additional_documentation?: Stripe.Emptyable<string>;

        /**
         * Explanation of why the cardholder is disputing this transaction.
         */
        explanation?: Stripe.Emptyable<string>;

        /**
         * Description of the merchandise or service that was purchased.
         */
        product_description?: Stripe.Emptyable<string>;

        /**
         * Whether the product was a merchandise or service.
         */
        product_type?: Stripe.Emptyable<Other.ProductType>;
      }

      export type Reason =
        | 'canceled'
        | 'duplicate'
        | 'fraudulent'
        | 'merchandise_not_as_described'
        | 'no_valid_authorization'
        | 'not_received'
        | 'other'
        | 'service_not_as_described';

      export interface ServiceNotAsDescribed {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
         */
        additional_documentation?: Stripe.Emptyable<string>;

        /**
         * Date when order was canceled.
         */
        canceled_at?: Stripe.Emptyable<number>;

        /**
         * Reason for canceling the order.
         */
        cancellation_reason?: Stripe.Emptyable<string>;

        /**
         * Explanation of why the cardholder is disputing this transaction.
         */
        explanation?: Stripe.Emptyable<string>;

        /**
         * Date when the product was received.
         */
        received_at?: Stripe.Emptyable<number>;
      }

      namespace Canceled {
        export type ProductType = 'merchandise' | 'service';

        export type ReturnStatus = 'merchant_rejected' | 'successful';
      }

      namespace MerchandiseNotAsDescribed {
        export type ReturnStatus = 'merchant_rejected' | 'successful';
      }

      namespace NotReceived {
        export type ProductType = 'merchandise' | 'service';
      }

      namespace Other {
        export type ProductType = 'merchandise' | 'service';
      }
    }
  }
}
namespace Issuing {
  export interface DisputeRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Issuing {
  export interface DisputeUpdateParams {
    /**
     * The dispute amount in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    amount?: number;

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
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
  }

  namespace DisputeUpdateParams {
    export interface Evidence {
      /**
       * Evidence provided when `reason` is 'canceled'.
       */
      canceled?: Stripe.Emptyable<Evidence.Canceled>;

      /**
       * Evidence provided when `reason` is 'duplicate'.
       */
      duplicate?: Stripe.Emptyable<Evidence.Duplicate>;

      /**
       * Evidence provided when `reason` is 'fraudulent'.
       */
      fraudulent?: Stripe.Emptyable<Evidence.Fraudulent>;

      /**
       * Evidence provided when `reason` is 'merchandise_not_as_described'.
       */
      merchandise_not_as_described?: Stripe.Emptyable<
        Evidence.MerchandiseNotAsDescribed
      >;

      /**
       * Evidence provided when `reason` is 'no_valid_authorization'.
       */
      no_valid_authorization?: Stripe.Emptyable<Evidence.NoValidAuthorization>;

      /**
       * Evidence provided when `reason` is 'not_received'.
       */
      not_received?: Stripe.Emptyable<Evidence.NotReceived>;

      /**
       * Evidence provided when `reason` is 'other'.
       */
      other?: Stripe.Emptyable<Evidence.Other>;

      /**
       * The reason for filing the dispute. The evidence should be submitted in the field of the same name.
       */
      reason?: Evidence.Reason;

      /**
       * Evidence provided when `reason` is 'service_not_as_described'.
       */
      service_not_as_described?: Stripe.Emptyable<
        Evidence.ServiceNotAsDescribed
      >;
    }

    namespace Evidence {
      export interface Canceled {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
         */
        additional_documentation?: Stripe.Emptyable<string>;

        /**
         * Date when order was canceled.
         */
        canceled_at?: Stripe.Emptyable<number>;

        /**
         * Whether the cardholder was provided with a cancellation policy.
         */
        cancellation_policy_provided?: Stripe.Emptyable<boolean>;

        /**
         * Reason for canceling the order.
         */
        cancellation_reason?: Stripe.Emptyable<string>;

        /**
         * Date when the cardholder expected to receive the product.
         */
        expected_at?: Stripe.Emptyable<number>;

        /**
         * Explanation of why the cardholder is disputing this transaction.
         */
        explanation?: Stripe.Emptyable<string>;

        /**
         * Description of the merchandise or service that was purchased.
         */
        product_description?: Stripe.Emptyable<string>;

        /**
         * Whether the product was a merchandise or service.
         */
        product_type?: Stripe.Emptyable<Canceled.ProductType>;

        /**
         * Result of cardholder's attempt to return the product.
         */
        return_status?: Stripe.Emptyable<Canceled.ReturnStatus>;

        /**
         * Date when the product was returned or attempted to be returned.
         */
        returned_at?: Stripe.Emptyable<number>;
      }

      export interface Duplicate {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
         */
        additional_documentation?: Stripe.Emptyable<string>;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the card statement showing that the product had already been paid for.
         */
        card_statement?: Stripe.Emptyable<string>;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the receipt showing that the product had been paid for in cash.
         */
        cash_receipt?: Stripe.Emptyable<string>;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
         */
        check_image?: Stripe.Emptyable<string>;

        /**
         * Explanation of why the cardholder is disputing this transaction.
         */
        explanation?: Stripe.Emptyable<string>;

        /**
         * Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one.
         */
        original_transaction?: string;
      }

      export interface Fraudulent {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
         */
        additional_documentation?: Stripe.Emptyable<string>;

        /**
         * Explanation of why the cardholder is disputing this transaction.
         */
        explanation?: Stripe.Emptyable<string>;
      }

      export interface MerchandiseNotAsDescribed {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
         */
        additional_documentation?: Stripe.Emptyable<string>;

        /**
         * Explanation of why the cardholder is disputing this transaction.
         */
        explanation?: Stripe.Emptyable<string>;

        /**
         * Date when the product was received.
         */
        received_at?: Stripe.Emptyable<number>;

        /**
         * Description of the cardholder's attempt to return the product.
         */
        return_description?: Stripe.Emptyable<string>;

        /**
         * Result of cardholder's attempt to return the product.
         */
        return_status?: Stripe.Emptyable<
          MerchandiseNotAsDescribed.ReturnStatus
        >;

        /**
         * Date when the product was returned or attempted to be returned.
         */
        returned_at?: Stripe.Emptyable<number>;
      }

      export interface NoValidAuthorization {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
         */
        additional_documentation?: Stripe.Emptyable<string>;

        /**
         * Explanation of why the cardholder is disputing this transaction.
         */
        explanation?: Stripe.Emptyable<string>;
      }

      export interface NotReceived {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
         */
        additional_documentation?: Stripe.Emptyable<string>;

        /**
         * Date when the cardholder expected to receive the product.
         */
        expected_at?: Stripe.Emptyable<number>;

        /**
         * Explanation of why the cardholder is disputing this transaction.
         */
        explanation?: Stripe.Emptyable<string>;

        /**
         * Description of the merchandise or service that was purchased.
         */
        product_description?: Stripe.Emptyable<string>;

        /**
         * Whether the product was a merchandise or service.
         */
        product_type?: Stripe.Emptyable<NotReceived.ProductType>;
      }

      export interface Other {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
         */
        additional_documentation?: Stripe.Emptyable<string>;

        /**
         * Explanation of why the cardholder is disputing this transaction.
         */
        explanation?: Stripe.Emptyable<string>;

        /**
         * Description of the merchandise or service that was purchased.
         */
        product_description?: Stripe.Emptyable<string>;

        /**
         * Whether the product was a merchandise or service.
         */
        product_type?: Stripe.Emptyable<Other.ProductType>;
      }

      export type Reason =
        | 'canceled'
        | 'duplicate'
        | 'fraudulent'
        | 'merchandise_not_as_described'
        | 'no_valid_authorization'
        | 'not_received'
        | 'other'
        | 'service_not_as_described';

      export interface ServiceNotAsDescribed {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
         */
        additional_documentation?: Stripe.Emptyable<string>;

        /**
         * Date when order was canceled.
         */
        canceled_at?: Stripe.Emptyable<number>;

        /**
         * Reason for canceling the order.
         */
        cancellation_reason?: Stripe.Emptyable<string>;

        /**
         * Explanation of why the cardholder is disputing this transaction.
         */
        explanation?: Stripe.Emptyable<string>;

        /**
         * Date when the product was received.
         */
        received_at?: Stripe.Emptyable<number>;
      }

      namespace Canceled {
        export type ProductType = 'merchandise' | 'service';

        export type ReturnStatus = 'merchant_rejected' | 'successful';
      }

      namespace MerchandiseNotAsDescribed {
        export type ReturnStatus = 'merchant_rejected' | 'successful';
      }

      namespace NotReceived {
        export type ProductType = 'merchandise' | 'service';
      }

      namespace Other {
        export type ProductType = 'merchandise' | 'service';
      }
    }
  }
}
namespace Issuing {
  export interface DisputeListParams extends PaginationParams {
    /**
     * Only return Issuing disputes that were created during the given date interval.
     */
    created?: Stripe.RangeQueryParam | number;

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
    export type Status =
      | 'expired'
      | 'lost'
      | 'submitted'
      | 'unsubmitted'
      | 'won';
  }
}
namespace Issuing {
  export interface DisputeSubmitParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
  }
}
