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
  export import RequestListParams = ForwardingNamespace0.RequestListParams;
  export import RequestCreateParams = ForwardingNamespace0.RequestCreateParams;
  export import RequestRetrieveParams = ForwardingNamespace0.RequestRetrieveParams;
  export {Request};
}
