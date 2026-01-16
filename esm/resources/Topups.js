// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class TopupResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/topups',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/topups',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/topups/{topup}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/topups/{topup}',
        }).call(this, ...args);
    }
    cancel(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/topups/{topup}/cancel',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Topups.js.map