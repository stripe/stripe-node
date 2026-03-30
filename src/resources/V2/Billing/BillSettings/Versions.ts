// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {BillSettingVersion} from './../../../V2/Billing/BillSettingVersions.js';
import {RequestOptions, ApiListPromise, Response} from '../../../../lib.js';
const stripeMethod = StripeResource.method;

export class VersionResource extends StripeResource {
  /**
   * List all BillSettingVersions by BillSetting ID.
   */
  list(
    id: string,
    params?: V2.Billing.BillSettings.VersionListParams,
    options?: RequestOptions
  ): ApiListPromise<BillSettingVersion>;
  list(
    id: string,
    options?: RequestOptions
  ): ApiListPromise<BillSettingVersion>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/bill_settings/{bill_setting_id}/versions',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieve a BillSettingVersion by ID.
   */
  retrieve(
    billSettingId: string,
    id: string,
    params?: V2.Billing.BillSettings.VersionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<BillSettingVersion>>;
  retrieve(
    billSettingId: string,
    id: string,
    options?: RequestOptions
  ): Promise<Response<BillSettingVersion>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/bill_settings/{bill_setting_id}/versions/{id}',
    }).call(this, ...args);
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
