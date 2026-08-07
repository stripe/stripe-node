// File generated from our OpenAPI spec

import {OtherString} from '../../shared.js';
import {RequestOptions} from '../../lib.js';
export interface Authorization {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'financial_connections.authorization';

  /**
   * The name of the institution that this authorization belongs to.
   */
  institution_name: string;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The status of the connection to the Authorization.
   */
  status: Authorization.Status;

  status_details: Authorization.StatusDetails;
}
export namespace Authorization {
  export type Status = 'active' | 'inactive' | OtherString;

  export interface StatusDetails {
    active?: StatusDetails.Active;

    inactive?: StatusDetails.Inactive;
  }

  export namespace StatusDetails {
    export interface Active {
      /**
       * The action (if any) to proactively relink the Authorization.
       */
      action: Active.Action;

      /**
       * When the Authorization is expected to become inactive, if applicable.
       */
      expected_deactivation_date: number;
    }

    export interface Inactive {
      /**
       * The action (if any) to relink the inactive Authorization.
       */
      action: Inactive.Action;
    }

    export namespace Active {
      export type Action = 'none' | 'relink_required' | OtherString;
    }

    export namespace Inactive {
      export type Action = 'none' | 'relink_required' | OtherString;
    }
  }
}
