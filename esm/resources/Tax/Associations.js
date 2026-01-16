// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class AssociationResource extends StripeResource {
    find(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/tax/associations/find',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Associations.js.map