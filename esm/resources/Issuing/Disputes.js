// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class DisputeResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/issuing/disputes',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/issuing/disputes',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/issuing/disputes/{dispute}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/issuing/disputes/{dispute}',
        }).call(this, ...args);
    }
    submit(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/issuing/disputes/{dispute}/submit',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Disputes.js.map