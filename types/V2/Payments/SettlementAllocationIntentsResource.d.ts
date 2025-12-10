// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Payments {
        interface SettlementAllocationIntentCreateParams {
          /**
           * The amount and currency of the SettlementAllocationIntent.
           */
          amount: SettlementAllocationIntentCreateParams.Amount;

          /**
           * Expected date when we expect to receive the funds.
           */
          expected_settlement_date: string;

          /**
           * FinancialAccount where the funds are expected to land / FinancialAccount to map this SettlementAllocationIntent to.
           */
          financial_account: string;

          /**
           * Reference for the settlement intent . Max 255 characters . The reference used by PSP to send funds to Stripe .
           */
          reference: string;

          /**
           * Metadata associated with the SettlementAllocationIntent.
           */
          metadata?: Stripe.MetadataParam;
        }

        namespace SettlementAllocationIntentCreateParams {
          interface Amount {
            /**
             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
             */
            value?: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency?: string;
          }
        }
      }

      namespace Payments {
        interface SettlementAllocationIntentRetrieveParams {}
      }

      namespace Payments {
        interface SettlementAllocationIntentUpdateParams {
          /**
           * The new amount for the SettlementAllocationIntent.
           */
          amount?: SettlementAllocationIntentUpdateParams.Amount;

          /**
           * The new reference for the SettlementAllocationIntent.
           */
          reference?: string;
        }

        namespace SettlementAllocationIntentUpdateParams {
          interface Amount {
            /**
             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
             */
            value?: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency?: string;
          }
        }
      }

      namespace Payments {
        interface SettlementAllocationIntentCancelParams {}
      }

      namespace Payments {
        interface SettlementAllocationIntentSubmitParams {}
      }

      namespace Payments {
        class SettlementAllocationIntentsResource {
          splits: Stripe.V2.Payments.SettlementAllocationIntents.SplitsResource;

          /**
           * Create SettlementAllocationIntent API.
           */
          create(
            params: SettlementAllocationIntentCreateParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.Payments.SettlementAllocationIntent>
          >;

          /**
           * Retrieve SettlementAllocationIntent API.
           */
          retrieve(
            id: string,
            params?: SettlementAllocationIntentRetrieveParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.Payments.SettlementAllocationIntent>
          >;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.Payments.SettlementAllocationIntent>
          >;

          /**
           * Update SettlementAllocationIntent API.
           */
          update(
            id: string,
            params?: SettlementAllocationIntentUpdateParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.Payments.SettlementAllocationIntent>
          >;

          /**
           * Cancel SettlementAllocationIntent API.
           */
          cancel(
            id: string,
            params?: SettlementAllocationIntentCancelParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.Payments.SettlementAllocationIntent>
          >;
          cancel(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.Payments.SettlementAllocationIntent>
          >;

          /**
           * Submit SettlementAllocationIntent API.
           */
          submit(
            id: string,
            params?: SettlementAllocationIntentSubmitParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.Payments.SettlementAllocationIntent>
          >;
          submit(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.Payments.SettlementAllocationIntent>
          >;
        }
      }
    }
  }
}
