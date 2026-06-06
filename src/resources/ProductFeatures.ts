// File generated from our OpenAPI spec

import * as Entitlements from './Entitlements/index.js';
import {RequestOptions} from '../lib.js';
export interface ProductFeature {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'product_feature';

  /**
   * Always true for a deleted object
   */
  deleted?: void;

  /**
   * A feature represents a monetizable ability or functionality in your system.
   * Features can be assigned to products, and when those products are purchased, Stripe will create an entitlement to the feature for the purchasing customer.
   */
  entitlement_feature: Entitlements.Feature;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;
}
export interface DeletedProductFeature {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'product_feature';

  /**
   * Always true for a deleted object
   */
  deleted: true;
}
