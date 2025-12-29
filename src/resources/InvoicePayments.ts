// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {Invoice, DeletedInvoice} from './Invoices.js';
import {Charge} from './Charges.js';
import {PaymentIntent} from './PaymentIntents.js';
import {PaymentRecord} from './PaymentRecords.js';
import {PaginationParams, RangeQueryParam} from '../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../lib.js';
const stripeMethod = StripeResource.method;
export class InvoicePaymentResource extends StripeResource {
  /**
   * When retrieving an invoice, there is an includable payments property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of payments.
   */
  list(
    params?: InvoicePaymentListParams,
    options?: RequestOptions
  ): ApiListPromise<InvoicePayment>;
  list(options?: RequestOptions): ApiListPromise<InvoicePayment>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/invoice_payments',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieves the invoice payment with the given ID.
   */
  retrieve(
    id: string,
    params?: InvoicePaymentRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<InvoicePayment>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<InvoicePayment>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/invoice_payments/{invoice_payment}',
    }).call(this, ...args);
  }
}
export interface InvoicePayment {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'invoice_payment';

  /**
   * Amount that was actually paid for this invoice, in cents (or local equivalent). This field is null until the payment is `paid`. This amount can be less than the `amount_requested` if the PaymentIntent's `amount_received` is not sufficient to pay all of the invoices that it is attached to.
   */
  amount_paid: number | null;

  /**
   * Amount intended to be paid toward this invoice, in cents (or local equivalent)
   */
  amount_requested: number;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * The invoice that was paid.
   */
  invoice: string | Invoice | DeletedInvoice;

  /**
   * Stripe automatically creates a default InvoicePayment when the invoice is finalized, and keeps it synchronized with the invoice's `amount_remaining`. The PaymentIntent associated with the default payment can't be edited or canceled directly.
   */
  is_default: boolean;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  payment: InvoicePayment.Payment;

  /**
   * The status of the payment, one of `open`, `paid`, or `canceled`.
   */
  status: string;

  status_transitions: InvoicePayment.StatusTransitions;
}
export namespace InvoicePayment {
  export interface Payment {
    /**
     * ID of the successful charge for this payment when `type` is `charge`.Note: charge is only surfaced if the charge object is not associated with a payment intent. If the charge object does have a payment intent, the Invoice Payment surfaces the payment intent instead.
     */
    charge?: string | Charge;

    /**
     * ID of the PaymentIntent associated with this payment when `type` is `payment_intent`. Note: This property is only populated for invoices finalized on or after March 15th, 2019.
     */
    payment_intent?: string | PaymentIntent;

    /**
     * ID of the PaymentRecord associated with this payment when `type` is `payment_record`.
     */
    payment_record?: string | PaymentRecord;

    /**
     * Type of payment object associated with this invoice payment.
     */
    type: Payment.Type;
  }

  export interface StatusTransitions {
    /**
     * The time that the payment was canceled.
     */
    canceled_at: number | null;

    /**
     * The time that the payment succeeded.
     */
    paid_at: number | null;
  }

  export namespace Payment {
    export type Type = 'charge' | 'payment_intent' | 'payment_record';
  }
}
export interface InvoicePaymentRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface InvoicePaymentListParams extends PaginationParams {
  /**
   * Only return invoice payments that were created during the given date interval.
   */
  created?: RangeQueryParam | number;

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
export namespace InvoicePaymentListParams {
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

  export namespace Payment {
    export type Type = 'payment_intent' | 'payment_record';
  }
}
