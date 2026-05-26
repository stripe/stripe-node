// File generated from our OpenAPI spec

import {Stripe} from '../../../../stripe.core.js';
import {V2 as V2Namespace0, ImportResource} from './Imports.js';

export class ProductCatalog {
  imports: ImportResource;

  constructor(private readonly stripe: Stripe) {
    this.imports = new ImportResource(stripe);
  }
}

export declare namespace ProductCatalog {}
