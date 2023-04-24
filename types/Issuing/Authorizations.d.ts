// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      /**
       * When an [issued card](https://stripe.com/docs/issuing) is used to make a purchase, an Issuing `Authorization`
       * object is created. [Authorizations](https://stripe.com/docs/issuing/purchases/authorizations) must be approved for the
       * purchase to be completed successfully.
       *
       * Related guide: [Issued Card Authorizations](https://stripe.com/docs/issuing/purchases/authorizations).
       */
      interface Authorization {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'issuing.authorization';

        /**
         * The total amount that was authorized or rejected. This amount is in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
         */
        amount: number;

        /**
         * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
         */
        amount_details: Authorization.AmountDetails | null;

        /**
         * Whether the authorization has been approved.
         */
        approved: boolean;

        /**
         * How the card details were provided.
         */
        authorization_method: Authorization.AuthorizationMethod;

        /**
         * List of balance transactions associated with this authorization.
         */
        balance_transactions: Array<Stripe.BalanceTransaction>;

        /**
         * You can [create physical or virtual cards](https://stripe.com/docs/issuing/cards) that are issued to cardholders.
         */
        card: Stripe.Issuing.Card;

        /**
         * The cardholder to whom this authorization belongs.
         */
        cardholder: string | Stripe.Issuing.Cardholder | null;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The total amount that was authorized or rejected. This amount is in the `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
         */
        merchant_amount: number;

        /**
         * The currency that was presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        merchant_currency: string;

        merchant_data: Authorization.MerchantData;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * Details about the authorization, such as identifiers, set by the card network.
         */
        network_data: Authorization.NetworkData | null;

        /**
         * The pending authorization request. This field will only be non-null during an `issuing_authorization.request` webhook.
         */
        pending_request: Authorization.PendingRequest | null;

        /**
         * History of every time a `pending_request` authorization was approved/declined, either by you directly or by Stripe (e.g. based on your spending_controls). If the merchant changes the authorization by performing an incremental authorization, you can look at this field to see the previous requests for the authorization. This field can be helpful in determining why a given authorization was approved/declined.
         */
        request_history: Array<Authorization.RequestHistory>;

        /**
         * The current status of the authorization in its lifecycle.
         */
        status: Authorization.Status;

        /**
         * List of [transactions](https://stripe.com/docs/api/issuing/transactions) associated with this authorization.
         */
        transactions: Array<Stripe.Issuing.Transaction>;

        /**
         * [Treasury](https://stripe.com/docs/api/treasury) details related to this authorization if it was created on a [FinancialAccount](https://stripe.com/docs/api/treasury/financial_accounts).
         */
        treasury?: Authorization.Treasury | null;

        verification_data: Authorization.VerificationData;

        /**
         * The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`. Will populate as `null` when no digital wallet was utilized.
         */
        wallet: string | null;
      }

      namespace Authorization {
        interface AmountDetails {
          /**
           * The fee charged by the ATM for the cash withdrawal.
           */
          atm_fee: number | null;
        }

        type AuthorizationMethod =
          | 'chip'
          | 'contactless'
          | 'keyed_in'
          | 'online'
          | 'swipe';

        interface MerchantData {
          /**
           * A categorization of the seller's type of business. See our [merchant categories guide](https://stripe.com/docs/issuing/merchant-categories) for a list of possible values.
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
           * An ID assigned by the seller to the location of the sale.
           */
          terminal_id: string | null;
        }

        interface NetworkData {
          /**
           * Identifier assigned to the acquirer by the card network. Sometimes this value is not provided by the network; in this case, the value will be `null`.
           */
          acquiring_institution_id: string | null;
        }

        interface PendingRequest {
          /**
           * The additional amount Stripe will hold if the authorization is approved, in the card's [currency](https://stripe.com/docs/api#issuing_authorization_object-pending-request-currency) and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          amount: number;

          /**
           * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          amount_details: PendingRequest.AmountDetails | null;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * If set `true`, you may provide [amount](https://stripe.com/docs/api/issuing/authorizations/approve#approve_issuing_authorization-amount) to control how much to hold for the authorization.
           */
          is_amount_controllable: boolean;

          /**
           * The amount the merchant is requesting to be authorized in the `merchant_currency`. The amount is in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          merchant_amount: number;

          /**
           * The local currency the merchant is requesting to authorize.
           */
          merchant_currency: string;
        }

        namespace PendingRequest {
          interface AmountDetails {
            /**
             * The fee charged by the ATM for the cash withdrawal.
             */
            atm_fee: number | null;
          }
        }

        interface RequestHistory {
          /**
           * The `pending_request.amount` at the time of the request, presented in your card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Stripe held this amount from your account to fund the authorization if the request was approved.
           */
          amount: number;

          /**
           * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          amount_details: RequestHistory.AmountDetails | null;

          /**
           * Whether this request was approved.
           */
          approved: boolean;

          /**
           * Time at which the object was created. Measured in seconds since the Unix epoch.
           */
          created: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * The `pending_request.merchant_amount` at the time of the request, presented in the `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          merchant_amount: number;

          /**
           * The currency that was collected by the merchant and presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          merchant_currency: string;

          /**
           * When an authorization is approved or declined by you or by Stripe, this field provides additional detail on the reason for the outcome.
           */
          reason: RequestHistory.Reason;

          /**
           * If approve/decline decision is directly responsed to the webhook with json payload and if the response is invalid (e.g., parsing errors), we surface the detailed message via this field.
           */
          reason_message: string | null;
        }

        namespace RequestHistory {
          interface AmountDetails {
            /**
             * The fee charged by the ATM for the cash withdrawal.
             */
            atm_fee: number | null;
          }

          type Reason =
            | 'account_disabled'
            | 'card_active'
            | 'card_inactive'
            | 'cardholder_inactive'
            | 'cardholder_verification_required'
            | 'insufficient_funds'
            | 'not_allowed'
            | 'spending_controls'
            | 'suspected_fraud'
            | 'verification_failed'
            | 'webhook_approved'
            | 'webhook_declined'
            | 'webhook_error'
            | 'webhook_timeout';
        }

        type Status = 'closed' | 'pending' | 'reversed';

        interface Treasury {
          /**
           * The array of [ReceivedCredits](https://stripe.com/docs/api/treasury/received_credits) associated with this authorization
           */
          received_credits: Array<string>;

          /**
           * The array of [ReceivedDebits](https://stripe.com/docs/api/treasury/received_debits) associated with this authorization
           */
          received_debits: Array<string>;

          /**
           * The Treasury [Transaction](https://stripe.com/docs/api/treasury/transactions) associated with this authorization
           */
          transaction: string | null;
        }

        interface VerificationData {
          /**
           * Whether the cardholder provided an address first line and if it matched the cardholder's `billing.address.line1`.
           */
          address_line1_check: VerificationData.AddressLine1Check;

          /**
           * Whether the cardholder provided a postal code and if it matched the cardholder's `billing.address.postal_code`.
           */
          address_postal_code_check: VerificationData.AddressPostalCodeCheck;

          /**
           * Whether the cardholder provided a CVC and if it matched Stripe's record.
           */
          cvc_check: VerificationData.CvcCheck;

          /**
           * Whether the cardholder provided an expiry date and if it matched Stripe's record.
           */
          expiry_check: VerificationData.ExpiryCheck;
        }

        namespace VerificationData {
          type AddressLine1Check = 'match' | 'mismatch' | 'not_provided';

          type AddressPostalCodeCheck = 'match' | 'mismatch' | 'not_provided';

          type CvcCheck = 'match' | 'mismatch' | 'not_provided';

          type ExpiryCheck = 'match' | 'mismatch' | 'not_provided';
        }
      }
    }
  }
}
