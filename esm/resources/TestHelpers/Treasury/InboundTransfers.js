// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class InboundTransferResource extends StripeResource {
    fail(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/fail',
        }).call(this, ...args);
    }
    returnInboundTransfer(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/return',
        }).call(this, ...args);
    }
    succeed(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/succeed',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=InboundTransfers.js.map