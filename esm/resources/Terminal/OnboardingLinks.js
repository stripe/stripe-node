// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class OnboardingLinkResource extends StripeResource {
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/terminal/onboarding_links',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=OnboardingLinks.js.map