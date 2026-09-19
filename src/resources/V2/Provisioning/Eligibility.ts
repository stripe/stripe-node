// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, Response} from '../../../lib.js';

export class EligibilityResource extends StripeResource {
  /**
   * Checks whether a project is eligible to provision resources with a provider, including
   * any outstanding KYC requirements that must be satisfied first.
   */
  retrieve(
    params?: V2.Provisioning.EligibilityRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Eligibility>> {
    return this._makeRequest(
      'GET',
      '/v2/provisioning/eligibility',
      params,
      options
    ) as any;
  }
}
export interface Eligibility {
  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.provisioning.eligibility';

  /**
   * Whether the project is eligible to provision resources with the provider.
   */
  is_eligible: boolean;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Outstanding requirements that must be satisfied before the project is eligible, if any.
   */
  requirements: Array<string>;
}
export namespace V2 {
  export namespace Provisioning {
    export interface EligibilityRetrieveParams {}
  }
}
