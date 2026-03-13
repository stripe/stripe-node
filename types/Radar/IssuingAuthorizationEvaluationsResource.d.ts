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
         * Details about the seller (grocery store, e-commerce website, etc.) where the card authorization happened.
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
         * Details about the authorization, such as identifiers, set by the card network.
         */
        network_details?: IssuingAuthorizationEvaluationCreateParams.NetworkDetails;

        /**
         * Details about the token, if a tokenized payment method was used for the authorization.
         */
        token_details?: IssuingAuthorizationEvaluationCreateParams.TokenDetails;

        /**
         * Details about verification data for the authorization.
         */
        verification_details?: IssuingAuthorizationEvaluationCreateParams.VerificationDetails;
      }

      namespace IssuingAuthorizationEvaluationCreateParams {
        interface AuthorizationDetails {
          /**
           * The total amount of the authorization in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          amount: number;

          /**
           * How the card details were provided.
           */
          authorization_method?: AuthorizationDetails.AuthorizationMethod;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * Defines how the card's information was entered for the authorization.
           */
          entry_mode?: AuthorizationDetails.EntryMode;

          /**
           * Raw code indicating the entry mode from the network message.
           */
          entry_mode_raw_code?: string;

          /**
           * The timestamp of the authorization initiated in seconds.
           */
          initiated_at: number;

          /**
           * Defines how the card was read at the point of sale.
           */
          point_of_sale_condition?: AuthorizationDetails.PointOfSaleCondition;

          /**
           * Raw code indicating the point of sale condition from the network message.
           */
          point_of_sale_condition_raw_code?: string;

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
          last4?: string;

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
          created_at?: number;

          /**
           * User's specified unique ID of the cardholder for this authorization attempt (e.g., RRN or internal reference).
           */
          reference?: string;
        }

        interface MerchantDetails {
          /**
           * The merchant category code for the seller's business.
           */
          category_code: string;

          /**
           * Country where the seller is located.
           */
          country?: string;

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
          terminal_id?: string;
        }

        interface NetworkDetails {
          /**
           * Identifier assigned to the acquirer by the card network. Sometimes this value is not provided by the network; in this case, the value will be null.
           */
          acquiring_institution_id?: string;

          /**
           * The card network over which Stripe received the authorization.
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
           * The timestamp when the network token was created.
           */
          created_at?: number;

          /**
           * User's specified unique ID of the card token for this authorization attempt (e.g., RRN or internal reference).
           */
          reference?: string;

          /**
           * The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`.
           */
          wallet?: TokenDetails.Wallet;
        }

        namespace TokenDetails {
          type Wallet = 'apple_pay' | 'google_pay' | 'samsung_pay';
        }

        interface VerificationDetails {
          /**
           * The outcome of the 3D Secure authentication request.
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
