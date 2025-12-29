import { Stripe } from '../../stripe.core.js';
import { Order, OrderResource } from './Orders.js';
import { Product, ProductResource } from './Products.js';
import { Supplier, SupplierResource } from './Suppliers.js';
export { Order } from './Orders.js';
export { Product } from './Products.js';
export { Supplier } from './Suppliers.js';
export declare class Climate {
    private readonly stripe;
    orders: OrderResource;
    products: ProductResource;
    suppliers: SupplierResource;
    constructor(stripe: Stripe);
}
export declare namespace Climate {
    export { Order };
    export { Product };
    export { Supplier };
}
