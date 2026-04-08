// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {Climate as ClimateNamespace0, Order, OrderResource} from './Orders.js';
import {
  Climate as ClimateNamespace1,
  Product,
  ProductResource,
} from './Products.js';
import {
  Climate as ClimateNamespace2,
  Supplier,
  SupplierResource,
} from './Suppliers.js';

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
  export type OrderListParams = ClimateNamespace0.OrderListParams;
  export type OrderCreateParams = ClimateNamespace0.OrderCreateParams;
  export type OrderRetrieveParams = ClimateNamespace0.OrderRetrieveParams;
  export type OrderUpdateParams = ClimateNamespace0.OrderUpdateParams;
  export type OrderCancelParams = ClimateNamespace0.OrderCancelParams;
  export {Order};
  export type ProductListParams = ClimateNamespace1.ProductListParams;
  export type ProductRetrieveParams = ClimateNamespace1.ProductRetrieveParams;
  export {Product};
  export type SupplierListParams = ClimateNamespace2.SupplierListParams;
  export type SupplierRetrieveParams = ClimateNamespace2.SupplierRetrieveParams;
  export {Supplier};
}
