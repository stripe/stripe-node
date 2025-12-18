import { Stripe } from '../../stripe.core.js';
import { CalculationResource } from './Calculations.js';
import { RegistrationResource } from './Registrations.js';
import { SettingResource } from './Settings.js';
import { TransactionResource } from './Transactions.js';
export { Calculation } from './Calculations.js';
export { Registration } from './Registrations.js';
export { Settings } from './Settings.js';
export { Transaction } from './Transactions.js';
export declare class Tax {
    private readonly stripe;
    calculations: CalculationResource;
    registrations: RegistrationResource;
    settings: SettingResource;
    transactions: TransactionResource;
    constructor(stripe: Stripe);
}
