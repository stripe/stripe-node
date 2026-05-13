// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Dispute} from './../../Issuing/Disputes.js';
import {RequestOptions, Response} from '../../../lib.js';

export class DisputeResource extends StripeResource {
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
      `/v1/test_helpers/issuing/disputes/${id}/simulate_network_lifecycle_pre_arbitration_response`,
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
      `/v1/test_helpers/issuing/disputes/${id}/simulate_network_lifecycle_pre_arbitration_submission`,
      params,
      options
    ) as any;
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
