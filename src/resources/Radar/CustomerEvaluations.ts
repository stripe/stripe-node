// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions, Response} from '../../lib.js';

export class CustomerEvaluationResource extends StripeResource {
  /**
   * Retrieves an CustomerEvaluation object.
   */
  retrieve(
    id: string,
    params?: Radar.CustomerEvaluationRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<CustomerEvaluation>> {
    return this._makeRequest(
      'GET',
      `/v1/radar/customer_evaluations/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Creates a new CustomerEvaluation object.
   */
  create(
    params: Radar.CustomerEvaluationCreateParams,
    options?: RequestOptions
  ): Promise<Response<CustomerEvaluation>> {
    return this._makeRequest(
      'POST',
      '/v1/radar/customer_evaluations',
      params,
      options
    ) as any;
  }
  /**
   * Reports an event on a CustomerEvaluation object.
   */
  update(
    id: string,
    params?: Radar.CustomerEvaluationUpdateParams,
    options?: RequestOptions
  ): Promise<Response<CustomerEvaluation>> {
    return this._makeRequest(
      'POST',
      `/v1/radar/customer_evaluations/${encodeURIComponent(id)}/report`,
      params,
      options
    ) as any;
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
   * The ID of the Customer to associate with this CustomerEvaluation.
   */
  customer?: string;

  /**
   * The type of evaluation event.
   */
  event_type: CustomerEvaluation.EventType;

  /**
   * A list of events that have been reported on this customer evaluation.
   */
  events: Array<CustomerEvaluation.Event> | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * A hash of signal objects providing Radar's evaluation of the customer.
   */
  signals: CustomerEvaluation.Signals | null;

  /**
   * The outcome status reported for this evaluation: allowed, restricted, or blocked.
   */
  status?: string;
}
export namespace CustomerEvaluation {
  export type EventType = 'login' | 'registration';

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
      risk_level?: AccountSharing.RiskLevel;

      /**
       * Score for this signal (between 0.0 and 100.0).
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
      risk_level?: MultiAccounting.RiskLevel;

      /**
       * Score for this signal (between 0.0 and 100.0).
       */
      score: number;
    }

    export namespace AccountSharing {
      export type RiskLevel =
        | 'elevated'
        | 'highest'
        | 'low'
        | 'normal'
        | 'not_assessed'
        | 'unknown';
    }

    export namespace MultiAccounting {
      export type RiskLevel =
        | 'elevated'
        | 'highest'
        | 'low'
        | 'normal'
        | 'not_assessed'
        | 'unknown';
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
         * Raw client metadata fallback in case a Radar Session is unavailable.
         */
        data?: ClientDetails.Data;

        /**
         * ID for the Radar Session. Required unless data is provided.
         */
        radar_session?: string;
      }

      export interface CustomerDetails {
        /**
         * The ID of an existing Customer.
         */
        customer?: string;

        /**
         * Customer data
         */
        customer_data?: CustomerDetails.CustomerData;
      }

      export type Type = 'client_details' | 'customer_details';

      export namespace ClientDetails {
        export interface Data {
          /**
           * The end user's IP address. Used for proxy detection and IP-clustering signals.
           */
          ip: string;

          /**
           * The referring URL of the login or registration page.
           */
          referrer?: string;

          /**
           * The User-Agent HTTP header.
           */
          user_agent?: string;
        }
      }

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
  export interface CustomerEvaluationRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Radar {
  export interface CustomerEvaluationUpdateParams {
    /**
     * The ID of a Customer to attach to an entity-less registration evaluation.
     */
    customer?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The outcome status of the evaluation: allowed, restricted, or blocked.
     */
    status?: CustomerEvaluationUpdateParams.Status;
  }

  export namespace CustomerEvaluationUpdateParams {
    export type Status = 'allowed' | 'blocked' | 'restricted';
  }
}
