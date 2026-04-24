// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {V2 as V2Namespace0, Workflow, WorkflowResource} from './Workflows.js';
import {
  V2 as V2Namespace1,
  WorkflowRun,
  WorkflowRunResource,
} from './WorkflowRuns.js';

export {Workflow} from './Workflows.js';
export {WorkflowRun} from './WorkflowRuns.js';

export class Extend {
  workflows: WorkflowResource;
  workflowRuns: WorkflowRunResource;

  constructor(private readonly stripe: Stripe) {
    this.workflows = new WorkflowResource(stripe);
    this.workflowRuns = new WorkflowRunResource(stripe);
  }
}

export declare namespace Extend {
  export type WorkflowListParams = V2Namespace0.Extend.WorkflowListParams;
  export type WorkflowRetrieveParams = V2Namespace0.Extend.WorkflowRetrieveParams;
  export type WorkflowInvokeParams = V2Namespace0.Extend.WorkflowInvokeParams;
  export {Workflow};
  export type WorkflowRunListParams = V2Namespace1.Extend.WorkflowRunListParams;
  export type WorkflowRunRetrieveParams = V2Namespace1.Extend.WorkflowRunRetrieveParams;
  export {WorkflowRun};
}
