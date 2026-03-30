// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {Hold, HoldResource} from './Holds.js';
import {Plan, PlanResource} from './Plans.js';
import {Release, ReleaseResource} from './Releases.js';

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
  export {Hold};
  export {Plan};
  export {Release};
}
