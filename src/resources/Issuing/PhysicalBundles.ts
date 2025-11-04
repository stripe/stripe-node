// File generated from our OpenAPI spec

import * as PhysicalBundleParams from '../params/PhysicalBundleParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PhysicalBundleResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/physical_bundles/{physical_bundle}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/physical_bundles',
    methodType: 'list',
  }),
});
export class PhysicalBundle {}
