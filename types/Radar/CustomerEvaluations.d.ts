// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Radar {
      /**
       * Customer Evaluation resource returned by the Radar Customer Evaluations API.
       */
      interface CustomerEvaluation {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'radar.customer_evaluation';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created_at: number;

        /**
         * The ID of the Stripe customer the customer evaluation is associated with.
         */
        customer?: string;

        /**
         * The type of evaluation event.
         */
        event_type: string;

        /**
         * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
         */
        livemode: boolean;

        /**
         * A hash of signal objects providing Radar's evaluation for the lifecycle event.
         */
        signals: CustomerEvaluation.Signals | null;
      }

      namespace CustomerEvaluation {
        interface Signals {
          account_sharing?: Signals.AccountSharing;

          multi_accounting?: Signals.MultiAccounting;
        }

        namespace Signals {
          interface AccountSharing {
            /**
             * Time at which the signal was evaluated. Measured in seconds since the Unix epoch.
             */
            evaluated_at: number;

            /**
             * The risk level for this signal.
             */
            risk_level?: string;

            /**
             * Score for this signal (float between 0.0-100.0).
             */
            score: number;
          }

          interface MultiAccounting {
            /**
             * Time at which the signal was evaluated. Measured in seconds since the Unix epoch.
             */
            evaluated_at: number;

            /**
             * The risk level for this signal.
             */
            risk_level?: string;

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
