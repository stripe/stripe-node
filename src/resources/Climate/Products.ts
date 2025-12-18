// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../Types.js';
import {Supplier} from './Suppliers.js';
import {PaginationParams} from '../../shared.js';
import {ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class ProductResource extends StripeResource {
  /**
   * Lists all available Climate product objects.
   */
  list(
    params?: Climate.ProductListParams,
    options?: RequestOptions
  ): ApiListPromise<Product>;
  list(options?: RequestOptions): ApiListPromise<Product>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/climate/products',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of a Climate product with the given ID.
   */
  retrieve(
    id: string,
    params?: Climate.ProductRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Product>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Product>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/climate/products/{product}',
    }).call(this, ...args);
  }
}
export /**
 * A Climate product represents a type of carbon removal unit available for reservation.
 * You can retrieve it to see the current price and availability.
 */
interface Product {
  /**
   * Unique identifier for the object. For convenience, Climate product IDs are human-readable strings
   * that start with `climsku_`. See [carbon removal inventory](https://stripe.com/docs/climate/orders/carbon-removal-inventory)
   * for a list of available carbon removal products.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'climate.product';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Current prices for a metric ton of carbon removal in a currency's smallest unit.
   */
  current_prices_per_metric_ton: {
    [key: string]: Climate.Product.CurrentPricesPerMetricTon;
  };

  /**
   * The year in which the carbon removal is expected to be delivered.
   */
  delivery_year: number | null;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The quantity of metric tons available for reservation.
   */
  metric_tons_available: string;

  /**
   * The Climate product's name.
   */
  name: string;

  /**
   * The carbon removal suppliers that fulfill orders for this Climate product.
   */
  suppliers: Array<Supplier>;
}
export namespace Climate {
  export namespace Product {
    export interface CurrentPricesPerMetricTon {
      /**
       * Fees for one metric ton of carbon removal in the currency's smallest unit.
       */
      amount_fees: number;

      /**
       * Subtotal for one metric ton of carbon removal (excluding fees) in the currency's smallest unit.
       */
      amount_subtotal: number;

      /**
       * Total for one metric ton of carbon removal (including fees) in the currency's smallest unit.
       */
      amount_total: number;
    }
  }
}
export namespace Climate {
  export interface ProductRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Climate {
  export interface ProductListParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
