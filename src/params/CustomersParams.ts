// File generated from our OpenAPI spec

export interface CustomerCreateParams {
  /**
   * The customer's address.
   */
  address?: Stripe.Emptyable<Stripe.AddressParam>;

  /**
   * An integer amount in cents (or local equivalent) that represents the customer's current balance, which affect the customer's future invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.
   */
  balance?: number;

  /**
   * The customer's business name. This may be up to *150 characters*.
   */
  business_name?: Stripe.Emptyable<string>;

  /**
   * Balance information and default balance settings for this customer.
   */
  cash_balance?: CustomerCreateParams.CashBalance;

  /**
   * An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.
   */
  description?: string;

  /**
   * Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to *512 characters*.
   */
  email?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * The customer's full name. This may be up to *150 characters*.
   */
  individual_name?: Stripe.Emptyable<string>;

  /**
   * The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
   */
  invoice_prefix?: string;

  /**
   * Default invoice settings for this customer.
   */
  invoice_settings?: CustomerCreateParams.InvoiceSettings;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

  /**
   * The customer's full name or business name.
   */
  name?: string;

  /**
   * The sequence to be used on the customer's next invoice. Defaults to 1.
   */
  next_invoice_sequence?: number;

  payment_method?: string;

  /**
   * The customer's phone number.
   */
  phone?: string;

  /**
   * Customer's preferred languages, ordered by preference.
   */
  preferred_locales?: Array<string>;

  /**
   * The customer's shipping information. Appears on invoices emailed to this customer.
   */
  shipping?: Stripe.Emptyable<CustomerCreateParams.Shipping>;

  source?: string;

  /**
   * Tax details about the customer.
   */
  tax?: CustomerCreateParams.Tax;

  /**
   * The customer's tax exemption. One of `none`, `exempt`, or `reverse`.
   */
  tax_exempt?: Stripe.Emptyable<CustomerCreateParams.TaxExempt>;

  /**
   * The customer's tax IDs.
   */
  tax_id_data?: Array<CustomerCreateParams.TaxIdDatum>;

  /**
   * ID of the test clock to attach to the customer.
   */
  test_clock?: string;

  validate?: boolean;
}
namespace CustomerCreateParams {
  export interface CashBalance {
    /**
     * Settings controlling the behavior of the customer's cash balance,
     * such as reconciliation of funds received.
     */
    settings?: CashBalance.Settings;
  }

  export interface InvoiceSettings {
    /**
     * The list of up to 4 default custom fields to be displayed on invoices for this customer. When updating, pass an empty string to remove previously-defined fields.
     */
    custom_fields?: Stripe.Emptyable<Array<InvoiceSettings.CustomField>>;

    /**
     * ID of a payment method that's attached to the customer, to be used as the customer's default payment method for subscriptions and invoices.
     */
    default_payment_method?: string;

    /**
     * Default footer to be displayed on invoices for this customer.
     */
    footer?: string;

    /**
     * Default options for invoice PDF rendering for this customer.
     */
    rendering_options?: Stripe.Emptyable<InvoiceSettings.RenderingOptions>;
  }

  export interface Shipping {
    /**
     * Customer shipping address.
     */
    address: Stripe.AddressParam;

    /**
     * Customer name.
     */
    name: string;

    /**
     * Customer phone (including extension).
     */
    phone?: string;
  }

  export interface Tax {
    /**
     * A recent IP address of the customer used for tax reporting and tax location inference. Stripe recommends updating the IP address when a new PaymentMethod is attached or the address field on the customer is updated. We recommend against updating this field more frequently since it could result in unexpected tax location/reporting outcomes.
     */
    ip_address?: Stripe.Emptyable<string>;

    /**
     * A flag that indicates when Stripe should validate the customer tax location. Defaults to `deferred`.
     */
    validate_location?: Tax.ValidateLocation;
  }

  export type TaxExempt = 'exempt' | 'none' | 'reverse';

