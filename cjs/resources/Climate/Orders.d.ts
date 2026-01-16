import { StripeResource } from '../../StripeResource.js';
import { Product } from './Products.js';
import { Supplier } from './Suppliers.js';
import { MetadataParam, Emptyable, PaginationParams, Metadata } from '../../shared.js';
import { RequestOptions, ApiListPromise, Response } from '../../lib.js';
export declare class OrderResource extends StripeResource {
    /**
     * Lists all Climate order objects. The orders are returned sorted by creation date, with the
     * most recently created orders appearing first.
     */
    list(params?: Climate.OrderListParams, options?: RequestOptions): ApiListPromise<Order>;
    list(options?: RequestOptions): ApiListPromise<Order>;
    /**
     * Creates a Climate order object for a given Climate product. The order will be processed immediately
     * after creation and payment will be deducted your Stripe balance.
     */
    create(params: Climate.OrderCreateParams, options?: RequestOptions): Promise<Response<Order>>;
    /**
     * Retrieves the details of a Climate order object with the given ID.
     */
    retrieve(id: string, params?: Climate.OrderRetrieveParams, options?: RequestOptions): Promise<Response<Order>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<Order>>;
    /**
     * Updates the specified order by setting the values of the parameters passed.
     */
    update(id: string, params?: Climate.OrderUpdateParams, options?: RequestOptions): Promise<Response<Order>>;
    /**
     * Cancels a Climate order. You can cancel an order within 24 hours of creation. Stripe refunds the
     * reservation amount_subtotal, but not the amount_fees for user-triggered cancellations. Frontier
     * might cancel reservations if suppliers fail to deliver. If Frontier cancels the reservation, Stripe
     * provides 90 days advance notice and refunds the amount_total.
     */
    cancel(id: string, params?: Climate.OrderCancelParams, options?: RequestOptions): Promise<Response<Order>>;
    cancel(id: string, options?: RequestOptions): Promise<Response<Order>>;
}
export interface Order {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'climate.order';
    /**
     * Total amount of [Frontier](https://frontierclimate.com/)'s service fees in the currency's smallest unit.
     */
    amount_fees: number;
    /**
     * Total amount of the carbon removal in the currency's smallest unit.
     */
    amount_subtotal: number;
    /**
     * Total amount of the order including fees in the currency's smallest unit.
     */
    amount_total: number;
    beneficiary?: Climate.Order.Beneficiary;
    /**
     * Time at which the order was canceled. Measured in seconds since the Unix epoch.
     */
    canceled_at: number | null;
    /**
     * Reason for the cancellation of this order.
     */
    cancellation_reason: Climate.Order.CancellationReason | null;
    /**
     * For delivered orders, a URL to a delivery certificate for the order.
     */
    certificate: string | null;
    /**
     * Time at which the order was confirmed. Measured in seconds since the Unix epoch.
     */
    confirmed_at: number | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase, representing the currency for this order.
     */
    currency: string;
    /**
     * Time at which the order's expected_delivery_year was delayed. Measured in seconds since the Unix epoch.
     */
    delayed_at: number | null;
    /**
     * Time at which the order was delivered. Measured in seconds since the Unix epoch.
     */
    delivered_at: number | null;
    /**
     * Details about the delivery of carbon removal for this order.
     */
    delivery_details: Array<Climate.Order.DeliveryDetail>;
    /**
     * The year this order is expected to be delivered.
     */
    expected_delivery_year: number;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Metadata;
    /**
     * Quantity of carbon removal that is included in this order.
     */
    metric_tons: string;
    /**
     * Unique ID for the Climate `Product` this order is purchasing.
     */
    product: string | Product;
    /**
     * Time at which the order's product was substituted for a different product. Measured in seconds since the Unix epoch.
     */
    product_substituted_at: number | null;
    /**
     * The current status of this order.
     */
    status: Climate.Order.Status;
}
export declare namespace Climate {
    namespace Order {
        interface Beneficiary {
            /**
             * Publicly displayable name for the end beneficiary of carbon removal.
             */
            public_name: string;
        }
        type CancellationReason = 'expired' | 'product_unavailable' | 'requested';
        interface DeliveryDetail {
            /**
             * Time at which the delivery occurred. Measured in seconds since the Unix epoch.
             */
            delivered_at: number;
            /**
             * Specific location of this delivery.
             */
            location: DeliveryDetail.Location | null;
            /**
             * Quantity of carbon removal supplied by this delivery.
             */
            metric_tons: string;
            /**
             * Once retired, a URL to the registry entry for the tons from this delivery.
             */
            registry_url: string | null;
            /**
             * A supplier of carbon removal.
             */
            supplier: Supplier;
        }
        type Status = 'awaiting_funds' | 'canceled' | 'confirmed' | 'delivered' | 'open';
        namespace DeliveryDetail {
            interface Location {
                /**
                 * The city where the supplier is located.
                 */
                city: string | null;
                /**
                 * Two-letter ISO code representing the country where the supplier is located.
                 */
                country: string;
                /**
                 * The geographic latitude where the supplier is located.
                 */
                latitude: number | null;
                /**
                 * The geographic longitude where the supplier is located.
                 */
                longitude: number | null;
                /**
                 * The state/county/province/region where the supplier is located.
                 */
                region: string | null;
            }
        }
    }
}
export declare namespace Climate {
    interface OrderCreateParams {
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
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;
        /**
         * Requested number of tons for the order. Either this or `amount` must be specified.
         */
        metric_tons?: string;
    }
    namespace OrderCreateParams {
        interface Beneficiary {
            /**
             * Publicly displayable name for the end beneficiary of carbon removal.
             */
            public_name: string;
        }
    }
}
export declare namespace Climate {
    interface OrderRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Climate {
    interface OrderUpdateParams {
        /**
         * Publicly sharable reference for the end beneficiary of carbon removal. Assumed to be the Stripe account if not set.
         */
        beneficiary?: Emptyable<OrderUpdateParams.Beneficiary>;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;
    }
    namespace OrderUpdateParams {
        interface Beneficiary {
            /**
             * Publicly displayable name for the end beneficiary of carbon removal.
             */
            public_name: Emptyable<string>;
        }
    }
}
export declare namespace Climate {
    interface OrderListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Climate {
    interface OrderCancelParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
