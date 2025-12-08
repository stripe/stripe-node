// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface BalanceTransferCreateParams {
      /**
       * A positive integer representing how much to transfer in the smallest currency unit.
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: BalanceTransferCreateParams.Currency;

      /**
       * The balance to which funds are transferred.
       */
      destination_balance: BalanceTransferCreateParams.DestinationBalance;

      /**
       * The balance from which funds are transferred, including details specific to the balance you choose.
       */
      source_balance: BalanceTransferCreateParams.SourceBalance;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;
    }

    namespace BalanceTransferCreateParams {
      type Currency = 'eur' | 'gbp' | 'usd';

      interface DestinationBalance {
        /**
         * Destination balance type to push funds into for the Balance Transfer.
         */
        type: DestinationBalance.Type;
      }

      namespace DestinationBalance {
        type Type = 'issuing' | 'payments';
      }

      interface SourceBalance {
        allocated_funds?: SourceBalance.AllocatedFunds;

        /**
         * Source balance type to pull funds from for the Balance Transfer.
         */
        type: SourceBalance.Type;
      }

      namespace SourceBalance {
        interface AllocatedFunds {
          /**
           * The charge ID that the funds are originally sourced from. Required if `type` is `charge`.
           */
          charge: string;

          /**
           * The type of object that the funds are originally sourced from. One of `charge`.
           */
          type: 'charge';
        }

        type Type = 'allocated_funds' | 'issuing' | 'payments';
      }
    }

    class BalanceTransfersResource {
      /**
       * Creates a balance transfer. For Issuing use cases, funds will be debited immediately from the source balance and credited to the destination balance immediately (if your account is based in the US) or next-business-day (if your account is based in the EU). For Segregated Separate Charges and Transfers use cases, funds will be debited immediately from the source balance and credited immediately to the destination balance.
       */
      create(
        params: BalanceTransferCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.BalanceTransfer>>;
    }
  }
}
