declare namespace Stripe {
  /**
   * The SubscriptionSchedule object.
   */
  interface SubscriptionSchedule {
    /**
     * Time at which the subscription schedule was canceled. Measured in seconds since the Unix epoch.
     */
    canceled_at?: number | null;

    /**
     * Time at which the subscription schedule was completed. Measured in seconds since the Unix epoch.
     */
    completed_at?: number | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * Object representing the start and end dates for the current phase of the subscription schedule, if it is `active`.
     */
    current_phase?: CurrentPhase | null;

    /**
     * ID of the customer who owns the subscription schedule.
     */
    customer?: string | Customer;

    default_settings?: DefaultSettings;

    /**
     * Behavior of the subscription schedule and underlying subscription when it ends.
     */
    end_behavior?: SubscriptionSchedule.EndBehavior;

    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?:
      | {
        [key: string]: string;
      }
      | null;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'subscription_schedule';

    /**
     * Configuration for the subscription schedule's phases.
     */
    phases?: Array<Phase>;

    /**
     * Time at which the subscription schedule was released. Measured in seconds since the Unix epoch.
     */
    released_at?: number | null;

    /**
     * ID of the subscription once managed by the subscription schedule (if it is released).
     */
    released_subscription?: string | null;

    /**
     * This field has been deprecated. Interval and duration at which the subscription schedule renews for when it ends if `renewal_behavior` is `renew`.
     */
    renewal_interval?: RenewalInterval | null;

    /**
     * The present status of the subscription schedule. Possible values are `not_started`, `active`, `completed`, `released`, and `canceled`. You can read more about the different states in our [behavior guide](https://stripe.com/docs/billing/subscriptions/subscription-schedules).
     */
    status?: SubscriptionSchedule.Status;

    /**
     * ID of the subscription managed by the subscription schedule.
     */
    subscription?: string | Subscription | null;
  }

  namespace SubscriptionSchedule {
    type EndBehavior = 'cancel' | 'none' | 'release' | 'renew'

    type Status =
      | 'active'
      | 'canceled'
      | 'completed'
      | 'not_started'
      | 'released'
  }

  /**
   * Creates a new subscription schedule object.
   */
  interface SubscriptionScheduleCreateParams {
    /**
     * The identifier of the customer to create the subscription schedule for.
     */
    customer?: string;

    /**
     * Object representing the subscription schedule's default settings.
     */
    default_settings?: default_settings_params;

    /**
     * Configures how the subscription schedule behaves when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running.`cancel` will end the subscription schedule and cancel the underlying subscription.
     */
    end_behavior?: SubscriptionScheduleCreateParams.EndBehavior;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Migrate an existing subscription to be managed by a subscription schedule. If this parameter is set, a subscription schedule will be created using the subscription's plan(s), set to auto-renew using the subscription's interval. When using this parameter, other parameters (such as phase values) cannot be set. To create a subscription schedule with other modifications, we recommend making two separate API calls.
     */
    from_subscription?: string;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * List representing phases of the subscription schedule. Each phase can be customized to have different durations, plans, and coupons. If there are multiple phases, the `end_date` of one phase will always equal the `start_date` of the next phase.
     */
    phases?: Array<phase_configuration_params>;

    /**
     * When the subscription schedule starts. We recommend using `now` so that it starts the subscription immediately. You can also use a Unix timestamp to backdate the subscription so that it starts on a past date, or set a future date for the subscription to start on. When you backdate, the `billing_cycle_anchor` of the subscription is equivalent to the `start_date`.
     */
    start_date?: number | 'now';
  }

  namespace SubscriptionScheduleCreateParams {
    type EndBehavior = 'cancel' | 'none' | 'release' | 'renew'
  }

  /**
   * Retrieves the list of your subscription schedules.
   */
  interface SubscriptionScheduleListParams {
    /**
     * Only return subscription schedules that were created canceled the given date interval.
     */
    canceled_at?: range_query_specs | number;

    /**
     * Only return subscription schedules that completed during the given date interval.
     */
    completed_at?: range_query_specs | number;

