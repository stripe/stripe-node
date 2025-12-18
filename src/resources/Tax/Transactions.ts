// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../Types.js';
import {TransactionLineItem} from './TransactionLineItems.js';
import {
  MetadataParam,
  PaginationParams,
  Metadata,
  Address,
} from '../../shared.js';
import {Response, ApiListPromise, ApiList} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class TransactionResource extends StripeResource {
  /**
   * Retrieves a Tax Transaction object.
   */
  retrieve(
    id: string,
    params?: Tax.TransactionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Transaction>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<Transaction>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/tax/transactions/{transaction}',
    }).call(this, ...args);
  }

  /**
   * Creates a Tax Transaction from a calculation, if that calculation hasn't expired. Calculations expire after 90 days.
   */
  createFromCalculation(
    params: Tax.TransactionCreateFromCalculationParams,
    options?: RequestOptions
  ): Promise<Response<Transaction>>;
  createFromCalculation(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/tax/transactions/create_from_calculation',
    }).call(this, ...args);
  }

  /**
   * Partially or fully reverses a previously created Transaction.
   */
  createReversal(
    params: Tax.TransactionCreateReversalParams,
    options?: RequestOptions
  ): Promise<Response<Transaction>>;
  createReversal(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/tax/transactions/create_reversal',
    }).call(this, ...args);
  }

  /**
   * Retrieves the line items of a committed standalone transaction as a collection.
   */
  listLineItems(
    id: string,
    params?: Tax.TransactionListLineItemsParams,
    options?: RequestOptions
  ): ApiListPromise<TransactionLineItem>;
  listLineItems(
    id: string,
    options?: RequestOptions
  ): ApiListPromise<TransactionLineItem>;
  listLineItems(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/tax/transactions/{transaction}/line_items',
      methodType: 'list',
    }).call(this, ...args);
  }
}
export /**
 * A Tax Transaction records the tax collected from or refunded to your customer.
 *
 * Related guide: [Calculate tax in your custom payment flow](https://stripe.com/docs/tax/custom#tax-transaction)
 */
interface Transaction {
  /**
   * Unique identifier for the transaction.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'tax.transaction';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * The ID of an existing [Customer](https://stripe.com/docs/api/customers/object) used for the resource.
   */
  customer: string | null;

  customer_details: Tax.Transaction.CustomerDetails;

  /**
   * The tax collected or refunded, by line item.
   */
  line_items?: ApiList<TransactionLineItem> | null;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * The Unix timestamp representing when the tax liability is assumed or reduced.
   */
  posted_at: number;

  /**
   * A custom unique identifier, such as 'myOrder_123'.
   */
  reference: string;

  /**
   * If `type=reversal`, contains information about what was reversed.
   */
  reversal: Tax.Transaction.Reversal | null;

  /**
   * The details of the ship from location, such as the address.
   */
  ship_from_details: Tax.Transaction.ShipFromDetails | null;

  /**
   * The shipping cost details for the transaction.
   */
  shipping_cost: Tax.Transaction.ShippingCost | null;

  /**
   * Timestamp of date at which the tax rules and rates in effect applies for the calculation.
   */
  tax_date: number;

  /**
   * If `reversal`, this transaction reverses an earlier transaction.
   */
  type: Tax.Transaction.Type;
}
export namespace Tax {
  export namespace Transaction {
    export interface CustomerDetails {
      /**
       * The customer's postal address (for example, home or business location).
       */
      address: Address | null;

      /**
       * The type of customer address provided.
       */
      address_source: CustomerDetails.AddressSource | null;

      /**
       * The customer's IP address (IPv4 or IPv6).
       */
      ip_address: string | null;

      /**
       * The customer's tax IDs (for example, EU VAT numbers).
       */
      tax_ids: Array<CustomerDetails.TaxId>;

      /**
       * The taxability override used for taxation.
       */
      taxability_override: CustomerDetails.TaxabilityOverride;
    }

    export interface Reversal {
      /**
       * The `id` of the reversed `Transaction` object.
       */
      original_transaction: string | null;
    }

    export interface ShipFromDetails {
      address: Address;
    }

    export interface ShippingCost {
      /**
       * The shipping amount in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes were calculated on top of this amount.
       */
      amount: number;

      /**
       * The amount of tax calculated for shipping, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
       */
      amount_tax: number;

      /**
       * The ID of an existing [ShippingRate](https://stripe.com/docs/api/shipping_rates/object).
       */
      shipping_rate?: string;

