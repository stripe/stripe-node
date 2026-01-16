// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class TransactionResource extends StripeResource {
    refund(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/transactions/{transaction}/refund',
        }).call(this, ...args);
    }
    createForceCapture(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/transactions/create_force_capture',
        }).call(this, ...args);
    }
    createUnlinkedRefund(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/transactions/create_unlinked_refund',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Transactions.js.map