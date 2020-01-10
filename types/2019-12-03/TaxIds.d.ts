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
       * Type of the tax ID, one of `au_abn`, `ch_vat`, `eu_vat`, `in_gst`, `mx_rfc`, `no_vat`, `nz_gst`, `sg_uen`, `za_vat`, or `unknown`
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
        | 'ch_vat'
        | 'eu_vat'
        | 'in_gst'
        | 'mx_rfc'
        | 'no_vat'
        | 'nz_gst'
        | 'sg_uen'
        | 'unknown'
        | 'za_vat';

      interface Verification {
        /**
         * Verification status, one of `pending`, `unavailable`, `unverified`, or `verified`.
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
       * Type of the tax ID, one of `au_abn`, `ch_vat`, `eu_vat`, `in_gst`, `mx_rfc`, `no_vat`, `nz_gst`, `sg_uen`, or `za_vat`
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
        | 'ch_vat'
        | 'eu_vat'
        | 'in_gst'
        | 'mx_rfc'
        | 'no_vat'
        | 'nz_gst'
        | 'sg_uen'
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
