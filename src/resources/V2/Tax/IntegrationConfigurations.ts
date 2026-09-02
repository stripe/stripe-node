// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, Response} from '../../../lib.js';

export class IntegrationConfigurationResource extends StripeResource {
  /**
   * Retrieve the tax integration configuration for this account.
   */
  retrieve(
    params?: V2.Tax.IntegrationConfigurationRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<IntegrationConfiguration>> {
    return this._makeRequest(
      'GET',
      '/v2/tax/integration_configurations',
      params,
      options
    ) as any;
  }
  /**
   * Update the tax integration configuration for this account.
   */
  update(
    params?: V2.Tax.IntegrationConfigurationUpdateParams,
    options?: RequestOptions
  ): Promise<Response<IntegrationConfiguration>> {
    return this._makeRequest(
      'POST',
      '/v2/tax/integration_configurations',
      params,
      options
    ) as any;
  }
}
export interface IntegrationConfiguration {
  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.tax.integration_configuration';

  /**
   * Configuration for Checkout Sessions automatic tax behavior.
   */
  checkout_sessions: IntegrationConfiguration.CheckoutSessions;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
}
export namespace IntegrationConfiguration {
  export interface CheckoutSessions {
    /**
     * Controls the default value of automatic_tax[enabled] on new Checkout Sessions.
     */
    automatic_tax_default_value: CheckoutSessions.AutomaticTaxDefaultValue;
  }

  export namespace CheckoutSessions {
    export type AutomaticTaxDefaultValue = 'disabled' | 'enabled_when_possible';
  }
}
export namespace V2 {
  export namespace Tax {
    export interface IntegrationConfigurationRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Tax {
    export interface IntegrationConfigurationUpdateParams {
      /**
       * Configuration for Checkout Sessions automatic tax behavior.
       */
      checkout_sessions?: IntegrationConfigurationUpdateParams.CheckoutSessions;
    }

    export namespace IntegrationConfigurationUpdateParams {
      export interface CheckoutSessions {
        /**
         * Controls the default value of automatic_tax[enabled] on new Checkout Sessions.
         */
        automatic_tax_default_value: CheckoutSessions.AutomaticTaxDefaultValue;
      }

      export namespace CheckoutSessions {
        export type AutomaticTaxDefaultValue =
          | 'disabled'
          | 'enabled_when_possible';
      }
    }
  }
}
