declare namespace Stripe {
  namespace Issuing {
    /**
     * The Cardholder object.
     */
    interface Cardholder {
      authorization_controls?: AuthorizationControls | null;

      billing?: Billing;

      /**
       * Additional information about a `business_entity` cardholder.
       */
      company?: Company | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created?: number;

      /**
       * The cardholder's email address.
       */
      email?: string | null;

      /**
       * Unique identifier for the object.
       */
      id?: string;

      /**
       * Additional information about an `individual` cardholder.
       */
      individual?: Individual | null;

      /**
       * Whether or not this cardholder is the default cardholder.
       */
      is_default?: boolean;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode?: boolean;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: {
        [key: string]: string;
      };

      /**
       * The cardholder's name. This will be printed on cards issued to them.
       */
      name?: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object?: 'issuing.cardholder';

      /**
       * The cardholder's phone number.
       */
      phone_number?: string | null;

      requirements?: Requirements;

      /**
       * Specifies whether to permit authorizations on this cardholder's cards.
       */
      status?: Cardholder.Status;

      /**
       * One of `individual` or `business_entity`.
       */
      type?: Cardholder.Type;
    }

    namespace Cardholder {
      type Status = 'active' | 'blocked' | 'inactive'

      type Type = 'business_entity' | 'individual'
    }

    /**
     * Creates a new Issuing Cardholder object that can be issued cards.
     */
    interface CardholderCreateParams {
      /**
       * Spending rules that give you control over how your cardholders can make charges. Refer to our [authorizations](https://stripe.com/docs/issuing/authorizations) documentation for more details.
       */
      authorization_controls?: authorization_controls_param_v2;

      /**
       * The cardholder's billing address.
       */
      billing: billing_specs;

      /**
       * Additional information about a `business_entity` cardholder.
       */
      company?: company_param;

      /**
       * The cardholder's email address.
       */
      email?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Additional information about an `individual` cardholder.
       */
      individual?: individual_param;

      /**
       * Specifies whether to set this as the default cardholder.
       */
      is_default?: boolean;

      metadata?: {
        [key: string]: string;
      };

      /**
       * The cardholder's name. This will be printed on cards issued to them.
       */
      name: string;

      /**
       * The cardholder's phone number. This will be transformed to [E.164](https://en.wikipedia.org/wiki/E.164) if it is not provided in that format already.
       */
      phone_number?: string;

      /**
       * Specifies whether to permit authorizations on this cardholder's cards. Defaults to `inactive`.
       */
      status?: CardholderCreateParams.Status;

      /**
       * One of `individual` or `business_entity`.
       */
      type: CardholderCreateParams.Type;
    }

    namespace CardholderCreateParams {
      type Status = 'active' | 'inactive'

      type Type = 'business_entity' | 'individual'
    }

    /**
     * Returns a list of Issuing Cardholder objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    interface CardholderListParams {
      /**
       * Only return cardholders that were created during the given date interval.
       */
      created?: range_query_specs | number;

      /**
       * Only return cardholders that have the given email address.
       */
      email?: string;

      /**
       * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
       */
      ending_before?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return the default cardholder.
       */
      is_default?: boolean;

      /**
       * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
       */
      limit?: number;

      /**
       * Only return cardholders that have the given phone number.
       */
      phone_number?: string;

      /**
       * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
       */
      starting_after?: string;

      /**
       * Only return cardholders that have the given status. One of `active`, `inactive`, or `blocked`.
       */
      status?: CardholderListParams.Status;

      /**
       * Only return cardholders that have the given type. One of `individual` or `business_entity`.
       */
      type?: CardholderListParams.Type;
    }

    namespace CardholderListParams {
      type Status = 'active' | 'blocked' | 'inactive'

      type Type = 'business_entity' | 'individual'
    }

    /**
     * Retrieves an Issuing Cardholder object.
     */
    interface CardholderRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    /**
     * Updates the specified Issuing Cardholder object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     */
    interface CardholderUpdateParams {
      /**
       * Spending rules that give you some control over how your cards can be used. Refer to our [authorizations](https://stripe.com/docs/issuing/authorizations) documentation for more details.
       */
      authorization_controls?: authorization_controls_param_v2;

      /**
       * The cardholder's billing address.
       */
      billing?: billing_specs;

      /**
       * Additional information about a `business_entity` cardholder.
       */
      company?: company_param;

      /**
       * The cardholder's email address.
       */
      email?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Additional information about an `individual` cardholder.
       */
      individual?: individual_param;

      /**
       * Specifies whether to set this as the default cardholder.
       */
      is_default?: boolean;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: {
        [key: string]: string;
      };

      /**
       * The cardholder's phone number.
       */
      phone_number?: string;

      /**
       * Specifies whether to permit authorizations on this cardholder's cards.
       */
      status?: CardholderUpdateParams.Status;
    }

    namespace CardholderUpdateParams {
      type Status = 'active' | 'inactive'
    }

    class CardholdersResource {
      /**
       * Creates a new Issuing Cardholder object that can be issued cards.
       */
      create(
        params: CardholderCreateParams,
        options?: HeaderOptions
      ): Promise<Issuing.Cardholder>;

      /**
       * Returns a list of Issuing Cardholder objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
       */
      list(
        params?: CardholderListParams,
        options?: HeaderOptions
      ): Promise<ApiList<Issuing.Cardholder>>;

      /**
       * Retrieves an Issuing Cardholder object.
       */
      retrieve(
        id: string,
        params?: CardholderRetrieveParams,
        options?: HeaderOptions
      ): Promise<Issuing.Cardholder>;

      /**
       * Updates the specified Issuing Cardholder object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       */
      update(
        id: string,
        params?: CardholderUpdateParams,
        options?: HeaderOptions
      ): Promise<Issuing.Cardholder>;
    }
  }
}