// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {DeletedObject} from './DeletedObject.js';
import {Billing} from './Billing/index.js';
import {Commerce} from './Commerce/index.js';
import {Core} from './Core/index.js';

export {DeletedObject} from './DeletedObject.js';

export class V2 {
  billing: Billing;
  commerce: Commerce;
  core: Core;

  constructor(private readonly stripe: Stripe) {
    this.billing = new Billing(stripe);
    this.commerce = new Commerce(stripe);
    this.core = new Core(stripe);
  }
}

export declare namespace V2 {
  export {DeletedObject};
  export {Billing};
  export {Commerce};
  export {Core};
}
