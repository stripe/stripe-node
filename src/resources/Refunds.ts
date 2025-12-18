// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {RequestOptions} from '../Types.js';
import {BalanceTransaction} from './BalanceTransactions.js';
import {Charge} from './Charges.js';
import {PaymentIntent} from './PaymentIntents.js';
import {TransferReversal} from './TransferReversals.js';
import {
  Emptyable,
  MetadataParam,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../shared.js';
import {ApiListPromise, Response} from '../lib.js';
const stripeMethod = StripeResource.method;
export class RefundResource extends StripeResource {
  /**
   * Returns a list of all refunds you created. We return the refunds in sorted order, with the most recent refunds appearing first. The 10 most recent refunds are always available by default on the Charge object.
   */
  list(
    params?: RefundListParams,
    options?: RequestOptions
  ): ApiListPromise<Refund>;
  list(options?: RequestOptions): ApiListPromise<Refund>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/refunds',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * When you create a new refund, you must specify a Charge or a PaymentIntent object on which to create it.
   *
   * Creating a new refund will refund a charge that has previously been created but not yet refunded.
   * Funds will be refunded to the credit or debit card that was originally charged.
   *
   * You can optionally refund only part of a charge.
   * You can do so multiple times, until the entire charge has been refunded.
   *
   * Once entirely refunded, a charge can't be refunded again.
   * This method will raise an error when called on an already-refunded charge,
   * or when trying to refund more money than is left on a charge.
   */
  create(
    params?: RefundCreateParams,
    options?: RequestOptions
  ): Promise<Response<Refund>>;
  create(options?: RequestOptions): Promise<Response<Refund>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/refunds',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of an existing refund.
   */
  retrieve(
    id: string,
    params?: RefundRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Refund>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Refund>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/refunds/{refund}',
    }).call(this, ...args);
  }

  /**
   * Updates the refund that you specify by setting the values of the passed parameters. Any parameters that you don't provide remain unchanged.
   *
   * This request only accepts metadata as an argument.
   */
  update(
    id: string,
    params?: RefundUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Refund>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/refunds/{refund}',
    }).call(this, ...args);
  }

  /**
   * Cancels a refund with a status of requires_action.
   *
   * You can't cancel refunds in other states. Only refunds for payment methods that require customer action can enter the requires_action state.
   */
  cancel(
    id: string,
    params?: RefundCancelParams,
    options?: RequestOptions
  ): Promise<Response<Refund>>;
  cancel(id: string, options?: RequestOptions): Promise<Response<Refund>>;
  cancel(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/refunds/{refund}/cancel',
    }).call(this, ...args);
  }
}
export /**
 * Refund objects allow you to refund a previously created charge that isn't
 * refunded yet. Funds are refunded to the credit or debit card that's
 * initially charged.
 *
 * Related guide: [Refunds](https://stripe.com/docs/refunds)
 */
interface Refund {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'refund';

  /**
   * Amount, in cents (or local equivalent).
   */
  amount: number;

  /**
   * Balance transaction that describes the impact on your account balance.
   */
  balance_transaction: string | BalanceTransaction | null;

  /**
   * ID of the charge that's refunded.
   */
  charge: string | Charge | null;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * An arbitrary string attached to the object. You can use this for displaying to users (available on non-card refunds only).
   */
  description?: string;

  destination_details?: Refund.DestinationDetails;

  /**
   * After the refund fails, this balance transaction describes the adjustment made on your account balance that reverses the initial balance transaction.
   */
  failure_balance_transaction?: string | BalanceTransaction;

  /**
   * Provides the reason for the refund failure. Possible values are: `lost_or_stolen_card`, `expired_or_canceled_card`, `charge_for_pending_refund_disputed`, `insufficient_funds`, `declined`, `merchant_request`, or `unknown`.
   */
  failure_reason?: string;

  /**
   * For payment methods without native refund support (for example, Konbini, PromptPay), provide an email address for the customer to receive refund instructions.
   */
  instructions_email?: string;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  next_action?: Refund.NextAction;

  /**
   * ID of the PaymentIntent that's refunded.
   */
  payment_intent: string | PaymentIntent | null;

  /**
   * Provides the reason for why the refund is pending. Possible values are: `processing`, `insufficient_funds`, or `charge_pending`.
   */
  pending_reason?: Refund.PendingReason;

  presentment_details?: Refund.PresentmentDetails;

  /**
   * Reason for the refund, which is either user-provided (`duplicate`, `fraudulent`, or `requested_by_customer`) or generated by Stripe internally (`expired_uncaptured_charge`).
   */
  reason: Refund.Reason | null;

  /**
   * This is the transaction number that appears on email receipts sent for this refund.
   */
  receipt_number: string | null;

