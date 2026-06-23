// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  ManualRule,
  ManualRuleResource,
} from './ManualRules.js';

export {ManualRule} from './ManualRules.js';

export class Tax {
  manualRules: ManualRuleResource;

  constructor(private readonly stripe: Stripe) {
    this.manualRules = new ManualRuleResource(stripe);
  }
}

export declare namespace Tax {
  export import ManualRuleListParams = V2Namespace0.Tax.ManualRuleListParams;
  export import ManualRuleCreateParams = V2Namespace0.Tax.ManualRuleCreateParams;
  export import ManualRuleRetrieveParams = V2Namespace0.Tax.ManualRuleRetrieveParams;
  export import ManualRuleUpdateParams = V2Namespace0.Tax.ManualRuleUpdateParams;
  export import ManualRuleDeactivateParams = V2Namespace0.Tax.ManualRuleDeactivateParams;
  export {ManualRule, ManualRuleResource};
}
