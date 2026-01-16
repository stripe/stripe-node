// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class SourceResource extends StripeResource {
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/sources/{source}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/sources/{source}',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/sources',
        }).call(this, ...args);
    }
    verify(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/sources/{source}/verify',
        }).call(this, ...args);
    }
    listSourceTransactions(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/sources/{source}/source_transactions',
            methodType: 'list',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Sources.js.map