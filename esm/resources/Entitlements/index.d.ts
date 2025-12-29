import { Stripe } from '../../stripe.core.js';
import { ActiveEntitlement, ActiveEntitlementResource } from './ActiveEntitlements.js';
import { Feature, FeatureResource } from './Features.js';
import { ActiveEntitlementSummary } from './ActiveEntitlementSummaries.js';
export { ActiveEntitlement } from './ActiveEntitlements.js';
export { Feature } from './Features.js';
export declare class Entitlements {
    private readonly stripe;
    activeEntitlements: ActiveEntitlementResource;
    features: FeatureResource;
    constructor(stripe: Stripe);
}
export declare namespace Entitlements {
    export { ActiveEntitlement };
    export { Feature };
    export { ActiveEntitlementSummary };
}
