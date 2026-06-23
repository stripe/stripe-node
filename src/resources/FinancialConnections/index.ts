// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  FinancialConnections as FinancialConnectionsNamespace0,
  Account,
  AccountResource,
} from './Accounts.js';
import {
  FinancialConnections as FinancialConnectionsNamespace1,
  Authorization,
  AuthorizationResource,
} from './Authorizations.js';
import {
  FinancialConnections as FinancialConnectionsNamespace2,
  Institution,
  InstitutionResource,
} from './Institutions.js';
import {
  FinancialConnections as FinancialConnectionsNamespace3,
  Session,
  SessionResource,
} from './Sessions.js';
import {
  FinancialConnections as FinancialConnectionsNamespace4,
  Transaction,
  TransactionResource,
} from './Transactions.js';
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
  export import AccountListParams = FinancialConnectionsNamespace0.AccountListParams;
  export import AccountRetrieveParams = FinancialConnectionsNamespace0.AccountRetrieveParams;
  export import AccountDisconnectParams = FinancialConnectionsNamespace0.AccountDisconnectParams;
  export import AccountRefreshParams = FinancialConnectionsNamespace0.AccountRefreshParams;
  export import AccountSubscribeParams = FinancialConnectionsNamespace0.AccountSubscribeParams;
  export import AccountUnsubscribeParams = FinancialConnectionsNamespace0.AccountUnsubscribeParams;
  export import AccountListInferredBalancesParams = FinancialConnectionsNamespace0.AccountListInferredBalancesParams;
  export import AccountListOwnersParams = FinancialConnectionsNamespace0.AccountListOwnersParams;
  export {Account, AccountResource};
  export import AuthorizationRetrieveParams = FinancialConnectionsNamespace1.AuthorizationRetrieveParams;
  export {Authorization, AuthorizationResource};
  export import InstitutionListParams = FinancialConnectionsNamespace2.InstitutionListParams;
  export import InstitutionRetrieveParams = FinancialConnectionsNamespace2.InstitutionRetrieveParams;
  export {Institution, InstitutionResource};
  export import SessionRetrieveParams = FinancialConnectionsNamespace3.SessionRetrieveParams;
  export import SessionCreateParams = FinancialConnectionsNamespace3.SessionCreateParams;
  export {Session, SessionResource};
  export import TransactionListParams = FinancialConnectionsNamespace4.TransactionListParams;
  export import TransactionRetrieveParams = FinancialConnectionsNamespace4.TransactionRetrieveParams;
  export {Transaction, TransactionResource};
  export {AccountOwner};
  export {AccountOwnership};
  export {AccountInferredBalance};
}
