// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {Account, AccountResource} from './Accounts.js';
import {Authorization, AuthorizationResource} from './Authorizations.js';
import {Institution, InstitutionResource} from './Institutions.js';
import {Session, SessionResource} from './Sessions.js';
import {Transaction, TransactionResource} from './Transactions.js';
import {AccountOwner} from './AccountOwners.js';
import {AccountOwnership} from './AccountOwnerships.js';
import {AccountInferredBalance} from './AccountInferredBalances.js';

export {Account} from './Accounts.js';
export {Authorization} from './Authorizations.js';
export {Institution} from './Institutions.js';
export {Session} from './Sessions.js';
export {Transaction} from './Transactions.js';
export {AccountOwner} from './AccountOwners.js';
export {AccountOwnership} from './AccountOwnerships.js';
export {AccountInferredBalance} from './AccountInferredBalances.js';

export class FinancialConnections {
  accounts: AccountResource;
  authorizations: AuthorizationResource;
  institutions: InstitutionResource;
  sessions: SessionResource;
  transactions: TransactionResource;

  constructor(private readonly stripe: Stripe) {
    this.accounts = new AccountResource(stripe);
    this.authorizations = new AuthorizationResource(stripe);
    this.institutions = new InstitutionResource(stripe);
    this.sessions = new SessionResource(stripe);
    this.transactions = new TransactionResource(stripe);
  }
}

export declare namespace FinancialConnections {
  export type AccountListParams = FinancialConnectionsNamespace0.AccountListParams;
  export type AccountRetrieveParams = FinancialConnectionsNamespace0.AccountRetrieveParams;
  export type AccountDisconnectParams = FinancialConnectionsNamespace0.AccountDisconnectParams;
  export type AccountRefreshParams = FinancialConnectionsNamespace0.AccountRefreshParams;
  export type AccountSubscribeParams = FinancialConnectionsNamespace0.AccountSubscribeParams;
  export type AccountUnsubscribeParams = FinancialConnectionsNamespace0.AccountUnsubscribeParams;
  export type AccountListOwnersParams = FinancialConnectionsNamespace0.AccountListOwnersParams;
  export {Account};
  export {Authorization};
  export {Institution};
  export {Session};
  export type TransactionListParams = FinancialConnectionsNamespace2.TransactionListParams;
  export type TransactionRetrieveParams = FinancialConnectionsNamespace2.TransactionRetrieveParams;
  export {Transaction};
  export {AccountOwner};
  export {AccountOwnership};
  export {AccountInferredBalance};
}
