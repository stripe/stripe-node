import { Stripe } from '../../stripe.core.js';
import { Association, AssociationResource } from './Associations.js';
import { Calculation, CalculationResource } from './Calculations.js';
import { Registration, RegistrationResource } from './Registrations.js';
import { Settings, SettingResource } from './Settings.js';
import { Transaction, TransactionResource } from './Transactions.js';
import { CalculationLineItem } from './CalculationLineItems.js';
import { TransactionLineItem } from './TransactionLineItems.js';
export { Association } from './Associations.js';
export { Calculation } from './Calculations.js';
export { Registration } from './Registrations.js';
export { Settings } from './Settings.js';
export { Transaction } from './Transactions.js';
export declare class Tax {
    private readonly stripe;
    associations: AssociationResource;
    calculations: CalculationResource;
    registrations: RegistrationResource;
    settings: SettingResource;
    transactions: TransactionResource;
    constructor(stripe: Stripe);
}
export declare namespace Tax {
    export { Association };
    export { Calculation };
    export { Registration };
    export { Settings };
    export { Transaction };
    export { CalculationLineItem };
    export { TransactionLineItem };
}
