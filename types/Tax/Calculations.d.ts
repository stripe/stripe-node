// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      /**
       * A Tax Calculation allows you to calculate the tax to collect from your customer.
       *
       * Related guide: [Calculate tax in your custom payment flow](https://docs.stripe.com/tax/custom)
       */
      interface Calculation {
        /**
         * Unique identifier for the calculation.
         */
        id: string | null;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'tax.calculation';

        /**
         * Total amount after taxes in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
         */
        amount_total: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource.
         */
        customer: string | null;

        customer_details: Calculation.CustomerDetails;

        /**
         * Timestamp of date at which the tax calculation will expire.
         */
        expires_at: number | null;

        /**
         * The list of items the customer is purchasing.
         */
        line_items?: ApiList<Stripe.Tax.CalculationLineItem> | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The details of the ship from location, such as the address.
         */
        ship_from_details: Calculation.ShipFromDetails | null;

        /**
         * The shipping cost details for the calculation.
         */
        shipping_cost: Calculation.ShippingCost | null;

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
        tax_breakdown: Array<Calculation.TaxBreakdown>;

        /**
         * Timestamp of date at which the tax rules and rates in effect applies for the calculation.
         */
        tax_date: number;
      }

      namespace Calculation {
        interface CustomerDetails {
          /**
           * The customer's postal address (for example, home or business location).
           */
          address: Stripe.Address | null;

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

        namespace CustomerDetails {
          type AddressSource = 'billing' | 'shipping';

          type TaxabilityOverride =
            | 'customer_exempt'
            | 'none'
            | 'reverse_charge';

          interface TaxId {
            /**
             * The type of the tax ID, one of `ad_nrt`, `ar_cuit`, `eu_vat`, `bo_tin`, `br_cnpj`, `br_cpf`, `cn_tin`, `co_nit`, `cr_tin`, `do_rcn`, `ec_ruc`, `eu_oss_vat`, `hr_oib`, `pe_ruc`, `ro_tin`, `rs_pib`, `sv_nit`, `uy_ruc`, `ve_rif`, `vn_tin`, `gb_vat`, `nz_gst`, `au_abn`, `au_arn`, `in_gst`, `no_vat`, `no_voec`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `pl_nip`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `li_uid`, `li_vat`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, `il_vat`, `ge_vat`, `ua_vat`, `is_vat`, `bg_uic`, `hu_tin`, `si_tin`, `ke_pin`, `tr_tin`, `eg_tin`, `ph_tin`, `al_tin`, `bh_vat`, `kz_bin`, `ng_tin`, `om_vat`, `de_stn`, `ch_uid`, `tz_vat`, `uz_vat`, `uz_tin`, `md_vat`, `ma_vat`, `by_tin`, `ao_tin`, `bs_tin`, `bb_tin`, `cd_nif`, `mr_nif`, `me_pib`, `zw_tin`, `ba_tin`, `gn_nif`, `mk_vat`, `sr_fin`, `sn_ninea`, `am_tin`, `np_pan`, `tj_tin`, `ug_tin`, `zm_tin`, `kh_tin`, `aw_tin`, `az_tin`, `bd_bin`, `bj_ifu`, `et_tin`, `kg_tin`, `la_tin`, `cm_niu`, `cv_nif`, `bf_ifu`, or `unknown`
             */
            type: TaxId.Type;

            /**
             * The value of the tax ID.
             */
            value: string;
          }

          namespace TaxId {
            type Type =
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
              | 'pl_nip'
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

        interface ShipFromDetails {
          address: Stripe.Address;
        }

        interface ShippingCost {
          /**
           * The shipping amount in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes were calculated on top of this amount.
           */
          amount: number;

          /**
           * The amount of tax calculated for shipping, in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
           */
          amount_tax: number;

          /**
           * The ID of an existing [ShippingRate](https://docs.stripe.com/api/shipping_rates/object).
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
           * The [tax code](https://docs.stripe.com/tax/tax-categories) ID used for shipping.
           */
          tax_code: string;
        }

        namespace ShippingCost {
          type TaxBehavior = 'exclusive' | 'inclusive';

          interface TaxBreakdown {
            /**
             * The amount of tax, in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
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
             * The amount on which tax is calculated, in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
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

            namespace Jurisdiction {
              type Level = 'city' | 'country' | 'county' | 'district' | 'state';
            }

            type Sourcing = 'destination' | 'origin';

            type TaxabilityReason =
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

            namespace TaxRateDetails {
              type TaxType =
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

        interface TaxBreakdown {
          /**
           * The amount of tax, in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
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
           * The amount on which tax is calculated, in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
           */
          taxable_amount: number;
        }

        namespace TaxBreakdown {
          type TaxabilityReason =
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
             * State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
             */
            state: string | null;

            /**
             * The tax type, such as `vat` or `sales_tax`.
             */
            tax_type: TaxRateDetails.TaxType | null;
          }

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

            type TaxType =
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
}
