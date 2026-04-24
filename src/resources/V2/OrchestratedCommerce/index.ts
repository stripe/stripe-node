// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  Agreement,
  AgreementResource,
} from './Agreements.js';

export {Agreement} from './Agreements.js';

export class OrchestratedCommerce {
  agreements: AgreementResource;

  constructor(private readonly stripe: Stripe) {
    this.agreements = new AgreementResource(stripe);
  }
}

export declare namespace OrchestratedCommerce {
  export type AgreementListParams = V2Namespace0.OrchestratedCommerce.AgreementListParams;
  export type AgreementCreateParams = V2Namespace0.OrchestratedCommerce.AgreementCreateParams;
  export type AgreementRetrieveParams = V2Namespace0.OrchestratedCommerce.AgreementRetrieveParams;
  export type AgreementConfirmParams = V2Namespace0.OrchestratedCommerce.AgreementConfirmParams;
  export type AgreementTerminateParams = V2Namespace0.OrchestratedCommerce.AgreementTerminateParams;
  export {Agreement};
}
