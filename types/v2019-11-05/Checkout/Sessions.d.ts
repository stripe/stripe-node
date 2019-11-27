declare namespace Stripe {
  namespace Checkout {
    /**
     * The Session object.
     */
    interface Session {
      /**
       * The value (`auto` or `required`) for whether Checkout collected the
       * customer's billing address.
       */
      billing_address_collection?: string | null;

      /**
       * The URL the customer will be directed to if they decide to cancel payment and return to your website.
       */
      cancel_url?: string;

      /**
       * A unique string to reference the Checkout Session. This can be a
       * customer ID, a cart ID, or similar, and can be used to reconcile the
       * session with your internal systems.
       */
      client_reference_id?: string | null;

      /**
       * The ID of the customer for this session.
       * For Checkout Sessions in `payment` or `subscription` mode, Checkout
       * will create a new customer object based on information provided
       * during the session unless an existing customer was provided when
       * the session was created.
       */
      customer?: string | Customer | null;

      /**
       * If provided, this value will be used when the Customer object is created.
       * If not provided, customers will be asked to enter their email address.
       * Use this parameter to prefill customer data if you already have an email
       * on file. To access information about the customer once a session is
       * complete, use the `customer` field.
       */
      customer_email?: string | null;

      /**
       * The line items, plans, or SKUs purchased by the customer.
       */
      display_items?: Array<DisplayItem> | null;

      /**
       * Unique identifier for the object. Used to pass to `redirectToCheckout`
       * in Stripe.js.
       */
      id?: string;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode?: boolean;

      /**
       * The IETF language tag of the locale Checkout is displayed in. If blank
       * or `auto`, the browser's locale is used.
       */
      locale?: Session.Locale | null;

      /**
       * The mode of the Checkout Session, one of `payment`, `setup`, or `subscription`.
       */
      mode?: Session.Mode | null;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object?: 'checkout.session';

      /**
       * The ID of the PaymentIntent for Checkout Sessions in `payment` mode.
       */
      payment_intent?: string | PaymentIntent | null;

      /**
       * A list of the types of payment methods (e.g. card) this Checkout
       * Session is allowed to accept.
       */
      payment_method_types?: Array<string>;

      /**
       * The ID of the SetupIntent for Checkout Sessions in `setup` mode.
       */
      setup_intent?: string | SetupIntent | null;

      /**
       * Describes the type of transaction being performed by Checkout in order to customize
       * relevant text on the page, such as the submit button. `submit_type` can only be
       * specified on Checkout Sessions in `payment` mode, but not Checkout Sessions
       * in `subscription` or `setup` mode.
       * Supported values are `auto`, `book`, `donate`, or `pay`.
       */
      submit_type?: Session.SubmitType | null;

      /**
       * The ID of the subscription for Checkout Sessions in `subscription` mode.
       */
      subscription?: string | Subscription | null;

      /**
       * The URL the customer will be directed to after the payment or
       * subscription creation is successful.
       */
      success_url?: string;
    }

    namespace Session {
      type Locale =
        | 'auto'
        | 'da'
        | 'de'
        | 'en'
        | 'es'
        | 'fi'
        | 'fr'
        | 'it'
        | 'ja'
        | 'nb'
        | 'nl'
        | 'pl'
        | 'pt'
        | 'sv'
        | 'zh'

      type Mode = 'payment' | 'setup' | 'subscription'

      type SubmitType = 'auto' | 'book' | 'donate' | 'pay'
    }

    /**
     * Creates a Session object.
     */
    interface SessionCreateParams {
      /**
       * Specify whether Checkout should collect the customer's billing address. If set to `required`, Checkout will always collect the customer's billing address. If not set or set to `auto` Checkout will only collect the billing address when necessary.
       */
      billing_address_collection?: SessionCreateParams.BillingAddressCollection;

      /**
       * The URL the customer will be directed to if they decide to cancel payment and return to your website.
       */
      cancel_url: string;

      /**
       * A unique string to reference the Checkout Session. This can be a
       * customer ID, a cart ID, or similar, and can be used to reconcile the
       * session with your internal systems.
       */
      client_reference_id?: string;

      /**
       * ID of an existing customer, if one exists. Only supported for Checkout
       * Sessions in `payment` or `subscription` mode, but not Checkout Sessions
       * in `setup` mode. The email stored on the customer will be used to prefill
       * the email field on the Checkout page. If the customer changes their email
       * on the Checkout page, the Customer object will be updated with the new
       * email.
       * If blank for Checkout Sessions in `payment` or `subscription` mode,
       * Checkout will create a new customer object based on information
       * provided during the session.
       */
      customer?: string;

      /**
       * If provided, this value will be used when the Customer object is created.
       * If not provided, customers will be asked to enter their email address.
       * Use this parameter to prefill customer data if you already have an email
       * on file. To access information about the customer once a session is
       * complete, use the `customer` field.
       */
      customer_email?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A list of items the customer is purchasing. Use this parameter for
       * one-time payments or adding invoice line items to a subscription (used
       * in conjunction with `subscription_data`).
       */
      line_items?: Array<line_item_params>;

      /**
       * The IETF language tag of the locale Checkout is displayed in. If blank or `auto`, the browser's locale is used. Supported values are `auto`, `da`, `de`, `en`, `es`, `fi`, `fr`, `it`, `ja`, `nb`, `nl`, `pl`, `pt`, `sv`, or `zh`.
       */
      locale?: SessionCreateParams.Locale;

      /**
       * The mode of the Checkout Session, one of `payment`, `setup`, or `subscription`.
       */
      mode?: SessionCreateParams.Mode;

      /**
       * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
       */
      payment_intent_data?: payment_intent_data_params;

      /**
       * A list of the types of payment methods (e.g. card) this Checkout
       * Session is allowed to accept. The only supported values today are `card` and `ideal`.
       */
      payment_method_types: Array<SessionCreateParams.PaymentMethodType>;

      /**
       * A subset of parameters to be passed to SetupIntent creation for Checkout Sessions in `setup` mode.
       */
      setup_intent_data?: setup_intent_data_param;

      /**
       * Describes the type of transaction being performed by Checkout in order to customize
       * relevant text on the page, such as the submit button. `submit_type` can only be
       * specified on Checkout Sessions in `payment` mode, but not Checkout Sessions
       * in `subscription` or `setup` mode.
       * Supported values are `auto`, `book`, `donate`, or `pay`.
       */
      submit_type?: SessionCreateParams.SubmitType;

      /**
       * A subset of parameters to be passed to subscription creation for Checkout Sessions in `subscription` mode.
       */
      subscription_data?: subscription_data_params;

      /**
       * The URL to which Stripe should send customers when payment or setup
       * is complete.
       * If you'd like access to the Checkout Session for the successful
       * payment, read more about it in our guide on [fulfilling your payments
       * with webhooks](/docs/payments/checkout/fulfillment#webhooks).
       */
      success_url: string;
    }

    namespace SessionCreateParams {
      type BillingAddressCollection = 'auto' | 'required'

      type Locale =
        | 'auto'
        | 'da'
        | 'de'
        | 'en'
        | 'es'
        | 'fi'
        | 'fr'
        | 'it'
        | 'ja'
        | 'nb'
        | 'nl'
        | 'pl'
        | 'pt'
        | 'sv'
        | 'zh'

      type Mode = 'payment' | 'setup' | 'subscription'

      type PaymentMethodType = 'card' | 'ideal'

      type SubmitType = 'auto' | 'book' | 'donate' | 'pay'
    }

    /**
     * Retrieves a Session object.
     */
    interface SessionRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class SessionsResource {
      /**
       * Creates a Session object.
       */
      create(
        params: SessionCreateParams,
        options?: HeaderOptions
      ): Promise<Checkout.Session>;

      /**
       * Retrieves a Session object.
       */
      retrieve(
        id: string,
        params?: SessionRetrieveParams,
        options?: HeaderOptions
      ): Promise<Checkout.Session>;
    }
  }
}