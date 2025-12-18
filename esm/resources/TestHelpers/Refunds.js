// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class RefundResource extends StripeResource {
    expire(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/refunds/{refund}/expire',
        }).call(this, ...args);
    }
}