    /**
     * Only return subscription schedules that were created during the given date interval.
     */
    created?: range_query_specs | number;

    /**
     * Only return subscription schedules for the given customer.
     */
    customer?: string;

    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * Only return subscription schedules that were released during the given date interval.
     */
    released_at?: range_query_specs | number;

    /**
     * Only return subscription schedules that have not started yet.
     */
    scheduled?: boolean;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  /**
   * Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.
   */
  interface SubscriptionScheduleRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates an existing subscription schedule.
   */
  interface SubscriptionScheduleUpdateParams {
    /**
     * Object representing the subscription schedule's default settings.
     */
    default_settings?: default_settings_params;

    /**
     * Configures how the subscription schedule behaves when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running.`cancel` will end the subscription schedule and cancel the underlying subscription.
     */
    end_behavior?: SubscriptionScheduleUpdateParams.EndBehavior;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * List representing phases of the subscription schedule. Each phase can be customized to have different durations, plans, and coupons. If there are multiple phases, the `end_date` of one phase will always equal the `start_date` of the next phase. Note that past phases can be omitted.
     */
    phases?: Array<phase_configuration_params>;

    /**
     * If the update changes the current phase, indicates if the changes should be prorated. Defaults to `true`.
     */
    prorate?: boolean;
  }

  namespace SubscriptionScheduleUpdateParams {
    type EndBehavior = 'cancel' | 'none' | 'release' | 'renew'
  }

  /**
   * Cancels a subscription schedule and its associated subscription immediately (if the subscription schedule has an active subscription). A subscription schedule can only be canceled if its status is not_started or active.
   */
  interface SubscriptionScheduleCancelParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * If the subscription schedule is `active`, indicates whether or not to generate a final invoice that contains any un-invoiced metered usage and new/pending proration invoice items. Defaults to `true`.
     */
    invoice_now?: boolean;

    /**
     * If the subscription schedule is `active`, indicates if the cancellation should be prorated. Defaults to `true`.
     */
    prorate?: boolean;
  }

  /**
   * Releases the subscription schedule immediately, which will stop scheduling of its phases, but leave any existing subscription in place. A schedule can only be released if its status is not_started or active. If the subscription schedule is currently associated with a subscription, releasing it will remove its subscription property and set the subscription's ID to the released_subscription property.
   */
  interface SubscriptionScheduleReleaseParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Keep any cancellation on the subscription that the schedule has set
     */
    preserve_cancel_date?: boolean;
  }

  class SubscriptionSchedulesResource {
    /**
     * Creates a new subscription schedule object.
     */
    create(
      params?: SubscriptionScheduleCreateParams,
      options?: HeaderOptions
    ): Promise<SubscriptionSchedule>;

    /**
     * Retrieves the list of your subscription schedules.
     */
    list(
      params?: SubscriptionScheduleListParams,
      options?: HeaderOptions
    ): Promise<ApiList<SubscriptionSchedule>>;

    /**
     * Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.
     */
    retrieve(
      id: string,
      params?: SubscriptionScheduleRetrieveParams,
      options?: HeaderOptions
    ): Promise<SubscriptionSchedule>;

    /**
     * Updates an existing subscription schedule.
     */
    update(
      id: string,
      params?: SubscriptionScheduleUpdateParams,
      options?: HeaderOptions
    ): Promise<SubscriptionSchedule>;

    /**
     * Cancels a subscription schedule and its associated subscription immediately (if the subscription schedule has an active subscription). A subscription schedule can only be canceled if its status is not_started or active.
     */
    cancel(
      id: string,
      params?: SubscriptionScheduleCancelParams,
      options?: HeaderOptions
    ): Promise<SubscriptionSchedule>;

    /**
     * Releases the subscription schedule immediately, which will stop scheduling of its phases, but leave any existing subscription in place. A schedule can only be released if its status is not_started or active. If the subscription schedule is currently associated with a subscription, releasing it will remove its subscription property and set the subscription's ID to the released_subscription property.
     */
    release(
      id: string,
      params?: SubscriptionScheduleReleaseParams,
      options?: HeaderOptions
    ): Promise<SubscriptionSchedule>;
  }
}