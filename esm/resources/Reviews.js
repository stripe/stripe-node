// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class ReviewResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/reviews',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/reviews/{review}',
        }).call(this, ...args);
    }
    approve(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/reviews/{review}/approve',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Reviews.js.map