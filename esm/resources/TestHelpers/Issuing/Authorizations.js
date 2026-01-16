// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class AuthorizationResource extends StripeResource {
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/authorizations',
        }).call(this, ...args);
    }
    capture(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/capture',
        }).call(this, ...args);
    }
    expire(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/expire',
        }).call(this, ...args);
    }
    finalizeAmount(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount',
        }).call(this, ...args);
    }
    respond(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond',
        }).call(this, ...args);
    }
    increment(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/increment',
        }).call(this, ...args);
    }
    reverse(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/reverse',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Authorizations.js.map