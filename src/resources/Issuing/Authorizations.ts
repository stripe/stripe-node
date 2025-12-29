// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {BalanceTransaction} from './../BalanceTransactions.js';
import {Card} from './Cards.js';
import {Cardholder} from './Cardholders.js';
import {Token} from './Tokens.js';
import {Transaction} from './Transactions.js';
import {
  Emptyable,
  MetadataParam,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class AuthorizationResource extends StripeResource {
  /**
   * Returns a list of Issuing Authorization objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
   */
  list(
    params?: Issuing.AuthorizationListParams,
    options?: RequestOptions
  ): ApiListPromise<Authorization>;
  list(options?: RequestOptions): ApiListPromise<Authorization>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/issuing/authorizations',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieves an Issuing Authorization object.
   */
  retrieve(
    id: string,
    params?: Issuing.AuthorizationRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Authorization>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<Authorization>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/issuing/authorizations/{authorization}',
    }).call(this, ...args);
  }

  /**
   * Updates the specified Issuing Authorization object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   */
  update(
    id: string,
    params?: Issuing.AuthorizationUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Authorization>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/issuing/authorizations/{authorization}',
    }).call(this, ...args);
  }

  /**
   * [Deprecated] Approves a pending Issuing Authorization object. This request should be made within the timeout window of the [real-time authorization](https://docs.stripe.com/docs/issuing/controls/real-time-authorizations) flow.
   * This method is deprecated. Instead, [respond directly to the webhook request to approve an authorization](https://docs.stripe.com/docs/issuing/controls/real-time-authorizations#authorization-handling).
   * @deprecated
   */
  approve(
    id: string,
    params?: Issuing.AuthorizationApproveParams,
    options?: RequestOptions
  ): Promise<Response<Authorization>>;
  approve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<Authorization>>;
  approve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/issuing/authorizations/{authorization}/approve',
    }).call(this, ...args);
  }

  /**
   * [Deprecated] Declines a pending Issuing Authorization object. This request should be made within the timeout window of the [real time authorization](https://docs.stripe.com/docs/issuing/controls/real-time-authorizations) flow.
   * This method is deprecated. Instead, [respond directly to the webhook request to decline an authorization](https://docs.stripe.com/docs/issuing/controls/real-time-authorizations#authorization-handling).
   * @deprecated
   */
  decline(
    id: string,
    params?: Issuing.AuthorizationDeclineParams,
    options?: RequestOptions
  ): Promise<Response<Authorization>>;
  decline(
    id: string,
    options?: RequestOptions
  ): Promise<Response<Authorization>>;
  decline(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/issuing/authorizations/{authorization}/decline',
    }).call(this, ...args);
  }
}
export interface Authorization {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'issuing.authorization';

  /**
   * The total amount that was authorized or rejected. This amount is in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). `amount` should be the same as `merchant_amount`, unless `currency` and `merchant_currency` are different.
   */
  amount: number;

  /**
   * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
   */
  amount_details: Issuing.Authorization.AmountDetails | null;

  /**
   * Whether the authorization has been approved.
   */
  approved: boolean;

  /**
   * How the card details were provided.
   */
  authorization_method: Issuing.Authorization.AuthorizationMethod;

  /**
   * List of balance transactions associated with this authorization.
   */
  balance_transactions: Array<BalanceTransaction>;

  /**
   * You can [create physical or virtual cards](https://docs.stripe.com/issuing) that are issued to cardholders.
   */
  card: Card;

  /**
   * The cardholder to whom this authorization belongs.
   */
  cardholder: string | Cardholder | null;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * The currency of the cardholder. This currency can be different from the currency presented at authorization and the `merchant_currency` field on this authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * Fleet-specific information for authorizations using Fleet cards.
   */
  fleet: Issuing.Authorization.Fleet | null;

  /**
   * Fraud challenges sent to the cardholder, if this authorization was declined for fraud risk reasons.
   */
  fraud_challenges?: Array<Issuing.Authorization.FraudChallenge> | null;

