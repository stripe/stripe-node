declare namespace Stripe {
  /**
   * The CardPresent object.
   */
  interface CardPresent {
    application_cryptogram?: string;

    application_preferred_name?: string;

    authorization_code?: string | null;

    authorization_response_code?: string;

    brand?: string | null;

    country?: string | null;

    cvm_type?: string;

    data_type?: string | null;

    dedicated_file_name?: string;

    description?: string;

    emv_auth_data?: string;

    evidence_customer_signature?: string | null;

    evidence_transaction_certificate?: string | null;

    exp_month?: number | null;

    exp_year?: number | null;

    fingerprint?: string;

    funding?: string | null;

    iin?: string;

    issuer?: string;

    last4?: string | null;

    pos_device_id?: string | null;

    pos_entry_mode?: string;

    read_method?: string | null;

    reader?: string | null;

    terminal_verification_results?: string;

    transaction_status_information?: string;
  }
}