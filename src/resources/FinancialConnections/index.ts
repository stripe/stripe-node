// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  FinancialConnections as FinancialConnectionsNamespace0,
  Account,
  AccountResource,
} from './Accounts.js';
import {
  FinancialConnections as FinancialConnectionsNamespace1,
  Session,
  SessionResource,
} from './Sessions.js';
import {
  FinancialConnections as FinancialConnectionsNamespace2,
  Transaction,
  TransactionResource,
} from './Transactions.js';
import {AccountOwner} from './AccountOwners.js';
import {AccountOwnership} from './AccountOwnerships.js';

export {Account} from './Accounts.js';
export {Session} from './Sessions.js';
export {Transaction} from './Transactions.js';
export {AccountOwner} from './AccountOwners.js';
export {AccountOwnership} from './AccountOwnerships.js';

export class FinancialConnections {
  accounts: AccountResource;
  sessions: SessionResource;
  transactions: TransactionResource;

  constructor(private readonly stripe: Stripe) {
    this.accounts = new AccountResource(stripe);
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
  export type SessionRetrieveParams = FinancialConnectionsNamespace1.SessionRetrieveParams;
  export type SessionCreateParams = FinancialConnectionsNamespace1.SessionCreateParams;
  export {Session};
  export type TransactionListParams = FinancialConnectionsNamespace2.TransactionListParams;
  export type TransactionRetrieveParams = FinancialConnectionsNamespace2.TransactionRetrieveParams;
  export {Transaction};
  export {AccountOwner};
  export {AccountOwnership};
}
