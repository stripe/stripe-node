// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {Address} from '../shared.js';
import {RequestOptions, Response} from '../lib.js';

export class PaymentLocationResource extends StripeResource {
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
   * The capability settings for the location. Only applicable for locations with requested Payment Location Capabilities.
   */
  capability_settings: PaymentLocation.CapabilitySettings | null;

  /**
   * The display name of the location.
   */
  display_name: string;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;
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
  address: PaymentLocationCreateParams.Address;

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
  export interface Address {
    /**
     * City, district, suburb, town, or village.
     */
    city?: string;

    /**
     * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
     */
    country: string;

    /**
     * Address line 1, such as the street, PO Box, or company name.
     */
    line1?: string;

    /**
     * Address line 2, such as the apartment, suite, unit, or building.
     */
    line2?: string;

    /**
     * ZIP or postal code.
     */
    postal_code?: string;

    /**
     * State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
     */
    state?: string;
  }

  export interface BusinessRegistration {
    /**
     * 14-digit SIRET (Système d'identification du répertoire des établissements) number for the location.
     */
    siret?: string;
  }
}
