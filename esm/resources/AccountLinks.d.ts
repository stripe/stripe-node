import { StripeResource } from '../StripeResource.js';
import { RequestOptions } from '../Types.js';
import { Response } from '../lib.js';
export declare class AccountLinkResource extends StripeResource {
    /**
     * Creates an AccountLink object that includes a single-use Stripe URL that the platform can redirect their user to in order to take them through the Connect Onboarding flow.
     */
    create(params: AccountLinkCreateParams, options?: RequestOptions): Promise<Response<AccountLink>>;
}
export /**
 * Account Links are the means by which a Connect platform grants a connected account permission to access
 * Stripe-hosted applications, such as Connect Onboarding.
 *
 * Related guide: [Connect Onboarding](https://stripe.com/docs/connect/custom/hosted-onboarding)
 */ interface AccountLink {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'account_link';
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The timestamp at which this account link will expire.
     */
    expires_at: number;
    /**
     * The URL for the account link.
     */
    url: string;
}
export interface AccountLinkCreateParams {
    /**
     * The identifier of the account to create an account link for.
     */
    account: string;
    /**
     * The type of account link the user is requesting.
     *
     * You can create Account Links of type `account_update` only for connected accounts where your platform is responsible for collecting requirements, including Custom accounts. You can't create them for accounts that have access to a Stripe-hosted Dashboard. If you use [Connect embedded components](https://docs.stripe.com/connect/get-started-connect-embedded-components), you can include components that allow your connected accounts to update their own information. For an account without Stripe-hosted Dashboard access where Stripe is liable for negative balances, you must use embedded components.
     */
    type: AccountLinkCreateParams.Type;
    /**
     * The collect parameter is deprecated. Use `collection_options` instead.
     */
    collect?: AccountLinkCreateParams.Collect;
    /**
     * Specifies the requirements that Stripe collects from connected accounts in the Connect Onboarding flow.
     */
    collection_options?: AccountLinkCreateParams.CollectionOptions;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * The URL the user will be redirected to if the account link is expired, has been previously-visited, or is otherwise invalid. The URL you specify should attempt to generate a new account link with the same parameters used to create the original account link, then redirect the user to the new account link's URL so they can continue with Connect Onboarding. If a new account link cannot be generated or the redirect fails you should display a useful error to the user.
     */
    refresh_url?: string;
    /**
     * The URL that the user will be redirected to upon leaving or completing the linked flow.
     */
    return_url?: string;
}
export declare namespace AccountLinkCreateParams {
    type Type = 'account_onboarding' | 'account_update';
    type Collect = 'currently_due' | 'eventually_due';
    interface CollectionOptions {
        /**
         * Specifies whether the platform collects only currently_due requirements (`currently_due`) or both currently_due and eventually_due requirements (`eventually_due`). If you don't specify `collection_options`, the default value is `currently_due`.
         */
        fields?: CollectionOptions.Fields;
        /**
         * Specifies whether the platform collects future_requirements in addition to requirements in Connect Onboarding. The default value is `omit`.
         */
        future_requirements?: CollectionOptions.FutureRequirements;
    }
    namespace CollectionOptions {
        type Fields = 'currently_due' | 'eventually_due';
        type FutureRequirements = 'include' | 'omit';
    }
}
