// File generated from our OpenAPI spec

namespace Issuing {
  export interface PhysicalBundleRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Issuing {
  export interface PhysicalBundleListParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return physical bundles with the given status.
     */
    status?: PhysicalBundleListParams.Status;

    /**
     * Only return physical bundles with the given type.
     */
    type?: PhysicalBundleListParams.Type;
  }

  namespace PhysicalBundleListParams {
    export type Status = 'active' | 'inactive' | 'review';

    export type Type = 'custom' | 'standard';
  }
}
