// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {
  ApplyExpand,
  ApplyExpandListItem,
  PaginationParams,
  OtherString,
} from '../../shared.js';
import {RequestOptions, Response, ApiListPromise} from '../../lib.js';

export class TestClockResource extends StripeResource {
  /**
   * Deletes a test clock.
   */
  del(
    id: string,
    params?: TestHelpers.TestClockDeleteParams,
    options?: RequestOptions
  ): Promise<Response<DeletedTestClock>> {
    return this._makeRequest(
      'DELETE',
      `/v1/test_helpers/test_clocks/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Retrieves a test clock.
   */
  retrieve<E extends string = never>(
    id: string,
    params?: TestHelpers.TestClockRetrieveParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<TestClock, E>>> {
    return this._makeRequest(
      'GET',
      `/v1/test_helpers/test_clocks/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Returns a list of your test clocks.
   */
  list<E extends string = never>(
    params?: TestHelpers.TestClockListParams<E>,
    options?: RequestOptions
  ): ApiListPromise<ApplyExpandListItem<TestClock, E>> {
    return this._makeRequest(
      'GET',
      '/v1/test_helpers/test_clocks',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Creates a new test clock that can be attached to new customers and quotes.
   */
  create<E extends string = never>(
    params: TestHelpers.TestClockCreateParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<TestClock, E>>> {
    return this._makeRequest(
      'POST',
      '/v1/test_helpers/test_clocks',
      params,
      options
    ) as any;
  }
  /**
   * Starts advancing a test clock to a specified time in the future. Advancement is done when status changes to Ready.
   */
  advance<E extends string = never>(
    id: string,
    params: TestHelpers.TestClockAdvanceParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<TestClock, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/test_clocks/${encodeURIComponent(id)}/advance`,
      params,
      options
    ) as any;
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
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The custom name supplied at creation.
   */
  name: string | null;

  /**
   * The status of the Test Clock.
   */
  status: TestClock.Status;

  status_details: TestClock.StatusDetails;
}
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
  export type Status = 'advancing' | 'internal_failure' | 'ready' | OtherString;

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
export namespace TestHelpers {
  export interface TestClockCreateParams<E extends string = string> {
    /**
     * The initial frozen time for this test clock.
     */
    frozen_time: number;

    /**
     * Existing customer this test clock will be attached to. Once attached, customers can't be removed from a test clock.
     */
    customer?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;

    /**
     * The name for this test clock.
     */
    name?: string;
  }
}
export namespace TestHelpers {
  export interface TestClockRetrieveParams<E extends string = string> {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;
  }
}
export namespace TestHelpers {
  export interface TestClockListParams<E extends string = string>
    extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;
  }
}
export namespace TestHelpers {
  export interface TestClockDeleteParams {}
}
export namespace TestHelpers {
  export interface TestClockAdvanceParams<E extends string = string> {
    /**
     * The time to advance the test clock. Must be after the test clock's current frozen time. Cannot be more than two intervals in the future from the shortest subscription in this test clock. If there are no subscriptions in this test clock, it cannot be more than two years in the future.
     */
    frozen_time: number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;
  }
}
