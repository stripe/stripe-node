// File generated from our OpenAPI spec

import * as FileLinkParams from '../params/FileLinkParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const FileLinkResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/file_links'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/file_links/{link}'}),
  update: stripeMethod({method: 'POST', fullPath: '/v1/file_links/{link}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/file_links',
    methodType: 'list',
  }),
});
export class FileLink {}
