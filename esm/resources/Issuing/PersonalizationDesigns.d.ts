import { StripeResource } from '../../StripeResource.js';
import { RequestOptions } from '../../Types.js';
import { File } from './../Files.js';
import { PhysicalBundle } from './PhysicalBundles.js';
import { MetadataParam, Emptyable, PaginationParams, Metadata } from '../../shared.js';
import { ApiListPromise, Response } from '../../lib.js';
export declare class PersonalizationDesignResource extends StripeResource {
    /**
     * Returns a list of personalization design objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    list(params?: Issuing.PersonalizationDesignListParams, options?: RequestOptions): ApiListPromise<PersonalizationDesign>;
    list(options?: RequestOptions): ApiListPromise<PersonalizationDesign>;
    /**
     * Creates a personalization design object.
     */
    create(params: Issuing.PersonalizationDesignCreateParams, options?: RequestOptions): Promise<Response<PersonalizationDesign>>;
    /**
     * Retrieves a personalization design object.
     */
    retrieve(id: string, params?: Issuing.PersonalizationDesignRetrieveParams, options?: RequestOptions): Promise<Response<PersonalizationDesign>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<PersonalizationDesign>>;
    /**
     * Updates a card personalization object.
     */
    update(id: string, params?: Issuing.PersonalizationDesignUpdateParams, options?: RequestOptions): Promise<Response<PersonalizationDesign>>;
}
export /**
 * A Personalization Design is a logical grouping of a Physical Bundle, card logo, and carrier text that represents a product line.
 */ interface PersonalizationDesign {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'issuing.personalization_design';
    /**
     * The file for the card logo to use with physical bundles that support card logos. Must have a `purpose` value of `issuing_logo`.
     */
    card_logo: string | File | null;
    /**
     * Hash containing carrier text, for use with physical bundles that support carrier text.
     */
    carrier_text: Issuing.PersonalizationDesign.CarrierText | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * A lookup key used to retrieve personalization designs dynamically from a static string. This may be up to 200 characters.
     */
    lookup_key: string | null;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Metadata;
    /**
     * Friendly display name.
     */
    name: string | null;
    /**
     * The physical bundle object belonging to this personalization design.
     */
    physical_bundle: string | PhysicalBundle;
    preferences: Issuing.PersonalizationDesign.Preferences;
    rejection_reasons: Issuing.PersonalizationDesign.RejectionReasons;
    /**
     * Whether this personalization design can be used to create cards.
     */
    status: Issuing.PersonalizationDesign.Status;
}
export declare namespace Issuing {
    namespace PersonalizationDesign {
        interface CarrierText {
            /**
             * The footer body text of the carrier letter.
             */
            footer_body: string | null;
            /**
             * The footer title text of the carrier letter.
             */
            footer_title: string | null;
            /**
             * The header body text of the carrier letter.
             */
            header_body: string | null;
            /**
             * The header title text of the carrier letter.
             */
            header_title: string | null;
        }
        interface Preferences {
            /**
             * Whether we use this personalization design to create cards when one isn't specified. A connected account uses the Connect platform's default design if no personalization design is set as the default design.
             */
            is_default: boolean;
            /**
             * Whether this personalization design is used to create cards when one is not specified and a default for this connected account does not exist.
             */
            is_platform_default: boolean | null;
        }
        interface RejectionReasons {
            /**
             * The reason(s) the card logo was rejected.
             */
            card_logo: Array<RejectionReasons.CardLogo> | null;
            /**
             * The reason(s) the carrier text was rejected.
             */
            carrier_text: Array<RejectionReasons.CarrierText> | null;
        }
        type Status = 'active' | 'inactive' | 'rejected' | 'review';
        namespace RejectionReasons {
            type CardLogo = 'geographic_location' | 'inappropriate' | 'network_name' | 'non_binary_image' | 'non_fiat_currency' | 'other' | 'other_entity' | 'promotional_material';
            type CarrierText = 'geographic_location' | 'inappropriate' | 'network_name' | 'non_fiat_currency' | 'other' | 'other_entity' | 'promotional_material';
        }
    }
}
export declare namespace Issuing {
    interface PersonalizationDesignCreateParams {
        /**
         * The physical bundle object belonging to this personalization design.
         */
        physical_bundle: string;
        /**
         * The file for the card logo, for use with physical bundles that support card logos. Must have a `purpose` value of `issuing_logo`.
         */
        card_logo?: string;
        /**
         * Hash containing carrier text, for use with physical bundles that support carrier text.
         */
        carrier_text?: PersonalizationDesignCreateParams.CarrierText;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * A lookup key used to retrieve personalization designs dynamically from a static string. This may be up to 200 characters.
         */
        lookup_key?: string;
        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;
        /**
         * Friendly display name.
         */
        name?: string;
        /**
         * Information on whether this personalization design is used to create cards when one is not specified.
         */
        preferences?: PersonalizationDesignCreateParams.Preferences;
        /**
         * If set to true, will atomically remove the lookup key from the existing personalization design, and assign it to this personalization design.
         */
        transfer_lookup_key?: boolean;
    }
    namespace PersonalizationDesignCreateParams {
        interface CarrierText {
            /**
             * The footer body text of the carrier letter.
             */
            footer_body?: Emptyable<string>;
            /**
             * The footer title text of the carrier letter.
             */
            footer_title?: Emptyable<string>;
            /**
             * The header body text of the carrier letter.
             */
            header_body?: Emptyable<string>;
            /**
             * The header title text of the carrier letter.
             */
            header_title?: Emptyable<string>;
        }
        interface Preferences {
            /**
             * Whether we use this personalization design to create cards when one isn't specified. A connected account uses the Connect platform's default design if no personalization design is set as the default design.
             */
            is_default: boolean;
        }
    }
}
export declare namespace Issuing {
    interface PersonalizationDesignRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Issuing {
    interface PersonalizationDesignUpdateParams {
        /**
         * The file for the card logo, for use with physical bundles that support card logos. Must have a `purpose` value of `issuing_logo`.
         */
        card_logo?: Emptyable<string>;
        /**
         * Hash containing carrier text, for use with physical bundles that support carrier text.
         */
        carrier_text?: Emptyable<PersonalizationDesignUpdateParams.CarrierText>;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * A lookup key used to retrieve personalization designs dynamically from a static string. This may be up to 200 characters.
         */
        lookup_key?: Emptyable<string>;
        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;
        /**
         * Friendly display name. Providing an empty string will set the field to null.
         */
        name?: Emptyable<string>;
        /**
         * The physical bundle object belonging to this personalization design.
         */
        physical_bundle?: string;
        /**
         * Information on whether this personalization design is used to create cards when one is not specified.
         */
        preferences?: PersonalizationDesignUpdateParams.Preferences;
        /**
         * If set to true, will atomically remove the lookup key from the existing personalization design, and assign it to this personalization design.
         */
        transfer_lookup_key?: boolean;
    }
    namespace PersonalizationDesignUpdateParams {
        interface CarrierText {
            /**
             * The footer body text of the carrier letter.
             */
            footer_body?: Emptyable<string>;
            /**
             * The footer title text of the carrier letter.
             */
            footer_title?: Emptyable<string>;
            /**
             * The header body text of the carrier letter.
             */
            header_body?: Emptyable<string>;
            /**
             * The header title text of the carrier letter.
             */
            header_title?: Emptyable<string>;
        }
        interface Preferences {
            /**
             * Whether we use this personalization design to create cards when one isn't specified. A connected account uses the Connect platform's default design if no personalization design is set as the default design.
             */
            is_default: boolean;
        }
    }
}
export declare namespace Issuing {
    interface PersonalizationDesignListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Only return personalization designs with the given lookup keys.
         */
        lookup_keys?: Array<string>;
        /**
         * Only return personalization designs with the given preferences.
         */
        preferences?: PersonalizationDesignListParams.Preferences;
        /**
         * Only return personalization designs with the given status.
         */
        status?: PersonalizationDesignListParams.Status;
    }
    namespace PersonalizationDesignListParams {
        interface Preferences {
            /**
             * Only return the personalization design that's set as the default. A connected account uses the Connect platform's default design if no personalization design is set as the default.
             */
            is_default?: boolean;
            /**
             * Only return the personalization design that is set as the Connect platform's default. This parameter is only applicable to connected accounts.
             */
            is_platform_default?: boolean;
        }
        type Status = 'active' | 'inactive' | 'rejected' | 'review';
    }
}
