// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class InquiryResource extends StripeResource {
  /**
   * Lists risk inquiries for a connected account.
   */
  list(
    params: V2.Risk.InquiryListParams,
    options?: RequestOptions
  ): V2ListPromise<Inquiry> {
    return this._makeRequest('GET', '/v2/risk/inquiries', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Retrieves a risk inquiry by ID.
   */
  retrieve(
    id: string,
    params?: V2.Risk.InquiryRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Inquiry>> {
    return this._makeRequest(
      'GET',
      `/v2/risk/inquiries/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Submits a response to a risk inquiry.
   */
  update(
    id: string,
    params?: V2.Risk.InquiryUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Inquiry>> {
    return this._makeRequest(
      'POST',
      `/v2/risk/inquiries/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface Inquiry {
  /**
   * Unique identifier for the inquiry.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.risk.inquiry';

  /**
   * Data for appeal inquiries. Only present when type is appeal.
   */
  appeal?: Inquiry.Appeal;

  /**
   * Data for authorization_documents inquiries. Only present when type is authorization_documents.
   */
  authorization_documents?: Inquiry.AuthorizationDocuments;

  /**
   * Time at which the inquiry was closed.
   */
  closed_at: string;

  /**
   * Time at which the inquiry was created.
   */
  created: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Time at which the inquiry was opened.
   */
  opened_at: string;

  /**
   * Data for product_removal inquiries. Only present when type is product_removal.
   */
  product_removal?: Inquiry.ProductRemoval;

  /**
   * The current status of the inquiry.
   */
  status: Inquiry.Status;

  /**
   * The type of inquiry.
   */
  type: Inquiry.Type;
}
export namespace Inquiry {
  export interface Appeal {
    /**
     * A text explanation for the appeal.
     */
    explanation: string;
  }

  export interface AuthorizationDocuments {
    /**
     * IDs of uploaded files to attach as authorization documents.
     */
    files: Array<string>;
  }

  export interface ProductRemoval {
    /**
     * The timestamp when the prohibited items were removed.
     */
    items_removed_at: string;
  }

  export type Status = 'closed' | 'open';

  export type Type =
    | 'appeal'
    | 'authorization_documents'
    | 'product_removal'
    | OtherString;
}
export namespace V2 {
  export namespace Risk {
    export interface InquiryRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Risk {
    export interface InquiryUpdateParams {
      /**
       * Provide this for appeal inquiries.
       */
      appeal?: InquiryUpdateParams.Appeal;

      /**
       * Provide this for authorization_documents inquiries.
       */
      authorization_documents?: InquiryUpdateParams.AuthorizationDocuments;

      /**
       * Provide this for product_removal inquiries.
       */
      product_removal?: InquiryUpdateParams.ProductRemoval;
    }

    export namespace InquiryUpdateParams {
      export interface Appeal {
        /**
         * A text explanation for the appeal.
         */
        explanation: string;
      }

      export interface AuthorizationDocuments {
        /**
         * IDs of uploaded files to attach as authorization documents.
         */
        files: Array<string>;
      }

      export interface ProductRemoval {
        /**
         * The timestamp when the prohibited items were removed.
         */
        items_removed_at: string;
      }
    }
  }
}
export namespace V2 {
  export namespace Risk {
    export interface InquiryListParams {
      /**
       * The account to list inquiries for.
       */
      account: string;

      /**
       * Maximum number of results to return. Default: 10. Valid range: 1-100.
       */
      limit?: number;
    }
  }
}
