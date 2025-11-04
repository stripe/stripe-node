// File generated from our OpenAPI spec

namespace Treasury {
  export interface ReceivedCreditRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Treasury {
  export interface ReceivedCreditListParams extends PaginationParams {
    /**
     * The FinancialAccount that received the funds.
     */
    financial_account: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return ReceivedCredits described by the flow.
     */
    linked_flows?: ReceivedCreditListParams.LinkedFlows;

    /**
     * Only return ReceivedCredits that have the given status: `succeeded` or `failed`.
     */
    status?: ReceivedCreditListParams.Status;
  }

  namespace ReceivedCreditListParams {
    export interface LinkedFlows {
      /**
       * The source flow type.
       */
      source_flow_type: LinkedFlows.SourceFlowType;
    }

    export type Status = 'failed' | 'succeeded';

    namespace LinkedFlows {
      export type SourceFlowType =
        | 'credit_reversal'
        | 'other'
        | 'outbound_payment'
        | 'outbound_transfer'
        | 'payout';
    }
  }
}
