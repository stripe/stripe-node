// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class OutboundTransferResource extends StripeResource {
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}',
        }).call(this, ...args);
    }
    fail(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail',
        }).call(this, ...args);
    }
    post(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post',
        }).call(this, ...args);
    }
    returnOutboundTransfer(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return',
        }).call(this, ...args);
    }
}