      /**
       * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes.
       */
      tax_behavior: ShippingCost.TaxBehavior;

      /**
       * Detailed account of taxes relevant to shipping cost. (It is not populated for the transaction resource object and will be removed in the next API version.)
       */
      tax_breakdown?: Array<ShippingCost.TaxBreakdown>;

      /**
       * The [tax code](https://stripe.com/docs/tax/tax-categories) ID used for shipping.
       */
      tax_code: string;
    }

    export type Type = 'reversal' | 'transaction';

    export namespace CustomerDetails {
      export type AddressSource = 'billing' | 'shipping';

      export interface TaxId {
        /**
         * The type of the tax ID, one of `ad_nrt`, `ar_cuit`, `eu_vat`, `bo_tin`, `br_cnpj`, `br_cpf`, `cn_tin`, `co_nit`, `cr_tin`, `do_rcn`, `ec_ruc`, `eu_oss_vat`, `hr_oib`, `pe_ruc`, `ro_tin`, `rs_pib`, `sv_nit`, `uy_ruc`, `ve_rif`, `vn_tin`, `gb_vat`, `nz_gst`, `au_abn`, `au_arn`, `in_gst`, `no_vat`, `no_voec`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `li_uid`, `li_vat`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, `il_vat`, `ge_vat`, `ua_vat`, `is_vat`, `bg_uic`, `hu_tin`, `si_tin`, `ke_pin`, `tr_tin`, `eg_tin`, `ph_tin`, `al_tin`, `bh_vat`, `kz_bin`, `ng_tin`, `om_vat`, `de_stn`, `ch_uid`, `tz_vat`, `uz_vat`, `uz_tin`, `md_vat`, `ma_vat`, `by_tin`, `ao_tin`, `bs_tin`, `bb_tin`, `cd_nif`, `mr_nif`, `me_pib`, `zw_tin`, `ba_tin`, `gn_nif`, `mk_vat`, `sr_fin`, `sn_ninea`, `am_tin`, `np_pan`, `tj_tin`, `ug_tin`, `zm_tin`, `kh_tin`, `aw_tin`, `az_tin`, `bd_bin`, `bj_ifu`, `et_tin`, `kg_tin`, `la_tin`, `cm_niu`, `cv_nif`, `bf_ifu`, or `unknown`
         */
        type: TaxId.Type;

        /**
         * The value of the tax ID.
         */
        value: string;
      }

      export type TaxabilityOverride =
        | 'customer_exempt'
        | 'none'
        | 'reverse_charge';

      export namespace TaxId {
        export type Type =
          | 'ad_nrt'
          | 'ae_trn'
          | 'al_tin'
          | 'am_tin'
          | 'ao_tin'
          | 'ar_cuit'
          | 'au_abn'
          | 'au_arn'
          | 'aw_tin'
          | 'az_tin'
          | 'ba_tin'
          | 'bb_tin'
          | 'bd_bin'
          | 'bf_ifu'
          | 'bg_uic'
          | 'bh_vat'
          | 'bj_ifu'
          | 'bo_tin'
          | 'br_cnpj'
          | 'br_cpf'
          | 'bs_tin'
          | 'by_tin'
          | 'ca_bn'
          | 'ca_gst_hst'
          | 'ca_pst_bc'
          | 'ca_pst_mb'
          | 'ca_pst_sk'
          | 'ca_qst'
          | 'cd_nif'
          | 'ch_uid'
          | 'ch_vat'
          | 'cl_tin'
          | 'cm_niu'
          | 'cn_tin'
          | 'co_nit'
          | 'cr_tin'
          | 'cv_nif'
          | 'de_stn'
          | 'do_rcn'
          | 'ec_ruc'
          | 'eg_tin'
          | 'es_cif'
          | 'et_tin'
          | 'eu_oss_vat'
          | 'eu_vat'
          | 'gb_vat'
          | 'ge_vat'
          | 'gn_nif'
          | 'hk_br'
          | 'hr_oib'
          | 'hu_tin'
          | 'id_npwp'
          | 'il_vat'
          | 'in_gst'
          | 'is_vat'
          | 'jp_cn'
          | 'jp_rn'
          | 'jp_trn'
          | 'ke_pin'
          | 'kg_tin'
          | 'kh_tin'
          | 'kr_brn'
          | 'kz_bin'
          | 'la_tin'
          | 'li_uid'
          | 'li_vat'
          | 'ma_vat'
          | 'md_vat'
          | 'me_pib'
          | 'mk_vat'
          | 'mr_nif'
          | 'mx_rfc'
          | 'my_frp'
          | 'my_itn'
          | 'my_sst'
          | 'ng_tin'
          | 'no_vat'
          | 'no_voec'
          | 'np_pan'
          | 'nz_gst'
          | 'om_vat'
          | 'pe_ruc'
          | 'ph_tin'
          | 'ro_tin'
          | 'rs_pib'
          | 'ru_inn'
          | 'ru_kpp'
          | 'sa_vat'
          | 'sg_gst'
          | 'sg_uen'
          | 'si_tin'
          | 'sn_ninea'
          | 'sr_fin'
          | 'sv_nit'
          | 'th_vat'
          | 'tj_tin'
          | 'tr_tin'
          | 'tw_vat'
          | 'tz_vat'
          | 'ua_vat'
          | 'ug_tin'
          | 'unknown'
          | 'us_ein'
          | 'uy_ruc'
          | 'uz_tin'
          | 'uz_vat'
          | 've_rif'
          | 'vn_tin'
          | 'za_vat'
          | 'zm_tin'
          | 'zw_tin';
      }
    }

