declare namespace Stripe {
  /**
   * The StripeError object.
   */
  interface StripeError {
    /**
     * For card errors, the ID of the failed charge.
     */
    charge?: string;

    /**
     * For some errors that could be handled programmatically, a short string indicating the [error code](https://stripe.com/docs/error-codes) reported.
     */
    code?: string;

    /**
     * For card errors resulting from a card issuer decline, a short string indicating the [card issuer's reason for the decline](https://stripe.com/docs/declines#issuer-declines) if they provide one.
     */
    decline_code?: string;

    /**
     * A URL to more information about the [error code](https://stripe.com/docs/error-codes) reported.
     */
    doc_url?: string;

    /**
     * A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.
     */
    message?: string;

    /**
     * If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.
     */
    param?: string;

    payment_intent?: PaymentIntent;

    payment_method?: PaymentMethod;

    setup_intent?: SetupIntent;

    source?:
      | Account
      | AlipayAccount
      | BankAccount
      | BitcoinReceiver
      | Card
      | Source;

    /**
     * The type of error returned. One of `api_connection_error`, `api_error`, `authentication_error`, `card_error`, `idempotency_error`, `invalid_request_error`, or `rate_limit_error`
     */
    type?: StripeError.Type;
  }

  namespace StripeError {
    type Type =
      | 'api_connection_error'
      | 'api_error'
      | 'authentication_error'
      | 'card_error'
      | 'idempotency_error'
      | 'invalid_request_error'
      | 'rate_limit_error'
  }
}