// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class InboundTransferMandateResource extends StripeResource {
  /**
   * Retrieve a list of InboundTransferMandates for the authenticated compartment.
   */
  list(
    params?: V2.MoneyManagement.InboundTransferMandateListParams,
    options?: RequestOptions
  ): V2ListPromise<InboundTransferMandate> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/inbound_transfer_mandates',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Create an InboundTransferMandate for a v2 credential. If a pending or
   * active mandate already exists for the same user and credential, that
   * mandate is returned instead of creating a new one.
   * @throws Stripe.AlreadyExistsError
   * @throws Stripe.ServiceUnavailableError
   */
  create(
    params: V2.MoneyManagement.InboundTransferMandateCreateParams,
    options?: RequestOptions
  ): Promise<Response<InboundTransferMandate>> {
    return this._makeRequest(
      'POST',
      '/v2/money_management/inbound_transfer_mandates',
      params,
      options
    ) as any;
  }
  /**
   * Retrieve an InboundTransferMandate by ID.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.InboundTransferMandateRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<InboundTransferMandate>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/inbound_transfer_mandates/${encodeURIComponent(
        id
      )}`,
      params,
      options
    ) as any;
  }
  /**
   * Cancel a pending or active InboundTransferMandate.
   */
  cancel(
    id: string,
    params?: V2.MoneyManagement.InboundTransferMandateCancelParams,
    options?: RequestOptions
  ): Promise<Response<InboundTransferMandate>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/inbound_transfer_mandates/${encodeURIComponent(
        id
      )}/cancel`,
      params,
      options
    ) as any;
  }
}
export interface InboundTransferMandate {
  /**
   * Unique identifier for the InboundTransferMandate.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.inbound_transfer_mandate';

  /**
   * Australian BECS-specific details. Present when type is AU_BECS.
   */
  au_becs?: InboundTransferMandate.AuBecs;

  /**
   * Bacs-specific details. Present when type is BACS.
   */
  bacs?: InboundTransferMandate.Bacs;

  /**
   * Creation time of the mandate. RFC 3339 UTC, millisecond precision.
   */
  created: string;

  /**
   * The v2 credential (e.g. GB Bank Account) this mandate authorizes debits for.
   */
  credential: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The current lifecycle status of the mandate.
   */
  status: InboundTransferMandate.Status;

  /**
   * Additional details about the current status (e.g. cancelation reason).
   */
  status_details: InboundTransferMandate.StatusDetails;

  /**
   * Timestamps for each state transition.
   */
  status_transitions: InboundTransferMandate.StatusTransitions;

  /**
   * The mandate scheme type.
   */
  type: InboundTransferMandate.Type;

  /**
   * Evidence of the merchant's acceptance of the mandate.
   */
  user_accepted_details: InboundTransferMandate.UserAcceptedDetails;
}
export namespace InboundTransferMandate {
  export interface AuBecs {
    /**
     * The generated AU BECS lodgement reference. It is 18 uppercase alphanumeric or underscore
     * characters and incorporates lodgement_reference_prefix when one was supplied at creation.
     */
    lodgement_reference: string;
  }

  export interface Bacs {
    /**
     * The generated Bacs mandate reference. May incorporate the optional
     * reference_prefix supplied at creation time.
     */
    reference: string;
  }

  export type Status = 'active' | 'canceled' | 'expired' | 'pending';

  export interface StatusDetails {
    /**
     * Present when the mandate is in the CANCELED state.
     */
    canceled?: StatusDetails.Canceled;
  }

  export interface StatusTransitions {
    /**
     * When the mandate became active.
     */
    activated_at?: string;

    /**
     * When the mandate was canceled.
     */
    canceled_at?: string;

    /**
     * When the mandate expired.
     */
    expired_at?: string;
  }

  export type Type = 'au_becs' | 'bacs' | 'nz_becs' | 'sepa' | OtherString;

  export interface UserAcceptedDetails {
    /**
     * When the merchant accepted the mandate. Must be a past timestamp. For direct account
     * requests, defaults to the mandate's creation time when not supplied.
     */
    accepted_at?: string;

    /**
     * Optional details for online acceptance.
     */
    online?: UserAcceptedDetails.Online;

    /**
     * Channel through which acceptance was obtained.
     */
    type?: 'online';
  }

  export namespace StatusDetails {
    export interface Canceled {
      /**
       * The reason the mandate was canceled.
       */
      reason: Canceled.Reason;
    }

    export namespace Canceled {
      export type Reason =
        | 'canceled_by_network'
        | 'canceled_by_user'
        | 'refused_by_network'
        | 'revoked_by_stripe';
    }
  }

  export namespace UserAcceptedDetails {
    export interface Online {
      /**
       * The IP address from which the merchant accepted the mandate. For direct account requests,
       * derived from the request when not supplied; rejected if obtainable from neither.
       */
      ip_address?: string;

      /**
       * The user agent of the browser from which the merchant accepted the mandate. For direct
       * account requests, derived from the request when not supplied.
       */
      user_agent?: string;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface InboundTransferMandateCreateParams {
      /**
       * The v2 credential (GB Bank Account or equivalent) this mandate is created
       * for. Must belong to the authenticated compartment.
       */
      credential: string;

      /**
       * The mandate scheme type.
       */
      type: InboundTransferMandateCreateParams.Type;

      /**
       * Optional Australian BECS-specific parameters.
       */
      au_becs?: InboundTransferMandateCreateParams.AuBecs;

      /**
       * Optional Bacs-specific parameters.
       */
      bacs?: InboundTransferMandateCreateParams.Bacs;

      /**
       * Optional acceptance evidence collected from the merchant. Direct account calls can omit
       * details that are derived from request metadata. Platform calls creating a mandate for a
       * connected account must provide accepted_at, online.ip_address, and online.user_agent.
       */
      user_accepted_details?: InboundTransferMandateCreateParams.UserAcceptedDetails;
    }

    export namespace InboundTransferMandateCreateParams {
      export type Type = 'au_becs' | 'bacs' | 'nz_becs' | 'sepa' | OtherString;

      export interface AuBecs {
        /**
         * Optional prefix for the generated 18-character lodgement reference. The prefix is
         * normalized to uppercase and must be empty or contain 1-10 letters, digits, or underscores.
         */
        lodgement_reference_prefix?: string;
      }

      export interface Bacs {
        /**
         * Optional prefix for the generated mandate reference (max 10 chars).
         */
        reference_prefix?: string;
      }

      export interface UserAcceptedDetails {
        /**
         * When the merchant accepted the mandate. Must be a past timestamp. For direct account
         * requests, defaults to the mandate's creation time when not supplied.
         */
        accepted_at?: string;

        /**
         * Optional details for online acceptance.
         */
        online?: UserAcceptedDetails.Online;

        /**
         * Channel through which acceptance was obtained.
         */
        type?: 'online';
      }

      export namespace UserAcceptedDetails {
        export interface Online {
          /**
           * The IP address from which the merchant accepted the mandate. For direct account requests,
           * derived from the request when not supplied; rejected if obtainable from neither.
           */
          ip_address?: string;

          /**
           * The user agent of the browser from which the merchant accepted the mandate. For direct
           * account requests, derived from the request when not supplied.
           */
          user_agent?: string;
        }
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface InboundTransferMandateRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface InboundTransferMandateListParams {
      /**
       * Filter by v2 credential.
       */
      credential?: string;

      /**
       * Maximum number of results to return on a single page.
       */
      limit?: number;

      /**
       * Filter by mandate status.
       */
      status?: InboundTransferMandateListParams.Status;

      /**
       * Filter by mandate scheme type.
       */
      type?: InboundTransferMandateListParams.Type;
    }

    export namespace InboundTransferMandateListParams {
      export type Status = 'active' | 'canceled' | 'expired' | 'pending';

      export type Type = 'au_becs' | 'bacs' | 'nz_becs' | 'sepa' | OtherString;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface InboundTransferMandateCancelParams {}
  }
}
