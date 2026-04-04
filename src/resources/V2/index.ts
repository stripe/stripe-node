// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {DeletedObject} from './DeletedObject.js';
import {Billing} from './Billing/index.js';
import {Core} from './Core/index.js';
import {Ref, RefWireShape} from './Ref.js';

export {attachRefFetch} from './Ref.js';

export class V2 {
  billing: Billing;
  core: Core;

  constructor(private readonly stripe: Stripe) {
    this.billing = new Billing(stripe);
    this.core = new Core(stripe);
  }
}

export declare namespace V2 {
  export {DeletedObject};
  export {Billing};
  export {Core};
  export {Ref, RefWireShape};
}
