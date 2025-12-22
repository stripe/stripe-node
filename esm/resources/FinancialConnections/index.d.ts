import { StripeClient } from '../../stripe.core.js';
import { AccountResource } from './Accounts.js';
import { SessionResource } from './Sessions.js';
import { TransactionResource } from './Transactions.js';
export { Account } from './Accounts.js';
export { Session } from './Sessions.js';
export { Transaction } from './Transactions.js';
export declare class FinancialConnections {
    private readonly stripe;
    accounts: AccountResource;
    sessions: SessionResource;
    transactions: TransactionResource;
    constructor(stripe: StripeClient);
}
