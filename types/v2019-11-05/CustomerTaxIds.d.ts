declare namespace Stripe {
  /**
   * The CustomerTaxId object.
   */
  interface CustomerTaxId {
    /**
     * The type of the tax ID, one of `au_abn`, `ch_vat`, `eu_vat`, `in_gst`, `mx_rfc`, `no_vat`, `nz_gst`, `unknown`, or `za_vat`
     */
    type?: CustomerTaxId.Type;

    /**
     * The value of the tax ID.
     */
    value?: string | null;
  }

  namespace CustomerTaxId {
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
  }
}