declare namespace Stripe {
  /**
   * The Mandate object.
   */
  interface Mandate {
    customer_acceptance?: CustomerAcceptance;

    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    multi_use?: MultiUse;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'mandate';

    /**
     * ID of the payment method associated with this mandate.
     */
    payment_method?: string | PaymentMethod;

    payment_method_details?: PaymentMethodDetails;

    single_use?: SingleUse;

    /**
     * The status of the Mandate, one of `active`, `inactive`, or `pending`. The Mandate can be used to initiate a payment only if status=active.
     */
    status?: Mandate.Status;

    /**
     * The type of the mandate, one of `multi_use` or `single_use`
     */
    type?: Mandate.Type;
  }

  namespace Mandate {
    type Status = 'active' | 'inactive' | 'pending'

    type Type = 'multi_use' | 'single_use'
  }

  /**
   * Retrieves a Mandate object.
   */
  interface MandateRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  class MandatesResource {
    /**
     * Retrieves a Mandate object.
     */
    retrieve(
      id: string,
      params?: MandateRetrieveParams,
      options?: HeaderOptions
    ): Promise<Mandate>;
  }
}