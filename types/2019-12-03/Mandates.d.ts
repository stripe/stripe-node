declare module 'stripe' {
  namespace Stripe {
    /**
     * The Mandate object.
     */
    interface Mandate {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'mandate';

      customer_acceptance: Mandate.CustomerAcceptance;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      multi_use?: Mandate.MultiUse;

      /**
       * ID of the payment method associated with this mandate.
       */
      payment_method: string | Stripe.PaymentMethod;

      payment_method_details: Mandate.PaymentMethodDetails;

      single_use?: Mandate.SingleUse;

      /**
       * The status of the Mandate, one of `active`, `inactive`, or `pending`. The Mandate can be used to initiate a payment only if status=active.
       */
      status: Mandate.Status;

      /**
       * The type of the mandate, one of `multi_use` or `single_use`
       */
      type: Mandate.Type;
    }

    namespace Mandate {
      interface CustomerAcceptance {
        /**
         * The time at which the customer accepted the Mandate.
         */
        accepted_at: number | null;

        offline?: CustomerAcceptance.Offline;

        online?: CustomerAcceptance.Online;

        /**
         * The type of customer acceptance information included with the Mandate. One of `online` or `offline`.
         */
        type: CustomerAcceptance.Type;
      }

      namespace CustomerAcceptance {
        interface Offline {}

        interface Online {
          /**
           * The IP address from which the Mandate was accepted by the customer.
           */
          ip_address: string | null;

          /**
           * The user agent of the browser from which the Mandate was accepted by the customer.
           */
          user_agent: string | null;
        }

        type Type = 'offline' | 'online';
      }

      interface MultiUse {}

      interface PaymentMethodDetails {
        au_becs_debit?: PaymentMethodDetails.AuBecsDebit;

        card?: PaymentMethodDetails.Card;

        sepa_debit?: PaymentMethodDetails.SepaDebit;

        /**
         * The type of the payment method associated with this mandate. An additional hash is included on `payment_method_details` with a name matching this value. It contains mandate information specific to the payment method.
         */
        type: string;
      }

      namespace PaymentMethodDetails {
        interface AuBecsDebit {
          url: string;
        }

        interface Card {}

        interface SepaDebit {
          /**
           * The unique reference of the mandate.
           */
          reference: string;

          /**
           * The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively.
           */
          url: string;
        }
      }

      interface SingleUse {
        /**
         * On a single use mandate, the amount of the payment.
         */
        amount: number;

        /**
         * On a single use mandate, the currency of the payment.
         */
        currency: string;
      }

      type Status = 'active' | 'inactive' | 'pending';

      type Type = 'multi_use' | 'single_use';
    }

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
        options?: RequestOptions
      ): Promise<Stripe.Mandate>;
      retrieve(id: string, options?: RequestOptions): Promise<Stripe.Mandate>;
    }
  }
}
