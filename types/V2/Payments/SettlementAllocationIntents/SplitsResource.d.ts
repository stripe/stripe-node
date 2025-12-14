// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Payments {
        namespace SettlementAllocationIntents {
          interface SplitCreateParams {
            /**
             * The target account for settling the SettlementAllocationIntentSplit.
             */
            account: string;

            /**
             * The amount and currency of the SettlementAllocationIntentSplit.
             */
            amount: SplitCreateParams.Amount;

            /**
             * The type of the fund transfer.
             */
            type: SplitCreateParams.Type;

            /**
             * Metadata associated with the SettlementAllocationIntentSplit.
             */
            metadata?: Stripe.MetadataParam;
          }

          namespace SplitCreateParams {
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

            type Type = 'credit' | 'debit';
          }
        }
      }

      namespace Payments {
        namespace SettlementAllocationIntents {
          interface SplitRetrieveParams {}
        }
      }

      namespace Payments {
        namespace SettlementAllocationIntents {
          interface SplitCancelParams {}
        }
      }

      namespace Payments {
        namespace SettlementAllocationIntents {
          class SplitsResource {
            /**
             * Create SettlementAllocationIntentSplit API.
             */
            create(
              id: string,
              params: SplitCreateParams,
              options?: RequestOptions
            ): Promise<
              Stripe.Response<
                Stripe.V2.Payments.SettlementAllocationIntentSplit
              >
            >;

            /**
             * Retrieve SettlementAllocationIntentSplit API.
             */
            retrieve(
              settlementAllocationIntentId: string,
              id: string,
              params?: SplitRetrieveParams,
              options?: RequestOptions
            ): Promise<
              Stripe.Response<
                Stripe.V2.Payments.SettlementAllocationIntentSplit
              >
            >;
            retrieve(
              settlementAllocationIntentId: string,
              id: string,
              options?: RequestOptions
            ): Promise<
              Stripe.Response<
                Stripe.V2.Payments.SettlementAllocationIntentSplit
              >
            >;

            /**
             * Cancel SettlementAllocationIntentSplit API.
             */
            cancel(
              settlementAllocationIntentId: string,
              id: string,
              params?: SplitCancelParams,
              options?: RequestOptions
            ): Promise<
              Stripe.Response<
                Stripe.V2.Payments.SettlementAllocationIntentSplit
              >
            >;
            cancel(
              settlementAllocationIntentId: string,
              id: string,
              options?: RequestOptions
            ): Promise<
              Stripe.Response<
                Stripe.V2.Payments.SettlementAllocationIntentSplit
              >
            >;
          }
        }
      }
    }
  }
}
