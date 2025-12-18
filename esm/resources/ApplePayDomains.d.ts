import { StripeResource } from '../StripeResource.js';
import { RequestOptions } from '../Types.js';
import { PaginationParams } from '../shared.js';
import { Response, ApiListPromise } from '../lib.js';
export declare class ApplePayDomainResource extends StripeResource {
    /**
     * Delete an apple pay domain.
     */
    del(id: string, params?: ApplePayDomainDeleteParams, options?: RequestOptions): Promise<Response<DeletedApplePayDomain>>;
    del(id: string, options?: RequestOptions): Promise<Response<DeletedApplePayDomain>>;
    /**
     * Retrieve an apple pay domain.
     */
    retrieve(id: string, params?: ApplePayDomainRetrieveParams, options?: RequestOptions): Promise<Response<ApplePayDomain>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<ApplePayDomain>>;
    /**
     * List apple pay domains.
     */
    list(params?: ApplePayDomainListParams, options?: RequestOptions): ApiListPromise<ApplePayDomain>;
    list(options?: RequestOptions): ApiListPromise<ApplePayDomain>;
    /**
     * Create an apple pay domain.
     */
    create(params: ApplePayDomainCreateParams, options?: RequestOptions): Promise<Response<ApplePayDomain>>;
}
export /**
 * The ApplePayDomain object.
 */ interface ApplePayDomain {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'apple_pay_domain';
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Always true for a deleted object
     */
    deleted?: void;
    domain_name: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
}
export /**
 * The DeletedApplePayDomain object.
 */ interface DeletedApplePayDomain {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'apple_pay_domain';
    /**
     * Always true for a deleted object
     */
    deleted: true;
}
export interface ApplePayDomainCreateParams {
    domain_name: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface ApplePayDomainRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface ApplePayDomainListParams extends PaginationParams {
    domain_name?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface ApplePayDomainDeleteParams {
}
