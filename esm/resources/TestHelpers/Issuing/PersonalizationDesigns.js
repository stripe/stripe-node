// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class PersonalizationDesignResource extends StripeResource {
    activate(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate',
        }).call(this, ...args);
    }
    deactivate(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate',
        }).call(this, ...args);
    }
    reject(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject',
        }).call(this, ...args);
    }
}
