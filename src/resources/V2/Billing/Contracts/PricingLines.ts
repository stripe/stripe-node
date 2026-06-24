// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {RequestOptions} from '../../../../lib.js';
import {QuantityChangeResource} from './PricingLines/QuantityChanges.js';
import {Stripe} from '../../../../stripe.core.js';
export class PricingLineResource extends StripeResource {
  quantityChanges: QuantityChangeResource;

  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.quantityChanges = new QuantityChangeResource(stripe);
  }
}
