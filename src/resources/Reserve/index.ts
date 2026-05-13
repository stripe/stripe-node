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
  export import HoldListParams = ReserveNamespace0.HoldListParams;
  export import HoldRetrieveParams = ReserveNamespace0.HoldRetrieveParams;
  export {Hold};
  export import PlanRetrieveParams = ReserveNamespace1.PlanRetrieveParams;
  export {Plan};
  export import ReleaseListParams = ReserveNamespace2.ReleaseListParams;
  export import ReleaseRetrieveParams = ReserveNamespace2.ReleaseRetrieveParams;
  export {Release};
}
