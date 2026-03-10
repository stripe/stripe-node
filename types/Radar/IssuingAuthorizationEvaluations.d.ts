// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Radar {
      /**
       * Authorization Evaluations represent fraud risk assessments for Issuing card authorizations. They include fraud risk signals and contextual details about the authorization.
       */
      interface IssuingAuthorizationEvaluation {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'radar.issuing_authorization_evaluation';

        /**
         * Details about the authorization transaction.
         */
        authorization_details?: IssuingAuthorizationEvaluation.AuthorizationDetails;

        /**
         * Details about the card used in the authorization.
         */
        card_details?: IssuingAuthorizationEvaluation.CardDetails;

        /**
         * Details about the cardholder.
         */
        cardholder_details?: IssuingAuthorizationEvaluation.CardholderDetails | null;

        /**
         * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
         */
        livemode: boolean;

        /**
         * Details about the merchant where the authorization occurred.
         */
        merchant_details?: IssuingAuthorizationEvaluation.MerchantDetails;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata | null;

        /**
         * Details about the card network processing.
         */
        network_details?: IssuingAuthorizationEvaluation.NetworkDetails | null;

        /**
         * Collection of fraud risk signals for this authorization evaluation.
         */
        signals: IssuingAuthorizationEvaluation.Signals;

        /**
         * Details about the token, if a tokenized payment method was used.
         */
        token_details?: IssuingAuthorizationEvaluation.TokenDetails | null;

        /**
         * Details about verification checks performed.
         */
        verification_details?: IssuingAuthorizationEvaluation.VerificationDetails | null;
      }

      namespace IssuingAuthorizationEvaluation {
        interface AuthorizationDetails {
          /**
           * The authorization amount in the smallest currency unit.
           */
          amount: number;

          /**
           * The method used for authorization.
           */
          authorization_method: AuthorizationDetails.AuthorizationMethod | null;

          /**
           * Three-letter ISO currency code in lowercase.
           */
          currency: string;

          /**
           * The card entry mode.
           */
          entry_mode: AuthorizationDetails.EntryMode | null;

          /**
           * The raw code for the card entry mode.
           */
          entry_mode_raw_code: string | null;

          /**
           * The time when the authorization was initiated.
           */
          initiated_at: number;

          /**
           * The point of sale condition.
           */
          point_of_sale_condition: AuthorizationDetails.PointOfSaleCondition | null;

          /**
           * The raw code for the point of sale condition.
           */
          point_of_sale_condition_raw_code: string | null;

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
           * The Bank Identification Number (BIN) of the card.
           */
          bin: string;

          /**
           * The country code associated with the card BIN.
           */
          bin_country: string;

          /**
           * The type of card (physical or virtual).
           */
          card_type: CardDetails.CardType;

          /**
           * The time when the card was created.
           */
          created_at: number;

          /**
           * The last 4 digits of the card number.
           */
          last4: string;

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
           * The time when the cardholder was created.
           */
          created_at: number | null;

          /**
           * External reference for the cardholder.
           */
          reference: string | null;
        }

        interface MerchantDetails {
          /**
           * The merchant category code (MCC).
           */
          category_code: string;

          /**
           * The merchant country code.
           */
          country: string | null;

          /**
           * The merchant name.
           */
          name: string;

          /**
           * The merchant identifier from the card network.
           */
          network_id: string;

          /**
           * The terminal identifier.
           */
          terminal_id: string | null;
        }

        interface NetworkDetails {
          /**
           * The acquiring institution identifier.
           */
          acquiring_institution_id: string | null;

          /**
           * The card network that processed the authorization.
           */
          routed_network: NetworkDetails.RoutedNetwork | null;
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

        interface Signals {
          /**
           * A fraud risk signal with status, error, and data fields.
           */
          fraud_risk: Signals.FraudRisk;
        }

        namespace Signals {
          interface FraudRisk {
            /**
             * Signal evaluation data, including score and level.
             */
            data: FraudRisk.Data | null;

            /**
             * Details of an error that prevented reporting this signal.
             */
            error: {
              [key: string]: string;
            } | null;

            /**
             * The status of this signal.
             */
            status: FraudRisk.Status;
          }

          namespace FraudRisk {
            interface Data {
              /**
               * The time when this signal was evaluated.
               */
              evaluated_at: number;

              /**
               * Risk level, based on the score.
               */
              level: Data.Level;

              /**
               * Fraud risk score for this evaluation. Score in the range [0,100], formatted as a 2 decimal float, with higher scores indicating a higher likelihood of fraud.
               */
              score: number;
            }

            namespace Data {
              type Level =
                | 'elevated'
                | 'highest'
                | 'low'
                | 'normal'
                | 'not_assessed'
                | 'unknown';
            }

            type Status = 'error' | 'success';
          }
        }

        interface TokenDetails {
          /**
           * The time when the token was created.
           */
          created_at: number | null;

          /**
           * External reference for the token.
           */
          reference: string | null;

          /**
           * The wallet provider, if applicable.
           */
          wallet: TokenDetails.Wallet | null;
        }

        namespace TokenDetails {
          type Wallet = 'apple_pay' | 'google_pay' | 'samsung_pay';
        }

        interface VerificationDetails {
          /**
           * The result of the 3D Secure verification.
           */
          three_d_secure_result: VerificationDetails.ThreeDSecureResult | null;
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
    }
  }
}
