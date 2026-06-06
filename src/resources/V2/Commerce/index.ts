// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {ProductCatalogImport} from './ProductCatalogImports.js';
import {ProductCatalog} from './ProductCatalog/index.js';

export {ProductCatalogImport} from './ProductCatalogImports.js';

export class Commerce {
  productCatalog: ProductCatalog;

  constructor(private readonly stripe: Stripe) {
    this.productCatalog = new ProductCatalog(stripe);
  }
}

export declare namespace Commerce {
  export {ProductCatalogImport};
  export {ProductCatalog};
}