  export interface TaxIdDatum {
    /**
     * Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `cd_nif`, `ch_uid`, `ch_vat`, `cl_tin`, `cm_niu`, `cn_tin`, `co_nit`, `cr_tin`, `cv_nif`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `et_tin`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `gn_nif`, `hk_br`, `hr_oib`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kg_tin`, `kh_tin`, `kr_brn`, `kz_bin`, `la_tin`, `li_uid`, `li_vat`, `ma_vat`, `md_vat`, `me_pib`, `mk_vat`, `mr_nif`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `np_pan`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sn_ninea`, `sr_fin`, `sv_nit`, `th_vat`, `tj_tin`, `tr_tin`, `tw_vat`, `tz_vat`, `ua_vat`, `ug_tin`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, `za_vat`, `zm_tin`, or `zw_tin`
     */
    type: TaxIdDatum.Type;

    /**
     * Value of the tax ID.
     */
    value: string;
  }

  namespace CashBalance {
    export interface Settings {
      /**
       * Controls how funds transferred by the customer are applied to payment intents and invoices. Valid options are `automatic`, `manual`, or `merchant_default`. For more information about these reconciliation modes, see [Reconciliation](https://stripe.com/docs/payments/customer-balance/reconciliation).
       */
      reconciliation_mode?: Settings.ReconciliationMode;
    }

    namespace Settings {
      export type ReconciliationMode =
        | 'automatic'
        | 'manual'
        | 'merchant_default';
    }
  }

  namespace InvoiceSettings {
    export interface CustomField {
      /**
       * The name of the custom field. This may be up to 40 characters.
       */
      name: string;

      /**
       * The value of the custom field. This may be up to 140 characters.
       */
      value: string;
    }

    export interface RenderingOptions {
      /**
       * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs. One of `exclude_tax` or `include_inclusive_tax`. `include_inclusive_tax` will include inclusive tax (and exclude exclusive tax) in invoice PDF amounts. `exclude_tax` will exclude all tax (inclusive and exclusive alike) from invoice PDF amounts.
       */
      amount_tax_display?: Stripe.Emptyable<RenderingOptions.AmountTaxDisplay>;

      /**
       * ID of the invoice rendering template to use for future invoices.
       */
      template?: string;
    }

    namespace RenderingOptions {
      export type AmountTaxDisplay = 'exclude_tax' | 'include_inclusive_tax';
    }
  }

  namespace Tax {
    export type ValidateLocation = 'deferred' | 'immediately';
  }

  namespace TaxIdDatum {
    export type Type =
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
export interface CustomerRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface CustomerUpdateParams {
  /**
   * The customer's address.
   */
  address?: Stripe.Emptyable<Stripe.AddressParam>;

  /**
   * An integer amount in cents (or local equivalent) that represents the customer's current balance, which affect the customer's future invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.
   */
  balance?: number;

  /**
   * The customer's business name. This may be up to *150 characters*.
   */
  business_name?: Stripe.Emptyable<string>;

  /**
   * Balance information and default balance settings for this customer.
   */
  cash_balance?: CustomerUpdateParams.CashBalance;

  /**
   * If you are using payment methods created via the PaymentMethods API, see the [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method) parameter.
   *
   * Provide the ID of a payment source already attached to this customer to make it this customer's default payment source.
   *
   * If you want to add a new payment source and make it the default, see the [source](https://stripe.com/docs/api/customers/update#update_customer-source) property.
   */
  default_source?: string;

  /**
   * An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.
   */
  description?: string;

  /**
   * Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to *512 characters*.
   */
  email?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * The customer's full name. This may be up to *150 characters*.
   */
  individual_name?: Stripe.Emptyable<string>;

  /**
   * The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
   */
  invoice_prefix?: string;

  /**
   * Default invoice settings for this customer.
   */
  invoice_settings?: CustomerUpdateParams.InvoiceSettings;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

  /**
   * The customer's full name or business name.
   */
  name?: string;

  /**
   * The sequence to be used on the customer's next invoice. Defaults to 1.
   */
  next_invoice_sequence?: number;

  /**
   * The customer's phone number.
   */
  phone?: string;

  /**
   * Customer's preferred languages, ordered by preference.
   */
  preferred_locales?: Array<string>;

