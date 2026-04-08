// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Entitlements as EntitlementsNamespace0,
  ActiveEntitlement,
  ActiveEntitlementResource,
} from './ActiveEntitlements.js';
import {
  Entitlements as EntitlementsNamespace1,
  Feature,
  FeatureResource,
} from './Features.js';
import {ActiveEntitlementSummary} from './ActiveEntitlementSummaries.js';

export {ActiveEntitlement} from './ActiveEntitlements.js';
export {Feature} from './Features.js';
export {ActiveEntitlementSummary} from './ActiveEntitlementSummaries.js';

export class Entitlements {
  activeEntitlements: ActiveEntitlementResource;
  features: FeatureResource;

  constructor(private readonly stripe: Stripe) {
    this.activeEntitlements = new ActiveEntitlementResource(stripe);
    this.features = new FeatureResource(stripe);
  }
}

export declare namespace Entitlements {
  export type ActiveEntitlementListParams = EntitlementsNamespace0.ActiveEntitlementListParams;
  export type ActiveEntitlementRetrieveParams = EntitlementsNamespace0.ActiveEntitlementRetrieveParams;
  export {ActiveEntitlement};
  export type FeatureListParams = EntitlementsNamespace1.FeatureListParams;
  export type FeatureCreateParams = EntitlementsNamespace1.FeatureCreateParams;
  export type FeatureRetrieveParams = EntitlementsNamespace1.FeatureRetrieveParams;
  export type FeatureUpdateParams = EntitlementsNamespace1.FeatureUpdateParams;
  export {Feature};
  export {ActiveEntitlementSummary};
}
