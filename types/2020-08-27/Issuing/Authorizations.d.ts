// File generated from our OpenAPI spec

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
         * The total amount that was authorized or rejected. This amount is in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
         */
        amount: number;

        /**
         * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
         */
        amount_details: Authorization.AmountDetails | null;

        /**
         * Whether the authorization has been approved.
         */
        approved: boolean;

        /**
         * How the card details were provided.
         */
        authorization_method: Authorization.AuthorizationMethod;

        /**
         * List of balance transactions associated with this authorization.
         */
        balance_transactions: Array<Stripe.BalanceTransaction>;

        /**
         * You can [create physical or virtual cards](https://stripe.com/docs/issuing/cards) that are issued to cardholders.
         */
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
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The total amount that was authorized or rejected. This amount is in the `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
         */
        merchant_amount: number;

        /**
         * The currency that was presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        merchant_currency: string;

        merchant_data: Authorization.MerchantData;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * The pending authorization request. This field will only be non-null during an `issuing_authorization.request` webhook.
         */
        pending_request: Authorization.PendingRequest | null;

        /**
         * History of every time `pending_request` was approved/denied, either by you directly or by Stripe (e.g. based on your `spending_controls`). If the merchant changes the authorization by performing an [incremental authorization](https://stripe.com/docs/issuing/purchases/authorizations), you can look at this field to see the previous requests for the authorization.
         */
        request_history: Array<Authorization.RequestHistory>;

        /**
         * The current status of the authorization in its lifecycle.
         */
        status: Authorization.Status;

        /**
         * List of [transactions](https://stripe.com/docs/api/issuing/transactions) associated with this authorization.
         */
        transactions: Array<Stripe.Issuing.Transaction>;

        verification_data: Authorization.VerificationData;

        /**
         * The digital wallet used for this authorization. One of `apple_pay`, `google_pay`, or `samsung_pay`.
         */
        wallet: string | null;
      }

      namespace Authorization {
        interface AmountDetails {
          /**
           * The fee charged by the ATM for the cash withdrawal.
           */
          atm_fee: number | null;
        }

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
        }

        interface PendingRequest {
          /**
           * The additional amount Stripe will hold if the authorization is approved, in the card's [currency](https://stripe.com/docs/api#issuing_authorization_object-pending-request-currency) and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          amount: number;

          /**
           * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          amount_details: PendingRequest.AmountDetails | null;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * If set `true`, you may provide [amount](https://stripe.com/docs/api/issuing/authorizations/approve#approve_issuing_authorization-amount) to control how much to hold for the authorization.
           */
          is_amount_controllable: boolean;

          /**
           * The amount the merchant is requesting to be authorized in the `merchant_currency`. The amount is in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          merchant_amount: number;

          /**
           * The local currency the merchant is requesting to authorize.
           */
          merchant_currency: string;
        }

        namespace PendingRequest {
          interface AmountDetails {
            /**
             * The fee charged by the ATM for the cash withdrawal.
             */
            atm_fee: number | null;
          }
        }

        interface RequestHistory {
          /**
           * The `pending_request.amount` at the time of the request, presented in your card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Stripe held this amount from your account to fund the authorization if the request was approved.
           */
          amount: number;

          /**
           * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          amount_details: RequestHistory.AmountDetails | null;

          /**
           * Whether this request was approved.
           */
          approved: boolean;

          /**
           * Time at which the object was created. Measured in seconds since the Unix epoch.
           */
          created: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * The `pending_request.merchant_amount` at the time of the request, presented in the `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          merchant_amount: number;

          /**
           * The currency that was collected by the merchant and presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          merchant_currency: string;

          /**
           * The reason for the approval or decline.
           */
          reason: RequestHistory.Reason;
        }

        namespace RequestHistory {
          interface AmountDetails {
            /**
             * The fee charged by the ATM for the cash withdrawal.
             */
            atm_fee: number | null;
          }

          type Reason =
            | 'account_disabled'
            | 'card_active'
            | 'card_inactive'
            | 'cardholder_inactive'
            | 'cardholder_verification_required'
            | 'insufficient_funds'
            | 'not_allowed'
            | 'spending_controls'
            | 'suspected_fraud'
            | 'verification_failed'
            | 'webhook_approved'
            | 'webhook_declined'
            | 'webhook_timeout';
        }

        type Status = 'closed' | 'pending' | 'reversed';

        interface VerificationData {
          /**
           * Whether the cardholder provided an address first line and if it matched the cardholder's `billing.address.line1`.
           */
          address_line1_check: VerificationData.AddressLine1Check;

          /**
           * Whether the cardholder provided a postal code and if it matched the cardholder's `billing.address.postal_code`.
           */
          address_postal_code_check: VerificationData.AddressPostalCodeCheck;

          /**
           * Whether the cardholder provided a CVC and if it matched Stripe's record.
           */
          cvc_check: VerificationData.CvcCheck;

          /**
           * Whether the cardholder provided an expiry date and if it matched Stripe's record.
           */
          expiry_check: VerificationData.ExpiryCheck;
        }

        namespace VerificationData {
          type AddressLine1Check = 'match' | 'mismatch' | 'not_provided';

          type AddressPostalCodeCheck = 'match' | 'mismatch' | 'not_provided';

          type CvcCheck = 'match' | 'mismatch' | 'not_provided';

          type ExpiryCheck = 'match' | 'mismatch' | 'not_provided';
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
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
      }

      interface AuthorizationListParams extends PaginationParams {
        /**
         * Only return authorizations that belong to the given card.
         */
        card?: string;

        /**
         * Only return authorizations that belong to the given cardholder.
         */
        cardholder?: string;

        /**
         * Only return authorizations that were created during the given date interval.
         */
        created?: Stripe.RangeQueryParam | number;

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
         * If the authorization's `pending_request.is_amount_controllable` property is `true`, you may provide this value to control how much to hold for the authorization. Must be positive (use [`decline`](https://stripe.com/docs/api/issuing/authorizations/decline) to decline an authorization request).
         */
        amount?: number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
      }

      interface AuthorizationDeclineParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
      }

      class AuthorizationsResource {
        /**
         * Retrieves an Issuing Authorization object.
         */
        retrieve(
          id: string,
          params?: AuthorizationRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Authorization>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Authorization>>;

        /**
         * Updates the specified Issuing Authorization object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
         */
        update(
          id: string,
          params?: AuthorizationUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Authorization>>;

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
         * Approves a pending Issuing Authorization object. This request should be made within the timeout window of the [real-time authorization](https://stripe.com/docs/issuing/controls/real-time-authorizations) flow.
         */
        approve(
          id: string,
          params?: AuthorizationApproveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Authorization>>;
        approve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Authorization>>;

        /**
         * Declines a pending Issuing Authorization object. This request should be made within the timeout window of the [real time authorization](https://stripe.com/docs/issuing/controls/real-time-authorizations) flow.
         */
        decline(
          id: string,
          params?: AuthorizationDeclineParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Authorization>>;
        decline(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Authorization>>;
      }
    }
  }
}
