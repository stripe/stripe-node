// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {FormCorrection} from './FormCorrections.js';
import {Account} from './../Accounts.js';
import {AddressParam, PaginationParams, OtherString} from '../../shared.js';
import {
  RequestOptions,
  ApiListPromise,
  Response,
  StripeStreamResponse,
} from '../../lib.js';

export class FormResource extends StripeResource {
  /**
   * Returns a list of tax forms which were previously created. The tax forms are returned in sorted order, with the oldest tax forms appearing first.
   */
  list(
    params: Tax.FormListParams,
    options?: RequestOptions
  ): ApiListPromise<Form> {
    return this._makeRequest('GET', '/v1/tax/forms', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Retrieves the details of a tax form that has previously been created. Supply the unique tax form ID that was returned from your previous request, and Stripe will return the corresponding tax form information.
   */
  retrieve(
    id: string,
    params?: Tax.FormRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Form>> {
    return this._makeRequest(
      'GET',
      `/v1/tax/forms/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Creates a correction for a filed tax form. Supply either payee details or numerical values for the tax form type.
   *
   * Private preview. API access is invite-only. Contact Stripe to request access. Creating a correction doesn't file it; review, attestation, and filing remain in the Dashboard.
   */
  create(
    id: string,
    params?: Tax.FormCreateParams,
    options?: RequestOptions
  ): Promise<Response<FormCorrection>> {
    return this._makeRequest(
      'POST',
      `/v1/tax/forms/${encodeURIComponent(id)}/corrections`,
      params,
      options
    ) as any;
  }
  /**
   * Download the PDF for a tax form.
   */
  pdf(
    id: string,
    params?: Tax.FormPdfParams,
    options?: RequestOptions
  ): Promise<StripeStreamResponse> {
    return this._makeRequest(
      'GET',
      `/v1/tax/forms/${encodeURIComponent(id)}/pdf`,
      params,
      options,
      {
        apiBase: 'files',
        streaming: true,
      }
    ) as any;
  }
}
export interface Form {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'tax.form';

  au_serr?: Form.AuSerr;

  ca_mrdp?: Form.CaMrdp;

  /**
   * The form that corrects this form, if any.
   */
  corrected_by: string | Form | null;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  eu_dac7?: Form.EuDac7;

  /**
   * A list of tax filing statuses. Note that a filing status will only be included if the form has been filed directly with the jurisdiction's tax authority.
   */
  filing_statuses: Array<Form.FilingStatus>;

  gb_mrdp?: Form.GbMrdp;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  nz_mrdp?: Form.NzMrdp;

  payee: Form.Payee;

  /**
   * Whether the tax form is a mutable draft or a finalized form.
   */
  status?: Form.Status;

  /**
   * The type of the tax form. An additional hash is included on the tax form with a name matching this value. It contains additional information specific to the tax form type.
   */
  type: Form.Type;

  us_1099_k?: Form.Us1099K;

  us_1099_misc?: Form.Us1099Misc;

  us_1099_nec?: Form.Us1099Nec;
}
export namespace Form {
  export interface AuSerr {
    /**
     * End date of the period represented by the information reported on the tax form.
     */
    reporting_period_end_date: string;

    /**
     * Start date of the period represented by the information reported on the tax form.
     */
    reporting_period_start_date: string;
  }

  export interface CaMrdp {
    /**
     * End date of the period represented by the information reported on the tax form.
     */
    reporting_period_end_date: string;

    /**
     * Start date of the period represented by the information reported on the tax form.
     */
    reporting_period_start_date: string;
  }

  export interface EuDac7 {
    /**
     * End date of the period represented by the information reported on the tax form.
     */
    reporting_period_end_date: string;

    /**
     * Start date of the period represented by the information reported on the tax form.
     */
    reporting_period_start_date: string;
  }

  export interface FilingStatus {
    /**
     * Time when the filing status was updated.
     */
    effective_at: number;

    jurisdiction: FilingStatus.Jurisdiction;

    /**
     * The current status of the filed form.
     */
    value: FilingStatus.Value;
  }

  export interface GbMrdp {
    /**
     * End date of the period represented by the information reported on the tax form.
     */
    reporting_period_end_date: string;

    /**
     * Start date of the period represented by the information reported on the tax form.
     */
    reporting_period_start_date: string;
  }

  export interface NzMrdp {
    /**
     * End date of the period represented by the information reported on the tax form.
     */
    reporting_period_end_date: string;

    /**
     * Start date of the period represented by the information reported on the tax form.
     */
    reporting_period_start_date: string;
  }

  export interface Payee {
    /**
     * The ID of the payee's Stripe account.
     */
    account: string | Account | null;

    /**
     * The external reference to this payee.
     */
    external_reference: string | null;

    /**
     * Specifies the payee type.
     */
    type: Payee.Type;
  }

  export type Status = 'draft' | 'finalized';

  export type Type =
    | 'au_serr'
    | 'ca_mrdp'
    | 'eu_dac7'
    | 'gb_mrdp'
    | 'nz_mrdp'
    | 'us_1099_k'
    | 'us_1099_misc'
    | 'us_1099_nec'
    | OtherString;

  export interface Us1099K {
    card_not_present_transactions?: Us1099K.CardNotPresentTransactions;

    cash_tips?: Us1099K.CashTips;

    /**
     * The currency of the amounts on the form. Always `usd`.
     */
    currency?: string;

    federal_income_tax_withheld?: Us1099K.FederalIncomeTaxWithheld;

    /**
     * The gross amount of payment transactions, as a decimal string in USD.
     */
    gross_amount_of_transactions_decimal?: string;

    /**
     * The gross amounts for each month, ordered from January through December.
     */
    monthly_volumes?: Array<Us1099K.MonthlyVolume>;

    payment_transactions_count?: Us1099K.PaymentTransactionsCount;

    /**
     * Year represented by the information reported on the tax form.
     */
    reporting_year: number;

    state_income_tax_withheld?: Us1099K.StateIncomeTaxWithheld;
  }

  export interface Us1099Misc {
    cash_tips?: Us1099Misc.CashTips;

    crop_insurance_proceeds?: Us1099Misc.CropInsuranceProceeds;

    /**
     * The currency of the amounts on the form. Always `usd`.
     */
    currency?: string;

    /**
     * Whether direct sales of at least $5,000 of consumer products were made for resale.
     */
    direct_sales_for_resale?: boolean;

    excess_golden_parachute_payments?: Us1099Misc.ExcessGoldenParachutePayments;

    /**
     * Whether the FATCA filing requirement applies.
     */
    fatca_filing_required?: boolean;

    federal_income_tax_withheld?: Us1099Misc.FederalIncomeTaxWithheld;

    fish_purchased_for_resale?: Us1099Misc.FishPurchasedForResale;

    fishing_boat_proceeds?: Us1099Misc.FishingBoatProceeds;

    gross_proceeds_paid_to_an_attorney?: Us1099Misc.GrossProceedsPaidToAnAttorney;

    medical_and_health_care_payments?: Us1099Misc.MedicalAndHealthCarePayments;

    nonqualified_deferred_compensation?: Us1099Misc.NonqualifiedDeferredCompensation;

    other_income?: Us1099Misc.OtherIncome;

    overtime_compensation?: Us1099Misc.OvertimeCompensation;

    rents?: Us1099Misc.Rents;

    /**
     * Year represented by the information reported on the tax form.
     */
    reporting_year: number;

    royalties?: Us1099Misc.Royalties;

    section_409a_deferrals?: Us1099Misc.Section409aDeferrals;

    state_income?: Us1099Misc.StateIncome;

    state_tax_withheld?: Us1099Misc.StateTaxWithheld;

    substitute_payments?: Us1099Misc.SubstitutePayments;
  }

  export interface Us1099Nec {
    cash_tips?: Us1099Nec.CashTips;

    /**
     * The currency of the amounts on the form. Always `usd`.
     */
    currency?: string;

    /**
     * Whether direct sales of at least $5,000 of consumer products were made for resale.
     */
    direct_sales_indicator?: boolean;

    /**
     * Whether the FATCA filing requirement applies.
     */
    fatca_filing_requirement?: boolean;

    federal_income_tax_withheld?: Us1099Nec.FederalIncomeTaxWithheld;

    nonemployee_compensation?: Us1099Nec.NonemployeeCompensation;

    overtime_compensation?: Us1099Nec.OvertimeCompensation;

    /**
     * Year represented by the information reported on the tax form.
     */
    reporting_year: number;

    state_income?: Us1099Nec.StateIncome;

    state_tax_withheld?: Us1099Nec.StateTaxWithheld;
  }

  export namespace FilingStatus {
    export interface Jurisdiction {
      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country: string;

      /**
       * Indicates the level of the jurisdiction where the form was filed.
       */
      level: Jurisdiction.Level;

      /**
       * [ISO 3166-2 U.S. state code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country prefix, if any. For example, "NY" for New York, United States. Null for non-U.S. forms.
       */
      state: string | null;
    }

    export type Value = 'accepted' | 'filed' | 'rejected' | OtherString;

    export namespace Jurisdiction {
      export type Level = 'country' | 'state' | OtherString;
    }
  }

  export namespace Payee {
    export type Type = 'account' | 'external_reference' | OtherString;
  }

  export namespace Us1099K {
    export interface CardNotPresentTransactions {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface CashTips {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface FederalIncomeTaxWithheld {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface MonthlyVolume {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface PaymentTransactionsCount {
      /**
       * The effective number of transactions.
       */
      count?: number;

      /**
       * The signed adjustment included in the effective count. Only present for drafts.
       */
      delta?: number;
    }

    export interface StateIncomeTaxWithheld {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }
  }

  export namespace Us1099Misc {
    export interface CashTips {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface CropInsuranceProceeds {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface ExcessGoldenParachutePayments {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface FederalIncomeTaxWithheld {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface FishPurchasedForResale {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface FishingBoatProceeds {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface GrossProceedsPaidToAnAttorney {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface MedicalAndHealthCarePayments {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface NonqualifiedDeferredCompensation {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface OtherIncome {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface OvertimeCompensation {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface Rents {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface Royalties {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface Section409aDeferrals {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface StateIncome {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface StateTaxWithheld {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface SubstitutePayments {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }
  }

  export namespace Us1099Nec {
    export interface CashTips {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface FederalIncomeTaxWithheld {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface NonemployeeCompensation {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface OvertimeCompensation {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface StateIncome {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }

    export interface StateTaxWithheld {
      /**
       * The signed adjustment included in the effective amount, as a decimal string. Only present for drafts.
       */
      delta_decimal?: string;

      /**
       * The effective amount in the form's currency, as a decimal string.
       */
      volume_decimal?: string;
    }
  }
}
export namespace Tax {
  export interface FormCreateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Replacement payee details. Cannot be combined with numerical correction fields. Omitted fields remain unchanged.
     */
    payee_details?: FormCreateParams.PayeeDetails;

    /**
     * Whether a second TIN notice was received. Supported for K and MISC forms only; cannot be supplied without a substantive correction.
     */
    second_tin_notice?: boolean;

    /**
     * Replacement numerical values for a 1099-K. Supply only the group matching the original form. Omitted fields remain unchanged.
     */
    us_1099_k?: FormCreateParams.Us1099K;

    /**
     * Replacement numerical values for a 1099-MISC. Supply only the group matching the original form. Omitted fields remain unchanged.
     */
    us_1099_misc?: FormCreateParams.Us1099Misc;

    /**
     * Replacement numerical values for a 1099-NEC. Supply only the group matching the original form. Omitted fields remain unchanged.
     */
    us_1099_nec?: FormCreateParams.Us1099Nec;
  }

  export namespace FormCreateParams {
    export interface PayeeDetails {
      /**
       * The payee's replacement address fields. Omitted fields remain unchanged.
       */
      address?: AddressParam;

      /**
       * The payee's merchant category code.
       */
      merchant_category_code?: string;

      /**
       * The first line of the payee's name.
       */
      name_line_1?: string;

      /**
       * The second line of the payee's name. An empty string clears this field.
       */
      name_line_2?: string;

      /**
       * The payee's US taxpayer identification number.
       */
      tax_id_number?: string;

      /**
       * The payee's Treasury tipped occupation code, where supported by the reporting year and form type.
       */
      treasury_tipped_occupation_code?: string;
    }

    export interface Us1099K {
      /**
       * Replacement card-not-present transaction amount.
       */
      card_not_present_transactions?: Us1099K.CardNotPresentTransactions;

      /**
       * Replacement cash tips, where supported by the reporting year.
       */
      cash_tips?: Us1099K.CashTips;

      /**
       * Replacement federal income tax withheld.
       */
      federal_income_tax_withheld?: Us1099K.FederalIncomeTaxWithheld;

      /**
       * Replacement amounts for all twelve months, from January through December.
       */
      monthly_volumes?: Array<Us1099K.MonthlyVolume>;

      /**
       * Replacement payment transaction count.
       */
      payment_transactions_count?: Us1099K.PaymentTransactionsCount;

      /**
       * Replacement state income tax withheld.
       */
      state_income_tax_withheld?: Us1099K.StateIncomeTaxWithheld;
    }

    export interface Us1099Misc {
      /**
       * Replacement cash tips, where supported by the reporting year.
       */
      cash_tips?: Us1099Misc.CashTips;

      /**
       * Replacement crop insurance proceeds.
       */
      crop_insurance_proceeds?: Us1099Misc.CropInsuranceProceeds;

      /**
       * Replacement direct-sales-for-resale indicator.
       */
      direct_sales_for_resale?: boolean;

      /**
       * Replacement excess golden parachute payments, where supported by the reporting year.
       */
      excess_golden_parachute_payments?: Us1099Misc.ExcessGoldenParachutePayments;

      /**
       * Replacement FATCA filing requirement; cannot be supplied without a substantive correction.
       */
      fatca_filing_required?: boolean;

      /**
       * Replacement federal income tax withheld.
       */
      federal_income_tax_withheld?: Us1099Misc.FederalIncomeTaxWithheld;

      /**
       * Replacement fish purchased for resale.
       */
      fish_purchased_for_resale?: Us1099Misc.FishPurchasedForResale;

      /**
       * Replacement fishing boat proceeds.
       */
      fishing_boat_proceeds?: Us1099Misc.FishingBoatProceeds;

      /**
       * Replacement gross proceeds paid to an attorney.
       */
      gross_proceeds_paid_to_an_attorney?: Us1099Misc.GrossProceedsPaidToAnAttorney;

      /**
       * Replacement medical and health care payments.
       */
      medical_and_health_care_payments?: Us1099Misc.MedicalAndHealthCarePayments;

      /**
       * Replacement nonqualified deferred compensation.
       */
      nonqualified_deferred_compensation?: Us1099Misc.NonqualifiedDeferredCompensation;

      /**
       * Replacement other income.
       */
      other_income?: Us1099Misc.OtherIncome;

      /**
       * Replacement overtime compensation, where supported by the reporting year.
       */
      overtime_compensation?: Us1099Misc.OvertimeCompensation;

      /**
       * Replacement rents.
       */
      rents?: Us1099Misc.Rents;

      /**
       * Replacement royalties.
       */
      royalties?: Us1099Misc.Royalties;

      /**
       * Replacement section 409A deferrals.
       */
      section_409a_deferrals?: Us1099Misc.Section409aDeferrals;

      /**
       * Replacement state income.
       */
      state_income?: Us1099Misc.StateIncome;

      /**
       * Replacement state tax withheld.
       */
      state_tax_withheld?: Us1099Misc.StateTaxWithheld;

      /**
       * Replacement substitute payments.
       */
      substitute_payments?: Us1099Misc.SubstitutePayments;
    }

    export interface Us1099Nec {
      /**
       * Replacement cash tips, where supported by the reporting year.
       */
      cash_tips?: Us1099Nec.CashTips;

      /**
       * Replacement direct-sales indicator.
       */
      direct_sales_indicator?: boolean;

      /**
       * Replacement federal income tax withheld.
       */
      federal_income_tax_withheld?: Us1099Nec.FederalIncomeTaxWithheld;

      /**
       * Replacement nonemployee compensation.
       */
      nonemployee_compensation?: Us1099Nec.NonemployeeCompensation;

      /**
       * Replacement overtime compensation, where supported by the reporting year.
       */
      overtime_compensation?: Us1099Nec.OvertimeCompensation;

      /**
       * Replacement state income.
       */
      state_income?: Us1099Nec.StateIncome;

      /**
       * Replacement state tax withheld.
       */
      state_tax_withheld?: Us1099Nec.StateTaxWithheld;
    }

    export namespace Us1099K {
      export interface CardNotPresentTransactions {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface CashTips {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface FederalIncomeTaxWithheld {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface MonthlyVolume {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface PaymentTransactionsCount {
        /**
         * The replacement non-negative transaction count.
         */
        count: number;
      }

      export interface StateIncomeTaxWithheld {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }
    }

    export namespace Us1099Misc {
      export interface CashTips {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface CropInsuranceProceeds {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface ExcessGoldenParachutePayments {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface FederalIncomeTaxWithheld {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface FishPurchasedForResale {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface FishingBoatProceeds {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface GrossProceedsPaidToAnAttorney {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface MedicalAndHealthCarePayments {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface NonqualifiedDeferredCompensation {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface OtherIncome {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface OvertimeCompensation {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface Rents {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface Royalties {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface Section409aDeferrals {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface StateIncome {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface StateTaxWithheld {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface SubstitutePayments {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }
    }

    export namespace Us1099Nec {
      export interface CashTips {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface FederalIncomeTaxWithheld {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface NonemployeeCompensation {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface OvertimeCompensation {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface StateIncome {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }

      export interface StateTaxWithheld {
        /**
         * The replacement amount in major currency units, with at most two decimal places. Must be non-negative.
         */
        volume_decimal: string;
      }
    }
  }
}
export namespace Tax {
  export interface FormRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Tax {
  export interface FormListParams extends PaginationParams {
    /**
     * The payee whose volume is represented on the tax form.
     */
    payee: FormListParams.Payee;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Filter forms by draft or finalized status.
     */
    status?: FormListParams.Status;

    /**
     * An optional filter on the list, based on the object `type` field. Without the filter, the list includes all current and future tax form types. If your integration expects only one type of tax form in the response, make sure to provide a type value in the request.
     */
    type?: FormListParams.Type;
  }

  export namespace FormListParams {
    export interface Payee {
      /**
       * The ID of the Stripe account whose forms will be retrieved.
       */
      account?: string;

      /**
       * The external reference to the payee whose forms will be retrieved.
       */
      external_reference?: string;

      /**
       * Specifies the payee type.
       */
      type?: Payee.Type;
    }

    export type Status = 'draft' | 'finalized' | OtherString;

    export type Type =
      | 'au_serr'
      | 'ca_mrdp'
      | 'eu_dac7'
      | 'gb_mrdp'
      | 'nz_mrdp'
      | 'us_1099_k'
      | 'us_1099_misc'
      | 'us_1099_nec'
      | OtherString;

    export namespace Payee {
      export type Type = 'account' | 'external_reference' | OtherString;
    }
  }
}
export namespace Tax {
  export interface FormPdfParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
