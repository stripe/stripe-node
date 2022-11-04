// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * You can add one or multiple tax IDs to a [customer](https://stripe.com/docs/api/customers).
     * A customer's tax IDs are displayed on invoices and credit notes issued for the customer.
     *
     * Related guide: [Customer Tax Identification Numbers](https://stripe.com/docs/billing/taxes/tax-ids).
     */
    interface TaxId {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'tax_id';

      /**
       * Two-letter ISO code representing the country of the tax ID.
       */
      country: string | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * ID of the customer.
       */
      customer: string | Stripe.Customer | null;

      deleted?: void;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Type of the tax ID, one of `ae_trn`, `au_abn`, `au_arn`, `bg_uic`, `br_cnpj`, `br_cpf`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `ch_vat`, `cl_tin`, `eg_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `hk_br`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kr_brn`, `li_uid`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `no_vat`, `nz_gst`, `ph_tin`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `th_vat`, `tr_tin`, `tw_vat`, `ua_vat`, `us_ein`, or `za_vat`. Note that some legacy tax IDs have type `unknown`
       */
      type: TaxId.Type;

      /**
       * Value of the tax ID.
       */
      value: string;

      /**
       * Tax ID verification information.
       */
      verification: TaxId.Verification | null;
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

      interface Verification {
        /**
         * Verification status, one of `pending`, `verified`, `unverified`, or `unavailable`.
         */
        status: Verification.Status;

        /**
         * Verified address.
         */
        verified_address: string | null;

        /**
         * Verified name.
         */
        verified_name: string | null;
      }

      namespace Verification {
        type Status = 'pending' | 'unavailable' | 'unverified' | 'verified';
      }
    }

    /**
     * The DeletedTaxId object.
     */
    interface DeletedTaxId {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'tax_id';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    interface TaxIdCreateParams {
      /**
       * Type of the tax ID, one of `ae_trn`, `au_abn`, `au_arn`, `bg_uic`, `br_cnpj`, `br_cpf`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `ch_vat`, `cl_tin`, `eg_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `hk_br`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kr_brn`, `li_uid`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `no_vat`, `nz_gst`, `ph_tin`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `th_vat`, `tr_tin`, `tw_vat`, `ua_vat`, `us_ein`, or `za_vat`
       */
      type: TaxIdCreateParams.Type;

      /**
       * Value of the tax ID.
       */
      value: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    namespace TaxIdCreateParams {
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

    interface TaxIdRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface TaxIdListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface TaxIdDeleteParams {}
  }
}
