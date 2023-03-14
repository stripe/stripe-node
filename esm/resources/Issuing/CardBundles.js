// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CardBundles = StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/card_bundles/{card_bundle}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/card_bundles',
        methodType: 'list',
    }),
});
