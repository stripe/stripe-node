// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {OrderResource} from './Orders.js';
import {ProductResource} from './Products.js';
import {SupplierResource} from './Suppliers.js';

export {Order} from './Orders.js';
export {Product} from './Products.js';
export {Supplier} from './Suppliers.js';

export class Climate {
  orders: OrderResource;
  products: ProductResource;
  suppliers: SupplierResource;

  constructor(private readonly stripe: Stripe) {
    this.orders = new OrderResource(stripe);
    this.products = new ProductResource(stripe);
    this.suppliers = new SupplierResource(stripe);
  }
}
