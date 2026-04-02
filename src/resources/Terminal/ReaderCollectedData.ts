// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions, Response} from '../../lib.js';

export class ReaderCollectedDatumResource extends StripeResource {
  /**
   * Retrieve data collected using Reader hardware.
   */
  retrieve(
    id: string,
    params?: Terminal.ReaderCollectedDataRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ReaderCollectedData>> {
    return this._makeRequest(
      'GET',
      `/v1/terminal/reader_collected_data/${id}`,
      params,
      options
    ) as any;
  }
}
export interface ReaderCollectedData {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'terminal.reader_collected_data';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The magstripe data collected by the reader.
   */
  magstripe: Terminal.ReaderCollectedData.Magstripe | null;

  /**
   * The type of data collected by the reader.
   */
  type: 'magstripe';
}
export namespace Terminal {
  export namespace ReaderCollectedData {
    export interface Magstripe {
      /**
       * The raw magstripe data collected by the reader.
       */
      data: string | null;
    }
  }
}
export namespace Terminal {
  export interface ReaderCollectedDataRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
