// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class OutboundPaymentResource extends StripeResource {
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}',
        }).call(this, ...args);
    }
    fail(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/fail',
        }).call(this, ...args);
    }
    post(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/post',
        }).call(this, ...args);
    }
    returnOutboundPayment(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/return',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=OutboundPayments.js.map