// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  ActiveEntitlement,
  ActiveEntitlementResource,
} from './ActiveEntitlements.js';
import {Feature, FeatureResource} from './Features.js';
import {ActiveEntitlementSummary} from './ActiveEntitlementSummaries.js';

export {ActiveEntitlement} from './ActiveEntitlements.js';
export {Feature} from './Features.js';

export class Entitlements {
  activeEntitlements: ActiveEntitlementResource;
  features: FeatureResource;

  constructor(private readonly stripe: Stripe) {
    this.activeEntitlements = new ActiveEntitlementResource(stripe);
    this.features = new FeatureResource(stripe);
  }
}

export declare namespace Entitlements {
  export {ActiveEntitlement};
  export {Feature};
  export {ActiveEntitlementSummary};
}
