// File generated from our OpenAPI spec
import { AssociationResource } from './Associations.js';
import { CalculationResource } from './Calculations.js';
import { RegistrationResource } from './Registrations.js';
import { SettingResource } from './Settings.js';
import { TransactionResource } from './Transactions.js';
export class Tax {
    constructor(stripe) {
        this.stripe = stripe;
        this.associations = new AssociationResource(stripe);
        this.calculations = new CalculationResource(stripe);
        this.registrations = new RegistrationResource(stripe);
        this.settings = new SettingResource(stripe);
        this.transactions = new TransactionResource(stripe);
    }
}
//# sourceMappingURL=index.js.map