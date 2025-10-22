// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace DelegatedCheckout {
      /**
       * A requested session is a session that has been requested by a customer.
       */
      interface RequestedSession {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'delegated_checkout.requested_session';

        /**
         * The subtotal amount of the requested session.
         */
        amount_subtotal: number;

        /**
         * The total amount of the requested session.
         */
        amount_total: number;

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
        fulfillment_details: RequestedSession.FulfillmentDetails | null;

        /**
         * The line items to be purchased.
         */
        line_item_details: Array<RequestedSession.LineItemDetail>;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata | null;

        /**
         * The details of the order.
         */
        order_details: RequestedSession.OrderDetails | null;

        /**
         * The payment method used for the requested session.
         */
        payment_method: string | null;

        seller_details: RequestedSession.SellerDetails;

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
        shared_payment_issued_token: string | null;

        /**
         * The status of the requested session.
         */
        status: RequestedSession.Status;

        total_details: RequestedSession.TotalDetails;

        /**
         * Time at which the object was last updated. Measured in seconds since the Unix epoch.
         */
        updated_at: number;
      }

      namespace RequestedSession {
        interface FulfillmentDetails {
          /**
           * The fulfillment address.
           */
          address: Stripe.Address | null;

          /**
           * The email address for the fulfillment details.
           */
          email: string | null;

          /**
           * The fulfillment option.
           */
          fulfillment_option: FulfillmentDetails.FulfillmentOption | null;

          /**
           * The fulfillment options.
           */
          fulfillment_options: Array<
            FulfillmentDetails.FulfillmentOption
          > | null;

          /**
           * The name for the fulfillment details.
           */
          name: string | null;

          /**
           * The phone number for the fulfillment details.
           */
          phone: string | null;
        }

        namespace FulfillmentDetails {
          interface FulfillmentOption {
            /**
             * The shipping option.
             */
            shipping: FulfillmentOption.Shipping | null;

            /**
             * The type of the selected fulfillment option.
             */
            type: string;
          }

          interface FulfillmentOption {
            /**
             * The shipping option.
             */
            shipping: FulfillmentOption.Shipping | null;

            /**
             * The type of the fulfillment option.
             */
            type: string;
          }

          namespace FulfillmentOption {
            interface Shipping {
              /**
               * The shipping option.
               */
              shipping_option: string | null;
            }

            interface Shipping {
              /**
               * The shipping options.
               */
              shipping_options: Array<Shipping.ShippingOption> | null;
            }

            namespace Shipping {
              interface ShippingOption {
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
                 * The shipping amount of the shipping option.
                 */
                shipping_amount: number;
              }
            }
          }
        }

        interface LineItemDetail {
          /**
           * The description of the line item.
           */
          description: string | null;

          /**
           * The images of the line item.
           */
          images: Array<string> | null;

          /**
           * The key of the line item.
           */
          key: string;

          /**
           * The name of the line item.
           */
          name: string;

          /**
           * The quantity of the line item.
           */
          quantity: number;

          /**
           * The SKU ID of the line item.
           */
          sku_id: string;

          /**
           * The unit amount of the line item.
           */
          unit_amount: number;
        }

        interface OrderDetails {
          /**
           * The URL to the order status.
           */
          order_status_url: string | null;
        }

        interface SellerDetails {}

        type Status = 'completed' | 'expired' | 'open';

        interface TotalDetails {
          /**
           * The amount discount of the total details.
           */
          amount_discount: number | null;

          /**
           * The amount fulfillment of the total details.
           */
          amount_fulfillment: number | null;

          /**
           * The amount tax of the total details.
           */
          amount_tax: number | null;
        }
      }
    }
  }
}
