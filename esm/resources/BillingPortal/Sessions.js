// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class SessionResource extends StripeResource {
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing_portal/sessions',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Sessions.js.map