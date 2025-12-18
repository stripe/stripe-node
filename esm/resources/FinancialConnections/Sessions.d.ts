import { StripeResource } from '../../StripeResource.js';
import { RequestOptions } from '../../Types.js';
import { Account } from './Accounts.js';
import { Customer } from './../Customers.js';
import { Response, ApiList } from '../../lib.js';
export declare class SessionResource extends StripeResource {
    /**
     * Retrieves the details of a Financial Connections Session
     */
    retrieve(id: string, params?: FinancialConnections.SessionRetrieveParams, options?: RequestOptions): Promise<Response<Session>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<Session>>;
    /**
     * To launch the Financial Connections authorization flow, create a Session. The session's client_secret can be used to launch the flow using Stripe.js.
     */
    create(params: FinancialConnections.SessionCreateParams, options?: RequestOptions): Promise<Response<Session>>;
}
export /**
 * A Financial Connections Session is the secure way to programmatically launch the client-side Stripe.js modal that lets your users link their accounts.
 */ interface Session {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'financial_connections.session';
    /**
     * The account holder for whom accounts are collected in this session.
     */
    account_holder: FinancialConnections.Session.AccountHolder | null;
    /**
     * The accounts that were collected as part of this Session.
     */
    accounts: ApiList<Account>;
    /**
     * A value that will be passed to the client to launch the authentication flow.
     */
    client_secret: string;
    filters?: FinancialConnections.Session.Filters;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Permissions requested for accounts collected during this session.
     */
    permissions: Array<FinancialConnections.Session.Permission>;
    /**
     * Data features requested to be retrieved upon account creation.
     */
    prefetch: Array<FinancialConnections.Session.Prefetch> | null;
    /**
     * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
     */
    return_url?: string;
}
export declare namespace FinancialConnections {
    namespace Session {
        interface AccountHolder {
            /**
             * The ID of the Stripe account this account belongs to. Should only be present if `account_holder.type` is `account`.
             */
            account?: string | Account;
            /**
             * ID of the Stripe customer this account belongs to. Present if and only if `account_holder.type` is `customer`.
             */
            customer?: string | Customer;
            /**
             * Type of account holder that this account belongs to.
             */
            type: AccountHolder.Type;
        }
        interface Filters {
            /**
             * Restricts the Session to subcategories of accounts that can be linked. Valid subcategories are: `checking`, `savings`, `mortgage`, `line_of_credit`, `credit_card`.
             */
            account_subcategories: Array<Filters.AccountSubcategory> | null;
            /**
             * List of countries from which to filter accounts.
             */
            countries: Array<string> | null;
        }
        type Permission = 'balances' | 'ownership' | 'payment_method' | 'transactions';
        type Prefetch = 'balances' | 'ownership' | 'transactions';
        namespace AccountHolder {
            type Type = 'account' | 'customer';
        }
        namespace Filters {
            type AccountSubcategory = 'checking' | 'credit_card' | 'line_of_credit' | 'mortgage' | 'savings';
        }
    }
}
export declare namespace FinancialConnections {
    interface SessionCreateParams {
        /**
         * The account holder to link accounts for.
         */
        account_holder: SessionCreateParams.AccountHolder;
        /**
         * List of data features that you would like to request access to.
         *
         * Possible values are `balances`, `transactions`, `ownership`, and `payment_method`.
         */
        permissions: Array<SessionCreateParams.Permission>;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Filters to restrict the kinds of accounts to collect.
         */
        filters?: SessionCreateParams.Filters;
        /**
         * List of data features that you would like to retrieve upon account creation.
         */
        prefetch?: Array<SessionCreateParams.Prefetch>;
        /**
         * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
         */
        return_url?: string;
    }
    namespace SessionCreateParams {
        interface AccountHolder {
            /**
             * The ID of the Stripe account whose accounts will be retrieved. Should only be present if `type` is `account`.
             */
            account?: string;
            /**
             * The ID of the Stripe customer whose accounts will be retrieved. Should only be present if `type` is `customer`.
             */
            customer?: string;
            /**
             * Type of account holder to collect accounts for.
             */
            type: AccountHolder.Type;
        }
        type Permission = 'balances' | 'ownership' | 'payment_method' | 'transactions';
        interface Filters {
            /**
             * Restricts the Session to subcategories of accounts that can be linked. Valid subcategories are: `checking`, `savings`, `mortgage`, `line_of_credit`, `credit_card`.
             */
            account_subcategories?: Array<Filters.AccountSubcategory>;
            /**
             * List of countries from which to collect accounts.
             */
            countries?: Array<string>;
        }
        type Prefetch = 'balances' | 'ownership' | 'transactions';
        namespace AccountHolder {
            type Type = 'account' | 'customer';
        }
        namespace Filters {
            type AccountSubcategory = 'checking' | 'credit_card' | 'line_of_credit' | 'mortgage' | 'savings';
        }
    }
}
export declare namespace FinancialConnections {
    interface SessionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
