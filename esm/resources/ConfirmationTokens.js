// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class ConfirmationTokenResource extends StripeResource {
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/confirmation_tokens/{confirmation_token}',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=ConfirmationTokens.js.map