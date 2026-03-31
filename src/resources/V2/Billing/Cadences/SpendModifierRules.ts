// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {CadenceSpendModifier} from './../../../V2/Billing/CadenceSpendModifiers.js';
import {RequestOptions, ApiListPromise, Response} from '../../../../lib.js';
const stripeMethod = StripeResource.method;

export class SpendModifierRuleResource extends StripeResource {
  /**
   * List all Spend Modifiers associated with a Billing Cadence.
   */
  list(
    id: string,
    params?: V2.Billing.Cadences.SpendModifierRuleListParams,
    options?: RequestOptions
  ): ApiListPromise<CadenceSpendModifier>;
  list(
    id: string,
    options?: RequestOptions
  ): ApiListPromise<CadenceSpendModifier>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/cadences/{cadence_id}/spend_modifier_rules',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieve a Spend Modifier associated with a Billing Cadence.
   */
  retrieve(
    cadenceId: string,
    id: string,
    params?: V2.Billing.Cadences.SpendModifierRuleRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<CadenceSpendModifier>>;
  retrieve(
    cadenceId: string,
    id: string,
    options?: RequestOptions
  ): Promise<Response<CadenceSpendModifier>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/cadences/{cadence_id}/spend_modifier_rules/{id}',
    }).call(this, ...args);
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace Cadences {
      export interface SpendModifierRuleRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace Cadences {
      export interface SpendModifierRuleListParams {
        /**
         * Return only spend modifiers that are effective at the specified timestamp.
         */
        effective_at?: string;

        /**
         * Optionally set the maximum number of results per page. Defaults to 20.
         */
        limit?: number;
      }
    }
  }
}
