// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Capital {
      /**
       * This is an object representing an offer of financing from
       * Stripe Capital to a Connect subaccount.
       */
      interface FinancingOffer {
        /**
         * A unique identifier for the financing object.
         */
        id: string;

        /**
         * The object type: financing_offer.
         */
        object: 'capital.financing_offer';

        /**
         * This is an object representing the terms of an offer of financing from
         * Stripe Capital to a Connected account. This resource represents
         * the terms accepted by the Connected account, which may differ from those
         * offered.
         */
        accepted_terms?: FinancingOffer.AcceptedTerms;

        /**
         * The ID of the merchant associated with this financing object.
         */
        account: string;

        /**
         * The time at which this financing offer was charged off, if applicable. Given in seconds since unix epoch.
         */
        charged_off_at?: number;

        /**
         * Time at which the offer was created. Given in seconds since unix epoch.
         */
        created: number;

        /**
         * Time at which the offer expires. Given in seconds since unix epoch.
         */
        expires_after: number;

        /**
         * The type of financing being offered.
         */
        financing_type?: FinancingOffer.FinancingType;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: Stripe.Metadata;

        /**
         * This is an object representing the terms of an offer of financing from
         * Stripe Capital to a Connected account. This resource represents
         * both the terms offered to the Connected account.
         */
        offered_terms?: FinancingOffer.OfferedTerms;

        /**
         * Financing product identifier.
         */
        product_type?: FinancingOffer.ProductType;

        /**
         * The ID of the financing offer that replaced this offer.
         */
        replacement?: string;

        /**
         * The ID of the financing offer that this offer is a replacement for.
         */
        replacement_for?: string;

        /**
         * The current status of the offer.
         */
        status: FinancingOffer.Status;

        /**
         * See [financing_type](https://stripe.com/docs/api/capital/connect_financing_object#financing_offer_object-financing_type).
         */
        type?: FinancingOffer.Type;
      }

      namespace FinancingOffer {
        interface AcceptedTerms {
          /**
           * Amount of financing offered, in minor units.
           */
          advance_amount: number;

          /**
           * Currency that the financing offer is transacted in. For example, `usd`.
           */
          currency: string;

          /**
           * Fixed fee amount, in minor units.
           */
          fee_amount: number;

          /**
           * Populated when the `product_type` of the `financingoffer` is `refill`.
           * Represents the discount amount on remaining premium for the existing loan at payout time.
           */
          previous_financing_fee_discount_amount: number | null;

          /**
           * Per-transaction rate at which Stripe will withhold funds to repay the financing.
           */
          withhold_rate: number;
        }

        type FinancingType = 'cash_advance' | 'flex_loan';

        interface OfferedTerms {
          /**
           * Amount of financing offered, in minor units.
           */
          advance_amount: number;

          /**
           * Describes the type of user the offer is being extended to.
           */
          campaign_type: OfferedTerms.CampaignType;

          /**
           * Currency that the financing offer is transacted in. For example, `usd`.
           */
          currency: string;

          /**
           * Fixed fee amount, in minor units.
           */
          fee_amount: number;

          /**
           * Populated when the `product_type` of the `financingoffer` is `refill`.
           * Represents the discount rate percentage on remaining fee on the existing loan. When the `financing_offer`
           * is paid out, the `previous_financing_fee_discount_amount` will be computed as the multiple of this rate
           * and the remaining fee.
           */
          previous_financing_fee_discount_rate: number | null;

          /**
           * Per-transaction rate at which Stripe will withhold funds to repay the financing.
           */
          withhold_rate: number;
        }

        namespace OfferedTerms {
          type CampaignType =
            | 'newly_eligible_user'
            | 'previously_eligible_user'
            | 'repeat_user';
        }

        type ProductType = 'refill' | 'standard';

        type Status =
          | 'accepted'
          | 'canceled'
          | 'completed'
          | 'delivered'
          | 'expired'
          | 'fully_repaid'
          | 'paid_out'
          | 'rejected'
          | 'replaced'
          | 'undelivered';

        type Type = 'cash_advance' | 'flex_loan';
      }
    }
  }
}
