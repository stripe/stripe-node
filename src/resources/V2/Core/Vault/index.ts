// File generated from our OpenAPI spec

import {Stripe} from '../../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  GbBankAccount,
  GbBankAccountResource,
} from './GbBankAccounts.js';
import {
  V2 as V2Namespace1,
  UsBankAccount,
  UsBankAccountResource,
} from './UsBankAccounts.js';

export {GbBankAccount} from './GbBankAccounts.js';
export {UsBankAccount} from './UsBankAccounts.js';

export class Vault {
  gbBankAccounts: GbBankAccountResource;
  usBankAccounts: UsBankAccountResource;

  constructor(private readonly stripe: Stripe) {
    this.gbBankAccounts = new GbBankAccountResource(stripe);
    this.usBankAccounts = new UsBankAccountResource(stripe);
  }
}

export declare namespace Vault {
  export type GbBankAccountListParams = V2Namespace0.Core.Vault.GbBankAccountListParams;
  export type GbBankAccountCreateParams = V2Namespace0.Core.Vault.GbBankAccountCreateParams;
  export type GbBankAccountRetrieveParams = V2Namespace0.Core.Vault.GbBankAccountRetrieveParams;
  export type GbBankAccountAcknowledgeConfirmationOfPayeeParams = V2Namespace0.Core.Vault.GbBankAccountAcknowledgeConfirmationOfPayeeParams;
  export type GbBankAccountArchiveParams = V2Namespace0.Core.Vault.GbBankAccountArchiveParams;
  export type GbBankAccountInitiateConfirmationOfPayeeParams = V2Namespace0.Core.Vault.GbBankAccountInitiateConfirmationOfPayeeParams;
  export {GbBankAccount};
  export type UsBankAccountListParams = V2Namespace1.Core.Vault.UsBankAccountListParams;
  export type UsBankAccountCreateParams = V2Namespace1.Core.Vault.UsBankAccountCreateParams;
  export type UsBankAccountRetrieveParams = V2Namespace1.Core.Vault.UsBankAccountRetrieveParams;
  export type UsBankAccountUpdateParams = V2Namespace1.Core.Vault.UsBankAccountUpdateParams;
  export type UsBankAccountArchiveParams = V2Namespace1.Core.Vault.UsBankAccountArchiveParams;
  export type UsBankAccountConfirmMicrodepositsParams = V2Namespace1.Core.Vault.UsBankAccountConfirmMicrodepositsParams;
  export type UsBankAccountSendMicrodepositsParams = V2Namespace1.Core.Vault.UsBankAccountSendMicrodepositsParams;
  export {UsBankAccount};
}
