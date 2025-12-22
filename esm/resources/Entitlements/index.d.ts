import { StripeClient } from '../../stripe.core.js';
import { ActiveEntitlementResource } from './ActiveEntitlements.js';
import { FeatureResource } from './Features.js';
export { ActiveEntitlement } from './ActiveEntitlements.js';
export { Feature } from './Features.js';
export declare class Entitlements {
    private readonly stripe;
    activeEntitlements: ActiveEntitlementResource;
    features: FeatureResource;
    constructor(stripe: StripeClient);
}
