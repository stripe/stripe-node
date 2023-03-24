// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      /**
       * A Tax `Calculation` allows you to calculate the tax to collect from your customer.
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
         * Total after taxes.
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

        customer_details: Calculation.CustomerDetails;

        /**
         * Timestamp of date at which the tax calculation will expire.
         */
        expires_at: number | null;

        /**
         * The list of items the customer is purchasing.
         */
        line_items: ApiList<Stripe.Tax.CalculationLineItem> | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

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
             * The type of the tax ID, one of `eu_vat`, `br_cnpj`, `br_cpf`, `eu_oss_vat`, `gb_vat`, `nz_gst`, `au_abn`, `au_arn`, `in_gst`, `no_vat`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `li_uid`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, `il_vat`, `ge_vat`, `ua_vat`, `is_vat`, `bg_uic`, `hu_tin`, `si_tin`, `ke_pin`, `tr_tin`, `eg_tin`, `ph_tin`, or `unknown`
             */
            type: TaxId.Type;

            /**
             * The value of the tax ID.
             */
            value: string;
          }

          namespace TaxId {
            type Type =
              | 'ae_trn'
              | 'au_abn'
              | 'au_arn'
              | 'bg_uic'
              | 'br_cnpj'
              | 'br_cpf'
              | 'ca_bn'
              | 'ca_gst_hst'
              | 'ca_pst_bc'
              | 'ca_pst_mb'
              | 'ca_pst_sk'
              | 'ca_qst'
              | 'ch_vat'
              | 'cl_tin'
              | 'eg_tin'
              | 'es_cif'
              | 'eu_oss_vat'
              | 'eu_vat'
              | 'gb_vat'
              | 'ge_vat'
              | 'hk_br'
              | 'hu_tin'
              | 'id_npwp'
              | 'il_vat'
              | 'in_gst'
              | 'is_vat'
              | 'jp_cn'
              | 'jp_rn'
              | 'jp_trn'
              | 'ke_pin'
              | 'kr_brn'
              | 'li_uid'
              | 'mx_rfc'
              | 'my_frp'
              | 'my_itn'
              | 'my_sst'
              | 'no_vat'
              | 'nz_gst'
              | 'ph_tin'
              | 'ru_inn'
              | 'ru_kpp'
              | 'sa_vat'
              | 'sg_gst'
              | 'sg_uen'
              | 'si_tin'
              | 'th_vat'
              | 'tr_tin'
              | 'tw_vat'
              | 'ua_vat'
              | 'unknown'
              | 'us_ein'
              | 'za_vat';
          }
        }

        interface ShippingCost {
          /**
           * The shipping amount in integer cents. If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes were calculated on top of this amount.
           */
          amount: number;

          /**
           * The amount of tax calculated for shipping, in integer cents.
           */
          amount_tax: number;

          /**
           * The ID of an existing [ShippingRate](https://stripe.com/docs/api/shipping_rates/object)
           */
          shipping_rate?: string;

          /**
           * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes.
           */
          tax_behavior: ShippingCost.TaxBehavior;

          /**
           * The [tax code](https://stripe.com/docs/tax/tax-categories) ID used for shipping.
           */
          tax_code: string;
        }

        namespace ShippingCost {
          type TaxBehavior = 'exclusive' | 'inclusive';
        }

        interface TaxBreakdown {
          /**
           * The amount of tax, in integer cents.
           */
          amount: number;

          /**
           * Specifies whether the tax amount is included in the line item amount.
           */
          inclusive: boolean;

          tax_rate_details: TaxBreakdown.TaxRateDetails;

          /**
           * The amount on which tax is calculated, in integer cents.
           */
          taxable_amount: number;
        }

        namespace TaxBreakdown {
          interface TaxRateDetails {
            /**
             * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
             */
            country: string | null;

            /**
             * The tax rate percentage as a string. For example, 8.5% is represented as `"8.5"`.
             */
            percentage_decimal: string;

            /**
             * State, county, province, or region.
             */
            state: string | null;

            /**
             * The tax type, such as `vat` or `sales_tax`.
             */
            tax_type: TaxRateDetails.TaxType | null;
          }

          namespace TaxRateDetails {
            type TaxType =
              | 'gst'
              | 'hst'
              | 'igst'
              | 'jct'
              | 'lease_tax'
              | 'pst'
              | 'qst'
              | 'rst'
              | 'sales_tax'
              | 'vat';
          }
        }
      }
    }
  }
}
