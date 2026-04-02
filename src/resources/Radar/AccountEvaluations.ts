// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions, Response} from '../../lib.js';

export class AccountEvaluationResource extends StripeResource {
  /**
   * Retrieves an AccountEvaluation object.
   */
  retrieve(
    id: string,
    params?: Radar.AccountEvaluationRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<AccountEvaluation>> {
    return this._makeRequest(
      'GET',
      `/v1/radar/account_evaluations/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Creates a new AccountEvaluation object.
   */
  create(
    params: Radar.AccountEvaluationCreateParams,
    options?: RequestOptions
  ): Promise<Response<AccountEvaluation>> {
    return this._makeRequest(
      'POST',
      '/v1/radar/account_evaluations',
      params,
      options
    ) as any;
  }
  /**
   * Reports an event on an AccountEvaluation object.
   */
  update(
    id: string,
    params: Radar.AccountEvaluationUpdateParams,
    options?: RequestOptions
  ): Promise<Response<AccountEvaluation>> {
    return this._makeRequest(
      'POST',
      `/v1/radar/account_evaluations/${id}/report_event`,
      params,
      options
    ) as any;
  }
}
export interface AccountEvaluation {
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
  events: Array<Radar.AccountEvaluation.Event> | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * A hash of signal objects providing Radar's evaluation for the lifecycle event.
   */
  signals: Radar.AccountEvaluation.Signals | null;

  /**
   * The type of evaluation returned, based on the user's request.
   */
  type: string;
}
export namespace Radar {
  export namespace AccountEvaluation {
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
         * Score for this signal (float between 0.0-100.0).
         */
        score: number;
      }

      export interface MultiAccounting {
        /**
         * Score for this signal (float between 0.0-100.0).
         */
        score: number;
      }
    }
  }
}
export namespace Radar {
  export interface AccountEvaluationCreateParams {
    /**
     * The type of evaluation requested.
     */
    type: AccountEvaluationCreateParams.Type;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Event payload for login_initiated.
     */
    login_initiated?: AccountEvaluationCreateParams.LoginInitiated;

    /**
     * Event payload for registration_initiated.
     */
    registration_initiated?: AccountEvaluationCreateParams.RegistrationInitiated;
  }

  export namespace AccountEvaluationCreateParams {
    export type Type = 'login_initiated' | 'registration_initiated';

    export interface LoginInitiated {
      /**
       * Client device metadata details (e.g., radar_session).
       */
      client_device_metadata_details: LoginInitiated.ClientDeviceMetadataDetails;

      /**
       * Stripe customer ID
       */
      customer: string;
    }

    export interface RegistrationInitiated {
      /**
       * Client device metadata details (e.g., radar_session).
       */
      client_device_metadata_details: RegistrationInitiated.ClientDeviceMetadataDetails;

      /**
       * Stripe customer ID
       */
      customer?: string;

      /**
       * Customer data
       */
      customer_data?: RegistrationInitiated.CustomerData;
    }

    export namespace LoginInitiated {
      export interface ClientDeviceMetadataDetails {
        /**
         * ID for the Radar Session associated with the account evaluation.
         */
        radar_session: string;
      }
    }

    export namespace RegistrationInitiated {
      export interface ClientDeviceMetadataDetails {
        /**
         * ID for the Radar Session associated with the account evaluation.
         */
        radar_session: string;
      }

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
export namespace Radar {
  export interface AccountEvaluationRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Radar {
  export interface AccountEvaluationUpdateParams {
    /**
     * The type of event to report.
     */
    type: AccountEvaluationUpdateParams.Type;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Event payload for login_failed.
     */
    login_failed?: AccountEvaluationUpdateParams.LoginFailed;

    /**
     * Event payload for registration_failed.
     */
    registration_failed?: AccountEvaluationUpdateParams.RegistrationFailed;
  }

  export namespace AccountEvaluationUpdateParams {
    export type Type =
      | 'login_failed'
      | 'login_succeeded'
      | 'registration_failed'
      | 'registration_succeeded';

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

    export namespace LoginFailed {
      export type Reason = 'other' | 'suspected_account_sharing';
    }

    export namespace RegistrationFailed {
      export type Reason = 'other' | 'suspected_multi_accounting';
    }
  }
}