  /**
   * The customer's shipping information. Appears on invoices emailed to this customer.
   */
  shipping?: Stripe.Emptyable<CustomerUpdateParams.Shipping>;

  source?: string;

  /**
   * Tax details about the customer.
   */
  tax?: CustomerUpdateParams.Tax;

  /**
   * The customer's tax exemption. One of `none`, `exempt`, or `reverse`.
   */
  tax_exempt?: Stripe.Emptyable<CustomerUpdateParams.TaxExempt>;

  validate?: boolean;
}
namespace CustomerUpdateParams {
  export interface CashBalance {
    /**
     * Settings controlling the behavior of the customer's cash balance,
     * such as reconciliation of funds received.
     */
    settings?: CashBalance.Settings;
  }

  export interface InvoiceSettings {
    /**
     * The list of up to 4 default custom fields to be displayed on invoices for this customer. When updating, pass an empty string to remove previously-defined fields.
     */
    custom_fields?: Stripe.Emptyable<Array<InvoiceSettings.CustomField>>;

    /**
     * ID of a payment method that's attached to the customer, to be used as the customer's default payment method for subscriptions and invoices.
     */
    default_payment_method?: string;

    /**
     * Default footer to be displayed on invoices for this customer.
     */
    footer?: string;

    /**
     * Default options for invoice PDF rendering for this customer.
     */
    rendering_options?: Stripe.Emptyable<InvoiceSettings.RenderingOptions>;
  }

  export interface Shipping {
    /**
     * Customer shipping address.
     */
    address: Stripe.AddressParam;

    /**
     * Customer name.
     */
    name: string;

    /**
     * Customer phone (including extension).
     */
    phone?: string;
  }

  export interface Tax {
    /**
     * A recent IP address of the customer used for tax reporting and tax location inference. Stripe recommends updating the IP address when a new PaymentMethod is attached or the address field on the customer is updated. We recommend against updating this field more frequently since it could result in unexpected tax location/reporting outcomes.
     */
    ip_address?: Stripe.Emptyable<string>;

    /**
     * A flag that indicates when Stripe should validate the customer tax location. Defaults to `auto`.
     */
    validate_location?: Tax.ValidateLocation;
  }

  export type TaxExempt = 'exempt' | 'none' | 'reverse';

  namespace CashBalance {
    export interface Settings {
      /**
       * Controls how funds transferred by the customer are applied to payment intents and invoices. Valid options are `automatic`, `manual`, or `merchant_default`. For more information about these reconciliation modes, see [Reconciliation](https://stripe.com/docs/payments/customer-balance/reconciliation).
       */
      reconciliation_mode?: Settings.ReconciliationMode;
    }

    namespace Settings {
      export type ReconciliationMode =
        | 'automatic'
        | 'manual'
        | 'merchant_default';
    }
  }

  namespace InvoiceSettings {
    export interface CustomField {
      /**
       * The name of the custom field. This may be up to 40 characters.
       */
      name: string;

      /**
       * The value of the custom field. This may be up to 140 characters.
       */
      value: string;
    }

    export interface RenderingOptions {
      /**
       * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs. One of `exclude_tax` or `include_inclusive_tax`. `include_inclusive_tax` will include inclusive tax (and exclude exclusive tax) in invoice PDF amounts. `exclude_tax` will exclude all tax (inclusive and exclusive alike) from invoice PDF amounts.
       */
      amount_tax_display?: Stripe.Emptyable<RenderingOptions.AmountTaxDisplay>;

      /**
       * ID of the invoice rendering template to use for future invoices.
       */
      template?: string;
    }

    namespace RenderingOptions {
      export type AmountTaxDisplay = 'exclude_tax' | 'include_inclusive_tax';
    }
  }

  namespace Tax {
    export type ValidateLocation = 'auto' | 'deferred' | 'immediately';
  }
}
export interface CustomerListParams extends PaginationParams {
  /**
   * Only return customers that were created during the given date interval.
   */
  created?: Stripe.RangeQueryParam | number;

