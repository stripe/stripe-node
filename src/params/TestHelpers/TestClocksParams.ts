// File generated from our OpenAPI spec

namespace TestHelpers {
  export interface TestClockCreateParams {
    /**
     * The initial frozen time for this test clock.
     */
    frozen_time: number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The name for this test clock.
     */
    name?: string;
  }
}
namespace TestHelpers {
  export interface TestClockRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace TestHelpers {
  export interface TestClockListParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace TestHelpers {
  export interface TestClockDeleteParams {}
}
namespace TestHelpers {
  export interface TestClockAdvanceParams {
    /**
     * The time to advance the test clock. Must be after the test clock's current frozen time. Cannot be more than two intervals in the future from the shortest subscription in this test clock. If there are no subscriptions in this test clock, it cannot be more than two years in the future.
     */
    frozen_time: number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
