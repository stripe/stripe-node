// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class CountrySpecResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/country_specs',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/country_specs/{country}',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=CountrySpecs.js.map