// File generated from our OpenAPI spec

namespace Entitlements {
  export interface ActiveEntitlementRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Entitlements {
  export interface ActiveEntitlementListParams extends PaginationParams {
    /**
     * The ID of the customer.
     */
    customer: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
