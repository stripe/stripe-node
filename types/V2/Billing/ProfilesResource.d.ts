// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface ProfileCreateParams {
          /**
           * The ID of the customer object.
           */
          customer: string;

          /**
           * The ID of the payment method object.
           */
          default_payment_method?: string;

          /**
           * A customer-facing name for the billing profile.
           * Maximum length of 250 characters.
           */
          display_name?: string;

          /**
           * An internal key you can use to search for a particular billing profile. It must be unique among billing profiles for a given customer.
           * Maximum length of 200 characters.
           */
          lookup_key?: string;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;
        }
      }

      namespace Billing {
        interface ProfileRetrieveParams {}
      }

      namespace Billing {
        interface ProfileUpdateParams {
          /**
           * The ID of the payment method object.
           */
          default_payment_method?: string;

          /**
           * A customer-facing name for the billing profile.
           * Maximum length of 250 characters.
           * To remove the display_name from the object, set it to null in the request.
           */
          display_name?: string;

          /**
           * An internal key you can use to search for a particular billing profile. It must be unique among billing profiles for a given customer.
           * Maximum length of 200 characters.
           * To remove the lookup_key from the object, set it to null in the request.
           */
          lookup_key?: string;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;
        }
      }

      namespace Billing {
        interface ProfileListParams {
          /**
           * Filter billing profiles by lookup keys. Mutually exclusive
           * with `customer` and `default_payment_method`.
           * You can specify up to 10 lookup_keys.
           */
          lookup_keys: Array<string>;

          /**
           * Filter billing profiles by a customer. Mutually exclusive
           * with `lookup_keys` and `default_payment_method`.
           */
          customer?: string;

          /**
           * Filter billing profiles by a default payment method. Mutually exclusive
           * with `customer` and `lookup_keys`.
           */
          default_payment_method?: string;

          /**
           * Optionally set the maximum number of results per page. Defaults to 10.
           */
          limit?: number;

          /**
           * Filter billing profiles by status. Can be combined
           * with all other filters. If not provided, all billing profiles will be returned.
           */
          status?: ProfileListParams.Status;
        }

        namespace ProfileListParams {
          type Status = 'active' | 'inactive';
        }
      }

      namespace Billing {
        class ProfilesResource {
          /**
           * Create a BillingProfile object.
           */
          create(
            params: ProfileCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Profile>>;

          /**
           * Retrieve a BillingProfile object.
           */
          retrieve(
            id: string,
            params?: ProfileRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Profile>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Profile>>;

          /**
           * Update a BillingProfile object.
           */
          update(
            id: string,
            params?: ProfileUpdateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Profile>>;

          /**
           * List Billing Profiles.
           */
          list(
            params: ProfileListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.Profile>;
        }
      }
    }
  }
}
