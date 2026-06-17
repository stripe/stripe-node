// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {AddressParam, Emptyable, PaginationParams, Address} from '../shared.js';
import {RequestOptions, Response, ApiListPromise} from '../lib.js';

export class PaymentLocationResource extends StripeResource {
  /**
   * Delete a Payment Location.
   */
  del(
    id: string,
    params?: PaymentLocationDeleteParams,
    options?: RequestOptions
  ): Promise<Response<DeletedPaymentLocation>> {
    return this._makeRequest(
      'DELETE',
      `/v1/payment_locations/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Retrieve a Payment Location.
   */
  retrieve(
    id: string,
    params?: PaymentLocationRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<PaymentLocation>> {
    return this._makeRequest(
      'GET',
      `/v1/payment_locations/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Update a Payment Location.
   */
  update(
    id: string,
    params?: PaymentLocationUpdateParams,
    options?: RequestOptions
  ): Promise<Response<PaymentLocation>> {
    return this._makeRequest(
      'POST',
      `/v1/payment_locations/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * List all Payment Locations.
   */
  list(
    params?: PaymentLocationListParams,
    options?: RequestOptions
  ): ApiListPromise<PaymentLocation> {
    return this._makeRequest('GET', '/v1/payment_locations', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Create a Payment Location.
   */
  create(
    params: PaymentLocationCreateParams,
    options?: RequestOptions
  ): Promise<Response<PaymentLocation>> {
    return this._makeRequest(
      'POST',
      '/v1/payment_locations',
      params,
      options
    ) as any;
  }
}
export interface PaymentLocation {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'payment_location';

  address: Address;

  /**
   * Identification numbers associated with the location.
   */
  business_registration: PaymentLocation.BusinessRegistration | null;

  /**
   * The capability settings for the location. Only applicable for locations with requested payment location capabilities.
   */
  capability_settings: PaymentLocation.CapabilitySettings | null;

  /**
   * Always true for a deleted object
   */
  deleted?: void;

  /**
   * The display name of the location.
   */
  display_name: string;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;
}
export interface DeletedPaymentLocation {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'payment_location';

  /**
   * Always true for a deleted object
   */
  deleted: true;
}
export namespace PaymentLocation {
  export interface BusinessRegistration {
    /**
     * 14-digit SIRET (Système d'identification du répertoire des établissements) number for the location.
     */
    siret: string | null;
  }

  export interface CapabilitySettings {
    /**
     * Settings for Conecs French meal voucher capability.
     */
    fr_meal_vouchers_conecs_payments: CapabilitySettings.FrMealVouchersConecsPayments | null;
  }

  export namespace CapabilitySettings {
    export interface FrMealVouchersConecsPayments {
      /**
       * Supported meal voucher issuers.
       */
      supported_issuers: FrMealVouchersConecsPayments.SupportedIssuers | null;
    }

    export namespace FrMealVouchersConecsPayments {
      export interface SupportedIssuers {
        /**
         * Supported meal voucher issuers for card payments.
         */
        card: Array<SupportedIssuers.Card> | null;

        /**
         * Supported meal voucher issuers for card present payments.
         */
        card_present: Array<SupportedIssuers.CardPresent> | null;
      }

      export namespace SupportedIssuers {
        export type Card = 'bimpli' | 'edenred' | 'pluxee' | 'up';

        export type CardPresent = 'bimpli' | 'edenred' | 'pluxee' | 'up';
      }
    }
  }
}
export interface PaymentLocationCreateParams {
  /**
   * The full address of the location.
   */
  address: AddressParam;

  /**
   * A name for the location.
   */
  display_name: string;

  /**
   * Identification numbers associated with the location.
   */
  business_registration?: PaymentLocationCreateParams.BusinessRegistration;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export namespace PaymentLocationCreateParams {
  export interface BusinessRegistration {
    /**
     * 14-digit SIRET (Système d'identification du répertoire des établissements) number for the location.
     */
    siret?: string;
  }
}
export interface PaymentLocationRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface PaymentLocationUpdateParams {
  /**
   * The full address of the location.
   */
  address?: AddressParam;

  /**
   * Identification numbers associated with the location.
   */
  business_registration?: PaymentLocationUpdateParams.BusinessRegistration;

  /**
   * A name for the location.
   */
  display_name?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Pass true when updating location fields that trigger onboarding review for any of the location's active location capabilities. If this parameter isn't set to true, updates that would trigger onboarding review fail. Only applicable for locations with active location capabilities.
   */
  onboarding_data_update_acknowledged?: boolean;
}
export namespace PaymentLocationUpdateParams {
  export interface BusinessRegistration {
    /**
     * 14-digit SIRET (Système d'identification du répertoire des établissements) number for the location.
     */
    siret?: Emptyable<string>;
  }
}
export interface PaymentLocationListParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface PaymentLocationDeleteParams {}
