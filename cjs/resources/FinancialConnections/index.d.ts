import { Stripe } from '../../stripe.core.js';
import { Account, AccountResource } from './Accounts.js';
import { Session, SessionResource } from './Sessions.js';
import { Transaction, TransactionResource } from './Transactions.js';
import { AccountOwner } from './AccountOwners.js';
import { AccountOwnership } from './AccountOwnerships.js';
export { Account } from './Accounts.js';
export { Session } from './Sessions.js';
export { Transaction } from './Transactions.js';
export declare class FinancialConnections {
    private readonly stripe;
    accounts: AccountResource;
    sessions: SessionResource;
    transactions: TransactionResource;
    constructor(stripe: Stripe);
}
export declare namespace FinancialConnections {
    export { Account };
    export { Session };
    export { Transaction };
    export { AccountOwner };
    export { AccountOwnership };
}
