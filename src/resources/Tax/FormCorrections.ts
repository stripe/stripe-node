// File generated from our OpenAPI spec

export interface FormCorrection {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'tax.form_correction';

  /**
   * The tax forms created by the correction.
   */
  correction_forms?: Array<FormCorrection.CorrectionForm>;

  /**
   * The original tax form that was corrected.
   */
  original_form?: string;
}
export namespace FormCorrection {
  export interface CorrectionForm {
    /**
     * The kind of information changed by this correction.
     */
    correction_type?: CorrectionForm.CorrectionType;

    /**
     * The corrected tax form.
     */
    form?: string;
  }

  export namespace CorrectionForm {
    export type CorrectionType = 'payee_changed' | 'totals_changed';
  }
}
