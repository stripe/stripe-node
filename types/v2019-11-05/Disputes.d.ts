declare namespace Stripe {
  /**
   * The Dispute object.
   */
  interface Dispute {
    /**
     * Disputed amount. Usually the amount of the charge, but can differ (usually because of currency fluctuation or because only part of the order is disputed).
     */
    amount?: number;

    /**
     * List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute.
     */
    balance_transactions?: Array<BalanceTransaction>;

    /**
     * ID of the charge that was disputed.
     */
    charge?: string | Charge;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    evidence?: Evidence;

    evidence_details?: EvidenceDetails;

    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * If true, it is still possible to refund the disputed payment. Once the payment has been fully refunded, no further funds will be withdrawn from your Stripe account as a result of this dispute.
     */
    is_charge_refundable?: boolean;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * Network-dependent reason code for the dispute.
     */
    network_reason_code?: string | null;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'dispute';

    /**
     * ID of the PaymentIntent that was disputed.
     */
    payment_intent?: string | PaymentIntent | null;

    /**
     * Reason given by cardholder for dispute. Possible values are `bank_cannot_process`, `check_returned`, `credit_not_processed`, `customer_initiated`, `debit_not_authorized`, `duplicate`, `fraudulent`, `general`, `incorrect_account_details`, `insufficient_funds`, `product_not_received`, `product_unacceptable`, `subscription_canceled`, or `unrecognized`. Read more about [dispute reasons](https://stripe.com/docs/disputes/categories).
     */
    reason?: string;

    /**
     * Current status of dispute. Possible values are `warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `charge_refunded`, `won`, or `lost`.
     */
    status?: Dispute.Status;
  }

  namespace Dispute {
    type Status =
      | 'charge_refunded'
      | 'lost'
      | 'needs_response'
      | 'under_review'
      | 'warning_closed'
      | 'warning_needs_response'
      | 'warning_under_review'
      | 'won'
  }

  /**
   * Returns a list of your disputes.
   */
  interface DisputeListParams {
    /**
     * Only return disputes associated to the charge specified by this charge ID.
     */
    charge?: string;

    created?: number | DisputeListParams.Created;

    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * Only return disputes associated to the PaymentIntent specified by this PaymentIntent ID.
     */
    payment_intent?: string;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  namespace DisputeListParams {
    interface Created {
      /**
       * Minimum value to filter by (exclusive)
       */
      gt?: number;

      /**
       * Minimum value to filter by (inclusive)
       */
      gte?: number;

      /**
       * Maximum value to filter by (exclusive)
       */
      lt?: number;

      /**
       * Maximum value to filter by (inclusive)
       */
      lte?: number;
    }
  }

  /**
   * Retrieves the dispute with the given ID.
   */
  interface DisputeRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * When you get a dispute, contacting your customer is always the best first step. If that doesn't work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your [dashboard](https://dashboard.stripe.com/disputes), but if you prefer, you can use the API to submit evidence programmatically.
   *
   * Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our [guide to dispute types](https://stripe.com/docs/disputes/categories).
   */
  interface DisputeUpdateParams {
    /**
     * Evidence to upload, to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review. The combined character count of all fields is limited to 150,000.
     */
    evidence?: DisputeUpdateParams.Evidence;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A set of key-value pairs that you can attach to a dispute object. This can be useful for storing additional information about the dispute in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * Whether to immediately submit evidence to the bank. If `false`, evidence is staged on the dispute. Staged evidence is visible in the API and Dashboard, and can be submitted to the bank by making another request with this attribute set to `true` (the default).
     */
    submit?: boolean;
  }

  namespace DisputeUpdateParams {
    interface Evidence {
      /**
       * Has a maximum character count of 20,000.
       */
      access_activity_log?: string;

      billing_address?: string;

      cancellation_policy?: string;

      /**
       * Has a maximum character count of 20,000.
       */
      cancellation_policy_disclosure?: string;

      /**
       * Has a maximum character count of 20,000.
       */
      cancellation_rebuttal?: string;

      customer_communication?: string;

      customer_email_address?: string;

      customer_name?: string;

      customer_purchase_ip?: string;

      customer_signature?: string;

      duplicate_charge_documentation?: string;

      /**
       * Has a maximum character count of 20,000.
       */
      duplicate_charge_explanation?: string;

      duplicate_charge_id?: string;

      /**
       * Has a maximum character count of 20,000.
       */
      product_description?: string;

      receipt?: string;

      refund_policy?: string;

      /**
       * Has a maximum character count of 20,000.
       */
      refund_policy_disclosure?: string;

      /**
       * Has a maximum character count of 20,000.
       */
      refund_refusal_explanation?: string;

      service_date?: string;

      service_documentation?: string;

      shipping_address?: string;

      shipping_carrier?: string;

      shipping_date?: string;

      shipping_documentation?: string;

      shipping_tracking_number?: string;

      uncategorized_file?: string;

      /**
       * Has a maximum character count of 20,000.
       */
      uncategorized_text?: string;
    }
  }

  /**
   * Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.
   *
   * The status of the dispute will change from needs_response to lost. Closing a dispute is irreversible.
   */
  interface DisputeCloseParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  class DisputesResource {
    /**
     * Returns a list of your disputes.
     */
    list(
      params?: DisputeListParams,
      options?: HeaderOptions
    ): Promise<ApiList<Dispute>>;

    /**
     * Retrieves the dispute with the given ID.
     */
    retrieve(
      id: string,
      params?: DisputeRetrieveParams,
      options?: HeaderOptions
    ): Promise<Dispute>;

    /**
     * When you get a dispute, contacting your customer is always the best first step. If that doesn't work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your [dashboard](https://dashboard.stripe.com/disputes), but if you prefer, you can use the API to submit evidence programmatically.
     *
     * Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our [guide to dispute types](https://stripe.com/docs/disputes/categories).
     */
    update(
      id: string,
      params?: DisputeUpdateParams,
      options?: HeaderOptions
    ): Promise<Dispute>;

    /**
     * Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.
     *
     * The status of the dispute will change from needs_response to lost. Closing a dispute is irreversible.
     */
    close(
      id: string,
      params?: DisputeCloseParams,
      options?: HeaderOptions
    ): Promise<Dispute>;
  }
}