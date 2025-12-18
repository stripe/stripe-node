import { StripeResource } from '../../StripeResource.js';
import { RequestOptions } from '../../Types.js';
import { CalculationLineItem } from './CalculationLineItems.js';
import { MetadataParam, Address, Emptyable, PaginationParams } from '../../shared.js';
import { Response, ApiListPromise, ApiList } from '../../lib.js';
export declare class CalculationResource extends StripeResource {
    /**
     * Retrieves a Tax Calculation object, if the calculation hasn't expired.
     */
    retrieve(id: string, params?: Tax.CalculationRetrieveParams, options?: RequestOptions): Promise<Response<Calculation>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<Calculation>>;
    /**
     * Calculates tax based on the input and returns a Tax Calculation object.
     */
    create(params: Tax.CalculationCreateParams, options?: RequestOptions): Promise<Response<Calculation>>;
    /**
     * Retrieves the line items of a tax calculation as a collection, if the calculation hasn't expired.
     */
    listLineItems(id: string, params?: Tax.CalculationListLineItemsParams, options?: RequestOptions): ApiListPromise<CalculationLineItem>;
    listLineItems(id: string, options?: RequestOptions): ApiListPromise<CalculationLineItem>;
}
export /**
 * A Tax Calculation allows you to calculate the tax to collect from your customer.
 *
 * Related guide: [Calculate tax in your custom payment flow](https://stripe.com/docs/tax/custom)
 */ interface Calculation {
    /**
     * Unique identifier for the calculation.
     */
    id: string | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'tax.calculation';
    /**
     * Total amount after taxes in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    amount_total: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * The ID of an existing [Customer](https://stripe.com/docs/api/customers/object) used for the resource.
     */
    customer: string | null;
    customer_details: Tax.Calculation.CustomerDetails;
    /**
     * Timestamp of date at which the tax calculation will expire.
     */
    expires_at: number | null;
    /**
     * The list of items the customer is purchasing.
     */
    line_items?: ApiList<CalculationLineItem> | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The details of the ship from location, such as the address.
     */
    ship_from_details: Tax.Calculation.ShipFromDetails | null;
    /**
     * The shipping cost details for the calculation.
     */
    shipping_cost: Tax.Calculation.ShippingCost | null;
    /**
     * The amount of tax to be collected on top of the line item prices.
     */
    tax_amount_exclusive: number;
    /**
     * The amount of tax already included in the line item prices.
     */
    tax_amount_inclusive: number;
    /**
     * Breakdown of individual tax amounts that add up to the total.
     */
    tax_breakdown: Array<Tax.Calculation.TaxBreakdown>;
    /**
     * Timestamp of date at which the tax rules and rates in effect applies for the calculation.
     */
    tax_date: number;
}
export declare namespace Tax {
    namespace Calculation {
        interface CustomerDetails {
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
        interface ShipFromDetails {
            address: Address;
        }
        interface ShippingCost {
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
             * Detailed account of taxes relevant to shipping cost.
             */
            tax_breakdown?: Array<ShippingCost.TaxBreakdown>;
            /**
             * The [tax code](https://stripe.com/docs/tax/tax-categories) ID used for shipping.
             */
            tax_code: string;
        }
        interface TaxBreakdown {
            /**
             * The amount of tax, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
             */
            amount: number;
            /**
             * Specifies whether the tax amount is included in the line item amount.
             */
            inclusive: boolean;
            tax_rate_details: TaxBreakdown.TaxRateDetails;
            /**
             * The reasoning behind this tax, for example, if the product is tax exempt. We might extend the possible values for this field to support new tax rules.
             */
            taxability_reason: TaxBreakdown.TaxabilityReason;
            /**
             * The amount on which tax is calculated, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
             */
            taxable_amount: number;
        }
        namespace CustomerDetails {
            type AddressSource = 'billing' | 'shipping';
            interface TaxId {
                /**
                 * The type of the tax ID, one of `ad_nrt`, `ar_cuit`, `eu_vat`, `bo_tin`, `br_cnpj`, `br_cpf`, `cn_tin`, `co_nit`, `cr_tin`, `do_rcn`, `ec_ruc`, `eu_oss_vat`, `hr_oib`, `pe_ruc`, `ro_tin`, `rs_pib`, `sv_nit`, `uy_ruc`, `ve_rif`, `vn_tin`, `gb_vat`, `nz_gst`, `au_abn`, `au_arn`, `in_gst`, `no_vat`, `no_voec`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `li_uid`, `li_vat`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, `il_vat`, `ge_vat`, `ua_vat`, `is_vat`, `bg_uic`, `hu_tin`, `si_tin`, `ke_pin`, `tr_tin`, `eg_tin`, `ph_tin`, `al_tin`, `bh_vat`, `kz_bin`, `ng_tin`, `om_vat`, `de_stn`, `ch_uid`, `tz_vat`, `uz_vat`, `uz_tin`, `md_vat`, `ma_vat`, `by_tin`, `ao_tin`, `bs_tin`, `bb_tin`, `cd_nif`, `mr_nif`, `me_pib`, `zw_tin`, `ba_tin`, `gn_nif`, `mk_vat`, `sr_fin`, `sn_ninea`, `am_tin`, `np_pan`, `tj_tin`, `ug_tin`, `zm_tin`, `kh_tin`, `aw_tin`, `az_tin`, `bd_bin`, `bj_ifu`, `et_tin`, `kg_tin`, `la_tin`, `cm_niu`, `cv_nif`, `bf_ifu`, or `unknown`
                 */
                type: TaxId.Type;
                /**
                 * The value of the tax ID.
                 */
                value: string;
            }
            type TaxabilityOverride = 'customer_exempt' | 'none' | 'reverse_charge';
            namespace TaxId {
                type Type = 'ad_nrt' | 'ae_trn' | 'al_tin' | 'am_tin' | 'ao_tin' | 'ar_cuit' | 'au_abn' | 'au_arn' | 'aw_tin' | 'az_tin' | 'ba_tin' | 'bb_tin' | 'bd_bin' | 'bf_ifu' | 'bg_uic' | 'bh_vat' | 'bj_ifu' | 'bo_tin' | 'br_cnpj' | 'br_cpf' | 'bs_tin' | 'by_tin' | 'ca_bn' | 'ca_gst_hst' | 'ca_pst_bc' | 'ca_pst_mb' | 'ca_pst_sk' | 'ca_qst' | 'cd_nif' | 'ch_uid' | 'ch_vat' | 'cl_tin' | 'cm_niu' | 'cn_tin' | 'co_nit' | 'cr_tin' | 'cv_nif' | 'de_stn' | 'do_rcn' | 'ec_ruc' | 'eg_tin' | 'es_cif' | 'et_tin' | 'eu_oss_vat' | 'eu_vat' | 'gb_vat' | 'ge_vat' | 'gn_nif' | 'hk_br' | 'hr_oib' | 'hu_tin' | 'id_npwp' | 'il_vat' | 'in_gst' | 'is_vat' | 'jp_cn' | 'jp_rn' | 'jp_trn' | 'ke_pin' | 'kg_tin' | 'kh_tin' | 'kr_brn' | 'kz_bin' | 'la_tin' | 'li_uid' | 'li_vat' | 'ma_vat' | 'md_vat' | 'me_pib' | 'mk_vat' | 'mr_nif' | 'mx_rfc' | 'my_frp' | 'my_itn' | 'my_sst' | 'ng_tin' | 'no_vat' | 'no_voec' | 'np_pan' | 'nz_gst' | 'om_vat' | 'pe_ruc' | 'ph_tin' | 'ro_tin' | 'rs_pib' | 'ru_inn' | 'ru_kpp' | 'sa_vat' | 'sg_gst' | 'sg_uen' | 'si_tin' | 'sn_ninea' | 'sr_fin' | 'sv_nit' | 'th_vat' | 'tj_tin' | 'tr_tin' | 'tw_vat' | 'tz_vat' | 'ua_vat' | 'ug_tin' | 'unknown' | 'us_ein' | 'uy_ruc' | 'uz_tin' | 'uz_vat' | 've_rif' | 'vn_tin' | 'za_vat' | 'zm_tin' | 'zw_tin';
            }
        }
        namespace ShippingCost {
            type TaxBehavior = 'exclusive' | 'inclusive';
            interface TaxBreakdown {
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
            namespace TaxBreakdown {
                interface Jurisdiction {
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
                type Sourcing = 'destination' | 'origin';
                interface TaxRateDetails {
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
                type TaxabilityReason = 'customer_exempt' | 'not_collecting' | 'not_subject_to_tax' | 'not_supported' | 'portion_product_exempt' | 'portion_reduced_rated' | 'portion_standard_rated' | 'product_exempt' | 'product_exempt_holiday' | 'proportionally_rated' | 'reduced_rated' | 'reverse_charge' | 'standard_rated' | 'taxable_basis_reduced' | 'zero_rated';
                namespace Jurisdiction {
                    type Level = 'city' | 'country' | 'county' | 'district' | 'state';
                }
                namespace TaxRateDetails {
                    type TaxType = 'amusement_tax' | 'communications_tax' | 'gst' | 'hst' | 'igst' | 'jct' | 'lease_tax' | 'pst' | 'qst' | 'retail_delivery_fee' | 'rst' | 'sales_tax' | 'service_tax' | 'vat';
                }
            }
        }
        namespace TaxBreakdown {
            interface TaxRateDetails {
                /**
                 * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                 */
                country: string | null;
                /**
                 * The amount of the tax rate when the `rate_type` is `flat_amount`. Tax rates with `rate_type` `percentage` can vary based on the transaction, resulting in this field being `null`. This field exposes the amount and currency of the flat tax rate.
                 */
                flat_amount: TaxRateDetails.FlatAmount | null;
                /**
                 * The tax rate percentage as a string. For example, 8.5% is represented as `"8.5"`.
                 */
                percentage_decimal: string;
                /**
                 * Indicates the type of tax rate applied to the taxable amount. This value can be `null` when no tax applies to the location. This field is only present for TaxRates created by Stripe Tax.
                 */
                rate_type: TaxRateDetails.RateType | null;
                /**
                 * State, county, province, or region.
                 */
                state: string | null;
                /**
                 * The tax type, such as `vat` or `sales_tax`.
                 */
                tax_type: TaxRateDetails.TaxType | null;
            }
            type TaxabilityReason = 'customer_exempt' | 'not_collecting' | 'not_subject_to_tax' | 'not_supported' | 'portion_product_exempt' | 'portion_reduced_rated' | 'portion_standard_rated' | 'product_exempt' | 'product_exempt_holiday' | 'proportionally_rated' | 'reduced_rated' | 'reverse_charge' | 'standard_rated' | 'taxable_basis_reduced' | 'zero_rated';
            namespace TaxRateDetails {
                interface FlatAmount {
                    /**
                     * Amount of the tax when the `rate_type` is `flat_amount`. This positive integer represents how much to charge in the smallest currency unit (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
                     */
                    amount: number;
                    /**
                     * Three-letter ISO currency code, in lowercase.
                     */
                    currency: string;
                }
                type RateType = 'flat_amount' | 'percentage';
                type TaxType = 'amusement_tax' | 'communications_tax' | 'gst' | 'hst' | 'igst' | 'jct' | 'lease_tax' | 'pst' | 'qst' | 'retail_delivery_fee' | 'rst' | 'sales_tax' | 'service_tax' | 'vat';
            }
        }
    }
}
export declare namespace Tax {
    interface CalculationCreateParams {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;
        /**
         * A list of items the customer is purchasing.
         */
        line_items: Array<CalculationCreateParams.LineItem>;
        /**
         * The ID of an existing customer to use for this calculation. If provided, the customer's address and tax IDs are copied to `customer_details`.
         */
        customer?: string;
        /**
         * Details about the customer, including address and tax IDs.
         */
        customer_details?: CalculationCreateParams.CustomerDetails;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Details about the address from which the goods are being shipped.
         */
        ship_from_details?: CalculationCreateParams.ShipFromDetails;
        /**
         * Shipping cost details to be used for the calculation.
         */
        shipping_cost?: CalculationCreateParams.ShippingCost;
        /**
         * Timestamp of date at which the tax rules and rates in effect applies for the calculation. Measured in seconds since the Unix epoch. Can be up to 48 hours in the past, and up to 48 hours in the future.
         */
        tax_date?: number;
    }
    namespace CalculationCreateParams {
        interface LineItem {
            /**
             * A positive integer representing the line item's total price in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
             * If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes are calculated on top of this amount.
             */
            amount: number;
            /**
             * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata?: MetadataParam;
            /**
             * If provided, the product's `tax_code` will be used as the line item's `tax_code`.
             */
            product?: string;
            /**
             * The number of units of the item being purchased. Used to calculate the per-unit price from the total `amount` for the line. For example, if `amount=100` and `quantity=4`, the calculated unit price is 25.
             */
            quantity?: number;
            /**
             * A custom identifier for this line item, which must be unique across the line items in the calculation. The reference helps identify each line item in exported [tax reports](https://stripe.com/docs/tax/reports).
             */
            reference?: string;
            /**
             * Specifies whether the `amount` includes taxes. Defaults to `exclusive`.
             */
            tax_behavior?: LineItem.TaxBehavior;
            /**
             * A [tax code](https://stripe.com/docs/tax/tax-categories) ID to use for this line item. If not provided, we will use the tax code from the provided `product` param. If neither `tax_code` nor `product` is provided, we will use the default tax code from your Tax Settings.
             */
            tax_code?: string;
        }
        interface CustomerDetails {
            /**
             * The customer's postal address (for example, home or business location).
             */
            address?: CustomerDetails.Address;
            /**
             * The type of customer address provided.
             */
            address_source?: CustomerDetails.AddressSource;
            /**
             * The customer's IP address (IPv4 or IPv6).
             */
            ip_address?: string;
            /**
             * The customer's tax IDs. Stripe Tax might consider a transaction with applicable tax IDs to be B2B, which might affect the tax calculation result. Stripe Tax doesn't validate tax IDs for correctness.
             */
            tax_ids?: Array<CustomerDetails.TaxId>;
            /**
             * Overrides the tax calculation result to allow you to not collect tax from your customer. Use this if you've manually checked your customer's tax exemptions. Prefer providing the customer's `tax_ids` where possible, which automatically determines whether `reverse_charge` applies.
             */
            taxability_override?: CustomerDetails.TaxabilityOverride;
        }
        interface ShipFromDetails {
            /**
             * The address from which the goods are being shipped from.
             */
            address: ShipFromDetails.Address;
        }
        interface ShippingCost {
            /**
             * A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) representing the shipping charge. If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes are calculated on top of this amount.
             */
            amount?: number;
            /**
             * If provided, the [shipping rate](https://stripe.com/docs/api/shipping_rates/object)'s `amount`, `tax_code` and `tax_behavior` are used. If you provide a shipping rate, then you cannot pass the `amount`, `tax_code`, or `tax_behavior` parameters.
             */
            shipping_rate?: string;
            /**
             * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes. Defaults to `exclusive`.
             */
            tax_behavior?: ShippingCost.TaxBehavior;
            /**
             * The [tax code](https://stripe.com/docs/tax/tax-categories) used to calculate tax on shipping. If not provided, the default shipping tax code from your [Tax Settings](https://dashboard.stripe.com/settings/tax) is used.
             */
            tax_code?: string;
        }
        namespace CustomerDetails {
            interface Address {
                /**
                 * City, district, suburb, town, or village.
                 */
                city?: Emptyable<string>;
                /**
                 * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                 */
                country: string;
                /**
                 * Address line 1, such as the street, PO Box, or company name.
                 */
                line1?: Emptyable<string>;
                /**
                 * Address line 2, such as the apartment, suite, unit, or building.
                 */
                line2?: Emptyable<string>;
                /**
                 * ZIP or postal code.
                 */
                postal_code?: Emptyable<string>;
                /**
                 * State, county, province, or region. We recommend sending [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) subdivision code value when possible.
                 */
                state?: Emptyable<string>;
            }
            type AddressSource = 'billing' | 'shipping';
            interface TaxId {
                /**
                 * Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `cd_nif`, `ch_uid`, `ch_vat`, `cl_tin`, `cm_niu`, `cn_tin`, `co_nit`, `cr_tin`, `cv_nif`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `et_tin`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `gn_nif`, `hk_br`, `hr_oib`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kg_tin`, `kh_tin`, `kr_brn`, `kz_bin`, `la_tin`, `li_uid`, `li_vat`, `ma_vat`, `md_vat`, `me_pib`, `mk_vat`, `mr_nif`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `np_pan`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sn_ninea`, `sr_fin`, `sv_nit`, `th_vat`, `tj_tin`, `tr_tin`, `tw_vat`, `tz_vat`, `ua_vat`, `ug_tin`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, `za_vat`, `zm_tin`, or `zw_tin`
                 */
                type: TaxId.Type;
                /**
                 * Value of the tax ID.
                 */
                value: string;
            }
            type TaxabilityOverride = 'customer_exempt' | 'none' | 'reverse_charge';
            namespace TaxId {
                type Type = 'ad_nrt' | 'ae_trn' | 'al_tin' | 'am_tin' | 'ao_tin' | 'ar_cuit' | 'au_abn' | 'au_arn' | 'aw_tin' | 'az_tin' | 'ba_tin' | 'bb_tin' | 'bd_bin' | 'bf_ifu' | 'bg_uic' | 'bh_vat' | 'bj_ifu' | 'bo_tin' | 'br_cnpj' | 'br_cpf' | 'bs_tin' | 'by_tin' | 'ca_bn' | 'ca_gst_hst' | 'ca_pst_bc' | 'ca_pst_mb' | 'ca_pst_sk' | 'ca_qst' | 'cd_nif' | 'ch_uid' | 'ch_vat' | 'cl_tin' | 'cm_niu' | 'cn_tin' | 'co_nit' | 'cr_tin' | 'cv_nif' | 'de_stn' | 'do_rcn' | 'ec_ruc' | 'eg_tin' | 'es_cif' | 'et_tin' | 'eu_oss_vat' | 'eu_vat' | 'gb_vat' | 'ge_vat' | 'gn_nif' | 'hk_br' | 'hr_oib' | 'hu_tin' | 'id_npwp' | 'il_vat' | 'in_gst' | 'is_vat' | 'jp_cn' | 'jp_rn' | 'jp_trn' | 'ke_pin' | 'kg_tin' | 'kh_tin' | 'kr_brn' | 'kz_bin' | 'la_tin' | 'li_uid' | 'li_vat' | 'ma_vat' | 'md_vat' | 'me_pib' | 'mk_vat' | 'mr_nif' | 'mx_rfc' | 'my_frp' | 'my_itn' | 'my_sst' | 'ng_tin' | 'no_vat' | 'no_voec' | 'np_pan' | 'nz_gst' | 'om_vat' | 'pe_ruc' | 'ph_tin' | 'ro_tin' | 'rs_pib' | 'ru_inn' | 'ru_kpp' | 'sa_vat' | 'sg_gst' | 'sg_uen' | 'si_tin' | 'sn_ninea' | 'sr_fin' | 'sv_nit' | 'th_vat' | 'tj_tin' | 'tr_tin' | 'tw_vat' | 'tz_vat' | 'ua_vat' | 'ug_tin' | 'us_ein' | 'uy_ruc' | 'uz_tin' | 'uz_vat' | 've_rif' | 'vn_tin' | 'za_vat' | 'zm_tin' | 'zw_tin';
            }
        }
        namespace LineItem {
            type TaxBehavior = 'exclusive' | 'inclusive';
        }
        namespace ShipFromDetails {
            interface Address {
                /**
                 * City, district, suburb, town, or village.
                 */
                city?: Emptyable<string>;
                /**
                 * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                 */
                country: string;
                /**
                 * Address line 1, such as the street, PO Box, or company name.
                 */
                line1?: Emptyable<string>;
                /**
                 * Address line 2, such as the apartment, suite, unit, or building.
                 */
                line2?: Emptyable<string>;
                /**
                 * ZIP or postal code.
                 */
                postal_code?: Emptyable<string>;
                /**
                 * State/province as an [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) subdivision code, without country prefix, such as "NY" or "TX".
                 */
                state?: Emptyable<string>;
            }
        }
        namespace ShippingCost {
            type TaxBehavior = 'exclusive' | 'inclusive';
        }
    }
}
export declare namespace Tax {
    interface CalculationRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Tax {
    interface CalculationListLineItemsParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
