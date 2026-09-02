// File generated from our OpenAPI spec

import {RequestOptions} from '../lib.js';
export interface CustomerTaxExemption {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'customer_tax_exemption';

  ca?: CustomerTaxExemption.Ca;

  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country: string;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * ID of the customer this tax exemption belongs to.
   */
  customer: string;

  /**
   * Present and true when the exemption has been deleted.
   */
  deleted?: boolean;

  /**
   * ISO 8601 date (YYYY-MM-DD) when the exemption becomes effective.
   */
  effective_date: string;

  /**
   * ISO 8601 date (YYYY-MM-DD) when the exemption expires.
   */
  expiration_date: string | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  us?: CustomerTaxExemption.Us;
}
export interface DeletedCustomerTaxExemption {
  /**
   * Unique identifier for the object.
   */
  id: string;

  object: 'customer_tax_exemption';

  /**
   * Always true for a deleted object
   */
  deleted: true;
}
export namespace CustomerTaxExemption {
  export interface Ca {
    /**
     * Two-letter Canadian province code (ISO 3166-2). Null for country-wide GST/HST exemptions.
     */
    state: string | null;

    /**
     * The type of Canadian tax (gst_hst, PST, QST, RST).
     */
    tax_type: string;
  }

  export interface Us {
    /**
     * Two-letter US state code (ISO 3166-2).
     */
    state: string;
  }
}
