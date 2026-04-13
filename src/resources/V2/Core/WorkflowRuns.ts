// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class WorkflowRunResource extends StripeResource {
  /**
   * List all Workflow Runs.
   */
  list(
    params: V2.Core.WorkflowRunListParams,
    options?: RequestOptions
  ): ApiListPromise<WorkflowRun> {
    return this._makeRequest('GET', '/v2/core/workflow_runs', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Retrieves the details of a Workflow Run by ID.
   */
  retrieve(
    id: string,
    params?: V2.Core.WorkflowRunRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<WorkflowRun>> {
    return this._makeRequest(
      'GET',
      `/v2/core/workflow_runs/${id}`,
      params,
      options
    ) as any;
  }
}
export interface WorkflowRun {
  /**
   * The unique ID of the Workflow Run.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.core.workflow_run';

  /**
   * When the Workflow Run was created.
   */
  created: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The current Workflow Run execution status.
   */
  status: V2.Core.WorkflowRun.Status;

  /**
   * Details about the Workflow Run's status transitions.
   */
  status_details?: V2.Core.WorkflowRun.StatusDetails;

  /**
   * Summary information about the Workflow Run's status transitions.
   */
  status_transitions: V2.Core.WorkflowRun.StatusTransitions;

  /**
   * A record of the trigger that launched this Workflow Run.
   */
  trigger: V2.Core.WorkflowRun.Trigger;

  /**
   * The Workflow this Run belongs to.
   */
  workflow: string;
}
export namespace V2 {
  export namespace Core {
    export namespace WorkflowRun {
      export type Status = 'failed' | 'started' | 'succeeded';

      export interface StatusDetails {
        /**
         * Details about the Workflow Run's transition into the FAILED state.
         */
        failed?: StatusDetails.Failed;

        /**
         * Details about the Workflow Run's transition in to the STARTED state.
         */
        started?: StatusDetails.Started;

        /**
         * Details about the Workflow Run's transition into the SUCCEEDED state.
         */
        succeeded?: StatusDetails.Succeeded;
      }

      export interface StatusTransitions {
        /**
         * When the Workflow Run failed.
         */
        failed_at?: string;

        /**
         * When the Workflow Run was started.
         */
        started_at?: string;

        /**
         * When the Workflow Run succeeded.
         */
        succeeded_at?: string;
      }

      export interface Trigger {
        /**
         * Which type of trigger this is.
         */
        type: Trigger.Type;

        /**
         * The Workflow Run was launched when Stripe emitted a certain event.
         */
        event_trigger?: Trigger.EventTrigger;

        /**
         * The Workflow Run was launched through a direct call, using either the Dashboard or the Stripe API.
         */
        manual?: Trigger.Manual;
      }

      export namespace StatusDetails {
        export interface Failed {
          /**
           * If this Workflow Run failed during the processing of an action step, the step identifier.
           */
          action?: string;

          /**
           * Category of the failure result.
           */
          error_code: string;

          /**
           * Optional details about the failure result.
           */
          error_message?: string;
        }

        export interface Started {}

        export interface Succeeded {
          /**
           * Category of the success result.
           */
          status_code: string;

          /**
           * Optional details about the success result.
           */
          status_message?: string;
        }
      }

      export namespace Trigger {
        export type Type = 'event_trigger' | 'manual';

        export interface EventTrigger {
          /**
           * The Stripe event that triggered this Run.
           */
          id: string;

          /**
           * The Stripe event type triggered this Run.
           */
          type: string;
        }

        export interface Manual {
          /**
           * The input parameters used when launching the Run.
           */
          input_parameters: Manual.InputParameters;
        }

        export namespace Manual {
          export type InputParameters = {
            [key: string]: unknown;
          };
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface WorkflowRunRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Core {
    export interface WorkflowRunListParams {
      /**
       * When retrieving Workflow Runs, include only those with the specified status values. If not specified, all Runs are returned.
       */
      status: Array<WorkflowRunListParams.Status>;

      /**
       * When retrieving Workflow Runs, include only those associated with the Workflows specified. If not specified, all Runs are returned.
       */
      workflow: Array<string>;

      /**
       * Restrict page size to no more than this number.
       */
      limit?: number;
    }

    export namespace WorkflowRunListParams {
      export type Status = 'failed' | 'started' | 'succeeded';
    }
  }
}
