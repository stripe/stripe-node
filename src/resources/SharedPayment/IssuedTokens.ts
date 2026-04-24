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
   * If present, describes the action required to make this `SharedPaymentIssuedToken` usable for payments. Present when the token is in `requires_action` state.
   */
  next_action: SharedPayment.IssuedToken.NextAction | null;

  /**
   * ID of an existing PaymentMethod.
   */
  payment_method: string;

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
   * Status of this SharedPaymentIssuedToken, one of `active`, `requires_action`, or `deactivated`.
   */
  status: SharedPayment.IssuedToken.Status | null;

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

    export interface NextAction {
      /**
       * Specifies the type of next action required. Determines which child attribute contains action details.
       */
      type: 'use_stripe_sdk';

      /**
       * Contains details for handling the next action using Stripe.js, iOS, or Android SDKs. Present when `next_action.type` is `use_stripe_sdk`.
       */
      use_stripe_sdk: NextAction.UseStripeSdk | null;
    }

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
    }

    export type Status = 'active' | 'deactivated' | 'requires_action';

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

    export namespace NextAction {
      export interface UseStripeSdk {
        /**
         * A base64-encoded string used by Stripe.js and the iOS and Android client SDKs to handle the next action. Its content is subject to change.
         */
        value: string;
      }
    }

    export namespace RiskDetails {
      export interface Insights {
        /**
         * Bot risk insight.
         */
        bot?: Insights.Bot | null;

        /**
         * Card issuer decline risk insight.
         */
        card_issuer_decline?: Insights.CardIssuerDecline | null;

        /**
         * Card testing risk insight.
         */
        card_testing?: Insights.CardTesting | null;

        /**
         * Fraudulent dispute risk insight.
         */
        fraudulent_dispute: Insights.FraudulentDispute | null;

        /**
         * Stolen card risk insight.
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
           * Risk score for this insight.
           */
          score: number;
        }

        export interface CardIssuerDecline {
          /**
           * Recommended action for this insight.
           */
          recommended_action: string;

          /**
           * Risk score for this insight.
           */
          score: number;
        }

        export interface CardTesting {
          /**
           * Recommended action for this insight.
           */
          recommended_action: string;

          /**
           * Risk score for this insight.
           */
          score: number;
        }

        export interface FraudulentDispute {
          /**
           * Recommended action for this insight.
           */
          recommended_action: string;

          /**
           * Risk score for this insight.
           */
          score: number;
        }

        export interface StolenCard {
          /**
           * Recommended action for this insight.
           */
          recommended_action: string;

          /**
           * Risk score for this insight.
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
