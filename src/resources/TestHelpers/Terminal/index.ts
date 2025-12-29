// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {ReaderResource} from './Readers.js';

export class Terminal {
  readers: ReaderResource;

  constructor(private readonly stripe: Stripe) {
    this.readers = new ReaderResource(stripe);
  }
}

export declare namespace Terminal {}
