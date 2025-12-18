// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class TestClockResource extends StripeResource {
    del(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v1/test_helpers/test_clocks/{test_clock}',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/test_helpers/test_clocks/{test_clock}',
        }).call(this, ...args);
    }
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/test_helpers/test_clocks',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/test_clocks',
        }).call(this, ...args);
    }
    advance(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/test_clocks/{test_clock}/advance',
        }).call(this, ...args);
    }
}
