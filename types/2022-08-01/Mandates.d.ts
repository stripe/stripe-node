// File generated from our OpenAPI spec

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
       * The status of the mandate, which indicates whether it can be used to initiate a payment.
       */
      status: Mandate.Status;

      /**
       * The type of the mandate.
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
        acss_debit?: PaymentMethodDetails.AcssDebit;

        au_becs_debit?: PaymentMethodDetails.AuBecsDebit;

        bacs_debit?: PaymentMethodDetails.BacsDebit;

        blik?: PaymentMethodDetails.Blik;

        card?: PaymentMethodDetails.Card;

        link?: PaymentMethodDetails.Link;

        sepa_debit?: PaymentMethodDetails.SepaDebit;

        /**
         * The type of the payment method associated with this mandate. An additional hash is included on `payment_method_details` with a name matching this value. It contains mandate information specific to the payment method.
         */
        type: string;

        us_bank_account?: PaymentMethodDetails.UsBankAccount;
      }

      namespace PaymentMethodDetails {
        interface AcssDebit {
          /**
           * List of Stripe products where this mandate can be selected automatically.
           */
          default_for?: Array<AcssDebit.DefaultFor>;

          /**
           * Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'.
           */
          interval_description: string | null;

          /**
           * Payment schedule for the mandate.
           */
          payment_schedule: AcssDebit.PaymentSchedule;

          /**
           * Transaction type of the mandate.
           */
          transaction_type: AcssDebit.TransactionType;
        }

        namespace AcssDebit {
          type DefaultFor = 'invoice' | 'subscription';

          type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

          type TransactionType = 'business' | 'personal';
        }

        interface AuBecsDebit {
          /**
           * The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively.
           */
          url: string;
        }

        interface BacsDebit {
          /**
           * The status of the mandate on the Bacs network. Can be one of `pending`, `revoked`, `refused`, or `accepted`.
           */
          network_status: BacsDebit.NetworkStatus;

          /**
           * The unique reference identifying the mandate on the Bacs network.
           */
          reference: string;

          /**
           * The URL that will contain the mandate that the customer has signed.
           */
          url: string;
        }

        namespace BacsDebit {
          type NetworkStatus = 'accepted' | 'pending' | 'refused' | 'revoked';
        }

        interface Blik {
          /**
           * Date at which the mandate expires.
           */
          expires_after: number | null;

          off_session?: Blik.OffSession;

          /**
           * Type of the mandate.
           */
          type: Blik.Type | null;
        }

        namespace Blik {
          interface OffSession {
            /**
             * Amount of each recurring payment.
             */
            amount: number | null;

            /**
             * Currency of each recurring payment.
             */
            currency: string | null;

            /**
             * Frequency interval of each recurring payment.
             */
            interval: OffSession.Interval | null;

            /**
             * Frequency indicator of each recurring payment.
             */
            interval_count: number | null;
          }

          namespace OffSession {
            type Interval = 'day' | 'month' | 'week' | 'year';
          }

          type Type = 'off_session' | 'on_session';
        }

        interface Card {}

        interface Link {}

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

        interface UsBankAccount {}
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
      ): Promise<Stripe.Response<Stripe.Mandate>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Mandate>>;
    }
  }
}
