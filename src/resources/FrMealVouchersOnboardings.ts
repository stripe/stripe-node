// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {MetadataParam, PaginationParams, Metadata} from '../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../lib.js';
const stripeMethod = StripeResource.method;

export class FrMealVouchersOnboardingResource extends StripeResource {
  /**
   * Lists French Meal Vouchers Onboarding objects. The objects are returned in sorted order, with the most recently created objects appearing first.
   */
  list(
    params?: FrMealVouchersOnboardingListParams,
    options?: RequestOptions
  ): ApiListPromise<FrMealVouchersOnboarding>;
  list(options?: RequestOptions): ApiListPromise<FrMealVouchersOnboarding>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/fr_meal_vouchers_onboardings',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates a French Meal Vouchers Onboarding object that represents a restaurant's onboarding status and starts the onboarding process.
   */
  create(
    params: FrMealVouchersOnboardingCreateParams,
    options?: RequestOptions
  ): Promise<Response<FrMealVouchersOnboarding>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/fr_meal_vouchers_onboardings',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of a previously created French Meal Vouchers Onboarding object.
   *
   * Supply the unique French Meal Vouchers Onboarding ID that was returned from your previous request,
   * and Stripe returns the corresponding onboarding information.
   */
  retrieve(
    id: string,
    params?: FrMealVouchersOnboardingRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<FrMealVouchersOnboarding>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<FrMealVouchersOnboarding>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/fr_meal_vouchers_onboardings/{id}',
    }).call(this, ...args);
  }

  /**
   * Updates the details of a restaurant's French Meal Vouchers Onboarding object by
   * setting the values of the parameters passed. Any parameters not provided are left unchanged.
   * After you update the object, the onboarding process automatically restarts.
   *
   * You can only update French Meal Vouchers Onboarding objects with the postal_code field requirement in past_due.
   */
  update(
    id: string,
    params: FrMealVouchersOnboardingUpdateParams,
    options?: RequestOptions
  ): Promise<Response<FrMealVouchersOnboarding>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/fr_meal_vouchers_onboardings/{id}',
    }).call(this, ...args);
  }
}
export interface FrMealVouchersOnboarding {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'fr_meal_vouchers_onboarding';

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * Name of the restaurant.
   */
  name: string;

  /**
   * Postal code of the restaurant.
   */
  postal_code: string;

  /**
   * This represents the onboarding state of the restaurant on different providers.
   */
  providers: FrMealVouchersOnboarding.Providers;

  /**
   * SIRET number associated with the restaurant.
   */
  siret: string;
}
export namespace FrMealVouchersOnboarding {
  export interface Providers {
    /**
     * This represents the onboarding state of the restaurant on Conecs.
     */
    conecs: Providers.Conecs;
  }

  export namespace Providers {
    export interface Conecs {
      /**
       * This represents information which issuers are available to this restaurant via Conecs
       */
      issuers: Conecs.Issuers;

      /**
       * This represents information about outstanding requirements for this restaurant to onboard to Conecs
       */
      requirements: Conecs.Requirements;

      /**
       * Status of the restaurant's onboarding to Conecs
       */
      status: Conecs.Status;
    }

    export namespace Conecs {
      export interface Issuers {
        /**
         * Issuers are available to this restaurant via Conecs, will be blank if the onboarding to Conecs is not complete or unsuccessful
         */
        available: Array<Issuers.Available>;
      }

      export interface Requirements {
        /**
         * Information any errors that are preventing the onboarding to Conecs from being completed.
         */
        errors: Array<Requirements.Error>;

        /**
         * Fields that need to be provided to complete the onboarding to Conecs.
         */
        past_due: Array<Requirements.PastDue>;
      }

      export type Status =
        | 'action_required'
        | 'active'
        | 'disentitled'
        | 'pending';

      export namespace Issuers {
        export type Available = 'bimpli' | 'edenred' | 'pluxee' | 'up';
      }

      export namespace Requirements {
        export interface Error {
          /**
           * The code for the type of error.
           */
          code: Error.Code;

          /**
           * An informative message that provides additional details about the error.
           */
          message: string;

          /**
           * The specific onboarding requirement field (in the requirements hash) that needs to be resolved.
           */
          requirement: Error.Requirement | null;
        }

        export type PastDue = 'postal_code' | 'siret';

        export namespace Error {
          export type Code = 'postal_code_invalid' | 'siret_invalid';

          export type Requirement = 'postal_code' | 'siret';
        }
      }
    }
  }
}
export interface FrMealVouchersOnboardingCreateParams {
  /**
   * Name of the restaurant. This cannot be changed after creation of this object.
   */
  name: string;

  /**
   * Postal code of the restaurant.
   */
  postal_code: string;

  /**
   * SIRET number associated with the restaurant. This cannot be changed after creation of this object.
   */
  siret: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. This cannot be changed after creation of this object.
   */
  metadata?: MetadataParam;
}
export interface FrMealVouchersOnboardingRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface FrMealVouchersOnboardingUpdateParams {
  /**
   * Corrected Postal code of the restaurant.
   */
  postal_code: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface FrMealVouchersOnboardingListParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
