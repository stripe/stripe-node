// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class ActiveEntitlementResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/entitlements/active_entitlements',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/entitlements/active_entitlements/{id}',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=ActiveEntitlements.js.map