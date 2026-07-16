// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {OtherString} from '../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../lib.js';

export class PaymentLocationCapabilityResource extends StripeResource {
  /**
   * List all payment location capabilities associated with the payment location.
   */
  list(
    params: PaymentLocationCapabilityListParams,
    options?: RequestOptions
  ): ApiListPromise<PaymentLocationCapability> {
    return this._makeRequest(
      'GET',
      '/v1/payment_location_capabilities',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves a payment_location capability
   */
  retrieve(
    id: string,
    params: PaymentLocationCapabilityRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<PaymentLocationCapability>> {
    return this._makeRequest(
      'GET',
      `/v1/payment_location_capabilities/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates a payment_location capability. Request or remove a payment_location capability by updating its requested parameter.
   */
  update(
    id: string,
    params: PaymentLocationCapabilityUpdateParams,
    options?: RequestOptions
  ): Promise<Response<PaymentLocationCapability>> {
    return this._makeRequest(
      'POST',
      `/v1/payment_location_capabilities/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface PaymentLocationCapability {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'payment_location_capability';

  /**
   * The account that the capability enables functionality for.
   */
  account: string;

  /**
   * The identifier for the capability.
   */
  capability: 'fr_meal_vouchers_conecs_payments';

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The payment location that the capability enables functionality for.
   */
  location: string;

  /**
   * Whether the capability has been requested.
   */
  requested: boolean;

  /**
   * Time when the capability was requested. Measured in seconds since the Unix epoch.
   */
  requested_at: number | null;

  requirements: PaymentLocationCapability.Requirements;

  /**
   * The status of the capability.
   */
  status: PaymentLocationCapability.Status;
}
export namespace PaymentLocationCapability {
  export interface Requirements {
    /**
     * Fields that need to be collected to keep the capability enabled.
     */
    currently_due: Array<string>;

    /**
     * Description of why the capability is disabled.
     */
    disabled_reason: Requirements.DisabledReason | null;

    /**
     * Fields that are `currently_due` and need to be collected again because validation or verification failed.
     */
    errors: Array<Requirements.Error>;
  }

  export type Status =
    | 'active'
    | 'inactive'
    | 'pending'
    | 'unrequested'
    | OtherString;

  export namespace Requirements {
    export type DisabledReason =
      | 'account.capability_required'
      | 'pending.onboarding'
      | 'pending.review'
      | 'rejected.other'
      | 'rejected.unsupported_business'
      | 'requirements.fields_needed'
      | OtherString;

    export interface Error {
      /**
       * The code for the type of error.
       */
      code: Error.Code;

      /**
       * An informative message that indicates the error type and provides additional details about the error.
       */
      reason: string;

      /**
       * The specific user onboarding requirement field (in the requirements hash) that needs to be resolved.
       */
      requirement: string;
    }

    export namespace Error {
      export type Code =
        | 'information_missing'
        | 'invalid_value_other'
        | OtherString;
    }
  }
}
export interface PaymentLocationCapabilityRetrieveParams {
  /**
   * The payment location that the capability enables functionality for.
   */
  location: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface PaymentLocationCapabilityUpdateParams {
  /**
   * The location that the capability enables functionality for.
   */
  location: string;

  /**
   * To request a new capability for the location, set this to `true`. You can remove it from the location by passing `false`.
   */
  requested: boolean;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface PaymentLocationCapabilityListParams {
  /**
   * The payment location that the capabilities enable functionality for.
   */
  location: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
