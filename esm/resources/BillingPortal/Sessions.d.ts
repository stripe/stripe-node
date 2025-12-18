import { StripeResource } from '../../StripeResource.js';
import { RequestOptions } from '../../Types.js';
import { Configuration } from './Configurations.js';
import { Response } from '../../lib.js';
export declare class SessionResource extends StripeResource {
    /**
     * Creates a session of the customer portal.
     */
    create(params: BillingPortal.SessionCreateParams, options?: RequestOptions): Promise<Response<Session>>;
}
export /**
 * The Billing customer portal is a Stripe-hosted UI for subscription and
 * billing management.
 *
 * A portal configuration describes the functionality and features that you
 * want to provide to your customers through the portal.
 *
 * A portal session describes the instantiation of the customer portal for
 * a particular customer. By visiting the session's URL, the customer
 * can manage their subscriptions and billing details. For security reasons,
 * sessions are short-lived and will expire if the customer does not visit the URL.
 * Create sessions on-demand when customers intend to manage their subscriptions
 * and billing details.
 *
 * Related guide: [Customer management](https://docs.stripe.com/customer-management)
 */ interface Session {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'billing_portal.session';
    /**
     * The configuration used by this session, describing the features available.
     */
    configuration: string | Configuration;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The ID of the customer for this session.
     */
    customer: string;
    /**
     * Information about a specific flow for the customer to go through. See the [docs](https://stripe.com/docs/customer-management/portal-deep-links) to learn more about using customer portal deep links and flows.
     */
    flow: BillingPortal.Session.Flow | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The IETF language tag of the locale Customer Portal is displayed in. If blank or auto, the customer's `preferred_locales` or browser's locale is used.
     */
    locale: BillingPortal.Session.Locale | null;
    /**
     * The account for which the session was created on behalf of. When specified, only subscriptions and invoices with this `on_behalf_of` account appear in the portal. For more information, see the [docs](https://stripe.com/docs/connect/separate-charges-and-transfers#settlement-merchant). Use the [Accounts API](https://stripe.com/docs/api/accounts/object#account_object-settings-branding) to modify the `on_behalf_of` account's branding settings, which the portal displays.
     */
    on_behalf_of: string | null;
    /**
     * The URL to redirect customers to when they click on the portal's link to return to your website.
     */
    return_url: string | null;
    /**
     * The short-lived URL of the session that gives customers access to the customer portal.
     */
    url: string;
}
export declare namespace BillingPortal {
    namespace Session {
        interface Flow {
            after_completion: Flow.AfterCompletion;
            /**
             * Configuration when `flow.type=subscription_cancel`.
             */
            subscription_cancel: Flow.SubscriptionCancel | null;
            /**
             * Configuration when `flow.type=subscription_update`.
             */
            subscription_update: Flow.SubscriptionUpdate | null;
            /**
             * Configuration when `flow.type=subscription_update_confirm`.
             */
            subscription_update_confirm: Flow.SubscriptionUpdateConfirm | null;
            /**
             * Type of flow that the customer will go through.
             */
            type: Flow.Type;
        }
        type Locale = 'auto' | 'bg' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'en-AU' | 'en-CA' | 'en-GB' | 'en-IE' | 'en-IN' | 'en-NZ' | 'en-SG' | 'es' | 'es-419' | 'et' | 'fi' | 'fil' | 'fr' | 'fr-CA' | 'hr' | 'hu' | 'id' | 'it' | 'ja' | 'ko' | 'lt' | 'lv' | 'ms' | 'mt' | 'nb' | 'nl' | 'pl' | 'pt' | 'pt-BR' | 'ro' | 'ru' | 'sk' | 'sl' | 'sv' | 'th' | 'tr' | 'vi' | 'zh' | 'zh-HK' | 'zh-TW';
        namespace Flow {
            interface AfterCompletion {
                /**
                 * Configuration when `after_completion.type=hosted_confirmation`.
                 */
                hosted_confirmation: AfterCompletion.HostedConfirmation | null;
                /**
                 * Configuration when `after_completion.type=redirect`.
                 */
                redirect: AfterCompletion.Redirect | null;
                /**
                 * The specified type of behavior after the flow is completed.
                 */
                type: AfterCompletion.Type;
            }
            interface SubscriptionCancel {
                /**
                 * Specify a retention strategy to be used in the cancellation flow.
                 */
                retention: SubscriptionCancel.Retention | null;
                /**
                 * The ID of the subscription to be canceled.
                 */
                subscription: string;
            }
            interface SubscriptionUpdate {
                /**
                 * The ID of the subscription to be updated.
                 */
                subscription: string;
            }
            interface SubscriptionUpdateConfirm {
                /**
                 * The coupon or promotion code to apply to this subscription update.
                 */
                discounts: Array<SubscriptionUpdateConfirm.Discount> | null;
                /**
                 * The [subscription item](https://stripe.com/docs/api/subscription_items) to be updated through this flow. Currently, only up to one may be specified and subscriptions with multiple items are not updatable.
                 */
                items: Array<SubscriptionUpdateConfirm.Item>;
                /**
                 * The ID of the subscription to be updated.
                 */
                subscription: string;
            }
            type Type = 'payment_method_update' | 'subscription_cancel' | 'subscription_update' | 'subscription_update_confirm';
            namespace AfterCompletion {
                interface HostedConfirmation {
                    /**
                     * A custom message to display to the customer after the flow is completed.
                     */
                    custom_message: string | null;
                }
                interface Redirect {
                    /**
                     * The URL the customer will be redirected to after the flow is completed.
                     */
                    return_url: string;
                }
                type Type = 'hosted_confirmation' | 'portal_homepage' | 'redirect';
            }
            namespace SubscriptionCancel {
                interface Retention {
                    /**
                     * Configuration when `retention.type=coupon_offer`.
                     */
                    coupon_offer: Retention.CouponOffer | null;
                    /**
                     * Type of retention strategy that will be used.
                     */
                    type: 'coupon_offer';
                }
                namespace Retention {
                    interface CouponOffer {
                        /**
                         * The ID of the coupon to be offered.
                         */
                        coupon: string;
                    }
                }
            }
            namespace SubscriptionUpdateConfirm {
                interface Discount {
                    /**
                     * The ID of the coupon to apply to this subscription update.
                     */
                    coupon: string | null;
                    /**
                     * The ID of a promotion code to apply to this subscription update.
                     */
                    promotion_code: string | null;
                }
                interface Item {
                    /**
                     * The ID of the [subscription item](https://stripe.com/docs/api/subscriptions/object#subscription_object-items-data-id) to be updated.
                     */
                    id: string | null;
                    /**
                     * The price the customer should subscribe to through this flow. The price must also be included in the configuration's [`features.subscription_update.products`](https://stripe.com/docs/api/customer_portal/configuration#portal_configuration_object-features-subscription_update-products).
                     */
                    price: string | null;
                    /**
                     * [Quantity](https://stripe.com/docs/subscriptions/quantities) for this item that the customer should subscribe to through this flow.
                     */
                    quantity?: number;
                }
            }
        }
    }
}
export declare namespace BillingPortal {
    interface SessionCreateParams {
        /**
         * The ID of an existing customer.
         */
        customer: string;
        /**
         * The ID of an existing [configuration](https://stripe.com/docs/api/customer_portal/configuration) to use for this session, describing its functionality and features. If not specified, the session uses the default configuration.
         */
        configuration?: string;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Information about a specific flow for the customer to go through. See the [docs](https://stripe.com/docs/customer-management/portal-deep-links) to learn more about using customer portal deep links and flows.
         */
        flow_data?: SessionCreateParams.FlowData;
        /**
         * The IETF language tag of the locale customer portal is displayed in. If blank or auto, the customer's `preferred_locales` or browser's locale is used.
         */
        locale?: SessionCreateParams.Locale;
        /**
         * The `on_behalf_of` account to use for this session. When specified, only subscriptions and invoices with this `on_behalf_of` account appear in the portal. For more information, see the [docs](https://stripe.com/docs/connect/separate-charges-and-transfers#settlement-merchant). Use the [Accounts API](https://stripe.com/docs/api/accounts/object#account_object-settings-branding) to modify the `on_behalf_of` account's branding settings, which the portal displays.
         */
        on_behalf_of?: string;
        /**
         * The default URL to redirect customers to when they click on the portal's link to return to your website.
         */
        return_url?: string;
    }
    namespace SessionCreateParams {
        interface FlowData {
            /**
             * Behavior after the flow is completed.
             */
            after_completion?: FlowData.AfterCompletion;
            /**
             * Configuration when `flow_data.type=subscription_cancel`.
             */
            subscription_cancel?: FlowData.SubscriptionCancel;
            /**
             * Configuration when `flow_data.type=subscription_update`.
             */
            subscription_update?: FlowData.SubscriptionUpdate;
            /**
             * Configuration when `flow_data.type=subscription_update_confirm`.
             */
            subscription_update_confirm?: FlowData.SubscriptionUpdateConfirm;
            /**
             * Type of flow that the customer will go through.
             */
            type: FlowData.Type;
        }
        type Locale = 'auto' | 'bg' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'en-AU' | 'en-CA' | 'en-GB' | 'en-IE' | 'en-IN' | 'en-NZ' | 'en-SG' | 'es' | 'es-419' | 'et' | 'fi' | 'fil' | 'fr' | 'fr-CA' | 'hr' | 'hu' | 'id' | 'it' | 'ja' | 'ko' | 'lt' | 'lv' | 'ms' | 'mt' | 'nb' | 'nl' | 'pl' | 'pt' | 'pt-BR' | 'ro' | 'ru' | 'sk' | 'sl' | 'sv' | 'th' | 'tr' | 'vi' | 'zh' | 'zh-HK' | 'zh-TW';
        namespace FlowData {
            interface AfterCompletion {
                /**
                 * Configuration when `after_completion.type=hosted_confirmation`.
                 */
                hosted_confirmation?: AfterCompletion.HostedConfirmation;
                /**
                 * Configuration when `after_completion.type=redirect`.
                 */
                redirect?: AfterCompletion.Redirect;
                /**
                 * The specified behavior after the flow is completed.
                 */
                type: AfterCompletion.Type;
            }
            interface SubscriptionCancel {
                /**
                 * Specify a retention strategy to be used in the cancellation flow.
                 */
                retention?: SubscriptionCancel.Retention;
                /**
                 * The ID of the subscription to be canceled.
                 */
                subscription: string;
            }
            interface SubscriptionUpdate {
                /**
                 * The ID of the subscription to be updated.
                 */
                subscription: string;
            }
            interface SubscriptionUpdateConfirm {
                /**
                 * The coupon or promotion code to apply to this subscription update.
                 */
                discounts?: Array<SubscriptionUpdateConfirm.Discount>;
                /**
                 * The [subscription item](https://stripe.com/docs/api/subscription_items) to be updated through this flow. Currently, only up to one may be specified and subscriptions with multiple items are not updatable.
                 */
                items: Array<SubscriptionUpdateConfirm.Item>;
                /**
                 * The ID of the subscription to be updated.
                 */
                subscription: string;
            }
            type Type = 'payment_method_update' | 'subscription_cancel' | 'subscription_update' | 'subscription_update_confirm';
            namespace AfterCompletion {
                interface HostedConfirmation {
                    /**
                     * A custom message to display to the customer after the flow is completed.
                     */
                    custom_message?: string;
                }
                interface Redirect {
                    /**
                     * The URL the customer will be redirected to after the flow is completed.
                     */
                    return_url: string;
                }
                type Type = 'hosted_confirmation' | 'portal_homepage' | 'redirect';
            }
            namespace SubscriptionCancel {
                interface Retention {
                    /**
                     * Configuration when `retention.type=coupon_offer`.
                     */
                    coupon_offer: Retention.CouponOffer;
                    /**
                     * Type of retention strategy to use with the customer.
                     */
                    type: 'coupon_offer';
                }
                namespace Retention {
                    interface CouponOffer {
                        /**
                         * The ID of the coupon to be offered.
                         */
                        coupon: string;
                    }
                }
            }
            namespace SubscriptionUpdateConfirm {
                interface Discount {
                    /**
                     * The ID of the coupon to apply to this subscription update.
                     */
                    coupon?: string;
                    /**
                     * The ID of a promotion code to apply to this subscription update.
                     */
                    promotion_code?: string;
                }
                interface Item {
                    /**
                     * The ID of the [subscription item](https://stripe.com/docs/api/subscriptions/object#subscription_object-items-data-id) to be updated.
                     */
                    id: string;
                    /**
                     * The price the customer should subscribe to through this flow. The price must also be included in the configuration's [`features.subscription_update.products`](https://stripe.com/docs/api/customer_portal/configuration#portal_configuration_object-features-subscription_update-products).
                     */
                    price?: string;
                    /**
                     * [Quantity](https://stripe.com/docs/subscriptions/quantities) for this item that the customer should subscribe to through this flow.
                     */
                    quantity?: number;
                }
            }
        }
    }
}
