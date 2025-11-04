// File generated from our OpenAPI spec

import * as MandateParams from '../params/MandateParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const MandateResource = StripeResource.extend({
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/mandates/{mandate}'}),
});
export class Mandate {}