  /**
   * A case-sensitive filter on the list based on the customer's `email` field. The value must be a string.
   */
  email?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Provides a list of customers that are associated with the specified test clock. The response will not include customers with test clocks if this parameter is not set.
   */
  test_clock?: string;
}
export interface CustomerDeleteParams {}
export interface CustomerCreateBalanceTransactionParams {
  /**
   * The integer amount in **cents (or local equivalent)** to apply to the customer's credit balance.
   */
  amount: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). Specifies the [`invoice_credit_balance`](https://stripe.com/docs/api/customers/object#customer_object-invoice_credit_balance) that this transaction will apply to. If the customer's `currency` is not set, it will be updated to this value.
   */
  currency: string;

  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
}
export interface CustomerCreateFundingInstructionsParams {
  /**
   * Additional parameters for `bank_transfer` funding types
   */
  bank_transfer: CustomerCreateFundingInstructionsParams.BankTransfer;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * The `funding_type` to get the instructions for.
   */
  funding_type: 'bank_transfer';

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
namespace CustomerCreateFundingInstructionsParams {
  export interface BankTransfer {
    /**
     * Configuration for eu_bank_transfer funding type.
     */
    eu_bank_transfer?: BankTransfer.EuBankTransfer;

    /**
     * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
     *
     * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
     */
    requested_address_types?: Array<BankTransfer.RequestedAddressType>;

    /**
     * The type of the `bank_transfer`
     */
    type: BankTransfer.Type;
  }

  namespace BankTransfer {
    export interface EuBankTransfer {
      /**
       * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
       */
      country: string;
    }

    export type RequestedAddressType = 'iban' | 'sort_code' | 'spei' | 'zengin';

    export type Type =
      | 'eu_bank_transfer'
      | 'gb_bank_transfer'
      | 'jp_bank_transfer'
      | 'mx_bank_transfer'
      | 'us_bank_transfer';
  }
}
export interface CustomerCreateSourceParams {
  /**
   * Please refer to full [documentation](https://stripe.com/docs/api) instead.
   */
  source: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Stripe.MetadataParam;

  validate?: boolean;
}
export interface CustomerCreateTaxIdParams {
  /**
   * Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `cd_nif`, `ch_uid`, `ch_vat`, `cl_tin`, `cm_niu`, `cn_tin`, `co_nit`, `cr_tin`, `cv_nif`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `et_tin`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `gn_nif`, `hk_br`, `hr_oib`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kg_tin`, `kh_tin`, `kr_brn`, `kz_bin`, `la_tin`, `li_uid`, `li_vat`, `ma_vat`, `md_vat`, `me_pib`, `mk_vat`, `mr_nif`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `np_pan`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sn_ninea`, `sr_fin`, `sv_nit`, `th_vat`, `tj_tin`, `tr_tin`, `tw_vat`, `tz_vat`, `ua_vat`, `ug_tin`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, `za_vat`, `zm_tin`, or `zw_tin`
   */
  type: CustomerCreateTaxIdParams.Type;

  /**
   * Value of the tax ID.
   */
  value: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
namespace CustomerCreateTaxIdParams {
  export type Type =
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
export interface CustomerDeleteDiscountParams {}
export interface CustomerDeleteSourceParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface CustomerDeleteTaxIdParams {}
export interface CustomerListBalanceTransactionsParams
  extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface CustomerListCashBalanceTransactionsParams
  extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface CustomerListPaymentMethodsParams extends PaginationParams {
  /**
   * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow.
   */
  allow_redisplay?: CustomerListPaymentMethodsParams.AllowRedisplay;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * An optional filter on the list, based on the object `type` field. Without the filter, the list includes all current and future payment method types. If your integration expects only one type of payment method in the response, make sure to provide a type value in the request.
   */
  type?: CustomerListPaymentMethodsParams.Type;
}
namespace CustomerListPaymentMethodsParams {
  export type AllowRedisplay = 'always' | 'limited' | 'unspecified';

