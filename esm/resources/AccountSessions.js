// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class AccountSessionResource extends StripeResource {
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/account_sessions',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=AccountSessions.js.map