import { Stripe } from '../../stripe.core.js';
import { OrderResource } from './Orders.js';
import { ProductResource } from './Products.js';
import { SupplierResource } from './Suppliers.js';
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
