// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {Order, OrderResource} from './Orders.js';
import {Product, ProductResource} from './Products.js';
import {Supplier, SupplierResource} from './Suppliers.js';

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

export declare namespace Climate {
  export {Order};
  export {Product};
  export {Supplier};
}
