import { StripeResource } from '../../StripeResource.js';
import { RequestOptions } from '../../Types.js';
import { PaginationParams } from '../../shared.js';
import { Response, ApiListPromise } from '../../lib.js';
export declare class TestClockResource extends StripeResource {
    /**
     * Deletes a test clock.
     */
    del(id: string, params?: TestHelpers.TestClockDeleteParams, options?: RequestOptions): Promise<Response<TestHelpers.DeletedTestClock>>;
    del(id: string, options?: RequestOptions): Promise<Response<TestHelpers.DeletedTestClock>>;
    /**
     * Retrieves a test clock.
     */
    retrieve(id: string, params?: TestHelpers.TestClockRetrieveParams, options?: RequestOptions): Promise<Response<TestClock>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<TestClock>>;
    /**
     * Returns a list of your test clocks.
     */
    list(params?: TestHelpers.TestClockListParams, options?: RequestOptions): ApiListPromise<TestClock>;
    list(options?: RequestOptions): ApiListPromise<TestClock>;
    /**
     * Creates a new test clock that can be attached to new customers and quotes.
     */
    create(params: TestHelpers.TestClockCreateParams, options?: RequestOptions): Promise<Response<TestClock>>;
    /**
     * Starts advancing a test clock to a specified time in the future. Advancement is done when status changes to Ready.
     */
    advance(id: string, params: TestHelpers.TestClockAdvanceParams, options?: RequestOptions): Promise<Response<TestClock>>;
}
export /**
 * A test clock enables deterministic control over objects in testmode. With a test clock, you can create
 * objects at a frozen time in the past or future, and advance to a specific future time to observe webhooks and state changes. After the clock advances,
 * you can either validate the current state of your scenario (and test your assumptions), change the current state of your scenario (and test more complex scenarios), or keep advancing forward in time.
 */ interface TestClock {
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
export declare namespace TestHelpers {
    interface DeletedTestClock {
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
    namespace TestClock {
        type Status = 'advancing' | 'internal_failure' | 'ready';
        interface StatusDetails {
            advancing?: StatusDetails.Advancing;
        }
        namespace StatusDetails {
            interface Advancing {
                /**
                 * The `frozen_time` that the Test Clock is advancing towards.
                 */
                target_frozen_time: number;
            }
        }
    }
}
export declare namespace TestHelpers {
    interface TestClockCreateParams {
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
export declare namespace TestHelpers {
    interface TestClockRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace TestHelpers {
    interface TestClockListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace TestHelpers {
    interface TestClockDeleteParams {
    }
}
export declare namespace TestHelpers {
    interface TestClockAdvanceParams {
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
