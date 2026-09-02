// File generated from our OpenAPI spec

import {Address, OtherString} from '../../../shared.js';
import {RequestOptions} from '../../../lib.js';
export interface OperationsResolveAddressResult {
  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.tax.operations_resolve_address_result';

  /**
   * The normalized form of the input address.
   */
  address: OperationsResolveAddressResult.Address;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The precision level of the resolved address.
   */
  precision: OperationsResolveAddressResult.Precision;

  /**
   * Details about the precision, including any issues.
   */
  precision_details: OperationsResolveAddressResult.PrecisionDetails;
}
export namespace OperationsResolveAddressResult {
  export interface Address {
    /**
     * The city.
     */
    city?: string;

    /**
     * The two-letter country code.
     */
    country?: string;

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

  export type Precision =
    | 'none'
    | 'address'
    | 'city'
    | 'country'
    | 'postal_code'
    | 'state'
    | 'street';

  export interface PrecisionDetails {
    /**
     * Issues preventing higher precision.
     */
    issues: Array<PrecisionDetails.Issue>;
  }

  export namespace PrecisionDetails {
    export interface Issue {
      /**
       * A code describing the issue.
       */
      code: Issue.Code;

      /**
       * The address field with the issue.
       */
      field: Issue.Field;
    }

    export namespace Issue {
      export type Code = 'required_for_improved_precision' | OtherString;

      export type Field =
        | 'city'
        | 'country'
        | 'line1'
        | 'postal_code'
        | 'state';
    }
  }
}
