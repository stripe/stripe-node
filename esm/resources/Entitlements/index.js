// File generated from our OpenAPI spec
import { ActiveEntitlementResource } from './ActiveEntitlements.js';
import { FeatureResource } from './Features.js';
export class Entitlements {
    constructor(stripe) {
        this.stripe = stripe;
        this.activeEntitlements = new ActiveEntitlementResource(stripe);
        this.features = new FeatureResource(stripe);
    }
}