  /**
   * Information about fuel that was purchased with this transaction. Typically this information is received from the merchant after the authorization has been approved and the fuel dispensed.
   */
  fuel: Issuing.Authorization.Fuel | null;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The total amount that was authorized or rejected. This amount is in the `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). `merchant_amount` should be the same as `amount`, unless `merchant_currency` and `currency` are different.
   */
  merchant_amount: number;

  /**
   * The local currency that was presented to the cardholder for the authorization. This currency can be different from the cardholder currency and the `currency` field on this authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  merchant_currency: string;

  merchant_data: Issuing.Authorization.MerchantData;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata;

  /**
   * Details about the authorization, such as identifiers, set by the card network.
   */
  network_data: Issuing.Authorization.NetworkData | null;

  /**
   * The pending authorization request. This field will only be non-null during an `issuing_authorization.request` webhook.
   */
  pending_request: Issuing.Authorization.PendingRequest | null;

  /**
   * History of every time a `pending_request` authorization was approved/declined, either by you directly or by Stripe (e.g. based on your spending_controls). If the merchant changes the authorization by performing an incremental authorization, you can look at this field to see the previous requests for the authorization. This field can be helpful in determining why a given authorization was approved/declined.
   */
  request_history: Array<Issuing.Authorization.RequestHistory>;

  /**
   * The current status of the authorization in its lifecycle.
   */
  status: Issuing.Authorization.Status;

  /**
   * [Token](https://docs.stripe.com/api/issuing/tokens/object) object used for this authorization. If a network token was not used for this authorization, this field will be null.
   */
  token?: string | Token | null;

  /**
   * List of [transactions](https://docs.stripe.com/api/issuing/transactions) associated with this authorization.
   */
  transactions: Array<Transaction>;

  /**
   * [Treasury](https://docs.stripe.com/api/treasury) details related to this authorization if it was created on a [FinancialAccount](https://docs.stripe.com/api/treasury/financial_accounts).
   */
  treasury?: Issuing.Authorization.Treasury | null;

  verification_data: Issuing.Authorization.VerificationData;

  /**
   * Whether the authorization bypassed fraud risk checks because the cardholder has previously completed a fraud challenge on a similar high-risk authorization from the same merchant.
   */
  verified_by_fraud_challenge: boolean | null;

  /**
   * The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`. Will populate as `null` when no digital wallet was utilized.
   */
  wallet: string | null;
}
export namespace Issuing {
  export namespace Authorization {
    export interface AmountDetails {
      /**
       * The fee charged by the ATM for the cash withdrawal.
       */
      atm_fee: number | null;

      /**
       * The amount of cash requested by the cardholder.
       */
      cashback_amount: number | null;
    }

    export type AuthorizationMethod =
      | 'chip'
      | 'contactless'
      | 'keyed_in'
      | 'online'
      | 'swipe';

    export interface Fleet {
      /**
       * Answers to prompts presented to the cardholder at the point of sale. Prompted fields vary depending on the configuration of your physical fleet cards. Typical points of sale support only numeric entry.
       */
      cardholder_prompt_data: Fleet.CardholderPromptData | null;

      /**
       * The type of purchase.
       */
      purchase_type: Fleet.PurchaseType | null;

      /**
       * More information about the total amount. Typically this information is received from the merchant after the authorization has been approved and the fuel dispensed. This information is not guaranteed to be accurate as some merchants may provide unreliable data.
       */
      reported_breakdown: Fleet.ReportedBreakdown | null;

      /**
       * The type of fuel service.
       */
      service_type: Fleet.ServiceType | null;
    }

    export interface FraudChallenge {
      /**
       * The method by which the fraud challenge was delivered to the cardholder.
       */
      channel: 'sms';

      /**
       * The status of the fraud challenge.
       */
      status: FraudChallenge.Status;

      /**
       * If the challenge is not deliverable, the reason why.
       */
      undeliverable_reason: FraudChallenge.UndeliverableReason | null;
    }

    export interface Fuel {
      /**
       * [Conexxus Payment System Product Code](https://www.conexxus.org/conexxus-payment-system-product-codes) identifying the primary fuel product purchased.
       */
      industry_product_code: string | null;

      /**
       * The quantity of `unit`s of fuel that was dispensed, represented as a decimal string with at most 12 decimal places.
       */
      quantity_decimal: string | null;

      /**
       * The type of fuel that was purchased.
       */
      type: Fuel.Type | null;

