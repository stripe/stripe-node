// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {LicenseFeeVersion} from './../../../V2/Billing/LicenseFeeVersions.js';
import {RequestOptions, ApiListPromise, Response} from '../../../../lib.js';
const stripeMethod = StripeResource.method;

export class VersionResource extends StripeResource {
  /**
   * List all versions of a License Fee object.
   */
  list(
    id: string,
    params?: V2.Billing.LicenseFees.VersionListParams,
    options?: RequestOptions
  ): ApiListPromise<LicenseFeeVersion>;
  list(id: string, options?: RequestOptions): ApiListPromise<LicenseFeeVersion>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/license_fees/{license_fee_id}/versions',
      methodType: 'list',
      responseSchema: {
        kind: 'object',
        fields: {
          data: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                tiers: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {up_to_decimal: {kind: 'decimal_string'}},
                  },
                },
                transform_quantity: {
                  kind: 'object',
                  fields: {divide_by: {kind: 'int64_string'}},
                },
              },
            },
          },
        },
      },
    }).call(this, ...args);
  }

  /**
   * Retrieve a License Fee Version object.
   */
  retrieve(
    licenseFeeId: string,
    id: string,
    params?: V2.Billing.LicenseFees.VersionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<LicenseFeeVersion>>;
  retrieve(
    licenseFeeId: string,
    id: string,
    options?: RequestOptions
  ): Promise<Response<LicenseFeeVersion>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/license_fees/{license_fee_id}/versions/{id}',
      responseSchema: {
        kind: 'object',
        fields: {
          tiers: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {up_to_decimal: {kind: 'decimal_string'}},
            },
          },
          transform_quantity: {
            kind: 'object',
            fields: {divide_by: {kind: 'int64_string'}},
          },
        },
      },
    }).call(this, ...args);
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace LicenseFees {
      export interface VersionRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace LicenseFees {
      export interface VersionListParams {
        /**
         * Optionally set the maximum number of results per page. Defaults to 20.
         */
        limit?: number;
      }
    }
  }
}
