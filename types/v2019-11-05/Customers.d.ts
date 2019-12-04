declare namespace Stripe {
  /**
   * The Customer object.
   */
  interface Customer {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'customer';

    /**
     * The customer's address.
     */
    address: Address | null;

    /**
     * Current balance, if any, being stored on the customer. If negative, the customer has credit to apply to their next invoice. If positive, the customer has an amount owed that will be added to their next invoice. The balance does not refer to any unpaid invoices; it solely takes into account amounts that have yet to be successfully applied to any invoice. This balance is only taken into account as invoices are finalized.
     */
    balance: number;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes.
     */
    currency: string | null;

    /**
     * ID of the default payment source for the customer.
     */
    default_source:
      | string
      | Account
      | AlipayAccount
      | BankAccount
      | BitcoinReceiver
      | Card
      | Source
      | null;

    deleted?: void;

    /**
     * When the customer's latest invoice is billed by charging automatically, delinquent is true if the invoice's latest charge is failed. When the customer's latest invoice is billed by sending an invoice, delinquent is true if the invoice is not paid by its due date.
     */
    delinquent: boolean | null;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description: string | null;

    /**
     * Describes the current discount active on the customer, if there is one.
     */
    discount: Discount | null;

    /**
     * The customer's email address.
     */
    email: string | null;

    /**
     * The prefix for the customer used to generate unique invoice numbers.
     */
    invoice_prefix: string | null;

    invoice_settings: Customer.InvoiceSettings;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: {
      [key: string]: string;
    };

    /**
     * The customer's full name or business name.
     */
    name: string | null;

    /**
     * The customer's phone number.
     */
    phone: string | null;

    /**
     * The customer's preferred locales (languages), ordered by preference.
     */
    preferred_locales: Array<string> | null;

    /**
     * Mailing and shipping address for the customer. Appears on invoices emailed to this customer.
     */
    shipping: Customer.Shipping | null;

    /**
     * The customer's payment sources, if any.
     */
    sources: ApiList<
      Account | AlipayAccount | BankAccount | BitcoinReceiver | Card | Source
    >;

    /**
     * The customer's current subscriptions, if any.
     */
    subscriptions: ApiList<Subscription>;

    /**
     * Describes the customer's tax exemption status. One of `none`, `exempt`, or `reverse`. When set to `reverse`, invoice and receipt PDFs include the text **"Reverse charge"**.
     */
    tax_exempt: Customer.TaxExempt | null;

    /**
     * The customer's tax IDs.
     */
    tax_ids: ApiList<TaxId>;

    /**
     * The customer's tax information. Appears on invoices emailed to this customer. This field has been deprecated and will be removed in a future API version, for further information view the [migration guide](https://stripe.com/docs/billing/migration/taxes#moving-from-taxinfo-to-customer-tax-ids).
     */
    tax_info: Customer.TaxInfo | null;

    /**
     * Describes the status of looking up the tax ID provided in `tax_info`. This field has been deprecated and will be removed in a future API version, for further information view the [migration guide](https://stripe.com/docs/billing/migration/taxes#moving-from-taxinfo-to-customer-tax-ids).
     */
    tax_info_verification: Customer.TaxInfoVerification | null;
  }

  namespace Customer {
    interface InvoiceSettings {
      /**
       * Default custom fields to be displayed on invoices for this customer.
       */
      custom_fields?: Array<InvoiceSettings.CustomField> | null;

      /**
       * ID of the default payment method used for subscriptions and invoices for the customer.
       */
      default_payment_method?: string | PaymentMethod | null;

      /**
       * Default footer to be displayed on invoices for this customer.
       */
      footer?: string | null;
    }

    namespace InvoiceSettings {
      interface CustomField {
        /**
         * The name of the custom field.
         */
        name: string;

        /**
         * The value of the custom field.
         */
        value: string;
      }
    }

    interface Shipping {
      address?: Address;

      /**
       * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
       */
      carrier?: string | null;

      /**
       * Recipient name.
       */
      name?: string | null;

      /**
       * Recipient phone (including extension).
       */
      phone?: string | null;

      /**
       * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
       */
      tracking_number?: string | null;
    }

    type TaxExempt = 'exempt' | 'none' | 'reverse'

    interface TaxInfo {
      /**
       * The customer's tax ID number.
       */
      tax_id?: string | null;

      /**
       * The type of ID number.
       */
      type: string;
    }

    interface TaxInfoVerification {
      /**
       * The state of verification for this customer. Possible values are `unverified`, `pending`, or `verified`.
       */
      status?: string | null;

      /**
       * The official name associated with the tax ID returned from the external provider.
       */
      verified_name?: string | null;
    }
  }

  interface DeletedCustomer {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'customer';

    /**
     * Always true for a deleted object
     */
    deleted: true;
  }

  /**
   * The CustomerBalanceTransaction object.
   */
  interface CustomerBalanceTransaction {
    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'customer_balance_transaction';

    /**
     * The amount of the transaction. A negative value is a credit for the customer's balance, and a positive value is a debit to the customer's `balance`.
     */
    amount?: number;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * The ID of the credit note (if any) related to the transaction.
     */
    credit_note?: string | CreditNote | null;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * The ID of the customer the transaction belongs to.
     */
    customer?: string | Customer | DeletedCustomer;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string | null;

    /**
     * The customer's `balance` after the transaction was applied. A negative value decreases the amount due on the customer's next invoice. A positive value increases the amount due on the customer's next invoice.
     */
    ending_balance?: number;

    /**
     * The ID of the invoice (if any) related to the transaction.
     */
    invoice?: string | Invoice | DeletedInvoice | null;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?:
      | {
        [key: string]: string;
      }
      | null;

    /**
     * Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_too_large`, `invoice_too_small`, `unapplied_from_invoice`, or `unspent_receiver_credit`. See the [Customer Balance page](https://stripe.com/docs/billing/customer/balance#types) to learn more about transaction types.
     */
    type?: CustomerBalanceTransaction.Type;
  }

  namespace CustomerBalanceTransaction {
    type Type =
      | 'adjustment'
      | 'applied_to_invoice'
      | 'credit_note'
      | 'initial'
      | 'invoice_too_large'
      | 'invoice_too_small'
      | 'migration'
      | 'unapplied_from_invoice'
      | 'unspent_receiver_credit'
  }

  /**
   * The TaxId object.
   */
  interface TaxId {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'tax_id';

    /**
     * Two-letter ISO code representing the country of the tax ID.
     */
    country: string | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * ID of the customer.
     */
    customer: string | Customer | DeletedCustomer;

    deleted?: void;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * Type of the tax ID, one of `au_abn`, `ch_vat`, `eu_vat`, `in_gst`, `mx_rfc`, `no_vat`, `nz_gst`, `za_vat`, or `unknown`
     */
    type: TaxId.Type;

    /**
     * Value of the tax ID.
     */
    value: string;

    verification: TaxId.Verification;
  }

  namespace TaxId {
    type Type =
      | 'au_abn'
      | 'ch_vat'
      | 'eu_vat'
      | 'in_gst'
      | 'mx_rfc'
      | 'no_vat'
      | 'nz_gst'
      | 'unknown'
      | 'za_vat'

    interface Verification {
      /**
       * Verification status, one of `pending`, `unavailable`, `unverified`, or `verified`.
       */
      status: Verification.Status;

      /**
       * Verified address.
       */
      verified_address?: string | null;

      /**
       * Verified name.
       */
      verified_name?: string | null;
    }

    namespace Verification {
      type Status = 'pending' | 'unavailable' | 'unverified' | 'verified'
    }
  }interface DeletedTaxId {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'tax_id';

    /**
     * Always true for a deleted object
     */
    deleted: true;
  }

  /**
   * Creates a new customer object.
   */
  interface CustomerCreateParams {
    /**
     * The customer's address.
     */
    address?: '' | CustomerCreateParams.Address;

    /**
     * An integer amount in %s that represents the customer's current balance, which affect the customer's future invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.
     */
    balance?: number;

    coupon?: string;

    /**
     * An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.
     */
    description?: string;

    /**
     * Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to *512 characters*.
     */
    email?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
     */
    invoice_prefix?: string;

    /**
     * Default invoice settings for this customer.
     */
    invoice_settings?: CustomerCreateParams.InvoiceSettings;

    /**
     * A set of key-value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * The customer's full name or business name.
     */
    name?: string;

    payment_method?: string;

    /**
     * The customer's phone number.
     */
    phone?: string;

    /**
     * Customer's preferred languages, ordered by preference.
     */
    preferred_locales?: Array<string>;

    /**
     * The customer's shipping information. Appears on invoices emailed to this customer.
     */
    shipping?: '' | CustomerCreateParams.Shipping;

    source?: string;

    /**
     * The customer's tax exemption. One of `none`, `exempt`, or `reverse`.
     */
    tax_exempt?: '' | CustomerCreateParams.TaxExempt;

    /**
     * The customer's tax IDs.
     */
    tax_id_data?: Array<CustomerCreateParams.TaxIdDatum>;

    /**
     * The customer's tax information. Appears on invoices emailed to this customer. This parameter has been deprecated and will be removed in a future API version, for further information view the [migration guide](https://stripe.com/docs/billing/migration/taxes#moving-from-taxinfo-to-customer-tax-ids).
     */
    tax_info?: CustomerCreateParams.TaxInfo;
  }

  namespace CustomerCreateParams {
    interface Address {
      city?: string;

      country?: string;

      line1: string;

      line2?: string;

      postal_code?: string;

      state?: string;
    }

    interface InvoiceSettings {
      /**
       * Default custom fields to be displayed on invoices for this customer. When updating, pass an empty string to remove previously-defined fields.
       */
      custom_fields?: '' | InvoiceSettings.CustomFields;

      /**
       * ID of the default payment method used for subscriptions and invoices for the customer.
       */
      default_payment_method?: string;

      /**
       * Default footer to be displayed on invoices for this customer.
       */
      footer?: string;
    }

    namespace InvoiceSettings {
      interface CustomFields {
        /**
         * The name of the custom field. This may be up to 30 characters.
         */
        name: string;

        /**
         * The value of the custom field. This may be up to 30 characters.
         */
        value: string;
      }
    }

    interface Shipping {
      /**
       * Customer shipping address.
       */
      address: Shipping.Address;

      /**
       * Customer name.
       */
      name: string;

      /**
       * Customer phone (including extension).
       */
      phone?: string;
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

    type TaxExempt = 'exempt' | 'none' | 'reverse'

    interface TaxIdDatum {
      /**
       * Type of the tax ID, one of `au_abn`, `ch_vat`, `eu_vat`, `in_gst`, `mx_rfc`, `no_vat`, `nz_gst`, or `za_vat`
       */
      type: TaxIdDatum.Type;

      /**
       * Value of the tax ID.
       */
      value: string;
    }

    namespace TaxIdDatum {
      type Type =
        | 'au_abn'
        | 'ch_vat'
        | 'eu_vat'
        | 'in_gst'
        | 'mx_rfc'
        | 'no_vat'
        | 'nz_gst'
        | 'za_vat'
    }

    interface TaxInfo {
      /**
       * The customer's tax ID number.
       */
      tax_id: string;

      /**
       * The type of ID number. The only possible value is `vat`
       */
      type: 'vat';
    }
  }

  /**
   * Retrieves the details of an existing customer. You need only supply the unique customer identifier that was returned upon customer creation.
   */
  interface CustomerRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates the specified customer by setting the values of the parameters passed. Any parameters not provided will be left unchanged. For example, if you pass the source parameter, that becomes the customer's active source (e.g., a card) to be used for all charges in the future. When you update a customer to a new valid card source by passing the source parameter: for each of the customer's current subscriptions, if the subscription bills automatically and is in the past_due state, then the latest open invoice for the subscription with automatic collection enabled will be retried. This retry will not count as an automatic retry, and will not affect the next regularly scheduled payment for the invoice. Changing the default_source for a customer will not trigger this behavior.
   *
   * This request accepts mostly the same arguments as the customer creation call.
   */
  interface CustomerUpdateParams {
    /**
     * The customer's address.
     */
    address?: '' | CustomerUpdateParams.Address;

    /**
     * An integer amount in %s that represents the customer's current balance, which affect the customer's future invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.
     */
    balance?: number;

    coupon?: string;

    /**
     * Provide the ID of a payment source already attached to this customer to make it this customer's default payment source. If you want to add a new payment source and make it the default, see the [source](https://stripe.com/docs/api/customers/update#update_customer-source) property.
     */
    default_source?: string;

    /**
     * An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.
     */
    description?: string;

    /**
     * Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to *512 characters*.
     */
    email?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
     */
    invoice_prefix?: string;

    /**
     * Default invoice settings for this customer.
     */
    invoice_settings?: CustomerUpdateParams.InvoiceSettings;

    /**
     * A set of key-value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * The customer's full name or business name.
     */
    name?: string;

    /**
     * The customer's phone number.
     */
    phone?: string;

    /**
     * Customer's preferred languages, ordered by preference.
     */
    preferred_locales?: Array<string>;

    /**
     * The customer's shipping information. Appears on invoices emailed to this customer.
     */
    shipping?: '' | CustomerUpdateParams.Shipping;

    source?: string;

    /**
     * The customer's tax exemption. One of `none`, `exempt`, or `reverse`.
     */
    tax_exempt?: '' | CustomerUpdateParams.TaxExempt;

    /**
     * The customer's tax information. Appears on invoices emailed to this customer. This parameter has been deprecated and will be removed in a future API version, for further information view the [migration guide](https://stripe.com/docs/billing/migration/taxes#moving-from-taxinfo-to-customer-tax-ids).
     */
    tax_info?: CustomerUpdateParams.TaxInfo;

    /**
     * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. This will always overwrite any trials that might apply via a subscribed plan. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value `now` can be provided to end the customer's trial immediately. Can be at most two years from `billing_cycle_anchor`.
     */
    trial_end?: 'now' | number;
  }

  namespace CustomerUpdateParams {
    interface Address {
      city?: string;

      country?: string;

      line1: string;

      line2?: string;

      postal_code?: string;

      state?: string;
    }

    interface InvoiceSettings {
      /**
       * Default custom fields to be displayed on invoices for this customer. When updating, pass an empty string to remove previously-defined fields.
       */
      custom_fields?: '' | InvoiceSettings.CustomFields;

      /**
       * ID of the default payment method used for subscriptions and invoices for the customer.
       */
      default_payment_method?: string;

      /**
       * Default footer to be displayed on invoices for this customer.
       */
      footer?: string;
    }

    namespace InvoiceSettings {
      interface CustomFields {
        /**
         * The name of the custom field. This may be up to 30 characters.
         */
        name: string;

        /**
         * The value of the custom field. This may be up to 30 characters.
         */
        value: string;
      }
    }

    interface Shipping {
      /**
       * Customer shipping address.
       */
      address: Shipping.Address;

      /**
       * Customer name.
       */
      name: string;

      /**
       * Customer phone (including extension).
       */
      phone?: string;
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

    type TaxExempt = 'exempt' | 'none' | 'reverse'

    interface TaxInfo {
      /**
       * The customer's tax ID number.
       */
      tax_id: string;

      /**
       * The type of ID number. The only possible value is `vat`
       */
      type: 'vat';
    }
  }

  /**
   * Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.
   */
  interface CustomerListParams {
    created?: number | CustomerListParams.Created;

    /**
     * A filter on the list based on the customer's `email` field. The value must be a string.
     */
    email?: string;

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
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  namespace CustomerListParams {
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
   * Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.
   */
  interface CustomerDeleteParams {}

  /**
   * Creates an immutable transaction that updates the customer's [balance](https://stripe.com/docs/api/customers/object#customer_object-balance).
   */
  interface CustomerCreateBalanceTransactionParams {
    /**
     * The integer amount in **%s** to apply to the customer's balance. Pass a negative amount to credit the customer's balance, and pass in a positive amount to debit the customer's balance.
     */
    amount: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). If the customer's [`currency`](https://stripe.com/docs/api/customers/object#customer_object-currency) is set, this value must match it. If the customer's `currency` is not set, it will be updated to this value.
     */
    currency: string;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;

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
  }

  /**
   * When you create a new credit card, you must specify a customer or recipient on which to create it.
   *
   * If the card's owner has no default card, then the new card will become the default.
   * However, if the owner already has a default, then it will not change.
   * To change the default, you should [update the customer](https://stripe.com/docs/api#update_customer) to have a new default_source.
   */
  interface CustomerCreateSourceParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A set of key-value pairs that you can attach to a card object. It can be useful for storing additional information about the card in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * Please refer to full [documentation](https://stripe.com/docs/api) instead.
     */
    source: string;
  }

  /**
   * Creates a new TaxID object for a customer.
   */
  interface CustomerCreateTaxIdParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Type of the tax ID, one of `au_abn`, `ch_vat`, `eu_vat`, `in_gst`, `mx_rfc`, `no_vat`, `nz_gst`, or `za_vat`
     */
    type: CustomerCreateTaxIdParams.Type;

    /**
     * Value of the tax ID.
     */
    value: string;
  }

  namespace CustomerCreateTaxIdParams {
    type Type =
      | 'au_abn'
      | 'ch_vat'
      | 'eu_vat'
      | 'in_gst'
      | 'mx_rfc'
      | 'no_vat'
      | 'nz_gst'
      | 'za_vat'
  }

  /**
   * Removes the currently applied discount on a customer.
   */
  interface CustomerDeleteDiscountParams {}

  /**
   * Delete a specified source for a given customer.
   */
  interface CustomerDeleteSourceParams {}

  /**
   * Deletes an existing TaxID object.
   */
  interface CustomerDeleteTaxIdParams {}

  /**
   * Returns a list of transactions that updated the customer's [balance](https://stripe.com/docs/api/customers/object#customer_object-balance).
   */
  interface CustomerListBalanceTransactionsParams {
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
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  /**
   * List sources for a specified customer.
   */
  interface CustomerListSourcesParams {
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
     * Filter sources according to a particular object type.
     */
    object?: string;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  /**
   * Returns a list of tax IDs for a customer.
   */
  interface CustomerListTaxIdsParams {
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
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  /**
   * Retrieves a specific transaction that updated the customer's [balance](https://stripe.com/docs/api/customers/object#customer_object-balance).
   */
  interface CustomerRetrieveBalanceTransactionParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Retrieve a specified source for a given customer.
   */
  interface CustomerRetrieveSourceParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Retrieves the TaxID object with the given identifier.
   */
  interface CustomerRetrieveTaxIdParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Most customer balance transaction fields are immutable, but you may update its description and metadata.
   */
  interface CustomerUpdateBalanceTransactionParams {
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;

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
  }

  /**
   * Update a specified source for a given customer.
   */
  interface CustomerUpdateSourceParams {
    /**
     * The name of the person or business that owns the bank account.
     */
    account_holder_name?: string;

    /**
     * The type of entity that holds the account. This can be either `individual` or `company`.
     */
    account_holder_type?: CustomerUpdateSourceParams.AccountHolderType;

    /**
     * City/District/Suburb/Town/Village.
     */
    address_city?: string;

    /**
     * Billing address country, if provided when creating card.
     */
    address_country?: string;

    /**
     * Address line 1 (Street address/PO Box/Company name).
     */
    address_line1?: string;

    /**
     * Address line 2 (Apartment/Suite/Unit/Building).
     */
    address_line2?: string;

    /**
     * State/County/Province/Region.
     */
    address_state?: string;

    /**
     * ZIP or postal code.
     */
    address_zip?: string;

    /**
     * Two digit number representing the card's expiration month.
     */
    exp_month?: string;

    /**
     * Four digit number representing the card's expiration year.
     */
    exp_year?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    metadata?: {
      [key: string]: string;
    };

    /**
     * Cardholder name.
     */
    name?: string;

    owner?: CustomerUpdateSourceParams.Owner;
  }

  namespace CustomerUpdateSourceParams {
    type AccountHolderType = 'company' | 'individual'

    interface Owner {
      /**
       * Owner's address.
       */
      address?: Owner.Address;

      /**
       * Owner's email address.
       */
      email?: string;

      /**
       * Owner's full name.
       */
      name?: string;

      /**
       * Owner's phone number.
       */
      phone?: string;
    }

    namespace Owner {
      interface Address {
        city?: string;

        country?: string;

        line1?: string;

        line2?: string;

        postal_code?: string;

        state?: string;
      }
    }
  }

  /**
   * Verify a specified bank account for a given customer.
   */
  interface CustomerVerifySourceParams {
    /**
     * Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.
     */
    amounts?: Array<number>;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  class CustomersResource {
    /**
     * Creates a new customer object.
     */
    create(
      params?: CustomerCreateParams,
      options?: RequestOptions
    ): Promise<Customer>;
    create(options?: RequestOptions): Promise<Customer>;

    /**
     * Retrieves the details of an existing customer. You need only supply the unique customer identifier that was returned upon customer creation.
     */
    retrieve(
      id: string,
      params?: CustomerRetrieveParams,
      options?: RequestOptions
    ): Promise<Customer>;
    retrieve(id: string, options?: RequestOptions): Promise<Customer>;

    /**
     * Updates the specified customer by setting the values of the parameters passed. Any parameters not provided will be left unchanged. For example, if you pass the source parameter, that becomes the customer's active source (e.g., a card) to be used for all charges in the future. When you update a customer to a new valid card source by passing the source parameter: for each of the customer's current subscriptions, if the subscription bills automatically and is in the past_due state, then the latest open invoice for the subscription with automatic collection enabled will be retried. This retry will not count as an automatic retry, and will not affect the next regularly scheduled payment for the invoice. Changing the default_source for a customer will not trigger this behavior.
     *
     * This request accepts mostly the same arguments as the customer creation call.
     */
    update(
      id: string,
      params?: CustomerUpdateParams,
      options?: RequestOptions
    ): Promise<Customer>;

    /**
     * Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.
     */
    list(
      params?: CustomerListParams,
      options?: RequestOptions
    ): ApiListPromise<Customer>;
    list(options?: RequestOptions): ApiListPromise<Customer>;

    /**
     * Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.
     */
    del(
      id: string,
      params?: CustomerDeleteParams,
      options?: RequestOptions
    ): Promise<DeletedCustomer>;
    del(id: string, options?: RequestOptions): Promise<DeletedCustomer>;

    /**
     * Creates an immutable transaction that updates the customer's [balance](https://stripe.com/docs/api/customers/object#customer_object-balance).
     */
    createBalanceTransaction(
      id: string,
      params: CustomerCreateBalanceTransactionParams,
      options?: RequestOptions
    ): Promise<CustomerBalanceTransaction>;

    /**
     * When you create a new credit card, you must specify a customer or recipient on which to create it.
     *
     * If the card's owner has no default card, then the new card will become the default.
     * However, if the owner already has a default, then it will not change.
     * To change the default, you should [update the customer](https://stripe.com/docs/api#update_customer) to have a new default_source.
     */
    createSource(
      id: string,
      params: CustomerCreateSourceParams,
      options?: RequestOptions
    ): Promise<
      Account | AlipayAccount | BankAccount | BitcoinReceiver | Card | Source
    >;

    /**
     * Creates a new TaxID object for a customer.
     */
    createTaxId(
      id: string,
      params: CustomerCreateTaxIdParams,
      options?: RequestOptions
    ): Promise<TaxId>;

    /**
     * Removes the currently applied discount on a customer.
     */
    deleteDiscount(
      id: string,
      params?: CustomerDeleteDiscountParams,
      options?: RequestOptions
    ): Promise<DeletedDiscount>;
    deleteDiscount(
      id: string,
      options?: RequestOptions
    ): Promise<DeletedDiscount>;

    /**
     * Delete a specified source for a given customer.
     */
    deleteSource(
      customerId: string,
      id: string,
      params?: CustomerDeleteSourceParams,
      options?: RequestOptions
    ): Promise<
      Account | AlipayAccount | BankAccount | BitcoinReceiver | Card | Source
    >;
    deleteSource(
      customerId: string,
      id: string,
      options?: RequestOptions
    ): Promise<
      Account | AlipayAccount | BankAccount | BitcoinReceiver | Card | Source
    >;

    /**
     * Deletes an existing TaxID object.
     */
    deleteTaxId(
      customerId: string,
      id: string,
      params?: CustomerDeleteTaxIdParams,
      options?: RequestOptions
    ): Promise<DeletedTaxId>;
    deleteTaxId(
      customerId: string,
      id: string,
      options?: RequestOptions
    ): Promise<DeletedTaxId>;

    /**
     * Returns a list of transactions that updated the customer's [balance](https://stripe.com/docs/api/customers/object#customer_object-balance).
     */
    listBalanceTransactions(
      id: string,
      params?: CustomerListBalanceTransactionsParams,
      options?: RequestOptions
    ): ApiListPromise<CustomerBalanceTransaction>;
    listBalanceTransactions(
      id: string,
      options?: RequestOptions
    ): ApiListPromise<CustomerBalanceTransaction>;

    /**
     * List sources for a specified customer.
     */
    listSources(
      id: string,
      params?: CustomerListSourcesParams,
      options?: RequestOptions
    ): ApiListPromise<
      Account | AlipayAccount | BankAccount | BitcoinReceiver | Card | Source
    >;
    listSources(
      id: string,
      options?: RequestOptions
    ): ApiListPromise<
      Account | AlipayAccount | BankAccount | BitcoinReceiver | Card | Source
    >;

    /**
     * Returns a list of tax IDs for a customer.
     */
    listTaxIds(
      id: string,
      params?: CustomerListTaxIdsParams,
      options?: RequestOptions
    ): ApiListPromise<TaxId>;
    listTaxIds(id: string, options?: RequestOptions): ApiListPromise<TaxId>;

    /**
     * Retrieves a specific transaction that updated the customer's [balance](https://stripe.com/docs/api/customers/object#customer_object-balance).
     */
    retrieveBalanceTransaction(
      customerId: string,
      id: string,
      params?: CustomerRetrieveBalanceTransactionParams,
      options?: RequestOptions
    ): Promise<CustomerBalanceTransaction>;
    retrieveBalanceTransaction(
      customerId: string,
      id: string,
      options?: RequestOptions
    ): Promise<CustomerBalanceTransaction>;

    /**
     * Retrieve a specified source for a given customer.
     */
    retrieveSource(
      customerId: string,
      id: string,
      params?: CustomerRetrieveSourceParams,
      options?: RequestOptions
    ): Promise<
      Account | AlipayAccount | BankAccount | BitcoinReceiver | Card | Source
    >;
    retrieveSource(
      customerId: string,
      id: string,
      options?: RequestOptions
    ): Promise<
      Account | AlipayAccount | BankAccount | BitcoinReceiver | Card | Source
    >;

    /**
     * Retrieves the TaxID object with the given identifier.
     */
    retrieveTaxId(
      customerId: string,
      id: string,
      params?: CustomerRetrieveTaxIdParams,
      options?: RequestOptions
    ): Promise<TaxId>;
    retrieveTaxId(
      customerId: string,
      id: string,
      options?: RequestOptions
    ): Promise<TaxId>;

    /**
     * Most customer balance transaction fields are immutable, but you may update its description and metadata.
     */
    updateBalanceTransaction(
      customerId: string,
      id: string,
      params?: CustomerUpdateBalanceTransactionParams,
      options?: RequestOptions
    ): Promise<CustomerBalanceTransaction>;

    /**
     * Update a specified source for a given customer.
     */
    updateSource(
      customerId: string,
      id: string,
      params?: CustomerUpdateSourceParams,
      options?: RequestOptions
    ): Promise<Card | BankAccount | Source>;
    updateSource(
      customerId: string,
      id: string,
      options?: RequestOptions
    ): Promise<Card | BankAccount | Source>;

    /**
     * Verify a specified bank account for a given customer.
     */
    verifySource(
      customerId: string,
      id: string,
      params?: CustomerVerifySourceParams,
      options?: RequestOptions
    ): Promise<BankAccount>;
    verifySource(
      customerId: string,
      id: string,
      options?: RequestOptions
    ): Promise<BankAccount>;
  }
}