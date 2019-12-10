declare namespace Stripe {
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
    customer: string | Customer | DeletedCustomer;

    deleted?: void;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * Type of the tax ID, one of `au_abn`, `ch_vat`, `eu_vat`, `in_gst`, `mx_rfc`, `no_vat`, `nz_gst`, `za_vat`, or `unknown`
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
      | 'unknown'
      | 'za_vat'

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
      type Status = 'pending' | 'unavailable' | 'unverified' | 'verified'
    }
  }

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
     * Type of the tax ID, one of `au_abn`, `ch_vat`, `eu_vat`, `in_gst`, `mx_rfc`, `no_vat`, `nz_gst`, or `za_vat`
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
      | 'za_vat'
  }

  interface TaxIdRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  interface TaxIdListParams {
    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  interface TaxIdDeleteParams {}
}