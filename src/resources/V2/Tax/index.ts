// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  IntegrationConfiguration,
  IntegrationConfigurationResource,
} from './IntegrationConfigurations.js';
import {
  V2 as V2Namespace1,
  ManualRule,
  ManualRuleResource,
} from './ManualRules.js';
import {V2 as V2Namespace2, OperationResource} from './Operations.js';
import {OperationsResolveAddressResult} from './OperationsResolveAddressResults.js';

export {IntegrationConfiguration} from './IntegrationConfigurations.js';
export {ManualRule} from './ManualRules.js';
export {OperationsResolveAddressResult} from './OperationsResolveAddressResults.js';

export class Tax {
  integrationConfigurations: IntegrationConfigurationResource;
  manualRules: ManualRuleResource;
  operations: OperationResource;

  constructor(private readonly stripe: Stripe) {
    this.integrationConfigurations = new IntegrationConfigurationResource(
      stripe
    );
    this.manualRules = new ManualRuleResource(stripe);
    this.operations = new OperationResource(stripe);
  }
}

export declare namespace Tax {
  export import IntegrationConfigurationRetrieveParams = V2Namespace0.Tax.IntegrationConfigurationRetrieveParams;
  export import IntegrationConfigurationUpdateParams = V2Namespace0.Tax.IntegrationConfigurationUpdateParams;
  export {IntegrationConfiguration, IntegrationConfigurationResource};
  export import ManualRuleListParams = V2Namespace1.Tax.ManualRuleListParams;
  export import ManualRuleCreateParams = V2Namespace1.Tax.ManualRuleCreateParams;
  export import ManualRuleRetrieveParams = V2Namespace1.Tax.ManualRuleRetrieveParams;
  export import ManualRuleUpdateParams = V2Namespace1.Tax.ManualRuleUpdateParams;
  export import ManualRuleDeactivateParams = V2Namespace1.Tax.ManualRuleDeactivateParams;
  export {ManualRule, ManualRuleResource};
  export {OperationsResolveAddressResult};
}
