// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace TestHelpers {
      namespace Capital {
        interface FinancingOfferCreateParams {
          /**
           * Amount of financing offered, in minor units. For example, 1,000 USD is represented as 100000.
           */
          advance_amount: number;

          /**
           * Fixed fee amount, in minor units. For example, 100 USD is represented as 10000.
           */
          fee_amount: number;

          /**
           * The type of financing offer.
           */
          financing_type: FinancingOfferCreateParams.FinancingType;

          /**
           * Per-transaction rate at which Stripe withholds funds to repay the financing.
           */
          withhold_rate: number;

          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;

          /**
           * The status of the financing offer.
           */
          status?: FinancingOfferCreateParams.Status;
        }

        namespace FinancingOfferCreateParams {
          type FinancingType = 'cash_advance' | 'fixed_term_loan' | 'flex_loan';

          type Status =
            | 'accepted'
            | 'accepted_other_offer'
            | 'canceled'
            | 'completed'
            | 'delivered'
            | 'expired'
            | 'fully_repaid'
            | 'paid_out'
            | 'rejected'
            | 'replaced'
            | 'undelivered';
        }
      }

      namespace Capital {
        interface FinancingOfferRefillParams {
          /**
           * Amount of financing offered, in minor units. For example, 1,000 USD is represented as 100000.
           */
          advance_amount: number;

          /**
           * Fixed fee amount, in minor units. For example, 100 USD is represented as 10000.
           */
          fee_amount: number;

          /**
           * The type of financing offer
           */
          financing_type: FinancingOfferRefillParams.FinancingType;

          /**
           * Per-transaction rate at which Stripe withholds funds to repay the financing.
           */
          withhold_rate: number;

          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;

          /**
           * The status of the financing offer
           */
          status?: FinancingOfferRefillParams.Status;
        }

        namespace FinancingOfferRefillParams {
          type FinancingType = 'cash_advance' | 'fixed_term_loan' | 'flex_loan';

          type Status =
            | 'accepted'
            | 'accepted_other_offer'
            | 'canceled'
            | 'completed'
            | 'delivered'
            | 'expired'
            | 'fully_repaid'
            | 'paid_out'
            | 'rejected'
            | 'replaced'
            | 'undelivered';
        }
      }

      namespace Capital {
        class FinancingOffersResource {
          /**
           * Creates a test financing offer for a connected account.
           */
          create(
            params: FinancingOfferCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Capital.FinancingOffer>>;

          /**
           * Refills a test financing offer for a connected account.
           */
          refill(
            id: string,
            params: FinancingOfferRefillParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Capital.FinancingOffer>>;
        }
      }
    }
  }
}
