// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {V2 as V2Namespace0, Inquiry, InquiryResource} from './Inquiries.js';

export {Inquiry} from './Inquiries.js';

export class Risk {
  inquiries: InquiryResource;

  constructor(private readonly stripe: Stripe) {
    this.inquiries = new InquiryResource(stripe);
  }
}

export declare namespace Risk {
  export import InquiryListParams = V2Namespace0.Risk.InquiryListParams;
  export import InquiryRetrieveParams = V2Namespace0.Risk.InquiryRetrieveParams;
  export import InquiryUpdateParams = V2Namespace0.Risk.InquiryUpdateParams;
  export {Inquiry, InquiryResource};
}
