// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class PaymentAttemptRecordResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_attempt_records',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_attempt_records/{id}',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=PaymentAttemptRecords.js.map