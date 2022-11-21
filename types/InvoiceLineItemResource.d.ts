// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface InvoiceLineItemListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
