// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {Request, RequestResource} from './Requests.js';

export {Request} from './Requests.js';

export class Forwarding {
  requests: RequestResource;

  constructor(private readonly stripe: Stripe) {
    this.requests = new RequestResource(stripe);
  }
}

export declare namespace Forwarding {
  export {Request};
}
