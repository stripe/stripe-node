declare module 'stripe' {
  namespace Stripe {
    /**
     * The SourceMandateNotification object.
     */
    interface SourceMandateNotification {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'source_mandate_notification';

      /**
       * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount associated with the mandate notification. The amount is expressed in the currency of the underlying source. Required if the notification type is `debit_initiated`.
       */
      amount: number | null;

      bacs_debit?: SourceMandateNotification.BacsDebit;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The reason of the mandate notification. Valid reasons are `mandate_confirmed` or `debit_initiated`.
       */
      reason: string;

      sepa_debit?: SourceMandateNotification.SepaDebit;

      source: Stripe.Source;

      /**
       * The status of the mandate notification. Valid statuses are `pending` or `submitted`.
       */
      status: string;

      /**
       * The type of source this mandate notification is attached to. Should be the source type identifier code for the payment method, such as `three_d_secure`.
       */
      type: string;
    }

    namespace SourceMandateNotification {
      interface BacsDebit {
        /**
         * Last 4 digits of the account number associated with the debit.
         */
        last4?: string;
      }

      interface SepaDebit {
        /**
         * SEPA creditor ID.
         */
        creditor_identifier?: string;

        /**
         * Last 4 digits of the account number associated with the debit.
         */
        last4?: string;

        /**
         * Mandate reference associated with the debit.
         */
        mandate_reference?: string;
      }
    }
  }
}
