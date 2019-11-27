declare namespace Stripe {
  /**
   * The Source object.
   */
  interface Source {
    ach_credit_transfer?: AchCreditTransfer;

    ach_debit?: AchDebit;

    acss_debit?: AcssDebit;

    alipay?: Alipay;

    /**
     * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources.
     */
    amount?: number | null;

    au_becs_debit?: AuBecsDebit;

    bancontact?: Bancontact;

    card?: Card;

    card_present?: CardPresent;

    /**
     * The client secret of the source. Used for client-side retrieval using a publishable key.
     */
    client_secret?: string;

    code_verification?: CodeVerificationFlow;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready. Required for `single_use` sources.
     */
    currency?: string | null;

    /**
     * The ID of the customer to which this source is attached. This will not be present when the source has not been attached to a customer.
     */
    customer?: string;

    eps?: Eps;

    /**
     * The authentication `flow` of the source. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`.
     */
    flow?: string;

    giropay?: Giropay;

    /**
     * Unique identifier for the object.
     */
    id?: string;

    ideal?: Ideal;

    klarna?: Klarna;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?:
      | {
        [key: string]: string;
      }
      | null;

    multibanco?: Multibanco;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'source';

    /**
     * Information about the owner of the payment instrument that may be used or required by particular source types.
     */
    owner?: Owner | null;

    p24?: P24;

    receiver?: ReceiverFlow;

    redirect?: RedirectFlow;

    sepa_credit_transfer?: SepaCreditTransfer;

    sepa_debit?: SepaDebit;

    sofort?: Sofort;

    source_order?: Order;

    /**
     * Extra information about a source. This will appear on your customer's statement every time you charge the source.
     */
    statement_descriptor?: string | null;

    /**
     * The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. Only `chargeable` sources can be used to create a charge.
     */
    status?: string;

    three_d_secure?: ThreeDSecure;

    /**
     * The `type` of the source. The `type` is a payment method, one of `ach_credit_transfer`, `ach_debit`, `alipay`, `bancontact`, `card`, `card_present`, `eps`, `giropay`, `ideal`, `multibanco`, `klarna`, `p24`, `sepa_debit`, `sofort`, `three_d_secure`, or `wechat`. An additional hash is included on the source with a name matching this value. It contains additional information specific to the [payment method](https://stripe.com/docs/sources) used.
     */
    type?: Source.Type;

    /**
     * Either `reusable` or `single_use`. Whether this source should be reusable or not. Some source types may or may not be reusable by construction, while others may leave the option at creation. If an incompatible value is passed, an error will be returned.
     */
    usage?: string | null;

    wechat?: Wechat;
  }

  namespace Source {
    type Type =
      | 'ach_credit_transfer'
      | 'ach_debit'
      | 'acss_debit'
      | 'alipay'
      | 'au_becs_debit'
      | 'bancontact'
      | 'card'
      | 'card_present'
      | 'eps'
      | 'giropay'
      | 'ideal'
      | 'klarna'
      | 'multibanco'
      | 'p24'
      | 'sepa_credit_transfer'
      | 'sepa_debit'
      | 'sofort'
      | 'three_d_secure'
      | 'wechat'
  }

  /**
   * Creates a new source object.
   */
  interface SourceCreateParams {
    /**
     * Amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources.
     */
    amount?: number;

    /**
     * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready.
     */
    currency?: string;

    /**
     * The `Customer` to whom the original source is attached to. Must be set when the original source is not a `Source` (e.g., `Card`).
     */
    customer?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The authentication `flow` of the source to create. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`. It is generally inferred unless a type supports multiple flows.
     */
    flow?: SourceCreateParams.Flow;

    /**
     * Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.
     */
    mandate?: mandate_params;

    /**
     * A set of key-value pairs that you can attach to a source object. It can be useful for storing additional information about the source in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * The source to share.
     */
    original_source?: string;

    /**
     * Information about the owner of the payment instrument that may be used or required by particular source types.
     */
    owner?: owner;

    /**
     * Optional parameters for the receiver flow. Can be set only if the source is a receiver (`flow` is `receiver`).
     */
    receiver?: receiver_params;

    /**
     * Parameters required for the redirect flow. Required if the source is authenticated by a redirect (`flow` is `redirect`).
     */
    redirect?: redirect_params;

    /**
     * Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.
     */
    source_order?: shallow_order_specs;

    /**
     * An arbitrary string to be displayed on your customer's statement. As an example, if your website is `RunClub` and the item you're charging for is a race ticket, you may want to specify a `statement_descriptor` of `RunClub 5K race ticket.` While many payment types will display this information, some may not display it at all.
     */
    statement_descriptor?: string;

    /**
     * An optional token used to create the source. When passed, token properties will override source parameters.
     */
    token?: string;

    /**
     * The `type` of the source to create. Required unless `customer` and `original_source` are specified (see the [Cloning card Sources](https://stripe.com/docs/sources/connect#cloning-card-sources) guide)
     */
    type?: string;

    usage?: SourceCreateParams.Usage;
  }

  namespace SourceCreateParams {
    type Flow = 'code_verification' | 'none' | 'receiver' | 'redirect'

    type Usage = 'reusable' | 'single_use'
  }

  /**
   * Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.
   */
  interface SourceRetrieveParams {
    /**
     * The client secret of the source. Required if a publishable key is used to retrieve the source.
     */
    client_secret?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   *
   * This request accepts the metadata and owner as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our [payment method guides](https://stripe.com/docs/sources) for more detail.
   */
  interface SourceUpdateParams {
    /**
     * Amount associated with the source.
     */
    amount?: number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.
     */
    mandate?: mandate_params;

    /**
     * A set of key-value pairs that you can attach to a source object. It can be useful for storing additional information about the source in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * Information about the owner of the payment instrument that may be used or required by particular source types.
     */
    owner?: owner;

    /**
     * Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.
     */
    source_order?: order_params;
  }

  /**
   * List source transactions for a given source.
   */
  interface SourceListSourceTransactionsParams {
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
  }

  /**
   * Verify a given source.
   */
  interface SourceVerifyParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The values needed to verify the source.
     */
    values: Array<string>;
  }

  class SourcesResource {
    /**
     * Creates a new source object.
     */
    create(
      params?: SourceCreateParams,
      options?: HeaderOptions
    ): Promise<Source>;

    /**
     * Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.
     */
    retrieve(
      id: string,
      params?: SourceRetrieveParams,
      options?: HeaderOptions
    ): Promise<Source>;

    /**
     * Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     *
     * This request accepts the metadata and owner as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our [payment method guides](https://stripe.com/docs/sources) for more detail.
     */
    update(
      id: string,
      params?: SourceUpdateParams,
      options?: HeaderOptions
    ): Promise<Source>;

    /**
     * List source transactions for a given source.
     */
    listSourceTransactions(
      id: string,
      params?: SourceListSourceTransactionsParams,
      options?: HeaderOptions
    ): Promise<ApmsSourcesSourceTransactionList>;

    /**
     * Verify a given source.
     */
    verify(
      id: string,
      params: SourceVerifyParams,
      options?: HeaderOptions
    ): Promise<Source>;
  }
}