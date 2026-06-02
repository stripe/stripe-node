// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Card} from './Cards.js';
import {PaginationParams, RangeQueryParam} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class TokenResource extends StripeResource {
  /**
   * Lists all Issuing Token objects for a given card.
   */
  list(
    params: Issuing.TokenListParams,
    options?: RequestOptions
  ): ApiListPromise<Token> {
    return this._makeRequest('GET', '/v1/issuing/tokens', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Retrieves an Issuing Token object.
   */
  retrieve(
    id: string,
    params?: Issuing.TokenRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Token>> {
    return this._makeRequest(
      'GET',
      `/v1/issuing/tokens/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Attempts to update the specified Issuing Token object to the status specified.
   */
  update(
    id: string,
    params: Issuing.TokenUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Token>> {
    return this._makeRequest(
      'POST',
      `/v1/issuing/tokens/${id}`,
      params,
      options
    ) as any;
  }
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
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
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
   * The decision made during token provisioning.
   */
  provisioning_decision?: Issuing.Token.ProvisioningDecision | null;

  /**
   * The usage state of the token.
   */
  status: Issuing.Token.Status;

  /**
   * The type of the token, indicating how it is used.
   */
  token_type?: Issuing.Token.TokenType | null;

  /**
   * The digital wallet for this token, if one was used.
   */
  wallet_provider?: Issuing.Token.WalletProvider;
}
export namespace Issuing {
  export namespace Token {
    export type Network = 'mastercard' | 'visa';

    export interface NetworkData {
      device?: NetworkData.Device;

      mastercard?: NetworkData.Mastercard;

      /**
       * The network that the token is associated with. An additional hash is included with a name matching this value, containing tokenization data specific to the card network.
       */
      type: NetworkData.Type;

      visa?: NetworkData.Visa;

      wallet_provider?: NetworkData.WalletProvider;
    }

    export type ProvisioningDecision =
      | 'approve'
      | 'approve_pending_id_and_v'
      | 'decline';

    export type Status = 'active' | 'deleted' | 'requested' | 'suspended';

    export type TokenType =
      | 'card_on_file'
      | 'cloud_based'
      | 'commerce_platform'
      | 'commercial_virtual_account'
      | 'secure_element'
      | 'static_credential';

    export type WalletProvider = 'apple_pay' | 'google_pay' | 'samsung_pay';

    export namespace NetworkData {
      export interface Device {
        /**
         * An obfuscated ID derived from the device ID.
         */
        device_fingerprint?: string;

        /**
         * The IP address of the device at provisioning time.
         */
        ip_address?: string;

        /**
         * The ISO 639-1 language code of the device associated with the tokenization request.
         */
        language?: Device.Language | null;

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

      export interface Mastercard {
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

      export type Type = 'mastercard' | 'visa';

      export interface Visa {
        /**
         * A unique reference ID from Visa to represent the card account number.
         */
        card_reference_id: string | null;

        /**
         * Stripe's recommendation to the network for this token activation request, derived from the same risk signals used for the activation decision.
         */
        token_decision_recommendation?: Visa.TokenDecisionRecommendation | null;

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

      export interface WalletProvider {
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

      export namespace Device {
        export type Language =
          | 'aa'
          | 'ab'
          | 'ae'
          | 'af'
          | 'ak'
          | 'am'
          | 'an'
          | 'ar'
          | 'as'
          | 'av'
          | 'ay'
          | 'az'
          | 'ba'
          | 'be'
          | 'bg'
          | 'bi'
          | 'bm'
          | 'bn'
          | 'bo'
          | 'br'
          | 'bs'
          | 'ca'
          | 'ce'
          | 'ch'
          | 'co'
          | 'cr'
          | 'cs'
          | 'cu'
          | 'cv'
          | 'cy'
          | 'da'
          | 'de'
          | 'dv'
          | 'dz'
          | 'ee'
          | 'el'
          | 'en'
          | 'eo'
          | 'es'
          | 'et'
          | 'eu'
          | 'fa'
          | 'ff'
          | 'fi'
          | 'fj'
          | 'fo'
          | 'fr'
          | 'fy'
          | 'ga'
          | 'gd'
          | 'gl'
          | 'gn'
          | 'gu'
          | 'gv'
          | 'ha'
          | 'he'
          | 'hi'
          | 'ho'
          | 'hr'
          | 'ht'
          | 'hu'
          | 'hy'
          | 'hz'
          | 'ia'
          | 'id'
          | 'ie'
          | 'ig'
          | 'ii'
          | 'ik'
          | 'io'
          | 'is'
          | 'it'
          | 'iu'
          | 'ja'
          | 'jv'
          | 'ka'
          | 'kg'
          | 'ki'
          | 'kj'
          | 'kk'
          | 'kl'
          | 'km'
          | 'kn'
          | 'ko'
          | 'kr'
          | 'ks'
          | 'ku'
          | 'kv'
          | 'kw'
          | 'ky'
          | 'la'
          | 'lb'
          | 'lg'
          | 'li'
          | 'ln'
          | 'lo'
          | 'lt'
          | 'lu'
          | 'lv'
          | 'mg'
          | 'mh'
          | 'mi'
          | 'mk'
          | 'ml'
          | 'mn'
          | 'mr'
          | 'ms'
          | 'mt'
          | 'my'
          | 'na'
          | 'nb'
          | 'nd'
          | 'ne'
          | 'ng'
          | 'nl'
          | 'nn'
          | 'no'
          | 'nr'
          | 'nv'
          | 'ny'
          | 'oc'
          | 'oj'
          | 'om'
          | 'or'
          | 'os'
          | 'pa'
          | 'pi'
          | 'pl'
          | 'ps'
          | 'pt'
          | 'qu'
          | 'rm'
          | 'rn'
          | 'ro'
          | 'ru'
          | 'rw'
          | 'sa'
          | 'sc'
          | 'sd'
          | 'se'
          | 'sg'
          | 'si'
          | 'sk'
          | 'sl'
          | 'sm'
          | 'sn'
          | 'so'
          | 'sq'
          | 'sr'
          | 'ss'
          | 'st'
          | 'su'
          | 'sv'
          | 'sw'
          | 'ta'
          | 'te'
          | 'tg'
          | 'th'
          | 'ti'
          | 'tk'
          | 'tl'
          | 'tn'
          | 'to'
          | 'tr'
          | 'ts'
          | 'tt'
          | 'tw'
          | 'ty'
          | 'ug'
          | 'uk'
          | 'ur'
          | 'uz'
          | 've'
          | 'vi'
          | 'vo'
          | 'wa'
          | 'wo'
          | 'xh'
          | 'yi'
          | 'yo'
          | 'za'
          | 'zh'
          | 'zu';

        export type Type = 'other' | 'phone' | 'watch';
      }

      export namespace Visa {
        export type TokenDecisionRecommendation =
          | 'approve'
          | 'decline'
          | 'recommend_id_and_v';
      }

      export namespace WalletProvider {
        export type CardNumberSource = 'app' | 'manual' | 'on_file' | 'other';

        export interface CardholderAddress {
          /**
           * The street address of the cardholder tokenizing the card.
           */
          line1: string;

          /**
           * The postal code of the cardholder tokenizing the card.
           */
          postal_code: string;
        }

        export type ReasonCode =
          | 'account_card_too_new'
          | 'account_recently_changed'
          | 'account_too_new'
          | 'account_too_new_since_launch'
          | 'additional_device'
          | 'data_expired'
          | 'defer_id_v_decision'
          | 'device_recently_lost'
          | 'good_activity_history'
          | 'has_suspended_tokens'
          | 'high_risk'
          | 'inactive_account'
          | 'long_account_tenure'
          | 'low_account_score'
          | 'low_device_score'
          | 'low_phone_number_score'
          | 'network_service_error'
          | 'outside_home_territory'
          | 'provisioning_cardholder_mismatch'
          | 'provisioning_device_and_cardholder_mismatch'
          | 'provisioning_device_mismatch'
          | 'same_device_no_prior_authentication'
          | 'same_device_successful_prior_authentication'
          | 'software_update'
          | 'suspicious_activity'
          | 'too_many_different_cardholders'
          | 'too_many_recent_attempts'
          | 'too_many_recent_tokens';

        export type SuggestedDecision = 'approve' | 'decline' | 'require_auth';
      }
    }
  }
}
export namespace Issuing {
  export interface TokenRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Issuing {
  export interface TokenUpdateParams {
    /**
     * Specifies which status the token should be updated to.
     */
    status: TokenUpdateParams.Status;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export namespace TokenUpdateParams {
    export type Status = 'active' | 'deleted' | 'suspended';
  }
}
export namespace Issuing {
  export interface TokenListParams extends PaginationParams {
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

  export namespace TokenListParams {
    export type Status = 'active' | 'deleted' | 'requested' | 'suspended';
  }
}
