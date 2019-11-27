declare namespace Stripe {
  /**
   * The Charge object.
   */
  interface Charge {
    alternate_statement_descriptors?: AlternateStatementDescriptors;

    /**
     * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
     */
    amount?: number;

    /**
     * Amount in %s refunded (can be less than the amount attribute on the charge if a partial refund was issued).
     */
    amount_refunded?: number;

    /**
     * ID of the Connect application that created the charge.
     */
    application?: string | Application | null;

    /**
     * The application fee (if any) for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collecting-fees) for details.
     */
    application_fee?: string | ApplicationFee | null;

    /**
     * The amount of the application fee (if any) for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collecting-fees) for details.
     */
    application_fee_amount?: number | null;

    /**
     * Authorization code on the charge.
     */
    authorization_code?: string;

    /**
     * ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes).
     */
    balance_transaction?: string | BalanceTransaction | null;

    billing_details?: BillingDetails;

    /**
     * If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured.
     */
    captured?: boolean;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * ID of the customer this charge is for if one exists.
     */
    customer?: string | Customer | null;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string | null;

    /**
     * ID of an existing, connected Stripe account to transfer funds to if `transfer_data` was specified in the charge request.
     */
    destination?: string | Account | null;

    /**
     * Details about the dispute if the charge has been disputed.
     */
    dispute?: string | Dispute | null;

    /**
     * Whether the charge has been disputed.
     */
    disputed?: boolean;

    /**
     * Error code explaining reason for charge failure if available (see [the errors section](https://stripe.com/docs/api#errors) for a list of codes).
     */
    failure_code?: string | null;

    /**
     * Message to user further explaining reason for charge failure if available.
     */
    failure_message?: string | null;

    /**
     * Information on fraud assessments for the charge.
     */
    fraud_details?: FraudDetails | null;

    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * ID of the invoice this charge is for if one exists.
     */
    invoice?: string | Invoice | null;

    level3?: Level3;

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
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'charge';

    /**
     * The account (if any) the charge was made on behalf of without triggering an automatic transfer. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers) for details.
     */
    on_behalf_of?: string | Account | null;

    /**
     * ID of the order this charge is for if one exists.
     */
    order?: string | Order | null;

    /**
     * Details about whether the payment was accepted, and why. See [understanding declines](https://stripe.com/docs/declines) for details.
     */
    outcome?: Outcome | null;

    /**
     * `true` if the charge succeeded, or was successfully authorized for later capture.
     */
    paid?: boolean;

    /**
     * ID of the PaymentIntent associated with this charge, if one exists.
     */
    payment_intent?: string | null;

    /**
     * ID of the payment method used in this charge.
     */
    payment_method?: string | null;

    /**
     * Details about the payment method at the time of the transaction.
     */
    payment_method_details?: PaymentMethodDetails | null;

    /**
     * This is the email address that the receipt for this charge was sent to.
     */
    receipt_email?: string | null;

    /**
     * This is the transaction number that appears on email receipts sent for this charge. This attribute will be `null` until a receipt has been sent.
     */
    receipt_number?: string | null;

    /**
     * This is the URL to view the receipt for this charge. The receipt is kept up-to-date to the latest state of the charge, including any refunds. If the charge is for an Invoice, the receipt will be stylized as an Invoice receipt.
     */
    receipt_url?: string;

    /**
     * Whether the charge has been fully refunded. If the charge is only partially refunded, this attribute will still be false.
     */
    refunded?: boolean;

    /**
     * A list of refunds that have been applied to the charge.
     */
    refunds?: ApiList<Refund>;

    /**
     * ID of the review associated with this charge if one exists.
     */
    review?: string | Review | null;

    /**
     * Shipping information for the charge.
     */
    shipping?: ShippingDetails | null;

    /**
     * This is a legacy field that will be removed in the future. It contains the Source, Card, or BankAccount object used for the charge. For details about the payment method used for this charge, refer to `payment_method` or `payment_method_details` instead.
     */
    source?:
      | Account
      | AlipayAccount
      | BankAccount
      | BitcoinReceiver
      | Card
      | Source
      | null;

    /**
     * The transfer ID which created this charge. Only present if the charge came from another Stripe account. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
     */
    source_transfer?: string | Transfer | null;

    /**
     * For card charges, use `statement_descriptor_suffix` instead. Otherwise, you can use this value as the complete description of a charge on your customers' statements. Must contain at least one letter, maximum 22 characters.
     */
    statement_descriptor?: string | null;

    /**
     * Provides information about the charge that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
     */
    statement_descriptor_suffix?: string | null;

    /**
     * The status of the payment is either `succeeded`, `pending`, or `failed`.
     */
    status?: string;

    /**
     * ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter).
     */
    transfer?: string | Transfer;

    /**
     * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
     */
    transfer_data?: TransferData | null;

    /**
     * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#grouping-transactions) for details.
     */
    transfer_group?: string | null;
  }

  /**
   * To charge a credit card or other payment source, you create a Charge object. If your API key is in test mode, the supplied payment source (e.g., card) won't actually be charged, although everything else will occur as if in live mode. (Stripe assumes that the charge would have completed successfully).
   */
  interface ChargeCreateParams {
    /**
     * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
     */
    amount?: number;

    application_fee?: number;

    /**
     * A fee in %s that will be applied to the charge and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the `Stripe-Account` header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/connect/direct-charges#collecting-fees).
     */
    application_fee_amount?: number;

    /**
     * Whether to immediately capture the charge. Defaults to `true`. When `false`, the charge issues an authorization (or pre-authorization), and will need to be [captured](#capture_charge) later. Uncaptured charges expire in _seven days_. For more information, see the [authorizing charges and settling later](https://stripe.com/docs/charges/placing-a-hold) documentation.
     */
    capture?: boolean;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * The ID of an existing customer that will be charged in this request.
     */
    customer?: string;

    /**
     * An arbitrary string which you can attach to a `Charge` object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
     */
    description?: string;

    destination?: ChargeCreateParams.Destination;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * The Stripe account ID for which these funds are intended. Automatically set if you use the `destination` parameter. For details, see [Creating Separate Charges and Transfers](https://stripe.com/docs/connect/charges-transfers#on-behalf-of).
     */
    on_behalf_of?: string;

    /**
     * The email address to which this charge's [receipt](https://stripe.com/docs/dashboard/receipts) will be sent. The receipt will not be sent until the charge is paid, and no receipts will be sent for test mode charges. If this charge is for a [Customer](https://stripe.com/docs/api/customers/object), the email address specified here will override the customer's email address. If `receipt_email` is specified for a charge in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
     */
    receipt_email?: string;

    /**
     * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
     */
    shipping?: ChargeCreateParams.Shipping;

    /**
     * A payment source to be charged. This can be the ID of a [card](https://stripe.com/docs/api#cards) (i.e., credit or debit card), a [bank account](https://stripe.com/docs/api#bank_accounts), a [source](https://stripe.com/docs/api#sources), a [token](https://stripe.com/docs/api#tokens), or a [connected account](https://stripe.com/docs/connect/account-debits#charging-a-connected-account). For certain sources---namely, [cards](https://stripe.com/docs/api#cards), [bank accounts](https://stripe.com/docs/api#bank_accounts), and attached [sources](https://stripe.com/docs/api#sources)---you must also pass the ID of the associated customer.
     */
    source?: string;

    /**
     * For card charges, use `statement_descriptor_suffix` instead. Otherwise, you can use this value as the complete description of a charge on your customers' statements. Must contain at least one letter, maximum 22 characters.
     */
    statement_descriptor?: string;

    /**
     * Provides information about the charge that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
     */
    statement_descriptor_suffix?: string;

    /**
     * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
     */
    transfer_data?: ChargeCreateParams.TransferData;

    /**
     * A string that identifies this transaction as part of a group. For details, see [Grouping transactions](https://stripe.com/docs/connect/charges-transfers#grouping-transactions).
     */
    transfer_group?: string;
  }

  namespace ChargeCreateParams {
    interface Destination {
      /**
       * ID of an existing, connected Stripe account.
       */
      account: string;

      /**
       * The amount to transfer to the destination account without creating an `Application Fee` object. Cannot be combined with the `application_fee` parameter. Must be less than or equal to the charge amount.
       */
      amount?: number;
    }

    interface Shipping {
      /**
       * Shipping address.
       */
      address: Shipping.Address;

      /**
       * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
       */
      carrier?: string;

      /**
       * Recipient name.
       */
      name: string;

      /**
       * Recipient phone (including extension).
       */
      phone?: string;

      /**
       * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
       */
      tracking_number?: string;
    }

    namespace Shipping {
      interface Address {
        city?: string;

        country?: string;

        line1: string;

        line2?: string;

        postal_code?: string;

        state?: string;
      }
    }

    interface TransferData {
      /**
       * The amount transferred to the destination account, if specified. By default, the entire charge amount is transferred to the destination account.
       */
      amount?: number;

      /**
       * ID of an existing, connected Stripe account.
       */
      destination: string;
    }
  }

  /**
   * Returns a list of charges you've previously created. The charges are returned in sorted order, with the most recent charges appearing first.
   */
  interface ChargeListParams {
    created?: number | ChargeListParams.Created;

    /**
     * Only return charges for the customer specified by this customer ID.
     */
    customer?: string;

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
     * Only return charges that were created by the PaymentIntent specified by this PaymentIntent ID.
     */
    payment_intent?: string;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;

    /**
     * Only return charges for this transfer group.
     */
    transfer_group?: string;
  }

  namespace ChargeListParams {
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
   * Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.
   */
  interface ChargeRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   */
  interface ChargeUpdateParams {
    /**
     * The ID of an existing customer that will be associated with this request. This field may only be updated if there is no existing associated customer with this charge.
     */
    customer?: string;

    /**
     * An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
     */
    description?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A set of key-value pairs you can attach to a charge giving information about its riskiness. If you believe a charge is fraudulent, include a `user_report` key with a value of `fraudulent`. If you believe a charge is safe, include a `user_report` key with a value of `safe`. Stripe will use the information you send to improve our fraud detection algorithms.
     */
    fraud_details?: ChargeUpdateParams.FraudDetails;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * This is the email address that the receipt for this charge will be sent to. If this field is updated, then a new email receipt will be sent to the updated address.
     */
    receipt_email?: string;

    /**
     * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
     */
    shipping?: ChargeUpdateParams.Shipping;

    /**
     * A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#grouping-transactions) for details.
     */
    transfer_group?: string;
  }

  namespace ChargeUpdateParams {
    interface FraudDetails {
      user_report: '' | FraudDetails.UserReport;
    }

    namespace FraudDetails {
      type UserReport = 'fraudulent' | 'safe'
    }

    interface Shipping {
      /**
       * Shipping address.
       */
      address: Shipping.Address;

      /**
       * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
       */
      carrier?: string;

      /**
       * Recipient name.
       */
      name: string;

      /**
       * Recipient phone (including extension).
       */
      phone?: string;

      /**
       * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
       */
      tracking_number?: string;
    }

    namespace Shipping {
      interface Address {
        city?: string;

        country?: string;

        line1: string;

        line2?: string;

        postal_code?: string;

        state?: string;
      }
    }
  }

  /**
   * Capture the payment of an existing, uncaptured, charge. This is the second half of the two-step payment flow, where first you [created a charge](https://stripe.com/docs/api#create_charge) with the capture option set to false.
   *
   * Uncaptured payments expire exactly seven days after they are created. If they are not captured by that point in time, they will be marked as refunded and will no longer be capturable.
   */
  interface ChargeCaptureParams {
    /**
     * The amount to capture, which must be less than or equal to the original amount. Any additional amount will be automatically refunded.
     */
    amount?: number;

    /**
     * An application fee to add on to this charge. Can only be used with Stripe Connect.
     */
    application_fee?: number;

    /**
     * An application fee amount to add on to this charge, which must be less than or equal to the original amount. Can only be used with Stripe Connect.
     */
    application_fee_amount?: number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The email address to send this charge's receipt to. This will override the previously-specified email address for this charge, if one was set. Receipts will not be sent in test mode.
     */
    receipt_email?: string;

    /**
     * For card charges, use `statement_descriptor_suffix` instead. Otherwise, you can use this value as the complete description of a charge on your customers' statements. Must contain at least one letter, maximum 22 characters.
     */
    statement_descriptor?: string;

    /**
     * Provides information about the charge that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
     */
    statement_descriptor_suffix?: string;

    /**
     * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
     */
    transfer_data?: ChargeCaptureParams.TransferData;

    /**
     * A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#grouping-transactions) for details.
     */
    transfer_group?: string;
  }

  namespace ChargeCaptureParams {
    interface TransferData {
      /**
       * The amount transferred to the destination account, if specified. By default, the entire charge amount is transferred to the destination account.
       */
      amount?: number;
    }
  }

  class ChargesResource {
    /**
     * To charge a credit card or other payment source, you create a Charge object. If your API key is in test mode, the supplied payment source (e.g., card) won't actually be charged, although everything else will occur as if in live mode. (Stripe assumes that the charge would have completed successfully).
     */
    create(
      params?: ChargeCreateParams,
      options?: HeaderOptions
    ): Promise<Charge>;

    /**
     * Returns a list of charges you've previously created. The charges are returned in sorted order, with the most recent charges appearing first.
     */
    list(
      params?: ChargeListParams,
      options?: HeaderOptions
    ): Promise<ApiList<Charge>>;

    /**
     * Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.
     */
    retrieve(
      id: string,
      params?: ChargeRetrieveParams,
      options?: HeaderOptions
    ): Promise<Charge>;

    /**
     * Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     */
    update(
      id: string,
      params?: ChargeUpdateParams,
      options?: HeaderOptions
    ): Promise<Charge>;

    /**
     * Capture the payment of an existing, uncaptured, charge. This is the second half of the two-step payment flow, where first you [created a charge](https://stripe.com/docs/api#create_charge) with the capture option set to false.
     *
     * Uncaptured payments expire exactly seven days after they are created. If they are not captured by that point in time, they will be marked as refunded and will no longer be capturable.
     */
    capture(
      id: string,
      params?: ChargeCaptureParams,
      options?: HeaderOptions
    ): Promise<Charge>;
  }
}