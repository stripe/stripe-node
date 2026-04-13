// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {WorkflowRun} from './WorkflowRuns.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class WorkflowResource extends StripeResource {
  /**
   * List all Workflows.
   */
  list(
    params: V2.Core.WorkflowListParams,
    options?: RequestOptions
  ): ApiListPromise<Workflow> {
    return this._makeRequest('GET', '/v2/core/workflows', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Retrieves the details of a Workflow by ID.
   */
  retrieve(
    id: string,
    params?: V2.Core.WorkflowRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Workflow>> {
    return this._makeRequest(
      'GET',
      `/v2/core/workflows/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Invokes an on-demand Workflow with parameters, to launch a new Workflow Run.
   */
  invoke(
    id: string,
    params: V2.Core.WorkflowInvokeParams,
    options?: RequestOptions
  ): Promise<Response<WorkflowRun>> {
    return this._makeRequest(
      'POST',
      `/v2/core/workflows/${id}/invoke`,
      params,
      options
    ) as any;
  }
}
export interface Workflow {
  /**
   * The unique ID of the Workflow.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.core.workflow';

  /**
   * When the Workflow was created.
   */
  created: string;

  /**
   * Workflow description.
   */
  description: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Whether this Workflow is active, inactive, or in some other state. Only active Workflows may be invoked.
   */
  status: V2.Core.Workflow.Status;

  /**
   * Under what conditions will this Workflow launch.
   */
  triggers: Array<V2.Core.Workflow.Trigger>;
}
export namespace V2 {
  export namespace Core {
    export namespace Workflow {
      export type Status = 'active' | 'archived' | 'draft' | 'inactive';

      export interface Trigger {
        /**
         * The Workflow can be launched when Stripe emits a certain event.
         */
        event_trigger?: Trigger.EventTrigger;

        /**
         * The Workflow can be launched through a direct call, using either the Dashboard or the Stripe API.
         */
        manual?: Trigger.Manual;

        /**
         * Which type of trigger this is.
         */
        type: Trigger.Type;
      }

      export namespace Trigger {
        export interface EventTrigger {
          /**
           * The Stripe event type that will trigger this Workflow.
           */
          type: string;
        }

        export interface Manual {
          /**
           * An unprocessed version of the trigger's input parameter schema.
           */
          raw_schema: string;
        }

        export type Type = 'event_trigger' | 'manual';
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface WorkflowRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Core {
    export interface WorkflowListParams {
      /**
       * When retrieving Workflows, include only those with the specified status values.
       * If not specified, all Workflows in active and inactive status are returned.
       */
      status: Array<WorkflowListParams.Status>;

      /**
       * Restrict page size to no more than this number.
       */
      limit?: number;
    }

    export namespace WorkflowListParams {
      export type Status = 'active' | 'archived' | 'draft' | 'inactive';
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface WorkflowInvokeParams {
      /**
       * Parameters used to invoke the Workflow Run.
       */
      input_parameters: WorkflowInvokeParams.InputParameters;
    }

    export namespace WorkflowInvokeParams {
      export type InputParameters = {
        [key: string]: unknown;
      };
    }
  }
}
