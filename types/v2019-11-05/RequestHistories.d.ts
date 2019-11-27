declare namespace Stripe {
  /**
   * The RequestHistory object.
   */
  interface RequestHistory {
    /**
     * Whether this request was approved.
     */
    approved?: boolean;

    /**
     * The amount that was authorized at the time of this request
     */
    authorized_amount?: number;

    /**
     * The currency that was presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    authorized_currency?: string;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * The amount Stripe held from your account to fund the authorization, if the request was approved
     */
    held_amount?: number;

    /**
     * The currency of the [held amount](https://stripe.com/docs/api#issuing_authorization_object-held_amount)
     */
    held_currency?: string;

    /**
     * The reason for the approval or decline.
     */
    reason?: RequestHistory.Reason;

    /**
     * When an authorization is declined due to `authorization_controls`, this array contains details about the authorization controls that were violated. Otherwise, it is empty.
     */
    violated_authorization_controls?: Array<ViolatedAuthorizationControl>;
  }

  namespace RequestHistory {
    type Reason =
      | 'account_compliance_disabled'
      | 'account_inactive'
      | 'authentication_failed'
      | 'authorization_controls'
      | 'card_active'
      | 'card_inactive'
      | 'cardholder_inactive'
      | 'cardholder_verification_required'
      | 'insufficient_funds'
      | 'not_allowed'
      | 'suspected_fraud'
      | 'webhook_approved'
      | 'webhook_declined'
      | 'webhook_timeout'
  }
}