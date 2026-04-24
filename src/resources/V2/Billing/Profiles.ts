// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {MetadataParam, Metadata} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class ProfileResource extends StripeResource {
  /**
   * List Billing Profiles.
   */
  list(
    params: V2.Billing.ProfileListParams,
    options?: RequestOptions
  ): ApiListPromise<Profile> {
    return this._makeRequest('GET', '/v2/billing/profiles', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Create a BillingProfile object.
   */
  create(
    params: V2.Billing.ProfileCreateParams,
    options?: RequestOptions
  ): Promise<Response<Profile>> {
    return this._makeRequest(
      'POST',
      '/v2/billing/profiles',
      params,
      options
    ) as any;
  }
  /**
   * Retrieve a BillingProfile object.
   */
  retrieve(
    id: string,
    params?: V2.Billing.ProfileRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Profile>> {
    return this._makeRequest(
      'GET',
      `/v2/billing/profiles/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Update a BillingProfile object.
   */
  update(
    id: string,
    params?: V2.Billing.ProfileUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Profile>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/profiles/${id}`,
      params,
      options
    ) as any;
  }
}
export interface Profile {
  /**
   * The ID of the billing profile object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.profile';

  /**
   * Timestamp of when the object was created.
   */
  created: string;

  /**
   * The ID of the customer object.
   */
  customer?: string;

  /**
   * The ID of the payment method object.
   */
  default_payment_method?: string;

  /**
   * A customer-facing name for the billing profile.
   * Maximum length of 250 characters.
   */
  display_name?: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * An internal key you can use to search for a particular billing profile.
   * Maximum length of 200 characters.
   */
  lookup_key?: string;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * The current status of the billing profile.
   */
  status: V2.Billing.Profile.Status;
}
export namespace V2 {
  export namespace Billing {
    export namespace Profile {
      export type Status = 'active' | 'inactive';
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface ProfileCreateParams {
      /**
       * The ID of the customer object.
       */
      customer: string;

      /**
       * The ID of the payment method object.
       */
      default_payment_method?: string;

      /**
       * A customer-facing name for the billing profile.
       * Maximum length of 250 characters.
       */
      display_name?: string;

      /**
       * An internal key you can use to search for a particular billing profile. It must be unique among billing profiles for a given customer.
       * Maximum length of 200 characters.
       */
      lookup_key?: string;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface ProfileRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Billing {
    export interface ProfileUpdateParams {
      /**
       * The ID of the payment method object.
       */
      default_payment_method?: string;

      /**
       * A customer-facing name for the billing profile.
       * Maximum length of 250 characters.
       * To remove the display_name from the object, set it to null in the request.
       */
      display_name?: string;

      /**
       * An internal key you can use to search for a particular billing profile. It must be unique among billing profiles for a given customer.
       * Maximum length of 200 characters.
       * To remove the lookup_key from the object, set it to null in the request.
       */
      lookup_key?: string;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface ProfileListParams {
      /**
       * Filter billing profiles by lookup keys. Mutually exclusive
       * with `customer` and `default_payment_method`.
       * You can specify up to 10 lookup_keys.
       */
      lookup_keys: Array<string>;

      /**
       * Filter billing profiles by a customer. Mutually exclusive
       * with `lookup_keys` and `default_payment_method`.
       */
      customer?: string;

      /**
       * Filter billing profiles by a default payment method. Mutually exclusive
       * with `customer` and `lookup_keys`.
       */
      default_payment_method?: string;

      /**
       * Optionally set the maximum number of results per page. Defaults to 10.
       */
      limit?: number;

      /**
       * Filter billing profiles by status. Can be combined
       * with all other filters. If not provided, all billing profiles are returned.
       */
      status?: ProfileListParams.Status;
    }

    export namespace ProfileListParams {
      export type Status = 'active' | 'inactive';
    }
  }
}
