// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class CardholderResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/issuing/cardholders',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/issuing/cardholders',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/issuing/cardholders/{cardholder}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/issuing/cardholders/{cardholder}',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Cardholders.js.map