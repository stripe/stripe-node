// File generated from our OpenAPI spec

namespace Identity {
  export interface VerificationReportRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Identity {
  export interface VerificationReportListParams extends PaginationParams {
    /**
     * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
     */
    client_reference_id?: string;

    /**
     * Only return VerificationReports that were created during the given date interval.
     */
    created?: Stripe.RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return VerificationReports of this type
     */
    type?: VerificationReportListParams.Type;

    /**
     * Only return VerificationReports created by this VerificationSession ID. It is allowed to provide a VerificationIntent ID.
     */
    verification_session?: string;
  }

  namespace VerificationReportListParams {
    export type Type = 'document' | 'id_number';
  }
}
