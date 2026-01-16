// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class SetupIntentResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/setup_intents',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/setup_intents',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/setup_intents/{intent}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/setup_intents/{intent}',
        }).call(this, ...args);
    }
    cancel(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/setup_intents/{intent}/cancel',
        }).call(this, ...args);
    }
    confirm(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/setup_intents/{intent}/confirm',
        }).call(this, ...args);
    }
    verifyMicrodeposits(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/setup_intents/{intent}/verify_microdeposits',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=SetupIntents.js.map