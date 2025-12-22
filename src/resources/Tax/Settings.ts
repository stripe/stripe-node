// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../lib.js';
import {AddressParam, Address} from '../../shared.js';
import {Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class SettingResource extends StripeResource {
  /**
   * Retrieves Tax Settings for a merchant.
   */
  retrieve(
    params?: Tax.SettingsRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Settings>>;
  retrieve(options?: RequestOptions): Promise<Response<Settings>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/tax/settings',
    }).call(this, ...args);
  }

  /**
   * Updates Tax Settings parameters used in tax calculations. All parameters are editable but none can be removed once set.
   */
  update(
    params?: Tax.SettingsUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Settings>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/tax/settings',
    }).call(this, ...args);
  }
}
export interface Settings {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'tax.settings';

  defaults: Tax.Settings.Defaults;

  /**
   * The place where your business is located.
   */
  head_office: Tax.Settings.HeadOffice | null;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The status of the Tax `Settings`.
   */
  status: Tax.Settings.Status;

  status_details: Tax.Settings.StatusDetails;
}
export namespace Tax {
  export namespace Settings {
    export interface Defaults {
      /**
       * The tax calculation provider this account uses. Defaults to `stripe` when not using a [third-party provider](https://docs.stripe.com/tax/third-party-apps).
       */
      provider: Defaults.Provider;

      /**
       * Default [tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#tax-behavior) used to specify whether the price is considered inclusive of taxes or exclusive of taxes. If the item's price has a tax behavior set, it will take precedence over the default tax behavior.
       */
      tax_behavior: Defaults.TaxBehavior | null;

      /**
       * Default [tax code](https://stripe.com/docs/tax/tax-categories) used to classify your products and prices.
       */
      tax_code: string | null;
    }

    export interface HeadOffice {
      address: Address;
    }

    export type Status = 'active' | 'pending';

    export interface StatusDetails {
      active?: StatusDetails.Active;

      pending?: StatusDetails.Pending;
    }

    export namespace Defaults {
      export type Provider = 'anrok' | 'avalara' | 'sphere' | 'stripe';

      export type TaxBehavior =
        | 'exclusive'
        | 'inclusive'
        | 'inferred_by_currency';
    }

    export namespace StatusDetails {
      export interface Active {}

      export interface Pending {
        /**
         * The list of missing fields that are required to perform calculations. It includes the entry `head_office` when the status is `pending`. It is recommended to set the optional values even if they aren't listed as required for calculating taxes. Calculations can fail if missing fields aren't explicitly provided on every call.
         */
        missing_fields: Array<string> | null;
      }
    }
  }
}
export namespace Tax {
  export interface SettingsRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Tax {
  export interface SettingsUpdateParams {
    /**
     * Default configuration to be used on Stripe Tax calculations.
     */
    defaults?: SettingsUpdateParams.Defaults;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The place where your business is located.
     */
    head_office?: SettingsUpdateParams.HeadOffice;
  }

  export namespace SettingsUpdateParams {
    export interface Defaults {
      /**
       * Specifies the default [tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#tax-behavior) to be used when the item's price has unspecified tax behavior. One of inclusive, exclusive, or inferred_by_currency. Once specified, it cannot be changed back to null.
       */
      tax_behavior?: Defaults.TaxBehavior;

      /**
       * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
       */
      tax_code?: string;
    }

    export interface HeadOffice {
      /**
       * The location of the business for tax purposes.
       */
      address: AddressParam;
    }

    export namespace Defaults {
      export type TaxBehavior =
        | 'exclusive'
        | 'inclusive'
        | 'inferred_by_currency';
    }
  }
}
