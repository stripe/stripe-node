// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {PaymentAttempt, PaymentAttemptResource} from './PaymentAttempts.js';

export {PaymentAttempt} from './PaymentAttempts.js';

export class Orchestration {
  paymentAttempts: PaymentAttemptResource;

  constructor(private readonly stripe: Stripe) {
    this.paymentAttempts = new PaymentAttemptResource(stripe);
  }
}

export declare namespace Orchestration {
  export {PaymentAttempt};
}
