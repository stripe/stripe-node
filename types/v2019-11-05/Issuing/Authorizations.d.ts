declare namespace Stripe {
  namespace Issuing {
    /**
     * The Authorization object.
     */
    interface Authorization {
      /**
       * Whether the authorization has been approved.
       */
      approved?: boolean;

      /**
       * How the card details were provided. One of `chip`, `contactless`, `keyed_in`, `online`, or `swipe`.
       */
      authorization_method?: string;

      /**
       * The amount that has been authorized. This will be `0` when the object is created, and increase after it has been approved.
       */
      authorized_amount?: number;

      /**
       * The currency that was presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      authorized_currency?: string;

      balance_transactions?: Array<BalanceTransaction>;

      card?: Issuing.Card;

      /**
       * The cardholder to whom this authorization belongs.
       */
      cardholder?: string | Issuing.Cardholder | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created?: number;

      /**
       * The amount the authorization is expected to be in `held_currency`. When Stripe holds funds from you, this is the amount reserved for the authorization. This will be `0` when the object is created, and increase after it has been approved. For multi-currency transactions, `held_amount` can be used to determine the expected exchange rate.
       */
      held_amount?: number;

      /**
       * The currency of the [held amount](https://stripe.com/docs/api#issuing_authorization_object-held_amount). This will always be the card currency.
       */
      held_currency?: string;

      /**
       * Unique identifier for the object.
       */
      id?: string;

      is_held_amount_controllable?: boolean;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode?: boolean;

      merchant_data?: Issuing.MerchantData;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: {
        [key: string]: string;
      };

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object?: 'issuing.authorization';

      /**
       * The amount the user is requesting to be authorized. This field will only be non-zero during an `issuing.authorization.request` webhook.
       */
      pending_authorized_amount?: number;

      /**
       * The additional amount Stripe will hold if the authorization is approved. This field will only be non-zero during an `issuing.authorization.request` webhook.
       */
      pending_held_amount?: number;

      request_history?: Array<RequestHistory>;

      /**
       * One of `closed`, `pending`, or `reversed`.
       */
      status?: string;

      transactions?: Array<Issuing.Transaction>;

      verification_data?: VerificationData;

      /**
       * What, if any, digital wallet was used for this authorization. One of `apple_pay`, `google_pay`, or `samsung_pay`.
       */
      wallet_provider?: string | null;
    }

    /**
     * Returns a list of Issuing Authorization objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    interface AuthorizationListParams {
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
      created?: range_query_specs | number;

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
       * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
       */
      starting_after?: string;

      /**
       * Only return authorizations with the given status. One of `pending`, `closed`, or `reversed`.
       */
      status?: AuthorizationListParams.Status;
    }

    namespace AuthorizationListParams {
      type Status = 'closed' | 'pending' | 'reversed'
    }

    /**
     * Retrieves an Issuing Authorization object.
     */
    interface AuthorizationRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    /**
     * Updates the specified Issuing Authorization object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     */
    interface AuthorizationUpdateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?:
        | {
          [key: string]: string;
        }
        | '';
    }

    /**
     * Approves a pending Issuing Authorization object.
     */
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
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?:
        | {
          [key: string]: string;
        }
        | '';
    }

    /**
     * Declines a pending Issuing Authorization object.
     */
    interface AuthorizationDeclineParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?:
        | {
          [key: string]: string;
        }
        | '';
    }

    class AuthorizationsResource {
      /**
       * Returns a list of Issuing Authorization objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
       */
      list(
        params?: AuthorizationListParams,
        options?: HeaderOptions
      ): Promise<ApiList<Issuing.Authorization>>;

      /**
       * Retrieves an Issuing Authorization object.
       */
      retrieve(
        id: string,
        params?: AuthorizationRetrieveParams,
        options?: HeaderOptions
      ): Promise<Issuing.Authorization>;

      /**
       * Updates the specified Issuing Authorization object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       */
      update(
        id: string,
        params?: AuthorizationUpdateParams,
        options?: HeaderOptions
      ): Promise<Issuing.Authorization>;

      /**
       * Approves a pending Issuing Authorization object.
       */
      approve(
        id: string,
        params?: AuthorizationApproveParams,
        options?: HeaderOptions
      ): Promise<Issuing.Authorization>;

      /**
       * Declines a pending Issuing Authorization object.
       */
      decline(
        id: string,
        params?: AuthorizationDeclineParams,
        options?: HeaderOptions
      ): Promise<Issuing.Authorization>;
    }
  }
}