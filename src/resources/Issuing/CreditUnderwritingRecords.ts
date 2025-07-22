// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CreditUnderwritingRecords = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath:
      '/v1/issuing/credit_underwriting_records/{credit_underwriting_record}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/credit_underwriting_records',
    methodType: 'list',
  }),
  correct: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/issuing/credit_underwriting_records/{credit_underwriting_record}/correct',
  }),
  createFromApplication: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/credit_underwriting_records/create_from_application',
  }),
  createFromProactiveReview: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/issuing/credit_underwriting_records/create_from_proactive_review',
  }),
  reportDecision: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/issuing/credit_underwriting_records/{credit_underwriting_record}/report_decision',
  }),
});
