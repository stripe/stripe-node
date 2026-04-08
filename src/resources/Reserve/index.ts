// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {Reserve as ReserveNamespace0, Hold, HoldResource} from './Holds.js';
import {Reserve as ReserveNamespace1, Plan, PlanResource} from './Plans.js';
import {
  Reserve as ReserveNamespace2,
  Release,
  ReleaseResource,
} from './Releases.js';

export {Hold} from './Holds.js';
export {Plan} from './Plans.js';
export {Release} from './Releases.js';

export class Reserve {
  holds: HoldResource;
  plans: PlanResource;
  releases: ReleaseResource;

  constructor(private readonly stripe: Stripe) {
    this.holds = new HoldResource(stripe);
    this.plans = new PlanResource(stripe);
    this.releases = new ReleaseResource(stripe);
  }
}

export declare namespace Reserve {
  export type HoldListParams = ReserveNamespace0.HoldListParams;
  export type HoldRetrieveParams = ReserveNamespace0.HoldRetrieveParams;
  export {Hold};
  export type PlanRetrieveParams = ReserveNamespace1.PlanRetrieveParams;
  export {Plan};
  export type ReleaseListParams = ReserveNamespace2.ReleaseListParams;
  export type ReleaseRetrieveParams = ReserveNamespace2.ReleaseRetrieveParams;
  export {Release};
}
