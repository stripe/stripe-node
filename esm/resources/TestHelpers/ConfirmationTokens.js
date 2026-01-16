// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class ConfirmationTokenResource extends StripeResource {
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/confirmation_tokens',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=ConfirmationTokens.js.map