  export type Type =
    | 'acss_debit'
    | 'affirm'
    | 'afterpay_clearpay'
    | 'alipay'
    | 'alma'
    | 'amazon_pay'
    | 'au_becs_debit'
    | 'bacs_debit'
    | 'bancontact'
    | 'billie'
    | 'blik'
    | 'boleto'
    | 'card'
    | 'cashapp'
    | 'crypto'
    | 'custom'
    | 'customer_balance'
    | 'eps'
    | 'fpx'
    | 'giropay'
    | 'grabpay'
    | 'ideal'
    | 'kakao_pay'
    | 'klarna'
    | 'konbini'
    | 'kr_card'
    | 'link'
    | 'mb_way'
    | 'mobilepay'
    | 'multibanco'
    | 'naver_pay'
    | 'nz_bank_account'
    | 'oxxo'
    | 'p24'
    | 'pay_by_bank'
    | 'payco'
    | 'paynow'
    | 'paypal'
    | 'pix'
    | 'promptpay'
    | 'revolut_pay'
    | 'samsung_pay'
    | 'satispay'
    | 'sepa_debit'
    | 'sofort'
    | 'swish'
    | 'twint'
    | 'us_bank_account'
    | 'wechat_pay'
    | 'zip';
}
export interface CustomerListSourcesParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Filter sources according to a particular object type.
   */
  object?: string;
}
export interface CustomerListTaxIdsParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface CustomerRetrieveBalanceTransactionParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface CustomerRetrieveCashBalanceParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface CustomerRetrieveCashBalanceTransactionParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface CustomerRetrievePaymentMethodParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface CustomerRetrieveSourceParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface CustomerRetrieveTaxIdParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface CustomerSearchParams {
  /**
   * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for customers](https://stripe.com/docs/search#query-fields-for-customers).
   */
  query: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number;

  /**
   * A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
   */
  page?: string;
}
export interface CustomerUpdateBalanceTransactionParams {
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
}
export interface CustomerUpdateCashBalanceParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * A hash of settings for this cash balance.
   */
  settings?: CustomerUpdateCashBalanceParams.Settings;
}
namespace CustomerUpdateCashBalanceParams {
  export interface Settings {
    /**
     * Controls how funds transferred by the customer are applied to payment intents and invoices. Valid options are `automatic`, `manual`, or `merchant_default`. For more information about these reconciliation modes, see [Reconciliation](https://stripe.com/docs/payments/customer-balance/reconciliation).
     */
    reconciliation_mode?: Settings.ReconciliationMode;
  }

  namespace Settings {
    export type ReconciliationMode =
      | 'automatic'
      | 'manual'
      | 'merchant_default';
  }
}
export interface CustomerUpdateSourceParams {
  /**
   * The name of the person or business that owns the bank account.
   */
  account_holder_name?: string;

  /**
   * The type of entity that holds the account. This can be either `individual` or `company`.
   */
  account_holder_type?: CustomerUpdateSourceParams.AccountHolderType;

  /**
   * City/District/Suburb/Town/Village.
   */
  address_city?: string;

  /**
   * Billing address country, if provided when creating card.
   */
  address_country?: string;

  /**
   * Address line 1 (Street address/PO Box/Company name).
   */
  address_line1?: string;

  /**
   * Address line 2 (Apartment/Suite/Unit/Building).
   */
  address_line2?: string;

  /**
   * State/County/Province/Region.
   */
  address_state?: string;

  /**
   * ZIP or postal code.
   */
  address_zip?: string;

  /**
   * Two digit number representing the card's expiration month.
   */
  exp_month?: string;

  /**
   * Four digit number representing the card's expiration year.
   */
  exp_year?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

  /**
   * Cardholder name.
   */
  name?: string;

  owner?: CustomerUpdateSourceParams.Owner;
}
namespace CustomerUpdateSourceParams {
  export type AccountHolderType = 'company' | 'individual';

  export interface Owner {
    /**
     * Owner's address.
     */
    address?: Stripe.AddressParam;

    /**
     * Owner's email address.
     */
    email?: string;

    /**
     * Owner's full name.
     */
    name?: string;

    /**
     * Owner's phone number.
     */
    phone?: string;
  }
}
export interface CustomerVerifySourceParams {
  /**
   * Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.
   */
  amounts?: Array<number>;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
