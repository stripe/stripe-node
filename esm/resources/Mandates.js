// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class MandateResource extends StripeResource {
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/mandates/{mandate}',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Mandates.js.map