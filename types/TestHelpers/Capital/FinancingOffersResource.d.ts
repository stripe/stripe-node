// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace TestHelpers {
      namespace Capital {
        interface FinancingOfferCreateParams {
          advance_amount: number;

          fee_amount: number;

          financing_type: FinancingOfferCreateParams.FinancingType;

          withhold_rate: number;

          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;

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
          advance_amount: number;

          fee_amount: number;

          financing_type: FinancingOfferRefillParams.FinancingType;

          withhold_rate: number;

          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;

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
