// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * A Rate Card represents a versioned set of usage-based prices (rates). Each rate is associated with one Metered Item and
         * defines how much to charge for usage of that item. After you've set up a RateCard, you can subscribe customers to it
         * by creating a Rate Card Subscription.
         */
        interface RateCard {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.rate_card';

          /**
           * Whether this RateCard is active. Inactive RateCards cannot be used in new activations or have new rates added.
           */
          active: boolean;

          /**
           * Timestamp of when the object was created.
           */
          created: string;

          /**
           * Three-letter ISO currency code, in lowercase. Must be a supported currency.
           */
          currency: string;

          /**
           * A customer-facing name for the Rate Card.
           * This name is used in Stripe-hosted products like the Customer Portal and Checkout. It does not show up on Invoices.
           * Maximum length of 250 characters.
           */
          display_name: string;

          /**
           * The ID of this rate card's most recently created version.
           */
          latest_version: string;

          /**
           * The ID of the Rate Card Version that will be used by all subscriptions when no specific version is specified.
           */
          live_version: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * An internal key you can use to search for a particular RateCard. Maximum length of 200 characters.
           */
          lookup_key?: string;

          /**
           * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.Metadata;

          /**
           * The interval for assessing service. For example, a monthly Rate Card with a rate of $1 for the first 10 "workloads"
           * and $2 thereafter means "$1 per workload up to 10 workloads during a month of service." This is similar to but
           * distinct from billing interval; the service interval deals with the rate at which the customer accumulates fees,
           * while the billing interval in Cadence deals with the rate the customer is billed.
           */
          service_interval: RateCard.ServiceInterval;

          /**
           * The length of the interval for assessing service. For example, set this to 3 and `service_interval` to `"month"` in
           * order to specify quarterly service.
           */
          service_interval_count: number;

          /**
           * The Stripe Tax tax behavior - whether the rates are inclusive or exclusive of tax.
           */
          tax_behavior: RateCard.TaxBehavior;
        }

        namespace RateCard {
          type ServiceInterval = 'day' | 'month' | 'week' | 'year';

          type TaxBehavior = 'exclusive' | 'inclusive';
        }
      }
    }
  }
}
