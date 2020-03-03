declare module 'stripe' {
  namespace Stripe {
    /**
     * The TaxId object.
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
      customer: string | Stripe.Customer;

      deleted?: void;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Type of the tax ID, one of `au_abn`, `ca_bn`, `ca_qst`, `ch_vat`, `es_cif`, `eu_vat`, `hk_br`, `in_gst`, `jp_cn`, `kr_brn`, `li_uid`, `mx_rfc`, `my_itn`, `my_sst`, `no_vat`, `nz_gst`, `ru_inn`, `sg_uen`, `th_vat`, `tw_vat`, `us_ein`, or `za_vat`. Note that some legacy tax IDs have type `unknown`
       */
      type: TaxId.Type;

      /**
       * Value of the tax ID.
       */
      value: string;

      verification: TaxId.Verification;
    }

    namespace TaxId {
      type Type =
        | 'au_abn'
        | 'ca_bn'
        | 'ca_qst'
        | 'ch_vat'
        | 'es_cif'
        | 'eu_vat'
        | 'hk_br'
        | 'in_gst'
        | 'jp_cn'
        | 'kr_brn'
        | 'li_uid'
        | 'mx_rfc'
        | 'my_itn'
        | 'my_sst'
        | 'no_vat'
        | 'nz_gst'
        | 'ru_inn'
        | 'sg_uen'
        | 'th_vat'
        | 'tw_vat'
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
       * Type of the tax ID, one of `eu_vat`, `nz_gst`, `au_abn`, `in_gst`, `no_vat`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ca_bn`, `hk_br`, `es_cif`, `tw_vat`, `th_vat`, `jp_cn`, `li_uid`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, or `my_sst`
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
        | 'au_abn'
        | 'ca_bn'
        | 'ca_qst'
        | 'ch_vat'
        | 'es_cif'
        | 'eu_vat'
        | 'hk_br'
        | 'in_gst'
        | 'jp_cn'
        | 'kr_brn'
        | 'li_uid'
        | 'mx_rfc'
        | 'my_itn'
        | 'my_sst'
        | 'no_vat'
        | 'nz_gst'
        | 'ru_inn'
        | 'sg_uen'
        | 'th_vat'
        | 'tw_vat'
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
