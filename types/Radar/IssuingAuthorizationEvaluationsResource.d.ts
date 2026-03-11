// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Radar {
      interface IssuingAuthorizationEvaluationCreateParams {
        /**
         * Details about the authorization.
         */
        authorization_details: IssuingAuthorizationEvaluationCreateParams.AuthorizationDetails;

        /**
         * Details about the card used in the authorization.
         */
        card_details: IssuingAuthorizationEvaluationCreateParams.CardDetails;

        /**
         * Details about the merchant where the authorization occurred.
         */
        merchant_details: IssuingAuthorizationEvaluationCreateParams.MerchantDetails;

        /**
         * Details about the cardholder.
         */
        cardholder_details?: IssuingAuthorizationEvaluationCreateParams.CardholderDetails;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * Details about the card network processing.
         */
        network_details?: IssuingAuthorizationEvaluationCreateParams.NetworkDetails;

        /**
         * Details about the token, if a tokenized payment method was used.
         */
        token_details?: IssuingAuthorizationEvaluationCreateParams.TokenDetails;

        /**
         * Details about verification checks performed.
         */
        verification_details?: IssuingAuthorizationEvaluationCreateParams.VerificationDetails;
      }

      namespace IssuingAuthorizationEvaluationCreateParams {
        interface AuthorizationDetails {
          /**
           * The authorization amount in the smallest currency unit.
           */
          amount: number;

          /**
           * The method used for authorization.
           */
          authorization_method?: AuthorizationDetails.AuthorizationMethod;

          /**
           * Three-letter ISO currency code in lowercase.
           */
          currency: string;

          /**
           * The card entry mode.
           */
          entry_mode?: AuthorizationDetails.EntryMode;

          /**
           * The raw code for the card entry mode.
           */
          entry_mode_raw_code?: string;

          /**
           * The time when the authorization was initiated (Unix timestamp).
           */
          initiated_at: number;

          /**
           * The point of sale condition.
           */
          point_of_sale_condition?: AuthorizationDetails.PointOfSaleCondition;

          /**
           * The raw code for the point of sale condition.
           */
          point_of_sale_condition_raw_code?: string;

          /**
           * External reference for the authorization.
           */
          reference: string;
        }

        namespace AuthorizationDetails {
          type AuthorizationMethod =
            | 'chip'
            | 'contactless'
            | 'keyed_in'
            | 'online'
            | 'swipe';

          type EntryMode =
            | 'contactless'
            | 'contactless_magstripe'
            | 'credential_on_file'
            | 'integrated_circuit_card'
            | 'magstripe'
            | 'magstripe_no_cvv'
            | 'manual'
            | 'other'
            | 'unknown';

          type PointOfSaleCondition =
            | 'account_verification'
            | 'card_not_present'
            | 'card_present'
            | 'e_commerce'
            | 'key_entered_pos'
            | 'missing'
            | 'moto'
            | 'other'
            | 'pin_entered'
            | 'recurring';
        }

        interface CardDetails {
          /**
           * Bank Identification Number (BIN) of the card.
           */
          bin: string;

          /**
           * Two-letter ISO country code of the card's issuing bank.
           */
          bin_country?: string;

          /**
           * The type of card (physical or virtual).
           */
          card_type: CardDetails.CardType;

          /**
           * The time when the card was created (Unix timestamp).
           */
          created_at: number;

          /**
           * Last 4 digits of the card number.
           */
          last4?: string;

          /**
           * External reference for the card.
           */
          reference: string;
        }

        namespace CardDetails {
          type CardType = 'physical' | 'virtual';
        }

        interface CardholderDetails {
          /**
           * The time when the cardholder was created (Unix timestamp).
           */
          created_at?: number;

          /**
           * External reference for the cardholder.
           */
          reference?: string;
        }

        interface MerchantDetails {
          /**
           * Merchant Category Code (MCC).
           */
          category_code: string;

          /**
           * Two-letter ISO country code of the merchant.
           */
          country?: string;

          /**
           * Name of the merchant.
           */
          name: string;

          /**
           * Network merchant identifier.
           */
          network_id: string;

          /**
           * Terminal identifier.
           */
          terminal_id?: string;
        }

        interface NetworkDetails {
          /**
           * The acquiring institution identifier.
           */
          acquiring_institution_id?: string;

          /**
           * The card network that routed the authorization.
           */
          routed_network?: NetworkDetails.RoutedNetwork;
        }

        namespace NetworkDetails {
          type RoutedNetwork =
            | 'cirrus'
            | 'interlink'
            | 'maestro'
            | 'mastercard'
            | 'other'
            | 'plus'
            | 'visa';
        }

        interface TokenDetails {
          /**
           * The time when the token was created (Unix timestamp).
           */
          created_at?: number;

          /**
           * External reference for the token.
           */
          reference?: string;

          /**
           * The wallet provider for the tokenized payment method.
           */
          wallet?: TokenDetails.Wallet;
        }

        namespace TokenDetails {
          type Wallet = 'apple_pay' | 'google_pay' | 'samsung_pay';
        }

        interface VerificationDetails {
          /**
           * The result of 3D Secure verification.
           */
          three_d_secure_result?: VerificationDetails.ThreeDSecureResult;
        }

        namespace VerificationDetails {
          type ThreeDSecureResult =
            | 'attempt_acknowledged'
            | 'authenticated'
            | 'exempted'
            | 'failed'
            | 'required';
        }
      }

      class IssuingAuthorizationEvaluationsResource {
        /**
         * Request a fraud risk assessment from Stripe for an Issuing card authorization.
         */
        create(
          params: IssuingAuthorizationEvaluationCreateParams,
          options?: RequestOptions
        ): Promise<
          Stripe.Response<Stripe.Radar.IssuingAuthorizationEvaluation>
        >;
      }
    }
  }
}
