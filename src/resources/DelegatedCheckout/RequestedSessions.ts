// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Profile} from './../Profiles.js';
import * as SharedPayment from './../SharedPayment/index.js';
import {MetadataParam, Address, Emptyable, Metadata} from '../../shared.js';
import {RequestOptions, Response} from '../../lib.js';

export class RequestedSessionResource extends StripeResource {
  /**
   * Retrieves a requested session
   */
  retrieve(
    id: string,
    params?: DelegatedCheckout.RequestedSessionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<RequestedSession>> {
    return this._makeRequest(
      'GET',
      `/v1/delegated_checkout/requested_sessions/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates a requested session
   */
  update(
    id: string,
    params?: DelegatedCheckout.RequestedSessionUpdateParams,
    options?: RequestOptions
  ): Promise<Response<RequestedSession>> {
    return this._makeRequest(
      'POST',
      `/v1/delegated_checkout/requested_sessions/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Creates a requested session
   */
  create(
    params: DelegatedCheckout.RequestedSessionCreateParams,
    options?: RequestOptions
  ): Promise<Response<RequestedSession>> {
    return this._makeRequest(
      'POST',
      '/v1/delegated_checkout/requested_sessions',
      params,
      options
    ) as any;
  }
  /**
   * Confirms a requested session
   */
  confirm(
    id: string,
    params?: DelegatedCheckout.RequestedSessionConfirmParams,
    options?: RequestOptions
  ): Promise<Response<RequestedSession>> {
    return this._makeRequest(
      'POST',
      `/v1/delegated_checkout/requested_sessions/${id}/confirm`,
      params,
      options
    ) as any;
  }
  /**
   * Expires a requested session
   */
  expire(
    id: string,
    params?: DelegatedCheckout.RequestedSessionExpireParams,
    options?: RequestOptions
  ): Promise<Response<RequestedSession>> {
    return this._makeRequest(
      'POST',
      `/v1/delegated_checkout/requested_sessions/${id}/expire`,
      params,
      options
    ) as any;
  }
}
export interface RequestedSession {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'delegated_checkout.requested_session';

  /**
   * Affiliate attribution data associated with this requested session.
   */
  affiliate_attributions?: Array<
    DelegatedCheckout.RequestedSession.AffiliateAttribution
  > | null;

  /**
   * The subtotal amount of the requested session.
   */
  amount_subtotal: number | null;

  /**
   * The total amount of the requested session.
   */
  amount_total: number | null;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created_at: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * The customer for this requested session.
   */
  customer: string | null;

  /**
   * Time at which the requested session expires. Measured in seconds since the Unix epoch.
   */
  expires_at: number;

  /**
   * The details of the fulfillment.
   */
  fulfillment_details: DelegatedCheckout.RequestedSession.FulfillmentDetails | null;

  /**
   * The line items to be purchased.
   */
  line_item_details: Array<DelegatedCheckout.RequestedSession.LineItemDetail>;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * The details of the order.
   */
  order_details: DelegatedCheckout.RequestedSession.OrderDetails | null;

  /**
   * The payment method used for the requested session.
   */
  payment_method: string | null;

  /**
   * The payment method options for this requested session.
   */
  payment_method_options: DelegatedCheckout.RequestedSession.PaymentMethodOptions | null;

  /**
   * The preview of the payment method to be created when the requested session is confirmed.
   */
  payment_method_preview: DelegatedCheckout.RequestedSession.PaymentMethodPreview | null;

  /**
   * The risk details of the requested session.
   */
  risk_details: DelegatedCheckout.RequestedSession.RiskDetails | null;

  seller_details: DelegatedCheckout.RequestedSession.SellerDetails;

  /**
   * Whether or not the payment method should be saved for future use.
   */
  setup_future_usage: 'on_session' | null;

  /**
   * The metadata shared with the seller.
   */
  shared_metadata: {
    [key: string]: string;
  } | null;

  /**
   * The SPT used for payment.
   */
  shared_payment_issued_token: string | SharedPayment.IssuedToken | null;

  /**
   * The status of the requested session.
   */
  status: DelegatedCheckout.RequestedSession.Status;

  total_details: DelegatedCheckout.RequestedSession.TotalDetails;

  /**
   * Time at which the object was last updated. Measured in seconds since the Unix epoch.
   */
  updated_at: number;
}
export namespace DelegatedCheckout {
  export namespace RequestedSession {
    export interface AffiliateAttribution {
      /**
       * Agent-scoped campaign identifier.
       */
      campaign_id: string | null;

      /**
       * Agent-scoped creative identifier.
       */
      creative_id: string | null;

      /**
       * Timestamp when the attribution token expires.
       */
      expires_at: number;

      /**
       * Agent-issued secret to validate the legitimacy of the source of this data.
       */
      identification_token: string;

      /**
       * Timestamp for when the attribution token was issued.
       */
      issued_at: number;

      /**
       * Identifier for the attribution agent / affiliate network namespace.
       */
      provider: string;

      /**
       * Agent-scoped affiliate/publisher identifier.
       */
      publisher_id: string | null;

      /**
       * Freeform key/value pairs for additional non-sensitive per-agent data.
       */
      shared_metadata: {
        [key: string]: string;
      } | null;

      /**
       * Context about where the attribution originated.
       */
      source: AffiliateAttribution.Source | null;

      /**
       * Agent-scoped sub-tracking identifier.
       */
      sub_id: string | null;

      /**
       * Whether this is the first or last touchpoint.
       */
      touchpoint: AffiliateAttribution.Touchpoint;
    }

    export interface FulfillmentDetails {
      /**
       * The fulfillment address.
       */
      address: Address | null;

      /**
       * The email address for the fulfillment details.
       */
      email: string | null;

      /**
       * The fulfillment options.
       */
      fulfillment_options: Array<FulfillmentDetails.FulfillmentOption> | null;

      /**
       * The name for the fulfillment details.
       */
      name: string | null;

      /**
       * The phone number for the fulfillment details.
       */
      phone: string | null;

      /**
       * The selected fulfillment option.
       */
      selected_fulfillment_option: FulfillmentDetails.SelectedFulfillmentOption | null;

      /**
       * Per-item fulfillment option overrides.
       */
      selected_fulfillment_option_overrides: Array<
        FulfillmentDetails.SelectedFulfillmentOptionOverride
      > | null;
    }

    export interface LineItemDetail {
      /**
       * The total discount for this line item. If no discount were applied, defaults to 0.
       */
      amount_discount: number;

      /**
       * The total before any discounts or taxes are applied.
       */
      amount_subtotal: number;

      /**
       * The fulfillment type of the line item.
       */
      fulfillment_type: string;

      /**
       * The key of the line item.
       */
      key: string;

      product_details?: LineItemDetail.ProductDetails;

      /**
       * The quantity of the line item.
       */
      quantity: number;

      /**
       * The SKU ID of the line item.
       */
      sku_id: string;

      /**
       * The per-unit amount of the item before any discounts or taxes are applied.
       */
      unit_amount: number;
    }

    export interface OrderDetails {
      /**
       * The seller's order identifier.
       */
      order_id: string | null;

      /**
       * The URL to the order status.
       */
      order_status_url: string | null;
    }

    export interface PaymentMethodOptions {
      /**
       * Card-specific payment method options.
       */
      card: PaymentMethodOptions.Card | null;

      /**
       * The computed displayable card brands.
       */
      displayable_card_brands: Array<
        PaymentMethodOptions.DisplayableCardBrand
      > | null;

      /**
       * The computed displayable payment method types.
       */
      displayable_payment_method_types: Array<
        PaymentMethodOptions.DisplayablePaymentMethodType
      > | null;

      /**
       * The payment method types excluded by the agent.
       */
      excluded_payment_method_types: Array<
        PaymentMethodOptions.ExcludedPaymentMethodType
      > | null;
    }

    export interface PaymentMethodPreview {
      /**
       * The billing details of the payment method.
       */
      billing_details: PaymentMethodPreview.BillingDetails | null;

      /**
       * The card details of the payment method.
       */
      card: PaymentMethodPreview.Card | null;

      /**
       * The type of the payment method.
       */
      type: string;
    }

    export interface RiskDetails {
      /**
       * The risk metadata for the client device.
       */
      client_device_metadata_details: RiskDetails.ClientDeviceMetadataDetails | null;
    }

    export interface SellerDetails {
      /**
       * The marketplace seller details.
       */
      marketplace_seller_details: SellerDetails.MarketplaceSellerDetails | null;

      /**
       * The network profile of the seller.
       */
      network_profile: string | Profile;

      /**
       * The URL to the seller's privacy notice.
       */
      privacy_notice_url: string | null;

      /**
       * The URL to the seller's return policy.
       */
      return_policy_url: string | null;

      /**
       * The URL to the seller's store policy.
       */
      store_policy_url: string | null;

      /**
       * The URL to the seller's terms of service.
       */
      terms_of_service_url: string | null;

      /**
       * The card brands supported by the seller.
       */
      card_brands: Array<SellerDetails.CardBrand> | null;

      /**
       * The payment method types supported by the seller.
       */
      payment_method_types: Array<SellerDetails.PaymentMethodType> | null;
    }

    export type Status = 'completed' | 'expired' | 'open';

    export interface TotalDetails {
      /**
       * The amount of order-level discounts applied to the cart. The total discount amount for this session can be computed by summing the cart discount and the item discounts.
       */
      amount_cart_discount: number | null;

      /**
       * The amount fulfillment of the total details.
       */
      amount_fulfillment: number | null;

      /**
       * The amount of item-level discounts applied to the cart. The total discount amount for this session can be computed by summing the cart discount and the item discounts.
       */
      amount_items_discount: number | null;

      /**
       * The amount tax of the total details.
       */
      amount_tax: number | null;

      /**
       * The applicable fees of the total details.
       */
      applicable_fees: Array<TotalDetails.ApplicableFee> | null;
    }

    export namespace AffiliateAttribution {
      export interface Source {
        /**
         * The platform of the attribution source.
         */
        platform: string | null;

        /**
         * The type of the attribution source.
         */
        type: Source.Type;

        /**
         * The URL of the attribution source.
         */
        url: string | null;
      }

      export type Touchpoint = 'first' | 'last';

      export namespace Source {
        export type Type = 'platform' | 'url';
      }
    }

    export namespace FulfillmentDetails {
      export interface FulfillmentOption {
        /**
         * The digital fulfillment option.
         */
        digital: FulfillmentOption.Digital | null;

        /**
         * The shipping option.
         */
        shipping: FulfillmentOption.Shipping | null;

        /**
         * The type of the fulfillment option.
         */
        type: string;
      }

      export interface SelectedFulfillmentOption {
        /**
         * The digital fulfillment option.
         */
        digital: SelectedFulfillmentOption.Digital | null;

        /**
         * The shipping option.
         */
        shipping: SelectedFulfillmentOption.Shipping | null;

        /**
         * The type of the selected fulfillment option.
         */
        type: string;
      }

      export interface SelectedFulfillmentOptionOverride {
        /**
         * The digital fulfillment option.
         */
        digital: SelectedFulfillmentOptionOverride.Digital | null;

        /**
         * The line items this fulfillment option applies to.
         */
        line_item_keys: Array<string> | null;

        /**
         * The shipping option.
         */
        shipping: SelectedFulfillmentOptionOverride.Shipping | null;

        /**
         * The type of the selected fulfillment option.
         */
        type: string;
      }

      export namespace FulfillmentOption {
        export interface Digital {
          /**
           * The digital options.
           */
          digital_options: Array<Digital.DigitalOption> | null;
        }

        export interface Shipping {
          /**
           * The shipping options.
           */
          shipping_options: Array<Shipping.ShippingOption> | null;
        }

        export namespace Digital {
          export interface DigitalOption {
            /**
             * The description of the digital fulfillment option.
             */
            description: string | null;

            /**
             * The digital amount of the digital fulfillment option.
             */
            digital_amount: number;

            /**
             * The display name of the digital fulfillment option.
             */
            display_name: string;

            /**
             * The key of the digital fulfillment option.
             */
            key: string;

            /**
             * The line item keys associated with this digital fulfillment option.
             */
            line_item_keys: Array<string> | null;
          }
        }

        export namespace Shipping {
          export interface ShippingOption {
            /**
             * The description of the shipping option.
             */
            description: string | null;

            /**
             * The display name of the shipping option.
             */
            display_name: string;

            /**
             * The earliest delivery time of the shipping option.
             */
            earliest_delivery_time: number | null;

            /**
             * The key of the shipping option.
             */
            key: string;

            /**
             * The latest delivery time of the shipping option.
             */
            latest_delivery_time: number | null;

            /**
             * The line item keys associated with this shipping option.
             */
            line_item_keys: Array<string> | null;

            /**
             * The shipping amount of the shipping option.
             */
            shipping_amount: number;
          }
        }
      }

      export namespace SelectedFulfillmentOption {
        export interface Digital {
          /**
           * The digital option.
           */
          digital_option: string | null;
        }

        export interface Shipping {
          /**
           * The shipping option.
           */
          shipping_option: string | null;
        }
      }

      export namespace SelectedFulfillmentOptionOverride {
        export interface Digital {
          /**
           * The digital option.
           */
          digital_option: string | null;
        }

        export interface Shipping {
          /**
           * The shipping option.
           */
          shipping_option: string | null;
        }
      }
    }

    export namespace LineItemDetail {
      export interface ProductDetails {
        /**
         * Custom attributes for the product.
         */
        custom_attributes: Array<ProductDetails.CustomAttribute> | null;

        /**
         * The description of the product.
         */
        description: string | null;

        /**
         * Disclosures for the product.
         */
        disclosures: Array<ProductDetails.Disclosure> | null;

        /**
         * The images of the product.
         */
        images: Array<string> | null;

        /**
         * The title of the product.
         */
        title: string;
      }

      export namespace ProductDetails {
        export interface CustomAttribute {
          /**
           * The display name of the custom attribute.
           */
          display_name: string;

          /**
           * The value of the custom attribute.
           */
          value: string;
        }

        export interface Disclosure {
          /**
           * The content of the disclosure.
           */
          content: string;

          /**
           * The content type of the disclosure.
           */
          content_type: Disclosure.ContentType;

          /**
           * The type of disclosure.
           */
          type: 'disclaimer';
        }

        export namespace Disclosure {
          export type ContentType = 'link' | 'markdown' | 'plain';
        }
      }
    }

    export namespace PaymentMethodOptions {
      export interface Card {
        /**
         * The card brands blocked by the agent.
         */
        brands_blocked: Array<Card.BrandsBlocked> | null;
      }

      export type DisplayableCardBrand =
        | 'american_express'
        | 'mastercard'
        | 'visa';

      export type DisplayablePaymentMethodType = 'affirm' | 'card' | 'klarna';

      export type ExcludedPaymentMethodType = 'affirm' | 'card' | 'klarna';

      export namespace Card {
        export type BrandsBlocked = 'american_express' | 'mastercard' | 'visa';
      }
    }

    export namespace PaymentMethodPreview {
      export interface BillingDetails {
        /**
         * The billing address.
         */
        address: Address | null;

        /**
         * The email address for the billing details.
         */
        email: string | null;

        /**
         * The name for the billing details.
         */
        name: string | null;

        /**
         * The phone number for the billing details.
         */
        phone: string | null;
      }

      export interface Card {
        /**
         * The expiry month of the card.
         */
        exp_month: number;

        /**
         * The expiry year of the card.
         */
        exp_year: number;

        /**
         * The last 4 digits of the card number.
         */
        last4: string;
      }
    }

    export namespace RiskDetails {
      export interface ClientDeviceMetadataDetails {
        /**
         * The radar session for the client device.
         */
        radar_session: string | null;

        /**
         * The referrer of the client device.
         */
        referrer: string | null;

        /**
         * The remote IP address of the client device.
         */
        remote_ip: string | null;

        /**
         * The time spent on the page by the client device.
         */
        time_on_page_ms: number | null;

        /**
         * The user agent of the client device.
         */
        user_agent: string | null;
      }
    }

    export namespace SellerDetails {
      export interface MarketplaceSellerDetails {}

      export type CardBrand = 'american_express' | 'mastercard' | 'visa';

      export type PaymentMethodType = 'affirm' | 'card' | 'klarna';
    }

    export namespace TotalDetails {
      export interface ApplicableFee {
        /**
         * The amount of the applicable fee.
         */
        amount: number;

        /**
         * The description of the applicable fee.
         */
        description: string | null;

        /**
         * The display name of the applicable fee.
         */
        display_name: string;
      }
    }
  }
}
export namespace DelegatedCheckout {
  export interface RequestedSessionCreateParams {
    /**
     * The currency for this requested session.
     */
    currency: string;

    /**
     * The details of the line items.
     */
    line_item_details: Array<RequestedSessionCreateParams.LineItemDetail>;

    /**
     * The details of the seller.
     */
    seller_details: RequestedSessionCreateParams.SellerDetails;

    /**
     * Affiliate attribution data associated with this requested session.
     */
    affiliate_attribution?: RequestedSessionCreateParams.AffiliateAttribution;

    /**
     * The customer for this requested session.
     */
    customer?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The details of the fulfillment.
     */
    fulfillment_details?: RequestedSessionCreateParams.FulfillmentDetails;

    /**
     * The metadata for this requested session.
     */
    metadata?: MetadataParam;

    /**
     * The payment method for this requested session.
     */
    payment_method?: string;

    /**
     * The payment method options for this requested session.
     */
    payment_method_options?: RequestedSessionCreateParams.PaymentMethodOptions;

    /**
     * The setup future usage for this requested session.
     */
    setup_future_usage?: 'on_session';

    /**
     * The shared metadata for this requested session.
     */
    shared_metadata?: {
      [key: string]: string;
    };
  }

  export namespace RequestedSessionCreateParams {
    export interface LineItemDetail {
      /**
       * The quantity of the line item.
       */
      quantity: number;

      /**
       * The SKU ID of the line item.
       */
      sku_id: string;
    }

    export interface SellerDetails {
      /**
       * The network profile for the seller.
       */
      network_profile: string;
    }

    export interface AffiliateAttribution {
      /**
       * Agent-scoped campaign identifier.
       */
      campaign_id?: string;

      /**
       * Agent-scoped creative identifier.
       */
      creative_id?: string;

      /**
       * Timestamp when the attribution token expires.
       */
      expires_at: number;

      /**
       * Agent-issued secret to validate the legitimacy of the source of this data.
       */
      identification_token: string;

      /**
       * Timestamp for when the attribution token was issued.
       */
      issued_at: number;

      /**
       * Identifier for the attribution agent / affiliate network namespace.
       */
      provider: string;

      /**
       * Agent-scoped affiliate/publisher identifier.
       */
      publisher_id?: string;

      /**
       * Freeform key/value pairs for additional non-sensitive per-agent data.
       */
      shared_metadata?: {
        [key: string]: string;
      };

      /**
       * Context about where the attribution originated.
       */
      source?: AffiliateAttribution.Source;

      /**
       * Agent-scoped sub-tracking identifier.
       */
      sub_id?: string;

      /**
       * Whether this is the first or last touchpoint.
       */
      touchpoint: AffiliateAttribution.Touchpoint;
    }

    export interface FulfillmentDetails {
      /**
       * The customer's address.
       */
      address?: FulfillmentDetails.Address;

      /**
       * The customer's email address.
       */
      email?: string;

      /**
       * The customer's name.
       */
      name?: string;

      /**
       * The customer's phone number.
       */
      phone?: string;
    }

    export interface PaymentMethodOptions {
      /**
       * Card-specific payment method options.
       */
      card?: PaymentMethodOptions.Card;

      /**
       * The payment method types to exclude from the session.
       */
      excluded_payment_method_types?: Array<
        PaymentMethodOptions.ExcludedPaymentMethodType
      >;
    }

    export namespace AffiliateAttribution {
      export interface Source {
        /**
         * The platform where the attribution originated.
         */
        platform?: string;

        /**
         * The type of the attribution source.
         */
        type: Source.Type;

        /**
         * The URL where the attribution originated.
         */
        url?: string;
      }

      export type Touchpoint = 'first' | 'last';

      export namespace Source {
        export type Type = 'platform' | 'url';
      }
    }

    export namespace FulfillmentDetails {
      export interface Address {
        /**
         * City, district, suburb, town, or village.
         */
        city: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country: string;

        /**
         * Address line 1, such as the street, PO Box, or company name.
         */
        line1?: string;

        /**
         * Address line 2, such as the apartment, suite, unit, or building.
         */
        line2?: string;

        /**
         * ZIP or postal code.
         */
        postal_code: string;

        /**
         * State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
         */
        state: string;
      }
    }

    export namespace PaymentMethodOptions {
      export interface Card {
        /**
         * The card brands to exclude from the session.
         */
        brands_blocked?: Array<Card.BrandsBlocked>;
      }

      export type ExcludedPaymentMethodType = 'affirm' | 'card' | 'klarna';

      export namespace Card {
        export type BrandsBlocked = 'american_express' | 'mastercard' | 'visa';
      }
    }
  }
}
export namespace DelegatedCheckout {
  export interface RequestedSessionRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace DelegatedCheckout {
  export interface RequestedSessionUpdateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The details of the fulfillment.
     */
    fulfillment_details?: RequestedSessionUpdateParams.FulfillmentDetails;

    /**
     * The details of the line items.
     */
    line_item_details?: Array<RequestedSessionUpdateParams.LineItemDetail>;

    /**
     * The metadata for this requested session.
     */
    metadata?: Emptyable<MetadataParam>;

    /**
     * The payment method for this requested session.
     */
    payment_method?: string;

    /**
     * The payment method options for this requested session.
     */
    payment_method_options?: RequestedSessionUpdateParams.PaymentMethodOptions;

    /**
     * The shared metadata for this requested session.
     */
    shared_metadata?: Emptyable<{
      [key: string]: string;
    }>;
  }

  export namespace RequestedSessionUpdateParams {
    export interface FulfillmentDetails {
      /**
       * The customer's address.
       */
      address?: FulfillmentDetails.Address;

      /**
       * The customer's email address.
       */
      email?: string;

      /**
       * The customer's name.
       */
      name?: string;

      /**
       * The customer's phone number.
       */
      phone?: string;

      /**
       * The fulfillment option to select.
       */
      selected_fulfillment_option?: FulfillmentDetails.SelectedFulfillmentOption;

      /**
       * The fulfillment option overrides for specific line items.
       */
      selected_fulfillment_option_overrides?: Array<
        FulfillmentDetails.SelectedFulfillmentOptionOverride
      >;
    }

    export interface LineItemDetail {
      /**
       * The key of the line item.
       */
      key: string;

      /**
       * The quantity of the line item.
       */
      quantity: number;
    }

    export interface PaymentMethodOptions {
      /**
       * Card-specific payment method options.
       */
      card?: PaymentMethodOptions.Card;

      /**
       * The payment method types to exclude from the session.
       */
      excluded_payment_method_types?: Array<
        PaymentMethodOptions.ExcludedPaymentMethodType
      >;
    }

    export namespace FulfillmentDetails {
      export interface Address {
        /**
         * City, district, suburb, town, or village.
         */
        city: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country: string;

        /**
         * Address line 1, such as the street, PO Box, or company name.
         */
        line1?: string;

        /**
         * Address line 2, such as the apartment, suite, unit, or building.
         */
        line2?: string;

        /**
         * ZIP or postal code.
         */
        postal_code: string;

        /**
         * State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
         */
        state: string;
      }

      export interface SelectedFulfillmentOption {
        /**
         * The digital fulfillment option.
         */
        digital?: SelectedFulfillmentOption.Digital;

        /**
         * The shipping fulfillment option.
         */
        shipping?: SelectedFulfillmentOption.Shipping;

        /**
         * The type of fulfillment option.
         */
        type: string;
      }

      export interface SelectedFulfillmentOptionOverride {
        /**
         * The digital fulfillment option.
         */
        digital?: SelectedFulfillmentOptionOverride.Digital;

        /**
         * The line item keys that this fulfillment option override applies to.
         */
        line_item_keys: Array<string>;

        /**
         * The shipping fulfillment option.
         */
        shipping?: SelectedFulfillmentOptionOverride.Shipping;

        /**
         * The type of fulfillment option.
         */
        type: string;
      }

      export namespace SelectedFulfillmentOption {
        export interface Digital {
          /**
           * The digital option identifier.
           */
          digital_option: string;
        }

        export interface Shipping {
          /**
           * The shipping option identifier.
           */
          shipping_option: string;
        }
      }

      export namespace SelectedFulfillmentOptionOverride {
        export interface Digital {
          /**
           * The digital option identifier.
           */
          digital_option: string;
        }

        export interface Shipping {
          /**
           * The shipping option identifier.
           */
          shipping_option: string;
        }
      }
    }

    export namespace PaymentMethodOptions {
      export interface Card {
        /**
         * The card brands to exclude from the session.
         */
        brands_blocked?: Array<Card.BrandsBlocked>;
      }

      export type ExcludedPaymentMethodType = 'affirm' | 'card' | 'klarna';

      export namespace Card {
        export type BrandsBlocked = 'american_express' | 'mastercard' | 'visa';
      }
    }
  }
}
export namespace DelegatedCheckout {
  export interface RequestedSessionConfirmParams {
    /**
     * Affiliate attribution data associated with this requested session.
     */
    affiliate_attribution?: RequestedSessionConfirmParams.AffiliateAttribution;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The PaymentMethod to use with the requested session.
     */
    payment_method?: string;

    /**
     * Risk details/signals associated with the requested session
     */
    risk_details?: RequestedSessionConfirmParams.RiskDetails;
  }

  export namespace RequestedSessionConfirmParams {
    export interface AffiliateAttribution {
      /**
       * Agent-scoped campaign identifier.
       */
      campaign_id?: string;

      /**
       * Agent-scoped creative identifier.
       */
      creative_id?: string;

      /**
       * Timestamp when the attribution token expires.
       */
      expires_at: number;

      /**
       * Agent-issued secret to validate the legitimacy of the source of this data.
       */
      identification_token: string;

      /**
       * Timestamp for when the attribution token was issued.
       */
      issued_at: number;

      /**
       * Identifier for the attribution agent / affiliate network namespace.
       */
      provider: string;

      /**
       * Agent-scoped affiliate/publisher identifier.
       */
      publisher_id?: string;

      /**
       * Freeform key/value pairs for additional non-sensitive per-agent data.
       */
      shared_metadata?: {
        [key: string]: string;
      };

      /**
       * Context about where the attribution originated.
       */
      source?: AffiliateAttribution.Source;

      /**
       * Agent-scoped sub-tracking identifier.
       */
      sub_id?: string;

      /**
       * Whether this is the first or last touchpoint.
       */
      touchpoint: AffiliateAttribution.Touchpoint;
    }

    export interface RiskDetails {
      /**
       * The client device metadata details for this requested session.
       */
      client_device_metadata_details?: RiskDetails.ClientDeviceMetadataDetails;
    }

    export namespace AffiliateAttribution {
      export interface Source {
        /**
         * The platform where the attribution originated.
         */
        platform?: string;

        /**
         * The type of the attribution source.
         */
        type: Source.Type;

        /**
         * The URL where the attribution originated.
         */
        url?: string;
      }

      export type Touchpoint = 'first' | 'last';

      export namespace Source {
        export type Type = 'platform' | 'url';
      }
    }

    export namespace RiskDetails {
      export interface ClientDeviceMetadataDetails {
        /**
         * The radar session.
         */
        radar_session?: string;

        /**
         * The referrer of the client device.
         */
        referrer?: string;

        /**
         * The remote IP address of the client device.
         */
        remote_ip?: string;

        /**
         * The time on page in milliseconds.
         */
        time_on_page_ms?: number;

        /**
         * The user agent of the client device.
         */
        user_agent?: string;
      }
    }
  }
}
export namespace DelegatedCheckout {
  export interface RequestedSessionExpireParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
