// File generated from our OpenAPI spec

import {RequestOptions} from '../../lib.js';
export interface IssuedToken {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'shared_payment.issued_token';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * ID of an existing Customer.
   */
  customer: string | null;

  /**
   * Time at which this SharedPaymentIssuedToken was deactivated.
   */
  deactivated_at: number | null;

  /**
   * The reason why the SharedPaymentIssuedToken has been deactivated.
   */
  deactivated_reason: SharedPayment.IssuedToken.DeactivatedReason | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * ID of an existing PaymentMethod.
   */
  payment_method: string | null;

  /**
   * If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion.
   */
  return_url?: string | null;

  /**
   * Risk details of the SharedPaymentIssuedToken.
   */
  risk_details?: SharedPayment.IssuedToken.RiskDetails | null;

  /**
   * Seller details of the SharedPaymentIssuedToken, including network_id and external_id.
   */
  seller_details: SharedPayment.IssuedToken.SellerDetails | null;

  /**
   * Indicates that you intend to save the PaymentMethod of this SharedPaymentToken to a customer later.
   */
  setup_future_usage: 'on_session' | null;

  /**
   * Metadata about the SharedPaymentIssuedToken.
   */
  shared_metadata: {
    [key: string]: string;
  } | null;

  /**
   * Usage details of the SharedPaymentIssuedToken
   */
  usage_details: SharedPayment.IssuedToken.UsageDetails | null;

  /**
   * Usage limits of the SharedPaymentIssuedToken.
   */
  usage_limits: SharedPayment.IssuedToken.UsageLimits | null;
}
export namespace SharedPayment {
  export namespace IssuedToken {
    export type DeactivatedReason =
      | 'consumed'
      | 'expired'
      | 'resolved'
      | 'revoked';

    export interface RiskDetails {
      /**
       * Risk insights for this token, including scores and recommended actions for each risk type.
       */
      insights: RiskDetails.Insights;
    }

    export interface SellerDetails {
      /**
       * A unique id within a network that identifies a logical seller. This should usually be the merchant id on the seller platform.
       */
      external_id: string;

      /**
       * The unique and logical string that identifies the seller platform that this SharedToken is being created for.
       */
      network_business_profile: string;

      /**
       * The unique and logical string that identifies the seller platform that this SharedToken is being created for.
       */
      network_id?: string;
    }

    export interface UsageDetails {
      /**
       * The total amount captured using this SharedPaymentToken.
       */
      amount_captured: UsageDetails.AmountCaptured | null;
    }

    export interface UsageLimits {
      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * Time at which this SharedPaymentToken expires and can no longer be used to confirm a PaymentIntent.
       */
      expires_at: number | null;

      /**
       * Max amount that can be captured using this SharedPaymentToken.
       */
      max_amount: number;

      /**
       * The recurring interval at which the shared payment token's amount usage restrictions reset.
       */
      recurring_interval?: UsageLimits.RecurringInterval | null;
    }

    export namespace RiskDetails {
      export interface Insights {
        /**
         * Bot risk insight (score: Float, recommended_action).
         */
        bot?: Insights.Bot | null;

        /**
         * Card issuer decline risk insight (score: Float, recommended_action).
         */
        card_issuer_decline?: Insights.CardIssuerDecline | null;

        /**
         * Card testing risk insight (score: Float, recommended_action).
         */
        card_testing?: Insights.CardTesting | null;

        /**
         * Fraudulent dispute risk insight (score: Integer, recommended_action).
         */
        fraudulent_dispute: Insights.FraudulentDispute | null;

        /**
         * Stolen card risk insight (score: Integer, recommended_action).
         */
        stolen_card?: Insights.StolenCard | null;
      }

      export namespace Insights {
        export interface Bot {
          /**
           * Recommended action for this insight.
           */
          recommended_action: string;

          /**
           * Risk score for this insight (float).
           */
          score: number;
        }

        export interface CardIssuerDecline {
          /**
           * Recommended action for this insight.
           */
          recommended_action: string;

          /**
           * Risk score for this insight (float).
           */
          score: number;
        }

        export interface CardTesting {
          /**
           * Recommended action for this insight.
           */
          recommended_action: string;

          /**
           * Risk score for this insight (float).
           */
          score: number;
        }

        export interface FraudulentDispute {
          /**
           * Recommended action for this insight.
           */
          recommended_action: string;

          /**
           * Risk score for this insight (integer).
           */
          score: number;
        }

        export interface StolenCard {
          /**
           * Recommended action for this insight.
           */
          recommended_action: string;

          /**
           * Risk score for this insight (integer).
           */
          score: number;
        }
      }
    }

    export namespace UsageDetails {
      export interface AmountCaptured {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * Integer value of the amount in the smallest currency unit.
         */
        value: number;
      }
    }

    export namespace UsageLimits {
      export type RecurringInterval = 'month' | 'week' | 'year';
    }
  }
}
