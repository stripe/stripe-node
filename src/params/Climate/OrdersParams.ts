// File generated from our OpenAPI spec

namespace Climate {
  export interface OrderCreateParams {
    /**
     * Unique identifier of the Climate product.
     */
    product: string;

    /**
     * Requested amount of carbon removal units. Either this or `metric_tons` must be specified.
     */
    amount?: number;

    /**
     * Publicly sharable reference for the end beneficiary of carbon removal. Assumed to be the Stripe account if not set.
     */
    beneficiary?: OrderCreateParams.Beneficiary;

    /**
     * Request currency for the order as a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a supported [settlement currency for your account](https://stripe.com/docs/currencies). If omitted, the account's default currency will be used.
     */
    currency?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.MetadataParam;

    /**
     * Requested number of tons for the order. Either this or `amount` must be specified.
     */
    metric_tons?: string;
  }

  namespace OrderCreateParams {
    export interface Beneficiary {
      /**
       * Publicly displayable name for the end beneficiary of carbon removal.
       */
      public_name: string;
    }
  }
}
namespace Climate {
  export interface OrderRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Climate {
  export interface OrderUpdateParams {
    /**
     * Publicly sharable reference for the end beneficiary of carbon removal. Assumed to be the Stripe account if not set.
     */
    beneficiary?: Stripe.Emptyable<OrderUpdateParams.Beneficiary>;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.MetadataParam;
  }

  namespace OrderUpdateParams {
    export interface Beneficiary {
      /**
       * Publicly displayable name for the end beneficiary of carbon removal.
       */
      public_name: Stripe.Emptyable<string>;
    }
  }
}
namespace Climate {
  export interface OrderListParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Climate {
  export interface OrderCancelParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
