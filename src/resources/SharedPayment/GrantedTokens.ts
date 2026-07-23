// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {OtherString, Address} from '../../shared.js';
import {RequestOptions, Response} from '../../lib.js';

export class GrantedTokenResource extends StripeResource {
  /**
   * Retrieves an existing SharedPaymentGrantedToken object
   */
  retrieve(
    id: string,
    params?: SharedPayment.GrantedTokenRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<GrantedToken>> {
    return this._makeRequest(
      'GET',
      `/v1/shared_payment/granted_tokens/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface GrantedToken {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'shared_payment.granted_token';

  /**
   * Details about the agent that issued this SharedPaymentGrantedToken.
   */
  agent_details: GrantedToken.AgentDetails | null;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Time at which this SharedPaymentGrantedToken expires and can no longer be used to confirm a PaymentIntent.
   */
  deactivated_at: number | null;

  /**
   * The reason why the SharedPaymentGrantedToken has been deactivated.
   */
  deactivated_reason: GrantedToken.DeactivatedReason | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Details of the PaymentMethod that was shared via this token.
   */
  payment_method_details: GrantedToken.PaymentMethodDetails | null;

  /**
   * Risk details of the SharedPaymentGrantedToken.
   */
  risk_details?: GrantedToken.RiskDetails | null;

  /**
   * Metadata about the SharedPaymentGrantedToken.
   */
  shared_metadata: {
    [key: string]: string;
  } | null;

  /**
   * Some details about how the SharedPaymentGrantedToken has been used already.
   */
  usage_details: GrantedToken.UsageDetails | null;

  /**
   * Limits on how this SharedPaymentGrantedToken can be used.
   */
  usage_limits: GrantedToken.UsageLimits | null;
}
export namespace GrantedToken {
  export interface AgentDetails {
    /**
     * The Stripe Profile ID of the agent that issued this SharedPaymentGrantedToken.
     */
    network_business_profile: string | null;
  }

  export type DeactivatedReason =
    | 'consumed'
    | 'expired'
    | 'resolved'
    | 'revoked'
    | OtherString;

  export interface PaymentMethodDetails {
    affirm?: PaymentMethodDetails.Affirm;

    /**
     * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
     */
    billing_details: PaymentMethodDetails.BillingDetails | null;

    card?: PaymentMethodDetails.Card;

    klarna?: PaymentMethodDetails.Klarna;

    link?: PaymentMethodDetails.Link;

    /**
     * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
     */
    type: PaymentMethodDetails.Type;
  }

  export interface RiskDetails {
    /**
     * Risk insights for this token, including scores and recommended actions for each risk type.
     */
    insights: RiskDetails.Insights;
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

  export namespace PaymentMethodDetails {
    export interface Affirm {}

    export interface BillingDetails {
      /**
       * Billing address.
       */
      address: Address | null;

      /**
       * Email address.
       */
      email: string | null;

      /**
       * Full name.
       */
      name: string | null;

      /**
       * Billing phone number (including extension).
       */
      phone: string | null;

      /**
       * Taxpayer identification number. Used only for transactions between LATAM buyers and non-LATAM sellers.
       */
      tax_id: string | null;
    }

    export interface Card {
      /**
       * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
       */
      brand: string;

      /**
       * Checks on Card address and CVC if provided.
       */
      checks?: Card.Checks | null;

      /**
       * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
       */
      country: string | null;

      /**
       * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
       */
      description?: string | null;

      /**
       * The brand to use when displaying the card, this accounts for customer's brand choice on dual-branded cards. Can be `american_express`, `cartes_bancaires`, `diners_club`, `discover`, `eftpos_australia`, `interac`, `jcb`, `mastercard`, `union_pay`, `visa`, or `other` and may contain more values in the future.
       */
      display_brand: string | null;

      /**
       * Two-digit number representing the card's expiration month.
       */
      exp_month: number;

      /**
       * Four-digit number representing the card's expiration year.
       */
      exp_year: number;

      /**
       * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
       *
       * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
       */
      fingerprint?: string | null;

      /**
       * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
       */
      funding: string;

      /**
       * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
       */
      iin?: string | null;

      /**
       * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
       */
      issuer?: string | null;

      /**
       * The last four digits of the card.
       */
      last4: string;

      /**
       * Contains information about card networks that can be used to process the payment.
       */
      networks: Card.Networks | null;

      /**
       * If this Card is part of a card wallet, this contains the details of the card wallet.
       */
      wallet: Card.Wallet | null;
    }

    export interface Klarna {
      /**
       * The customer's date of birth, if provided.
       */
      dob?: Klarna.Dob | null;
    }

    export interface Link {
      /**
       * Account owner's email address.
       */
      email: string | null;

      /**
       * [Deprecated] This is a legacy parameter that no longer has any function.
       * @deprecated
       */
      persistent_token?: string;
    }

    export type Type =
      | 'affirm'
      | 'card'
      | 'klarna'
      | 'link'
      | 'shop_pay'
      | OtherString;

    export namespace Card {
      export interface Checks {
        /**
         * If a address line1 was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
         */
        address_line1_check: string | null;

        /**
         * If a address postal code was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
         */
        address_postal_code_check: string | null;

        /**
         * If a CVC was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
         */
        cvc_check: string | null;
      }

      export interface Networks {
        /**
         * All networks available for selection via [payment_method_options.card.network](https://docs.stripe.com/api/payment_intents/confirm#confirm_payment_intent-payment_method_options-card-network).
         */
        available: Array<string>;

        /**
         * The preferred network for co-branded cards. Can be `cartes_bancaires`, `mastercard`, `visa` or `invalid_preference` if requested network is not valid for the card.
         */
        preferred: string | null;
      }

      export interface Wallet {
        amex_express_checkout?: Wallet.AmexExpressCheckout;

        apple_pay?: Wallet.ApplePay;

        /**
         * (For tokenized numbers only.) The last four digits of the device account number.
         */
        dynamic_last4: string | null;

        google_pay?: Wallet.GooglePay;

        link?: Wallet.Link;

        masterpass?: Wallet.Masterpass;

        samsung_pay?: Wallet.SamsungPay;

        /**
         * The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, `visa_checkout`, or `link`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
         */
        type: Wallet.Type;

        visa_checkout?: Wallet.VisaCheckout;
      }

      export namespace Wallet {
        export interface AmexExpressCheckout {}

        export interface ApplePay {}

        export interface GooglePay {}

        export interface Link {}

        export interface Masterpass {
          /**
           * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          billing_address: Address | null;

          /**
           * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          email: string | null;

          /**
           * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          name: string | null;

          /**
           * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          shipping_address: Address | null;
        }

        export interface SamsungPay {}

        export type Type =
          | 'amex_express_checkout'
          | 'apple_pay'
          | 'google_pay'
          | 'link'
          | 'masterpass'
          | 'samsung_pay'
          | 'visa_checkout';

        export interface VisaCheckout {
          /**
           * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          billing_address: Address | null;

          /**
           * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          email: string | null;

          /**
           * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          name: string | null;

          /**
           * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          shipping_address: Address | null;
        }
      }
    }

    export namespace Klarna {
      export interface Dob {
        /**
         * The day of birth, between 1 and 31.
         */
        day: number | null;

        /**
         * The month of birth, between 1 and 12.
         */
        month: number | null;

        /**
         * The four-digit year of birth.
         */
        year: number | null;
      }
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
    export type RecurringInterval = 'month' | 'week' | 'year' | OtherString;
  }
}
export namespace SharedPayment {
  export interface GrantedTokenRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
