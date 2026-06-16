// File generated from our OpenAPI spec

import {StripeResource} from '../../../../../StripeResource.js';
import {ContractLicensePricingQuantityChange} from './../../../../V2/Billing/ContractLicensePricingQuantityChanges.js';
import {RequestOptions, V2ListPromise, Response} from '../../../../../lib.js';

export class QuantityChangeResource extends StripeResource {
  /**
   * List license quantity changes for a contract given a license pricing ID.
   */
  listQuantityChanges(
    contractId: string,
    licensePricingId: string,
    params?: V2.Billing.Contracts.LicensePricing.QuantityChangeListQuantityChangesParams,
    options?: RequestOptions
  ): V2ListPromise<ContractLicensePricingQuantityChange> {
    return this._makeRequest(
      'GET',
      `/v2/billing/contracts/${encodeURIComponent(
        contractId
      )}/license_pricing/${encodeURIComponent(
        licensePricingId
      )}/quantity_changes`,
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace Contracts {
      export namespace LicensePricing {
        export interface QuantityChangeListQuantityChangesParams {
          /**
           * The limit for the number of results per page.
           */
          limit?: number;
        }
      }
    }
  }
}
