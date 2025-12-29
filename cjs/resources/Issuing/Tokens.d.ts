import { StripeResource } from '../../StripeResource.js';
import { Card } from './Cards.js';
import { PaginationParams, RangeQueryParam } from '../../shared.js';
import { RequestOptions, ApiListPromise, Response } from '../../lib.js';
export declare class TokenResource extends StripeResource {
    /**
     * Lists all Issuing Token objects for a given card.
     */
    list(params: Issuing.TokenListParams, options?: RequestOptions): ApiListPromise<Token>;
    /**
     * Retrieves an Issuing Token object.
     */
    retrieve(id: string, params?: Issuing.TokenRetrieveParams, options?: RequestOptions): Promise<Response<Token>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<Token>>;
    /**
     * Attempts to update the specified Issuing Token object to the status specified.
     */
    update(id: string, params: Issuing.TokenUpdateParams, options?: RequestOptions): Promise<Response<Token>>;
}
export interface Token {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'issuing.token';
    /**
     * Card associated with this token.
     */
    card: string | Card;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The hashed ID derived from the device ID from the card network associated with the token.
     */
    device_fingerprint: string | null;
    /**
     * The last four digits of the token.
     */
    last4?: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The token service provider / card network associated with the token.
     */
    network: Issuing.Token.Network;
    network_data?: Issuing.Token.NetworkData;
    /**
     * Time at which the token was last updated by the card network. Measured in seconds since the Unix epoch.
     */
    network_updated_at: number;
    /**
     * The usage state of the token.
     */
    status: Issuing.Token.Status;
    /**
     * The digital wallet for this token, if one was used.
     */
    wallet_provider?: Issuing.Token.WalletProvider;
}
export declare namespace Issuing {
    namespace Token {
        type Network = 'mastercard' | 'visa';
        interface NetworkData {
            device?: NetworkData.Device;
            mastercard?: NetworkData.Mastercard;
            /**
             * The network that the token is associated with. An additional hash is included with a name matching this value, containing tokenization data specific to the card network.
             */
            type: NetworkData.Type;
            visa?: NetworkData.Visa;
            wallet_provider?: NetworkData.WalletProvider;
        }
        type Status = 'active' | 'deleted' | 'requested' | 'suspended';
        type WalletProvider = 'apple_pay' | 'google_pay' | 'samsung_pay';
        namespace NetworkData {
            interface Device {
                /**
                 * An obfuscated ID derived from the device ID.
                 */
                device_fingerprint?: string;
                /**
                 * The IP address of the device at provisioning time.
                 */
                ip_address?: string;
                /**
                 * The geographic latitude/longitude coordinates of the device at provisioning time. The format is [+-]decimal/[+-]decimal.
                 */
                location?: string;
                /**
                 * The name of the device used for tokenization.
                 */
                name?: string;
                /**
                 * The phone number of the device used for tokenization.
                 */
                phone_number?: string;
                /**
                 * The type of device used for tokenization.
                 */
                type?: Device.Type;
            }
            interface Mastercard {
                /**
                 * A unique reference ID from MasterCard to represent the card account number.
                 */
                card_reference_id?: string;
                /**
                 * The network-unique identifier for the token.
                 */
                token_reference_id: string;
                /**
                 * The ID of the entity requesting tokenization, specific to MasterCard.
                 */
                token_requestor_id: string;
                /**
                 * The name of the entity requesting tokenization, if known. This is directly provided from MasterCard.
                 */
                token_requestor_name?: string;
            }
            type Type = 'mastercard' | 'visa';
            interface Visa {
                /**
                 * A unique reference ID from Visa to represent the card account number.
                 */
                card_reference_id: string;
                /**
                 * The network-unique identifier for the token.
                 */
                token_reference_id: string;
                /**
                 * The ID of the entity requesting tokenization, specific to Visa.
                 */
                token_requestor_id: string;
                /**
                 * Degree of risk associated with the token between `01` and `99`, with higher number indicating higher risk. A `00` value indicates the token was not scored by Visa.
                 */
                token_risk_score?: string;
            }
            interface WalletProvider {
                /**
                 * The wallet provider-given account ID of the digital wallet the token belongs to.
                 */
                account_id?: string;
                /**
                 * An evaluation on the trustworthiness of the wallet account between 1 and 5. A higher score indicates more trustworthy.
                 */
                account_trust_score?: number;
                /**
                 * The method used for tokenizing a card.
                 */
                card_number_source?: WalletProvider.CardNumberSource;
                cardholder_address?: WalletProvider.CardholderAddress;
                /**
                 * The name of the cardholder tokenizing the card.
                 */
                cardholder_name?: string;
                /**
                 * An evaluation on the trustworthiness of the device. A higher score indicates more trustworthy.
                 */
                device_trust_score?: number;
                /**
                 * The hashed email address of the cardholder's account with the wallet provider.
                 */
                hashed_account_email_address?: string;
                /**
                 * The reasons for suggested tokenization given by the card network.
                 */
                reason_codes?: Array<WalletProvider.ReasonCode>;
                /**
                 * The recommendation on responding to the tokenization request.
                 */
                suggested_decision?: WalletProvider.SuggestedDecision;
                /**
                 * The version of the standard for mapping reason codes followed by the wallet provider.
                 */
                suggested_decision_version?: string;
            }
            namespace Device {
                type Type = 'other' | 'phone' | 'watch';
            }
            namespace WalletProvider {
                type CardNumberSource = 'app' | 'manual' | 'on_file' | 'other';
                interface CardholderAddress {
                    /**
                     * The street address of the cardholder tokenizing the card.
                     */
                    line1: string;
                    /**
                     * The postal code of the cardholder tokenizing the card.
                     */
                    postal_code: string;
                }
                type ReasonCode = 'account_card_too_new' | 'account_recently_changed' | 'account_too_new' | 'account_too_new_since_launch' | 'additional_device' | 'data_expired' | 'defer_id_v_decision' | 'device_recently_lost' | 'good_activity_history' | 'has_suspended_tokens' | 'high_risk' | 'inactive_account' | 'long_account_tenure' | 'low_account_score' | 'low_device_score' | 'low_phone_number_score' | 'network_service_error' | 'outside_home_territory' | 'provisioning_cardholder_mismatch' | 'provisioning_device_and_cardholder_mismatch' | 'provisioning_device_mismatch' | 'same_device_no_prior_authentication' | 'same_device_successful_prior_authentication' | 'software_update' | 'suspicious_activity' | 'too_many_different_cardholders' | 'too_many_recent_attempts' | 'too_many_recent_tokens';
                type SuggestedDecision = 'approve' | 'decline' | 'require_auth';
            }
        }
    }
}
export declare namespace Issuing {
    interface TokenRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Issuing {
    interface TokenUpdateParams {
        /**
         * Specifies which status the token should be updated to.
         */
        status: TokenUpdateParams.Status;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
    namespace TokenUpdateParams {
        type Status = 'active' | 'deleted' | 'suspended';
    }
}
export declare namespace Issuing {
    interface TokenListParams extends PaginationParams {
        /**
         * The Issuing card identifier to list tokens for.
         */
        card: string;
        /**
         * Only return Issuing tokens that were created during the given date interval.
         */
        created?: RangeQueryParam | number;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Select Issuing tokens with the given status.
         */
        status?: TokenListParams.Status;
    }
    namespace TokenListParams {
        type Status = 'active' | 'deleted' | 'requested' | 'suspended';
    }
}
