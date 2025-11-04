// File generated from our OpenAPI spec

export interface InvoicePaymentRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface InvoicePaymentListParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * The identifier of the invoice whose payments to return.
   */
  invoice?: string;

  /**
   * The payment details of the invoice payments to return.
   */
  payment?: InvoicePaymentListParams.Payment;

  /**
   * The status of the invoice payments to return.
   */
  status?: InvoicePaymentListParams.Status;
}
namespace InvoicePaymentListParams {
  export interface Payment {
    /**
     * Only return invoice payments associated by this payment intent ID.
     */
    payment_intent?: string;

    /**
     * Only return invoice payments associated by this payment record ID.
     */
    payment_record?: string;

    /**
     * Only return invoice payments associated by this payment type.
     */
    type: Payment.Type;
  }

  export type Status = 'canceled' | 'open' | 'paid';

  namespace Payment {
    export type Type = 'payment_intent' | 'payment_record';
  }
}
