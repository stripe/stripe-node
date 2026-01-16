// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class AccountResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/accounts',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/accounts',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/accounts/{id}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/accounts/{id}',
        }).call(this, ...args);
    }
    close(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/accounts/{id}/close',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Accounts.js.map