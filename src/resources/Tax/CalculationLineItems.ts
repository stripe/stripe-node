// File generated from our OpenAPI spec

import {Metadata} from '../../shared.js';
import {RequestOptions} from '../../lib.js';
export interface CalculationLineItem {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'tax.calculation_line_item';

  /**
   * The line item amount in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes were calculated on top of this amount.
   */
  amount: number;

  /**
   * The amount of tax calculated for this line item, in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
   */
  amount_tax: number;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * Indicates the line item represents a performance where the venue location might determine the tax, not the customer address. Leave empty if the tax code doesn't require a tax location. If you provide this value for tax codes with an `optional` location requirement, it overrides the customer address.
   */
  performance_location?: string | null;

  /**
   * The ID of an existing [Product](https://docs.stripe.com/api/products/object).
   */
  product: string | null;

  /**
   * The number of units of the item being purchased. For reversals, this is the quantity reversed.
   */
  quantity: number;

  /**
   * A custom identifier for this line item.
   */
  reference: string;

  /**
   * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes.
   */
  tax_behavior: Tax.CalculationLineItem.TaxBehavior;

  /**
   * Detailed account of taxes relevant to this line item.
   */
  tax_breakdown?: Array<Tax.CalculationLineItem.TaxBreakdown> | null;

  /**
   * The [tax code](https://docs.stripe.com/tax/tax-categories) ID used for this resource.
   */
  tax_code: string;
}
export namespace Tax {
  export namespace CalculationLineItem {
    export type TaxBehavior = 'exclusive' | 'inclusive';

    export interface TaxBreakdown {
      /**
       * The amount of tax, in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
       */
      amount: number;

      jurisdiction: TaxBreakdown.Jurisdiction;

      /**
       * Indicates whether the jurisdiction was determined by the origin (merchant's address) or destination (customer's address).
       */
      sourcing: TaxBreakdown.Sourcing;

      /**
       * Details regarding the rate for this tax. This field will be `null` when the tax is not imposed, for example if the product is exempt from tax.
       */
      tax_rate_details: TaxBreakdown.TaxRateDetails | null;

      /**
       * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
       */
      taxability_reason: TaxBreakdown.TaxabilityReason;

      /**
       * The amount on which tax is calculated, in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
       */
      taxable_amount: number;
    }

    export namespace TaxBreakdown {
      export interface Jurisdiction {
        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country: string;

        /**
         * A human-readable name for the jurisdiction imposing the tax.
         */
        display_name: string;

        /**
         * Indicates the level of the jurisdiction imposing the tax.
         */
        level: Jurisdiction.Level;

        /**
         * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. For example, "NY" for New York, United States.
         */
        state: string | null;
      }

      export type Sourcing = 'destination' | 'origin' | 'performance';

      export interface TaxRateDetails {
        /**
         * A localized display name for tax type, intended to be human-readable. For example, "Local Sales and Use Tax", "Value-added tax (VAT)", or "Umsatzsteuer (USt.)".
         */
        display_name: string;

        /**
         * The tax rate percentage as a string. For example, 8.5% is represented as "8.5".
         */
        percentage_decimal: string;

        /**
         * The tax type, such as `vat` or `sales_tax`.
         */
        tax_type: TaxRateDetails.TaxType;
      }

      export type TaxabilityReason =
        | 'customer_exempt'
        | 'not_collecting'
        | 'not_subject_to_tax'
        | 'not_supported'
        | 'portion_product_exempt'
        | 'portion_reduced_rated'
        | 'portion_standard_rated'
        | 'product_exempt'
        | 'product_exempt_holiday'
        | 'proportionally_rated'
        | 'reduced_rated'
        | 'reverse_charge'
        | 'standard_rated'
        | 'taxable_basis_reduced'
        | 'zero_rated';

      export namespace Jurisdiction {
        export type Level =
          | 'city'
          | 'country'
          | 'county'
          | 'district'
          | 'state';
      }

      export namespace TaxRateDetails {
        export type TaxType =
          | 'admissions_tax'
          | 'amusement_tax'
          | 'attendance_tax'
          | 'communications_tax'
          | 'entertainment_tax'
          | 'gross_receipts_tax'
          | 'gst'
          | 'hospitality_tax'
          | 'hst'
          | 'igst'
          | 'jct'
          | 'lease_tax'
          | 'luxury_tax'
          | 'pst'
          | 'qst'
          | 'resort_tax'
          | 'retail_delivery_fee'
          | 'rst'
          | 'sales_tax'
          | 'service_tax'
          | 'tourism_tax'
          | 'vat';
      }
    }
  }
}
