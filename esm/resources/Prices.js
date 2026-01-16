// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class PriceResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/prices',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/prices',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/prices/{price}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/prices/{price}',
        }).call(this, ...args);
    }
    search(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/prices/search',
            methodType: 'search',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Prices.js.map