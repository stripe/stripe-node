// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class AgreementResource extends StripeResource {
  /**
   * List Agreements for the profile associated with the authenticated merchant.
   */
  list(
    params?: V2.OrchestratedCommerce.AgreementListParams,
    options?: RequestOptions
  ): ApiListPromise<Agreement> {
    return this._makeRequest(
      'GET',
      '/v2/orchestrated_commerce/agreements',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Create a new Agreement.
   */
  create(
    params: V2.OrchestratedCommerce.AgreementCreateParams,
    options?: RequestOptions
  ): Promise<Response<Agreement>> {
    return this._makeRequest(
      'POST',
      '/v2/orchestrated_commerce/agreements',
      params,
      options
    ) as any;
  }
  /**
   * Retrieve an Agreement by ID.
   */
  retrieve(
    id: string,
    params?: V2.OrchestratedCommerce.AgreementRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Agreement>> {
    return this._makeRequest(
      'GET',
      `/v2/orchestrated_commerce/agreements/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Confirm an Agreement.
   */
  confirm(
    id: string,
    params?: V2.OrchestratedCommerce.AgreementConfirmParams,
    options?: RequestOptions
  ): Promise<Response<Agreement>> {
    return this._makeRequest(
      'POST',
      `/v2/orchestrated_commerce/agreements/${id}/confirm`,
      params,
      options
    ) as any;
  }
  /**
   * Terminate an Agreement.
   */
  terminate(
    id: string,
    params?: V2.OrchestratedCommerce.AgreementTerminateParams,
    options?: RequestOptions
  ): Promise<Response<Agreement>> {
    return this._makeRequest(
      'POST',
      `/v2/orchestrated_commerce/agreements/${id}/terminate`,
      params,
      options
    ) as any;
  }
}
export interface Agreement {
  /**
   * The unique identifier for the agreement.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.orchestrated_commerce.agreement';

  /**
   * The time at which the agreement was created.
   */
  created: string;

  /**
   * The party that initiated the agreement.
   */
  initiated_by: V2.OrchestratedCommerce.Agreement.InitiatedBy;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Details about the orchestrator.
   */
  orchestrator_details: V2.OrchestratedCommerce.Agreement.OrchestratorDetails;

  /**
   * Details about the seller.
   */
  seller_details: V2.OrchestratedCommerce.Agreement.SellerDetails;

  /**
   * The current status of the agreement.
   */
  status: V2.OrchestratedCommerce.Agreement.Status;

  /**
   * Timestamps of key status transitions for the agreement.
   */
  status_transitions: V2.OrchestratedCommerce.Agreement.StatusTransitions;

  /**
   * The party that terminated the agreement, if applicable.
   */
  terminated_by?: V2.OrchestratedCommerce.Agreement.TerminatedBy;
}
export namespace V2 {
  export namespace OrchestratedCommerce {
    export namespace Agreement {
      export type InitiatedBy = 'orchestrator' | 'seller';

      export interface OrchestratorDetails {
        /**
         * The name of the orchestrator. This can be the name of the agent or the name of the business.
         */
        name: string;

        /**
         * The Network ID of the orchestrator.
         */
        network_business_profile: string;
      }

      export interface SellerDetails {
        /**
         * The Network ID of the seller.
         */
        network_business_profile: string;
      }

      export type Status =
        | 'confirmed'
        | 'initiated'
        | 'partially_confirmed'
        | 'terminated';

      export interface StatusTransitions {
        /**
         * The time at which the orchestrator confirmed the agreement.
         */
        orchestrator_confirmed_at?: string;

        /**
         * The time at which the seller confirmed the agreement.
         */
        seller_confirmed_at?: string;

        /**
         * The time at which the agreement was terminated.
         */
        terminated_at?: string;
      }

      export type TerminatedBy = 'orchestrator' | 'seller';
    }
  }
}
export namespace V2 {
  export namespace OrchestratedCommerce {
    export interface AgreementCreateParams {
      /**
       * The Network ID of the orchestrator to create an agreement with.
       */
      orchestrator: string;
    }
  }
}
export namespace V2 {
  export namespace OrchestratedCommerce {
    export interface AgreementRetrieveParams {}
  }
}
export namespace V2 {
  export namespace OrchestratedCommerce {
    export interface AgreementListParams {
      /**
       * The limit for the number of results per page.
       */
      limit?: number;

      /**
       * Filter list to Orchestrated Commerce Agreements with a specific counterparty.
       */
      network_business_profile?: string;
    }
  }
}
export namespace V2 {
  export namespace OrchestratedCommerce {
    export interface AgreementConfirmParams {}
  }
}
export namespace V2 {
  export namespace OrchestratedCommerce {
    export interface AgreementTerminateParams {}
  }
}
