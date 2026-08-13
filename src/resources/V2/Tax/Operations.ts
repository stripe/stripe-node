// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OperationsResolveAddressResult} from './OperationsResolveAddressResults.js';
import {Address} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';

export class OperationResource extends StripeResource {
  /**
   * Resolves an address to its tax precision level.
   */
  resolveAddress(
    params: V2.Tax.OperationResolveAddressParams,
    options?: RequestOptions
  ): Promise<Response<OperationsResolveAddressResult>> {
    return this._makeRequest(
      'POST',
      '/v2/tax/operations/resolve_address',
      params,
      options
    ) as any;
  }
}
export namespace V2 {
  export namespace Tax {
    export interface OperationResolveAddressParams {
      /**
       * The address to resolve.
       */
      address: OperationResolveAddressParams.Address;
    }

    export namespace OperationResolveAddressParams {
      export interface Address {
        /**
         * The city.
         */
        city?: string;

        /**
         * The two-letter country code.
         */
        country: string;

        /**
         * The first line of the street address.
         */
        line1?: string;

        /**
         * The postal code.
         */
        postal_code?: string;

        /**
         * The state or province.
         */
        state?: string;
      }
    }
  }
}
