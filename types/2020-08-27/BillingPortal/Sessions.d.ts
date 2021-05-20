// File generated from our OpenAPI spec

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
         * The configuration used by this session, describing the features available.
         */
        configuration: string | Stripe.BillingPortal.Configuration;

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
         * The account for which the session was created on behalf of. When specified, only subscriptions and invoices with this `on_behalf_of` account appear in the portal. For more information, see the [docs](https://stripe.com/docs/connect/charges-transfers#on-behalf-of). Use the [Accounts API](https://stripe.com/docs/api/accounts/object#account_object-settings-branding) to modify the `on_behalf_of` account's branding settings, which the portal displays.
         */
        on_behalf_of: string | null;

        /**
         * The URL to redirect customers to when they click on the portal's link to return to your website.
         */
        return_url: string;

        /**
         * The short-lived URL of the session that gives customers access to the customer portal.
         */
        url: string;
      }

      interface SessionCreateParams {
        /**
         * The ID of an existing customer.
         */
        customer: string;

        /**
         * The ID of an existing [configuration](https://stripe.com/docs/api/customer_portal/configuration) to use for this session, describing its functionality and features. If not specified, the session uses the default configuration.
         */
        configuration?: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The `on_behalf_of` account to use for this session. When specified, only subscriptions and invoices with this `on_behalf_of` account appear in the portal. For more information, see the [docs](https://stripe.com/docs/connect/charges-transfers#on-behalf-of). Use the [Accounts API](https://stripe.com/docs/api/accounts/object#account_object-settings-branding) to modify the `on_behalf_of` account's branding settings, which the portal displays.
         */
        on_behalf_of?: string;

        /**
         * The default URL to redirect customers to when they click on the portal's link to return to your website.
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
        ): Promise<Stripe.Response<Stripe.BillingPortal.Session>>;
      }
    }
  }
}
