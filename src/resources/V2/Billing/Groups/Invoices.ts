// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {GroupInvoice} from './../../../V2/Billing/GroupInvoices.js';
import {RequestOptions, Response} from '../../../../lib.js';

export class InvoiceResource extends StripeResource {
  /**
   * Create an empty invoice using the billing group's settings.
   */
  create(
    id: string,
    params?: V2.Billing.Groups.InvoiceCreateParams,
    options?: RequestOptions
  ): Promise<Response<GroupInvoice>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/groups/${encodeURIComponent(id)}/invoices`,
      params,
      options
    ) as any;
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace Groups {
      export interface InvoiceCreateParams {}
    }
  }
}
