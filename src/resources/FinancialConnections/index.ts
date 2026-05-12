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
  export import AccountListParams = FinancialConnectionsNamespace0.AccountListParams;
  export import AccountRetrieveParams = FinancialConnectionsNamespace0.AccountRetrieveParams;
  export import AccountDisconnectParams = FinancialConnectionsNamespace0.AccountDisconnectParams;
  export import AccountRefreshParams = FinancialConnectionsNamespace0.AccountRefreshParams;
  export import AccountSubscribeParams = FinancialConnectionsNamespace0.AccountSubscribeParams;
  export import AccountUnsubscribeParams = FinancialConnectionsNamespace0.AccountUnsubscribeParams;
  export import AccountListOwnersParams = FinancialConnectionsNamespace0.AccountListOwnersParams;
  export {Account};
  export import SessionRetrieveParams = FinancialConnectionsNamespace1.SessionRetrieveParams;
  export import SessionCreateParams = FinancialConnectionsNamespace1.SessionCreateParams;
  export {Session};
  export import TransactionListParams = FinancialConnectionsNamespace2.TransactionListParams;
  export import TransactionRetrieveParams = FinancialConnectionsNamespace2.TransactionRetrieveParams;
  export {Transaction};
  export {AccountOwner};
  export {AccountOwnership};
}