      /**
       * The units for `quantity_decimal`.
       */
      unit: Fuel.Unit | null;

      /**
       * The cost in cents per each unit of fuel, represented as a decimal string with at most 12 decimal places.
       */
      unit_cost_decimal: string | null;
    }

    export interface MerchantData {
      /**
       * A categorization of the seller's type of business. See our [merchant categories guide](https://docs.stripe.com/issuing/merchant-categories) for a list of possible values.
       */
      category: string;

      /**
       * The merchant category code for the seller's business
       */
      category_code: string;

      /**
       * City where the seller is located
       */
      city: string | null;

      /**
       * Country where the seller is located
       */
      country: string | null;

      /**
       * Name of the seller
       */
      name: string | null;

      /**
       * Identifier assigned to the seller by the card network. Different card networks may assign different network_id fields to the same merchant.
       */
      network_id: string;

      /**
       * Postal code where the seller is located
       */
      postal_code: string | null;

      /**
       * State where the seller is located
       */
      state: string | null;

      /**
       * The seller's tax identification number. Currently populated for French merchants only.
       */
      tax_id: string | null;

      /**
       * An ID assigned by the seller to the location of the sale.
       */
      terminal_id: string | null;

      /**
       * URL provided by the merchant on a 3DS request
       */
      url: string | null;
    }

    export interface NetworkData {
      /**
       * Identifier assigned to the acquirer by the card network. Sometimes this value is not provided by the network; in this case, the value will be `null`.
       */
      acquiring_institution_id: string | null;

      /**
       * The System Trace Audit Number (STAN) is a 6-digit identifier assigned by the acquirer. Prefer `network_data.transaction_id` if present, unless you have special requirements.
       */
      system_trace_audit_number: string | null;

      /**
       * Unique identifier for the authorization assigned by the card network used to match subsequent messages, disputes, and transactions.
       */
      transaction_id: string | null;
    }

    export interface PendingRequest {
      /**
       * The additional amount Stripe will hold if the authorization is approved, in the card's [currency](https://docs.stripe.com/api#issuing_authorization_object-pending-request-currency) and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
       */
      amount: number;

      /**
       * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
       */
      amount_details: PendingRequest.AmountDetails | null;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * If set `true`, you may provide [amount](https://docs.stripe.com/api/issuing/authorizations/approve#approve_issuing_authorization-amount) to control how much to hold for the authorization.
       */
      is_amount_controllable: boolean;

      /**
       * The amount the merchant is requesting to be authorized in the `merchant_currency`. The amount is in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
       */
      merchant_amount: number;

      /**
       * The local currency the merchant is requesting to authorize.
       */
      merchant_currency: string;

      /**
       * The card network's estimate of the likelihood that an authorization is fraudulent. Takes on values between 1 and 99.
       */
      network_risk_score: number | null;
    }

    export interface RequestHistory {
      /**
       * The `pending_request.amount` at the time of the request, presented in your card's currency and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). Stripe held this amount from your account to fund the authorization if the request was approved.
       */
      amount: number;

      /**
       * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
       */
      amount_details: RequestHistory.AmountDetails | null;

      /**
       * Whether this request was approved.
       */
      approved: boolean;

      /**
       * A code created by Stripe which is shared with the merchant to validate the authorization. This field will be populated if the authorization message was approved. The code typically starts with the letter "S", followed by a six-digit number. For example, "S498162". Please note that the code is not guaranteed to be unique across authorizations.
       */
      authorization_code: string | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * The `pending_request.merchant_amount` at the time of the request, presented in the `merchant_currency` and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
       */
      merchant_amount: number;

      /**
       * The currency that was collected by the merchant and presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      merchant_currency: string;

      /**
       * The card network's estimate of the likelihood that an authorization is fraudulent. Takes on values between 1 and 99.
       */
      network_risk_score: number | null;

      /**
       * When an authorization is approved or declined by you or by Stripe, this field provides additional detail on the reason for the outcome.
       */
      reason: RequestHistory.Reason;

      /**
       * If the `request_history.reason` is `webhook_error` because the direct webhook response is invalid (for example, parsing errors or missing parameters), we surface a more detailed error message via this field.
       */
      reason_message: string | null;

