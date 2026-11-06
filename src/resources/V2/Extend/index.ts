// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  ObjectDefinition,
  ObjectDefinitionResource,
} from './ObjectDefinitions.js';
import {V2 as V2Namespace1, Workflow, WorkflowResource} from './Workflows.js';
import {
  V2 as V2Namespace2,
  WorkflowRun,
  WorkflowRunResource,
} from './WorkflowRuns.js';
import {ObjectDefinitionVersion} from './ObjectDefinitionVersions.js';

export {ObjectDefinition} from './ObjectDefinitions.js';
export {Workflow} from './Workflows.js';
export {WorkflowRun} from './WorkflowRuns.js';
export {ObjectDefinitionVersion} from './ObjectDefinitionVersions.js';

export class Extend {
  objectDefinitions: ObjectDefinitionResource;
  workflows: WorkflowResource;
  workflowRuns: WorkflowRunResource;

  constructor(private readonly stripe: Stripe) {
    this.objectDefinitions = new ObjectDefinitionResource(stripe);
    this.workflows = new WorkflowResource(stripe);
    this.workflowRuns = new WorkflowRunResource(stripe);
  }
}

export declare namespace Extend {
  export import ObjectDefinitionListParams = V2Namespace0.Extend.ObjectDefinitionListParams;
  export import ObjectDefinitionRetrieveParams = V2Namespace0.Extend.ObjectDefinitionRetrieveParams;
  export {ObjectDefinition, ObjectDefinitionResource};
  export import WorkflowListParams = V2Namespace1.Extend.WorkflowListParams;
  export import WorkflowRetrieveParams = V2Namespace1.Extend.WorkflowRetrieveParams;
  export import WorkflowInvokeParams = V2Namespace1.Extend.WorkflowInvokeParams;
  export {Workflow, WorkflowResource};
  export import WorkflowRunListParams = V2Namespace2.Extend.WorkflowRunListParams;
  export import WorkflowRunRetrieveParams = V2Namespace2.Extend.WorkflowRunRetrieveParams;
  export {WorkflowRun, WorkflowRunResource};
  export {ObjectDefinitionVersion};
}
