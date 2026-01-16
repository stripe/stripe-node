// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class ApplicationFeeResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/application_fees',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/application_fees/{id}',
        }).call(this, ...args);
    }
    retrieveRefund(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/application_fees/{fee}/refunds/{id}',
        }).call(this, ...args);
    }
    updateRefund(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/application_fees/{fee}/refunds/{id}',
        }).call(this, ...args);
    }
    listRefunds(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/application_fees/{id}/refunds',
            methodType: 'list',
        }).call(this, ...args);
    }
    createRefund(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/application_fees/{id}/refunds',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=ApplicationFees.js.map