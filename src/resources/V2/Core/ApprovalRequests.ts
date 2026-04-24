// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class ApprovalRequestResource extends StripeResource {
  /**
   * GET /v2/core/approval_requests
   * Lists approval requests with optional filtering.
   */
  list(
    params?: V2.Core.ApprovalRequestListParams,
    options?: RequestOptions
  ): ApiListPromise<ApprovalRequest> {
    return this._makeRequest(
      'GET',
      '/v2/core/approval_requests',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * GET /v2/core/approval_requests/:id
   * Retrieves an approval request by ID.
   */
  retrieve(
    id: string,
    params?: V2.Core.ApprovalRequestRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ApprovalRequest>> {
    return this._makeRequest(
      'GET',
      `/v2/core/approval_requests/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * POST /v2/core/approval_requests/:id/cancel
   * Cancels a pending approval request.
   */
  cancel(
    id: string,
    params?: V2.Core.ApprovalRequestCancelParams,
    options?: RequestOptions
  ): Promise<Response<ApprovalRequest>> {
    return this._makeRequest(
      'POST',
      `/v2/core/approval_requests/${id}/cancel`,
      params,
      options
    ) as any;
  }
  /**
   * POST /v2/core/approval_requests/:id/execute
   * Executes an approved approval request.
   */
  execute(
    id: string,
    params?: V2.Core.ApprovalRequestExecuteParams,
    options?: RequestOptions
  ): Promise<Response<ApprovalRequest>> {
    return this._makeRequest(
      'POST',
      `/v2/core/approval_requests/${id}/execute`,
      params,
      options
    ) as any;
  }
  /**
   * POST /v2/core/approval_requests/:id/submit
   * Moves a pending approval request into the reviewer queue for auto-execution upon approval.
   */
  submit(
    id: string,
    params?: V2.Core.ApprovalRequestSubmitParams,
    options?: RequestOptions
  ): Promise<Response<ApprovalRequest>> {
    return this._makeRequest(
      'POST',
      `/v2/core/approval_requests/${id}/submit`,
      params,
      options
    ) as any;
  }
}
export interface ApprovalRequest {
  /**
   * The unique identifier for this ApprovalRequest.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.core.approval_request';

  /**
   * The action that was requested.
   */
  action: V2.Core.ApprovalRequest.Action;

  /**
   * Time this ApprovalRequest was created.
   */
  created: string;

  /**
   * The URL to the dashboard for this ApprovalRequest.
   */
  dashboard_url?: string;

  /**
   * A description of the approval request.
   */
  description?: string;

  /**
   * The timestamp at which this ApprovalRequest will expire.
   */
  expires_at: string;

  /**
   * Whether this ApprovalRequest is livemode.
   */
  livemode: boolean;

  /**
   * The requester of this ApprovalRequest.
   */
  requested_by: V2.Core.ApprovalRequest.RequestedBy;

  /**
   * The review of this ApprovalRequest if it has been reviewed.
   */
  review?: V2.Core.ApprovalRequest.Review;

  /**
   * The rule associated with this ApprovalRequest.
   */
  rule?: V2.Core.ApprovalRequest.Rule;

  /**
   * The status of this ApprovalRequest.
   */
  status: V2.Core.ApprovalRequest.Status;

  /**
   * The details of the status of this ApprovalRequest.
   */
  status_details?: V2.Core.ApprovalRequest.StatusDetails;

  /**
   * The transitions of the status of this ApprovalRequest.
   */
  status_transitions?: V2.Core.ApprovalRequest.StatusTransitions;
}
export namespace V2 {
  export namespace Core {
    export namespace ApprovalRequest {
      export type Action =
        | 'charge.create'
        | 'dispute.close'
        | 'inbound_transfers.money_management.create'
        | 'invoice.create'
        | 'outbound_payments.money_management.create'
        | 'outbound_transfers.money_management.create'
        | 'payment_intent.create'
        | 'payment_intent.update'
        | 'payout.create'
        | 'price.update'
        | 'refund.create'
        | 'setup_intent.create'
        | 'subscription.create'
        | 'subscription.update'
        | 'topup.create'
        | 'transfer.create';

      export interface RequestedBy {
        /**
         * Stripe-defined identifier for the requester (e.g. a restricted API key token).
         */
        id: string;

        /**
         * Merchant-defined name for the requester.
         */
        name?: string;
      }

      export interface Review {
        /**
         * The reason provided by the reviewer.
         */
        reason?: string;

        /**
         * The result of the review.
         */
        result: Review.Result;

        /**
         * Timestamp when the review was performed.
         */
        reviewed_at: string;

        /**
         * The reviewer who performed the review.
         */
        reviewed_by: Review.ReviewedBy;
      }

      export interface Rule {
        /**
         * The name of the rule.
         */
        name: string;
      }

      export type Status =
        | 'approved'
        | 'canceled'
        | 'execution_failed'
        | 'execution_started'
        | 'execution_succeeded'
        | 'expired'
        | 'failed'
        | 'pending'
        | 'rejected'
        | 'requires_execution'
        | 'requires_review'
        | 'succeeded';

      export interface StatusDetails {
        /**
         * Deprecated: use requires_execution status instead.
         */
        approved?: StatusDetails.Approved;

        /**
         * Deprecated: use canceled status instead.
         */
        canceled?: StatusDetails.Canceled;

        /**
         * Deprecated: use failed status instead.
         */
        execution_failed?: StatusDetails.ExecutionFailed;

        /**
         * Deprecated: use requires_execution status instead.
         */
        execution_started?: StatusDetails.ExecutionStarted;

        /**
         * Deprecated: use succeeded status instead.
         */
        execution_succeeded?: StatusDetails.ExecutionSucceeded;

        /**
         * Deprecated: use expired status instead.
         */
        expired?: StatusDetails.Expired;

        /**
         * Details when the approval request failed.
         */
        failed?: StatusDetails.Failed;

        /**
         * Deprecated: use requires_review status instead.
         */
        pending?: StatusDetails.Pending;

        /**
         * Deprecated: use rejected status instead.
         */
        rejected?: StatusDetails.Rejected;

        /**
         * Details when the approval request succeeded.
         */
        succeeded?: StatusDetails.Succeeded;
      }

      export interface StatusTransitions {
        /**
         * Timestamp when the approval request was canceled.
         */
        canceled_at?: string;

        /**
         * Timestamp when the approval request expired.
         */
        expired_at?: string;

        /**
         * Timestamp when the approval request failed.
         */
        failed_at?: string;

        /**
         * Timestamp when the approval request was rejected.
         */
        rejected_at?: string;

        /**
         * Timestamp when the approval request moved to requires_execution status.
         */
        requires_execution_at?: string;

        /**
         * Timestamp when the approval request succeeded.
         */
        succeeded_at?: string;
      }

      export namespace Review {
        export type Result = 'approved' | 'rejected';

        export interface ReviewedBy {
          /**
           * Stripe-defined identifier for the reviewer (e.g. a restricted API key token).
           */
          id: string;

          /**
           * Merchant-defined name for the reviewer.
           */
          name: string;
        }
      }

      export namespace StatusDetails {
        export interface Approved {
          /**
           * The reason provided when approving the request.
           */
          reason?: string;
        }

        export interface Canceled {}

        export interface ExecutionFailed {
          /**
           * The error code for the failed execution.
           */
          code: string;

          /**
           * The error message for the failed execution.
           */
          message: string;

          /**
           * The error type for the failed execution.
           */
          type: string;
        }

        export interface ExecutionStarted {}

        export interface ExecutionSucceeded {
          /**
           * The result of the successful execution.
           */
          result: ExecutionSucceeded.Result;
        }

        export interface Expired {}

        export interface Failed {
          /**
           * The error code for the failed execution.
           */
          error_code: string;

          /**
           * The error message for the failed execution.
           */
          error_message: string;

          /**
           * The error type for the failed execution.
           */
          error_type: string;
        }

        export interface Pending {}

        export interface Rejected {
          /**
           * The reason provided when rejecting the request.
           */
          reason?: string;
        }

        export interface Succeeded {
          /**
           * The result of the successful execution.
           */
          result: Succeeded.Result;
        }

        export namespace ExecutionSucceeded {
          export interface Result {
            /**
             * The unique identifier of the executed object.
             */
            id: string;

            /**
             * The object type of the executed resource.
             */
            object: string;
          }
        }

        export namespace Succeeded {
          export interface Result {
            /**
             * The unique identifier of the executed object.
             */
            id: string;

            /**
             * The object type of the executed resource.
             */
            object: string;
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface ApprovalRequestRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Core {
    export interface ApprovalRequestListParams {
      /**
       * Maximum number of results to return.
       */
      limit?: number;
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface ApprovalRequestCancelParams {}
  }
}
export namespace V2 {
  export namespace Core {
    export interface ApprovalRequestExecuteParams {}
  }
}
export namespace V2 {
  export namespace Core {
    export interface ApprovalRequestSubmitParams {
      /**
       * The reason for submitting the approval request.
       */
      reason?: string;
    }
  }
}
