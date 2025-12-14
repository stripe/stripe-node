// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Payments {
        interface SettlementAllocationIntentCreateParams {
          /**
           * The amount and currency of the SettlementAllocationIntent. Allowed Currencies are `gbp` | `eur`.
           */
          amount: SettlementAllocationIntentCreateParams.Amount;

          /**
           * Date when we expect to receive the funds. Must be in future .
           */
          expected_settlement_date: string;

          /**
           * Financial Account Id where the funds are expected for this SettlementAllocationIntent.
           */
          financial_account: string;

          /**
           * Reference for the SettlementAllocationIntent. This should be same as the transaction reference used by payments processor to send funds to Stripe. Must have length between 5 and 255 characters and it must be unique among existing SettlementAllocationIntents that have a non-terminal status (`pending`, `submitted`, `matched`, `errored`).
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
           * The new amount for the SettlementAllocationIntent. Only amount.value can be updated and currency must remain same.
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
           * Create a new SettlementAllocationIntent.
           */
          create(
            params: SettlementAllocationIntentCreateParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.Payments.SettlementAllocationIntent>
          >;

          /**
           * Retrieve an existing SettlementAllocationIntent.
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
           * Updates SettlementAllocationIntent. Only SettlementAllocationIntent with status `pending`, `submitted` and `errored` can be updated. Only amount and reference fields can be updated for a SettlementAllocationIntent and at least one must be present. Updating an `amount` moves the SettlementAllocationIntent `pending` status and updating the `reference` for `errored` SettlementAllocationIntent moves it to `submitted`.
           */
          update(
            id: string,
            params?: SettlementAllocationIntentUpdateParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.Payments.SettlementAllocationIntent>
          >;

          /**
           * Cancels an existing SettlementAllocationIntent. Only SettlementAllocationIntent with status `pending`, `submitted` and `errored` can be `canceled`.
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
           * Submits a SettlementAllocationIntent. Only SettlementAllocationIntent with status `pending` can be `submitted`. The net sum of SettlementAllocationIntentSplit amount must be equal to SettlementAllocationIntent amount to be eligible to be submitted.
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
