// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {ManualRule, ManualRuleResource} from './ManualRules.js';

export {ManualRule} from './ManualRules.js';

export class Tax {
  manualRules: ManualRuleResource;

  constructor(private readonly stripe: Stripe) {
    this.manualRules = new ManualRuleResource(stripe);
  }
}

export declare namespace Tax {
  export {ManualRule};
}
