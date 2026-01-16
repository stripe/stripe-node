// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class CardResource extends StripeResource {
    deliverCard(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/deliver',
        }).call(this, ...args);
    }
    failCard(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/fail',
        }).call(this, ...args);
    }
    returnCard(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/return',
        }).call(this, ...args);
    }
    shipCard(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/ship',
        }).call(this, ...args);
    }
    submitCard(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/submit',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Cards.js.map