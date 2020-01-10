declare module 'stripe' {
  namespace Stripe {
    interface ExternalAccountCreateParams {
      /**
       * Please refer to full [documentation](https://stripe.com/docs/api) instead.
       */
      external_account: string;

      /**
       * When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.
       */
      default_for_currency?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A set of key-value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.
       */
      metadata?: MetadataParam;
    }

    interface ExternalAccountRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ExternalAccountUpdateParams {
      /**
       * The name of the person or business that owns the bank account.
       */
      account_holder_name?: string;

      /**
       * The type of entity that holds the account. This can be either `individual` or `company`.
       */
      account_holder_type?: ExternalAccountUpdateParams.AccountHolderType | null;

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
       * When set to true, this becomes the default external account for its currency.
       */
      default_for_currency?: boolean;

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

      metadata?: MetadataParam;

      /**
       * Cardholder name.
       */
      name?: string;
    }

    namespace ExternalAccountUpdateParams {
      type AccountHolderType = 'company' | 'individual';
    }

    interface ExternalAccountListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ExternalAccountDeleteParams {}
  }
}
