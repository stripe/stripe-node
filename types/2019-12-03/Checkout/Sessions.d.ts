declare module 'stripe' {
  namespace Stripe {
    namespace Checkout {
      /**
       * The Session object.
       */
      interface Session {
        /**
         * Unique identifier for the object. Used to pass to `redirectToCheckout`
         * in Stripe.js.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'checkout.session';

        /**
         * The value (`auto` or `required`) for whether Checkout collected the
         * customer's billing address.
         */
        billing_address_collection: string | null;

        /**
         * The URL the customer will be directed to if they decide to cancel payment and return to your website.
         */
        cancel_url: string;

        /**
         * A unique string to reference the Checkout Session. This can be a
         * customer ID, a cart ID, or similar, and can be used to reconcile the
         * session with your internal systems.
         */
        client_reference_id: string | null;

        /**
         * The ID of the customer for this session.
         * For Checkout Sessions in `payment` or `subscription` mode, Checkout
         * will create a new customer object based on information provided
         * during the session unless an existing customer was provided when
         * the session was created.
         */
        customer: string | Stripe.Customer | null;

        /**
         * If provided, this value will be used when the Customer object is created.
         * If not provided, customers will be asked to enter their email address.
         * Use this parameter to prefill customer data if you already have an email
         * on file. To access information about the customer once a session is
         * complete, use the `customer` field.
         */
        customer_email: string | null;

        /**
         * The line items, plans, or SKUs purchased by the customer.
         */
        display_items: Array<Session.DisplayItem> | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The IETF language tag of the locale Checkout is displayed in. If blank or `auto`, the browser's locale is used.
         */
        locale: Session.Locale | null;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Metadata | null;

        /**
         * The mode of the Checkout Session, one of `payment`, `setup`, or `subscription`.
         */
        mode: Session.Mode | null;

        /**
         * The ID of the PaymentIntent for Checkout Sessions in `payment` mode.
         */
        payment_intent: string | Stripe.PaymentIntent | null;

        /**
         * A list of the types of payment methods (e.g. card) this Checkout
         * Session is allowed to accept.
         */
        payment_method_types: Array<string>;

        /**
         * The ID of the SetupIntent for Checkout Sessions in `setup` mode.
         */
        setup_intent: string | Stripe.SetupIntent | null;

        /**
         * Describes the type of transaction being performed by Checkout in order to customize
         * relevant text on the page, such as the submit button. `submit_type` can only be
         * specified on Checkout Sessions in `payment` mode, but not Checkout Sessions
         * in `subscription` or `setup` mode.
         */
        submit_type: Session.SubmitType | null;

        /**
         * The ID of the subscription for Checkout Sessions in `subscription` mode.
         */
        subscription: string | Stripe.Subscription | null;

        /**
         * The URL the customer will be directed to after the payment or
         * subscription creation is successful.
         */
        success_url: string;
      }

      namespace Session {
        interface DisplayItem {
          /**
           * Amount for the display item.
           */
          amount?: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency?: string;

          custom?: DisplayItem.Custom;

          plan?: Stripe.Plan;

          /**
           * Quantity of the display item being purchased.
           */
          quantity?: number;

          sku?: Stripe.Sku;

          /**
           * The type of display item. One of `custom`, `plan` or `sku`
           */
          type?: string;
        }

        namespace DisplayItem {
          interface Custom {
            /**
             * The description of the line item.
             */
            description: string | null;

            /**
             * The images of the line item.
             */
            images: Array<string> | null;

            /**
             * The name of the line item.
             */
            name: string;
          }
        }

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
          | 'ms'
          | 'nb'
          | 'nl'
          | 'pl'
          | 'pt'
          | 'sv'
          | 'zh';

        type Mode = 'payment' | 'setup' | 'subscription';

        type SubmitType = 'auto' | 'book' | 'donate' | 'pay';
      }

      interface SessionCreateParams {
        /**
         * The URL the customer will be directed to if they decide to cancel payment and return to your website.
         */
        cancel_url: string;

        /**
         * A list of the types of payment methods (e.g. card) this Checkout
         * Session is allowed to accept. The only supported values today are `card` and `ideal`.
         */
        payment_method_types: Array<SessionCreateParams.PaymentMethodType>;

        /**
         * The URL to which Stripe should send customers when payment or setup
         * is complete.
         * If you'd like access to the Checkout Session for the successful
         * payment, read more about it in our guide on [fulfilling your payments
         * with webhooks](https://stripe.com/docs/payments/checkout/fulfillment#webhooks).
         */
        success_url: string;

        /**
         * Specify whether Checkout should collect the customer's billing address.
         */
        billing_address_collection?: SessionCreateParams.BillingAddressCollection;

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
        line_items?: Array<SessionCreateParams.LineItem>;

        /**
         * The IETF language tag of the locale Checkout is displayed in. If blank or `auto`, the browser's locale is used.
         */
        locale?: SessionCreateParams.Locale;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;

        /**
         * The mode of the Checkout Session, one of `payment`, `setup`, or `subscription`.
         */
        mode?: SessionCreateParams.Mode;

        /**
         * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
         */
        payment_intent_data?: SessionCreateParams.PaymentIntentData;

        /**
         * A subset of parameters to be passed to SetupIntent creation for Checkout Sessions in `setup` mode.
         */
        setup_intent_data?: SessionCreateParams.SetupIntentData;

        /**
         * Describes the type of transaction being performed by Checkout in order to customize
         * relevant text on the page, such as the submit button. `submit_type` can only be
         * specified on Checkout Sessions in `payment` mode, but not Checkout Sessions
         * in `subscription` or `setup` mode.
         */
        submit_type?: SessionCreateParams.SubmitType;

        /**
         * A subset of parameters to be passed to subscription creation for Checkout Sessions in `subscription` mode.
         */
        subscription_data?: SessionCreateParams.SubscriptionData;
      }

      namespace SessionCreateParams {
        type BillingAddressCollection = 'auto' | 'required';

        interface LineItem {
          /**
           * The amount to be collected per unit of the line item.
           */
          amount?: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency?: string;

          /**
           * The description for the line item.
           */
          description?: string;

          /**
           * A list of images representing this line item.
           */
          images?: Array<string>;

          /**
           * The name for the line item.
           */
          name?: string;

          /**
           * The quantity of the line item being purchased.
           */
          quantity: number;
        }

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
          | 'ms'
          | 'nb'
          | 'nl'
          | 'pl'
          | 'pt'
          | 'sv'
          | 'zh';

        type Mode = 'payment' | 'setup' | 'subscription';

        interface PaymentIntentData {
          /**
           * The amount of the application fee (if any) that will be applied to the payment and transferred to the
           * application owner's Stripe account. To use an application fee, the request must be made on
           * behalf of another account, using the `Stripe-Account` header or an OAuth key. For more
           * information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
           */
          application_fee_amount?: number;

          /**
           * Controls when the funds will be captured from the customer's account.
           */
          capture_method?: PaymentIntentData.CaptureMethod;

          /**
           * An arbitrary string attached to the object. Often useful for displaying to users.
           */
          description?: string;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
           */
          metadata?: MetadataParam;

          /**
           * The Stripe account ID for which these funds are intended. For details,
           * see the PaymentIntents [use case for connected
           * accounts](https://stripe.com/docs/payments/connected-accounts).
           */
          on_behalf_of?: string;

          /**
           * Email address that the receipt for the resulting payment will be sent to.
           */
          receipt_email?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If present, the payment method used with this PaymentIntent can be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer, even after the transaction completes.
           *
           * For more, learn to [save card details after a payment](https://stripe.com/docs/payments/save-after-payment).
           *
           * Stripe uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules. For example, if your customer is impacted by [SCA](https://stripe.com/docs/strong-customer-authentication), using `off_session` will ensure that they are authenticated while processing this PaymentIntent. You will then be able to collect [off-session payments](https://stripe.com/docs/payments/cards/charging-saved-cards#off-session-payments-with-saved-cards) for this customer.
           */
          setup_future_usage?: PaymentIntentData.SetupFutureUsage;

          /**
           * Shipping information for this payment.
           */
          shipping?: PaymentIntentData.Shipping;

          /**
           * Extra information about the payment. This will appear on your
           * customer's statement when this payment succeeds in creating a charge.
           */
          statement_descriptor?: string;

          /**
           * The parameters used to automatically create a Transfer when the payment succeeds.
           * For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
           */
          transfer_data?: PaymentIntentData.TransferData;
        }

        namespace PaymentIntentData {
          type CaptureMethod = 'automatic' | 'manual';

          type SetupFutureUsage = 'off_session' | 'on_session';

          interface Shipping {
            /**
             * Shipping address.
             */
            address: AddressParam;

            /**
             * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
             */
            carrier?: string;

            /**
             * Recipient name.
             */
            name: string;

            /**
             * Recipient phone (including extension).
             */
            phone?: string;

            /**
             * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
             */
            tracking_number?: string;
          }

          interface TransferData {
            /**
             * If specified, successful charges will be attributed to the destination
             * account for tax reporting, and the funds from charges will be transferred
             * to the destination account. The ID of the resulting transfer will be
             * returned on the successful charge's `transfer` field.
             */
            destination: string;
          }
        }

        type PaymentMethodType = 'card' | 'ideal';

        interface SetupIntentData {
          /**
           * An arbitrary string attached to the object. Often useful for displaying to users.
           */
          description?: string;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
           */
          metadata?: MetadataParam;

          /**
           * The Stripe account for which the setup is intended.
           */
          on_behalf_of?: string;
        }

        type SubmitType = 'auto' | 'book' | 'donate' | 'pay';

        interface SubscriptionData {
          /**
           * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. To use an application fee percent, the request must be made on behalf of another account, using the `Stripe-Account` header or an OAuth key. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
           */
          application_fee_percent?: number;

          /**
           * A list of items, each with an attached plan, that the customer is subscribing to. Use this parameter for subscriptions. To create one-time payments, use `line_items`.
           */
          items?: Array<SubscriptionData.Item>;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
           */
          metadata?: MetadataParam;

          /**
           * Unix timestamp representing the end of the trial period the customer
           * will get before being charged for the first time. Has to be at least
           * 48 hours in the future.
           */
          trial_end?: number;

          /**
           * Indicates if a plan's `trial_period_days` should be applied to the
           * subscription. Setting `trial_end` on `subscription_data` is preferred.
           * Defaults to `false`.
           */
          trial_from_plan?: boolean;

          /**
           * Integer representing the number of trial period days before the
           * customer is charged for the first time. Has to be at least 1.
           */
          trial_period_days?: number;
        }

        namespace SubscriptionData {
          interface Item {
            /**
             * Plan ID for this item.
             */
            plan: string;

            /**
             * Quantity for this item.
             */
            quantity?: number;
          }
        }
      }

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
          options?: RequestOptions
        ): Promise<Stripe.Checkout.Session>;

        /**
         * Retrieves a Session object.
         */
        retrieve(
          id: string,
          params?: SessionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Checkout.Session>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Checkout.Session>;
      }
    }
  }
}