    export namespace ShippingCost {
      export type TaxBehavior = 'exclusive' | 'inclusive';

      export interface TaxBreakdown {
        /**
         * The amount of tax, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
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
         * The amount on which tax is calculated, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
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

        export type Sourcing = 'destination' | 'origin';

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
            | 'amusement_tax'
            | 'communications_tax'
            | 'gst'
            | 'hst'
            | 'igst'
            | 'jct'
            | 'lease_tax'
            | 'pst'
            | 'qst'
            | 'retail_delivery_fee'
            | 'rst'
            | 'sales_tax'
            | 'service_tax'
            | 'vat';
        }
      }
    }
  }
}
export namespace Tax {
  export interface TransactionRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Tax {
  export interface TransactionCreateFromCalculationParams {
    /**
     * Tax Calculation ID to be used as input when creating the transaction.
     */
    calculation: string;

    /**
     * A custom order or sale identifier, such as 'myOrder_123'. Must be unique across all transactions, including reversals.
     */
    reference: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;

    /**
     * The Unix timestamp representing when the tax liability is assumed or reduced, which determines the liability posting period and handling in tax liability reports. The timestamp must fall within the `tax_date` and the current time, unless the `tax_date` is scheduled in advance. Defaults to the current time.
     */
    posted_at?: number;
  }
}
export namespace Tax {
  export interface TransactionCreateReversalParams {
    /**
     * If `partial`, the provided line item or shipping cost amounts are reversed. If `full`, the original transaction is fully reversed.
     */
    mode: TransactionCreateReversalParams.Mode;

    /**
     * The ID of the Transaction to partially or fully reverse.
     */
    original_transaction: string;

    /**
     * A custom identifier for this reversal, such as `myOrder_123-refund_1`, which must be unique across all transactions. The reference helps identify this reversal transaction in exported [tax reports](https://stripe.com/docs/tax/reports).
     */
    reference: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A flat amount to reverse across the entire transaction, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) in negative. This value represents the total amount to refund from the transaction, including taxes.
     */
    flat_amount?: number;

    /**
     * The line item amounts to reverse.
     */
    line_items?: Array<TransactionCreateReversalParams.LineItem>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;

    /**
     * The shipping cost to reverse.
     */
    shipping_cost?: TransactionCreateReversalParams.ShippingCost;
  }

  export namespace TransactionCreateReversalParams {
    export type Mode = 'full' | 'partial';

    export interface LineItem {
      /**
       * The amount to reverse, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) in negative.
       */
      amount: number;

      /**
       * The amount of tax to reverse, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) in negative.
       */
      amount_tax: number;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;

      /**
       * The `id` of the line item to reverse in the original transaction.
       */
      original_line_item: string;

      /**
       * The quantity reversed. Appears in [tax exports](https://stripe.com/docs/tax/reports), but does not affect the amount of tax reversed.
       */
      quantity?: number;

      /**
       * A custom identifier for this line item in the reversal transaction, such as 'L1-refund'.
       */
      reference: string;
    }

    export interface ShippingCost {
      /**
       * The amount to reverse, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) in negative.
       */
      amount: number;

      /**
       * The amount of tax to reverse, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) in negative.
       */
      amount_tax: number;
    }
  }
}
export namespace Tax {
  export interface TransactionListLineItemsParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
