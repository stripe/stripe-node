// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;

export class CustomerEvaluationResource extends StripeResource {
  /**
   * Creates a new CustomerEvaluation object.
   */
  create(
    params: Radar.CustomerEvaluationCreateParams,
    options?: RequestOptions
  ): Promise<Response<CustomerEvaluation>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/radar/customer_evaluations',
    }).call(this, ...args);
  }

  /**
   * Reports an event on a CustomerEvaluation object.
   */
  update(
    id: string,
    params: Radar.CustomerEvaluationUpdateParams,
    options?: RequestOptions
  ): Promise<Response<CustomerEvaluation>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/radar/customer_evaluations/{customer_evaluation}/report',
    }).call(this, ...args);
  }
}
export interface CustomerEvaluation {
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
   * A list of events that have been reported on this customer evaluation.
   */
  events: Array<Radar.CustomerEvaluation.Event> | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * A hash of signal objects providing Radar's evaluation for the lifecycle event.
   */
  signals: Radar.CustomerEvaluation.Signals | null;
}
export namespace Radar {
  export namespace CustomerEvaluation {
    export interface Event {
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

    export interface Signals {
      account_sharing?: Signals.AccountSharing;

      multi_accounting?: Signals.MultiAccounting;
    }

    export namespace Event {
      export interface LoginFailed {
        /**
         * The reason why this login failed.
         */
        reason: string;
      }

      export interface RegistrationFailed {
        /**
         * The reason why this registration failed.
         */
        reason: string;
      }
    }

    export namespace Signals {
      export interface AccountSharing {
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

      export interface MultiAccounting {
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
export namespace Radar {
  export interface CustomerEvaluationCreateParams {
    /**
     * Array of context entries for the evaluation.
     */
    evaluation_context: Array<CustomerEvaluationCreateParams.EvaluationContext>;

    /**
     * The type of evaluation event.
     */
    event_type: CustomerEvaluationCreateParams.EventType;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export namespace CustomerEvaluationCreateParams {
    export interface EvaluationContext {
      /**
       * Client details context.
       */
      client_details?: EvaluationContext.ClientDetails;

      /**
       * Customer details context.
       */
      customer_details?: EvaluationContext.CustomerDetails;

      /**
       * The type of context entry.
       */
      type: EvaluationContext.Type;
    }

    export type EventType = 'login' | 'registration';

    export namespace EvaluationContext {
      export interface ClientDetails {
        /**
         * ID for the Radar Session associated with the customer evaluation.
         */
        radar_session: string;
      }

      export interface CustomerDetails {
        /**
         * Stripe customer ID
         */
        customer?: string;

        /**
         * Customer data
         */
        customer_data?: CustomerDetails.CustomerData;
      }

      export type Type = 'client_details' | 'customer_details';

      export namespace CustomerDetails {
        export interface CustomerData {
          /**
           * Customer email
           */
          email?: string;

          /**
           * Customer name
           */
          name?: string;

          /**
           * Customer phone
           */
          phone?: string;
        }
      }
    }
  }
}
export namespace Radar {
  export interface CustomerEvaluationUpdateParams {
    /**
     * The type of event to report.
     */
    type: CustomerEvaluationUpdateParams.Type;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Event payload for login_failed.
     */
    login_failed?: CustomerEvaluationUpdateParams.LoginFailed;

    /**
     * Event payload for registration_failed.
     */
    registration_failed?: CustomerEvaluationUpdateParams.RegistrationFailed;

    /**
     * Event payload for registration_success.
     */
    registration_success?: CustomerEvaluationUpdateParams.RegistrationSuccess;
  }

  export namespace CustomerEvaluationUpdateParams {
    export type Type =
      | 'login_failed'
      | 'login_success'
      | 'registration_failed'
      | 'registration_success';

    export interface LoginFailed {
      /**
       * The reason why this login failed.
       */
      reason: LoginFailed.Reason;
    }

    export interface RegistrationFailed {
      /**
       * The reason why this registration failed.
       */
      reason: RegistrationFailed.Reason;
    }

    export interface RegistrationSuccess {
      /**
       * Stripe customer ID to attach to an entity-less registration evaluation.
       */
      customer?: string;
    }

    export namespace LoginFailed {
      export type Reason = 'other' | 'suspected_account_sharing';
    }

    export namespace RegistrationFailed {
      export type Reason = 'other' | 'suspected_multi_accounting';
    }
  }
}
