// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      /**
       * You can reverse some [ReceivedCredits](https://stripe.com/docs/api#received_credits) depending on their network and source flow. Reversing a ReceivedCredit leads to the creation of a new object known as a CreditReversal.
       */
      interface CreditReversal {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'treasury.credit_reversal';

        /**
         * Amount (in cents) transferred.
         */
        amount: number;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The FinancialAccount to reverse funds from.
         */
        financial_account: string;

        /**
         * A [hosted transaction receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
         */
        hosted_regulatory_receipt_url: string | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * The rails used to reverse the funds.
         */
        network: CreditReversal.Network;

        /**
         * The ReceivedCredit being reversed.
         */
        received_credit: string;

        /**
         * Status of the CreditReversal
         */
        status: CreditReversal.Status;

        status_transitions: CreditReversal.StatusTransitions;

        /**
         * The Transaction associated with this object.
         */
        transaction: string | Stripe.Treasury.Transaction | null;
      }

      namespace CreditReversal {
        type Network = 'ach' | 'stripe';

        type Status = 'canceled' | 'posted' | 'processing';

        interface StatusTransitions {
          /**
           * Timestamp describing when the CreditReversal changed status to `posted`
           */
          posted_at: number | null;
        }
      }

      interface CreditReversalCreateParams {
        /**
         * The ReceivedCredit to reverse.
         */
        received_credit: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;
      }

      interface CreditReversalRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface CreditReversalListParams extends PaginationParams {
        /**
         * Returns objects associated with this FinancialAccount.
         */
        financial_account: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return CreditReversals for the ReceivedCredit ID.
         */
        received_credit?: string;

        /**
         * Only return CreditReversals for a given status.
         */
        status?: CreditReversalListParams.Status;
      }

      namespace CreditReversalListParams {
        type Status = 'canceled' | 'posted' | 'processing';
      }

      class CreditReversalsResource {
        /**
         * Reverses a ReceivedCredit and creates a CreditReversal object.
         */
        create(
          params: CreditReversalCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.CreditReversal>>;

        /**
         * Retrieves the details of an existing CreditReversal by passing the unique CreditReversal ID from either the CreditReversal creation request or CreditReversal list
         */
        retrieve(
          id: string,
          params?: CreditReversalRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.CreditReversal>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.CreditReversal>>;

        /**
         * Returns a list of CreditReversals.
         */
        list(
          params: CreditReversalListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Treasury.CreditReversal>;
      }
    }
  }
}
