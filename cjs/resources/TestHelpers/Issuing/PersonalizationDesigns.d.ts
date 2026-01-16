import { StripeResource } from '../../../StripeResource.js';
import { PersonalizationDesign } from './../../Issuing/PersonalizationDesigns.js';
import { RequestOptions, Response } from '../../../lib.js';
export declare class PersonalizationDesignResource extends StripeResource {
    /**
     * Updates the status of the specified testmode personalization design object to active.
     */
    activate(id: string, params?: TestHelpers.Issuing.PersonalizationDesignActivateParams, options?: RequestOptions): Promise<Response<PersonalizationDesign>>;
    activate(id: string, options?: RequestOptions): Promise<Response<PersonalizationDesign>>;
    /**
     * Updates the status of the specified testmode personalization design object to inactive.
     */
    deactivate(id: string, params?: TestHelpers.Issuing.PersonalizationDesignDeactivateParams, options?: RequestOptions): Promise<Response<PersonalizationDesign>>;
    deactivate(id: string, options?: RequestOptions): Promise<Response<PersonalizationDesign>>;
    /**
     * Updates the status of the specified testmode personalization design object to rejected.
     */
    reject(id: string, params: TestHelpers.Issuing.PersonalizationDesignRejectParams, options?: RequestOptions): Promise<Response<PersonalizationDesign>>;
}
export declare namespace TestHelpers {
    namespace Issuing {
        interface PersonalizationDesignActivateParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }
    }
}
export declare namespace TestHelpers {
    namespace Issuing {
        interface PersonalizationDesignDeactivateParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }
    }
}
export declare namespace TestHelpers {
    namespace Issuing {
        interface PersonalizationDesignRejectParams {
            /**
             * The reason(s) the personalization design was rejected.
             */
            rejection_reasons: PersonalizationDesignRejectParams.RejectionReasons;
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }
        namespace PersonalizationDesignRejectParams {
            interface RejectionReasons {
                /**
                 * The reason(s) the card logo was rejected.
                 */
                card_logo?: Array<RejectionReasons.CardLogo>;
                /**
                 * The reason(s) the carrier text was rejected.
                 */
                carrier_text?: Array<RejectionReasons.CarrierText>;
            }
            namespace RejectionReasons {
                type CardLogo = 'geographic_location' | 'inappropriate' | 'network_name' | 'non_binary_image' | 'non_fiat_currency' | 'other' | 'other_entity' | 'promotional_material';
                type CarrierText = 'geographic_location' | 'inappropriate' | 'network_name' | 'non_fiat_currency' | 'other' | 'other_entity' | 'promotional_material';
            }
        }
    }
}
