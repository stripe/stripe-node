// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class AuthorizationResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/issuing/authorizations',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/issuing/authorizations/{authorization}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/issuing/authorizations/{authorization}',
        }).call(this, ...args);
    }
    approve(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/issuing/authorizations/{authorization}/approve',
        }).call(this, ...args);
    }
    decline(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/issuing/authorizations/{authorization}/decline',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Authorizations.js.map