// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Dispute} from './../../Issuing/Disputes.js';
import {RequestOptions, Response} from '../../../lib.js';

export class DisputeResource extends StripeResource {
  /**
   * Test helper: closes a test-mode Issuing dispute as won or lost.
   */
  close(
    id: string,
    params: TestHelpers.Issuing.DisputeCloseParams,
    options?: RequestOptions
  ): Promise<Response<Dispute>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/disputes/${encodeURIComponent(id)}/close`,
      params,
      options
    ) as any;
  }
  /**
   * Test helper: overrides the grant_deadline and revocable_after timestamps on a test-mode Issuing dispute's provisional credit, allowing tests to simulate timer-driven status transitions without waiting for real regulatory deadlines to pass.
   */
  provisionalCredit(
    id: string,
    params?: TestHelpers.Issuing.DisputeProvisionalCreditParams,
    options?: RequestOptions
  ): Promise<Response<Dispute>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/disputes/${encodeURIComponent(
        id
      )}/provisional_credit`,
      params,
      options
    ) as any;
  }
  /**
   * Test helper: populates network_lifecycle.dispute_response on a test-mode Visa Issuing Dispute using placeholder file tokens. Only supported for Visa disputes.
   */
  simulateNetworkLifecycleDisputeResponse(
    id: string,
    params: TestHelpers.Issuing.DisputeSimulateNetworkLifecycleDisputeResponseParams,
    options?: RequestOptions
  ): Promise<Response<Dispute>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/disputes/${encodeURIComponent(
        id
      )}/simulate_network_lifecycle_dispute_response`,
      params,
      options
    ) as any;
  }
  /**
   * Test helper: populates network_lifecycle.pre_arbitration_response on a test-mode Visa Issuing Dispute using placeholder file tokens. Only supported for Visa disputes in the collaboration flow.
   */
  simulateNetworkLifecyclePreArbitrationResponse(
    id: string,
    params: TestHelpers.Issuing.DisputeSimulateNetworkLifecyclePreArbitrationResponseParams,
    options?: RequestOptions
  ): Promise<Response<Dispute>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/disputes/${encodeURIComponent(
        id
      )}/simulate_network_lifecycle_pre_arbitration_response`,
      params,
      options
    ) as any;
  }
  /**
   * Test helper: populates network_lifecycle.pre_arbitration_submission on a test-mode Visa Issuing Dispute using placeholder file tokens. Only supported for Visa disputes.
   */
  simulateNetworkLifecyclePreArbitrationSubmission(
    id: string,
    params: TestHelpers.Issuing.DisputeSimulateNetworkLifecyclePreArbitrationSubmissionParams,
    options?: RequestOptions
  ): Promise<Response<Dispute>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/disputes/${encodeURIComponent(
        id
      )}/simulate_network_lifecycle_pre_arbitration_submission`,
      params,
      options
    ) as any;
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface DisputeCloseParams {
      /**
       * Whether to close the dispute as `won` or `lost`.
       */
      status: DisputeCloseParams.Status;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export namespace DisputeCloseParams {
      export type Status = 'lost' | 'won';
    }
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface DisputeProvisionalCreditParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Override the deadline by which the platform must grant a provisional credit to the consumer.
       */
      grant_deadline?: number;

      /**
       * Override the earliest time after which the platform may revoke the provisional credit.
       */
      revocable_after?: number;
    }
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface DisputeSimulateNetworkLifecycleDisputeResponseParams {
      /**
       * Controls the acquiring merchant's simulated submitted evidence files for the dispute response stage.
       */
      merchant_evidence_files: DisputeSimulateNetworkLifecycleDisputeResponseParams.MerchantEvidenceFiles;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export namespace DisputeSimulateNetworkLifecycleDisputeResponseParams {
      export interface MerchantEvidenceFiles {
        /**
         * How many simulated merchant evidence file tokens to attach (between 1 and 12).
         */
        number_to_generate: number;
      }
    }
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface DisputeSimulateNetworkLifecyclePreArbitrationResponseParams {
      /**
       * Controls the acquiring merchant's simulated submitted evidence files for the pre-arbitration response stage.
       */
      merchant_evidence_files: DisputeSimulateNetworkLifecyclePreArbitrationResponseParams.MerchantEvidenceFiles;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export namespace DisputeSimulateNetworkLifecyclePreArbitrationResponseParams {
      export interface MerchantEvidenceFiles {
        /**
         * How many simulated merchant evidence file tokens to attach (between 1 and 12).
         */
        number_to_generate: number;
      }
    }
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface DisputeSimulateNetworkLifecyclePreArbitrationSubmissionParams {
      /**
       * Controls the acquiring merchant's simulated submitted evidence files for the pre-arbitration submission stage.
       */
      merchant_evidence_files: DisputeSimulateNetworkLifecyclePreArbitrationSubmissionParams.MerchantEvidenceFiles;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export namespace DisputeSimulateNetworkLifecyclePreArbitrationSubmissionParams {
      export interface MerchantEvidenceFiles {
        /**
         * How many simulated merchant evidence file tokens to attach (between 1 and 12).
         */
        number_to_generate: number;
      }
    }
  }
}
