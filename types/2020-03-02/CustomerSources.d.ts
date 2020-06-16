declare module 'stripe' {
  namespace Stripe {
    interface CustomerSourceCreateParams {
      /**
       * Please refer to full [documentation](https://stripe.com/docs/api) instead.
       */
      source: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam;
    }

    interface CustomerSourceRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface CustomerSourceUpdateParams {
      /**
       * The name of the person or business that owns the bank account.
       */
      account_holder_name?: string;

      /**
       * The type of entity that holds the account. This can be either `individual` or `company`.
       */
      account_holder_type?: CustomerSourceUpdateParams.AccountHolderType;

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

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam | null;

      /**
       * Cardholder name.
       */
      name?: string;

      owner?: CustomerSourceUpdateParams.Owner;
    }

    namespace CustomerSourceUpdateParams {
      type AccountHolderType = 'company' | 'individual';

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
          /**
           * City, district, suburb, town, or village.
           */
          city?: string;

          /**
           * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
           */
          country?: string;

          /**
           * Address line 1 (e.g., street, PO Box, or company name).
           */
          line1?: string;

          /**
           * Address line 2 (e.g., apartment, suite, unit, or building).
           */
          line2?: string;

          /**
           * ZIP or postal code.
           */
          postal_code?: string;

          /**
           * State, county, province, or region.
           */
          state?: string;
        }
      }
    }

    interface CustomerSourceListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Filter sources according to a particular object type.
       */
      object?: string;
    }

    interface CustomerSourceDeleteParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface CustomerSourceVerifyParams {
      /**
       * Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.
       */
      amounts?: Array<number>;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
