// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {AccountResource} from './Accounts.js';
import {SessionResource} from './Sessions.js';
import {TransactionResource} from './Transactions.js';

export {Account} from './Accounts.js';
export {Session} from './Sessions.js';
export {Transaction} from './Transactions.js';

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
