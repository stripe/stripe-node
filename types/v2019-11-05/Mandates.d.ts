declare namespace Stripe {
  /**
   * The Mandate object.
   */
  interface Mandate {
    customer_acceptance?: {
      /**
       * The time at which the customer accepted the Mandate.
       */
      accepted_at?: number | null;

      offline?: {};

      online?: {
        /**
         * The IP address from which the Mandate was accepted by the customer.
         */
        ip_address?: string | null;

        /**
         * The user agent of the browser from which the Mandate was accepted by the customer.
         */
        user_agent?: string | null;
      };

      /**
       * The type of customer acceptance information included with the Mandate. One of `online` or `offline`.
       */
      type: 'offline' | 'online';
    };

    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    multi_use?: {};

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'mandate';

    /**
     * ID of the payment method associated with this mandate.
     */
    payment_method?: string | PaymentMethod;

    payment_method_details?: {
      card?: {};

      sepa_debit?: {
        /**
         * The unique reference of the mandate.
         */
        reference: string;

        /**
         * The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively.
         */
        url: string;
      };

      /**
       * The type of the payment method associated with this mandate. An additional hash is included on `payment_method_details` with a name matching this value. It contains mandate information specific to the payment method.
       */
      type: string;
    };

    single_use?: {
      /**
       * On a single use mandate, the amount of the payment.
       */
      amount: number;

      /**
       * On a single use mandate, the currency of the payment.
       */
      currency: string;
    };

    /**
     * The status of the Mandate, one of `active`, `inactive`, or `pending`. The Mandate can be used to initiate a payment only if status=active.
     */
    status?: 'active' | 'inactive' | 'pending';

    /**
     * The type of the mandate, one of `multi_use` or `single_use`
     */
    type?: 'multi_use' | 'single_use';
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