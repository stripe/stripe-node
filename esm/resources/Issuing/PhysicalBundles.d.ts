import { StripeResource } from '../../StripeResource.js';
import { PaginationParams } from '../../shared.js';
import { RequestOptions, ApiListPromise, Response } from '../../lib.js';
export declare class PhysicalBundleResource extends StripeResource {
    /**
     * Returns a list of physical bundle objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    list(params?: Issuing.PhysicalBundleListParams, options?: RequestOptions): ApiListPromise<PhysicalBundle>;
    list(options?: RequestOptions): ApiListPromise<PhysicalBundle>;
    /**
     * Retrieves a physical bundle object.
     */
    retrieve(id: string, params?: Issuing.PhysicalBundleRetrieveParams, options?: RequestOptions): Promise<Response<PhysicalBundle>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<PhysicalBundle>>;
}
export interface PhysicalBundle {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'issuing.physical_bundle';
    features: Issuing.PhysicalBundle.Features;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Friendly display name.
     */
    name: string;
    /**
     * Whether this physical bundle can be used to create cards.
     */
    status: Issuing.PhysicalBundle.Status;
    /**
     * Whether this physical bundle is a standard Stripe offering or custom-made for you.
     */
    type: Issuing.PhysicalBundle.Type;
}
export declare namespace Issuing {
    namespace PhysicalBundle {
        interface Features {
            /**
             * The policy for how to use card logo images in a card design with this physical bundle.
             */
            card_logo: Features.CardLogo;
            /**
             * The policy for how to use carrier letter text in a card design with this physical bundle.
             */
            carrier_text: Features.CarrierText;
            /**
             * The policy for how to use a second line on a card with this physical bundle.
             */
            second_line: Features.SecondLine;
        }
        type Status = 'active' | 'inactive' | 'review';
        type Type = 'custom' | 'standard';
        namespace Features {
            type CardLogo = 'optional' | 'required' | 'unsupported';
            type CarrierText = 'optional' | 'required' | 'unsupported';
            type SecondLine = 'optional' | 'required' | 'unsupported';
        }
    }
}
export declare namespace Issuing {
    interface PhysicalBundleRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Issuing {
    interface PhysicalBundleListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Only return physical bundles with the given status.
         */
        status?: PhysicalBundleListParams.Status;
        /**
         * Only return physical bundles with the given type.
         */
        type?: PhysicalBundleListParams.Type;
    }
    namespace PhysicalBundleListParams {
        type Status = 'active' | 'inactive' | 'review';
        type Type = 'custom' | 'standard';
    }
}
