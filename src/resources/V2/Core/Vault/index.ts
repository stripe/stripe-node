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
  export import GbBankAccountListParams = V2Namespace0.Core.Vault.GbBankAccountListParams;
  export import GbBankAccountCreateParams = V2Namespace0.Core.Vault.GbBankAccountCreateParams;
  export import GbBankAccountRetrieveParams = V2Namespace0.Core.Vault.GbBankAccountRetrieveParams;
  export import GbBankAccountAcknowledgeConfirmationOfPayeeParams = V2Namespace0.Core.Vault.GbBankAccountAcknowledgeConfirmationOfPayeeParams;
  export import GbBankAccountArchiveParams = V2Namespace0.Core.Vault.GbBankAccountArchiveParams;
  export import GbBankAccountInitiateConfirmationOfPayeeParams = V2Namespace0.Core.Vault.GbBankAccountInitiateConfirmationOfPayeeParams;
  export {GbBankAccount};
  export import UsBankAccountListParams = V2Namespace1.Core.Vault.UsBankAccountListParams;
  export import UsBankAccountCreateParams = V2Namespace1.Core.Vault.UsBankAccountCreateParams;
  export import UsBankAccountRetrieveParams = V2Namespace1.Core.Vault.UsBankAccountRetrieveParams;
  export import UsBankAccountUpdateParams = V2Namespace1.Core.Vault.UsBankAccountUpdateParams;
  export import UsBankAccountArchiveParams = V2Namespace1.Core.Vault.UsBankAccountArchiveParams;
  export import UsBankAccountConfirmMicrodepositsParams = V2Namespace1.Core.Vault.UsBankAccountConfirmMicrodepositsParams;
  export import UsBankAccountSendMicrodepositsParams = V2Namespace1.Core.Vault.UsBankAccountSendMicrodepositsParams;
  export {UsBankAccount};
}
