// File generated from our OpenAPI spec

import * as WebhookEndpointParams from '../params/WebhookEndpointParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const WebhookEndpointResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/webhook_endpoints'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/webhook_endpoints/{webhook_endpoint}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/webhook_endpoints/{webhook_endpoint}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/webhook_endpoints',
    methodType: 'list',
  }),
  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/webhook_endpoints/{webhook_endpoint}',
  }),
});
export class WebhookEndpoint {}