  /**
   * The transfer reversal that's associated with the refund. Only present if the charge came from another Stripe account.
   */
  source_transfer_reversal: string | TransferReversal | null;

  /**
   * Status of the refund. This can be `pending`, `requires_action`, `succeeded`, `failed`, or `canceled`. Learn more about [failed refunds](https://stripe.com/docs/refunds#failed-refunds).
   */
  status: string | null;

  /**
   * This refers to the transfer reversal object if the accompanying transfer reverses. This is only applicable if the charge was created using the destination parameter.
   */
  transfer_reversal: string | TransferReversal | null;
}
export namespace Refund {
  export interface DestinationDetails {
    affirm?: DestinationDetails.Affirm;

    afterpay_clearpay?: DestinationDetails.AfterpayClearpay;

    alipay?: DestinationDetails.Alipay;

    alma?: DestinationDetails.Alma;

    amazon_pay?: DestinationDetails.AmazonPay;

    au_bank_transfer?: DestinationDetails.AuBankTransfer;

    blik?: DestinationDetails.Blik;

    br_bank_transfer?: DestinationDetails.BrBankTransfer;

    card?: DestinationDetails.Card;

    cashapp?: DestinationDetails.Cashapp;

    crypto?: DestinationDetails.Crypto;

    customer_cash_balance?: DestinationDetails.CustomerCashBalance;

    eps?: DestinationDetails.Eps;

    eu_bank_transfer?: DestinationDetails.EuBankTransfer;

    gb_bank_transfer?: DestinationDetails.GbBankTransfer;

    giropay?: DestinationDetails.Giropay;

    grabpay?: DestinationDetails.Grabpay;

    jp_bank_transfer?: DestinationDetails.JpBankTransfer;

    klarna?: DestinationDetails.Klarna;

    multibanco?: DestinationDetails.Multibanco;

    mx_bank_transfer?: DestinationDetails.MxBankTransfer;

    nz_bank_transfer?: DestinationDetails.NzBankTransfer;

    p24?: DestinationDetails.P24;

    paynow?: DestinationDetails.Paynow;

    paypal?: DestinationDetails.Paypal;

    pix?: DestinationDetails.Pix;

    revolut?: DestinationDetails.Revolut;

    sofort?: DestinationDetails.Sofort;

    swish?: DestinationDetails.Swish;

    th_bank_transfer?: DestinationDetails.ThBankTransfer;

    /**
     * The type of transaction-specific details of the payment method used in the refund (e.g., `card`). An additional hash is included on `destination_details` with a name matching this value. It contains information specific to the refund transaction.
     */
    type: string;

    us_bank_transfer?: DestinationDetails.UsBankTransfer;

    wechat_pay?: DestinationDetails.WechatPay;

    zip?: DestinationDetails.Zip;
  }

  export interface NextAction {
    display_details?: NextAction.DisplayDetails;

    /**
     * Type of the next action to perform.
     */
    type: string;
  }

  export type PendingReason =
    | 'charge_pending'
    | 'insufficient_funds'
    | 'processing';

  export interface PresentmentDetails {
    /**
     * Amount intended to be collected by this payment, denominated in `presentment_currency`.
     */
    presentment_amount: number;

    /**
     * Currency presented to the customer during payment.
     */
    presentment_currency: string;
  }

  export type Reason =
    | 'duplicate'
    | 'expired_uncaptured_charge'
    | 'fraudulent'
    | 'requested_by_customer';

  export namespace DestinationDetails {
    export interface Affirm {}

    export interface AfterpayClearpay {}

    export interface Alipay {}

    export interface Alma {}

    export interface AmazonPay {}

    export interface AuBankTransfer {}

    export interface Blik {
      /**
       * For refunds declined by the network, a decline code provided by the network which indicates the reason the refund failed.
       */
      network_decline_code: string | null;

      /**
       * The reference assigned to the refund.
       */
      reference: string | null;

      /**
       * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
       */
      reference_status: string | null;
    }

    export interface BrBankTransfer {
      /**
       * The reference assigned to the refund.
       */
      reference: string | null;

      /**
       * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
       */
      reference_status: string | null;
    }

    export interface Card {
      /**
       * Value of the reference number assigned to the refund.
       */
      reference?: string;

      /**
       * Status of the reference number on the refund. This can be `pending`, `available` or `unavailable`.
       */
      reference_status?: string;

      /**
       * Type of the reference number assigned to the refund.
       */
      reference_type?: string;

      /**
       * The type of refund. This can be `refund`, `reversal`, or `pending`.
       */
      type: Card.Type;
    }

    export interface Cashapp {}

