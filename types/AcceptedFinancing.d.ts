// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * This is an object representing financing that has been accepted by a merchant.
     */
    interface AcceptedFinancing {
      id: string;

      object: 'accepted_financing';

      accepted_advance_amount: number;

      accepted_at: number;

      accepted_premium_amount: number;

      accepted_withhold_rate: number;

      currency: string;

      financing_type: AcceptedFinancing.FinancingType;

      is_refill: boolean;

      merchant: string;

      state: string;
    }

    namespace AcceptedFinancing {
      type FinancingType = 'cash_advance' | 'flex_loan';
    }
  }
}
