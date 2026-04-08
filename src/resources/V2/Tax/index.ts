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
  export type ManualRuleListParams = V2Namespace0.Tax.ManualRuleListParams;
  export type ManualRuleCreateParams = V2Namespace0.Tax.ManualRuleCreateParams;
  export type ManualRuleRetrieveParams = V2Namespace0.Tax.ManualRuleRetrieveParams;
  export type ManualRuleUpdateParams = V2Namespace0.Tax.ManualRuleUpdateParams;
  export type ManualRuleDeactivateParams = V2Namespace0.Tax.ManualRuleDeactivateParams;
  export {ManualRule};
}
