// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace TestHelpers {
      /**
       * The TestClock object.
       */
      interface TestClock {
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
        status: TestClock.Status;
      }

      namespace TestClock {
        type Status = 'advancing' | 'internal_failure' | 'ready';
      }

      /**
       * The DeletedTestClock object.
       */
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

      interface TestClockRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface TestClockListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface TestClockDeleteParams {}

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

      class TestClocksResource {
        /**
         * Creates a new test clock that can be attached to new customers and quotes.
         */
        create(
          params: TestClockCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.TestHelpers.TestClock>>;

        /**
         * Retrieves a test clock.
         */
        retrieve(
          id: string,
          params?: TestClockRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.TestHelpers.TestClock>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.TestHelpers.TestClock>>;

        /**
         * Returns a list of your test clocks.
         */
        list(
          params?: TestClockListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.TestHelpers.TestClock>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.TestHelpers.TestClock>;

        /**
         * Deletes a test clock.
         */
        del(
          id: string,
          params?: TestClockDeleteParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.TestHelpers.DeletedTestClock>>;
        del(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.TestHelpers.DeletedTestClock>>;

        /**
         * Starts advancing a test clock to a specified time in the future. Advancement is done when status changes to Ready.
         */
        advance(
          id: string,
          params: TestClockAdvanceParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.TestHelpers.TestClock>>;
      }
    }
  }
}