    export interface Crypto {
      /**
       * The transaction hash of the refund.
       */
      reference: string | null;
    }

    export interface CustomerCashBalance {}

    export interface Eps {}

    export interface EuBankTransfer {
      /**
       * The reference assigned to the refund.
       */
      reference: string | null;

      /**
       * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
       */
      reference_status: string | null;
    }

    export interface GbBankTransfer {
      /**
       * The reference assigned to the refund.
       */
      reference: string | null;

      /**
       * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
       */
      reference_status: string | null;
    }

    export interface Giropay {}

    export interface Grabpay {}

    export interface JpBankTransfer {
      /**
       * The reference assigned to the refund.
       */
      reference: string | null;

      /**
       * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
       */
      reference_status: string | null;
    }

    export interface Klarna {}

    export interface Multibanco {
      /**
       * The reference assigned to the refund.
       */
      reference: string | null;

      /**
       * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
       */
      reference_status: string | null;
    }

    export interface MxBankTransfer {
      /**
       * The reference assigned to the refund.
       */
      reference: string | null;

      /**
       * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
       */
      reference_status: string | null;
    }

    export interface NzBankTransfer {}

    export interface P24 {
      /**
       * The reference assigned to the refund.
       */
      reference: string | null;

      /**
       * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
       */
      reference_status: string | null;
    }

    export interface Paynow {}

    export interface Paypal {
      /**
       * For refunds declined by the network, a decline code provided by the network which indicates the reason the refund failed.
       */
      network_decline_code: string | null;
    }

    export interface Pix {}

    export interface Revolut {}

    export interface Sofort {}

    export interface Swish {
      /**
       * For refunds declined by the network, a decline code provided by the network which indicates the reason the refund failed.
       */
      network_decline_code: string | null;

      /**
       * The reference assigned to the refund.
       */
      reference: string | null;

      /**
       * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
       */
      reference_status: string | null;
    }

    export interface ThBankTransfer {
      /**
       * The reference assigned to the refund.
       */
      reference: string | null;

      /**
       * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
       */
      reference_status: string | null;
    }

    export interface UsBankTransfer {
      /**
       * The reference assigned to the refund.
       */
      reference: string | null;

      /**
       * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
       */
      reference_status: string | null;
    }

    export interface WechatPay {}

    export interface Zip {}

    export namespace Card {
      export type Type = 'pending' | 'refund' | 'reversal';
    }
  }

  export namespace NextAction {
    export interface DisplayDetails {
      email_sent: DisplayDetails.EmailSent;

      /**
       * The expiry timestamp.
       */
      expires_at: number;
    }

    export namespace DisplayDetails {
      export interface EmailSent {
        /**
         * The timestamp when the email was sent.
         */
        email_sent_at: number;

        /**
         * The recipient's email address.
         */
        email_sent_to: string;
      }
    }
  }
}
export interface RefundCreateParams {
  amount?: number;

  /**
   * The identifier of the charge to refund.
   */
  charge?: string;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string;

  /**
   * Customer whose customer balance to refund from.
   */
  customer?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * For payment methods without native refund support (e.g., Konbini, PromptPay), use this email from the customer to receive refund instructions.
   */
  instructions_email?: string;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;

  /**
   * Origin of the refund
   */
  origin?: 'customer_balance';

  /**
   * The identifier of the PaymentIntent to refund.
   */
  payment_intent?: string;

  /**
   * String indicating the reason for the refund. If set, possible values are `duplicate`, `fraudulent`, and `requested_by_customer`. If you believe the charge to be fraudulent, specifying `fraudulent` as the reason will add the associated card and email to your [block lists](https://stripe.com/docs/radar/lists), and will also help us improve our fraud detection algorithms.
   */
  reason?: RefundCreateParams.Reason;

  /**
   * Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Otherwise, the application fee will be refunded in an amount proportional to the amount of the charge refunded. An application fee can be refunded only by the application that created the charge.
   */
  refund_application_fee?: boolean;

  /**
   * Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed proportionally to the amount being refunded (either the entire or partial amount).
   *
   * A transfer can be reversed only by the application that created the charge.
   */
  reverse_transfer?: boolean;
}
export namespace RefundCreateParams {
  export type Reason = 'duplicate' | 'fraudulent' | 'requested_by_customer';
}
export interface RefundRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface RefundUpdateParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;
}
export interface RefundListParams extends PaginationParams {
  /**
   * Only return refunds for the charge specified by this charge ID.
   */
  charge?: string;

  /**
   * Only return refunds that were created during the given date interval.
   */
  created?: RangeQueryParam | number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Only return refunds for the PaymentIntent specified by this ID.
   */
  payment_intent?: string;
}
export interface RefundCancelParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
