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
         * The boolean value that indicates if the calculation is a preview. If true, the calculation is not stored. If false, the calculation is stored for 48 hours. Defaults to true.
         */
        preview?: boolean;

        /**
         * Timestamp of date at which the tax rules and rates in effect applies for the calculation. Measured in seconds since the Unix epoch.
         */
        tax_date?: number;
      }

      namespace CalculationCreateParams {
        interface CustomerDetails {
          /**
           * The customer's postal address (e.g., home or business location).
           */
          address?: CustomerDetails.Address;

          /**
           * The type of customer address provided. Required when using `address`.
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
           * When `reverse_charge` is provided, the reverse charge rule is applied for taxation. When `customer_exempt` is sent, it treats the customer as tax exempt. Defaults to `none`.
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
             * Type of the tax ID, one of `ae_trn`, `au_abn`, `au_arn`, `bg_uic`, `br_cnpj`, `br_cpf`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `ch_vat`, `cl_tin`, `eg_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `hk_br`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kr_brn`, `li_uid`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `no_vat`, `nz_gst`, `ph_tin`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `th_vat`, `tr_tin`, `tw_vat`, `ua_vat`, `us_ein`, or `za_vat`
             */
            type: TaxId.Type;

            /**
             * Value of the tax ID.
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
              | 'us_ein'
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
           * The number of units of the item being purchased. The `amount` is a total amount for the whole line. Used to calculate the per-unit price, when required.
           */
          quantity?: number;

          /**
           * A custom identifier for this line item. Must be unique across the line items in the calculation.
           */
          reference?: string;

          /**
           * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes.
           */
          tax_behavior?: LineItem.TaxBehavior;

          /**
           * A [tax code](https://stripe.com/docs/tax/tax-categories) ID to use for this line item. If not provided, we will use the tax code from the provided `product` param. If neither `tax_code` or `product` is provided, we will use the default tax code from your Tax Settings.
           */
          tax_code?: string;
        }

        namespace LineItem {
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
        ): ApiListPromise<Stripe.LineItem>;
        listLineItems(
          id: string,
          options?: RequestOptions
        ): ApiListPromise<Stripe.LineItem>;
      }
    }
  }
}
