// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace DelegatedCheckout {
      interface RequestedSessionCreateParams {
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
        metadata?: Stripe.MetadataParam;

        /**
         * The payment method for this requested session.
         */
        payment_method?: string;

        /**
         * The payment method data for this requested session.
         */
        payment_method_data?: RequestedSessionCreateParams.PaymentMethodData;

        /**
         * The risk details for this requested session.
         */
        risk_details?: RequestedSessionCreateParams.RiskDetails;

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

      namespace RequestedSessionCreateParams {
        interface FulfillmentDetails {
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

        namespace FulfillmentDetails {
          interface Address {
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
            line1: string;

            /**
             * Address line 2, such as the apartment, suite, unit, or building.
             */
            line2?: string;

            /**
             * ZIP or postal code.
             */
            postal_code: string;

            /**
             * State, county, province, or region.
             */
            state: string;
          }
        }

        interface LineItemDetail {
          /**
           * The quantity of the line item.
           */
          quantity: number;

          /**
           * The SKU ID of the line item.
           */
          sku_id: string;
        }

        interface PaymentMethodData {
          /**
           * The billing details for the payment method data.
           */
          billing_details?: PaymentMethodData.BillingDetails;

          /**
           * The card for the payment method data.
           */
          card?: PaymentMethodData.Card;

          /**
           * The type of the payment method data.
           */
          type?: 'card';
        }

        namespace PaymentMethodData {
          interface BillingDetails {
            /**
             * The address for the billing details.
             */
            address?: BillingDetails.Address;

            /**
             * The email for the billing details.
             */
            email?: string;

            /**
             * The name for the billing details.
             */
            name?: string;

            /**
             * The phone for the billing details.
             */
            phone?: string;
          }

          namespace BillingDetails {
            interface Address {
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
              line1: string;

              /**
               * Address line 2, such as the apartment, suite, unit, or building.
               */
              line2?: string;

              /**
               * ZIP or postal code.
               */
              postal_code: string;

              /**
               * State, county, province, or region.
               */
              state: string;
            }
          }

          interface Card {
            /**
             * The CVC of the card.
             */
            cvc?: string;

            /**
             * The expiration month of the card.
             */
            exp_month: number;

            /**
             * The expiration year of the card.
             */
            exp_year: number;

            /**
             * The number of the card.
             */
            number: string;
          }
        }

        interface RiskDetails {
          /**
           * The client device metadata details for this requested session.
           */
          client_device_metadata_details?: RiskDetails.ClientDeviceMetadataDetails;
        }

        namespace RiskDetails {
          interface ClientDeviceMetadataDetails {
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
             * The time on page in seconds.
             */
            time_on_page?: number;

            /**
             * The user agent of the client device.
             */
            user_agent?: string;
          }
        }

        interface SellerDetails {
          /**
           * The network profile for the seller.
           */
          network_profile: string;
        }
      }

      interface RequestedSessionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface RequestedSessionUpdateParams {
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
        metadata?: Stripe.MetadataParam;

        /**
         * The payment method for this requested session.
         */
        payment_method?: string;

        /**
         * The payment method data for this requested session.
         */
        payment_method_data?: RequestedSessionUpdateParams.PaymentMethodData;

        /**
         * The shared metadata for this requested session.
         */
        shared_metadata?: {
          [key: string]: string;
        };
      }

      namespace RequestedSessionUpdateParams {
        interface FulfillmentDetails {
          address?: FulfillmentDetails.Address;

          /**
           * The customer's email address.
           */
          email?: string;

          /**
           * The fulfillment option to select.
           */
          fulfillment_option?: FulfillmentDetails.FulfillmentOption;

          /**
           * The customer's name.
           */
          name?: string;

          /**
           * The customer's phone number.
           */
          phone?: string;
        }

        namespace FulfillmentDetails {
          interface Address {
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
            line1: string;

            /**
             * Address line 2, such as the apartment, suite, unit, or building.
             */
            line2?: string;

            /**
             * ZIP or postal code.
             */
            postal_code: string;

            /**
             * State, county, province, or region.
             */
            state: string;
          }

          interface FulfillmentOption {
            /**
             * The shipping fulfillment option.
             */
            shipping: FulfillmentOption.Shipping;

            /**
             * The type of fulfillment option.
             */
            type: string;
          }

          namespace FulfillmentOption {
            interface Shipping {
              /**
               * The shipping option identifer.
               */
              shipping_option: string;
            }
          }
        }

        interface LineItemDetail {
          /**
           * The key of the line item.
           */
          key: string;

          /**
           * The quantity of the line item.
           */
          quantity?: number;
        }

        interface PaymentMethodData {
          /**
           * The billing details for the payment method data.
           */
          billing_details?: PaymentMethodData.BillingDetails;

          /**
           * The card for the payment method data.
           */
          card?: PaymentMethodData.Card;

          /**
           * The type of the payment method data.
           */
          type?: 'card';
        }

        namespace PaymentMethodData {
          interface BillingDetails {
            /**
             * The address for the billing details.
             */
            address?: BillingDetails.Address;

            /**
             * The email for the billing details.
             */
            email?: string;

            /**
             * The name for the billing details.
             */
            name?: string;

            /**
             * The phone for the billing details.
             */
            phone?: string;
          }

          namespace BillingDetails {
            interface Address {
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
              line1: string;

              /**
               * Address line 2, such as the apartment, suite, unit, or building.
               */
              line2?: string;

              /**
               * ZIP or postal code.
               */
              postal_code: string;

              /**
               * State, county, province, or region.
               */
              state: string;
            }
          }

          interface Card {
            /**
             * The CVC of the card.
             */
            cvc?: string;

            /**
             * The expiration month of the card.
             */
            exp_month: number;

            /**
             * The expiration year of the card.
             */
            exp_year: number;

            /**
             * The number of the card.
             */
            number: string;
          }
        }
      }

      interface RequestedSessionConfirmParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The PaymentMethod to use with the requested session.
         */
        payment_method?: string;
      }

      interface RequestedSessionExpireParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class RequestedSessionsResource {
        /**
         * Creates a requested session
         */
        create(
          params: RequestedSessionCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.DelegatedCheckout.RequestedSession>>;

        /**
         * Retrieves a requested session
         */
        retrieve(
          id: string,
          params?: RequestedSessionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.DelegatedCheckout.RequestedSession>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.DelegatedCheckout.RequestedSession>>;

        /**
         * Updates a requested session
         */
        update(
          id: string,
          params?: RequestedSessionUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.DelegatedCheckout.RequestedSession>>;

        /**
         * Confirms a requested session
         */
        confirm(
          id: string,
          params?: RequestedSessionConfirmParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.DelegatedCheckout.RequestedSession>>;
        confirm(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.DelegatedCheckout.RequestedSession>>;

        /**
         * Expires a requested session
         */
        expire(
          id: string,
          params?: RequestedSessionExpireParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.DelegatedCheckout.RequestedSession>>;
        expire(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.DelegatedCheckout.RequestedSession>>;
      }
    }
  }
}
