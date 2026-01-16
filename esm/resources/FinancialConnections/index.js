// File generated from our OpenAPI spec
import { AccountResource } from './Accounts.js';
import { SessionResource } from './Sessions.js';
import { TransactionResource } from './Transactions.js';
export class FinancialConnections {
    constructor(stripe) {
        this.stripe = stripe;
        this.accounts = new AccountResource(stripe);
        this.sessions = new SessionResource(stripe);
        this.transactions = new TransactionResource(stripe);
    }
}
//# sourceMappingURL=index.js.map