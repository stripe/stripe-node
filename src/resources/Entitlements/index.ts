// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {ActiveEntitlementResource} from './ActiveEntitlements.js';
import {FeatureResource} from './Features.js';

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
