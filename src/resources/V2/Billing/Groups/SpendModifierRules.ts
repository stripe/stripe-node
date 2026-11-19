// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {GroupSpendModifier} from './../../../V2/Billing/GroupSpendModifiers.js';
import {RequestOptions, V2ListPromise, Response} from '../../../../lib.js';

export class SpendModifierRuleResource extends StripeResource {
  /**
   * List spend modifiers associated with a billing group.
   */
  list(
    groupId: string,
    params?: V2.Billing.Groups.SpendModifierRuleListParams,
    options?: RequestOptions
  ): V2ListPromise<GroupSpendModifier> {
    return this._makeRequest(
      'GET',
      `/v2/billing/groups/${encodeURIComponent(groupId)}/spend_modifier_rules`,
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieve a spend modifier associated with a billing group.
   */
  retrieve(
    groupId: string,
    id: string,
    params?: V2.Billing.Groups.SpendModifierRuleRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<GroupSpendModifier>> {
    return this._makeRequest(
      'GET',
      `/v2/billing/groups/${encodeURIComponent(
        groupId
      )}/spend_modifier_rules/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace Groups {
      export interface SpendModifierRuleRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace Groups {
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
