// File generated from our OpenAPI spec
import { OrderResource } from './Orders.js';
import { ProductResource } from './Products.js';
import { SupplierResource } from './Suppliers.js';
export class Climate {
    constructor(stripe) {
        this.stripe = stripe;
        this.orders = new OrderResource(stripe);
        this.products = new ProductResource(stripe);
        this.suppliers = new SupplierResource(stripe);
    }
}
