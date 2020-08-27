// File generated from our OpenAPI spec
declare module 'stripe' {
  namespace Stripe {
    /**
     * The CountrySpec object.
     */
    interface CountrySpec {
      /**
       * Unique identifier for the object. Represented as the ISO country code for this country.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'country_spec';

      /**
       * The default currency for this country. This applies to both payment methods and bank accounts.
       */
      default_currency: string;

      /**
       * Currencies that can be accepted in the specific country (for transfers).
       */
      supported_bank_account_currencies: {
        [key: string]: Array<string>;
      };

      /**
       * Currencies that can be accepted in the specified country (for payments).
       */
      supported_payment_currencies: Array<string>;

      /**
       * Payment methods available in the specified country. You may need to enable some payment methods (e.g., [ACH](https://stripe.com/docs/ach)) on your account before they appear in this list. The `stripe` payment method refers to [charging through your platform](https://stripe.com/docs/connect/destination-charges).
       */
      supported_payment_methods: Array<string>;

      /**
       * Countries that can accept transfers from the specified country.
       */
      supported_transfer_countries: Array<string>;

      verification_fields: CountrySpec.VerificationFields;
    }

    namespace CountrySpec {
      interface VerificationFields {
        company: VerificationFields.Company;

        individual: VerificationFields.Individual;
      }

      namespace VerificationFields {
        interface Company {
          /**
           * Additional fields which are only required for some users.
           */
          additional: Array<string>;

          /**
           * Fields which every account must eventually provide.
           */
          minimum: Array<string>;
        }

        interface Individual {
          /**
           * Additional fields which are only required for some users.
           */
          additional: Array<string>;

          /**
           * Fields which every account must eventually provide.
           */
          minimum: Array<string>;
        }
      }
    }

    interface CountrySpecRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface CountrySpecListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class CountrySpecsResource {
      /**
       * Returns a Country Spec for a given Country code.
       */
      retrieve(
        id: string,
        params?: CountrySpecRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.CountrySpec>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.CountrySpec>>;

      /**
       * Lists all Country Spec objects available in the API.
       */
      list(
        params?: CountrySpecListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.CountrySpec>;
      list(options?: RequestOptions): ApiListPromise<Stripe.CountrySpec>;
    }
  }
}
