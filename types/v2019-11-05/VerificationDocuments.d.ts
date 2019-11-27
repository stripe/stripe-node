declare namespace Stripe {
  /**
   * The VerificationDocument object.
   */
  interface VerificationDocument {
    /**
     * The back of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`.
     */
    back?: string | File | null;

    /**
     * A user-displayable string describing the verification state of this document. For example, if a document is uploaded and the picture is too fuzzy, this may say "Identity document is too unclear to read".
     */
    details?: string | null;

    /**
     * One of `document_corrupt`, `document_country_not_supported`, `document_expired`, `document_failed_copy`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_failed_greyscale`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_missing_back`, `document_missing_front`, `document_not_readable`, `document_not_uploaded`, `document_photo_mismatch`, `document_too_large`, or `document_type_not_supported`. A machine-readable code specifying the verification state for this document.
     */
    details_code?: string | null;

    /**
     * The front of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`.
     */
    front?: string | File | null;
  }
}