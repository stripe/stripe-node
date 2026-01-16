// File generated from our OpenAPI spec
import { StripeResource } from '../../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class PersonResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/accounts/{account_id}/persons',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/accounts/{account_id}/persons',
        }).call(this, ...args);
    }
    del(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v2/core/accounts/{account_id}/persons/{id}',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/accounts/{account_id}/persons/{id}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/accounts/{account_id}/persons/{id}',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Persons.js.map