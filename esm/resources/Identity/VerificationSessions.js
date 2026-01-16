// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class VerificationSessionResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/identity/verification_sessions',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/identity/verification_sessions',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/identity/verification_sessions/{session}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/identity/verification_sessions/{session}',
        }).call(this, ...args);
    }
    cancel(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/identity/verification_sessions/{session}/cancel',
        }).call(this, ...args);
    }
    redact(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/identity/verification_sessions/{session}/redact',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=VerificationSessions.js.map