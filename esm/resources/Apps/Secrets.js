// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class SecretResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/apps/secrets',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/apps/secrets',
        }).call(this, ...args);
    }
    find(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/apps/secrets/find',
        }).call(this, ...args);
    }
    deleteWhere(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/apps/secrets/delete',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Secrets.js.map