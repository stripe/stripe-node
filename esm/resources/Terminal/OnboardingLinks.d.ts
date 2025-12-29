import { StripeResource } from '../../StripeResource.js';
import { RequestOptions, Response } from '../../lib.js';
export declare class OnboardingLinkResource extends StripeResource {
    /**
     * Creates a new OnboardingLink object that contains a redirect_url used for onboarding onto Tap to Pay on iPhone.
     */
    create(params: Terminal.OnboardingLinkCreateParams, options?: RequestOptions): Promise<Response<OnboardingLink>>;
}
export interface OnboardingLink {
    object: 'terminal.onboarding_link';
    /**
     * Link type options associated with the current onboarding link object.
     */
    link_options: Terminal.OnboardingLink.LinkOptions;
    /**
     * The type of link being generated.
     */
    link_type: 'apple_terms_and_conditions';
    /**
     * Stripe account ID to generate the link for.
     */
    on_behalf_of: string | null;
    /**
     * The link passed back to the user for their onboarding.
     */
    redirect_url: string;
}
export declare namespace Terminal {
    namespace OnboardingLink {
        interface LinkOptions {
            /**
             * The options associated with the Apple Terms and Conditions link type.
             */
            apple_terms_and_conditions: LinkOptions.AppleTermsAndConditions | null;
        }
        namespace LinkOptions {
            interface AppleTermsAndConditions {
                /**
                 * Whether the link should also support users relinking their Apple account.
                 */
                allow_relinking: boolean | null;
                /**
                 * The business name of the merchant accepting Apple's Terms and Conditions.
                 */
                merchant_display_name: string;
            }
        }
    }
}
export declare namespace Terminal {
    interface OnboardingLinkCreateParams {
        /**
         * Specific fields needed to generate the desired link type.
         */
        link_options: OnboardingLinkCreateParams.LinkOptions;
        /**
         * The type of link being generated.
         */
        link_type: 'apple_terms_and_conditions';
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Stripe account ID to generate the link for.
         */
        on_behalf_of?: string;
    }
    namespace OnboardingLinkCreateParams {
        interface LinkOptions {
            /**
             * The options associated with the Apple Terms and Conditions link type.
             */
            apple_terms_and_conditions?: LinkOptions.AppleTermsAndConditions;
        }
        namespace LinkOptions {
            interface AppleTermsAndConditions {
                /**
                 * Whether the link should also support users relinking their Apple account.
                 */
                allow_relinking?: boolean;
                /**
                 * The business name of the merchant accepting Apple's Terms and Conditions.
                 */
                merchant_display_name: string;
            }
        }
    }
}
