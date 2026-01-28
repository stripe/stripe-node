// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Radar {
      /**
       * Account Evaluation resource returned by the Radar Account Evaluations API.
       */
      interface AccountEvaluation {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'radar.account_evaluation';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created_at: number;

        /**
         * The ID of the Stripe customer the account evaluation is associated with.
         */
        customer: string;

        /**
         * The list of events that were reported for this Account Evaluation object via the report API.
         */
        events: Array<AccountEvaluation.Event> | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * A hash of signal objects providing Radar's evaluation for the lifecycle event.
         */
        signals: AccountEvaluation.Signals | null;

        /**
         * The type of evaluation returned, based on the user's request.
         */
        type: string;
      }

      namespace AccountEvaluation {
        interface Event {
          /**
           * Data about a failed login event.
           */
          login_failed?: Event.LoginFailed;

          /**
           * Time at which the event occurred. Measured in seconds since the Unix epoch.
           */
          occurred_at: number;

          /**
           * Data about a failed registration event.
           */
          registration_failed?: Event.RegistrationFailed;

          /**
           * The type of event that occurred.
           */
          type: string;
        }

        namespace Event {
          interface LoginFailed {
            /**
             * The reason why this login failed.
             */
            reason: string;
          }

          interface RegistrationFailed {
            /**
             * The reason why this registration failed.
             */
            reason: string;
          }
        }

        interface Signals {
          account_sharing?: Signals.AccountSharing;

          multi_accounting?: Signals.MultiAccounting;
        }

        namespace Signals {
          interface AccountSharing {
            /**
             * Score for this signal (float between 0.0-100.0).
             */
            score: number;
          }

          interface MultiAccounting {
            /**
             * Score for this signal (float between 0.0-100.0).
             */
            score: number;
          }
        }
      }
    }
  }
}
