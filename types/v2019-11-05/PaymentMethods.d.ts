declare namespace Stripe {
  /**
   * The PaymentMethod object.
   */
  interface PaymentMethod {
    billing_details?: BillingDetails;

    card?: Card;

    card_present?: CardPresent;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * The ID of the Customer to which this PaymentMethod is saved. This will not be set when the PaymentMethod has not been saved to a Customer.
     */
    customer?: string | Customer | null;

    /**
     * Unique identifier for the object.
     */
    id?: string;

    ideal?: Ideal;

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
    object?: 'payment_method';

    sepa_debit?: SepaDebit;

    /**
     * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
     */
    type?: PaymentMethod.Type;
  }

  namespace PaymentMethod {
    type Type = 'card' | 'card_present' | 'ideal' | 'sepa_debit'
  }

  /**
   * Creates a PaymentMethod object. Read the [Stripe.js reference](https://stripe.com/docs/stripe-js/reference#stripe-create-payment-method) to learn how to create PaymentMethods via Stripe.js.
   */
  interface PaymentMethodCreateParams {
    /**
     * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
     */
    billing_details?: PaymentMethodCreateParams.BillingDetails;

    /**
     * If this is a `card` PaymentMethod, this hash contains the user's card details. For backwards compatibility, you can alternatively provide a Stripe token (e.g., for Apple Pay, Amex Express Checkout, or legacy Checkout) into the card hash with format `card: {token: "tok_visa"}`. When creating with a card number, you must meet the requirements for [PCI compliance](https://stripe.com/docs/security#validating-pci-compliance). We strongly recommend using Stripe.js instead of interacting with this API directly.
     */
    card?: PaymentMethodCreateParams.Card1 | PaymentMethodCreateParams.Card2;

    /**
     * The `Customer` to whom the original PaymentMethod is attached.
     */
    customer?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
     */
    ideal?: PaymentMethodCreateParams.Ideal;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * The PaymentMethod to share.
     */
    payment_method?: string;

    /**
     * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
     */
    sepa_debit?: PaymentMethodCreateParams.SepaDebit;

    /**
     * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type. Required unless `payment_method` is specified (see the [Cloning PaymentMethods](https://stripe.com/docs/payments/payment-methods/connect#cloning-payment-methods) guide)
     */
    type?: PaymentMethodCreateParams.Type;
  }

  namespace PaymentMethodCreateParams {
    interface BillingDetails {
      /**
       * Billing address.
       */
      address?: BillingDetails.Address;

      /**
       * Email address.
       */
      email?: string;

      /**
       * Full name.
       */
      name?: string;

      /**
       * Billing phone number (including extension).
       */
      phone?: string;
    }

    namespace BillingDetails {
      interface Address {
        city?: string;

        country?: string;

        line1?: string;

        line2?: string;

        postal_code?: string;

        state?: string;
      }
    }

    interface Card1 {
      /**
       * The card's CVC. It is highly recommended to always include this value.
       */
      cvc?: string;

      /**
       * Two-digit number representing the card's expiration month.
       */
      exp_month: number;

      /**
       * Four-digit number representing the card's expiration year.
       */
      exp_year: number;

      /**
       * The card number, as a string without any separators.
       */
      number: string;
    }
    interface Card2 {
      token: string;
    }

    interface Ideal {
      /**
       * The customer's bank.
       */
      bank?: Ideal.Bank;
    }

    namespace Ideal {
      type Bank =
        | 'abn_amro'
        | 'asn_bank'
        | 'bunq'
        | 'handelsbanken'
        | 'ing'
        | 'knab'
        | 'moneyou'
        | 'rabobank'
        | 'regiobank'
        | 'sns_bank'
        | 'triodos_bank'
        | 'van_lanschot'
    }

    interface SepaDebit {
      iban: string;
    }

    type Type = 'card' | 'card_present' | 'ideal' | 'sepa_debit'
  }

  /**
   * Returns a list of PaymentMethods for a given Customer
   */
  interface PaymentMethodListParams {
    /**
     * The ID of the customer whose PaymentMethods will be retrieved.
     */
    customer: string;

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

    /**
     * A required filter on the list, based on the object `type` field.
     */
    type: PaymentMethodListParams.Type;
  }

  namespace PaymentMethodListParams {
    type Type = 'card' | 'card_present' | 'ideal' | 'sepa_debit'
  }

  /**
   * Retrieves a PaymentMethod object.
   */
  interface PaymentMethodRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates a PaymentMethod object. A PaymentMethod must be attached a customer to be updated.
   */
  interface PaymentMethodUpdateParams {
    /**
     * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
     */
    billing_details?: PaymentMethodUpdateParams.BillingDetails;

    card?: PaymentMethodUpdateParams.Card;

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

    sepa_debit?: PaymentMethodUpdateParams.SepaDebit;
  }

  namespace PaymentMethodUpdateParams {
    interface BillingDetails {
      /**
       * Billing address.
       */
      address?: BillingDetails.Address;

      /**
       * Email address.
       */
      email?: string;

      /**
       * Full name.
       */
      name?: string;

      /**
       * Billing phone number (including extension).
       */
      phone?: string;
    }

    namespace BillingDetails {
      interface Address {
        city?: string;

        country?: string;

        line1?: string;

        line2?: string;

        postal_code?: string;

        state?: string;
      }
    }

    interface Card {
      /**
       * Two-digit number representing the card's expiration month.
       */
      exp_month?: number;

      /**
       * Four-digit number representing the card's expiration year.
       */
      exp_year?: number;
    }

    interface SepaDebit {}
  }

  /**
   * Attaches a PaymentMethod object to a Customer.
   *
   * To use this PaymentMethod as the default for invoice or subscription payments,
   * set [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method),
   * on the Customer to the PaymentMethod's ID.
   */
  interface PaymentMethodAttachParams {
    /**
     * The ID of the customer to which to attach the PaymentMethod.
     */
    customer: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Detaches a PaymentMethod object from a Customer.
   */
  interface PaymentMethodDetachParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  class PaymentMethodsResource {
    /**
     * Creates a PaymentMethod object. Read the [Stripe.js reference](https://stripe.com/docs/stripe-js/reference#stripe-create-payment-method) to learn how to create PaymentMethods via Stripe.js.
     */
    create(
      params?: PaymentMethodCreateParams,
      options?: HeaderOptions
    ): Promise<PaymentMethod>;

    /**
     * Returns a list of PaymentMethods for a given Customer
     */
    list(
      params: PaymentMethodListParams,
      options?: HeaderOptions
    ): Promise<ApiList<PaymentMethod>>;

    /**
     * Retrieves a PaymentMethod object.
     */
    retrieve(
      id: string,
      params?: PaymentMethodRetrieveParams,
      options?: HeaderOptions
    ): Promise<PaymentMethod>;

    /**
     * Updates a PaymentMethod object. A PaymentMethod must be attached a customer to be updated.
     */
    update(
      id: string,
      params?: PaymentMethodUpdateParams,
      options?: HeaderOptions
    ): Promise<PaymentMethod>;

    /**
     * Attaches a PaymentMethod object to a Customer.
     *
     * To use this PaymentMethod as the default for invoice or subscription payments,
     * set [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method),
     * on the Customer to the PaymentMethod's ID.
     */
    attach(
      id: string,
      params: PaymentMethodAttachParams,
      options?: HeaderOptions
    ): Promise<PaymentMethod>;

    /**
     * Detaches a PaymentMethod object from a Customer.
     */
    detach(
      id: string,
      params?: PaymentMethodDetachParams,
      options?: HeaderOptions
    ): Promise<PaymentMethod>;
  }
}