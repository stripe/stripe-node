// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {RequestOptions} from '../../../../lib.js';
import {QuantityChangeResource} from './LicensePricing/QuantityChanges.js';
import {Stripe} from '../../../../stripe.core.js';
export class LicensePricingResource extends StripeResource {
  quantityChanges: QuantityChangeResource;

  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.quantityChanges = new QuantityChangeResource(stripe);
  }
}