      /**
       * Time when the card network received an authorization request from the acquirer in UTC. Referred to by networks as transmission time.
       */
      requested_at: number | null;
    }

    export type Status = 'closed' | 'expired' | 'pending' | 'reversed';

    export interface Treasury {
      /**
       * The array of [ReceivedCredits](https://docs.stripe.com/api/treasury/received_credits) associated with this authorization
       */
      received_credits: Array<string>;

      /**
       * The array of [ReceivedDebits](https://docs.stripe.com/api/treasury/received_debits) associated with this authorization
       */
      received_debits: Array<string>;

      /**
       * The Treasury [Transaction](https://docs.stripe.com/api/treasury/transactions) associated with this authorization
       */
      transaction: string | null;
    }

    export interface VerificationData {
      /**
       * Whether the cardholder provided an address first line and if it matched the cardholder's `billing.address.line1`.
       */
      address_line1_check: VerificationData.AddressLine1Check;

      /**
       * Whether the cardholder provided a postal code and if it matched the cardholder's `billing.address.postal_code`.
       */
      address_postal_code_check: VerificationData.AddressPostalCodeCheck;

      /**
       * The exemption applied to this authorization.
       */
      authentication_exemption: VerificationData.AuthenticationExemption | null;

      /**
       * Whether the cardholder provided a CVC and if it matched Stripe's record.
       */
      cvc_check: VerificationData.CvcCheck;

      /**
       * Whether the cardholder provided an expiry date and if it matched Stripe's record.
       */
      expiry_check: VerificationData.ExpiryCheck;

      /**
       * The postal code submitted as part of the authorization used for postal code verification.
       */
      postal_code: string | null;

      /**
       * 3D Secure details.
       */
      three_d_secure: VerificationData.ThreeDSecure | null;
    }

    export namespace Fleet {
      export interface CardholderPromptData {
        /**
         * [Deprecated] An alphanumeric ID, though typical point of sales only support numeric entry. The card program can be configured to prompt for a vehicle ID, driver ID, or generic ID.
         * @deprecated
         */
        alphanumeric_id: string | null;

        /**
         * Driver ID.
         */
        driver_id: string | null;

        /**
         * Odometer reading.
         */
        odometer: number | null;

        /**
         * An alphanumeric ID. This field is used when a vehicle ID, driver ID, or generic ID is entered by the cardholder, but the merchant or card network did not specify the prompt type.
         */
        unspecified_id: string | null;

        /**
         * User ID.
         */
        user_id: string | null;

        /**
         * Vehicle number.
         */
        vehicle_number: string | null;
      }

      export type PurchaseType =
        | 'fuel_and_non_fuel_purchase'
        | 'fuel_purchase'
        | 'non_fuel_purchase';

      export interface ReportedBreakdown {
        /**
         * Breakdown of fuel portion of the purchase.
         */
        fuel: ReportedBreakdown.Fuel | null;

        /**
         * Breakdown of non-fuel portion of the purchase.
         */
        non_fuel: ReportedBreakdown.NonFuel | null;

        /**
         * Information about tax included in this transaction.
         */
        tax: ReportedBreakdown.Tax | null;
      }

      export type ServiceType =
        | 'full_service'
        | 'non_fuel_transaction'
        | 'self_service';

      export namespace ReportedBreakdown {
        export interface Fuel {
          /**
           * Gross fuel amount that should equal Fuel Quantity multiplied by Fuel Unit Cost, inclusive of taxes.
           */
          gross_amount_decimal: string | null;
        }

        export interface NonFuel {
          /**
           * Gross non-fuel amount that should equal the sum of the line items, inclusive of taxes.
           */
          gross_amount_decimal: string | null;
        }

        export interface Tax {
          /**
           * Amount of state or provincial Sales Tax included in the transaction amount. `null` if not reported by merchant or not subject to tax.
           */
          local_amount_decimal: string | null;

          /**
           * Amount of national Sales Tax or VAT included in the transaction amount. `null` if not reported by merchant or not subject to tax.
           */
          national_amount_decimal: string | null;
        }
      }
    }

    export namespace FraudChallenge {
      export type Status =
        | 'expired'
        | 'pending'
        | 'rejected'
        | 'undeliverable'
        | 'verified';

