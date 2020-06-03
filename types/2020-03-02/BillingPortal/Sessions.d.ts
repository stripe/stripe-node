declare module 'stripe' {
  namespace Stripe {
    namespace BillingPortal {
      /**
       * The Session object.
       */
      interface Session {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing_portal.session';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * The ID of the customer for this session.
         */
        customer: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The URL to which Stripe should send customers when they click on the link to return to your website.
         */
        return_url: string;

        /**
         * The short-lived URL of the session giving customers access to the customer portal.
         */
        url: string;
      }

      interface SessionCreateParams {
        /**
         * The ID of an existing customer.
         */
        customer: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The URL to which Stripe should send customers when they click on the link to return to your website. This field is required if a default return URL has not been configured for the portal.
         */
        return_url?: string;
      }

      class SessionsResource {
        /**
         * Creates a session of the customer portal.
         */
        create(
          params: SessionCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.BillingPortal.Session>;
      }
    }
  }
}
