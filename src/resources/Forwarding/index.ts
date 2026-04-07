// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Forwarding as ForwardingNamespace0,
  Request,
  RequestResource,
} from './Requests.js';

export {Request} from './Requests.js';

export class Forwarding {
  requests: RequestResource;

  constructor(private readonly stripe: Stripe) {
    this.requests = new RequestResource(stripe);
  }
}

export declare namespace Forwarding {
  export type RequestListParams = ForwardingNamespace0.RequestListParams;
  export type RequestCreateParams = ForwardingNamespace0.RequestCreateParams;
  export type RequestRetrieveParams = ForwardingNamespace0.RequestRetrieveParams;
  export {Request};
}
