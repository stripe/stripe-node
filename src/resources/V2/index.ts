// eslint-disable-next-line no-warning-comments
// TODO(prathmesh): Generate this with codegen

import {Stripe} from '../../stripe.core.js';
import {Billing} from './Billing/index.js';
import {Core} from './Core/index.js';

export class V2 {
  billing: Billing;
  core: Core;
  constructor(private readonly stripe: Stripe) {
    this.billing = new Billing(stripe);
    this.core = new Core(stripe);
  }
}

export declare namespace V2 {
  export {Billing};
  export {Core};
}
