// File generated from our OpenAPI spec
import { CalculationResource } from './Calculations.js';
import { RegistrationResource } from './Registrations.js';
import { SettingResource } from './Settings.js';
import { TransactionResource } from './Transactions.js';
export class Tax {
    constructor(stripe) {
        this.stripe = stripe;
        this.calculations = new CalculationResource(stripe);
        this.registrations = new RegistrationResource(stripe);
        this.settings = new SettingResource(stripe);
        this.transactions = new TransactionResource(stripe);
    }
}
