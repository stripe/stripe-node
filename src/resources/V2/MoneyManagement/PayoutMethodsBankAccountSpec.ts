// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, Response} from '../../../lib.js';

export class PayoutMethodsBankAccountSpecResource extends StripeResource {
  /**
   * Fetch the specifications for a set of countries to know which
   * credential fields are required, the validations for each fields, and how to translate these
   * country-specific fields to the generic fields in the PayoutMethodBankAccount type.
   */
  retrieve(
    params?: V2.MoneyManagement.PayoutMethodsBankAccountSpecRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<PayoutMethodsBankAccountSpec>> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/payout_methods_bank_account_spec',
      params,
      options
    ) as any;
  }
}
export interface PayoutMethodsBankAccountSpec {
  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.payout_methods_bank_account_spec';

  /**
   * The list of specs by country.
   */
  countries: {
    [key: string]: V2.MoneyManagement.PayoutMethodsBankAccountSpec.Countries;
  };

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace PayoutMethodsBankAccountSpec {
      export interface Countries {
        /**
         * The list of fields for a country, along with associated information.
         */
        fields: Array<Countries.Field>;
      }

      export namespace Countries {
        export interface Field {
          /**
           * The currencies supported by the corresponding credentials for bank accounts in the specified country.
           */
          currencies?: Array<string>;

          /**
           * The local name of the field.
           */
          local_name: string;

          /**
           * The human readable local name of the field.
           */
          local_name_human: Field.LocalNameHuman;

          /**
           * The maximum length of the field.
           */
          max_length: number;

          /**
           * THe minimum length of the field.
           */
          min_length: number;

          /**
           * The placeholder value of the field.
           */
          placeholder: string;

          /**
           * The stripe name of the field.
           */
          stripe_name: string;

          /**
           * The validation regex of the field.
           */
          validation_regex: string;
        }

        export namespace Field {
          export interface LocalNameHuman {
            /**
             * The default content of the localizable string.
             */
            content: string;

            /**
             * A unique key representing the instance of this localizable string.
             */
            localization_key: string;
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface PayoutMethodsBankAccountSpecRetrieveParams {
      /**
       * The countries to fetch the bank account spec for.
       */
      countries?: Array<string>;
    }
  }
}
