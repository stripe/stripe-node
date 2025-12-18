import { StripeResource } from '../StripeResource.js';
import { RequestOptions } from '../Types.js';
import { PaginationParams } from '../shared.js';
import { ApiListPromise, Response } from '../lib.js';
export declare class PaymentMethodDomainResource extends StripeResource {
    /**
     * Lists the details of existing payment method domains.
     */
    list(params?: PaymentMethodDomainListParams, options?: RequestOptions): ApiListPromise<PaymentMethodDomain>;
    list(options?: RequestOptions): ApiListPromise<PaymentMethodDomain>;
    /**
     * Creates a payment method domain.
     */
    create(params: PaymentMethodDomainCreateParams, options?: RequestOptions): Promise<Response<PaymentMethodDomain>>;
    /**
     * Retrieves the details of an existing payment method domain.
     */
    retrieve(id: string, params?: PaymentMethodDomainRetrieveParams, options?: RequestOptions): Promise<Response<PaymentMethodDomain>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<PaymentMethodDomain>>;
    /**
     * Updates an existing payment method domain.
     */
    update(id: string, params?: PaymentMethodDomainUpdateParams, options?: RequestOptions): Promise<Response<PaymentMethodDomain>>;
    /**
     * Some payment methods might require additional steps to register a domain. If the requirements weren't satisfied when the domain was created, the payment method will be inactive on the domain.
     * The payment method doesn't appear in Elements or Embedded Checkout for this domain until it is active.
     *
     * To activate a payment method on an existing payment method domain, complete the required registration steps specific to the payment method, and then validate the payment method domain with this endpoint.
     *
     * Related guides: [Payment method domains](https://docs.stripe.com/docs/payments/payment-methods/pmd-registration).
     */
    validate(id: string, params?: PaymentMethodDomainValidateParams, options?: RequestOptions): Promise<Response<PaymentMethodDomain>>;
    validate(id: string, options?: RequestOptions): Promise<Response<PaymentMethodDomain>>;
}
export /**
 * A payment method domain represents a web domain that you have registered with Stripe.
 * Stripe Elements use registered payment method domains to control where certain payment methods are shown.
 *
 * Related guide: [Payment method domains](https://stripe.com/docs/payments/payment-methods/pmd-registration).
 */ interface PaymentMethodDomain {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'payment_method_domain';
    /**
     * Indicates the status of a specific payment method on a payment method domain.
     */
    amazon_pay: PaymentMethodDomain.AmazonPay;
    /**
     * Indicates the status of a specific payment method on a payment method domain.
     */
    apple_pay: PaymentMethodDomain.ApplePay;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The domain name that this payment method domain object represents.
     */
    domain_name: string;
    /**
     * Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements.
     */
    enabled: boolean;
    /**
     * Indicates the status of a specific payment method on a payment method domain.
     */
    google_pay: PaymentMethodDomain.GooglePay;
    /**
     * Indicates the status of a specific payment method on a payment method domain.
     */
    klarna: PaymentMethodDomain.Klarna;
    /**
     * Indicates the status of a specific payment method on a payment method domain.
     */
    link: PaymentMethodDomain.Link;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Indicates the status of a specific payment method on a payment method domain.
     */
    paypal: PaymentMethodDomain.Paypal;
}
export declare namespace PaymentMethodDomain {
    interface AmazonPay {
        /**
         * The status of the payment method on the domain.
         */
        status: AmazonPay.Status;
        /**
         * Contains additional details about the status of a payment method for a specific payment method domain.
         */
        status_details?: AmazonPay.StatusDetails;
    }
    interface ApplePay {
        /**
         * The status of the payment method on the domain.
         */
        status: ApplePay.Status;
        /**
         * Contains additional details about the status of a payment method for a specific payment method domain.
         */
        status_details?: ApplePay.StatusDetails;
    }
    interface GooglePay {
        /**
         * The status of the payment method on the domain.
         */
        status: GooglePay.Status;
        /**
         * Contains additional details about the status of a payment method for a specific payment method domain.
         */
        status_details?: GooglePay.StatusDetails;
    }
    interface Klarna {
        /**
         * The status of the payment method on the domain.
         */
        status: Klarna.Status;
        /**
         * Contains additional details about the status of a payment method for a specific payment method domain.
         */
        status_details?: Klarna.StatusDetails;
    }
    interface Link {
        /**
         * The status of the payment method on the domain.
         */
        status: Link.Status;
        /**
         * Contains additional details about the status of a payment method for a specific payment method domain.
         */
        status_details?: Link.StatusDetails;
    }
    interface Paypal {
        /**
         * The status of the payment method on the domain.
         */
        status: Paypal.Status;
        /**
         * Contains additional details about the status of a payment method for a specific payment method domain.
         */
        status_details?: Paypal.StatusDetails;
    }
    namespace AmazonPay {
        type Status = 'active' | 'inactive';
        interface StatusDetails {
            /**
             * The error message associated with the status of the payment method on the domain.
             */
            error_message: string;
        }
    }
    namespace ApplePay {
        type Status = 'active' | 'inactive';
        interface StatusDetails {
            /**
             * The error message associated with the status of the payment method on the domain.
             */
            error_message: string;
        }
    }
    namespace GooglePay {
        type Status = 'active' | 'inactive';
        interface StatusDetails {
            /**
             * The error message associated with the status of the payment method on the domain.
             */
            error_message: string;
        }
    }
    namespace Klarna {
        type Status = 'active' | 'inactive';
        interface StatusDetails {
            /**
             * The error message associated with the status of the payment method on the domain.
             */
            error_message: string;
        }
    }
    namespace Link {
        type Status = 'active' | 'inactive';
        interface StatusDetails {
            /**
             * The error message associated with the status of the payment method on the domain.
             */
            error_message: string;
        }
    }
    namespace Paypal {
        type Status = 'active' | 'inactive';
        interface StatusDetails {
            /**
             * The error message associated with the status of the payment method on the domain.
             */
            error_message: string;
        }
    }
}
export interface PaymentMethodDomainCreateParams {
    /**
     * The domain name that this payment method domain object represents.
     */
    domain_name: string;
    /**
     * Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements or Embedded Checkout.
     */
    enabled?: boolean;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface PaymentMethodDomainRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface PaymentMethodDomainUpdateParams {
    /**
     * Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements or Embedded Checkout.
     */
    enabled?: boolean;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface PaymentMethodDomainListParams extends PaginationParams {
    /**
     * The domain name that this payment method domain object represents.
     */
    domain_name?: string;
    /**
     * Whether this payment method domain is enabled. If the domain is not enabled, payment methods will not appear in Elements or Embedded Checkout
     */
    enabled?: boolean;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface PaymentMethodDomainValidateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
