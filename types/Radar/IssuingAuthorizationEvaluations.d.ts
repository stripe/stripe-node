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
         * Details about the authorization.
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
         * Details about the seller (grocery store, e-commerce website, etc.) where the card authorization happened.
         */
        merchant_details?: IssuingAuthorizationEvaluation.MerchantDetails;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata | null;

        /**
         * Details about the authorization, such as identifiers, set by the card network.
         */
        network_details?: IssuingAuthorizationEvaluation.NetworkDetails | null;

        /**
         * Collection of fraud risk signals for this authorization evaluation.
         */
        signals: IssuingAuthorizationEvaluation.Signals;

        /**
         * Details about the token, if a tokenized payment method was used for the authorization.
         */
        token_details?: IssuingAuthorizationEvaluation.TokenDetails | null;

        /**
         * Details about verification data for the authorization.
         */
        verification_details?: IssuingAuthorizationEvaluation.VerificationDetails | null;
      }

      namespace IssuingAuthorizationEvaluation {
        interface AuthorizationDetails {
          /**
           * The total amount of the authorization in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          amount: number;

          /**
           * How the card details were provided.
           */
          authorization_method: AuthorizationDetails.AuthorizationMethod | null;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * Defines how the card's information was entered for the authorization.
           */
          entry_mode: AuthorizationDetails.EntryMode | null;

          /**
           * Raw code indicating the entry mode from the network message.
           */
          entry_mode_raw_code: string | null;

          /**
           * The timestamp of the authorization initiated in seconds.
           */
          initiated_at: number;

          /**
           * Defines how the card was read at the point of sale.
           */
          point_of_sale_condition: AuthorizationDetails.PointOfSaleCondition | null;

          /**
           * Raw code indicating the point of sale condition from the network message.
           */
          point_of_sale_condition_raw_code: string | null;

          /**
           * User's specified unique ID for this authorization attempt (e.g., RRN or internal reference).
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
           * The two-letter country code of the BIN issuer.
           */
          bin_country: string;

          /**
           * The type of the card.
           */
          card_type: CardDetails.CardType;

          /**
           * The timestamp when the card was created.
           */
          created_at: number;

          /**
           * The last 4 digits of the card number.
           */
          last4: string;

          /**
           * User's specified unique ID of the card for this authorization attempt (e.g., RRN or internal reference).
           */
          reference: string;
        }

        namespace CardDetails {
          type CardType = 'physical' | 'virtual';
        }

        interface CardholderDetails {
          /**
           * The timestamp when the cardholder was created.
           */
          created_at: number | null;

          /**
           * User's specified unique ID of the cardholder for this authorization attempt (e.g., RRN or internal reference).
           */
          reference: string | null;
        }

        interface MerchantDetails {
          /**
           * The merchant category code for the seller's business.
           */
          category_code: string;

          /**
           * Country where the seller is located.
           */
          country: string | null;

          /**
           * Name of the seller.
           */
          name: string;

          /**
           * Identifier assigned to the seller by the card network. Different card networks may assign different network_id fields to the same merchant.
           */
          network_id: string;

          /**
           * An ID assigned by the seller to the location of the sale.
           */
          terminal_id: string | null;
        }

        interface NetworkDetails {
          /**
           * Identifier assigned to the acquirer by the card network. Sometimes this value is not provided by the network; in this case, the value will be null.
           */
          acquiring_institution_id: string | null;

          /**
           * The card network over which Stripe received the authorization.
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
           * The timestamp when the network token was created.
           */
          created_at: number | null;

          /**
           * User's specified unique ID of the card token for this authorization attempt (e.g., RRN or internal reference).
           */
          reference: string | null;

          /**
           * The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`.
           */
          wallet: TokenDetails.Wallet | null;
        }

        namespace TokenDetails {
          type Wallet = 'apple_pay' | 'google_pay' | 'samsung_pay';
        }

        interface VerificationDetails {
          /**
           * The outcome of the 3D Secure authentication request.
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
