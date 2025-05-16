// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Invoice Payments represent payments made against invoices. Invoice Payments can
     * be accessed in two ways:
     * 1. By expanding the `payments` field on the [Invoice](https://stripe.com/docs/api#invoice) resource.
     * 2. By using the Invoice Payment retrieve and list endpoints.
     *
     * Invoice Payments include the mapping between payment objects, such as Payment Intent, and Invoices.
     * This resource and its endpoints allows you to easily track if a payment is associated with a specific invoice and
     * monitor the allocation details of the payments.
     */
    interface InvoicePayment {
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
      invoice: string | Stripe.Invoice | Stripe.DeletedInvoice;

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

    namespace InvoicePayment {
      interface Payment {
        /**
         * ID of the successful charge for this payment when `type` is `charge`.Note: charge is only surfaced if the charge object is not associated with a payment intent. If the charge object does have a payment intent, the Invoice Payment surfaces the payment intent instead.
         */
        charge?: string | Stripe.Charge;

        /**
         * ID of the PaymentIntent associated with this payment when `type` is `payment_intent`. Note: This property is only populated for invoices finalized on or after March 15th, 2019.
         */
        payment_intent?: string | Stripe.PaymentIntent;

        /**
         * Type of payment object associated with this invoice payment.
         */
        type: Payment.Type;
      }

      namespace Payment {
        type Type = 'charge' | 'payment_intent';
      }

      interface StatusTransitions {
        /**
         * The time that the payment was canceled.
         */
        canceled_at: number | null;

        /**
         * The time that the payment succeeded.
         */
        paid_at: number | null;
      }
    }
  }
}
