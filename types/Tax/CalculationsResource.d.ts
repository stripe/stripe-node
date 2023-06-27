// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
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
         * Shipping cost details to be used for the calculation.
         */
        shipping_cost?: CalculationCreateParams.ShippingCost;

        /**
         * Timestamp of date at which the tax rules and rates in effect applies for the calculation. Measured in seconds since the Unix epoch. Can be up to 48 hours in the past, and up to 48 hours in the future.
         */
        tax_date?: number;
      }

      namespace CalculationCreateParams {
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
           * The customer's tax IDs.
           */
          tax_ids?: Array<CustomerDetails.TaxId>;

          /**
           * Overrides the tax calculation result to allow you to not collect tax from your customer. Use this if you've manually checked your customer's tax exemptions. Prefer providing the customer's `tax_ids` where possible, which automatically determines whether `reverse_charge` applies.
           */
          taxability_override?: CustomerDetails.TaxabilityOverride;
        }

        namespace CustomerDetails {
          interface Address {
            /**
             * City, district, suburb, town, or village.
             */
            city?: string;

            /**
             * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
             */
            country: string;

            /**
             * Address line 1 (e.g., street, PO Box, or company name).
             */
            line1?: string;

            /**
             * Address line 2 (e.g., apartment, suite, unit, or building).
             */
            line2?: string;

            /**
             * ZIP or postal code.
             */
            postal_code?: string;

            /**
             * State/province as an [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) subdivision code, without country prefix. Example: "NY" or "TX".
             */
            state?: string;
          }

          type AddressSource = 'billing' | 'shipping';

          type TaxabilityOverride =
            | 'customer_exempt'
            | 'none'
            | 'reverse_charge';

          interface TaxId {
            /**
             * Type of the tax ID, one of `ad_nrt`, `ae_trn`, `ar_cuit`, `au_abn`, `au_arn`, `bg_uic`, `bo_tin`, `br_cnpj`, `br_cpf`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `ch_vat`, `cl_tin`, `cn_tin`, `co_nit`, `cr_tin`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `hk_br`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kr_brn`, `li_uid`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `no_vat`, `nz_gst`, `pe_ruc`, `ph_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sv_nit`, `th_vat`, `tr_tin`, `tw_vat`, `ua_vat`, `us_ein`, `uy_ruc`, `ve_rif`, `vn_tin`, or `za_vat`
             */
            type: TaxId.Type;

            /**
             * Value of the tax ID.
             */
            value: string;
          }

          namespace TaxId {
            type Type =
              | 'ad_nrt'
              | 'ae_trn'
              | 'ar_cuit'
              | 'au_abn'
              | 'au_arn'
              | 'bg_uic'
              | 'bo_tin'
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
              | 'cn_tin'
              | 'co_nit'
              | 'cr_tin'
              | 'do_rcn'
              | 'ec_ruc'
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
              | 'pe_ruc'
              | 'ph_tin'
              | 'rs_pib'
              | 'ru_inn'
              | 'ru_kpp'
              | 'sa_vat'
              | 'sg_gst'
              | 'sg_uen'
              | 'si_tin'
              | 'sv_nit'
              | 'th_vat'
              | 'tr_tin'
              | 'tw_vat'
              | 'ua_vat'
              | 'us_ein'
              | 'uy_ruc'
              | 've_rif'
              | 'vn_tin'
              | 'za_vat';
          }
        }

        interface LineItem {
          /**
           * A positive integer in cents representing the line item's total price. If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes are calculated on top of this amount.
           */
          amount: number;

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

        namespace LineItem {
          type TaxBehavior = 'exclusive' | 'inclusive';
        }

        interface ShippingCost {
          /**
           * A positive integer in cents representing the shipping charge. If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes are calculated on top of this amount.
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
           * The [tax code](https://stripe.com/docs/tax/tax-categories) used to calculate tax on shipping. If not provided, the default shipping tax code from your [Tax Settings](https://stripe.com/settings/tax) is used.
           */
          tax_code?: string;
        }

        namespace ShippingCost {
          type TaxBehavior = 'exclusive' | 'inclusive';
        }
      }

      interface CalculationListLineItemsParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class CalculationsResource {
        /**
         * Calculates tax based on input and returns a Tax Calculation object.
         */
        create(
          params: CalculationCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Calculation>>;

        /**
         * Retrieves the line items of a persisted tax calculation as a collection.
         */
        listLineItems(
          id: string,
          params?: CalculationListLineItemsParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Tax.CalculationLineItem>;
        listLineItems(
          id: string,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Tax.CalculationLineItem>;
      }
    }
  }
}
