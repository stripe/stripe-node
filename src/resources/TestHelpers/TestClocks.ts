// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../lib.js';
import {PaginationParams} from '../../shared.js';
import {Response, ApiListPromise} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class TestClockResource extends StripeResource {
  /**
   * Deletes a test clock.
   */
  del(
    id: string,
    params?: TestHelpers.TestClockDeleteParams,
    options?: RequestOptions
  ): Promise<Response<TestHelpers.DeletedTestClock>>;
  del(
    id: string,
    options?: RequestOptions
  ): Promise<Response<TestHelpers.DeletedTestClock>>;
  del(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'DELETE',
      fullPath: '/v1/test_helpers/test_clocks/{test_clock}',
    }).call(this, ...args);
  }

  /**
   * Retrieves a test clock.
   */
  retrieve(
    id: string,
    params?: TestHelpers.TestClockRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<TestClock>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<TestClock>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/test_helpers/test_clocks/{test_clock}',
    }).call(this, ...args);
  }

  /**
   * Returns a list of your test clocks.
   */
  list(
    params?: TestHelpers.TestClockListParams,
    options?: RequestOptions
  ): ApiListPromise<TestClock>;
  list(options?: RequestOptions): ApiListPromise<TestClock>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/test_helpers/test_clocks',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates a new test clock that can be attached to new customers and quotes.
   */
  create(
    params: TestHelpers.TestClockCreateParams,
    options?: RequestOptions
  ): Promise<Response<TestClock>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/test_helpers/test_clocks',
    }).call(this, ...args);
  }

  /**
   * Starts advancing a test clock to a specified time in the future. Advancement is done when status changes to Ready.
   */
  advance(
    id: string,
    params: TestHelpers.TestClockAdvanceParams,
    options?: RequestOptions
  ): Promise<Response<TestClock>>;
  advance(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/test_helpers/test_clocks/{test_clock}/advance',
    }).call(this, ...args);
  }
}
export interface TestClock {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'test_helpers.test_clock';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Always true for a deleted object
   */
  deleted?: void;

  /**
   * Time at which this clock is scheduled to auto delete.
   */
  deletes_after: number;

  /**
   * Time at which all objects belonging to this clock are frozen.
   */
  frozen_time: number;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The custom name supplied at creation.
   */
  name: string | null;

  /**
   * The status of the Test Clock.
   */
  status: TestHelpers.TestClock.Status;

  status_details: TestHelpers.TestClock.StatusDetails;
}
export namespace TestHelpers {
  export interface DeletedTestClock {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'test_helpers.test_clock';

    /**
     * Always true for a deleted object
     */
    deleted: true;
  }

  export namespace TestClock {
    export type Status = 'advancing' | 'internal_failure' | 'ready';

    export interface StatusDetails {
      advancing?: StatusDetails.Advancing;
    }

    export namespace StatusDetails {
      export interface Advancing {
        /**
         * The `frozen_time` that the Test Clock is advancing towards.
         */
        target_frozen_time: number;
      }
    }
  }
}
export namespace TestHelpers {
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
export namespace TestHelpers {
  export interface TestClockRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace TestHelpers {
  export interface TestClockListParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace TestHelpers {
  export interface TestClockDeleteParams {}
}
export namespace TestHelpers {
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
