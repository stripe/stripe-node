declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      /**
       * The Authorization object.
       */
      interface Authorization {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'issuing.authorization';

        /**
         * Whether the authorization has been approved.
         */
        approved: boolean;

        /**
         * How the card details were provided.
         */
        authorization_method: Authorization.AuthorizationMethod;

        /**
         * The amount that has been authorized. This will be `0` when the object is created, and increase after it has been approved.
         */
        authorized_amount: number;

        /**
         * The currency that was presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        authorized_currency: string;

        balance_transactions: Array<Stripe.BalanceTransaction>;

        card: Stripe.Issuing.Card;

        /**
         * The cardholder to whom this authorization belongs.
         */
        cardholder: string | Stripe.Issuing.Cardholder | null;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * The amount the authorization is expected to be in `held_currency`. When Stripe holds funds from you, this is the amount reserved for the authorization. This will be `0` when the object is created, and increase after it has been approved. For multi-currency transactions, `held_amount` can be used to determine the expected exchange rate.
         */
        held_amount: number;

        /**
         * The currency of the [held amount](https://stripe.com/docs/api#issuing_authorization_object-held_amount). This will always be the card currency.
         */
        held_currency: string;

        is_held_amount_controllable: boolean;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        merchant_data: Authorization.MerchantData;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Metadata;

        /**
         * The amount the user is requesting to be authorized. This field will only be non-zero during an `issuing.authorization.request` webhook.
         */
        pending_authorized_amount: number;

        /**
         * The additional amount Stripe will hold if the authorization is approved. This field will only be non-zero during an `issuing.authorization.request` webhook.
         */
        pending_held_amount: number;

        request_history: Array<Authorization.RequestHistory>;

        /**
         * The current status of the authorization in its lifecycle.
         */
        status: Authorization.Status;

        transactions: Array<Stripe.Issuing.Transaction>;

        verification_data: Authorization.VerificationData;

        /**
         * What, if any, digital wallet was used for this authorization. One of `apple_pay`, `google_pay`, or `samsung_pay`.
         */
        wallet_provider: string | null;
      }

      namespace Authorization {
        type AuthorizationMethod =
          | 'chip'
          | 'contactless'
          | 'keyed_in'
          | 'online'
          | 'swipe';

        interface MerchantData {
          /**
           * A categorization of the seller's type of business. See our [merchant categories guide](https://stripe.com/docs/issuing/merchant-categories) for a list of possible values.
           */
          category: string;

          /**
           * City where the seller is located
           */
          city: string | null;

          /**
           * Country where the seller is located
           */
          country: string | null;

          /**
           * Name of the seller
           */
          name: string | null;

          /**
           * Identifier assigned to the seller by the card brand
           */
          network_id: string;

          /**
           * Postal code where the seller is located
           */
          postal_code: string | null;

          /**
           * State where the seller is located
           */
          state: string | null;

          /**
           * The url an online purchase was made from
           */
          url: string | null;
        }

        interface RequestHistory {
          /**
           * Whether this request was approved.
           */
          approved: boolean;

          /**
           * The amount that was authorized at the time of this request
           */
          authorized_amount: number;

          /**
           * The currency that was presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          authorized_currency: string;

          /**
           * Time at which the object was created. Measured in seconds since the Unix epoch.
           */
          created: number;

          /**
           * The amount Stripe held from your account to fund the authorization, if the request was approved
           */
          held_amount: number;

          /**
           * The currency of the [held amount](https://stripe.com/docs/api#issuing_authorization_object-held_amount)
           */
          held_currency: string;

          /**
           * The reason for the approval or decline.
           */
          reason: RequestHistory.Reason;

          /**
           * When an authorization is declined due to `authorization_controls`, this array contains details about the authorization controls that were violated. Otherwise, it is empty.
           */
          violated_authorization_controls: Array<
            RequestHistory.ViolatedAuthorizationControl
          >;
        }

        namespace RequestHistory {
          type Reason =
            | 'account_compliance_disabled'
            | 'account_inactive'
            | 'authentication_failed'
            | 'authorization_controls'
            | 'card_active'
            | 'card_inactive'
            | 'cardholder_inactive'
            | 'cardholder_verification_required'
            | 'insufficient_funds'
            | 'not_allowed'
            | 'suspected_fraud'
            | 'webhook_approved'
            | 'webhook_declined'
            | 'webhook_timeout';

          interface ViolatedAuthorizationControl {
            /**
             * Entity which the authorization control acts on. One of `account`, `card`, or `cardholder`.
             */
            entity: ViolatedAuthorizationControl.Entity;

            /**
             * Name of the authorization control. One of `allowed_categories`, `blocked_categories`, `max_amount`, `max_approvals`, or `spending_limits`.
             */
            name: ViolatedAuthorizationControl.Name;
          }

          namespace ViolatedAuthorizationControl {
            type Entity = 'account' | 'card' | 'cardholder';

            type Name =
              | 'allowed_categories'
              | 'blocked_categories'
              | 'max_amount'
              | 'max_approvals'
              | 'spending_limits';
          }
        }

        type Status = 'closed' | 'pending' | 'reversed';

        interface VerificationData {
          /**
           * Whether the cardholder provided an address first line and if it matched the cardholder's `billing.address.line1`. One of `match`, `mismatch`, or `not_provided`.
           */
          address_line1_check: string;

          /**
           * Whether the cardholder provided a zip (or postal code) and if it matched the cardholder's `billing.address.postal_code`. One of `match`, `mismatch`, or `not_provided`.
           */
          address_zip_check: string;

          /**
           * One of `exempt`, `failure`, `none`, or `success`.
           */
          authentication: string;

          /**
           * Whether the cardholder provided a CVC and if it matched Stripe's record. One of `match`, `mismatch`, or `not_provided`.
           */
          cvc_check: string;
        }
      }

      interface AuthorizationRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface AuthorizationUpdateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam | '';
      }

      interface AuthorizationListParams extends PaginationParams {
        /**
         * Only return issuing transactions that belong to the given card.
         */
        card?: string;

        /**
         * Only return authorizations belonging to the given cardholder.
         */
        cardholder?: string;

        /**
         * Only return authorizations that were created during the given date interval.
         */
        created?: RangeQueryParam | number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return authorizations with the given status. One of `pending`, `closed`, or `reversed`.
         */
        status?: AuthorizationListParams.Status;
      }

      namespace AuthorizationListParams {
        type Status = 'closed' | 'pending' | 'reversed';
      }

      interface AuthorizationApproveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * If the authorization's `is_held_amount_controllable` property is `true`, you may provide this value to control how much to hold for the authorization. Must be positive (use [`decline`](https://stripe.com/docs/api/issuing/authorizations/decline) to decline an authorization request).
         */
        held_amount?: number;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam | '';
      }

      interface AuthorizationDeclineParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam | '';
      }

      class AuthorizationsResource {
        /**
         * Retrieves an Issuing Authorization object.
         */
        retrieve(
          id: string,
          params?: AuthorizationRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Issuing.Authorization>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Issuing.Authorization>;

        /**
         * Updates the specified Issuing Authorization object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
         */
        update(
          id: string,
          params?: AuthorizationUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Issuing.Authorization>;

        /**
         * Returns a list of Issuing Authorization objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
         */
        list(
          params?: AuthorizationListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.Authorization>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.Authorization>;

        /**
         * Approves a pending Issuing Authorization object.
         */
        approve(
          id: string,
          params?: AuthorizationApproveParams,
          options?: RequestOptions
        ): Promise<Stripe.Issuing.Authorization>;
        approve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Issuing.Authorization>;

        /**
         * Declines a pending Issuing Authorization object.
         */
        decline(
          id: string,
          params?: AuthorizationDeclineParams,
          options?: RequestOptions
        ): Promise<Stripe.Issuing.Authorization>;
        decline(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Issuing.Authorization>;
      }
    }
  }
}
