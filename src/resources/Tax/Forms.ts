// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Account} from './../Accounts.js';
import {PaginationParams} from '../../shared.js';
import {
  RequestOptions,
  ApiListPromise,
  Response,
  StripeStreamResponse,
} from '../../lib.js';

export class FormResource extends StripeResource {
  /**
   * Returns a list of tax forms which were previously created. The tax forms are returned in sorted order, with the oldest tax forms appearing first.
   */
  list(
    params: Tax.FormListParams,
    options?: RequestOptions
  ): ApiListPromise<Form> {
    return this._makeRequest('GET', '/v1/tax/forms', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Retrieves the details of a tax form that has previously been created. Supply the unique tax form ID that was returned from your previous request, and Stripe will return the corresponding tax form information.
   */
  retrieve(
    id: string,
    params?: Tax.FormRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Form>> {
    return this._makeRequest(
      'GET',
      `/v1/tax/forms/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Download the PDF for a tax form.
   */
  pdf(
    id: string,
    params?: Tax.FormPdfParams,
    options?: RequestOptions
  ): Promise<StripeStreamResponse> {
    return this._makeRequest(
      'GET',
      `/v1/tax/forms/${id}/pdf`,
      params,
      options,
      {
        apiBase: 'files',
        streaming: true,
      }
    ) as any;
  }
}
export interface Form {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'tax.form';

  au_serr?: Tax.Form.AuSerr;

  ca_mrdp?: Tax.Form.CaMrdp;

  /**
   * The form that corrects this form, if any.
   */
  corrected_by: string | Form | null;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  eu_dac7?: Tax.Form.EuDac7;

  /**
   * A list of tax filing statuses. Note that a filing status will only be included if the form has been filed directly with the jurisdiction's tax authority.
   */
  filing_statuses: Array<Tax.Form.FilingStatus>;

  gb_mrdp?: Tax.Form.GbMrdp;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  nz_mrdp?: Tax.Form.NzMrdp;

  payee: Tax.Form.Payee;

  /**
   * The type of the tax form. An additional hash is included on the tax form with a name matching this value. It contains additional information specific to the tax form type.
   */
  type: Tax.Form.Type;

  us_1099_k?: Tax.Form.Us1099K;

  us_1099_misc?: Tax.Form.Us1099Misc;

  us_1099_nec?: Tax.Form.Us1099Nec;
}
export namespace Tax {
  export namespace Form {
    export interface AuSerr {
      /**
       * End date of the period represented by the information reported on the tax form.
       */
      reporting_period_end_date: string;

      /**
       * Start date of the period represented by the information reported on the tax form.
       */
      reporting_period_start_date: string;
    }

    export interface CaMrdp {
      /**
       * End date of the period represented by the information reported on the tax form.
       */
      reporting_period_end_date: string;

      /**
       * Start date of the period represented by the information reported on the tax form.
       */
      reporting_period_start_date: string;
    }

    export interface EuDac7 {
      /**
       * End date of the period represented by the information reported on the tax form.
       */
      reporting_period_end_date: string;

      /**
       * Start date of the period represented by the information reported on the tax form.
       */
      reporting_period_start_date: string;
    }

    export interface FilingStatus {
      /**
       * Time when the filing status was updated.
       */
      effective_at: number;

      jurisdiction: FilingStatus.Jurisdiction;

      /**
       * The current status of the filed form.
       */
      value: FilingStatus.Value;
    }

    export interface GbMrdp {
      /**
       * End date of the period represented by the information reported on the tax form.
       */
      reporting_period_end_date: string;

      /**
       * Start date of the period represented by the information reported on the tax form.
       */
      reporting_period_start_date: string;
    }

    export interface NzMrdp {
      /**
       * End date of the period represented by the information reported on the tax form.
       */
      reporting_period_end_date: string;

      /**
       * Start date of the period represented by the information reported on the tax form.
       */
      reporting_period_start_date: string;
    }

    export interface Payee {
      /**
       * The ID of the payee's Stripe account.
       */
      account: string | Account | null;

      /**
       * The external reference to this payee.
       */
      external_reference: string | null;

      /**
       * Either `account` or `external_reference`.
       */
      type: Payee.Type;
    }

    export type Type =
      | 'au_serr'
      | 'ca_mrdp'
      | 'eu_dac7'
      | 'gb_mrdp'
      | 'nz_mrdp'
      | 'us_1099_k'
      | 'us_1099_misc'
      | 'us_1099_nec';

    export interface Us1099K {
      /**
       * Year represented by the information reported on the tax form.
       */
      reporting_year: number;
    }

    export interface Us1099Misc {
      /**
       * Year represented by the information reported on the tax form.
       */
      reporting_year: number;
    }

    export interface Us1099Nec {
      /**
       * Year represented by the information reported on the tax form.
       */
      reporting_year: number;
    }

    export namespace FilingStatus {
      export interface Jurisdiction {
        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country: string;

        /**
         * Indicates the level of the jurisdiction where the form was filed.
         */
        level: Jurisdiction.Level;

        /**
         * [ISO 3166-2 U.S. state code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country prefix, if any. For example, "NY" for New York, United States. Null for non-U.S. forms.
         */
        state: string | null;
      }

      export type Value = 'accepted' | 'filed' | 'rejected';

      export namespace Jurisdiction {
        export type Level = 'country' | 'state';
      }
    }

    export namespace Payee {
      export type Type = 'account' | 'external_reference';
    }
  }
}
export namespace Tax {
  export interface FormRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Tax {
  export interface FormListParams extends PaginationParams {
    /**
     * The payee whose volume is represented on the tax form.
     */
    payee: FormListParams.Payee;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * An optional filter on the list, based on the object `type` field. Without the filter, the list includes all current and future tax form types. If your integration expects only one type of tax form in the response, make sure to provide a type value in the request.
     */
    type?: FormListParams.Type;
  }

  export namespace FormListParams {
    export interface Payee {
      /**
       * The ID of the Stripe account whose forms will be retrieved.
       */
      account?: string;

      /**
       * The external reference to the payee whose forms will be retrieved.
       */
      external_reference?: string;

      /**
       * Specifies the payee type. Either `account` or `external_reference`.
       */
      type?: Payee.Type;
    }

    export type Type =
      | 'au_serr'
      | 'ca_mrdp'
      | 'eu_dac7'
      | 'gb_mrdp'
      | 'nz_mrdp'
      | 'us_1099_k'
      | 'us_1099_misc'
      | 'us_1099_nec';

    export namespace Payee {
      export type Type = 'account' | 'external_reference';
    }
  }
}
export namespace Tax {
  export interface FormPdfParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
