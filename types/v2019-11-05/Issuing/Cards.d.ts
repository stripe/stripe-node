declare namespace Stripe {
  namespace Issuing {
    /**
     * The Card object.
     */
    interface Card {
      authorization_controls?: AuthorizationControls;

      /**
       * The brand of the card.
       */
      brand?: string;

      /**
       * The [Cardholder](https://stripe.com/docs/api#issuing_cardholder_object) object to which the card belongs.
       */
      cardholder?: Issuing.Cardholder | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created?: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: string;

      /**
       * The expiration month of the card.
       */
      exp_month?: number;

      /**
       * The expiration year of the card.
       */
      exp_year?: number;

      /**
       * Unique identifier for the object.
       */
      id?: string;

      /**
       * The last 4 digits of the card number.
       */
      last4?: string;

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
       * The name of the cardholder, printed on the card.
       */
      name?: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object?: 'issuing.card';

      /**
       * Metadata about the PIN on the card.
       */
      pin?: Pin | null;

      /**
       * The card this card replaces, if any.
       */
      replacement_for?: string | Issuing.Card | null;

      /**
       * Why the card that this card replaces (if any) needed to be replaced. One of `damage`, `expiration`, `loss`, or `theft`.
       */
      replacement_reason?: Card.ReplacementReason | null;

      /**
       * Where and how the card will be shipped.
       */
      shipping?: Shipping | null;

      /**
       * One of `active`, `inactive`, `canceled`, `lost`, or `stolen`.
       */
      status?: Card.Status;

      /**
       * One of `virtual` or `physical`.
       */
      type?: string;
    }

    namespace Card {
      type ReplacementReason = 'damage' | 'expiration' | 'loss' | 'theft'

      type Status =
        | 'active'
        | 'canceled'
        | 'inactive'
        | 'lost'
        | 'pending'
        | 'stolen'
    }

    /**
     * Creates an Issuing Card object.
     */
    interface CardCreateParams {
      /**
       * Spending rules that give you some control over how your cards can be used. Refer to our [authorizations](https://stripe.com/docs/issuing/authorizations) documentation for more details.
       */
      authorization_controls?: authorization_controls_param;

      /**
       * The [Cardholder](https://stripe.com/docs/api#issuing_cardholder_object) object with which the card will be associated.
       */
      cardholder?: string;

      /**
       * The currency for the card. This currently must be `usd`.
       */
      currency: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      metadata?: {
        [key: string]: string;
      };

      /**
       * The card this is meant to be a replacement for (if any).
       */
      replacement_for?: string;

      /**
       * If `replacement_for` is specified, this should indicate why that card is being replaced. One of `damage`, `expiration`, `loss`, or `theft`.
       */
      replacement_reason?: CardCreateParams.ReplacementReason;

      /**
       * The address where the card will be shipped.
       */
      shipping?: shipping_specs;

      /**
       * Specifies whether to permit authorizations on this card. Possible values are `active` or `inactive`.
       */
      status?: CardCreateParams.Status;

      /**
       * The type of card to issue. Possible values are `physical` or `virtual`.
       */
      type: CardCreateParams.Type;
    }

    namespace CardCreateParams {
      type ReplacementReason = 'damage' | 'expiration' | 'loss' | 'theft'

      type Status = 'active' | 'inactive'

      type Type = 'physical' | 'virtual'
    }

    /**
     * Returns a list of Issuing Card objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    interface CardListParams {
      /**
       * Only return cards belonging to the Cardholder with the provided ID.
       */
      cardholder?: string;

      /**
       * Only return cards that were issued during the given date interval.
       */
      created?: range_query_specs | number;

      /**
       * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
       */
      ending_before?: string;

      /**
       * Only return cards that have the given expiration month.
       */
      exp_month?: number;

      /**
       * Only return cards that have the given expiration year.
       */
      exp_year?: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return cards that have the given last four digits.
       */
      last4?: string;

      /**
       * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
       */
      limit?: number;

      /**
       * Only return cards that have the given name.
       */
      name?: string;

      /**
       * Only return cards whose full card number matches that of this card source ID.
       */
      source?: string;

      /**
       * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
       */
      starting_after?: string;

      /**
       * Only return cards that have the given status. One of `active`, `inactive`, `canceled`, `lost`, or `stolen`.
       */
      status?: CardListParams.Status;

      /**
       * Only return cards that have the given type. One of `virtual` or `physical`.
       */
      type?: CardListParams.Type;
    }

    namespace CardListParams {
      type Status = 'active' | 'canceled' | 'inactive' | 'lost' | 'stolen'

      type Type = 'physical' | 'virtual'
    }

    /**
     * Retrieves an Issuing Card object.
     */
    interface CardRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    /**
     * Updates the specified Issuing Card object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     */
    interface CardUpdateParams {
      /**
       * Spending rules that give you some control over how your cards can be used. Refer to our [authorizations](https://stripe.com/docs/issuing/authorizations) documentation for more details.
       */
      authorization_controls?: authorization_controls_param;

      /**
       * The [Cardholder](https://stripe.com/docs/api#issuing_cardholder_object) to associate the card with. (This field is deprecated and will be removed from future versions of the API.)
       */
      cardholder?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      metadata?:
        | {
          [key: string]: string;
        }
        | '';

      /**
       * Specifies whether to permit authorizations on this card. Possible values are `active`, `inactive`, or the terminal states: `canceled`, `lost`, `stolen`.
       */
      status?: CardUpdateParams.Status;
    }

    namespace CardUpdateParams {
      type Status = 'active' | 'canceled' | 'inactive' | 'lost' | 'stolen'
    }

    /**
     * For virtual cards only. Retrieves an Issuing card_details object that contains [the sensitive details](https://stripe.com/docs/issuing/cards/management#virtual-card-info) of a virtual card.
     */
    interface CardRetrieveDetailsParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class CardsResource {
      /**
       * Creates an Issuing Card object.
       */
      create(
        params: CardCreateParams,
        options?: HeaderOptions
      ): Promise<Issuing.Card>;

      /**
       * Returns a list of Issuing Card objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
       */
      list(
        params?: CardListParams,
        options?: HeaderOptions
      ): Promise<ApiList<Issuing.Card>>;

      /**
       * Retrieves an Issuing Card object.
       */
      retrieve(
        id: string,
        params?: CardRetrieveParams,
        options?: HeaderOptions
      ): Promise<Issuing.Card>;

      /**
       * Updates the specified Issuing Card object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       */
      update(
        id: string,
        params?: CardUpdateParams,
        options?: HeaderOptions
      ): Promise<Issuing.Card>;

      /**
       * For virtual cards only. Retrieves an Issuing card_details object that contains [the sensitive details](https://stripe.com/docs/issuing/cards/management#virtual-card-info) of a virtual card.
       */
      retrieveDetails(
        id: string,
        params?: CardRetrieveDetailsParams,
        options?: HeaderOptions
      ): Promise<Issuing.CardDetails>;
    }
  }
}