      export type UndeliverableReason =
        | 'no_phone_number'
        | 'unsupported_phone_number';
    }

    export namespace Fuel {
      export type Type =
        | 'diesel'
        | 'other'
        | 'unleaded_plus'
        | 'unleaded_regular'
        | 'unleaded_super';

      export type Unit =
        | 'charging_minute'
        | 'imperial_gallon'
        | 'kilogram'
        | 'kilowatt_hour'
        | 'liter'
        | 'other'
        | 'pound'
        | 'us_gallon';
    }

    export namespace PendingRequest {
      export interface AmountDetails {
        /**
         * The fee charged by the ATM for the cash withdrawal.
         */
        atm_fee: number | null;

        /**
         * The amount of cash requested by the cardholder.
         */
        cashback_amount: number | null;
      }
    }

    export namespace RequestHistory {
      export interface AmountDetails {
        /**
         * The fee charged by the ATM for the cash withdrawal.
         */
        atm_fee: number | null;

        /**
         * The amount of cash requested by the cardholder.
         */
        cashback_amount: number | null;
      }

      export type Reason =
        | 'account_disabled'
        | 'card_active'
        | 'card_canceled'
        | 'card_expired'
        | 'card_inactive'
        | 'cardholder_blocked'
        | 'cardholder_inactive'
        | 'cardholder_verification_required'
        | 'insecure_authorization_method'
        | 'insufficient_funds'
        | 'network_fallback'
        | 'not_allowed'
        | 'pin_blocked'
        | 'spending_controls'
        | 'suspected_fraud'
        | 'verification_failed'
        | 'webhook_approved'
        | 'webhook_declined'
        | 'webhook_error'
        | 'webhook_timeout';
    }

    export namespace VerificationData {
      export type AddressLine1Check = 'match' | 'mismatch' | 'not_provided';

      export type AddressPostalCodeCheck =
        | 'match'
        | 'mismatch'
        | 'not_provided';

      export interface AuthenticationExemption {
        /**
         * The entity that requested the exemption, either the acquiring merchant or the Issuing user.
         */
        claimed_by: AuthenticationExemption.ClaimedBy;

        /**
         * The specific exemption claimed for this authorization.
         */
        type: AuthenticationExemption.Type;
      }

      export type CvcCheck = 'match' | 'mismatch' | 'not_provided';

      export type ExpiryCheck = 'match' | 'mismatch' | 'not_provided';

      export interface ThreeDSecure {
        /**
         * The outcome of the 3D Secure authentication request.
         */
        result: ThreeDSecure.Result;
      }

      export namespace AuthenticationExemption {
        export type ClaimedBy = 'acquirer' | 'issuer';

        export type Type =
          | 'low_value_transaction'
          | 'transaction_risk_analysis'
          | 'unknown';
      }

      export namespace ThreeDSecure {
        export type Result =
          | 'attempt_acknowledged'
          | 'authenticated'
          | 'failed'
          | 'required';
      }
    }
  }
}
export namespace Issuing {
  export interface AuthorizationRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Issuing {
  export interface AuthorizationUpdateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
  }
}
export namespace Issuing {
  export interface AuthorizationListParams extends PaginationParams {
    /**
     * Only return authorizations that belong to the given card.
     */
    card?: string;

    /**
     * Only return authorizations that belong to the given cardholder.
     */
    cardholder?: string;

    /**
     * Only return authorizations that were created during the given date interval.
     */
    created?: RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return authorizations with the given status. One of `pending`, `closed`, or `reversed`.
     */
    status?: AuthorizationListParams.Status;
  }

  export namespace AuthorizationListParams {
    export type Status = 'closed' | 'expired' | 'pending' | 'reversed';
  }
}
export namespace Issuing {
  export interface AuthorizationApproveParams {
    /**
     * If the authorization's `pending_request.is_amount_controllable` property is `true`, you may provide this value to control how much to hold for the authorization. Must be positive (use [`decline`](https://docs.stripe.com/api/issuing/authorizations/decline) to decline an authorization request).
     */
    amount?: number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
  }
}
export namespace Issuing {
  export interface AuthorizationDeclineParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
  }
}
