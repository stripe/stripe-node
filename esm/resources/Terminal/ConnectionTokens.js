// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class ConnectionTokenResource extends StripeResource {
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/terminal/connection_tokens',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=ConnectionTokens.js.map