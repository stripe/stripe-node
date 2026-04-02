// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {BillSettingVersion} from './../../../V2/Billing/BillSettingVersions.js';
import {RequestOptions, ApiListPromise, Response} from '../../../../lib.js';

export class VersionResource extends StripeResource {
  /**
   * List all BillSettingVersions by BillSetting ID.
   */
  list(
    id: string,
    params?: V2.Billing.BillSettings.VersionListParams,
    options?: RequestOptions
  ): ApiListPromise<BillSettingVersion> {
    return this._makeRequest(
      'GET',
      `/v2/billing/bill_settings/${id}/versions`,
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieve a BillSettingVersion by ID.
   */
  retrieve(
    billSettingId: string,
    id: string,
    params?: V2.Billing.BillSettings.VersionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<BillSettingVersion>> {
    return this._makeRequest(
      'GET',
      `/v2/billing/bill_settings/${billSettingId}/versions/${id}`,
      params,
      options
    ) as any;
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace BillSettings {
      export interface VersionRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace BillSettings {
      export interface VersionListParams {
        /**
         * Optionally set the maximum number of results per page. Defaults to 20.
         */
        limit?: number;
      }
    }
  }
}
